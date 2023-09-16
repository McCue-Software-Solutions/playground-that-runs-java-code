(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["ace-theme-cobalt"],{

/***/ "./node_modules/ace-builds/src-noconflict/theme-cobalt.js":
/*!****************************************************************!*\
  !*** ./node_modules/ace-builds/src-noconflict/theme-cobalt.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/cobalt-css",["require","exports","module"], function(require, exports, module){module.exports = ".ace-cobalt .ace_gutter {\n  background: #011e3a;\n  color: rgb(128,145,160)\n}\n\n.ace-cobalt .ace_print-margin {\n  width: 1px;\n  background: #555555\n}\n\n.ace-cobalt {\n  background-color: #002240;\n  color: #FFFFFF\n}\n\n.ace-cobalt .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-cobalt .ace_marker-layer .ace_selection {\n  background: rgba(179, 101, 57, 0.75)\n}\n\n.ace-cobalt.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #002240;\n}\n\n.ace-cobalt .ace_marker-layer .ace_step {\n  background: rgb(127, 111, 19)\n}\n\n.ace-cobalt .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 255, 255, 0.15)\n}\n\n.ace-cobalt .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.35)\n}\n\n.ace-cobalt .ace_gutter-active-line {\n  background-color: rgba(0, 0, 0, 0.35)\n}\n\n.ace-cobalt .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(179, 101, 57, 0.75)\n}\n\n.ace-cobalt .ace_invisible {\n  color: rgba(255, 255, 255, 0.15)\n}\n\n.ace-cobalt .ace_keyword,\n.ace-cobalt .ace_meta {\n  color: #FF9D00\n}\n\n.ace-cobalt .ace_constant,\n.ace-cobalt .ace_constant.ace_character,\n.ace-cobalt .ace_constant.ace_character.ace_escape,\n.ace-cobalt .ace_constant.ace_other {\n  color: #FF628C\n}\n\n.ace-cobalt .ace_invalid {\n  color: #F8F8F8;\n  background-color: #800F00\n}\n\n.ace-cobalt .ace_support {\n  color: #80FFBB\n}\n\n.ace-cobalt .ace_support.ace_constant {\n  color: #EB939A\n}\n\n.ace-cobalt .ace_fold {\n  background-color: #FF9D00;\n  border-color: #FFFFFF\n}\n\n.ace-cobalt .ace_support.ace_function {\n  color: #FFB054\n}\n\n.ace-cobalt .ace_storage {\n  color: #FFEE80\n}\n\n.ace-cobalt .ace_entity {\n  color: #FFDD00\n}\n\n.ace-cobalt .ace_string {\n  color: #3AD900\n}\n\n.ace-cobalt .ace_string.ace_regexp {\n  color: #80FFC2\n}\n\n.ace-cobalt .ace_comment {\n  font-style: italic;\n  color: #0088FF\n}\n\n.ace-cobalt .ace_heading,\n.ace-cobalt .ace_markup.ace_heading {\n  color: #C8E4FD;\n  background-color: #001221\n}\n\n.ace-cobalt .ace_list,\n.ace-cobalt .ace_markup.ace_list {\n  background-color: #130D26\n}\n\n.ace-cobalt .ace_variable {\n  color: #CCCCCC\n}\n\n.ace-cobalt .ace_variable.ace_language {\n  color: #FF80E1\n}\n\n.ace-cobalt .ace_meta.ace_tag {\n  color: #9EFFFF\n}\n\n.ace-cobalt .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHCLSvkPAAP3AgSDTRd4AAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-cobalt .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";

});

ace.define("ace/theme/cobalt",["require","exports","module","ace/theme/cobalt-css","ace/lib/dom"], function(require, exports, module){exports.isDark = true;
exports.cssClass = "ace-cobalt";
exports.cssText = require("./cobalt-css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.require(["ace/theme/cobalt"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLXRoZW1lLWNvYmFsdC0yZGYxN2Y5NGE1ZTU0ODUzMjAzYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxR0FBcUcsMkNBQTJDLHdCQUF3Qiw4QkFBOEIsbUNBQW1DLGVBQWUsMEJBQTBCLGlCQUFpQiw4QkFBOEIscUJBQXFCLDZCQUE2QixxQkFBcUIsa0RBQWtELDJDQUEyQywwREFBMEQsb0NBQW9DLEdBQUcsNkNBQTZDLG9DQUFvQyxnREFBZ0QsMEJBQTBCLGtEQUFrRCxvREFBb0Qsc0NBQXNDLHlDQUF5Qyw0Q0FBNEMsc0RBQXNELGlEQUFpRCxnQ0FBZ0MsdUNBQXVDLHNEQUFzRCxxQkFBcUIsb0tBQW9LLHFCQUFxQiw4QkFBOEIsbUJBQW1CLGdDQUFnQyw4QkFBOEIscUJBQXFCLDJDQUEyQyxxQkFBcUIsMkJBQTJCLDhCQUE4Qiw0QkFBNEIsMkNBQTJDLHFCQUFxQiw4QkFBOEIscUJBQXFCLDZCQUE2QixxQkFBcUIsNkJBQTZCLHFCQUFxQix3Q0FBd0MscUJBQXFCLDhCQUE4Qix1QkFBdUIscUJBQXFCLG9FQUFvRSxtQkFBbUIsZ0NBQWdDLDhEQUE4RCxnQ0FBZ0MsK0JBQStCLHFCQUFxQiw0Q0FBNEMscUJBQXFCLG1DQUFtQyxxQkFBcUIsbUNBQW1DLG1DQUFtQyw4SEFBOEgsMENBQTBDLG1DQUFtQyw0SEFBNEgsR0FBRzs7QUFFN3ZGLENBQUM7O0FBRUQsc0lBQXNJO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsa0JBQWtCO0FBQ25CO0FBQ0EsNEJBQTRCLEtBQXVEO0FBQ25GO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWkvLi9ub2RlX21vZHVsZXMvYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1jb2JhbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWNlLmRlZmluZShcImFjZS90aGVtZS9jb2JhbHQtY3NzXCIsW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwibW9kdWxlXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe21vZHVsZS5leHBvcnRzID0gXCIuYWNlLWNvYmFsdCAuYWNlX2d1dHRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDExZTNhO1xcbiAgY29sb3I6IHJnYigxMjgsMTQ1LDE2MClcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9wcmludC1tYXJnaW4ge1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU1NTVcXG59XFxuXFxuLmFjZS1jb2JhbHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjI0MDtcXG4gIGNvbG9yOiAjRkZGRkZGXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfY3Vyc29yIHtcXG4gIGNvbG9yOiAjRkZGRkZGXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTc5LCAxMDEsIDU3LCAwLjc1KVxcbn1cXG5cXG4uYWNlLWNvYmFsdC5hY2VfbXVsdGlzZWxlY3QgLmFjZV9zZWxlY3Rpb24uYWNlX3N0YXJ0IHtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMHB4ICMwMDIyNDA7XFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc3RlcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTI3LCAxMTEsIDE5KVxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX21hcmtlci1sYXllciAuYWNlX2JyYWNrZXQge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX21hcmtlci1sYXllciAuYWNlX2FjdGl2ZS1saW5lIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSlcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9ndXR0ZXItYWN0aXZlLWxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KVxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX21hcmtlci1sYXllciAuYWNlX3NlbGVjdGVkLXdvcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzksIDEwMSwgNTcsIDAuNzUpXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfaW52aXNpYmxlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2Vfa2V5d29yZCxcXG4uYWNlLWNvYmFsdCAuYWNlX21ldGEge1xcbiAgY29sb3I6ICNGRjlEMDBcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9jb25zdGFudCxcXG4uYWNlLWNvYmFsdCAuYWNlX2NvbnN0YW50LmFjZV9jaGFyYWN0ZXIsXFxuLmFjZS1jb2JhbHQgLmFjZV9jb25zdGFudC5hY2VfY2hhcmFjdGVyLmFjZV9lc2NhcGUsXFxuLmFjZS1jb2JhbHQgLmFjZV9jb25zdGFudC5hY2Vfb3RoZXIge1xcbiAgY29sb3I6ICNGRjYyOENcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9pbnZhbGlkIHtcXG4gIGNvbG9yOiAjRjhGOEY4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMEYwMFxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX3N1cHBvcnQge1xcbiAgY29sb3I6ICM4MEZGQkJcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9zdXBwb3J0LmFjZV9jb25zdGFudCB7XFxuICBjb2xvcjogI0VCOTM5QVxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX2ZvbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUQwMDtcXG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRlxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX3N1cHBvcnQuYWNlX2Z1bmN0aW9uIHtcXG4gIGNvbG9yOiAjRkZCMDU0XFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2Vfc3RvcmFnZSB7XFxuICBjb2xvcjogI0ZGRUU4MFxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX2VudGl0eSB7XFxuICBjb2xvcjogI0ZGREQwMFxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX3N0cmluZyB7XFxuICBjb2xvcjogIzNBRDkwMFxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX3N0cmluZy5hY2VfcmVnZXhwIHtcXG4gIGNvbG9yOiAjODBGRkMyXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfY29tbWVudCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzAwODhGRlxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX2hlYWRpbmcsXFxuLmFjZS1jb2JhbHQgLmFjZV9tYXJrdXAuYWNlX2hlYWRpbmcge1xcbiAgY29sb3I6ICNDOEU0RkQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxMjIxXFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfbGlzdCxcXG4uYWNlLWNvYmFsdCAuYWNlX21hcmt1cC5hY2VfbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMwRDI2XFxufVxcblxcbi5hY2UtY29iYWx0IC5hY2VfdmFyaWFibGUge1xcbiAgY29sb3I6ICNDQ0NDQ0NcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV92YXJpYWJsZS5hY2VfbGFuZ3VhZ2Uge1xcbiAgY29sb3I6ICNGRjgwRTFcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9tZXRhLmFjZV90YWcge1xcbiAgY29sb3I6ICM5RUZGRkZcXG59XFxuXFxuLmFjZS1jb2JhbHQgLmFjZV9pbmRlbnQtZ3VpZGUge1xcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFFa2xFUVZRSW1XTmdZR0JnWUhDTFN2a1BBQVAzQWdTRFRSZDRBQUFBQUVsRlRrU3VRbUNDKSByaWdodCByZXBlYXQteVxcbn1cXG5cXG4uYWNlLWNvYmFsdCAuYWNlX2luZGVudC1ndWlkZS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFFa2xFUVZRSVcyUFExZFg5enpCejVzei9BQkNjQkZGZW50TGxBQUFBQUVsRlRrU3VRbUNDKSByaWdodCByZXBlYXQteTtcXG59XFxuXCI7XG5cbn0pO1xuXG5hY2UuZGVmaW5lKFwiYWNlL3RoZW1lL2NvYmFsdFwiLFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIm1vZHVsZVwiLFwiYWNlL3RoZW1lL2NvYmFsdC1jc3NcIixcImFjZS9saWIvZG9tXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe2V4cG9ydHMuaXNEYXJrID0gdHJ1ZTtcbmV4cG9ydHMuY3NzQ2xhc3MgPSBcImFjZS1jb2JhbHRcIjtcbmV4cG9ydHMuY3NzVGV4dCA9IHJlcXVpcmUoXCIuL2NvYmFsdC1jc3NcIik7XG52YXIgZG9tID0gcmVxdWlyZShcIi4uL2xpYi9kb21cIik7XG5kb20uaW1wb3J0Q3NzU3RyaW5nKGV4cG9ydHMuY3NzVGV4dCwgZXhwb3J0cy5jc3NDbGFzcywgZmFsc2UpO1xuXG59KTsgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBhY2UucmVxdWlyZShbXCJhY2UvdGhlbWUvY29iYWx0XCJdLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9