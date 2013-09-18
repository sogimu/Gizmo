#!/bin/bash

# --compilation_level
# WHITESPACE_ONLY
# SIMPLE_OPTIMIZATIONS
# ADVANCED_OPTIMIZATIONS

NAME="gizmo"
VERSION="0.2.9"
RASHIR="js"

FILE_NAME=$NAME-$VERSION.$RASHIR
FILE_NAME_WITH_OUT_VERSION=$NAME.$RASHIR

#COMPILATION_LEVEL="WHITESPACE_ONLY"
COMPILATION_LEVEL="SIMPLE_OPTIMIZATIONS"
#COMPILATION_LEVEL="ADVANCED_OPTIMIZATIONS"

echo "$FILE_NAME"

java -jar compiler.jar --js modules/Gizmo.js --js modules/BaseVariableFunction.js --js modules/Filter.js --js modules/Checks.js --js modules/Class.js --js modules/Sorts.js --js modules/Math.js --js modules/Matrix.js --js modules/Point2D.js --js modules/Vector2D.js --js modules/Polygone.js --js plugins/IframeAjax.js --compilation_level "$COMPILATION_LEVEL" --formatting pretty_print --language_in ECMASCRIPT5 --js_output_file ../$FILE_NAME

echo "$FILE_NAME_WITH_OUT_VERSION"
cp ../"$FILE_NAME" ../"$FILE_NAME_WITH_OUT_VERSION"