/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = "ru-RU") {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || "";
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = "ru-RU", options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}
/**
 * Изменяет вывод номеров страниц
 * @param current {Number} Номер текущей страницы
 * @param pages {Number} Итоговое количество страниц
 * @param func {Function} Функция возвращающая конечный массив
 * @returns {Object} Массив с измененными данными
 */
export function changePaginate(current, pages, func) {
  const array = [];
  for (let i = 1; i <= pages; i++) {
    array.push(i);
  }

  if (typeof current !== "number") return;

  let tempArray = [...array];

  if (current >= 1 && current < 3) {
    tempArray = [1, 2, 3, "...", array.length];
  } else if (current === 3) {
    const sliced = array.slice(0, 4);
    tempArray = [...sliced, "...", array.length];
  } else if (current >= 4 && current < array.length - 1) {
    const beforeToCurrent = array.slice(current - 2, current);
    const currentToAfter = array.slice(current, current + 1);
    tempArray = [
      1,
      "...",
      ...beforeToCurrent,
      ...currentToAfter,
      "...",
      array.length,
    ];
  } else {
    const sliced = array.slice(array.length - 3);
    tempArray = [1, "...", ...sliced];
  }

  return func(tempArray);
}
