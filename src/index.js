/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
    let arr = [];
    for (let key in object) {
        arr.push(key);
    }
    return arr;
}


/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
    let arr = [];
    for (let value in object) {
        arr.push(object[value]);
    }
    return arr;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
    let arr = [];
    for (let entries in object) {
        arr.push([entries, object[entries]]);
    }
    return arr;

};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
    let obj = {}
    for (let item of entries) {
        obj[item[0]] = item[1]
    };
    return obj
};

