import React, { useCallback } from "react";

import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./modal";

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
  };

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <Controls
          count={order.length}
          handleBasketShow={callbacks.handleBasketShow}
          price={price}
        />
        <List list={list} addToBasket={callbacks.addToBasket} />
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
        />
      )}
    </>
  );
}

export default App;
