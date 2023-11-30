import React, { useCallback } from "react";

import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
	const list = store.getState().list;
	const order = store.getState().order;

	const callbacks = {
		addItem: useCallback(
			item => {
				store.addToBasket(item);
			},
			[store],
		),
	};

	return (
		<>
			<PageLayout>
				<Head title='Магазин' />
				<Controls />
				<List
					list={list}
					addToBasket={callbacks.addItem}
				/>
			</PageLayout>
		</>
	);
}

export default App;
