(function(gizmo) {

	/**
	 * Модуль добавляющий классы.
	 *
	 * @constructor
	 * @param {object} O
	 * @param {string} O.Initialize           Функция, являющаяся конструктором класса.
	 * @param {string} O.Extends              Класс-родитель. Класс от которого наследуем.
	 * @param {object} O.Methods              Функции, являющиеся методам класса.
	 * @param {object} O.Statics    		      Свойства класса.
   * @param {object} property
   * @param {object} property.checkingMode  Включить режим проверки соответсвия типа присваиваемого значения, типу заданному полю по умолчанию.
	 * @this {gizmo.Class}
	 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
	 * @version 0.1
	 */
 
  var Class = function(params, property) {
    var construct = params.Initialize || function() {
    };

    if(params.Extend) {
      var superClass = params.Extend;
      
      var newClass = function(O) {
        (function(O, self) {
          for(var i in O) {
            switch(gizmo.type(O[i])) {
              case "Array":
                self[i] = [].concat(O[i]);
                break;
              case "Object":
                self[i] = gizmo.clone(O[i]);
                break
            }
          }
        })(superClass.prototype, this);

        (function(O, self) {
        for(var i in O) {
          switch(gizmo.type(O[i])) {
            case "Array":
              self[i] = [].concat(O[i]);
              break;
            case "Object":
              self[i] = gizmo.clone(O[i]);
              break
            }
        }
        })(params.Statics || {}, this);

        (function(O, self) {
        for(var i in O) {
          self[i] = O[i];
        }
        })(params.Methods || {}, this);

        construct.call(this, O)
      };
      
      var f = function() {
      };
      f.prototype = superClass.prototype;
      newClass.prototype = new f;
      newClass.prototype.constructor = newClass;
      
      for(var m in superClass) {
        if(m == "prototype") {
          continue
        }
        var getter = superClass.__lookupGetter__(m), setter = superClass.__lookupSetter__(m);
        if(getter || setter) {
          if(getter) {
            newClass.__defineGetter__(m, getter)
          }
          if(setter) {
            newClass.__defineSetter__(m, setter)
          }
        }else {
          newClass[m] = superClass[m]
        }
      }
    } else {
      var newClass = function(O) {
        (function(O, self) {
          for(var i in O) {
            switch(gizmo.type(O[i])) {
              case "Array":
                self[i] = [].concat(O[i]);
                break;
              case "Object":
                self[i] = gizmo.clone(O[i]);
                break
              }
          }
        })(params.Statics || {}, this);

        (function(O, self) {
          for(var i in O) {
            self[i] = O[i];
          }
        })(params.Methods || {}, this);

        construct.call(this, O);
      };
    }

    var methods = params.Methods || {};
    for(var m in methods) {
      var getter = methods.__lookupGetter__(m), setter = methods.__lookupSetter__(m);
      if(getter || setter) {
        if(getter) {
          newClass.prototype.__defineGetter__(m, getter)
        }
        if(setter) {
          newClass.prototype.__defineSetter__(m, setter)
        }
      }else {
        newClass.prototype[m] = methods[m]
      }
    }

    var vars = params.Statics || {};
    if(gizmo.isSet(property) && gizmo.isSet(property.checkingMode)) {
      var mode = property.checkingMode
    }else {
      var mode = false
    }
    if(!mode) {
      for(var m in vars) {
        switch(gizmo.type(vars[m])) {
          case "Array":
            newClass.prototype[m] = [].concat(vars[m]);
            break;
          case "Object":
            newClass.prototype[m] = gizmo.clone(vars[m]);
            break;
          default:
            newClass.prototype[m] = vars[m]
        }
      }
    }else {
      for(var m in vars) {
        newClass.prototype["_" + m] = vars[m];
        getter = function(O) {
          var key = "_" + m;
          var value = vars[m];
          return function() {
            return gizmo.Filter(this[key], gizmo.type(value))
          }
        }(m);
        setter = function(O) {
          var key = "_" + m;
          var value = vars[m];
          return function(O) {
            this[key] = gizmo.Filter(O, gizmo.type(value))
          }
        }(m);
        newClass.prototype.__defineGetter__(m, getter);
        newClass.prototype.__defineSetter__(m, setter)
      }
    }
    return newClass
  };
  gizmo.Class = Class;  
  gizmo.Modules['Class'] = {
        name: "Class",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль добавляющий классы"
    };
	
}(gizmo));
