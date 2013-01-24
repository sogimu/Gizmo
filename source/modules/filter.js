(function(gizmo) {
    /**
     * Модуль для введения "фильтра" проверяющих соответствие переданной переменной её типу
     *
     * @constructor
     * @param {object} O
     * @this {gizmo.Filter}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Фильтр для проверки соответсвия типа переменной типу String. Если переменная соответсвует типу, то метод возвращает её,
     * если нет, то выбрасывает исключение с текстом ошибки
     *
     * @param {object} O Переменная для проверки
     * @param {string} type Требуемый тип
     * @return {object} O or error throw
     */
	var Filter = function(O, type) {
		if(gizmo.isSet(O) && gizmo.itIs(type, O) === true && isType(type)) {
		  return O
		}else {
		  throw TypeError(gizmo.typeIs(O) + " != " + type);
		}
	};
	var isType = function(O) {
		if(gizmo.itIs("String", O) === true) {
		  var flag = true;
		  for(var i in gizmo._types) {
			if(O === gizmo._types[i]) {
			  flag = false;
			  break
			}
		  }
		  return flag
		}else {
		  throw TypeError(gizmo.typeIs(O) + " <- it's not name of type");
		}
	};
    gizmo.Filter = Filter;


    gizmo.Modules['Filters'] = {
        name: "Filters",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения \"фильтра\" проверяющих соответствие переданной переменной её типу"
    };

}(gizmo));