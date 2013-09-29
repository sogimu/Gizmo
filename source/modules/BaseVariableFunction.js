(function(gizmo) {
    /**
     * * Простейшие провероки переменых на существование (isSet)
	 * * Проверка типа (itIs)
	 * * Получение типа (type)
	 * * Клонирование обекта (clone)
     *
     * @constructor
     * @param {object} O
     * @this {gizmo.isSet}
     * @this {gizmo.itIs}
     * @this {gizmo.type}
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
     * @param {object} obj
     * @param {string} type
     */
	var itIs = function(obj, type) {
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
	var type = function(obj) {
		var clas = {}.toString.call(obj).slice(8, -1);
		return clas
	};
	
    /**
     * Клонирование объекта
     *
     * @param {object} obj
     */	
	var clone = function clone(obj) {
		if(gizmo.type(obj) !== "Array" && gizmo.type(obj) !== "Object") {
		  return obj
		}
		var newObj = new obj.constructor;
		for(i in obj) {
		  if(obj[i] && obj.hasOwnProperty(i)) {
			if(gizmo.itIs(obj[i], "Object")) {
			  newObj[i] = clone(obj[i])
			}else {
			  if(obj[i] && gizmo.itIs(obj[i], "Array")) {
				newObj[i] = [].concat(obj[i])
			  }else {
				newObj[i] = obj[i]
			  }
			}
		  }
		}
		return newObj
	};

    /**
     * Функция для проверки заданности переменной
     *
     * @param {object} O Переменная для проверки
     * @return {object} O или исключение
     */

    var Assert = function(O) {
        if(gizmo.isSet(O)) {
            return O;
        } else {
          throw TypeError("Varibale is not been set!");
        }
    };
	
	/**
     * Функция для полученния глубого вложенного поля объекта
     *
     * @param {object} O    Объект
     * @param {string} path Путь к полю 
     * @return {object} поле или исключение
     */
    
    var GetField = function(O, path) {
    	gizmo.Filter(O, "Object");
    	gizmo.Filter(path, "String");

    	var pathNames = path.split(".");
        var dir = pathNames.shift();
        var field = gizmo.Assert( O[dir] );
        if(pathNames.length) {
	        while(dir = pathNames.shift()) {
	            field = gizmo.Assert( field[dir] );
	        }
    	}
    	return field;

    };

    gizmo.isSet = isSet;
    gizmo.itIs = itIs;
    gizmo.type = type;
    gizmo.clone = clone;
    gizmo.Assert = Assert;
    gizmo.GetField = GetField;

    gizmo.Modules['baseVariableFunction'] = {
        name: "Type",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения проверок переменых на существование, утинной типизации и т.д. "
    };

}(gizmo));