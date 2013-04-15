module( "baseVaribleFunctions" );
test( "gizmo.type", function() {
	// String
	ok( gizmo.type( "1234ergt#%" ) == "String", " ok( gizmo.type( \"1234ergt#%\" ) == \"String\" Passed!" );
	// Number
	ok( gizmo.type( -2423.2424 ) == "Number", " ok( gizmo.type( -2423.2424 ) == \"Number\" Passed!" );
	// Array
	ok( gizmo.type( [3,4,[1,3],{}] ) == "Array", " ok( gizmo.type( [3,4,[1,3],{}] ) == \"Array\" Passed!" );
	// Object
	ok( gizmo.type( {fwe:22, fg: [46,3]} ) == "Object", " ok( gizmo.type( {fwe:22, fg: [46,3]}} ) == \"Object\" Passed!" );
	// Function
	ok( gizmo.type( function() {} ) == "Function", " ok( gizmo.type( function() {} ) == \"Function\" Passed!" );
	// Date
	ok( gizmo.type( new Date() ) == "Date", " ok( gizmo.type( new Date() ) == \"Date\" Passed!" );
	// Boolean
	ok( gizmo.type( true ) == "Boolean", " ok( gizmo.type( true ) == \"Boolean\" Passed!" );
	
});
	
test( "gizmo.clone", function() {
	try {
		gizmo.clone(new gizmo.Math.Matrix([]));
		ok( true, " ok( gizmo.clone(new gizmo.Math.Matrix([])) with not exeption. Passed!" );

	}
	catch(e) {
		ok( false, " ok( gizmo.clone(new gizmo.Math.Matrix([])) have exeption. Not Passed!" );

	}
	
	try {
		gizmo.clone(new gizmo.Math.Matrix({}));
		ok( true, " ok( gizmo.clone(new gizmo.Math.Matrix({})) with not exeption. Passed!" );

	}
	catch(e) {
		ok( false, " ok( gizmo.clone(new gizmo.Math.Matrix({})) have exeption. Not Passed!" );

	}

	try {
		gizmo.clone(new gizmo.Math.Matrix());
		ok( true, " ok( gizmo.clone(new gizmo.Math.Matrix()) with not exeption. Passed!" );

	}
	catch(e) {
		ok( false, " ok( gizmo.clone(new gizmo.Math.Matrix()) have exeption. Not Passed!" );

	}

	try {
		gizmo.clone(new gizmo.Math.Matrix);
		ok( true, " ok( gizmo.clone(new gizmo.Math.Matrix) with not exeption. Passed!" );

	}
	catch(e) {
		ok( false, " ok( gizmo.clone(new gizmo.Math.Matrix) have exeption. Not Passed!" );

	}
	
	gizmo.clone(new gizmo.Math.Matrix([]));
	gizmo.clone(new gizmo.Math.Matrix({}));
	gizmo.clone(new gizmo.Math.Matrix());

});

module( "Checks" );
test( "gizmo.isTString", function() {
	gizmo.isTString	
	// String
	ok( gizmo.isTString( "1234ergt#%" ) == true, " ok( gizmo.isTString( \"1234ergt#%\" ) == true Passed!" );
	// Number
	ok( gizmo.isTString( -2423.2424 ) == false, " ok( gizmo.isTString( -2423.2424 ) == false Passed!" );
	// Array
	ok( gizmo.isTString( [3,4,[1,3],{}] ) == false, " ok( gizmo.isTString( [3,4,[1,3],{}] ) == false Passed!" );
	// Object
	ok( gizmo.isTString( {fwe:22, fg: [46,3]} ) == false, " ok( gizmo.isTString( {fwe:22, fg: [46,3]}} ) == false Passed!" );
	// Function
	ok( gizmo.isTString( function() {} ) == false, " ok( gizmo.isTString( function() {} ) == false Passed!" );
	// Date
	ok( gizmo.isTString( new Date() ) == false, " ok( gizmo.isTString( new Date() ) == false Passed!" );
	// Boolean
	ok( gizmo.isTString( true ) == false, " ok( gizmo.isTString( true ) == false Passed!" );

});

module( "Sorts" );
test( "gizmo.nativeSort", function() {
	gizmo.isTString	
	
	var mas;
	
	mas = gizmo.nativeSort( {mas: [2,1,4,6], target: '>'} );
	ok( (mas[0]>mas[1]) && (mas[1]>mas[2]) && (mas[2]>mas[3]), " ok( gizmo.nativeSort( {mas: [2,1,4,6], target: '>'} ) == [6, 4, 2, 1] Passed!" );

	mas = gizmo.nativeSort( {mas: [2,1,4,6], target: '<'} );
	ok( (mas[0]<mas[1]) && (mas[1]<mas[2]) && (mas[2]<mas[3]), " ok( gizmo.nativeSort( {mas: [2,1,4,6], target: '<'} ) == [1, 2, 4, 6] Passed!" );

	mas = gizmo.nativeSort( {mas: [{a:2},{a:1},{a:4},{a:6}], target: '>', field: 'a'} );
	ok( (mas[0].a>mas[1].a) && (mas[1].a>mas[2].a) && (mas[2].a>mas[3].a), " ok( gizmo.nativeSort( {mas: [{a:2},{a:1},{a:4},{a:6}], target: '>', field: 'a'} ) == [{a:6}, {a:4}, {a:2}, {a:1}] Passed!" );

	mas = gizmo.nativeSort( {mas: [{a:2},{a:1},{a:4},{a:6}], target: '<', field: 'a'} );
	ok( (mas[0].a<mas[1].a) && (mas[1].a<mas[2].a) && (mas[2].a<mas[3].a), " ok( gizmo.nativeSort( {mas: [{a:2},{a:1},{a:4},{a:6}], target: '<', field: 'a'} ) == [{a:1}, {a:2}, {a:4}, {a:6}] Passed!" );
	

});   
	   
module( "Class" );
test( "gizmo.Class", function() {
	
	// type control
	var CLASS = gizmo.Class({
		Initialize: function(O) {

		},
		Statics: {
			a: [],
			b: "",
			c: 245

		},

		Methods: {
			do: function() {
				this.a = 24;          // присваивание значения не подходящего типа
				this.b = [];          // присваивание значения не подходящего типа
				this.a = "esg22swaf"; // присваивание значения не подходящего типа
			}
		}
	},{checkingMode: true});

	var obj = new CLASS({a:23,b:23,c:35});
	try {
		obj.do();
		ok( false, "gizmo.Class (type control) Fail!" );

	}
	catch(e) {
		ok( true, "gizmo.Class (type control) Passed!" );

	}
	//////////////////

	// gizmo.Class (with out type control 0)
	var CLASS = gizmo.Class({
		Initialize: function(O) {

		},
		Statics: {
			a: [],
			b: "",
			c: 245

		},

		Methods: {
			do: function() {
				this.a = 24;          // присваивание значения не подходящего типа
				this.b = [];          // присваивание значения не подходящего типа
				this.a = "esg22swaf"; // присваивание значения не подходящего типа
			}
		}
	},{checkingMode: false});

	var obj = new CLASS({a:23,b:23,c:35});
	try {
		obj.do();
		ok( true, "gizmo.Class (with out type control 0) Passed!" );

	}
	catch(e) {
		ok( false, "gizmo.Class (with out type control 0) Fail!" );

	}

	// with out type control 1
	var CLASS = gizmo.Class({
		Initialize: function(O) {

		},
		Statics: {
			a: [],
			b: "",
			c: 245

		},

		Methods: {
			do: function() {
				this.a = 24;          // присваивание значения не подходящего типа
				this.b = [];          // присваивание значения не подходящего типа
				this.a = "esg22swaf"; // присваивание значения не подходящего типа
			}
		}
	});

	var obj = new CLASS({a:23,b:23,c:35});
	try {
		obj.do();
		ok( true, "gizmo.Class (with out type control 1) Passed!" );

	}
	catch(e) {
		ok( false, "gizmo.Class (with out type control 1) Fail!" );

	}
	/////////////////

	// gizmo.Class (creating simple class)
	var A = gizmo.Class({
	Statics: {
		var1: 1,
		var2: 2
	}, 
	Methods: {
		getVar: function(name) {
			return this[name];

		}
	}
	},{checkingMode: true});

	a = new A();
	ok( (a.getVar('var1') == 1) && (a.getVar('var2') == 2), "gizmo.Class (creating simple class) Passed!" );
	//////////////////

	// gizmo.Class (checking the incompatibility of class objects fields)
	B = gizmo.Class({
		Initialize: function() {
		},
		Statics: {
			wewe: "2323",
			dwe: []
		}
	});
	A = gizmo.Class({
		Extend: B,
		Initialize: function() {
	    },
	    Statics: {
	        we: {ad: 'wefwe'},
			arr: []
	    },
		Methods: {
			run: function() {
				return 'wef';
			}
		}
	},{checkingMode: false});

	b1 = new A();
	b2 = new A();

	ok( !(b1.we === b2.we) && !(b1.arr === b2.arr) && !(b1.dwe === b2.dwe), "gizmo.Class (checking the incompatibility of class objects field) Passed!" );
	//////////////////

	// gizmo.Class (checking working setter\getter)

	B = gizmo.Class({
		Initialize: function() {
		},
		Statics: {
			wewe: "2323",
			dwe: [],
			_width: 0
		},
		Methods: {
            // width
            set width(O) {
                this._width = O;
            },
            get width() {
                return this._width;
            },

		}
	});
	b1 = new B();
	ok( b1.width == 0, "gizmo.Class (checking working setter\\getter) Passed!" );

	// gizmo.Class (checking working setter\getter without inherits)

	A = gizmo.Class({
		Initialize: function() {

		},
		Statics: {
			_x: 0,
		},
		Methods: {
			set x(O) {
				this._x = O;
			},
			get x() {
				return this._x;
			}
		}
	});
	B = gizmo.Class({
		Initialize: function() {
		},
		Statics: {
			wewe: "2323",
			dwe: [],
			_width: 0
		},
		Methods: {
            // width
            set width(O) {
                this._width = O;
            },
            get width() {
                return this._width;
            },

		}
	});
	b1 = new B();
	ok( b1.width == 0, "gizmo.Class (checking working setter\\getter with inherits) Passed" );

});

module( "Math" );
test( "gizmo.Math.", function() {
	ok( gizmo.Math.Sgn(-13) == -1, "gizmo.Math.Sgn Passed!" );
	ok( gizmo.Math.Sgn(13) == 1, "gizmo.Math.Sgn Passed!" );
	ok( gizmo.Math.Sgn(0) == 0, "gizmo.Math.Sgn Passed!" );

});

module( "Matrix" );
test( "gizmo.Math.Matrix", function() {
	
	// gizmo.Math.Matrix.x (gizmo.Math.Matrix.multiply)
	var M1 = new gizmo.Math.Matrix([
					  [1,7,3],
					  [9,4,0],
					  [2,7,1]
					]);
	var M2 = new gizmo.Math.Matrix([
					  [6,2,8],
					  [9,1,3],
					  [0,7,6]
					]);

	var res = (M1.x(M2)).elements;
	if(res[0][0] == 69){
		if(res[0][1] == 30){
			if(res[0][2] == 47){
				if(res[1][0] == 90){
					if(res[1][1] == 22){
						if(res[1][2] == 84){
							if(res[2][0] == 75){
								if(res[2][1] == 18){
									if(res[2][2] == 43){
										ok( true, "gizmo.Math.Matrix.x (checking multiplication matrixs) Passed!" );
	
									}
					
								}
					
							}
						}
		
					}
		
				}
		
			}
		}
	}
	
});

module( "Vector2D" );
test( "gizmo.Math.Vector2D.X", function() {
	var V = new gizmo.Math.Vector2D(500, 0);
	var W = new gizmo.Math.Vector2D(70.7106, 70.7106);
	
	ok( V.X(W) == 35355.3, " ok( gizmo.Math.Vector2D.X Passed!" );
	ok( V.Module() == 500, " ok( gizmo.Math.Vector2D.Module Passed!" );
	ok( V.Angle(W) - 0.7853981633974481 < 0.01 && V.Angle(W) - 0.7853981633974481 > -0.01, " ok( gizmo.Math.Vector2D.Angle Passed!" );
});

module( "Polygone" );
test( "gizmo.Math.Polygone", function() {
	polygone = [];
	polygone = [new gizmo.Math.Point2D(10,10),new gizmo.Math.Point2D(110,10),new gizmo.Math.Point2D(110,110),new gizmo.Math.Point2D(10,110)];
	
	var sk = new gizmo.Math.Polygone(polygone);

	ok( sk.havePoint(new gizmo.Math.Point2D(50,50)), " ok( gizmo.Math.Polygone.havePoint() Passed!" );
	ok( !sk.havePoint(new gizmo.Math.Point2D(120,120)), " ok( gizmo.Math.Polygone.havePoint() Passed!" );
	var dd = new gizmo.Math.Matrix([[1,0,0],[0,1,0],[0,0,1]]);
	var d = sk.applyTransformMatrix(dd);
	d = d.elements;
	if(d[0][0] == 10 && d[0][1] == 10 && d[0][2] == 1) {
		if(d[1][0] == 110 && d[1][1] == 10 && d[1][2] == 1) {
			if(d[2][0] == 110 && d[2][1] == 110 && d[2][2] == 1) {
				if(d[3][0] == 10 && d[3][1] == 110 && d[3][2] == 1) {
					ok(true, "ok( gizmo.Math.Polygone.applyTransformMatrix() Passed!");
				} else {
					ok(false, "ok( gizmo.Math.Polygone.applyTransformMatrix() Passed!");
				}
			} else {
				ok(false, "ok( gizmo.Math.Polygone.applyTransformMatrix() Passed!");

			}
		} else {
			ok(false, "ok( gizmo.Math.Polygone.applyTransformMatrix() Passed!");

		}
	} else {
		ok(false, "ok( gizmo.Math.Polygone.applyTransformMatrix() Passed!");

	}
});