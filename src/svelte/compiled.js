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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dispatchObservers; });
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachNode; });
/* unused harmony export detachBetween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createText; });
/* unused harmony export createComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setAttribute; });
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export linear */
/* unused harmony export generateKeyframes */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* unused harmony export noop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return assign; });
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


var app = new __WEBPACK_IMPORTED_MODULE_0__components_App__["a" /* default */]({
    target: document.querySelector('#app'),
    data: {
        views: [{
            id: 'about',
            name: 'about',
            title: 'About',
            active: false
        }, {
            id: 'start',
            name: 'start',
            title: 'Start',
            active: true
        }, {
            id: 'resume',
            name: 'resume',
            title: 'Resume',
            active: false
        }, {
            id: 'pause',
            name: 'pause',
            title: 'Pause',
            active: false
        }, {
            id: 'faq',
            name: 'faq',
            title: 'FAQ',
            active: false
        }],
        active: 'start'
    }

});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);





var template = function () {
	return {
		methods: {
			setActive: function setActive(viewName) {
				console.log(viewName);
				this.set({ active: viewName });
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
		component.setActive(event.view.name);
	});

	component._bindings.push(function () {
		if (nav._torndown) return;
		nav.observe('active', function (value) {
			if (nav_updating) return;
			nav_updating = true;
			component._set({ active: value });
			nav_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* differs */])(nav.get('active'), state.active) });
	});

	nav._context = {
		state: state
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* createText */])("\n");

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
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* differs */])(viewchanger.get('active'), state.active) });
	});

	viewchanger._context = {
		state: state
	};

	return {
		mount: function mount(target, anchor) {
			nav._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* insertNode */])(text, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* detachNode */])(text);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])(App.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* proto */]);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var nav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* createElement */])('nav');
	var section = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* createElement */])('section');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* appendNode */])(section, nav);
	section.className = "header-container";
	var each_block_value = state.views;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
		each_block_iterations[i].mount(section, null);
	}

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* insertNode */])(nav, target, anchor);
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* detachNode */])(nav);
			}
		}
	};
}

function create_each_block(state, each_block_value, view, view_index, component) {
	var button_name_value, button_data_template_value, button_class_value, button_id_value, text_value;

	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* setAttribute */])(button, 'role', "button");
	button.name = button_name_value = view.name;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* setAttribute */])(button, 'data-template', button_data_template_value = view.name);
	button.className = button_class_value = "tabLink btn--nav " + (state.active === view.name ? 'active' : '');
	button.id = button_id_value = "" + view.name + "-button";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* setAttribute */])(button, 'href', "#");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* addEventListener */])(button, 'click', click_handler);

	button._svelte = {
		component: component,
		each_block_value: each_block_value,
		view_index: view_index
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* createText */])(text_value = view.title);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* appendNode */])(text, button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* insertNode */])(button, target, anchor);
		},

		update: function update(changed, state, each_block_value, view, view_index) {
			if (button_name_value !== (button_name_value = view.name)) {
				button.name = button_name_value;
			}

			if (button_data_template_value !== (button_data_template_value = view.name)) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* setAttribute */])(button, 'data-template', button_data_template_value);
			}

			if (button_class_value !== (button_class_value = "tabLink btn--nav " + (state.active === view.name ? 'active' : ''))) {
				button.className = button_class_value;
			}

			if (button_id_value !== (button_id_value = "" + view.name + "-button")) {
				button.id = button_id_value;
			}

			button._svelte.each_block_value = each_block_value;
			button._svelte.view_index = view_index;

			if (text_value !== (text_value = view.title)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["m" /* removeEventListener */])(button, 'click', click_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* detachNode */])(button);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])(Nav.prototype, __WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* proto */]);

Nav.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* createElement */])('div');
	var each_block_value = state.views;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
		each_block_iterations[i].mount(div, null);
	}

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* insertNode */])(div, target, anchor);
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* detachNode */])(div);
			}
		}
	};
}

function create_each_block(state, each_block_value, view, view_index, component) {
	var div_id_value, div_class_value, text_value;

	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* createElement */])('div');
	div.id = div_id_value = view.id;
	div.className = div_class_value = "tab " + (state.active === view.name ? 'active' : '');
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* createText */])(text_value = view.name);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* appendNode */])(text, div);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* insertNode */])(div, target, anchor);
		},

		update: function update(changed, state, each_block_value, view, view_index) {
			if (div_id_value !== (div_id_value = view.id)) {
				div.id = div_id_value;
			}

			if (div_class_value !== (div_class_value = "tab " + (state.active === view.name ? 'active' : ''))) {
				div.className = div_class_value;
			}

			if (text_value !== (text_value = view.name)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* detachNode */])(div);
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
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])(ViewChanger.prototype, __WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* proto */]);

ViewChanger.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_C_Users_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTczMGVjZTEwNjJlMzY1NjkxNTYiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld0NoYW5nZXIuaHRtbCJdLCJuYW1lcyI6WyJhcHAiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhIiwidmlld3MiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDRmhEOzs7Ozs7Ozs7Ozs7Ozs7Z0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBQ00sS0FBRzttREFBdUIsV0FBUyxLQUFLLE9BQVcsV0FBSztpS0FBVSxLQUFLOzs7Ozs7Ozs7d0NBQXZFLEtBQUc7Ozs7OERBQXVCLFdBQVMsS0FBSyxPQUFXLFdBQUs7Ozs7b0NBQVUsS0FBSyIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTczMGVjZTEwNjJlMzY1NjkxNTYiLCJmdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbiAoIHRhcmdldCApIHtcblx0Zm9yICggdmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cdFx0Zm9yICggdmFyIGsgaW4gc291cmNlICkgdGFyZ2V0W2tdID0gc291cmNlW2tdO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZSAoIG5vZGUsIHRhcmdldCApIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUgKCBub2RlLCB0YXJnZXQsIGFuY2hvciApIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZSggbm9kZSwgYW5jaG9yICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUgKCBub2RlICkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbiAoIGJlZm9yZSwgYWZ0ZXIgKSB7XG5cdHdoaWxlICggYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIgKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGJlZm9yZS5uZXh0U2libGluZyApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoICggaXRlcmF0aW9ucywgZGV0YWNoLCBzdGFydCApIHtcblx0Zm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBpdGVyYXRpb25zW2ldICkgaXRlcmF0aW9uc1tpXS5kZXN0cm95KCBkZXRhY2ggKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICggbmFtZSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dCAoIGRhdGEgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggZGF0YSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoICcnICk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lciAoIG5vZGUsIGV2ZW50LCBoYW5kbGVyICkge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50LCBoYW5kbGVyLCBmYWxzZSApO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZSggYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZSAoIG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSApO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZSAoIGdyb3VwICkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aWYgKCBncm91cFtpXS5jaGVja2VkICkgdmFsdWUucHVzaCggZ3JvdXBbaV0uX192YWx1ZSApO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbGluZWFyICggdCApIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlS2V5ZnJhbWVzICggYSwgYiwgZGVsdGEsIGR1cmF0aW9uLCBlYXNlLCBmbiwgbm9kZSwgc3R5bGUgKSB7XG5cdHZhciBpZCA9ICdfX3N2ZWx0ZScgKyB+figgTWF0aC5yYW5kb20oKSAqIDFlOSApOyAvLyBUT0RPIG1ha2UgdGhpcyBtb3JlIHJvYnVzdFxuXHR2YXIga2V5ZnJhbWVzID0gJ0BrZXlmcmFtZXMgJyArIGlkICsgJ3tcXG4nO1xuXG5cdGZvciAoIHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uICkge1xuXHRcdHZhciB0ID0gYSArIGRlbHRhICogZWFzZSggcCApO1xuXHRcdGtleWZyYW1lcyArPSAoIHAgKiAxMDAgKSArICcleycgKyBmbiggdCApICsgJ31cXG4nO1xuXHR9XG5cblx0a2V5ZnJhbWVzICs9ICcxMDAlIHsnICsgZm4oIGIgKSArICd9XFxufSc7XG5cdHN0eWxlLnRleHRDb250ZW50ICs9IGtleWZyYW1lcztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApO1xuXG5cdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24uc3BsaXQoICcsJyApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24gKCBhbmltICkge1xuXHRcdFx0Ly8gd2hlbiBpbnRyb2luZywgZGlzY2FyZCBvbGQgYW5pbWF0aW9ucyBpZiB0aGVyZSBhcmUgYW55XG5cdFx0XHRyZXR1cm4gYW5pbSAmJiAoIGRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KCBhbmltICkgKTtcblx0XHR9KVxuXHRcdC5jb25jYXQoIGlkICsgJyAnICsgZHVyYXRpb24gKyAnbXMgbGluZWFyIDEgZm9yd2FyZHMnIClcblx0XHQuam9pbiggJywgJyApO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbiAoIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCApIHtcblx0dmFyIG9iaiA9IGZuKCBub2RlLCBwYXJhbXMgKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAoIG9iai5jc3MgKSB7XG5cdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuXHR9XG5cblx0aWYgKCBpbnRybyAmJiBvYmoudGljayApIG9iai50aWNrKCAwICk7XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uICggaW50cm8sIGNhbGxiYWNrICkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAoIG9iai5kZWxheSB8fCAwICksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIG9iai5kZWxheSApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQoIHByb2dyYW0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQoIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0YXJ0OiBmdW5jdGlvbiAoIHByb2dyYW0gKSB7XG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmIgPSBwcm9ncmFtLmludHJvID8gMSA6IDA7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMoIHByb2dyYW0uYiAtIHByb2dyYW0uYSApO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKCBvYmouY3NzICkge1xuXHRcdFx0XHRnZW5lcmF0ZUtleWZyYW1lcyggcHJvZ3JhbS5hLCBwcm9ncmFtLmIsIHByb2dyYW0uZGVsdGEsIHByb2dyYW0uZHVyYXRpb24sIGVhc2UsIG9iai5jc3MsIG5vZGUsIHN0eWxlICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIG5vdyApIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCAhcHJvZ3JhbSApIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UoIHAgLyBwcm9ncmFtLmR1cmF0aW9uICk7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy50ID0gdGhpcy5wcm9ncmFtLmI7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICggb2JqLnRpY2sgKSBvYmoudGljayggMSApO1xuXHRcdFx0aWYgKCBvYmouY3NzICkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCggc3R5bGUgKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblxuXHRhZGQ6IGZ1bmN0aW9uICggdHJhbnNpdGlvbiApIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5wdXNoKCB0cmFuc2l0aW9uICk7XG5cblx0XHRpZiAoICF0aGlzLnJ1bm5pbmcgKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciBpID0gdHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQoIHRyYW5zaXRpb24ucGVuZGluZyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucnVubmluZyApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUoIG5vdyApO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoICF0cmFuc2l0aW9uLnBlbmRpbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyApIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggdHJhbnNpdGlvbk1hbmFnZXIubmV4dCApO1xuXHRcdH1cblx0fVxufTtcblxuZnVuY3Rpb24gZGlmZmVycyAoIGEsIGIgKSB7XG5cdHJldHVybiAoIGEgIT09IGIgKSB8fCAoIGEgJiYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgKSB8fCAoIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICkgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMgKCBjb21wb25lbnQsIGdyb3VwLCBuZXdTdGF0ZSwgb2xkU3RhdGUgKSB7XG5cdGZvciAoIHZhciBrZXkgaW4gZ3JvdXAgKSB7XG5cdFx0aWYgKCAhKCBrZXkgaW4gbmV3U3RhdGUgKSApIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVbIGtleSBdO1xuXHRcdHZhciBvbGRWYWx1ZSA9IG9sZFN0YXRlWyBrZXkgXTtcblxuXHRcdGlmICggZGlmZmVycyggbmV3VmFsdWUsIG9sZFZhbHVlICkgKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gZ3JvdXBbIGtleSBdO1xuXHRcdFx0aWYgKCAhY2FsbGJhY2tzICkgY29udGludWU7XG5cblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLl9fY2FsbGluZyApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbXBvbmVudCwgbmV3VmFsdWUsIG9sZFZhbHVlICk7XG5cdFx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXQgKCBrZXkgKSB7XG5cdHJldHVybiBrZXkgPyB0aGlzLl9zdGF0ZVsga2V5IF0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmlyZSAoIGV2ZW50TmFtZSwgZGF0YSApIHtcblx0dmFyIGhhbmRsZXJzID0gZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXS5zbGljZSgpO1xuXHRpZiAoICFoYW5kbGVycyApIHJldHVybjtcblxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKCB0aGlzLCBkYXRhICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSAoIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKSB7XG5cdHZhciBncm91cCA9ICggb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyICkgPyB0aGlzLl9vYnNlcnZlcnMucG9zdCA6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KCBncm91cFsga2V5IF0gfHwgKCBncm91cFsga2V5IF0gPSBbXSApICkucHVzaCggY2FsbGJhY2sgKTtcblxuXHRpZiAoICFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UgKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKCB0aGlzLCB0aGlzLl9zdGF0ZVsga2V5IF0gKTtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFsga2V5IF0uaW5kZXhPZiggY2FsbGJhY2sgKTtcblx0XHRcdGlmICggfmluZGV4ICkgZ3JvdXBbIGtleSBdLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgYyA9ICgga2V5ID0gJycgKyBrZXkgKS5zZWFyY2goIC9bXlxcd10vICk7XG5cdGlmICggYyA+IC0xICkge1xuXHRcdHZhciBtZXNzYWdlID0gXCJUaGUgZmlyc3QgYXJndW1lbnQgdG8gY29tcG9uZW50Lm9ic2VydmUoLi4uKSBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgdG9wLWxldmVsIHByb3BlcnR5XCI7XG5cdFx0aWYgKCBjID4gMCApIG1lc3NhZ2UgKz0gXCIsIGkuZS4gJ1wiICsga2V5LnNsaWNlKCAwLCBjICkgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBvYnNlcnZlLmNhbGwoIHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKTtcbn1cblxuZnVuY3Rpb24gb24gKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkgcmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSB8fCAoIHRoaXMuX2hhbmRsZXJzWyBldmVudE5hbWUgXSA9IFtdICk7XG5cdGhhbmRsZXJzLnB1c2goIGhhbmRsZXIgKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZiggaGFuZGxlciApO1xuXHRcdFx0aWYgKCB+aW5kZXggKSBoYW5kbGVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkRldiAoIGV2ZW50TmFtZSwgaGFuZGxlciApIHtcblx0aWYgKCBldmVudE5hbWUgPT09ICd0ZWFyZG93bicgKSB7XG5cdFx0Y29uc29sZS53YXJuKCBcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiICk7XG5cdFx0cmV0dXJuIHRoaXMub24oICdkZXN0cm95JywgaGFuZGxlciApO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwoIHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlciApO1xufVxuXG5mdW5jdGlvbiBzZXQgKCBuZXdTdGF0ZSApIHtcblx0dGhpcy5fc2V0KCBhc3NpZ24oIHt9LCBuZXdTdGF0ZSApICk7XG5cdHRoaXMuX3Jvb3QuX2ZsdXNoKCk7XG59XG5cbmZ1bmN0aW9uIF9mbHVzaCAoKSB7XG5cdGlmICggIXRoaXMuX3JlbmRlckhvb2tzICkgcmV0dXJuO1xuXG5cdHdoaWxlICggdGhpcy5fcmVuZGVySG9va3MubGVuZ3RoICkge1xuXHRcdHRoaXMuX3JlbmRlckhvb2tzLnBvcCgpKCk7XG5cdH1cbn1cblxudmFyIHByb3RvID0ge1xuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0X2ZsdXNoOiBfZmx1c2hcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmVEZXYsXG5cdG9uOiBvbkRldixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG5leHBvcnQgeyBkaWZmZXJzLCBkaXNwYXRjaE9ic2VydmVycywgZ2V0LCBmaXJlLCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHNldCwgX2ZsdXNoLCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRlc3Ryb3lFYWNoLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgbGluZWFyLCBnZW5lcmF0ZUtleWZyYW1lcywgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICAgIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLFxuICAgIGRhdGE6IHtcbiAgICAgICAgdmlld3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXQnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YXJ0JyxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdyZXN1bWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXN1bWUnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVzdW1lJyxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAncGF1c2UnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXVzZScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQYXVzZScsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2ZhcScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZhcScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGQVEnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYWN0aXZlOiAnc3RhcnQnXG4gICAgfVxuXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCI8TmF2IHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSBvbjpjbGljaz0nc2V0QWN0aXZlIChldmVudC52aWV3Lm5hbWUpJy8+XG48Vmlld0NoYW5nZXIgdmlld3M9e3t2aWV3c319IGJpbmQ6YWN0aXZlIC8+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG4gICAgaW1wb3J0IFZpZXdDaGFuZ2VyIGZyb20gJy4vVmlld0NoYW5nZXInO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTmF2LFxuICAgICAgICAgICAgVmlld0NoYW5nZXJcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbih2aWV3TmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7YWN0aXZlOiB2aWV3TmFtZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAuaHRtbCIsIjxuYXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIHt7I2VhY2ggdmlld3MgYXMgdmlld319XG4gICAgICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBvbjpjbGljaz0nZmlyZShcImNsaWNrXCIsIHt2aWV3fSknIG5hbWU9J3t7dmlldy5uYW1lfX0nIGRhdGEtdGVtcGxhdGU9XCJ7e3ZpZXcubmFtZX19XCIgY2xhc3M9XCJ0YWJMaW5rIGJ0bi0tbmF2IHt7YWN0aXZlID09PSB2aWV3Lm5hbWUgPyAnYWN0aXZlJyA6ICcnfX1cIiBpZD1cInt7dmlldy5uYW1lfX0tYnV0dG9uXCIgaHJlZj1cIiNcIj57e3ZpZXcudGl0bGV9fTwvYnV0dG9uPlxuICAgICAgICB7ey9lYWNofX1cbiAgICA8L3NlY3Rpb24+XG48L25hdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdi5odG1sIiwiPGRpdj5cbiAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICA8ZGl2IGlkPSd7e3ZpZXcuaWR9fScgY2xhc3M9J3RhYiB7e2FjdGl2ZSA9PT0gdmlldy5uYW1lID8gJ2FjdGl2ZScgOiAnJ319Jz57e3ZpZXcubmFtZX19PC9kaXY+XG4gICAge3svZWFjaH19XG48L2Rpdj5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9WaWV3Q2hhbmdlci5odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==