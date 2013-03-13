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
	A = gizmo.Class({
		Initialize: function() {
	    },
	    Statics: {
	        we: {ad: 'wefwe'},
			arr: [1,2,3]
	    },
		Methods: {
			run: function() {
				return 'wef';
			}
		}
	});
	B = gizmo.Class({
	    Extend: A,
	    Initialize: function(){}
	});
	a = new A(42,43);

	b1 = new B(2);
	b2 = new B(4);

	ok( !(b1.we === b2.we) && !(b1.arr === b2.arr), "gizmo.Class (checking the incompatibility of class objects fields) Passed!" );
	//////////////////


});