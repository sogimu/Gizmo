/*window.Type = gizmoJs.Type;
        window.TString = window.Type.TString;
        window.TNumber = window.Type.TNumber;
        window.TNumberPos = window.Type.TNumberPos;
        window.TBool = window.Type.TBool;
        window.TArray = window.Type.TArray;
        window.TFunc = window.Type.TFunc;
        window.TDate = window.Type.TDate;
        window.TRegExp = window.Type.TRegExp;
        window.TObject = window.Type.TObject;
        window.TArmObject = window.Type.TArmObject;
        window.TArmShape = window.Type.TArmShape;
        window.isTString = function(O) { return Type.is("String",O) == "String"?true:false; };
        window.isTNumber = function(O) { return Type.is("Number",O) == "Number"?true:false; };
        window.isTNumberPos = function(O) { (Type.is("Number",O) && O>=0)?true:false; };
        window.isTBool = function(O) { return Type.is("Boolean",O); };
        window.isTArray = function(O) { return Type.is("Array",O); };
        window.isTFunc = function(O) { return Type.is("Function",O); };
        window.isTDate = function(O) { return Type.is("Date",O); };
        window.isTRegExp = function(O) { return Type.is("RegExp",O); };
        window.isTObject = function(O) { return Type.is("Object",O); };
        window.is = window.Type.is;
        window.type = window.Type.type;
        window.isSet = window.Type.isSet;
        
		window.isTArmObject = function(O) {
            if( Type.isSet(O) && Type.is("Object",O) && Type.isSet(O.type) && O.type == "object" ) {
                return true;
            } else {
                return false;
            }
        };
        window.isTArmShape = function(O) {
            if( Type.isSet(O) && Type.is("Object",O) && Type.isSet(O.type) && O.type == "shape" ) {
                return true;
            } else {
                return false;
            }
        };
		window.isTPoint = function(O) {
            if( Type.isSet(O) && Type.is("Object",O) && Type.isSet(O.x) && Type.isSet(O.y) ) {
                return true;
            } else {
                return false;
            }
        };
        window.Class = gizmoJs.Class;
		*/

module( "type" );
test( "type", function() {
	//String
	var obj = ["123123", "323werferf", "erfer2323", "3223weewf23423", "awfaerf"];
	for(var i  in obj) {
		ok( type(obj[i]) == "String", " ok( type(\""+obj[i]+"\") == \"String\" Passed!" );
	}	
	//Number
	var obj = [123123];
	for(var i  in obj) {
		ok( type(obj[i]) == "Number", " ok( type("+obj[i]+") == \"Number\" Passed!" );
	}
	
});	

module( "TString" );
test( "TString", function() {

	var obj = ["werf", "323.34", ".434", "-.32", "-43332", "new Date()"];
	for(var i  in obj) {		
		try {
			var res = TString(obj[i]);
			ok( true, "Passed! TString(\""+obj[i]+"\")= \""+obj[i]+"\"" );
					
		}	
		catch(e) {
			ok( false , "Fail! TString(\""+obj[i]+"\") = \""+obj[i]+"\"" );
		}
	}
	
	var obj = [123123, 323.34, .434, -.32, -43332, new Date(), new RegExp()];
	for(var i  in obj) {		
		try {
			var res = TString(obj[i]);
			ok( false , "Fail! TString("+obj[i]+") == String" );		
		
		}	
		catch(e) {
			ok( true, "Passed! TString("+obj[i]+") != String" );
			
		}
	}
	
});

module( "TNumber" );
test( "TNumber", function() {

	var obj = [323.34, .434, -.32, -43332];
	for(var i  in obj) {		
		try {
			var res = TNumber(obj[i]);
			ok( true, "Passed! TNumber("+obj[i]+")= "+obj[i]+"" );
					
		}	
		catch(e) {
			ok( false , "Fail! TNumber("+obj[i]+") = "+obj[i]+"" );
		}
	}
	
	var obj = ["123123", "323.34", ".434", "-.32", "-43332", "0.345", "+245", "42sfsr", "aeafer", new Date(), new RegExp()];
	for(var i  in obj) {		
		try {
			var res = TNumber(obj[i]);
			ok( false , "Fail! TNumber("+obj[i]+") == Number" );		
		
		}	
		catch(e) {
			ok( true, "Passed! TNumber("+obj[i]+") != Number" );
			
		}
	}
	
});

module( "TNumberPos" );
test( "TNumberPos", function() {

	var obj = [323.34, .434, +.32, 0.43332, 342];
	for(var i  in obj) {		
		try {
			var res = TNumberPos(obj[i]);
			ok( true, "Passed! TNumberPos("+obj[i]+") == "+obj[i]+"" );
					
		}	
		catch(e) {
			ok( false , "Fail! TNumberPos("+obj[i]+") = "+obj[i]+"" );
		}
	}
	
	var obj = [-123123, -323.34, -.434, -43332, new Date(), new RegExp(), "-.32", "-43332"];
	for(var i  in obj) {		
		try {
			var res = TNumberPos(obj[i]);
			ok( false , "Fail! TNumberPos("+obj[i]+") == TNumberPos" );		
		
		}	
		catch(e) {
			ok( true, "Passed! TNumberPos("+obj[i]+") != TNumberPos" );
			
		}
	}
	
});

module( "TBool" );
test( "TBool", function() {

	var obj = [true, false];
	for(var i  in obj) {		
		try {
			var res = TBool(obj[i]);
			ok( true, "Passed! TBool("+obj[i]+") == "+obj[i]+"" );
					
		}	
		catch(e) {
			ok( false , "Fail! TBool("+obj[i]+") == "+obj[i]+"" );
		}
	}
	
	var obj = [-123123, -323.34, -.434, -43332, 123, 0.432, -0.245, 4.25, "-123123", "-323.34", "-.434", "-43332", "123", "0.432", "-0.245", "4.25", "qaera", new Date(), new RegExp(), "-.32", "-43332", [], {} ];
	for(var i  in obj) {		
		try {
			var res = TBool(obj[i]);
			ok( false , "Fail! TBool("+obj[i]+") == TBool" );		
		
		}	
		catch(e) {
			ok( true, "Passed! TBool("+obj[i]+") != TBool" );
			
		}
	}
	
});

module( "TArray" );
test( "TArray", function() {

	var obj = [ [], [34,235,245], ["q43",243], [234,"wr"], [0],["aerf"], [new Date()], [[]] ];
	for(var i  in obj) {		
		try {
			var res = TArray(obj[i]);
			ok( true, "Passed! TArray("+obj[i]+") == "+obj[i]+"" );
					
		}	
		catch(e) {
			ok( false , "Fail! TArray("+obj[i]+") == "+obj[i]+"" );
		}
	}
	
	var obj = [-123123, -323.34, -.434, -43332, 123, 0.432, -0.245, 4.25, "-123123", "-323.34", "-.434", "-43332", "123", "0.432", "-0.245", "4.25", "qaera", new Date(), new RegExp(), "-.32", "-43332", {} ];
	for(var i  in obj) {		
		try {
			var res = TArray(obj[i]);
			ok( false , "Fail! TArray("+obj[i]+") == TArray" );		
		
		}	
		catch(e) {
			ok( true, "Passed! TArray("+obj[i]+") != TArray" );
			
		}
	}
	
});

var name = "TFunc"
var func = TFunc;
var true_obj = [ function() {} ];
var false_obj = [-123123, -323.34, -.434, -43332, 123, 0.432, -0.245, 4.25, "-123123", "-323.34", "-.434", "-43332", "123", "0.432", "-0.245", "4.25", "qaera", new Date(), new RegExp(), "-.32", "-43332", {}, [] ];


Check({name: "TFunc",
	   func: TFunc,
	   true_obj: [ function() {} ],
	   false_obj: [-123123, -323.34, -.434, -43332, 123, 0.432, -0.245, 4.25, "-123123", "-323.34", "-.434", "-43332", "123", "0.432", "-0.245", "4.25", "qaera", new Date(), new RegExp(), "-.32", "-43332", {}]});		
	   
	   
module( "Class" );
test( "safe mode ok", function() {
	try {
		var CLASS = Class({
			construct: function(O){
				if(typeof(O) != 'undefined') {
					this.a = O.a || this.a;
					this.b = O.b || this.b;
					this.c = O.c || this.c;
				}
			},
			vars: {
				a: [],
				b: "",
				c: 245

			},

			methods:{
				do: function() {
					this.a = 24;
					this.b = [];
					this.a = "esg22swaf";
				}
			}
		},{mode:'safe'});
		var obj = new CLASS({a:23,b:23,c:35});
		obj.do();
		ok( 1 != "1", "Fail!" );

	}
	catch(e) {
		ok( 1 == "1", "Passed!" );

	}

});
