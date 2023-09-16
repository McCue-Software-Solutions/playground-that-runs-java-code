(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["ace-theme-monokai"],{

/***/ "./node_modules/ace-builds/src-noconflict/theme-monokai.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ace-builds/src-noconflict/theme-monokai.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/monokai-css",["require","exports","module"], function(require, exports, module){module.exports = ".ace-monokai .ace_gutter {\n  background: #2F3129;\n  color: #8F908A\n}\n\n.ace-monokai .ace_print-margin {\n  width: 1px;\n  background: #555651\n}\n\n.ace-monokai {\n  background-color: #272822;\n  color: #F8F8F2\n}\n\n.ace-monokai .ace_cursor {\n  color: #F8F8F0\n}\n\n.ace-monokai .ace_marker-layer .ace_selection {\n  background: #49483E\n}\n\n.ace-monokai.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #272822;\n}\n\n.ace-monokai .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-monokai .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_marker-layer .ace_active-line {\n  background: #202020\n}\n\n.ace-monokai .ace_gutter-active-line {\n  background-color: #272727\n}\n\n.ace-monokai .ace_marker-layer .ace_selected-word {\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_invisible {\n  color: #52524d\n}\n\n.ace-monokai .ace_entity.ace_name.ace_tag,\n.ace-monokai .ace_keyword,\n.ace-monokai .ace_meta.ace_tag,\n.ace-monokai .ace_storage {\n  color: #F92672\n}\n\n.ace-monokai .ace_punctuation,\n.ace-monokai .ace_punctuation.ace_tag {\n  color: #fff\n}\n\n.ace-monokai .ace_constant.ace_character,\n.ace-monokai .ace_constant.ace_language,\n.ace-monokai .ace_constant.ace_numeric,\n.ace-monokai .ace_constant.ace_other {\n  color: #AE81FF\n}\n\n.ace-monokai .ace_invalid {\n  color: #F8F8F0;\n  background-color: #F92672\n}\n\n.ace-monokai .ace_invalid.ace_deprecated {\n  color: #F8F8F0;\n  background-color: #AE81FF\n}\n\n.ace-monokai .ace_support.ace_constant,\n.ace-monokai .ace_support.ace_function {\n  color: #66D9EF\n}\n\n.ace-monokai .ace_fold {\n  background-color: #A6E22E;\n  border-color: #F8F8F2\n}\n\n.ace-monokai .ace_storage.ace_type,\n.ace-monokai .ace_support.ace_class,\n.ace-monokai .ace_support.ace_type {\n  font-style: italic;\n  color: #66D9EF\n}\n\n.ace-monokai .ace_entity.ace_name.ace_function,\n.ace-monokai .ace_entity.ace_other,\n.ace-monokai .ace_entity.ace_other.ace_attribute-name,\n.ace-monokai .ace_variable {\n  color: #A6E22E\n}\n\n.ace-monokai .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F\n}\n\n.ace-monokai .ace_string {\n  color: #E6DB74\n}\n\n.ace-monokai .ace_comment {\n  color: #75715E\n}\n\n.ace-monokai .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-monokai .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";

});

ace.define("ace/theme/monokai",["require","exports","module","ace/theme/monokai-css","ace/lib/dom"], function(require, exports, module){exports.isDark = true;
exports.cssClass = "ace-monokai";
exports.cssText = require("./monokai-css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.require(["ace/theme/monokai"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLXRoZW1lLW1vbm9rYWktZWExNzczZDBiNTViNWEwNmMzZjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsc0dBQXNHLDRDQUE0Qyx3QkFBd0IscUJBQXFCLG9DQUFvQyxlQUFlLDBCQUEwQixrQkFBa0IsOEJBQThCLHFCQUFxQiw4QkFBOEIscUJBQXFCLG1EQUFtRCwwQkFBMEIsMkRBQTJELG9DQUFvQyxHQUFHLDhDQUE4QyxrQ0FBa0MsaURBQWlELDBCQUEwQixnQ0FBZ0MscURBQXFELDBCQUEwQiwwQ0FBMEMsZ0NBQWdDLHVEQUF1RCxnQ0FBZ0MsaUNBQWlDLHFCQUFxQix3SUFBd0kscUJBQXFCLDJFQUEyRSxrQkFBa0Isd0tBQXdLLHFCQUFxQiwrQkFBK0IsbUJBQW1CLGdDQUFnQyw4Q0FBOEMsbUJBQW1CLGdDQUFnQyxxRkFBcUYscUJBQXFCLDRCQUE0Qiw4QkFBOEIsNEJBQTRCLG1IQUFtSCx1QkFBdUIscUJBQXFCLDhLQUE4SyxxQkFBcUIsOENBQThDLHVCQUF1QixxQkFBcUIsOEJBQThCLHFCQUFxQiwrQkFBK0IscUJBQXFCLG9DQUFvQyxtQ0FBbUMsOEhBQThILDJDQUEyQyxtQ0FBbUMsNEhBQTRILEdBQUc7O0FBRW52RixDQUFDOztBQUVELHdJQUF3STtBQUN4STtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLGtCQUFrQjtBQUNuQjtBQUNBLDRCQUE0QixLQUF1RDtBQUNuRjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VpLy4vbm9kZV9tb2R1bGVzL2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtbW9ub2thaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhY2UuZGVmaW5lKFwiYWNlL3RoZW1lL21vbm9rYWktY3NzXCIsW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwibW9kdWxlXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe21vZHVsZS5leHBvcnRzID0gXCIuYWNlLW1vbm9rYWkgLmFjZV9ndXR0ZXIge1xcbiAgYmFja2dyb3VuZDogIzJGMzEyOTtcXG4gIGNvbG9yOiAjOEY5MDhBXFxufVxcblxcbi5hY2UtbW9ub2thaSAuYWNlX3ByaW50LW1hcmdpbiB7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogIzU1NTY1MVxcbn1cXG5cXG4uYWNlLW1vbm9rYWkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjgyMjtcXG4gIGNvbG9yOiAjRjhGOEYyXFxufVxcblxcbi5hY2UtbW9ub2thaSAuYWNlX2N1cnNvciB7XFxuICBjb2xvcjogI0Y4RjhGMFxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogIzQ5NDgzRVxcbn1cXG5cXG4uYWNlLW1vbm9rYWkuYWNlX211bHRpc2VsZWN0IC5hY2Vfc2VsZWN0aW9uLmFjZV9zdGFydCB7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDBweCAjMjcyODIyO1xcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGVwIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDIsIDgyLCAwKVxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9icmFja2V0IHtcXG4gIG1hcmdpbjogLTFweCAwIDAgLTFweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OTQ4M0VcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfbWFya2VyLWxheWVyIC5hY2VfYWN0aXZlLWxpbmUge1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMFxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9ndXR0ZXItYWN0aXZlLWxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyN1xcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zZWxlY3RlZC13b3JkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OTQ4M0VcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfaW52aXNpYmxlIHtcXG4gIGNvbG9yOiAjNTI1MjRkXFxufVxcblxcbi5hY2UtbW9ub2thaSAuYWNlX2VudGl0eS5hY2VfbmFtZS5hY2VfdGFnLFxcbi5hY2UtbW9ub2thaSAuYWNlX2tleXdvcmQsXFxuLmFjZS1tb25va2FpIC5hY2VfbWV0YS5hY2VfdGFnLFxcbi5hY2UtbW9ub2thaSAuYWNlX3N0b3JhZ2Uge1xcbiAgY29sb3I6ICNGOTI2NzJcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfcHVuY3R1YXRpb24sXFxuLmFjZS1tb25va2FpIC5hY2VfcHVuY3R1YXRpb24uYWNlX3RhZyB7XFxuICBjb2xvcjogI2ZmZlxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9jb25zdGFudC5hY2VfY2hhcmFjdGVyLFxcbi5hY2UtbW9ub2thaSAuYWNlX2NvbnN0YW50LmFjZV9sYW5ndWFnZSxcXG4uYWNlLW1vbm9rYWkgLmFjZV9jb25zdGFudC5hY2VfbnVtZXJpYyxcXG4uYWNlLW1vbm9rYWkgLmFjZV9jb25zdGFudC5hY2Vfb3RoZXIge1xcbiAgY29sb3I6ICNBRTgxRkZcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfaW52YWxpZCB7XFxuICBjb2xvcjogI0Y4RjhGMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTI2NzJcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfaW52YWxpZC5hY2VfZGVwcmVjYXRlZCB7XFxuICBjb2xvcjogI0Y4RjhGMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRTgxRkZcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2Vfc3VwcG9ydC5hY2VfY29uc3RhbnQsXFxuLmFjZS1tb25va2FpIC5hY2Vfc3VwcG9ydC5hY2VfZnVuY3Rpb24ge1xcbiAgY29sb3I6ICM2NkQ5RUZcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfZm9sZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTZFMjJFO1xcbiAgYm9yZGVyLWNvbG9yOiAjRjhGOEYyXFxufVxcblxcbi5hY2UtbW9ub2thaSAuYWNlX3N0b3JhZ2UuYWNlX3R5cGUsXFxuLmFjZS1tb25va2FpIC5hY2Vfc3VwcG9ydC5hY2VfY2xhc3MsXFxuLmFjZS1tb25va2FpIC5hY2Vfc3VwcG9ydC5hY2VfdHlwZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzY2RDlFRlxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9lbnRpdHkuYWNlX25hbWUuYWNlX2Z1bmN0aW9uLFxcbi5hY2UtbW9ub2thaSAuYWNlX2VudGl0eS5hY2Vfb3RoZXIsXFxuLmFjZS1tb25va2FpIC5hY2VfZW50aXR5LmFjZV9vdGhlci5hY2VfYXR0cmlidXRlLW5hbWUsXFxuLmFjZS1tb25va2FpIC5hY2VfdmFyaWFibGUge1xcbiAgY29sb3I6ICNBNkUyMkVcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfdmFyaWFibGUuYWNlX3BhcmFtZXRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogI0ZEOTcxRlxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9zdHJpbmcge1xcbiAgY29sb3I6ICNFNkRCNzRcXG59XFxuXFxuLmFjZS1tb25va2FpIC5hY2VfY29tbWVudCB7XFxuICBjb2xvcjogIzc1NzE1RVxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9pbmRlbnQtZ3VpZGUge1xcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFFa2xFUVZRSW1XUFEwRkQwWlhCemQvd1BBQWpWQW94ZVNnTmVBQUFBQUVsRlRrU3VRbUNDKSByaWdodCByZXBlYXQteVxcbn1cXG5cXG4uYWNlLW1vbm9rYWkgLmFjZV9pbmRlbnQtZ3VpZGUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUNDQVlBQUFDWmdiWW5BQUFBRWtsRVFWUUlXMlBRMWRYOXp6Qno1c3ovQUJDY0JGRmVudExsQUFBQUFFbEZUa1N1UW1DQykgcmlnaHQgcmVwZWF0LXk7XFxufVxcblwiO1xuXG59KTtcblxuYWNlLmRlZmluZShcImFjZS90aGVtZS9tb25va2FpXCIsW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwibW9kdWxlXCIsXCJhY2UvdGhlbWUvbW9ub2thaS1jc3NcIixcImFjZS9saWIvZG9tXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe2V4cG9ydHMuaXNEYXJrID0gdHJ1ZTtcbmV4cG9ydHMuY3NzQ2xhc3MgPSBcImFjZS1tb25va2FpXCI7XG5leHBvcnRzLmNzc1RleHQgPSByZXF1aXJlKFwiLi9tb25va2FpLWNzc1wiKTtcbnZhciBkb20gPSByZXF1aXJlKFwiLi4vbGliL2RvbVwiKTtcbmRvbS5pbXBvcnRDc3NTdHJpbmcoZXhwb3J0cy5jc3NUZXh0LCBleHBvcnRzLmNzc0NsYXNzLCBmYWxzZSk7XG5cbn0pOyAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjZS5yZXF1aXJlKFtcImFjZS90aGVtZS9tb25va2FpXCJdLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9