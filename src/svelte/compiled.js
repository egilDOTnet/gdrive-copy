!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 18);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function assign(target) {
        for (var i = 1; i < arguments.length; i += 1) {
            var source = arguments[i];
            for (var k in source) target[k] = source[k];
        }
        return target;
    }
    function appendNode(node, target) {
        target.appendChild(node);
    }
    function insertNode(node, target, anchor) {
        target.insertBefore(node, anchor);
    }
    function detachNode(node) {
        node.parentNode.removeChild(node);
    }
    function destroyEach(iterations, detach, start) {
        for (var i = start; i < iterations.length; i += 1) iterations[i] && iterations[i].destroy(detach);
    }
    function createElement(name) {
        return document.createElement(name);
    }
    function createSvgElement(name) {
        return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    function createText(data) {
        return document.createTextNode(data);
    }
    function addEventListener(node, event, handler) {
        node.addEventListener(event, handler, !1);
    }
    function removeEventListener(node, event, handler) {
        node.removeEventListener(event, handler, !1);
    }
    function setAttribute(node, attribute, value) {
        node.setAttribute(attribute, value);
    }
    function differs(a, b) {
        return a !== b || a && "object" == typeof a || "function" == typeof a;
    }
    function dispatchObservers(component, group, newState, oldState) {
        for (var key in group) if (key in newState) {
            var newValue = newState[key], oldValue = oldState[key];
            if (differs(newValue, oldValue)) {
                var callbacks = group[key];
                if (!callbacks) continue;
                for (var i = 0; i < callbacks.length; i += 1) {
                    var callback = callbacks[i];
                    callback.__calling || (callback.__calling = !0, callback.call(component, newValue, oldValue), 
                    callback.__calling = !1);
                }
            }
        }
    }
    function get(key) {
        return key ? this._state[key] : this._state;
    }
    function fire(eventName, data) {
        var handlers = eventName in this._handlers && this._handlers[eventName].slice();
        if (handlers) for (var i = 0; i < handlers.length; i += 1) handlers[i].call(this, data);
    }
    function observe(key, callback, options) {
        var group = options && options.defer ? this._observers.post : this._observers.pre;
        return (group[key] || (group[key] = [])).push(callback), options && !1 === options.init || (callback.__calling = !0, 
        callback.call(this, this._state[key]), callback.__calling = !1), {
            cancel: function() {
                var index = group[key].indexOf(callback);
                ~index && group[key].splice(index, 1);
            }
        };
    }
    function on(eventName, handler) {
        if ("teardown" === eventName) return this.on("destroy", handler);
        var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
        return handlers.push(handler), {
            cancel: function() {
                var index = handlers.indexOf(handler);
                ~index && handlers.splice(index, 1);
            }
        };
    }
    function set(newState) {
        this._set(assign({}, newState)), this._root._flush();
    }
    function _flush() {
        if (this._renderHooks) for (;this._renderHooks.length; ) this._renderHooks.pop()();
    }
    __webpack_require__.d(__webpack_exports__, "m", function() {
        return differs;
    }), __webpack_require__.d(__webpack_exports__, "h", function() {
        return dispatchObservers;
    }), __webpack_require__.d(__webpack_exports__, "g", function() {
        return proto;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return appendNode;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return insertNode;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return detachNode;
    }), __webpack_require__.d(__webpack_exports__, "n", function() {
        return destroyEach;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return createElement;
    }), __webpack_require__.d(__webpack_exports__, "l", function() {
        return createSvgElement;
    }), __webpack_require__.d(__webpack_exports__, "i", function() {
        return createText;
    }), __webpack_require__.d(__webpack_exports__, "j", function() {
        return addEventListener;
    }), __webpack_require__.d(__webpack_exports__, "k", function() {
        return removeEventListener;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return setAttribute;
    }), __webpack_require__.d(__webpack_exports__, "f", function() {
        return assign;
    });
    var proto = {
        get: get,
        fire: fire,
        observe: observe,
        on: on,
        set: set,
        _flush: _flush
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function add_css() {
        var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("style");
        style.id = "svelte-691425387-style", style.textContent = "\n    \n    \n\n    [svelte-691425387].spinner, [svelte-691425387] .spinner {\n        -webkit-animation: icon-spin 0.75s infinite linear;\n        animation: svelte-691425387-icon-spin 0.75s infinite linear;\n        width: 1em;\n        height: 1em;\n        border: 0.25em solid #777;\n        border-right-color: #7CB7DE;\n        border-radius: 50%;\n        display: inline-block;\n    }\n\n\n    \n\n    @-webkit-keyframes icon-spin {\n        [svelte-691425387]0%, [svelte-691425387] 0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        [svelte-691425387]100%, [svelte-691425387] 100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes svelte-691425387-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(style, document.head);
    }
    function create_main_fragment(state, component) {
        var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(span, "svelte-691425387", ""), 
        span.className = "rotate-contents";
        var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("i");
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(i, span), 
        i.className = "spinner", {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(span, target, anchor);
            },
            destroy: function(detach) {
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(span);
            }
        };
    }
    function Spinner(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, document.getElementById("svelte-691425387-style") || add_css(), 
        this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Spinner.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Spinner.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, Spinner.prototype.teardown = Spinner.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Spinner;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        function mouseup_handler(event) {
            component.handleMouse(event);
        }
        function keyup_handler(event) {
            component.handleKey(event);
        }
        var text_value, text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(text_value = state.selectText), text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.className = "folderSelect";
        var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("button");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(button, div), 
        button.type = "button", button.id = "selectFolderButton", button.className = "btn btn--small selectFolderButton", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Select Folder"), button), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n    or\n    "), div);
        var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label, div), 
        label.htmlFor = "newFolder", label.className = "textfield";
        var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input, label), 
        input.type = "text", input.id = "folderTextbox", input.name = "newFolder", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n        "), label);
        var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span, label), 
        span.className = "textfield__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(span, "mouseup", mouseup_handler), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(span, "keyup", keyup_handler), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Paste folder URL (Ctrl-V)"), span);
        var text_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_1.className = "getFolderErrors";
        var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), if_block = state.findingFolder && create_if_block(state, component), text_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n\n"), div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_2.className = "selectedFolderInfo";
        var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_1, div_2), 
        span_1.className = "folderName", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("   \n    "), div_2);
        var button_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("button");
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(button_1, div_2), 
        button_1.type = "reset", button_1.className = "btn  btn--small selectOtherFolder", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Select other folder"), button_1), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_6, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_7, target, anchor), 
                if_block && if_block.mount(target, anchor), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_8, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_2, target, anchor);
            },
            update: function(changed, state) {
                text_value !== (text_value = state.selectText) && (text.data = text_value), state.findingFolder ? if_block || (if_block = create_if_block(state, component), 
                if_block.mount(text_8.parentNode, text_8)) : if_block && (if_block.destroy(!0), 
                if_block = null);
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(span, "mouseup", mouseup_handler), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(span, "keyup", keyup_handler), 
                if_block && if_block.destroy(detach), detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_6), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_7), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_8), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_2));
            }
        };
    }
    function create_if_block(state, component) {
        var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.className = "folderLookup", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Finding folder..."), div);
        var spinner = new __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__.a({
            target: div,
            _root: component._root
        });
        return {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor);
            },
            destroy: function(detach) {
                spinner.destroy(!1), detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div);
            }
        };
    }
    function SelectFolder(options) {
        options = options || {}, this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(template.data(), options.data), 
        this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._renderHooks = [], this._fragment = create_main_fragment(this._state, this), 
        options.target && this._fragment.mount(options.target, null), this._flush();
    }
    var __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        var picker = __webpack_require__(17), parseId = __webpack_require__(16), getFileData = function(e) {
            if ("" !== e.target.value) {
                clearInterval(interval);
                var id = parseId(e.target.value);
                google.script.run.withSuccessHandler(function(metadata) {
                    picker.setSelectedFolder({
                        srcId: metadata.id,
                        srcParentId: metadata.parents[0].id,
                        srcName: metadata.title,
                        destName: "Copy of " + metadata.title
                    });
                }).withFailureHandler(function(msg) {
                    $(".folderSelect").hide(), $(".folderLookup").hide(), $(".selectedFolderInfo").show(), 
                    $(".getFolderErrors").text("Error: " + msg + "<br>You may not have permission to copy this folder.").show();
                }).getMetadata(id);
            }
            return !1;
        };
        return {
            data: function() {
                return {
                    interval: {}
                };
            },
            methods: {
                handleMouse: function(e) {
                    if (2 === e.button) {
                        var g = function() {
                            return getFileData(e);
                        };
                        return void set({
                            interval: setInterval(g, 500)
                        });
                    }
                    getFileData(e);
                },
                handleKey: function(e) {
                    getFileData(e);
                }
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(SelectFolder.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    SelectFolder.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState), 
        this._flush();
    }, SelectFolder.prototype.teardown = SelectFolder.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = SelectFolder;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var text_value, button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("button");
        button.type = "submit", button.className = "btn";
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(text_value = state.buttonText);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(text, button), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(button, target, anchor);
            },
            update: function(changed, state) {
                text_value !== (text_value = state.buttonText) && (text.data = text_value);
            },
            destroy: function(detach) {
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(button);
            }
        };
    }
    function SubmitButton(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(SubmitButton.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    SubmitButton.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, SubmitButton.prototype.teardown = SubmitButton.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = SubmitButton;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_3__components_Resume__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_4__components_Pause__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_5__components_FAQ__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_6__components_icons_Spinner__ = __webpack_require__(1);
    new __WEBPACK_IMPORTED_MODULE_0__components_App__.a({
        target: document.querySelector("#app"),
        data: {
            views: [ {
                id: "about",
                title: "About",
                component: __WEBPACK_IMPORTED_MODULE_1__components_About__.a
            }, {
                id: "start",
                title: "Start",
                component: __WEBPACK_IMPORTED_MODULE_2__components_Start__.a
            }, {
                id: "resume",
                title: "Resume",
                component: __WEBPACK_IMPORTED_MODULE_3__components_Resume__.a
            }, {
                id: "pause",
                title: "Pause",
                component: __WEBPACK_IMPORTED_MODULE_4__components_Pause__.a
            }, {
                id: "faq",
                title: "FAQ",
                component: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__.a
            } ],
            active: "start"
        },
        components: {
            About: __WEBPACK_IMPORTED_MODULE_1__components_About__.a,
            Start: __WEBPACK_IMPORTED_MODULE_2__components_Start__.a,
            Resume: __WEBPACK_IMPORTED_MODULE_3__components_Resume__.a,
            Pause: __WEBPACK_IMPORTED_MODULE_4__components_Pause__.a,
            FAQ: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__.a
        }
    }), new __WEBPACK_IMPORTED_MODULE_6__components_icons_Spinner__.a({
        target: document.getElementById("spinner")
    });
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var h3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("General info"), h3);
        var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder."), p);
        var text_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level."), p_1);
        var text_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."), p_2);
        var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("This app is licensed under the "), p_3);
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a, p_3), 
        a.href = "https://opensource.org/licenses/BSD-3-Clause", a.target = "_blank", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("3-clause BSD License"), a), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(".  Feel free to reuse or distribute this code in any way \n    you see fit. You can find the most up-to-date source code on "), p_3);
        var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_1, p_3), 
        a_1.href = "http://www.github.com/ericyd/gdrive-copy", a_1.target = "_blank", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Github"), a_1), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("."), p_3);
        var text_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("If you would like to run your own version of the code but do not come from a technical background, you can \n    follow "), p_4);
        var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_2, p_4), 
        a_2.href = "https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md", 
        a_2.target = "_blank", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("this guide"), a_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" to launch your own, private version of the app."), p_4);
        var text_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), h3_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Getting started"), h3_1);
        var text_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("To get started, simply select your folder and choose a new name, then select Copy Folder!"), p_5);
        var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br, p_5), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('\n    If the folder copy get\'s stuck, simply use the "Resume prior folder copy" button, then select the copy of \n    your folder.'), p_5);
        var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), h3_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("When issues arise..."), h3_2);
        var text_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), p_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for \n    whatever reason, simply select the "), p_6);
        var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("b");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(b, p_6);
        var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("i");
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(i, b), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("new, incomplete copy"), i), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(' of the folder and select "Resume \n    copying".'), p_6), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h3, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_3, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_5, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_2, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_7, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_3, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_13, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_4, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_17, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h3_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_19, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_5, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_22, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h3_2, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_24, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_6, target, anchor);
            },
            destroy: function(detach) {
                detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h3), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_3), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_5), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_2), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_7), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_3), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_13), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_4), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_17), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h3_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_19), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_5), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_22), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h3_2), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_24), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_6));
            }
        };
    }
    function About(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(About.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    About.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, About.prototype.teardown = About.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = About;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        function get_block(state) {
            return "production" === state.env ? create_if_block_1 : create_if_block_2;
        }
        var text_value, div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.className = "change-account__box";
        var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span, div), 
        span.className = "userEmail";
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(text_value = state.message);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(text, span), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n        "), span);
        var if_block = state.processing && create_if_block(state, component);
        if_block && if_block.mount(span, null), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n    "), div);
        var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br, div), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n    "), div);
        var current_block = get_block(state), if_block_1 = current_block(state, component);
        return if_block_1.mount(div, null), {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor);
            },
            update: function(changed, state) {
                text_value !== (text_value = state.message) && (text.data = text_value), state.processing ? if_block || (if_block = create_if_block(state, component), 
                if_block.mount(span, null)) : if_block && (if_block.destroy(!0), if_block = null), 
                current_block !== (current_block = get_block(state)) && (if_block_1.destroy(!0), 
                if_block_1 = current_block(state, component), if_block_1.mount(div, null));
            },
            destroy: function(detach) {
                if_block && if_block.destroy(!1), if_block_1.destroy(!1), detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div);
            }
        };
    }
    function create_if_block(state, component) {
        var spinner = new __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__.a({
            target: null,
            _root: component._root
        });
        return {
            mount: function(target, anchor) {
                spinner._fragment.mount(target, anchor);
            },
            destroy: function(detach) {
                spinner.destroy(detach);
            }
        };
    }
    function create_if_block_1(state, component) {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a.target = "_blank", a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbxbGNGajrxv-HbX2sVY2OTu7yj9VvxlOMOeQblZFuq7rYm7uyo/exec", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Click here"), a);
        var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" to log in with a different account.");
        return {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_1, target, anchor);
            },
            destroy: function(detach) {
                detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_1));
            }
        };
    }
    function create_if_block_2(state, component) {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a.target = "_blank", a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbzKJQO5CBf7WDmrYo8FGDb20YWfoIyUZZhsbF844SI/dev", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Click here"), a);
        var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" to log in with a different account.");
        return {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_1, target, anchor);
            },
            destroy: function(detach) {
                detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_1));
            }
        };
    }
    function AccountSwitcher(options) {
        options = options || {}, this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(template.data(), options.data), 
        this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._renderHooks = [], this._fragment = create_main_fragment(this._state, this), 
        options.target && this._fragment.mount(options.target, null), this._flush(), options._root ? options._root._renderHooks.push(template.oncreate.bind(this)) : template.oncreate.call(this);
    }
    var __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            data: function() {
                return {
                    env: "production",
                    message: "Logged in as ",
                    processing: !0
                };
            },
            oncreate: function() {
                var self = this;
                try {
                    google.script.run.withSuccessHandler(function(email) {
                        self.set({
                            message: "Logged in as " + email + ".",
                            processing: !1
                        });
                    }).withFailureHandler(function(err) {
                        self.set({
                            message: "Error retrieving active account.",
                            processing: !1
                        });
                    }).getUserEmail();
                } catch (err) {
                    self.set({
                        message: "Error retrieving active account",
                        processing: !1
                    });
                }
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(AccountSwitcher.prototype, __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    AccountSwitcher.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState), 
        this._flush();
    }, AccountSwitcher.prototype.teardown = AccountSwitcher.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = AccountSwitcher;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var nav_updating = !1, viewchanger_updating = !1, nav_initial_data = {
            views: state.views
        };
        "active" in state && (nav_initial_data.active = state.active);
        var nav = new __WEBPACK_IMPORTED_MODULE_0__Nav__.a({
            target: null,
            _root: component._root,
            data: nav_initial_data
        });
        nav.on("click", function(event) {
            component.setActive(event.view.id);
        }), component._bindings.push(function() {
            nav._torndown || nav.observe("active", function(value) {
                nav_updating || (nav_updating = !0, component._set({
                    active: value
                }), nav_updating = !1);
            }, {
                init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.m)(nav.get("active"), state.active)
            });
        }), nav._context = {
            state: state
        };
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), viewchanger_initial_data = {
            views: state.views
        };
        "active" in state && (viewchanger_initial_data.active = state.active);
        var viewchanger = new __WEBPACK_IMPORTED_MODULE_1__ViewChanger__.a({
            target: null,
            _root: component._root,
            data: viewchanger_initial_data
        });
        return component._bindings.push(function() {
            viewchanger._torndown || viewchanger.observe("active", function(value) {
                viewchanger_updating || (viewchanger_updating = !0, component._set({
                    active: value
                }), viewchanger_updating = !1);
            }, {
                init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.m)(viewchanger.get("active"), state.active)
            });
        }), viewchanger._context = {
            state: state
        }, {
            mount: function(target, anchor) {
                nav._fragment.mount(target, anchor), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text, target, anchor), 
                viewchanger._fragment.mount(target, anchor);
            },
            update: function(changed, state) {
                !nav_updating && "active" in changed && (nav_updating = !0, nav._set({
                    active: state.active
                }), nav_updating = !1), nav._context.state = state;
                var nav_changes = {};
                "views" in changed && (nav_changes.views = state.views), Object.keys(nav_changes).length && nav.set(nav_changes), 
                !viewchanger_updating && "active" in changed && (viewchanger_updating = !0, viewchanger._set({
                    active: state.active
                }), viewchanger_updating = !1), viewchanger._context.state = state;
                var viewchanger_changes = {};
                "views" in changed && (viewchanger_changes.views = state.views), Object.keys(viewchanger_changes).length && viewchanger.set(viewchanger_changes);
            },
            destroy: function(detach) {
                nav.destroy(detach), viewchanger.destroy(detach), detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text);
            }
        };
    }
    function App(options) {
        for (options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._renderHooks = [], this._bindings = [], this._fragment = create_main_fragment(this._state, this), 
        options.target && this._fragment.mount(options.target, null); this._bindings.length; ) this._bindings.pop()();
        this._flush(), options._root ? options._root._renderHooks.push(template.oncreate.bind(this)) : template.oncreate.call(this);
    }
    var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(9), __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__ = __webpack_require__(6), __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            methods: {
                setActive: function(viewId) {
                    this.set({
                        active: viewId
                    });
                }
            },
            oncreate: function() {
                new __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__.a({
                    target: document.getElementById("change-account")
                });
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(App.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    App.prototype._set = function(newState) {
        var oldState = this._state;
        for (this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState); this._bindings.length; ) this._bindings.pop()();
        this._flush();
    }, App.prototype.teardown = App.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = App;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a, "name", "top");
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), ul = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("ul"), li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li, ul);
        var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_1, li), 
        a_1.href = "#longerThan2Mins", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), a_1);
        var li_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_1, ul);
        var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_2, li_1), 
        a_2.href = "#copyBetweenDomains", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Can I use this app to copy a folder between domains?"), a_2);
        var li_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_2, ul);
        var a_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_3, li_2), 
        a_3.href = "#whenIsItDone", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I know when it is done?"), a_3);
        var li_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_3, ul);
        var a_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_4, li_3), 
        a_4.href = "#notEverythingCopied", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("It didn't copy everything - what do I do?"), a_4);
        var li_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_4, ul);
        var a_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_5, li_4), 
        a_5.href = "#multipleAccounts", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I sign into a different account with this app?"), a_5);
        var li_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_5, ul);
        var a_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_6, li_5), 
        a_6.href = "#infiniteLoop", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("HELP! The copying is stuck in an infinite loop!  What do I do?"), a_6);
        var li_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_6, ul);
        var a_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_7, li_6), 
        a_7.href = "#uninstall", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I unintall the app and remove all permissions?"), a_7);
        var li_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_7, ul);
        var a_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_8, li_7), 
        a_8.href = "#openissue", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I report a bug in the app?"), a_8);
        var text_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), h4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_9, h4), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_9, "name", "longerThan2Mins"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), h4);
        var text_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('When the app stops, you can use the "Resume" button to restart the copying.  When selecting the folder to resume, you must select the '), div);
        var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("b");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(b, div), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("in-progress"), b), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" folder, "), div);
        var b_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("b");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(b_1, div), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("not"), b_1), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" the original."), div);
        var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br, div);
        var br_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br_1, div), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('\n    For example, if you are creating a copy of "Folder A" called "Copy of Folder A", you should select "Copy of Folder A" when you resume the copying.  Selecting the original folder will return an error.'), div);
        var text_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_10.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_10);
        var text_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), h4_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_11, h4_1), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_11, "name", "copyBetweenDomains"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Can I use this app to copy a folder between domains?"), h4_1);
        var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_1.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Yes!  Follow the steps below:\n    "), div_1);
        var ol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("ol");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(ol, div_1);
        var li_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_8, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Log into the account that owns the folder ("Account 1")'), li_8);
        var li_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_9, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Share the folder with the domain to which you\'d like to copy ("Account 2")'), li_9);
        var li_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_10, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Open an private/incognito window and log into Account 2"), li_10);
        var li_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_11, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Go to the "Shared with me" section, right click the folder, and select "Add to Drive"'), li_11);
        var li_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_12, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Open the app, and select the folder that has been shared"), li_12);
        var li_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_13, ol), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Create a copy and Account 2 will now be the owner"), li_13);
        var text_30 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_12.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_12);
        var text_32 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), h4_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_13, h4_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_13, "name", "whenIsItDone"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I know when it is done?"), h4_2);
        var text_34 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_2.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('You will know it is complete when the Copy Log says "Complete" in cell C2.  In addition, the cell will highlight green.'), div_2);
        var text_36 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_14.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_14);
        var text_38 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), h4_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_15, h4_3), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_15, "name", "notEverythingCopied"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("It didn't copy everything - what do I do?"), h4_3);
        var text_40 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_3.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    "), div_3);
        var ol_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("ol");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(ol_1, div_3);
        var li_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_14, ol_1), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Audit the Copy Log for any errors, and manually copy those files"), li_14);
        var li_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_15, ol_1), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors"), li_15);
        var text_44 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_16.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_16);
        var text_46 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), h4_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_17, h4_4), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_17, "name", "multipleAccounts"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I sign into a different account with this app?"), h4_4);
        var text_48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_4.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account."), div_4);
        var br_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br_2, div_4);
        var br_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br_3, div_4), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\n    \n    "), div_4);
        var br_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br_4, div_4);
        var br_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br_5, div_4), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("*If you think this is a good feature, please feel free to open an\n    "), div_4);
        var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span, div_4), 
        span.className = "github-button-wrapper";
        var a_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_18, span), 
        a_18.className = "github-button", a_18.href = "https://github.com/ericyd/gdrive-copy/issues", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_18, "data-icon", "octicon-issue-opened"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_18, "data-style", "mega"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_18, "aria-label", "Issue ericyd/gdrive-copy on GitHub"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Issue"), a_18), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"), div_4);
        var text_54 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_19.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_19);
        var text_56 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), h4_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_20, h4_5), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_20, "name", "infiniteLoop"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("HELP! The copying is stuck in an infinite loop!  What do I do?"), h4_5);
        var text_58 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_5.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Please use the "Pause" function built into the app and '), div_5);
        var a_21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_21, div_5), 
        a_21.href = "https://github.com/ericyd/gdrive-copy/issues", a_21.target = "_blank", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("report the bug"), a_21);
        var text_61 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_22.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_22);
        var text_63 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), h4_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_23, h4_6), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_23, "name", "uninstall"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I unintall the app and remove all permissions?"), h4_6);
        var text_65 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_6.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("To quote "), div_6);
        var a_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_24, div_6), 
        a_24.href = "https://webapps.stackexchange.com/questions/30841/how-do-i-remove-permission-from-an-app-that-i-gave-google-oauth-access-to", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("the excellent answer on stackexchange:"), a_24), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n    "), div_6);
        var ol_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("ol");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(ol_2, div_6);
        var li_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_16, ol_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Go to "), li_16);
        var a_25 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_25, li_16), 
        a_25.href = "https://accounts.google.com", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("accounts.google.com"), a_25);
        var li_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_17, ol_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Under "Sign-in & security" tab click "Connected apps & sites"'), li_17);
        var li_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_18, ol_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Under the section "Apps connected to your account", click on MANAGE APPS:'), li_18);
        var li_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(li_19, ol_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Select app you want & click REMOVE button"), li_19);
        var text_74 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_26 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        a_26.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_26);
        var text_76 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), h4_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("h4"), a_27 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_27, h4_7), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_27, "name", "openissue"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("How do I report a bug in the app?"), h4_7);
        var text_78 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), div_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_7.className = "description", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("If you have found a bug that is not covered in these FAQs, please open an\n    "), div_7);
        var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_1, div_7), 
        span_1.className = "github-button-wrapper";
        var a_28 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(a_28, span_1), 
        a_28.className = "github-button", a_28.href = "https://github.com/ericyd/gdrive-copy/issues", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_28, "data-icon", "octicon-issue-opened"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_28, "data-style", "mega"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(a_28, "aria-label", "Issue ericyd/gdrive-copy on GitHub"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Issue"), a_28), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" on Github."), div_7);
        var text_82 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), a_29 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("a");
        return a_29.href = "#top", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Top"), a_29), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(ul, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_9, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_11, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_18, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_10, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_20, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_22, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_30, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_12, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_32, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_2, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_34, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_2, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_36, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_14, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_38, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_3, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_40, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_3, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_44, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_16, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_46, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_4, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_48, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_4, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_54, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_19, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_56, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_5, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_58, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_5, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_61, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_22, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_63, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_6, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_65, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_6, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_74, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_26, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_76, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(h4_7, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_78, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_7, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_82, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(a_29, target, anchor);
            },
            destroy: function(detach) {
                detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(ul), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_9), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_11), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_18), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_10), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_20), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_22), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_30), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_12), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_32), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_2), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_34), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_2), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_36), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_14), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_38), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_3), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_40), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_3), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_44), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_16), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_46), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_4), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_48), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_4), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_54), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_19), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_56), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_5), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_58), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_5), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_61), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_22), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_63), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_6), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_65), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_6), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_74), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_26), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_76), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(h4_7), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_78), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_7), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_82), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(a_29));
            }
        };
    }
    function FAQ(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(FAQ.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    FAQ.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, FAQ.prototype.teardown = FAQ.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = FAQ;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var nav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("nav"), section = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("section");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(section, nav), 
        section.className = "header-container";
        for (var each_block_value = state.views, each_block_iterations = [], i = 0; i < each_block_value.length; i += 1) each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component), 
        each_block_iterations[i].mount(section, null);
        return {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(nav, target, anchor);
            },
            update: function(changed, state) {
                var each_block_value = state.views;
                if ("views" in changed || "active" in changed) {
                    for (var i = 0; i < each_block_value.length; i += 1) each_block_iterations[i] ? each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i) : (each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component), 
                    each_block_iterations[i].mount(section, null));
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.n)(each_block_iterations, !0, each_block_value.length), 
                    each_block_iterations.length = each_block_value.length;
                }
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.n)(each_block_iterations, !1, 0), 
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(nav);
            }
        };
    }
    function create_each_block(state, each_block_value, view, view_index, component) {
        var button_name_value, button_class_value, button_id_value, text_value, button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("button");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(button, "role", "button"), 
        button.name = button_name_value = view.id, button.className = button_class_value = "tabLink btn--nav " + (state.active === view.id ? "active" : ""), 
        button.id = button_id_value = view.id + "-button", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(button, "href", "#"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(button, "click", click_handler), 
        button._svelte = {
            component: component,
            each_block_value: each_block_value,
            view_index: view_index
        };
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(text_value = view.title);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(text, button), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(button, target, anchor);
            },
            update: function(changed, state, each_block_value, view, view_index) {
                button_name_value !== (button_name_value = view.id) && (button.name = button_name_value), 
                button_class_value !== (button_class_value = "tabLink btn--nav " + (state.active === view.id ? "active" : "")) && (button.className = button_class_value), 
                button_id_value !== (button_id_value = view.id + "-button") && (button.id = button_id_value), 
                button._svelte.each_block_value = each_block_value, button._svelte.view_index = view_index, 
                text_value !== (text_value = view.title) && (text.data = text_value);
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(button, "click", click_handler), 
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(button);
            }
        };
    }
    function click_handler(event) {
        var component = this._svelte.component, each_block_value = this._svelte.each_block_value, view_index = this._svelte.view_index, view = each_block_value[view_index];
        component.fire("click", {
            view: view
        });
    }
    function Nav(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Nav.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Nav.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, Nav.prototype.teardown = Nav.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Nav;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var text_value, p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p"), text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(text_value = state.message);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(text, p);
        var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n"), p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("p"), if_block = state.showButton && create_if_block(state, component);
        return if_block && if_block.mount(p_1, null), {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text_1, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(p_1, target, anchor);
            },
            update: function(changed, state) {
                text_value !== (text_value = state.message) && (text.data = text_value), state.showButton ? if_block || (if_block = create_if_block(state, component), 
                if_block.mount(p_1, null)) : if_block && (if_block.destroy(!0), if_block = null);
            },
            destroy: function(detach) {
                if_block && if_block.destroy(!1), detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text_1), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(p_1));
            }
        };
    }
    function create_if_block(state, component) {
        function click_handler(event) {
            component.handleClick(event);
        }
        var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("button");
        return button.type = "button", button.className = "btn btn--small", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(button, "click", click_handler), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Yes, I want to stop all my current instances of Copy Folder"), button), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(button, target, anchor);
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(button, "click", click_handler), 
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(button);
            }
        };
    }
    function Pause(options) {
        options = options || {}, this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(template.data(), options.data), 
        this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            data: function() {
                return {
                    message: "Are you sure you want to stop the instances of copy folder that you have running?",
                    showButton: !0
                };
            },
            methods: {
                handleClick: function(event) {
                    try {
                        google.script.run.setStopFlag();
                    } catch (err) {
                        console.log(err);
                    }
                    this.set({
                        message: 'You have stopped all folder copies. To restart them, please use the "Resume" feature.',
                        showButton: !1
                    });
                }
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Pause.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Pause.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, Pause.prototype.teardown = Pause.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Pause;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        function submit_handler(event) {
            component.handleSubmit(event);
        }
        var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.id = "resume-validation-errors";
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n"), div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_1.id = "resume-form-div", div_1.className = "form-div";
        var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("form");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(form, div_1), 
        form.id = "resumeForm", form.name = "resumeForm", form.className = "form-horizontal", 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(form, "submit", submit_handler);
        var selectfolder = new __WEBPACK_IMPORTED_MODULE_0__SelectFolder__.a({
            target: form,
            _root: component._root,
            data: {
                selectText: state.selectText
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" \n        "), form);
        var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br, form), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n        \n        "), form);
        var submitbutton = new __WEBPACK_IMPORTED_MODULE_1__SubmitButton__.a({
            target: form,
            _root: component._root,
            data: {
                buttonText: state.buttonText
            }
        });
        return submitbutton.on("click", function(event) {
            component.handleClick(event);
        }), {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_1, target, anchor);
            },
            update: function(changed, state) {
                var selectfolder_changes = {};
                "selectText" in changed && (selectfolder_changes.selectText = state.selectText), 
                Object.keys(selectfolder_changes).length && selectfolder.set(selectfolder_changes);
                var submitbutton_changes = {};
                "buttonText" in changed && (submitbutton_changes.buttonText = state.buttonText), 
                Object.keys(submitbutton_changes).length && submitbutton.set(submitbutton_changes);
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(form, "submit", submit_handler), 
                selectfolder.destroy(!1), submitbutton.destroy(!1), detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_1));
            }
        };
    }
    function Resume(options) {
        options = options || {}, this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(template.data(), options.data), 
        this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._renderHooks = [], this._fragment = create_main_fragment(this._state, this), 
        options.target && this._fragment.mount(options.target, null), this._flush();
    }
    var __WEBPACK_IMPORTED_MODULE_0__SelectFolder__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__SubmitButton__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            data: function() {
                return {
                    buttonText: "Resume copying",
                    selectText: "Select the folder copy that is in progress"
                };
            },
            methods: {
                handleClick: function(e) {},
                handleSubmit: function(e) {}
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Resume.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Resume.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState), 
        this._flush();
    }, Resume.prototype.teardown = Resume.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Resume;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        function submit_handler(event) {
            component.handleSubmit(event);
        }
        var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.id = "start-validation-errors";
        var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n"), div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div_1.id = "formDiv", div_1.className = "form-div";
        var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("form");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(form, div_1), 
        form.id = "folderForm", form.name = "folderForm", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.j)(form, "submit", submit_handler);
        var selectfolder = new __WEBPACK_IMPORTED_MODULE_1__SelectFolder__.a({
            target: form,
            _root: component._root,
            data: {
                selectText: state.selectText
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n        \n        "), form);
        var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("br");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(br, form), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n        \n        "), form);
        var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label, form), 
        label.className = "textfield", label.htmlFor = "newFolder";
        var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input, label), 
        input.type = "text", input.id = "newFolder", input.name = "newFolder", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n            "), label);
        var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span, label), 
        span.className = "textfield__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("New folder name"), span), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n\n        \n        Copy sharing permissions\n        "), form);
        var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_1, form), 
        span_1.tabIndex = "10", span_1.className = "tooltip-toggle", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(span_1, "data-tooltip", "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected.");
        var question = new __WEBPACK_IMPORTED_MODULE_0__icons_Question__.a({
            target: span_1,
            _root: component._root
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)(" \n        \n        \n        "), form);
        var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(div_2, form), 
        div_2.className = "form-group", div_2.id = "permissions-group";
        var label_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label_1, div_2), 
        label_1.className = "radio";
        var input_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input_1, label_1), 
        input_1.type = "radio", input_1.name = "permissions", input_1.__value = "no", input_1.value = input_1.__value, 
        input_1.checked = !0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n                "), label_1);
        var span_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_2, label_1), 
        span_2.className = "radio__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("No"), span_2), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n            "), div_2);
        var label_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label_2, div_2), 
        label_2.className = "radio";
        var input_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input_2, label_2), 
        input_2.type = "radio", input_2.name = "permissions", input_2.__value = "yes", input_2.value = input_2.__value, 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n                "), label_2);
        var span_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_3, label_2), 
        span_3.className = "radio__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Yes"), span_3), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n\n        \n        Copy folder to\n        "), form);
        var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(div_3, form), 
        div_3.className = "form-group", div_3.id = "destination-group";
        var label_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label_3, div_3), 
        label_3.className = "radio";
        var input_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input_3, label_3), 
        input_3.type = "radio", input_3.name = "copyLocationOptions", input_3.__value = "same", 
        input_3.value = input_3.__value, input_3.checked = !0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n                "), label_3);
        var span_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_4, label_3), 
        span_4.className = "radio__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("Same as source folder"), span_4), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n            "), div_3);
        var label_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("label");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(label_4, div_3), 
        label_4.className = "radio";
        var input_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("input");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(input_4, label_4), 
        input_4.type = "radio", input_4.name = "copyLocationOptions", input_4.__value = "root", 
        input_4.value = input_4.__value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n                "), label_4);
        var span_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("span");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(span_5, label_4), 
        span_5.className = "radio__label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)('Root directory (i.e. at the top of "My Drive")'), span_5), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.i)("\n\n\n        \n        "), form);
        var submitbutton = new __WEBPACK_IMPORTED_MODULE_2__SubmitButton__.a({
            target: form,
            _root: component._root,
            data: {
                buttonText: state.buttonText
            }
        });
        return submitbutton.on("click", function(event) {
            component.handleClick(event);
        }), {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(text, target, anchor), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div_1, target, anchor);
            },
            update: function(changed, state) {
                var selectfolder_changes = {};
                "selectText" in changed && (selectfolder_changes.selectText = state.selectText), 
                Object.keys(selectfolder_changes).length && selectfolder.set(selectfolder_changes);
                var submitbutton_changes = {};
                "buttonText" in changed && (submitbutton_changes.buttonText = state.buttonText), 
                Object.keys(submitbutton_changes).length && submitbutton.set(submitbutton_changes);
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.k)(form, "submit", submit_handler), 
                selectfolder.destroy(!1), question.destroy(!1), submitbutton.destroy(!1), detach && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(text), 
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div_1));
            }
        };
    }
    function Start(options) {
        options = options || {}, this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(template.data(), options.data), 
        this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._renderHooks = [], this._fragment = create_main_fragment(this._state, this), 
        options.target && this._fragment.mount(options.target, null), this._flush();
    }
    var __WEBPACK_IMPORTED_MODULE_0__icons_Question__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_1__SelectFolder__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_2__SubmitButton__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            data: function() {
                return {
                    buttonText: "Copy Folder",
                    selectText: "Folder to copy"
                };
            },
            methods: {
                handleClick: function(e) {},
                handleSubmit: function(e) {}
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Start.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Start.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState), 
        this._flush();
    }, Start.prototype.teardown = Start.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Start;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        div.className = "container", div.id = "container";
        for (var each_block_value = state.views, each_block_iterations = [], i = 0; i < each_block_value.length; i += 1) each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component), 
        each_block_iterations[i].mount(div, null);
        return {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor);
            },
            update: function(changed, state) {
                var each_block_value = state.views;
                if ("views" in changed || "active" in changed) {
                    for (var i = 0; i < each_block_value.length; i += 1) each_block_iterations[i] ? each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i) : (each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component), 
                    each_block_iterations[i].mount(div, null));
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.n)(each_block_iterations, !0, each_block_value.length), 
                    each_block_iterations.length = each_block_value.length;
                }
            },
            destroy: function(detach) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.n)(each_block_iterations, !1, 0), 
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div);
            }
        };
    }
    function create_each_block(state, each_block_value, view, view_index, component) {
        var div_id_value, div_class_value, div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.a)("div");
        return div.id = div_id_value = view.id, div.className = div_class_value = "tab " + (state.active === view.id ? "active" : ""), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(div, target, anchor);
            },
            update: function(changed, state, each_block_value, view, view_index) {
                div_id_value !== (div_id_value = view.id) && (div.id = div_id_value), div_class_value !== (div_class_value = "tab " + (state.active === view.id ? "active" : "")) && (div.className = div_class_value);
            },
            destroy: function(detach) {
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(div);
            }
        };
    }
    function ViewChanger(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null), 
        options._root ? options._root._renderHooks.push(template.oncreate.bind(this)) : template.oncreate.call(this);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0), template = function() {
        return {
            oncreate: function() {
                this.get("views").forEach(function(view) {
                    new view.component({
                        target: document.getElementById(view.id)
                    });
                });
            }
        };
    }();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(ViewChanger.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    ViewChanger.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        this._fragment.update(newState, this._state), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, ViewChanger.prototype.teardown = ViewChanger.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = ViewChanger;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function create_main_fragment(state, component) {
        var svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.l)("svg");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(svg, "xmlns", "http://www.w3.org/2000/svg"), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(svg, "viewBox", "0 0 24 24");
        var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.l)("path");
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.b)(path, svg), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.c)(path, "d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"), 
        {
            mount: function(target, anchor) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.d)(svg, target, anchor);
            },
            destroy: function(detach) {
                detach && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.e)(svg);
            }
        };
    }
    function Question(options) {
        options = options || {}, this._state = options.data || {}, this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
        }, this._handlers = Object.create(null), this._root = options._root || this, this._yield = options._yield, 
        this._torndown = !1, this._fragment = create_main_fragment(this._state, this), options.target && this._fragment.mount(options.target, null);
    }
    var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)(Question.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.g), 
    Question.prototype._set = function(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.f)({}, oldState, newState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.pre, newState, oldState), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__.h)(this, this._observers.post, newState, oldState);
    }, Question.prototype.teardown = Question.prototype.destroy = function(detach) {
        this.fire("destroy"), this._fragment.destroy(!1 !== detach), this._fragment = null, 
        this._state = {}, this._torndown = !0;
    }, __webpack_exports__.a = Question;
}, function(module, exports) {
    module.exports = {
        folderIsSelected: function(selectedFolder) {
            $(".getFolderErrors").text(""), $("#newFolder").val(selectedFolder.destName), $(".folderName").text(selectedFolder.srcName), 
            $(".folderSelect").hide(), $(".folderLookup").hide(), $(".selectedFolderInfo").show();
        },
        onFolderLookup: function() {
            $(".folderLookup").show(), $(".folderSelect").hide();
        },
        onValid: function() {
            $("#errors").html(""), $("#start-validation-errors").html(""), $("#resume-validation-errors").html("");
        },
        resetForm: function() {
            $(".folderSelect").show(), $(".selectedFolderInfo").hide(), $(".getFolderErrors").hide();
        },
        showProcessingOverlay: function(message) {
            var overlay = document.querySelector(".overlay"), overlayMessage = document.querySelector(".overlay__message");
            overlay.style.display = "block", overlayMessage.innerText = message;
        },
        clearProcessingOverlay: function() {
            var overlay = document.querySelector(".overlay"), overlayMessage = document.querySelector(".overlay__message");
            overlay.style.display = "none", overlayMessage.innerText = "";
        },
        hideStep1: function(resuming) {
            var id = resuming ? "resume-step1" : "start-step1";
            document.getElementById(id).style.display = "none";
        },
        showStep2: function(resuming, successfulness) {
            if (null === resuming || void 0 === resuming) return void (document.getElementById("start-" + successfulness).style.display = "block");
            var id = resuming ? "resume" : "start";
            id += "-" + successfulness, document.getElementById(id).style.display = "block";
        },
        showTooManyTriggers: function() {
            $(".too-many-triggers").show();
        },
        hideTooManyTriggers: function() {
            $(".too-many-triggers").hide();
        },
        showErrors: function() {
            $(".errors").show();
        },
        hideErrors: function() {
            $(".errors").hide();
        },
        showPauseStep2: function() {
            document.getElementById("pause-step1").style.display = "none", document.getElementById("pause-step2").style.display = "block";
        }
    };
}, function(module, exports) {
    module.exports = function(url) {
        var id, amp, idStart = url.search("id="), foldersStart = url.search("folders");
        return id = idStart > 0 ? url.slice(idStart + 3) : foldersStart > 0 ? url.slice(foldersStart + 8) : url, 
        amp = id.indexOf("&"), amp > 0 && (id = id.slice(0, amp)), id;
    };
}, function(module, exports, __webpack_require__) {
    function onApiLoad() {
        gapi.load("picker", {
            callback: function() {
                pickerApiLoaded = !0;
            }
        }), google.script.run.withSuccessHandler(createPicker).withFailureHandler(showError).getOAuthToken();
    }
    function createPicker(token) {
        if (pickerApiLoaded && token) {
            var foldersView = new google.picker.DocsView().setIncludeFolders(!0).setMimeTypes("application/vnd.google-apps.folder").setSelectFolderEnabled(!0);
            pickerBuilder = new google.picker.PickerBuilder().addView(foldersView).hideTitleBar().setOAuthToken(token).setMaxItems(1).setCallback(pickerCallback).setTitle("Select a folder to copy").setOrigin("https://script.google.com").build();
        }
    }
    function pickerCallback(data) {
        var action = data[google.picker.Response.ACTION];
        if (action == google.picker.Action.PICKED) {
            var doc = data[google.picker.Response.DOCUMENTS][0];
            setSelectedFolder({
                srcId: doc[google.picker.Document.ID],
                srcParentId: doc[google.picker.Document.PARENT_ID],
                srcName: doc[google.picker.Document.NAME],
                destName: "Copy of " + doc[google.picker.Document.NAME]
            });
        } else action == google.picker.Action.CANCEL && google.script.host.close();
    }
    function setSelectedFolder(properties) {
        selectedFolder.srcId = properties.srcId, selectedFolder.srcParentId = properties.srcParentId, 
        selectedFolder.srcName = properties.srcName, selectedFolder.destName = properties.destName, 
        DOM.folderIsSelected(selectedFolder);
    }
    function showError() {
        $("#getFolderErrors").text("Error getting OAuth token for Google Picker.  Please manually input folder URL");
    }
    var DOM = __webpack_require__(15);
    !function(source, callback) {
        var script = document.createElement("script"), prior = document.getElementsByTagName("script")[0];
        script.async = 1, prior.parentNode.insertBefore(script, prior), script.onload = script.onreadystatechange = function(_, isAbort) {
            (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, 
            script = void 0, isAbort || callback && callback());
        }, script.src = source;
    }("https://apis.google.com/js/api.js", onApiLoad);
    var pickerBuilder, selectedFolder = {}, pickerApiLoaded = !1;
    exports.folder = selectedFolder, exports.showPicker = function() {
        return pickerBuilder.setVisible(!0);
    }, exports.setSelectedFolder = setSelectedFolder;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(4);
} ]);