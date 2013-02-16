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
console.log(a.getVar('var1'));
console.log(a.getVar('var2'));

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
//a.we = 'www';
b1 = new B(2);
b2 = new B(4);

//b2.we.ad = "wefwehjfhkj";
//b1.arr[0]=2;

console.log(b1.we === b2.we);
console.log(b1.arr === b2.arr);

console.log(b1)
console.log(b2)

M1 = new gizmo.Matrix([
  [1,7,3],
  [9,4,0],
  [2,7,1]
]);

var M2 = new gizmo.Matrix([
  [6,2,8],
  [9,1,3],
  [0,7,6]
]);

M = M1.multiply(M2);
