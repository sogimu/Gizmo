(function(gizmo) {
    /**
     * Модуль для введения методов проверки типа, для каждого типа.
     *
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Проверка соответствия переменной основым типам
     *
     * @param {object} O
     * @return {bool} true - соответствует, false - не соотвествует
     */
    gizmo.isTString = function(O)    { return gizmo.itIs(O,"String"  ); };
    gizmo.isTNumber = function(O)    { return gizmo.itIs(O,"Number"  ); };
    gizmo.isTBool = function(O)      { return gizmo.itIs(O,"Boolean" ); };
    gizmo.isTArray = function(O)     { return gizmo.itIs(O,"Array"   ); };
    gizmo.isTFunc = function(O)      { return gizmo.itIs(O,"Function"); };
    gizmo.isTDate = function(O)      { return gizmo.itIs(O,"Date"    ); };
    gizmo.isTRegExp = function(O)    { return gizmo.itIs(O,"RegExp"  ); };
    gizmo.isTObject = function(O)    { return gizmo.itIs(O,"Object"  ); };

    gizmo.Modules['Checks'] = {
        name: "Checks",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения методов проверки типа, для каждого типа"
    };

}(gizmo));