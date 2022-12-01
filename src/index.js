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
        arr.push(`[${entries}, ${object[entries]}]`);
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

     return Object.fromEntries(entries)

//плохо работает
    // let arr = [];
    // for (let ent in entries) {
    //     arr.push(`[${ent}, ${entries[ent]}]`);
    // }
    // return {...arr};

    //тоже плохо работает
   //  let obj = {};
   //  for (let ent in entries) {
   //      obj[ent] = entries[ent]
   //  }
   //  return obj;

}

