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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dispatchObservers; });
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return detachNode; });
/* unused harmony export detachBetween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createText; });
/* unused harmony export createComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setAttribute; });
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export linear */
/* unused harmony export generateKeyframes */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* unused harmony export noop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return assign; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function add_css() {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('style');
	style.id = "svelte-691425387-style";
	style.textContent = "\n    \n    \n\n    [svelte-691425387].spinner, [svelte-691425387] .spinner {\n        -webkit-animation: icon-spin 0.75s infinite linear;\n        animation: svelte-691425387-icon-spin 0.75s infinite linear;\n        width: 1em;\n        height: 1em;\n        border: 0.25em solid #777;\n        border-right-color: #7CB7DE;\n        border-radius: 50%;\n        display: inline-block;\n    }\n\n\n    \n\n    @-webkit-keyframes icon-spin {\n        [svelte-691425387]0%, [svelte-691425387] 0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        [svelte-691425387]100%, [svelte-691425387] 100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes svelte-691425387-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(style, document.head);
}

function create_main_fragment(state, component) {
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(span, 'svelte-691425387', '');
	span.className = "rotate-contents";
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(i, span);
	i.className = "spinner";

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(span, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(span);
			}
		}
	};
}

function Spinner(options) {
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
	if (!document.getElementById("svelte-691425387-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Spinner.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Spinner.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Spinner.prototype.teardown = Spinner.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);




var template = function () {
	/**
  * Provides functionality used for the "Select Folder"
  * textboxes, which automatically find folder metadata when a URL 
  * is pasted into them.  The textboxes can handle pasting via 'Ctrl+V',
  * or right-clicking and selecting "Paste" from the context menu. 
  */

	// Requires
	var picker = __webpack_require__(17);
	var parseId = __webpack_require__(16);

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

			google.script.run.withSuccessHandler(function (metadata) {
				// save metadata to picker.folder
				picker.setSelectedFolder({
					srcId: metadata.id,
					srcParentId: metadata.parents[0].id,
					srcName: metadata.title,
					destName: 'Copy of ' + metadata.title
				});
			}).withFailureHandler(function (msg) {
				$('.folderSelect').hide();
				$('.folderLookup').hide();
				$('.selectedFolderInfo').show();
				$('.getFolderErrors').text('Error: ' + msg + '<br>You may not have permission to copy this folder.').show();
			}).getMetadata(id);
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
}();

function create_main_fragment(state, component) {
	var text_value;

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(text_value = state.selectText);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "folderSelect";
	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(button, div);
	button.type = "button";
	button.id = "selectFolderButton";
	button.className = "btn btn--small selectFolderButton";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Select Folder"), button);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    or\n    "), div);
	var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label, div);
	label.htmlFor = "newFolder";
	label.className = "textfield";
	var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input, label);
	input.type = "text";
	input.id = "folderTextbox";
	input.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n        "), label);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span, label);
	span.className = "textfield__label";

	function mouseup_handler(event) {
		component.handleMouse(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(span, 'mouseup', mouseup_handler);

	function keyup_handler(event) {
		component.handleKey(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(span, 'keyup', keyup_handler);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Paste folder URL (Ctrl-V)"), span);
	var text_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.className = "getFolderErrors";
	var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");

	var if_block = state.findingFolder && create_if_block(state, component);

	var text_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n\n");
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_2.className = "selectedFolderInfo";
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_1, div_2);
	span_1.className = "folderName";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("   \n    "), div_2);
	var button_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(button_1, div_2);
	button_1.type = "reset";
	button_1.className = "btn  btn--small selectOtherFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Select other folder"), button_1);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_7, target, anchor);
			if (if_block) if_block.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_8, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_2, target, anchor);
		},

		update: function update(changed, state) {
			if (text_value !== (text_value = state.selectText)) {
				text.data = text_value;
			}

			if (state.findingFolder) {
				if (!if_block) {
					if_block = create_if_block(state, component);
					if_block.mount(text_8.parentNode, text_8);
				}
			} else if (if_block) {
				if_block.destroy(true);
				if_block = null;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(span, 'mouseup', mouseup_handler);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(span, 'keyup', keyup_handler);
			if (if_block) if_block.destroy(detach);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_8);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_2);
			}
		}
	};
}

function create_if_block(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "folderLookup";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Finding folder..."), div);

	var spinner = new __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__["a" /* default */]({
		target: div,
		_root: component._root
	});

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
		},

		destroy: function destroy(detach) {
			spinner.destroy(false);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
			}
		}
	};
}

function SelectFolder(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(SelectFolder.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

SelectFolder.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	this._flush();
};

SelectFolder.prototype.teardown = SelectFolder.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (SelectFolder);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var text_value;

	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	button.type = "submit";
	button.className = "btn";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(text_value = state.buttonText);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(text, button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(button, target, anchor);
		},

		update: function update(changed, state) {
			if (text_value !== (text_value = state.buttonText)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(button);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(SubmitButton.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

SubmitButton.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

SubmitButton.prototype.teardown = SubmitButton.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (SubmitButton);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Resume__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Pause__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FAQ__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_icons_Spinner__ = __webpack_require__(1);








var app = new __WEBPACK_IMPORTED_MODULE_0__components_App__["a" /* default */]({
  target: document.querySelector('#app'),
  data: {
    views: [{
      id: 'about',
      title: 'About',
      component: __WEBPACK_IMPORTED_MODULE_1__components_About__["a" /* default */]
    }, {
      id: 'start',
      title: 'Start',
      component: __WEBPACK_IMPORTED_MODULE_2__components_Start__["a" /* default */]
    }, {
      id: 'resume',
      title: 'Resume',
      component: __WEBPACK_IMPORTED_MODULE_3__components_Resume__["a" /* default */]
    }, {
      id: 'pause',
      title: 'Pause',
      component: __WEBPACK_IMPORTED_MODULE_4__components_Pause__["a" /* default */]
    }, {
      id: 'faq',
      title: 'FAQ',
      component: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__["a" /* default */]
    }],
    // must match the id of one of the views
    active: 'start'
  },
  components: {
    About: __WEBPACK_IMPORTED_MODULE_1__components_About__["a" /* default */],
    Start: __WEBPACK_IMPORTED_MODULE_2__components_Start__["a" /* default */],
    Resume: __WEBPACK_IMPORTED_MODULE_3__components_Resume__["a" /* default */],
    Pause: __WEBPACK_IMPORTED_MODULE_4__components_Pause__["a" /* default */],
    FAQ: __WEBPACK_IMPORTED_MODULE_5__components_FAQ__["a" /* default */]
  }
});

var spinner = new __WEBPACK_IMPORTED_MODULE_6__components_icons_Spinner__["a" /* default */]({
  target: document.getElementById('spinner')
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var h3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("General info"), h3);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder."), p);
	var text_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level."), p_1);
	var text_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."), p_2);
	var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("This app is licensed under the "), p_3);
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a, p_3);
	a.href = "https://opensource.org/licenses/BSD-3-Clause";
	a.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("3-clause BSD License"), a);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(".  Feel free to reuse or distribute this code in any way \n    you see fit. You can find the most up-to-date source code on "), p_3);
	var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_1, p_3);
	a_1.href = "http://www.github.com/ericyd/gdrive-copy";
	a_1.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Github"), a_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("."), p_3);
	var text_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("If you would like to run your own version of the code but do not come from a technical background, you can \n    follow "), p_4);
	var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_2, p_4);
	a_2.href = "https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md";
	a_2.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("this guide"), a_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" to launch your own, private version of the app."), p_4);
	var text_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var h3_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Getting started"), h3_1);
	var text_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("To get started, simply select your folder and choose a new name, then select Copy Folder!"), p_5);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br, p_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    If the folder copy get's stuck, simply use the \"Resume prior folder copy\" button, then select the copy of \n    your folder."), p_5);
	var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var h3_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h3');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("When issues arise..."), h3_2);
	var text_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var p_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for \n    whatever reason, simply select the "), p_6);
	var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(b, p_6);
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(i, b);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("new, incomplete copy"), i);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" of the folder and select \"Resume \n    copying\"."), p_6);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_13, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_17, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h3_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_19, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h3_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_24, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_6, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_13);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_17);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h3_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_19);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h3_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_24);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_6);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(About.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

About.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);




var template = function () {
	return {
		data: function data() {
			return {
				// process.env.NODE_ENV is passed in via a webpack plugin
				env: "development",
				message: 'Logged in as ',
				processing: true
			};
		},
		oncreate: function oncreate() {
			// get user email and put it in the account box
			var self = this;
			try {
				google.script.run.withSuccessHandler(function (email) {
					self.set({
						message: 'Logged in as ' + email + '.',
						processing: false
					});
				}).withFailureHandler(function (err) {
					self.set({
						message: 'Error retrieving active account.',
						processing: false
					});
				}).getUserEmail();
			} catch (err) {
				self.set({
					message: 'Error retrieving active account',
					processing: false
				});
			}
		}
	};
}();

function create_main_fragment(state, component) {
	var text_value;

	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "change-account__box";
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span, div);
	span.className = "userEmail";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(text_value = state.message);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(text, span);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n        "), span);

	var if_block = state.processing && create_if_block(state, component);

	if (if_block) if_block.mount(span, null);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    "), div);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    "), div);

	function get_block(state) {
		if (state.env === 'production') return create_if_block_1;
		return create_if_block_2;
	}

	var current_block = get_block(state);
	var if_block_1 = current_block(state, component);

	if_block_1.mount(div, null);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
			}
		}
	};
}

function create_if_block(state, component) {
	var spinner = new __WEBPACK_IMPORTED_MODULE_0__icons_Spinner__["a" /* default */]({
		target: null,
		_root: component._root
	});

	return {
		mount: function mount(target, anchor) {
			spinner._fragment.mount(target, anchor);
		},

		destroy: function destroy(detach) {
			spinner.destroy(detach);
		}
	};
}

function create_if_block_1(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a.target = "_blank";
	a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbxbGNGajrxv-HbX2sVY2OTu7yj9VvxlOMOeQblZFuq7rYm7uyo/exec";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Click here"), a);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" to log in with a different account.");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_1, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_1);
			}
		}
	};
}

function create_if_block_2(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a.target = "_blank";
	a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbzKJQO5CBf7WDmrYo8FGDb20YWfoIyUZZhsbF844SI/dev";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Click here"), a);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" to log in with a different account.");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_1, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_1);
			}
		}
	};
}

function AccountSwitcher(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(template.data(), options.data);

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

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(AccountSwitcher.prototype, __WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

AccountSwitcher.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	this._flush();
};

AccountSwitcher.prototype.teardown = AccountSwitcher.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (AccountSwitcher);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);






var template = function () {
	return {
		methods: {
			setActive: function setActive(viewId) {
				this.set({ active: viewId });
			}
		},
		oncreate: function oncreate() {
			// add Account Switcher to header
			var acctSwitcher = new __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__["a" /* default */]({
				target: document.getElementById('change-account')
			});
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
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["m" /* differs */])(nav.get('active'), state.active) });
	});

	nav._context = {
		state: state
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");

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
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["m" /* differs */])(viewchanger.get('active'), state.active) });
	});

	viewchanger._context = {
		state: state
	};

	return {
		mount: function mount(target, anchor) {
			nav._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text);
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

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(App.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a, 'name', "top");
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var ul = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ul');
	var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li, ul);
	var a_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_1, li);
	a_1.href = "#longerThan2Mins";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), a_1);
	var li_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_1, ul);
	var a_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_2, li_1);
	a_2.href = "#copyBetweenDomains";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Can I use this app to copy a folder between domains?"), a_2);
	var li_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_2, ul);
	var a_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_3, li_2);
	a_3.href = "#whenIsItDone";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I know when it is done?"), a_3);
	var li_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_3, ul);
	var a_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_4, li_3);
	a_4.href = "#notEverythingCopied";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("It didn't copy everything - what do I do?"), a_4);
	var li_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_4, ul);
	var a_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_5, li_4);
	a_5.href = "#multipleAccounts";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I sign into a different account with this app?"), a_5);
	var li_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_5, ul);
	var a_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_6, li_5);
	a_6.href = "#infiniteLoop";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("HELP! The copying is stuck in an infinite loop!  What do I do?"), a_6);
	var li_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_6, ul);
	var a_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_7, li_6);
	a_7.href = "#uninstall";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I unintall the app and remove all permissions?"), a_7);
	var li_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_7, ul);
	var a_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_8, li_7);
	a_8.href = "#openissue";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I report a bug in the app?"), a_8);
	var text_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var h4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_9, h4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_9, 'name', "longerThan2Mins");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), h4);
	var text_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("When the app stops, you can use the \"Resume\" button to restart the copying.  When selecting the folder to resume, you must select the "), div);
	var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(b, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("in-progress"), b);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" folder, "), div);
	var b_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('b');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(b_1, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("not"), b_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" the original."), div);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br, div);
	var br_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br_1, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    For example, if you are creating a copy of \"Folder A\" called \"Copy of Folder A\", you should select \"Copy of Folder A\" when you resume the copying.  Selecting the original folder will return an error."), div);
	var text_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_10.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_10);
	var text_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var h4_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_11, h4_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_11, 'name', "copyBetweenDomains");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Can I use this app to copy a folder between domains?"), h4_1);
	var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Yes!  Follow the steps below:\n    "), div_1);
	var ol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(ol, div_1);
	var li_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_8, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Log into the account that owns the folder (\"Account 1\")"), li_8);
	var li_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_9, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Share the folder with the domain to which you'd like to copy (\"Account 2\")"), li_9);
	var li_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_10, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Open an private/incognito window and log into Account 2"), li_10);
	var li_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_11, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Go to the \"Shared with me\" section, right click the folder, and select \"Add to Drive\""), li_11);
	var li_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_12, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Open the app, and select the folder that has been shared"), li_12);
	var li_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_13, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Create a copy and Account 2 will now be the owner"), li_13);
	var text_30 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_12.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_12);
	var text_32 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var h4_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_13, h4_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_13, 'name', "whenIsItDone");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I know when it is done?"), h4_2);
	var text_34 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_2.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("You will know it is complete when the Copy Log says \"Complete\" in cell C2.  In addition, the cell will highlight green."), div_2);
	var text_36 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_14.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_14);
	var text_38 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var h4_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_15, h4_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_15, 'name', "notEverythingCopied");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("It didn't copy everything - what do I do?"), h4_3);
	var text_40 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_3.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    "), div_3);
	var ol_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(ol_1, div_3);
	var li_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_14, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Audit the Copy Log for any errors, and manually copy those files"), li_14);
	var li_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_15, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors"), li_15);
	var text_44 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_16.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_16);
	var text_46 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var h4_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_17, h4_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_17, 'name', "multipleAccounts");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I sign into a different account with this app?"), h4_4);
	var text_48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_4.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account."), div_4);
	var br_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br_2, div_4);
	var br_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br_3, div_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\n    \n    "), div_4);
	var br_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br_4, div_4);
	var br_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br_5, div_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("*If you think this is a good feature, please feel free to open an\n    "), div_4);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span, div_4);
	span.className = "github-button-wrapper";
	var a_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_18, span);
	a_18.className = "github-button";
	a_18.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_18, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_18, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_18, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Issue"), a_18);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"), div_4);
	var text_54 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_19.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_19);
	var text_56 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var h4_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_20, h4_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_20, 'name', "infiniteLoop");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("HELP! The copying is stuck in an infinite loop!  What do I do?"), h4_5);
	var text_58 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_5.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Please use the \"Pause\" function built into the app and "), div_5);
	var a_21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_21, div_5);
	a_21.href = "https://github.com/ericyd/gdrive-copy/issues";
	a_21.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("report the bug"), a_21);
	var text_61 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_22.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_22);
	var text_63 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var h4_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_23, h4_6);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_23, 'name', "uninstall");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I unintall the app and remove all permissions?"), h4_6);
	var text_65 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_6.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("To quote "), div_6);
	var a_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_24, div_6);
	a_24.href = "https://webapps.stackexchange.com/questions/30841/how-do-i-remove-permission-from-an-app-that-i-gave-google-oauth-access-to";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("the excellent answer on stackexchange:"), a_24);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n    "), div_6);
	var ol_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(ol_2, div_6);
	var li_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_16, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Go to "), li_16);
	var a_25 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_25, li_16);
	a_25.href = "https://accounts.google.com";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("accounts.google.com"), a_25);
	var li_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_17, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Under \"Sign-in & security\" tab click \"Connected apps & sites\""), li_17);
	var li_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_18, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Under the section \"Apps connected to your account\", click on MANAGE APPS:"), li_18);
	var li_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(li_19, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Select app you want & click REMOVE button"), li_19);
	var text_74 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_26 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_26.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_26);
	var text_76 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var h4_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_27 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_27, h4_7);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_27, 'name', "openissue");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("How do I report a bug in the app?"), h4_7);
	var text_78 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var div_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_7.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("If you have found a bug that is not covered in these FAQs, please open an\n    "), div_7);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_1, div_7);
	span_1.className = "github-button-wrapper";
	var a_28 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(a_28, span_1);
	a_28.className = "github-button";
	a_28.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_28, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_28, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(a_28, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Issue"), a_28);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" on Github."), div_7);
	var text_82 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var a_29 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_29.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Top"), a_29);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(ul, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_9, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_11, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_18, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_10, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_20, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_30, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_12, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_32, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_34, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_36, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_14, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_38, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_40, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_44, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_16, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_46, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_48, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_54, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_19, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_56, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_58, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_61, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_63, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_65, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_74, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_26, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_76, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(h4_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_78, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_82, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(a_29, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(ul);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_9);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_11);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_18);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_10);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_20);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_30);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_12);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_32);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_34);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_36);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_14);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_38);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_40);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_44);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_16);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_46);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_48);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_54);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_19);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_56);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_58);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_61);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_63);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_65);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_74);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_26);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_76);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(h4_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_78);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_82);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(a_29);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(FAQ.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

FAQ.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

FAQ.prototype.teardown = FAQ.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (FAQ);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var nav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('nav');
	var section = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('section');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(section, nav);
	section.className = "header-container";
	var each_block_value = state.views;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
		each_block_iterations[i].mount(section, null);
	}

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(nav, target, anchor);
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(nav);
			}
		}
	};
}

function create_each_block(state, each_block_value, view, view_index, component) {
	var button_name_value, button_class_value, button_id_value, text_value;

	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(button, 'role', "button");
	button.name = button_name_value = view.id;
	button.className = button_class_value = "tabLink btn--nav " + (state.active === view.id ? 'active' : '');
	button.id = button_id_value = "" + view.id + "-button";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(button, 'href', "#");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(button, 'click', click_handler);

	button._svelte = {
		component: component,
		each_block_value: each_block_value,
		view_index: view_index
	};

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(text_value = view.title);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(text, button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(button, target, anchor);
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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(button, 'click', click_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(button);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Nav.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Nav.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = function () {
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
}();

function create_main_fragment(state, component) {
	var text_value;

	var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(text_value = state.message);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(text, p);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n");
	var p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');

	var if_block = state.showButton && create_if_block(state, component);

	if (if_block) if_block.mount(p_1, null);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(p_1, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(p_1);
			}
		}
	};
}

function create_if_block(state, component) {
	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	button.type = "button";
	button.className = "btn btn--small";

	function click_handler(event) {
		component.handleClick(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(button, 'click', click_handler);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Yes, I want to stop all my current instances of Copy Folder"), button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(button, target, anchor);
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(button, 'click', click_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(button);
			}
		}
	};
}

function Pause(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Pause.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Pause.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Pause.prototype.teardown = Pause.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Pause);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectFolder__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubmitButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);





var template = function () {
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
}();

function create_main_fragment(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.id = "resume-validation-errors";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.id = "resume-form-div";
	div_1.className = "form-div";
	var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('form');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(form, div_1);
	form.id = "resumeForm";
	form.name = "resumeForm";
	form.className = "form-horizontal";

	function submit_handler(event) {
		component.handleSubmit(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(form, 'submit', submit_handler);

	var selectfolder = new __WEBPACK_IMPORTED_MODULE_0__SelectFolder__["a" /* default */]({
		target: form,
		_root: component._root,
		data: { selectText: state.selectText }
	});

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" \n        "), form);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br, form);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n        \n        "), form);

	var submitbutton = new __WEBPACK_IMPORTED_MODULE_1__SubmitButton__["a" /* default */]({
		target: form,
		_root: component._root,
		data: { buttonText: state.buttonText }
	});

	submitbutton.on('click', function (event) {
		component.handleClick(event);
	});

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_1, target, anchor);
		},

		update: function update(changed, state) {
			var selectfolder_changes = {};

			if ('selectText' in changed) selectfolder_changes.selectText = state.selectText;

			if (Object.keys(selectfolder_changes).length) selectfolder.set(selectfolder_changes);

			var submitbutton_changes = {};

			if ('buttonText' in changed) submitbutton_changes.buttonText = state.buttonText;

			if (Object.keys(submitbutton_changes).length) submitbutton.set(submitbutton_changes);
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(form, 'submit', submit_handler);
			selectfolder.destroy(false);
			submitbutton.destroy(false);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_1);
			}
		}
	};
}

function Resume(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Resume.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Resume.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	this._flush();
};

Resume.prototype.teardown = Resume.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Resume);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Question__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectFolder__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubmitButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);






var template = function () {
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
}();

function create_main_fragment(state, component) {
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.id = "start-validation-errors";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.id = "formDiv";
	div_1.className = "form-div";
	var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('form');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(form, div_1);
	form.id = "folderForm";
	form.name = "folderForm";

	function submit_handler(event) {
		component.handleSubmit(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(form, 'submit', submit_handler);

	var selectfolder = new __WEBPACK_IMPORTED_MODULE_1__SelectFolder__["a" /* default */]({
		target: form,
		_root: component._root,
		data: { selectText: state.selectText }
	});

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n        \n        "), form);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(br, form);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n        \n        "), form);
	var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label, form);
	label.className = "textfield";
	label.htmlFor = "newFolder";
	var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input, label);
	input.type = "text";
	input.id = "newFolder";
	input.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n            "), label);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span, label);
	span.className = "textfield__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("New folder name"), span);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n\n        \n        Copy sharing permissions\n        "), form);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_1, form);
	span_1.tabIndex = "10";
	span_1.className = "tooltip-toggle";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(span_1, 'data-tooltip', "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected.");

	var question = new __WEBPACK_IMPORTED_MODULE_0__icons_Question__["a" /* default */]({
		target: span_1,
		_root: component._root
	});

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])(" \n        \n        \n        "), form);
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(div_2, form);
	div_2.className = "form-group";
	div_2.id = "permissions-group";
	var label_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label_1, div_2);
	label_1.className = "radio";
	var input_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input_1, label_1);
	input_1.type = "radio";
	input_1.name = "permissions";
	input_1.__value = "no";
	input_1.value = input_1.__value;
	input_1.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n                "), label_1);
	var span_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_2, label_1);
	span_2.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("No"), span_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n            "), div_2);
	var label_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label_2, div_2);
	label_2.className = "radio";
	var input_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input_2, label_2);
	input_2.type = "radio";
	input_2.name = "permissions";
	input_2.__value = "yes";
	input_2.value = input_2.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n                "), label_2);
	var span_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_3, label_2);
	span_3.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Yes"), span_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n\n        \n        Copy folder to\n        "), form);
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(div_3, form);
	div_3.className = "form-group";
	div_3.id = "destination-group";
	var label_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label_3, div_3);
	label_3.className = "radio";
	var input_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input_3, label_3);
	input_3.type = "radio";
	input_3.name = "copyLocationOptions";
	input_3.__value = "same";
	input_3.value = input_3.__value;
	input_3.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n                "), label_3);
	var span_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_4, label_3);
	span_4.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Same as source folder"), span_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n            "), div_3);
	var label_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(label_4, div_3);
	label_4.className = "radio";
	var input_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(input_4, label_4);
	input_4.type = "radio";
	input_4.name = "copyLocationOptions";
	input_4.__value = "root";
	input_4.value = input_4.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n                "), label_4);
	var span_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(span_5, label_4);
	span_5.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("Root directory (i.e. at the top of \"My Drive\")"), span_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* createText */])("\n\n\n        \n        "), form);

	var submitbutton = new __WEBPACK_IMPORTED_MODULE_2__SubmitButton__["a" /* default */]({
		target: form,
		_root: component._root,
		data: { buttonText: state.buttonText }
	});

	submitbutton.on('click', function (event) {
		component.handleClick(event);
	});

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div_1, target, anchor);
		},

		update: function update(changed, state) {
			var selectfolder_changes = {};

			if ('selectText' in changed) selectfolder_changes.selectText = state.selectText;

			if (Object.keys(selectfolder_changes).length) selectfolder.set(selectfolder_changes);

			var submitbutton_changes = {};

			if ('buttonText' in changed) submitbutton_changes.buttonText = state.buttonText;

			if (Object.keys(submitbutton_changes).length) submitbutton.set(submitbutton_changes);
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(form, 'submit', submit_handler);
			selectfolder.destroy(false);
			question.destroy(false);
			submitbutton.destroy(false);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div_1);
			}
		}
	};
}

function Start(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Start.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Start.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	this._flush();
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = function () {
	return {
		oncreate: function oncreate() {
			// this.get will retrieve the prop "views" that is passed into the component
			var views = this.get('views');
			views.forEach(function (view) {
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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, false, 0);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(div, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(div);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(ViewChanger.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

ViewChanger.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* createSvgElement */])('svg');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(svg, 'xmlns', "http://www.w3.org/2000/svg");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(svg, 'viewBox', "0 0 24 24");
	var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* createSvgElement */])('path');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* appendNode */])(path, svg);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* setAttribute */])(path, 'd', "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* insertNode */])(svg, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* detachNode */])(svg);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])(Question.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* proto */]);

Question.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Question.prototype.teardown = Question.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Question);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

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
      document.getElementById('start-' + successfulness).style.display = 'block';
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

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Parses folder URL string and returns folder ID string
 * 
 * @param {string} url the folder URL for the selected folder
 * @return {string} id the folder ID for the selected folder
 */
module.exports = function (url) {
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
Many, many thanks to [Jean-Pierre Verhulst](https://plus.google.com/+JeanPierreVerhulst/posts) 
for providing the working backbone of this script
*/

var DOM = __webpack_require__(15);

// vanillaJS implementation of $.getScript(), thanks to http://stackoverflow.com/questions/16839698/jquery-getscript-alternative-in-native-javascript
function getScript(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = 1;
  prior.parentNode.insertBefore(script, prior);

  script.onload = script.onreadystatechange = function (_, isAbort) {
    if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
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
  google.script.run.withSuccessHandler(createPicker).withFailureHandler(showError).getOAuthToken();
}

function createPicker(token) {
  if (pickerApiLoaded && token) {
    var foldersView = new google.picker.DocsView().setIncludeFolders(true).setMimeTypes('application/vnd.google-apps.folder').setSelectFolderEnabled(true);

    pickerBuilder = new google.picker.PickerBuilder().addView(foldersView).hideTitleBar().setOAuthToken(token).setMaxItems(1).setCallback(pickerCallback).setTitle('Select a folder to copy').setOrigin('https://script.google.com').build();
  } else {
    // todo: handle errors
  }
}

// Allows method binding from external scripts, e.g. init.js
exports.showPicker = function () {
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
  $('#getFolderErrors').text('Error getting OAuth token for Google Picker.  Please manually input folder URL');
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzBjZjM5MTg3NWFkNGZhOGU4YmMiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWNjb3VudFN3aXRjaGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGFydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGlja2VyLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJ2aWV3cyIsImlkIiwidGl0bGUiLCJjb21wb25lbnQiLCJBYm91dCIsIlN0YXJ0IiwiUmVzdW1lIiwiUGF1c2UiLCJGQVEiLCJhY3RpdmUiLCJjb21wb25lbnRzIiwic3Bpbm5lciIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvbGRlcklzU2VsZWN0ZWQiLCJzZWxlY3RlZEZvbGRlciIsIiQiLCJ0ZXh0IiwidmFsIiwiZGVzdE5hbWUiLCJzcmNOYW1lIiwiaGlkZSIsInNob3ciLCJvbkZvbGRlckxvb2t1cCIsIm9uVmFsaWQiLCJodG1sIiwicmVzZXRGb3JtIiwic2hvd1Byb2Nlc3NpbmdPdmVybGF5IiwibWVzc2FnZSIsIm92ZXJsYXkiLCJvdmVybGF5TWVzc2FnZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsImNsZWFyUHJvY2Vzc2luZ092ZXJsYXkiLCJoaWRlU3RlcDEiLCJyZXN1bWluZyIsInNob3dTdGVwMiIsInN1Y2Nlc3NmdWxuZXNzIiwidW5kZWZpbmVkIiwic2hvd1Rvb01hbnlUcmlnZ2VycyIsImhpZGVUb29NYW55VHJpZ2dlcnMiLCJzaG93RXJyb3JzIiwiaGlkZUVycm9ycyIsInNob3dQYXVzZVN0ZXAyIiwidXJsIiwiYW1wIiwiaWRTdGFydCIsInNlYXJjaCIsImZvbGRlcnNTdGFydCIsInNsaWNlIiwiaW5kZXhPZiIsIkRPTSIsInJlcXVpcmUiLCJnZXRTY3JpcHQiLCJzb3VyY2UiLCJjYWxsYmFjayIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJwcmlvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXN5bmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwib25sb2FkIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiXyIsImlzQWJvcnQiLCJyZWFkeVN0YXRlIiwidGVzdCIsInNyYyIsIm9uQXBpTG9hZCIsInBpY2tlckFwaUxvYWRlZCIsInBpY2tlckJ1aWxkZXIiLCJmb2xkZXIiLCJnYXBpIiwibG9hZCIsImdvb2dsZSIsInJ1biIsIndpdGhTdWNjZXNzSGFuZGxlciIsImNyZWF0ZVBpY2tlciIsIndpdGhGYWlsdXJlSGFuZGxlciIsInNob3dFcnJvciIsImdldE9BdXRoVG9rZW4iLCJ0b2tlbiIsImZvbGRlcnNWaWV3IiwicGlja2VyIiwiRG9jc1ZpZXciLCJzZXRJbmNsdWRlRm9sZGVycyIsInNldE1pbWVUeXBlcyIsInNldFNlbGVjdEZvbGRlckVuYWJsZWQiLCJQaWNrZXJCdWlsZGVyIiwiYWRkVmlldyIsImhpZGVUaXRsZUJhciIsInNldE9BdXRoVG9rZW4iLCJzZXRNYXhJdGVtcyIsInNldENhbGxiYWNrIiwicGlja2VyQ2FsbGJhY2siLCJzZXRUaXRsZSIsInNldE9yaWdpbiIsImJ1aWxkIiwic2hvd1BpY2tlciIsInNldFZpc2libGUiLCJhY3Rpb24iLCJSZXNwb25zZSIsIkFDVElPTiIsIkFjdGlvbiIsIlBJQ0tFRCIsImRvYyIsIkRPQ1VNRU5UUyIsInNldFNlbGVjdGVkRm9sZGVyIiwic3JjSWQiLCJEb2N1bWVudCIsIklEIiwic3JjUGFyZW50SWQiLCJQQVJFTlRfSUQiLCJOQU1FIiwiQ0FOQ0VMIiwiaG9zdCIsImNsb3NlIiwicHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QUF0QixDQUNFLGdGQURGO0FBR0QsQyIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwY2YzOTE4NzVhZDRmYThlOGJjIiwiZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24gKCB0YXJnZXQgKSB7XG5cdGZvciAoIHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHR2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoIHZhciBrIGluIHNvdXJjZSApIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUgKCBub2RlLCB0YXJnZXQgKSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlICggbm9kZSwgdGFyZ2V0LCBhbmNob3IgKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUoIG5vZGUsIGFuY2hvciApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlICggbm9kZSApIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4gKCBiZWZvcmUsIGFmdGVyICkge1xuXHR3aGlsZSAoIGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyICkge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBiZWZvcmUubmV4dFNpYmxpbmcgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaCAoIGl0ZXJhdGlvbnMsIGRldGFjaCwgc3RhcnQgKSB7XG5cdGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggaXRlcmF0aW9uc1tpXSApIGl0ZXJhdGlvbnNbaV0uZGVzdHJveSggZGV0YWNoICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQgKCBkYXRhICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIGRhdGEgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUgKCBncm91cCApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggZ3JvdXBbaV0uY2hlY2tlZCApIHZhbHVlLnB1c2goIGdyb3VwW2ldLl9fdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGxpbmVhciAoIHQgKSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUtleWZyYW1lcyAoIGEsIGIsIGRlbHRhLCBkdXJhdGlvbiwgZWFzZSwgZm4sIG5vZGUsIHN0eWxlICkge1xuXHR2YXIgaWQgPSAnX19zdmVsdGUnICsgfn4oIE1hdGgucmFuZG9tKCkgKiAxZTkgKTsgLy8gVE9ETyBtYWtlIHRoaXMgbW9yZSByb2J1c3Rcblx0dmFyIGtleWZyYW1lcyA9ICdAa2V5ZnJhbWVzICcgKyBpZCArICd7XFxuJztcblxuXHRmb3IgKCB2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbiApIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UoIHAgKTtcblx0XHRrZXlmcmFtZXMgKz0gKCBwICogMTAwICkgKyAnJXsnICsgZm4oIHQgKSArICd9XFxuJztcblx0fVxuXG5cdGtleWZyYW1lcyArPSAnMTAwJSB7JyArIGZuKCBiICkgKyAnfVxcbn0nO1xuXHRzdHlsZS50ZXh0Q29udGVudCArPSBrZXlmcmFtZXM7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKTtcblxuXHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uLnNwbGl0KCAnLCcgKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uICggYW5pbSApIHtcblx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0cmV0dXJuIGFuaW0gJiYgKCBkZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdCggYW5pbSApICk7XG5cdFx0fSlcblx0XHQuY29uY2F0KCBpZCArICcgJyArIGR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJyApXG5cdFx0LmpvaW4oICcsICcgKTtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24gKCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXAgKSB7XG5cdHZhciBvYmogPSBmbiggbm9kZSwgcGFyYW1zICk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKCBvYmouY3NzICkge1xuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcblx0fVxuXG5cdGlmICggaW50cm8gJiYgb2JqLnRpY2sgKSBvYmoudGljayggMCApO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbiAoIGludHJvLCBjYWxsYmFjayApIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKCBvYmouZGVsYXkgfHwgMCApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCBvYmouZGVsYXkgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KCBwcm9ncmFtICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24gKCBwcm9ncmFtICkge1xuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKCBwcm9ncmFtLmIgLSBwcm9ncmFtLmEgKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmICggb2JqLmNzcyApIHtcblx0XHRcdFx0Z2VuZXJhdGVLZXlmcmFtZXMoIHByb2dyYW0uYSwgcHJvZ3JhbS5iLCBwcm9ncmFtLmRlbHRhLCBwcm9ncmFtLmR1cmF0aW9uLCBlYXNlLCBvYmouY3NzLCBub2RlLCBzdHlsZSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCBub3cgKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICggIXByb2dyYW0gKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKCBwIC8gcHJvZ3JhbS5kdXJhdGlvbiApO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMudCA9IHRoaXMucHJvZ3JhbS5iO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIDEgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cblx0YWRkOiBmdW5jdGlvbiAoIHRyYW5zaXRpb24gKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMucHVzaCggdHJhbnNpdGlvbiApO1xuXG5cdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0ICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KCB0cmFuc2l0aW9uLnBlbmRpbmcgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKCBub3cgKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCAhdHJhbnNpdGlvbi5wZW5kaW5nICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRyYW5zaXRpb25NYW5hZ2VyLm5leHQgKTtcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRpZmZlcnMgKCBhLCBiICkge1xuXHRyZXR1cm4gKCBhICE9PSBiICkgfHwgKCBhICYmICggdHlwZW9mIGEgPT09ICdvYmplY3QnICkgfHwgKCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyApICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzICggY29tcG9uZW50LCBncm91cCwgbmV3U3RhdGUsIG9sZFN0YXRlICkge1xuXHRmb3IgKCB2YXIga2V5IGluIGdyb3VwICkge1xuXHRcdGlmICggISgga2V5IGluIG5ld1N0YXRlICkgKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlWyBrZXkgXTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVsga2V5IF07XG5cblx0XHRpZiAoIGRpZmZlcnMoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApICkge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwWyBrZXkgXTtcblx0XHRcdGlmICggIWNhbGxiYWNrcyApIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5fX2NhbGxpbmcgKSBjb250aW51ZTtcblxuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSApO1xuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0ICgga2V5ICkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVbIGtleSBdIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZpcmUgKCBldmVudE5hbWUsIGRhdGEgKSB7XG5cdHZhciBoYW5kbGVycyA9IGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0uc2xpY2UoKTtcblx0aWYgKCAhaGFuZGxlcnMgKSByZXR1cm47XG5cblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCggdGhpcywgZGF0YSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgZ3JvdXAgPSAoIG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlciApID8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3QgOiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdCggZ3JvdXBbIGtleSBdIHx8ICggZ3JvdXBbIGtleSBdID0gW10gKSApLnB1c2goIGNhbGxiYWNrICk7XG5cblx0aWYgKCAhb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlICkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCggdGhpcywgdGhpcy5fc3RhdGVbIGtleSBdICk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBbIGtleSBdLmluZGV4T2YoIGNhbGxiYWNrICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGdyb3VwWyBrZXkgXS5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2ICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGMgPSAoIGtleSA9ICcnICsga2V5ICkuc2VhcmNoKCAvW15cXHddLyApO1xuXHRpZiAoIGMgPiAtMSApIHtcblx0XHR2YXIgbWVzc2FnZSA9IFwiVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eVwiO1xuXHRcdGlmICggYyA+IDAgKSBtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSggMCwgYyApICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKCB0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICk7XG59XG5cbmZ1bmN0aW9uIG9uICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gfHwgKCB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gPSBbXSApO1xuXHRoYW5kbGVycy5wdXNoKCBoYW5kbGVyICk7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoIGhhbmRsZXIgKTtcblx0XHRcdGlmICggfmluZGV4ICkgaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYgKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkge1xuXHRcdGNvbnNvbGUud2FybiggXCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIiApO1xuXHRcdHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKCB0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIgKTtcbn1cblxuZnVuY3Rpb24gc2V0ICggbmV3U3RhdGUgKSB7XG5cdHRoaXMuX3NldCggYXNzaWduKCB7fSwgbmV3U3RhdGUgKSApO1xuXHR0aGlzLl9yb290Ll9mbHVzaCgpO1xufVxuXG5mdW5jdGlvbiBfZmx1c2ggKCkge1xuXHRpZiAoICF0aGlzLl9yZW5kZXJIb29rcyApIHJldHVybjtcblxuXHR3aGlsZSAoIHRoaXMuX3JlbmRlckhvb2tzLmxlbmd0aCApIHtcblx0XHR0aGlzLl9yZW5kZXJIb29rcy5wb3AoKSgpO1xuXHR9XG59XG5cbnZhciBwcm90byA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxuZXhwb3J0IHsgZGlmZmVycywgZGlzcGF0Y2hPYnNlcnZlcnMsIGdldCwgZmlyZSwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBzZXQsIF9mbHVzaCwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXN0cm95RWFjaCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIGxpbmVhciwgZ2VuZXJhdGVLZXlmcmFtZXMsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8IS0tU2VsZWN0IEZvbGRlci0tPlxue3tzZWxlY3RUZXh0fX1cbjwhLS1FbGVtZW50cyB0byBzZWxlY3QgZm9sZGVyLS0+XG48ZGl2IGNsYXNzPVwiZm9sZGVyU2VsZWN0XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzZWxlY3RGb2xkZXJCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tLXNtYWxsIHNlbGVjdEZvbGRlckJ1dHRvblwiPlNlbGVjdCBGb2xkZXI8L2J1dHRvbj5cbiAgICBvclxuICAgIDxsYWJlbCBmb3I9XCJuZXdGb2xkZXJcIiBjbGFzcz1cInRleHRmaWVsZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvbGRlclRleHRib3hcIiBuYW1lPVwibmV3Rm9sZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGZpZWxkX19sYWJlbFwiIG9uOm1vdXNldXA9J2hhbmRsZU1vdXNlKGV2ZW50KScgb246a2V5dXA9J2hhbmRsZUtleShldmVudCknPlBhc3RlIGZvbGRlciBVUkwgKEN0cmwtVik8L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZ2V0Rm9sZGVyRXJyb3JzXCI+PC9kaXY+XG5cbnt7I2lmIGZpbmRpbmdGb2xkZXJ9fVxuICAgIDxkaXYgY2xhc3M9XCJmb2xkZXJMb29rdXBcIj5cbiAgICAgICAgRmluZGluZyBmb2xkZXIuLi48U3Bpbm5lciAvPlxuICAgIDwvZGl2Plxue3svaWZ9fVxuXG5cbjwhLS1EaXNwbGF5IHdoZW4gZm9sZGVyIGlzIHNlbGVjdGVkLS0+XG48ZGl2IGNsYXNzPVwic2VsZWN0ZWRGb2xkZXJJbmZvXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJmb2xkZXJOYW1lXCI+PC9zcGFuPiAmbmJzcDsmbmJzcDtcbiAgICA8YnV0dG9uIHR5cGU9XCJyZXNldFwiIGNsYXNzPVwiYnRuICBidG4tLXNtYWxsIHNlbGVjdE90aGVyRm9sZGVyXCI+U2VsZWN0IG90aGVyIGZvbGRlcjwvYnV0dG9uPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4vKipcbiAqIFByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdXNlZCBmb3IgdGhlIFwiU2VsZWN0IEZvbGRlclwiXG4gKiB0ZXh0Ym94ZXMsIHdoaWNoIGF1dG9tYXRpY2FsbHkgZmluZCBmb2xkZXIgbWV0YWRhdGEgd2hlbiBhIFVSTCBcbiAqIGlzIHBhc3RlZCBpbnRvIHRoZW0uICBUaGUgdGV4dGJveGVzIGNhbiBoYW5kbGUgcGFzdGluZyB2aWEgJ0N0cmwrVicsXG4gKiBvciByaWdodC1jbGlja2luZyBhbmQgc2VsZWN0aW5nIFwiUGFzdGVcIiBmcm9tIHRoZSBjb250ZXh0IG1lbnUuIFxuICovXG5cbi8vIFJlcXVpcmVzXG5jb25zdCBwaWNrZXIgPSByZXF1aXJlKCcuLi91dGlsL3BpY2tlcicpO1xuY29uc3QgcGFyc2VJZCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VJZCcpO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9pY29ucy9TcGlubmVyJztcblxuXG4vKipcbiAqIElmIGZvbGRlciBVUkwgaXMgYWRkZWQsIGdldCBmb2xkZXIgbWV0YWRhdGEgYW5kIGRpc3BsYXkgcmVsZXZhbnQgaW5mb3JtYXRpb24uXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBlIGV2ZW50IG9iamVjdFxuICovXG5jb25zdCBnZXRGaWxlRGF0YSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIC8vIERPTS5vbkZvbGRlckxvb2t1cCgpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICB2YXIgaWQgPSBwYXJzZUlkKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICBnb29nbGUuc2NyaXB0LnJ1blxuICAgICAgICAud2l0aFN1Y2Nlc3NIYW5kbGVyKGZ1bmN0aW9uKG1ldGFkYXRhKSB7XG4gICAgICAgIC8vIHNhdmUgbWV0YWRhdGEgdG8gcGlja2VyLmZvbGRlclxuICAgICAgICBwaWNrZXIuc2V0U2VsZWN0ZWRGb2xkZXIoe1xuICAgICAgICAgICAgc3JjSWQ6IG1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3JjUGFyZW50SWQ6IG1ldGFkYXRhLnBhcmVudHNbMF0uaWQsXG4gICAgICAgICAgICBzcmNOYW1lOiBtZXRhZGF0YS50aXRsZSxcbiAgICAgICAgICAgIGRlc3ROYW1lOiAnQ29weSBvZiAnICsgbWV0YWRhdGEudGl0bGVcbiAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC53aXRoRmFpbHVyZUhhbmRsZXIoZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gICAgICAgICQoJy5mb2xkZXJMb29rdXAnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5zaG93KCk7XG4gICAgICAgICQoJy5nZXRGb2xkZXJFcnJvcnMnKVxuICAgICAgICAgICAgLnRleHQoXG4gICAgICAgICAgICAnRXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgIG1zZyArXG4gICAgICAgICAgICAgICAgJzxicj5Zb3UgbWF5IG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gY29weSB0aGlzIGZvbGRlci4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc2hvdygpO1xuICAgICAgICB9KVxuICAgICAgICAuZ2V0TWV0YWRhdGEoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgaGFuZGxlIGZvciB0aGUgaW50ZXJ2YWwgc2V0IGluIGhhbmRsZU1vdXNlIGFuZCBjbGVhcmVkIGluIGdldEZpbGVEYXRhXG4gICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnRlcnZhbDoge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgcmlnaHQtY2xpY2ssIHNldFRpbWVvdXRcbiAgICAgICAgICogSWYgbGVmdC1jbGljaywgdHJpZ2dlciBpbW1lZGlhdGVseVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlTW91c2UoZSkge1xuICAgICAgICAgICAgLy8gaWYgY29udGV4dCBtZW51IGlzIGFjdGl2YXRlZCwgZ2l2ZSB1c2VyIHRpbWUgdG8gcGFzdGUgZGF0YSB2aWEgY29udGV4dCBtZW51XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RmlsZURhdGEoZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXQoe2ludGVydmFsOiBzZXRJbnRlcnZhbChnLCA1MDApfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0RmlsZURhdGEoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUtleShlKSB7XG4gICAgICAgICAgICBnZXRGaWxlRGF0YShlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBTcGlubmVyLFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwiPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIj57e2J1dHRvblRleHR9fTwvYnV0dG9uPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4vY29tcG9uZW50cy9TdGFydCc7XG5pbXBvcnQgUmVzdW1lIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bWUnO1xuaW1wb3J0IFBhdXNlIGZyb20gJy4vY29tcG9uZW50cy9QYXVzZSc7XG5pbXBvcnQgRkFRIGZyb20gJy4vY29tcG9uZW50cy9GQVEnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL2ljb25zL1NwaW5uZXInO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyksXG4gIGRhdGE6IHtcbiAgICB2aWV3czogW1xuICAgICAge1xuICAgICAgICBpZDogJ2Fib3V0JyxcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc3RhcnQnLFxuICAgICAgICB0aXRsZTogJ1N0YXJ0JyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFydFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdyZXN1bWUnLFxuICAgICAgICB0aXRsZTogJ1Jlc3VtZScsXG4gICAgICAgIGNvbXBvbmVudDogUmVzdW1lXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3BhdXNlJyxcbiAgICAgICAgdGl0bGU6ICdQYXVzZScsXG4gICAgICAgIGNvbXBvbmVudDogUGF1c2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnZmFxJyxcbiAgICAgICAgdGl0bGU6ICdGQVEnLFxuICAgICAgICBjb21wb25lbnQ6IEZBUVxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gbXVzdCBtYXRjaCB0aGUgaWQgb2Ygb25lIG9mIHRoZSB2aWV3c1xuICAgIGFjdGl2ZTogJ3N0YXJ0J1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQWJvdXQsXG4gICAgU3RhcnQsXG4gICAgUmVzdW1lLFxuICAgIFBhdXNlLFxuICAgIEZBUVxuICB9XG59KTtcblxuY29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiPGRpdiBjbGFzcz1cImNoYW5nZS1hY2NvdW50X19ib3hcIj5cbiAgICA8c3BhbiBjbGFzcz1cInVzZXJFbWFpbFwiPlxuICAgICAgICB7e21lc3NhZ2V9fVxuICAgICAgICB7eyNpZiBwcm9jZXNzaW5nfX1cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIHt7L2lmfX1cbiAgICA8L3NwYW4+XG4gICAgPGJyIC8+XG4gICAge3sjaWYgZW52ID09PSAncHJvZHVjdGlvbid9fVxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9BY2NvdW50Q2hvb3Nlcj9jb250aW51ZT1odHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnhiR05HYWpyeHYtSGJYMnNWWTJPVHU3eWo5VnZ4bE9NT2VRYmxaRnVxN3JZbTd1eW8vZXhlY1wiPlxuICAgICAgICAgICAgQ2xpY2sgaGVyZTwvYT4gdG8gbG9nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9BY2NvdW50Q2hvb3Nlcj9jb250aW51ZT1odHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpLSlFPNUNCZjdXRG1yWW84RkdEYjIwWVdmb0l5VVpaaHNiRjg0NFNJL2RldlwiPlxuICAgICAgICAgICAgQ2xpY2sgaGVyZTwvYT4gdG8gbG9nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cbiAgICB7ey9pZn19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU3Bpbm5lciBmcm9tICcuL2ljb25zL1NwaW5uZXInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViBpcyBwYXNzZWQgaW4gdmlhIGEgd2VicGFjayBwbHVnaW5cbiAgICAgICAgICAgICAgICBlbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dnZWQgaW4gYXMgJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gZ2V0IHVzZXIgZW1haWwgYW5kIHB1dCBpdCBpbiB0aGUgYWNjb3VudCBib3hcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnb29nbGUuc2NyaXB0LnJ1blxuICAgICAgICAgICAgICAgIC53aXRoU3VjY2Vzc0hhbmRsZXIoZnVuY3Rpb24oZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYExvZ2dlZCBpbiBhcyAke2VtYWlsfS5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAud2l0aEZhaWx1cmVIYW5kbGVyKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyBhY3RpdmUgYWNjb3VudC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZ2V0VXNlckVtYWlsKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciByZXRyaWV2aW5nIGFjdGl2ZSBhY2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgU3Bpbm5lcixcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FjY291bnRTd2l0Y2hlci5odG1sIiwiPE5hdiB2aWV3cz17e3ZpZXdzfX0gYmluZDphY3RpdmUgb246Y2xpY2s9J3NldEFjdGl2ZSAoZXZlbnQudmlldy5pZCknLz5cbjxWaWV3Q2hhbmdlciB2aWV3cz17e3ZpZXdzfX0gYmluZDphY3RpdmUgLz5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcbiAgICBpbXBvcnQgVmlld0NoYW5nZXIgZnJvbSAnLi9WaWV3Q2hhbmdlcic7XG4gICAgaW1wb3J0IEFjY291bnRTd2l0Y2hlciBmcm9tICcuL0FjY291bnRTd2l0Y2hlcic7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBOYXYsXG4gICAgICAgICAgICBWaWV3Q2hhbmdlclxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uKHZpZXdJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHthY3RpdmU6IHZpZXdJZH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gYWRkIEFjY291bnQgU3dpdGNoZXIgdG8gaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBhY2N0U3dpdGNoZXIgPSBuZXcgQWNjb3VudFN3aXRjaGVyKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2UtYWNjb3VudCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5odG1sIiwiPG5hdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAge3sjZWFjaCB2aWV3cyBhcyB2aWV3fX1cbiAgICAgICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9J2ZpcmUoXCJjbGlja1wiLCB7dmlld30pJ1xuICAgICAgICAgICAgICAgIG5hbWU9J3t7dmlldy5pZH19J1xuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiTGluayBidG4tLW5hdiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7e3ZpZXcuaWR9fS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+e3t2aWV3LnRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAge3svZWFjaH19XG4gICAgPC9zZWN0aW9uPlxuPC9uYXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCI8cD57e21lc3NhZ2V9fTwvcD5cbjxwPlxue3sjaWYgc2hvd0J1dHRvbn19XG4gICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLS1zbWFsbFwiXG4gICAgICAgIG9uOmNsaWNrPSdoYW5kbGVDbGljayhldmVudCknPlxuICAgICAgICBZZXMsIEkgd2FudCB0byBzdG9wIGFsbCBteSBjdXJyZW50IGluc3RhbmNlcyBvZiBDb3B5IEZvbGRlcjwvYnV0dG9uPlxue3svaWZ9fVxuPC9wPlxuXG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN0b3AgdGhlIGluc3RhbmNlcyBvZiBjb3B5IGZvbGRlciB0aGF0IHlvdSBoYXZlIHJ1bm5pbmc/JyxcbiAgICAgICAgICAgICAgICBzaG93QnV0dG9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgc3VjY2VzcyBhbmQgZmFpbHVyZSBoYW5kbGVyc1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZS5zY3JpcHQucnVuLnNldFN0b3BGbGFnKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIHN0b3BwZWQgYWxsIGZvbGRlciBjb3BpZXMuIFRvIHJlc3RhcnQgdGhlbSwgcGxlYXNlIHVzZSB0aGUgXCJSZXN1bWVcIiBmZWF0dXJlLicsXG4gICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b246IGZhbHNlXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIjxkaXYgaWQ9XCJyZXN1bWUtdmFsaWRhdGlvbi1lcnJvcnNcIj48L2Rpdj5cblxuPGRpdiBpZD1cInJlc3VtZS1mb3JtLWRpdlwiIGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICA8Zm9ybSBpZD1cInJlc3VtZUZvcm1cIiBuYW1lPVwicmVzdW1lRm9ybVwiICBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIG9uOnN1Ym1pdD0naGFuZGxlU3VibWl0KGV2ZW50KSc+XG4gICAgICAgIFxuICAgICAgICA8U2VsZWN0Rm9sZGVyIHNlbGVjdFRleHQ9e3tzZWxlY3RUZXh0fX0gLz4gXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDwhLS1TdWJtaXQtLT5cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBidXR0b25UZXh0PXt7YnV0dG9uVGV4dH19IG9uOmNsaWNrPSdoYW5kbGVDbGljayhldmVudCknIC8+XG5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2VsZWN0Rm9sZGVyIGZyb20gJy4vU2VsZWN0Rm9sZGVyJztcbiAgICBpbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4vU3VibWl0QnV0dG9uJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdSZXN1bWUgY29weWluZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1NlbGVjdCB0aGUgZm9sZGVyIGNvcHkgdGhhdCBpcyBpbiBwcm9ncmVzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgU2VsZWN0Rm9sZGVyLFxuICAgICAgICAgICAgU3VibWl0QnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIjxkaXYgaWQ9XCJzdGFydC12YWxpZGF0aW9uLWVycm9yc1wiPjwvZGl2PlxuXG48IS0tRm9ybS0tPlxuPGRpdiBpZD1cImZvcm1EaXZcIiBjbGFzcz1cImZvcm0tZGl2XCI+XG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJGb3JtXCIgbmFtZT1cImZvbGRlckZvcm1cIiBvbjpzdWJtaXQ9J2hhbmRsZVN1Ym1pdChldmVudCknPlxuXG4gICAgICAgIDxTZWxlY3RGb2xkZXIgc2VsZWN0VGV4dD17e3NlbGVjdFRleHR9fSAvPlxuICAgICAgICBcbiAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8IS0tTmV3IGZvbGRlciBuYW1lLS0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHRmaWVsZFwiIGZvcj1cIm5ld0ZvbGRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXdGb2xkZXJcIiBuYW1lPVwibmV3Rm9sZGVyXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGZpZWxkX19sYWJlbFwiPk5ldyBmb2xkZXIgbmFtZTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cblxuXG5cbiAgICAgICAgPCEtLUNvcHkgcGVybWlzc2lvbnM/LS0+XG4gICAgICAgIENvcHkgc2hhcmluZyBwZXJtaXNzaW9uc1xuICAgICAgICA8IS0tUXVlc3Rpb24gbWFyayBidXR0b24tLT5cbiAgICAgICAgPHNwYW4gdGFiaW5kZXg9XCIxMFwiIGNsYXNzPVwidG9vbHRpcC10b2dnbGVcIiBkYXRhLXRvb2x0aXA9XCJTZWxlY3QgdGhpcyBib3ggaWYgeW91IHdhbnQgdGhlIGRvY3VtZW50cyBpbiB0aGUgZm9sZGVyIGNvcHkgdG8gYmUgZWRpdGFibGUvdmlld2FibGUgYnkgdGhlIHNhbWUgcGVvcGxlIGFzIHRoZSBvcmlnaW5hbHMuIE93bmVycyBvZiBvcmlnaW5hbHMgd2lsbCBiZWNvbWUgZWRpdG9ycyBvZiB0aGUgY29waWVzLiBDb3B5aW5nIHRha2VzIG11Y2ggbG9uZ2VyIGlmICdZZXMnIGlzIHNlbGVjdGVkLlwiPlxuICAgICAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICAgIDwvc3Bhbj4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBpZD1cInBlcm1pc3Npb25zLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGVybWlzc2lvbnNcIiB2YWx1ZT1cIm5vXCIgY2hlY2tlZC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5Obzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGVybWlzc2lvbnNcIiB2YWx1ZT1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5ZZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPCEtLUNvcHkgdG8tLT5cbiAgICAgICAgQ29weSBmb2xkZXIgdG9cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBpZD1cImRlc3RpbmF0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29weUxvY2F0aW9uT3B0aW9uc1wiIHZhbHVlPVwic2FtZVwiIGNoZWNrZWQvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW9fX2xhYmVsXCI+U2FtZSBhcyBzb3VyY2UgZm9sZGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb3B5TG9jYXRpb25PcHRpb25zXCIgdmFsdWU9XCJyb290XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvX19sYWJlbFwiPlJvb3QgZGlyZWN0b3J5IChpLmUuIGF0IHRoZSB0b3Agb2YgXCJNeSBEcml2ZVwiKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPCEtLVN1Ym1pdC0tPlxuICAgICAgICA8U3VibWl0QnV0dG9uIGJ1dHRvblRleHQ9e3tidXR0b25UZXh0fX0gb246Y2xpY2s9J2hhbmRsZUNsaWNrKGV2ZW50KScgLz5cblxuICAgIDwvZm9ybT5cblxuPC9kaXY+ICAgXG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vaWNvbnMvUXVlc3Rpb24nO1xuICAgIGltcG9ydCBTZWxlY3RGb2xkZXIgZnJvbSAnLi9TZWxlY3RGb2xkZXInO1xuICAgIGltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi9TdWJtaXRCdXR0b24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ0NvcHkgRm9sZGVyJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnRm9sZGVyIHRvIGNvcHknXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFF1ZXN0aW9uLFxuICAgICAgICAgICAgU2VsZWN0Rm9sZGVyLFxuICAgICAgICAgICAgU3VibWl0QnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N0YXJ0Lmh0bWwiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICA8ZGl2IGlkPSd7e3ZpZXcuaWR9fScgY2xhc3M9J3RhYiB7e2FjdGl2ZSA9PT0gdmlldy5pZCA/ICdhY3RpdmUnIDogJyd9fSc+PC9kaXY+XG4gICAge3svZWFjaH19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG9uY3JlYXRlKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5nZXQgd2lsbCByZXRyaWV2ZSB0aGUgcHJvcCBcInZpZXdzXCIgdGhhdCBpcyBwYXNzZWQgaW50byB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0KCd2aWV3cycpO1xuICAgICAgICAgICAgdmlld3MuZm9yRWFjaChmdW5jdGlvbih2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmV3IHZpZXcuY29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9WaWV3Q2hhbmdlci5odG1sIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCBjb250cm9sIHRoZVxuICogc2hvd2luZy9oaWRpbmcgb2YgRE9NIGVsZW1lbnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICAqIFVwZGF0ZXMgXCJTZWxlY3QgRm9sZGVyXCIgZmllbGRzIHdpdGggc2VsZWN0ZWQgZm9sZGVyIGluZm9cbiAgICAqL1xuICBmb2xkZXJJc1NlbGVjdGVkOiBmdW5jdGlvbihzZWxlY3RlZEZvbGRlcikge1xuICAgIC8vIHVwZGF0ZSBkaXNwbGF5XG4gICAgJCgnLmdldEZvbGRlckVycm9ycycpLnRleHQoJycpO1xuICAgICQoJyNuZXdGb2xkZXInKS52YWwoc2VsZWN0ZWRGb2xkZXIuZGVzdE5hbWUpO1xuICAgICQoJy5mb2xkZXJOYW1lJykudGV4dChzZWxlY3RlZEZvbGRlci5zcmNOYW1lKTtcblxuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gICAgJCgnLmZvbGRlckxvb2t1cCcpLmhpZGUoKTtcbiAgICAkKCcuc2VsZWN0ZWRGb2xkZXJJbmZvJykuc2hvdygpO1xuICB9LFxuXG4gIC8qKlxuICAgICogRnVuY3Rpb24gdG8gYWxlcnQgdXNlciB0aGF0IGZvbGRlciBpcyBiZWluZyBpZGVudGlmaWVkXG4gICAgKiBIaWRlcyBmb2xkZXJcbiAgICAqL1xuICBvbkZvbGRlckxvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgJCgnLmZvbGRlckxvb2t1cCcpLnNob3coKTtcbiAgICAkKCcuZm9sZGVyU2VsZWN0JykuaGlkZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gZWl0aGVyIGZvcm0gdmFsaWRhdGVzLlxuICAgICogVXBkYXRlcyBVSSB0byBpbmRpY2F0ZSB0aGF0IHRoZSBhcHAgaXMgaW5pdGlhbGl6aW5nLlxuICAgICovXG4gIG9uVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgICQoJyNlcnJvcnMnKS5odG1sKCcnKTtcbiAgICAkKCcjc3RhcnQtdmFsaWRhdGlvbi1lcnJvcnMnKS5odG1sKCcnKTtcbiAgICAkKCcjcmVzdW1lLXZhbGlkYXRpb24tZXJyb3JzJykuaHRtbCgnJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBSZXNldHMgZm9ybSB0byBkZWZhdWx0IHN0YXRlXG4gICAgKi9cbiAgcmVzZXRGb3JtOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZm9sZGVyU2VsZWN0Jykuc2hvdygpO1xuICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5oaWRlKCk7XG4gICAgJCgnLmdldEZvbGRlckVycm9ycycpLmhpZGUoKTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBTaG93IGFuIG92ZXJsYXkgd2l0aCBhIHNwaW5uZXIgYW5kIGEgbWVzc2FnZVxuICAgICAqL1xuICBzaG93UHJvY2Vzc2luZ092ZXJsYXk6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgdmFyIG92ZXJsYXlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX21lc3NhZ2UnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG92ZXJsYXlNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogSGlkZSB0aGUgb3ZlcmxheVxuICAgICAqL1xuICBjbGVhclByb2Nlc3NpbmdPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgdmFyIG92ZXJsYXlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXlfX21lc3NhZ2UnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgb3ZlcmxheU1lc3NhZ2UuaW5uZXJUZXh0ID0gJyc7XG4gIH0sXG5cbiAgaGlkZVN0ZXAxOiBmdW5jdGlvbihyZXN1bWluZykge1xuICAgIC8vIEhpZGUgc3RlcCAxIGZvciBTdGFydCBvciBSZXN1bWluZ1xuICAgIHZhciBpZCA9IHJlc3VtaW5nID8gJ3Jlc3VtZS1zdGVwMScgOiAnc3RhcnQtc3RlcDEnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIHNob3dzIGVpdGhlciBgcmVzdW1lLXN1Y2Nlc3NgLCBgcmVzdW1lLWVycm9yYCwgYHN0YXJ0LXN1Y2Nlc3NgLCBvciBgc3RhcnQtZXJyb3JgXG4gICAgICogQ2FuIGFsc28gc2hvdyBib3RoIHN0YXJ0IGFuZCByZXN1bWUgYXQgc2FtZSB0aW1lIGlmIHJlc3VtaW5nIGlzIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdW1pbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3VjY2Vzc2Z1bG5lc3Mgc2hvdWxkIGJlIGVpdGhlciAnZXJyb3InIG9yICdzdWNjZXNzJ1xuICAgICAqL1xuICBzaG93U3RlcDI6IGZ1bmN0aW9uKHJlc3VtaW5nLCBzdWNjZXNzZnVsbmVzcykge1xuICAgIGlmIChyZXN1bWluZyA9PT0gbnVsbCB8fCByZXN1bWluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtJyArIHN1Y2Nlc3NmdWxuZXNzKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgJ2Jsb2NrJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGlkID0gcmVzdW1pbmcgPyAncmVzdW1lJyA6ICdzdGFydCc7XG4gICAgaWQgKz0gJy0nICsgc3VjY2Vzc2Z1bG5lc3M7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9LFxuXG4gIHNob3dUb29NYW55VHJpZ2dlcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy50b28tbWFueS10cmlnZ2VycycpLnNob3coKTtcbiAgfSxcblxuICBoaWRlVG9vTWFueVRyaWdnZXJzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcudG9vLW1hbnktdHJpZ2dlcnMnKS5oaWRlKCk7XG4gIH0sXG5cbiAgc2hvd0Vycm9yczogZnVuY3Rpb24oKSB7XG4gICAgJCgnLmVycm9ycycpLnNob3coKTtcbiAgfSxcblxuICBoaWRlRXJyb3JzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZXJyb3JzJykuaGlkZSgpO1xuICB9LFxuXG4gIHNob3dQYXVzZVN0ZXAyOiBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2Utc3RlcDEnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1zdGVwMicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRE9NLmpzIiwiLyoqXG4gKiBQYXJzZXMgZm9sZGVyIFVSTCBzdHJpbmcgYW5kIHJldHVybnMgZm9sZGVyIElEIHN0cmluZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIHRoZSBmb2xkZXIgVVJMIGZvciB0aGUgc2VsZWN0ZWQgZm9sZGVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGlkIHRoZSBmb2xkZXIgSUQgZm9yIHRoZSBzZWxlY3RlZCBmb2xkZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIGlkLCBhbXA7XG5cbiAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgc3RyaW5nIGF0IHdoaWNoIHRoZSBmb2xkZXJJZCBzdGFydHNcbiAgdmFyIGlkU3RhcnQgPSB1cmwuc2VhcmNoKCdpZD0nKTtcbiAgdmFyIGZvbGRlcnNTdGFydCA9IHVybC5zZWFyY2goJ2ZvbGRlcnMnKTtcblxuICBpZiAoaWRTdGFydCA+IDApIHtcbiAgICBpZCA9IHVybC5zbGljZShpZFN0YXJ0ICsgMyk7XG4gIH0gZWxzZSBpZiAoZm9sZGVyc1N0YXJ0ID4gMCkge1xuICAgIGlkID0gdXJsLnNsaWNlKGZvbGRlcnNTdGFydCArIDgpO1xuICB9IGVsc2Uge1xuICAgIGlkID0gdXJsO1xuICB9XG5cbiAgLy8gRmluZCB0aGUgYW1wZXJzYW5kIGluIHRoZSByZW1haW5pbmcgc3RyaW5nLCB3aGljaCBpcyB0aGUgZGVsaW1pdGVyIGJldHdlZW4gdGhlIGZvbGRlcklkIGFuZCB0aGUgc2hhcmluZyBwcml2aWxlZ2VzXG4gIGFtcCA9IGlkLmluZGV4T2YoJyYnKTtcblxuICAvLyBTbGljZSB0aGUgc3RyaW5nIHVwIHRvIHRoZSBhbXBlcnNhbmRcbiAgaWYgKGFtcCA+IDApIHtcbiAgICBpZCA9IGlkLnNsaWNlKDAsIGFtcCk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGFyc2VJZC5qcyIsIi8qXG5NYW55LCBtYW55IHRoYW5rcyB0byBbSmVhbi1QaWVycmUgVmVyaHVsc3RdKGh0dHBzOi8vcGx1cy5nb29nbGUuY29tLytKZWFuUGllcnJlVmVyaHVsc3QvcG9zdHMpIFxuZm9yIHByb3ZpZGluZyB0aGUgd29ya2luZyBiYWNrYm9uZSBvZiB0aGlzIHNjcmlwdFxuKi9cblxudmFyIERPTSA9IHJlcXVpcmUoJy4vRE9NJyk7XG5cbi8vIHZhbmlsbGFKUyBpbXBsZW1lbnRhdGlvbiBvZiAkLmdldFNjcmlwdCgpLCB0aGFua3MgdG8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjgzOTY5OC9qcXVlcnktZ2V0c2NyaXB0LWFsdGVybmF0aXZlLWluLW5hdGl2ZS1qYXZhc2NyaXB0XG5mdW5jdGlvbiBnZXRTY3JpcHQoc291cmNlLCBjYWxsYmFjaykge1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHZhciBwcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgc2NyaXB0LmFzeW5jID0gMTtcbiAgcHJpb3IucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBwcmlvcik7XG5cbiAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihfLCBpc0Fib3J0KSB7XG4gICAgaWYgKFxuICAgICAgaXNBYm9ydCB8fFxuICAgICAgIXNjcmlwdC5yZWFkeVN0YXRlIHx8XG4gICAgICAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHNjcmlwdC5yZWFkeVN0YXRlKVxuICAgICkge1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgc2NyaXB0ID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoIWlzQWJvcnQpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzY3JpcHQuc3JjID0gc291cmNlO1xufVxuXG5nZXRTY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcycsIG9uQXBpTG9hZCk7XG5cbi8vIERlY2xhcmUgdmFyaWFibGVzXG52YXIgc2VsZWN0ZWRGb2xkZXIgPSB7fTtcbnZhciBwaWNrZXJBcGlMb2FkZWQgPSBmYWxzZTtcbnZhciBwaWNrZXJCdWlsZGVyO1xuXG5leHBvcnRzLmZvbGRlciA9IHNlbGVjdGVkRm9sZGVyO1xuXG5mdW5jdGlvbiBvbkFwaUxvYWQoKSB7XG4gIGdhcGkubG9hZCgncGlja2VyJywge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHBpY2tlckFwaUxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgZ29vZ2xlLnNjcmlwdC5ydW5cbiAgICAud2l0aFN1Y2Nlc3NIYW5kbGVyKGNyZWF0ZVBpY2tlcilcbiAgICAud2l0aEZhaWx1cmVIYW5kbGVyKHNob3dFcnJvcilcbiAgICAuZ2V0T0F1dGhUb2tlbigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrZXIodG9rZW4pIHtcbiAgaWYgKHBpY2tlckFwaUxvYWRlZCAmJiB0b2tlbikge1xuICAgIHZhciBmb2xkZXJzVmlldyA9IG5ldyBnb29nbGUucGlja2VyLkRvY3NWaWV3KClcbiAgICAgIC5zZXRJbmNsdWRlRm9sZGVycyh0cnVlKVxuICAgICAgLnNldE1pbWVUeXBlcygnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmZvbGRlcicpXG4gICAgICAuc2V0U2VsZWN0Rm9sZGVyRW5hYmxlZCh0cnVlKTtcblxuICAgIHBpY2tlckJ1aWxkZXIgPSBuZXcgZ29vZ2xlLnBpY2tlci5QaWNrZXJCdWlsZGVyKClcbiAgICAgIC5hZGRWaWV3KGZvbGRlcnNWaWV3KVxuICAgICAgLmhpZGVUaXRsZUJhcigpXG4gICAgICAuc2V0T0F1dGhUb2tlbih0b2tlbilcbiAgICAgIC5zZXRNYXhJdGVtcygxKVxuICAgICAgLnNldENhbGxiYWNrKHBpY2tlckNhbGxiYWNrKVxuICAgICAgLnNldFRpdGxlKCdTZWxlY3QgYSBmb2xkZXIgdG8gY29weScpXG4gICAgICAuc2V0T3JpZ2luKCdodHRwczovL3NjcmlwdC5nb29nbGUuY29tJylcbiAgICAgIC5idWlsZCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRvZG86IGhhbmRsZSBlcnJvcnNcbiAgfVxufVxuXG4vLyBBbGxvd3MgbWV0aG9kIGJpbmRpbmcgZnJvbSBleHRlcm5hbCBzY3JpcHRzLCBlLmcuIGluaXQuanNcbmV4cG9ydHMuc2hvd1BpY2tlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcGlja2VyQnVpbGRlci5zZXRWaXNpYmxlKHRydWUpO1xufTtcblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIGNob3NlbiBkb2N1bWVudCdzIG1ldGFkYXRhIGZyb20gdGhlXG4gKiByZXNwb25zZSBvYmplY3QuIEZvciBkZXRhaWxzIG9uIHRoZSByZXNwb25zZSBvYmplY3QsIHNlZVxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcGlja2VyL2RvY3MvcmVzdWx0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIHJlc3BvbnNlIG9iamVjdC5cbiAqL1xuXG5mdW5jdGlvbiBwaWNrZXJDYWxsYmFjayhkYXRhKSB7XG4gIHZhciBhY3Rpb24gPSBkYXRhW2dvb2dsZS5waWNrZXIuUmVzcG9uc2UuQUNUSU9OXTtcblxuICBpZiAoYWN0aW9uID09IGdvb2dsZS5waWNrZXIuQWN0aW9uLlBJQ0tFRCkge1xuICAgIHZhciBkb2MgPSBkYXRhW2dvb2dsZS5waWNrZXIuUmVzcG9uc2UuRE9DVU1FTlRTXVswXTtcbiAgICBzZXRTZWxlY3RlZEZvbGRlcih7XG4gICAgICBzcmNJZDogZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuSURdLFxuICAgICAgc3JjUGFyZW50SWQ6IGRvY1tnb29nbGUucGlja2VyLkRvY3VtZW50LlBBUkVOVF9JRF0sXG4gICAgICBzcmNOYW1lOiBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5OQU1FXSxcbiAgICAgIGRlc3ROYW1lOiAnQ29weSBvZiAnICsgZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuTkFNRV1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChhY3Rpb24gPT0gZ29vZ2xlLnBpY2tlci5BY3Rpb24uQ0FOQ0VMKSB7XG4gICAgZ29vZ2xlLnNjcmlwdC5ob3N0LmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBzYXZlIHBhc3NlZCB2YWx1ZXMgdG8gc2VsZWN0ZWRGb2xkZXJcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgc2VsZWN0ZWRGb2xkZXIgcHJvcGVydGllcyB0byBzYXZlXG4gKi9cbmZ1bmN0aW9uIHNldFNlbGVjdGVkRm9sZGVyKHByb3BlcnRpZXMpIHtcbiAgLy8gc2F2ZSBwcm9wZXJ0aWVzXG4gIHNlbGVjdGVkRm9sZGVyLnNyY0lkID0gcHJvcGVydGllcy5zcmNJZDtcbiAgc2VsZWN0ZWRGb2xkZXIuc3JjUGFyZW50SWQgPSBwcm9wZXJ0aWVzLnNyY1BhcmVudElkO1xuICBzZWxlY3RlZEZvbGRlci5zcmNOYW1lID0gcHJvcGVydGllcy5zcmNOYW1lO1xuICBzZWxlY3RlZEZvbGRlci5kZXN0TmFtZSA9IHByb3BlcnRpZXMuZGVzdE5hbWU7XG5cbiAgRE9NLmZvbGRlcklzU2VsZWN0ZWQoc2VsZWN0ZWRGb2xkZXIpO1xufVxuXG5leHBvcnRzLnNldFNlbGVjdGVkRm9sZGVyID0gc2V0U2VsZWN0ZWRGb2xkZXI7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcigpIHtcbiAgJCgnI2dldEZvbGRlckVycm9ycycpLnRleHQoXG4gICAgJ0Vycm9yIGdldHRpbmcgT0F1dGggdG9rZW4gZm9yIEdvb2dsZSBQaWNrZXIuICBQbGVhc2UgbWFudWFsbHkgaW5wdXQgZm9sZGVyIFVSTCdcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BpY2tlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=