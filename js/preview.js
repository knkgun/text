(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[196],{174:function(e,r,t){var o=t(376);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(87).default)("e7906548",o,!0,{})},175:function(e,r,t){var o=t(386);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(87).default)("5ba6a5c3",o,!0,{})},176:function(e,r,t){var o=t(388);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(87).default)("ed017fbc",o,!0,{})},371:function(e,r,t){"use strict";var o=t(170),i=t(173);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}function c(e,r){return!r||"object"!==n(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&u(e,r)}function u(e,r){return(u=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var f=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return p(r,e),l(r,[{key:"name",get:function(){return"strong"}}]),r}(i.b),m=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return p(r,e),l(r,[{key:"name",get:function(){return"em"}}]),r}(i.m),b=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return p(r,e),l(r,[{key:"schema",get:function(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",getAttrs:function(e){return"line-through"===e}}],toDOM:function(){return["s",0]},toMarkdown:{open:"~~",close:"~~",mixable:!0,expelEnclosingWhitespace:!0}}}}]),r}(i.r),h=["image/png","image/jpeg","image/gif","image/x-xbitmap","image/bmp","image/svg+xml"],y=function(e,r){var t=e.split("#")[1];if(void 0!==t){var o=t.split("&");if(void 0!==o)for(var i=0;i<o.length;i++){var n=o[i].split("=");if(decodeURIComponent(n[0])===r)return decodeURIComponent(n[1])}}},g={name:"ImageView",props:["node","updateAttrs","view"],data:function(){return{imageLoaded:!1,loaded:!1,failed:!1}},computed:{mimeIcon:function(){var e=y(this.src,"mimetype");return e?{backgroundImage:"url("+window.OC.MimeType.getIconUrl(e)+")"}:{}},isSupportedImage:function(){var e=y(this.src,"mimetype");return void 0===e||-1!==h.indexOf(e)},internalLinkOrImage:function(){var e=y(this.src,"fileId");return e?OC.generateUrl("/f/"+e):this.src},src:{get:function(){return this.node.attrs.src},set:function(e){this.updateAttrs({src:e})}},alt:{get:function(){return this.node.attrs.alt?this.node.attrs.alt:""},set:function(e){this.updateAttrs({alt:e})}},t:function(){return function(e,r){return window.t(e,r)}}},beforeMount:function(){var e=this;if(!this.isSupportedImage)return this.failed=!0,this.imageLoaded=!1,void(this.loaded=!0);var r=new Image;r.src=this.node.attrs.src,r.onload=function(){e.imageLoaded=!0},r.onerror=function(){e.failed=!0,e.imageLoaded=!1,e.loaded=!0}},methods:{updateAlt:function(){this.alt=this.$refs.altInput.value},onLoaded:function(){this.loaded=!0}}},v=(t(375),t(19)),j=Object(v.a)(g,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"image",class:{"icon-loading":!e.loaded},attrs:{"data-src":e.src}},[e.imageLoaded&&e.isSupportedImage?t("div",[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main",attrs:{src:e.src},on:{load:e.onLoaded}})]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1):t("div",{staticClass:"image__placeholder"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main"},[t("div",{staticClass:"icon-image",style:e.mimeIcon}),e._v(" "),t("p",[t("a",{attrs:{href:e.internalLinkOrImage,target:"_blank"}},[e._v(e._s(e.isSupportedImage?e.t("text","Show image"):e.t("text","Show file")))])])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1)])}),[],!1,null,"2ac49a8a",null).exports;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function P(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function O(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,r){return!r||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function _(e,r,t){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var o=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=S(e)););return e}(e,r);if(o){var i=Object.getOwnPropertyDescriptor(o,r);return i.get?i.get.call(t):i.value}})(e,r,t||e)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,r){return(E=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var C=function(e){function r(){return P(this,r),M(this,S(r).apply(this,arguments))}var t,o,i;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&E(e,r)}(r,e),t=r,(o=[{key:"view",get:function(){return j}},{key:"schema",get:function(){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},_(S(r.prototype),"schema",this),{selectable:!1})}}])&&O(t.prototype,o),i&&O(t,i),r}(i.l),z=t(177);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function A(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,r){return!r||"object"!==q(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,r){return(T=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var N=function(e){function r(){return I(this,r),R(this,D(r).apply(this,arguments))}var t,o,i;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&T(e,r)}(r,e),t=r,(o=[{key:"keys",value:function(){var e=this;return{Tab:function(r){return Object(z.c)("\t")(r,e.editor.view.dispatch,e.editor.view),!0}}}},{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block"}}}])&&A(t.prototype,o),i&&A(t,i),r}(o.g),L=t(179);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function W(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,r){return!r||"object"!==U(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,r){return(B=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var V=0,X=1,Y=function(e,r){return Object(L.findParentNode)((function(r){return r.type===e.nodes.list_item}))(r)},G=function(e){function r(){return $(this,r),F(this,J(r).apply(this,arguments))}var t,i,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&B(e,r)}(r,e),t=r,(i=[{key:"commands",value:function(e){var r=e.type,t=e.schema;return{bullet_list_item:function(){return function(e,o,i){return Object(z.q)(t.nodes.bullet_list,r)(e,o,i)}},todo_item:function(){return function(e,t,o){var i=e.schema,n=e.selection,a=n.$from,s=n.$to,l=a.blockRange(s),c=e.tr,d=Y(i,n);if(void 0===d&&(Object(z.q)(i.nodes.bullet_list,r)(e,(function(e){c=e}),o),d=Y(i,c.selection)),!l||void 0===d)return!1;c.setNodeMarkup(d.pos,i.nodes.list_item,{type:d.node.attrs.type===X?V:X}),c.scrollIntoView(),t&&t(c)}}}}},{key:"defaultOptions",get:function(){return{nested:!0}}},{key:"schema",get:function(){return{attrs:{done:{default:!1},type:{default:V}},draggable:!1,content:"paragraph block*",toDOM:function(e){if(e.attrs.type===V)return["li",0];var r={class:"checkbox-item"},t={type:"checkbox",class:"",contenteditable:!1};return e.attrs.done&&(t.checked=!0,r.class+=" checked"),["li",r,["input",t],["label",0]]},parseDOM:[{priority:100,tag:"li",getAttrs:function(e){var r=e.querySelector("input[type=checkbox]");return{done:r&&r.checked,type:r?X:V}}}],toMarkdown:function(e,r){r.attrs.type===X&&e.write("[".concat(r.attrs.done?"x":" ","] ")),e.renderContent(r)}}}},{key:"plugins",get:function(){return[new o.h({props:{handleClick:function(e,r,t){var o=e.state,i=o.schema,n=e.posAtCoords({left:t.clientX,top:t.clientY}),a=o.doc.resolve(n.pos),s=Object(L.findParentNodeClosestToPos)(a,(function(e){return e.type===i.nodes.list_item})),l="li"===t.target.tagName.toLowerCase();if(void 0!==s&&s.node.attrs.type===X&&l){var c=o.tr;c.setNodeMarkup(s.pos,i.nodes.list_item,{done:!s.node.attrs.done,type:X}),e.dispatch(c)}}}})]}}])&&W(t.prototype,i),n&&W(t,n),r}(i.o),H=t(377),K=t.n(H),Q=t(413),Z=t.n(Q),ee=t(414);function re(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,i=!1,n=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(e){i=!0,n=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw n}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function te(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ie(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){ne(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ne(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ae(e,r,t,o,i,n,a){try{var s=e[n](a),l=s.value}catch(e){return void t(e)}s.done?r(l):Promise.resolve(l).then(o,i)}t.d(r,"d",(function(){return ce})),t.d(r,"a",(function(){return le})),t.d(r,"b",(function(){return pe})),t.d(r,"e",(function(){return ue})),t.d(r,"c",(function(){return se}));
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var se=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var o,i,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[r],i={},n=0;case 3:if(!(n<o.length)){e.next=17;break}return e.prev=4,e.next=7,t(381)("./"+o[n]);case 7:a=e.sent,i[o[n]]=a.default,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",void 0);case 14:n++,e.next=3;break;case 17:if(0!==Object.keys(i).length||i.constructor!==Object){e.next=19;break}return e.abrupt("return",void 0);case 19:return e.abrupt("return",{languages:i});case 20:case"end":return e.stop()}}),e,null,[[4,11]])})),function(){var r=this,t=arguments;return new Promise((function(o,i){var n=e.apply(r,t);function a(e){ae(n,o,i,a,s,"next",e)}function s(e){ae(n,o,i,a,s,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),le=function(e){var r=e.content,t=e.onInit,n=e.onUpdate,a=e.extensions,s=e.enableRichEditing,l=e.languages,c=[];return c=s?[new i.i,new i.d,new f,new m,new b,new i.h,new i.k,new i.c,new i.p,new i.a,new i.e,new G,new i.n({openOnClick:!0}),new C,new i.q({emptyNodeClass:"is-empty",emptyNodeText:"Add notes, lists or links …",showOnlyWhenEditable:!0})]:[new N,new o.j,new i.f(ie({},l))],a=a||[],new o.a({content:r,onInit:t,onUpdate:n,extensions:[].concat(te(c),[new i.j]).concat(a),useBuiltInExtensions:s})},ce=K()("commonmark",{html:!1,breaks:!1}).enable("strikethrough").use(Z.a,{enable:!0,labelAfter:!0}),de=function(e){this.message=e},pe=function(e,r){var t=Object.entries(e).filter((function(e){return re(e,2)[1].toMarkdown})).reduce((function(e,r){var t=re(r,2);return ie({},e,ne({},t[0],t[1].toMarkdown))}),{}),o=Object.entries(r).filter((function(e){return re(e,2)[1].toMarkdown})).reduce((function(e,r){var t=re(r,2);return ie({},e,ne({},t[0],t[1].toMarkdown))}),{});return{serializer:new ee.a(ie({},ee.b.nodes,{},t),ie({},ee.b.marks,{},o)),serialize:function(e,r){return this.serializer.serialize(e,ie({},r,{tightLists:!0})).split("\\[").join("[").split("\\]").join("]")}}},ue=function(e){var r=e.getJSON();if(1!==r.content.length||void 0===r.content[0].content||1!==r.content[0].content.length){if("code_block"===r.content[0].type&&void 0===r.content[0].content)return"";throw new de("Failed to serialize document to plain text")}var t=r.content[0].content[0];if("text"!==t.type)throw new de("Failed to serialize document to plain text");return t.text}},375:function(e,r,t){"use strict";var o=t(174);t.n(o).a},376:function(e,r,t){(r=t(86)(!1)).push([e.i,".image[data-v-2ac49a8a]{margin:0;padding:0}.image__caption[data-v-2ac49a8a]{text-align:center;color:var(--color-text-lighter)}.image__caption input[type='text'][data-v-2ac49a8a]{width:100%;border:none;text-align:center}.icon-image[data-v-2ac49a8a]{margin-top:10px;height:32px;padding:20px;background-size:contain}.image__loading[data-v-2ac49a8a]{height:100px}.image__placeholder .image__main[data-v-2ac49a8a]{background-color:var(--color-background-dark);text-align:center;padding:20px;border-radius:var(--border-radius)}.image__placeholder .image__main .icon-image[data-v-2ac49a8a]{opacity:0.7}.fade-enter-active[data-v-2ac49a8a]{transition:opacity .3s ease-in-out}.fade-enter-to[data-v-2ac49a8a]{opacity:1}.fade-enter[data-v-2ac49a8a]{opacity:0}\n",""]),e.exports=r},381:function(e,r,t){var o={"./1c":[186,2],"./1c.js":[186,2],"./abnf":[187,3],"./abnf.js":[187,3],"./accesslog":[188,4],"./accesslog.js":[188,4],"./actionscript":[189,5],"./actionscript.js":[189,5],"./ada":[190,6],"./ada.js":[190,6],"./angelscript":[191,7],"./angelscript.js":[191,7],"./apache":[192,8],"./apache.js":[192,8],"./applescript":[193,9],"./applescript.js":[193,9],"./arcade":[194,10],"./arcade.js":[194,10],"./arduino":[195,11],"./arduino.js":[195,11],"./armasm":[196,12],"./armasm.js":[196,12],"./asciidoc":[197,13],"./asciidoc.js":[197,13],"./aspectj":[198,14],"./aspectj.js":[198,14],"./autohotkey":[199,15],"./autohotkey.js":[199,15],"./autoit":[200,16],"./autoit.js":[200,16],"./avrasm":[201,17],"./avrasm.js":[201,17],"./awk":[202,18],"./awk.js":[202,18],"./axapta":[203,19],"./axapta.js":[203,19],"./bash":[204,20],"./bash.js":[204,20],"./basic":[205,21],"./basic.js":[205,21],"./bnf":[206,22],"./bnf.js":[206,22],"./brainfuck":[207,23],"./brainfuck.js":[207,23],"./cal":[208,24],"./cal.js":[208,24],"./capnproto":[209,25],"./capnproto.js":[209,25],"./ceylon":[210,26],"./ceylon.js":[210,26],"./clean":[211,27],"./clean.js":[211,27],"./clojure":[213,28],"./clojure-repl":[212,29],"./clojure-repl.js":[212,29],"./clojure.js":[213,28],"./cmake":[214,30],"./cmake.js":[214,30],"./coffeescript":[215,31],"./coffeescript.js":[215,31],"./coq":[216,32],"./coq.js":[216,32],"./cos":[217,33],"./cos.js":[217,33],"./cpp":[218,34],"./cpp.js":[218,34],"./crmsh":[219,35],"./crmsh.js":[219,35],"./crystal":[220,36],"./crystal.js":[220,36],"./cs":[221,37],"./cs.js":[221,37],"./csp":[222,38],"./csp.js":[222,38],"./css":[223,39],"./css.js":[223,39],"./d":[224,40],"./d.js":[224,40],"./dart":[225,41],"./dart.js":[225,41],"./delphi":[226,42],"./delphi.js":[226,42],"./diff":[227,43],"./diff.js":[227,43],"./django":[228,44],"./django.js":[228,44],"./dns":[229,45],"./dns.js":[229,45],"./dockerfile":[230,46],"./dockerfile.js":[230,46],"./dos":[231,47],"./dos.js":[231,47],"./dsconfig":[232,48],"./dsconfig.js":[232,48],"./dts":[233,49],"./dts.js":[233,49],"./dust":[234,50],"./dust.js":[234,50],"./ebnf":[235,51],"./ebnf.js":[235,51],"./elixir":[236,52],"./elixir.js":[236,52],"./elm":[237,53],"./elm.js":[237,53],"./erb":[238,54],"./erb.js":[238,54],"./erlang":[240,55],"./erlang-repl":[239,56],"./erlang-repl.js":[239,56],"./erlang.js":[240,55],"./excel":[241,57],"./excel.js":[241,57],"./fix":[242,58],"./fix.js":[242,58],"./flix":[243,59],"./flix.js":[243,59],"./fortran":[244,60],"./fortran.js":[244,60],"./fsharp":[245,61],"./fsharp.js":[245,61],"./gams":[246,62],"./gams.js":[246,62],"./gauss":[247,63],"./gauss.js":[247,63],"./gcode":[248,64],"./gcode.js":[248,64],"./gherkin":[249,65],"./gherkin.js":[249,65],"./glsl":[250,66],"./glsl.js":[250,66],"./gml":[251,67],"./gml.js":[251,67],"./go":[252,68],"./go.js":[252,68],"./golo":[253,69],"./golo.js":[253,69],"./gradle":[254,70],"./gradle.js":[254,70],"./groovy":[255,71],"./groovy.js":[255,71],"./haml":[256,72],"./haml.js":[256,72],"./handlebars":[257,73],"./handlebars.js":[257,73],"./haskell":[258,74],"./haskell.js":[258,74],"./haxe":[259,75],"./haxe.js":[259,75],"./hsp":[260,76],"./hsp.js":[260,76],"./htmlbars":[261,77],"./htmlbars.js":[261,77],"./http":[262,78],"./http.js":[262,78],"./hy":[263,79],"./hy.js":[263,79],"./inform7":[264,80],"./inform7.js":[264,80],"./ini":[265,81],"./ini.js":[265,81],"./irpf90":[266,82],"./irpf90.js":[266,82],"./isbl":[267,83],"./isbl.js":[267,83],"./java":[268,84],"./java.js":[268,84],"./javascript":[269,85],"./javascript.js":[269,85],"./jboss-cli":[270,86],"./jboss-cli.js":[270,86],"./json":[271,87],"./json.js":[271,87],"./julia":[273,88],"./julia-repl":[272,89],"./julia-repl.js":[272,89],"./julia.js":[273,88],"./kotlin":[274,90],"./kotlin.js":[274,90],"./lasso":[275,91],"./lasso.js":[275,91],"./ldif":[276,92],"./ldif.js":[276,92],"./leaf":[277,93],"./leaf.js":[277,93],"./less":[278,94],"./less.js":[278,94],"./lisp":[279,95],"./lisp.js":[279,95],"./livecodeserver":[280,96],"./livecodeserver.js":[280,96],"./livescript":[281,97],"./livescript.js":[281,97],"./llvm":[282,98],"./llvm.js":[282,98],"./lsl":[283,99],"./lsl.js":[283,99],"./lua":[284,100],"./lua.js":[284,100],"./makefile":[285,101],"./makefile.js":[285,101],"./markdown":[286,102],"./markdown.js":[286,102],"./mathematica":[287,103],"./mathematica.js":[287,103],"./matlab":[288,104],"./matlab.js":[288,104],"./maxima":[289,105],"./maxima.js":[289,105],"./mel":[290,106],"./mel.js":[290,106],"./mercury":[291,107],"./mercury.js":[291,107],"./mipsasm":[292,108],"./mipsasm.js":[292,108],"./mizar":[293,109],"./mizar.js":[293,109],"./mojolicious":[294,110],"./mojolicious.js":[294,110],"./monkey":[295,111],"./monkey.js":[295,111],"./moonscript":[296,112],"./moonscript.js":[296,112],"./n1ql":[297,113],"./n1ql.js":[297,113],"./nginx":[298,114],"./nginx.js":[298,114],"./nimrod":[299,115],"./nimrod.js":[299,115],"./nix":[300,116],"./nix.js":[300,116],"./nsis":[301,117],"./nsis.js":[301,117],"./objectivec":[302,118],"./objectivec.js":[302,118],"./ocaml":[303,119],"./ocaml.js":[303,119],"./openscad":[304,120],"./openscad.js":[304,120],"./oxygene":[305,121],"./oxygene.js":[305,121],"./parser3":[306,122],"./parser3.js":[306,122],"./perl":[307,123],"./perl.js":[307,123],"./pf":[308,124],"./pf.js":[308,124],"./pgsql":[309,125],"./pgsql.js":[309,125],"./php":[310,126],"./php.js":[310,126],"./plaintext":[311,127],"./plaintext.js":[311,127],"./pony":[312,128],"./pony.js":[312,128],"./powershell":[313,129],"./powershell.js":[313,129],"./processing":[314,130],"./processing.js":[314,130],"./profile":[315,131],"./profile.js":[315,131],"./prolog":[316,132],"./prolog.js":[316,132],"./properties":[317,133],"./properties.js":[317,133],"./protobuf":[318,134],"./protobuf.js":[318,134],"./puppet":[319,135],"./puppet.js":[319,135],"./purebasic":[320,136],"./purebasic.js":[320,136],"./python":[321,137],"./python.js":[321,137],"./q":[322,138],"./q.js":[322,138],"./qml":[323,139],"./qml.js":[323,139],"./r":[324,140],"./r.js":[324,140],"./reasonml":[325,141],"./reasonml.js":[325,141],"./rib":[326,142],"./rib.js":[326,142],"./roboconf":[327,143],"./roboconf.js":[327,143],"./routeros":[328,144],"./routeros.js":[328,144],"./rsl":[329,145],"./rsl.js":[329,145],"./ruby":[330,146],"./ruby.js":[330,146],"./ruleslanguage":[331,147],"./ruleslanguage.js":[331,147],"./rust":[332,148],"./rust.js":[332,148],"./sas":[333,149],"./sas.js":[333,149],"./scala":[334,150],"./scala.js":[334,150],"./scheme":[335,151],"./scheme.js":[335,151],"./scilab":[336,152],"./scilab.js":[336,152],"./scss":[337,153],"./scss.js":[337,153],"./shell":[338,154],"./shell.js":[338,154],"./smali":[339,155],"./smali.js":[339,155],"./smalltalk":[340,156],"./smalltalk.js":[340,156],"./sml":[341,157],"./sml.js":[341,157],"./sqf":[342,158],"./sqf.js":[342,158],"./sql":[343,159],"./sql.js":[343,159],"./stan":[344,160],"./stan.js":[344,160],"./stata":[345,161],"./stata.js":[345,161],"./step21":[346,162],"./step21.js":[346,162],"./stylus":[347,163],"./stylus.js":[347,163],"./subunit":[348,164],"./subunit.js":[348,164],"./swift":[349,165],"./swift.js":[349,165],"./taggerscript":[350,166],"./taggerscript.js":[350,166],"./tap":[351,167],"./tap.js":[351,167],"./tcl":[352,168],"./tcl.js":[352,168],"./tex":[353,169],"./tex.js":[353,169],"./thrift":[354,170],"./thrift.js":[354,170],"./tp":[355,171],"./tp.js":[355,171],"./twig":[356,172],"./twig.js":[356,172],"./typescript":[357,173],"./typescript.js":[357,173],"./vala":[358,174],"./vala.js":[358,174],"./vbnet":[359,175],"./vbnet.js":[359,175],"./vbscript":[361,176],"./vbscript-html":[360,177],"./vbscript-html.js":[360,177],"./vbscript.js":[361,176],"./verilog":[362,178],"./verilog.js":[362,178],"./vhdl":[363,179],"./vhdl.js":[363,179],"./vim":[364,180],"./vim.js":[364,180],"./x86asm":[365,181],"./x86asm.js":[365,181],"./xl":[366,182],"./xl.js":[366,182],"./xml":[367,183],"./xml.js":[367,183],"./xquery":[368,184],"./xquery.js":[368,184],"./yaml":[369,185],"./yaml.js":[369,185],"./zephir":[370,186],"./zephir.js":[370,186]};function i(e){if(!t.o(o,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=o[e],i=r[0];return t.e(r[1]).then((function(){return t.t(i,7)}))}i.keys=function(){return Object.keys(o)},i.id=381,e.exports=i},385:function(e,r,t){"use strict";var o=t(175);t.n(o).a},386:function(e,r,t){(r=t(86)(!1)).push([e.i,'#read-only-editor{overflow:scroll}#read-only-editor div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}#read-only-editor div.ProseMirror[contenteditable=true],#read-only-editor div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}#read-only-editor div.ProseMirror .checkbox-item{display:flex;align-items:start}#read-only-editor div.ProseMirror .checkbox-item input[type=checkbox]{display:none}#read-only-editor div.ProseMirror .checkbox-item:before{content:\'\';display:inline-block;height:14px;width:14px;vertical-align:middle;border-radius:50%;margin:0 6px 3px 3px;margin-left:3px;border:1px solid #878787;content:"";position:relative;width:44px;height:44px;display:block;border-radius:1px;height:14px;width:14px;box-shadow:none !important;background-position:center}#read-only-editor div.ProseMirror .checkbox-item.checked:before{background-image:url("/core/css/../img/actions/checkbox-mark.svg");background-color:var(--color-primary-element)}#read-only-editor div.ProseMirror .checkbox-item label{display:block;flex-grow:1}#read-only-editor div.ProseMirror .checkbox-item label>*:first-child{margin-top:0}#read-only-editor div.ProseMirror li label.checkbox-label{width:100%;display:flex;margin-top:10px;margin-bottom:1em}#read-only-editor div.ProseMirror li label.checkbox-label:before{position:relative;top:2px}#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper{margin-bottom:-1em;width:100%}#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper>p{margin-top:-1px;margin-bottom:0;padding-bottom:10px}#read-only-editor div.ProseMirror p:first-child,#read-only-editor div.ProseMirror h1:first-child,#read-only-editor div.ProseMirror h2:first-child,#read-only-editor div.ProseMirror h3:first-child,#read-only-editor div.ProseMirror h4:first-child,#read-only-editor div.ProseMirror h5:first-child,#read-only-editor div.ProseMirror h6:first-child{margin-top:10px}#read-only-editor div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}#read-only-editor div.ProseMirror p{margin-bottom:1em;line-height:150%}#read-only-editor div.ProseMirror em{font-style:italic}#read-only-editor div.ProseMirror h1,#read-only-editor div.ProseMirror h2,#read-only-editor div.ProseMirror h3,#read-only-editor div.ProseMirror h4,#read-only-editor div.ProseMirror h5,#read-only-editor div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}#read-only-editor div.ProseMirror h1{font-size:36px;margin-top:48px}#read-only-editor div.ProseMirror h2{font-size:28px;margin-top:48px}#read-only-editor div.ProseMirror h3{font-size:24px}#read-only-editor div.ProseMirror h4{font-size:21px}#read-only-editor div.ProseMirror h5{font-size:17px}#read-only-editor div.ProseMirror h6{font-size:14px}#read-only-editor div.ProseMirror img{cursor:default;max-width:100%}#read-only-editor div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}#read-only-editor div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}#read-only-editor div.ProseMirror pre{white-space:pre;overflow-x:auto;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}#read-only-editor div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}#read-only-editor div.ProseMirror li{position:relative}#read-only-editor div.ProseMirror ul,#read-only-editor div.ProseMirror ol{padding-left:10px;margin-left:10px}#read-only-editor div.ProseMirror ul li{list-style-type:disc}#read-only-editor div.ProseMirror ul>li>ul>li{list-style-type:circle}#read-only-editor div.ProseMirror ul>li>ul>li ul li{list-style-type:square}#read-only-editor div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor{display:block}#read-only-editor .editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}.thumbnailContainer #read-only-editor{width:100%}.thumbnailContainer #read-only-editor .ProseMirror{height:auto;margin:0 0 0 0;padding:0}\n',""]),e.exports=r},387:function(e,r,t){"use strict";var o=t(176);t.n(o).a},388:function(e,r,t){(r=t(86)(!1)).push([e.i,'div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}div.ProseMirror[contenteditable=true],div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}div.ProseMirror .checkbox-item{display:flex;align-items:start}div.ProseMirror .checkbox-item input[type=checkbox]{display:none}div.ProseMirror .checkbox-item:before{content:\'\';display:inline-block;height:14px;width:14px;vertical-align:middle;border-radius:50%;margin:0 6px 3px 3px;margin-left:3px;border:1px solid #878787;content:"";position:relative;width:44px;height:44px;display:block;border-radius:1px;height:14px;width:14px;box-shadow:none !important;background-position:center}div.ProseMirror .checkbox-item.checked:before{background-image:url("/core/css/../img/actions/checkbox-mark.svg");background-color:var(--color-primary-element)}div.ProseMirror .checkbox-item label{display:block;flex-grow:1}div.ProseMirror .checkbox-item label>*:first-child{margin-top:0}div.ProseMirror li label.checkbox-label{width:100%;display:flex;margin-top:10px;margin-bottom:1em}div.ProseMirror li label.checkbox-label:before{position:relative;top:2px}div.ProseMirror li label.checkbox-label div.checkbox-wrapper{margin-bottom:-1em;width:100%}div.ProseMirror li label.checkbox-label div.checkbox-wrapper>p{margin-top:-1px;margin-bottom:0;padding-bottom:10px}div.ProseMirror p:first-child,div.ProseMirror h1:first-child,div.ProseMirror h2:first-child,div.ProseMirror h3:first-child,div.ProseMirror h4:first-child,div.ProseMirror h5:first-child,div.ProseMirror h6:first-child{margin-top:10px}div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}div.ProseMirror p{margin-bottom:1em;line-height:150%}div.ProseMirror em{font-style:italic}div.ProseMirror h1,div.ProseMirror h2,div.ProseMirror h3,div.ProseMirror h4,div.ProseMirror h5,div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}div.ProseMirror h1{font-size:36px;margin-top:48px}div.ProseMirror h2{font-size:28px;margin-top:48px}div.ProseMirror h3{font-size:24px}div.ProseMirror h4{font-size:21px}div.ProseMirror h5{font-size:17px}div.ProseMirror h6{font-size:14px}div.ProseMirror img{cursor:default;max-width:100%}div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}div.ProseMirror pre{white-space:pre;overflow-x:auto;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}div.ProseMirror li{position:relative}div.ProseMirror ul,div.ProseMirror ol{padding-left:10px;margin-left:10px}div.ProseMirror ul li{list-style-type:disc}div.ProseMirror ul>li>ul>li{list-style-type:circle}div.ProseMirror ul>li>ul>li ul li{list-style-type:square}div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}.ProseMirror-focused .ProseMirror-gapcursor{display:block}.editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}\n',""]),e.exports=r},521:function(e,r,t){"use strict";t.r(r);var o=t(170),i=t(372),n=t.n(i),a=t(371),s={name:"ReadOnlyEditor",components:{EditorContent:o.b},props:{content:{type:String,required:!0},isRichEditor:{type:Boolean,default:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=Object(a.a)({content:this.isRichEditor?a.d.render(this.content):"<pre>"+n()(this.content)+"</pre>",enableRichEditing:this.isRichEditor}),this.editor.setOptions({editable:!1})},beforeDestroy:function(){this.editor.destroy()}},l=(t(385),t(387),t(19)),c=Object(l.a)(s,(function(){var e=this.$createElement,r=this._self._c||e;return this.editor?r("EditorContent",{attrs:{id:"read-only-editor",editor:this.editor}}):this._e()}),[],!1,null,null,null);r.default=c.exports}}]);
//# sourceMappingURL=preview.js.map?v=bfb65c5e152b38a43ef7