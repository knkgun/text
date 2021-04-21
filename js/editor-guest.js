(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[196],{258:function(e,n,t){"use strict";t.r(n);var a=t(259),s=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n.default=s.a},259:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(t(179)),s=u(t(431)),i=t(22);function u(e){return e&&e.__esModule?e:{default:e}}var r={name:"GuestNameDialog",components:{Avatar:s.default},directives:{tooltip:a.default},props:{syncService:{type:Object,default:null}},data:()=>({guestName:"",guestNameBuffered:""}),computed:{avatarUrl(){const e=(0,i.generateUrl)("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+e}},beforeMount(){this.guestName=this.syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName(){const e=this.syncService.session.guestName;this.syncService.updateSession(this.guestName).then(()=>{localStorage.setItem("nick",this.guestName),this.updateBufferedGuestName()}).catch(n=>{this.guestName=e})},updateBufferedGuestName(){this.guestNameBuffered=this.guestName}}};n.default=r},842:function(e,n,t){"use strict";t.r(n);var a=t(897),s=t(258);for(var i in s)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return s[e]}))}(i);t(898);var u=t(12),r=Object(u.a)(s.default,a.a,a.b,!1,null,"51019f56",null);n.default=r.exports},878:function(e,n,t){"use strict";var a=t(20),s=t.n(a),i=t(21),u=t.n(i)()(s.a);u.push([e.i,"form.guest-name-dialog[data-v-51019f56]{display:flex;padding:6px}form.guest-name-dialog[data-v-51019f56] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-51019f56]{flex-grow:1}form.guest-name-dialog label[data-v-51019f56]{padding:3px;height:32px}\n","",{version:3,sources:["webpack://./src/components/GuestNameDialog.vue"],names:[],mappings:"AA4FA,wCACC,YAAa,CACb,WAAY,CAFb,4CAKE,mBAAoB,CALtB,yDASE,WAAY,CATd,8CAYE,WAAY,CACZ,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nform.guest-name-dialog {\n\tdisplay: flex;\n\tpadding: 6px;\n\n\t& /deep/ img {\n\t\tmargin: 0 !important;\n\t}\n\n\tinput[type=text] {\n\t\tflex-grow: 1;\n\t}\n\tlabel {\n\t\tpadding: 3px;\n\t\theight: 32px;\n\t}\n}\n"],sourceRoot:""}]),n.a=u},897:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return s}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("text","Enter your name so other users can see who is editing"),expression:"t('text', 'Enter your name so other users can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(n){return n.preventDefault(),e.setGuestName()}}},[t("label",[t("Avatar",{attrs:{url:e.avatarUrl,"disable-tooltip":!0,size:32}})],1),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":e.t("text","Edit guest name")},domProps:{value:e.guestName},on:{input:function(n){n.target.composing||(e.guestName=n.target.value)}}}),e._v(" "),t("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":e.t("text","Save guest name"),value:""}})])},s=[]},898:function(e,n,t){"use strict";var a=t(19),s=t.n(a),i=t(878),u={insert:"head",singleton:!1};s()(i.a,u),i.a.locals}}]);
//# sourceMappingURL=editor-guest.js.map?v=21e6888144f7bad5ba54