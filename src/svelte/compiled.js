/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dispatchObservers; });
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return detachNode; });
/* unused harmony export detachBetween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createText; });
/* unused harmony export createComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAttribute; });
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export linear */
/* unused harmony export generateKeyframes */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* unused harmony export noop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return assign; });
function noop () {}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function detachBetween ( before, after ) {
	while ( before.nextSibling && before.nextSibling !== after ) {
		before.parentNode.removeChild( before.nextSibling );
	}
}

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		if ( iterations[i] ) iterations[i].destroy( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createSvgElement ( name ) {
	return document.createElementNS( 'http://www.w3.org/2000/svg', name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute( attribute, value );
}

function setXlinkAttribute ( node, attribute, value ) {
	node.setAttributeNS( 'http://www.w3.org/1999/xlink', attribute, value );
}

function getBindingGroupValue ( group ) {
	var value = [];
	for ( var i = 0; i < group.length; i += 1 ) {
		if ( group[i].checked ) value.push( group[i].__value );
	}
	return value;
}

function linear ( t ) {
	return t;
}

function generateKeyframes ( a, b, delta, duration, ease, fn, node, style ) {
	var id = '__svelte' + ~~( Math.random() * 1e9 ); // TODO make this more robust
	var keyframes = '@keyframes ' + id + '{\n';

	for ( var p = 0; p <= 1; p += 16.666 / duration ) {
		var t = a + delta * ease( p );
		keyframes += ( p * 100 ) + '%{' + fn( t ) + '}\n';
	}

	keyframes += '100% {' + fn( b ) + '}\n}';
	style.textContent += keyframes;

	document.head.appendChild( style );

	node.style.animation = node.style.animation.split( ',' )
		.filter( function ( anim ) {
			// when introing, discard old animations if there are any
			return anim && ( delta < 0 || !/__svelte/.test( anim ) );
		})
		.concat( id + ' ' + duration + 'ms linear 1 forwards' )
		.join( ', ' );
}

function wrapTransition ( node, fn, params, intro, outgroup ) {
	var obj = fn( node, params );
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;

	// TODO share <style> tag between all transitions?
	if ( obj.css ) {
		var style = document.createElement( 'style' );
	}

	if ( intro && obj.tick ) obj.tick( 0 );

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function ( intro, callback ) {
			var program = {
				start: window.performance.now() + ( obj.delay || 0 ),
				intro: intro,
				callback: callback
			};

			if ( obj.delay ) {
				this.pending = program;
			} else {
				this.start( program );
			}

			if ( !this.running ) {
				this.running = true;
				transitionManager.add( this );
			}
		},
		start: function ( program ) {
			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs( program.b - program.a );
			program.end = program.start + program.duration;

			if ( obj.css ) {
				generateKeyframes( program.a, program.b, program.delta, program.duration, ease, obj.css, node, style );
			}

			this.program = program;
			this.pending = null;
		},
		update: function ( now ) {
			var program = this.program;
			if ( !program ) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease( p / program.duration );
			if ( obj.tick ) obj.tick( this.t );
		},
		done: function () {
			this.t = this.program.b;
			if ( obj.tick ) obj.tick( this.t );
			if ( obj.css ) document.head.removeChild( style );
			this.program.callback();
			this.program = null;
			this.running = !!this.pending;
		},
		abort: function () {
			if ( obj.tick ) obj.tick( 1 );
			if ( obj.css ) document.head.removeChild( style );
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],

	add: function ( transition ) {
		transitionManager.transitions.push( transition );

		if ( !this.running ) {
			this.running = true;
			this.next();
		}
	},

	next: function () {
		transitionManager.running = false;

		var now = window.performance.now();
		var i = transitionManager.transitions.length;

		while ( i-- ) {
			var transition = transitionManager.transitions[i];

			if ( transition.program && now >= transition.program.end ) {
				transition.done();
			}

			if ( transition.pending && now >= transition.pending.start ) {
				transition.start( transition.pending );
			}

			if ( transition.running ) {
				transition.update( now );
				transitionManager.running = true;
			} else if ( !transition.pending ) {
				transitionManager.transitions.splice( i, 1 );
			}
		}

		if ( transitionManager.running ) {
			requestAnimationFrame( transitionManager.next );
		}
	}
};

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( differs( newValue, oldValue ) ) {
			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function observeDev ( key, callback, options ) {
	var c = ( key = '' + key ).search( /[^\w]/ );
	if ( c > -1 ) {
		var message = "The first argument to component.observe(...) must be the name of a top-level property";
		if ( c > 0 ) message += ", i.e. '" + key.slice( 0, c ) + "' rather than '" + key + "'";

		throw new Error( message );
	}

	return observe.call( this, key, callback, options );
}

function on ( eventName, handler ) {
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function onDev ( eventName, handler ) {
	if ( eventName === 'teardown' ) {
		console.warn( "Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2" );
		return this.on( 'destroy', handler );
	}

	return on.call( this, eventName, handler );
}

function set ( newState ) {
	this._set( assign( {}, newState ) );
	this._root._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_start__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_faq__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__(5);





var app = new __WEBPACK_IMPORTED_MODULE_0__components_App__["a" /* default */]({
  target: document.querySelector('#app'),
  data: {
    views: [{
      id: 'about',
      title: 'About',
      component: __WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* default */]
    }, {
      id: 'start',
      title: 'Start',
      component: __WEBPACK_IMPORTED_MODULE_1__components_start__["a" /* default */]
    }, {
      id: 'resume',
      title: 'Resume',
      component: __WEBPACK_IMPORTED_MODULE_2__components_faq__["a" /* default */]
    }, {
      id: 'pause',
      title: 'Pause',
      component: __WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* default */]
    }, {
      id: 'faq',
      title: 'FAQ',
      component: __WEBPACK_IMPORTED_MODULE_2__components_faq__["a" /* default */]
    }],
    // must match the id of one of the views
    active: 'start'
  },
  components: {
    Start: __WEBPACK_IMPORTED_MODULE_1__components_start__["a" /* default */],
    About: __WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* default */],
    FAQ: __WEBPACK_IMPORTED_MODULE_2__components_faq__["a" /* default */]
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);





var template = function () {
	return {
		methods: {
			setActive: function setActive(viewId) {
				this.set({ active: viewId });
			}
		}
	};
}();

function create_main_fragment(state, component) {
	var nav_updating = false,
	    viewchanger_updating = false;

	var nav_initial_data = { views: state.views };
	if ('active' in state) nav_initial_data.active = state.active;
	var nav = new __WEBPACK_IMPORTED_MODULE_0__Nav__["a" /* default */]({
		target: null,
		_root: component._root,
		data: nav_initial_data
	});

	nav.on('click', function (event) {
		component.setActive(event.view.id);
	});

	component._bindings.push(function () {
		if (nav._torndown) return;
		nav.observe('active', function (value) {
			if (nav_updating) return;
			nav_updating = true;
			component._set({ active: value });
			nav_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* differs */])(nav.get('active'), state.active) });
	});

	nav._context = {
		state: state
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");

	var viewchanger_initial_data = { views: state.views };
	if ('active' in state) viewchanger_initial_data.active = state.active;
	var viewchanger = new __WEBPACK_IMPORTED_MODULE_1__ViewChanger__["a" /* default */]({
		target: null,
		_root: component._root,
		data: viewchanger_initial_data
	});

	component._bindings.push(function () {
		if (viewchanger._torndown) return;
		viewchanger.observe('active', function (value) {
			if (viewchanger_updating) return;
			viewchanger_updating = true;
			component._set({ active: value });
			viewchanger_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* differs */])(viewchanger.get('active'), state.active) });
	});

	viewchanger._context = {
		state: state
	};

	return {
		mount: function mount(target, anchor) {
			nav._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
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

			if (Object.keys(viewchanger_changes).length) viewchanger.set(viewchanger_changes);
		},

		destroy: function destroy(detach) {
			nav.destroy(detach);
			viewchanger.destroy(detach);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
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
	}this._flush();
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(App.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	while (this._bindings.length) {
		this._bindings.pop()();
	}this._flush();
};

App.prototype.teardown = App.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var nav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('nav');
	var section = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('section');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(section, nav);
	section.className = "header-container";
	var each_block_value = state.views;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
		each_block_iterations[i].mount(section, null);
	}

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(nav, target, anchor);
		},

		update: function update(changed, state) {
			var each_block_value = state.views;

			if ('views' in changed || 'active' in changed) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].mount(section, null);
					}
				}

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(nav);
			}
		}
	};
}

function create_each_block(state, each_block_value, view, view_index, component) {
	var button_name_value, button_class_value, button_id_value, text_value;

	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(button, 'role', "button");
	button.name = button_name_value = view.id;
	button.className = button_class_value = "tabLink btn--nav " + (state.active === view.id ? 'active' : '');
	button.id = button_id_value = "" + view.id + "-button";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(button, 'href', "#");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* addEventListener */])(button, 'click', click_handler);

	button._svelte = {
		component: component,
		each_block_value: each_block_value,
		view_index: view_index
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(text_value = view.title);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(text, button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(button, target, anchor);
		},

		update: function update(changed, state, each_block_value, view, view_index) {
			if (button_name_value !== (button_name_value = view.id)) {
				button.name = button_name_value;
			}

			if (button_class_value !== (button_class_value = "tabLink btn--nav " + (state.active === view.id ? 'active' : ''))) {
				button.className = button_class_value;
			}

			if (button_id_value !== (button_id_value = "" + view.id + "-button")) {
				button.id = button_id_value;
			}

			button._svelte.each_block_value = each_block_value;
			button._svelte.view_index = view_index;

			if (text_value !== (text_value = view.title)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["m" /* removeEventListener */])(button, 'click', click_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(button);
			}
		}
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value,
	    view_index = this._svelte.view_index,
	    view = each_block_value[view_index];
	component.fire("click", { view: view });
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Nav.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Nav.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Nav.prototype.teardown = Nav.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = function () {
	return {
		oncreate: function oncreate() {
			// for some reason this._state seems to be the only
			// way to access the props passed to this component
			this._state.views.forEach(function (view) {
				new view.component({
					target: document.getElementById(view.id)
				});
			});
		}
	};
}();

function create_main_fragment(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "container";
	div.id = "container";
	var each_block_value = state.views;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
		each_block_iterations[i].mount(div, null);
	}

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
		},

		update: function update(changed, state) {
			var each_block_value = state.views;

			if ('views' in changed || 'active' in changed) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].mount(div, null);
					}
				}

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
			}
		}
	};
}

function create_each_block(state, each_block_value, view, view_index, component) {
	var div_id_value, div_class_value;

	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.id = div_id_value = view.id;
	div.className = div_class_value = "tab " + (state.active === view.id ? 'active' : '');

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
		},

		update: function update(changed, state, each_block_value, view, view_index) {
			if (div_id_value !== (div_id_value = view.id)) {
				div.id = div_id_value;
			}

			if (div_class_value !== (div_class_value = "tab " + (state.active === view.id ? 'active' : ''))) {
				div.className = div_class_value;
			}
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(ViewChanger.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

ViewChanger.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

ViewChanger.prototype.teardown = ViewChanger.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (ViewChanger);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var h3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("General info"), h3);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder."), p);
	var text_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level."), p_1);
	var text_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."), p_2);
	var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("This app is licensed under the "), p_3);
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a, p_3);
	a.href = "https://opensource.org/licenses/BSD-3-Clause";
	a.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("3-clause BSD License"), a);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(".  Feel free to reuse or distribute this code in any way \n    you see fit. You can find the most up-to-date source code on "), p_3);
	var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_1, p_3);
	a_1.href = "http://www.github.com/ericyd/gdrive-copy";
	a_1.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Github"), a_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("."), p_3);
	var text_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("If you would like to run your own version of the code but do not come from a technical background, you can \n    follow "), p_4);
	var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_2, p_4);
	a_2.href = "https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md";
	a_2.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("this guide"), a_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" to launch your own, private version of the app."), p_4);
	var text_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h3_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Getting started"), h3_1);
	var text_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("To get started, simply select your folder and choose a new name, then select Copy Folder!"), p_5);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, p_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    If the folder copy get's stuck, simply use the \"Resume prior folder copy\" button, then select the copy of \n    your folder."), p_5);
	var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h3_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("When issues arise..."), h3_2);
	var text_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var p_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for \n    whatever reason, simply select the "), p_6);
	var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(b, p_6);
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(i, b);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("new, incomplete copy"), i);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" of the folder and select \"Resume \n    copying\"."), p_6);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_13, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_17, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h3_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_19, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h3_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_24, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_6, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_13);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_17);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h3_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_19);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h3_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_24);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_6);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(About.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

About.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

About.prototype.teardown = About.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a, 'name', "top");
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var ul = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ul');
	var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li, ul);
	var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_1, li);
	a_1.href = "#longerThan2Mins";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), a_1);
	var li_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_1, ul);
	var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_2, li_1);
	a_2.href = "#copyBetweenDomains";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Can I use this app to copy a folder between domains?"), a_2);
	var li_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_2, ul);
	var a_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_3, li_2);
	a_3.href = "#whenIsItDone";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I know when it is done?"), a_3);
	var li_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_3, ul);
	var a_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_4, li_3);
	a_4.href = "#notEverythingCopied";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("It didn't copy everything - what do I do?"), a_4);
	var li_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_4, ul);
	var a_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_5, li_4);
	a_5.href = "#multipleAccounts";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I sign into a different account with this app?"), a_5);
	var li_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_5, ul);
	var a_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_6, li_5);
	a_6.href = "#infiniteLoop";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("HELP! The copying is stuck in an infinite loop!  What do I do?"), a_6);
	var li_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_6, ul);
	var a_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_7, li_6);
	a_7.href = "#openissue";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I report a bug in the app?"), a_7);
	var text_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_8, h4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_8, 'name', "longerThan2Mins");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), h4);
	var text_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("When the app stops, you can use the \"Resume\" button to restart the copying.  When selecting the folder to resume, you must select the "), div);
	var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(b, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("in-progress"), b);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" folder, "), div);
	var b_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(b_1, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("not"), b_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" the original."), div);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, div);
	var br_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br_1, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    For example, if you are creating a copy of \"Folder A\" called \"Copy of Folder A\", you should select \"Copy of Folder A\" when you resume the copying.  Selecting the original folder will return an error."), div);
	var text_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_9.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_9);
	var text_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h4_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_10, h4_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_10, 'name', "copyBetweenDomains");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Can I use this app to copy a folder between domains?"), h4_1);
	var text_21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Yes!  Follow the steps below:\n    "), div_1);
	var ol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(ol, div_1);
	var li_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_7, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Log into the account that owns the folder (\"Account 1\")"), li_7);
	var li_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_8, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Share the folder with the domain to which you'd like to copy (\"Account 2\")"), li_8);
	var li_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_9, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Open an private/incognito window and log into Account 2"), li_9);
	var li_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_10, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Go to the \"Shared with me\" section, right click the folder, and select \"Add to Drive\""), li_10);
	var li_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_11, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Open the app, and select the folder that has been shared"), li_11);
	var li_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_12, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Create a copy and Account 2 will now be the owner"), li_12);
	var text_29 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_11.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_11);
	var text_31 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h4_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_12, h4_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_12, 'name', "whenIsItDone");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I know when it is done?"), h4_2);
	var text_33 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_2.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("You will know it is complete when the Copy Log says \"Complete\" in cell C2.  In addition, the cell will highlight green."), div_2);
	var text_35 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_13.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_13);
	var text_37 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_14, h4_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_14, 'name', "notEverythingCopied");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("It didn't copy everything - what do I do?"), h4_3);
	var text_39 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_3.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    "), div_3);
	var ol_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(ol_1, div_3);
	var li_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_13, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Audit the Copy Log for any errors, and manually copy those files"), li_13);
	var li_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_14, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors"), li_14);
	var text_43 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_15.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_15);
	var text_45 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_16, h4_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_16, 'name', "multipleAccounts");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I sign into a different account with this app?"), h4_4);
	var text_47 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_4.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account."), div_4);
	var br_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br_2, div_4);
	var br_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br_3, div_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\n    \n    "), div_4);
	var br_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br_4, div_4);
	var br_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br_5, div_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("*If you think this is a good feature, please feel free to open an\n    "), div_4);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span, div_4);
	span.className = "github-button-wrapper";
	var a_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_17, span);
	a_17.className = "github-button";
	a_17.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_17, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_17, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_17, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Issue"), a_17);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"), div_4);
	var text_53 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_18.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_18);
	var text_55 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_19, h4_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_19, 'name', "infiniteLoop");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("HELP! The copying is stuck in an infinite loop!  What do I do?"), h4_5);
	var text_57 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_5.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Please use the \"Pause\" function built into the app and "), div_5);
	var a_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_20, div_5);
	a_20.href = "https://github.com/ericyd/gdrive-copy/issues";
	a_20.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("report the bug"), a_20);
	var text_60 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_21.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_21);
	var text_62 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_22, h4_6);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_22, 'name', "openissue");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I report a bug in the app?"), h4_6);
	var text_64 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_6.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("If you have found a bug that is not covered in these FAQs, please open an\n    "), div_6);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_1, div_6);
	span_1.className = "github-button-wrapper";
	var a_23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_23, span_1);
	a_23.className = "github-button";
	a_23.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_23, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_23, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_23, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Issue"), a_23);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" on Github."), div_6);
	var text_68 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_24.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_24);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(ul, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_8, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_10, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_17, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_9, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_19, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_21, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_29, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_11, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_31, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_33, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_35, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_13, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_37, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_39, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_43, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_15, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_45, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_47, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_53, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_18, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_55, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_57, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_60, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_21, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_62, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_64, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_68, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_24, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(ul);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_8);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_10);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_17);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_9);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_19);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_21);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_29);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_11);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_31);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_33);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_35);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_13);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_37);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_39);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_43);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_15);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_45);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_47);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_53);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_18);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_55);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_57);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_60);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_21);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_62);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_64);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_68);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_24);
			}
		}
	};
}

function Faq(options) {
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Faq.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Faq.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Faq.prototype.teardown = Faq.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Faq);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.id = "start-validation-errors";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.id = "formDiv";
	div_1.className = "form-div";
	var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('form');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(form, div_1);
	form.id = "folderForm";
	form.name = "folderForm";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        Folder to copy\n        \n        "), form);
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_2, form);
	div_2.className = "folderSelect";
	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(button, div_2);
	button.type = "button";
	button.id = "selectFolderButton";
	button.className = "btn btn--small selectFolderButton";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Select Folder"), button);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            or\n            "), div_2);
	var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label, div_2);
	label.htmlFor = "newFolder";
	label.className = "textfield";
	var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input, label);
	input.type = "text";
	input.id = "folderTextbox";
	input.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span, label);
	span.className = "textfield__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Paste folder URL (Ctrl-V)"), span);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n        "), form);
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_3, form);
	div_3.className = "getFolderErrors";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        \n        \n        "), form);
	var div_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_4, form);
	div_4.className = "folderLookup";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Finding folder..."), div_4);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_1, div_4);
	span_1.className = "rotate-contents";
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(i, span_1);
	i.className = "spinner";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n        \n        "), form);
	var div_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_5, form);
	div_5.className = "selectedFolderInfo";
	var span_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_2, div_5);
	span_2.className = "folderName";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("   \n            "), div_5);
	var button_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(button_1, div_5);
	button_1.type = "reset";
	button_1.className = "btn  btn--small selectOtherFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Select other folder"), button_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        \n        "), form);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, form);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n        \n        "), form);
	var label_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_1, form);
	label_1.className = "textfield";
	label_1.htmlFor = "newFolder";
	var input_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_1, label_1);
	input_1.type = "text";
	input_1.id = "newFolder";
	input_1.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), label_1);
	var span_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_3, label_1);
	span_3.className = "textfield__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("New folder name"), span_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n\n        \n        Copy sharing permissions\n        "), form);
	var span_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_4, form);
	span_4.tabIndex = "10";
	span_4.className = "tooltip-toggle";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(span_4, 'data-tooltip', "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected.");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" \n        \n        \n        "), form);
	var div_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_6, form);
	div_6.className = "form-group";
	div_6.id = "permissions-group";
	var label_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_2, div_6);
	label_2.className = "radio";
	var input_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_2, label_2);
	input_2.type = "radio";
	input_2.name = "permissions";
	input_2.__value = "no";
	input_2.value = input_2.__value;
	input_2.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_2);
	var span_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_5, label_2);
	span_5.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("No"), span_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), div_6);
	var label_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_3, div_6);
	label_3.className = "radio";
	var input_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_3, label_3);
	input_3.type = "radio";
	input_3.name = "permissions";
	input_3.__value = "yes";
	input_3.value = input_3.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_3);
	var span_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_6, label_3);
	span_6.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Yes"), span_6);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n\n        \n        Copy folder to\n        "), form);
	var div_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_7, form);
	div_7.className = "form-group";
	div_7.id = "destination-group";
	var label_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_4, div_7);
	label_4.className = "radio";
	var input_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_4, label_4);
	input_4.type = "radio";
	input_4.name = "copyLocationOptions";
	input_4.__value = "same";
	input_4.value = input_4.__value;
	input_4.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_4);
	var span_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_7, label_4);
	span_7.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Same as source folder"), span_7);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), div_7);
	var label_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_5, div_7);
	label_5.className = "radio";
	var input_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_5, label_5);
	input_5.type = "radio";
	input_5.name = "copyLocationOptions";
	input_5.__value = "root";
	input_5.value = input_5.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_5);
	var span_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_8, label_5);
	span_8.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Root directory (i.e. at the top of \"My Drive\")"), span_8);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n        \n        "), form);
	var button_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(button_2, form);
	button_2.type = "submit";
	button_2.id = "copyFolderButton";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(button_2, 'data-loading-text', "Copying...");
	button_2.className = "btn";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Copy folder"), button_2);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Start.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Start.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Start.prototype.teardown = Start.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Start);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTM2ZjI3ZTViZjkzYTMyNjNiNGQiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld0NoYW5nZXIuaHRtbCJdLCJuYW1lcyI6WyJhcHAiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhIiwidmlld3MiLCJpZCIsInRpdGxlIiwiY29tcG9uZW50IiwiQWJvdXQiLCJTdGFydCIsIkZBUSIsImFjdGl2ZSIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRCx3Q0FBd0M7O0FBRXhDLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDs7QUFFQSxxQkFBcUIsZ0JBQWdCLEdBQUc7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7Ozs7OztBQ3pWUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLElBQUksZ0VBQUosQ0FBUTtBQUNsQkMsVUFBUUMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQURVO0FBRWxCQyxRQUFNO0FBQ0pDLFdBQU8sQ0FDTDtBQUNFQyxVQUFJLE9BRE47QUFFRUMsYUFBTyxPQUZUO0FBR0VDLGlCQUFXLGtFQUFBQztBQUhiLEtBREssRUFNTDtBQUNFSCxVQUFJLE9BRE47QUFFRUMsYUFBTyxPQUZUO0FBR0VDLGlCQUFXLGtFQUFBRTtBQUhiLEtBTkssRUFXTDtBQUNFSixVQUFJLFFBRE47QUFFRUMsYUFBTyxRQUZUO0FBR0VDLGlCQUFXLGdFQUFBRztBQUhiLEtBWEssRUFnQkw7QUFDRUwsVUFBSSxPQUROO0FBRUVDLGFBQU8sT0FGVDtBQUdFQyxpQkFBVyxrRUFBQUM7QUFIYixLQWhCSyxFQXFCTDtBQUNFSCxVQUFJLEtBRE47QUFFRUMsYUFBTyxLQUZUO0FBR0VDLGlCQUFXLGdFQUFBRztBQUhiLEtBckJLLENBREg7QUE0Qko7QUFDQUMsWUFBUTtBQTdCSixHQUZZO0FBaUNsQkMsY0FBWTtBQUNSSCxXQUFBLGtFQURRO0FBRVJELFdBQUEsa0VBRlE7QUFHUkUsU0FBQSxnRUFBQUE7QUFIUTtBQWpDTSxDQUFSLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7OzJCQ0ZRO0FBSUo7QUFLVztBQUNNLGNBQUUsbUJBQWUsUUFBRTtBQUNwQixTQUFJLElBQUMsRUFBTyxRQUFVO0FBSTFDO0FBTmlCO0FBTEU7Ozs7Ozs7dUNBUEQ7d0RBQWU7Ozs7Ozs7O1lBQW1CLFVBQU8sTUFBSyxLQUFJOzs7Ozs7Ozs7O3lLQUFuQzs7Ozs7Ozs7OytDQUNQO2dFQUFlOzs7Ozs7Ozs7Ozs7OztpTEFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRFI7Ozs7Ozs7O3FEQUFmOzs7Ozs7cUNBQ3VCOzs7Ozs7Ozs2REFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkNDTDs7Ozs7Ozs7Ozs7Ozs7O2dDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FHTyxLQUFHO3NFQUNpQixXQUFTLEtBQUcsS0FBVyxXQUFLO29DQUNsRCxLQUFHOzs7Ozs7Ozs7OytKQUNFLEtBQU07Ozs7Ozs7OztrREFIVCxLQUFHOzs7O2lGQUNpQixXQUFTLEtBQUcsS0FBVyxXQUFLOzs7O21EQUNsRCxLQUFHOzs7Ozs7O29DQUNFLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBSlAsS0FBUSxTQUFFLEVBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0V2QztBQUNKO0FBQ1ksZ0NBQUc7OztBQUdILFFBQU8sT0FBTSxNQUFRLFFBQUMsVUFBYSxNQUFFO0FBQ3JDLFFBQVEsS0FBVTtBQUNSLGFBQVUsU0FBZSxlQUFLLEtBQ3RDO0FBRmlCO0FBR3BCO0FBR2Y7QUFYbUI7Ozs7Ozs7OEJBTkY7Ozs7Ozs7Ozs7Ozs7OztnQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFDTSxLQUFHO21EQUF1QixXQUFTLEtBQUcsS0FBVyxXQUFLOzs7Ozs7Ozt3Q0FBdEQsS0FBRzs7Ozs4REFBdUIsV0FBUyxLQUFHLEtBQVcsV0FBSyIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTM2ZjI3ZTViZjkzYTMyNjNiNGQiLCJmdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbiAoIHRhcmdldCApIHtcblx0Zm9yICggdmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cdFx0Zm9yICggdmFyIGsgaW4gc291cmNlICkgdGFyZ2V0W2tdID0gc291cmNlW2tdO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZSAoIG5vZGUsIHRhcmdldCApIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUgKCBub2RlLCB0YXJnZXQsIGFuY2hvciApIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZSggbm9kZSwgYW5jaG9yICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUgKCBub2RlICkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbiAoIGJlZm9yZSwgYWZ0ZXIgKSB7XG5cdHdoaWxlICggYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIgKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGJlZm9yZS5uZXh0U2libGluZyApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoICggaXRlcmF0aW9ucywgZGV0YWNoLCBzdGFydCApIHtcblx0Zm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBpdGVyYXRpb25zW2ldICkgaXRlcmF0aW9uc1tpXS5kZXN0cm95KCBkZXRhY2ggKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICggbmFtZSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dCAoIGRhdGEgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggZGF0YSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoICcnICk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lciAoIG5vZGUsIGV2ZW50LCBoYW5kbGVyICkge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50LCBoYW5kbGVyLCBmYWxzZSApO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZSggYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZSAoIG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZSAoIGdyb3VwICkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBncm91cFtpXS5jaGVja2VkICkgdmFsdWUucHVzaCggZ3JvdXBbaV0uX192YWx1ZSApO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbGluZWFyICggdCApIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlS2V5ZnJhbWVzICggYSwgYiwgZGVsdGEsIGR1cmF0aW9uLCBlYXNlLCBmbiwgbm9kZSwgc3R5bGUgKSB7XG5cdHZhciBpZCA9ICdfX3N2ZWx0ZScgKyB+figgTWF0aC5yYW5kb20oKSAqIDFlOSApOyAvLyBUT0RPIG1ha2UgdGhpcyBtb3JlIHJvYnVzdFxuXHR2YXIga2V5ZnJhbWVzID0gJ0BrZXlmcmFtZXMgJyArIGlkICsgJ3tcXG4nO1xuXG5cdGZvciAoIHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uICkge1xuXHRcdHZhciB0ID0gYSArIGRlbHRhICogZWFzZSggcCApO1xuXHRcdGtleWZyYW1lcyArPSAoIHAgKiAxMDAgKSArICcleycgKyBmbiggdCApICsgJ31cXG4nO1xuXHR9XG5cblx0a2V5ZnJhbWVzICs9ICcxMDAlIHsnICsgZm4oIGIgKSArICd9XFxufSc7XG5cdHN0eWxlLnRleHRDb250ZW50ICs9IGtleWZyYW1lcztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApO1xuXG5cdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24uc3BsaXQoICcsJyApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24gKCBhbmltICkge1xuXHRcdFx0Ly8gd2hlbiBpbnRyb2luZywgZGlzY2FyZCBvbGQgYW5pbWF0aW9ucyBpZiB0aGVyZSBhcmUgYW55XG5cdFx0XHRyZXR1cm4gYW5pbSAmJiAoIGRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KCBhbmltICkgKTtcblx0XHR9KVxuXHRcdC5jb25jYXQoIGlkICsgJyAnICsgZHVyYXRpb24gKyAnbXMgbGluZWFyIDEgZm9yd2FyZHMnIClcblx0XHQuam9pbiggJywgJyApO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbiAoIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCApIHtcblx0dmFyIG9iaiA9IGZuKCBub2RlLCBwYXJhbXMgKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAoIG9iai5jc3MgKSB7XG5cdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuXHR9XG5cblx0aWYgKCBpbnRybyAmJiBvYmoudGljayApIG9iai50aWNrKCAwICk7XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uICggaW50cm8sIGNhbGxiYWNrICkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAoIG9iai5kZWxheSB8fCAwICksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIG9iai5kZWxheSApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQoIHByb2dyYW0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQoIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0YXJ0OiBmdW5jdGlvbiAoIHByb2dyYW0gKSB7XG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmIgPSBwcm9ncmFtLmludHJvID8gMSA6IDA7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMoIHByb2dyYW0uYiAtIHByb2dyYW0uYSApO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKCBvYmouY3NzICkge1xuXHRcdFx0XHRnZW5lcmF0ZUtleWZyYW1lcyggcHJvZ3JhbS5hLCBwcm9ncmFtLmIsIHByb2dyYW0uZGVsdGEsIHByb2dyYW0uZHVyYXRpb24sIGVhc2UsIG9iai5jc3MsIG5vZGUsIHN0eWxlICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIG5vdyApIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCAhcHJvZ3JhbSApIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UoIHAgLyBwcm9ncmFtLmR1cmF0aW9uICk7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy50ID0gdGhpcy5wcm9ncmFtLmI7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICggb2JqLnRpY2sgKSBvYmoudGljayggMSApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblxuXHRhZGQ6IGZ1bmN0aW9uICggdHJhbnNpdGlvbiApIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5wdXNoKCB0cmFuc2l0aW9uICk7XG5cblx0XHRpZiAoICF0aGlzLnJ1bm5pbmcgKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciBpID0gdHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQoIHRyYW5zaXRpb24ucGVuZGluZyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucnVubmluZyApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUoIG5vdyApO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoICF0cmFuc2l0aW9uLnBlbmRpbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyApIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggdHJhbnNpdGlvbk1hbmFnZXIubmV4dCApO1xuXHRcdH1cblx0fVxufTtcblxuZnVuY3Rpb24gZGlmZmVycyAoIGEsIGIgKSB7XG5cdHJldHVybiAoIGEgIT09IGIgKSB8fCAoIGEgJiYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgKSB8fCAoIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICkgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMgKCBjb21wb25lbnQsIGdyb3VwLCBuZXdTdGF0ZSwgb2xkU3RhdGUgKSB7XG5cdGZvciAoIHZhciBrZXkgaW4gZ3JvdXAgKSB7XG5cdFx0aWYgKCAhKCBrZXkgaW4gbmV3U3RhdGUgKSApIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVbIGtleSBdO1xuXHRcdHZhciBvbGRWYWx1ZSA9IG9sZFN0YXRlWyBrZXkgXTtcblxuXHRcdGlmICggZGlmZmVycyggbmV3VmFsdWUsIG9sZFZhbHVlICkgKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gZ3JvdXBbIGtleSBdO1xuXHRcdFx0aWYgKCAhY2FsbGJhY2tzICkgY29udGludWU7XG5cblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLl9fY2FsbGluZyApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbXBvbmVudCwgbmV3VmFsdWUsIG9sZFZhbHVlICk7XG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXQgKCBrZXkgKSB7XG5cdHJldHVybiBrZXkgPyB0aGlzLl9zdGF0ZVsga2V5IF0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmlyZSAoIGV2ZW50TmFtZSwgZGF0YSApIHtcblx0dmFyIGhhbmRsZXJzID0gZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXS5zbGljZSgpO1xuXHRpZiAoICFoYW5kbGVycyApIHJldHVybjtcblxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKCB0aGlzLCBkYXRhICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSAoIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKSB7XG5cdHZhciBncm91cCA9ICggb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyICkgPyB0aGlzLl9vYnNlcnZlcnMucG9zdCA6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KCBncm91cFsga2V5IF0gfHwgKCBncm91cFsga2V5IF0gPSBbXSApICkucHVzaCggY2FsbGJhY2sgKTtcblxuXHRpZiAoICFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UgKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKCB0aGlzLCB0aGlzLl9zdGF0ZVsga2V5IF0gKTtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFsga2V5IF0uaW5kZXhPZiggY2FsbGJhY2sgKTtcblx0XHRcdGlmICggfmluZGV4ICkgZ3JvdXBbIGtleSBdLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgYyA9ICgga2V5ID0gJycgKyBrZXkgKS5zZWFyY2goIC9bXlxcd10vICk7XG5cdGlmICggYyA+IC0xICkge1xuXHRcdHZhciBtZXNzYWdlID0gXCJUaGUgZmlyc3QgYXJndW1lbnQgdG8gY29tcG9uZW50Lm9ic2VydmUoLi4uKSBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgdG9wLWxldmVsIHByb3BlcnR5XCI7XG5cdFx0aWYgKCBjID4gMCApIG1lc3NhZ2UgKz0gXCIsIGkuZS4gJ1wiICsga2V5LnNsaWNlKCAwLCBjICkgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBvYnNlcnZlLmNhbGwoIHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKTtcbn1cblxuZnVuY3Rpb24gb24gKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkgcmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSB8fCAoIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSA9IFtdICk7XG5cdGhhbmRsZXJzLnB1c2goIGhhbmRsZXIgKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZiggaGFuZGxlciApO1xuXHRcdFx0aWYgKCB+aW5kZXggKSBoYW5kbGVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkRldiAoIGV2ZW50TmFtZSwgaGFuZGxlciApIHtcblx0aWYgKCBldmVudE5hbWUgPT09ICd0ZWFyZG93bicgKSB7XG5cdFx0Y29uc29sZS53YXJuKCBcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiICk7XG5cdFx0cmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwoIHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlciApO1xufVxuXG5mdW5jdGlvbiBzZXQgKCBuZXdTdGF0ZSApIHtcblx0dGhpcy5fc2V0KCBhc3NpZ24oIHt9LCBuZXdTdGF0ZSApICk7XG5cdHRoaXMuX3Jvb3QuX2ZsdXNoKCk7XG59XG5cbmZ1bmN0aW9uIF9mbHVzaCAoKSB7XG5cdGlmICggIXRoaXMuX3JlbmRlckhvb2tzICkgcmV0dXJuO1xuXG5cdHdoaWxlICggdGhpcy5fcmVuZGVySG9va3MubGVuZ3RoICkge1xuXHRcdHRoaXMuX3JlbmRlckhvb2tzLnBvcCgpKCk7XG5cdH1cbn1cblxudmFyIHByb3RvID0ge1xuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0X2ZsdXNoOiBfZmx1c2hcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmVEZXYsXG5cdG9uOiBvbkRldixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG5leHBvcnQgeyBkaWZmZXJzLCBkaXNwYXRjaE9ic2VydmVycywgZ2V0LCBmaXJlLCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHNldCwgX2ZsdXNoLCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRlc3Ryb3lFYWNoLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgbGluZWFyLCBnZW5lcmF0ZUtleWZyYW1lcywgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi9jb21wb25lbnRzL3N0YXJ0JztcbmltcG9ydCBGQVEgZnJvbSAnLi9jb21wb25lbnRzL2ZhcSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0JztcblxuY29uc3QgYXBwID0gbmV3IEFwcCh7XG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLFxuICBkYXRhOiB7XG4gICAgdmlld3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhYm91dCcsXG4gICAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3N0YXJ0JyxcbiAgICAgICAgdGl0bGU6ICdTdGFydCcsXG4gICAgICAgIGNvbXBvbmVudDogU3RhcnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncmVzdW1lJyxcbiAgICAgICAgdGl0bGU6ICdSZXN1bWUnLFxuICAgICAgICBjb21wb25lbnQ6IEZBUVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdwYXVzZScsXG4gICAgICAgIHRpdGxlOiAnUGF1c2UnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2ZhcScsXG4gICAgICAgIHRpdGxlOiAnRkFRJyxcbiAgICAgICAgY29tcG9uZW50OiBGQVFcbiAgICAgIH1cbiAgICBdLFxuICAgIC8vIG11c3QgbWF0Y2ggdGhlIGlkIG9mIG9uZSBvZiB0aGUgdmlld3NcbiAgICBhY3RpdmU6ICdzdGFydCdcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgICAgU3RhcnQsXG4gICAgICBBYm91dCxcbiAgICAgIEZBUVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCI8TmF2IHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSBvbjpjbGljaz0nc2V0QWN0aXZlIChldmVudC52aWV3LmlkKScvPlxuPFZpZXdDaGFuZ2VyIHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSAvPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuICAgIGltcG9ydCBWaWV3Q2hhbmdlciBmcm9tICcuL1ZpZXdDaGFuZ2VyJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5hdixcbiAgICAgICAgICAgIFZpZXdDaGFuZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24odmlld0lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe2FjdGl2ZTogdmlld0lkfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5odG1sIiwiPG5hdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAge3sjZWFjaCB2aWV3cyBhcyB2aWV3fX1cbiAgICAgICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9J2ZpcmUoXCJjbGlja1wiLCB7dmlld30pJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3t7dmlldy5pZH19J1xuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiTGluayBidG4tLW5hdiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7e3ZpZXcuaWR9fS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+e3t2aWV3LnRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAge3svZWFjaH19XG4gICAgPC9zZWN0aW9uPlxuPC9uYXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICA8ZGl2IGlkPSd7e3ZpZXcuaWR9fScgY2xhc3M9J3RhYiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fSc+PC9kaXY+XG4gICAge3svZWFjaH19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIHRoaXMuX3N0YXRlIHNlZW1zIHRvIGJlIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyB3YXkgdG8gYWNjZXNzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLnZpZXdzLmZvckVhY2goZnVuY3Rpb24odmlldykge1xuICAgICAgICAgICAgICAgIG5ldyB2aWV3LmNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5pZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVmlld0NoYW5nZXIuaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=