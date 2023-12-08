import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
    this._apiBase = '/api/v1/articles?';
    this.limit = '';
    this.skip = '';
  }

  initState() {
    return {
      list: [],
      countGoods: 0
    }
  }

  async load() {
    const response = await fetch(`${this._apiBase}limit=${this.limit}&skip=${this.skip}&fields=items(_id, title, price),count`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
      countGoods: json.result.count
    }, 'Загружены товары из АПИ');
  }
}

export default Catalog;
