(function(gizmo) {
    /**
     * * 2D-точка
     *
     * @constructor
     * @param {number} x
     * @param {number} y
     * @this {gizmo.Math.Point2D}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

	var Point2D = function(x,y) {
	    this._x = x;
	    this._y = y;
	};
	Point2D.prototype = {
	    _x:0,
	    _y:0,

		/**
		 * Получить точку вычитанием точки из текущей точки
		 *
		 * @param {Point2D} V
		 */
		Minus: function(P) {
			return new gizmo.Math.Point2D(this.x - P.x,this.y - P.y);
		},

		// Setters/Getters

		// x
		set x(number) {
			this._x = number;
		},
		get x() {
	        return this._x;
	    },

	    // y
		set y(number) {
			this._y = number;
		},
	    get y() {
	        return this._y;
	    }
	};

    gizmo.Math.Point2D = Point2D;

    gizmo.Modules['Point2D'] = {
        name: "Point2D",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "2D-точка"
    };

}(gizmo));