/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses-shiv !*/
 !function(e,n,t){function a(e,n){return typeof e===n}function o(){var e,n,t,o,r,i,l;for(var c in A)if(A.hasOwnProperty(c)){if(e=[],n=A[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}function r(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),f?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)c(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var a=e.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),r([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],A=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){A.push({name:e,fn:n,options:t})},addAsyncTest:function(e){A.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var c,u=n.documentElement,f="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,a;for(e=0;e<t.length;e++)(a=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function a(n){var a=n&&"load"===n.type?1==o.width:!1,r="webp"===e;i(e,r&&a?new Boolean(a):a),t&&t(n)}var o=new Image;o.onerror=a,o.onload=a,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var a=0;a<n.length;a++)e(n[a].name,n[a].uri)})});f||!function(e,n){function t(e,n){var t=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return t.innerHTML="x<style>"+n+"</style>",a.insertBefore(t.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,n){var t=y.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=t+" "+e,l(n)}function r(e){var n=v[e[p]];return n||(n={},g++,e[p]=g,v[g]=n),n}function i(e,t,a){if(t||(t=n),u)return t.createElement(e);a||(a=r(t));var o;return o=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:a.frag.appendChild(o)}function s(e,t){if(e||(e=n),u)return e.createDocumentFragment();t=t||r(e);for(var o=t.frag.cloneNode(),i=0,s=a(),A=s.length;A>i;i++)o.createElement(s[i]);return o}function A(e,n){n.cache||(n.cache={},n.createElem=e.createElement,n.createFrag=e.createDocumentFragment,n.frag=n.createFrag()),e.createElement=function(t){return y.shivMethods?i(t,e,n):n.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,n.frag)}function l(e){e||(e=n);var a=r(e);return!y.shivCSS||c||a.hasCSS||(a.hasCSS=!!t(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||A(e,a),e}var c,u,f="3.7.3",d=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,v={};!function(){try{var e=n.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){n.createElement("a");var e=n.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:o};e.html5=y,l(n),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,n),o(),r(s),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);
"use strict";

function main() {
  a11yFocus();
  AMPEr.init({
    debugMode: true,
    language: "en",
    instantSettings: true,
    lexicon: {
      en: {
        infoPage: "/cookies",
        settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookie settings"
      }
    }
  });
}

var a11yFocus = function a11yFocus() {
  // Initially add the using mouse class, because most people do.
  document.documentElement.classList.add('using-mouse'); // Let the document know when the mouse is being used

  document.body.addEventListener('mousedown', function () {
    document.documentElement.classList.add('using-mouse');
  }); // Re-enable focus styling when Tab is pressed

  document.body.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      document.documentElement.classList.remove('using-mouse');
    }
  });
};

main();