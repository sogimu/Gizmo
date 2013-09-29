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
		if(gizmo.isSet(O) && gizmo.itIs(O,type) === true && isType(type)) {
		  return O
		}else {
		  throw TypeError(gizmo.type(O) + " != " + type);
		}
	};

	var isType = function(O) {
		if(gizmo.itIs(O,"String") === true) {
		  var flag = true;
		  for(var i in gizmo._types) {
			if(O === gizmo._types[i]) {
			  flag = false;
			  break
			}
		  }
		  return flag
		}else {
		  throw TypeError(gizmo.type(O) + " <- it's not name of type");
		}
	};

    var Assert = function(O) {
        if(gizmo.isSet(O)) {
            return O;
        } else {
          throw TypeError("Varibale is not been set!");
        }
    };

    gizmo.Filter = Filter;

    gizmo.Assert = Assert;

    gizmo.Modules['Filters'] = {
        name: "Filters",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения \"фильтра\" проверяющих соответствие переданной переменной её типу"
    };

}(gizmo));