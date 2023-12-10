import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      totalGoods: 0,
      limit: 10,
      skip: 0,
    };
  }

  changeSkip(skip) {
    this.setState({
      ...this.getState(),
      skip,
    });
  }

  async load() {
    const {limit, skip} = this.getState();

    const response = await fetch(
      `/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`
    );

    const json = await response.json();

    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        totalGoods: json.result.count,
      },
      "Загружены товары из АПИ"
    );
  }
}

export default Catalog;
