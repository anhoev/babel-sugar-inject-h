"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var syntaxJsx=_interopDefault(require("@babel/plugin-syntax-jsx"));const entry="vue-function-api",firstParamIsH=(e,n)=>{const t=n.get("params");return t.length&&e.isIdentifier(t[0])&&"h"===t[0].node.name},hasJSX=(e,n)=>{const t={hasJSX:!1};n.traverse({JSXElement(){this.hasJSX=!0}},t);return t.hasJSX},isInsideJSXExpression=(e,n)=>{if(!n.parentPath)return!1;if(e.isJSXExpressionContainer(n.parentPath))return!0;return isInsideJSXExpression(e,n.parentPath)};var index=e=>{const n=e.types;return{inherits:syntaxJsx,visitor:{Program(e){e.traverse({"ObjectMethod|ClassMethod"(e){if(!firstParamIsH(n,e)&&hasJSX(n,e)&&!isInsideJSXExpression(n,e)){const t="render"===e.node.key.name,i="ObjectMethod"===e.type&&"setup"===e.node.key.name;e.get("body").unshiftContainer("body",n.variableDeclaration("const",[n.variableDeclarator(n.identifier("h"),i?n.memberExpression(n.callExpression(n.identifier("require"),[n.stringLiteral(entry)]),n.identifier("createElement")):t?n.memberExpression(n.identifier("arguments"),n.numericLiteral(0),!0):n.memberExpression(n.thisExpression(),n.identifier("$createElement")))]))}}})}}}};module.exports=index;
