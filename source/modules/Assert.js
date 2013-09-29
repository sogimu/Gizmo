(function(gizmo) {
    /**
     * Модуль для проверки заданности переменной
     *
     * @constructor
     * @param {object} O
     * @this {gizmo.Assert}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Модуль для проверки заданности переменной
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

    gizmo.Assert = Assert;

    gizmo.Modules['Assert'] = {
        name: "Assert",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для проверки заданности переменной"
    };

}(gizmo));