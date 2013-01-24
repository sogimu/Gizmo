(function(gizmo) {
    /**
     * Модуль для введения методов проверки типа, для каждого типа.
     *
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Провекра соответствия переменной основым типам
     *
     * @param {object} O
     * @return {bool} true - соответсвует, false - не соотвествует
     */
    gizmo.isTString = function(O)    { return gizmo.itIs("String",O  ); };
    gizmo.isTNumber = function(O)    { return gizmo.itIs("Number",O  ); };
    gizmo.isTBool = function(O)      { return gizmo.itIs("Boolean",O ); };
    gizmo.isTArray = function(O)     { return gizmo.itIs("Array",O   ); };
    gizmo.isTFunc = function(O)      { return gizmo.itIs("Function",O); };
    gizmo.isTDate = function(O)      { return gizmo.itIs("Date",O    ); };
    gizmo.isTRegExp = function(O)    { return gizmo.itIs("RegExp",O  ); };
    gizmo.isTObject = function(O)    { return gizmo.itIs("Object",O  ); };

    gizmo.Modules['Checks'] = {
        name: "Checks",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения методов проверки типа, для каждого типа"
    };

}(gizmo));