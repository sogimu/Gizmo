(function(gizmo) {
	/**
	 * модуль для работы с матрицами. Создан на основе библиотеки http://sylvester.jcoglan.com. 
	 *
	 * @constructor
	 * @param {object} O
	 * @param {string} O.()         Матрица в форме: [[1,2,3],
													  [1,2,3],
													  [1,2,3]]
	 * @param {string} O.x          Функция умножения текущей матрицы на другую матрицу
	 * @this {gizmo.ajax.Matrix}
	 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
	 * @version 0.1
	 */
 
	var matrix = gizmo.Class({
		Initialize: function(O) {
			return this.setElements(O);
		},
		Statics: {
		},
		Methods: {
			create: function(elements) {
				var M = new gizmo.Matrix(elements);
				return M;//.setElements(elements);
			},
			canMultiplyFromLeft: function(matrix) {
				if (this.elements.length === 0) { return false; }
					var M = matrix.elements || matrix;
					if (typeof(M[0][0]) === 'undefined') { M = Sylvester.Matrix.create(M).elements; }
					// this.columns should equal matrix.rows
				return (this.elements[0].length === M.length);
			},
			map: function(fn) {
			  var els = [], ni = this.elements.length, ki = ni, i, nj, kj = this.elements[0].length, j;
			  do { i = ki - ni;
			    nj = kj;
			    els[i] = [];
			    do { j = kj - nj;
			      els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
			    } while (--nj);
			  } while (--ni);
			  return this.create(els);
			},
			multiply: function(matrix) {
				if (this.elements.length === 0) { return null; }
				if (!matrix.elements) {
				  return this.map(function(x) { return x * matrix; });
				}
				var returnVector = matrix.modulus ? true : false;
				var M = matrix.elements || matrix;
				if (typeof(M[0][0]) === 'undefined') { M = this.create(M).elements; }
				if (!this.canMultiplyFromLeft(M)) { return null; }
				var i = this.elements.length, nj = M[0].length, j;
				var cols = this.elements[0].length, c, elements = [], sum;
				while (i--) { j = nj;
				  elements[i] = [];
				  while (j--) { 
					c = cols;
					sum = 0;
					while (c--) {
					  sum += this.elements[i][c] * M[c][j];
					}
					elements[i][j] = sum;
				  }
				}
				var M = this.create(elements);
				return returnVector ? M.col(1) : M;
			},
			
			x: function(matrix) {
				return this.multiply(matrix);
			},

			setElements: function(els) {
				var i, j, elements = els.elements || els;
				if (elements[0] && typeof(elements[0][0]) !== 'undefined') {
				  i = elements.length;
				  this.elements = [];
				  while (i--) {
					j = elements[i].length;
					this.elements[i] = [];
					while (j--) {
					  this.elements[i][j] = elements[i][j];
					}
				  }
				  return this;
				}
				var n = elements.length;
				this.elements = [];
				for (i = 0; i < n; i++) {
				  this.elements.push([elements[i]]);
				}
				return this;
			}
		}
	});
	
	gizmo.Matrix = matrix;

    gizmo.Modules['Matrix'] = {
        name: "Matrix",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Модуль для работы с матрицами. Создан на основе библиотеки http://sylvester.jcoglan.com."
    };

}(gizmo));