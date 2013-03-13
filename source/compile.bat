::--compilation_level
::WHITESPACE_ONLY
::SIMPLE_OPTIMIZATIONS
::ADVANCED_OPTIMIZATIONS

java -jar ..\..\compiler.jar --js modules\gizmo.js --js modules\baseVariableFunction.js --js modules\filter.js --js modules\Checks.js --js modules\class.js --js plugins\iframeAjax.js --js plugins\matrix.js --compilation_level WHITESPACE_ONLY --formatting pretty_print --language_in ECMASCRIPT5 --js_output_file ..\gizmo-0.2.7.js
::java -jar C:\XAMPP\htdocs\compiler.jar --help


pause