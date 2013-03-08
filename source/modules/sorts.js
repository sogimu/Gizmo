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
    gizmo.Quicksort = function(O) { // sort: Quicksort
        var mas = O.mas?O.mas:[];
        //var low = O.low?O.low:0;
        //var high = O.high?O.high:A.length-1;
        var target = O.target?O.target:'>';
        
        if(O.field) {
            if(target == '>') {
                mas.sort(function(a,b) {
                    var s1 = a.field; //будет полюбому строка
                    var s2 = b.field;
                    if(s1 > s2){return -1;} //сравнить длины
                    else if(s1 < s2){return 1;}
                return 0;
                });
            } else {
                mas.sort(function(a,b) {
                    var s1 = a.field; //будет полюбому строка
                    var s2 = b.field;
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