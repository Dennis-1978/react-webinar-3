import React, { useCallback, useEffect } from "react";

import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import TotalBasket from "./components/totalBasket";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const order = store.getState().order;
  const isBasketShow = store.getState().isBasketShow;
  const price = store.getState().totalPrice;

  const callbacks = {
    addToBasket: useCallback(
      (item) => {
        store.addToBasket(item);
      },
      [store]
    ),
    handleBasketShow: useCallback(() => {
      store.handleBasketShow();
    }, [store]),
    deleteOrderItem: useCallback(
      (code) => {
        store.deleteOrderItem(code);
      },
      [store]
    ),
  };

  // если корзина открыта и список заказов пуст - закрытие корзины
  useEffect(() => {
    if (isBasketShow && order.length === 0) {
      callbacks.handleBasketShow();
    }
  }, [order]);

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <Controls
          count={order.length}
          handleBasketShow={callbacks.handleBasketShow}
          price={price}
        />
        <List
          list={list}
          label="Добавить"
          addToBasket={callbacks.addToBasket}
        />
      </PageLayout>
      {isBasketShow && (
        <Modal
          head={
            <Head title="Корзина">
              <button onClick={() => callbacks.handleBasketShow()}>
                Закрытие
              </button>
            </Head>
          }
          list={
            <List
              list={order}
              deleteOrderItem={callbacks.deleteOrderItem}
              label="Удалить"
            />
          }
          total={<TotalBasket price={price} />}
        ></Modal>
      )}
    </>
  );
}

export default App;
