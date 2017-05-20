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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differs; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createText; });
/* unused harmony export createComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return removeEventListener; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = function () {
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

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(text_value = state.selectText);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "folderSelect";
	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(button, div);
	button.type = "button";
	button.id = "selectFolderButton";
	button.className = "btn btn--small selectFolderButton";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Select Folder"), button);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    or\n    "), div);
	var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label, div);
	label.htmlFor = "newFolder";
	label.className = "textfield";
	var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input, label);
	input.type = "text";
	input.id = "folderTextbox";
	input.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        "), label);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span, label);
	span.className = "textfield__label";

	function mouseup_handler(event) {
		component.handleMouse(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(span, 'mouseup', mouseup_handler);

	function keyup_handler(event) {
		component.handleKey(event);
	}

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(span, 'keyup', keyup_handler);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Paste folder URL (Ctrl-V)"), span);
	var text_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.className = "getFolderErrors";
	var text_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_2.className = "folderLookup";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Finding folder..."), div_2);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_1, div_2);
	span_1.className = "rotate-contents";
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(i, span_1);
	i.className = "spinner";
	var text_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n\n");
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_3.className = "selectedFolderInfo";
	var span_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_2, div_3);
	span_2.className = "folderName";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("   \n    "), div_3);
	var button_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(button_1, div_3);
	button_1.type = "reset";
	button_1.className = "btn  btn--small selectOtherFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Select other folder"), button_1);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_9, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_3, target, anchor);
		},

		update: function update(changed, state) {
			if (text_value !== (text_value = state.selectText)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(span, 'mouseup', mouseup_handler);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(span, 'keyup', keyup_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_9);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_3);
			}
		}
	};
}

function SelectFolder(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(SelectFolder.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

SelectFolder.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var text_value;

	var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('button');
	button.type = "submit";
	button.className = "btn";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(text_value = state.buttonText);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(text, button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(button, target, anchor);
		},

		update: function update(changed, state) {
			if (text_value !== (text_value = state.buttonText)) {
				text.data = text_value;
			}
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(button);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(SubmitButton.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

SubmitButton.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Start__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Resume__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Pause__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FAQ__ = __webpack_require__(7);







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

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


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

	var div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div.className = "change-account__box";
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span, div);
	span.className = "userEmail";
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(text_value = state.message);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(text, span);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        "), span);

	var if_block = state.processing && create_if_block(state, component);

	if (if_block) if_block.mount(span, null);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    "), div);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, div);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    "), div);

	function get_block(state) {
		if (state.env === 'production') return create_if_block_1;
		return create_if_block_2;
	}

	var current_block = get_block(state);
	var if_block_1 = current_block(state, component);

	if_block_1.mount(div, null);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
			}
		}
	};
}

function create_if_block(state, component) {
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	span.className = "rotate-contents";
	var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('i');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(i, span);
	i.className = "spinner";

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(span, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(span);
			}
		}
	};
}

function create_if_block_1(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a.target = "_blank";
	a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbxbGNGajrxv-HbX2sVY2OTu7yj9VvxlOMOeQblZFuq7rYm7uyo/exec";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Click here"), a);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" to log in with a different account.");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_1, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_1);
			}
		}
	};
}

function create_if_block_2(state, component) {
	var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a.target = "_blank";
	a.href = "https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbzKJQO5CBf7WDmrYo8FGDb20YWfoIyUZZhsbF844SI/dev";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Click here"), a);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" to log in with a different account.");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_1, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_1);
			}
		}
	};
}

function AccountSwitcher(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(AccountSwitcher.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

AccountSwitcher.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewChanger__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccountSwitcher__ = __webpack_require__(5);
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

	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");

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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(App.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 7 */
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
	a_7.href = "#uninstall";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I unintall the app and remove all permissions?"), a_7);
	var li_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_7, ul);
	var a_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_8, li_7);
	a_8.href = "#openissue";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I report a bug in the app?"), a_8);
	var text_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_9, h4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_9, 'name', "longerThan2Mins");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"), h4);
	var text_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
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
	var text_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_10.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_10);
	var text_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h4_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_11, h4_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_11, 'name', "copyBetweenDomains");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Can I use this app to copy a folder between domains?"), h4_1);
	var text_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Yes!  Follow the steps below:\n    "), div_1);
	var ol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(ol, div_1);
	var li_8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_8, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Log into the account that owns the folder (\"Account 1\")"), li_8);
	var li_9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_9, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Share the folder with the domain to which you'd like to copy (\"Account 2\")"), li_9);
	var li_10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_10, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Open an private/incognito window and log into Account 2"), li_10);
	var li_11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_11, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Go to the \"Shared with me\" section, right click the folder, and select \"Add to Drive\""), li_11);
	var li_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_12, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Open the app, and select the folder that has been shared"), li_12);
	var li_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_13, ol);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Create a copy and Account 2 will now be the owner"), li_13);
	var text_30 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_12.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_12);
	var text_32 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h4_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_13, h4_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_13, 'name', "whenIsItDone");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I know when it is done?"), h4_2);
	var text_34 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_2.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("You will know it is complete when the Copy Log says \"Complete\" in cell C2.  In addition, the cell will highlight green."), div_2);
	var text_36 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_14.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_14);
	var text_38 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_15, h4_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_15, 'name', "notEverythingCopied");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("It didn't copy everything - what do I do?"), h4_3);
	var text_40 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_3.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    "), div_3);
	var ol_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(ol_1, div_3);
	var li_14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_14, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Audit the Copy Log for any errors, and manually copy those files"), li_14);
	var li_15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_15, ol_1);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors"), li_15);
	var text_44 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_16.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_16);
	var text_46 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_17, h4_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_17, 'name', "multipleAccounts");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I sign into a different account with this app?"), h4_4);
	var text_48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
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
	var a_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_18, span);
	a_18.className = "github-button";
	a_18.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_18, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_18, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_18, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Issue"), a_18);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"), div_4);
	var text_54 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_19.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_19);
	var text_56 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_20, h4_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_20, 'name', "infiniteLoop");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("HELP! The copying is stuck in an infinite loop!  What do I do?"), h4_5);
	var text_58 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_5.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Please use the \"Pause\" function built into the app and "), div_5);
	var a_21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_21, div_5);
	a_21.href = "https://github.com/ericyd/gdrive-copy/issues";
	a_21.target = "_blank";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("report the bug"), a_21);
	var text_61 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_22.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_22);
	var text_63 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var h4_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_23, h4_6);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_23, 'name', "uninstall");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I unintall the app and remove all permissions?"), h4_6);
	var text_65 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_6.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("To quote "), div_6);
	var a_24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_24, div_6);
	a_24.href = "https://webapps.stackexchange.com/questions/30841/how-do-i-remove-permission-from-an-app-that-i-gave-google-oauth-access-to";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("the excellent answer on stackexchange:"), a_24);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n    "), div_6);
	var ol_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('ol');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(ol_2, div_6);
	var li_16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_16, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Go to "), li_16);
	var a_25 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_25, li_16);
	a_25.href = "https://accounts.google.com";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("accounts.google.com"), a_25);
	var li_17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_17, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Under \"Sign-in & security\" tab click \"Connected apps & sites\""), li_17);
	var li_18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_18, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Under the section \"Apps connected to your account\", click on MANAGE APPS:"), li_18);
	var li_19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('li');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(li_19, ol_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Select app you want & click REMOVE button"), li_19);
	var text_74 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_26 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_26.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_26);
	var text_76 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var h4_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('h4');
	var a_27 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_27, h4_7);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_27, 'name', "openissue");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("How do I report a bug in the app?"), h4_7);
	var text_78 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var div_7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_7.className = "description";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("If you have found a bug that is not covered in these FAQs, please open an\n    "), div_7);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_1, div_7);
	span_1.className = "github-button-wrapper";
	var a_28 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(a_28, span_1);
	a_28.className = "github-button";
	a_28.href = "https://github.com/ericyd/gdrive-copy/issues";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_28, 'data-icon', "octicon-issue-opened");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_28, 'data-style', "mega");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(a_28, 'aria-label', "Issue ericyd/gdrive-copy on GitHub");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Issue"), a_28);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" on Github."), div_7);
	var text_82 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var a_29 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('a');
	a_29.href = "#top";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Top"), a_29);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(ul, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_9, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_11, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_18, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_10, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_20, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_30, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_12, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_32, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_34, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_2, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_36, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_14, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_38, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_40, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_44, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_16, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_46, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_48, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_4, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_54, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_19, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_56, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_58, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_5, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_61, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_22, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_63, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_65, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_6, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_74, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_26, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_76, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(h4_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_78, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_7, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_82, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(a_29, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(ul);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_9);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_11);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_18);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_10);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_20);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_30);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_12);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_32);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_34);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_2);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_36);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_14);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_38);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_40);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_3);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_44);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_16);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_46);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_48);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_54);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_19);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_56);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_58);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_5);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_61);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_22);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_63);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_65);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_6);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_74);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_26);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_76);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(h4_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_78);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_7);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_82);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(a_29);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(FAQ.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

FAQ.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 8 */
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, false, 0);

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
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["j" /* addEventListener */])(button, 'click', click_handler);

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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(button, 'click', click_handler);

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
/* 9 */
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
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(text_value = state.message);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(text, p);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n");
	var p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('p');

	var if_block = state.showButton && create_if_block(state, component);

	if (if_block) if_block.mount(p_1, null);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text_1, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(p_1, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text_1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(p_1);
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
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Yes, I want to stop all my current instances of Copy Folder"), button);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(button, target, anchor);
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["k" /* removeEventListener */])(button, 'click', click_handler);

			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(button);
			}
		}
	};
}

function Pause(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Pause.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Pause.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectFolder__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubmitButton__ = __webpack_require__(2);
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
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.id = "resume-form-div";
	div_1.className = "form-div";
	var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('form');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(form, div_1);
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

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" \n        "), form);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, form);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n        \n        "), form);

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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
			}
		}
	};
}

function Resume(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Resume.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Resume.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_Question__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectFolder__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubmitButton__ = __webpack_require__(2);
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
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n");
	var div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	div_1.id = "formDiv";
	div_1.className = "form-div";
	var form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('form');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(form, div_1);
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

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n        \n        "), form);
	var br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('br');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(br, form);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n        \n        "), form);
	var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label, form);
	label.className = "textfield";
	label.htmlFor = "newFolder";
	var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input, label);
	input.type = "text";
	input.id = "newFolder";
	input.name = "newFolder";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), label);
	var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span, label);
	span.className = "textfield__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("New folder name"), span);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n\n        \n        Copy sharing permissions\n        "), form);
	var span_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_1, form);
	span_1.tabIndex = "10";
	span_1.className = "tooltip-toggle";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(span_1, 'data-tooltip', "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected.");

	var question = new __WEBPACK_IMPORTED_MODULE_0__icons_Question__["a" /* default */]({
		target: span_1,
		_root: component._root
	});

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])(" \n        \n        \n        "), form);
	var div_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_2, form);
	div_2.className = "form-group";
	div_2.id = "permissions-group";
	var label_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_1, div_2);
	label_1.className = "radio";
	var input_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_1, label_1);
	input_1.type = "radio";
	input_1.name = "permissions";
	input_1.__value = "no";
	input_1.value = input_1.__value;
	input_1.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_1);
	var span_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_2, label_1);
	span_2.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("No"), span_2);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), div_2);
	var label_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_2, div_2);
	label_2.className = "radio";
	var input_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_2, label_2);
	input_2.type = "radio";
	input_2.name = "permissions";
	input_2.__value = "yes";
	input_2.value = input_2.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_2);
	var span_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_3, label_2);
	span_3.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Yes"), span_3);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n\n        \n        Copy folder to\n        "), form);
	var div_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('div');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(div_3, form);
	div_3.className = "form-group";
	div_3.id = "destination-group";
	var label_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_3, div_3);
	label_3.className = "radio";
	var input_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_3, label_3);
	input_3.type = "radio";
	input_3.name = "copyLocationOptions";
	input_3.__value = "same";
	input_3.value = input_3.__value;
	input_3.checked = true;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_3);
	var span_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_4, label_3);
	span_4.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Same as source folder"), span_4);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n            "), div_3);
	var label_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('label');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(label_4, div_3);
	label_4.className = "radio";
	var input_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('input');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(input_4, label_4);
	input_4.type = "radio";
	input_4.name = "copyLocationOptions";
	input_4.__value = "root";
	input_4.value = input_4.__value;
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n                "), label_4);
	var span_5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["a" /* createElement */])('span');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(span_5, label_4);
	span_5.className = "radio__label";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("Root directory (i.e. at the top of \"My Drive\")"), span_5);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["c" /* createText */])("\n\n\n        \n        "), form);

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
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(text, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(div_1, target, anchor);
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
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(text);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(div_1);
			}
		}
	};
}

function Start(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Start.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Start.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = function () {
	return {
		oncreate: function oncreate() {
			// render each view component.
			// for some reason this._state seems to be the only
			// way to access the props passed to this component
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

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, true, each_block_value.length);
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function destroy(detach) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["n" /* destroyEach */])(each_block_iterations, false, 0);

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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__ = __webpack_require__(0);


function create_main_fragment(state, component) {
	var svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* createSvgElement */])('svg');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(svg, 'xmlns', "http://www.w3.org/2000/svg");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(svg, 'viewBox', "0 0 24 24");
	var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["l" /* createSvgElement */])('path');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["d" /* appendNode */])(path, svg);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["b" /* setAttribute */])(path, 'd', "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z");

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["e" /* insertNode */])(svg, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["f" /* detachNode */])(svg);
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

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])(Question.prototype, __WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["h" /* proto */]);

Question.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__home_eric_repos_gdrive_copy_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzVkMjkwZDQyZmRmNzVmMTY4YWQiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWNjb3VudFN3aXRjaGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGFydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGlja2VyLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJ2aWV3cyIsImlkIiwidGl0bGUiLCJjb21wb25lbnQiLCJBYm91dCIsIlN0YXJ0IiwiUmVzdW1lIiwiUGF1c2UiLCJGQVEiLCJhY3RpdmUiLCJjb21wb25lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvbGRlcklzU2VsZWN0ZWQiLCJzZWxlY3RlZEZvbGRlciIsIiQiLCJ0ZXh0IiwidmFsIiwiZGVzdE5hbWUiLCJzcmNOYW1lIiwiaGlkZSIsInNob3ciLCJvbkZvbGRlckxvb2t1cCIsIm9uVmFsaWQiLCJodG1sIiwicmVzZXRGb3JtIiwic2hvd1Byb2Nlc3NpbmdPdmVybGF5IiwibWVzc2FnZSIsIm92ZXJsYXkiLCJvdmVybGF5TWVzc2FnZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsImNsZWFyUHJvY2Vzc2luZ092ZXJsYXkiLCJoaWRlU3RlcDEiLCJyZXN1bWluZyIsImdldEVsZW1lbnRCeUlkIiwic2hvd1N0ZXAyIiwic3VjY2Vzc2Z1bG5lc3MiLCJ1bmRlZmluZWQiLCJzaG93VG9vTWFueVRyaWdnZXJzIiwiaGlkZVRvb01hbnlUcmlnZ2VycyIsInNob3dFcnJvcnMiLCJoaWRlRXJyb3JzIiwic2hvd1BhdXNlU3RlcDIiLCJ1cmwiLCJhbXAiLCJpZFN0YXJ0Iiwic2VhcmNoIiwiZm9sZGVyc1N0YXJ0Iiwic2xpY2UiLCJpbmRleE9mIiwiRE9NIiwicmVxdWlyZSIsImdldFNjcmlwdCIsInNvdXJjZSIsImNhbGxiYWNrIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInByaW9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhc3luYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbmxvYWQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfIiwiaXNBYm9ydCIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwic3JjIiwib25BcGlMb2FkIiwicGlja2VyQXBpTG9hZGVkIiwicGlja2VyQnVpbGRlciIsImZvbGRlciIsImdhcGkiLCJsb2FkIiwiZ29vZ2xlIiwicnVuIiwid2l0aFN1Y2Nlc3NIYW5kbGVyIiwiY3JlYXRlUGlja2VyIiwid2l0aEZhaWx1cmVIYW5kbGVyIiwic2hvd0Vycm9yIiwiZ2V0T0F1dGhUb2tlbiIsInRva2VuIiwiZm9sZGVyc1ZpZXciLCJwaWNrZXIiLCJEb2NzVmlldyIsInNldEluY2x1ZGVGb2xkZXJzIiwic2V0TWltZVR5cGVzIiwic2V0U2VsZWN0Rm9sZGVyRW5hYmxlZCIsIlBpY2tlckJ1aWxkZXIiLCJhZGRWaWV3IiwiaGlkZVRpdGxlQmFyIiwic2V0T0F1dGhUb2tlbiIsInNldE1heEl0ZW1zIiwic2V0Q2FsbGJhY2siLCJwaWNrZXJDYWxsYmFjayIsInNldFRpdGxlIiwic2V0T3JpZ2luIiwiYnVpbGQiLCJzaG93UGlja2VyIiwic2V0VmlzaWJsZSIsImFjdGlvbiIsIlJlc3BvbnNlIiwiQUNUSU9OIiwiQWN0aW9uIiwiUElDS0VEIiwiZG9jIiwiRE9DVU1FTlRTIiwic2V0U2VsZWN0ZWRGb2xkZXIiLCJzcmNJZCIsIkRvY3VtZW50IiwiSUQiLCJzcmNQYXJlbnRJZCIsIlBBUkVOVF9JRCIsIk5BTUUiLCJDQU5DRUwiLCJob3N0IiwiY2xvc2UiLCJwcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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ZCxDQUF1QkMsRUFBM0IsQ0FEUztBQUVoQkMsbUJBQWFOLElBQUkvQixPQUFPUyxNQUFQLENBQWMwQixRQUFkLENBQXVCRyxTQUEzQixDQUZHO0FBR2hCaEcsZUFBU3lGLElBQUkvQixPQUFPUyxNQUFQLENBQWMwQixRQUFkLENBQXVCSSxJQUEzQixDQUhPO0FBSWhCbEcsZ0JBQVUsYUFBYTBGLElBQUkvQixPQUFPUyxNQUFQLENBQWMwQixRQUFkLENBQXVCSSxJQUEzQjtBQUpQLEtBQWxCO0FBTUQsR0FSRCxNQVFPLElBQUliLFVBQVUxQixPQUFPUyxNQUFQLENBQWNvQixNQUFkLENBQXFCVyxNQUFuQyxFQUEyQztBQUNoRHhDLFdBQU9wQixNQUFQLENBQWM2RCxJQUFkLENBQW1CQyxLQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7O0FBS0EsU0FBU1QsaUJBQVQsQ0FBMkJVLFVBQTNCLEVBQXVDO0FBQ3JDO0FBQ0ExRyxpQkFBZWlHLEtBQWYsR0FBdUJTLFdBQVdULEtBQWxDO0FBQ0FqRyxpQkFBZW9HLFdBQWYsR0FBNkJNLFdBQVdOLFdBQXhDO0FBQ0FwRyxpQkFBZUssT0FBZixHQUF5QnFHLFdBQVdyRyxPQUFwQztBQUNBTCxpQkFBZUksUUFBZixHQUEwQnNHLFdBQVd0RyxRQUFyQzs7QUFFQWtDLE1BQUl2QyxnQkFBSixDQUFxQkMsY0FBckI7QUFDRDs7QUFFREYsUUFBUWtHLGlCQUFSLEdBQTRCQSxpQkFBNUI7O0FBRUEsU0FBUzVCLFNBQVQsR0FBcUI7QUFDbkJuRSxJQUFFLGtCQUFGLEVBQXNCQyxJQUF0QixDQUNFLGdGQURGO0FBR0QsQyIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1ZDI5MGQ0MmZkZjc1ZjE2OGFkIiwiZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24gKCB0YXJnZXQgKSB7XG5cdGZvciAoIHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHR2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoIHZhciBrIGluIHNvdXJjZSApIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUgKCBub2RlLCB0YXJnZXQgKSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlICggbm9kZSwgdGFyZ2V0LCBhbmNob3IgKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUoIG5vZGUsIGFuY2hvciApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlICggbm9kZSApIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4gKCBiZWZvcmUsIGFmdGVyICkge1xuXHR3aGlsZSAoIGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyICkge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBiZWZvcmUubmV4dFNpYmxpbmcgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaCAoIGl0ZXJhdGlvbnMsIGRldGFjaCwgc3RhcnQgKSB7XG5cdGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggaXRlcmF0aW9uc1tpXSApIGl0ZXJhdGlvbnNbaV0uZGVzdHJveSggZGV0YWNoICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoIG5hbWUgKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQgKCBkYXRhICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIGRhdGEgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKCBub2RlLCBldmVudCwgaGFuZGxlciApIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudCwgaGFuZGxlciwgZmFsc2UgKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUgKCBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUgKCBncm91cCApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGlmICggZ3JvdXBbaV0uY2hlY2tlZCApIHZhbHVlLnB1c2goIGdyb3VwW2ldLl9fdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGxpbmVhciAoIHQgKSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUtleWZyYW1lcyAoIGEsIGIsIGRlbHRhLCBkdXJhdGlvbiwgZWFzZSwgZm4sIG5vZGUsIHN0eWxlICkge1xuXHR2YXIgaWQgPSAnX19zdmVsdGUnICsgfn4oIE1hdGgucmFuZG9tKCkgKiAxZTkgKTsgLy8gVE9ETyBtYWtlIHRoaXMgbW9yZSByb2J1c3Rcblx0dmFyIGtleWZyYW1lcyA9ICdAa2V5ZnJhbWVzICcgKyBpZCArICd7XFxuJztcblxuXHRmb3IgKCB2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbiApIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UoIHAgKTtcblx0XHRrZXlmcmFtZXMgKz0gKCBwICogMTAwICkgKyAnJXsnICsgZm4oIHQgKSArICd9XFxuJztcblx0fVxuXG5cdGtleWZyYW1lcyArPSAnMTAwJSB7JyArIGZuKCBiICkgKyAnfVxcbn0nO1xuXHRzdHlsZS50ZXh0Q29udGVudCArPSBrZXlmcmFtZXM7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKTtcblxuXHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uLnNwbGl0KCAnLCcgKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uICggYW5pbSApIHtcblx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0cmV0dXJuIGFuaW0gJiYgKCBkZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdCggYW5pbSApICk7XG5cdFx0fSlcblx0XHQuY29uY2F0KCBpZCArICcgJyArIGR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJyApXG5cdFx0LmpvaW4oICcsICcgKTtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24gKCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXAgKSB7XG5cdHZhciBvYmogPSBmbiggbm9kZSwgcGFyYW1zICk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKCBvYmouY3NzICkge1xuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcblx0fVxuXG5cdGlmICggaW50cm8gJiYgb2JqLnRpY2sgKSBvYmoudGljayggMCApO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbiAoIGludHJvLCBjYWxsYmFjayApIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKCBvYmouZGVsYXkgfHwgMCApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCBvYmouZGVsYXkgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KCBwcm9ncmFtICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24gKCBwcm9ncmFtICkge1xuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKCBwcm9ncmFtLmIgLSBwcm9ncmFtLmEgKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmICggb2JqLmNzcyApIHtcblx0XHRcdFx0Z2VuZXJhdGVLZXlmcmFtZXMoIHByb2dyYW0uYSwgcHJvZ3JhbS5iLCBwcm9ncmFtLmRlbHRhLCBwcm9ncmFtLmR1cmF0aW9uLCBlYXNlLCBvYmouY3NzLCBub2RlLCBzdHlsZSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCBub3cgKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICggIXByb2dyYW0gKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKCBwIC8gcHJvZ3JhbS5kdXJhdGlvbiApO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMudCA9IHRoaXMucHJvZ3JhbS5iO1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCB0aGlzLnQgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIDEgKTtcblx0XHRcdGlmICggb2JqLmNzcyApIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoIHN0eWxlICk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cblx0YWRkOiBmdW5jdGlvbiAoIHRyYW5zaXRpb24gKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMucHVzaCggdHJhbnNpdGlvbiApO1xuXG5cdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0ICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KCB0cmFuc2l0aW9uLnBlbmRpbmcgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKCBub3cgKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCAhdHJhbnNpdGlvbi5wZW5kaW5nICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRyYW5zaXRpb25NYW5hZ2VyLm5leHQgKTtcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRpZmZlcnMgKCBhLCBiICkge1xuXHRyZXR1cm4gKCBhICE9PSBiICkgfHwgKCBhICYmICggdHlwZW9mIGEgPT09ICdvYmplY3QnICkgfHwgKCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyApICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzICggY29tcG9uZW50LCBncm91cCwgbmV3U3RhdGUsIG9sZFN0YXRlICkge1xuXHRmb3IgKCB2YXIga2V5IGluIGdyb3VwICkge1xuXHRcdGlmICggISgga2V5IGluIG5ld1N0YXRlICkgKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlWyBrZXkgXTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVsga2V5IF07XG5cblx0XHRpZiAoIGRpZmZlcnMoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApICkge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwWyBrZXkgXTtcblx0XHRcdGlmICggIWNhbGxiYWNrcyApIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5fX2NhbGxpbmcgKSBjb250aW51ZTtcblxuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSApO1xuXHRcdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0ICgga2V5ICkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVbIGtleSBdIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZpcmUgKCBldmVudE5hbWUsIGRhdGEgKSB7XG5cdHZhciBoYW5kbGVycyA9IGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0uc2xpY2UoKTtcblx0aWYgKCAhaGFuZGxlcnMgKSByZXR1cm47XG5cblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCggdGhpcywgZGF0YSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUgKCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICkge1xuXHR2YXIgZ3JvdXAgPSAoIG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlciApID8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3QgOiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdCggZ3JvdXBbIGtleSBdIHx8ICggZ3JvdXBbIGtleSBdID0gW10gKSApLnB1c2goIGNhbGxiYWNrICk7XG5cblx0aWYgKCAhb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlICkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCggdGhpcywgdGhpcy5fc3RhdGVbIGtleSBdICk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBbIGtleSBdLmluZGV4T2YoIGNhbGxiYWNrICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGdyb3VwWyBrZXkgXS5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2ICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGMgPSAoIGtleSA9ICcnICsga2V5ICkuc2VhcmNoKCAvW15cXHddLyApO1xuXHRpZiAoIGMgPiAtMSApIHtcblx0XHR2YXIgbWVzc2FnZSA9IFwiVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eVwiO1xuXHRcdGlmICggYyA+IDAgKSBtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSggMCwgYyApICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKCB0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zICk7XG59XG5cbmZ1bmN0aW9uIG9uICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gfHwgKCB0aGlzLl9oYW5kbGVyc1sgZXZlbnROYW1lIF0gPSBbXSApO1xuXHRoYW5kbGVycy5wdXNoKCBoYW5kbGVyICk7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoIGhhbmRsZXIgKTtcblx0XHRcdGlmICggfmluZGV4ICkgaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYgKCBldmVudE5hbWUsIGhhbmRsZXIgKSB7XG5cdGlmICggZXZlbnROYW1lID09PSAndGVhcmRvd24nICkge1xuXHRcdGNvbnNvbGUud2FybiggXCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIiApO1xuXHRcdHJldHVybiB0aGlzLm9uKCAnZGVzdHJveScsIGhhbmRsZXIgKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKCB0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIgKTtcbn1cblxuZnVuY3Rpb24gc2V0ICggbmV3U3RhdGUgKSB7XG5cdHRoaXMuX3NldCggYXNzaWduKCB7fSwgbmV3U3RhdGUgKSApO1xuXHR0aGlzLl9yb290Ll9mbHVzaCgpO1xufVxuXG5mdW5jdGlvbiBfZmx1c2ggKCkge1xuXHRpZiAoICF0aGlzLl9yZW5kZXJIb29rcyApIHJldHVybjtcblxuXHR3aGlsZSAoIHRoaXMuX3JlbmRlckhvb2tzLmxlbmd0aCApIHtcblx0XHR0aGlzLl9yZW5kZXJIb29rcy5wb3AoKSgpO1xuXHR9XG59XG5cbnZhciBwcm90byA9IHtcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdF9mbHVzaDogX2ZsdXNoXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxuZXhwb3J0IHsgZGlmZmVycywgZGlzcGF0Y2hPYnNlcnZlcnMsIGdldCwgZmlyZSwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBzZXQsIF9mbHVzaCwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXN0cm95RWFjaCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIGxpbmVhciwgZ2VuZXJhdGVLZXlmcmFtZXMsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8IS0tU2VsZWN0IEZvbGRlci0tPlxue3tzZWxlY3RUZXh0fX1cbjwhLS1FbGVtZW50cyB0byBzZWxlY3QgZm9sZGVyLS0+XG48ZGl2IGNsYXNzPVwiZm9sZGVyU2VsZWN0XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzZWxlY3RGb2xkZXJCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tLXNtYWxsIHNlbGVjdEZvbGRlckJ1dHRvblwiPlNlbGVjdCBGb2xkZXI8L2J1dHRvbj5cbiAgICBvclxuICAgIDxsYWJlbCBmb3I9XCJuZXdGb2xkZXJcIiBjbGFzcz1cInRleHRmaWVsZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvbGRlclRleHRib3hcIiBuYW1lPVwibmV3Rm9sZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGZpZWxkX19sYWJlbFwiIG9uOm1vdXNldXA9J2hhbmRsZU1vdXNlKGV2ZW50KScgb246a2V5dXA9J2hhbmRsZUtleShldmVudCknPlBhc3RlIGZvbGRlciBVUkwgKEN0cmwtVik8L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZ2V0Rm9sZGVyRXJyb3JzXCI+PC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImZvbGRlckxvb2t1cFwiPlxuICAgIEZpbmRpbmcgZm9sZGVyLi4uPHNwYW4gY2xhc3M9XCJyb3RhdGUtY29udGVudHNcIj48aSBjbGFzcz1cInNwaW5uZXJcIj48L2k+PC9zcGFuPlxuPC9kaXY+XG5cblxuPCEtLURpc3BsYXkgd2hlbiBmb2xkZXIgaXMgc2VsZWN0ZWQtLT5cbjxkaXYgY2xhc3M9XCJzZWxlY3RlZEZvbGRlckluZm9cIj5cbiAgICA8c3BhbiBjbGFzcz1cImZvbGRlck5hbWVcIj48L3NwYW4+ICZuYnNwOyZuYnNwO1xuICAgIDxidXR0b24gdHlwZT1cInJlc2V0XCIgY2xhc3M9XCJidG4gIGJ0bi0tc21hbGwgc2VsZWN0T3RoZXJGb2xkZXJcIj5TZWxlY3Qgb3RoZXIgZm9sZGVyPC9idXR0b24+XG48L2Rpdj5cblxuPHNjcmlwdD5cbi8qKlxuICogUHJvdmlkZXMgZnVuY3Rpb25hbGl0eSB1c2VkIGZvciB0aGUgXCJTZWxlY3QgRm9sZGVyXCJcbiAqIHRleHRib3hlcywgd2hpY2ggYXV0b21hdGljYWxseSBmaW5kIGZvbGRlciBtZXRhZGF0YSB3aGVuIGEgVVJMIFxuICogaXMgcGFzdGVkIGludG8gdGhlbS4gIFRoZSB0ZXh0Ym94ZXMgY2FuIGhhbmRsZSBwYXN0aW5nIHZpYSAnQ3RybCtWJyxcbiAqIG9yIHJpZ2h0LWNsaWNraW5nIGFuZCBzZWxlY3RpbmcgXCJQYXN0ZVwiIGZyb20gdGhlIGNvbnRleHQgbWVudS4gXG4gKi9cblxuLy8gUmVxdWlyZXNcbmNvbnN0IHBpY2tlciA9IHJlcXVpcmUoJy4uL3V0aWwvcGlja2VyJyk7XG5jb25zdCBwYXJzZUlkID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZUlkJyk7XG5cblxuLyoqXG4gKiBJZiBmb2xkZXIgVVJMIGlzIGFkZGVkLCBnZXQgZm9sZGVyIG1ldGFkYXRhIGFuZCBkaXNwbGF5IHJlbGV2YW50IGluZm9ybWF0aW9uLlxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gZSBldmVudCBvYmplY3RcbiAqL1xuY29uc3QgZ2V0RmlsZURhdGEgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAvLyBET00ub25Gb2xkZXJMb29rdXAoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgdmFyIGlkID0gcGFyc2VJZChlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgZ29vZ2xlLnNjcmlwdC5ydW5cbiAgICAgICAgLndpdGhTdWNjZXNzSGFuZGxlcihmdW5jdGlvbihtZXRhZGF0YSkge1xuICAgICAgICAvLyBzYXZlIG1ldGFkYXRhIHRvIHBpY2tlci5mb2xkZXJcbiAgICAgICAgcGlja2VyLnNldFNlbGVjdGVkRm9sZGVyKHtcbiAgICAgICAgICAgIHNyY0lkOiBtZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHNyY1BhcmVudElkOiBtZXRhZGF0YS5wYXJlbnRzWzBdLmlkLFxuICAgICAgICAgICAgc3JjTmFtZTogbWV0YWRhdGEudGl0bGUsXG4gICAgICAgICAgICBkZXN0TmFtZTogJ0NvcHkgb2YgJyArIG1ldGFkYXRhLnRpdGxlXG4gICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAud2l0aEZhaWx1cmVIYW5kbGVyKGZ1bmN0aW9uKG1zZykge1xuICAgICAgICAkKCcuZm9sZGVyU2VsZWN0JykuaGlkZSgpO1xuICAgICAgICAkKCcuZm9sZGVyTG9va3VwJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2VsZWN0ZWRGb2xkZXJJbmZvJykuc2hvdygpO1xuICAgICAgICAkKCcuZ2V0Rm9sZGVyRXJyb3JzJylcbiAgICAgICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgJ0Vycm9yOiAnICtcbiAgICAgICAgICAgICAgICBtc2cgK1xuICAgICAgICAgICAgICAgICc8YnI+WW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGNvcHkgdGhpcyBmb2xkZXIuJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmdldE1ldGFkYXRhKGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gaW50ZXJ2YWwgaXMgdGhlIGhhbmRsZSBmb3IgdGhlIGludGVydmFsIHNldCBpbiBoYW5kbGVNb3VzZSBhbmQgY2xlYXJlZCBpbiBnZXRGaWxlRGF0YVxuICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW50ZXJ2YWw6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHJpZ2h0LWNsaWNrLCBzZXRUaW1lb3V0XG4gICAgICAgICAqIElmIGxlZnQtY2xpY2ssIHRyaWdnZXIgaW1tZWRpYXRlbHlcbiAgICAgICAgICovXG4gICAgICAgIGhhbmRsZU1vdXNlKGUpIHtcbiAgICAgICAgICAgIC8vIGlmIGNvbnRleHQgbWVudSBpcyBhY3RpdmF0ZWQsIGdpdmUgdXNlciB0aW1lIHRvIHBhc3RlIGRhdGEgdmlhIGNvbnRleHQgbWVudVxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVEYXRhKGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0KHtpbnRlcnZhbDogc2V0SW50ZXJ2YWwoZywgNTAwKX0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEZpbGVEYXRhKGUpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVLZXkoZSkge1xuICAgICAgICAgICAgZ2V0RmlsZURhdGEoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWxlY3RGb2xkZXIuaHRtbCIsIjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuXCI+e3tidXR0b25UZXh0fX08L2J1dHRvbj5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdWJtaXRCdXR0b24uaHRtbCIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBTdGFydCBmcm9tICcuL2NvbXBvbmVudHMvU3RhcnQnO1xuaW1wb3J0IFJlc3VtZSBmcm9tICcuL2NvbXBvbmVudHMvUmVzdW1lJztcbmltcG9ydCBQYXVzZSBmcm9tICcuL2NvbXBvbmVudHMvUGF1c2UnO1xuaW1wb3J0IEZBUSBmcm9tICcuL2NvbXBvbmVudHMvRkFRJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCh7XG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLFxuICBkYXRhOiB7XG4gICAgdmlld3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhYm91dCcsXG4gICAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3N0YXJ0JyxcbiAgICAgICAgdGl0bGU6ICdTdGFydCcsXG4gICAgICAgIGNvbXBvbmVudDogU3RhcnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncmVzdW1lJyxcbiAgICAgICAgdGl0bGU6ICdSZXN1bWUnLFxuICAgICAgICBjb21wb25lbnQ6IFJlc3VtZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdwYXVzZScsXG4gICAgICAgIHRpdGxlOiAnUGF1c2UnLFxuICAgICAgICBjb21wb25lbnQ6IFBhdXNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2ZhcScsXG4gICAgICAgIHRpdGxlOiAnRkFRJyxcbiAgICAgICAgY29tcG9uZW50OiBGQVFcbiAgICAgIH1cbiAgICBdLFxuICAgIC8vIG11c3QgbWF0Y2ggdGhlIGlkIG9mIG9uZSBvZiB0aGUgdmlld3NcbiAgICBhY3RpdmU6ICdzdGFydCdcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFib3V0LFxuICAgIFN0YXJ0LFxuICAgIFJlc3VtZSxcbiAgICBQYXVzZSxcbiAgICBGQVFcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiPGRpdiBjbGFzcz1cImNoYW5nZS1hY2NvdW50X19ib3hcIj5cbiAgICA8c3BhbiBjbGFzcz1cInVzZXJFbWFpbFwiPlxuICAgICAgICB7e21lc3NhZ2V9fVxuICAgICAgICB7eyNpZiBwcm9jZXNzaW5nfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicm90YXRlLWNvbnRlbnRzXCI+PGkgY2xhc3M9XCJzcGlubmVyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAge3svaWZ9fVxuICAgIDwvc3Bhbj5cbiAgICA8YnIgLz5cbiAgICB7eyNpZiBlbnYgPT09ICdwcm9kdWN0aW9uJ319XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL0FjY291bnRDaG9vc2VyP2NvbnRpbnVlPWh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieGJHTkdhanJ4di1IYlgyc1ZZMk9UdTd5ajlWdnhsT01PZVFibFpGdXE3clltN3V5by9leGVjXCI+XG4gICAgICAgICAgICBDbGljayBoZXJlPC9hPiB0byBsb2cgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlxuICAgIHt7ZWxzZX19XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL0FjY291bnRDaG9vc2VyP2NvbnRpbnVlPWh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNiektKUU81Q0JmN1dEbXJZbzhGR0RiMjBZV2ZvSXlVWlpoc2JGODQ0U0kvZGV2XCI+XG4gICAgICAgICAgICBDbGljayBoZXJlPC9hPiB0byBsb2cgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlxuICAgIHt7L2lmfX1cbjwvZGl2PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgaXMgcGFzc2VkIGluIHZpYSBhIHdlYnBhY2sgcGx1Z2luXG4gICAgICAgICAgICAgICAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9nZ2VkIGluIGFzICcsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbmNyZWF0ZSgpIHtcbiAgICAgICAgICAgIC8vIGdldCB1c2VyIGVtYWlsIGFuZCBwdXQgaXQgaW4gdGhlIGFjY291bnQgYm94XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlLnNjcmlwdC5ydW5cbiAgICAgICAgICAgICAgICAud2l0aFN1Y2Nlc3NIYW5kbGVyKGZ1bmN0aW9uKGVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBMb2dnZWQgaW4gYXMgJHtlbWFpbH0uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLndpdGhGYWlsdXJlSGFuZGxlcihmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHJldHJpZXZpbmcgYWN0aXZlIGFjY291bnQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmdldFVzZXJFbWFpbCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyBhY3RpdmUgYWNjb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BY2NvdW50U3dpdGNoZXIuaHRtbCIsIjxOYXYgdmlld3M9e3t2aWV3c319IGJpbmQ6YWN0aXZlIG9uOmNsaWNrPSdzZXRBY3RpdmUgKGV2ZW50LnZpZXcuaWQpJy8+XG48Vmlld0NoYW5nZXIgdmlld3M9e3t2aWV3c319IGJpbmQ6YWN0aXZlIC8+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG4gICAgaW1wb3J0IFZpZXdDaGFuZ2VyIGZyb20gJy4vVmlld0NoYW5nZXInO1xuICAgIGltcG9ydCBBY2NvdW50U3dpdGNoZXIgZnJvbSAnLi9BY2NvdW50U3dpdGNoZXInO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTmF2LFxuICAgICAgICAgICAgVmlld0NoYW5nZXJcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbih2aWV3SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7YWN0aXZlOiB2aWV3SWR9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbmNyZWF0ZSgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBBY2NvdW50IFN3aXRjaGVyIHRvIGhlYWRlclxuICAgICAgICAgICAgY29uc3QgYWNjdFN3aXRjaGVyID0gbmV3IEFjY291bnRTd2l0Y2hlcih7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLWFjY291bnQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAuaHRtbCIsIjxuYXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIHt7I2VhY2ggdmlld3MgYXMgdmlld319XG4gICAgICAgICAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPSdmaXJlKFwiY2xpY2tcIiwge3ZpZXd9KSdcbiAgICAgICAgICAgICAgICBuYW1lPSd7e3ZpZXcuaWR9fSdcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRhYkxpbmsgYnRuLS1uYXYge3thY3RpdmUgPT09IHZpZXcuaWQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgIGlkPVwie3t2aWV3LmlkfX0tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiPnt7dmlldy50aXRsZX19PC9idXR0b24+XG4gICAgICAgIHt7L2VhY2h9fVxuICAgIDwvc2VjdGlvbj5cbjwvbmF2PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdi5odG1sIiwiPHA+e3ttZXNzYWdlfX08L3A+XG48cD5cbnt7I2lmIHNob3dCdXR0b259fVxuICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi0tc21hbGxcIlxuICAgICAgICBvbjpjbGljaz0naGFuZGxlQ2xpY2soZXZlbnQpJz5cbiAgICAgICAgWWVzLCBJIHdhbnQgdG8gc3RvcCBhbGwgbXkgY3VycmVudCBpbnN0YW5jZXMgb2YgQ29weSBGb2xkZXI8L2J1dHRvbj5cbnt7L2lmfX1cbjwvcD5cblxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdG9wIHRoZSBpbnN0YW5jZXMgb2YgY29weSBmb2xkZXIgdGhhdCB5b3UgaGF2ZSBydW5uaW5nPycsXG4gICAgICAgICAgICAgICAgc2hvd0J1dHRvbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYWRkIHN1Y2Nlc3MgYW5kIGZhaWx1cmUgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnb29nbGUuc2NyaXB0LnJ1bi5zZXRTdG9wRmxhZygpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgaGF2ZSBzdG9wcGVkIGFsbCBmb2xkZXIgY29waWVzLiBUbyByZXN0YXJ0IHRoZW0sIHBsZWFzZSB1c2UgdGhlIFwiUmVzdW1lXCIgZmVhdHVyZS4nLFxuICAgICAgICAgICAgICAgICAgICBzaG93QnV0dG9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1BhdXNlLmh0bWwiLCI8ZGl2IGlkPVwicmVzdW1lLXZhbGlkYXRpb24tZXJyb3JzXCI+PC9kaXY+XG5cbjxkaXYgaWQ9XCJyZXN1bWUtZm9ybS1kaXZcIiBjbGFzcz1cImZvcm0tZGl2XCI+XG4gICAgPGZvcm0gaWQ9XCJyZXN1bWVGb3JtXCIgbmFtZT1cInJlc3VtZUZvcm1cIiAgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBvbjpzdWJtaXQ9J2hhbmRsZVN1Ym1pdChldmVudCknPlxuICAgICAgICBcbiAgICAgICAgPFNlbGVjdEZvbGRlciBzZWxlY3RUZXh0PXt7c2VsZWN0VGV4dH19IC8+IFxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8IS0tU3VibWl0LS0+XG4gICAgICAgIDxTdWJtaXRCdXR0b24gYnV0dG9uVGV4dD17e2J1dHRvblRleHR9fSBvbjpjbGljaz0naGFuZGxlQ2xpY2soZXZlbnQpJyAvPlxuXG4gICAgPC9mb3JtPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNlbGVjdEZvbGRlciBmcm9tICcuL1NlbGVjdEZvbGRlcic7XG4gICAgaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuL1N1Ym1pdEJ1dHRvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnUmVzdW1lIGNvcHlpbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdTZWxlY3QgdGhlIGZvbGRlciBjb3B5IHRoYXQgaXMgaW4gcHJvZ3Jlc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFNlbGVjdEZvbGRlcixcbiAgICAgICAgICAgIFN1Ym1pdEJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYW5kbGVDbGljayhlKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLmh0bWwiLCI8ZGl2IGlkPVwic3RhcnQtdmFsaWRhdGlvbi1lcnJvcnNcIj48L2Rpdj5cblxuPCEtLUZvcm0tLT5cbjxkaXYgaWQ9XCJmb3JtRGl2XCIgY2xhc3M9XCJmb3JtLWRpdlwiPlxuICAgIDxmb3JtIGlkPVwiZm9sZGVyRm9ybVwiIG5hbWU9XCJmb2xkZXJGb3JtXCIgb246c3VibWl0PSdoYW5kbGVTdWJtaXQoZXZlbnQpJz5cblxuICAgICAgICA8U2VsZWN0Rm9sZGVyIHNlbGVjdFRleHQ9e3tzZWxlY3RUZXh0fX0gLz5cbiAgICAgICAgXG4gICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgPCEtLU5ldyBmb2xkZXIgbmFtZS0tPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0ZmllbGRcIiBmb3I9XCJuZXdGb2xkZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3Rm9sZGVyXCIgbmFtZT1cIm5ld0ZvbGRlclwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRmaWVsZF9fbGFiZWxcIj5OZXcgZm9sZGVyIG5hbWU8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cblxuXG4gICAgICAgIDwhLS1Db3B5IHBlcm1pc3Npb25zPy0tPlxuICAgICAgICBDb3B5IHNoYXJpbmcgcGVybWlzc2lvbnNcbiAgICAgICAgPCEtLVF1ZXN0aW9uIG1hcmsgYnV0dG9uLS0+XG4gICAgICAgIDxzcGFuIHRhYmluZGV4PVwiMTBcIiBjbGFzcz1cInRvb2x0aXAtdG9nZ2xlXCIgZGF0YS10b29sdGlwPVwiU2VsZWN0IHRoaXMgYm94IGlmIHlvdSB3YW50IHRoZSBkb2N1bWVudHMgaW4gdGhlIGZvbGRlciBjb3B5IHRvIGJlIGVkaXRhYmxlL3ZpZXdhYmxlIGJ5IHRoZSBzYW1lIHBlb3BsZSBhcyB0aGUgb3JpZ2luYWxzLiBPd25lcnMgb2Ygb3JpZ2luYWxzIHdpbGwgYmVjb21lIGVkaXRvcnMgb2YgdGhlIGNvcGllcy4gQ29weWluZyB0YWtlcyBtdWNoIGxvbmdlciBpZiAnWWVzJyBpcyBzZWxlY3RlZC5cIj5cbiAgICAgICAgICAgIDxRdWVzdGlvbiAvPlxuICAgICAgICA8L3NwYW4+IFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgaWQ9XCJwZXJtaXNzaW9ucy1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBlcm1pc3Npb25zXCIgdmFsdWU9XCJub1wiIGNoZWNrZWQvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW9fX2xhYmVsXCI+Tm88L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBlcm1pc3Npb25zXCIgdmFsdWU9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW9fX2xhYmVsXCI+WWVzPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwhLS1Db3B5IHRvLS0+XG4gICAgICAgIENvcHkgZm9sZGVyIHRvXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgaWQ9XCJkZXN0aW5hdGlvbi1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvcHlMb2NhdGlvbk9wdGlvbnNcIiB2YWx1ZT1cInNhbWVcIiBjaGVja2VkLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvX19sYWJlbFwiPlNhbWUgYXMgc291cmNlIGZvbGRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29weUxvY2F0aW9uT3B0aW9uc1wiIHZhbHVlPVwicm9vdFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5Sb290IGRpcmVjdG9yeSAoaS5lLiBhdCB0aGUgdG9wIG9mIFwiTXkgRHJpdmVcIik8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwhLS1TdWJtaXQtLT5cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBidXR0b25UZXh0PXt7YnV0dG9uVGV4dH19IG9uOmNsaWNrPSdoYW5kbGVDbGljayhldmVudCknIC8+XG5cbiAgICA8L2Zvcm0+XG5cbjwvZGl2PiAgIFxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBRdWVzdGlvbiBmcm9tICcuL2ljb25zL1F1ZXN0aW9uJztcbiAgICBpbXBvcnQgU2VsZWN0Rm9sZGVyIGZyb20gJy4vU2VsZWN0Rm9sZGVyJztcbiAgICBpbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4vU3VibWl0QnV0dG9uJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdDb3B5IEZvbGRlcicsXG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ0ZvbGRlciB0byBjb3B5J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBRdWVzdGlvbixcbiAgICAgICAgICAgIFNlbGVjdEZvbGRlcixcbiAgICAgICAgICAgIFN1Ym1pdEJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYW5kbGVDbGljayhlKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdGFydC5odG1sIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XG4gICAge3sjZWFjaCB2aWV3cyBhcyB2aWV3fX1cbiAgICAgICAgPGRpdiBpZD0ne3t2aWV3LmlkfX0nIGNsYXNzPSd0YWIge3thY3RpdmUgPT09IHZpZXcuaWQgPyAnYWN0aXZlJyA6ICcnfX0nPjwvZGl2PlxuICAgIHt7L2VhY2h9fVxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBvbmNyZWF0ZSgpIHtcbiAgICAgICAgICAgIC8vIHJlbmRlciBlYWNoIHZpZXcgY29tcG9uZW50LlxuICAgICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIHRoaXMuX3N0YXRlIHNlZW1zIHRvIGJlIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyB3YXkgdG8gYWNjZXNzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXQoJ3ZpZXdzJyk7XG4gICAgICAgICAgICB2aWV3cy5mb3JFYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgICAgICAgICBuZXcgdmlldy5jb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcuaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IGNvbnRyb2wgdGhlXG4gKiBzaG93aW5nL2hpZGluZyBvZiBET00gZWxlbWVudHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgICogVXBkYXRlcyBcIlNlbGVjdCBGb2xkZXJcIiBmaWVsZHMgd2l0aCBzZWxlY3RlZCBmb2xkZXIgaW5mb1xuICAgICovXG4gIGZvbGRlcklzU2VsZWN0ZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkRm9sZGVyKSB7XG4gICAgLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAkKCcuZ2V0Rm9sZGVyRXJyb3JzJykudGV4dCgnJyk7XG4gICAgJCgnI25ld0ZvbGRlcicpLnZhbChzZWxlY3RlZEZvbGRlci5kZXN0TmFtZSk7XG4gICAgJCgnLmZvbGRlck5hbWUnKS50ZXh0KHNlbGVjdGVkRm9sZGVyLnNyY05hbWUpO1xuXG4gICAgJCgnLmZvbGRlclNlbGVjdCcpLmhpZGUoKTtcbiAgICAkKCcuZm9sZGVyTG9va3VwJykuaGlkZSgpO1xuICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5zaG93KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBGdW5jdGlvbiB0byBhbGVydCB1c2VyIHRoYXQgZm9sZGVyIGlzIGJlaW5nIGlkZW50aWZpZWRcbiAgICAqIEhpZGVzIGZvbGRlclxuICAgICovXG4gIG9uRm9sZGVyTG9va3VwOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZm9sZGVyTG9va3VwJykuc2hvdygpO1xuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBlaXRoZXIgZm9ybSB2YWxpZGF0ZXMuXG4gICAgKiBVcGRhdGVzIFVJIHRvIGluZGljYXRlIHRoYXQgdGhlIGFwcCBpcyBpbml0aWFsaXppbmcuXG4gICAgKi9cbiAgb25WYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgJCgnI2Vycm9ycycpLmh0bWwoJycpO1xuICAgICQoJyNzdGFydC12YWxpZGF0aW9uLWVycm9ycycpLmh0bWwoJycpO1xuICAgICQoJyNyZXN1bWUtdmFsaWRhdGlvbi1lcnJvcnMnKS5odG1sKCcnKTtcbiAgfSxcblxuICAvKipcbiAgICAqIFJlc2V0cyBmb3JtIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAqL1xuICByZXNldEZvcm06IGZ1bmN0aW9uKCkge1xuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5zaG93KCk7XG4gICAgJCgnLnNlbGVjdGVkRm9sZGVySW5mbycpLmhpZGUoKTtcbiAgICAkKCcuZ2V0Rm9sZGVyRXJyb3JzJykuaGlkZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIFNob3cgYW4gb3ZlcmxheSB3aXRoIGEgc3Bpbm5lciBhbmQgYSBtZXNzYWdlXG4gICAgICovXG4gIHNob3dQcm9jZXNzaW5nT3ZlcmxheTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICB2YXIgb3ZlcmxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheV9fbWVzc2FnZScpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgb3ZlcmxheU1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBIaWRlIHRoZSBvdmVybGF5XG4gICAgICovXG4gIGNsZWFyUHJvY2Vzc2luZ092ZXJsYXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICB2YXIgb3ZlcmxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheV9fbWVzc2FnZScpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBvdmVybGF5TWVzc2FnZS5pbm5lclRleHQgPSAnJztcbiAgfSxcblxuICBoaWRlU3RlcDE6IGZ1bmN0aW9uKHJlc3VtaW5nKSB7XG4gICAgLy8gSGlkZSBzdGVwIDEgZm9yIFN0YXJ0IG9yIFJlc3VtaW5nXG4gICAgdmFyIGlkID0gcmVzdW1pbmcgPyAncmVzdW1lLXN0ZXAxJyA6ICdzdGFydC1zdGVwMSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogc2hvd3MgZWl0aGVyIGByZXN1bWUtc3VjY2Vzc2AsIGByZXN1bWUtZXJyb3JgLCBgc3RhcnQtc3VjY2Vzc2AsIG9yIGBzdGFydC1lcnJvcmBcbiAgICAgKiBDYW4gYWxzbyBzaG93IGJvdGggc3RhcnQgYW5kIHJlc3VtZSBhdCBzYW1lIHRpbWUgaWYgcmVzdW1pbmcgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXN1bWluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdWNjZXNzZnVsbmVzcyBzaG91bGQgYmUgZWl0aGVyICdlcnJvcicgb3IgJ3N1Y2Nlc3MnXG4gICAgICovXG4gIHNob3dTdGVwMjogZnVuY3Rpb24ocmVzdW1pbmcsIHN1Y2Nlc3NmdWxuZXNzKSB7XG4gICAgaWYgKHJlc3VtaW5nID09PSBudWxsIHx8IHJlc3VtaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC0nICsgc3VjY2Vzc2Z1bG5lc3MpLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAnYmxvY2snO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaWQgPSByZXN1bWluZyA/ICdyZXN1bWUnIDogJ3N0YXJ0JztcbiAgICBpZCArPSAnLScgKyBzdWNjZXNzZnVsbmVzcztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0sXG5cbiAgc2hvd1Rvb01hbnlUcmlnZ2VyczogZnVuY3Rpb24oKSB7XG4gICAgJCgnLnRvby1tYW55LXRyaWdnZXJzJykuc2hvdygpO1xuICB9LFxuXG4gIGhpZGVUb29NYW55VHJpZ2dlcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy50b28tbWFueS10cmlnZ2VycycpLmhpZGUoKTtcbiAgfSxcblxuICBzaG93RXJyb3JzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZXJyb3JzJykuc2hvdygpO1xuICB9LFxuXG4gIGhpZGVFcnJvcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy5lcnJvcnMnKS5oaWRlKCk7XG4gIH0sXG5cbiAgc2hvd1BhdXNlU3RlcDI6IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1zdGVwMScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLXN0ZXAyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ET00uanMiLCIvKipcbiAqIFBhcnNlcyBmb2xkZXIgVVJMIHN0cmluZyBhbmQgcmV0dXJucyBmb2xkZXIgSUQgc3RyaW5nXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdGhlIGZvbGRlciBVUkwgZm9yIHRoZSBzZWxlY3RlZCBmb2xkZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gaWQgdGhlIGZvbGRlciBJRCBmb3IgdGhlIHNlbGVjdGVkIGZvbGRlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCkge1xuICB2YXIgaWQsIGFtcDtcblxuICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBzdHJpbmcgYXQgd2hpY2ggdGhlIGZvbGRlcklkIHN0YXJ0c1xuICB2YXIgaWRTdGFydCA9IHVybC5zZWFyY2goJ2lkPScpO1xuICB2YXIgZm9sZGVyc1N0YXJ0ID0gdXJsLnNlYXJjaCgnZm9sZGVycycpO1xuXG4gIGlmIChpZFN0YXJ0ID4gMCkge1xuICAgIGlkID0gdXJsLnNsaWNlKGlkU3RhcnQgKyAzKTtcbiAgfSBlbHNlIGlmIChmb2xkZXJzU3RhcnQgPiAwKSB7XG4gICAgaWQgPSB1cmwuc2xpY2UoZm9sZGVyc1N0YXJ0ICsgOCk7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSB1cmw7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBhbXBlcnNhbmQgaW4gdGhlIHJlbWFpbmluZyBzdHJpbmcsIHdoaWNoIGlzIHRoZSBkZWxpbWl0ZXIgYmV0d2VlbiB0aGUgZm9sZGVySWQgYW5kIHRoZSBzaGFyaW5nIHByaXZpbGVnZXNcbiAgYW1wID0gaWQuaW5kZXhPZignJicpO1xuXG4gIC8vIFNsaWNlIHRoZSBzdHJpbmcgdXAgdG8gdGhlIGFtcGVyc2FuZFxuICBpZiAoYW1wID4gMCkge1xuICAgIGlkID0gaWQuc2xpY2UoMCwgYW1wKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wYXJzZUlkLmpzIiwiLypcbk1hbnksIG1hbnkgdGhhbmtzIHRvIFtKZWFuLVBpZXJyZSBWZXJodWxzdF0oaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vK0plYW5QaWVycmVWZXJodWxzdC9wb3N0cykgXG5mb3IgcHJvdmlkaW5nIHRoZSB3b3JraW5nIGJhY2tib25lIG9mIHRoaXMgc2NyaXB0XG4qL1xuXG52YXIgRE9NID0gcmVxdWlyZSgnLi9ET00nKTtcblxuLy8gdmFuaWxsYUpTIGltcGxlbWVudGF0aW9uIG9mICQuZ2V0U2NyaXB0KCksIHRoYW5rcyB0byBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2ODM5Njk4L2pxdWVyeS1nZXRzY3JpcHQtYWx0ZXJuYXRpdmUtaW4tbmF0aXZlLWphdmFzY3JpcHRcbmZ1bmN0aW9uIGdldFNjcmlwdChzb3VyY2UsIGNhbGxiYWNrKSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgdmFyIHByaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBzY3JpcHQuYXN5bmMgPSAxO1xuICBwcmlvci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIHByaW9yKTtcblxuICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKF8sIGlzQWJvcnQpIHtcbiAgICBpZiAoXG4gICAgICBpc0Fib3J0IHx8XG4gICAgICAhc2NyaXB0LnJlYWR5U3RhdGUgfHxcbiAgICAgIC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc2NyaXB0LnJlYWR5U3RhdGUpXG4gICAgKSB7XG4gICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghaXNBYm9ydCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNjcmlwdC5zcmMgPSBzb3VyY2U7XG59XG5cbmdldFNjcmlwdCgnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJywgb25BcGlMb2FkKTtcblxuLy8gRGVjbGFyZSB2YXJpYWJsZXNcbnZhciBzZWxlY3RlZEZvbGRlciA9IHt9O1xudmFyIHBpY2tlckFwaUxvYWRlZCA9IGZhbHNlO1xudmFyIHBpY2tlckJ1aWxkZXI7XG5cbmV4cG9ydHMuZm9sZGVyID0gc2VsZWN0ZWRGb2xkZXI7XG5cbmZ1bmN0aW9uIG9uQXBpTG9hZCgpIHtcbiAgZ2FwaS5sb2FkKCdwaWNrZXInLCB7XG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcGlja2VyQXBpTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBnb29nbGUuc2NyaXB0LnJ1blxuICAgIC53aXRoU3VjY2Vzc0hhbmRsZXIoY3JlYXRlUGlja2VyKVxuICAgIC53aXRoRmFpbHVyZUhhbmRsZXIoc2hvd0Vycm9yKVxuICAgIC5nZXRPQXV0aFRva2VuKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2tlcih0b2tlbikge1xuICBpZiAocGlja2VyQXBpTG9hZGVkICYmIHRva2VuKSB7XG4gICAgdmFyIGZvbGRlcnNWaWV3ID0gbmV3IGdvb2dsZS5waWNrZXIuRG9jc1ZpZXcoKVxuICAgICAgLnNldEluY2x1ZGVGb2xkZXJzKHRydWUpXG4gICAgICAuc2V0TWltZVR5cGVzKCdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuZm9sZGVyJylcbiAgICAgIC5zZXRTZWxlY3RGb2xkZXJFbmFibGVkKHRydWUpO1xuXG4gICAgcGlja2VyQnVpbGRlciA9IG5ldyBnb29nbGUucGlja2VyLlBpY2tlckJ1aWxkZXIoKVxuICAgICAgLmFkZFZpZXcoZm9sZGVyc1ZpZXcpXG4gICAgICAuaGlkZVRpdGxlQmFyKClcbiAgICAgIC5zZXRPQXV0aFRva2VuKHRva2VuKVxuICAgICAgLnNldE1heEl0ZW1zKDEpXG4gICAgICAuc2V0Q2FsbGJhY2socGlja2VyQ2FsbGJhY2spXG4gICAgICAuc2V0VGl0bGUoJ1NlbGVjdCBhIGZvbGRlciB0byBjb3B5JylcbiAgICAgIC5zZXRPcmlnaW4oJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20nKVxuICAgICAgLmJ1aWxkKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdG9kbzogaGFuZGxlIGVycm9yc1xuICB9XG59XG5cbi8vIEFsbG93cyBtZXRob2QgYmluZGluZyBmcm9tIGV4dGVybmFsIHNjcmlwdHMsIGUuZy4gaW5pdC5qc1xuZXhwb3J0cy5zaG93UGlja2VyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwaWNrZXJCdWlsZGVyLnNldFZpc2libGUodHJ1ZSk7XG59O1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgY2hvc2VuIGRvY3VtZW50J3MgbWV0YWRhdGEgZnJvbSB0aGVcbiAqIHJlc3BvbnNlIG9iamVjdC4gRm9yIGRldGFpbHMgb24gdGhlIHJlc3BvbnNlIG9iamVjdCwgc2VlXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9waWNrZXIvZG9jcy9yZXN1bHRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgcmVzcG9uc2Ugb2JqZWN0LlxuICovXG5cbmZ1bmN0aW9uIHBpY2tlckNhbGxiYWNrKGRhdGEpIHtcbiAgdmFyIGFjdGlvbiA9IGRhdGFbZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5BQ1RJT05dO1xuXG4gIGlmIChhY3Rpb24gPT0gZ29vZ2xlLnBpY2tlci5BY3Rpb24uUElDS0VEKSB7XG4gICAgdmFyIGRvYyA9IGRhdGFbZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5ET0NVTUVOVFNdWzBdO1xuICAgIHNldFNlbGVjdGVkRm9sZGVyKHtcbiAgICAgIHNyY0lkOiBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5JRF0sXG4gICAgICBzcmNQYXJlbnRJZDogZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuUEFSRU5UX0lEXSxcbiAgICAgIHNyY05hbWU6IGRvY1tnb29nbGUucGlja2VyLkRvY3VtZW50Lk5BTUVdLFxuICAgICAgZGVzdE5hbWU6ICdDb3B5IG9mICcgKyBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5OQU1FXVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBnb29nbGUucGlja2VyLkFjdGlvbi5DQU5DRUwpIHtcbiAgICBnb29nbGUuc2NyaXB0Lmhvc3QuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIHNhdmUgcGFzc2VkIHZhbHVlcyB0byBzZWxlY3RlZEZvbGRlclxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBzZWxlY3RlZEZvbGRlciBwcm9wZXJ0aWVzIHRvIHNhdmVcbiAqL1xuZnVuY3Rpb24gc2V0U2VsZWN0ZWRGb2xkZXIocHJvcGVydGllcykge1xuICAvLyBzYXZlIHByb3BlcnRpZXNcbiAgc2VsZWN0ZWRGb2xkZXIuc3JjSWQgPSBwcm9wZXJ0aWVzLnNyY0lkO1xuICBzZWxlY3RlZEZvbGRlci5zcmNQYXJlbnRJZCA9IHByb3BlcnRpZXMuc3JjUGFyZW50SWQ7XG4gIHNlbGVjdGVkRm9sZGVyLnNyY05hbWUgPSBwcm9wZXJ0aWVzLnNyY05hbWU7XG4gIHNlbGVjdGVkRm9sZGVyLmRlc3ROYW1lID0gcHJvcGVydGllcy5kZXN0TmFtZTtcblxuICBET00uZm9sZGVySXNTZWxlY3RlZChzZWxlY3RlZEZvbGRlcik7XG59XG5cbmV4cG9ydHMuc2V0U2VsZWN0ZWRGb2xkZXIgPSBzZXRTZWxlY3RlZEZvbGRlcjtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKCkge1xuICAkKCcjZ2V0Rm9sZGVyRXJyb3JzJykudGV4dChcbiAgICAnRXJyb3IgZ2V0dGluZyBPQXV0aCB0b2tlbiBmb3IgR29vZ2xlIFBpY2tlci4gIFBsZWFzZSBtYW51YWxseSBpbnB1dCBmb2xkZXIgVVJMJ1xuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==