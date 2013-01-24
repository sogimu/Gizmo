var Check = function(O) {
	if( !(O.name && O.func && O.true_obj && O.false_obj) ) throw TypeError("Check: is't params!"); 

	var name = O.name
	var func = O.func;
	var true_obj = O.true_obj;
	var false_obj = O.false_obj;

	module( name );
	test( name, function() {
		for(var i  in true_obj) {		
			try {
				func(true_obj[i]);
				ok( true, "Passed! "+name+"("+true_obj[i]+") == "+true_obj[i]+"" );
						
			}	
			catch(e) {
				ok( false , "Fail! "+name+"("+true_obj[i]+") == "+true_obj[i]+"" );
			}
		}
		
		for(var i  in false_obj) {		
			try {
				func(false_obj[i]);
				ok( false , "Fail! "+name+"("+false_obj[i]+") == "+name+"" );		
			
			}	
			catch(e) {
				ok( true, "Passed! "+name+"("+false_obj[i]+") != "+name+"" );
				
			}
		}
		
	});
}
