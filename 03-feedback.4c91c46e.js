!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequired7c6=r);var l=r("eaxEB"),n=document.querySelector(".feedback-form"),o=n.querySelector('input[name="email"]'),i=n.querySelector('textarea[name="message"]');n.addEventListener("input",s);var u="feedback-form-state";function s(){var e={email:o.value,message:i.value};localStorage.setItem(u,JSON.stringify(e))}var d=(l&&l.__esModule?l.default:l)(s,500);n.addEventListener("input",d),function(){var e=localStorage.getItem(u);if(e){var a=JSON.parse(e);o.value=a.email,i.value=a.message}else o.value="",i.value=""}(),n.addEventListener("submit",function(e){e.preventDefault(),console.log({email:o.value,message:i.value}),o.value="",i.value="",localStorage.removeItem(u)})}();//# sourceMappingURL=03-feedback.4c91c46e.js.map

//# sourceMappingURL=03-feedback.4c91c46e.js.map
