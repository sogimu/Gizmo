(function(gizmo) {
    /**
     * * 2D-вектор
     *
     * @constructor
     * @param {number} x
     * @param {number} y
     * @this {gizmo.Math.Vector2D}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

	var Vector2D = function(x,y) {
	    this._x = x;
	    this._y = y;
	};
	Vector2D.prototype = {
	    _x:0,
	    _y:0,
		
		/**
		 * Перемножение двух 2d векторов
		 *
		 * @param {Vector2D} V
		 * @param {vector2D} W
		 */
		X: function(V) {
		    return this.x * V.x + this.y * V.y;
		},

		/**
		 * Модуль вектора
		 *
		 * @param {Vector2D} V
		 */
		Module: function() {
		    return Math.sqrt(this.x * this.x + this.y * this.y);
		},

		/**
		 * Минимальный угол между текущим и переданным вектором
		 *
		 * @param {Vector2D} V
		 */
		Angle: function(V) {
			var d = (new gizmo.Math.Matrix([[this.x,this.y],[V.x,V.y]])).determinant();

		    if((this.Module()*V.Module()) == 0) {
		        return 0;
		    }
		    if(d != 0) {
		        return gizmo.Math.Sgn(d)*Math.acos(V.X(this)/(this.Module()*V.Module()));
		    } else {
		        return Math.acos(V.X(this)/(this.Module()*V.Module()));
		    }
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

    gizmo.Math.Vector2D = Vector2D;

    gizmo.Modules['Vector2D'] = {
        name: "Vector2D",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "2D-вектор"
    };

}(gizmo));