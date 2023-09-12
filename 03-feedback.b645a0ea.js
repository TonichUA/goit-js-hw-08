var t,e,r,n;t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},null==(n=t.parcelRequired7c6)&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var i={id:t,exports:{}};return e[t]=i,n.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=n),n.register("6aBn7",function(t,e){function r(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}Object.defineProperty(t.exports,"_",{get:function(){return r},set:void 0,enumerable:!0,configurable:!0})}),n.register("eaxEB",function(t,e){var r=n("bcKj3"),i=n("iPGxy");t.exports=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(t,e,n){var o=!0,u=!0;if("function"!=typeof t)throw TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:o,maxWait:e,trailing:u})}}),n.register("bcKj3",function(t,e){var r=n("iPGxy"),i=n("2qILW"),o=n("jHNCP"),u=Math.max,f=Math.min;t.exports=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(t,e,n){var c,a,s,l,d,p,v=0,g=!1,x=!1,b=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var r=c,n=a;return c=a=void 0,v=e,l=t.apply(n,r)}function j(t){var r=t-p,n=t-v;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===p||r>=e||r<0||x&&n>=s}function m(){var t,r,n,o=i();if(j(o))return T(o);// Restart the timer.
d=setTimeout(m,(t=o-p,r=o-v,n=e-t,x?f(n,s-r):n))}function T(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(d=void 0,b&&c)?y(t):(c=a=void 0,l))}function h(){var t,r=i(),n=j(r);if(c=arguments,a=this,p=r,n){if(void 0===d)return(// Reset any `maxWait` timer.
v=t=p,// Start the timer for the trailing edge.
d=setTimeout(m,e),g?y(t):l);if(x)return(// Handle invocations in a tight loop.
clearTimeout(d),d=setTimeout(m,e),y(p))}return void 0===d&&(d=setTimeout(m,e)),l}return e=o(e)||0,r(n)&&(g=!!n.leading,s=(x="maxWait"in n)?u(o(n.maxWait)||0,e):s,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==d&&clearTimeout(d),v=0,c=p=a=d=void 0},h.flush=function(){return void 0===d?l:T(i())},h}}),n.register("iPGxy",function(t,e){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */var r=n("6aBn7");t.exports=function(t){var e=void 0===t?"undefined":(0,r._)(t);return null!=t&&("object"==e||"function"==e)}}),n.register("2qILW",function(t,e){var r=n("8ThvE");t.exports=function(){return r.Date.now()}}),n.register("8ThvE",function(t,e){var r=n("lyxRX"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o}),n.register("lyxRX",function(e,r){/** Detect free variable `global` from Node.js. */var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}),n.register("jHNCP",function(t,e){var r=n("56xwF"),i=n("iPGxy"),o=n("fJcS8"),u=0/0,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt;t.exports=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(t){if("number"==typeof t)return t;if(o(t))return u;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||a.test(t)?s(t.slice(2),n?2:8):f.test(t)?u:+t}}),n.register("56xwF",function(t,e){var r=n("buQd6"),i=/^\s+/;t.exports=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}}),n.register("buQd6",function(t,e){/** Used to match a single whitespace character. */var r=/\s/;t.exports=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}}),n.register("fJcS8",function(t,e){var r=n("6aBn7"),i=n("bqTr0"),o=n("7fzPz");t.exports=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(t){return(void 0===t?"undefined":(0,r._)(t))=="symbol"||o(t)&&"[object Symbol]"==i(t)}}),n.register("bqTr0",function(t,e){var r=n("dMG0A"),i=n("kQpjz"),o=n("cE2HS"),u=r?r.toStringTag:void 0;t.exports=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?i(t):o(t)}}),n.register("dMG0A",function(t,e){/** Built-in value references. */var r=n("8ThvE").Symbol;t.exports=r}),n.register("kQpjz",function(t,e){var r=n("dMG0A"),i=Object.prototype,o=i.hasOwnProperty,u=i.toString,f=r?r.toStringTag:void 0;t.exports=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(t){var e=o.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(t){}var i=u.call(t);return n&&(e?t[f]=r:delete t[f]),i}}),n.register("cE2HS",function(t,e){/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var r=Object.prototype.toString;t.exports=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(t){return r.call(t)}}),n.register("7fzPz",function(t,e){t.exports=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(t){return null!=t&&"object"==typeof t}});//# sourceMappingURL=03-feedback.b645a0ea.js.map

//# sourceMappingURL=03-feedback.b645a0ea.js.map
