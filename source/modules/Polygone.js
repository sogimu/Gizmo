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

    var Polygone = gizmo.Class({
        Initialize: function(arr) {
            if(gizmo.isTArray(arr)) {
                for(var i in arr) {
                    this.addPoint(arr[i]);
                }     
            } else {
                throw Error("Argument are not array!");
            }

        },
        Statics: {
            _points: [],

        },
        Methods: {

            addPoint: function(point) {
                this._points.push(point);
                return this;
            },

            havePoint: function(point) {
                var normedPolygone = [];
                
                var points = this._points;
                for(var i in points){
                    normedPolygone.push(new gizmo.Math.Vector2D(points[i].x - point.x, points[i].y - point.y));
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

            getPointByIndex: function(index) {
                if(gizmo.isTNumber(index) && index >= 0) {
                    return this._points[index];
                } else {
                    throw Error("index must be poistive integer!")
                }
            }

            // Setters/Getters
        }
    });

    gizmo.Math.Polygone = Polygone;

    gizmo.Modules['polygone'] = {
        name: "polygone",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Полигон заданный векторами"
    };

}(gizmo));