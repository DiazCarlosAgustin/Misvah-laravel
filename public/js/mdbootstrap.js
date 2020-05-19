/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*!
 * Material Design for Bootstrap 4
 *   Version: MDB FREE 4.18.0
 * 
 * 
 *   Copyright: Material Design for Bootstrap
 *   https://mdbootstrap.com/
 * 
 *   Read the license: https://mdbootstrap.com/general/license/
 * 
 * 
 *   Documentation: https://mdbootstrap.com/
 * 
 *   Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 * 
 *   Tutorials: https://mdbootstrap.com/education/bootstrap/
 * 
 *   Templates: https://mdbootstrap.com/templates/
 * 
 *   Support: https://mdbootstrap.com/support/
 * 
 *   Contact: office@mdbootstrap.com
 * 
 *   Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.min.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, enhanced-modals.js, treeview.js
 */!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=152)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(59))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),i=n(15),o=n(28),a=n(50),s=r.Symbol,l=i("wks");t.exports=function(t){return l[t]||(l[t]=a&&s[t]||(a?s:o)("Symbol."+t))}},function(t,e,n){var r=n(0),i=n(26).f,o=n(6),a=n(14),s=n(25),l=n(47),u=n(51);t.exports=function(t,e){var n,c,d,f,h,p=t.target,g=t.global,v=t.stat;if(n=g?r:v?r[p]||s(p,{}):(r[p]||{}).prototype)for(c in e){if(f=e[c],d=t.noTargetGet?(h=i(n,c))&&h.value:n[c],!u(g?c:p+(v?".":"#")+c,t.forced)&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),a(n,c,f,t)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(9),i=n(8),o=n(17);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(9),i=n(36),o=n(7),a=n(19),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(31),i=n(13);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(12),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),i=n(15),o=n(6),a=n(4),s=n(25),l=n(37),u=n(21),c=u.get,d=u.enforce,f=String(l).split("toString");i("inspectSource",(function(t){return l.call(t)})),(t.exports=function(t,e,n,i){var l=!!i&&!!i.unsafe,u=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||o(n,"name",e),d(n).source=f.join("string"==typeof e?e:"")),t!==r?(l?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:o(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||l.call(this)}))},function(t,e,n){var r=n(24),i=n(61);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,n){var r,i,o,a=n(62),s=n(0),l=n(5),u=n(6),c=n(4),d=n(22),f=n(20),h=s.WeakMap;if(a){var p=new h,g=p.get,v=p.has,m=p.set;r=function(t,e){return m.call(p,t,e),e},i=function(t){return g.call(p,t)||{}},o=function(t){return v.call(p,t)}}else{var y=d("state");f[y]=!0,r=function(t,e){return u(t,y,e),e},i=function(t){return c(t,y)?t[y]:{}},o=function(t){return c(t,y)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(15),i=n(28),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(75),i=n(31),o=n(16),a=n(11),s=n(43),l=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,c=4==t,d=6==t,f=5==t||d;return function(h,p,g,v){for(var m,y,b=o(h),x=i(b),w=r(p,g,3),S=a(x.length),k=0,C=v||s,M=e?C(h,S):n?C(h,0):void 0;S>k;k++)if((f||k in x)&&(y=w(m=x[k],k,b),t))if(e)M[k]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:l.call(M,m)}else if(c)return!1;return d?-1:u||c?c:M}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(6);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(9),i=n(46),o=n(17),a=n(10),s=n(19),l=n(4),u=n(36),c=Object.getOwnPropertyDescriptor;e.f=r?c:function(t,e){if(t=a(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(l(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e,n){var r=n(39),i=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(18);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(1),i=n(18),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(12),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(1),i=n(2)("species");t.exports=function(t){return!r((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(7),i=n(79),o=n(30),a=n(20),s=n(80),l=n(38),u=n(22)("IE_PROTO"),c=function(){},d=function(){var t,e=l("iframe"),n=o.length;for(e.style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;n--;)delete d.prototype[o[n]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=d(),void 0===e?n:i(n,e)},a[u]=!0},function(t,e,n){var r=n(48),i=n(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(9),i=n(1),o=n(38);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(15);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(0),i=n(5),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(4),i=n(10),o=n(41).indexOf,a=n(20);t.exports=function(t,e){var n,s=i(t),l=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~o(u,n)||u.push(n));return u}},function(t,e){t.exports={}},function(t,e,n){var r=n(10),i=n(11),o=n(32),a=function(t){return function(e,n,a){var s,l=r(e),u=i(l.length),c=o(a,u);if(t&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(8).f,i=n(4),o=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),i=n(29),o=n(2)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r,i,o=n(68),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,u=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),c=void 0!==/()??/.exec("")[1];(u||c)&&(l=function(t){var e,n,r,i,l=this;return c&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),u&&(e=l.lastIndex),r=a.call(l,t),u&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),c&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=l},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(4),i=n(63),o=n(26),a=n(8);t.exports=function(t,e){for(var n=i(e),s=a.f,l=o.f,u=0;u<n.length;u++){var c=n[u];r(t,c)||s(t,c,l(e,c))}}},function(t,e,n){t.exports=n(0)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(1),i=/#|\.prototype\./,o=function(t,e){var n=s[a(t)];return n==u||n!=l&&("function"==typeof e?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},function(t,e,n){var r=n(39),i=n(30);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(10),i=n(58),o=n(40),a=n(21),s=n(66),l=a.set,u=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){l(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";var r,i=n(9),o=n(0),a=n(5),s=n(4),l=n(76),u=n(6),c=n(14),d=n(8).f,f=n(60),h=n(70),p=n(2),g=n(28),v=o.DataView,m=v&&v.prototype,y=o.Int8Array,b=y&&y.prototype,x=o.Uint8ClampedArray,w=x&&x.prototype,S=y&&f(y),k=b&&f(b),C=Object.prototype,M=C.isPrototypeOf,A=p("toStringTag"),P=g("TYPED_ARRAY_TAG"),_=!(!o.ArrayBuffer||!v),T=_&&!!h&&"Opera"!==l(o.opera),I=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F=function(t){return a(t)&&s(O,l(t))};for(r in O)o[r]||(T=!1);if((!T||"function"!=typeof S||S===Function.prototype)&&(S=function(){throw TypeError("Incorrect invocation")},T))for(r in O)o[r]&&h(o[r],S);if((!T||!k||k===C)&&(k=S.prototype,T))for(r in O)o[r]&&h(o[r].prototype,k);if(T&&f(w)!==k&&h(w,k),i&&!s(k,A))for(r in I=!0,d(k,A,{get:function(){return a(this)?this[P]:void 0}}),O)o[r]&&u(o[r],P,r);_&&h&&f(m)!==C&&h(m,C),t.exports={NATIVE_ARRAY_BUFFER:_,NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:I&&P,aTypedArray:function(t){if(F(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(h){if(M.call(S,t))return t}else for(var e in O)if(s(O,r)){var n=o[e];if(n&&(t===n||M.call(n,t)))return t}throw TypeError("Target is not a typed array constructor")},exportProto:function(t,e,n){if(i){if(n)for(var r in O){var a=o[r];a&&s(a.prototype,t)&&delete a.prototype[t]}k[t]&&!n||c(k,t,n?e:T&&b[t]||e)}},exportStatic:function(t,e,n){var r,a;if(i){if(h){if(n)for(r in O)(a=o[r])&&s(a,t)&&delete a[t];if(S[t]&&!n)return;try{return c(S,t,n?e:T&&y[t]||e)}catch(t){}}for(r in O)!(a=o[r])||a[t]&&!n||c(a,t,e)}},isView:function(t){var e=l(t);return"DataView"===e||s(O,e)},isTypedArray:F,TypedArray:S,TypedArrayPrototype:k}},function(t,e,n){"use strict";var r=n(19),i=n(8),o=n(17);t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},function(t,e,n){var r=n(2),i=n(34),o=n(6),a=r("unscopables"),s=Array.prototype;null==s[a]&&o(s,a,i(null)),t.exports=function(t){s[a][t]=!0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(4),i=n(16),o=n(22),a=n(94),s=o("IE_PROTO"),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},function(t,e,n){var r=n(0),i=n(25),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(0),i=n(37),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i.call(o))},function(t,e,n){var r=n(35),i=n(27),o=n(49),a=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(48),i=n(4),o=n(64),a=n(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},function(t,e,n){"use strict";var r=n(3),i=n(93),o=n(60),a=n(70),s=n(42),l=n(6),u=n(14),c=n(2),d=n(24),f=n(40),h=n(67),p=h.IteratorPrototype,g=h.BUGGY_SAFARI_ITERATORS,v=c("iterator"),m=function(){return this};t.exports=function(t,e,n,c,h,y,b){i(n,e,c);var x,w,S,k=function(t){if(t===h&&_)return _;if(!g&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},C=e+" Iterator",M=!1,A=t.prototype,P=A[v]||A["@@iterator"]||h&&A[h],_=!g&&P||k(h),T="Array"==e&&A.entries||P;if(T&&(x=o(T.call(new t)),p!==Object.prototype&&x.next&&(d||o(x)===p||(a?a(x,p):"function"!=typeof x[v]&&l(x,v,m)),s(x,C,!0,!0),d&&(f[C]=m))),"values"==h&&P&&"values"!==P.name&&(M=!0,_=function(){return P.call(this)}),d&&!b||A[v]===_||l(A,v,_),f[e]=_,h)if(w={values:k("values"),keys:y?_:k("keys"),entries:k("entries")},b)for(S in w)!g&&!M&&S in A||u(A,S,w[S]);else r({target:e,proto:!0,forced:g||M},w);return w}},function(t,e,n){"use strict";var r,i,o,a=n(60),s=n(6),l=n(4),u=n(2),c=n(24),d=u("iterator"),f=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(r=i):f=!0),null==r&&(r={}),c||l(r,d)||s(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(12),i=n(13),o=function(t){return function(e,n){var o,a,s=String(i(e)),l=r(n),u=s.length;return l<0||l>=u?t?"":void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===u||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):o:t?s.slice(l,l+2):a-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,n){var r=n(7),i=n(88);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},function(t,e,n){var r=n(14),i=n(89),o=Object.prototype;i!==o.toString&&r(o,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(6),i=n(14),o=n(1),a=n(2),s=n(45),l=a("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),c=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var f=a(t),h=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h&&!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}));if(!h||!p||"replace"===t&&!u||"split"===t&&!c){var g=/./[f],v=n(f,""[t],(function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=v[0],y=v[1];i(String.prototype,t,m),i(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),d&&r(RegExp.prototype[f],"sham",!0)}}},function(t,e,n){var r=n(18),i=n(45);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(18),i=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(69).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(24),a=n(9),s=n(50),l=n(1),u=n(4),c=n(29),d=n(5),f=n(7),h=n(16),p=n(10),g=n(19),v=n(17),m=n(34),y=n(52),b=n(27),x=n(92),w=n(49),S=n(26),k=n(8),C=n(46),M=n(6),A=n(14),P=n(15),_=n(22),T=n(20),I=n(28),O=n(2),F=n(64),D=n(65),E=n(42),L=n(21),R=n(23).forEach,N=_("hidden"),V=O("toPrimitive"),z=L.set,B=L.getterFor("Symbol"),W=Object.prototype,j=i.Symbol,H=i.JSON,q=H&&H.stringify,U=S.f,$=k.f,Y=x.f,G=C.f,Q=P("symbols"),X=P("op-symbols"),Z=P("string-to-symbol-registry"),J=P("symbol-to-string-registry"),K=P("wks"),tt=i.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,nt=a&&l((function(){return 7!=m($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(W,e);r&&delete W[e],$(t,e,n),r&&t!==W&&$(W,e,r)}:$,rt=function(t,e){var n=Q[t]=m(j.prototype);return z(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=s&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof j},ot=function(t,e,n){t===W&&ot(X,e,n),f(t);var r=g(e,!0);return f(n),u(Q,r)?(n.enumerable?(u(t,N)&&t[N][r]&&(t[N][r]=!1),n=m(n,{enumerable:v(0,!1)})):(u(t,N)||$(t,N,v(1,{})),t[N][r]=!0),nt(t,r,n)):$(t,r,n)},at=function(t,e){f(t);var n=p(e),r=y(n).concat(ct(n));return R(r,(function(e){a&&!st.call(n,e)||ot(t,e,n[e])})),t},st=function(t){var e=g(t,!0),n=G.call(this,e);return!(this===W&&u(Q,e)&&!u(X,e))&&(!(n||!u(this,e)||!u(Q,e)||u(this,N)&&this[N][e])||n)},lt=function(t,e){var n=p(t),r=g(e,!0);if(n!==W||!u(Q,r)||u(X,r)){var i=U(n,r);return!i||!u(Q,r)||u(n,N)&&n[N][r]||(i.enumerable=!0),i}},ut=function(t){var e=Y(p(t)),n=[];return R(e,(function(t){u(Q,t)||u(T,t)||n.push(t)})),n},ct=function(t){var e=t===W,n=Y(e?X:p(t)),r=[];return R(n,(function(t){!u(Q,t)||e&&!u(W,t)||r.push(Q[t])})),r};s||(A((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===W&&n.call(X,t),u(this,N)&&u(this[N],e)&&(this[N][e]=!1),nt(this,e,v(1,t))};return a&&et&&nt(W,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return B(this).tag})),C.f=st,k.f=ot,S.f=lt,b.f=x.f=ut,w.f=ct,a&&($(j.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),o||A(W,"propertyIsEnumerable",st,{unsafe:!0})),F.f=function(t){return rt(O(t),t)}),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:j}),R(y(K),(function(t){D(t)})),r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=j(e);return Z[e]=n,J[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(J,t))return J[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:function(t,e){return void 0===e?m(t):at(m(t),e)},defineProperty:ot,defineProperties:at,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ut,getOwnPropertySymbols:ct}),r({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),H&&r({target:"JSON",stat:!0,forced:!s||l((function(){var t=j();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(d(e)||void 0!==t)&&!it(t))return c(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),r[1]=e,q.apply(H,r)}}),j.prototype[V]||M(j.prototype,V,j.prototype.valueOf),E(j,"Symbol"),T[N]=!0},function(t,e,n){var r=n(9),i=n(8),o=n(7),a=n(52);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),s=r.length,l=0;s>l;)i.f(t,n=r[l++],e[n]);return t}},function(t,e,n){var r=n(35);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(3),i=n(9),o=n(0),a=n(4),s=n(5),l=n(8).f,u=n(47),c=o.Symbol;if(i&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new c(t):void 0===t?c():c(t);return""===t&&(d[e]=!0),e};u(f,c);var h=f.prototype=c.prototype;h.constructor=f;var p=h.toString,g="Symbol(test)"==String(c("test")),v=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},function(t,e,n){n(65)("iterator")},function(t,e,n){"use strict";var r=n(3),i=n(45);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e,n){"use strict";var r=n(69).charAt,i=n(21),o=n(66),a=i.set,s=i.getterFor("String Iterator");o(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(0),i=n(86),o=n(54),a=n(6),s=n(2),l=s("iterator"),u=s("toStringTag"),c=o.values;for(var d in i){var f=r[d],h=f&&f.prototype;if(h){if(h[l]!==c)try{a(h,l,c)}catch(t){h[l]=c}if(h[u]||a(h,u,d),i[d])for(var p in o)if(h[p]!==o[p])try{a(h,p,o[p])}catch(t){h[p]=o[p]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(76),i={};i[n(2)("toStringTag")]="z",t.exports="[object z]"!==String(i)?function(){return"[object "+r(this)+"]"}:i.toString},function(t,e,n){var r=n(13),i="["+n(74)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,n){"use strict";var r=n(3),i=n(41).indexOf,o=n(44),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0,l=o("indexOf");r({target:"Array",proto:!0,forced:s||l},{indexOf:function(t){return s?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(10),i=n(27).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){"use strict";var r=n(67).IteratorPrototype,i=n(34),o=n(17),a=n(42),s=n(40),l=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),a(t,u,!1,!0),s[u]=l,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){"use strict";var r=n(3),i=n(23).map;r({target:"Array",proto:!0,forced:!n(33)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(29),a=n(32),s=n(11),l=n(10),u=n(57),c=n(33),d=n(2)("species"),f=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!c("slice")},{slice:function(t,e){var n,r,c,p=l(this),g=s(p.length),v=a(t,g),m=a(void 0===e?g:e,g);if(o(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!o(n.prototype)?i(n)&&null===(n=n[d])&&(n=void 0):n=void 0,n===Array||void 0===n))return f.call(p,v,m);for(r=new(void 0===n?Array:n)(h(m-v,0)),c=0;v<m;v++,c++)v in p&&u(r,c,p[v]);return r.length=c,r}})},function(t,e,n){"use strict";var r=n(3),i=n(32),o=n(12),a=n(11),s=n(16),l=n(43),u=n(57),c=n(33),d=Math.max,f=Math.min;r({target:"Array",proto:!0,forced:!c("splice")},{splice:function(t,e){var n,r,c,h,p,g,v=s(this),m=a(v.length),y=i(t,m),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=m-y):(n=b-2,r=f(d(o(e),0),m-y)),m+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=l(v,r),h=0;h<r;h++)(p=y+h)in v&&u(c,h,v[p]);if(c.length=r,n<r){for(h=y;h<m-r;h++)g=h+n,(p=h+r)in v?v[g]=v[p]:delete v[g];for(h=m;h>m-r+n;h--)delete v[h-1]}else if(n>r)for(h=m-r;h>y;h--)g=h+n-1,(p=h+r-1)in v?v[g]=v[p]:delete v[g];for(h=0;h<n;h++)v[h+y]=arguments[h+2];return v.length=m-r+n,c}})},function(t,e,n){"use strict";var r=n(72),i=n(7),o=n(16),a=n(11),s=n(12),l=n(13),u=n(77),c=n(73),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n){return[function(n,r){var i=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,o){var l=n(e,t,this,o);if(l.done)return l.value;var h=i(t),p=String(this),g="function"==typeof o;g||(o=String(o));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var y=[];;){var b=c(h,p);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(h.lastIndex=u(p,a(h.lastIndex),m))}for(var x,w="",S=0,k=0;k<y.length;k++){b=y[k];for(var C=String(b[0]),M=d(f(s(b.index),p.length),0),A=[],P=1;P<b.length;P++)A.push(void 0===(x=b[P])?x:String(x));var _=b.groups;if(g){var T=[C].concat(A,M,p);void 0!==_&&T.push(_);var I=String(o.apply(void 0,T))}else I=r(C,p,M,A,_,o);M>=S&&(w+=p.slice(S,M)+I,S=M+C.length)}return w+p.slice(S)}];function r(t,n,r,i,a,s){var l=r+t.length,u=i.length,c=g;return void 0!==a&&(a=o(a),c=p),e.call(s,c,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":s=a[o.slice(1,-1)];break;default:var c=+o;if(0===c)return e;if(c>u){var d=h(c/10);return 0===d?e:d<=u?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):e}s=i[c-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var r=n(3),i=n(23).filter;r({target:"Array",proto:!0,forced:!n(33)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(23).find,o=n(58),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},function(t,e,n){"use strict";var r=n(3),i=n(31),o=n(10),a=n(44),s=[].join,l=i!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:l||u},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(3),i=n(1),o=n(29),a=n(5),s=n(16),l=n(11),u=n(57),c=n(43),d=n(33),f=n(2)("isConcatSpreadable"),h=!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=d("concat"),g=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!h||!p},{concat:function(t){var e,n,r,i,o,a=s(this),d=c(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],g(o)){if(f+(i=l(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(d,f++,o)}return d.length=f,d}})},function(t,e,n){var r=n(7),i=n(53),o=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},function(t,e,n){var r=n(14),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,e,n){var r=n(3),i=n(108);r({global:!0,forced:parseFloat!=i},{parseFloat:i})},function(t,e,n){"use strict";var r=n(14),i=n(7),o=n(1),a=n(68),s=RegExp.prototype,l=s.toString,u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),c="toString"!=l.name;(u||c)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){var r=n(53),i=n(16),o=n(31),a=n(11),s=function(t){return function(e,n,s,l){r(n);var u=i(e),c=o(u),d=a(u.length),f=t?d-1:0,h=t?-1:1;if(s<2)for(;;){if(f in c){l=c[f],f+=h;break}if(f+=h,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=h)f in c&&(l=n(l,c[f],f,u));return l}};t.exports={left:s(!1),right:s(!0)}},function(t,e,n){var r=n(0),i=n(90).trim,o=n(74),a=r.parseFloat,s=1/a(o+"-0")!=-1/0;t.exports=s?function(t){var e=i(String(t)),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},function(t,e,n){"use strict";var r=n(72),i=n(110),o=n(7),a=n(13),s=n(103),l=n(77),u=n(11),c=n(73),d=n(45),f=n(1),h=[].push,p=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var s,l,u,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");(s=d.call(g,r))&&!((l=g.lastIndex)>p&&(c.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&h.apply(c,s.slice(1)),u=s[0].length,p=l,c.length>=o));)g.lastIndex===s.index&&g.lastIndex++;return p===r.length?!u&&g.test("")||c.push(""):c.push(r.slice(p)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var d=o(t),f=String(this),h=s(d,RegExp),v=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new h(g?d:"^(?:"+d.source+")",m),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===c(y,f)?[f]:[];for(var x=0,w=0,S=[];w<f.length;){y.lastIndex=g?w:0;var k,C=c(y,g?f:f.slice(w));if(null===C||(k=p(u(y.lastIndex+(g?0:w)),f.length))===x)w=l(f,w,v);else{if(S.push(f.slice(x,w)),S.length===b)return S;for(var M=1;M<=C.length-1;M++)if(S.push(C[M]),S.length===b)return S;w=x=k}}return S.push(f.slice(x)),S}]}),!g)},function(t,e,n){var r=n(5),i=n(18),o=n(2)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(23).forEach,i=n(44);t.exports=i("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(5),i=n(70);t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},function(t,e,n){"use strict";var r=n(72),i=n(7),o=n(11),a=n(13),s=n(77),l=n(73);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var d,f=[],h=0;null!==(d=l(a,u));){var p=String(d[0]);f[h]=p,""===p&&(a.lastIndex=s(u,o(a.lastIndex),c)),h++}return 0===h?null:f}]}))},function(t,e,n){"use strict";var r=n(3),i=n(12),o=n(115),a=n(116),s=n(1),l=1..toFixed,u=Math.floor,c=function(t,e,n){return 0===e?n:e%2==1?c(t,e-1,n*t):c(t*t,e/2,n)};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}))},{toFixed:function(t){var e,n,r,s,l=o(this),d=i(t),f=[0,0,0,0,0,0],h="",p="0",g=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*f[n],f[n]=r%1e7,r=u(r/1e7)},v=function(t){for(var e=6,n=0;--e>=0;)n+=f[e],f[e]=u(n/t),n=n%t*1e7},m=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*c(2,69,1))-69)<0?l*c(2,-e,1):l/c(2,e,1),n*=4503599627370496,(e=52-e)>0){for(g(0,n),r=d;r>=7;)g(1e7,0),r-=7;for(g(c(10,r,1),0),r=e-1;r>=23;)v(1<<23),r-=23;v(1<<r),g(1,1),v(2),p=m()}else g(0,n),g(1<<-e,0),p=m()+a.call("0",d);return p=d>0?h+((s=p.length)<=d?"0."+a.call("0",d-s)+p:p.slice(0,s-d)+"."+p.slice(s-d)):h+p}})},function(t,e,n){var r=n(18);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,n){"use strict";var r=n(12),i=n(13);t.exports="".repeat||function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},,,function(t,e,n){"use strict";var r=n(3),i=n(111);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},function(t,e,n){"use strict";var r=n(3),i=n(107).left;r({target:"Array",proto:!0,forced:n(44)("reduce")},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(29),o=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},function(t,e,n){"use strict";var r=n(3),i=n(53),o=n(16),a=n(1),s=n(44),l=[].sort,u=[1,2,3],c=a((function(){u.sort(void 0)})),d=a((function(){u.sort(null)})),f=s("sort");r({target:"Array",proto:!0,forced:c||!d||f},{sort:function(t){return void 0===t?l.call(o(this)):l.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(9),i=n(0),o=n(51),a=n(14),s=n(4),l=n(18),u=n(112),c=n(19),d=n(1),f=n(34),h=n(27).f,p=n(26).f,g=n(8).f,v=n(90).trim,m=i.Number,y=m.prototype,b="Number"==l(f(y)),x=function(t){var e,n,r,i,o,a,s,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=v(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=(o=u.slice(2)).length,s=0;s<a;s++)if((l=o.charCodeAt(s))<48||l>i)return NaN;return parseInt(o,r)}return+u};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(b?d((function(){y.valueOf.call(n)})):"Number"!=l(n))?u(new m(x(e)),n,S):x(e)},k=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)s(m,w=k[C])&&!s(S,w)&&g(S,w,p(m,w));S.prototype=y,y.constructor=S,a(i,"Number",S)}},function(t,e,n){var r=n(3),i=n(128);r({global:!0,forced:parseInt!=i},{parseInt:i})},function(t,e,n){var r=n(0),i=n(86),o=n(111),a=n(6);for(var s in i){var l=r[s],u=l&&l.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(t){u.forEach=o}}},function(t,e,n){"use strict";var r=n(35),i=n(8),o=n(2),a=n(9),s=o("species");t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(9),i=n(8).f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/;!r||"name"in o||i(o,"name",{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},function(t,e,n){var r=n(0),i=n(90).trim,o=n(74),a=r.parseInt,s=/^[+-]?0[Xx]/,l=8!==a(o+"08")||22!==a(o+"0x16");t.exports=l?function(t,e){var n=i(String(t));return a(n,e>>>0||(s.test(n)?16:10))}:a},function(t,e,n){var r=n(9),i=n(0),o=n(51),a=n(112),s=n(8).f,l=n(27).f,u=n(110),c=n(68),d=n(14),f=n(1),h=n(126),p=n(2)("match"),g=i.RegExp,v=g.prototype,m=/a/g,y=/a/g,b=new g(m)!==m;if(r&&o("RegExp",!b||f((function(){return y[p]=!1,g(m)!=m||g(y)==y||"/a/i"!=g(m,"i")})))){for(var x=function(t,e){var n=this instanceof x,r=u(t),i=void 0===e;return!n&&r&&t.constructor===x&&i?t:a(b?new g(r&&!i?t.source:t,e):g((r=t instanceof x)?t.source:t,r&&i?c.call(t):e),n?this:v,x)},w=function(t){t in x||s(x,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},S=l(g),k=0;S.length>k;)w(S[k++]);v.constructor=x,x.prototype=v,d(i,"RegExp",x)}h("RegExp")},function(t,e,n){"use strict";var r=n(10),i=n(12),o=n(11),a=n(44),s=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,c=a("lastIndexOf");t.exports=u||c?function(t){if(u)return l.apply(this,arguments)||0;var e=r(this),n=o(e.length),a=n-1;for(arguments.length>1&&(a=s(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:l},,function(t,e,n){"use strict";var r=n(16),i=n(32),o=n(11);t.exports=function(t){for(var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,u=void 0===l?n:i(l,n);u>s;)e[s++]=t;return e}},function(t,e,n){"use strict";n.r(e);n(100),n(101),n(95),n(123),n(83),n(98);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}jQuery((function(t){(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputSelector="".concat(["text","password","email","url","tel","number","search","search-md"].map((function(t){return"input[type=".concat(t,"]")})).join(", "),", textarea"),this.textAreaSelector=".materialize-textarea",this.$text=t(".md-textarea-auto"),this.$body=t("body"),this.$document=t(document)}var n,i,o;return n=e,(i=[{key:"init",value:function(){var e,n=this;this.$text.length&&(e=window.attachEvent?function(t,e,n){t.attachEvent("on".concat(e),n)}:function(t,e,n){t.addEventListener(e,n,!1)},this.$text.each((function(){var t=this;function n(){t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")}function r(){window.setTimeout(n,0)}e(t,"change",n),e(t,"cut",r),e(t,"paste",r),e(t,"drop",r),e(t,"keydown",r),n()}))),t(this.inputSelector).each((function(e,r){var i=t(r),o=r.validity.badInput;n.updateTextFields(i),o&&n.toggleActiveClass(i,"add")})),this.addOnFocusEvent(),this.addOnBlurEvent(),this.addOnChangeEvent(),this.addOnResetEvent(),this.appendHiddenDiv(),this.ChangeDateInputType(),this.makeActiveAutofocus(),t(this.textAreaSelector).each(this.textAreaAutoResize),this.$body.on("keyup keydown",this.textAreaSelector,this.textAreaAutoResize)}},{key:"makeActiveAutofocus",value:function(){this.toggleActiveClass(t("input[autofocus]"),"add")}},{key:"toggleActiveClass",value:function(t,e){var n;e="".concat(e,"Class"),n=t.parent().hasClass("timepicker")?"label":"label, i, .input-prefix",t.siblings(n)[e]("active")}},{key:"addOnFocusEvent",value:function(){var e=this;this.$document.on("focus",this.inputSelector,(function(n){e.toggleActiveClass(t(n.target),"add")}))}},{key:"addOnBlurEvent",value:function(){var e=this;this.$document.on("blur",this.inputSelector,(function(n){var r=t(n.target),i=!r.val(),o=!n.target.validity.badInput,a=void 0===r.attr("placeholder");i&&o&&a&&e.toggleActiveClass(r,"remove"),!i&&o&&a&&r.siblings("i, .input-prefix").removeClass("active"),e.validateField(r)}))}},{key:"addOnChangeEvent",value:function(){var e=this;this.$document.on("change",this.inputSelector,(function(n){var r=t(n.target);e.updateTextFields(r),e.validateField(r)}))}},{key:"addOnResetEvent",value:function(){var e=this;this.$document.on("reset",(function(n){var r=t(n.target);r.is("form")&&(r.find(e.inputSelector).removeClass("valid invalid").each((function(n,r){var i=t(r),o=!i.val(),a=!i.attr("placeholder");o&&a&&e.toggleActiveClass(i,"remove")})),r.find("select.initialized").each((function(e,n){var r=t(n),i=r.siblings("input.select-dropdown"),o=r.children("[selected]").val();r.val(o),i.val(o)})))}))}},{key:"appendHiddenDiv",value:function(){if(!t(".hiddendiv").first().length){var e=t('<div class="hiddendiv common"></div>');this.$body.append(e)}}},{key:"updateTextFields",value:function(t){var e=Boolean(t.val().length),n=Boolean(t.attr("placeholder")),r=e||n?"add":"remove";this.toggleActiveClass(t,r)}},{key:"validateField",value:function(t){if(t.hasClass("validate")){var e=t.val(),n=!e.length,r=!t[0].validity.badInput;if(n&&r)t.removeClass("valid").removeClass("invalid");else{var i=t[0].validity.valid,o=Number(t.attr("length"))||0;i&&(!o||o>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}}},{key:"ChangeDateInputType",value:function(){var e=t('input[type="date"]');e.each((function(t,e){e.type="text"})),e.on("focus",(function(t){t.target.type="date"})),e.on("blur",(function(e){e.target.type="text",0===e.target.value.length&&t("label[for=".concat(e.target.id,"]")).removeClass("active")}))}},{key:"textAreaAutoResize",value:function(){var e=t(this);if(e.val().length){var n=t(".hiddendiv"),r=e.css("font-family"),i=e.css("font-size");i&&n.css("font-size",i),r&&n.css("font-family",r),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text("".concat(e.val(),"\n"));var o=n.html().replace(/\n/g,"<br>");n.html(o),n.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",n.height())}}}])&&r(n.prototype,i),o&&r(n,o),e}())).init()}))},function(t,e){jQuery((function(t){t(window).on("scroll",(function(){var e=t(".navbar");e.length&&t(".scrolling-navbar")[e.offset().top>50?"addClass":"removeClass"]("top-nav-collapse")}))}))},function(t,e,n){"use strict";n.r(e);n(100);jQuery((function(t){t.fn.mdbTreeview=function(){var e=t(this);e.hasClass("treeview")&&function(e){e.find(".rotate").each((function(){var e=t(this);e.off("click"),e.on("click",(function(){var e=t(this);e.siblings(".nested").toggleClass("active"),e.toggleClass("down")}))}))}(e),e.hasClass("treeview-animated")&&function(e){var n=e.find(".treeview-animated-element"),r=e.find(".closed");e.find(".nested").hide(),r.off("click"),r.on("click",(function(){var e=t(this),n=e.siblings(".nested"),r=e.children(".fa-angle-right");e.toggleClass("open"),r.toggleClass("down"),n.hasClass("active")?n.removeClass("active").slideUp():n.addClass("active").slideDown()})),n.off("click"),n.on("click",(function(){var e=t(this);e.hasClass("opened")?e.removeClass("opened"):(n.removeClass("opened"),e.addClass("opened"))}))}(e),e.hasClass("treeview-colorful")&&function(e){var n=e.find(".treeview-colorful-element"),r=e.find(".treeview-colorful-items-header");e.find(".nested").hide(),r.off("click"),r.on("click",(function(){var e=t(this),n=e.siblings(".nested"),r=e.children(".fa-plus-circle"),i=e.children(".fa-minus-circle");e.toggleClass("open"),r.removeClass("fa-plus-circle"),r.addClass("fa-minus-circle"),i.removeClass("fa-minus-circle"),i.addClass("fa-plus-circle"),n.hasClass("active")?n.removeClass("active").slideUp():n.addClass("active").slideDown()})),n.off("click"),n.on("click",(function(){var e=t(this);e.hasClass("opened")?n.removeClass("opened"):(n.removeClass("opened"),e.addClass("opened"))}))}(e)}}))},function(t,e,n){"use strict";n.r(e);n(96),n(104),n(71),n(106);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}jQuery((function(t){var e=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){t(".wow").wow()}}]),e}(),n=function(){function e(t,n){r(this,e),this.$wowElement=t,this.customization=n,this.animated=!0,this.options=this.assignElementCustomization()}return o(e,[{key:"init",value:function(){var e=this;t(window).scroll((function(){e.animated?e.hide():e.mdbWow()})),this.appear()}},{key:"assignElementCustomization",value:function(){return{animationName:this.$wowElement.css("animation-name"),offset:100,iteration:this.fallback().or(this.$wowElement.data("wow-iteration")).or(1).value(),duration:this.fallback().or(this.$wowElement.data("wow-duration")).or(1e3).value(),delay:this.fallback().or(this.$wowElement.data("wow-delay")).or(0).value()}}},{key:"mdbWow",value:function(){var t=this;"visible"!==this.$wowElement.css("visibility")&&this.shouldElementBeVisible(!0)&&(setTimeout((function(){return t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.appear())}},{key:"appear",value:function(){this.$wowElement.addClass("animated"),this.$wowElement.css({visibility:"visible","animation-name":this.options.animationName,"animation-iteration-count":this.options.iteration,"animation-duration":this.options.duration,"animation-delay":this.options.delay})}},{key:"hide",value:function(){var t=this;this.shouldElementBeVisible(!1)?(this.$wowElement.removeClass("animated"),this.$wowElement.css({"animation-name":"none",visibility:"hidden"})):setTimeout((function(){t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.mdbWow(),this.animated=!this.animated}},{key:"shouldElementBeVisible",value:function(e){var n=this.getOffset(this.$wowElement[0]),r=this.$wowElement.height(),i=t(document).height(),o=window.innerHeight,a=window.scrollY,s=o+a-this.options.offset>n,l=o+a-this.options.offset>n+r,u=a<n,c=a<n+r,d=o+a===i,f=n+this.options.offset>i,h=o+a-this.options.offset<n,p=a>n+this.options.offset,g=a<n+this.options.offset,v=n+r>i-this.options.offset;return e?s&&u||l&&c||d&&f:s&&p||h&&g||v}},{key:"countRemoveTime",value:function(){var t=1e3*this.$wowElement.css("animation-duration").slice(0,-1),e=0;return this.options.duration&&(e=t+this.checkOptionsStringFormat(this.options.duration)),this.options.delay&&(e+=this.checkOptionsStringFormat(this.options.delay)),e}},{key:"checkOptionsStringFormat",value:function(t){var e;if("s"===t.toString().slice(-1))e=t.toString().slice(0,-1);else{if(isNaN(t.toString().slice(-1)))return console.log("Not supported animation customization format.");e=t}return e}},{key:"getOffset",value:function(t){var e=t.getBoundingClientRect(),n=document.body,r=document.documentElement,i=window.pageYOffset||r.scrollTop||n.scrollTop,o=r.clientTop||n.clientTop||0,a=e.top+i-o;return Math.round(a)}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}}]),e}();t.fn.wow=function(e){this.each((function(){new n(t(this),e).init()}))},window.WOW=e}))},,,,,,,,function(t,e,n){var r=n(3),i=n(132),o=n(58);r({target:"Array",proto:!0},{fill:i}),o("fill")},function(t,e,n){n(3)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){n(3)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(3),i=n(16),o=n(52);r({target:"Object",stat:!0,forced:n(1)((function(){o(1)}))},{keys:function(t){return o(i(t))}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(56).NATIVE_ARRAY_BUFFER,a=n(6),s=n(171),l=n(1),u=n(149),c=n(12),d=n(11),f=n(150),h=n(27).f,p=n(8).f,g=n(132),v=n(42),m=n(21),y=m.get,b=m.set,x=r.ArrayBuffer,w=x,S=r.DataView,k=r.Math,C=r.RangeError,M=k.abs,A=k.pow,P=k.floor,_=k.log,T=k.LN2,I=function(t,e,n){var r,i,o,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,u=l>>1,c=23===e?A(2,-24)-A(2,-77):0,d=t<0||0===t&&1/t<0?1:0,f=0;for((t=M(t))!=t||t===1/0?(i=t!=t?1:0,r=l):(r=P(_(t)/T),t*(o=A(2,-r))<1&&(r--,o*=2),(t+=r+u>=1?c/o:c*A(2,1-u))*o>=2&&(r++,o/=2),r+u>=l?(i=0,r=l):r+u>=1?(i=(t*o-1)*A(2,e),r+=u):(i=t*A(2,u-1)*A(2,e),r=0));e>=8;a[f++]=255&i,i/=256,e-=8);for(r=r<<e|i,s+=e;s>0;a[f++]=255&r,r/=256,s-=8);return a[--f]|=128*d,a},O=function(t,e){var n,r=t.length,i=8*r-e-1,o=(1<<i)-1,a=o>>1,s=i-7,l=r-1,u=t[l--],c=127&u;for(u>>=7;s>0;c=256*c+t[l],l--,s-=8);for(n=c&(1<<-s)-1,c>>=-s,s+=e;s>0;n=256*n+t[l],l--,s-=8);if(0===c)c=1-a;else{if(c===o)return n?NaN:u?-1/0:1/0;n+=A(2,e),c-=a}return(u?-1:1)*n*A(2,c-e)},F=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},D=function(t){return[255&t]},E=function(t){return[255&t,t>>8&255]},L=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},R=function(t){return I(t,23,4)},N=function(t){return I(t,52,8)},V=function(t,e){p(t.prototype,e,{get:function(){return y(this)[e]}})},z=function(t,e,n,r){var i=f(+n),o=y(t);if(i+e>o.byteLength)throw C("Wrong index");var a=y(o.buffer).bytes,s=i+o.byteOffset,l=a.slice(s,s+e);return r?l:l.reverse()},B=function(t,e,n,r,i,o){var a=f(+n),s=y(t);if(a+e>s.byteLength)throw C("Wrong index");for(var l=y(s.buffer).bytes,u=a+s.byteOffset,c=r(+i),d=0;d<e;d++)l[u+d]=c[o?d:e-d-1]};if(o){if(!l((function(){x(1)}))||!l((function(){new x(-1)}))||l((function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name}))){for(var W,j=(w=function(t){return u(this,w),new x(f(t))}).prototype=x.prototype,H=h(x),q=0;H.length>q;)(W=H[q++])in w||a(w,W,x[W]);j.constructor=w}var U=new S(new w(2)),$=S.prototype.setInt8;U.setInt8(0,2147483648),U.setInt8(1,2147483649),!U.getInt8(0)&&U.getInt8(1)||s(S.prototype,{setInt8:function(t,e){$.call(this,t,e<<24>>24)},setUint8:function(t,e){$.call(this,t,e<<24>>24)}},{unsafe:!0})}else w=function(t){u(this,w,"ArrayBuffer");var e=f(t);b(this,{bytes:g.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},S=function(t,e,n){u(this,S,"DataView"),u(t,w,"DataView");var r=y(t).byteLength,o=c(e);if(o<0||o>r)throw C("Wrong offset");if(o+(n=void 0===n?r-o:d(n))>r)throw C("Wrong length");b(this,{buffer:t,byteLength:n,byteOffset:o}),i||(this.buffer=t,this.byteLength=n,this.byteOffset=o)},i&&(V(w,"byteLength"),V(S,"buffer"),V(S,"byteLength"),V(S,"byteOffset")),s(S.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var e=z(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=z(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return O(z(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return O(z(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){B(this,1,t,D,e)},setUint8:function(t,e){B(this,1,t,D,e)},setInt16:function(t,e){B(this,2,t,E,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){B(this,2,t,E,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){B(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){B(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){B(this,4,t,R,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){B(this,8,t,N,e,arguments.length>2?arguments[2]:void 0)}});v(w,"ArrayBuffer"),v(S,"DataView"),t.exports={ArrayBuffer:w,DataView:S}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(12),i=n(11);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length or index");return n}},function(t,e,n){var r=n(176);t.exports=function(t,e){var n=r(t);if(n%e)throw RangeError("Wrong offset");return n}},function(t,e,n){n(153),t.exports=n(154)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(155),n(156),n(162),n(167),n(168),n(169),n(204),n(133),n(134),n(135),n(136)},function(t,e,n){"use strict";(function(t){var e,r;n(78),n(81),n(82),n(99),n(91),n(54),n(101),n(95),n(96),n(127),n(71),n(83),n(84),n(109),n(85);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */e=void 0,r=function(){var t={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},e=function(e){var n="",r=e.parentNode.querySelector(t.CUSTOMFILELABEL);return r&&(n=r.innerHTML),n},n=function(t){if(t.childNodes.length>0)for(var e=[].slice.call(t.childNodes),n=0;n<e.length;n++){var r=e[n];if(3!==r.nodeType)return r}return t},r=function(e){var r=e.bsCustomFileInput.defaultText,i=e.parentNode.querySelector(t.CUSTOMFILELABEL);i&&(n(i).innerHTML=r)},i=!!window.File,o=function(t){if(t.hasAttribute("multiple")&&i)return[].slice.call(t.files).map((function(t){return t.name})).join(", ");if(-1!==t.value.indexOf("fakepath")){var e=t.value.split("\\");return e[e.length-1]}return t.value};function a(){var e=this.parentNode.querySelector(t.CUSTOMFILELABEL);if(e){var i=n(e),a=o(this);a.length?i.innerHTML=a:r(this)}}function s(){for(var e=[].slice.call(this.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),n=0,i=e.length;n<i;n++)r(e[n])}var l="reset",u="change";return{init:function(n,r){void 0===n&&(n=t.CUSTOMFILE),void 0===r&&(r=t.FORM);for(var i=[].slice.call(document.querySelectorAll(n)),o=[].slice.call(document.querySelectorAll(r)),c=0,d=i.length;c<d;c++){var f=i[c];Object.defineProperty(f,"bsCustomFileInput",{value:{defaultText:e(f)},writable:!0}),a.call(f),f.addEventListener(u,a)}for(var h=0,p=o.length;h<p;h++)o[h].addEventListener(l,s),Object.defineProperty(o[h],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(t.FORM)).filter((function(t){return!!t.bsCustomFileInput})),n=[].slice.call(document.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),i=0,o=n.length;i<o;i++){var c=n[i];r(c),c.bsCustomFileInput=void 0,c.removeEventListener(u,a)}for(var d=0,f=e.length;d<f;d++)e[d].removeEventListener(l,s),e[d].bsCustomFileInput=void 0}}},"object"===("undefined"==typeof exports?"undefined":i(exports))&&void 0!==t?t.exports=r():"function"==typeof define&&n(55)?define(r):(e=e||self).bsCustomFileInput=r(),document.addEventListener("DOMContentLoaded",(function(){bsCustomFileInput.init()}))}).call(this,n(87)(t))},function(t,e,n){"use strict";(function(t,e){var i;n(78),n(81),n(82),n(102),n(144),n(99),n(157),n(119),n(91),n(54),n(101),n(95),n(120),n(121),n(96),n(122),n(97),n(104),n(158),n(159),n(123),n(161),n(145),n(146),n(114),n(147),n(71),n(105),n(124),n(83),n(106),n(84),n(113),n(109),n(125),n(85);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */!function(r){if("object"===("undefined"==typeof exports?"undefined":o(exports))&&void 0!==t)t.exports=r();else if("function"==typeof define&&n(55))define([],r);else{("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this).Chart=r()}}((function(){return function t(e,n,r){function o(s,l){if(!n[s]){if(!e[s]){if(!l&&"function"==typeof i&&i)return i(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};e[s][0].call(c.exports,(function(t){return o(e[s][1][t]||t)}),c,c.exports,t,e,n,r)}return n[s].exports}for(var a="function"==typeof i&&i,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){},{}],2:[function(t,e,n){var r=t(6);function i(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3})$/i);if(i){i=i[1];for(var o=0;o<e.length;o++)e[o]=parseInt(i[o]+i[o],16)}else if(i=t.match(/^#([a-fA-F0-9]{6})$/i)){i=i[1];for(o=0;o<e.length;o++)e[o]=parseInt(i.slice(2*o,2*o+2),16)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(i[o+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(i[o+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=r[i[1]]))return}for(o=0;o<e.length;o++)e[o]=c(e[o],0,255);return n=n||0==n?c(n,0,1):1,e[3]=n,e}}function o(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[c(parseInt(e[1]),0,360),c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(n)?1:n,0,1)]}}}function a(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[c(parseInt(e[1]),0,360),c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(n)?1:n,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function c(t,e,n){return Math.min(Math.max(e,t),n)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:i,getHsla:o,getRgb:function(t){var e=i(t);return e&&e.slice(0,3)},getHsl:function(t){var e=o(t);return e&&e.slice(0,3)},getHwb:a,getAlpha:function(t){var e=i(t);if(e)return e[3];if(e=o(t))return e[3];if(e=a(t))return e[3]},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var n=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),i=Math.round(t[2]/255*100);return"rgb("+n+"%, "+r+"%, "+i+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return u(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return f[t.slice(0,3)]}};var f={};for(var h in r)f[r[h]]=h},{6:6}],3:[function(t,e,n){var r=t(5),i=t(2),a=function t(e){return e instanceof t?e:this instanceof t?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof e?(n=i.getRgba(e))?this.setValues("rgb",n):(n=i.getHsla(e))?this.setValues("hsl",n):(n=i.getHwb(e))&&this.setValues("hwb",n):"object"===o(e)&&(void 0!==(n=e).r||void 0!==n.red?this.setValues("rgb",n):void 0!==n.l||void 0!==n.lightness?this.setValues("hsl",n):void 0!==n.v||void 0!==n.value?this.setValues("hsv",n):void 0!==n.w||void 0!==n.whiteness?this.setValues("hwb",n):void 0===n.c&&void 0===n.cyan||this.setValues("cmyk",n)))):new t(e);var n};(a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return i.hexString(this.values.rgb)},rgbString:function(){return i.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return i.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return i.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return i.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return i.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return i.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return i.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var r=t[n]/255;e[n]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,r=void 0===e?.5:e,i=2*r-1,o=this.alpha()-n.alpha(),a=((i*o==-1?i:(i+o)/(1+i*o))+1)/2,s=1-a;return this.rgb(a*this.red()+s*n.red(),a*this.green()+s*n.green(),a*this.blue()+s*n.blue()).alpha(this.alpha()*r+n.alpha()*(1-r))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new a,r=this.values,i=n.values;for(var o in r)r.hasOwnProperty(o)&&(t=r[o],"[object Array]"===(e={}.toString.call(t))?i[o]=t.slice(0):"[object Number]"===e?i[o]=t:console.error("unexpected color value:",t));return n}}).spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,n={},r=0;r<t.length;r++)n[t.charAt(r)]=e[t][r];return 1!==e.alpha&&(n.a=e.alpha),n},a.prototype.setValues=function(t,e){var n,i,o=this.values,a=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)o[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)o[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[a[t][0]]){var u=a[t];for(n=0;n<t.length;n++)o[t][n]=e[u[n]];l=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===l?o.alpha:l)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(s[t][n],o[t][n])),o[t][n]=Math.round(i);for(var c in a)c!==t&&(o[c]=r[t][c](o[t]));return!0},a.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},a.prototype.setChannel=function(t,e,n){var r=this.values[t];return void 0===n?r[e]:n===r[e]?this:(r[e]=n,this.setValues(t,r),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},{2:2,5:5}],4:[function(t,e,n){function i(t){var e,n,r=t[0]/255,i=t[1]/255,o=t[2]/255,a=Math.min(r,i,o),s=Math.max(r,i,o),l=s-a;return s==a?e=0:r==s?e=(i-o)/l:i==s?e=2+(o-r)/l:o==s&&(e=4+(r-i)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(a+s)/2,[e,100*(s==a?0:n<=.5?l/(s+a):l/(2-s-a)),100*n]}function o(t){var e,n,r=t[0],i=t[1],o=t[2],a=Math.min(r,i,o),s=Math.max(r,i,o),l=s-a;return n=0==s?0:l/s*1e3/10,s==a?e=0:r==s?e=(i-o)/l:i==s?e=2+(o-r)/l:o==s&&(e=4+(r-i)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,n,s/255*1e3/10]}function a(t){var e=t[0],n=t[1],r=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,r))),100*(r=1-1/255*Math.max(e,Math.max(n,r)))]}function s(t){var e,n=t[0]/255,r=t[1]/255,i=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-r,1-i)))/(1-e)||0),100*((1-r-e)/(1-e)||0),100*((1-i-e)/(1-e)||0),100*e]}function l(t){return M[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]}function c(t){var e=u(t),n=e[0],r=e[1],i=e[2];return r/=100,i/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]}function d(t){var e,n,r,i,o,a=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[o=255*l,o,o];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),i=[0,0,0];for(var u=0;u<3;u++)(r=a+1/3*-(u-1))<0&&r++,r>1&&r--,o=6*r<1?e+6*(n-e)*r:2*r<1?n:3*r<2?e+(n-e)*(2/3-r)*6:e,i[u]=255*o;return i}function f(t){var e=t[0]/60,n=t[1]/100,r=t[2]/100,i=Math.floor(e)%6,o=e-Math.floor(e),a=255*r*(1-n),s=255*r*(1-n*o),l=255*r*(1-n*(1-o));r*=255;switch(i){case 0:return[r,l,a];case 1:return[s,r,a];case 2:return[a,r,l];case 3:return[a,s,r];case 4:return[l,a,r];case 5:return[r,a,s]}}function h(t){var e,n,i,o,a=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),i=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(i=1-i),o=s+i*((n=1-l)-s),e){default:case 6:case 0:r=n,g=o,b=s;break;case 1:r=o,g=n,b=s;break;case 2:r=s,g=n,b=o;break;case 3:r=s,g=o,b=n;break;case 4:r=o,g=s,b=n;break;case 5:r=n,g=s,b=o}return[255*r,255*g,255*b]}function p(t){var e=t[0]/100,n=t[1]/100,r=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i))]}function v(t){var e,n,r,i=t[0]/100,o=t[1]/100,a=t[2]/100;return n=-.9689*i+1.8758*o+.0415*a,r=.0557*i+-.204*o+1.057*a,e=(e=3.2406*i+-1.5372*o+-.4986*a)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]}function m(t){var e=t[0],n=t[1],r=t[2];return n/=100,r/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]}function y(t){var e,n,r,i,o=t[0],a=t[1],s=t[2];return o<=8?i=(n=100*o/903.3)/100*7.787+16/116:(n=100*Math.pow((o+16)/116,3),i=Math.pow(n/100,1/3)),[e=e/95.047<=.008856?e=95.047*(a/500+i-16/116)/7.787:95.047*Math.pow(a/500+i,3),n,r=r/108.883<=.008859?r=108.883*(i-s/200-16/116)/7.787:108.883*Math.pow(i-s/200,3)]}function x(t){var e,n=t[0],r=t[1],i=t[2];return(e=360*Math.atan2(i,r)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(r*r+i*i),e]}function w(t){return v(y(t))}function S(t){var e,n=t[0],r=t[1];return e=t[2]/360*2*Math.PI,[n,r*Math.cos(e),r*Math.sin(e)]}function k(t){return C[t]}e.exports={rgb2hsl:i,rgb2hsv:o,rgb2hwb:a,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:c,rgb2lch:function(t){return x(c(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],n=t[1]/100,r=t[2]/100;if(0===r)return[0,0,0];return[e,100*(2*(n*=(r*=2)<=1?r:2-r)/(r+n)),100*((r+n)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return s(d(t))},hsl2keyword:function(t){return l(d(t))},hsv2rgb:f,hsv2hsl:function(t){var e,n,r=t[0],i=t[1]/100,o=t[2]/100;return e=i*o,[r,100*(e=(e/=(n=(2-i)*o)<=1?n:2-n)||0),100*(n/=2)]},hsv2hwb:function(t){return a(f(t))},hsv2cmyk:function(t){return s(f(t))},hsv2keyword:function(t){return l(f(t))},hwb2rgb:h,hwb2hsl:function(t){return i(h(t))},hwb2hsv:function(t){return o(h(t))},hwb2cmyk:function(t){return s(h(t))},hwb2keyword:function(t){return l(h(t))},cmyk2rgb:p,cmyk2hsl:function(t){return i(p(t))},cmyk2hsv:function(t){return o(p(t))},cmyk2hwb:function(t){return a(p(t))},cmyk2keyword:function(t){return l(p(t))},keyword2rgb:k,keyword2hsl:function(t){return i(k(t))},keyword2hsv:function(t){return o(k(t))},keyword2hwb:function(t){return a(k(t))},keyword2cmyk:function(t){return s(k(t))},keyword2lab:function(t){return c(k(t))},keyword2xyz:function(t){return u(k(t))},xyz2rgb:v,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:S,lch2xyz:function(t){return y(S(t))},lch2rgb:function(t){return w(S(t))}};var C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var A in C)M[JSON.stringify(C[A])]=A},{}],5:[function(t,e,n){var r=t(4),i=function(){return new u};for(var o in r){i[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),r[t](e)}}(o);var a=/(\w+)2(\w+)/.exec(o),s=a[1],l=a[2];(i[s]=i[s]||{})[l]=i[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=r[t](e);if("string"==typeof n||void 0===n)return n;for(var i=0;i<n.length;i++)n[i]=Math.round(n[i]);return n}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,r=this.convs[n];e=i[n][t](r),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}})),e.exports=i},{4:4}],6:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,n){var r=t(30)();r.helpers=t(46),t(28)(r),r.Animation=t(22),r.animationService=t(23),r.defaults=t(26),r.Element=t(27),r.elements=t(41),r.Interaction=t(29),r.layouts=t(31),r.platform=t(49),r.plugins=t(32),r.Scale=t(33),r.scaleService=t(34),r.Ticks=t(35),r.Tooltip=t(36),t(24)(r),t(25)(r),t(56)(r),t(54)(r),t(55)(r),t(57)(r),t(58)(r),t(59)(r),t(15)(r),t(16)(r),t(17)(r),t(18)(r),t(19)(r),t(20)(r),t(21)(r),t(8)(r),t(9)(r),t(10)(r),t(11)(r),t(12)(r),t(13)(r),t(14)(r);var i=t(50);for(var o in i)i.hasOwnProperty(o)&&r.plugins.register(i[o]);r.platform.initialize(),e.exports=r,"undefined"!=typeof window&&(window.Chart=r),r.Legend=i.legend._element,r.Title=i.title._element,r.pluginService=r.plugins,r.PluginBase=r.Element.extend({}),r.canvasHelpers=r.helpers.canvas,r.layoutService=r.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,41:41,46:46,49:49,50:50,54:54,55:55,56:56,57:57,58:58,59:59,8:8,9:9}],8:[function(t,e,n){e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){e.exports=function(t){t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),r._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:i.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),(e=n.getMeta()).stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,r=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=r.length;e<n;++e)this.updateElement(r[e],e,t)},updateElement:function(t,e,n){var r=this,i=r.chart,a=r.getMeta(),s=r.getDataset(),l=t.custom||{},u=i.options.elements.rectangle;t._xScale=r.getScaleForId(a.xAxisID),t._yScale=r.getScaleForId(a.yAxisID),t._datasetIndex=r.index,t._index=e,t._model={datasetLabel:s.label,label:i.data.labels[e],borderSkipped:l.borderSkipped?l.borderSkipped:u.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:o.valueAtIndexOrDefault(s.backgroundColor,e,u.backgroundColor),borderColor:l.borderColor?l.borderColor:o.valueAtIndexOrDefault(s.borderColor,e,u.borderColor),borderWidth:l.borderWidth?l.borderWidth:o.valueAtIndexOrDefault(s.borderWidth,e,u.borderWidth)},r.updateElementGeometry(t,e,n),t.pivot()},updateElementGeometry:function(t,e,n){var r=this,i=t._model,o=r.getValueScale(),a=o.getBasePixel(),s=o.isHorizontal(),l=r._ruler||r.getRuler(),u=r.calculateBarValuePixels(r.index,e),c=r.calculateBarIndexPixels(r.index,e,l);i.horizontal=s,i.base=n?a:u.base,i.x=s?n?a:u.head:c.center,i.y=s?c.center:n?a:u.head,i.height=s?c.size:void 0,i.width=s?void 0:c.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,n,r=this.chart,i=this.getIndexScale().options.stacked,o=void 0===t?r.data.datasets.length:t+1,a=[];for(e=0;e<o;++e)(n=r.getDatasetMeta(e)).bar&&r.isDatasetVisible(e)&&(!1===i||!0===i&&-1===a.indexOf(n.stack)||void 0===i&&(void 0===n.stack||-1===a.indexOf(n.stack)))&&a.push(n.stack);return a},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),r=void 0!==e?n.indexOf(e):-1;return-1===r?n.length-1:r},getRuler:function(){var t,e,n=this.getIndexScale(),r=this.getStackCount(),i=this.index,a=n.isHorizontal(),s=a?n.left:n.top,l=s+(a?n.width:n.height),u=[];for(t=0,e=this.getMeta().data.length;t<e;++t)u.push(n.getPixelForValue(null,t,i));return{min:o.isNullOrUndef(n.options.barThickness)?function(t,e){var n,r,i,o,a=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(i=1,o=e.length;i<o;++i)a=Math.min(a,e[i]-e[i-1]);for(i=0,o=s.length;i<o;++i)r=t.getPixelForTick(i),a=i>0?Math.min(a,r-n):a,n=r;return a}(n,u):-1,pixels:u,start:s,end:l,stackCount:r,scale:n}},calculateBarValuePixels:function(t,e){var n,r,i,o,a,s,l=this.chart,u=this.getMeta(),c=this.getValueScale(),d=l.data.datasets,f=c.getRightValue(d[t].data[e]),h=c.options.stacked,p=u.stack,g=0;if(h||void 0===h&&void 0!==p)for(n=0;n<t;++n)(r=l.getDatasetMeta(n)).bar&&r.stack===p&&r.controller.getValueScaleId()===c.id&&l.isDatasetVisible(n)&&(i=c.getRightValue(d[n].data[e]),(f<0&&i<0||f>=0&&i>0)&&(g+=i));return o=c.getPixelForValue(g),{size:s=((a=c.getPixelForValue(g+f))-o)/2,base:o,head:a,center:a+s/2}},calculateBarIndexPixels:function(t,e,n){var r=n.scale.options,i="flex"===r.barThickness?function(t,e,n){var r,i=e.pixels,o=i[t],a=t>0?i[t-1]:null,s=t<i.length-1?i[t+1]:null,l=n.categoryPercentage;return null===a&&(a=o-(null===s?e.end-o:s-o)),null===s&&(s=o+o-a),r=o-(o-a)/2*l,{chunk:(s-a)/2*l/e.stackCount,ratio:n.barPercentage,start:r}}(e,n,r):function(t,e,n){var r,i,a=n.barThickness,s=e.stackCount,l=e.pixels[t];return o.isNullOrUndef(a)?(r=e.min*n.categoryPercentage,i=n.barPercentage):(r=a*s,i=1),{chunk:r/s,ratio:i,start:l-r/2}}(e,n,r),a=this.getStackIndex(t,this.getMeta().stack),s=i.start+i.chunk*a+i.chunk/2,l=Math.min(o.valueOrDefault(r.maxBarThickness,1/0),i.chunk*i.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}},draw:function(){var t=this.chart,e=this.getValueScale(),n=this.getMeta().data,r=this.getDataset(),i=n.length,a=0;for(o.canvas.clipArea(t.ctx,t.chartArea);a<i;++a)isNaN(e.getRightValue(r.data[a]))||n[a].draw();o.canvas.unclipArea(t.ctx)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{26:26,41:41,46:46}],16:[function(t,e,n){var r=t(26),i=t(41),a=t(46);r._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",r=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+r.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:i.Point,update:function(t){var e=this,n=e.getMeta().data;a.each(n,(function(n,r){e.updateElement(n,r,t)}))},updateElement:function(t,e,n){var r=this,i=r.getMeta(),a=t.custom||{},s=r.getScaleForId(i.xAxisID),l=r.getScaleForId(i.yAxisID),u=r._resolveElementOptions(t,e),c=r.getDataset().data[e],d=r.index,f=n?s.getPixelForDecimal(.5):s.getPixelForValue("object"===o(c)?c:NaN,e,d),h=n?l.getBasePixel():l.getPixelForValue(c,e,d);t._xScale=s,t._yScale=l,t._options=u,t._datasetIndex=d,t._index=e,t._model={backgroundColor:u.backgroundColor,borderColor:u.borderColor,borderWidth:u.borderWidth,hitRadius:u.hitRadius,pointStyle:u.pointStyle,rotation:u.rotation,radius:n?0:u.radius,skip:a.skip||isNaN(f)||isNaN(h),x:f,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=a.valueOrDefault(n.hoverBackgroundColor,a.getHoverColor(n.backgroundColor)),e.borderColor=a.valueOrDefault(n.hoverBorderColor,a.getHoverColor(n.borderColor)),e.borderWidth=a.valueOrDefault(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveElementOptions:function(t,e){var n,r,i,o=this.chart,s=o.data.datasets[this.index],l=t.custom||{},u=o.options.elements.point,c=a.options.resolve,d=s.data[e],f={},h={chart:o,dataIndex:e,dataset:s,datasetIndex:this.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(n=0,r=p.length;n<r;++n)f[i=p[n]]=c([l[i],s[i],u[i]],h,e);return f.radius=c([l.radius,d?d.r:void 0,s.radius,u.radius],h,e),f}})}},{26:26,41:41,46:46}],17:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var o=0;o<r[0].data.length;++o)e.push('<li><span style="background-color:'+r[0].backgroundColor[o]+'"></span>'),i[o]&&e.push(i[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,r){var i=t.getDatasetMeta(0),a=e.datasets[0],s=i.data[r],l=s&&s.custom||{},u=o.valueAtIndexOrDefault,c=t.options.elements.arc;return{text:n,fillStyle:l.backgroundColor?l.backgroundColor:u(a.backgroundColor,r,c.backgroundColor),strokeStyle:l.borderColor?l.borderColor:u(a.borderColor,r,c.borderColor),lineWidth:l.borderWidth?l.borderWidth:u(a.borderWidth,r,c.borderWidth),hidden:isNaN(a.data[r])||i.data[r].hidden,index:r}})):[]}},onClick:function(t,e){var n,r,i,o=e.index,a=this.chart;for(n=0,r=(a.data.datasets||[]).length;n<r;++n)(i=a.getDatasetMeta(n)).data[o]&&(i.data[o].hidden=!i.data[o].hidden);a.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],r=": "+e.datasets[t.datasetIndex].data[t.index];return o.isArray(n)?(n=n.slice())[0]+=r:n+=r,n}}}}),r._set("pie",o.clone(r.doughnut)),r._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:i.Arc,linkScales:o.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e=this,n=e.chart,r=n.chartArea,i=n.options,a=i.elements.arc,s=r.right-r.left-a.borderWidth,l=r.bottom-r.top-a.borderWidth,u=Math.min(s,l),c={x:0,y:0},d=e.getMeta(),f=i.cutoutPercentage,h=i.circumference;if(h<2*Math.PI){var p=i.rotation%(2*Math.PI),g=(p+=2*Math.PI*(p>=Math.PI?-1:p<-Math.PI?1:0))+h,v={x:Math.cos(p),y:Math.sin(p)},m={x:Math.cos(g),y:Math.sin(g)},y=p<=0&&g>=0||p<=2*Math.PI&&2*Math.PI<=g,b=p<=.5*Math.PI&&.5*Math.PI<=g||p<=2.5*Math.PI&&2.5*Math.PI<=g,x=p<=-Math.PI&&-Math.PI<=g||p<=Math.PI&&Math.PI<=g,w=p<=.5*-Math.PI&&.5*-Math.PI<=g||p<=1.5*Math.PI&&1.5*Math.PI<=g,S=f/100,k={x:x?-1:Math.min(v.x*(v.x<0?1:S),m.x*(m.x<0?1:S)),y:w?-1:Math.min(v.y*(v.y<0?1:S),m.y*(m.y<0?1:S))},C={x:y?1:Math.max(v.x*(v.x>0?1:S),m.x*(m.x>0?1:S)),y:b?1:Math.max(v.y*(v.y>0?1:S),m.y*(m.y>0?1:S))},M={width:.5*(C.x-k.x),height:.5*(C.y-k.y)};u=Math.min(s/M.width,l/M.height),c={x:-.5*(C.x+k.x),y:-.5*(C.y+k.y)}}n.borderWidth=e.getMaxBorderWidth(d.data),n.outerRadius=Math.max((u-n.borderWidth)/2,0),n.innerRadius=Math.max(f?n.outerRadius/100*f:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=c.x*n.outerRadius,n.offsetY=c.y*n.outerRadius,d.total=e.calculateTotal(),e.outerRadius=n.outerRadius-n.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-n.radiusLength,0),o.each(d.data,(function(n,r){e.updateElement(n,r,t)}))},updateElement:function(t,e,n){var r=this,i=r.chart,a=i.chartArea,s=i.options,l=s.animation,u=(a.left+a.right)/2,c=(a.top+a.bottom)/2,d=s.rotation,f=s.rotation,h=r.getDataset(),p=n&&l.animateRotate?0:t.hidden?0:r.calculateCircumference(h.data[e])*(s.circumference/(2*Math.PI)),g=n&&l.animateScale?0:r.innerRadius,v=n&&l.animateScale?0:r.outerRadius,m=o.valueAtIndexOrDefault;o.extend(t,{_datasetIndex:r.index,_index:e,_model:{x:u+i.offsetX,y:c+i.offsetY,startAngle:d,endAngle:f,circumference:p,outerRadius:v,innerRadius:g,label:m(h.label,e,i.data.labels[e])}});var y=t._model,b=t.custom||{},x=o.valueAtIndexOrDefault,w=this.chart.options.elements.arc;y.backgroundColor=b.backgroundColor?b.backgroundColor:x(h.backgroundColor,e,w.backgroundColor),y.borderColor=b.borderColor?b.borderColor:x(h.borderColor,e,w.borderColor),y.borderWidth=b.borderWidth?b.borderWidth:x(h.borderWidth,e,w.borderWidth),n&&l.animateRotate||(y.startAngle=0===e?s.rotation:r.getMeta().data[e-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),r=0;return o.each(n.data,(function(n,i){t=e.data[i],isNaN(t)||n.hidden||(r+=Math.abs(t))})),r},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,n,r=0,i=this.index,o=t.length,a=0;a<o;a++)e=t[a]._model?t[a]._model.borderWidth:0,r=(n=t[a]._chart?t[a]._chart.config.data.datasets[i].hoverBorderWidth:0)>(r=e>r?e:r)?n:r;return r}})}},{26:26,41:41,46:46}],18:[function(t,e,n){var r=t(26),i=t(41),a=t(46);r._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return a.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,update:function(t){var n,r,i,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],c=o.chart.options,d=c.elements.line,f=o.getScaleForId(s.yAxisID),h=o.getDataset(),p=e(h,c);for(p&&(i=l.custom||{},void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),l._scale=f,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:h.spanGaps?h.spanGaps:c.spanGaps,tension:i.tension?i.tension:a.valueOrDefault(h.lineTension,d.tension),backgroundColor:i.backgroundColor?i.backgroundColor:h.backgroundColor||d.backgroundColor,borderWidth:i.borderWidth?i.borderWidth:h.borderWidth||d.borderWidth,borderColor:i.borderColor?i.borderColor:h.borderColor||d.borderColor,borderCapStyle:i.borderCapStyle?i.borderCapStyle:h.borderCapStyle||d.borderCapStyle,borderDash:i.borderDash?i.borderDash:h.borderDash||d.borderDash,borderDashOffset:i.borderDashOffset?i.borderDashOffset:h.borderDashOffset||d.borderDashOffset,borderJoinStyle:i.borderJoinStyle?i.borderJoinStyle:h.borderJoinStyle||d.borderJoinStyle,fill:i.fill?i.fill:void 0!==h.fill?h.fill:d.fill,steppedLine:i.steppedLine?i.steppedLine:a.valueOrDefault(h.steppedLine,d.stepped),cubicInterpolationMode:i.cubicInterpolationMode?i.cubicInterpolationMode:a.valueOrDefault(h.cubicInterpolationMode,d.cubicInterpolationMode)},l.pivot()),n=0,r=u.length;n<r;++n)o.updateElement(u[n],n,t);for(p&&0!==l._model.tension&&o.updateBezierControlPoints(),n=0,r=u.length;n<r;++n)u[n].pivot()},getPointBackgroundColor:function(t,e){var n=this.chart.options.elements.point.backgroundColor,r=this.getDataset(),i=t.custom||{};return i.backgroundColor?n=i.backgroundColor:r.pointBackgroundColor?n=a.valueAtIndexOrDefault(r.pointBackgroundColor,e,n):r.backgroundColor&&(n=r.backgroundColor),n},getPointBorderColor:function(t,e){var n=this.chart.options.elements.point.borderColor,r=this.getDataset(),i=t.custom||{};return i.borderColor?n=i.borderColor:r.pointBorderColor?n=a.valueAtIndexOrDefault(r.pointBorderColor,e,n):r.borderColor&&(n=r.borderColor),n},getPointBorderWidth:function(t,e){var n=this.chart.options.elements.point.borderWidth,r=this.getDataset(),i=t.custom||{};return isNaN(i.borderWidth)?!isNaN(r.pointBorderWidth)||a.isArray(r.pointBorderWidth)?n=a.valueAtIndexOrDefault(r.pointBorderWidth,e,n):isNaN(r.borderWidth)||(n=r.borderWidth):n=i.borderWidth,n},getPointRotation:function(t,e){var n=this.chart.options.elements.point.rotation,r=this.getDataset(),i=t.custom||{};return isNaN(i.rotation)?isNaN(r.pointRotation)&&!a.isArray(r.pointRotation)||(n=a.valueAtIndexOrDefault(r.pointRotation,e,n)):n=i.rotation,n},updateElement:function(t,e,n){var r,i,s=this,l=s.getMeta(),u=t.custom||{},c=s.getDataset(),d=s.index,f=c.data[e],h=s.getScaleForId(l.yAxisID),p=s.getScaleForId(l.xAxisID),g=s.chart.options.elements.point;void 0!==c.radius&&void 0===c.pointRadius&&(c.pointRadius=c.radius),void 0!==c.hitRadius&&void 0===c.pointHitRadius&&(c.pointHitRadius=c.hitRadius),r=p.getPixelForValue("object"===o(f)?f:NaN,e,d),i=n?h.getBasePixel():s.calculatePointY(f,e,d),t._xScale=p,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:r,y:i,skip:u.skip||isNaN(r)||isNaN(i),radius:u.radius||a.valueAtIndexOrDefault(c.pointRadius,e,g.radius),pointStyle:u.pointStyle||a.valueAtIndexOrDefault(c.pointStyle,e,g.pointStyle),rotation:s.getPointRotation(t,e),backgroundColor:s.getPointBackgroundColor(t,e),borderColor:s.getPointBorderColor(t,e),borderWidth:s.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,steppedLine:!!l.dataset._model&&l.dataset._model.steppedLine,hitRadius:u.hitRadius||a.valueAtIndexOrDefault(c.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var r,i,o,a=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,c=0;if(l.options.stacked){for(r=0;r<n;r++)if(i=a.data.datasets[r],"line"===(o=a.getDatasetMeta(r)).type&&o.yAxisID===l.id&&a.isDatasetVisible(r)){var d=Number(l.getRightValue(i.data[e]));d<0?c+=d||0:u+=d||0}var f=Number(l.getRightValue(t));return f<0?l.getPixelForValue(c+f):l.getPixelForValue(u+f)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,r,i=this.getMeta(),o=this.chart.chartArea,s=i.data||[];function l(t,e,n){return Math.max(Math.min(t,n),e)}if(i.dataset._model.spanGaps&&(s=s.filter((function(t){return!t._model.skip}))),"monotone"===i.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(s);else for(t=0,e=s.length;t<e;++t)n=s[t]._model,r=a.splineCurve(a.previousItem(s,t)._model,n,a.nextItem(s,t)._model,i.dataset._model.tension),n.controlPointPreviousX=r.previous.x,n.controlPointPreviousY=r.previous.y,n.controlPointNextX=r.next.x,n.controlPointNextY=r.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=s.length;t<e;++t)(n=s[t]._model).controlPointPreviousX=l(n.controlPointPreviousX,o.left,o.right),n.controlPointPreviousY=l(n.controlPointPreviousY,o.top,o.bottom),n.controlPointNextX=l(n.controlPointNextX,o.left,o.right),n.controlPointNextY=l(n.controlPointNextY,o.top,o.bottom)},draw:function(){var t,n=this.chart,r=this.getMeta(),i=r.data||[],o=n.chartArea,s=i.length,l=0;for(e(this.getDataset(),n.options)&&(t=(r.dataset._model.borderWidth||0)/2,a.canvas.clipArea(n.ctx,{left:o.left,right:o.right,top:o.top-t,bottom:o.bottom+t}),r.dataset.draw(),a.canvas.unclipArea(n.ctx));l<s;++l)i[l].draw(o)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,r=t.custom||{},i=t._model;t.$previousStyle={backgroundColor:i.backgroundColor,borderColor:i.borderColor,borderWidth:i.borderWidth,radius:i.radius},i.backgroundColor=r.hoverBackgroundColor||a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,a.getHoverColor(i.backgroundColor)),i.borderColor=r.hoverBorderColor||a.valueAtIndexOrDefault(e.pointHoverBorderColor,n,a.getHoverColor(i.borderColor)),i.borderWidth=r.hoverBorderWidth||a.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,i.borderWidth),i.radius=r.hoverRadius||a.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius)}})}},{26:26,41:41,46:46}],19:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var o=0;o<r[0].data.length;++o)e.push('<li><span style="background-color:'+r[0].backgroundColor[o]+'"></span>'),i[o]&&e.push(i[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,r){var i=t.getDatasetMeta(0),a=e.datasets[0],s=i.data[r].custom||{},l=o.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:n,fillStyle:s.backgroundColor?s.backgroundColor:l(a.backgroundColor,r,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(a.borderColor,r,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(a.borderWidth,r,u.borderWidth),hidden:isNaN(a.data[r])||i.data[r].hidden,index:r}})):[]}},onClick:function(t,e){var n,r,i,o=e.index,a=this.chart;for(n=0,r=(a.data.datasets||[]).length;n<r;++n)(i=a.getDatasetMeta(n)).data[o].hidden=!i.data[o].hidden;a.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:i.Arc,linkScales:o.noop,update:function(t){var e,n,r,i=this,a=i.getDataset(),s=i.getMeta(),l=i.chart.options.startAngle||0,u=i._starts=[],c=i._angles=[];for(i._updateRadius(),s.count=i.countVisibleElements(),e=0,n=a.data.length;e<n;e++)u[e]=l,r=i._computeAngle(e),c[e]=r,l+=r;o.each(s.data,(function(e,n){i.updateElement(e,n,t)}))},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,r=e.options,i=r.elements.arc,o=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max((o-i.borderWidth/2)/2,0),e.innerRadius=Math.max(r.cutoutPercentage?e.outerRadius/100*r.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var r=this,i=r.chart,a=r.getDataset(),s=i.options,l=s.animation,u=i.scale,c=i.data.labels,d=u.xCenter,f=u.yCenter,h=s.startAngle,p=t.hidden?0:u.getDistanceFromCenterForValue(a.data[e]),g=r._starts[e],v=g+(t.hidden?0:r._angles[e]),m=l.animateScale?0:u.getDistanceFromCenterForValue(a.data[e]);o.extend(t,{_datasetIndex:r.index,_index:e,_scale:u,_model:{x:d,y:f,innerRadius:0,outerRadius:n?m:p,startAngle:n&&l.animateRotate?h:g,endAngle:n&&l.animateRotate?h:v,label:o.valueAtIndexOrDefault(c,e,c[e])}});var y=this.chart.options.elements.arc,b=t.custom||{},x=o.valueAtIndexOrDefault,w=t._model;w.backgroundColor=b.backgroundColor?b.backgroundColor:x(a.backgroundColor,e,y.backgroundColor),w.borderColor=b.borderColor?b.borderColor:x(a.borderColor,e,y.borderColor),w.borderWidth=b.borderWidth?b.borderWidth:x(a.borderWidth,e,y.borderWidth),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return o.each(e.data,(function(e,r){isNaN(t.data[r])||e.hidden||n++})),n},_computeAngle:function(t){var e=this,n=this.getMeta().count,r=e.getDataset(),i=e.getMeta();if(isNaN(r.data[t])||i.data[t].hidden)return 0;var a={chart:e.chart,dataIndex:t,dataset:r,datasetIndex:e.index};return o.options.resolve([e.chart.options.elements.arc.angle,2*Math.PI/n],a,t)}})}},{26:26,41:41,46:46}],20:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,linkScales:o.noop,update:function(t){var e=this,n=e.getMeta(),r=n.dataset,i=n.data,a=r.custom||{},s=e.getDataset(),l=e.chart.options.elements.line,u=e.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),o.extend(n.dataset,{_datasetIndex:e.index,_scale:u,_children:i,_loop:!0,_model:{tension:a.tension?a.tension:o.valueOrDefault(s.lineTension,l.tension),backgroundColor:a.backgroundColor?a.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:s.borderWidth||l.borderWidth,borderColor:a.borderColor?a.borderColor:s.borderColor||l.borderColor,fill:a.fill?a.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:a.borderCapStyle?a.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:a.borderDash?a.borderDash:s.borderDash||l.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),n.dataset.pivot(),o.each(i,(function(n,r){e.updateElement(n,r,t)}),e),e.updateBezierControlPoints()},updateElement:function(t,e,n){var r=this,i=t.custom||{},a=r.getDataset(),s=r.chart.scale,l=r.chart.options.elements.point,u=s.getPointPositionForValue(e,a.data[e]);void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),void 0!==a.hitRadius&&void 0===a.pointHitRadius&&(a.pointHitRadius=a.hitRadius),o.extend(t,{_datasetIndex:r.index,_index:e,_scale:s,_model:{x:n?s.xCenter:u.x,y:n?s.yCenter:u.y,tension:i.tension?i.tension:o.valueOrDefault(a.lineTension,r.chart.options.elements.line.tension),radius:i.radius?i.radius:o.valueAtIndexOrDefault(a.pointRadius,e,l.radius),backgroundColor:i.backgroundColor?i.backgroundColor:o.valueAtIndexOrDefault(a.pointBackgroundColor,e,l.backgroundColor),borderColor:i.borderColor?i.borderColor:o.valueAtIndexOrDefault(a.pointBorderColor,e,l.borderColor),borderWidth:i.borderWidth?i.borderWidth:o.valueAtIndexOrDefault(a.pointBorderWidth,e,l.borderWidth),pointStyle:i.pointStyle?i.pointStyle:o.valueAtIndexOrDefault(a.pointStyle,e,l.pointStyle),rotation:i.rotation?i.rotation:o.valueAtIndexOrDefault(a.pointRotation,e,l.rotation),hitRadius:i.hitRadius?i.hitRadius:o.valueAtIndexOrDefault(a.pointHitRadius,e,l.hitRadius)}}),t._model.skip=i.skip?i.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();o.each(e.data,(function(n,r){var i=n._model,a=o.splineCurve(o.previousItem(e.data,r,!0)._model,i,o.nextItem(e.data,r,!0)._model,i.tension);i.controlPointPreviousX=Math.max(Math.min(a.previous.x,t.right),t.left),i.controlPointPreviousY=Math.max(Math.min(a.previous.y,t.bottom),t.top),i.controlPointNextX=Math.max(Math.min(a.next.x,t.right),t.left),i.controlPointNextY=Math.max(Math.min(a.next.y,t.bottom),t.top),n.pivot()}))},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},r=t._index,i=t._model;t.$previousStyle={backgroundColor:i.backgroundColor,borderColor:i.borderColor,borderWidth:i.borderWidth,radius:i.radius},i.radius=n.hoverRadius?n.hoverRadius:o.valueAtIndexOrDefault(e.pointHoverRadius,r,this.chart.options.elements.point.hoverRadius),i.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,r,o.getHoverColor(i.backgroundColor)),i.borderColor=n.hoverBorderColor?n.hoverBorderColor:o.valueAtIndexOrDefault(e.pointHoverBorderColor,r,o.getHoverColor(i.borderColor)),i.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o.valueAtIndexOrDefault(e.pointHoverBorderWidth,r,i.borderWidth)}})}},{26:26,41:41,46:46}],21:[function(t,e,n){t(26)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{26:26}],22:[function(t,e,n){var r=t(27);n=e.exports=r.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null});Object.defineProperty(n.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(n.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})},{27:27}],23:[function(t,e,n){var r=t(26),i=t(46);r._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:i.noop,onComplete:i.noop}}),e.exports={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,r){var i,o,a=this.animations;for(e.chart=t,r||(t.animating=!0),i=0,o=a.length;i<o;++i)if(a[i].chart===t)return void(a[i]=e);a.push(e),1===a.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=i.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=i.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var r=Date.now();t.dropFrames+=(r-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,n,r=this.animations,o=0;o<r.length;)n=(e=r[o]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),i.callback(e.render,[n,e],n),i.callback(e.onAnimationProgress,[e],n),e.currentStep>=e.numSteps?(i.callback(e.onAnimationComplete,[e],n),n.animating=!1,r.splice(o,1)):++o}}},{26:26,46:46}],24:[function(t,e,n){var r=t(22),i=t(23),a=t(26),s=t(46),l=t(29),u=t(31),c=t(49),d=t(32),f=t(34),h=t(36);e.exports=function(t){function e(e){var n=e.options;s.each(e.scales,(function(t){u.removeBox(e,t)})),n=s.configMerge(t.defaults.global,t.defaults[e.config.type],n),e.options=e.config.options=n,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=n.tooltips,e.tooltip.initialize()}function n(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},s.extend(t.prototype,{construct:function(e,n){var r=this;n=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=s.configMerge(a.global,a[t.type],t.options||{}),t}(n);var i=c.acquireContext(e,n),o=i&&i.canvas,l=o&&o.height,u=o&&o.width;r.id=s.uid(),r.ctx=i,r.canvas=o,r.config=n,r.width=u,r.height=l,r.aspectRatio=l?u/l:null,r.options=n.options,r._bufferedRender=!1,r.chart=r,r.controller=r,t.instances[r.id]=r,Object.defineProperty(r,"data",{get:function(){return r.config.data},set:function(t){r.config.data=t}}),i&&o?(r.initialize(),r.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return d.notify(t,"beforeInit"),s.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),d.notify(t,"afterInit"),t},clear:function(){return s.canvas.clear(this),this},stop:function(){return i.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,r=e.canvas,i=n.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(s.getMaximumWidth(r))),a=Math.max(0,Math.floor(i?o/i:s.getMaximumHeight(r)));if((e.width!==o||e.height!==a)&&(r.width=e.width=o,r.height=e.height=a,r.style.width=o+"px",r.style.height=a+"px",s.retinaScale(e,n.devicePixelRatio),!t)){var l={width:o,height:a};d.notify(e,"resize",[l]),e.options.onResize&&e.options.onResize(e,l),e.stop(),e.update({duration:e.options.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;s.each(e.xAxes,(function(t,e){t.id=t.id||"x-axis-"+e})),s.each(e.yAxes,(function(t,e){t.id=t.id||"y-axis-"+e})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,r=t.scales||{},i=[],o=Object.keys(r).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),s.each(i,(function(e){var i=e.options,a=i.id,l=s.valueOrDefault(i.type,e.dtype);n(i.position)!==n(e.dposition)&&(i.position=e.dposition),o[a]=!0;var u=null;if(a in r&&r[a].type===l)(u=r[a]).options=i,u.ctx=t.ctx,u.chart=t;else{var c=f.getScaleConstructor(l);if(!c)return;u=new c({id:a,type:l,options:i,ctx:t.ctx,chart:t}),r[u.id]=u}u.mergeTicksOptions(),e.isDefault&&(t.scale=u)})),s.each(o,(function(t,e){t||delete r[e]})),t.scales=r,f.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],r=[];return s.each(e.data.datasets,(function(i,o){var a=e.getDatasetMeta(o),s=i.type||e.config.type;if(a.type&&a.type!==s&&(e.destroyDatasetMeta(o),a=e.getDatasetMeta(o)),a.type=s,n.push(a.type),a.controller)a.controller.updateIndex(o),a.controller.linkScales();else{var l=t.controllers[a.type];if(void 0===l)throw new Error('"'+a.type+'" is not a chart type.');a.controller=new l(e,o),r.push(a.controller)}}),e),r},resetElements:function(){var t=this;s.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var n=this;if(t&&"object"===o(t)||(t={duration:t,lazy:arguments[1]}),e(n),d._invalidate(n),!1!==d.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var r=n.buildOrUpdateControllers();s.each(n.data.datasets,(function(t,e){n.getDatasetMeta(e).controller.buildOrUpdateElements()}),n),n.updateLayout(),n.options.animation&&n.options.animation.duration&&s.each(r,(function(t){t.reset()})),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],d.notify(n,"afterUpdate"),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){!1!==d.notify(this,"beforeLayout")&&(u.update(this,this.width,this.height),d.notify(this,"afterScaleUpdate"),d.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==d.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);d.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==d.notify(this,"beforeDatasetUpdate",[n])&&(e.controller.update(),d.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"===o(t)||(t={duration:t,lazy:arguments[1]});var n=t.duration,a=t.lazy;if(!1!==d.notify(e,"beforeRender")){var l=e.options.animation,u=function(t){d.notify(e,"afterRender"),s.callback(l&&l.onComplete,[t],e)};if(l&&(void 0!==n&&0!==n||void 0===n&&0!==l.duration)){var c=new r({numSteps:(n||l.duration)/16.66,easing:t.easing||l.easing,render:function(t,e){var n=s.easing.effects[e.easing],r=e.currentStep,i=r/e.numSteps;t.draw(n(i),i,r)},onAnimationProgress:l.onProgress,onAnimationComplete:u});i.addAnimation(e,c,n,a)}else e.draw(),u(new r({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),s.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==d.notify(e,"beforeDraw",[t])&&(s.each(e.boxes,(function(t){t.draw(e.chartArea)}),e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),d.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==d.notify(e,"beforeDatasetsDraw",[t])){for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);d.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this.getDatasetMeta(t),r={meta:n,index:t,easingValue:e};!1!==d.notify(this,"beforeDatasetDraw",[r])&&(n.controller.draw(e),d.notify(this,"afterDatasetDraw",[r]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==d.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),d.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return l.modes.single(this,t)},getElementsAtEvent:function(t){return l.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return l.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var r=l.modes[e];return"function"==typeof r?r(this,t,n):[]},getDatasetAtEvent:function(t){return l.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],r=n._meta&&n._meta[e];r&&(r.controller.destroy(),delete n._meta[e])},destroy:function(){var e,n,r=this,i=r.canvas;for(r.stop(),e=0,n=r.data.datasets.length;e<n;++e)r.destroyDatasetMeta(e);i&&(r.unbindEvents(),s.canvas.clear(r),c.releaseContext(r.ctx),r.canvas=null,r.ctx=null),d.notify(r,"destroy"),delete t.instances[r.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new h({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};s.each(t.options.events,(function(r){c.addEventListener(t,r,n),e[r]=n})),t.options.responsive&&(n=function(){t.resize()},c.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,s.each(e,(function(e,n){c.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var r,i,o,a=n?"setHoverStyle":"removeHoverStyle";for(i=0,o=t.length;i<o;++i)(r=t[i])&&this.getDatasetMeta(r._datasetIndex).controller[a](r)},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==d.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var r=e.handleEvent(t);n&&(r=n._start?n.handleEvent(t):r|n.handleEvent(t)),d.notify(e,"afterEvent",[t]);var i=e._bufferedRequest;return i?e.render(i):r&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,r=n.options||{},i=r.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,i.mode,i),s.callback(r.onHover||r.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||r.onClick&&r.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,i.mode,!1),n.active.length&&i.mode&&n.updateHoverStyle(n.active,i.mode,!0),e=!s.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),t.Controller=t}},{22:22,23:23,26:26,29:29,31:31,32:32,34:34,36:36,46:46,49:49}],25:[function(t,e,n){var r=t(46);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function n(t,n){var r=t._chartjs;if(r){var i=r.listeners,o=i.indexOf(n);-1!==o&&i.splice(o,1),i.length>0||(e.forEach((function(e){delete t[e]})),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},r.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),r=this.getDataset().data||[],i=n.data;for(t=0,e=r.length;t<e;++t)i[t]=i[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,i,o=this,a=o.getDataset(),s=a.data||(a.data=[]);o._data!==s&&(o._data&&n(o._data,o),i=o,(t=s)._chartjs?t._chartjs.listeners.push(i):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[i]}}),e.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=i.apply(this,e);return r.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),o}})}))),o._data=s),o.resyncElements()},update:r.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],r=n.length,i=0;i<r;++i)n[i].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,r=0;for(t.dataset&&t.dataset.draw();r<n;++r)e[r].draw()},removeHoverStyle:function(t){r.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},o=r.valueAtIndexOrDefault,a=r.getHoverColor,s=t._model;t.$previousStyle={backgroundColor:s.backgroundColor,borderColor:s.borderColor,borderWidth:s.borderWidth},s.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:o(e.hoverBackgroundColor,n,a(s.backgroundColor)),s.borderColor=i.hoverBorderColor?i.hoverBorderColor:o(e.hoverBorderColor,n,a(s.borderColor)),s.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:o(e.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,r=e.length;r<n?t.data.splice(r,n-r):r>n&&this.insertElements(n,r-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=r.inherits}},{46:46}],26:[function(t,e,n){var r=t(46);e.exports={_set:function(t,e){return r.merge(this[t]||(this[t]={}),e)}}},{46:46}],27:[function(t,e,n){var r=t(3),i=t(46);var a=function(t){i.extend(this,t),this.initialize.apply(this,arguments)};i.extend(a.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=i.clone(t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,s,l,u,c,d,f,h,p,g=Object.keys(n);for(a=0,s=g.length;a<s;++a)if(d=n[l=g[a]],e.hasOwnProperty(l)||(e[l]=d),(u=e[l])!==d&&"_"!==l[0]){if(t.hasOwnProperty(l)||(t[l]=u),c=t[l],(f=o(d))===o(c))if("string"===f){if((h=r(c)).valid&&(p=r(d)).valid){e[l]=p.mix(h,i).rgbString();continue}}else if("number"===f&&isFinite(c)&&isFinite(d)){e[l]=c+(d-c)*i;continue}e[l]=d}}(i,a,n,t),e):(e._view=n,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return i.isNumber(this._model.x)&&i.isNumber(this._model.y)}}),a.extend=i.inherits,e.exports=a},{3:3,46:46}],28:[function(t,e,n){var r=t(3),i=t(26),o=t(46),a=t(34);e.exports=function(){function t(t,e,n){var r;return"string"==typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}function e(t){return null!=t&&"none"!==t}function n(n,r,i){var a=document.defaultView,s=o._getParentNode(n),l=a.getComputedStyle(n)[r],u=a.getComputedStyle(s)[r],c=e(l),d=e(u),f=Number.POSITIVE_INFINITY;return c||d?Math.min(c?t(l,n,i):f,d?t(u,s,i):f):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,n,r){var i=e[t]||{},s=n[t];"scales"===t?e[t]=o.scaleMerge(i,s):"scale"===t?e[t]=o.merge(i,[a.getScaleDefaults(s.type),s]):o._merger(t,e,n,r)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,n,r){if("xAxes"===t||"yAxes"===t){var i,s,l,u=n[t].length;for(e[t]||(e[t]=[]),i=0;i<u;++i)l=n[t][i],s=o.valueOrDefault(l.type,"xAxes"===t?"category":"linear"),i>=e[t].length&&e[t].push({}),!e[t][i].type||l.type&&l.type!==e[t][i].type?o.merge(e[t][i],[a.getScaleDefaults(s),l]):o.merge(e[t][i],l)}else o._merger(t,e,n,r)}})},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return o.each(t,(function(t){e(t)&&n.push(t)})),n},o.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var r=0,i=t.length;r<i;++r)if(e.call(n,t[r],r,t))return r;return-1},o.findNextWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=-1);for(var r=n+1;r<t.length;r++){var i=t[r];if(e(i))return i}},o.findPreviousWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=t.length);for(var r=n-1;r>=0;r--){var i=t[r];if(e(i))return i}},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,n){return Math.abs(t-e)<n},o.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},o.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r),o=Math.atan2(r,n);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:i}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2==0?0:.5},o.splineCurve=function(t,e,n,r){var i=t.skip?e:t,o=e,a=n.skip?e:n,s=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)),l=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),u=s/(s+l),c=l/(s+l),d=r*(u=isNaN(u)?0:u),f=r*(c=isNaN(c)?0:c);return{previous:{x:o.x-d*(a.x-i.x),y:o.y-d*(a.y-i.y)},next:{x:o.x+f*(a.x-i.x),y:o.y+f*(a.y-i.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,n,r,i,a,s,l,u,c,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),f=d.length;for(e=0;e<f;++e)if(!(r=d[e]).model.skip){if(n=e>0?d[e-1]:null,(i=e<f-1?d[e+1]:null)&&!i.model.skip){var h=i.model.x-r.model.x;r.deltaK=0!==h?(i.model.y-r.model.y)/h:0}!n||n.model.skip?r.mK=r.deltaK:!i||i.model.skip?r.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(r.deltaK)?r.mK=0:r.mK=(n.deltaK+r.deltaK)/2}for(e=0;e<f-1;++e)r=d[e],i=d[e+1],r.model.skip||i.model.skip||(o.almostEquals(r.deltaK,0,this.EPSILON)?r.mK=i.mK=0:(a=r.mK/r.deltaK,s=i.mK/r.deltaK,(u=Math.pow(a,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(u),r.mK=a*l*r.deltaK,i.mK=s*l*r.deltaK)));for(e=0;e<f;++e)(r=d[e]).model.skip||(n=e>0?d[e-1]:null,i=e<f-1?d[e+1]:null,n&&!n.model.skip&&(c=(r.model.x-n.model.x)/3,r.model.controlPointPreviousX=r.model.x-c,r.model.controlPointPreviousY=r.model.y-c*r.mK),i&&!i.model.skip&&(c=(i.model.x-r.model.x)/3,r.model.controlPointNextX=r.model.x+c,r.model.controlPointNextY=r.model.y+c*r.mK))},o.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var n=Math.floor(o.log10(t)),r=t/Math.pow(10,n);return(e?r<1.5?1:r<3?2:r<7?5:10:r<=1?1:r<=2?2:r<=5?5:10)*Math.pow(10,n)},o.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o.getRelativePosition=function(t,e){var n,r,i=t.originalEvent||t,a=t.target||t.srcElement,s=a.getBoundingClientRect(),l=i.touches;l&&l.length>0?(n=l[0].clientX,r=l[0].clientY):(n=i.clientX,r=i.clientY);var u=parseFloat(o.getStyle(a,"padding-left")),c=parseFloat(o.getStyle(a,"padding-top")),d=parseFloat(o.getStyle(a,"padding-right")),f=parseFloat(o.getStyle(a,"padding-bottom")),h=s.right-s.left-u-d,p=s.bottom-s.top-c-f;return{x:n=Math.round((n-s.left-u)/h*a.width/e.currentDevicePixelRatio),y:r=Math.round((r-s.top-c)/p*a.height/e.currentDevicePixelRatio)}},o.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},o._calculatePadding=function(t,e,n){return(e=o.getStyle(t,e)).indexOf("%")>-1?n/parseInt(e,10):parseInt(e,10)},o._getParentNode=function(t){var e=t.parentNode;return e&&e.host&&(e=e.host),e},o.getMaximumWidth=function(t){var e=o._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,r=n-o._calculatePadding(e,"padding-left",n)-o._calculatePadding(e,"padding-right",n),i=o.getConstraintWidth(t);return isNaN(i)?r:Math.min(r,i)},o.getMaximumHeight=function(t){var e=o._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,r=n-o._calculatePadding(e,"padding-top",n)-o._calculatePadding(e,"padding-bottom",n),i=o.getConstraintHeight(t);return isNaN(i)?r:Math.min(r,i)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var r=t.canvas,i=t.height,o=t.width;r.height=i*n,r.width=o*n,t.ctx.scale(n,n),r.style.height||r.style.width||(r.style.height=i+"px",r.style.width=o+"px")}},o.fontString=function(t,e,n){return e+" "+t+"px "+n},o.longestText=function(t,e,n,r){var i=(r=r||{}).data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},a=r.garbageCollect=[],r.font=e),t.font=e;var s=0;o.each(n,(function(e){null!=e&&!0!==o.isArray(e)?s=o.measureText(t,i,a,s,e):o.isArray(e)&&o.each(e,(function(e){null==e||o.isArray(e)||(s=o.measureText(t,i,a,s,e))}))}));var l=a.length/2;if(l>n.length){for(var u=0;u<l;u++)delete i[a[u]];a.splice(0,l)}return s},o.measureText=function(t,e,n,r,i){var o=e[i];return o||(o=e[i]=t.measureText(i).width,n.push(i)),o>r&&(r=o),r},o.numberOfLabelLines=function(t){var e=1;return o.each(t,(function(t){o.isArray(t)&&t.length>e&&(e=t.length)})),e},o.color=r?function(t){return t instanceof CanvasGradient&&(t=i.global.defaultColor),r(t)}:function(t){return console.error("Color.js not found!"),t},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{26:26,3:3,34:34,46:46}],29:[function(t,e,n){var r=t(46);function i(t,e){return t.native?{x:t.x,y:t.y}:r.getRelativePosition(t,e)}function o(t,e){var n,r,i,o,a;for(r=0,o=t.data.datasets.length;r<o;++r)if(t.isDatasetVisible(r))for(i=0,a=(n=t.getDatasetMeta(r)).data.length;i<a;++i){var s=n.data[i];s._view.skip||e(s)}}function a(t,e){var n=[];return o(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function s(t,e,n,r){var i=Number.POSITIVE_INFINITY,a=[];return o(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=r(e,o);s<i?(a=[t],i=s):s===i&&a.push(t)}})),a}function l(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,r){var i=e?Math.abs(t.x-r.x):0,o=n?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function u(t,e,n){var r=i(e,t);n.axis=n.axis||"x";var o=l(n.axis),u=n.intersect?a(t,r):s(t,r,!1,o),c=[];return u.length?(t.data.datasets.forEach((function(e,n){if(t.isDatasetVisible(n)){var r=t.getDatasetMeta(n).data[u[0]._index];r&&!r._view.skip&&c.push(r)}})),c):[]}e.exports={modes:{single:function(t,e){var n=i(e,t),r=[];return o(t,(function(t){if(t.inRange(n.x,n.y))return r.push(t),r})),r.slice(0,1)},label:u,index:u,dataset:function(t,e,n){var r=i(e,t);n.axis=n.axis||"xy";var o=l(n.axis),u=n.intersect?a(t,r):s(t,r,!1,o);return u.length>0&&(u=t.getDatasetMeta(u[0]._datasetIndex).data),u},"x-axis":function(t,e){return u(t,e,{intersect:!1})},point:function(t,e){return a(t,i(e,t))},nearest:function(t,e,n){var r=i(e,t);n.axis=n.axis||"xy";var o=l(n.axis),a=s(t,r,n.intersect,o);return a.length>1&&a.sort((function(t,e){var n=t.getArea()-e.getArea();return 0===n&&(n=t._datasetIndex-e._datasetIndex),n})),a.slice(0,1)},x:function(t,e,n){var r=i(e,t),a=[],s=!1;return o(t,(function(t){t.inXRange(r.x)&&a.push(t),t.inRange(r.x,r.y)&&(s=!0)})),n.intersect&&!s&&(a=[]),a},y:function(t,e,n){var r=i(e,t),a=[],s=!1;return o(t,(function(t){t.inYRange(r.y)&&a.push(t),t.inRange(r.x,r.y)&&(s=!0)})),n.intersect&&!s&&(a=[]),a}}}},{46:46}],30:[function(t,e,n){t(26)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{26:26}],31:[function(t,e,n){var r=t(46);function i(t,e){return r.where(t,(function(t){return t.position===e}))}function o(t,e){t.forEach((function(t,e){return t._tmpIndex_=e,t})),t.sort((function(t,n){var r=e?n:t,i=e?t:n;return r.weight===i.weight?r._tmpIndex_-i._tmpIndex_:r.weight-i.weight})),t.forEach((function(t){delete t._tmpIndex_}))}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var r,i=["fullWidth","position","weight"],o=i.length,a=0;a<o;++a)r=i[a],n.hasOwnProperty(r)&&(e[r]=n[r])},update:function(t,e,n){if(t){var a=t.options.layout||{},s=r.options.toPadding(a.padding),l=s.left,u=s.right,c=s.top,d=s.bottom,f=i(t.boxes,"left"),h=i(t.boxes,"right"),p=i(t.boxes,"top"),g=i(t.boxes,"bottom"),v=i(t.boxes,"chartArea");o(f,!0),o(h,!1),o(p,!0),o(g,!1);var m=e-l-u,y=n-c-d,b=y/2,x=(e-m/2)/(f.length+h.length),w=(n-b)/(p.length+g.length),S=m,k=y,C=[];r.each(f.concat(h,p,g),(function(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?m:S,w),k-=e.height):(e=t.update(x,k),S-=e.width),C.push({horizontal:n,minSize:e,box:t})}));var M=0,A=0,P=0,_=0;r.each(p.concat(g),(function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.left),A=Math.max(A,e.right)}})),r.each(f.concat(h),(function(t){if(t.getPadding){var e=t.getPadding();P=Math.max(P,e.top),_=Math.max(_,e.bottom)}}));var T=l,I=u,O=c,F=d;r.each(f.concat(h),z),r.each(f,(function(t){T+=t.width})),r.each(h,(function(t){I+=t.width})),r.each(p.concat(g),z),r.each(p,(function(t){O+=t.height})),r.each(g,(function(t){F+=t.height})),r.each(f.concat(h),(function(t){var e=r.findNextWhere(C,(function(e){return e.box===t})),n={left:0,right:0,top:O,bottom:F};e&&t.update(e.minSize.width,k,n)})),T=l,I=u,O=c,F=d,r.each(f,(function(t){T+=t.width})),r.each(h,(function(t){I+=t.width})),r.each(p,(function(t){O+=t.height})),r.each(g,(function(t){F+=t.height}));var D=Math.max(M-T,0);T+=D,I+=Math.max(A-I,0);var E=Math.max(P-O,0);O+=E,F+=Math.max(_-F,0);var L=n-O-F,R=e-T-I;R===S&&L===k||(r.each(f,(function(t){t.height=L})),r.each(h,(function(t){t.height=L})),r.each(p,(function(t){t.fullWidth||(t.width=R)})),r.each(g,(function(t){t.fullWidth||(t.width=R)})),k=L,S=R);var N=l+D,V=c+E;r.each(f.concat(p),B),N+=S,V+=k,r.each(h,B),r.each(g,B),t.chartArea={left:T,top:O,right:T+S,bottom:O+k},r.each(v,(function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(S,k)}))}function z(t){var e=r.findNextWhere(C,(function(e){return e.box===t}));if(e)if(t.isHorizontal()){var n={left:Math.max(T,M),right:Math.max(I,A),top:0,bottom:0};t.update(t.fullWidth?m:S,y/2,n)}else t.update(e.minSize.width,k)}function B(t){t.isHorizontal()?(t.left=t.fullWidth?l:T,t.right=t.fullWidth?e-u:T+S,t.top=V,t.bottom=V+t.height,V=t.bottom):(t.left=N,t.right=N+t.width,t.top=O,t.bottom=O+k,N=t.right)}}}},{46:46}],32:[function(t,e,n){var r=t(26),i=t(46);r._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var r,i,o,a,s,l=this.descriptors(t),u=l.length;for(r=0;r<u;++r)if("function"==typeof(s=(o=(i=l[r]).plugin)[e])&&((a=[t].concat(n||[])).push(i.options),!1===s.apply(o,a)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],o=[],a=t&&t.config||{},s=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=s[e];!1!==a&&(!0===a&&(a=i.clone(r.global.plugins[e])),n.push(t),o.push({plugin:t,options:a||{}}))}})),e.descriptors=o,e.id=this._cacheId,o},_invalidate:function(t){delete t.$plugins}}},{26:26,46:46}],33:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(35);function s(t){var e,n,r=[];for(e=0,n=t.length;e<n;++e)r.push(t[e].label);return r}function l(t,e,n){var r=t.getPixelForTick(e);return n&&(r-=0===e?(t.getPixelForTick(1)-r)/2:(r-t.getPixelForTick(e-1))/2),r}function u(t,e,n){return o.isArray(e)?o.longestText(t,n,e):t.measureText(e).width}function c(t){var e=o.valueOrDefault,n=r.global,i=e(t.fontSize,n.defaultFontSize),a=e(t.fontStyle,n.defaultFontStyle),s=e(t.fontFamily,n.defaultFontFamily);return{size:i,style:a,family:s,font:o.fontString(i,a,s)}}function d(t){return o.options.toLineHeight(o.valueOrDefault(t.lineHeight,1.2),o.valueOrDefault(t.fontSize,r.global.defaultFontSize))}r._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:a.formatters.values,minor:{},major:{}}}),e.exports=i.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){o.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var r,i,a,s,l,u,c=this;for(c.beforeUpdate(),c.maxWidth=t,c.maxHeight=e,c.margins=o.extend({left:0,right:0,top:0,bottom:0},n),c.longestTextCache=c.longestTextCache||{},c.beforeSetDimensions(),c.setDimensions(),c.afterSetDimensions(),c.beforeDataLimits(),c.determineDataLimits(),c.afterDataLimits(),c.beforeBuildTicks(),l=c.buildTicks()||[],c.afterBuildTicks(),c.beforeTickToLabelConversion(),a=c.convertTicksToLabels(l)||c.ticks,c.afterTickToLabelConversion(),c.ticks=a,r=0,i=a.length;r<i;++r)s=a[r],(u=l[r])?u.label=s:l.push(u={label:s,major:!1});return c._ticks=l,c.beforeCalculateTickRotation(),c.calculateTickRotation(),c.afterCalculateTickRotation(),c.beforeFit(),c.fit(),c.afterFit(),c.afterUpdate(),c.minSize},afterUpdate:function(){o.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){o.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){o.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){o.callback(this.options.beforeDataLimits,[this])},determineDataLimits:o.noop,afterDataLimits:function(){o.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){o.callback(this.options.beforeBuildTicks,[this])},buildTicks:o.noop,afterBuildTicks:function(){o.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){o.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){o.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){o.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,n=t.options.ticks,r=s(t._ticks),i=c(n);e.font=i.font;var a=n.minRotation||0;if(r.length&&t.options.display&&t.isHorizontal())for(var l,u=o.longestText(e,i.font,r,t.longestTextCache),d=u,f=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>f&&a<n.maxRotation;){var h=o.toRadians(a);if(l=Math.cos(h),Math.sin(h)*u>t.maxHeight){a--;break}a++,d=l*u}t.labelRotation=a},afterCalculateTickRotation:function(){o.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){o.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=s(t._ticks),r=t.options,i=r.ticks,a=r.scaleLabel,l=r.gridLines,f=r.display,h=t.isHorizontal(),p=c(i),g=r.gridLines.tickMarkLength;if(e.width=h?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:f&&l.drawTicks?g:0,e.height=h?f&&l.drawTicks?g:0:t.maxHeight,a.display&&f){var v=d(a)+o.options.toPadding(a.padding).height;h?e.height+=v:e.width+=v}if(i.display&&f){var m=o.longestText(t.ctx,p.font,n,t.longestTextCache),y=o.numberOfLabelLines(n),b=.5*p.size,x=t.options.ticks.padding;if(h){t.longestLabelWidth=m;var w=o.toRadians(t.labelRotation),S=Math.cos(w),k=Math.sin(w)*m+p.size*y+b*(y-1)+b;e.height=Math.min(t.maxHeight,e.height+k+x),t.ctx.font=p.font;var C=u(t.ctx,n[0],p.font),M=u(t.ctx,n[n.length-1],p.font);0!==t.labelRotation?(t.paddingLeft="bottom"===r.position?S*C+3:S*b+3,t.paddingRight="bottom"===r.position?S*b+3:S*M+3):(t.paddingLeft=C/2+3,t.paddingRight=M/2+3)}else i.mirror?m=0:m+=x+b,e.width=Math.min(t.maxWidth,e.width+m),t.paddingTop=p.size/2,t.paddingBottom=p.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){o.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(o.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:o.noop,getPixelForValue:o.noop,getValueForPixel:o.noop,getPixelForTick:function(t){var e=this,n=e.options.offset;if(e.isHorizontal()){var r=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(n?0:1),1),i=r*t+e.paddingLeft;n&&(i+=r/2);var o=e.left+Math.round(i);return o+=e.isFullWidth()?e.margins.left:0}var a=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(a/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,r=e.left+Math.round(n);return r+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,r,i,a=this,s=a.isHorizontal(),l=a.options.ticks.minor,u=t.length,c=o.toRadians(a.labelRotation),d=Math.cos(c),f=a.longestLabelWidth*d,h=[];for(l.maxTicksLimit&&(i=l.maxTicksLimit),s&&(e=!1,(f+l.autoSkipPadding)*u>a.width-(a.paddingLeft+a.paddingRight)&&(e=1+Math.floor((f+l.autoSkipPadding)*u/(a.width-(a.paddingLeft+a.paddingRight)))),i&&u>i&&(e=Math.max(e,Math.floor(u/i)))),n=0;n<u;n++)r=t[n],(e>1&&n%e>0||n%e==0&&n+e>=u)&&n!==u-1&&delete r.label,h.push(r);return h},draw:function(t){var e=this,n=e.options;if(n.display){var i=e.ctx,a=r.global,s=n.ticks.minor,u=n.ticks.major||s,f=n.gridLines,h=n.scaleLabel,p=0!==e.labelRotation,g=e.isHorizontal(),v=s.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),m=o.valueOrDefault(s.fontColor,a.defaultFontColor),y=c(s),b=o.valueOrDefault(u.fontColor,a.defaultFontColor),x=c(u),w=f.drawTicks?f.tickMarkLength:0,S=o.valueOrDefault(h.fontColor,a.defaultFontColor),k=c(h),C=o.options.toPadding(h.padding),M=o.toRadians(e.labelRotation),A=[],P=e.options.gridLines.lineWidth,_="right"===n.position?e.left:e.right-P-w,T="right"===n.position?e.left+w:e.right,I="bottom"===n.position?e.top+P:e.bottom-w-P,O="bottom"===n.position?e.top+P+w:e.bottom+P;if(o.each(v,(function(r,i){if(!o.isNullOrUndef(r.label)){var u,c,d,h,m,y,b,x,S,k,C,F,D,E,L=r.label;i===e.zeroLineIndex&&n.offset===f.offsetGridLines?(u=f.zeroLineWidth,c=f.zeroLineColor,d=f.zeroLineBorderDash,h=f.zeroLineBorderDashOffset):(u=o.valueAtIndexOrDefault(f.lineWidth,i),c=o.valueAtIndexOrDefault(f.color,i),d=o.valueOrDefault(f.borderDash,a.borderDash),h=o.valueOrDefault(f.borderDashOffset,a.borderDashOffset));var R="middle",N="middle",V=s.padding;if(g){var z=w+V;"bottom"===n.position?(N=p?"middle":"top",R=p?"right":"center",E=e.top+z):(N=p?"middle":"bottom",R=p?"left":"center",E=e.bottom-z);var B=l(e,i,f.offsetGridLines&&v.length>1);B<e.left&&(c="rgba(0,0,0,0)"),B+=o.aliasPixel(u),D=e.getPixelForTick(i)+s.labelOffset,m=b=S=C=B,y=I,x=O,k=t.top,F=t.bottom+P}else{var W,j="left"===n.position;s.mirror?(R=j?"left":"right",W=V):(R=j?"right":"left",W=w+V),D=j?e.right-W:e.left+W;var H=l(e,i,f.offsetGridLines&&v.length>1);H<e.top&&(c="rgba(0,0,0,0)"),H+=o.aliasPixel(u),E=e.getPixelForTick(i)+s.labelOffset,m=_,b=T,S=t.left,C=t.right+P,y=x=k=F=H}A.push({tx1:m,ty1:y,tx2:b,ty2:x,x1:S,y1:k,x2:C,y2:F,labelX:D,labelY:E,glWidth:u,glColor:c,glBorderDash:d,glBorderDashOffset:h,rotation:-1*M,label:L,major:r.major,textBaseline:N,textAlign:R})}})),o.each(A,(function(t){if(f.display&&(i.save(),i.lineWidth=t.glWidth,i.strokeStyle=t.glColor,i.setLineDash&&(i.setLineDash(t.glBorderDash),i.lineDashOffset=t.glBorderDashOffset),i.beginPath(),f.drawTicks&&(i.moveTo(t.tx1,t.ty1),i.lineTo(t.tx2,t.ty2)),f.drawOnChartArea&&(i.moveTo(t.x1,t.y1),i.lineTo(t.x2,t.y2)),i.stroke(),i.restore()),s.display){i.save(),i.translate(t.labelX,t.labelY),i.rotate(t.rotation),i.font=t.major?x.font:y.font,i.fillStyle=t.major?b:m,i.textBaseline=t.textBaseline,i.textAlign=t.textAlign;var n=t.label;if(o.isArray(n))for(var r=n.length,a=1.5*y.size,l=e.isHorizontal()?0:-a*(r-1)/2,u=0;u<r;++u)i.fillText(""+n[u],0,l),l+=a;else i.fillText(n,0,0);i.restore()}})),h.display){var F,D,E=0,L=d(h)/2;if(g)F=e.left+(e.right-e.left)/2,D="bottom"===n.position?e.bottom-L-C.bottom:e.top+L+C.top;else{var R="left"===n.position;F=R?e.left+L+C.top:e.right-L-C.top,D=e.top+(e.bottom-e.top)/2,E=R?-.5*Math.PI:.5*Math.PI}i.save(),i.translate(F,D),i.rotate(E),i.textAlign="center",i.textBaseline="middle",i.fillStyle=S,i.font=k.font,i.fillText(h.labelString,0,0),i.restore()}if(f.drawBorder){i.lineWidth=o.valueAtIndexOrDefault(f.lineWidth,0),i.strokeStyle=o.valueAtIndexOrDefault(f.color,0);var N=e.left,V=e.right+P,z=e.top,B=e.bottom+P,W=o.aliasPixel(i.lineWidth);g?(z=B="top"===n.position?e.bottom:e.top,z+=W,B+=W):(N=V="left"===n.position?e.right:e.left,N+=W,V+=W),i.beginPath(),i.moveTo(N,z),i.lineTo(V,B),i.stroke()}}}})},{26:26,27:27,35:35,46:46}],34:[function(t,e,n){var r=t(26),i=t(46),o=t(31);e.exports={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=i.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?i.merge({},[r.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=i.extend(this.defaults[t],e))},addScalesToLayout:function(t){i.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,o.addBox(t,e)}))}}},{26:26,31:31,46:46}],35:[function(t,e,n){var r=t(46);e.exports={formatters:{values:function(t){return r.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var o=r.log10(Math.abs(i)),a="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var s=r.log10(Math.abs(t));a=t.toExponential(Math.floor(s)-Math.floor(o))}else{var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),a=t.toFixed(l)}else a="0";return a},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(r.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}}},{46:46}],36:[function(t,e,n){var r=t(26),i=t(27),o=t(46);r._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(t,e){var n="",r=e.labels,i=r?r.length:0;if(t.length>0){var o=t[0];o.xLabel?n=o.xLabel:i>0&&o.index<i&&(n=r[o.index])}return n},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}});var a={average:function(t){if(!t.length)return!1;var e,n,r=0,i=0,o=0;for(e=0,n=t.length;e<n;++e){var a=t[e];if(a&&a.hasValue()){var s=a.tooltipPosition();r+=s.x,i+=s.y,++o}}return{x:Math.round(r/o),y:Math.round(i/o)}},nearest:function(t,e){var n,r,i,a=e.x,s=e.y,l=Number.POSITIVE_INFINITY;for(n=0,r=t.length;n<r;++n){var u=t[n];if(u&&u.hasValue()){var c=u.getCenterPoint(),d=o.distanceBetweenPoints(e,c);d<l&&(l=d,i=u)}}if(i){var f=i.tooltipPosition();a=f.x,s=f.y}return{x:a,y:s}}};function s(t,e){var n=o.color(t);return n.alpha(e*n.alpha()).rgbaString()}function l(t,e){return e&&(o.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function u(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function c(t){var e=r.global,n=o.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:n(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:n(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:n(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:n(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:n(t.titleFontStyle,e.defaultFontStyle),titleFontSize:n(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:n(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:n(t.footerFontStyle,e.defaultFontStyle),footerFontSize:n(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function d(t){return l([],u(t))}(e.exports=i.extend({initialize:function(){this._model=c(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,r=n.beforeTitle.apply(t,arguments),i=n.title.apply(t,arguments),o=n.afterTitle.apply(t,arguments),a=[];return a=l(a,u(r)),a=l(a,u(i)),a=l(a,u(o))},getBeforeBody:function(){return d(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,r=n._options.callbacks,i=[];return o.each(t,(function(t){var o={before:[],lines:[],after:[]};l(o.before,u(r.beforeLabel.call(n,t,e))),l(o.lines,r.label.call(n,t,e)),l(o.after,u(r.afterLabel.call(n,t,e))),i.push(o)})),i},getAfterBody:function(){return d(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),r=e.footer.apply(t,arguments),i=e.afterFooter.apply(t,arguments),o=[];return o=l(o,u(n)),o=l(o,u(r)),o=l(o,u(i))},update:function(t){var e,n,r,i,s,l,u,d=this,f=d._options,h=d._model,p=d._model=c(f),g=d._active,v=d._data,m={xAlign:h.xAlign,yAlign:h.yAlign},y={x:h.x,y:h.y},b={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){p.opacity=1;var w=[],S=[];x=a[f.position].call(d,g,d._eventPosition);var k=[];for(e=0,n=g.length;e<n;++e)k.push((r=g[e],i=void 0,s=void 0,l=void 0,u=void 0,i=r._xScale,s=r._yScale||r._scale,l=r._index,u=r._datasetIndex,{xLabel:i?i.getLabelForIndex(l,u):"",yLabel:s?s.getLabelForIndex(l,u):"",index:l,datasetIndex:u,x:r._model.x,y:r._model.y}));f.filter&&(k=k.filter((function(t){return f.filter(t,v)}))),f.itemSort&&(k=k.sort((function(t,e){return f.itemSort(t,e,v)}))),o.each(k,(function(t){w.push(f.callbacks.labelColor.call(d,t,d._chart)),S.push(f.callbacks.labelTextColor.call(d,t,d._chart))})),p.title=d.getTitle(k,v),p.beforeBody=d.getBeforeBody(k,v),p.body=d.getBody(k,v),p.afterBody=d.getAfterBody(k,v),p.footer=d.getFooter(k,v),p.x=Math.round(x.x),p.y=Math.round(x.y),p.caretPadding=f.caretPadding,p.labelColors=w,p.labelTextColors=S,p.dataPoints=k,b=function(t,e){var n=t._chart.ctx,r=2*e.yPadding,i=0,a=e.body,s=a.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);s+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,u=e.footer.length,c=e.titleFontSize,d=e.bodyFontSize,f=e.footerFontSize;r+=l*c,r+=l?(l-1)*e.titleSpacing:0,r+=l?e.titleMarginBottom:0,r+=s*d,r+=s?(s-1)*e.bodySpacing:0,r+=u?e.footerMarginTop:0,r+=u*f,r+=u?(u-1)*e.footerSpacing:0;var h=0,p=function(t){i=Math.max(i,n.measureText(t).width+h)};return n.font=o.fontString(c,e._titleFontStyle,e._titleFontFamily),o.each(e.title,p),n.font=o.fontString(d,e._bodyFontStyle,e._bodyFontFamily),o.each(e.beforeBody.concat(e.afterBody),p),h=e.displayColors?d+2:0,o.each(a,(function(t){o.each(t.before,p),o.each(t.lines,p),o.each(t.after,p)})),h=0,n.font=o.fontString(f,e._footerFontStyle,e._footerFontFamily),o.each(e.footer,p),{width:i+=2*e.xPadding,height:r}}(this,p),y=function(t,e,n,r){var i=t.x,o=t.y,a=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,c=n.yAlign,d=a+s,f=l+s;return"right"===u?i-=e.width:"center"===u&&((i-=e.width/2)+e.width>r.width&&(i=r.width-e.width),i<0&&(i=0)),"top"===c?o+=d:o-="bottom"===c?e.height+d:e.height/2,"center"===c?"left"===u?i+=d:"right"===u&&(i-=d):"left"===u?i-=f:"right"===u&&(i+=f),{x:i,y:o}}(p,b,m=function(t,e){var n,r,i,o,a,s=t._model,l=t._chart,u=t._chart.chartArea,c="center",d="center";s.y<e.height?d="top":s.y>l.height-e.height&&(d="bottom");var f=(u.left+u.right)/2,h=(u.top+u.bottom)/2;"center"===d?(n=function(t){return t<=f},r=function(t){return t>f}):(n=function(t){return t<=e.width/2},r=function(t){return t>=l.width-e.width/2}),i=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},o=function(t){return t-e.width-s.caretSize-s.caretPadding<0},a=function(t){return t<=h?"top":"bottom"},n(s.x)?(c="left",i(s.x)&&(c="center",d=a(s.y))):r(s.x)&&(c="right",o(s.x)&&(c="center",d=a(s.y)));var p=t._options;return{xAlign:p.xAlign?p.xAlign:c,yAlign:p.yAlign?p.yAlign:d}}(this,b),d._chart)}else p.opacity=0;return p.xAlign=m.xAlign,p.yAlign=m.yAlign,p.x=y.x,p.y=y.y,p.width=b.width,p.height=b.height,p.caretX=x.x,p.caretY=x.y,d._model=p,t&&f.custom&&f.custom.call(d,p),d},drawCaret:function(t,e){var n=this._chart.ctx,r=this._view,i=this.getCaretPosition(t,e,r);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)},getCaretPosition:function(t,e,n){var r,i,o,a,s,l,u=n.caretSize,c=n.cornerRadius,d=n.xAlign,f=n.yAlign,h=t.x,p=t.y,g=e.width,v=e.height;if("center"===f)s=p+v/2,"left"===d?(i=(r=h)-u,o=r,a=s+u,l=s-u):(i=(r=h+g)+u,o=r,a=s-u,l=s+u);else if("left"===d?(r=(i=h+c+u)-u,o=i+u):"right"===d?(r=(i=h+g-c-u)-u,o=i+u):(r=(i=n.caretX)-u,o=i+u),"top"===f)s=(a=p)-u,l=a;else{s=(a=p+v)+u,l=a;var m=o;o=r,r=m}return{x1:r,x2:i,x3:o,y1:a,y2:s,y3:l}},drawTitle:function(t,e,n,r){var i=e.title;if(i.length){n.textAlign=e._titleAlign,n.textBaseline="top";var a,l,u=e.titleFontSize,c=e.titleSpacing;for(n.fillStyle=s(e.titleFontColor,r),n.font=o.fontString(u,e._titleFontStyle,e._titleFontFamily),a=0,l=i.length;a<l;++a)n.fillText(i[a],t.x,t.y),t.y+=u+c,a+1===i.length&&(t.y+=e.titleMarginBottom-c)}},drawBody:function(t,e,n,r){var i=e.bodyFontSize,a=e.bodySpacing,l=e.body;n.textAlign=e._bodyAlign,n.textBaseline="top",n.font=o.fontString(i,e._bodyFontStyle,e._bodyFontFamily);var u=0,c=function(e){n.fillText(e,t.x+u,t.y),t.y+=i+a};n.fillStyle=s(e.bodyFontColor,r),o.each(e.beforeBody,c);var d=e.displayColors;u=d?i+2:0,o.each(l,(function(a,l){var u=s(e.labelTextColors[l],r);n.fillStyle=u,o.each(a.before,c),o.each(a.lines,(function(o){d&&(n.fillStyle=s(e.legendColorBackground,r),n.fillRect(t.x,t.y,i,i),n.lineWidth=1,n.strokeStyle=s(e.labelColors[l].borderColor,r),n.strokeRect(t.x,t.y,i,i),n.fillStyle=s(e.labelColors[l].backgroundColor,r),n.fillRect(t.x+1,t.y+1,i-2,i-2),n.fillStyle=u),c(o)})),o.each(a.after,c)})),u=0,o.each(e.afterBody,c),t.y-=a},drawFooter:function(t,e,n,r){var i=e.footer;i.length&&(t.y+=e.footerMarginTop,n.textAlign=e._footerAlign,n.textBaseline="top",n.fillStyle=s(e.footerFontColor,r),n.font=o.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),o.each(i,(function(r){n.fillText(r,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})))},drawBackground:function(t,e,n,r,i){n.fillStyle=s(e.backgroundColor,i),n.strokeStyle=s(e.borderColor,i),n.lineWidth=e.borderWidth;var o=e.xAlign,a=e.yAlign,l=t.x,u=t.y,c=r.width,d=r.height,f=e.cornerRadius;n.beginPath(),n.moveTo(l+f,u),"top"===a&&this.drawCaret(t,r),n.lineTo(l+c-f,u),n.quadraticCurveTo(l+c,u,l+c,u+f),"center"===a&&"right"===o&&this.drawCaret(t,r),n.lineTo(l+c,u+d-f),n.quadraticCurveTo(l+c,u+d,l+c-f,u+d),"bottom"===a&&this.drawCaret(t,r),n.lineTo(l+f,u+d),n.quadraticCurveTo(l,u+d,l,u+d-f),"center"===a&&"left"===o&&this.drawCaret(t,r),n.lineTo(l,u+f),n.quadraticCurveTo(l,u,l+f,u),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},r={x:e.x,y:e.y},i=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(r,e,t,n,i),r.x+=e.xPadding,r.y+=e.yPadding,this.drawTitle(r,e,t,i),this.drawBody(r,e,t,i),this.drawFooter(r,e,t,i))}},handleEvent:function(t){var e,n=this,r=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:n._active=n._chart.getElementsAtEventForMode(t,r.mode,r),(e=!o.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(r.enabled||r.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}})).positioners=a},{26:26,27:27,46:46}],37:[function(t,e,n){var r=t(26),i=t(27),o=t(46);r._set("global",{elements:{arc:{backgroundColor:r.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=i.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var r=o.getAngleFromPoint(n,{x:t,y:e}),i=r.angle,a=r.distance,s=n.startAngle,l=n.endAngle;l<s;)l+=2*Math.PI;for(;i>l;)i-=2*Math.PI;for(;i<s;)i+=2*Math.PI;var u=i>=s&&i<=l,c=a>=n.innerRadius&&a<=n.outerRadius;return u&&c}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,r=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,r),t.arc(e.x,e.y,e.innerRadius,r,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{26:26,27:27,46:46}],38:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=r.global;r._set("global",{elements:{line:{tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=i.extend({draw:function(){var t,e,n,r,i=this._view,s=this._chart.ctx,l=i.spanGaps,u=this._children.slice(),c=a.elements.line,d=-1;for(this._loop&&u.length&&u.push(u[0]),s.save(),s.lineCap=i.borderCapStyle||c.borderCapStyle,s.setLineDash&&s.setLineDash(i.borderDash||c.borderDash),s.lineDashOffset=i.borderDashOffset||c.borderDashOffset,s.lineJoin=i.borderJoinStyle||c.borderJoinStyle,s.lineWidth=i.borderWidth||c.borderWidth,s.strokeStyle=i.borderColor||a.defaultColor,s.beginPath(),d=-1,t=0;t<u.length;++t)e=u[t],n=o.previousItem(u,t),r=e._view,0===t?r.skip||(s.moveTo(r.x,r.y),d=t):(n=-1===d?n:u[d],r.skip||(d!==t-1&&!l||-1===d?s.moveTo(r.x,r.y):o.canvas.lineTo(s,n._view,e._view),d=t));s.stroke(),s.restore()}})},{26:26,27:27,46:46}],39:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=r.global.defaultColor;function s(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}r._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:a,borderColor:a,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=i.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._model,i=this._chart.ctx,s=e.pointStyle,l=e.rotation,u=e.radius,c=e.x,d=e.y;e.skip||(void 0===t||n.x>=t.left&&1.01*t.right>=n.x&&n.y>=t.top&&1.01*t.bottom>=n.y)&&(i.strokeStyle=e.borderColor||a,i.lineWidth=o.valueOrDefault(e.borderWidth,r.global.elements.point.borderWidth),i.fillStyle=e.backgroundColor||a,o.canvas.drawPoint(i,s,u,c,d,l))}})},{26:26,27:27,46:46}],40:[function(t,e,n){var r=t(26),i=t(27);function o(t){return void 0!==t._view.width}function a(t){var e,n,r,i,a=t._view;if(o(t)){var s=a.width/2;e=a.x-s,n=a.x+s,r=Math.min(a.y,a.base),i=Math.max(a.y,a.base)}else{var l=a.height/2;e=Math.min(a.x,a.base),n=Math.max(a.x,a.base),r=a.y-l,i=a.y+l}return{left:e,top:r,right:n,bottom:i}}r._set("global",{elements:{rectangle:{backgroundColor:r.global.defaultColor,borderColor:r.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=i.extend({draw:function(){var t,e,n,r,i,o,a,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,n=l.y-l.height/2,r=l.y+l.height/2,i=e>t?1:-1,o=1,a=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,n=l.y,i=1,o=(r=l.base)>n?1:-1,a=l.borderSkipped||"bottom"),u){var c=Math.min(Math.abs(t-e),Math.abs(n-r)),d=(u=u>c?c:u)/2,f=t+("left"!==a?d*i:0),h=e+("right"!==a?-d*i:0),p=n+("top"!==a?d*o:0),g=r+("bottom"!==a?-d*o:0);f!==h&&(n=p,r=g),p!==g&&(t=f,e=h)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var v=[[t,r],[t,n],[e,n],[e,r]],m=["bottom","left","top","right"].indexOf(a,0);function y(t){return v[(m+t)%4]}-1===m&&(m=0);var b=y(0);s.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),s.lineTo(b[0],b[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=!1;if(this._view){var r=a(this);n=t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom}return n},inLabelRange:function(t,e){if(!this._view)return!1;var n=a(this);return o(this)?t>=n.left&&t<=n.right:e>=n.top&&e<=n.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return o(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{26:26,27:27}],41:[function(t,e,n){e.exports={},e.exports.Arc=t(37),e.exports.Line=t(38),e.exports.Point=t(39),e.exports.Rectangle=t(40)},{37:37,38:38,39:39,40:40}],42:[function(t,e,n){var r=t(43);n=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,r,i,o){if(o){var a=Math.min(o,i/2-1e-7,r/2-1e-7);t.moveTo(e+a,n),t.lineTo(e+r-a,n),t.arcTo(e+r,n,e+r,n+a,a),t.lineTo(e+r,n+i-a),t.arcTo(e+r,n+i,e+r-a,n+i,a),t.lineTo(e+a,n+i),t.arcTo(e,n+i,e,n+i-a,a),t.lineTo(e,n+a),t.arcTo(e,n,e+a,n,a),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,r,i)},drawPoint:function(t,e,n,r,i,a){var s,l,u,c,d,f;if(a=a||0,!e||"object"!==o(e)||"[object HTMLImageElement]"!==(s=e.toString())&&"[object HTMLCanvasElement]"!==s){if(!(isNaN(n)||n<=0)){switch(t.save(),t.translate(r,i),t.rotate(a*Math.PI/180),t.beginPath(),e){default:t.arc(0,0,n,0,2*Math.PI),t.closePath();break;case"triangle":d=(l=3*n/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(-l/2,d/3),t.lineTo(l/2,d/3),t.lineTo(0,-2*d/3),t.closePath();break;case"rect":f=1/Math.SQRT2*n,t.rect(-f,-f,2*f,2*f);break;case"rectRounded":var h=n/Math.SQRT2,p=-h,g=-h,v=Math.SQRT2*n;this.roundedRect(t,p,g,v,v,.425*n);break;case"rectRot":f=1/Math.SQRT2*n,t.moveTo(-f,0),t.lineTo(0,f),t.lineTo(f,0),t.lineTo(0,-f),t.closePath();break;case"cross":t.moveTo(0,n),t.lineTo(0,-n),t.moveTo(-n,0),t.lineTo(n,0);break;case"crossRot":u=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,t.moveTo(-u,-c),t.lineTo(u,c),t.moveTo(-u,c),t.lineTo(u,-c);break;case"star":t.moveTo(0,n),t.lineTo(0,-n),t.moveTo(-n,0),t.lineTo(n,0),u=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,t.moveTo(-u,-c),t.lineTo(u,c),t.moveTo(-u,c),t.lineTo(u,-c);break;case"line":t.moveTo(-n,0),t.lineTo(n,0);break;case"dash":t.moveTo(0,0),t.lineTo(n,0)}t.fill(),t.stroke(),t.restore()}}else t.drawImage(e,r-e.width/2,i-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,r){if(n.steppedLine)return"after"===n.steppedLine&&!r||"after"!==n.steppedLine&&r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y);n.tension?t.bezierCurveTo(r?e.controlPointPreviousX:e.controlPointNextX,r?e.controlPointPreviousY:e.controlPointNextY,r?n.controlPointNextX:n.controlPointPreviousX,r?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}};r.clear=n.clear,r.drawRoundedRectangle=function(t){t.beginPath(),n.roundedRect.apply(n,arguments)}},{43:43}],43:[function(t,e,n){var r,i={noop:function(){},uid:(r=0,function(){return r++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return i.valueOrDefault(i.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,r){var o,a,s;if(i.isArray(t))if(a=t.length,r)for(o=a-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<a;o++)e.call(n,t[o],o);else if(i.isObject(t))for(a=(s=Object.keys(t)).length,o=0;o<a;o++)e.call(n,t[s[o]],s[o])},arrayEquals:function(t,e){var n,r,o,a;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],a=e[n],o instanceof Array&&a instanceof Array){if(!i.arrayEquals(o,a))return!1}else if(o!==a)return!1;return!0},clone:function(t){if(i.isArray(t))return t.map(i.clone);if(i.isObject(t)){for(var e={},n=Object.keys(t),r=n.length,o=0;o<r;++o)e[n[o]]=i.clone(t[n[o]]);return e}return t},_merger:function(t,e,n,r){var o=e[t],a=n[t];i.isObject(o)&&i.isObject(a)?i.merge(o,a,r):e[t]=i.clone(a)},_mergerIf:function(t,e,n){var r=e[t],o=n[t];i.isObject(r)&&i.isObject(o)?i.mergeIf(r,o):e.hasOwnProperty(t)||(e[t]=i.clone(o))},merge:function(t,e,n){var r,o,a,s,l,u=i.isArray(e)?e:[e],c=u.length;if(!i.isObject(t))return t;for(r=(n=n||{}).merger||i._merger,o=0;o<c;++o)if(e=u[o],i.isObject(e))for(l=0,s=(a=Object.keys(e)).length;l<s;++l)r(a[l],t,e,n);return t},mergeIf:function(t,e){return i.merge(t,e,{merger:i._mergerIf})},extend:function(t){for(var e=function(e,n){t[n]=e},n=1,r=arguments.length;n<r;++n)i.each(arguments[n],e);return t},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},r=function(){this.constructor=n};return r.prototype=e.prototype,n.prototype=new r,n.extend=i.inherits,t&&i.extend(n.prototype,t),n.__super__=e.prototype,n}};e.exports=i,i.callCallback=i.callback,i.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},i.getValueOrDefault=i.valueOrDefault,i.getValueAtIndexOrDefault=i.valueAtIndexOrDefault},{}],44:[function(t,e,n){var r=t(43),i={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-i.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*i.easeInBounce(2*t):.5*i.easeOutBounce(2*t-1)+.5}};e.exports={effects:i},r.easingEffects=i},{43:43}],45:[function(t,e,n){var r=t(43);e.exports={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,o;return r.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,o=+t.left||0):e=n=i=o=+t||0,{top:e,right:n,bottom:i,left:o,height:e+i,width:o+n}},resolve:function(t,e,n){var i,o,a;for(i=0,o=t.length;i<o;++i)if(void 0!==(a=t[i])&&(void 0!==e&&"function"==typeof a&&(a=a(e)),void 0!==n&&r.isArray(a)&&(a=a[n]),void 0!==a))return a}}},{43:43}],46:[function(t,e,n){e.exports=t(43),e.exports.easing=t(44),e.exports.canvas=t(42),e.exports.options=t(45)},{42:42,43:43,44:44,45:45}],47:[function(t,e,n){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],48:[function(t,e,n){var r=t(46),i="$chartjs",o="chartjs-",a=o+"render-monitor",s=o+"render-animation",l=["animationstart","webkitAnimationStart"],u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function c(t,e){var n=r.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var d=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function f(t,e,n){t.addEventListener(e,n,d)}function h(t,e,n){t.removeEventListener(e,n,d)}function p(t,e,n,r,i){return{type:t,chart:e,native:i||null,x:void 0!==n?n:null,y:void 0!==r?r:null}}function g(t,e,n){var u,c,d,h,g=t[i]||(t[i]={}),v=g.resizer=function(t){var e=document.createElement("div"),n=o+"size-monitor",r="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=r,e.className=n,e.innerHTML='<div class="'+n+'-expand" style="'+r+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+n+'-shrink" style="'+r+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var i=e.childNodes[0],a=e.childNodes[1];e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,a.scrollLeft=1e6,a.scrollTop=1e6};var s=function(){e._reset(),t()};return f(i,"scroll",s.bind(i,"expand")),f(a,"scroll",s.bind(a,"shrink")),e}((u=function(){if(g.resizer)return e(p("resize",n))},d=!1,h=[],function(){h=Array.prototype.slice.call(arguments),c=c||this,d||(d=!0,r.requestAnimFrame.call(window,(function(){d=!1,u.apply(c,h)})))}));!function(t,e){var n=t[i]||(t[i]={}),o=n.renderProxy=function(t){t.animationName===s&&e()};r.each(l,(function(e){f(t,e,o)})),n.reflow=!!t.offsetParent,t.classList.add(a)}(t,(function(){if(g.resizer){var e=t.parentNode;e&&e!==v.parentNode&&e.insertBefore(v,e.firstChild),v._reset()}}))}function v(t){var e=t[i]||{},n=e.resizer;delete e.resizer,function(t){var e=t[i]||{},n=e.renderProxy;n&&(r.each(l,(function(e){h(t,e,n)})),delete e.renderProxy),t.classList.remove(a)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,n,r="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+s+"{"+r+"}@keyframes "+s+"{"+r+"}."+a+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",n=(t=this)._style||document.createElement("style"),t._style||(t._style=n,e="/* Chart.js */\n"+e,n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n)),n.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(function(t,e){var n=t.style,r=t.getAttribute("height"),o=t.getAttribute("width");if(t[i]={initial:{height:r,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===o||""===o){var a=c(t,"width");void 0!==a&&(t.width=a)}if(null===r||""===r)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=c(t,"height");void 0!==a&&(t.height=s)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[i]){var n=e[i].initial;["height","width"].forEach((function(t){var i=n[t];r.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),r.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[i]}},addEventListener:function(t,e,n){var o=t.canvas;if("resize"!==e){var a=n[i]||(n[i]={});f(o,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=u[t.type]||t.type,i=r.getRelativePosition(t,e);return p(n,e,i.x,i.y,t)}(e,t))})}else g(o,n,t)},removeEventListener:function(t,e,n){var r=t.canvas;if("resize"!==e){var o=((n[i]||{}).proxies||{})[t.id+"_"+e];o&&h(r,e,o)}else v(r)}},r.addEvent=f,r.removeEvent=h},{46:46}],49:[function(t,e,n){var r=t(46),i=t(47),o=t(48),a=o._enabled?o:i;e.exports=r.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},a)},{46:46,47:47,48:48}],50:[function(t,e,n){e.exports={},e.exports.filler=t(51),e.exports.legend=t(52),e.exports.title=t(53)},{51:51,52:52,53:53}],51:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("global",{plugins:{filler:{propagate:!0}}});var a={dataset:function(t){var e=t.fill,n=t.chart,r=n.getDatasetMeta(e),i=r&&n.isDatasetVisible(e)&&r.dataset._children||[],o=i.length||0;return o?function(t,e){return e<o&&i[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,r=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===r?t.y:r}}}};function s(t,e,n){var r,i=t._model||{},o=i.fill;if(void 0===o&&(o=!!i.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(r=parseFloat(o,10),isFinite(r)&&Math.floor(r)===r)return"-"!==o[0]&&"+"!==o[0]||(r=e+r),!(r===e||r<0||r>=n)&&r;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function l(t){var e,n=t.el._model||{},r=t.el._scale||{},i=t.fill,o=null;if(isFinite(i))return null;if("start"===i?o=void 0===n.scaleBottom?r.bottom:n.scaleBottom:"end"===i?o=void 0===n.scaleTop?r.top:n.scaleTop:void 0!==n.scaleZero?o=n.scaleZero:r.getBasePosition?o=r.getBasePosition():r.getBasePixel&&(o=r.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return{x:(e=r.isHorizontal())?o:null,y:e?null:o}}return null}function u(t,e,n){var r,i=t[e].fill,o=[e];if(!n)return i;for(;!1!==i&&-1===o.indexOf(i);){if(!isFinite(i))return i;if(!(r=t[i]))return!1;if(r.visible)return i;o.push(i),i=r.fill}return!1}function c(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),a[n](t))}function d(t){return t&&!t.skip}function f(t,e,n,r,i){var a;if(r&&i){for(t.moveTo(e[0].x,e[0].y),a=1;a<r;++a)o.canvas.lineTo(t,e[a-1],e[a]);for(t.lineTo(n[i-1].x,n[i-1].y),a=i-1;a>0;--a)o.canvas.lineTo(t,n[a],n[a-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var n,r,o,a,d=(t.data.datasets||[]).length,f=e.propagate,h=[];for(r=0;r<d;++r)a=null,(o=(n=t.getDatasetMeta(r)).dataset)&&o._model&&o instanceof i.Line&&(a={visible:t.isDatasetVisible(r),fill:s(o,r,d),chart:t,el:o}),n.$filler=a,h.push(a);for(r=0;r<d;++r)(a=h[r])&&(a.fill=u(h,r,f),a.boundary=l(a),a.mapper=c(a))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var i=t.ctx,a=n.el,s=a._view,l=a._children||[],u=n.mapper,c=s.backgroundColor||r.global.defaultColor;u&&c&&l.length&&(o.canvas.clipArea(i,t.chartArea),function(t,e,n,r,i,o){var a,s,l,u,c,h,p,g=e.length,v=r.spanGaps,m=[],y=[],b=0,x=0;for(t.beginPath(),a=0,s=g+!!o;a<s;++a)c=n(u=e[l=a%g]._view,l,r),h=d(u),p=d(c),h&&p?(b=m.push(u),x=y.push(c)):b&&x&&(v?(h&&m.push(u),p&&y.push(c)):(f(t,m,y,b,x),b=x=0,m=[],y=[]));f(t,m,y,b,x),t.closePath(),t.fillStyle=i,t.fill()}(i,l,u,s,c,a._loop),o.canvas.unclipArea(i))}}}},{26:26,41:41,46:46}],52:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(31),s=o.noop;function l(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}r._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,r=this.chart,i=r.getDatasetMeta(n);i.hidden=null===i.hidden?!r.data.datasets[n].hidden:null,r.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return o.isArray(e.datasets)?e.datasets.map((function(e,n){return{text:e.label,fillStyle:o.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}}),this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var u=i.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(t,e,n){var r=this;return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var t=this,e=t.options.labels||{},n=o.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,s=r.global,u=o.valueOrDefault,c=u(n.fontSize,s.defaultFontSize),d=u(n.fontStyle,s.defaultFontStyle),f=u(n.fontFamily,s.defaultFontFamily),h=o.fontString(c,d,f),p=t.legendHitBoxes=[],g=t.minSize,v=t.isHorizontal();if(v?(g.width=t.maxWidth,g.height=i?10:0):(g.width=i?10:0,g.height=t.maxHeight),i)if(a.font=h,v){var m=t.lineWidths=[0],y=t.legendItems.length?c+n.padding:0;a.textAlign="left",a.textBaseline="top",o.each(t.legendItems,(function(e,r){var i=l(n,c)+c/2+a.measureText(e.text).width;m[m.length-1]+i+n.padding>=t.width&&(y+=c+n.padding,m[m.length]=t.left),p[r]={left:0,top:0,width:i,height:c},m[m.length-1]+=i+n.padding})),g.height+=y}else{var b=n.padding,x=t.columnWidths=[],w=n.padding,S=0,k=0,C=c+b;o.each(t.legendItems,(function(t,e){var r=l(n,c)+c/2+a.measureText(t.text).width;k+C>g.height&&(w+=S+n.padding,x.push(S),S=0,k=0),S=Math.max(S,r),k+=C,p[e]={left:0,top:0,width:r,height:c}})),w+=S,x.push(S),g.width+=w}t.width=g.width,t.height=g.height},afterFit:s,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=r.global,a=i.elements.line,s=t.width,u=t.lineWidths;if(e.display){var c,d=t.ctx,f=o.valueOrDefault,h=f(n.fontColor,i.defaultFontColor),p=f(n.fontSize,i.defaultFontSize),g=f(n.fontStyle,i.defaultFontStyle),v=f(n.fontFamily,i.defaultFontFamily),m=o.fontString(p,g,v);d.textAlign="left",d.textBaseline="middle",d.lineWidth=.5,d.strokeStyle=h,d.fillStyle=h,d.font=m;var y=l(n,p),b=t.legendHitBoxes,x=t.isHorizontal();c=x?{x:t.left+(s-u[0])/2,y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+n.padding,line:0};var w=p+n.padding;o.each(t.legendItems,(function(r,l){var h=d.measureText(r.text).width,g=y+p/2+h,v=c.x,m=c.y;x?v+g>=s&&(m=c.y+=w,c.line++,v=c.x=t.left+(s-u[c.line])/2):m+w>t.bottom&&(v=c.x=v+t.columnWidths[c.line]+n.padding,m=c.y=t.top+n.padding,c.line++),function(t,n,r){if(!(isNaN(y)||y<=0)){d.save(),d.fillStyle=f(r.fillStyle,i.defaultColor),d.lineCap=f(r.lineCap,a.borderCapStyle),d.lineDashOffset=f(r.lineDashOffset,a.borderDashOffset),d.lineJoin=f(r.lineJoin,a.borderJoinStyle),d.lineWidth=f(r.lineWidth,a.borderWidth),d.strokeStyle=f(r.strokeStyle,i.defaultColor);var s=0===f(r.lineWidth,a.borderWidth);if(d.setLineDash&&d.setLineDash(f(r.lineDash,a.borderDash)),e.labels&&e.labels.usePointStyle){var l=p*Math.SQRT2/2,u=l/Math.SQRT2,c=t+u,h=n+u;o.canvas.drawPoint(d,r.pointStyle,l,c,h)}else s||d.strokeRect(t,n,y,p),d.fillRect(t,n,y,p);d.restore()}}(v,m,r),b[l].left=v,b[l].top=m,function(t,e,n,r){var i=p/2,o=y+i+t,a=e+i;d.fillText(n.text,o,a),n.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(o,a),d.lineTo(o+r,a),d.stroke())}(v,m,r,h),x?c.x+=g+n.padding:c.y+=w}))}},handleEvent:function(t){var e=this,n=e.options,r="mouseup"===t.type?"click":t.type,i=!1;if("mousemove"===r){if(!n.onHover)return}else{if("click"!==r)return;if(!n.onClick)return}var o=t.x,a=t.y;if(o>=e.left&&o<=e.right&&a>=e.top&&a<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(o>=u.left&&o<=u.left+u.width&&a>=u.top&&a<=u.top+u.height){if("click"===r){n.onClick.call(e,t.native,e.legendItems[l]),i=!0;break}if("mousemove"===r){n.onHover.call(e,t.native,e.legendItems[l]),i=!0;break}}}return i}});function c(t,e){var n=new u({ctx:t.ctx,options:e,chart:t});a.configure(t,n,e),a.addBox(t,n),t.legend=n}e.exports={id:"legend",_element:u,beforeInit:function(t){var e=t.options.legend;e&&c(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(o.mergeIf(e,r.global.legend),n?(a.configure(t,n,e),n.options=e):c(t,e)):n&&(a.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}},{26:26,27:27,31:31,46:46}],53:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(31),s=o.noop;r._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var l=i.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:s,update:function(t,e,n){var r=this;return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=o.valueOrDefault,n=t.options,i=n.display,a=e(n.fontSize,r.global.defaultFontSize),s=t.minSize,l=o.isArray(n.text)?n.text.length:1,u=o.options.toLineHeight(n.lineHeight,a),c=i?l*u+2*n.padding:0;t.isHorizontal()?(s.width=t.maxWidth,s.height=c):(s.width=c,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:s,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=o.valueOrDefault,i=t.options,a=r.global;if(i.display){var s,l,u,c=n(i.fontSize,a.defaultFontSize),d=n(i.fontStyle,a.defaultFontStyle),f=n(i.fontFamily,a.defaultFontFamily),h=o.fontString(c,d,f),p=o.options.toLineHeight(i.lineHeight,c),g=p/2+i.padding,v=0,m=t.top,y=t.left,b=t.bottom,x=t.right;e.fillStyle=n(i.fontColor,a.defaultFontColor),e.font=h,t.isHorizontal()?(l=y+(x-y)/2,u=m+g,s=x-y):(l="left"===i.position?y+g:x-g,u=m+(b-m)/2,s=b-m,v=Math.PI*("left"===i.position?-.5:.5)),e.save(),e.translate(l,u),e.rotate(v),e.textAlign="center",e.textBaseline="middle";var w=i.text;if(o.isArray(w))for(var S=0,k=0;k<w.length;++k)e.fillText(w[k],0,S,s),S+=p;else e.fillText(w,0,0,s);e.restore()}}});function u(t,e){var n=new l({ctx:t.ctx,options:e,chart:t});a.configure(t,n,e),a.addBox(t,n),t.titleBlock=n}e.exports={id:"title",_element:l,beforeInit:function(t){var e=t.options.title;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(o.mergeIf(e,r.global.title),n?(a.configure(t,n,e),n.options=e):u(t,e)):n&&(a.removeBox(t,n),delete t.titleBlock)}}},{26:26,27:27,31:31,46:46}],54:[function(t,e,n){var r=t(33),i=t(34);e.exports=function(){var t=r.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,n=e.getLabels();e.minIndex=0,e.maxIndex=n.length-1,void 0!==e.options.ticks.min&&(t=n.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=n.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=n[e.minIndex],e.max=n[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,r=n.chart.data,i=n.isHorizontal();return r.yLabels&&!i?n.getRightValue(r.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e){var n,r=this,i=r.options.offset,o=Math.max(r.maxIndex+1-r.minIndex-(i?0:1),1);if(null!=t&&(n=r.isHorizontal()?t.x:t.y),void 0!==n||void 0!==t&&isNaN(e)){t=n||t;var a=r.getLabels().indexOf(t);e=-1!==a?a:e}if(r.isHorizontal()){var s=r.width/o,l=s*(e-r.minIndex);return i&&(l+=s/2),r.left+Math.round(l)}var u=r.height/o,c=u*(e-r.minIndex);return i&&(c+=u/2),r.top+Math.round(c)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,n=e.options.offset,r=Math.max(e._ticks.length-(n?0:1),1),i=e.isHorizontal(),o=(i?e.width:e.height)/r;return t-=i?e.left:e.top,n&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}});i.registerScaleType("category",t,{position:"bottom"})}},{33:33,34:34}],55:[function(t,e,n){var r=t(26),i=t(46),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,n=t.chart,r=n.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=e.stacked;if(void 0===s&&i.each(r,(function(t,e){if(!s){var r=n.getDatasetMeta(e);n.isDatasetVisible(e)&&a(r)&&void 0!==r.stack&&(s=!0)}})),e.stacked||s){var l={};i.each(r,(function(r,o){var s=n.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});var c=l[u].positiveValues,d=l[u].negativeValues;n.isDatasetVisible(o)&&a(s)&&i.each(r.data,(function(n,r){var i=+t.getRightValue(n);isNaN(i)||s.data[r].hidden||(c[r]=c[r]||0,d[r]=d[r]||0,e.relativePoints?c[r]=100:i<0?d[r]+=i:c[r]+=i)}))})),i.each(l,(function(e){var n=e.positiveValues.concat(e.negativeValues),r=i.min(n),o=i.max(n);t.min=null===t.min?r:Math.min(t.min,r),t.max=null===t.max?o:Math.max(t.max,o)}))}else i.each(r,(function(e,r){var o=n.getDatasetMeta(r);n.isDatasetVisible(r)&&a(o)&&i.each(e.data,(function(e,n){var r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r))}))}));t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var n=i.valueOrDefault(e.fontSize,r.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*n)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,n=e.start,r=+e.getRightValue(t),i=e.end-n;return e.isHorizontal()?e.left+e.width/i*(r-n):e.bottom-e.height/i*(r-n)},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),r=n?e.width:e.height,i=(n?t-e.left:e.bottom-t)/r;return e.start+(e.end-e.start)*i},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});o.registerScaleType("linear",n,e)}},{26:26,34:34,35:35,46:46}],56:[function(t,e,n){var r=t(46),i=t(33);e.exports=function(t){var e=r.noop;t.LinearScaleBase=i.extend({getRightValue:function(t){return"string"==typeof t?+t:i.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=r.sign(t.min),i=r.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var o=void 0!==e.min||void 0!==e.suggestedMin,a=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),o!==a&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:r.valueOrDefault(e.fixedStepSize,e.stepSize)},o=t.ticks=function(t,e){var n,i,o,a=[];if(t.stepSize&&t.stepSize>0)o=t.stepSize;else{var s=r.niceNum(e.max-e.min,!1);o=r.niceNum(s/(t.maxTicks-1),!0),void 0!==(i=t.precision)&&(n=Math.pow(10,i),o=Math.ceil(o*n)/n)}var l=Math.floor(e.min/o)*o,u=Math.ceil(e.max/o)*o;r.isNullOrUndef(t.min)||r.isNullOrUndef(t.max)||!t.stepSize||r.almostWhole((t.max-t.min)/t.stepSize,o/1e3)&&(l=t.min,u=t.max);var c=(u-l)/o;c=r.almostEquals(c,Math.round(c),o/1e3)?Math.round(c):Math.ceil(c),i=1,o<1&&(i=Math.pow(10,1-Math.floor(r.log10(o))),l=Math.round(l*i)/i,u=Math.round(u*i)/i),a.push(void 0!==t.min?t.min:l);for(var d=1;d<c;++d)a.push(Math.round((l+d*o)*i)/i);return a.push(void 0!==t.max?t.max:u),a}(i,t);t.handleDirectionalChanges(),t.max=r.max(o),t.min=r.min(o),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),i.prototype.convertTicksToLabels.call(t)}})}},{33:33,46:46}],57:[function(t,e,n){var r=t(46),i=t(33),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},n=i.extend({determineDataLimits:function(){var t=this,e=t.options,n=t.chart,i=n.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var s=e.stacked;if(void 0===s&&r.each(i,(function(t,e){if(!s){var r=n.getDatasetMeta(e);n.isDatasetVisible(e)&&a(r)&&void 0!==r.stack&&(s=!0)}})),e.stacked||s){var l={};r.each(i,(function(i,o){var s=n.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");n.isDatasetVisible(o)&&a(s)&&(void 0===l[u]&&(l[u]=[]),r.each(i.data,(function(e,n){var r=l[u],i=+t.getRightValue(e);isNaN(i)||s.data[n].hidden||i<0||(r[n]=r[n]||0,r[n]+=i)})))})),r.each(l,(function(e){if(e.length>0){var n=r.min(e),i=r.max(e);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?i:Math.max(t.max,i)}}))}else r.each(i,(function(e,i){var o=n.getDatasetMeta(i);n.isDatasetVisible(i)&&a(o)&&r.each(e.data,(function(e,n){var r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||r<0||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r),0!==r&&(null===t.minNotZero||r<t.minNotZero)&&(t.minNotZero=r))}))}));this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,n=r.valueOrDefault;t.min=n(e.min,t.min),t.max=n(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(r.log10(t.min))-1),t.max=Math.pow(10,Math.floor(r.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(r.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(r.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(r.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:e.min,max:e.max},o=t.ticks=function(t,e){var n,i,o=[],a=r.valueOrDefault,s=a(t.min,Math.pow(10,Math.floor(r.log10(e.min)))),l=Math.floor(r.log10(e.max)),u=Math.ceil(e.max/Math.pow(10,l));0===s?(n=Math.floor(r.log10(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),o.push(s),s=i*Math.pow(10,n)):(n=Math.floor(r.log10(s)),i=Math.floor(s/Math.pow(10,n)));var c=n<0?Math.pow(10,Math.abs(n)):1;do{o.push(s),10===++i&&(i=1,c=++n>=0?1:c),s=Math.round(i*Math.pow(10,n)*c)/c}while(n<l||n===l&&i<u);var d=a(t.max,s);return o.push(d),o}(i,t);t.max=r.max(o),t.min=r.min(o),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&o.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),i.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(r.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var n,i,o,a,s,l=this,u=l.options.ticks.reverse,c=r.log10,d=l._getFirstTickValue(l.minNotZero),f=0;return e=+l.getRightValue(e),u?(o=l.end,a=l.start,s=-1):(o=l.start,a=l.end,s=1),l.isHorizontal()?(n=l.width,i=u?l.right:l.left):(n=l.height,s*=-1,i=u?l.top:l.bottom),e!==o&&(0===o&&(n-=f=r.getValueOrDefault(l.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=d),0!==e&&(f+=n/(c(a)-c(o))*(c(e)-c(o))),i+=s*f),i},getValueForPixel:function(e){var n,i,o,a,s=this,l=s.options.ticks.reverse,u=r.log10,c=s._getFirstTickValue(s.minNotZero);if(l?(i=s.end,o=s.start):(i=s.start,o=s.end),s.isHorizontal()?(n=s.width,a=l?s.right-e:e-s.left):(n=s.height,a=l?e-s.top:s.bottom-e),a!==i){if(0===i){var d=r.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);a-=d,n-=d,i=c}a*=u(o)-u(i),a/=n,a=Math.pow(10,u(i)+a)}return a}});o.registerScaleType("logarithmic",n,e)}},{33:33,34:34,35:35,46:46}],58:[function(t,e,n){var r=t(26),i=t(46),o=t(34),a=t(35);e.exports=function(t){var e=r.global,n={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:a.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function s(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function l(t){var n=t.options.pointLabels,r=i.valueOrDefault(n.fontSize,e.defaultFontSize),o=i.valueOrDefault(n.fontStyle,e.defaultFontStyle),a=i.valueOrDefault(n.fontFamily,e.defaultFontFamily);return{size:r,style:o,family:a,font:i.fontString(r,o,a)}}function u(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function c(t){return 0===t||180===t?"center":t<180?"left":"right"}function d(t,e,n,r){if(i.isArray(e))for(var o=n.y,a=1.5*r,s=0;s<e.length;++s)t.fillText(e[s],n.x,o),o+=a;else t.fillText(e,n.x,n.y)}function f(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function h(t){return i.isNumber(t)?t:0}var p=t.LinearScaleBase.extend({setDimensions:function(){var t=this,n=t.options,r=n.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=i.min([t.height,t.width]),a=i.valueOrDefault(r.fontSize,e.defaultFontSize);t.drawingArea=n.display?o/2-(a/2+r.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;i.each(e.data.datasets,(function(o,a){if(e.isDatasetVisible(a)){var s=e.getDatasetMeta(a);i.each(o.data,(function(e,i){var o=+t.getRightValue(e);isNaN(o)||s.data[i].hidden||(n=Math.min(o,n),r=Math.max(o,r))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=r===Number.NEGATIVE_INFINITY?0:r,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,n=i.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*n)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,n,r,o=l(t),a=Math.min(t.height/2,t.width/2),c={r:t.width,l:0,t:t.height,b:0},d={};t.ctx.font=o.font,t._pointLabelSizes=[];var f,h,p,g=s(t);for(e=0;e<g;e++){r=t.getPointPosition(e,a),f=t.ctx,h=o.size,p=t.pointLabels[e]||"",n=i.isArray(p)?{w:i.longestText(f,f.font,p),h:p.length*h+1.5*(p.length-1)*h}:{w:f.measureText(p).width,h:h},t._pointLabelSizes[e]=n;var v=t.getIndexAngle(e),m=i.toDegrees(v)%360,y=u(m,r.x,n.w,0,180),b=u(m,r.y,n.h,90,270);y.start<c.l&&(c.l=y.start,d.l=v),y.end>c.r&&(c.r=y.end,d.r=v),b.start<c.t&&(c.t=b.start,d.t=v),b.end>c.b&&(c.b=b.end,d.b=v)}t.setReductions(a,c,d)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,n){var r=e.l/Math.sin(n.l),i=Math.max(e.r-this.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),a=-Math.max(e.b-this.height,0)/Math.cos(n.b);r=h(r),i=h(i),o=h(o),a=h(a),this.drawingArea=Math.min(Math.round(t-(r+i)/2),Math.round(t-(o+a)/2)),this.setCenterPoint(r,i,o,a)},setCenterPoint:function(t,e,n,r){var i=this,o=i.width-e-i.drawingArea,a=t+i.drawingArea,s=n+i.drawingArea,l=i.height-r-i.drawingArea;i.xCenter=Math.round((a+o)/2+i.left),i.yCenter=Math.round((s+l)/2+i.top)},getIndexAngle:function(t){return t*(2*Math.PI/s(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(n)*e)+this.xCenter,y:Math.round(Math.sin(n)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,n=t.options,r=n.gridLines,o=n.ticks,a=i.valueOrDefault;if(n.display){var u=t.ctx,h=this.getIndexAngle(0),p=a(o.fontSize,e.defaultFontSize),g=a(o.fontStyle,e.defaultFontStyle),v=a(o.fontFamily,e.defaultFontFamily),m=i.fontString(p,g,v);i.each(t.ticks,(function(n,l){if(l>0||o.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);if(r.display&&0!==l&&function(t,e,n,r){var o=t.ctx;if(o.strokeStyle=i.valueAtIndexOrDefault(e.color,r-1),o.lineWidth=i.valueAtIndexOrDefault(e.lineWidth,r-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,n,0,2*Math.PI),o.closePath(),o.stroke();else{var a=s(t);if(0===a)return;o.beginPath();var l=t.getPointPosition(0,n);o.moveTo(l.x,l.y);for(var u=1;u<a;u++)l=t.getPointPosition(u,n),o.lineTo(l.x,l.y);o.closePath(),o.stroke()}}(t,r,c,l),o.display){var d=a(o.fontColor,e.defaultFontColor);if(u.font=m,u.save(),u.translate(t.xCenter,t.yCenter),u.rotate(h),o.showLabelBackdrop){var f=u.measureText(n).width;u.fillStyle=o.backdropColor,u.fillRect(-f/2-o.backdropPaddingX,-c-p/2-o.backdropPaddingY,f+2*o.backdropPaddingX,p+2*o.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=d,u.fillText(n,0,-c),u.restore()}}})),(n.angleLines.display||n.pointLabels.display)&&function(t){var n=t.ctx,r=t.options,o=r.angleLines,a=r.pointLabels;n.lineWidth=o.lineWidth,n.strokeStyle=o.color;var u=t.getDistanceFromCenterForValue(r.ticks.reverse?t.min:t.max),h=l(t);n.textBaseline="top";for(var p=s(t)-1;p>=0;p--){if(o.display){var g=t.getPointPosition(p,u);n.beginPath(),n.moveTo(t.xCenter,t.yCenter),n.lineTo(g.x,g.y),n.stroke(),n.closePath()}if(a.display){var v=t.getPointPosition(p,u+5),m=i.valueAtIndexOrDefault(a.fontColor,p,e.defaultFontColor);n.font=h.font,n.fillStyle=m;var y=t.getIndexAngle(p),b=i.toDegrees(y);n.textAlign=c(b),f(b,t._pointLabelSizes[p],v),d(n,t.pointLabels[p]||"",v,h.size)}}}(t)}}});o.registerScaleType("radialLinear",p,n)}},{26:26,34:34,35:35,46:46}],59:[function(t,e,n){var r=t(1);r="function"==typeof r?r:window.moment;var i=t(26),o=t(46),a=t(33),s=t(34),l=Number.MIN_SAFE_INTEGER||-9007199254740991,u=Number.MAX_SAFE_INTEGER||9007199254740991,c={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},d=Object.keys(c);function f(t,e){return t-e}function h(t){var e,n,r,i={},o=[];for(e=0,n=t.length;e<n;++e)i[r=t[e]]||(i[r]=!0,o.push(r));return o}function p(t,e,n,r){var i=function(t,e,n){for(var r,i,o,a=0,s=t.length-1;a>=0&&a<=s;){if(i=t[(r=a+s>>1)-1]||null,o=t[r],!i)return{lo:null,hi:o};if(o[e]<n)a=r+1;else{if(!(i[e]>n))return{lo:i,hi:o};s=r-1}}return{lo:o,hi:null}}(t,e,n),o=i.lo?i.hi?i.lo:t[t.length-2]:t[0],a=i.lo?i.hi?i.hi:t[t.length-1]:t[1],s=a[e]-o[e],l=s?(n-o[e])/s:0,u=(a[r]-o[r])*l;return o[r]+u}function g(t,e){var n=e.parser,i=e.parser||e.format;return"function"==typeof n?n(t):"string"==typeof t&&"string"==typeof i?r(t,i):(t instanceof r||(t=r(t)),t.isValid()?t:"function"==typeof i?i(t):t)}function v(t,e){if(o.isNullOrUndef(t))return null;var n=e.options.time,r=g(e.getRightValue(t),n);return r.isValid()?(n.round&&r.startOf(n.round),r.valueOf()):null}function m(t){for(var e=d.indexOf(t)+1,n=d.length;e<n;++e)if(c[d[e]].common)return d[e]}function y(t,e,n,i){var a,s=i.time,l=s.unit||function(t,e,n,r){var i,o,a,s=d.length;for(i=d.indexOf(t);i<s-1;++i)if(a=(o=c[d[i]]).steps?o.steps[o.steps.length-1]:u,o.common&&Math.ceil((n-e)/(a*o.size))<=r)return d[i];return d[s-1]}(s.minUnit,t,e,n),f=m(l),h=o.valueOrDefault(s.stepSize,s.unitStepSize),p="week"===l&&s.isoWeekday,g=i.ticks.major.enabled,v=c[l],y=r(t),b=r(e),x=[];for(h||(h=function(t,e,n,r){var i,o,a,s=e-t,l=c[n],u=l.size,d=l.steps;if(!d)return Math.ceil(s/(r*u));for(i=0,o=d.length;i<o&&(a=d[i],!(Math.ceil(s/(u*a))<=r));++i);return a}(t,e,l,n)),p&&(y=y.isoWeekday(p),b=b.isoWeekday(p)),y=y.startOf(p?"day":l),(b=b.startOf(p?"day":l))<e&&b.add(1,l),a=r(y),g&&f&&!p&&!s.round&&(a.startOf(f),a.add(~~((y-a)/(v.size*h))*h,l));a<b;a.add(h,l))x.push(+a);return x.push(+a),x}e.exports=function(){var t=a.extend({initialize:function(){if(!r)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),a.prototype.initialize.call(this)},update:function(){var t=this,e=t.options;return e.time&&e.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),a.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),a.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,s,c=this,d=c.chart,p=c.options.time,g=p.unit||"day",m=u,y=l,b=[],x=[],w=[];for(t=0,n=d.data.labels.length;t<n;++t)w.push(v(d.data.labels[t],c));for(t=0,n=(d.data.datasets||[]).length;t<n;++t)if(d.isDatasetVisible(t))if(a=d.data.datasets[t].data,o.isObject(a[0]))for(x[t]=[],e=0,i=a.length;e<i;++e)s=v(a[e],c),b.push(s),x[t][e]=s;else b.push.apply(b,w),x[t]=w.slice(0);else x[t]=[];w.length&&(w=h(w).sort(f),m=Math.min(m,w[0]),y=Math.max(y,w[w.length-1])),b.length&&(b=h(b).sort(f),m=Math.min(m,b[0]),y=Math.max(y,b[b.length-1])),m=v(p.min,c)||m,y=v(p.max,c)||y,m=m===u?+r().startOf(g):m,y=y===l?+r().endOf(g)+1:y,c.min=Math.min(m,y),c.max=Math.max(m+1,y),c._horizontal=c.isHorizontal(),c._table=[],c._timestamps={data:b,datasets:x,labels:w}},buildTicks:function(){var t,e,n,i=this,o=i.min,a=i.max,s=i.options,l=s.time,u=[],f=[];switch(s.ticks.source){case"data":u=i._timestamps.data;break;case"labels":u=i._timestamps.labels;break;case"auto":default:u=y(o,a,i.getLabelCapacity(o),s)}for("ticks"===s.bounds&&u.length&&(o=u[0],a=u[u.length-1]),o=v(l.min,i)||o,a=v(l.max,i)||a,t=0,e=u.length;t<e;++t)(n=u[t])>=o&&n<=a&&f.push(n);return i.min=o,i.max=a,i._unit=l.unit||function(t,e,n,i){var o,a,s=r.duration(r(i).diff(r(n)));for(o=d.length-1;o>=d.indexOf(e);o--)if(a=d[o],c[a].common&&s.as(a)>=t.length)return a;return d[e?d.indexOf(e):0]}(f,l.minUnit,i.min,i.max),i._majorUnit=m(i._unit),i._table=function(t,e,n,r){if("linear"===r||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var i,o,a,s,l,u=[],c=[e];for(i=0,o=t.length;i<o;++i)(s=t[i])>e&&s<n&&c.push(s);for(c.push(n),i=0,o=c.length;i<o;++i)l=c[i+1],a=c[i-1],s=c[i],void 0!==a&&void 0!==l&&Math.round((l+a)/2)===s||u.push({time:s,pos:i/(o-1)});return u}(i._timestamps.data,o,a,s.distribution),i._offsets=function(t,e,n,r,i){var o,a,s=0,l=0;return i.offset&&e.length&&(i.time.min||(o=e.length>1?e[1]:r,a=e[0],s=(p(t,"time",o,"pos")-p(t,"time",a,"pos"))/2),i.time.max||(o=e[e.length-1],a=e.length>1?e[e.length-2]:n,l=(p(t,"time",o,"pos")-p(t,"time",a,"pos"))/2)),{left:s,right:l}}(i._table,f,o,a,s),i._labelFormat=function(t,e){var n,r,i,o=t.length;for(n=0;n<o;n++){if(0!==(r=g(t[n],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===r.second()&&0===r.minute()&&0===r.hour()||(i=!0)}return i?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(i._timestamps.data,l),function(t,e){var n,i,o,a,s=[];for(n=0,i=t.length;n<i;++n)o=t[n],a=!!e&&o===+r(o).startOf(e),s.push({value:o,major:a});return s}(f,i._majorUnit)},getLabelForIndex:function(t,e){var n=this.chart.data,r=this.options.time,i=n.labels&&t<n.labels.length?n.labels[t]:"",a=n.datasets[e].data[t];return o.isObject(a)&&(i=this.getRightValue(a)),r.tooltipFormat?g(i,r).format(r.tooltipFormat):"string"==typeof i?i:g(i,r).format(this._labelFormat)},tickFormatFunction:function(t,e,n,r){var i=this.options,a=t.valueOf(),s=i.time.displayFormats,l=s[this._unit],u=this._majorUnit,c=s[u],d=t.clone().startOf(u).valueOf(),f=i.ticks.major,h=f.enabled&&u&&c&&a===d,p=t.format(r||(h?c:l)),g=h?f:i.ticks.minor,v=o.valueOrDefault(g.callback,g.userCallback);return v?v(p,e,n):p},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(r(t[e].value),e,t));return i},getPixelForOffset:function(t){var e=this,n=e._horizontal?e.width:e.height,r=e._horizontal?e.left:e.top,i=p(e._table,"time",t,"pos");return r+n*(e._offsets.left+i)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,n){var r=null;if(void 0!==e&&void 0!==n&&(r=this._timestamps.datasets[n][e]),null===r&&(r=v(t,this)),null!==r)return this.getPixelForOffset(r)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,n=e._horizontal?e.width:e.height,i=e._horizontal?e.left:e.top,o=(n?(t-i)/n:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,a=p(e._table,"pos",o,"time");return r(a)},getLabelWidth:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,r=o.toRadians(e.maxRotation),a=Math.cos(r),s=Math.sin(r);return n*a+o.valueOrDefault(e.fontSize,i.global.defaultFontSize)*s},getLabelCapacity:function(t){var e=this,n=e.options.time.displayFormats.millisecond,i=e.tickFormatFunction(r(t),0,[],n),o=e.getLabelWidth(i),a=e.isHorizontal()?e.width:e.height,s=Math.floor(a/o);return s>0?s:1}});s.registerScaleType("time",t,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,26:26,33:33,34:34,46:46}]},{},[7])(7)}))}).call(this,n(87)(t),n(59))},function(t,e,n){"use strict";var r=n(3),i=n(23).findIndex,o=n(58),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},function(t,e,n){var r=n(3),i=Math.log,o=Math.LOG10E;r({target:"Math",stat:!0},{log10:function(t){return i(t)*o}})},function(t,e,n){n(3)({target:"Math",stat:!0},{sign:n(160)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,n){n(3)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(t,e,n){"use strict";(function(t){var e,r;n(78),n(81),n(82),n(102),n(144),n(119),n(91),n(54),n(120),n(96),n(122),n(97),n(123),n(145),n(146),n(147),n(71),n(83),n(84),n(109),n(163),n(125),n(85);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */e=void 0,r=function(t){var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,n=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),r={toTextLines:function(t){var n,r=[];for(t=[].concat(t);t.length;)"string"==typeof(n=t.pop())?r.unshift.apply(r,n.split("\n")):Array.isArray(n)?t.push.apply(t,n):e.isNullOrUndef(t)||r.unshift(""+n);return r},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,n){var r,i=[].concat(e),o=i.length,a=t.font,s=0;for(t.font=n.string,r=0;r<o;++r)s=Math.max(t.measureText(i[r]).width,s);return t.font=a,{height:o*n.lineHeight,width:s}},parseFont:function(n){var i=t.defaults.global,o=e.valueOrDefault(n.size,i.defaultFontSize),a={family:e.valueOrDefault(n.family,i.defaultFontFamily),lineHeight:e.options.toLineHeight(n.lineHeight,o),size:o,style:e.valueOrDefault(n.style,i.defaultFontStyle),weight:e.valueOrDefault(n.weight,null),string:""};return a.string=r.toFontString(a),a},bound:function(t,e,n){return Math.max(t,Math.min(e,n))},arrayDiff:function(t,e){var n,r,i,o,a=t.slice(),s=[];for(n=0,i=e.length;n<i;++n)o=e[n],-1===(r=a.indexOf(o))?s.push([o,1]):a.splice(r,1);for(n=0,i=a.length;n<i;++n)s.push([a[n],-1]);return s},rasterize:function(t){return Math.round(t*n)/n}};function i(t,e){var n=e.x,r=e.y;if(null===n)return{x:0,y:-1};if(null===r)return{x:1,y:0};var i=t.x-n,o=t.y-r,a=Math.sqrt(i*i+o*o);return{x:a?i/a:0,y:a?o/a:-1}}var o=0,a=1,s=2,l=4,u=8;function c(t,e,n){var r=o;return t<n.left?r|=a:t>n.right&&(r|=s),e<n.top?r|=u:e>n.bottom&&(r|=l),r}function d(t,e){var n,r,i=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var n,r,i,o=t.x0,d=t.y0,f=t.x1,h=t.y1,p=c(o,d,e),g=c(f,h,e);p|g&&!(p&g);)(n=p||g)&u?(r=o+(f-o)*(e.top-d)/(h-d),i=e.top):n&l?(r=o+(f-o)*(e.bottom-d)/(h-d),i=e.bottom):n&s?(i=d+(h-d)*(e.right-o)/(f-o),r=e.right):n&a&&(i=d+(h-d)*(e.left-o)/(f-o),r=e.left),n===p?p=c(o=r,d=i,e):g=c(f=r,h=i,e);return{x0:o,x1:f,y0:d,y1:h}}(o,e.area)),"start"===i?(n=o.x0,r=o.y0):"end"===i?(n=o.x1,r=o.y1):(n=(o.x0+o.x1)/2,r=(o.y0+o.y1)/2),function(t,e,n,r,i){switch(i){case"center":n=r=0;break;case"bottom":n=0,r=1;break;case"right":n=1,r=0;break;case"left":n=-1,r=0;break;case"top":n=0,r=-1;break;case"start":n=-n,r=-r;break;case"end":break;default:i*=Math.PI/180,n=Math.cos(i),r=Math.sin(i)}return{x:t,y:e,vx:n,vy:r}}(n,r,t.vx,t.vy,e.align)}var f={arc:function(t,e){var n=(t.startAngle+t.endAngle)/2,r=Math.cos(n),i=Math.sin(n),o=t.innerRadius,a=t.outerRadius;return d({x0:t.x+r*o,y0:t.y+i*o,x1:t.x+r*a,y1:t.y+i*a,vx:r,vy:i},e)},point:function(t,e){var n=i(t,e.origin),r=n.x*t.radius,o=n.y*t.radius;return d({x0:t.x-r,y0:t.y-o,x1:t.x+r,y1:t.y+o,vx:n.x,vy:n.y},e)},rect:function(t,e){var n=i(t,e.origin),r=t.x,o=t.y,a=0,s=0;return t.horizontal?(r=Math.min(t.x,t.base),a=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),s=Math.abs(t.base-t.y)),d({x0:r,y0:o+s,x1:r+a,y1:o,vx:n.x,vy:n.y},e)},fallback:function(t,e){var n=i(t,e.origin);return d({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:n.x,vy:n.y},e)}},h=t.helpers,p=r.rasterize;function g(t){var e=t._model.horizontal,n=t._scale||e&&t._xScale||t._yScale;if(!n)return null;if(void 0!==n.xCenter&&void 0!==n.yCenter)return{x:n.xCenter,y:n.yCenter};var r=n.getBasePixel();return e?{x:r,y:null}:{x:null,y:r}}function v(t,e,n){var r=t.shadowBlur,i=n.stroked,o=p(n.x),a=p(n.y),s=p(n.w);i&&t.strokeText(e,o,a,s),n.filled&&(r&&i&&(t.shadowBlur=0),t.fillText(e,o,a,s),r&&i&&(t.shadowBlur=r))}var m=function(t,e,n,r){var i=this;i._config=t,i._index=r,i._model=null,i._rects=null,i._ctx=e,i._el=n};h.extend(m.prototype,{_modelize:function(e,n,i,o){var a,s=this._index,l=h.options.resolve,u=r.parseFont(l([i.font,{}],o,s)),c=l([i.color,t.defaults.global.defaultFontColor],o,s);return{align:l([i.align,"center"],o,s),anchor:l([i.anchor,"center"],o,s),area:o.chart.chartArea,backgroundColor:l([i.backgroundColor,null],o,s),borderColor:l([i.borderColor,null],o,s),borderRadius:l([i.borderRadius,0],o,s),borderWidth:l([i.borderWidth,0],o,s),clamp:l([i.clamp,!1],o,s),clip:l([i.clip,!1],o,s),color:c,display:e,font:u,lines:n,offset:l([i.offset,0],o,s),opacity:l([i.opacity,1],o,s),origin:g(this._el),padding:h.options.toPadding(l([i.padding,0],o,s)),positioner:(a=this._el,a instanceof t.elements.Arc?f.arc:a instanceof t.elements.Point?f.point:a instanceof t.elements.Rectangle?f.rect:f.fallback),rotation:l([i.rotation,0],o,s)*(Math.PI/180),size:r.textSize(this._ctx,n,u),textAlign:l([i.textAlign,"start"],o,s),textShadowBlur:l([i.textShadowBlur,0],o,s),textShadowColor:l([i.textShadowColor,c],o,s),textStrokeColor:l([i.textStrokeColor,c],o,s),textStrokeWidth:l([i.textStrokeWidth,0],o,s)}},update:function(t){var e,n,i,o=this,a=null,s=null,l=o._index,u=o._config,c=h.options.resolve([u.display,!0],t,l);c&&(e=t.dataset.data[l],n=h.valueOrDefault(h.callback(u.formatter,[e,t]),e),(i=h.isNullOrUndef(n)?[]:r.toTextLines(n)).length&&(s=function(t){var e=t.borderWidth||0,n=t.padding,r=t.size.height,i=t.size.width,o=-i/2,a=-r/2;return{frame:{x:o-n.left-e,y:a-n.top-e,w:i+n.width+2*e,h:r+n.height+2*e},text:{x:o,y:a,w:i,h:r}}}(a=o._modelize(c,i,u,t)))),o._model=a,o._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var n,i=t.ctx,o=this._model,a=this._rects;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=r.bound(0,o.opacity,1),i.translate(p(e.x),p(e.y)),i.rotate(o.rotation),function(t,e,n){var r=n.backgroundColor,i=n.borderColor,o=n.borderWidth;(r||i&&o)&&(t.beginPath(),h.canvas.roundedRect(t,p(e.x)+o/2,p(e.y)+o/2,p(e.w)-o,p(e.h)-o,n.borderRadius),t.closePath(),r&&(t.fillStyle=r,t.fill()),i&&o&&(t.strokeStyle=i,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}(i,a.frame,o),function(t,e,n,r){var i,o=r.textAlign,a=r.color,s=!!a,l=r.font,u=e.length,c=r.textStrokeColor,d=r.textStrokeWidth,f=c&&d;if(u&&(s||f))for(n=function(t,e,n){var r=n.lineHeight,i=t.w,o=t.x;return"center"===e?o+=i/2:"end"!==e&&"right"!==e||(o+=i),{h:r,w:i,x:o,y:t.y+r/2}}(n,o,l),t.font=l.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,s&&(t.fillStyle=a),f&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=c),i=0,u=e.length;i<u;++i)v(t,e[i],{stroked:f,filled:s,w:n.w,x:n.x,y:n.y+n.h*i})}(i,o.lines,a.text,o),i.restore())}});var y=t.helpers,b=Number.MIN_SAFE_INTEGER||-9007199254740991,x=Number.MAX_SAFE_INTEGER||9007199254740991;function w(t,e,n){var r=Math.cos(n),i=Math.sin(n),o=e.x,a=e.y;return{x:o+r*(t.x-o)-i*(t.y-a),y:a+i*(t.x-o)+r*(t.y-a)}}function S(t,e){var n,r,i,o,a,s=x,l=b,u=e.origin;for(n=0;n<t.length;++n)i=(r=t[n]).x-u.x,o=r.y-u.y,a=e.vx*i+e.vy*o,s=Math.min(s,a),l=Math.max(l,a);return{min:s,max:l}}function k(t,e){var n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);return{vx:(e.x-t.x)/i,vy:(e.y-t.y)/i,origin:t,ln:i}}var C=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function M(t,e,n){var r=e.positioner(t,e),i=r.vx,o=r.vy;if(!i&&!o)return{x:r.x,y:r.y};var a=n.w,s=n.h,l=e.rotation,u=Math.abs(a/2*Math.cos(l))+Math.abs(s/2*Math.sin(l)),c=Math.abs(a/2*Math.sin(l))+Math.abs(s/2*Math.cos(l)),d=1/Math.max(Math.abs(i),Math.abs(o));return u*=i*d,c*=o*d,u+=e.offset*i,c+=e.offset*o,{x:r.x+u,y:r.y+c}}y.extend(C.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,n){this._rotation=n,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=w(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,n,r,i=this._points(),o=t._points(),a=[k(i[0],i[1]),k(i[0],i[3])];for(this._rotation!==t._rotation&&a.push(k(o[0],o[1]),k(o[0],o[3])),e=0;e<a.length;++e)if(n=S(i,a[e]),r=S(o,a[e]),n.max<r.min||r.max<n.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,n=this.center();return[w({x:t.x,y:t.y},n,e),w({x:t.x+t.w,y:t.y},n,e),w({x:t.x+t.w,y:t.y+t.h},n,e),w({x:t.x,y:t.y+t.h},n,e)]}});var A={prepare:function(t){var e,n,r,i,o,a=[];for(e=0,r=t.length;e<r;++e)for(n=0,i=t[e].length;n<i;++n)o=t[e][n],a.push(o),o.$layout={_box:new C,_hidable:!1,_visible:!0,_set:e,_idx:n};return a.sort((function(t,e){var n=t.$layout,r=e.$layout;return n._idx===r._idx?r._set-n._set:r._idx-n._idx})),this.update(a),a},update:function(t){var e,n,r,i,o,a=!1;for(e=0,n=t.length;e<n;++e)i=(r=t[e]).model(),(o=r.$layout)._hidable=i&&"auto"===i.display,o._visible=r.visible(),a|=o._hidable;a&&function(t){var e,n,r,i,o,a;for(e=0,n=t.length;e<n;++e)(i=(r=t[e]).$layout)._visible&&(o=r.geometry(),a=M(r._el._model,r.model(),o),i._box.update(a,o,r.rotation()));!function(t,e){var n,r,i,o;for(n=t.length-1;n>=0;--n)for(i=t[n].$layout,r=n-1;r>=0&&i._visible;--r)(o=t[r].$layout)._visible&&i._box.intersects(o._box)&&e(i,o)}(t,(function(t,e){var n=t._hidable,r=e._hidable;n&&r||r?e._visible=!1:n&&(t._visible=!1)}))}(t)},lookup:function(t,e){var n,r;for(n=t.length-1;n>=0;--n)if((r=t[n].$layout)&&r._visible&&r._box.contains(e))return t[n];return null},draw:function(t,e){var n,r,i,o,a,s;for(n=0,r=e.length;n<r;++n)(o=(i=e[n]).$layout)._visible&&(a=i.geometry(),s=M(i._el._view,i.model(),a),o._box.update(s,a,i.rotation()),i.draw(t,s))}},P=t.helpers,_={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(P.isNullOrUndef(t))return null;var e,n,r,i=t;if(P.isObject(t))if(P.isNullOrUndef(t.label))if(P.isNullOrUndef(t.r))for(i="",r=0,n=(e=Object.keys(t)).length;r<n;++r)i+=(0!==r?", ":"")+e[r]+": "+t[e[r]];else i=t.r;else i=t.label;return""+i},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},T=t.helpers,I="$datalabels",O="$default";function F(t,e,n){if(e){var r,i=n.$context,o=n.$groups;e[o._set]&&(r=e[o._set][o._key])&&!0===T.callback(r,[i])&&(t[I]._dirty=!0,n.update(i))}}function D(t,e){var n,r,i=t[I],o=i._listeners;if(o.enter||o.leave){if("mousemove"===e.type)r=A.lookup(i._labels,e);else if("mouseout"!==e.type)return;n=i._hovered,i._hovered=r,function(t,e,n,r){var i,o;(n||r)&&(n?r?n!==r&&(o=i=!0):o=!0:i=!0,o&&F(t,e.leave,n),i&&F(t,e.enter,r))}(t,o,n,r)}}t.defaults.global.plugins.datalabels=_;var E={id:"datalabels",beforeInit:function(t){t[I]={_actives:[]}},beforeUpdate:function(t){var e=t[I];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,n){var r,i,o,a,s,l,u,c,d=e.index,f=t[I],h=f._datasets[d]=[],p=t.isDatasetVisible(d),g=t.data.datasets[d],v=function(t,e){var n,r,i,o=t.datalabels,a=[];return!1===o?null:(!0===o&&(o={}),e=T.merge({},[e,o]),r=e.labels||{},i=Object.keys(r),delete e.labels,i.length?i.forEach((function(t){r[t]&&a.push(T.merge({},[e,r[t],{_key:t}]))})):a.push(e),n=a.reduce((function(t,e){return T.each(e.listeners||{},(function(n,r){t[r]=t[r]||{},t[r][e._key||O]=n})),delete e.listeners,t}),{}),{labels:a,listeners:n})}(g,n),y=e.meta.data||[],b=t.ctx;for(b.save(),r=0,o=y.length;r<o;++r)if((u=y[r])[I]=[],p&&u&&!u.hidden&&!u._model.skip)for(i=0,a=v.labels.length;i<a;++i)l=(s=v.labels[i])._key,(c=new m(s,b,u,r)).$groups={_set:d,_key:l||O},c.$context={active:!1,chart:t,dataIndex:r,dataset:g,datasetIndex:d},c.update(c.$context),u[I].push(c),h.push(c);b.restore(),T.merge(f._listeners,v.listeners,{merger:function(t,n,r){n[t]=n[t]||{},n[t][e.index]=r[t],f._listened=!0}})},afterUpdate:function(t,e){t[I]._labels=A.prepare(t[I]._datasets,e)},afterDatasetsDraw:function(t){A.draw(t,t[I]._labels)},beforeEvent:function(t,e){if(t[I]._listened)switch(e.type){case"mousemove":case"mouseout":D(t,e);break;case"click":!function(t,e){var n=t[I],r=n._listeners.click,i=r&&A.lookup(n._labels,e);i&&F(t,r,i)}(t,e)}},afterEvent:function(e){var n,i,o,a,s,l,u,c=e[I],d=c._actives,f=c._actives=e.lastActive||[],h=r.arrayDiff(d,f);for(n=0,i=h.length;n<i;++n)if((s=h[n])[1])for(o=0,a=(u=s[0][I]||[]).length;o<a;++o)(l=u[o]).$context.active=1===s[1],l.update(l.$context);(c._dirty||h.length)&&(A.update(c._labels),function(e){if(!e.animating){for(var n=t.animationService.animations,r=0,i=n.length;r<i;++r)if(n[r].chart===e)return;e.render({duration:1,lazy:!0})}}(e)),delete c._dirty}};return t.plugins.unregister(E),E},"object"===("undefined"==typeof exports?"undefined":i(exports))&&void 0!==t?t.exports=r(n(166)):"function"==typeof define&&n(55)?define(["chart.js"],r):(e=e||self).ChartDataLabels=r(e.Chart)}).call(this,n(87)(t))},function(t,e,n){"use strict";var r=n(3),i=n(164);r({target:"String",proto:!0,forced:n(165)("anchor")},{anchor:function(t){return i(this,"a","name",t)}})},function(t,e,n){var r=n(13),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},function(t,e,n){var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e){t.exports=chart},function(t,e){!function(t){t("body").on("shown.bs.modal",".modal",(function(){t(".modal-backdrop").length||($modal_dialog=t(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&(t(this).addClass("modal-scrolling"),t("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&(t(this).addClass("modal-content-clickable"),t("body").addClass("scrollable")))})),t("body").on("hidden.bs.modal",".modal",(function(){t("body").removeClass("scrollable")}))}(jQuery)},function(t,e){jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,r,i){return jQuery.easing[jQuery.easing.def](t,e,n,r,i)},easeInQuad:function(t,e,n,r,i){return r*(e/=i)*e+n},easeOutQuad:function(t,e,n,r,i){return-r*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e+n:-r/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,r,i){return r*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,r,i){return r*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e+n:r/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,r,i){return r*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,r,i){return-r*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e+n:-r/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,r,i){return r*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,r,i){return r*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e*e+n:r/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,r,i){return-r*Math.cos(e/i*(Math.PI/2))+r+n},easeOutSine:function(t,e,n,r,i){return r*Math.sin(e/i*(Math.PI/2))+n},easeInOutSine:function(t,e,n,r,i){return-r/2*(Math.cos(Math.PI*e/i)-1)+n},easeInExpo:function(t,e,n,r,i){return 0==e?n:r*Math.pow(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,r,i){return e==i?n+r:r*(1-Math.pow(2,-10*e/i))+n},easeInOutExpo:function(t,e,n,r,i){return 0==e?n:e==i?n+r:(e/=i/2)<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,r,i){return-r*(Math.sqrt(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,r,i){return r*Math.sqrt(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,r,i){return(e/=i/2)<1?-r/2*(Math.sqrt(1-e*e)-1)+n:r/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(1==(e/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)+n},easeOutElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(1==(e/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return s*Math.pow(2,-10*e)*Math.sin((e*i-o)*(2*Math.PI)/a)+r+n},easeInOutElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(2==(e/=i/2))return n+r;if(a||(a=i*(.3*1.5)),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)*-.5+n:s*Math.pow(2,-10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)*.5+r+n},easeInBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),r*(e/=i)*e*((o+1)*e-o)+n},easeOutBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),r*((e=e/i-1)*e*((o+1)*e+o)+1)+n},easeInOutBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),(e/=i/2)<1?r/2*(e*e*((1+(o*=1.525))*e-o))+n:r/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+n},easeInBounce:function(t,e,n,r,i){return r-jQuery.easing.easeOutBounce(t,i-e,0,r,i)+n},easeOutBounce:function(t,e,n,r,i){return(e/=i)<1/2.75?r*(7.5625*e*e)+n:e<2/2.75?r*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?r*(7.5625*(e-=2.25/2.75)*e+.9375)+n:r*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,r,i){return e<i/2?.5*jQuery.easing.easeInBounce(t,2*e,0,r,i)+n:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,r,i)+.5*r+n}})},function(t,e,n){"use strict";(function(t){var e;n(78),n(81),n(82),n(102),n(54),n(101),n(121),n(96),n(170),n(104),n(71),n(105),n(124),n(129),n(83),n(106),n(84),n(113),n(98),n(109),n(172),n(180),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(85);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,r=n.type(t);return"function"!==r&&!n.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===r||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var n=function t(e,n){return new t.fn.init(e,n)};n.isWindow=function(t){return null!=t&&t==t.window},n.type=function(t){return null==t?t+"":"object"==r(t)||"function"==typeof t?o[s.call(t)]||"object":r(t)},n.isArray=Array.isArray||function(t){return"array"===n.type(t)},n.isPlainObject=function(t){var e;if(!t||"object"!==n.type(t)||t.nodeType||n.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},n.each=function(t,n,r){var i=0,o=t.length,a=e(t);if(r){if(a)for(;o>i&&!1!==n.apply(t[i],r);i++);else for(i in t)if(!1===n.apply(t[i],r))break}else if(a)for(;o>i&&!1!==n.call(t[i],i,t[i]);i++);else for(i in t)if(!1===n.call(t[i],i,t[i]))break;return t},n.data=function(t,e,r){if(void 0===r){var o=(a=t[n.expando])&&i[a];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var a=t[n.expando]||(t[n.expando]=++n.uuid);return i[a]=i[a]||{},i[a][e]=r,r}},n.removeData=function(t,e){var r=t[n.expando],o=r&&i[r];o&&n.each(e,(function(t,e){delete o[e]}))},n.extend=function(){var t,e,i,o,a,s,l=arguments[0]||{},u=1,c=arguments.length,d=!1;for("boolean"==typeof l&&(d=l,l=arguments[u]||{},u++),"object"!=r(l)&&"function"!==n.type(l)&&(l={}),u===c&&(l=this,u--);c>u;u++)if(null!=(a=arguments[u]))for(o in a)t=l[o],l!==(i=a[o])&&(d&&i&&(n.isPlainObject(i)||(e=n.isArray(i)))?(e?(e=!1,s=t&&n.isArray(t)?t:[]):s=t&&n.isPlainObject(t)?t:{},l[o]=n.extend(d,s,i)):void 0!==i&&(l[o]=i));return l},n.queue=function(t,r,i){if(t){r=(r||"fx")+"queue";var o=n.data(t,r);return i?(!o||n.isArray(i)?o=n.data(t,r,function(t,n){var r=n||[];return null!=t&&(e(Object(t))?function(t,e){for(var n=+e.length,r=0,i=t.length;n>r;)t[i++]=e[r++];if(n!=n)for(;void 0!==e[r];)t[i++]=e[r++];t.length=i}(r,"string"==typeof t?[t]:t):[].push.call(r,t)),r}(i)):o.push(i),o):o||[]}},n.dequeue=function(t,e){n.each(t.nodeType?[t]:t,(function(t,r){e=e||"fx";var i=n.queue(r,e),o=i.shift();"inprogress"===o&&(o=i.shift()),o&&("fx"===e&&i.unshift("inprogress"),o.call(r,(function(){n.dequeue(r,e)})))}))},n.fn=n.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),r=this.offset(),i=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:n(t).offset();return r.top-=parseFloat(e.style.marginTop)||0,r.left-=parseFloat(e.style.marginLeft)||0,t.style&&(i.top+=parseFloat(t.style.borderTopWidth)||0,i.left+=parseFloat(t.style.borderLeftWidth)||0),{top:r.top-i.top,left:r.left-i.left}}};var i={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var o={},a=o.hasOwnProperty,s=o.toString,l="Boolean Number String Function Array Date RegExp Object Error".split(" "),u=0;u<l.length;u++)o["[object "+l[u]+"]"]=l[u].toLowerCase();n.fn.init.prototype=n.fn,t.Velocity={Utilities:n}}}(window),e=function(){return function(t,e,n,i){function o(t){return g.isWrapped(t)?t=[].slice.call(t):g.isNode(t)&&(t=[t]),t}function a(t){var e=f.data(t,"velocity");return null===e?i:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,n,r,i){function o(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,n){return((o(e,n)*t+a(e,n))*t+s(e))*t}function u(t,e,n){return 3*o(e,n)*t*t+2*a(e,n)*t+s(e)}function c(e,n){for(var i=0;h>i;++i){var o=u(n,t,r);if(0===o)return n;n-=(l(n,t,r)-e)/o}return n}function d(e,n,i){var o,a,s=0;do{(o=l(a=n+(i-n)/2,t,r)-e)>0?i=a:n=a}while(Math.abs(o)>g&&++s<v);return a}function f(){S=!0,(t!=n||r!=i)&&function(){for(var e=0;m>e;++e)w[e]=l(e*y,t,r)}()}var h=4,p=.001,g=1e-7,v=10,m=11,y=1/(m-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),r=Math.min(r,1),t=Math.max(t,0),r=Math.max(r,0);var w=b?new Float32Array(m):new Array(m),S=!1,k=function(e){return S||f(),t===n&&r===i?e:0===e?0:1===e?1:l(function(e){for(var n=0,i=1,o=m-1;i!=o&&w[i]<=e;++i)n+=y;var a=n+(e-w[--i])/(w[i+1]-w[i])*y,s=u(a,t,r);return s>=p?c(e,a):0==s?a:d(e,n,n+y)}(e),n,i)};k.getControlPoints=function(){return[{x:t,y:n},{x:r,y:i}]};var C="generateBezier("+[t,n,r,i]+")";return k.toString=function(){return C},k}function u(t,e){var n=t;return g.isString(t)?b.Easings[t]||(n=!1):n=g.isArray(t)&&1===t.length?s.apply(null,t):g.isArray(t)&&2===t.length?x.apply(null,t.concat([e])):!(!g.isArray(t)||4!==t.length)&&l.apply(null,t),!1===n&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:y),n}function c(t){if(t){var e=(new Date).getTime(),n=b.State.calls.length;n>1e4&&(b.State.calls=function(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var i=t[e];i&&r.push(i)}return r}(b.State.calls));for(var r=0;n>r;r++)if(b.State.calls[r]){var o=b.State.calls[r],s=o[0],l=o[2],u=o[3],h=!!u,p=null;u||(u=b.State.calls[r][3]=e-16);for(var v=Math.min((e-u)/l.duration,1),m=0,y=s.length;y>m;m++){var x=s[m],S=x.element;if(a(S)){var C=!1;for(var M in l.display!==i&&null!==l.display&&"none"!==l.display&&("flex"===l.display&&f.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],(function(t,e){w.setPropertyValue(S,"display",e)})),w.setPropertyValue(S,"display",l.display)),l.visibility!==i&&"hidden"!==l.visibility&&w.setPropertyValue(S,"visibility",l.visibility),x)if("element"!==M){var A,P=x[M],_=g.isString(P.easing)?b.Easings[P.easing]:P.easing;if(1===v)A=P.endValue;else{var T=P.endValue-P.startValue;if(A=P.startValue+T*_(v,l,T),!h&&A===P.currentValue)continue}if(P.currentValue=A,"tween"===M)p=A;else{if(w.Hooks.registered[M]){var I=w.Hooks.getRoot(M),O=a(S).rootPropertyValueCache[I];O&&(P.rootPropertyValue=O)}var F=w.setPropertyValue(S,M,P.currentValue+(0===parseFloat(A)?"":P.unitType),P.rootPropertyValue,P.scrollData);w.Hooks.registered[M]&&(a(S).rootPropertyValueCache[I]=w.Normalizations.registered[I]?w.Normalizations.registered[I]("extract",null,F[1]):F[1]),"transform"===F[0]&&(C=!0)}}l.mobileHA&&a(S).transformCache.translate3d===i&&(a(S).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&w.flushTransformCache(S)}}l.display!==i&&"none"!==l.display&&(b.State.calls[r][2].display=!1),l.visibility!==i&&"hidden"!==l.visibility&&(b.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],v,Math.max(0,u+l.duration-e),u,p),1===v&&d(r)}}b.State.isTicking&&k(c)}function d(t,e){if(!b.State.calls[t])return!1;for(var n=b.State.calls[t][0],r=b.State.calls[t][1],o=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,u=0,c=n.length;c>u;u++){var d=n[u].element;if(e||o.loop||("none"===o.display&&w.setPropertyValue(d,"display",o.display),"hidden"===o.visibility&&w.setPropertyValue(d,"visibility",o.visibility)),!0!==o.loop&&(f.queue(d)[1]===i||!/\.velocityQueueEntryFlag/i.test(f.queue(d)[1]))&&a(d)){a(d).isAnimating=!1,a(d).rootPropertyValueCache={};var h=!1;f.each(w.Lists.transforms3D,(function(t,e){var n=/^scale/.test(e)?1:0,r=a(d).transformCache[e];a(d).transformCache[e]!==i&&new RegExp("^\\("+n+"[^.]").test(r)&&(h=!0,delete a(d).transformCache[e])})),o.mobileHA&&(h=!0,delete a(d).transformCache.translate3d),h&&w.flushTransformCache(d),w.Values.removeClass(d,"velocity-animating")}if(!e&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(r,r)}catch(t){setTimeout((function(){throw t}),1)}s&&!0!==o.loop&&s(r),a(d)&&!0===o.loop&&!e&&(f.each(a(d).tweensContainer,(function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)})),b(d,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&f.dequeue(d,o.queue)}b.State.calls[t]=!1;for(var p=0,g=b.State.calls.length;g>p;p++)if(!1!==b.State.calls[p]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,h=function(){if(n.documentMode)return n.documentMode;for(var t=7;t>4;t--){var e=n.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return i}(),p=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var n,r=(new Date).getTime();return n=Math.max(0,16-(r-t)),t=r+n,setTimeout((function(){e(r+n)}),n)}}(),g={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==r(t)&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==i&&(0===t.length||"object"==r(t[0])&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},v=!1;if(t.fn&&t.fn.jquery?(f=t,v=!0):f=e.Velocity.Utilities,8>=h&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=h)){var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:i,complete:i,progress:i,display:i,visibility:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){f.data(t,"velocity",{isSVG:g.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==i?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,n,r){var i={x:e.x+r.dx*n,v:e.v+r.dv*n,tension:e.tension,friction:e.friction};return{dx:i.v,dv:t(i)}}function n(n,r){var i={dx:n.v,dv:t(n)},o=e(n,.5*r,i),a=e(n,.5*r,o),s=e(n,r,a),l=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+l*r,n.v=n.v+u*r,n}return function t(e,r,i){var o,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(e=parseFloat(e)||500,r=parseFloat(r)||20,i=i||null,l.tension=e,l.friction=r,a=(o=null!==i)?(c=t(e,r))/i*.016:.016;s=n(s||l,a),u.push(1+s.x),c+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return o?function(t){return u[t*(u.length-1)|0]}:c}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(t,e){b.Easings[e[0]]=l.apply(null,e[1])}));var w=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<w.Lists.colors.length;t++){var e="color"===w.Lists.colors[t]?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[t]]=["Red Green Blue Alpha",e]}var n,r,i;if(h)for(n in w.Hooks.templates){i=(r=w.Hooks.templates[n])[0].split(" ");var o=r[1].match(w.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),w.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in w.Hooks.templates)for(var t in i=(r=w.Hooks.templates[n])[0].split(" ")){var a=n+i[t],s=t;w.Hooks.registered[a]=[n,s]}},getRoot:function(t){var e=w.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return w.RegEx.valueUnwrap.test(e)&&(e=e.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(e)&&(e=w.Hooks.templates[t][1]),e},extractValue:function(t,e){var n=w.Hooks.registered[t];if(n){var r=n[0],i=n[1];return(e=w.Hooks.cleanRootPropertyValue(r,e)).toString().match(w.RegEx.valueSplit)[i]}return e},injectValue:function(t,e,n){var r=w.Hooks.registered[t];if(r){var i,o=r[0],a=r[1];return(i=(n=w.Hooks.cleanRootPropertyValue(o,n)).toString().match(w.RegEx.valueSplit))[a]=e,i.join(" ")}return n}},Normalizations:{registered:{clip:function(t,e,n){switch(t){case"name":return"clip";case"extract":var r;return r=w.RegEx.wrappedValueAlreadyExtracted.test(n)?n:(r=n.toString().match(w.RegEx.valueUnwrap))?r[1].replace(/,(\s+)?/g," "):n;case"inject":return"rect("+n+")"}},blur:function(t,e,n){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(t,e,n){if(8>=h)switch(t){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return r?r[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){9>=h||b.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var t=0;t<w.Lists.transformsBase.length;t++)!function(){var e=w.Lists.transformsBase[t];w.Normalizations.registered[e]=function(t,n,r){switch(t){case"name":return"transform";case"extract":return a(n)===i||a(n).transformCache[e]===i?/^scale/i.test(e)?1:0:a(n).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case"scal":case"scale":b.State.isAndroid&&a(n).transformCache[e]===i&&1>r&&(r=1),o=!/(\d)$/i.test(r);break;case"skew":o=!/(deg|\d)$/i.test(r);break;case"rotate":o=!/(deg|\d)$/i.test(r)}return o||(a(n).transformCache[e]="("+r+")"),a(n).transformCache[e]}}}();for(t=0;t<w.Lists.colors.length;t++)!function(){var e=w.Lists.colors[t];w.Normalizations.registered[e]=function(t,n,r){switch(t){case"name":return e;case"extract":var o;if(w.RegEx.wrappedValueAlreadyExtracted.test(r))o=r;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?a=s[r]!==i?s[r]:s.black:w.RegEx.isHex.test(r)?a="rgb("+w.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(a=s.black),o=(a||r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(8>=h?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}))},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],n=0,r=e.length;r>n;n++){var i;if(i=0===n?t:e[n]+t.replace(/^\w/,(function(t){return t.toUpperCase()})),g.isString(b.State.prefixElement.style[i]))return b.State.prefixMatches[t]=i,[i,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,n,r,o){function s(t,n){function r(){c&&w.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=f.css(t,n);else{var u,c=!1;if(/^(width|height)$/.test(n)&&0===w.getPropertyValue(t,"display")&&(c=!0,w.setPropertyValue(t,"display",w.Values.getDisplayType(t))),!o){if("height"===n&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetHeight-(parseFloat(w.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(t,"paddingBottom"))||0);return r(),d}if("width"===n&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetWidth-(parseFloat(w.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(t,"paddingRight"))||0);return r(),p}}u=a(t)===i?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===n&&(n="borderTopColor"),(""===(l=9===h&&"filter"===n?u.getPropertyValue(n):u[n])||null===l)&&(l=t.style[n]),r()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var g=s(t,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(n))&&(l=f(t).position()[n]+"px")}return l}var l;if(w.Hooks.registered[n]){var u=n,c=w.Hooks.getRoot(u);r===i&&(r=w.getPropertyValue(t,w.Names.prefixCheck(c)[0])),w.Normalizations.registered[c]&&(r=w.Normalizations.registered[c]("extract",t,r)),l=w.Hooks.extractValue(u,r)}else if(w.Normalizations.registered[n]){var d,p;"transform"!==(d=w.Normalizations.registered[n]("name",t))&&(p=s(t,w.Names.prefixCheck(d)[0]),w.Values.isCSSNullValue(p)&&w.Hooks.templates[n]&&(p=w.Hooks.templates[n][1])),l=w.Normalizations.registered[n]("extract",t,p)}if(!/^[\d-]/.test(l))if(a(t)&&a(t).isSVG&&w.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=t.getBBox()[n]}catch(t){l=0}else l=t.getAttribute(n);else l=s(t,w.Names.prefixCheck(n)[0]);return w.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(t,n,r,i,o){var s=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?e.scrollTo(r,o.alternateValue):e.scrollTo(o.alternateValue,r);else if(w.Normalizations.registered[n]&&"transform"===w.Normalizations.registered[n]("name",t))w.Normalizations.registered[n]("inject",t,r),s="transform",r=a(t).transformCache[n];else{if(w.Hooks.registered[n]){var l=n,u=w.Hooks.getRoot(n);i=i||w.getPropertyValue(t,u),r=w.Hooks.injectValue(l,r,i),n=u}if(w.Normalizations.registered[n]&&(r=w.Normalizations.registered[n]("inject",t,r),n=w.Normalizations.registered[n]("name",t)),s=w.Names.prefixCheck(n)[0],8>=h)try{t.style[s]=r}catch(t){b.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else a(t)&&a(t).isSVG&&w.Names.SVGAttribute(n)?t.setAttribute(n,r):t.style[s]=r;b.debug>=2&&console.log("Set "+n+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(t){function e(e){return parseFloat(w.getPropertyValue(t,e))}var n="";if((h||b.State.isAndroid&&!b.State.isChrome)&&a(t).isSVG){var r={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};f.each(a(t).transformCache,(function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),r[t]&&(n+=t+"("+r[t].join(" ")+") ",delete r[t])}))}else{var i,o;f.each(a(t).transformCache,(function(e){return i=a(t).transformCache[e],"transformPerspective"===e?(o=i,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(n+=e+i+" "))})),o&&(n="perspective"+o+" "+n)}w.setPropertyValue(t,"transform",n)}};w.Hooks.register(),w.Normalizations.register(),b.hook=function(t,e,n){var r=i;return t=o(t),f.each(t,(function(t,o){if(a(o)===i&&b.init(o),n===i)r===i&&(r=b.CSS.getPropertyValue(o,e));else{var s=b.CSS.setPropertyValue(o,e,n);"transform"===s[0]&&b.CSS.flushTransformCache(o),r=s}})),r};var S=function t(){function r(){return l?_.promise||null:h}function s(){function t(t){function d(t,e){var n=i,r=i,a=i;return g.isArray(t)?(n=t[0],!g.isArray(t[1])&&/^[\d-]/.test(t[1])||g.isFunction(t[1])||w.RegEx.isHex.test(t[1])?a=t[1]:(g.isString(t[1])&&!w.RegEx.isHex.test(t[1])||g.isArray(t[1]))&&(r=e?t[1]:u(t[1],s.duration),t[2]!==i&&(a=t[2]))):n=t,e||(r=r||s.easing),g.isFunction(n)&&(n=n.call(o,C,k)),g.isFunction(a)&&(a=a.call(o,C,k)),[n||0,r,a]}function h(t,e){var n,r;return r=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(t){return n=t,""})),n||(n=w.Values.getUnitType(t)),[r,n]}function p(){var t={myParent:o.parentNode||n.body,position:w.getPropertyValue(o,"position"),fontSize:w.getPropertyValue(o,"fontSize")},r=t.position===L.lastPosition&&t.myParent===L.lastParent,i=t.fontSize===L.lastFontSize;L.lastParent=t.myParent,L.lastPosition=t.position,L.lastFontSize=t.fontSize;var s=100,l={};if(i&&r)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=a(o).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");b.init(u),t.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],(function(t,e){b.CSS.setPropertyValue(u,e,"hidden")})),b.CSS.setPropertyValue(u,"position",t.position),b.CSS.setPropertyValue(u,"fontSize",t.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(t,e){b.CSS.setPropertyValue(u,e,s+"%")})),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(w.getPropertyValue(u,"paddingLeft"))||1)/s,t.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(w.getPropertyValue(n.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(e.innerWidth)/100,L.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===C)try{s.begin.call(v,v)}catch(t){setTimeout((function(){throw t}),1)}if("scroll"===P){var m,S,M,A=/^x$/i.test(s.axis)?"Left":"Top",T=parseFloat(s.offset)||0;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,M=(m=s.container["scroll"+A])+f(o).position()[A.toLowerCase()]+T):s.container=null:(m=b.State.scrollAnchor[b.State["scrollProperty"+A]],S=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===A?"Top":"Left")]],M=f(o).offset()[A.toLowerCase()]+T),l={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:M,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:A,alternateValue:S}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===P){if(!a(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===a(o).opts.display&&(a(o).opts.display="auto"),"hidden"===a(o).opts.visibility&&(a(o).opts.visibility="visible"),a(o).opts.loop=!1,a(o).opts.begin=null,a(o).opts.complete=null,x.easing||delete s.easing,x.duration||delete s.duration,s=f.extend({},a(o).opts,s);var I=f.extend(!0,{},a(o).tweensContainer);for(var O in I)if("element"!==O){var F=I[O].startValue;I[O].startValue=I[O].currentValue=I[O].endValue,I[O].endValue=F,g.isEmptyObject(x)||(I[O].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+O+"): "+JSON.stringify(I[O]),o)}l=I}else if("start"===P){for(var D in a(o).tweensContainer&&!0===a(o).isAnimating&&(I=a(o).tweensContainer),f.each(y,(function(t,e){if(RegExp("^"+w.Lists.colors.join("$|^")+"$").test(t)){var n=d(e,!0),r=n[0],o=n[1],a=n[2];if(w.RegEx.isHex.test(r)){for(var s=["Red","Green","Blue"],l=w.Values.hexToRgb(r),u=a?w.Values.hexToRgb(a):i,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==i&&f.push(u[c]),y[t+s[c]]=f}delete y[t]}}})),y){var E=d(y[D]),N=E[0],V=E[1],z=E[2];D=w.Names.camelCase(D);var B=w.Hooks.getRoot(D),W=!1;if(a(o).isSVG||"tween"===B||!1!==w.Names.prefixCheck(B)[1]||w.Normalizations.registered[B]!==i){(s.display!==i&&null!==s.display&&"none"!==s.display||s.visibility!==i&&"hidden"!==s.visibility)&&/opacity|filter/.test(D)&&!z&&0!==N&&(z=0),s._cacheValues&&I&&I[D]?(z===i&&(z=I[D].endValue+I[D].unitType),W=a(o).rootPropertyValueCache[B]):w.Hooks.registered[D]?z===i?(W=w.getPropertyValue(o,B),z=w.getPropertyValue(o,D,W)):W=w.Hooks.templates[B][1]:z===i&&(z=w.getPropertyValue(o,D));var j,H,q,U=!1;if(z=(j=h(D,z))[0],q=j[1],N=(j=h(D,N))[0].replace(/^([+-\/*])=/,(function(t,e){return U=e,""})),H=j[1],z=parseFloat(z)||0,N=parseFloat(N)||0,"%"===H&&(/^(fontSize|lineHeight)$/.test(D)?(N/=100,H="em"):/^scale/.test(D)?(N/=100,H=""):/(Red|Green|Blue)$/i.test(D)&&(N=N/100*255,H="")),/[\/*]/.test(U))H=q;else if(q!==H&&0!==z)if(0===N)H=q;else{r=r||p();var $=/margin|padding|left|right|width|text|word|letter/i.test(D)||/X$/.test(D)||"x"===D?"x":"y";switch(q){case"%":z*="x"===$?r.percentToPxWidth:r.percentToPxHeight;break;case"px":break;default:z*=r[q+"ToPx"]}switch(H){case"%":z*=1/("x"===$?r.percentToPxWidth:r.percentToPxHeight);break;case"px":break;default:z*=1/r[H+"ToPx"]}}switch(U){case"+":N=z+N;break;case"-":N=z-N;break;case"*":N*=z;break;case"/":N=z/N}l[D]={rootPropertyValue:W,startValue:z,currentValue:z,endValue:N,unitType:H,easing:V},b.debug&&console.log("tweensContainer ("+D+"): "+JSON.stringify(l[D]),o)}else b.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(w.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(a(o).tweensContainer=l,a(o).opts=s),a(o).isAnimating=!0,C===k-1?(b.State.calls.push([R,v,s,null,_.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,c())):C++)}var r,o=this,s=f.extend({},b.defaults,x),l={};switch(a(o)===i&&b.init(o),parseFloat(s.delay)&&!1!==s.queue&&f.queue(o,s.queue,(function(t){b.velocityQueueEntryFlag=!0,a(o).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}})),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==i&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==i&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():f.queue(o,s.queue,(function(e,n){return!0===n?(_.promise&&_.resolver(v),!0):(b.velocityQueueEntryFlag=!0,void t())})),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var l,h,p,v,y,x,S=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties));if(g.isWrapped(this)?(l=!1,p=0,v=this,h=this):(l=!0,p=1,v=S?arguments[0].elements||arguments[0].e:arguments[0]),v=o(v)){S?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[p],x=arguments[p+1]);var k=v.length,C=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(x)){var M=p+1;x={};for(var A=M;A<arguments.length;A++)g.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?g.isString(arguments[A])||g.isArray(arguments[A])?x.easing=arguments[A]:g.isFunction(arguments[A])&&(x.complete=arguments[A]):x.duration=arguments[A]}var P,_={promise:null,resolver:null,rejecter:null};switch(l&&b.Promise&&(_.promise=new b.Promise((function(t,e){_.resolver=t,_.rejecter=e}))),y){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"finish":case"stop":f.each(v,(function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer)}));var T=[];return f.each(b.State.calls,(function(t,e){e&&f.each(e[1],(function(n,r){var o=x===i?"":x;return!0!==o&&e[2].queue!==o&&(x!==i||!1!==e[2].queue)||void f.each(v,(function(n,i){i===r&&((!0===x||g.isString(x))&&(f.each(f.queue(i,g.isString(x)?x:""),(function(t,e){g.isFunction(e)&&e(null,!0)})),f.queue(i,g.isString(x)?x:"",[])),"stop"===y?(a(i)&&a(i).tweensContainer&&!1!==o&&f.each(a(i).tweensContainer,(function(t,e){e.endValue=e.currentValue})),T.push(t)):"finish"===y&&(e[2].duration=1))}))}))})),"stop"===y&&(f.each(T,(function(t,e){d(e,!0)})),_.promise&&_.resolver(v)),r();default:if(!f.isPlainObject(y)||g.isEmptyObject(y)){if(g.isString(y)&&b.Redirects[y]){var I=(E=f.extend({},x)).duration,O=E.delay||0;return!0===E.backwards&&(v=f.extend(!0,[],v).reverse()),f.each(v,(function(t,e){parseFloat(E.stagger)?E.delay=O+parseFloat(E.stagger)*t:g.isFunction(E.stagger)&&(E.delay=O+E.stagger.call(e,t,k)),E.drag&&(E.duration=parseFloat(I)||(/^(callout|transition)/.test(y)?1e3:m),E.duration=Math.max(E.duration*(E.backwards?1-t/k:(t+1)/k),.75*E.duration,200)),b.Redirects[y].call(e,e,E||{},t,k,v,_.promise?_:i)})),r()}var F="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return _.promise?_.rejecter(new Error(F)):console.log(F),r()}P="start"}var D,E,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];if(f.each(v,(function(t,e){g.isNode(e)&&s.call(e)})),(E=f.extend({},b.defaults,x)).loop=parseInt(E.loop),D=2*E.loop-1,E.loop)for(var N=0;D>N;N++){var V={delay:E.delay,progress:E.progress};N===D-1&&(V.display=E.display,V.visibility=E.visibility,V.complete=E.complete),t(v,"reverse",V)}return r()}};(b=f.extend(S,b)).animate=S;var k=e.requestAnimationFrame||p;return b.State.isMobile||n.hidden===i||n.addEventListener("visibilitychange",(function(){n.hidden?(k=function(t){return setTimeout((function(){t(!0)}),16)},c()):k=e.requestAnimationFrame||p})),t.Velocity=b,t!==e&&(t.fn.velocity=S,t.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],(function(t,e){b.Redirects["slide"+e]=function(t,n,r,o,a,s){var l=f.extend({},n),u=l.begin,c=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===i&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){for(var n in u&&u.call(a,a),d){h[n]=t.style[n];var r=b.CSS.getPropertyValue(t,n);d[n]="Down"===e?[r,0]:[0,r]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];c&&c.call(a,a),s&&s.resolver(a)},b(t,d,l)}})),f.each(["In","Out"],(function(t,e){b.Redirects["fade"+e]=function(t,n,r,o,a,s){var l=f.extend({},n),u={opacity:"In"===e?1:0},c=l.complete;l.complete=r!==o-1?l.begin=null:function(){c&&c.call(a,a),s&&s.resolver(a)},l.display===i&&(l.display="In"===e?"auto":"none"),b(this,u,l)}})),b}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)},"object"==r(t)&&"object"==r(t.exports)?t.exports=e():"function"==typeof define&&n(55)?define(e):e())}).call(this,n(87)(t))},function(t,e,n){"use strict";var r=n(3),i=n(1),o=n(148),a=n(7),s=n(32),l=n(11),u=n(103),c=o.ArrayBuffer,d=o.DataView,f=c.prototype.slice;r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:i((function(){return!new c(2).slice(1,void 0).byteLength}))},{slice:function(t,e){if(void 0!==f&&void 0===e)return f.call(a(this),t);for(var n=a(this).byteLength,r=s(t,n),i=s(void 0===e?n:e,n),o=new(u(this,c))(l(i-r)),h=new d(this),p=new d(o),g=0;r<i;)p.setUint8(g++,h.getUint8(r++));return o}})},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){n(173)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(9),a=n(174),s=n(56),l=n(148),u=n(149),c=n(17),d=n(6),f=n(11),h=n(150),p=n(151),g=n(19),v=n(4),m=n(76),y=n(5),b=n(34),x=n(70),w=n(27).f,S=n(177),k=n(23).forEach,C=n(126),M=n(8),A=n(26),P=n(21),_=P.get,T=P.set,I=M.f,O=A.f,F=Math.round,D=i.RangeError,E=l.ArrayBuffer,L=l.DataView,R=s.NATIVE_ARRAY_BUFFER_VIEWS,N=s.TYPED_ARRAY_TAG,V=s.TypedArray,z=s.TypedArrayPrototype,B=s.aTypedArrayConstructor,W=s.isTypedArray,j=function(t,e){for(var n=0,r=e.length,i=new(B(t))(r);r>n;)i[n]=e[n++];return i},H=function(t,e){I(t,e,{get:function(){return _(this)[e]}})},q=function(t){var e;return t instanceof E||"ArrayBuffer"==(e=m(t))||"SharedArrayBuffer"==e},U=function(t,e){return W(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},$=function(t,e){return U(t,e=g(e,!0))?c(2,t[e]):O(t,e)},Y=function(t,e,n){return!(U(t,e=g(e,!0))&&y(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?I(t,e,n):(t[e]=n.value,t)};o?(R||(A.f=$,M.f=Y,H(z,"buffer"),H(z,"byteOffset"),H(z,"byteLength"),H(z,"length")),r({target:"Object",stat:!0,forced:!R},{getOwnPropertyDescriptor:$,defineProperty:Y}),t.exports=function(t,e,n,o){var s=t+(o?"Clamped":"")+"Array",l="get"+t,c="set"+t,g=i[s],v=g,m=v&&v.prototype,M={},A=function(t,n){I(t,n,{get:function(){return function(t,n){var r=_(t);return r.view[l](n*e+r.byteOffset,!0)}(this,n)},set:function(t){return function(t,n,r){var i=_(t);o&&(r=(r=F(r))<0?0:r>255?255:255&r),i.view[c](n*e+i.byteOffset,r,!0)}(this,n,t)},enumerable:!0})};R?a&&(v=n((function(t,n,r,i){return u(t,v,s),y(n)?q(n)?void 0!==i?new g(n,p(r,e),i):void 0!==r?new g(n,p(r,e)):new g(n):W(n)?j(v,n):S.call(v,n):new g(h(n))})),x&&x(v,V),k(w(g),(function(t){t in v||d(v,t,g[t])})),v.prototype=m):(v=n((function(t,n,r,i){u(t,v,s);var o,a,l,c=0,d=0;if(y(n)){if(!q(n))return W(n)?j(v,n):S.call(v,n);o=n,d=p(r,e);var g=n.byteLength;if(void 0===i){if(g%e)throw D("Wrong length");if((a=g-d)<0)throw D("Wrong length")}else if((a=f(i)*e)+d>g)throw D("Wrong length");l=a/e}else l=h(n),o=new E(a=l*e);for(T(t,{buffer:o,byteOffset:d,byteLength:a,length:l,view:new L(o)});c<l;)A(t,c++)})),x&&x(v,V),m=v.prototype=b(z)),m.constructor!==v&&d(m,"constructor",v),N&&d(m,N,s),M[s]=v,r({global:!0,forced:v!=g,sham:!R},M),"BYTES_PER_ELEMENT"in v||d(v,"BYTES_PER_ELEMENT",e),"BYTES_PER_ELEMENT"in m||d(m,"BYTES_PER_ELEMENT",e),C(s)}):t.exports=function(){}},function(t,e,n){var r=n(0),i=n(1),o=n(175),a=n(56).NATIVE_ARRAY_BUFFER_VIEWS,s=r.ArrayBuffer,l=r.Int8Array;t.exports=!a||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!o((function(t){new l,new l(null),new l(1.5),new l(t)}),!0)||i((function(){return 1!==new l(new s(2),1,void 0).length}))},function(t,e,n){var r=n(2)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},t(o)}catch(t){}return n}},function(t,e,n){var r=n(12);t.exports=function(t){var e=r(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,n){var r=n(16),i=n(11),o=n(178),a=n(179),s=n(75),l=n(56).aTypedArrayConstructor;t.exports=function(t){var e,n,u,c,d,f,h=r(t),p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g,m=o(h);if(null!=m&&!a(m))for(f=(d=m.call(h)).next,h=[];!(c=f.call(d)).done;)h.push(c.value);for(v&&p>2&&(g=s(g,arguments[2],2)),n=i(h.length),u=new(l(this))(n),e=0;n>e;e++)u[e]=v?g(h[e],e):h[e];return u}},function(t,e,n){var r=n(76),i=n(40),o=n(2)("iterator");t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(2),i=n(40),o=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||a[o]===t)}},function(t,e,n){"use strict";var r=n(56),i=n(181),o=r.aTypedArray;r.exportProto("copyWithin",(function(t,e){return i.call(o(this),t,e,arguments.length>2?arguments[2]:void 0)}))},function(t,e,n){"use strict";var r=n(16),i=n(32),o=n(11),a=Math.min;t.exports=[].copyWithin||function(t,e){var n=r(this),s=o(n.length),l=i(t,s),u=i(e,s),c=arguments.length>2?arguments[2]:void 0,d=a((void 0===c?s:i(c,s))-u,s-l),f=1;for(u<l&&l<u+d&&(f=-1,u+=d-1,l+=d-1);d-- >0;)u in n?n[l]=n[u]:delete n[l],l+=f,u+=f;return n}},function(t,e,n){"use strict";var r=n(56),i=n(23).every,o=r.aTypedArray;r.exportProto("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(132),o=r.aTypedArray;r.exportProto("fill",(function(t){return i.apply(o(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).filter,o=n(103),a=r.aTypedArray,s=r.aTypedArrayConstructor;r.exportProto("filter",(function(t){for(var e=i(a(this),t,arguments.length>1?arguments[1]:void 0),n=o(this,this.constructor),r=0,l=e.length,u=new(s(n))(l);l>r;)u[r]=e[r++];return u}))},function(t,e,n){"use strict";var r=n(56),i=n(23).find,o=r.aTypedArray;r.exportProto("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).findIndex,o=r.aTypedArray;r.exportProto("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).forEach,o=r.aTypedArray;r.exportProto("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(41).includes,o=r.aTypedArray;r.exportProto("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(41).indexOf,o=r.aTypedArray;r.exportProto("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(54),a=n(2)("iterator"),s=r.Uint8Array,l=o.values,u=o.keys,c=o.entries,d=i.aTypedArray,f=i.exportProto,h=s&&s.prototype[a],p=!!h&&("values"==h.name||null==h.name),g=function(){return l.call(d(this))};f("entries",(function(){return c.call(d(this))})),f("keys",(function(){return u.call(d(this))})),f("values",g,!p),f(a,g,!p)},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=[].join;r.exportProto("join",(function(t){return o.apply(i(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(130),o=r.aTypedArray;r.exportProto("lastIndexOf",(function(t){return i.apply(o(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).map,o=n(103),a=r.aTypedArray,s=r.aTypedArrayConstructor;r.exportProto("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(s(o(t,t.constructor)))(e)}))}))},function(t,e,n){"use strict";var r=n(56),i=n(107).left,o=r.aTypedArray;r.exportProto("reduce",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(107).right,o=r.aTypedArray;r.exportProto("reduceRight",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=Math.floor;r.exportProto("reverse",(function(){for(var t,e=i(this).length,n=o(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this}))},function(t,e,n){"use strict";var r=n(56),i=n(11),o=n(151),a=n(16),s=n(1),l=r.aTypedArray,u=s((function(){new Int8Array(1).set({})}));r.exportProto("set",(function(t){l(this);var e=o(arguments.length>1?arguments[1]:void 0,1),n=this.length,r=a(t),s=i(r.length),u=0;if(s+e>n)throw RangeError("Wrong length");for(;u<s;)this[e+u]=r[u++]}),u)},function(t,e,n){"use strict";var r=n(56),i=n(103),o=n(1),a=r.aTypedArray,s=r.aTypedArrayConstructor,l=[].slice,u=o((function(){new Int8Array(1).slice()}));r.exportProto("slice",(function(t,e){for(var n=l.call(a(this),t,e),r=i(this,this.constructor),o=0,u=n.length,c=new(s(r))(u);u>o;)c[o]=n[o++];return c}),u)},function(t,e,n){"use strict";var r=n(56),i=n(23).some,o=r.aTypedArray;r.exportProto("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=[].sort;r.exportProto("sort",(function(t){return o.call(i(this),t)}))},function(t,e,n){"use strict";var r=n(56),i=n(11),o=n(32),a=n(103),s=r.aTypedArray;r.exportProto("subarray",(function(t,e){var n=s(this),r=n.length,l=o(t,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+l*n.BYTES_PER_ELEMENT,i((void 0===e?r:o(e,r))-l))}))},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(1),a=r.Int8Array,s=i.aTypedArray,l=[].toLocaleString,u=[].slice,c=!!a&&o((function(){l.call(new a(1))})),d=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));i.exportProto("toLocaleString",(function(){return l.apply(c?u.call(s(this)):s(this),arguments)}),d)},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(1),a=r.Uint8Array,s=a&&a.prototype,l=[].toString,u=[].join;o((function(){l.call({})}))&&(l=function(){return u.call(this)}),i.exportProto("toString",l,(s||{}).toString!=l)},function(t,e,n){"use strict";(function(t){n(78),n(81),n(82),n(91),n(54),n(101),n(104),n(123),n(71),n(106),n(84),n(85);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */!function(r,i){"function"==typeof define&&n(55)?define([],(function(){return r.Waves=i.call(r),r.Waves})):"object"===("undefined"==typeof exports?"undefined":e(exports))?t.exports=i.call(r):r.Waves=i.call(r)}("object"===("undefined"==typeof window?"undefined":e(window))?window:void 0,(function(){var t=t||{},n=document.querySelectorAll.bind(document),r=Object.prototype.toString,i="ontouchstart"in window;function o(t){var n=e(t);return"function"===n||"object"===n&&!!t}function a(t){var e,i=r.call(t);return"[object String]"===i?n(t):o(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i)&&t.hasOwnProperty("length")?t:o(e=t)&&e.nodeType>0?[t]:[]}function s(t){var n,r,i={top:0,left:0},o=t&&t.ownerDocument;return n=o.documentElement,"undefined"!==e(t.getBoundingClientRect)&&(i=t.getBoundingClientRect()),r=function(t){return null!==(e=t)&&e===e.window?t:9===t.nodeType&&t.defaultView;var e}(o),{top:i.top+r.pageYOffset-n.clientTop,left:i.left+r.pageXOffset-n.clientLeft}}function l(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}var u={duration:750,delay:200,show:function(t,e,n){if(2===t.button)return!1;e=e||this;var r=document.createElement("div");r.className="waves-ripple waves-rippling",e.appendChild(r);var i=s(e),o=0,a=0;"touches"in t&&t.touches.length?(o=t.touches[0].pageY-i.top,a=t.touches[0].pageX-i.left):(o=t.pageY-i.top,a=t.pageX-i.left),a=a>=0?a:0,o=o>=0?o:0;var c="scale("+e.clientWidth/100*3+")",d="translate(0,0)";n&&(d="translate("+n.x+"px, "+n.y+"px)"),r.setAttribute("data-hold",Date.now()),r.setAttribute("data-x",a),r.setAttribute("data-y",o),r.setAttribute("data-scale",c),r.setAttribute("data-translate",d);var f={top:o+"px",left:a+"px"};r.classList.add("waves-notransition"),r.setAttribute("style",l(f)),r.classList.remove("waves-notransition"),f["-webkit-transform"]=c+" "+d,f["-moz-transform"]=c+" "+d,f["-ms-transform"]=c+" "+d,f["-o-transform"]=c+" "+d,f.transform=c+" "+d,f.opacity="1";var h="mousemove"===t.type?2500:u.duration;f["-webkit-transition-duration"]=h+"ms",f["-moz-transition-duration"]=h+"ms",f["-o-transition-duration"]=h+"ms",f["transition-duration"]=h+"ms",r.setAttribute("style",l(f))},hide:function(t,e){for(var n=(e=e||this).getElementsByClassName("waves-rippling"),r=0,o=n.length;r<o;r++)d(t,e,n[r]);i&&(e.removeEventListener("touchend",u.hide),e.removeEventListener("touchcancel",u.hide)),e.removeEventListener("mouseup",u.hide),e.removeEventListener("mouseleave",u.hide)}},c={input:function(t){var e=t.parentNode;if("span"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("span");n.className="waves-input-wrapper",e.replaceChild(n,t),n.appendChild(t)}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");e.replaceChild(n,t),n.appendChild(t)}}};function d(t,e,n){if(n){n.classList.remove("waves-rippling");var r=n.getAttribute("data-x"),i=n.getAttribute("data-y"),o=n.getAttribute("data-scale"),a=n.getAttribute("data-translate"),s=350-(Date.now()-Number(n.getAttribute("data-hold")));s<0&&(s=0),"mousemove"===t.type&&(s=150);var c="mousemove"===t.type?2500:u.duration;setTimeout((function(){var t={top:i+"px",left:r+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":o+" "+a,"-moz-transform":o+" "+a,"-ms-transform":o+" "+a,"-o-transform":o+" "+a,transform:o+" "+a};n.setAttribute("style",l(t)),setTimeout((function(){try{e.removeChild(n)}catch(t){return!1}}),c)}),s)}}var f={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&f.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?f.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout((function(){f.touches&&(f.touches-=1)}),500)}};function h(t){var e=function(t){if(!1===f.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(f.registerEvent(t),"touchstart"===t.type&&u.delay){var n=!1,r=setTimeout((function(){r=null,u.show(t,e)}),u.delay),o=function(i){r&&(clearTimeout(r),r=null,u.show(t,e)),n||(n=!0,u.hide(i,e)),s()},a=function(t){r&&(clearTimeout(r),r=null),o(t),s()};e.addEventListener("touchmove",a,!1),e.addEventListener("touchend",o,!1),e.addEventListener("touchcancel",o,!1);var s=function(){e.removeEventListener("touchmove",a),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",o)}}else u.show(t,e),i&&(e.addEventListener("touchend",u.hide,!1),e.addEventListener("touchcancel",u.hide,!1)),e.addEventListener("mouseup",u.hide,!1),e.addEventListener("mouseleave",u.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(u.duration=t.duration),"delay"in t&&(u.delay=t.delay),i&&(e.addEventListener("touchstart",h,!1),e.addEventListener("touchcancel",f.registerEvent,!1),e.addEventListener("touchend",f.registerEvent,!1)),e.addEventListener("mousedown",h,!1)},t.attach=function(t,e){var n,i;t=a(t),"[object Array]"===r.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var o=0,s=t.length;o<s;o++)i=(n=t[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(i)&&(c[i](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var n=(t=a(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,n)for(var r,i,o,l={},c=0,d={type:"mousedown",button:1},f=function(t,e){return function(){u.hide(t,e)}};c<n;c++)if(r=t[c],i=e.position||{x:r.clientWidth/2,y:r.clientHeight/2},o=s(r),l.x=o.left+i.x,l.y=o.top+i.y,d.pageX=l.x,d.pageY=l.y,u.show(d,r),e.wait>=0&&null!==e.wait){setTimeout(f({type:"mouseup",button:1},r),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},n=0,r=(t=a(t)).length;n<r;n++)u.hide(e,t[n])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t})),$(document).ready((function(){Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".chip",["waves-effect"]),Waves.attach(".view a .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init()}))}).call(this,n(87)(t))}]);
//# sourceMappingURL=mdb.min.js.map