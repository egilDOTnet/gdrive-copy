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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* unused harmony export differs */
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
        'c',
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
      /* unused harmony export destroyEach */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return createElement;
        }
      );
      /* unused harmony export createSvgElement */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return createText;
        }
      );
      /* unused harmony export createComment */
      /* unused harmony export addEventListener */
      /* unused harmony export removeEventListener */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
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
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_start_html__ = __webpack_require__(
        3
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(
        4
      );

      var app = new __WEBPACK_IMPORTED_MODULE_0__components_start_html__[
        'a' /* default */
      ]({
        target: document.getElementById('start-tab'),
        data: {
          name: 'eric'
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
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('General info'),
          h3
        );
        var text_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(
            'This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder.'
          ),
          p
        );
        var text_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(
            'If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level.'
          ),
          p_1
        );
        var text_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(
            "This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."
          ),
          p_2
        );
        var text_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(a, p_3);
        a.href = 'https://opensource.org/licenses/BSD-3-Clause';
        a.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('3-clause BSD License'),
          a
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(a_1, p_3);
        a_1.href = 'http://www.github.com/ericyd/gdrive-copy';
        a_1.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Github'),
          a_1
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('.'),
          p_3
        );
        var text_13 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(a_2, p_4);
        a_2.href =
          'https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md';
        a_2.target = '_blank';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('this guide'),
          a_2
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(' to launch your own, private version of the app.'),
          p_4
        );
        var text_17 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var h3_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h3');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Getting started'),
          h3_1
        );
        var text_19 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(br, p_5);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(
            '\n    If the folder copy get\'s stuck, simply use the "Resume prior folder copy" button, then select the copy of \n    your folder.'
          ),
          p_5
        );
        var text_22 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var h3_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('h3');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('When issues arise...'),
          h3_2
        );
        var text_24 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n');
        var p_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('p');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(b, p_6);
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(i, b);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('new, incomplete copy'),
          i
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(
        0
      );

      function create_main_fragment(state, component) {
        var div = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div.id = 'start-validation-errors';
        var text = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'b' /* createText */
          ]
        )('\n\n\n');
        var div_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        div_1.id = 'formDiv';
        div_1.className = 'form-div';
        var form = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('form');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(form, div_1);
        form.id = 'folderForm';
        form.name = 'folderForm';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n        Folder to copy\n        \n        '),
          form
        );
        var div_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(div_2, form);
        div_2.className = 'folderSelect';
        var button = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(button, div_2);
        button.type = 'button';
        button.id = 'selectFolderButton';
        button.className = 'btn btn--small selectFolderButton';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Select Folder'),
          button
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n            or\n            '),
          div_2
        );
        var label = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label, div_2);
        label.htmlFor = 'newFolder';
        label.className = 'textfield';
        var input = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input, label);
        input.type = 'text';
        input.id = 'folderTextbox';
        input.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(span, label);
        span.className = 'textfield__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Paste folder URL (Ctrl-V)'),
          span
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n        '),
          form
        );
        var div_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(div_3, form);
        div_3.className = 'getFolderErrors';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n        \n        \n        '),
          form
        );
        var div_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(div_4, form);
        div_4.className = 'folderLookup';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Finding folder...'),
          div_4
        );
        var span_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_1, div_4);
        span_1.className = 'rotate-contents';
        var i = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('i');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(i, span_1);
        i.className = 'spinner';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var div_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
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
            'c' /* appendNode */
          ]
        )(span_2, div_5);
        span_2.className = 'folderName';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
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
            'c' /* appendNode */
          ]
        )(button_1, div_5);
        button_1.type = 'reset';
        button_1.className = 'btn  btn--small selectOtherFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Select other folder'),
          button_1
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n        \n        '),
          form
        );
        var br = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('br');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(br, form);
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var label_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label_1, form);
        label_1.className = 'textfield';
        label_1.htmlFor = 'newFolder';
        var input_1 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input_1, label_1);
        input_1.type = 'text';
        input_1.id = 'newFolder';
        input_1.name = 'newFolder';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n            '),
          label_1
        );
        var span_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_3, label_1);
        span_3.className = 'textfield__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('New folder name'),
          span_3
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n\n\n        \n        Copy sharing permissions\n        '),
          form
        );
        var span_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_4, form);
        span_4.tabIndex = '10';
        span_4.className = 'tooltip-toggle';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* setAttribute */
          ]
        )(
          span_4,
          'data-tooltip',
          "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected."
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )(' \n        \n        \n        '),
          form
        );
        var div_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(div_6, form);
        div_6.className = 'form-group';
        div_6.id = 'permissions-group';
        var label_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label_2, div_6);
        label_2.className = 'radio';
        var input_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input_2, label_2);
        input_2.type = 'radio';
        input_2.name = 'permissions';
        input_2.__value = 'no';
        input_2.value = input_2.__value;
        input_2.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n                '),
          label_2
        );
        var span_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_5, label_2);
        span_5.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('No'),
          span_5
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n            '),
          div_6
        );
        var label_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label_3, div_6);
        label_3.className = 'radio';
        var input_3 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input_3, label_3);
        input_3.type = 'radio';
        input_3.name = 'permissions';
        input_3.__value = 'yes';
        input_3.value = input_3.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n                '),
          label_3
        );
        var span_6 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_6, label_3);
        span_6.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Yes'),
          span_6
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n\n\n        \n        Copy folder to\n        '),
          form
        );
        var div_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('div');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(div_7, form);
        div_7.className = 'form-group';
        div_7.id = 'destination-group';
        var label_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label_4, div_7);
        label_4.className = 'radio';
        var input_4 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input_4, label_4);
        input_4.type = 'radio';
        input_4.name = 'copyLocationOptions';
        input_4.__value = 'same';
        input_4.value = input_4.__value;
        input_4.checked = true;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n                '),
          label_4
        );
        var span_7 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_7, label_4);
        span_7.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Same as source folder'),
          span_7
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n            '),
          div_7
        );
        var label_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('label');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(label_5, div_7);
        label_5.className = 'radio';
        var input_5 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('input');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(input_5, label_5);
        input_5.type = 'radio';
        input_5.name = 'copyLocationOptions';
        input_5.__value = 'root';
        input_5.value = input_5.__value;
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n                '),
          label_5
        );
        var span_8 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('span');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(span_8, label_5);
        span_8.className = 'radio__label';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Root directory (i.e. at the top of "My Drive")'),
          span_8
        );
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('\n\n\n        \n        '),
          form
        );
        var button_2 = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'a' /* createElement */
          ]
        )('button');
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(button_2, form);
        button_2.type = 'submit';
        button_2.id = 'copyFolderButton';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'd' /* setAttribute */
          ]
        )(button_2, 'data-loading-text', 'Copying...');
        button_2.className = 'btn';
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
            'c' /* appendNode */
          ]
        )(
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
              'b' /* createText */
            ]
          )('Copy folder'),
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

        this._fragment = create_main_fragment(this._state, this);
        if (options.target) this._fragment.mount(options.target, null);
      }

      __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'g' /* assign */
        ]
      )(
        Start.prototype,
        __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__[
          'h' /* proto */
        ]
      );

      Start.prototype._set = function _set(newState) {
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
    /* 4 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_about_html__ = __webpack_require__(
        2
      );

      /* unused harmony default export */ var _unused_webpack_default_export = new __WEBPACK_IMPORTED_MODULE_0__components_about_html__[
        'a' /* default */
      ]({
        target: document.getElementById('about-tab')
      });

      /***/
    },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWNmYmM5Nzg4MThjNTVmZjYwNjciLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmVsdGUvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2ZWx0ZS9hYm91dC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRCx3Q0FBd0M7O0FBRXhDLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDs7QUFFQSxxQkFBcUIsZ0JBQWdCLEdBQUc7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7Ozs7QUN6VlI7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLElBQUksdUVBQUosQ0FBVTtBQUNsQkMsWUFBUUMsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQURVO0FBRWxCQyxVQUFNO0FBQ0ZDLGNBQU07QUFESjtBQUZZLENBQVYsQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsMEVBQWUsSUFBSSx1RUFBSixDQUFVO0FBQ3JCSixZQUFRQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCO0FBRGEsQ0FBVixDQUFmLEUiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjZmJjOTc4ODE4YzU1ZmY2MDY3IiwiZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24gKCB0YXJnZXQgKSB7XG5cdGZvciAoIHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHR2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoIHZhciBrIGluIHNvdXJjZSApIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUgKCBub2RlLCB0YXJnZXQgKSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlICggbm9kZSwgdGFyZ2V0LCBhbmNob3IgKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUoIG5vZGUsIGFuY2hvciApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlICggbm9kZSApIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4gKCBiZWZvcmUsIGFmdGVyICkge1xuXHR3aGlsZSAoIGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyICkge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBiZWZvcmUubmV4dFNpYmxpbmcgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaCAoIGl0ZXJhdGlvbnMsIGRldGFjaCwgc3RhcnQgKSB7XG5cdGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggaXRlcmF0aW9uc1tpXSApIGl0ZXJhdGlvbnNbaV0uZGVzdHJveSggZGV0YWNoICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQgKCBkYXRhICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIGRhdGEgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUgKCBncm91cCApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggZ3JvdXBbaV0uY2hlY2tlZCApIHZhbHVlLnB1c2goIGdyb3VwW2ldLl9fdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGxpbmVhciAoIHQgKSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUtleWZyYW1lcyAoIGEsIGIsIGRlbHRhLCBkdXJhdGlvbiwgZWFzZSwgZm4sIG5vZGUsIHN0eWxlICkge1xuXHR2YXIgaWQgPSAnX19zdmVsdGUnICsgfn4oIE1hdGgucmFuZG9tKCkgKiAxZTkgKTsgLy8gVE9ETyBtYWtlIHRoaXMgbW9yZSByb2J1c3Rcblx0dmFyIGtleWZyYW1lcyA9ICdAa2V5ZnJhbWVzICcgKyBpZCArICd7XFxuJztcblxuXHRmb3IgKCB2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbiApIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UoIHAgKTtcblx0XHRrZXlmcmFtZXMgKz0gKCBwICogMTAwICkgKyAnJXsnICsgZm4oIHQgKSArICd9XFxuJztcblx0fVxuXG5cdGtleWZyYW1lcyArPSAnMTAwJSB7JyArIGZuKCBiICkgKyAnfVxcbn0nO1xuXHRzdHlsZS50ZXh0Q29udGVudCArPSBrZXlmcmFtZXM7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKTtcblxuXHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uLnNwbGl0KCAnLCcgKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uICggYW5pbSApIHtcblx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0cmV0dXJuIGFuaW0gJiYgKCBkZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdCggYW5pbSApICk7XG5cdFx0fSlcblx0XHQuY29uY2F0KCBpZCArICcgJyArIGR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJyApXG5cdFx0LmpvaW4oICcsICcgKTtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24gKCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXAgKSB7XG5cdHZhciBvYmogPSBmbiggbm9kZSwgcGFyYW1zICk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKCBvYmouY3NzICkge1xuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcblx0fVxuXG5cdGlmICggaW50cm8gJiYgb2JqLnRpY2sgKSBvYmoudGljayggMCApO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbiAoIGludHJvLCBjYWxsYmFjayApIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKCBvYmouZGVsYXkgfHwgMCApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCBvYmouZGVsYXkgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KCBwcm9ncmFtICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24gKCBwcm9ncmFtICkge1xuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKCBwcm9ncmFtLmIgLSBwcm9ncmFtLmEgKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmICggb2JqLmNzcyApIHtcblx0XHRcdFx0Z2VuZXJhdGVLZXlmcmFtZXMoIHByb2dyYW0uYSwgcHJvZ3JhbS5iLCBwcm9ncmFtLmRlbHRhLCBwcm9ncmFtLmR1cmF0aW9uLCBlYXNlLCBvYmouY3NzLCBub2RlLCBzdHlsZSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCBub3cgKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICggIXByb2dyYW0gKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKCBwIC8gcHJvZ3JhbS5kdXJhdGlvbiApO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMudCA9IHRoaXMucHJvZ3JhbS5iO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIDEgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cblx0YWRkOiBmdW5jdGlvbiAoIHRyYW5zaXRpb24gKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMucHVzaCggdHJhbnNpdGlvbiApO1xuXG5cdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0ICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KCB0cmFuc2l0aW9uLnBlbmRpbmcgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKCBub3cgKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCAhdHJhbnNpdGlvbi5wZW5kaW5nICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRyYW5zaXRpb25NYW5hZ2VyLm5leHQgKTtcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRpZmZlcnMgKCBhLCBiICkge1xuXHRyZXR1cm4gKCBhICE9PSBiICkgfHwgKCBhICYmICggdHlwZW9mIGEgPT09ICdvYmplY3QnICkgfHwgKCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyApICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzICggY29tcG9uZW50LCBncm91cCwgbmV3U3RhdGUsIG9sZFN0YXRlICkge1xuXHRmb3IgKCB2YXIga2V5IGluIGdyb3VwICkge1xuXHRcdGlmICggISgga2V5IGluIG5ld1N0YXRlICkgKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlWyBrZXkgXTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVsga2V5IF07XG5cblx0XHRpZiAoIGRpZmZlcnMoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApICkge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwWyBrZXkgXTtcblx0XHRcdGlmICggIWNhbGxiYWNrcyApIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5fX2NhbGxpbmcgKSBjb250aW51ZTtcblxuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSApO1xuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0ICgga2V5ICkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVbIGtleSBdIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZpcmUgKCBldmVudE5hbWUsIGRhdGEgKSB7XG5cdHZhciBoYW5kbGVycyA9IGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0uc2xpY2UoKTtcblx0aWYgKCAhaGFuZGxlcnMgKSByZXR1cm47XG5cblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCggdGhpcywgZGF0YSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgZ3JvdXAgPSAoIG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlciApID8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3QgOiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdCggZ3JvdXBbIGtleSBdIHx8ICggZ3JvdXBbIGtleSBdID0gW10gKSApLnB1c2goIGNhbGxiYWNrICk7XG5cblx0aWYgKCAhb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlICkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCggdGhpcywgdGhpcy5fc3RhdGVbIGtleSBdICk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBbIGtleSBdLmluZGV4T2YoIGNhbGxiYWNrICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGdyb3VwWyBrZXkgXS5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2ICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGMgPSAoIGtleSA9ICcnICsga2V5ICkuc2VhcmNoKCAvW15cXHddLyApO1xuXHRpZiAoIGMgPiAtMSApIHtcblx0XHR2YXIgbWVzc2FnZSA9IFwiVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eVwiO1xuXHRcdGlmICggYyA+IDAgKSBtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSggMCwgYyApICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKCB0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICk7XG59XG5cbmZ1bmN0aW9uIG9uICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gfHwgKCB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gPSBbXSApO1xuXHRoYW5kbGVycy5wdXNoKCBoYW5kbGVyICk7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoIGhhbmRsZXIgKTtcblx0XHRcdGlmICggfmluZGV4ICkgaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYgKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkge1xuXHRcdGNvbnNvbGUud2FybiggXCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIiApO1xuXHRcdHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKCB0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIgKTtcbn1cblxuZnVuY3Rpb24gc2V0ICggbmV3U3RhdGUgKSB7XG5cdHRoaXMuX3NldCggYXNzaWduKCB7fSwgbmV3U3RhdGUgKSApO1xuXHR0aGlzLl9yb290Ll9mbHVzaCgpO1xufVxuXG5mdW5jdGlvbiBfZmx1c2ggKCkge1xuXHRpZiAoICF0aGlzLl9yZW5kZXJIb29rcyApIHJldHVybjtcblxuXHR3aGlsZSAoIHRoaXMuX3JlbmRlckhvb2tzLmxlbmd0aCApIHtcblx0XHR0aGlzLl9yZW5kZXJIb29rcy5wb3AoKSgpO1xuXHR9XG59XG5cbnZhciBwcm90byA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxuZXhwb3J0IHsgZGlmZmVycywgZGlzcGF0Y2hPYnNlcnZlcnMsIGdldCwgZmlyZSwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBzZXQsIF9mbHVzaCwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXN0cm95RWFjaCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIGxpbmVhciwgZ2VuZXJhdGVLZXlmcmFtZXMsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3RhcnQgZnJvbSAnLi9jb21wb25lbnRzL3N0YXJ0Lmh0bWwnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuXG5jb25zdCBhcHAgPSBuZXcgU3RhcnQoe1xuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXRhYicpLFxuICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJ2VyaWMnXG4gICAgfVxufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N2ZWx0ZS9zdGFydC5qcyIsImltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQuaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBYm91dCh7XG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdGFiJylcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdmVsdGUvYWJvdXQuanMiXSwic291cmNlUm9vdCI6IiJ9
