(function(gizmo) {
    /**
     * * Модуль с математическими функциями
	 * * Проверка типа (Sgn)
     *
     * @constructor
     * @param {number} num
     * @this {gizmo.Sgn}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */


	/**
	 * Проверка числа на положительность
	 *
	 * @param {number} x
	 */	
	var Sgn = function(num) {
	    if(num>0) {
	        return 1;
	    } else if(num<0) {
	        return -1;
	    } else {
	        return 0;
	    }
	}

	gizmo.Math = {};
    gizmo.Math.Sgn = Sgn;

    gizmo.Modules['Math'] = {
        name: "Math",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль с математическими функциями"
    };

}(gizmo));