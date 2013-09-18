(function(gizmo) {
    /**
     * Модуль для введения методов реализующих сортировки.
     *
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    /**
     * Сортировка массива
     *
     * @param  {object} O
     * @param  {object} O.mas    Массив для сортировки
     * @param  {object} O.field  Поле в элементе по которому будет идти сортировка
     * @param  {object} O.target Цель сортировки ('>' или '<')
     * @return {array} отсортированный массив
     */
    gizmo.nativeSort = function(O) { // sort: naiveSort
        var mas = O.mas?O.mas:[];
        var target = O.target?O.target:'>';
        
        if(O.field) {
            gizmo.Assert( gizmo.GetField( mas[0], O.field) );
        
            if(target == '>') {
                mas.sort(function(a,b) {
                    var s1 = gizmo.GetField( a, O.field); 
                    var s2 = gizmo.GetField( b, O.field)
                    if(s1 > s2){return -1;}
                    else if(s1 < s2){return 1;}
                return 0;
                });
            } else {
                mas.sort(function(a,b) {
                    var s1 = gizmo.GetField( a, O.field); 
                    var s2 = gizmo.GetField( b, O.field)
                    if(s1 < s2){return -1;} //сравнить длины
                    else if(s1 > s2){return 1;}
                return 0;
                });
            }
        } else {
            if(target == '>') {
                mas.sort(function(a,b) {
                    var s1 = a; //будет полюбому строка
                    var s2 = b;
                    if(s1 > s2){return -1;} //сравнить длины
                    else if(s1 < s2){return 1;}
                return 0;
                });
            } else {
                mas.sort(function(a,b) {
                    var s1 = a; //будет полюбому строка
                    var s2 = b;
                    if(s1 < s2){return -1;} //сравнить длины
                    else if(s1 > s2){return 1;}
                return 0;
                });
            }
        }

        return mas;
    },

    gizmo.Modules['Sorts'] = {
        name: "Sorts",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для введения методов реализующих сортировки"
    };

}(gizmo));