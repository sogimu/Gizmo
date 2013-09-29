(function() {
    var gizmo = function() {

    }
    gizmo.prototype = {
        types: ["String","Number","Array","Function","Date","Object","RegExp","Bool"],
        About: {},
        Modules: {},
        Plugins: {}
    };
    window.gizmo = new gizmo();
}());