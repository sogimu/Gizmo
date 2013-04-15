(function(gizmo) {
    /**
     * * Полигон заданный векторами
     *
     * @constructor
     * @param {number} x
     * @param {number} y
     * @this {gizmo.Math.Vector2D}
     * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
     * @version 0.1
     */

    var Polygone = function(arr) {
        if(gizmo.isTArray(arr)) {
            this.polygone = arr;     
        } else {
            throw Error("Argument are not array!");
        }
    }
    Polygone.prototype = {
        _polygone: [],

        addVector: function(vector) {
            this.polygone.push(vector);
            return this;
        },

        havePoint: function(point) {
            var normedPolygone = [];
            
            var polygone = this.polygone;
            for(var i in polygone){
                normedPolygone.push(new gizmo.Math.Vector2D(polygone[i].x - point.x, polygone[i].y - point.y));
            }

  
            var angleSum = 0;
            for(var i=0;i<normedPolygone.length-1;i++) {
                angleSum += normedPolygone[i].Angle(normedPolygone[i+1]);
            }
            angleSum += normedPolygone[normedPolygone.length-1].Angle(normedPolygone[0]);

            if((angleSum - 2*Math.PI < 0.01) && (angleSum - 2*Math.PI > -0.01)) {
                return true;
            } else {
                return false;
            }

        },

        applayTransformMatrix: function(matrix) {
            var polygone = this.polygone;
            var points = [];

            var row = [];    
            for(var i in polygone) {
                row.push(polygone[j].x);
                  
            }
            points.push(row);

            var row = [];    
            for(var i in polygone) {
                row.push(polygone[j].y);
                  
            }
            points.push(row);

            var row = [];    
            for(var i in polygone) {
                row.push(1);
                  
            }
            points.push(row);

            var points = new gizmo.Math.Matrix(points);
            var points = matrix.x(points).elements;
            
            for(var i in polygone) {
                polygone[i].x = points[i][0];
                polygone[i].y = points[i][1];

            }

            for(var i in points) {
                var point = new gizmo.Math.Vector2D(0,0);
                for(var j in points[i]) {
                    polygone[i].x = points[i][j];
                    polygone[i].y = points[i+1][j];
                }                
            }            

        },

        // Setters/Getters

        // polygone
        set polygone(arr) {
            this._polygone = arr;
        },
        get polygone() {
            return this._polygone;
        }

    }

    gizmo.Math.Polygone = Polygone;

    gizmo.Modules['polygone'] = {
        name: "polygone",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "2D-вектор"
    };

}(gizmo));