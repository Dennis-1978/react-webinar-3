/**
 * Получение множественной формы по склонениям
 * @param number
 */

const getNumberOfSelections = number => {
    const pluralRules = new Intl.PluralRules('ru-RU');

    const grammaticalNumber = pluralRules.select(number);
    const category = { one: 'раз', few: 'раза', many: 'раз' };

    return `${number} ${category[grammaticalNumber]}`;
};

export {getNumberOfSelections};