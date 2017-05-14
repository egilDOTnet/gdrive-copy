/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
  /******/
  /******/ /******/ __webpack_require__.i = function(value) {
    return value;
  }; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter = module && module.__esModule
      ? /******/ function getDefault() {
          return module['default'];
        }
      : /******/ function getModuleExports() {
          return module;
        };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 17));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'm',
        function() {
          return differs;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'i',
        function() {
          return dispatchObservers;
        }
      );
      /* unused harmony export get */
      /* unused harmony export fire */
      /* unused harmony export observe */
      /* unused harmony export observeDev */
      /* unused harmony export on */
      /* unused harmony export onDev */
      /* unused harmony export set */
      /* unused harmony export _flush */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'h',
        function() {
          return proto;
        }
      );
      /* unused harmony export protoDev */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function() {
          return appendNode;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'e',
        function() {
          return insertNode;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f',
        function() {
          return detachNode;
        }
      );
      /* unused harmony export detachBetween */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'n',
        function() {
          return destroyEach;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return createElement;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'l',
        function() {
          return createSvgElement;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return createText;
        }
      );
      /* unused harmony export createComment */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'j',
        function() {
          return addEventListener;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'k',
        function() {
          return removeEventListener;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return setAttribute;
        }
      );
      /* unused harmony export setXlinkAttribute */
      /* unused harmony export getBindingGroupValue */
      /* unused harmony export linear */
      /* unused harmony export generateKeyframes */
      /* unused harmony export wrapTransition */
      /* unused harmony export transitionManager */
      /* unused harmony export noop */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'g',
        function() {
          return assign;
        }
      );
      function noop() {}

      function assign(target) {
        for (var i = 1; i < arguments.length; i += 1) {
          var source = arguments[i];
          for (var k in source)
            target[k] = source[k];
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

      function detachBetween(before, after) {
        while (before.nextSibling && before.nextSibling !== after) {
          before.parentNode.removeChild(before.nextSibling);
        }
      }

      function destroyEach(iterations, detach, start) {
        for (var i = start; i < iterations.length; i += 1) {
          if (iterations[i]) iterations[i].destroy(detach);
        }
      }

      function createElement(name) {
        return document.createElement(name);
      }

      function createSvgElement(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
      }

      function createText(data) {
        return document.createTextNode(data);
      }

      function createComment() {
        return document.createComment('');
      }

      function addEventListener(node, event, handler) {
        node.addEventListener(event, handler, false);
      }

      function removeEventListener(node, event, handler) {
        node.removeEventListener(event, handler, false);
      }

      function setAttribute(node, attribute, value) {
        node.setAttribute(attribute, value);
      }

      function setXlinkAttribute(node, attribute, value) {
        node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
      }

      function getBindingGroupValue(group) {
        var value = [];
        for (var i = 0; i < group.length; i += 1) {
          if (group[i].checked) value.push(group[i].__value);
        }
        return value;
      }

      function linear(t) {
        return t;
      }

      function generateKeyframes(a, b, delta, duration, ease, fn, node, style) {
        var id = '__svelte' + ~~(Math.random() * 1e9); // TODO make this more robust
        var keyframes = '@keyframes ' + id + '{\n';

        for (var p = 0; p <= 1; p += 16.666 / duration) {
          var t = a + delta * ease(p);
          keyframes += p * 100 + '%{' + fn(t) + '}\n';
        }

        keyframes += '100% {' + fn(b) + '}\n}';
        style.textContent += keyframes;

        document.head.appendChild(style);

        node.style.animation = node.style.animation
          .split(',')
          .filter(function(anim) {
            // when introing, discard old animations if there are any
            return anim && (delta < 0 || !/__svelte/.test(anim));
          })
          .concat(id + ' ' + duration + 'ms linear 1 forwards')
          .join(', ');
      }

      function wrapTransition(node, fn, params, intro, outgroup) {
        var obj = fn(node, params);
        var duration = obj.duration || 300;
        var ease = obj.easing || linear;

        // TODO share <style> tag between all transitions?
        if (obj.css) {
          var style = document.createElement('style');
        }

        if (intro && obj.tick) obj.tick(0);

        return {
          t: intro ? 0 : 1,
          running: false,
          program: null,
          pending: null,
          run: function(intro, callback) {
            var program = {
              start: window.performance.now() + (obj.delay || 0),
              intro: intro,
              callback: callback
            };

            if (obj.delay) {
              this.pending = program;
            } else {
              this.start(program);
            }

            if (!this.running) {
              this.running = true;
              transitionManager.add(this);
            }
          },
          start: function(program) {
            program.a = this.t;
            program.b = program.intro ? 1 : 0;
            program.delta = program.b - program.a;
            program.duration = duration * Math.abs(program.b - program.a);
            program.end = program.start + program.duration;

            if (obj.css) {
              generateKeyframes(
                program.a,
                program.b,
                program.delta,
                program.duration,
                ease,
                obj.css,
                node,
                style
              );
            }

            this.program = program;
            this.pending = null;
          },
          update: function(now) {
            var program = this.program;
            if (!program) return;

            var p = now - program.start;
            this.t = program.a + program.delta * ease(p / program.duration);
            if (obj.tick) obj.tick(this.t);
          },
          done: function() {
            this.t = this.program.b;
            if (obj.tick) obj.tick(this.t);
            if (obj.css) document.head.removeChild(style);
            this.program.callback();
            this.program = null;
            this.running = !!this.pending;
          },
          abort: function() {
            if (obj.tick) obj.tick(1);
            if (obj.css) document.head.removeChild(style);
            this.program = this.pending = null;
            this.running = false;
          }
        };
      }

      var transitionManager = {
        running: false,
        transitions: [],

        add: function(transition) {
          transitionManager.transitions.push(transition);

          if (!this.running) {
            this.running = true;
            this.next();
          }
        },

        next: function() {
          transitionManager.running = false;

          var now = window.performance.now();
          var i = transitionManager.transitions.length;

          while (i--) {
            var transition = transitionManager.transitions[i];

            if (transition.program && now >= transition.program.end) {
              transition.done();
            }

            if (transition.pending && now >= transition.pending.start) {
              transition.start(transition.pending);
            }

            if (transition.running) {
              transition.update(now);
              transitionManager.running = true;
            } else if (!transition.pending) {
              transitionManager.transitions.splice(i, 1);
            }
          }

          if (transitionManager.running) {
            requestAnimationFrame(transitionManager.next);
          }
        }
      };

      function differs(a, b) {
        return (
          a !== b || ((a && typeof a === 'object') || typeof a === 'function')
        );
      }

      function dispatchObservers(component, group, newState, oldState) {
        for (var key in group) {
          if (!(key in newState)) continue;

          var newValue = newState[key];
          var oldValue = oldState[key];

          if (differs(newValue, oldValue)) {
            var callbacks = group[key];
            if (!callbacks) continue;

            for (var i = 0; i < callbacks.length; i += 1) {
              var callback = callbacks[i];
              if (callback.__calling) continue;

              callback.__calling = true;
              callback.call(component, newValue, oldValue);
              callback.__calling = false;
            }
          }
        }
      }

      function get(key) {
        return key ? this._state[key] : this._state;
      }

      function fire(eventName, data) {
        var handlers =
          eventName in this._handlers && this._handlers[eventName].slice();
        if (!handlers) return;

        for (var i = 0; i < handlers.length; i += 1) {
          handlers[i].call(this, data);
        }
      }

      function observe(key, callback, options) {
        var group = options && options.defer
          ? this._observers.post
          : this._observers.pre;

        (group[key] || (group[key] = [])).push(callback);

        if (!options || options.init !== false) {
          callback.__calling = true;
          callback.call(this, this._state[key]);
          callback.__calling = false;
        }

        return {
          cancel: function() {
            var index = group[key].indexOf(callback);
            if (~index) group[key].splice(index, 1);
          }
        };
      }

      function observeDev(key, callback, options) {
        var c = (key = '' + key).search(/[^\w]/);
        if (c > -1) {
          var message =
            'The first argument to component.observe(...) must be the name of a top-level property';
          if (c > 0)
            message +=
              ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

          throw new Error(message);
        }

        return observe.call(this, key, callback, options);
      }

      function on(eventName, handler) {
        if (eventName === 'teardown') return this.on('destroy', handler);

        var handlers =
          this._handlers[eventName] || (this._handlers[eventName] = []);
        handlers.push(handler);

        return {
          cancel: function() {
            var index = handlers.indexOf(handler);
            if (~index) handlers.splice(index, 1);
          }
        };
      }

      function onDev(eventName, handler) {
        if (eventName === 'teardown') {
          console.warn(
            "Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"
          );
          return this.on('destroy', handler);
        }

        return on.call(this, eventName, handler);
      }

      function set(newState) {
        this._set(assign({}, newState));
        this._root._flush();
      }

      function _flush() {
        if (!this._renderHooks) return;

        while (this._renderHooks.length) {
          this._renderHooks.pop()();
        }
      }

      var proto = {
        get: get,
        fire: fire,
        observe: observe,
        on: on,
        set: set,
        _flush: _flush
      };

      var protoDev = {
        get: get,
        fire: fire,
        observe: observeDev,
        on: onDev,
        set: set,
        _flush: _flush
      };

      /***/
    },
    /* 1 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        /**
  * Provides functionality used for the "Select Folder"
  * textboxes, which automatically find folder metadata when a URL 
  * is pasted into them.  The textboxes can handle pasting via 'Ctrl+V',
  * or right-clicking and selecting "Paste" from the context menu. 
  */

        // Requires
        var picker = __webpack_require__(16);
        var parseId = __webpack_require__(15);

        /**
  * If folder URL is added, get folder metadata and display relevant information.
  * 
  * @param {object} e event object
  */
        var getFileData = function getFileData(e) {
          if (e.target.value !== '') {
            // DOM.onFolderLookup();
            clearInterval(interval);

            var id = parseId(e.target.value);

            google.script.run
              .withSuccessHandler(function(metadata) {
                // save metadata to picker.folder
                picker.setSelectedFolder({
                  srcId: metadata.id,
                  srcParentId: metadata.parents[0].id,
                  srcName: metadata.title,
                  destName: 'Copy of ' + metadata.title
                });
              })
              .withFailureHandler(function(msg) {
                $('.folderSelect').hide();
                $('.folderLookup').hide();
                $('.selectedFolderInfo').show();
                $('.getFolderErrors')
                  .text(
                    'Error: ' +
                      msg +
                      '<br>You may not have permission to copy this folder.'
                  )
                  .show();
              })
              .getMetadata(id);
          }
          return false;
        };

        return {
          // interval is the handle for the interval set in handleMouse and cleared in getFileData
          data: function data() {
            return {
              interval: {}
            };
          },

          methods: {
            /**
    * If right-click, setTimeout
    * If left-click, trigger immediately
    */
            handleMouse: function handleMouse(e) {
              // if context menu is activated, give user time to paste data via context menu
              if (e.button === 2) {
                var g = function g() {
                  return getFileData(e);
                };
                set({ interval: setInterval(g, 500) });
                return;
              }
              getFileData(e);
            },
            handleKey: function handleKey(e) {
              getFileData(e);
            }
          }
        };
      })();

      function create_main_fragment(state, component) {
        var text_value;

        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )((text_value = state.selectText));
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.className = 'folderSelect';
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button, div);
        button.type = 'button';
        button.id = 'selectFolderButton';
        button.className = 'btn btn--small selectFolderButton';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Select Folder'),
          button
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n    or\n    '),
          div
        );
        var label = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label, div);
        label.htmlFor = 'newFolder';
        label.className = 'textfield';
        var input = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input, label);
        input.type = 'text';
        input.id = 'folderTextbox';
        input.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        '),
          label
        );
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span, label);
        span.className = 'textfield__label';

        function mouseup_handler(event) {
          component.handleMouse(event);
        }

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(span, 'mouseup', mouseup_handler);

        function keyup_handler(event) {
          component.handleKey(event);
        }

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(span, 'keyup', keyup_handler);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Paste folder URL (Ctrl-V)'),
          span
        );
        var text_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.className = 'getFolderErrors';
        var text_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_2.className = 'folderLookup';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Finding folder...'),
          div_2
        );
        var span_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_1, div_2);
        span_1.className = 'rotate-contents';
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(i, span_1);
        i.className = 'spinner';
        var text_9 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n\n');
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_3.className = 'selectedFolderInfo';
        var span_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_2, div_3);
        span_2.className = 'folderName';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('   \n    '),
          div_3
        );
        var button_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button_1, div_3);
        button_1.type = 'reset';
        button_1.className = 'btn  btn--small selectOtherFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Select other folder'),
          button_1
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_6, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_7, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_2, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_9, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_3, target, anchor);
          },

          update: function update(changed, state) {
            if (text_value !== (text_value = state.selectText)) {
              text.data = text_value;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(span, 'mouseup', mouseup_handler);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(span, 'keyup', keyup_handler);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_6);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_7);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_2);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_9);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_3);
            }
          }
        };
      }

      function SelectFolder(options) {
        options = options || {};
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )(template.data(), options.data);

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        SelectFolder.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      SelectFolder.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      SelectFolder.prototype.teardown = SelectFolder.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = SelectFolder;

      /***/
    },
    /* 2 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var text_value;

        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        button.type = 'submit';
        button.className = 'btn';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )((text_value = state.buttonText));
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(text, button);

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(button, target, anchor);
          },

          update: function update(changed, state) {
            if (text_value !== (text_value = state.buttonText)) {
              text.data = text_value;
            }
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(button);
            }
          }
        };
      }

      function SubmitButton(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        SubmitButton.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      SubmitButton.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      SubmitButton.prototype.teardown = SubmitButton.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = SubmitButton;

      /***/
    },
    /* 3 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(
        6
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(
        4
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__(
        11
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Resume__ = __webpack_require__(
        10
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Pause__ = __webpack_require__(
        9
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FAQ__ = __webpack_require__(
        7
      );

      var app = new __WEBPACK_IMPORTED_MODULE_0__components_App__[
        'a' /* default */
      ]({
        target: document.querySelector('#app'),
        data: {
          views: [
            {
              id: 'about',
              title: 'About',
              component: __WEBPACK_IMPORTED_MODULE_1__components_About__[
                'a' /* default */
              ]
            },
            {
              id: 'start',
              title: 'Start',
              component: __WEBPACK_IMPORTED_MODULE_2__components_Start__[
                'a' /* default */
              ]
            },
            {
              id: 'resume',
              title: 'Resume',
              component: __WEBPACK_IMPORTED_MODULE_3__components_Resume__[
                'a' /* default */
              ]
            },
            {
              id: 'pause',
              title: 'Pause',
              component: __WEBPACK_IMPORTED_MODULE_4__components_Pause__[
                'a' /* default */
              ]
            },
            {
              id: 'faq',
              title: 'FAQ',
              component: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__[
                'a' /* default */
              ]
            }
          ],
          // must match the id of one of the views
          active: 'start'
        },
        components: {
          About: __WEBPACK_IMPORTED_MODULE_1__components_About__[
            'a' /* default */
          ],
          Start: __WEBPACK_IMPORTED_MODULE_2__components_Start__[
            'a' /* default */
          ],
          Resume: __WEBPACK_IMPORTED_MODULE_3__components_Resume__[
            'a' /* default */
          ],
          Pause: __WEBPACK_IMPORTED_MODULE_4__components_Pause__[
            'a' /* default */
          ],
          FAQ: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__['a' /* default */]
        }
      });

      /***/
    },
    /* 4 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var h3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h3');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('General info'),
          h3
        );
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder.'
          ),
          p
        );
        var text_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level.'
          ),
          p_1
        );
        var text_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            "This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."
          ),
          p_2
        );
        var text_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('This app is licensed under the '),
          p_3
        );
        var a = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a, p_3);
        a.href = 'https://opensource.org/licenses/BSD-3-Clause';
        a.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('3-clause BSD License'),
          a
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            '.  Feel free to reuse or distribute this code in any way \n    you see fit. You can find the most up-to-date source code on '
          ),
          p_3
        );
        var a_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_1, p_3);
        a_1.href = 'http://www.github.com/ericyd/gdrive-copy';
        a_1.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Github'),
          a_1
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('.'),
          p_3
        );
        var text_13 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'If you would like to run your own version of the code but do not come from a technical background, you can \n    follow '
          ),
          p_4
        );
        var a_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_2, p_4);
        a_2.href =
          'https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md';
        a_2.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('this guide'),
          a_2
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' to launch your own, private version of the app.'),
          p_4
        );
        var text_17 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var h3_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h3');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Getting started'),
          h3_1
        );
        var text_19 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'To get started, simply select your folder and choose a new name, then select Copy Folder!'
          ),
          p_5
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, p_5);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            '\n    If the folder copy get\'s stuck, simply use the "Resume prior folder copy" button, then select the copy of \n    your folder.'
          ),
          p_5
        );
        var text_22 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var h3_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h3');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('When issues arise...'),
          h3_2
        );
        var text_24 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var p_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for \n    whatever reason, simply select the '
          ),
          p_6
        );
        var b = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('b');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(b, p_6);
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(i, b);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('new, incomplete copy'),
          i
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' of the folder and select "Resume \n    copying".'),
          p_6
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h3, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_3, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_5, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_2, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_7, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_3, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_13, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_4, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_17, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h3_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_19, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_5, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_22, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h3_2, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_24, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_6, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h3);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_3);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_5);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_2);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_7);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_3);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_13);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_4);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_17);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h3_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_19);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_5);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_22);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h3_2);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_24);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_6);
            }
          }
        };
      }

      function About(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        About.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      About.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      About.prototype.teardown = About.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = About;

      /***/
    },
    /* 5 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          data: function data() {
            return {
              // process.env.NODE_ENV is passed in via a webpack plugin
              env: 'development',
              message: 'Logged in as ',
              processing: true
            };
          },
          oncreate: function oncreate() {
            // get user email and put it in the account box
            var self = this;
            try {
              google.script.run
                .withSuccessHandler(function(email) {
                  self.set({
                    message: 'Logged in as ' + email + '.',
                    processing: false
                  });
                })
                .withFailureHandler(function(err) {
                  self.set({
                    message: 'Error retrieving active account.',
                    processing: false
                  });
                })
                .getUserEmail();
            } catch (err) {
              self.set({
                message: 'Error retrieving active account',
                processing: false
              });
            }
          }
        };
      })();

      function create_main_fragment(state, component) {
        var text_value;

        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.className = 'change-account__box';
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span, div);
        span.className = 'userEmail';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )((text_value = state.message));
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(text, span);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        '),
          span
        );

        var if_block = state.processing && create_if_block(state, component);

        if (if_block) if_block.mount(span, null);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n    '),
          div
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, div);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n    '),
          div
        );

        function get_block(state) {
          if (state.env === 'production') return create_if_block_1;
          return create_if_block_2;
        }

        var current_block = get_block(state);
        var if_block_1 = current_block(state, component);

        if_block_1.mount(div, null);

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
          },

          update: function update(changed, state) {
            if (text_value !== (text_value = state.message)) {
              text.data = text_value;
            }

            if (state.processing) {
              if (!if_block) {
                if_block = create_if_block(state, component);
                if_block.mount(span, null);
              }
            } else if (if_block) {
              if_block.destroy(true);
              if_block = null;
            }

            if (current_block !== (current_block = get_block(state))) {
              if_block_1.destroy(true);
              if_block_1 = current_block(state, component);
              if_block_1.mount(div, null);
            }
          },

          destroy: function destroy(detach) {
            if (if_block) if_block.destroy(false);
            if_block_1.destroy(false);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
            }
          }
        };
      }

      function create_if_block(state, component) {
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        span.className = 'rotate-contents';
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(i, span);
        i.className = 'spinner';

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(span, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(span);
            }
          }
        };
      }

      function create_if_block_1(state, component) {
        var a = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a.target = '_blank';
        a.href =
          'https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbxbGNGajrxv-HbX2sVY2OTu7yj9VvxlOMOeQblZFuq7rYm7uyo/exec';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Click here'),
          a
        );
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )(' to log in with a different account.');

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_1, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_1);
            }
          }
        };
      }

      function create_if_block_2(state, component) {
        var a = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a.target = '_blank';
        a.href =
          'https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbzKJQO5CBf7WDmrYo8FGDb20YWfoIyUZZhsbF844SI/dev';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Click here'),
          a
        );
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )(' to log in with a different account.');

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_1, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_1);
            }
          }
        };
      }

      function AccountSwitcher(options) {
        options = options || {};
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )(template.data(), options.data);

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);

        if (options._root) {
          options._root._renderHooks.push(template.oncreate.bind(this));
        } else {
          template.oncreate.call(this);
        }
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        AccountSwitcher.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      AccountSwitcher.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      AccountSwitcher.prototype.teardown = AccountSwitcher.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = AccountSwitcher;

      /***/
    },
    /* 6 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(
        8
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(
        12
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__ = __webpack_require__(
        5
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          methods: {
            setActive: function setActive(viewId) {
              this.set({ active: viewId });
            }
          },
          oncreate: function oncreate() {
            // add Account Switcher to header
            var acctSwitcher = new __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__[
              'a' /* default */
            ]({
              target: document.getElementById('change-account')
            });
          }
        };
      })();

      function create_main_fragment(state, component) {
        var nav_updating = false, viewchanger_updating = false;

        var nav_initial_data = { views: state.views };
        if ('active' in state) nav_initial_data.active = state.active;
        var nav = new __WEBPACK_IMPORTED_MODULE_0__Nav__['a' /* default */]({
          target: null,
          _root: component._root,
          data: nav_initial_data
        });

        nav.on('click', function(event) {
          component.setActive(event.view.id);
        });

        component._bindings.push(function() {
          if (nav._torndown) return;
          nav.observe(
            'active',
            function(value) {
              if (nav_updating) return;
              nav_updating = true;
              component._set({ active: value });
              nav_updating = false;
            },
            {
              init: __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'm' /* differs */
                ]
              )(nav.get('active'), state.active)
            }
          );
        });

        nav._context = {
          state: state
        };

        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');

        var viewchanger_initial_data = { views: state.views };
        if ('active' in state) viewchanger_initial_data.active = state.active;
        var viewchanger = new __WEBPACK_IMPORTED_MODULE_1__ViewChanger__[
          'a' /* default */
        ]({
          target: null,
          _root: component._root,
          data: viewchanger_initial_data
        });

        component._bindings.push(function() {
          if (viewchanger._torndown) return;
          viewchanger.observe(
            'active',
            function(value) {
              if (viewchanger_updating) return;
              viewchanger_updating = true;
              component._set({ active: value });
              viewchanger_updating = false;
            },
            {
              init: __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'm' /* differs */
                ]
              )(viewchanger.get('active'), state.active)
            }
          );
        });

        viewchanger._context = {
          state: state
        };

        return {
          mount: function mount(target, anchor) {
            nav._fragment.mount(target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            viewchanger._fragment.mount(target, anchor);
          },

          update: function update(changed, state) {
            if (!nav_updating && 'active' in changed) {
              nav_updating = true;
              nav._set({ active: state.active });
              nav_updating = false;
            }

            nav._context.state = state;

            var nav_changes = {};

            if ('views' in changed) nav_changes.views = state.views;

            if (Object.keys(nav_changes).length) nav.set(nav_changes);

            if (!viewchanger_updating && 'active' in changed) {
              viewchanger_updating = true;
              viewchanger._set({ active: state.active });
              viewchanger_updating = false;
            }

            viewchanger._context.state = state;

            var viewchanger_changes = {};

            if ('views' in changed) viewchanger_changes.views = state.views;

            if (Object.keys(viewchanger_changes).length)
              viewchanger.set(viewchanger_changes);
          },

          destroy: function destroy(detach) {
            nav.destroy(detach);
            viewchanger.destroy(detach);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
            }
          }
        };
      }

      function App(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;
        this._renderHooks = [];
        this._bindings = [];

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
        while (this._bindings.length) {
          this._bindings.pop()();
        }
        this._flush();

        if (options._root) {
          options._root._renderHooks.push(template.oncreate.bind(this));
        } else {
          template.oncreate.call(this);
        }
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        App.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      App.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
        while (this._bindings.length) {
          this._bindings.pop()();
        }
        this._flush();
      };

      App.prototype.teardown = App.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = App;

      /***/
    },
    /* 7 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var a = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a, 'name', 'top');
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var ul = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('ul');
        var li = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li, ul);
        var a_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_1, li);
        a_1.href = '#longerThan2Mins';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            "The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"
          ),
          a_1
        );
        var li_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_1, ul);
        var a_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_2, li_1);
        a_2.href = '#copyBetweenDomains';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Can I use this app to copy a folder between domains?'),
          a_2
        );
        var li_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_2, ul);
        var a_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_3, li_2);
        a_3.href = '#whenIsItDone';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I know when it is done?'),
          a_3
        );
        var li_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_3, ul);
        var a_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_4, li_3);
        a_4.href = '#notEverythingCopied';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )("It didn't copy everything - what do I do?"),
          a_4
        );
        var li_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_4, ul);
        var a_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_5, li_4);
        a_5.href = '#multipleAccounts';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I sign into a different account with this app?'),
          a_5
        );
        var li_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_5, ul);
        var a_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_6, li_5);
        a_6.href = '#infiniteLoop';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('HELP! The copying is stuck in an infinite loop!  What do I do?'),
          a_6
        );
        var li_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_6, ul);
        var a_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_7, li_6);
        a_7.href = '#uninstall';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I unintall the app and remove all permissions?'),
          a_7
        );
        var li_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_7, ul);
        var a_8 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_8, li_7);
        a_8.href = '#openissue';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I report a bug in the app?'),
          a_8
        );
        var text_9 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var h4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_9 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_9, h4);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_9, 'name', 'longerThan2Mins');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            "The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"
          ),
          h4
        );
        var text_11 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'When the app stops, you can use the "Resume" button to restart the copying.  When selecting the folder to resume, you must select the '
          ),
          div
        );
        var b = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('b');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(b, div);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('in-progress'),
          b
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' folder, '),
          div
        );
        var b_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('b');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(b_1, div);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('not'),
          b_1
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' the original.'),
          div
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, div);
        var br_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br_1, div);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            '\n    For example, if you are creating a copy of "Folder A" called "Copy of Folder A", you should select "Copy of Folder A" when you resume the copying.  Selecting the original folder will return an error.'
          ),
          div
        );
        var text_18 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_10 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_10.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_10
        );
        var text_20 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var h4_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_11 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_11, h4_1);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_11, 'name', 'copyBetweenDomains');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Can I use this app to copy a folder between domains?'),
          h4_1
        );
        var text_22 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Yes!  Follow the steps below:\n    '),
          div_1
        );
        var ol = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('ol');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(ol, div_1);
        var li_8 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_8, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Log into the account that owns the folder ("Account 1")'),
          li_8
        );
        var li_9 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_9, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Share the folder with the domain to which you\'d like to copy ("Account 2")'
          ),
          li_9
        );
        var li_10 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_10, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Open an private/incognito window and log into Account 2'),
          li_10
        );
        var li_11 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_11, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Go to the "Shared with me" section, right click the folder, and select "Add to Drive"'
          ),
          li_11
        );
        var li_12 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_12, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Open the app, and select the folder that has been shared'),
          li_12
        );
        var li_13 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_13, ol);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Create a copy and Account 2 will now be the owner'),
          li_13
        );
        var text_30 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_12 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_12.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_12
        );
        var text_32 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var h4_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_13 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_13, h4_2);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_13, 'name', 'whenIsItDone');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I know when it is done?'),
          h4_2
        );
        var text_34 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_2.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'You will know it is complete when the Copy Log says "Complete" in cell C2.  In addition, the cell will highlight green.'
          ),
          div_2
        );
        var text_36 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_14 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_14.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_14
        );
        var text_38 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var h4_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_15 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_15, h4_3);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_15, 'name', 'notEverythingCopied');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )("It didn't copy everything - what do I do?"),
          h4_3
        );
        var text_40 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_3.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    '
          ),
          div_3
        );
        var ol_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('ol');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(ol_1, div_3);
        var li_14 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_14, ol_1);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Audit the Copy Log for any errors, and manually copy those files'),
          li_14
        );
        var li_15 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_15, ol_1);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors'
          ),
          li_15
        );
        var text_44 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_16 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_16.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_16
        );
        var text_46 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var h4_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_17 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_17, h4_4);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_17, 'name', 'multipleAccounts');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I sign into a different account with this app?'),
          h4_4
        );
        var text_48 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_4.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            "There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account."
          ),
          div_4
        );
        var br_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br_2, div_4);
        var br_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br_3, div_4);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            '\n    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\n    \n    '
          ),
          div_4
        );
        var br_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br_4, div_4);
        var br_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br_5, div_4);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            '*If you think this is a good feature, please feel free to open an\n    '
          ),
          div_4
        );
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span, div_4);
        span.className = 'github-button-wrapper';
        var a_18 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_18, span);
        a_18.className = 'github-button';
        a_18.href = 'https://github.com/ericyd/gdrive-copy/issues';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_18, 'data-icon', 'octicon-issue-opened');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_18, 'data-style', 'mega');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_18, 'aria-label', 'Issue ericyd/gdrive-copy on GitHub');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Issue'),
          a_18
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            " on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"
          ),
          div_4
        );
        var text_54 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_19 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_19.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_19
        );
        var text_56 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var h4_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_20 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_20, h4_5);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_20, 'name', 'infiniteLoop');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('HELP! The copying is stuck in an infinite loop!  What do I do?'),
          h4_5
        );
        var text_58 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_5.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Please use the "Pause" function built into the app and '),
          div_5
        );
        var a_21 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_21, div_5);
        a_21.href = 'https://github.com/ericyd/gdrive-copy/issues';
        a_21.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('report the bug'),
          a_21
        );
        var text_61 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_22 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_22.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_22
        );
        var text_63 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var h4_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_23 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_23, h4_6);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_23, 'name', 'uninstall');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I unintall the app and remove all permissions?'),
          h4_6
        );
        var text_65 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_6.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('To quote '),
          div_6
        );
        var a_24 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_24, div_6);
        a_24.href =
          'https://webapps.stackexchange.com/questions/30841/how-do-i-remove-permission-from-an-app-that-i-gave-google-oauth-access-to';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('the excellent answer on stackexchange:'),
          a_24
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n    '),
          div_6
        );
        var ol_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('ol');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(ol_2, div_6);
        var li_16 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_16, ol_2);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Go to '),
          li_16
        );
        var a_25 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_25, li_16);
        a_25.href = 'https://accounts.google.com';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('accounts.google.com'),
          a_25
        );
        var li_17 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_17, ol_2);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Under "Sign-in & security" tab click "Connected apps & sites"'),
          li_17
        );
        var li_18 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_18, ol_2);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'Under the section "Apps connected to your account", click on MANAGE APPS:'
          ),
          li_18
        );
        var li_19 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('li');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(li_19, ol_2);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Select app you want & click REMOVE button'),
          li_19
        );
        var text_74 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_26 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_26.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_26
        );
        var text_76 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var h4_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h4');
        var a_27 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_27, h4_7);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_27, 'name', 'openissue');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('How do I report a bug in the app?'),
          h4_7
        );
        var text_78 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var div_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_7.className = 'description';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(
            'If you have found a bug that is not covered in these FAQs, please open an\n    '
          ),
          div_7
        );
        var span_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_1, div_7);
        span_1.className = 'github-button-wrapper';
        var a_28 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(a_28, span_1);
        a_28.className = 'github-button';
        a_28.href = 'https://github.com/ericyd/gdrive-copy/issues';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_28, 'data-icon', 'octicon-issue-opened');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_28, 'data-style', 'mega');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(a_28, 'aria-label', 'Issue ericyd/gdrive-copy on GitHub');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Issue'),
          a_28
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' on Github.'),
          div_7
        );
        var text_82 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var a_29 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('a');
        a_29.href = '#top';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Top'),
          a_29
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(ul, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_9, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_11, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_18, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_10, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_20, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_22, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_30, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_12, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_32, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_2, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_34, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_2, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_36, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_14, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_38, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_3, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_40, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_3, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_44, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_16, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_46, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_4, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_48, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_4, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_54, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_19, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_56, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_5, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_58, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_5, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_61, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_22, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_63, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_6, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_65, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_6, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_74, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_26, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_76, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(h4_7, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_78, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_7, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_82, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(a_29, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(ul);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_9);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_11);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_18);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_10);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_20);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_22);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_30);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_12);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_32);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_2);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_34);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_2);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_36);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_14);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_38);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_3);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_40);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_3);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_44);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_16);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_46);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_4);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_48);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_4);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_54);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_19);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_56);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_5);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_58);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_5);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_61);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_22);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_63);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_6);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_65);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_6);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_74);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_26);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_76);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(h4_7);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_78);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_7);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_82);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(a_29);
            }
          }
        };
      }

      function FAQ(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        FAQ.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      FAQ.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      FAQ.prototype.teardown = FAQ.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = FAQ;

      /***/
    },
    /* 8 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var nav = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('nav');
        var section = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('section');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(section, nav);
        section.className = 'header-container';
        var each_block_value = state.views;

        var each_block_iterations = [];

        for (var i = 0; i < each_block_value.length; i += 1) {
          each_block_iterations[i] = create_each_block(
            state,
            each_block_value,
            each_block_value[i],
            i,
            component
          );
          each_block_iterations[i].mount(section, null);
        }

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(nav, target, anchor);
          },

          update: function update(changed, state) {
            var each_block_value = state.views;

            if ('views' in changed || 'active' in changed) {
              for (var i = 0; i < each_block_value.length; i += 1) {
                if (each_block_iterations[i]) {
                  each_block_iterations[i].update(
                    changed,
                    state,
                    each_block_value,
                    each_block_value[i],
                    i
                  );
                } else {
                  each_block_iterations[i] = create_each_block(
                    state,
                    each_block_value,
                    each_block_value[i],
                    i,
                    component
                  );
                  each_block_iterations[i].mount(section, null);
                }
              }

              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'n' /* destroyEach */
                ]
              )(each_block_iterations, true, each_block_value.length);
              each_block_iterations.length = each_block_value.length;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'n' /* destroyEach */
              ]
            )(each_block_iterations, false, 0);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(nav);
            }
          }
        };
      }

      function create_each_block(
        state,
        each_block_value,
        view,
        view_index,
        component
      ) {
        var button_name_value, button_class_value, button_id_value, text_value;

        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(button, 'role', 'button');
        button.name = button_name_value = view.id;
        button.className = button_class_value =
          'tabLink btn--nav ' + (state.active === view.id ? 'active' : '');
        button.id = button_id_value = '' + view.id + '-button';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(button, 'href', '#');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(button, 'click', click_handler);

        button._svelte = {
          component: component,
          each_block_value: each_block_value,
          view_index: view_index
        };

        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )((text_value = view.title));
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(text, button);

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(button, target, anchor);
          },

          update: function update(
            changed,
            state,
            each_block_value,
            view,
            view_index
          ) {
            if (button_name_value !== (button_name_value = view.id)) {
              button.name = button_name_value;
            }

            if (
              button_class_value !==
              (button_class_value =
                'tabLink btn--nav ' +
                (state.active === view.id ? 'active' : ''))
            ) {
              button.className = button_class_value;
            }

            if (
              button_id_value !== (button_id_value = '' + view.id + '-button')
            ) {
              button.id = button_id_value;
            }

            button._svelte.each_block_value = each_block_value;
            button._svelte.view_index = view_index;

            if (text_value !== (text_value = view.title)) {
              text.data = text_value;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(button, 'click', click_handler);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(button);
            }
          }
        };
      }

      function click_handler(event) {
        var component = this._svelte.component;
        var each_block_value = this._svelte.each_block_value,
          view_index = this._svelte.view_index,
          view = each_block_value[view_index];
        component.fire('click', { view: view });
      }

      function Nav(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Nav.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Nav.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      Nav.prototype.teardown = Nav.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = Nav;

      /***/
    },
    /* 9 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          data: function data() {
            return {
              message: 'Are you sure you want to stop the instances of copy folder that you have running?',
              showButton: true
            };
          },

          methods: {
            handleClick: function handleClick(event) {
              // TODO: add success and failure handlers
              try {
                google.script.run.setStopFlag();
              } catch (err) {
                console.log(err);
              }
              this.set({
                message: 'You have stopped all folder copies. To restart them, please use the "Resume" feature.',
                showButton: false
              });
            }
          }
        };
      })();

      function create_main_fragment(state, component) {
        var text_value;

        var p = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )((text_value = state.message));
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(text, p);
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var p_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');

        var if_block = state.showButton && create_if_block(state, component);

        if (if_block) if_block.mount(p_1, null);

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text_1, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(p_1, target, anchor);
          },

          update: function update(changed, state) {
            if (text_value !== (text_value = state.message)) {
              text.data = text_value;
            }

            if (state.showButton) {
              if (!if_block) {
                if_block = create_if_block(state, component);
                if_block.mount(p_1, null);
              }
            } else if (if_block) {
              if_block.destroy(true);
              if_block = null;
            }
          },

          destroy: function destroy(detach) {
            if (if_block) if_block.destroy(false);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text_1);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(p_1);
            }
          }
        };
      }

      function create_if_block(state, component) {
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        button.type = 'button';
        button.className = 'btn btn--small';

        function click_handler(event) {
          component.handleClick(event);
        }

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(button, 'click', click_handler);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Yes, I want to stop all my current instances of Copy Folder'),
          button
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(button, target, anchor);
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(button, 'click', click_handler);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(button);
            }
          }
        };
      }

      function Pause(options) {
        options = options || {};
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )(template.data(), options.data);

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Pause.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Pause.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      Pause.prototype.teardown = Pause.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = Pause;

      /***/
    },
    /* 10 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectFolder__ = __webpack_require__(
        1
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubmitButton__ = __webpack_require__(
        2
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          data: function data() {
            return {
              buttonText: 'Resume copying',
              selectText: 'Select the folder copy that is in progress'
            };
          },

          methods: {
            handleClick: function handleClick(e) {},
            handleSubmit: function handleSubmit(e) {}
          }
        };
      })();

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = 'resume-validation-errors';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.id = 'resume-form-div';
        div_1.className = 'form-div';
        var form = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('form');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(form, div_1);
        form.id = 'resumeForm';
        form.name = 'resumeForm';
        form.className = 'form-horizontal';

        function submit_handler(event) {
          component.handleSubmit(event);
        }

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(form, 'submit', submit_handler);

        var selectfolder = new __WEBPACK_IMPORTED_MODULE_0__SelectFolder__[
          'a' /* default */
        ]({
          target: form,
          _root: component._root,
          data: { selectText: state.selectText }
        });

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' \n        '),
          form
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, form);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n        \n        '),
          form
        );

        var submitbutton = new __WEBPACK_IMPORTED_MODULE_1__SubmitButton__[
          'a' /* default */
        ]({
          target: form,
          _root: component._root,
          data: { buttonText: state.buttonText }
        });

        submitbutton.on('click', function(event) {
          component.handleClick(event);
        });

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
          },

          update: function update(changed, state) {
            var selectfolder_changes = {};

            if ('selectText' in changed)
              selectfolder_changes.selectText = state.selectText;

            if (Object.keys(selectfolder_changes).length)
              selectfolder.set(selectfolder_changes);

            var submitbutton_changes = {};

            if ('buttonText' in changed)
              submitbutton_changes.buttonText = state.buttonText;

            if (Object.keys(submitbutton_changes).length)
              submitbutton.set(submitbutton_changes);
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(form, 'submit', submit_handler);
            selectfolder.destroy(false);
            submitbutton.destroy(false);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
            }
          }
        };
      }

      function Resume(options) {
        options = options || {};
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )(template.data(), options.data);

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;
        this._renderHooks = [];

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
        this._flush();
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Resume.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Resume.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
        this._flush();
      };

      Resume.prototype.teardown = Resume.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = Resume;

      /***/
    },
    /* 11 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Question__ = __webpack_require__(
        13
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectFolder__ = __webpack_require__(
        1
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubmitButton__ = __webpack_require__(
        2
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          data: function data() {
            return {
              buttonText: 'Copy Folder',
              selectText: 'Folder to copy'
            };
          },

          methods: {
            handleClick: function handleClick(e) {},
            handleSubmit: function handleSubmit(e) {}
          }
        };
      })();

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = 'start-validation-errors';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.id = 'formDiv';
        div_1.className = 'form-div';
        var form = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('form');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(form, div_1);
        form.id = 'folderForm';
        form.name = 'folderForm';

        function submit_handler(event) {
          component.handleSubmit(event);
        }

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* addEventListener */
          ]
        )(form, 'submit', submit_handler);

        var selectfolder = new __WEBPACK_IMPORTED_MODULE_1__SelectFolder__[
          'a' /* default */
        ]({
          target: form,
          _root: component._root,
          data: { selectText: state.selectText }
        });

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        \n        '),
          form
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, form);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var label = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label, form);
        label.className = 'textfield';
        label.htmlFor = 'newFolder';
        var input = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input, label);
        input.type = 'text';
        input.id = 'newFolder';
        input.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          label
        );
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span, label);
        span.className = 'textfield__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('New folder name'),
          span
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n\n        \n        Copy sharing permissions\n        '),
          form
        );
        var span_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_1, form);
        span_1.tabIndex = '10';
        span_1.className = 'tooltip-toggle';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(
          span_1,
          'data-tooltip',
          "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected."
        );

        var question = new __WEBPACK_IMPORTED_MODULE_0__icons_Question__[
          'a' /* default */
        ]({
          target: span_1,
          _root: component._root
        });

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' \n        \n        \n        '),
          form
        );
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_2, form);
        div_2.className = 'form-group';
        div_2.id = 'permissions-group';
        var label_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_1, div_2);
        label_1.className = 'radio';
        var input_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_1, label_1);
        input_1.type = 'radio';
        input_1.name = 'permissions';
        input_1.__value = 'no';
        input_1.value = input_1.__value;
        input_1.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_1
        );
        var span_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_2, label_1);
        span_2.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('No'),
          span_2
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          div_2
        );
        var label_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_2, div_2);
        label_2.className = 'radio';
        var input_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_2, label_2);
        input_2.type = 'radio';
        input_2.name = 'permissions';
        input_2.__value = 'yes';
        input_2.value = input_2.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_2
        );
        var span_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_3, label_2);
        span_3.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Yes'),
          span_3
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n\n        \n        Copy folder to\n        '),
          form
        );
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_3, form);
        div_3.className = 'form-group';
        div_3.id = 'destination-group';
        var label_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_3, div_3);
        label_3.className = 'radio';
        var input_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_3, label_3);
        input_3.type = 'radio';
        input_3.name = 'copyLocationOptions';
        input_3.__value = 'same';
        input_3.value = input_3.__value;
        input_3.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_3
        );
        var span_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_4, label_3);
        span_4.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Same as source folder'),
          span_4
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          div_3
        );
        var label_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_4, div_3);
        label_4.className = 'radio';
        var input_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_4, label_4);
        input_4.type = 'radio';
        input_4.name = 'copyLocationOptions';
        input_4.__value = 'root';
        input_4.value = input_4.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_4
        );
        var span_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_5, label_4);
        span_5.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Root directory (i.e. at the top of "My Drive")'),
          span_5
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );

        var submitbutton = new __WEBPACK_IMPORTED_MODULE_2__SubmitButton__[
          'a' /* default */
        ]({
          target: form,
          _root: component._root,
          data: { buttonText: state.buttonText }
        });

        submitbutton.on('click', function(event) {
          component.handleClick(event);
        });

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
          },

          update: function update(changed, state) {
            var selectfolder_changes = {};

            if ('selectText' in changed)
              selectfolder_changes.selectText = state.selectText;

            if (Object.keys(selectfolder_changes).length)
              selectfolder.set(selectfolder_changes);

            var submitbutton_changes = {};

            if ('buttonText' in changed)
              submitbutton_changes.buttonText = state.buttonText;

            if (Object.keys(submitbutton_changes).length)
              submitbutton.set(submitbutton_changes);
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'k' /* removeEventListener */
              ]
            )(form, 'submit', submit_handler);
            selectfolder.destroy(false);
            question.destroy(false);
            submitbutton.destroy(false);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
            }
          }
        };
      }

      function Start(options) {
        options = options || {};
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )(template.data(), options.data);

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;
        this._renderHooks = [];

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
        this._flush();
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Start.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Start.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
        this._flush();
      };

      Start.prototype.teardown = Start.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = Start;

      /***/
    },
    /* 12 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          oncreate: function oncreate() {
            // render each view component.
            // for some reason this._state seems to be the only
            // way to access the props passed to this component
            this._state.views.forEach(function(view) {
              new view.component({
                target: document.getElementById(view.id)
              });
            });
          }
        };
      })();

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.className = 'container';
        div.id = 'container';
        var each_block_value = state.views;

        var each_block_iterations = [];

        for (var i = 0; i < each_block_value.length; i += 1) {
          each_block_iterations[i] = create_each_block(
            state,
            each_block_value,
            each_block_value[i],
            i,
            component
          );
          each_block_iterations[i].mount(div, null);
        }

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
          },

          update: function update(changed, state) {
            var each_block_value = state.views;

            if ('views' in changed || 'active' in changed) {
              for (var i = 0; i < each_block_value.length; i += 1) {
                if (each_block_iterations[i]) {
                  each_block_iterations[i].update(
                    changed,
                    state,
                    each_block_value,
                    each_block_value[i],
                    i
                  );
                } else {
                  each_block_iterations[i] = create_each_block(
                    state,
                    each_block_value,
                    each_block_value[i],
                    i,
                    component
                  );
                  each_block_iterations[i].mount(div, null);
                }
              }

              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'n' /* destroyEach */
                ]
              )(each_block_iterations, true, each_block_value.length);
              each_block_iterations.length = each_block_value.length;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'n' /* destroyEach */
              ]
            )(each_block_iterations, false, 0);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
            }
          }
        };
      }

      function create_each_block(
        state,
        each_block_value,
        view,
        view_index,
        component
      ) {
        var div_id_value, div_class_value;

        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = div_id_value = view.id;
        div.className = div_class_value =
          'tab ' + (state.active === view.id ? 'active' : '');

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
          },

          update: function update(
            changed,
            state,
            each_block_value,
            view,
            view_index
          ) {
            if (div_id_value !== (div_id_value = view.id)) {
              div.id = div_id_value;
            }

            if (
              div_class_value !==
              (div_class_value =
                'tab ' + (state.active === view.id ? 'active' : ''))
            ) {
              div.className = div_class_value;
            }
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
            }
          }
        };
      }

      function ViewChanger(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);

        if (options._root) {
          options._root._renderHooks.push(template.oncreate.bind(this));
        } else {
          template.oncreate.call(this);
        }
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        ViewChanger.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      ViewChanger.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        this._fragment.update(newState, this._state);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      ViewChanger.prototype.teardown = ViewChanger.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = ViewChanger;

      /***/
    },
    /* 13 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var svg = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'l' /* createSvgElement */
          ]
        )('svg');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(svg, 'xmlns', 'http://www.w3.org/2000/svg');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(svg, 'viewBox', '0 0 24 24');
        var path = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'l' /* createSvgElement */
          ]
        )('path');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(path, svg);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(
          path,
          'd',
          'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z'
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(svg, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(svg);
            }
          }
        };
      }

      function Question(options) {
        options = options || {};
        this._state = options.data || {};

        this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        };

        this._handlers = Object.create(null);

        this._root = options._root || this;
        this._yield = options._yield;

        this._torndown = false;

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Question.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Question.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.post, newState, oldState);
      };

      Question.prototype.teardown = Question.prototype.destroy = function destroy(
        detach
      ) {
        this.fire('destroy');

        this._fragment.destroy(detach !== false);
        this._fragment = null;

        this._state = {};
        this._torndown = true;
      };

      /* harmony default export */ __webpack_exports__['a'] = Question;

      /***/
    },
    /* 14 */
    /***/ function(module, exports) {
      /**
 * This module provides functions that control the
 * showing/hiding of DOM elements.
 */

      module.exports = {
        /**
    * Updates "Select Folder" fields with selected folder info
    */
        folderIsSelected: function folderIsSelected(selectedFolder) {
          // update display
          $('.getFolderErrors').text('');
          $('#newFolder').val(selectedFolder.destName);
          $('.folderName').text(selectedFolder.srcName);

          $('.folderSelect').hide();
          $('.folderLookup').hide();
          $('.selectedFolderInfo').show();
        },

        /**
    * Function to alert user that folder is being identified
    * Hides folder
    */
        onFolderLookup: function onFolderLookup() {
          $('.folderLookup').show();
          $('.folderSelect').hide();
        },

        /**
    * Called when either form validates.
    * Updates UI to indicate that the app is initializing.
    */
        onValid: function onValid() {
          $('#errors').html('');
          $('#start-validation-errors').html('');
          $('#resume-validation-errors').html('');
        },

        /**
    * Resets form to default state
    */
        resetForm: function resetForm() {
          $('.folderSelect').show();
          $('.selectedFolderInfo').hide();
          $('.getFolderErrors').hide();
        },

        /**
     * Show an overlay with a spinner and a message
     */
        showProcessingOverlay: function showProcessingOverlay(message) {
          var overlay = document.querySelector('.overlay');
          var overlayMessage = document.querySelector('.overlay__message');
          overlay.style.display = 'block';
          overlayMessage.innerText = message;
        },

        /**
     * Hide the overlay
     */
        clearProcessingOverlay: function clearProcessingOverlay() {
          var overlay = document.querySelector('.overlay');
          var overlayMessage = document.querySelector('.overlay__message');
          overlay.style.display = 'none';
          overlayMessage.innerText = '';
        },

        hideStep1: function hideStep1(resuming) {
          // Hide step 1 for Start or Resuming
          var id = resuming ? 'resume-step1' : 'start-step1';
          document.getElementById(id).style.display = 'none';
        },

        /**
     * shows either `resume-success`, `resume-error`, `start-success`, or `start-error`
     * Can also show both start and resume at same time if resuming is null or undefined.
     * 
     * @param {boolean} resuming
     * @param {string} successfulness should be either 'error' or 'success'
     */
        showStep2: function showStep2(resuming, successfulness) {
          if (resuming === null || resuming === undefined) {
            document.getElementById('start-' + successfulness).style.display =
              'block';
            return;
          }
          var id = resuming ? 'resume' : 'start';
          id += '-' + successfulness;
          document.getElementById(id).style.display = 'block';
        },

        showTooManyTriggers: function showTooManyTriggers() {
          $('.too-many-triggers').show();
        },

        hideTooManyTriggers: function hideTooManyTriggers() {
          $('.too-many-triggers').hide();
        },

        showErrors: function showErrors() {
          $('.errors').show();
        },

        hideErrors: function hideErrors() {
          $('.errors').hide();
        },

        showPauseStep2: function showPauseStep2() {
          document.getElementById('pause-step1').style.display = 'none';
          document.getElementById('pause-step2').style.display = 'block';
        }
      };

      /***/
    },
    /* 15 */
    /***/ function(module, exports) {
      /**
 * Parses folder URL string and returns folder ID string
 * 
 * @param {string} url the folder URL for the selected folder
 * @return {string} id the folder ID for the selected folder
 */
      module.exports = function(url) {
        var id, amp;

        // Get the index of the string at which the folderId starts
        var idStart = url.search('id=');
        var foldersStart = url.search('folders');

        if (idStart > 0) {
          id = url.slice(idStart + 3);
        } else if (foldersStart > 0) {
          id = url.slice(foldersStart + 8);
        } else {
          id = url;
        }

        // Find the ampersand in the remaining string, which is the delimiter between the folderId and the sharing privileges
        amp = id.indexOf('&');

        // Slice the string up to the ampersand
        if (amp > 0) {
          id = id.slice(0, amp);
        }

        return id;
      };

      /***/
    },
    /* 16 */
    /***/ function(module, exports, __webpack_require__) {
      /*
Many, many thanks to [Jean-Pierre Verhulst](https://plus.google.com/+JeanPierreVerhulst/posts) 
for providing the working backbone of this script
*/

      var DOM = __webpack_require__(14);

      // vanillaJS implementation of $.getScript(), thanks to http://stackoverflow.com/questions/16839698/jquery-getscript-alternative-in-native-javascript
      function getScript(source, callback) {
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        script.async = 1;
        prior.parentNode.insertBefore(script, prior);

        script.onload = script.onreadystatechange = function(_, isAbort) {
          if (
            isAbort ||
            !script.readyState ||
            /loaded|complete/.test(script.readyState)
          ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if (!isAbort) {
              if (callback) callback();
            }
          }
        };

        script.src = source;
      }

      getScript('https://apis.google.com/js/api.js', onApiLoad);

      // Declare variables
      var selectedFolder = {};
      var pickerApiLoaded = false;
      var pickerBuilder;

      exports.folder = selectedFolder;

      function onApiLoad() {
        gapi.load('picker', {
          callback: function callback() {
            pickerApiLoaded = true;
          }
        });
        google.script.run
          .withSuccessHandler(createPicker)
          .withFailureHandler(showError)
          .getOAuthToken();
      }

      function createPicker(token) {
        if (pickerApiLoaded && token) {
          var foldersView = new google.picker.DocsView()
            .setIncludeFolders(true)
            .setMimeTypes('application/vnd.google-apps.folder')
            .setSelectFolderEnabled(true);

          pickerBuilder = new google.picker.PickerBuilder()
            .addView(foldersView)
            .hideTitleBar()
            .setOAuthToken(token)
            .setMaxItems(1)
            .setCallback(pickerCallback)
            .setTitle('Select a folder to copy')
            .setOrigin('https://script.google.com')
            .build();
        } else {
          // todo: handle errors
        }
      }

      // Allows method binding from external scripts, e.g. init.js
      exports.showPicker = function() {
        return pickerBuilder.setVisible(true);
      };

      /**
 * A callback function that extracts the chosen document's metadata from the
 * response object. For details on the response object, see
 * https://developers.google.com/picker/docs/result
 *
 * @param {object} data The response object.
 */

      function pickerCallback(data) {
        var action = data[google.picker.Response.ACTION];

        if (action == google.picker.Action.PICKED) {
          var doc = data[google.picker.Response.DOCUMENTS][0];
          setSelectedFolder({
            srcId: doc[google.picker.Document.ID],
            srcParentId: doc[google.picker.Document.PARENT_ID],
            srcName: doc[google.picker.Document.NAME],
            destName: 'Copy of ' + doc[google.picker.Document.NAME]
          });
        } else if (action == google.picker.Action.CANCEL) {
          google.script.host.close();
        }
      }

      /**
 * save passed values to selectedFolder
 * 
 * @param {object} properties selectedFolder properties to save
 */
      function setSelectedFolder(properties) {
        // save properties
        selectedFolder.srcId = properties.srcId;
        selectedFolder.srcParentId = properties.srcParentId;
        selectedFolder.srcName = properties.srcName;
        selectedFolder.destName = properties.destName;

        DOM.folderIsSelected(selectedFolder);
      }

      exports.setSelectedFolder = setSelectedFolder;

      function showError() {
        $('#getFolderErrors').text(
          'Error getting OAuth token for Google Picker.  Please manually input folder URL'
        );
      }

      /***/
    },
    /* 17 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(3);

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBmYTQ0NjBiNjQ2MGI3ZTc3NTEiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWNjb3VudFN3aXRjaGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGFydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGlja2VyLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJ2aWV3cyIsImlkIiwidGl0bGUiLCJjb21wb25lbnQiLCJBYm91dCIsIlN0YXJ0IiwiUmVzdW1lIiwiUGF1c2UiLCJGQVEiLCJhY3RpdmUiLCJjb21wb25lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvbGRlcklzU2VsZWN0ZWQiLCJzZWxlY3RlZEZvbGRlciIsIiQiLCJ0ZXh0IiwidmFsIiwiZGVzdE5hbWUiLCJzcmNOYW1lIiwiaGlkZSIsInNob3ciLCJvbkZvbGRlckxvb2t1cCIsIm9uVmFsaWQiLCJodG1sIiwicmVzZXRGb3JtIiwic2hvd1Byb2Nlc3NpbmdPdmVybGF5IiwibWVzc2FnZSIsIm92ZXJsYXkiLCJvdmVybGF5TWVzc2FnZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsImNsZWFyUHJvY2Vzc2luZ092ZXJsYXkiLCJoaWRlU3RlcDEiLCJyZXN1bWluZyIsImdldEVsZW1lbnRCeUlkIiwic2hvd1N0ZXAyIiwic3VjY2Vzc2Z1bG5lc3MiLCJ1bmRlZmluZWQiLCJzaG93VG9vTWFueVRyaWdnZXJzIiwiaGlkZVRvb01hbnlUcmlnZ2VycyIsInNob3dFcnJvcnMiLCJoaWRlRXJyb3JzIiwic2hvd1BhdXNlU3RlcDIiLCJ1cmwiLCJhbXAiLCJpZFN0YXJ0Iiwic2VhcmNoIiwiZm9sZGVyc1N0YXJ0Iiwic2xpY2UiLCJpbmRleE9mIiwiRE9NIiwicmVxdWlyZSIsImdldFNjcmlwdCIsInNvdXJjZSIsImNhbGxiYWNrIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInByaW9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhc3luYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbmxvYWQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfIiwiaXNBYm9ydCIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwic3JjIiwib25BcGlMb2FkIiwicGlja2VyQXBpTG9hZGVkIiwicGlja2VyQnVpbGRlciIsImZvbGRlciIsImdhcGkiLCJsb2FkIiwiZ29vZ2xlIiwicnVuIiwid2l0aFN1Y2Nlc3NIYW5kbGVyIiwiY3JlYXRlUGlja2VyIiwid2l0aEZhaWx1cmVIYW5kbGVyIiwic2hvd0Vycm9yIiwiZ2V0T0F1dGhUb2tlbiIsInRva2VuIiwiZm9sZGVyc1ZpZXciLCJwaWNrZXIiLCJEb2NzVmlldyIsInNldEluY2x1ZGVGb2xkZXJzIiwic2V0TWltZVR5cGVzIiwic2V0U2VsZWN0Rm9sZGVyRW5hYmxlZCIsIlBpY2tlckJ1aWxkZXIiLCJhZGRWaWV3IiwiaGlkZVRpdGxlQmFyIiwic2V0T0F1dGhUb2tlbiIsInNldE1heEl0ZW1zIiwic2V0Q2FsbGJhY2siLCJwaWNrZXJDYWxsYmFjayIsInNldFRpdGxlIiwic2V0T3JpZ2luIiwiYnVpbGQiLCJzaG93UGlja2VyIiwic2V0VmlzaWJsZSIsImFjdGlvbiIsIlJlc3BvbnNlIiwiQUNUSU9OIiwiQWN0aW9uIiwiUElDS0VEIiwiZG9jIiwiRE9DVU1FTlRTIiwic2V0U2VsZWN0ZWRGb2xkZXIiLCJzcmNJZCIsIkRvY3VtZW50IiwiSUQiLCJzcmNQYXJlbnRJZCIsIlBBUkVOVF9JRCIsIk5BTUUiLCJDQU5DRUwiLCJob3N0IiwiY2xvc2UiLCJwcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QURTO0FBRWhCQyxtQkFBYU4sSUFBSS9CLE9BQU9TLE1BQVAsQ0FBYzBCLFFBQWQsQ0FBdUJHLFNBQTNCLENBRkc7QUFHaEJoRyxlQUFTeUYsSUFBSS9CLE9BQU9TLE1BQVAsQ0FBYzBCLFFBQWQsQ0FBdUJJLElBQTNCLENBSE87QUFJaEJsRyxnQkFBVSxhQUFhMEYsSUFBSS9CLE9BQU9TLE1BQVAsQ0FBYzBCLFFBQWQsQ0FBdUJJLElBQTNCO0FBSlAsS0FBbEI7QUFNRCxHQVJELE1BUU8sSUFBSWIsVUFBVTFCLE9BQU9TLE1BQVAsQ0FBY29CLE1BQWQsQ0FBcUJXLE1BQW5DLEVBQTJDO0FBQ2hEeEMsV0FBT3BCLE1BQVAsQ0FBYzZELElBQWQsQ0FBbUJDLEtBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7QUFLQSxTQUFTVCxpQkFBVCxDQUEyQlUsVUFBM0IsRUFBdUM7QUFDckM7QUFDQTFHLGlCQUFlaUcsS0FBZixHQUF1QlMsV0FBV1QsS0FBbEM7QUFDQWpHLGlCQUFlb0csV0FBZixHQUE2Qk0sV0FBV04sV0FBeEM7QUFDQXBHLGlCQUFlSyxPQUFmLEdBQXlCcUcsV0FBV3JHLE9BQXBDO0FBQ0FMLGlCQUFlSSxRQUFmLEdBQTBCc0csV0FBV3RHLFFBQXJDOztBQUVBa0MsTUFBSXZDLGdCQUFKLENBQXFCQyxjQUFyQjtBQUNEOztBQUVERixRQUFRa0csaUJBQVIsR0FBNEJBLGlCQUE1Qjs7QUFFQSxTQUFTNUIsU0FBVCxHQUFxQjtBQUNuQm5FLElBQUUsa0JBQUYsRUFBc0JDLElBQXRCLENBQ0UsZ0ZBREY7QUFHRCxDIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODBmYTQ0NjBiNjQ2MGI3ZTc3NTEiLCJmdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbiAoIHRhcmdldCApIHtcblx0Zm9yICggdmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cdFx0Zm9yICggdmFyIGsgaW4gc291cmNlICkgdGFyZ2V0W2tdID0gc291cmNlW2tdO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZSAoIG5vZGUsIHRhcmdldCApIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUgKCBub2RlLCB0YXJnZXQsIGFuY2hvciApIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZSggbm9kZSwgYW5jaG9yICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUgKCBub2RlICkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbiAoIGJlZm9yZSwgYWZ0ZXIgKSB7XG5cdHdoaWxlICggYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIgKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGJlZm9yZS5uZXh0U2libGluZyApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoICggaXRlcmF0aW9ucywgZGV0YWNoLCBzdGFydCApIHtcblx0Zm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBpdGVyYXRpb25zW2ldICkgaXRlcmF0aW9uc1tpXS5kZXN0cm95KCBkZXRhY2ggKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICggbmFtZSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dCAoIGRhdGEgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggZGF0YSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoICcnICk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lciAoIG5vZGUsIGV2ZW50LCBoYW5kbGVyICkge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50LCBoYW5kbGVyLCBmYWxzZSApO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZSggYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZSAoIG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZSAoIGdyb3VwICkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBncm91cFtpXS5jaGVja2VkICkgdmFsdWUucHVzaCggZ3JvdXBbaV0uX192YWx1ZSApO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbGluZWFyICggdCApIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlS2V5ZnJhbWVzICggYSwgYiwgZGVsdGEsIGR1cmF0aW9uLCBlYXNlLCBmbiwgbm9kZSwgc3R5bGUgKSB7XG5cdHZhciBpZCA9ICdfX3N2ZWx0ZScgKyB+figgTWF0aC5yYW5kb20oKSAqIDFlOSApOyAvLyBUT0RPIG1ha2UgdGhpcyBtb3JlIHJvYnVzdFxuXHR2YXIga2V5ZnJhbWVzID0gJ0BrZXlmcmFtZXMgJyArIGlkICsgJ3tcXG4nO1xuXG5cdGZvciAoIHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uICkge1xuXHRcdHZhciB0ID0gYSArIGRlbHRhICogZWFzZSggcCApO1xuXHRcdGtleWZyYW1lcyArPSAoIHAgKiAxMDAgKSArICcleycgKyBmbiggdCApICsgJ31cXG4nO1xuXHR9XG5cblx0a2V5ZnJhbWVzICs9ICcxMDAlIHsnICsgZm4oIGIgKSArICd9XFxufSc7XG5cdHN0eWxlLnRleHRDb250ZW50ICs9IGtleWZyYW1lcztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApO1xuXG5cdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24uc3BsaXQoICcsJyApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24gKCBhbmltICkge1xuXHRcdFx0Ly8gd2hlbiBpbnRyb2luZywgZGlzY2FyZCBvbGQgYW5pbWF0aW9ucyBpZiB0aGVyZSBhcmUgYW55XG5cdFx0XHRyZXR1cm4gYW5pbSAmJiAoIGRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KCBhbmltICkgKTtcblx0XHR9KVxuXHRcdC5jb25jYXQoIGlkICsgJyAnICsgZHVyYXRpb24gKyAnbXMgbGluZWFyIDEgZm9yd2FyZHMnIClcblx0XHQuam9pbiggJywgJyApO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbiAoIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCApIHtcblx0dmFyIG9iaiA9IGZuKCBub2RlLCBwYXJhbXMgKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAoIG9iai5jc3MgKSB7XG5cdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuXHR9XG5cblx0aWYgKCBpbnRybyAmJiBvYmoudGljayApIG9iai50aWNrKCAwICk7XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uICggaW50cm8sIGNhbGxiYWNrICkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAoIG9iai5kZWxheSB8fCAwICksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIG9iai5kZWxheSApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQoIHByb2dyYW0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQoIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0YXJ0OiBmdW5jdGlvbiAoIHByb2dyYW0gKSB7XG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmIgPSBwcm9ncmFtLmludHJvID8gMSA6IDA7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMoIHByb2dyYW0uYiAtIHByb2dyYW0uYSApO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKCBvYmouY3NzICkge1xuXHRcdFx0XHRnZW5lcmF0ZUtleWZyYW1lcyggcHJvZ3JhbS5hLCBwcm9ncmFtLmIsIHByb2dyYW0uZGVsdGEsIHByb2dyYW0uZHVyYXRpb24sIGVhc2UsIG9iai5jc3MsIG5vZGUsIHN0eWxlICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIG5vdyApIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCAhcHJvZ3JhbSApIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UoIHAgLyBwcm9ncmFtLmR1cmF0aW9uICk7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy50ID0gdGhpcy5wcm9ncmFtLmI7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICggb2JqLnRpY2sgKSBvYmoudGljayggMSApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblxuXHRhZGQ6IGZ1bmN0aW9uICggdHJhbnNpdGlvbiApIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5wdXNoKCB0cmFuc2l0aW9uICk7XG5cblx0XHRpZiAoICF0aGlzLnJ1bm5pbmcgKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciBpID0gdHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQoIHRyYW5zaXRpb24ucGVuZGluZyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucnVubmluZyApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUoIG5vdyApO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoICF0cmFuc2l0aW9uLnBlbmRpbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyApIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggdHJhbnNpdGlvbk1hbmFnZXIubmV4dCApO1xuXHRcdH1cblx0fVxufTtcblxuZnVuY3Rpb24gZGlmZmVycyAoIGEsIGIgKSB7XG5cdHJldHVybiAoIGEgIT09IGIgKSB8fCAoIGEgJiYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgKSB8fCAoIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICkgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMgKCBjb21wb25lbnQsIGdyb3VwLCBuZXdTdGF0ZSwgb2xkU3RhdGUgKSB7XG5cdGZvciAoIHZhciBrZXkgaW4gZ3JvdXAgKSB7XG5cdFx0aWYgKCAhKCBrZXkgaW4gbmV3U3RhdGUgKSApIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVbIGtleSBdO1xuXHRcdHZhciBvbGRWYWx1ZSA9IG9sZFN0YXRlWyBrZXkgXTtcblxuXHRcdGlmICggZGlmZmVycyggbmV3VmFsdWUsIG9sZFZhbHVlICkgKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gZ3JvdXBbIGtleSBdO1xuXHRcdFx0aWYgKCAhY2FsbGJhY2tzICkgY29udGludWU7XG5cblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLl9fY2FsbGluZyApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbXBvbmVudCwgbmV3VmFsdWUsIG9sZFZhbHVlICk7XG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXQgKCBrZXkgKSB7XG5cdHJldHVybiBrZXkgPyB0aGlzLl9zdGF0ZVsga2V5IF0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmlyZSAoIGV2ZW50TmFtZSwgZGF0YSApIHtcblx0dmFyIGhhbmRsZXJzID0gZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXS5zbGljZSgpO1xuXHRpZiAoICFoYW5kbGVycyApIHJldHVybjtcblxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKCB0aGlzLCBkYXRhICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSAoIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKSB7XG5cdHZhciBncm91cCA9ICggb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyICkgPyB0aGlzLl9vYnNlcnZlcnMucG9zdCA6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KCBncm91cFsga2V5IF0gfHwgKCBncm91cFsga2V5IF0gPSBbXSApICkucHVzaCggY2FsbGJhY2sgKTtcblxuXHRpZiAoICFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UgKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKCB0aGlzLCB0aGlzLl9zdGF0ZVsga2V5IF0gKTtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFsga2V5IF0uaW5kZXhPZiggY2FsbGJhY2sgKTtcblx0XHRcdGlmICggfmluZGV4ICkgZ3JvdXBbIGtleSBdLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgYyA9ICgga2V5ID0gJycgKyBrZXkgKS5zZWFyY2goIC9bXlxcd10vICk7XG5cdGlmICggYyA+IC0xICkge1xuXHRcdHZhciBtZXNzYWdlID0gXCJUaGUgZmlyc3QgYXJndW1lbnQgdG8gY29tcG9uZW50Lm9ic2VydmUoLi4uKSBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgdG9wLWxldmVsIHByb3BlcnR5XCI7XG5cdFx0aWYgKCBjID4gMCApIG1lc3NhZ2UgKz0gXCIsIGkuZS4gJ1wiICsga2V5LnNsaWNlKCAwLCBjICkgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBvYnNlcnZlLmNhbGwoIHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKTtcbn1cblxuZnVuY3Rpb24gb24gKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkgcmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSB8fCAoIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSA9IFtdICk7XG5cdGhhbmRsZXJzLnB1c2goIGhhbmRsZXIgKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZiggaGFuZGxlciApO1xuXHRcdFx0aWYgKCB+aW5kZXggKSBoYW5kbGVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkRldiAoIGV2ZW50TmFtZSwgaGFuZGxlciApIHtcblx0aWYgKCBldmVudE5hbWUgPT09ICd0ZWFyZG93bicgKSB7XG5cdFx0Y29uc29sZS53YXJuKCBcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiICk7XG5cdFx0cmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwoIHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlciApO1xufVxuXG5mdW5jdGlvbiBzZXQgKCBuZXdTdGF0ZSApIHtcblx0dGhpcy5fc2V0KCBhc3NpZ24oIHt9LCBuZXdTdGF0ZSApICk7XG5cdHRoaXMuX3Jvb3QuX2ZsdXNoKCk7XG59XG5cbmZ1bmN0aW9uIF9mbHVzaCAoKSB7XG5cdGlmICggIXRoaXMuX3JlbmRlckhvb2tzICkgcmV0dXJuO1xuXG5cdHdoaWxlICggdGhpcy5fcmVuZGVySG9va3MubGVuZ3RoICkge1xuXHRcdHRoaXMuX3JlbmRlckhvb2tzLnBvcCgpKCk7XG5cdH1cbn1cblxudmFyIHByb3RvID0ge1xuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0X2ZsdXNoOiBfZmx1c2hcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmVEZXYsXG5cdG9uOiBvbkRldixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG5leHBvcnQgeyBkaWZmZXJzLCBkaXNwYXRjaE9ic2VydmVycywgZ2V0LCBmaXJlLCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHNldCwgX2ZsdXNoLCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRlc3Ryb3lFYWNoLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgbGluZWFyLCBnZW5lcmF0ZUtleWZyYW1lcywgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjwhLS1TZWxlY3QgRm9sZGVyLS0+XG57e3NlbGVjdFRleHR9fVxuPCEtLUVsZW1lbnRzIHRvIHNlbGVjdCBmb2xkZXItLT5cbjxkaXYgY2xhc3M9XCJmb2xkZXJTZWxlY3RcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInNlbGVjdEZvbGRlckJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi0tc21hbGwgc2VsZWN0Rm9sZGVyQnV0dG9uXCI+U2VsZWN0IEZvbGRlcjwvYnV0dG9uPlxuICAgIG9yXG4gICAgPGxhYmVsIGZvcj1cIm5ld0ZvbGRlclwiIGNsYXNzPVwidGV4dGZpZWxkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9sZGVyVGV4dGJveFwiIG5hbWU9XCJuZXdGb2xkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0ZmllbGRfX2xhYmVsXCIgb246bW91c2V1cD0naGFuZGxlTW91c2UoZXZlbnQpJyBvbjprZXl1cD0naGFuZGxlS2V5KGV2ZW50KSc+UGFzdGUgZm9sZGVyIFVSTCAoQ3RybC1WKTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJnZXRGb2xkZXJFcnJvcnNcIj48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiZm9sZGVyTG9va3VwXCI+XG4gICAgRmluZGluZyBmb2xkZXIuLi48c3BhbiBjbGFzcz1cInJvdGF0ZS1jb250ZW50c1wiPjxpIGNsYXNzPVwic3Bpbm5lclwiPjwvaT48L3NwYW4+XG48L2Rpdj5cblxuXG48IS0tRGlzcGxheSB3aGVuIGZvbGRlciBpcyBzZWxlY3RlZC0tPlxuPGRpdiBjbGFzcz1cInNlbGVjdGVkRm9sZGVySW5mb1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiZm9sZGVyTmFtZVwiPjwvc3Bhbj4gJm5ic3A7Jm5ic3A7XG4gICAgPGJ1dHRvbiB0eXBlPVwicmVzZXRcIiBjbGFzcz1cImJ0biAgYnRuLS1zbWFsbCBzZWxlY3RPdGhlckZvbGRlclwiPlNlbGVjdCBvdGhlciBmb2xkZXI8L2J1dHRvbj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuLyoqXG4gKiBQcm92aWRlcyBmdW5jdGlvbmFsaXR5IHVzZWQgZm9yIHRoZSBcIlNlbGVjdCBGb2xkZXJcIlxuICogdGV4dGJveGVzLCB3aGljaCBhdXRvbWF0aWNhbGx5IGZpbmQgZm9sZGVyIG1ldGFkYXRhIHdoZW4gYSBVUkwgXG4gKiBpcyBwYXN0ZWQgaW50byB0aGVtLiAgVGhlIHRleHRib3hlcyBjYW4gaGFuZGxlIHBhc3RpbmcgdmlhICdDdHJsK1YnLFxuICogb3IgcmlnaHQtY2xpY2tpbmcgYW5kIHNlbGVjdGluZyBcIlBhc3RlXCIgZnJvbSB0aGUgY29udGV4dCBtZW51LiBcbiAqL1xuXG4vLyBSZXF1aXJlc1xuY29uc3QgcGlja2VyID0gcmVxdWlyZSgnLi4vdXRpbC9waWNrZXInKTtcbmNvbnN0IHBhcnNlSWQgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlSWQnKTtcblxuXG4vKipcbiAqIElmIGZvbGRlciBVUkwgaXMgYWRkZWQsIGdldCBmb2xkZXIgbWV0YWRhdGEgYW5kIGRpc3BsYXkgcmVsZXZhbnQgaW5mb3JtYXRpb24uXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBlIGV2ZW50IG9iamVjdFxuICovXG5jb25zdCBnZXRGaWxlRGF0YSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIC8vIERPTS5vbkZvbGRlckxvb2t1cCgpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICB2YXIgaWQgPSBwYXJzZUlkKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICBnb29nbGUuc2NyaXB0LnJ1blxuICAgICAgICAud2l0aFN1Y2Nlc3NIYW5kbGVyKGZ1bmN0aW9uKG1ldGFkYXRhKSB7XG4gICAgICAgIC8vIHNhdmUgbWV0YWRhdGEgdG8gcGlja2VyLmZvbGRlclxuICAgICAgICBwaWNrZXIuc2V0U2VsZWN0ZWRGb2xkZXIoe1xuICAgICAgICAgICAgc3JjSWQ6IG1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3JjUGFyZW50SWQ6IG1ldGFkYXRhLnBhcmVudHNbMF0uaWQsXG4gICAgICAgICAgICBzcmNOYW1lOiBtZXRhZGF0YS50aXRsZSxcbiAgICAgICAgICAgIGRlc3ROYW1lOiAnQ29weSBvZiAnICsgbWV0YWRhdGEudGl0bGVcbiAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC53aXRoRmFpbHVyZUhhbmRsZXIoZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gICAgICAgICQoJy5mb2xkZXJMb29rdXAnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5zaG93KCk7XG4gICAgICAgICQoJy5nZXRGb2xkZXJFcnJvcnMnKVxuICAgICAgICAgICAgLnRleHQoXG4gICAgICAgICAgICAnRXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgIG1zZyArXG4gICAgICAgICAgICAgICAgJzxicj5Zb3UgbWF5IG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gY29weSB0aGlzIGZvbGRlci4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc2hvdygpO1xuICAgICAgICB9KVxuICAgICAgICAuZ2V0TWV0YWRhdGEoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgaGFuZGxlIGZvciB0aGUgaW50ZXJ2YWwgc2V0IGluIGhhbmRsZU1vdXNlIGFuZCBjbGVhcmVkIGluIGdldEZpbGVEYXRhXG4gICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnRlcnZhbDoge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgcmlnaHQtY2xpY2ssIHNldFRpbWVvdXRcbiAgICAgICAgICogSWYgbGVmdC1jbGljaywgdHJpZ2dlciBpbW1lZGlhdGVseVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlTW91c2UoZSkge1xuICAgICAgICAgICAgLy8gaWYgY29udGV4dCBtZW51IGlzIGFjdGl2YXRlZCwgZ2l2ZSB1c2VyIHRpbWUgdG8gcGFzdGUgZGF0YSB2aWEgY29udGV4dCBtZW51XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RmlsZURhdGEoZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXQoe2ludGVydmFsOiBzZXRJbnRlcnZhbChnLCA1MDApfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0RmlsZURhdGEoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUtleShlKSB7XG4gICAgICAgICAgICBnZXRGaWxlRGF0YShlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwiPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIj57e2J1dHRvblRleHR9fTwvYnV0dG9uPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4vY29tcG9uZW50cy9TdGFydCc7XG5pbXBvcnQgUmVzdW1lIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bWUnO1xuaW1wb3J0IFBhdXNlIGZyb20gJy4vY29tcG9uZW50cy9QYXVzZSc7XG5pbXBvcnQgRkFRIGZyb20gJy4vY29tcG9uZW50cy9GQVEnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyksXG4gIGRhdGE6IHtcbiAgICB2aWV3czogW1xuICAgICAge1xuICAgICAgICBpZDogJ2Fib3V0JyxcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc3RhcnQnLFxuICAgICAgICB0aXRsZTogJ1N0YXJ0JyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFydFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdyZXN1bWUnLFxuICAgICAgICB0aXRsZTogJ1Jlc3VtZScsXG4gICAgICAgIGNvbXBvbmVudDogUmVzdW1lXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3BhdXNlJyxcbiAgICAgICAgdGl0bGU6ICdQYXVzZScsXG4gICAgICAgIGNvbXBvbmVudDogUGF1c2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnZmFxJyxcbiAgICAgICAgdGl0bGU6ICdGQVEnLFxuICAgICAgICBjb21wb25lbnQ6IEZBUVxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gbXVzdCBtYXRjaCB0aGUgaWQgb2Ygb25lIG9mIHRoZSB2aWV3c1xuICAgIGFjdGl2ZTogJ3N0YXJ0J1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQWJvdXQsXG4gICAgU3RhcnQsXG4gICAgUmVzdW1lLFxuICAgIFBhdXNlLFxuICAgIEZBUVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCI8ZGl2IGNsYXNzPVwiY2hhbmdlLWFjY291bnRfX2JveFwiPlxuICAgIDxzcGFuIGNsYXNzPVwidXNlckVtYWlsXCI+XG4gICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIHt7I2lmIHByb2Nlc3Npbmd9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyb3RhdGUtY29udGVudHNcIj48aSBjbGFzcz1cInNwaW5uZXJcIj48L2k+PC9zcGFuPlxuICAgICAgICB7ey9pZn19XG4gICAgPC9zcGFuPlxuICAgIDxiciAvPlxuICAgIHt7I2lmIGVudiA9PT0gJ3Byb2R1Y3Rpb24nfX1cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vQWNjb3VudENob29zZXI/Y29udGludWU9aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4YkdOR2Fqcnh2LUhiWDJzVlkyT1R1N3lqOVZ2eGxPTU9lUWJsWkZ1cTdyWW03dXlvL2V4ZWNcIj5cbiAgICAgICAgICAgIENsaWNrIGhlcmU8L2E+IHRvIGxvZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXG4gICAge3tlbHNlfX1cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vQWNjb3VudENob29zZXI/Y29udGludWU9aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6S0pRTzVDQmY3V0RtcllvOEZHRGIyMFlXZm9JeVVaWmhzYkY4NDRTSS9kZXZcIj5cbiAgICAgICAgICAgIENsaWNrIGhlcmU8L2E+IHRvIGxvZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXG4gICAge3svaWZ9fVxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViBpcyBwYXNzZWQgaW4gdmlhIGEgd2VicGFjayBwbHVnaW5cbiAgICAgICAgICAgICAgICBlbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dnZWQgaW4gYXMgJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gZ2V0IHVzZXIgZW1haWwgYW5kIHB1dCBpdCBpbiB0aGUgYWNjb3VudCBib3hcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnb29nbGUuc2NyaXB0LnJ1blxuICAgICAgICAgICAgICAgIC53aXRoU3VjY2Vzc0hhbmRsZXIoZnVuY3Rpb24oZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYExvZ2dlZCBpbiBhcyAke2VtYWlsfS5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAud2l0aEZhaWx1cmVIYW5kbGVyKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyBhY3RpdmUgYWNjb3VudC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZ2V0VXNlckVtYWlsKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciByZXRyaWV2aW5nIGFjdGl2ZSBhY2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FjY291bnRTd2l0Y2hlci5odG1sIiwiPE5hdiB2aWV3cz17e3ZpZXdzfX0gYmluZDphY3RpdmUgb246Y2xpY2s9J3NldEFjdGl2ZSAoZXZlbnQudmlldy5pZCknLz5cbjxWaWV3Q2hhbmdlciB2aWV3cz17e3ZpZXdzfX0gYmluZDphY3RpdmUgLz5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcbiAgICBpbXBvcnQgVmlld0NoYW5nZXIgZnJvbSAnLi9WaWV3Q2hhbmdlcic7XG4gICAgaW1wb3J0IEFjY291bnRTd2l0Y2hlciBmcm9tICcuL0FjY291bnRTd2l0Y2hlcic7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBOYXYsXG4gICAgICAgICAgICBWaWV3Q2hhbmdlclxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uKHZpZXdJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHthY3RpdmU6IHZpZXdJZH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gYWRkIEFjY291bnQgU3dpdGNoZXIgdG8gaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBhY2N0U3dpdGNoZXIgPSBuZXcgQWNjb3VudFN3aXRjaGVyKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2UtYWNjb3VudCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5odG1sIiwiPG5hdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAge3sjZWFjaCB2aWV3cyBhcyB2aWV3fX1cbiAgICAgICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9J2ZpcmUoXCJjbGlja1wiLCB7dmlld30pJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3t7dmlldy5pZH19J1xuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiTGluayBidG4tLW5hdiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7e3ZpZXcuaWR9fS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+e3t2aWV3LnRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAge3svZWFjaH19XG4gICAgPC9zZWN0aW9uPlxuPC9uYXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCI8cD57e21lc3NhZ2V9fTwvcD5cbjxwPlxue3sjaWYgc2hvd0J1dHRvbn19XG4gICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLS1zbWFsbFwiXG4gICAgICAgIG9uOmNsaWNrPSdoYW5kbGVDbGljayhldmVudCknPlxuICAgICAgICBZZXMsIEkgd2FudCB0byBzdG9wIGFsbCBteSBjdXJyZW50IGluc3RhbmNlcyBvZiBDb3B5IEZvbGRlcjwvYnV0dG9uPlxue3svaWZ9fVxuPC9wPlxuXG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN0b3AgdGhlIGluc3RhbmNlcyBvZiBjb3B5IGZvbGRlciB0aGF0IHlvdSBoYXZlIHJ1bm5pbmc/JyxcbiAgICAgICAgICAgICAgICBzaG93QnV0dG9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgc3VjY2VzcyBhbmQgZmFpbHVyZSBoYW5kbGVyc1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZS5zY3JpcHQucnVuLnNldFN0b3BGbGFnKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIHN0b3BwZWQgYWxsIGZvbGRlciBjb3BpZXMuIFRvIHJlc3RhcnQgdGhlbSwgcGxlYXNlIHVzZSB0aGUgXCJSZXN1bWVcIiBmZWF0dXJlLicsXG4gICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b246IGZhbHNlXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIjxkaXYgaWQ9XCJyZXN1bWUtdmFsaWRhdGlvbi1lcnJvcnNcIj48L2Rpdj5cblxuPGRpdiBpZD1cInJlc3VtZS1mb3JtLWRpdlwiIGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICA8Zm9ybSBpZD1cInJlc3VtZUZvcm1cIiBuYW1lPVwicmVzdW1lRm9ybVwiICBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIG9uOnN1Ym1pdD0naGFuZGxlU3VibWl0KGV2ZW50KSc+XG4gICAgICAgIFxuICAgICAgICA8U2VsZWN0Rm9sZGVyIHNlbGVjdFRleHQ9e3tzZWxlY3RUZXh0fX0gLz4gXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDwhLS1TdWJtaXQtLT5cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBidXR0b25UZXh0PXt7YnV0dG9uVGV4dH19IG9uOmNsaWNrPSdoYW5kbGVDbGljayhldmVudCknIC8+XG5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2VsZWN0Rm9sZGVyIGZyb20gJy4vU2VsZWN0Rm9sZGVyJztcbiAgICBpbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4vU3VibWl0QnV0dG9uJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdSZXN1bWUgY29weWluZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1NlbGVjdCB0aGUgZm9sZGVyIGNvcHkgdGhhdCBpcyBpbiBwcm9ncmVzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgU2VsZWN0Rm9sZGVyLFxuICAgICAgICAgICAgU3VibWl0QnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIjxkaXYgaWQ9XCJzdGFydC12YWxpZGF0aW9uLWVycm9yc1wiPjwvZGl2PlxuXG48IS0tRm9ybS0tPlxuPGRpdiBpZD1cImZvcm1EaXZcIiBjbGFzcz1cImZvcm0tZGl2XCI+XG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJGb3JtXCIgbmFtZT1cImZvbGRlckZvcm1cIiBvbjpzdWJtaXQ9J2hhbmRsZVN1Ym1pdChldmVudCknPlxuXG4gICAgICAgIDxTZWxlY3RGb2xkZXIgc2VsZWN0VGV4dD17e3NlbGVjdFRleHR9fSAvPlxuICAgICAgICBcbiAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8IS0tTmV3IGZvbGRlciBuYW1lLS0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHRmaWVsZFwiIGZvcj1cIm5ld0ZvbGRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXdGb2xkZXJcIiBuYW1lPVwibmV3Rm9sZGVyXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGZpZWxkX19sYWJlbFwiPk5ldyBmb2xkZXIgbmFtZTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cblxuXG5cbiAgICAgICAgPCEtLUNvcHkgcGVybWlzc2lvbnM/LS0+XG4gICAgICAgIENvcHkgc2hhcmluZyBwZXJtaXNzaW9uc1xuICAgICAgICA8IS0tUXVlc3Rpb24gbWFyayBidXR0b24tLT5cbiAgICAgICAgPHNwYW4gdGFiaW5kZXg9XCIxMFwiIGNsYXNzPVwidG9vbHRpcC10b2dnbGVcIiBkYXRhLXRvb2x0aXA9XCJTZWxlY3QgdGhpcyBib3ggaWYgeW91IHdhbnQgdGhlIGRvY3VtZW50cyBpbiB0aGUgZm9sZGVyIGNvcHkgdG8gYmUgZWRpdGFibGUvdmlld2FibGUgYnkgdGhlIHNhbWUgcGVvcGxlIGFzIHRoZSBvcmlnaW5hbHMuIE93bmVycyBvZiBvcmlnaW5hbHMgd2lsbCBiZWNvbWUgZWRpdG9ycyBvZiB0aGUgY29waWVzLiBDb3B5aW5nIHRha2VzIG11Y2ggbG9uZ2VyIGlmICdZZXMnIGlzIHNlbGVjdGVkLlwiPlxuICAgICAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICAgIDwvc3Bhbj4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBpZD1cInBlcm1pc3Npb25zLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGVybWlzc2lvbnNcIiB2YWx1ZT1cIm5vXCIgY2hlY2tlZC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5Obzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGVybWlzc2lvbnNcIiB2YWx1ZT1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5ZZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPCEtLUNvcHkgdG8tLT5cbiAgICAgICAgQ29weSBmb2xkZXIgdG9cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBpZD1cImRlc3RpbmF0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29weUxvY2F0aW9uT3B0aW9uc1wiIHZhbHVlPVwic2FtZVwiIGNoZWNrZWQvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW9fX2xhYmVsXCI+U2FtZSBhcyBzb3VyY2UgZm9sZGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb3B5TG9jYXRpb25PcHRpb25zXCIgdmFsdWU9XCJyb290XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvX19sYWJlbFwiPlJvb3QgZGlyZWN0b3J5IChpLmUuIGF0IHRoZSB0b3Agb2YgXCJNeSBEcml2ZVwiKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPCEtLVN1Ym1pdC0tPlxuICAgICAgICA8U3VibWl0QnV0dG9uIGJ1dHRvblRleHQ9e3tidXR0b25UZXh0fX0gb246Y2xpY2s9J2hhbmRsZUNsaWNrKGV2ZW50KScgLz5cblxuICAgIDwvZm9ybT5cblxuPC9kaXY+ICAgXG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vaWNvbnMvUXVlc3Rpb24nO1xuICAgIGltcG9ydCBTZWxlY3RGb2xkZXIgZnJvbSAnLi9TZWxlY3RGb2xkZXInO1xuICAgIGltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi9TdWJtaXRCdXR0b24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ0NvcHkgRm9sZGVyJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnRm9sZGVyIHRvIGNvcHknXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFF1ZXN0aW9uLFxuICAgICAgICAgICAgU2VsZWN0Rm9sZGVyLFxuICAgICAgICAgICAgU3VibWl0QnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N0YXJ0Lmh0bWwiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICA8ZGl2IGlkPSd7e3ZpZXcuaWR9fScgY2xhc3M9J3RhYiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fSc+PC9kaXY+XG4gICAge3svZWFjaH19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gcmVuZGVyIGVhY2ggdmlldyBjb21wb25lbnQuXG4gICAgICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gdGhpcy5fc3RhdGUgc2VlbXMgdG8gYmUgdGhlIG9ubHlcbiAgICAgICAgICAgIC8vIHdheSB0byBhY2Nlc3MgdGhlIHByb3BzIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUudmlld3MuZm9yRWFjaChmdW5jdGlvbih2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmV3IHZpZXcuY29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9WaWV3Q2hhbmdlci5odG1sIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCBjb250cm9sIHRoZVxuICogc2hvd2luZy9oaWRpbmcgb2YgRE9NIGVsZW1lbnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICAqIFVwZGF0ZXMgXCJTZWxlY3QgRm9sZGVyXCIgZmllbGRzIHdpdGggc2VsZWN0ZWQgZm9sZGVyIGluZm9cbiAgICAqL1xuICBmb2xkZXJJc1NlbGVjdGVkOiBmdW5jdGlvbihzZWxlY3RlZEZvbGRlcikge1xuICAgIC8vIHVwZGF0ZSBkaXNwbGF5XG4gICAgJCgnLmdldEZvbGRlckVycm9ycycpLnRleHQoJycpO1xuICAgICQoJyNuZXdGb2xkZXInKS52YWwoc2VsZWN0ZWRGb2xkZXIuZGVzdE5hbWUpO1xuICAgICQoJy5mb2xkZXJOYW1lJykudGV4dChzZWxlY3RlZEZvbGRlci5zcmNOYW1lKTtcblxuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gICAgJCgnLmZvbGRlckxvb2t1cCcpLmhpZGUoKTtcbiAgICAkKCcuc2VsZWN0ZWRGb2xkZXJJbmZvJykuc2hvdygpO1xuICB9LFxuXG4gIC8qKlxuICAgICogRnVuY3Rpb24gdG8gYWxlcnQgdXNlciB0aGF0IGZvbGRlciBpcyBiZWluZyBpZGVudGlmaWVkXG4gICAgKiBIaWRlcyBmb2xkZXJcbiAgICAqL1xuICBvbkZvbGRlckxvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgJCgnLmZvbGRlckxvb2t1cCcpLnNob3coKTtcbiAgICAkKCcuZm9sZGVyU2VsZWN0JykuaGlkZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gZWl0aGVyIGZvcm0gdmFsaWRhdGVzLlxuICAgICogVXBkYXRlcyBVSSB0byBpbmRpY2F0ZSB0aGF0IHRoZSBhcHAgaXMgaW5pdGlhbGl6aW5nLlxuICAgICovXG4gIG9uVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgICQoJyNlcnJvcnMnKS5odG1sKCcnKTtcbiAgICAkKCcjc3RhcnQtdmFsaWRhdGlvbi1lcnJvcnMnKS5odG1sKCcnKTtcbiAgICAkKCcjcmVzdW1lLXZhbGlkYXRpb24tZXJyb3JzJykuaHRtbCgnJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBSZXNldHMgZm9ybSB0byBkZWZhdWx0IHN0YXRlXG4gICAgKi9cbiAgcmVzZXRGb3JtOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZm9sZGVyU2VsZWN0Jykuc2hvdygpO1xuICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5oaWRlKCk7XG4gICAgJCgnLmdldEZvbGRlckVycm9ycycpLmhpZGUoKTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBTaG93IGFuIG92ZXJsYXkgd2l0aCBhIHNwaW5uZXIgYW5kIGEgbWVzc2FnZVxuICAgICAqL1xuICBzaG93UHJvY2Vzc2luZ092ZXJsYXk6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgdmFyIG92ZXJsYXlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX21lc3NhZ2UnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG92ZXJsYXlNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogSGlkZSB0aGUgb3ZlcmxheVxuICAgICAqL1xuICBjbGVhclByb2Nlc3NpbmdPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgdmFyIG92ZXJsYXlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX21lc3NhZ2UnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgb3ZlcmxheU1lc3NhZ2UuaW5uZXJUZXh0ID0gJyc7XG4gIH0sXG5cbiAgaGlkZVN0ZXAxOiBmdW5jdGlvbihyZXN1bWluZykge1xuICAgIC8vIEhpZGUgc3RlcCAxIGZvciBTdGFydCBvciBSZXN1bWluZ1xuICAgIHZhciBpZCA9IHJlc3VtaW5nID8gJ3Jlc3VtZS1zdGVwMScgOiAnc3RhcnQtc3RlcDEnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIHNob3dzIGVpdGhlciBgcmVzdW1lLXN1Y2Nlc3NgLCBgcmVzdW1lLWVycm9yYCwgYHN0YXJ0LXN1Y2Nlc3NgLCBvciBgc3RhcnQtZXJyb3JgXG4gICAgICogQ2FuIGFsc28gc2hvdyBib3RoIHN0YXJ0IGFuZCByZXN1bWUgYXQgc2FtZSB0aW1lIGlmIHJlc3VtaW5nIGlzIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdW1pbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3VjY2Vzc2Z1bG5lc3Mgc2hvdWxkIGJlIGVpdGhlciAnZXJyb3InIG9yICdzdWNjZXNzJ1xuICAgICAqL1xuICBzaG93U3RlcDI6IGZ1bmN0aW9uKHJlc3VtaW5nLCBzdWNjZXNzZnVsbmVzcykge1xuICAgIGlmIChyZXN1bWluZyA9PT0gbnVsbCB8fCByZXN1bWluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtJyArIHN1Y2Nlc3NmdWxuZXNzKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgJ2Jsb2NrJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGlkID0gcmVzdW1pbmcgPyAncmVzdW1lJyA6ICdzdGFydCc7XG4gICAgaWQgKz0gJy0nICsgc3VjY2Vzc2Z1bG5lc3M7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9LFxuXG4gIHNob3dUb29NYW55VHJpZ2dlcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy50b28tbWFueS10cmlnZ2VycycpLnNob3coKTtcbiAgfSxcblxuICBoaWRlVG9vTWFueVRyaWdnZXJzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcudG9vLW1hbnktdHJpZ2dlcnMnKS5oaWRlKCk7XG4gIH0sXG5cbiAgc2hvd0Vycm9yczogZnVuY3Rpb24oKSB7XG4gICAgJCgnLmVycm9ycycpLnNob3coKTtcbiAgfSxcblxuICBoaWRlRXJyb3JzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZXJyb3JzJykuaGlkZSgpO1xuICB9LFxuXG4gIHNob3dQYXVzZVN0ZXAyOiBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2Utc3RlcDEnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1zdGVwMicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRE9NLmpzIiwiLyoqXG4gKiBQYXJzZXMgZm9sZGVyIFVSTCBzdHJpbmcgYW5kIHJldHVybnMgZm9sZGVyIElEIHN0cmluZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIHRoZSBmb2xkZXIgVVJMIGZvciB0aGUgc2VsZWN0ZWQgZm9sZGVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGlkIHRoZSBmb2xkZXIgSUQgZm9yIHRoZSBzZWxlY3RlZCBmb2xkZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIGlkLCBhbXA7XG5cbiAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgc3RyaW5nIGF0IHdoaWNoIHRoZSBmb2xkZXJJZCBzdGFydHNcbiAgdmFyIGlkU3RhcnQgPSB1cmwuc2VhcmNoKCdpZD0nKTtcbiAgdmFyIGZvbGRlcnNTdGFydCA9IHVybC5zZWFyY2goJ2ZvbGRlcnMnKTtcblxuICBpZiAoaWRTdGFydCA+IDApIHtcbiAgICBpZCA9IHVybC5zbGljZShpZFN0YXJ0ICsgMyk7XG4gIH0gZWxzZSBpZiAoZm9sZGVyc1N0YXJ0ID4gMCkge1xuICAgIGlkID0gdXJsLnNsaWNlKGZvbGRlcnNTdGFydCArIDgpO1xuICB9IGVsc2Uge1xuICAgIGlkID0gdXJsO1xuICB9XG5cbiAgLy8gRmluZCB0aGUgYW1wZXJzYW5kIGluIHRoZSByZW1haW5pbmcgc3RyaW5nLCB3aGljaCBpcyB0aGUgZGVsaW1pdGVyIGJldHdlZW4gdGhlIGZvbGRlcklkIGFuZCB0aGUgc2hhcmluZyBwcml2aWxlZ2VzXG4gIGFtcCA9IGlkLmluZGV4T2YoJyYnKTtcblxuICAvLyBTbGljZSB0aGUgc3RyaW5nIHVwIHRvIHRoZSBhbXBlcnNhbmRcbiAgaWYgKGFtcCA+IDApIHtcbiAgICBpZCA9IGlkLnNsaWNlKDAsIGFtcCk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGFyc2VJZC5qcyIsIi8qXG5NYW55LCBtYW55IHRoYW5rcyB0byBbSmVhbi1QaWVycmUgVmVyaHVsc3RdKGh0dHBzOi8vcGx1cy5nb29nbGUuY29tLytKZWFuUGllcnJlVmVyaHVsc3QvcG9zdHMpIFxuZm9yIHByb3ZpZGluZyB0aGUgd29ya2luZyBiYWNrYm9uZSBvZiB0aGlzIHNjcmlwdFxuKi9cblxudmFyIERPTSA9IHJlcXVpcmUoJy4vRE9NJyk7XG5cbi8vIHZhbmlsbGFKUyBpbXBsZW1lbnRhdGlvbiBvZiAkLmdldFNjcmlwdCgpLCB0aGFua3MgdG8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjgzOTY5OC9qcXVlcnktZ2V0c2NyaXB0LWFsdGVybmF0aXZlLWluLW5hdGl2ZS1qYXZhc2NyaXB0XG5mdW5jdGlvbiBnZXRTY3JpcHQoc291cmNlLCBjYWxsYmFjaykge1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHZhciBwcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgc2NyaXB0LmFzeW5jID0gMTtcbiAgcHJpb3IucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBwcmlvcik7XG5cbiAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihfLCBpc0Fib3J0KSB7XG4gICAgaWYgKFxuICAgICAgaXNBYm9ydCB8fFxuICAgICAgIXNjcmlwdC5yZWFkeVN0YXRlIHx8XG4gICAgICAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHNjcmlwdC5yZWFkeVN0YXRlKVxuICAgICkge1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgc2NyaXB0ID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoIWlzQWJvcnQpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzY3JpcHQuc3JjID0gc291cmNlO1xufVxuXG5nZXRTY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcycsIG9uQXBpTG9hZCk7XG5cbi8vIERlY2xhcmUgdmFyaWFibGVzXG52YXIgc2VsZWN0ZWRGb2xkZXIgPSB7fTtcbnZhciBwaWNrZXJBcGlMb2FkZWQgPSBmYWxzZTtcbnZhciBwaWNrZXJCdWlsZGVyO1xuXG5leHBvcnRzLmZvbGRlciA9IHNlbGVjdGVkRm9sZGVyO1xuXG5mdW5jdGlvbiBvbkFwaUxvYWQoKSB7XG4gIGdhcGkubG9hZCgncGlja2VyJywge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHBpY2tlckFwaUxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgZ29vZ2xlLnNjcmlwdC5ydW5cbiAgICAud2l0aFN1Y2Nlc3NIYW5kbGVyKGNyZWF0ZVBpY2tlcilcbiAgICAud2l0aEZhaWx1cmVIYW5kbGVyKHNob3dFcnJvcilcbiAgICAuZ2V0T0F1dGhUb2tlbigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrZXIodG9rZW4pIHtcbiAgaWYgKHBpY2tlckFwaUxvYWRlZCAmJiB0b2tlbikge1xuICAgIHZhciBmb2xkZXJzVmlldyA9IG5ldyBnb29nbGUucGlja2VyLkRvY3NWaWV3KClcbiAgICAgIC5zZXRJbmNsdWRlRm9sZGVycyh0cnVlKVxuICAgICAgLnNldE1pbWVUeXBlcygnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmZvbGRlcicpXG4gICAgICAuc2V0U2VsZWN0Rm9sZGVyRW5hYmxlZCh0cnVlKTtcblxuICAgIHBpY2tlckJ1aWxkZXIgPSBuZXcgZ29vZ2xlLnBpY2tlci5QaWNrZXJCdWlsZGVyKClcbiAgICAgIC5hZGRWaWV3KGZvbGRlcnNWaWV3KVxuICAgICAgLmhpZGVUaXRsZUJhcigpXG4gICAgICAuc2V0T0F1dGhUb2tlbih0b2tlbilcbiAgICAgIC5zZXRNYXhJdGVtcygxKVxuICAgICAgLnNldENhbGxiYWNrKHBpY2tlckNhbGxiYWNrKVxuICAgICAgLnNldFRpdGxlKCdTZWxlY3QgYSBmb2xkZXIgdG8gY29weScpXG4gICAgICAuc2V0T3JpZ2luKCdodHRwczovL3NjcmlwdC5nb29nbGUuY29tJylcbiAgICAgIC5idWlsZCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRvZG86IGhhbmRsZSBlcnJvcnNcbiAgfVxufVxuXG4vLyBBbGxvd3MgbWV0aG9kIGJpbmRpbmcgZnJvbSBleHRlcm5hbCBzY3JpcHRzLCBlLmcuIGluaXQuanNcbmV4cG9ydHMuc2hvd1BpY2tlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcGlja2VyQnVpbGRlci5zZXRWaXNpYmxlKHRydWUpO1xufTtcblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIGNob3NlbiBkb2N1bWVudCdzIG1ldGFkYXRhIGZyb20gdGhlXG4gKiByZXNwb25zZSBvYmplY3QuIEZvciBkZXRhaWxzIG9uIHRoZSByZXNwb25zZSBvYmplY3QsIHNlZVxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcGlja2VyL2RvY3MvcmVzdWx0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIHJlc3BvbnNlIG9iamVjdC5cbiAqL1xuXG5mdW5jdGlvbiBwaWNrZXJDYWxsYmFjayhkYXRhKSB7XG4gIHZhciBhY3Rpb24gPSBkYXRhW2dvb2dsZS5waWNrZXIuUmVzcG9uc2UuQUNUSU9OXTtcblxuICBpZiAoYWN0aW9uID09IGdvb2dsZS5waWNrZXIuQWN0aW9uLlBJQ0tFRCkge1xuICAgIHZhciBkb2MgPSBkYXRhW2dvb2dsZS5waWNrZXIuUmVzcG9uc2UuRE9DVU1FTlRTXVswXTtcbiAgICBzZXRTZWxlY3RlZEZvbGRlcih7XG4gICAgICBzcmNJZDogZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuSURdLFxuICAgICAgc3JjUGFyZW50SWQ6IGRvY1tnb29nbGUucGlja2VyLkRvY3VtZW50LlBBUkVOVF9JRF0sXG4gICAgICBzcmNOYW1lOiBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5OQU1FXSxcbiAgICAgIGRlc3ROYW1lOiAnQ29weSBvZiAnICsgZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuTkFNRV1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChhY3Rpb24gPT0gZ29vZ2xlLnBpY2tlci5BY3Rpb24uQ0FOQ0VMKSB7XG4gICAgZ29vZ2xlLnNjcmlwdC5ob3N0LmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBzYXZlIHBhc3NlZCB2YWx1ZXMgdG8gc2VsZWN0ZWRGb2xkZXJcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgc2VsZWN0ZWRGb2xkZXIgcHJvcGVydGllcyB0byBzYXZlXG4gKi9cbmZ1bmN0aW9uIHNldFNlbGVjdGVkRm9sZGVyKHByb3BlcnRpZXMpIHtcbiAgLy8gc2F2ZSBwcm9wZXJ0aWVzXG4gIHNlbGVjdGVkRm9sZGVyLnNyY0lkID0gcHJvcGVydGllcy5zcmNJZDtcbiAgc2VsZWN0ZWRGb2xkZXIuc3JjUGFyZW50SWQgPSBwcm9wZXJ0aWVzLnNyY1BhcmVudElkO1xuICBzZWxlY3RlZEZvbGRlci5zcmNOYW1lID0gcHJvcGVydGllcy5zcmNOYW1lO1xuICBzZWxlY3RlZEZvbGRlci5kZXN0TmFtZSA9IHByb3BlcnRpZXMuZGVzdE5hbWU7XG5cbiAgRE9NLmZvbGRlcklzU2VsZWN0ZWQoc2VsZWN0ZWRGb2xkZXIpO1xufVxuXG5leHBvcnRzLnNldFNlbGVjdGVkRm9sZGVyID0gc2V0U2VsZWN0ZWRGb2xkZXI7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcigpIHtcbiAgJCgnI2dldEZvbGRlckVycm9ycycpLnRleHQoXG4gICAgJ0Vycm9yIGdldHRpbmcgT0F1dGggdG9rZW4gZm9yIEdvb2dsZSBQaWNrZXIuICBQbGVhc2UgbWFudWFsbHkgaW5wdXQgZm9sZGVyIFVSTCdcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BpY2tlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
