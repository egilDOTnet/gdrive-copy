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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTI5NTA2ZWRkOTM3NmEwMTk0YjAiLCJ3ZWJwYWNrOi8vLy4vfi9zdmVsdGUvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdEZvbGRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWNjb3VudFN3aXRjaGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGF1c2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGFydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGlja2VyLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJ2aWV3cyIsImlkIiwidGl0bGUiLCJjb21wb25lbnQiLCJBYm91dCIsIlN0YXJ0IiwiUmVzdW1lIiwiUGF1c2UiLCJGQVEiLCJhY3RpdmUiLCJjb21wb25lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvbGRlcklzU2VsZWN0ZWQiLCJzZWxlY3RlZEZvbGRlciIsIiQiLCJ0ZXh0IiwidmFsIiwiZGVzdE5hbWUiLCJzcmNOYW1lIiwiaGlkZSIsInNob3ciLCJvbkZvbGRlckxvb2t1cCIsIm9uVmFsaWQiLCJodG1sIiwicmVzZXRGb3JtIiwic2hvd1Byb2Nlc3NpbmdPdmVybGF5IiwibWVzc2FnZSIsIm92ZXJsYXkiLCJvdmVybGF5TWVzc2FnZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsImNsZWFyUHJvY2Vzc2luZ092ZXJsYXkiLCJoaWRlU3RlcDEiLCJyZXN1bWluZyIsImdldEVsZW1lbnRCeUlkIiwic2hvd1N0ZXAyIiwic3VjY2Vzc2Z1bG5lc3MiLCJ1bmRlZmluZWQiLCJzaG93VG9vTWFueVRyaWdnZXJzIiwiaGlkZVRvb01hbnlUcmlnZ2VycyIsInNob3dFcnJvcnMiLCJoaWRlRXJyb3JzIiwic2hvd1BhdXNlU3RlcDIiLCJ1cmwiLCJhbXAiLCJpZFN0YXJ0Iiwic2VhcmNoIiwiZm9sZGVyc1N0YXJ0Iiwic2xpY2UiLCJpbmRleE9mIiwiRE9NIiwicmVxdWlyZSIsImdldFNjcmlwdCIsInNvdXJjZSIsImNhbGxiYWNrIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInByaW9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhc3luYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbmxvYWQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfIiwiaXNBYm9ydCIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwic3JjIiwib25BcGlMb2FkIiwicGlja2VyQXBpTG9hZGVkIiwicGlja2VyQnVpbGRlciIsImZvbGRlciIsImdhcGkiLCJsb2FkIiwiZ29vZ2xlIiwicnVuIiwid2l0aFN1Y2Nlc3NIYW5kbGVyIiwiY3JlYXRlUGlja2VyIiwid2l0aEZhaWx1cmVIYW5kbGVyIiwic2hvd0Vycm9yIiwiZ2V0T0F1dGhUb2tlbiIsInRva2VuIiwiZm9sZGVyc1ZpZXciLCJwaWNrZXIiLCJEb2NzVmlldyIsInNldEluY2x1ZGVGb2xkZXJzIiwic2V0TWltZVR5cGVzIiwic2V0U2VsZWN0Rm9sZGVyRW5hYmxlZCIsIlBpY2tlckJ1aWxkZXIiLCJhZGRWaWV3IiwiaGlkZVRpdGxlQmFyIiwic2V0T0F1dGhUb2tlbiIsInNldE1heEl0ZW1zIiwic2V0Q2FsbGJhY2siLCJwaWNrZXJDYWxsYmFjayIsInNldFRpdGxlIiwic2V0T3JpZ2luIiwiYnVpbGQiLCJzaG93UGlja2VyIiwic2V0VmlzaWJsZSIsImFjdGlvbiIsIlJlc3BvbnNlIiwiQUNUSU9OIiwiQWN0aW9uIiwiUElDS0VEIiwiZG9jIiwiRE9DVU1FTlRTIiwic2V0U2VsZWN0ZWRGb2xkZXIiLCJzcmNJZCIsIkRvY3VtZW50IiwiSUQiLCJzcmNQYXJlbnRJZCIsIlBBUkVOVF9JRCIsIk5BTUUiLCJDQU5DRUwiLCJob3N0IiwiY2xvc2UiLCJwcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0FBdUJDLEVBQTNCLENBRFM7QUFFaEJDLG1CQUFhTixJQUFJL0IsT0FBT1MsTUFBUCxDQUFjMEIsUUFBZCxDQUF1QkcsU0FBM0IsQ0FGRztBQUdoQmhHLGVBQVN5RixJQUFJL0IsT0FBT1MsTUFBUCxDQUFjMEIsUUFBZCxDQUF1QkksSUFBM0IsQ0FITztBQUloQmxHLGdCQUFVLGFBQWEwRixJQUFJL0IsT0FBT1MsTUFBUCxDQUFjMEIsUUFBZCxDQUF1QkksSUFBM0I7QUFKUCxLQUFsQjtBQU1ELEdBUkQsTUFRTyxJQUFJYixVQUFVMUIsT0FBT1MsTUFBUCxDQUFjb0IsTUFBZCxDQUFxQlcsTUFBbkMsRUFBMkM7QUFDaER4QyxXQUFPcEIsTUFBUCxDQUFjNkQsSUFBZCxDQUFtQkMsS0FBbkI7QUFDRDtBQUNGOztBQUVEOzs7OztBQUtBLFNBQVNULGlCQUFULENBQTJCVSxVQUEzQixFQUF1QztBQUNyQztBQUNBMUcsaUJBQWVpRyxLQUFmLEdBQXVCUyxXQUFXVCxLQUFsQztBQUNBakcsaUJBQWVvRyxXQUFmLEdBQTZCTSxXQUFXTixXQUF4QztBQUNBcEcsaUJBQWVLLE9BQWYsR0FBeUJxRyxXQUFXckcsT0FBcEM7QUFDQUwsaUJBQWVJLFFBQWYsR0FBMEJzRyxXQUFXdEcsUUFBckM7O0FBRUFrQyxNQUFJdkMsZ0JBQUosQ0FBcUJDLGNBQXJCO0FBQ0Q7O0FBRURGLFFBQVFrRyxpQkFBUixHQUE0QkEsaUJBQTVCOztBQUVBLFNBQVM1QixTQUFULEdBQXFCO0FBQ25CbkUsSUFBRSxrQkFBRixFQUFzQkMsSUFBdEIsQ0FDRSxnRkFERjtBQUdELEMiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMjk1MDZlZGQ5Mzc2YTAxOTRiMCIsImZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gYXNzaWduICggdGFyZ2V0ICkge1xuXHRmb3IgKCB2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKCB2YXIgayBpbiBzb3VyY2UgKSB0YXJnZXRba10gPSBzb3VyY2Vba107XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBhcHBlbmROb2RlICggbm9kZSwgdGFyZ2V0ICkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZSAoIG5vZGUsIHRhcmdldCwgYW5jaG9yICkge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBub2RlLCBhbmNob3IgKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoTm9kZSAoIG5vZGUgKSB7XG5cdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuICggYmVmb3JlLCBhZnRlciApIHtcblx0d2hpbGUgKCBiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlciApIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggYmVmb3JlLm5leHRTaWJsaW5nICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2ggKCBpdGVyYXRpb25zLCBkZXRhY2gsIHN0YXJ0ICkge1xuXHRmb3IgKCB2YXIgaSA9IHN0YXJ0OyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRpZiAoIGl0ZXJhdGlvbnNbaV0gKSBpdGVyYXRpb25zW2ldLmRlc3Ryb3koIGRldGFjaCApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggbmFtZSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50ICggbmFtZSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0ICggZGF0YSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCBkYXRhICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQgKCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggJycgKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lciAoIG5vZGUsIGV2ZW50LCBoYW5kbGVyICkge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50LCBoYW5kbGVyLCBmYWxzZSApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAoIG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGUsIHZhbHVlICk7XG59XG5cbmZ1bmN0aW9uIHNldFhsaW5rQXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUyggJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlICk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlICggZ3JvdXAgKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRpZiAoIGdyb3VwW2ldLmNoZWNrZWQgKSB2YWx1ZS5wdXNoKCBncm91cFtpXS5fX3ZhbHVlICk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBsaW5lYXIgKCB0ICkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVLZXlmcmFtZXMgKCBhLCBiLCBkZWx0YSwgZHVyYXRpb24sIGVhc2UsIGZuLCBub2RlLCBzdHlsZSApIHtcblx0dmFyIGlkID0gJ19fc3ZlbHRlJyArIH5+KCBNYXRoLnJhbmRvbSgpICogMWU5ICk7IC8vIFRPRE8gbWFrZSB0aGlzIG1vcmUgcm9idXN0XG5cdHZhciBrZXlmcmFtZXMgPSAnQGtleWZyYW1lcyAnICsgaWQgKyAne1xcbic7XG5cblx0Zm9yICggdmFyIHAgPSAwOyBwIDw9IDE7IHAgKz0gMTYuNjY2IC8gZHVyYXRpb24gKSB7XG5cdFx0dmFyIHQgPSBhICsgZGVsdGEgKiBlYXNlKCBwICk7XG5cdFx0a2V5ZnJhbWVzICs9ICggcCAqIDEwMCApICsgJyV7JyArIGZuKCB0ICkgKyAnfVxcbic7XG5cdH1cblxuXHRrZXlmcmFtZXMgKz0gJzEwMCUgeycgKyBmbiggYiApICsgJ31cXG59Jztcblx0c3R5bGUudGV4dENvbnRlbnQgKz0ga2V5ZnJhbWVzO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlICk7XG5cblx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbi5zcGxpdCggJywnIClcblx0XHQuZmlsdGVyKCBmdW5jdGlvbiAoIGFuaW0gKSB7XG5cdFx0XHQvLyB3aGVuIGludHJvaW5nLCBkaXNjYXJkIG9sZCBhbmltYXRpb25zIGlmIHRoZXJlIGFyZSBhbnlcblx0XHRcdHJldHVybiBhbmltICYmICggZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoIGFuaW0gKSApO1xuXHRcdH0pXG5cdFx0LmNvbmNhdCggaWQgKyAnICcgKyBkdXJhdGlvbiArICdtcyBsaW5lYXIgMSBmb3J3YXJkcycgKVxuXHRcdC5qb2luKCAnLCAnICk7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uICggbm9kZSwgZm4sIHBhcmFtcywgaW50cm8sIG91dGdyb3VwICkge1xuXHR2YXIgb2JqID0gZm4oIG5vZGUsIHBhcmFtcyApO1xuXHR2YXIgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHR2YXIgZWFzZSA9IG9iai5lYXNpbmcgfHwgbGluZWFyO1xuXG5cdC8vIFRPRE8gc2hhcmUgPHN0eWxlPiB0YWcgYmV0d2VlbiBhbGwgdHJhbnNpdGlvbnM/XG5cdGlmICggb2JqLmNzcyApIHtcblx0XHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3R5bGUnICk7XG5cdH1cblxuXHRpZiAoIGludHJvICYmIG9iai50aWNrICkgb2JqLnRpY2soIDAgKTtcblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXHRcdHJ1bjogZnVuY3Rpb24gKCBpbnRybywgY2FsbGJhY2sgKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArICggb2JqLmRlbGF5IHx8IDAgKSxcblx0XHRcdFx0aW50cm86IGludHJvLFxuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0XHRcdH07XG5cblx0XHRcdGlmICggb2JqLmRlbGF5ICkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmcgPSBwcm9ncmFtO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdGFydCggcHJvZ3JhbSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICF0aGlzLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCggdGhpcyApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uICggcHJvZ3JhbSApIHtcblx0XHRcdHByb2dyYW0uYSA9IHRoaXMudDtcblx0XHRcdHByb2dyYW0uYiA9IHByb2dyYW0uaW50cm8gPyAxIDogMDtcblx0XHRcdHByb2dyYW0uZGVsdGEgPSBwcm9ncmFtLmIgLSBwcm9ncmFtLmE7XG5cdFx0XHRwcm9ncmFtLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyggcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hICk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAoIG9iai5jc3MgKSB7XG5cdFx0XHRcdGdlbmVyYXRlS2V5ZnJhbWVzKCBwcm9ncmFtLmEsIHByb2dyYW0uYiwgcHJvZ3JhbS5kZWx0YSwgcHJvZ3JhbS5kdXJhdGlvbiwgZWFzZSwgb2JqLmNzcywgbm9kZSwgc3R5bGUgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggbm93ICkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoICFwcm9ncmFtICkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZSggcCAvIHByb2dyYW0uZHVyYXRpb24gKTtcblx0XHRcdGlmICggb2JqLnRpY2sgKSBvYmoudGljayggdGhpcy50ICk7XG5cdFx0fSxcblx0XHRkb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnQgPSB0aGlzLnByb2dyYW0uYjtcblx0XHRcdGlmICggb2JqLnRpY2sgKSBvYmoudGljayggdGhpcy50ICk7XG5cdFx0XHRpZiAoIG9iai5jc3MgKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKCBzdHlsZSApO1xuXHRcdFx0dGhpcy5wcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblx0XHRhYm9ydDogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCAxICk7XG5cdFx0XHRpZiAoIG9iai5jc3MgKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKCBzdHlsZSApO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXG5cdGFkZDogZnVuY3Rpb24gKCB0cmFuc2l0aW9uICkge1xuXHRcdHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLnB1c2goIHRyYW5zaXRpb24gKTtcblxuXHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHR9XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24gKCkge1xuXHRcdHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0dmFyIGkgPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9ucy5sZW5ndGg7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHZhciB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnNbaV07XG5cblx0XHRcdGlmICggdHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmRvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnBlbmRpbmcgJiYgbm93ID49IHRyYW5zaXRpb24ucGVuZGluZy5zdGFydCApIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCggdHJhbnNpdGlvbi5wZW5kaW5nICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdHJhbnNpdGlvbi5ydW5uaW5nICkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnVwZGF0ZSggbm93ICk7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICggIXRyYW5zaXRpb24ucGVuZGluZyApIHtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nICkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0cmFuc2l0aW9uTWFuYWdlci5uZXh0ICk7XG5cdFx0fVxuXHR9XG59O1xuXG5mdW5jdGlvbiBkaWZmZXJzICggYSwgYiApIHtcblx0cmV0dXJuICggYSAhPT0gYiApIHx8ICggYSAmJiAoIHR5cGVvZiBhID09PSAnb2JqZWN0JyApIHx8ICggdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgKSApO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyAoIGNvbXBvbmVudCwgZ3JvdXAsIG5ld1N0YXRlLCBvbGRTdGF0ZSApIHtcblx0Zm9yICggdmFyIGtleSBpbiBncm91cCApIHtcblx0XHRpZiAoICEoIGtleSBpbiBuZXdTdGF0ZSApICkgY29udGludWU7XG5cblx0XHR2YXIgbmV3VmFsdWUgPSBuZXdTdGF0ZVsga2V5IF07XG5cdFx0dmFyIG9sZFZhbHVlID0gb2xkU3RhdGVbIGtleSBdO1xuXG5cdFx0aWYgKCBkaWZmZXJzKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSApIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBncm91cFsga2V5IF07XG5cdFx0XHRpZiAoICFjYWxsYmFja3MgKSBjb250aW51ZTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cdFx0XHRcdGlmICggY2FsbGJhY2suX19jYWxsaW5nICkgY29udGludWU7XG5cblx0XHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29tcG9uZW50LCBuZXdWYWx1ZSwgb2xkVmFsdWUgKTtcblx0XHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldCAoIGtleSApIHtcblx0cmV0dXJuIGtleSA/IHRoaXMuX3N0YXRlWyBrZXkgXSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBmaXJlICggZXZlbnROYW1lLCBkYXRhICkge1xuXHR2YXIgaGFuZGxlcnMgPSBldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdLnNsaWNlKCk7XG5cdGlmICggIWhhbmRsZXJzICkgcmV0dXJuO1xuXG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwoIHRoaXMsIGRhdGEgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGdyb3VwID0gKCBvcHRpb25zICYmIG9wdGlvbnMuZGVmZXIgKSA/IHRoaXMuX29ic2VydmVycy5wb3N0IDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoIGdyb3VwWyBrZXkgXSB8fCAoIGdyb3VwWyBrZXkgXSA9IFtdICkgKS5wdXNoKCBjYWxsYmFjayApO1xuXG5cdGlmICggIW9wdGlvbnMgfHwgb3B0aW9ucy5pbml0ICE9PSBmYWxzZSApIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwoIHRoaXMsIHRoaXMuX3N0YXRlWyBrZXkgXSApO1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGdyb3VwWyBrZXkgXS5pbmRleE9mKCBjYWxsYmFjayApO1xuXHRcdFx0aWYgKCB+aW5kZXggKSBncm91cFsga2V5IF0uc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZURldiAoIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKSB7XG5cdHZhciBjID0gKCBrZXkgPSAnJyArIGtleSApLnNlYXJjaCggL1teXFx3XS8gKTtcblx0aWYgKCBjID4gLTEgKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPSBcIlRoZSBmaXJzdCBhcmd1bWVudCB0byBjb21wb25lbnQub2JzZXJ2ZSguLi4pIG11c3QgYmUgdGhlIG5hbWUgb2YgYSB0b3AtbGV2ZWwgcHJvcGVydHlcIjtcblx0XHRpZiAoIGMgPiAwICkgbWVzc2FnZSArPSBcIiwgaS5lLiAnXCIgKyBrZXkuc2xpY2UoIDAsIGMgKSArIFwiJyByYXRoZXIgdGhhbiAnXCIgKyBrZXkgKyBcIidcIjtcblxuXHRcdHRocm93IG5ldyBFcnJvciggbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG9ic2VydmUuY2FsbCggdGhpcywga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApO1xufVxuXG5mdW5jdGlvbiBvbiAoIGV2ZW50TmFtZSwgaGFuZGxlciApIHtcblx0aWYgKCBldmVudE5hbWUgPT09ICd0ZWFyZG93bicgKSByZXR1cm4gdGhpcy5vbiggJ2Rlc3Ryb3knLCBoYW5kbGVyICk7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdIHx8ICggdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdID0gW10gKTtcblx0aGFuZGxlcnMucHVzaCggaGFuZGxlciApO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKCBoYW5kbGVyICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGhhbmRsZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9uRGV2ICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHtcblx0XHRjb25zb2xlLndhcm4oIFwiVXNlIGNvbXBvbmVudC5vbignZGVzdHJveScsIC4uLikgaW5zdGVhZCBvZiBjb21wb25lbnQub24oJ3RlYXJkb3duJywgLi4uKSB3aGljaCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIFN2ZWx0ZSAyXCIgKTtcblx0XHRyZXR1cm4gdGhpcy5vbiggJ2Rlc3Ryb3knLCBoYW5kbGVyICk7XG5cdH1cblxuXHRyZXR1cm4gb24uY2FsbCggdGhpcywgZXZlbnROYW1lLCBoYW5kbGVyICk7XG59XG5cbmZ1bmN0aW9uIHNldCAoIG5ld1N0YXRlICkge1xuXHR0aGlzLl9zZXQoIGFzc2lnbigge30sIG5ld1N0YXRlICkgKTtcblx0dGhpcy5fcm9vdC5fZmx1c2goKTtcbn1cblxuZnVuY3Rpb24gX2ZsdXNoICgpIHtcblx0aWYgKCAhdGhpcy5fcmVuZGVySG9va3MgKSByZXR1cm47XG5cblx0d2hpbGUgKCB0aGlzLl9yZW5kZXJIb29rcy5sZW5ndGggKSB7XG5cdFx0dGhpcy5fcmVuZGVySG9va3MucG9wKCkoKTtcblx0fVxufVxuXG52YXIgcHJvdG8gPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlLFxuXHRvbjogb24sXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZURldixcblx0b246IG9uRGV2LFxuXHRzZXQ6IHNldCxcblx0X2ZsdXNoOiBfZmx1c2hcbn07XG5cbmV4cG9ydCB7IGRpZmZlcnMsIGRpc3BhdGNoT2JzZXJ2ZXJzLCBnZXQsIGZpcmUsIG9ic2VydmUsIG9ic2VydmVEZXYsIG9uLCBvbkRldiwgc2V0LCBfZmx1c2gsIHByb3RvLCBwcm90b0RldiwgYXBwZW5kTm9kZSwgaW5zZXJ0Tm9kZSwgZGV0YWNoTm9kZSwgZGV0YWNoQmV0d2VlbiwgZGVzdHJveUVhY2gsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIHNldEF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCBsaW5lYXIsIGdlbmVyYXRlS2V5ZnJhbWVzLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPCEtLVNlbGVjdCBGb2xkZXItLT5cbnt7c2VsZWN0VGV4dH19XG48IS0tRWxlbWVudHMgdG8gc2VsZWN0IGZvbGRlci0tPlxuPGRpdiBjbGFzcz1cImZvbGRlclNlbGVjdFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic2VsZWN0Rm9sZGVyQnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLS1zbWFsbCBzZWxlY3RGb2xkZXJCdXR0b25cIj5TZWxlY3QgRm9sZGVyPC9idXR0b24+XG4gICAgb3JcbiAgICA8bGFiZWwgZm9yPVwibmV3Rm9sZGVyXCIgY2xhc3M9XCJ0ZXh0ZmllbGRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb2xkZXJUZXh0Ym94XCIgbmFtZT1cIm5ld0ZvbGRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRmaWVsZF9fbGFiZWxcIiBvbjptb3VzZXVwPSdoYW5kbGVNb3VzZShldmVudCknIG9uOmtleXVwPSdoYW5kbGVLZXkoZXZlbnQpJz5QYXN0ZSBmb2xkZXIgVVJMIChDdHJsLVYpPC9zcGFuPlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImdldEZvbGRlckVycm9yc1wiPjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJmb2xkZXJMb29rdXBcIj5cbiAgICBGaW5kaW5nIGZvbGRlci4uLjxzcGFuIGNsYXNzPVwicm90YXRlLWNvbnRlbnRzXCI+PGkgY2xhc3M9XCJzcGlubmVyXCI+PC9pPjwvc3Bhbj5cbjwvZGl2PlxuXG5cbjwhLS1EaXNwbGF5IHdoZW4gZm9sZGVyIGlzIHNlbGVjdGVkLS0+XG48ZGl2IGNsYXNzPVwic2VsZWN0ZWRGb2xkZXJJbmZvXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJmb2xkZXJOYW1lXCI+PC9zcGFuPiAmbmJzcDsmbmJzcDtcbiAgICA8YnV0dG9uIHR5cGU9XCJyZXNldFwiIGNsYXNzPVwiYnRuICBidG4tLXNtYWxsIHNlbGVjdE90aGVyRm9sZGVyXCI+U2VsZWN0IG90aGVyIGZvbGRlcjwvYnV0dG9uPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4vKipcbiAqIFByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdXNlZCBmb3IgdGhlIFwiU2VsZWN0IEZvbGRlclwiXG4gKiB0ZXh0Ym94ZXMsIHdoaWNoIGF1dG9tYXRpY2FsbHkgZmluZCBmb2xkZXIgbWV0YWRhdGEgd2hlbiBhIFVSTCBcbiAqIGlzIHBhc3RlZCBpbnRvIHRoZW0uICBUaGUgdGV4dGJveGVzIGNhbiBoYW5kbGUgcGFzdGluZyB2aWEgJ0N0cmwrVicsXG4gKiBvciByaWdodC1jbGlja2luZyBhbmQgc2VsZWN0aW5nIFwiUGFzdGVcIiBmcm9tIHRoZSBjb250ZXh0IG1lbnUuIFxuICovXG5cbi8vIFJlcXVpcmVzXG5jb25zdCBwaWNrZXIgPSByZXF1aXJlKCcuLi91dGlsL3BpY2tlcicpO1xuY29uc3QgcGFyc2VJZCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VJZCcpO1xuXG5cbi8qKlxuICogSWYgZm9sZGVyIFVSTCBpcyBhZGRlZCwgZ2V0IGZvbGRlciBtZXRhZGF0YSBhbmQgZGlzcGxheSByZWxldmFudCBpbmZvcm1hdGlvbi5cbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IGUgZXZlbnQgb2JqZWN0XG4gKi9cbmNvbnN0IGdldEZpbGVEYXRhID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgLy8gRE9NLm9uRm9sZGVyTG9va3VwKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSWQoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgIGdvb2dsZS5zY3JpcHQucnVuXG4gICAgICAgIC53aXRoU3VjY2Vzc0hhbmRsZXIoZnVuY3Rpb24obWV0YWRhdGEpIHtcbiAgICAgICAgLy8gc2F2ZSBtZXRhZGF0YSB0byBwaWNrZXIuZm9sZGVyXG4gICAgICAgIHBpY2tlci5zZXRTZWxlY3RlZEZvbGRlcih7XG4gICAgICAgICAgICBzcmNJZDogbWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzcmNQYXJlbnRJZDogbWV0YWRhdGEucGFyZW50c1swXS5pZCxcbiAgICAgICAgICAgIHNyY05hbWU6IG1ldGFkYXRhLnRpdGxlLFxuICAgICAgICAgICAgZGVzdE5hbWU6ICdDb3B5IG9mICcgKyBtZXRhZGF0YS50aXRsZVxuICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLndpdGhGYWlsdXJlSGFuZGxlcihmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgJCgnLmZvbGRlclNlbGVjdCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLmZvbGRlckxvb2t1cCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLnNlbGVjdGVkRm9sZGVySW5mbycpLnNob3coKTtcbiAgICAgICAgJCgnLmdldEZvbGRlckVycm9ycycpXG4gICAgICAgICAgICAudGV4dChcbiAgICAgICAgICAgICdFcnJvcjogJyArXG4gICAgICAgICAgICAgICAgbXNnICtcbiAgICAgICAgICAgICAgICAnPGJyPllvdSBtYXkgbm90IGhhdmUgcGVybWlzc2lvbiB0byBjb3B5IHRoaXMgZm9sZGVyLidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5nZXRNZXRhZGF0YShpZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIGludGVydmFsIGlzIHRoZSBoYW5kbGUgZm9yIHRoZSBpbnRlcnZhbCBzZXQgaW4gaGFuZGxlTW91c2UgYW5kIGNsZWFyZWQgaW4gZ2V0RmlsZURhdGFcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGludGVydmFsOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiByaWdodC1jbGljaywgc2V0VGltZW91dFxuICAgICAgICAgKiBJZiBsZWZ0LWNsaWNrLCB0cmlnZ2VyIGltbWVkaWF0ZWx5XG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVNb3VzZShlKSB7XG4gICAgICAgICAgICAvLyBpZiBjb250ZXh0IG1lbnUgaXMgYWN0aXZhdGVkLCBnaXZlIHVzZXIgdGltZSB0byBwYXN0ZSBkYXRhIHZpYSBjb250ZXh0IG1lbnVcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHZhciBnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRGaWxlRGF0YShlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldCh7aW50ZXJ2YWw6IHNldEludGVydmFsKGcsIDUwMCl9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRGaWxlRGF0YShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlS2V5KGUpIHtcbiAgICAgICAgICAgIGdldEZpbGVEYXRhKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Rm9sZGVyLmh0bWwiLCI8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPnt7YnV0dG9uVGV4dH19PC9idXR0b24+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3VibWl0QnV0dG9uLmh0bWwiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi9jb21wb25lbnRzL1N0YXJ0JztcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VtZSc7XG5pbXBvcnQgUGF1c2UgZnJvbSAnLi9jb21wb25lbnRzL1BhdXNlJztcbmltcG9ydCBGQVEgZnJvbSAnLi9jb21wb25lbnRzL0ZBUSc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSxcbiAgZGF0YToge1xuICAgIHZpZXdzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnYWJvdXQnLFxuICAgICAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICAgICAgY29tcG9uZW50OiBBYm91dFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGFydCcsXG4gICAgICAgIHRpdGxlOiAnU3RhcnQnLFxuICAgICAgICBjb21wb25lbnQ6IFN0YXJ0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3Jlc3VtZScsXG4gICAgICAgIHRpdGxlOiAnUmVzdW1lJyxcbiAgICAgICAgY29tcG9uZW50OiBSZXN1bWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncGF1c2UnLFxuICAgICAgICB0aXRsZTogJ1BhdXNlJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXVzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdmYXEnLFxuICAgICAgICB0aXRsZTogJ0ZBUScsXG4gICAgICAgIGNvbXBvbmVudDogRkFRXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBtdXN0IG1hdGNoIHRoZSBpZCBvZiBvbmUgb2YgdGhlIHZpZXdzXG4gICAgYWN0aXZlOiAnc3RhcnQnXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBYm91dCxcbiAgICBTdGFydCxcbiAgICBSZXN1bWUsXG4gICAgUGF1c2UsXG4gICAgRkFRXG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsIjxkaXYgY2xhc3M9XCJjaGFuZ2UtYWNjb3VudF9fYm94XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ1c2VyRW1haWxcIj5cbiAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAge3sjaWYgcHJvY2Vzc2luZ319XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJvdGF0ZS1jb250ZW50c1wiPjxpIGNsYXNzPVwic3Bpbm5lclwiPjwvaT48L3NwYW4+XG4gICAgICAgIHt7L2lmfX1cbiAgICA8L3NwYW4+XG4gICAgPGJyIC8+XG4gICAge3sjaWYgZW52ID09PSAncHJvZHVjdGlvbid9fVxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9BY2NvdW50Q2hvb3Nlcj9jb250aW51ZT1odHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnhiR05HYWpyeHYtSGJYMnNWWTJPVHU3eWo5VnZ4bE9NT2VRYmxaRnVxN3JZbTd1eW8vZXhlY1wiPlxuICAgICAgICAgICAgQ2xpY2sgaGVyZTwvYT4gdG8gbG9nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9BY2NvdW50Q2hvb3Nlcj9jb250aW51ZT1odHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpLSlFPNUNCZjdXRG1yWW84RkdEYjIwWVdmb0l5VVpaaHNiRjg0NFNJL2RldlwiPlxuICAgICAgICAgICAgQ2xpY2sgaGVyZTwvYT4gdG8gbG9nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cbiAgICB7ey9pZn19XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WIGlzIHBhc3NlZCBpbiB2aWEgYSB3ZWJwYWNrIHBsdWdpblxuICAgICAgICAgICAgICAgIGVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2dlZCBpbiBhcyAnLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25jcmVhdGUoKSB7XG4gICAgICAgICAgICAvLyBnZXQgdXNlciBlbWFpbCBhbmQgcHV0IGl0IGluIHRoZSBhY2NvdW50IGJveFxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGdvb2dsZS5zY3JpcHQucnVuXG4gICAgICAgICAgICAgICAgLndpdGhTdWNjZXNzSGFuZGxlcihmdW5jdGlvbihlbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgTG9nZ2VkIGluIGFzICR7ZW1haWx9LmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC53aXRoRmFpbHVyZUhhbmRsZXIoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciByZXRyaWV2aW5nIGFjdGl2ZSBhY2NvdW50LicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5nZXRVc2VyRW1haWwoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHJldHJpZXZpbmcgYWN0aXZlIGFjY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQWNjb3VudFN3aXRjaGVyLmh0bWwiLCI8TmF2IHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSBvbjpjbGljaz0nc2V0QWN0aXZlIChldmVudC52aWV3LmlkKScvPlxuPFZpZXdDaGFuZ2VyIHZpZXdzPXt7dmlld3N9fSBiaW5kOmFjdGl2ZSAvPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuICAgIGltcG9ydCBWaWV3Q2hhbmdlciBmcm9tICcuL1ZpZXdDaGFuZ2VyJztcbiAgICBpbXBvcnQgQWNjb3VudFN3aXRjaGVyIGZyb20gJy4vQWNjb3VudFN3aXRjaGVyJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5hdixcbiAgICAgICAgICAgIFZpZXdDaGFuZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24odmlld0lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe2FjdGl2ZTogdmlld0lkfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25jcmVhdGUoKSB7XG4gICAgICAgICAgICAvLyBhZGQgQWNjb3VudCBTd2l0Y2hlciB0byBoZWFkZXJcbiAgICAgICAgICAgIGNvbnN0IGFjY3RTd2l0Y2hlciA9IG5ldyBBY2NvdW50U3dpdGNoZXIoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZS1hY2NvdW50JylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXBwLmh0bWwiLCI8bmF2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICB7eyNlYWNoIHZpZXdzIGFzIHZpZXd9fVxuICAgICAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz0nZmlyZShcImNsaWNrXCIsIHt2aWV3fSknXG4gICAgICAgICAgICAgICAgbmFtZT0ne3t2aWV3LmlkfX0nXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWJMaW5rIGJ0bi0tbmF2IHt7YWN0aXZlID09PSB2aWV3LmlkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICBpZD1cInt7dmlldy5pZH19LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIj57e3ZpZXcudGl0bGV9fTwvYnV0dG9uPlxuICAgICAgICB7ey9lYWNofX1cbiAgICA8L3NlY3Rpb24+XG48L25hdj5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9OYXYuaHRtbCIsIjxwPnt7bWVzc2FnZX19PC9wPlxuPHA+XG57eyNpZiBzaG93QnV0dG9ufX1cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImJ0biBidG4tLXNtYWxsXCJcbiAgICAgICAgb246Y2xpY2s9J2hhbmRsZUNsaWNrKGV2ZW50KSc+XG4gICAgICAgIFllcywgSSB3YW50IHRvIHN0b3AgYWxsIG15IGN1cnJlbnQgaW5zdGFuY2VzIG9mIENvcHkgRm9sZGVyPC9idXR0b24+XG57ey9pZn19XG48L3A+XG5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3RvcCB0aGUgaW5zdGFuY2VzIG9mIGNvcHkgZm9sZGVyIHRoYXQgeW91IGhhdmUgcnVubmluZz8nLFxuICAgICAgICAgICAgICAgIHNob3dCdXR0b246IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGFkZCBzdWNjZXNzIGFuZCBmYWlsdXJlIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLnNjcmlwdC5ydW4uc2V0U3RvcEZsYWcoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IGhhdmUgc3RvcHBlZCBhbGwgZm9sZGVyIGNvcGllcy4gVG8gcmVzdGFydCB0aGVtLCBwbGVhc2UgdXNlIHRoZSBcIlJlc3VtZVwiIGZlYXR1cmUuJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0J1dHRvbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9QYXVzZS5odG1sIiwiPGRpdiBpZD1cInJlc3VtZS12YWxpZGF0aW9uLWVycm9yc1wiPjwvZGl2PlxuXG48ZGl2IGlkPVwicmVzdW1lLWZvcm0tZGl2XCIgY2xhc3M9XCJmb3JtLWRpdlwiPlxuICAgIDxmb3JtIGlkPVwicmVzdW1lRm9ybVwiIG5hbWU9XCJyZXN1bWVGb3JtXCIgIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgb246c3VibWl0PSdoYW5kbGVTdWJtaXQoZXZlbnQpJz5cbiAgICAgICAgXG4gICAgICAgIDxTZWxlY3RGb2xkZXIgc2VsZWN0VGV4dD17e3NlbGVjdFRleHR9fSAvPiBcbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPCEtLVN1Ym1pdC0tPlxuICAgICAgICA8U3VibWl0QnV0dG9uIGJ1dHRvblRleHQ9e3tidXR0b25UZXh0fX0gb246Y2xpY2s9J2hhbmRsZUNsaWNrKGV2ZW50KScgLz5cblxuICAgIDwvZm9ybT5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTZWxlY3RGb2xkZXIgZnJvbSAnLi9TZWxlY3RGb2xkZXInO1xuICAgIGltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi9TdWJtaXRCdXR0b24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1Jlc3VtZSBjb3B5aW5nJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnU2VsZWN0IHRoZSBmb2xkZXIgY29weSB0aGF0IGlzIGluIHByb2dyZXNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBTZWxlY3RGb2xkZXIsXG4gICAgICAgICAgICBTdWJtaXRCdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soZSkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Jlc3VtZS5odG1sIiwiPGRpdiBpZD1cInN0YXJ0LXZhbGlkYXRpb24tZXJyb3JzXCI+PC9kaXY+XG5cbjwhLS1Gb3JtLS0+XG48ZGl2IGlkPVwiZm9ybURpdlwiIGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICA8Zm9ybSBpZD1cImZvbGRlckZvcm1cIiBuYW1lPVwiZm9sZGVyRm9ybVwiIG9uOnN1Ym1pdD0naGFuZGxlU3VibWl0KGV2ZW50KSc+XG5cbiAgICAgICAgPFNlbGVjdEZvbGRlciBzZWxlY3RUZXh0PXt7c2VsZWN0VGV4dH19IC8+XG4gICAgICAgIFxuICAgICAgICA8YnIgLz5cblxuXG4gICAgICAgIDwhLS1OZXcgZm9sZGVyIG5hbWUtLT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dGZpZWxkXCIgZm9yPVwibmV3Rm9sZGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ld0ZvbGRlclwiIG5hbWU9XCJuZXdGb2xkZXJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0ZmllbGRfX2xhYmVsXCI+TmV3IGZvbGRlciBuYW1lPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG5cblxuICAgICAgICA8IS0tQ29weSBwZXJtaXNzaW9ucz8tLT5cbiAgICAgICAgQ29weSBzaGFyaW5nIHBlcm1pc3Npb25zXG4gICAgICAgIDwhLS1RdWVzdGlvbiBtYXJrIGJ1dHRvbi0tPlxuICAgICAgICA8c3BhbiB0YWJpbmRleD1cIjEwXCIgY2xhc3M9XCJ0b29sdGlwLXRvZ2dsZVwiIGRhdGEtdG9vbHRpcD1cIlNlbGVjdCB0aGlzIGJveCBpZiB5b3Ugd2FudCB0aGUgZG9jdW1lbnRzIGluIHRoZSBmb2xkZXIgY29weSB0byBiZSBlZGl0YWJsZS92aWV3YWJsZSBieSB0aGUgc2FtZSBwZW9wbGUgYXMgdGhlIG9yaWdpbmFscy4gT3duZXJzIG9mIG9yaWdpbmFscyB3aWxsIGJlY29tZSBlZGl0b3JzIG9mIHRoZSBjb3BpZXMuIENvcHlpbmcgdGFrZXMgbXVjaCBsb25nZXIgaWYgJ1llcycgaXMgc2VsZWN0ZWQuXCI+XG4gICAgICAgICAgICA8UXVlc3Rpb24gLz5cbiAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIGlkPVwicGVybWlzc2lvbnMtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwZXJtaXNzaW9uc1wiIHZhbHVlPVwibm9cIiBjaGVja2VkLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvX19sYWJlbFwiPk5vPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwZXJtaXNzaW9uc1wiIHZhbHVlPVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvX19sYWJlbFwiPlllczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8IS0tQ29weSB0by0tPlxuICAgICAgICBDb3B5IGZvbGRlciB0b1xuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIGlkPVwiZGVzdGluYXRpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb3B5TG9jYXRpb25PcHRpb25zXCIgdmFsdWU9XCJzYW1lXCIgY2hlY2tlZC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpb19fbGFiZWxcIj5TYW1lIGFzIHNvdXJjZSBmb2xkZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvcHlMb2NhdGlvbk9wdGlvbnNcIiB2YWx1ZT1cInJvb3RcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW9fX2xhYmVsXCI+Um9vdCBkaXJlY3RvcnkgKGkuZS4gYXQgdGhlIHRvcCBvZiBcIk15IERyaXZlXCIpPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8IS0tU3VibWl0LS0+XG4gICAgICAgIDxTdWJtaXRCdXR0b24gYnV0dG9uVGV4dD17e2J1dHRvblRleHR9fSBvbjpjbGljaz0naGFuZGxlQ2xpY2soZXZlbnQpJyAvPlxuXG4gICAgPC9mb3JtPlxuXG48L2Rpdj4gICBcblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9pY29ucy9RdWVzdGlvbic7XG4gICAgaW1wb3J0IFNlbGVjdEZvbGRlciBmcm9tICcuL1NlbGVjdEZvbGRlcic7XG4gICAgaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuL1N1Ym1pdEJ1dHRvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnQ29weSBGb2xkZXInLFxuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdGb2xkZXIgdG8gY29weSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgUXVlc3Rpb24sXG4gICAgICAgICAgICBTZWxlY3RGb2xkZXIsXG4gICAgICAgICAgICBTdWJtaXRCdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soZSkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3RhcnQuaHRtbCIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgIHt7I2VhY2ggdmlld3MgYXMgdmlld319XG4gICAgICAgIDxkaXYgaWQ9J3t7dmlldy5pZH19JyBjbGFzcz0ndGFiIHt7YWN0aXZlID09PSB2aWV3LmlkID8gJ2FjdGl2ZScgOiAnJ319Jz48L2Rpdj5cbiAgICB7ey9lYWNofX1cbjwvZGl2PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgb25jcmVhdGUoKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmdldCB3aWxsIHJldHJpZXZlIHRoZSBwcm9wIFwidmlld3NcIiB0aGF0IGlzIHBhc3NlZCBpbnRvIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXQoJ3ZpZXdzJyk7XG4gICAgICAgICAgICB2aWV3cy5mb3JFYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgICAgICAgICBuZXcgdmlldy5jb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcuaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZpZXdDaGFuZ2VyLmh0bWwiLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IGNvbnRyb2wgdGhlXG4gKiBzaG93aW5nL2hpZGluZyBvZiBET00gZWxlbWVudHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgICogVXBkYXRlcyBcIlNlbGVjdCBGb2xkZXJcIiBmaWVsZHMgd2l0aCBzZWxlY3RlZCBmb2xkZXIgaW5mb1xuICAgICovXG4gIGZvbGRlcklzU2VsZWN0ZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkRm9sZGVyKSB7XG4gICAgLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAkKCcuZ2V0Rm9sZGVyRXJyb3JzJykudGV4dCgnJyk7XG4gICAgJCgnI25ld0ZvbGRlcicpLnZhbChzZWxlY3RlZEZvbGRlci5kZXN0TmFtZSk7XG4gICAgJCgnLmZvbGRlck5hbWUnKS50ZXh0KHNlbGVjdGVkRm9sZGVyLnNyY05hbWUpO1xuXG4gICAgJCgnLmZvbGRlclNlbGVjdCcpLmhpZGUoKTtcbiAgICAkKCcuZm9sZGVyTG9va3VwJykuaGlkZSgpO1xuICAgICQoJy5zZWxlY3RlZEZvbGRlckluZm8nKS5zaG93KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBGdW5jdGlvbiB0byBhbGVydCB1c2VyIHRoYXQgZm9sZGVyIGlzIGJlaW5nIGlkZW50aWZpZWRcbiAgICAqIEhpZGVzIGZvbGRlclxuICAgICovXG4gIG9uRm9sZGVyTG9va3VwOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZm9sZGVyTG9va3VwJykuc2hvdygpO1xuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5oaWRlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBlaXRoZXIgZm9ybSB2YWxpZGF0ZXMuXG4gICAgKiBVcGRhdGVzIFVJIHRvIGluZGljYXRlIHRoYXQgdGhlIGFwcCBpcyBpbml0aWFsaXppbmcuXG4gICAgKi9cbiAgb25WYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgJCgnI2Vycm9ycycpLmh0bWwoJycpO1xuICAgICQoJyNzdGFydC12YWxpZGF0aW9uLWVycm9ycycpLmh0bWwoJycpO1xuICAgICQoJyNyZXN1bWUtdmFsaWRhdGlvbi1lcnJvcnMnKS5odG1sKCcnKTtcbiAgfSxcblxuICAvKipcbiAgICAqIFJlc2V0cyBmb3JtIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAqL1xuICByZXNldEZvcm06IGZ1bmN0aW9uKCkge1xuICAgICQoJy5mb2xkZXJTZWxlY3QnKS5zaG93KCk7XG4gICAgJCgnLnNlbGVjdGVkRm9sZGVySW5mbycpLmhpZGUoKTtcbiAgICAkKCcuZ2V0Rm9sZGVyRXJyb3JzJykuaGlkZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIFNob3cgYW4gb3ZlcmxheSB3aXRoIGEgc3Bpbm5lciBhbmQgYSBtZXNzYWdlXG4gICAgICovXG4gIHNob3dQcm9jZXNzaW5nT3ZlcmxheTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICB2YXIgb3ZlcmxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheV9fbWVzc2FnZScpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgb3ZlcmxheU1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBIaWRlIHRoZSBvdmVybGF5XG4gICAgICovXG4gIGNsZWFyUHJvY2Vzc2luZ092ZXJsYXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICB2YXIgb3ZlcmxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheV9fbWVzc2FnZScpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBvdmVybGF5TWVzc2FnZS5pbm5lclRleHQgPSAnJztcbiAgfSxcblxuICBoaWRlU3RlcDE6IGZ1bmN0aW9uKHJlc3VtaW5nKSB7XG4gICAgLy8gSGlkZSBzdGVwIDEgZm9yIFN0YXJ0IG9yIFJlc3VtaW5nXG4gICAgdmFyIGlkID0gcmVzdW1pbmcgPyAncmVzdW1lLXN0ZXAxJyA6ICdzdGFydC1zdGVwMSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogc2hvd3MgZWl0aGVyIGByZXN1bWUtc3VjY2Vzc2AsIGByZXN1bWUtZXJyb3JgLCBgc3RhcnQtc3VjY2Vzc2AsIG9yIGBzdGFydC1lcnJvcmBcbiAgICAgKiBDYW4gYWxzbyBzaG93IGJvdGggc3RhcnQgYW5kIHJlc3VtZSBhdCBzYW1lIHRpbWUgaWYgcmVzdW1pbmcgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXN1bWluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdWNjZXNzZnVsbmVzcyBzaG91bGQgYmUgZWl0aGVyICdlcnJvcicgb3IgJ3N1Y2Nlc3MnXG4gICAgICovXG4gIHNob3dTdGVwMjogZnVuY3Rpb24ocmVzdW1pbmcsIHN1Y2Nlc3NmdWxuZXNzKSB7XG4gICAgaWYgKHJlc3VtaW5nID09PSBudWxsIHx8IHJlc3VtaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC0nICsgc3VjY2Vzc2Z1bG5lc3MpLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAnYmxvY2snO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaWQgPSByZXN1bWluZyA/ICdyZXN1bWUnIDogJ3N0YXJ0JztcbiAgICBpZCArPSAnLScgKyBzdWNjZXNzZnVsbmVzcztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0sXG5cbiAgc2hvd1Rvb01hbnlUcmlnZ2VyczogZnVuY3Rpb24oKSB7XG4gICAgJCgnLnRvby1tYW55LXRyaWdnZXJzJykuc2hvdygpO1xuICB9LFxuXG4gIGhpZGVUb29NYW55VHJpZ2dlcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy50b28tbWFueS10cmlnZ2VycycpLmhpZGUoKTtcbiAgfSxcblxuICBzaG93RXJyb3JzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuZXJyb3JzJykuc2hvdygpO1xuICB9LFxuXG4gIGhpZGVFcnJvcnM6IGZ1bmN0aW9uKCkge1xuICAgICQoJy5lcnJvcnMnKS5oaWRlKCk7XG4gIH0sXG5cbiAgc2hvd1BhdXNlU3RlcDI6IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1zdGVwMScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLXN0ZXAyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ET00uanMiLCIvKipcbiAqIFBhcnNlcyBmb2xkZXIgVVJMIHN0cmluZyBhbmQgcmV0dXJucyBmb2xkZXIgSUQgc3RyaW5nXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdGhlIGZvbGRlciBVUkwgZm9yIHRoZSBzZWxlY3RlZCBmb2xkZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gaWQgdGhlIGZvbGRlciBJRCBmb3IgdGhlIHNlbGVjdGVkIGZvbGRlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCkge1xuICB2YXIgaWQsIGFtcDtcblxuICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBzdHJpbmcgYXQgd2hpY2ggdGhlIGZvbGRlcklkIHN0YXJ0c1xuICB2YXIgaWRTdGFydCA9IHVybC5zZWFyY2goJ2lkPScpO1xuICB2YXIgZm9sZGVyc1N0YXJ0ID0gdXJsLnNlYXJjaCgnZm9sZGVycycpO1xuXG4gIGlmIChpZFN0YXJ0ID4gMCkge1xuICAgIGlkID0gdXJsLnNsaWNlKGlkU3RhcnQgKyAzKTtcbiAgfSBlbHNlIGlmIChmb2xkZXJzU3RhcnQgPiAwKSB7XG4gICAgaWQgPSB1cmwuc2xpY2UoZm9sZGVyc1N0YXJ0ICsgOCk7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSB1cmw7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBhbXBlcnNhbmQgaW4gdGhlIHJlbWFpbmluZyBzdHJpbmcsIHdoaWNoIGlzIHRoZSBkZWxpbWl0ZXIgYmV0d2VlbiB0aGUgZm9sZGVySWQgYW5kIHRoZSBzaGFyaW5nIHByaXZpbGVnZXNcbiAgYW1wID0gaWQuaW5kZXhPZignJicpO1xuXG4gIC8vIFNsaWNlIHRoZSBzdHJpbmcgdXAgdG8gdGhlIGFtcGVyc2FuZFxuICBpZiAoYW1wID4gMCkge1xuICAgIGlkID0gaWQuc2xpY2UoMCwgYW1wKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wYXJzZUlkLmpzIiwiLypcbk1hbnksIG1hbnkgdGhhbmtzIHRvIFtKZWFuLVBpZXJyZSBWZXJodWxzdF0oaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vK0plYW5QaWVycmVWZXJodWxzdC9wb3N0cykgXG5mb3IgcHJvdmlkaW5nIHRoZSB3b3JraW5nIGJhY2tib25lIG9mIHRoaXMgc2NyaXB0XG4qL1xuXG52YXIgRE9NID0gcmVxdWlyZSgnLi9ET00nKTtcblxuLy8gdmFuaWxsYUpTIGltcGxlbWVudGF0aW9uIG9mICQuZ2V0U2NyaXB0KCksIHRoYW5rcyB0byBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2ODM5Njk4L2pxdWVyeS1nZXRzY3JpcHQtYWx0ZXJuYXRpdmUtaW4tbmF0aXZlLWphdmFzY3JpcHRcbmZ1bmN0aW9uIGdldFNjcmlwdChzb3VyY2UsIGNhbGxiYWNrKSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgdmFyIHByaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBzY3JpcHQuYXN5bmMgPSAxO1xuICBwcmlvci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIHByaW9yKTtcblxuICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKF8sIGlzQWJvcnQpIHtcbiAgICBpZiAoXG4gICAgICBpc0Fib3J0IHx8XG4gICAgICAhc2NyaXB0LnJlYWR5U3RhdGUgfHxcbiAgICAgIC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc2NyaXB0LnJlYWR5U3RhdGUpXG4gICAgKSB7XG4gICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghaXNBYm9ydCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNjcmlwdC5zcmMgPSBzb3VyY2U7XG59XG5cbmdldFNjcmlwdCgnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJywgb25BcGlMb2FkKTtcblxuLy8gRGVjbGFyZSB2YXJpYWJsZXNcbnZhciBzZWxlY3RlZEZvbGRlciA9IHt9O1xudmFyIHBpY2tlckFwaUxvYWRlZCA9IGZhbHNlO1xudmFyIHBpY2tlckJ1aWxkZXI7XG5cbmV4cG9ydHMuZm9sZGVyID0gc2VsZWN0ZWRGb2xkZXI7XG5cbmZ1bmN0aW9uIG9uQXBpTG9hZCgpIHtcbiAgZ2FwaS5sb2FkKCdwaWNrZXInLCB7XG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcGlja2VyQXBpTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBnb29nbGUuc2NyaXB0LnJ1blxuICAgIC53aXRoU3VjY2Vzc0hhbmRsZXIoY3JlYXRlUGlja2VyKVxuICAgIC53aXRoRmFpbHVyZUhhbmRsZXIoc2hvd0Vycm9yKVxuICAgIC5nZXRPQXV0aFRva2VuKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2tlcih0b2tlbikge1xuICBpZiAocGlja2VyQXBpTG9hZGVkICYmIHRva2VuKSB7XG4gICAgdmFyIGZvbGRlcnNWaWV3ID0gbmV3IGdvb2dsZS5waWNrZXIuRG9jc1ZpZXcoKVxuICAgICAgLnNldEluY2x1ZGVGb2xkZXJzKHRydWUpXG4gICAgICAuc2V0TWltZVR5cGVzKCdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuZm9sZGVyJylcbiAgICAgIC5zZXRTZWxlY3RGb2xkZXJFbmFibGVkKHRydWUpO1xuXG4gICAgcGlja2VyQnVpbGRlciA9IG5ldyBnb29nbGUucGlja2VyLlBpY2tlckJ1aWxkZXIoKVxuICAgICAgLmFkZFZpZXcoZm9sZGVyc1ZpZXcpXG4gICAgICAuaGlkZVRpdGxlQmFyKClcbiAgICAgIC5zZXRPQXV0aFRva2VuKHRva2VuKVxuICAgICAgLnNldE1heEl0ZW1zKDEpXG4gICAgICAuc2V0Q2FsbGJhY2socGlja2VyQ2FsbGJhY2spXG4gICAgICAuc2V0VGl0bGUoJ1NlbGVjdCBhIGZvbGRlciB0byBjb3B5JylcbiAgICAgIC5zZXRPcmlnaW4oJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20nKVxuICAgICAgLmJ1aWxkKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdG9kbzogaGFuZGxlIGVycm9yc1xuICB9XG59XG5cbi8vIEFsbG93cyBtZXRob2QgYmluZGluZyBmcm9tIGV4dGVybmFsIHNjcmlwdHMsIGUuZy4gaW5pdC5qc1xuZXhwb3J0cy5zaG93UGlja2VyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwaWNrZXJCdWlsZGVyLnNldFZpc2libGUodHJ1ZSk7XG59O1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgY2hvc2VuIGRvY3VtZW50J3MgbWV0YWRhdGEgZnJvbSB0aGVcbiAqIHJlc3BvbnNlIG9iamVjdC4gRm9yIGRldGFpbHMgb24gdGhlIHJlc3BvbnNlIG9iamVjdCwgc2VlXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9waWNrZXIvZG9jcy9yZXN1bHRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgcmVzcG9uc2Ugb2JqZWN0LlxuICovXG5cbmZ1bmN0aW9uIHBpY2tlckNhbGxiYWNrKGRhdGEpIHtcbiAgdmFyIGFjdGlvbiA9IGRhdGFbZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5BQ1RJT05dO1xuXG4gIGlmIChhY3Rpb24gPT0gZ29vZ2xlLnBpY2tlci5BY3Rpb24uUElDS0VEKSB7XG4gICAgdmFyIGRvYyA9IGRhdGFbZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5ET0NVTUVOVFNdWzBdO1xuICAgIHNldFNlbGVjdGVkRm9sZGVyKHtcbiAgICAgIHNyY0lkOiBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5JRF0sXG4gICAgICBzcmNQYXJlbnRJZDogZG9jW2dvb2dsZS5waWNrZXIuRG9jdW1lbnQuUEFSRU5UX0lEXSxcbiAgICAgIHNyY05hbWU6IGRvY1tnb29nbGUucGlja2VyLkRvY3VtZW50Lk5BTUVdLFxuICAgICAgZGVzdE5hbWU6ICdDb3B5IG9mICcgKyBkb2NbZ29vZ2xlLnBpY2tlci5Eb2N1bWVudC5OQU1FXVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBnb29nbGUucGlja2VyLkFjdGlvbi5DQU5DRUwpIHtcbiAgICBnb29nbGUuc2NyaXB0Lmhvc3QuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIHNhdmUgcGFzc2VkIHZhbHVlcyB0byBzZWxlY3RlZEZvbGRlclxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBzZWxlY3RlZEZvbGRlciBwcm9wZXJ0aWVzIHRvIHNhdmVcbiAqL1xuZnVuY3Rpb24gc2V0U2VsZWN0ZWRGb2xkZXIocHJvcGVydGllcykge1xuICAvLyBzYXZlIHByb3BlcnRpZXNcbiAgc2VsZWN0ZWRGb2xkZXIuc3JjSWQgPSBwcm9wZXJ0aWVzLnNyY0lkO1xuICBzZWxlY3RlZEZvbGRlci5zcmNQYXJlbnRJZCA9IHByb3BlcnRpZXMuc3JjUGFyZW50SWQ7XG4gIHNlbGVjdGVkRm9sZGVyLnNyY05hbWUgPSBwcm9wZXJ0aWVzLnNyY05hbWU7XG4gIHNlbGVjdGVkRm9sZGVyLmRlc3ROYW1lID0gcHJvcGVydGllcy5kZXN0TmFtZTtcblxuICBET00uZm9sZGVySXNTZWxlY3RlZChzZWxlY3RlZEZvbGRlcik7XG59XG5cbmV4cG9ydHMuc2V0U2VsZWN0ZWRGb2xkZXIgPSBzZXRTZWxlY3RlZEZvbGRlcjtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKCkge1xuICAkKCcjZ2V0Rm9sZGVyRXJyb3JzJykudGV4dChcbiAgICAnRXJyb3IgZ2V0dGluZyBPQXV0aCB0b2tlbiBmb3IgR29vZ2xlIFBpY2tlci4gIFBsZWFzZSBtYW51YWxseSBpbnB1dCBmb2xkZXIgVVJMJ1xuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==