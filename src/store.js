import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния

    this.setState({
      ...this.state,
      order: [],
      isBasketShow: false,
    });
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Показывает(скрывает) модальное окно с корзиной заказов
   */
  handleBasketShow() {
    this.setState({
			...this.state,
      isBasketShow: !this.state.isBasketShow,
    });
  }

  /**
   * Добавление товара в корзину
   * @param item {Object} Выбранный для добавления товар
   */
  addToBasket(item) {
    // проверяем был ли уже добавлен такой товар
    const indexItem = this.state.order.findIndex(
      (orderItem) => orderItem.code === item.code
    );

    if (indexItem < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      this.setState({ ...this.state, order: [...this.state.order, newItem] });
    } else {
      const newOrder = this.state.order.map((orderItem, index) => {
        if (indexItem === index) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      this.setState({
        ...this.state,
        order: [...newOrder],
      });
    }
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter((item) => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
      }),
    });
  }
}

export default Store;
