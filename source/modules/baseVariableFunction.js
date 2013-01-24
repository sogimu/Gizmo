(function(gizmo) {
    /**
     * * Простейшие провероки переменых на существование (isSet)
	 * * Проверка типа (itIs)
	 * * Получение типа (TypeIs)
	 * * Клонирование обекта (clone)
     *
     * @constructor
     * @param {object} O
     * @this {gizmo.isSet}
     * @this {gizmo.itIs}
     * @this {gizmo.typeIs}
     * @this {gizmo.clone}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Проверка существования переменной
     *
     * @param {object} obj
     */
	 var isSet = function(obj) {
		if(obj != undefined && obj != null) {
		  return true
		}else {
		  return false
		}
	  };
	 /**
     * Проверка типа переменной
     *
     * @param {string} type
     * @param {object} obj
     */
	var itIs = function(type, obj) {
		if(gizmo.isSet(obj)) {
		  var clas = Object.prototype.toString.call(obj).slice(8, -1);
		  return obj !== null && clas == type
		}else {
		  return false
		}
	};
    
	/**
     * Получение типа перменной
     *
     * @param {object} obj
     */
	var typeIs = function(obj) {
		var clas = {}.toString.call(obj).slice(8, -1);
		return clas
	};
	
    /**
     * Клонирование объекта
     *
     * @param {object} obj
     */	
	var clone = function clone(obj) {
		if(gizmo.typeIs(obj) !== "Array" && gizmo.typeIs(obj) !== "Object") {
		  return obj
		}
		var newObj = new obj.constructor;
		for(i in obj) {
		  if(obj[i] && obj.hasOwnProperty(i)) {
			if(gizmo.itIs("Object", obj[i])) {
			  newObj[i] = clone(obj[i])
			}else {
			  if(obj[i] && gizmo.itIs("Array", obj[i])) {
				newObj[i] = [].concat(obj[i])
			  }else {
				newObj[i] = obj[i]
			  }
			}
		  }
		}
		return newObj
	};
    gizmo.isSet = isSet;
    gizmo.itIs = itIs;
    gizmo.typeIs = typeIs;
    gizmo.clone = clone;

    gizmo.Modules['baseVariableFunction'] = {
        name: "Type",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения проверок переменых на существование, утинной типизации и т.д. "
    };

}(gizmo));