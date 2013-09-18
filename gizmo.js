(function() {
  var b = function() {
  };
  b.prototype = {types:"String Number Array Function Date Object RegExp Bool".split(" "), About:{}, Modules:{}, Plugins:{}};
  window.gizmo = new b
})();
(function(b) {
  b.isSet = function(b) {
    return void 0 != b && null != b ? !0 : !1
  };
  b.itIs = function(c, a) {
    if(b.isSet(c)) {
      var g = Object.prototype.toString.call(c).slice(8, -1);
      return null !== c && g == a
    }
    return!1
  };
  b.type = function(b) {
    return{}.toString.call(b).slice(8, -1)
  };
  b.clone = function a(g) {
    if("Array" !== b.type(g) && "Object" !== b.type(g)) {
      return g
    }
    var l = new g.constructor;
    for(i in g) {
      g[i] && g.hasOwnProperty(i) && (l[i] = b.itIs(g[i], "Object") ? a(g[i]) : g[i] && b.itIs(g[i], "Array") ? [].concat(g[i]) : g[i])
    }
    return l
  };
  b.Modules.baseVariableFunction = {name:"Type", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u044b\u0445 \u043d\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435, \u0443\u0442\u0438\u043d\u043d\u043e\u0439 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0442.\u0434. "}
})(gizmo);
(function(b) {
  b.Filter = function(c, a) {
    var g;
    if(g = b.isSet(c)) {
      if(g = !0 === b.itIs(c, a)) {
        if(!0 === b.itIs(a, "String")) {
          g = !0;
          for(var l in b._types) {
            if(a === b._types[l]) {
              g = !1;
              break
            }
          }
        }else {
          throw TypeError(b.type(a) + " <- it's not name of type");
        }
      }
    }
    if(g) {
      return c
    }
    throw TypeError(b.type(c) + " != " + a);
  };
  b.Assert = function(c) {
    if(b.isSet(c)) {
      return c
    }
    throw TypeError("Varibale is not been set!");
  };
  b.Modules.Filters = {name:"Filters", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:'\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f "\u0444\u0438\u043b\u044c\u0442\u0440\u0430" \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0435\u0451 \u0442\u0438\u043f\u0443'}
})(gizmo);
(function(b) {
  b.isTString = function(c) {
    return b.itIs(c, "String")
  };
  b.isTNumber = function(c) {
    return b.itIs(c, "Number")
  };
  b.isTBool = function(c) {
    return b.itIs(c, "Boolean")
  };
  b.isTArray = function(c) {
    return b.itIs(c, "Array")
  };
  b.isTFunc = function(c) {
    return b.itIs(c, "Function")
  };
  b.isTDate = function(c) {
    return b.itIs(c, "Date")
  };
  b.isTRegExp = function(c) {
    return b.itIs(c, "RegExp")
  };
  b.isTObject = function(c) {
    return b.itIs(c, "Object")
  };
  b.Modules.Checks = {name:"Checks", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u0438\u043f\u0430, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430"}
})(gizmo);
(function(b) {
  b.Class = function(c, a) {
    var g = c.Initialize || function() {
    };
    if(c.Extend) {
      var l = c.Extend, e = function(a) {
        var d = l.prototype, e;
        for(e in d) {
          switch(b.type(d[e])) {
            case "Array":
              this[e] = [].concat(d[e]);
              break;
            case "Object":
              this[e] = b.clone(d[e])
          }
        }
        var d = c.Statics || {}, f;
        for(f in d) {
          switch(b.type(d[f])) {
            case "Array":
              this[f] = [].concat(d[f]);
              break;
            case "Object":
              this[f] = b.clone(d[f])
          }
        }
        f = c.Methods || {};
        for(var h in f) {
          d = f.__lookupGetter__(h), e = f.__lookupSetter__(h), d || e ? (d && this.__defineGetter__(h, d), e && this.__defineSetter__(h, e)) : this[h] = f[h]
        }
        g.call(this, a || {})
      }, f = function() {
      };
      f.prototype = l.prototype;
      e.prototype = new f;
      e.prototype.constructor = e;
      for(var d in l) {
        if("prototype" != d) {
          var f = l.__lookupGetter__(d), h = l.__lookupSetter__(d);
          f || h ? (f && e.__defineGetter__(d, f), h && e.__defineSetter__(d, h)) : e[d] = l[d]
        }
      }
    }else {
      e = function(a) {
        var d = c.Statics || {}, e;
        for(e in d) {
          switch(b.type(d[e])) {
            case "Array":
              this[e] = [].concat(d[e]);
              break;
            case "Object":
              this[e] = b.clone(d[e])
          }
        }
        var d = c.Methods || {}, f;
        for(f in d) {
          e = d.__lookupGetter__(f);
          var l = d.__lookupSetter__(f);
          e || l ? (e && this.__defineGetter__(f, e), l && this.__defineSetter__(f, l)) : this[f] = d[f]
        }
        g.call(this, a || {})
      }
    }
    var k = c.Methods || {};
    for(d in k) {
      f = k.__lookupGetter__(d), h = k.__lookupSetter__(d), f || h ? (f && e.prototype.__defineGetter__(d, f), h && e.prototype.__defineSetter__(d, h)) : e.prototype[d] = k[d]
    }
    var m = c.Statics || {};
    if(b.isSet(a) && b.isSet(a.checkingMode) && a.checkingMode) {
      for(d in m) {
        e.prototype["_" + d] = m[d], f = function() {
          var a = "_" + d, e = m[d];
          return function() {
            return b.Filter(this[a], b.type(e))
          }
        }(d), h = function() {
          var a = "_" + d, e = m[d];
          return function(d) {
            this[a] = b.Filter(d, b.type(e))
          }
        }(d), e.prototype.__defineGetter__(d, f), e.prototype.__defineSetter__(d, h)
      }
    }else {
      for(d in m) {
        switch(b.type(m[d])) {
          case "Array":
            e.prototype[d] = [].concat(m[d]);
            break;
          case "Object":
            e.prototype[d] = b.clone(m[d]);
            break;
          default:
            e.prototype[d] = m[d]
        }
      }
    }
    return e
  };
  b.Modules.Class = {name:"Class", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043b\u0430\u0441\u0441\u044b"}
})(gizmo);
(function(b) {
  b.nativeSort = function(c) {
    var a = c.mas ? c.mas : [], g = c.target ? c.target : ">";
    c.field ? (b.Assert(a[0][c.field]), ">" == g ? a.sort(function(a, b) {
      var g = a[c.field], d = b[c.field];
      return g > d ? -1 : g < d ? 1 : 0
    }) : a.sort(function(a, b) {
      var g = a[c.field], d = b[c.field];
      return g < d ? -1 : g > d ? 1 : 0
    })) : ">" == g ? a.sort(function(a, b) {
      return a > b ? -1 : a < b ? 1 : 0
    }) : a.sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    });
    return a
  };
  b.Modules.Sorts = {name:"Sorts", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0445 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}
})(gizmo);
(function(b) {
  b.Math = {};
  b.Math.Sgn = function(b) {
    return 0 < b ? 1 : 0 > b ? -1 : 0
  };
  b.Modules.Math = {name:"Math", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0441 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438"}
})(gizmo);
(function(b) {
  var c = b.Class({Initialize:function(a) {
    return this.setElements(a)
  }, Statics:{}, Methods:{create:function(a) {
    return new b.Math.Matrix(a)
  }, canMultiplyFromLeft:function(a) {
    if(0 === this.elements.length) {
      return!1
    }
    a = a.elements || a;
    "undefined" === typeof a[0][0] && (a = this.Matrix.create(a).elements);
    return this.elements[0].length === a.length
  }, map:function(a) {
    var b = [], c = this.elements.length, e = c, f, d, h = this.elements[0].length, k;
    do {
      f = e - c;
      d = h;
      b[f] = [];
      do {
        k = h - d, b[f][k] = a(this.elements[f][k], f + 1, k + 1)
      }while(--d)
    }while(--c);
    return this.create(b)
  }, multiply:function(a) {
    if(0 === this.elements.length) {
      return null
    }
    if(!a.elements) {
      return this.map(function(b) {
        return b * a
      })
    }
    var b = a.modulus ? !0 : !1, c = a.elements || a;
    "undefined" === typeof c[0][0] && (c = this.create(c).elements);
    if(!this.canMultiplyFromLeft(c)) {
      return null
    }
    for(var e = this.elements.length, f = c[0].length, d, h = this.elements[0].length, k, m = [], n;e--;) {
      d = f;
      for(m[e] = [];d--;) {
        k = h;
        for(n = 0;k--;) {
          n += this.elements[e][k] * c[k][d]
        }
        m[e][d] = n
      }
    }
    c = this.create(m);
    return b ? c.col(1) : c
  }, x:function(a) {
    return this.multiply(a)
  }, setElements:function(a) {
    var b, c = a.elements || a;
    if(c[0] && "undefined" !== typeof c[0][0]) {
      a = c.length;
      for(this.elements = [];a--;) {
        b = c[a].length;
        for(this.elements[a] = [];b--;) {
          this.elements[a][b] = c[a][b]
        }
      }
      return this
    }
    b = c.length;
    this.elements = [];
    for(a = 0;a < b;a++) {
      this.elements.push([c[a]])
    }
    return this
  }, isSquare:function() {
    return this.elements.length == this.elements[0].length
  }, toRightTriangular:function() {
    var a = this.dup(), b, c = this.elements.length, e = c, f, d, h = this.elements[0].length, k;
    do {
      f = e - c;
      if(0 == a.elements[f][f]) {
        for(j = f + 1;j < e;j++) {
          if(0 != a.elements[j][f]) {
            b = [];
            d = h;
            do {
              k = h - d, b.push(a.elements[f][k] + a.elements[j][k])
            }while(--d);
            a.elements[f] = b;
            break
          }
        }
      }
      if(0 != a.elements[f][f]) {
        for(j = f + 1;j < e;j++) {
          var m = a.elements[j][f] / a.elements[f][f];
          b = [];
          d = h;
          do {
            k = h - d, b.push(k <= f ? 0 : a.elements[j][k] - a.elements[f][k] * m)
          }while(--d);
          a.elements[j] = b
        }
      }
    }while(--c);
    return a
  }, determinant:function() {
    if(!this.isSquare()) {
      return null
    }
    var a = this.toRightTriangular(), b = a.elements[0][0], c = a.elements.length - 1, e = c, f;
    do {
      f = e - c + 1, b *= a.elements[f][f]
    }while(--c);
    return b
  }, det:function() {
    return this.determinant()
  }, dup:function() {
    return this.create(this.elements)
  }, transpose:function() {
    var a = this.elements.length, b = this.elements[0].length, c = [], e = b, f, d, h;
    do {
      f = b - e;
      c[f] = [];
      d = a;
      do {
        h = a - d, c[f][h] = this.elements[h][f]
      }while(--d)
    }while(--e);
    return this.create(c)
  }}});
  b.Math.Matrix = c;
  b.Modules.Matrix = {name:"Matrix", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0442\u0440\u0438\u0446\u0430\u043c\u0438. \u0421\u043e\u0437\u0434\u0430\u043d \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 http://sylvester.jcoglan.com."}
})(gizmo);
(function(b) {
  var c = function(a, b) {
    this._x = a;
    this._y = b
  };
  c.prototype = {_x:0, _y:0, Minus:function(a) {
    return new b.Math.Point2D(this.x - a.x, this.y - a.y)
  }, set x(a) {
    this._x = a
  }, get x() {
    return this._x
  }, set y(a) {
    this._y = a
  }, get y() {
    return this._y
  }};
  b.Math.Point2D = c;
  b.Modules.Point2D = {name:"Point2D", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"2D-\u0442\u043e\u0447\u043a\u0430"}
})(gizmo);
(function(b) {
  var c = function(a, b) {
    this._x = a;
    this._y = b
  };
  c.prototype = {_x:0, _y:0, X:function(a) {
    return this.x * a.x + this.y * a.y
  }, Module:function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }, Angle:function(a) {
    var c = (new b.Math.Matrix([[this.x, this.y], [a.x, a.y]])).determinant();
    return 0 == this.Module() * a.Module() ? 0 : 0 != c ? b.Math.Sgn(c) * Math.acos(a.X(this) / (this.Module() * a.Module())) : Math.acos(a.X(this) / (this.Module() * a.Module()))
  }, set x(a) {
    this._x = a
  }, get x() {
    return this._x
  }, set y(a) {
    this._y = a
  }, get y() {
    return this._y
  }};
  b.Math.Vector2D = c;
  b.Modules.Vector2D = {name:"Vector2D", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"2D-\u0432\u0435\u043a\u0442\u043e\u0440"}
})(gizmo);
(function(b) {
  var c = b.Class({Initialize:function(a) {
    if(b.isTArray(a)) {
      for(var c in a) {
        this.AddPoint(a[c])
      }
    }else {
      throw Error("Argument are not array!");
    }
  }, Statics:{_points:[]}, Methods:{AddPoint:function(a) {
    this._points.push(a);
    return this
  }, HasPoint:function(a) {
    var c = [], l = this._points, e;
    for(e in l) {
      c.push(new b.Math.Vector2D(l[e].x - a.x, l[e].y - a.y))
    }
    for(e = a = 0;e < c.length - 1;e++) {
      a += c[e].Angle(c[e + 1])
    }
    a += c[c.length - 1].Angle(c[0]);
    return 0.01 > a - 2 * Math.PI && -0.01 < a - 2 * Math.PI ? !0 : !1
  }, GetPointByIndex:function(a) {
    if(b.isTNumber(a) && 0 <= a) {
      return this._points[a]
    }
    throw Error("index must be poistive integer!");
  }}});
  b.Math.Polygone = c;
  b.Modules.polygone = {name:"polygone", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041f\u043e\u043b\u0438\u0433\u043e\u043d \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438"}
})(gizmo);
(function(b) {
  var c = b.Class({construct:function(a) {
    this.action = a.action;
    this.formId = a.id;
    this.onSubmit = a.onSubmit;
    this.onComplete = a.onComplete;
    this.createIframe();
    this.createForm()
  }, vars:{formId:"", form:{}, iframe:{}, onSubmit:function() {
  }, onComplete:function() {
  }}, methods:{createForm:function() {
    var a = document.getElementById(this.formId);
    a.action = this.action;
    a.target = this.iframeName;
    a.enctype = "multipart/form-data";
    a.method = "POST";
    this.form = a
  }, createIframe:function() {
    this.iframeName = "rFrame";
    var a = document.createElement("iframe");
    a.name = "rFrame";
    a.style.display = "none";
    document.getElementsByTagName("body")[0].appendChild(a);
    this.iframe = a
  }, send:function() {
    return!1 !== this.onSubmit() ? (this.form.submit(), !0) : !1
  }}});
  b.Plugins.iframeAJAX = {name:"iframeAJAX", version:0.1, author:"Alexander Lizin aka Sogimu", email:"sogimu@nxt.ru", description:"\u041f\u043b\u0430\u0433\u0438\u043d \u0434\u043b\u044f AJAX \u043d\u0430 iframe"};
  b.iframeAjax = c
})(gizmo);

