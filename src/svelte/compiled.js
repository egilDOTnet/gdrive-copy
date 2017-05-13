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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 11));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'k',
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
        'l',
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
        'j',
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
        'm',
        function() {
          return addEventListener;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'n',
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
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(
        3
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(
        2
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__(
        8
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Resume__ = __webpack_require__(
        7
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Pause__ = __webpack_require__(
        6
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FAQ__ = __webpack_require__(
        4
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
    /* 2 */
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
    /* 3 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(
        5
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(
        9
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          methods: {
            setActive: function setActive(viewId) {
              this.set({ active: viewId });
            }
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
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'k' /* differs */
                ]
              )(nav.get('active'), state.active)
            }
          );
        });

        nav._context = {
          state: state
        };

        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
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
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'k' /* differs */
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
              __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
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
                __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
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
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        App.prototype,
        template.methods,
        __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      App.prototype._set = function _set(newState) {
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
    /* 4 */
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
    /* 5 */
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
                  'l' /* destroyEach */
                ]
              )(each_block_iterations, true, each_block_value.length);
              each_block_iterations.length = each_block_value.length;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'l' /* destroyEach */
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
            'm' /* addEventListener */
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
                'n' /* removeEventListener */
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
    /* 6 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
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
            'Are you sure you want to stop the instances of copy folder that you have running?'
          ),
          p
        );
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n');
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        button.type = 'button';
        button.className = 'btn btn--small';
        button.id = 'pause-confirm-button';
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
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        var br_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');

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
            )(button, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(br, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(br_1, target, anchor);
          },

          destroy: function destroy(detach) {
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
              )(button);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(br);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(br_1);
            }
          }
        };
      }

      function Pause(options) {
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
        Pause.prototype,
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
    /* 7 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = 'resume-validation-errors';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.id = 'resume-form-div';
        div_1.className = 'form-div';
        var form = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('form');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(form, div_1);
        form.id = 'resumeForm';
        form.name = 'resumeForm';
        form.className = 'form-horizontal';
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
            '\n        Select the folder copy that is in progress\n        \n        '
          ),
          form
        );
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_2, form);
        div_2.className = 'folderSelect';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          div_2
        );
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button, div_2);
        button.type = 'button';
        button.id = 'resumeFolderSelect';
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
          )('\n            or\n            \n            '),
          div_2
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
        )(label, div_2);
        label.htmlFor = 'resumeTextbox';
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
        input.id = 'resumeTextbox';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
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
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            \n            \n        '),
          form
        );
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_3, form);
        div_3.className = 'folderLookup';
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
          div_3
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
        )(span_1, div_3);
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
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                     \n\n        '),
          form
        );
        var div_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_4, form);
        div_4.className = 'getFolderErrors';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n        \n        '),
          form
        );
        var div_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_5, form);
        div_5.className = 'selectedFolderInfo';
        var span_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_2, div_5);
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
          )('   \n            '),
          div_5
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
        )(button_1, div_5);
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
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n         \n        '),
          form
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
        )(br, form);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n        \n        '),
          form
        );
        var button_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button_2, form);
        button_2.type = 'submit';
        button_2.id = 'resumeFolderSubmit';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(button_2, 'data-loading-text', 'Resuming...');
        button_2.className = 'btn';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Resume copying'),
          button_2
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
          },

          destroy: function destroy(detach) {
            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
            }
          }
        };
      }

      function Resume(options) {
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
        Resume.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Resume.prototype._set = function _set(newState) {
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
    /* 8 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Question__ = __webpack_require__(
        10
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = 'start-validation-errors';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* createText */
          ]
        )('\n\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.id = 'formDiv';
        div_1.className = 'form-div';
        var form = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('form');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(form, div_1);
        form.id = 'folderForm';
        form.name = 'folderForm';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        Folder to copy\n        \n        '),
          form
        );
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_2, form);
        div_2.className = 'folderSelect';
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button, div_2);
        button.type = 'button';
        button.id = 'selectFolderButton';
        button.className = 'btn btn--small selectFolderButton';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Select Folder'),
          button
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            or\n            '),
          div_2
        );
        var label = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label, div_2);
        label.htmlFor = 'newFolder';
        label.className = 'textfield';
        var input = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input, label);
        input.type = 'text';
        input.id = 'folderTextbox';
        input.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label
        );
        var span = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span, label);
        span.className = 'textfield__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Paste folder URL (Ctrl-V)'),
          span
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n        '),
          form
        );
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_3, form);
        div_3.className = 'getFolderErrors';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        \n        \n        '),
          form
        );
        var div_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_4, form);
        div_4.className = 'folderLookup';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Finding folder...'),
          div_4
        );
        var span_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_1, div_4);
        span_1.className = 'rotate-contents';
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(i, span_1);
        i.className = 'spinner';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var div_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_5, form);
        div_5.className = 'selectedFolderInfo';
        var span_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_2, div_5);
        span_2.className = 'folderName';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('   \n            '),
          div_5
        );
        var button_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button_1, div_5);
        button_1.type = 'reset';
        button_1.className = 'btn  btn--small selectOtherFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Select other folder'),
          button_1
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n        \n        '),
          form
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(br, form);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var label_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_1, form);
        label_1.className = 'textfield';
        label_1.htmlFor = 'newFolder';
        var input_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_1, label_1);
        input_1.type = 'text';
        input_1.id = 'newFolder';
        input_1.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          label_1
        );
        var span_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_3, label_1);
        span_3.className = 'textfield__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('New folder name'),
          span_3
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n\n        \n        Copy sharing permissions\n        '),
          form
        );
        var span_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_4, form);
        span_4.tabIndex = '10';
        span_4.className = 'tooltip-toggle';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(
          span_4,
          'data-tooltip',
          "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected."
        );

        var question = new __WEBPACK_IMPORTED_MODULE_0__icons_Question__[
          'a' /* default */
        ]({
          target: span_4,
          _root: component._root
        });

        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )(' \n        \n        \n        '),
          form
        );
        var div_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_6, form);
        div_6.className = 'form-group';
        div_6.id = 'permissions-group';
        var label_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_2, div_6);
        label_2.className = 'radio';
        var input_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_2, label_2);
        input_2.type = 'radio';
        input_2.name = 'permissions';
        input_2.__value = 'no';
        input_2.value = input_2.__value;
        input_2.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_2
        );
        var span_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_5, label_2);
        span_5.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('No'),
          span_5
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          div_6
        );
        var label_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_3, div_6);
        label_3.className = 'radio';
        var input_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_3, label_3);
        input_3.type = 'radio';
        input_3.name = 'permissions';
        input_3.__value = 'yes';
        input_3.value = input_3.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_3
        );
        var span_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_6, label_3);
        span_6.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Yes'),
          span_6
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n\n        \n        Copy folder to\n        '),
          form
        );
        var div_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(div_7, form);
        div_7.className = 'form-group';
        div_7.id = 'destination-group';
        var label_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_4, div_7);
        label_4.className = 'radio';
        var input_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_4, label_4);
        input_4.type = 'radio';
        input_4.name = 'copyLocationOptions';
        input_4.__value = 'same';
        input_4.value = input_4.__value;
        input_4.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_4
        );
        var span_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_7, label_4);
        span_7.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Same as source folder'),
          span_7
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n            '),
          div_7
        );
        var label_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(label_5, div_7);
        label_5.className = 'radio';
        var input_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(input_5, label_5);
        input_5.type = 'radio';
        input_5.name = 'copyLocationOptions';
        input_5.__value = 'root';
        input_5.value = input_5.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n                '),
          label_5
        );
        var span_8 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(span_8, label_5);
        span_8.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Root directory (i.e. at the top of "My Drive")'),
          span_8
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var button_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(button_2, form);
        button_2.type = 'submit';
        button_2.id = 'copyFolderButton';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* setAttribute */
          ]
        )(button_2, 'data-loading-text', 'Copying...');
        button_2.className = 'btn';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'c' /* createText */
            ]
          )('Copy folder'),
          button_2
        );

        return {
          mount: function mount(target, anchor) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(text, target, anchor);
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'e' /* insertNode */
              ]
            )(div_1, target, anchor);
          },

          destroy: function destroy(detach) {
            question.destroy(false);

            if (detach) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(text);
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                  'f' /* detachNode */
                ]
              )(div_1);
            }
          }
        };
      }

      function Start(options) {
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

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
        this._flush();
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Start.prototype,
        __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Start.prototype._set = function _set(newState) {
        var oldState = this._state;
        this._state = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'g' /* assign */
          ]
        )({}, oldState, newState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'i' /* dispatchObservers */
          ]
        )(this, this._observers.pre, newState, oldState);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
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
    /* 9 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      var template = (function() {
        return {
          oncreate: function oncreate() {
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
                  'l' /* destroyEach */
                ]
              )(each_block_iterations, true, each_block_value.length);
              each_block_iterations.length = each_block_value.length;
            }
          },

          destroy: function destroy(detach) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
                'l' /* destroyEach */
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
    /* 10 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var svg = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'j' /* createSvgElement */
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
            'j' /* createSvgElement */
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
    /* 11 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGJhODU0N2I3MGI2MTc0MmY3OTIiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld0NoYW5nZXIuaHRtbCJdLCJuYW1lcyI6WyJhcHAiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhIiwidmlld3MiLCJpZCIsInRpdGxlIiwiY29tcG9uZW50IiwiQWJvdXQiLCJTdGFydCIsIlJlc3VtZSIsIlBhdXNlIiwiRkFRIiwiYWN0aXZlIiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pELHdDQUF3Qzs7QUFFeEMsaUJBQWlCLFFBQVE7QUFDekI7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEOztBQUVBLHFCQUFxQixnQkFBZ0IsR0FBRztBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVROzs7Ozs7Ozs7Ozs7Ozs7QUN6VlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sSUFBSSxnRUFBSixDQUFRO0FBQ2xCQyxVQUFRQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBRFU7QUFFbEJDLFFBQU07QUFDSkMsV0FBTyxDQUNMO0FBQ0VDLFVBQUksT0FETjtBQUVFQyxhQUFPLE9BRlQ7QUFHRUMsaUJBQVcsa0VBQUFDO0FBSGIsS0FESyxFQU1MO0FBQ0VILFVBQUksT0FETjtBQUVFQyxhQUFPLE9BRlQ7QUFHRUMsaUJBQVcsa0VBQUFFO0FBSGIsS0FOSyxFQVdMO0FBQ0VKLFVBQUksUUFETjtBQUVFQyxhQUFPLFFBRlQ7QUFHRUMsaUJBQVcsbUVBQUFHO0FBSGIsS0FYSyxFQWdCTDtBQUNFTCxVQUFJLE9BRE47QUFFRUMsYUFBTyxPQUZUO0FBR0VDLGlCQUFXLGtFQUFBSTtBQUhiLEtBaEJLLEVBcUJMO0FBQ0VOLFVBQUksS0FETjtBQUVFQyxhQUFPLEtBRlQ7QUFHRUMsaUJBQVcsZ0VBQUFLO0FBSGIsS0FyQkssQ0FESDtBQTRCSjtBQUNBQyxZQUFRO0FBN0JKLEdBRlk7QUFpQ2xCQyxjQUFZO0FBQ1JOLFdBQUEsa0VBRFE7QUFFUkMsV0FBQSxrRUFGUTtBQUdSQyxZQUFBLG1FQUhRO0FBSVJDLFdBQUEsa0VBSlE7QUFLUkMsU0FBQSxnRUFBQUE7QUFMUTtBQWpDTSxDQUFSLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0pRO0FBSUo7QUFLVztBQUNNLGNBQUUsbUJBQWUsUUFBRTtBQUNwQixTQUFJLElBQUMsRUFBTyxRQUFVO0FBSTFDO0FBTmlCO0FBTEU7Ozs7Ozs7dUNBUEQ7d0RBQWU7Ozs7Ozs7O1lBQW1CLFVBQU8sTUFBSyxLQUFJOzs7Ozs7Ozs7O3lLQUFuQzs7Ozs7Ozs7OytDQUNQO2dFQUFlOzs7Ozs7Ozs7Ozs7OztpTEFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRFI7Ozs7Ozs7O3FEQUFmOzs7Ozs7cUNBQ3VCOzs7Ozs7Ozs2REFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQ0NMOzs7Ozs7Ozs7Ozs7Ozs7Z0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUdPLEtBQUc7c0VBQ2lCLFdBQVMsS0FBRyxLQUFXLFdBQUs7b0NBQ2xELEtBQUc7Ozs7Ozs7Ozs7K0pBQ0UsS0FBTTs7Ozs7Ozs7O2tEQUhULEtBQUc7Ozs7aUZBQ2lCLFdBQVMsS0FBRyxLQUFXLFdBQUs7Ozs7bURBQ2xELEtBQUc7Ozs7Ozs7b0NBQ0UsS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FKUCxLQUFRLFNBQUUsRUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0V2QztBQUNKO0FBQ1ksZ0NBQUc7OztBQUdILFFBQU8sT0FBTSxNQUFRLFFBQUMsVUFBYSxNQUFFO0FBQ3JDLFFBQVEsS0FBVTtBQUNSLGFBQVUsU0FBZSxlQUFLLEtBQ3RDO0FBRmlCO0FBR3BCO0FBR2Y7QUFYbUI7Ozs7Ozs7OEJBTkY7Ozs7Ozs7Ozs7Ozs7OztnQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFDTSxLQUFHO21EQUF1QixXQUFTLEtBQUcsS0FBVyxXQUFLOzs7Ozs7Ozt3Q0FBdEQsS0FBRzs7Ozs4REFBdUIsV0FBUyxLQUFHLEtBQVcsV0FBSyIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiYTg1NDdiNzBiNjE3NDJmNzkyIiwiZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24gKCB0YXJnZXQgKSB7XG5cdGZvciAoIHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHR2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoIHZhciBrIGluIHNvdXJjZSApIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUgKCBub2RlLCB0YXJnZXQgKSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlICggbm9kZSwgdGFyZ2V0LCBhbmNob3IgKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUoIG5vZGUsIGFuY2hvciApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlICggbm9kZSApIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4gKCBiZWZvcmUsIGFmdGVyICkge1xuXHR3aGlsZSAoIGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyICkge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBiZWZvcmUubmV4dFNpYmxpbmcgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaCAoIGl0ZXJhdGlvbnMsIGRldGFjaCwgc3RhcnQgKSB7XG5cdGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggaXRlcmF0aW9uc1tpXSApIGl0ZXJhdGlvbnNbaV0uZGVzdHJveSggZGV0YWNoICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQgKCBkYXRhICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIGRhdGEgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUgKCBncm91cCApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggZ3JvdXBbaV0uY2hlY2tlZCApIHZhbHVlLnB1c2goIGdyb3VwW2ldLl9fdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGxpbmVhciAoIHQgKSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUtleWZyYW1lcyAoIGEsIGIsIGRlbHRhLCBkdXJhdGlvbiwgZWFzZSwgZm4sIG5vZGUsIHN0eWxlICkge1xuXHR2YXIgaWQgPSAnX19zdmVsdGUnICsgfn4oIE1hdGgucmFuZG9tKCkgKiAxZTkgKTsgLy8gVE9ETyBtYWtlIHRoaXMgbW9yZSByb2J1c3Rcblx0dmFyIGtleWZyYW1lcyA9ICdAa2V5ZnJhbWVzICcgKyBpZCArICd7XFxuJztcblxuXHRmb3IgKCB2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbiApIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UoIHAgKTtcblx0XHRrZXlmcmFtZXMgKz0gKCBwICogMTAwICkgKyAnJXsnICsgZm4oIHQgKSArICd9XFxuJztcblx0fVxuXG5cdGtleWZyYW1lcyArPSAnMTAwJSB7JyArIGZuKCBiICkgKyAnfVxcbn0nO1xuXHRzdHlsZS50ZXh0Q29udGVudCArPSBrZXlmcmFtZXM7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKTtcblxuXHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uLnNwbGl0KCAnLCcgKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uICggYW5pbSApIHtcblx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0cmV0dXJuIGFuaW0gJiYgKCBkZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdCggYW5pbSApICk7XG5cdFx0fSlcblx0XHQuY29uY2F0KCBpZCArICcgJyArIGR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJyApXG5cdFx0LmpvaW4oICcsICcgKTtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24gKCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXAgKSB7XG5cdHZhciBvYmogPSBmbiggbm9kZSwgcGFyYW1zICk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKCBvYmouY3NzICkge1xuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcblx0fVxuXG5cdGlmICggaW50cm8gJiYgb2JqLnRpY2sgKSBvYmoudGljayggMCApO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbiAoIGludHJvLCBjYWxsYmFjayApIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKCBvYmouZGVsYXkgfHwgMCApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCBvYmouZGVsYXkgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KCBwcm9ncmFtICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24gKCBwcm9ncmFtICkge1xuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKCBwcm9ncmFtLmIgLSBwcm9ncmFtLmEgKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmICggb2JqLmNzcyApIHtcblx0XHRcdFx0Z2VuZXJhdGVLZXlmcmFtZXMoIHByb2dyYW0uYSwgcHJvZ3JhbS5iLCBwcm9ncmFtLmRlbHRhLCBwcm9ncmFtLmR1cmF0aW9uLCBlYXNlLCBvYmouY3NzLCBub2RlLCBzdHlsZSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCBub3cgKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICggIXByb2dyYW0gKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKCBwIC8gcHJvZ3JhbS5kdXJhdGlvbiApO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMudCA9IHRoaXMucHJvZ3JhbS5iO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIDEgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cblx0YWRkOiBmdW5jdGlvbiAoIHRyYW5zaXRpb24gKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMucHVzaCggdHJhbnNpdGlvbiApO1xuXG5cdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0ICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KCB0cmFuc2l0aW9uLnBlbmRpbmcgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKCBub3cgKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCAhdHJhbnNpdGlvbi5wZW5kaW5nICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRyYW5zaXRpb25NYW5hZ2VyLm5leHQgKTtcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRpZmZlcnMgKCBhLCBiICkge1xuXHRyZXR1cm4gKCBhICE9PSBiICkgfHwgKCBhICYmICggdHlwZW9mIGEgPT09ICdvYmplY3QnICkgfHwgKCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyApICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzICggY29tcG9uZW50LCBncm91cCwgbmV3U3RhdGUsIG9sZFN0YXRlICkge1xuXHRmb3IgKCB2YXIga2V5IGluIGdyb3VwICkge1xuXHRcdGlmICggISgga2V5IGluIG5ld1N0YXRlICkgKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlWyBrZXkgXTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVsga2V5IF07XG5cblx0XHRpZiAoIGRpZmZlcnMoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApICkge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwWyBrZXkgXTtcblx0XHRcdGlmICggIWNhbGxiYWNrcyApIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5fX2NhbGxpbmcgKSBjb250aW51ZTtcblxuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSApO1xuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0ICgga2V5ICkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVbIGtleSBdIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZpcmUgKCBldmVudE5hbWUsIGRhdGEgKSB7XG5cdHZhciBoYW5kbGVycyA9IGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0uc2xpY2UoKTtcblx0aWYgKCAhaGFuZGxlcnMgKSByZXR1cm47XG5cblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCggdGhpcywgZGF0YSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgZ3JvdXAgPSAoIG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlciApID8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3QgOiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdCggZ3JvdXBbIGtleSBdIHx8ICggZ3JvdXBbIGtleSBdID0gW10gKSApLnB1c2goIGNhbGxiYWNrICk7XG5cblx0aWYgKCAhb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlICkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCggdGhpcywgdGhpcy5fc3RhdGVbIGtleSBdICk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBbIGtleSBdLmluZGV4T2YoIGNhbGxiYWNrICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGdyb3VwWyBrZXkgXS5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2ICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGMgPSAoIGtleSA9ICcnICsga2V5ICkuc2VhcmNoKCAvW15cXHddLyApO1xuXHRpZiAoIGMgPiAtMSApIHtcblx0XHR2YXIgbWVzc2FnZSA9IFwiVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eVwiO1xuXHRcdGlmICggYyA+IDAgKSBtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSggMCwgYyApICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKCB0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICk7XG59XG5cbmZ1bmN0aW9uIG9uICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gfHwgKCB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gPSBbXSApO1xuXHRoYW5kbGVycy5wdXNoKCBoYW5kbGVyICk7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoIGhhbmRsZXIgKTtcblx0XHRcdGlmICggfmluZGV4ICkgaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYgKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkge1xuXHRcdGNvbnNvbGUud2FybiggXCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIiApO1xuXHRcdHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKCB0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIgKTtcbn1cblxuZnVuY3Rpb24gc2V0ICggbmV3U3RhdGUgKSB7XG5cdHRoaXMuX3NldCggYXNzaWduKCB7fSwgbmV3U3RhdGUgKSApO1xuXHR0aGlzLl9yb290Ll9mbHVzaCgpO1xufVxuXG5mdW5jdGlvbiBfZmx1c2ggKCkge1xuXHRpZiAoICF0aGlzLl9yZW5kZXJIb29rcyApIHJldHVybjtcblxuXHR3aGlsZSAoIHRoaXMuX3JlbmRlckhvb2tzLmxlbmd0aCApIHtcblx0XHR0aGlzLl9yZW5kZXJIb29rcy5wb3AoKSgpO1xuXHR9XG59XG5cbnZhciBwcm90byA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxuZXhwb3J0IHsgZGlmZmVycywgZGlzcGF0Y2hPYnNlcnZlcnMsIGdldCwgZmlyZSwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBzZXQsIF9mbHVzaCwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXN0cm95RWFjaCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIGxpbmVhciwgZ2VuZXJhdGVLZXlmcmFtZXMsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi9jb21wb25lbnRzL1N0YXJ0JztcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VtZSc7XG5pbXBvcnQgUGF1c2UgZnJvbSAnLi9jb21wb25lbnRzL1BhdXNlJztcbmltcG9ydCBGQVEgZnJvbSAnLi9jb21wb25lbnRzL0ZBUSc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSxcbiAgZGF0YToge1xuICAgIHZpZXdzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnYWJvdXQnLFxuICAgICAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICAgICAgY29tcG9uZW50OiBBYm91dFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGFydCcsXG4gICAgICAgIHRpdGxlOiAnU3RhcnQnLFxuICAgICAgICBjb21wb25lbnQ6IFN0YXJ0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3Jlc3VtZScsXG4gICAgICAgIHRpdGxlOiAnUmVzdW1lJyxcbiAgICAgICAgY29tcG9uZW50OiBSZXN1bWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF1c2UnLFxuICAgICAgICB0aXRsZTogJ1BhdXNlJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXVzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdmYXEnLFxuICAgICAgICB0aXRsZTogJ0ZBUScsXG4gICAgICAgIGNvbXBvbmVudDogRkFRXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBtdXN0IG1hdGNoIHRoZSBpZCBvZiBvbmUgb2YgdGhlIHZpZXdzXG4gICAgYWN0aXZlOiAnc3RhcnQnXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIEFib3V0LFxuICAgICAgU3RhcnQsXG4gICAgICBSZXN1bWUsXG4gICAgICBQYXVzZSxcbiAgICAgIEZBUVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCI8TmF2IHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSBvbjpjbGljaz0nc2V0QWN0aXZlIChldmVudC52aWV3LmlkKScvPlxuPFZpZXdDaGFuZ2VyIHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSAvPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuICAgIGltcG9ydCBWaWV3Q2hhbmdlciBmcm9tICcuL1ZpZXdDaGFuZ2VyJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5hdixcbiAgICAgICAgICAgIFZpZXdDaGFuZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24odmlld0lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe2FjdGl2ZTogdmlld0lkfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5odG1sIiwiPG5hdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAge3sjZWFjaCB2aWV3cyBhcyB2aWV3fX1cbiAgICAgICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9J2ZpcmUoXCJjbGlja1wiLCB7dmlld30pJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3t7dmlldy5pZH19J1xuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiTGluayBidG4tLW5hdiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7e3ZpZXcuaWR9fS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+e3t2aWV3LnRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAge3svZWFjaH19XG4gICAgPC9zZWN0aW9uPlxuPC9uYXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICA8ZGl2IGlkPSd7e3ZpZXcuaWR9fScgY2xhc3M9J3RhYiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fSc+PC9kaXY+XG4gICAge3svZWFjaH19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIHRoaXMuX3N0YXRlIHNlZW1zIHRvIGJlIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyB3YXkgdG8gYWNjZXNzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLnZpZXdzLmZvckVhY2goZnVuY3Rpb24odmlldykge1xuICAgICAgICAgICAgICAgIG5ldyB2aWV3LmNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5pZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVmlld0NoYW5nZXIuaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=
