function t(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,_=f?f.emptyScript:"",g=m.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:a}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),a=e.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=n;const o=a.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,a){if(void 0!==t){const o=this.constructor;if(!1===n&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,g?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,$=t=>t,E=A.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+O,S=`<${T}>`,M=document,I=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,P="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,U=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,D=/"/g,F=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),B=new WeakMap,W=M.createTreeWalker(M,129);function q(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,n=[];let a,o=2===e?"<svg>":3===e?"<math>":"",s=j;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===j?"!--"===l[1]?s=R:void 0!==l[1]?s=z:void 0!==l[2]?(F.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=a??j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?U:'"'===l[3]?D:V):s===D||s===V?s=U:s===R||s===z?s=j:(s=U,a=void 0);const u=s===U&&t[e+1].startsWith("/>")?" ":"";o+=s===j?i+S:c>=0?(n.push(r),i.slice(0,c)+C+i.slice(c)+O+u):i+O+(-2===c?e:u)}return[q(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,o=0;const s=t.length-1,r=this.parts,[l,c]=K(t,e);if(this.el=X.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=W.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=n.getAttribute(t).split(O),s=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(O)&&(r.push({type:6,index:a}),n.removeAttribute(t));if(F.test(n.tagName)){const t=n.textContent.split(O),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],I()),W.nextNode(),r.push({type:2,index:++a});n.append(t[e],I())}}}else if(8===n.nodeType)if(n.data===T)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(O,t+1));)r.push({type:7,index:a}),t+=O.length-1}a++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,n){if(e===G)return e;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=N(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,n)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??M).importNode(e,!0);W.currentNode=n;let a=W.nextNode(),o=0,s=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Q(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new at(a,this,t)),this._$AV.push(e),r=i[++s]}o!==r?.index&&(a=W.nextNode(),o++)}return W.currentNode=M,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),N(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new J(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new X(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new Q(this.O(I()),this.O(I()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,a){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,n){const a=this.strings;let o=!1;if(void 0===a)t=Z(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==G,o&&(this._$AH=t);else{const n=t;let s,r;for(t=a[0],s=0;s<a.length-1;s++)r=Z(this,n[i+s],e,s),r===G&&(r=this._$AH[s]),o||=!N(r)||r!==this._$AH[s],r===Y?t=Y:t!==Y&&(t+=(r??"")+a[s+1]),this._$AH[s]=r}o&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class nt extends tt{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Y)===G)return;const i=this._$AH,n=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Y&&(i===Y||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}let at=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}};const ot=A.litHtmlPolyfillSupport;ot?.(X,Q),(A.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let a=n._$litPart$;if(void 0===a){const t=i?.renderBefore??null;n._$litPart$=a=new Q(e.insertBefore(I(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const lt=st.litElementPolyfillSupport;lt?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ut=(t=dt,e,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];e.call(this,i),this.requestUpdate(n,a,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ht({...t,state:!0,attribute:!1})}var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",indoor:"Indoor",on:"On",off:"Off",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Heat",cool:"Cool",dry:"Dry",fan:"Fan",playing:"Playing",paused:"Pause",idle:"Cast",presence:"Motion",off_presence:"No motion",today_at:"Today at",yesterday_at:"Yesterday at",open:"Open",closed:"Closed",opening:"Opening",closing:"Closing",active:"Active",inactive:"Inactive",info_device:"Device Information",related:"Related Integration",hidden:"Hide"},ft={automatic_action:"Enable automatic actions",tap_action_title:"Action on tap",hold_action_title:"Action on hold",double_tap_action_title:"Action on double tap",toggle:"Single click (On/Off)",more_info:"Show entity info",navigate:"Navigate to a page",call_service:"Run a service",fire_dom:"Fire DOM event",assist:"Activate voice assistant",url:"Open link or website",none:"No action",google_home:"Open Google Home",settings:"Open Settings",select_option:"Select option",warning:"⚠️ Advanced actions (JS, [[[]]], complex call-services) must be configured via YAML."},_t={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url"},gt={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct",false:"Not Active",true:"Active",auto:"Auto"},vt={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer, Ventilation...",automation:"Autonomation",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"State",action:"Action",app_version:"Material Components Version"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"}},bt={name:"Card Name",entity_card:"Use card as entity",entity:"Entity",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."}},yt={name:"Card Name",control_type:"Control Type",type:{light:"Light",cover:"Cover"},entity:"Entity to control",icon:"Custom icon (if left empty, changes automatically based on On/Off state)",percentage:"Display value as percentage",bold_text:"Bold style for the text"},xt={on_text:"Text for Lights ON",off_text:"Text for Lights OFF",control_area:"Control a specific Area",area_id:"Area to control"},wt={media_card:{no_content:"Nothing is playing",playing:"Now playing"},remote:"Open Remote",cast:"Cast screen",stop_cast:"Stop casting",open:"Open ",open_google:"Open Google Home"},At={user_title:"Show user location on the map",user_description:"If enabled, non-admin users will be able to see the location of other users on the map by clicking on their cards. If disabled, location information will not be visible to non-admin users.",add_button_title:"Show add user button",add_button_description:"If enabled, non-admin users will also be able to see the button to add a new user. However, non-admin users will not be able to complete the addition and will be redirected to their own profile page. If disabled, the button will only be visible to users with administrative privileges."},$t={common:mt,actions:ft,material_dashboard_card:_t,material_climate_card:gt,material_button_card:vt,material_control_card:bt,material_slider_card:yt,material_lights_card:xt,material_media_overlay:wt,material_users_card:At},Et={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",indoor:"Interno",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Riscalda",dry:"Deumidificatore",cool:"Raffresca",fan:"Ventilazione",playing:"Riproduzione",paused:"Pausa",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento",today_at:"Oggi alle",yesterday_at:"Ieri alle",open:"Aperto",closed:"Chiuso",opening:"Apertura",closing:"Chiusura",active:"Attivo",inactive:"Inattivo",info_device:"Informazioni Dispositivo",related:"Integrazione Correlata",hidden:"Nascondi"},kt={automatic_action:"Attiva azioni automatiche",tap_action_title:"Azione al clic",hold_action_title:"Azione alla pressione prolungata",double_tap_action_title:"Azione al doppio clic",toggle:"Clic singolo (Accensione/Spegnimento)",more_info:"Mostra info entità",navigate:"Naviga verso una pagina",call_service:"Esegui un servizio",fire_dom:"Genera evento DOM",assist:"Attiva assistente vocale",url:"Apri link o sito web",none:"Nessuna azione",google_home:"Apri Google Home",settings:"Apri Impostazioni",select_option:"Seleziona opzione",warning:"⚠️ Azioni avanzate (JS, [[[]]], call-service complessi) devono essere configurate tramite YAML."},Ct={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url"},Ot={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta",false:"Non attivo",true:"Attivo",auto:"Automatico"},Tt={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Climatizzazione, Ventilazione...",automation:"Autonomazioni",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"Stato",action:"Azioni",app_version:"Versione Material Home Components"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"}},St={name:"Nome della Scheda",entity_card:"Usa la scheda come entità",entity:"Entità",dual_icon:{default:"Usa l'icona predefinita",options:"Usa icona doppia (stati Attivo e Disattivo)."}},Mt={name:"Nome della Card",control_type:"Tipo di controllo",type:{light:"Luci",cover:"Tapparelle"},entity:"Entità da controllare",icon:"Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",percentage:"Mostra la percentuale di valore",bold_text:"Testo con stile in grassetto"},It={on_text:"Testo per Luci Accese",off_text:"Testo per Luci Spente",control_area:"Controlla una specifica Area",area_id:"Area da controllare"},Nt={media_card:{no_content:"Nessun contenuto in riproduzione",playing:"Ora in riproduzione"},remote:"Apri il telecomando",cast:"Trasmetti schermo",stop_cast:"Interrompi trasmissione",open:"Apri",open_google:"Apri Google Home"},Lt={user_title:"Mostra posizione utenti sulla mappa",user_description:"Se abilitata, gli utenti non amministratori potranno visualizzare la posizione degli altri utenti sulla mappa cliccando sulle loro card. Se disabilitata, le informazioni di localizzazione non saranno visibili agli utenti non admin.",add_button_title:"Mostra bottone aggiungi utente",add_button_description:"Se abilitata, anche gli utenti non amministratori potranno visualizzare il bottone per aggiungere un nuovo utente. Tuttavia, gli utenti non admin non potranno completare l'aggiunta e saranno reindirizzati alla propria pagina profilo. Se disabilitata, il bottone sarà visibile solo agli utenti con privilegi amministrativi."},Pt={common:Et,actions:kt,material_dashboard_card:Ct,material_climate_card:Ot,material_button_card:Tt,material_control_card:St,material_slider_card:Mt,material_lights_card:It,material_media_overlay:Nt,material_users_card:Lt},jt={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Afficher l’avertissement",no_entity_set:"Aucune entité définie",no_entity:"Entité non disponible",indoor:"Intérieur",on:"Allumé",off:"Éteint",offline:"Hors ligne",auto:"Auto",eco:"Éco",heat:"Chauffage",dry:"Déshumidificateur",cool:"Climatisation",fan:"Ventilation",playing:"Lecture",paused:"Pause",idle:"Cast",presence:"Mouvement",off_presence:"Aucun mouvement",today_at:"Aujourd’hui à",yesterday_at:"Hier à",open:"Ouvert",closed:"Fermé",opening:"Ouverture",closing:"Fermeture",active:"Actif",inactive:"Inactif",info_device:"Informations sur l'appareil",related:"Intégration Connexe",hidden:"Masquer"},Rt={automatic_action:"Activer actions automatiques",tap_action_title:"Action au clic",hold_action_title:"Action lors du maintien",double_tap_action_title:"Action au double clic",toggle:"Clic unique (Marche/Arrêt)",more_info:"Afficher infos entité",navigate:"Naviguer vers une page",call_service:"Exécuter un service",fire_dom:"Déclencher événement DOM",assist:"Activer assistant vocal",url:"Ouvrir lien ou site web",none:"Aucune action",google_home:"Ouvrir Google Home",settings:"Ouvrir paramètres",select_option:"Sélectionner option",warning:"⚠️ Les actions avancées (JS, [[[]]], appels de service complexes) doivent être configurées via YAML."},zt={description:"Configurer le chemin de navigation lorsqu’une carte est cliquée.",cameras:"Chemin des caméras",cameras_name:"Caméras",lighting:"Chemin des lumières",lighting_name:"Éclairage",lighting_label:"Lumières",wifi:"Chemin Wi-Fi",wifi_name:"Wi-Fi",climate:"Chemin du climat",climate_name:"Climatisation",device:"Appareil",devices:"Appareils",placeholder:"./chemin-ou-url"},Ut={name:"Nom de l’entité",entity:"Entité",theme:"Utiliser Material Expressive",increase_temp:"Augmenter la température (ex. 0.5)",decrease_temp:"Diminuer la température (ex. 0.5)",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},fix_temperature:"Activer si la température n’est pas correcte",false:"Inactif",true:"Actif",auto:"Automatique"},Vt={name:"Nom de l’entité",control_type:"Type de contrôle",type:{generic:"Générique (Interrupteur, Bouton...)",thermometer:"Climatisation, Ventilation...",automation:"Automatisations",scene:"Scènes",media:"Multimédia (Google, Alexa...)",state:"État",action:"Actions",app_version:"Version Google Components"},dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},dual_text:{default:"Utiliser le texte par défaut",text_on:"Texte ON",text_off:"Texte OFF"}},Dt={name:"Nom de la carte",entity_card:"Utiliser la carte comme entité",entity:"Entité",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (États actif et inactif)."}},Ft={name:"Nom de la carte",control_type:"Type de contrôle",type:{light:"Lumières",cover:"Volets roulants"},entity:"Entité à contrôler",icon:"Icône personnalisée (si vide, change automatiquement selon l’état On/Off)",percentage:"Afficher la valeur en pourcentage",bold_text:"Texte en gras"},Ht={on_text:"Texte pour lumières allumées",off_text:"Texte pour lumières éteintes",control_area:"Contrôler une zone spécifique",area_id:"Zone à contrôler"},Gt={media_card:{no_content:"Aucun contenu en lecture",playing:"En lecture"},remote:"Ouvrir la télécommande",cast:"Caster l’écran",stop_cast:"Arrêter la diffusion",open:"Ouvrir",open_google:"Ouvrir Google Home"},Yt={user_title:"Afficher la position des utilisateurs sur la carte",user_description:"Si activé, les utilisateurs non administrateurs pourront voir la position des autres utilisateurs sur la carte en cliquant sur leurs cartes. Si désactivé, les informations de localisation ne seront pas visibles pour les utilisateurs non administrateurs.",add_button_title:"Afficher le bouton d'ajout d'utilisateur",add_button_description:"Si activé, les utilisateurs non administrateurs pourront également voir le bouton pour ajouter un nouvel utilisateur. Cependant, les utilisateurs non administrateurs ne pourront pas compléter l'ajout et seront redirigés vers leur propre page de profil. Si désactivé, le bouton ne sera visible que pour les utilisateurs disposant de privilèges administratifs."},Bt={common:jt,actions:Rt,material_dashboard_card:zt,material_climate_card:Ut,material_button_card:Vt,material_control_card:Dt,material_slider_card:Ft,material_lights_card:Ht,material_media_overlay:Gt,material_users_card:Yt},Wt={version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"Mostrar advertencia",no_entity_set:"Entidad no configurada",no_entity:"Entidad no disponible",indoor:"Interior",on:"Encendido",off:"Apagado",offline:"Desconectado",auto:"Auto",eco:"Eco",heat:"Calefacción",dry:"Deshumidificador",cool:"Refrigeración",fan:"Ventilación",playing:"Reproduciendo",paused:"Pause",idle:"Cast",presence:"Movimiento",off_presence:"Sin movimiento",today_at:"Hoy a las",yesterday_at:"Ayer a las",open:"Abierto",closed:"Cerrado",opening:"Apertura",closing:"Cierre",active:"Activo",inactive:"Inactivo",info_device:"Información del Dispositivo",related:"Integración Relacionada",hidden:"Ocultar"},qt={automatic_action:"Activar acciones automáticas",tap_action_title:"Acción al clic",hold_action_title:"Acción al mantener presionado",double_tap_action_title:"Acción al doble clic",toggle:"Clic único (Encender/Apagar)",more_info:"Mostrar info de entidad",navigate:"Navegar a una página",call_service:"Ejecutar servicio",fire_dom:"Disparar evento DOM",assist:"Activar asistente de voz",url:"Abrir enlace o web",none:"Sin acción",google_home:"Abrir Google Home",settings:"Abrir configuración",select_option:"Seleccionar opción",warning:"⚠️ Las acciones avanzadas (JS, [[[]]], servicios de llamada complejos) deben configurarse mediante YAML."},Kt={description:"Configura la ruta de navegación cuando se hace clic en una tarjeta.",cameras:"Ruta de cámaras",cameras_name:"Cámaras",lighting:"Ruta de luces",lighting_name:"Iluminación",lighting_label:"Luces",wifi:"Ruta Wi-Fi",wifi_name:"Wi-Fi",climate:"Ruta del clima",climate_name:"Climatización",device:"Dispositivo",devices:"Dispositivos",placeholder:"./ruta-o-url"},Xt={name:"Nombre de la entidad",entity:"Entidad",theme:"Usar Material Expressive",increase_temp:"Aumentar temperatura (ej. 0.5)",decrease_temp:"Disminuir temperatura (ej. 0.5)",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Elemento encendido y apagado)."},fix_temperature:"Activar si la temperatura no es correcta",false:"Inactivo",true:"Activo",auto:"Automático"},Zt={name:"Nombre de la entidad",control_type:"Tipo de control",type:{generic:"Genérico (Interruptor, Botón...)",thermometer:"Climatización, Ventilación...",automation:"Automatizaciones",scene:"Escenas",media:"Multimedia (Google, Alexa...)",state:"Estado",action:"Acciones",app_version:"Versión Google Components"},dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Encendido y Apagado)."},dual_text:{default:"Usar texto por defecto",text_on:"Texto ON",text_off:"Texto OFF"}},Jt={name:"Nombre de la tarjeta",entity_card:"Usar la tarjeta como entidad",entity:"Entidad",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Activo e Inactivo)."}},Qt={name:"Nombre de la tarjeta",control_type:"Tipo de control",type:{light:"Luces",cover:"Persianas"},entity:"Entidad a controlar",icon:"Icono personalizado (si está vacío, cambia automáticamente según el estado On/Off)",percentage:"Mostrar valor en porcentaje",bold_text:"Texto en negrita"},te={on_text:"Texto para luces encendidas",off_text:"Texto para luces apagadas",control_area:"Controlar un Área específica",area_id:"Área a controlar"},ee={media_card:{no_content:"Sin contenido en reproducción",playing:"Reproduciendo ahora"},remote:"Abrir mando a distancia",cast:"Transmitir pantalla",stop_cast:"Detener transmisión",open:"Abrir",open_google:"Abrir Google Home"},ie={user_title:"Mostrar ubicación de usuarios en el mapa",user_description:"Si está habilitado, los usuarios que no son administradores podrán ver la ubicación de otros usuarios en el mapa haciendo clic en sus tarjetas. Si está deshabilitado, la información de ubicación no será visible para los usuarios que no son administradores.",add_button_title:"Mostrar botón de agregar usuario",add_button_description:"Si está habilitado, los usuarios que no son administradores también podrán ver el botón para agregar un nuevo usuario. Sin embargo, los usuarios no administradores no podrán completar la adición y serán redirigidos a su propia página de perfil. Si está deshabilitado, el botón solo será visible para los usuarios con privilegios administrativos."},ne={common:Wt,actions:qt,material_dashboard_card:Kt,material_climate_card:Xt,material_button_card:Zt,material_control_card:Jt,material_slider_card:Qt,material_lights_card:te,material_media_overlay:ee,material_users_card:ie},ae={version:"Version",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung anzeigen",no_entity_set:"Keine Entität gesetzt",no_entity:"Entität nicht verfügbar",indoor:"Innen",on:"Ein",off:"Aus",offline:"Offline",auto:"Automatisch",eco:"Eco",heat:"Heizen",dry:"Entfeuchter",cool:"Kühlen",fan:"Ventilation",playing:"Wiedergabe",paused:"Pause",idle:"Cast",presence:"Bewegung",off_presence:"Keine Bewegung",today_at:"Heute um",yesterday_at:"Gestern um",open:"Offen",closed:"Geschlossen",opening:"Öffnung",closing:"Schluss",active:"Aktiv",inactive:"Inaktiv",info_device:"Geräteinformationen",related:"Zugehörige Integration",hidden:"Ausblenden"},oe={automatic_action:"Automatische Aktionen aktivieren",tap_action_title:"Aktion beim Klicken",hold_action_title:"Aktion beim Halten",double_tap_action_title:"Aktion beim Doppelklick",toggle:"Einfacher Klick (An/Aus)",more_info:"Entitätsinfo anzeigen",navigate:"Zu Seite navigieren",call_service:"Dienst ausführen",fire_dom:"DOM-Ereignis auslösen",assist:"Sprachassistent aktivieren",url:"Link oder Webseite öffnen",none:"Keine Aktion",google_home:"Google Home öffnen",settings:"Einstellungen öffnen",select_option:"Option auswählen",warning:"⚠️ Erweiterte Aktionen (JS, [[[]]], komplexe Call-Services) müssen über YAML konfiguriert werden."},se={description:"Konfiguriere den Navigationspfad, wenn eine Karte angeklickt wird.",cameras:"Kamerapfad",cameras_name:"Kameras",lighting:"Lichtpfad",lighting_name:"Beleuchtung",lighting_label:"Lichter",wifi:"Wi-Fi-Pfad",wifi_name:"Wi-Fi",climate:"Klima-Pfad",climate_name:"Klimatisierung",device:"Gerät",devices:"Geräte",placeholder:"./pfad-oder-url"},re={name:"Entitätsname",entity:"Entität",theme:"Material Expressive verwenden",increase_temp:"Temperatur erhöhen (z.B. 0.5)",decrease_temp:"Temperatur senken (z.B. 0.5)",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},fix_temperature:"Aktivieren, wenn die Temperatur nicht korrekt ist",false:"Inaktiv",true:"Aktiv",auto:"Automatisch"},le={name:"Entitätsname",control_type:"Steuerungstyp",type:{generic:"Generisch (Schalter, Knopf...)",thermometer:"Klimatisierung, Belüftung...",automation:"Automatisierungen",scene:"Szenen",media:"Medien (Google, Alexa...)",state:"Status",action:"Aktionen",app_version:"Google Components Version"},dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},dual_text:{default:"Standardtext verwenden",text_on:"Text Ein",text_off:"Text Aus"}},ce={name:"Kartenname",entity_card:"Karte als Entität verwenden",entity:"Entität",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Aktiv/Inaktiv)."}},de={name:"Kartenname",control_type:"Steuerungstyp",type:{light:"Lichter",cover:"Rollos"},entity:"Zu steuernde Entität",icon:"Benutzerdefiniertes Symbol (wenn leer, ändert sich automatisch je nach On/Off-Zustand)",percentage:"Wert in Prozent anzeigen",bold_text:"Text fett formatieren"},ue={on_text:"Text für eingeschaltete Lichter",off_text:"Text für ausgeschaltete Lichter",control_area:"Einen bestimmten Bereich steuern",area_id:"Zu steuernder Bereich"},he={media_card:{no_content:"Keine Wiedergabeinhalte",playing:"Jetzt wiedergegeben"},remote:"Fernbedienung öffnen",cast:"Bildschirm übertragen",stop_cast:"Übertragung stoppen",open:"Öffnen",open_google:"Google Home öffnen"},pe={user_title:"Benutzerstandort auf der Karte anzeigen",user_description:"Wenn aktiviert, können Nicht-Administratoren den Standort anderer Benutzer auf der Karte sehen, indem sie auf deren Karten klicken. Wenn deaktiviert, sind Standortinformationen für Nicht-Administratoren nicht sichtbar.",add_button_title:"Schaltfläche zum Hinzufügen von Benutzern anzeigen",add_button_description:"Wenn aktiviert, können auch Nicht-Administratoren die Schaltfläche zum Hinzufügen eines neuen Benutzers sehen. Nicht-Administratoren können das Hinzufügen jedoch nicht abschließen und werden auf ihre eigene Profilseite weitergeleitet. Wenn deaktiviert, ist die Schaltfläche nur für Benutzer mit Administratorrechten sichtbar."},me={common:ae,actions:oe,material_dashboard_card:se,material_climate_card:re,material_button_card:le,material_control_card:ce,material_slider_card:de,material_lights_card:ue,material_media_overlay:he,material_users_card:pe},fe={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Mostrar Aviso",no_entity_set:"Entidade não definida",no_entity:"Entidade não disponível",indoor:"Interno",on:"Ligado",off:"Desligado",offline:"Offline",auto:"Automático",eco:"Eco",heat:"Aquecer",cool:"Refrigerar",dry:"Secar",fan:"Ventilação",playing:"Reproduzindo",paused:"Pausado",idle:"Transmitir",presence:"Movimento",off_presence:"Sem movimento",today_at:"Hoje às",yesterday_at:"Ontem às",open:"Aberto",closed:"Fechado",opening:"Abrindo",closing:"Fechando",active:"Ativo",inactive:"Inativo",info_device:"Informações do Dispositivo",related:"Integração Relacionada",hidden:"Ocultar"},_e={automatic_action:"Habilitar ações automáticas",tap_action_title:"Ação ao tocar",hold_action_title:"Ação ao manter pressionado",double_tap_action_title:"Ação ao tocar duas vezes",toggle:"Clique simples (Ligar/Desligar)",more_info:"Mostrar informações da entidade",navigate:"Navegar para uma página",call_service:"Executar um serviço",fire_dom:"Disparar evento DOM",assist:"Ativar assistente de voz",url:"Abrir link ou site",none:"Nenhuma ação",google_home:"Abrir Google Home",settings:"Abrir Configurações",select_option:"Selecionar opção",warning:"⚠️ Ações avançadas (JS, [[[]]], call-services complexos) devem ser configuradas via YAML."},ge={description:"Configure o caminho de navegação quando um cartão é tocado.",cameras:"Caminho das Câmeras",cameras_name:"Câmeras",lighting:"Caminho da Iluminação",lighting_name:"Iluminação",lighting_label:"Luzes",wifi:"Caminho do Wi-Fi",wifi_name:"Wi-Fi",climate:"Caminho da Climatização",climate_name:"Climatização",device:"Dispositivo",devices:"Dispositivos",placeholder:"./caminho-ou-url"},ve={name:"Nome da Entidade",entity:"Entidade",theme:"Usar Material Expressive",increase_temp:"Aumentar Temperatura (ex: 0.5)",decrease_temp:"Diminuir Temperatura (ex: 0.5)",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."},fix_temperature:"Habilitar se a temperatura não estiver correta",false:"Inativo",true:"Ativo",auto:"Automático"},be={name:"Nome da Entidade",control_type:"Tipo de Controle",type:{generic:"Genérico (Interruptor, Botão...)",thermometer:"Termômetro, Ventilação...",automation:"Automação",scene:"Cena",media:"Multimídia (Google, Alexa...)",state:"Estado",action:"Ação",app_version:"Versão dos Componentes Material"},dual_icon:{default:"Usar ícone padrão",options:"Usar ícone duplo (Elemento Ligado e Elemento Desligado)."},dual_text:{default:"Usar Texto Padrão",text_on:"Texto Ligado",text_off:"Texto Desligado"}},ye={name:"Nome do Cartão",entity_card:"Usar cartão como entidade",entity:"Entidade",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."}},xe={name:"Nome do Cartão",control_type:"Tipo de Controle",type:{light:"Luz",cover:"Persiana"},entity:"Entidade a controlar",icon:"Ícone personalizado (se deixado em branco, muda automaticamente com base no estado Ligado/Desligado)",percentage:"Exibir valor como porcentagem",bold_text:"Estilo negrito para o texto"},we={on_text:"Texto para Luzes LIGADAS",off_text:"Texto para Luzes DESLIGADAS",control_area:"Controlar uma Área específica",area_id:"Área a controlar"},Ae={media_card:{no_content:"Nada está sendo reproduzido",playing:"Reproduzindo agora"},remote:"Abrir Controle Remoto",cast:"Transmitir tela",stop_cast:"Parar transmissão",open:"Abrir ",open_google:"Abrir Google Home"},$e={user_title:"Mostrar localização dos usuários no mapa",user_description:"Se ativado, usuários que não são administradores poderão ver a localização de outros usuários no mapa clicando em seus cartões. Se desativado, as informações de localização não serão visíveis para usuários que não são administradores.",add_button_title:"Mostrar botão de adicionar usuário",add_button_description:"Se ativado, usuários que não são administradores também poderão ver o botão para adicionar um novo usuário. No entanto, usuários não administradores não poderão concluir a adição e serão redirecionados para sua própria página de perfil. Se desativado, o botão será visível apenas para usuários com privilégios administrativos."},Ee={common:fe,actions:_e,material_dashboard_card:ge,material_climate_card:ve,material_button_card:be,material_control_card:ye,material_slider_card:xe,material_lights_card:we,material_media_overlay:Ae,material_users_card:$e},ke={version:"版本",invalid_configuration:"无效配置",show_warning:"显示警告",no_entity_set:"未设置实体",no_entity:"实体不可用",indoor:"室内",on:"已打开",off:"已关闭",offline:"已离线",auto:"自动",eco:"节能",heat:"制暖",cool:"制冷",dry:"干燥",fan:"吹风",playing:"正在播放",paused:"暂停",idle:"投放",presence:"检测到活动",off_presence:"没有动作触发",today_at:"今天在",yesterday_at:"昨天在",open:"已开启",closed:"已关闭",opening:"正在开启",closing:"正在关闭",active:"已激活",inactive:"未激活",info_device:"设备信息",related:"相关集成",hidden:"隐藏"},Ce={automatic_action:"启用自动操作",tap_action_title:"点击操作",hold_action_title:"长按操作",double_tap_action_title:"双击操作",toggle:"单击（开/关）",more_info:"显示实体信息",navigate:"导航至页面",call_service:"运行一个服务",fire_dom:"发射 DOM 活动",assist:"激活语音助理",url:"打开网络链接",none:"无任何操作",google_home:"打开 Google Home",settings:"打开设置",select_option:"选择选项",warning:"⚠️ 进阶操作（JS、[[[]]], 复杂的服务调用）必须通过 YAML 来配置。"},Oe={description:"配置卡片点击时的导航路径。",cameras:"摄像头路径",cameras_name:"摄像头",lighting:"灯光路径",lighting_name:"灯光",lighting_label:"灯光",wifi:"Wi-Fi 路径",wifi_name:"Wi-Fi",climate:"温度控制路径",climate_name:"温度控制",device:"设备",devices:"设备",placeholder:"./URL 链接",default:"为点击操作使用默认配置（单击）",tap_type:"选择点击类型（单击、长按、双击）",single:"单击",hold:"长按",double:"双击",web:"在浏览器中使用单击操作（在移动版本中选择点击）"},Te={name:"实体名称",entity:"实体",theme:"使用 Material Expressive",increase_temp:"调高温度步进（如 0.5）",decrease_temp:"调低温度步进（如 0.5）",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"},fix_temperature:"温度显示错误时可启用",false:"未激活",true:"已激活",auto:"自动"},Se={name:"实体名称",control_type:"控制器类型",type:{generic:"通用（开关、按钮…）",thermometer:"恒温器、换气扇…",automation:"自动化",scene:"场景",media:"多媒体（Google、Alexa…）",state:"状态",action:"操作",app_version:"Material 组件版本"},dual_icon:{default:"使用默认图标",options:"使用双图标（元素打开和元素关闭）。"},dual_text:{default:"使用默认文本",text_on:"打开文本",text_off:"关闭文本"}},Me={name:"卡片名称",entity_card:"将实体作为卡片",entity:"实体",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"}},Ie={name:"卡片名称",control_type:"控制器类型",type:{light:"灯光",cover:"卷帘"},entity:"要控制的实体",icon:"自定义图标（如果留空，则根据开/关状态自动更改）",percentage:"将数值显示为百分比",bold_text:"使用加粗的文本风格"},Ne={on_text:"灯光开启时的显示文本",off_text:"灯光关闭时的显示文本",control_area:"控制特定区域",area_id:"要控制的区域"},Le={media_card:{no_content:"没有东西在播放",playing:"正在播放"},remote:"打开遥控器",cast:"屏幕投放",stop_cast:"停止投放",open:"打开 ",open_google:"打开 Google Home"},Pe={user_title:"在地图上显示用户位置",user_description:"启用后，非管理员用户可以通过点击用户卡片查看其他用户在地图上的位置。禁用时，非管理员用户将无法看到位置信息。",add_button_title:"显示添加用户按钮",add_button_description:"启用后，非管理员用户也可以看到添加新用户的按钮。然而，非管理员用户无法完成添加操作，并将被重定向到自己的个人资料页面。禁用时，按钮仅对具有管理权限的用户可见。"},je={common:ke,actions:Ce,material_dashboard_card:Oe,material_climate_card:Te,material_button_card:Se,material_control_card:Me,material_slider_card:Ie,material_lights_card:Ne,material_media_overlay:Le,material_users_card:Pe},Re={version:"Version",invalid_configuration:"Ogiltig konfiguration",show_warning:"Visa varning",no_entity_set:"Ingen entitet inställd",no_entity:"Entitet inte tillgänglig",indoor:"Inomhus",on:"På",off:"Av",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Värme",dry:"Torka",cool:"Kyla",fan:"Fläkt",playing:"Spelar",paused:"Pausad",idle:"Inaktiv",presence:"Närvaro",off_presence:"Ingen närvaro",today_at:"Idag kl",yesterday_at:"Igår kl",open:"Öppen",closed:"Stängd",opening:"Öppnar",closing:"Stänger",active:"Aktiv",inactive:"Inaktiv",info_device:"Enhetsinformation",related:"Relaterad integration",hidden:"Dold"},ze={automatic_action:"Aktivera automatiska åtgärder",tap_action_title:"Åtgärd vid klick",hold_action_title:"Åtgärd vid långtryck",double_tap_action_title:"Åtgärd vid dubbelklick",toggle:"Enkelt klick (På/Av)",more_info:"Visa mer info om entitet",navigate:"Navigera till en sida",call_service:"Anropa en tjänst",fire_dom:"Skapa DOM-händelse",assist:"Aktivera röstassistent",url:"Öppna länk eller webbplats",none:"Ingen åtgärd",google_home:"Öppna Google Home",settings:"Öppna inställningar",select_option:"Välj alternativ",warning:"⚠️ Avancerade åtgärder (JS, [[[]]], komplexa call-service) måste konfigureras via YAML."},Ue={description:"Konfigurera navigationssökväg när ett kort klickas.",cameras:"Kamerasökväg",cameras_name:"Kameror",lighting:"Belysningssökväg",lighting_name:"Belysning",lighting_label:"Ljus",wifi:"Wi-Fi-sökväg",wifi_name:"Wi-Fi",climate:"Klimatsökväg",climate_name:"Klimat",device:"Enhet",devices:"Enheter",placeholder:"./sökväg-eller-url"},Ve={name:"Entitetsnamn",entity:"Entitet",theme:"Använd Material Expressive",increase_temp:"Temperaturökning (t.ex. 0.5)",decrease_temp:"Temperatursänkning (t.ex. 0.5)",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},fix_temperature:"Aktivera om temperaturen inte är korrekt",false:"Inte aktiv",true:"Aktiv",auto:"Automatisk"},De={name:"Entitetsnamn",control_type:"Kontrolltyp",type:{generic:"Generisk (Brytare, Knapp...)",thermometer:"Klimat, Ventilation...",automation:"Automatiseringar",scene:"Scener",media:"Multimedia (Google, Alexa...)",state:"Tillstånd",action:"Åtgärder",app_version:"Version av Material Home Components"},dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},dual_text:{default:"Använd standardtext",text_on:"På-text",text_off:"Av-text"}},Fe={name:"Kortnamn",entity_card:"Använd kortet som entitet",entity:"Entitet",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (Aktiv och inaktiv status)."}},He={name:"Kortnamn",control_type:"Kontrolltyp",type:{light:"Ljus",cover:"Persienner"},entity:"Entitet att kontrollera",icon:"Anpassad ikon (om tom, ändras automatiskt baserat på På/Av-status)",percentage:"Visa procentvärde",bold_text:"Fetstilad text"},Ge={on_text:"Text för tända ljus",off_text:"Text för släckta ljus",control_area:"Kontrollera ett specifikt område",area_id:"Område att kontrollera"},Ye={media_card:{no_content:"Inget innehåll spelas",playing:"Spelas nu"},remote:"Öppna fjärrkontroll",cast:"Casta skärm",stop_cast:"Stoppa casting",open:"Öppna",open_google:"Öppna Google Home"},Be={user_title:"Visa användares position på kartan",user_description:"Om aktiverad kan icke-admin-användare se andra användares position på kartan genom att klicka på deras kort. Om inaktiverad kommer lokaliseringsinformation inte att vara synlig för icke-admin-användare.",add_button_title:"Visa knapp för att lägga till användare",add_button_description:"Om aktiverad kan även icke-admin-användare se knappen för att lägga till en ny användare. Dock kan icke-admin-användare inte slutföra tillägget och kommer att omdirigeras till sin egen profilsida. Om inaktiverad kommer knappen endast att vara synlig för användare med administrativa privilegier."},We={common:Re,actions:ze,material_dashboard_card:Ue,material_climate_card:Ve,material_button_card:De,material_control_card:Fe,material_slider_card:He,material_lights_card:Ge,material_media_overlay:Ye,material_users_card:Be},qe={version:"Versie",invalid_configuration:"Ongeldige configuratie",show_warning:"Waarschuwing tonen",no_entity_set:"Geen entiteit ingesteld",no_entity:"Entiteit niet beschikbaar",indoor:"Binnen",on:"Aan",off:"Uit",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Verwarmen",cool:"Koelen",dry:"Ontvochtigen",fan:"Ventilator",playing:"Wordt afgespeeld",paused:"Gepauzeerd",idle:"Casten",presence:"Beweging",off_presence:"Geen beweging",today_at:"Vandaag om",yesterday_at:"Gisteren om",open:"Open",closed:"Gesloten",opening:"Wordt geopend",closing:"Wordt gesloten",active:"Actief",inactive:"Inactief",info_device:"Apparaatinformatie",related:"Gerelateerde integratie",hidden:"Verbergen"},Ke={automatic_action:"Automatische acties inschakelen",tap_action_title:"Actie bij tikken",hold_action_title:"Actie bij vasthouden",double_tap_action_title:"Actie bij dubbel tikken",toggle:"Enkele klik (Aan/Uit)",more_info:"Entiteitsinformatie tonen",navigate:"Naar een pagina navigeren",call_service:"Service uitvoeren",fire_dom:"DOM-event activeren",assist:"Spraakassistent activeren",url:"Link of website openen",none:"Geen actie",google_home:"Google Home openen",settings:"Instellingen openen",select_option:"Optie selecteren",warning:"⚠️ Geavanceerde acties (JS, [[[]]], complexe service-calls) moeten via YAML worden geconfigureerd."},Xe={description:"Configureer het navigatiepad wanneer op een kaart wordt getikt.",cameras:"Camera-pad",cameras_name:"Camera’s",lighting:"Verlichtingspad",lighting_name:"Verlichting",lighting_label:"Lampen",wifi:"Wi-Fi-pad",wifi_name:"Wi-Fi",climate:"Klimaatpad",climate_name:"Klimaat",device:"Apparaat",devices:"Apparaten",placeholder:"./pad-of-url"},Ze={name:"Entiteitsnaam",entity:"Entiteit",theme:"Material Expressive gebruiken",increase_temp:"Temperatuur verhogen (bijv. 0.5)",decrease_temp:"Temperatuur verlagen (bijv. 0.5)",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."},fix_temperature:"Inschakelen als de temperatuur niet correct is",false:"Niet actief",true:"Actief",auto:"Auto"},Je={name:"Entiteitsnaam",control_type:"Type bediening",type:{generic:"Algemeen (Schakelaar, Knop...)",thermometer:"Thermometer, Ventilatie...",automation:"Automatisering",scene:"Scène",media:"Multimedia (Google, Alexa...)",state:"Status",action:"Actie",app_version:"Versie van Material Components"},dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Element Aan en Element Uit)."},dual_text:{default:"Standaardtekst gebruiken",text_on:"Tekst Aan",text_off:"Tekst Uit"}},Qe={name:"Kaartnaam",entity_card:"Kaart als entiteit gebruiken",entity:"Entiteit",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."}},ti={name:"Kaartnaam",control_type:"Type bediening",type:{light:"Licht",cover:"Afdekking"},entity:"Te bedienen entiteit",icon:"Aangepast pictogram (indien leeg, verandert automatisch op basis van Aan/Uit-status)",percentage:"Waarde als percentage weergeven",bold_text:"Vette tekststijl"},ei={on_text:"Tekst voor Lampen AAN",off_text:"Tekst voor Lampen UIT",control_area:"Een specifiek gebied bedienen",area_id:"Te bedienen gebied"},ii={media_card:{no_content:"Er wordt niets afgespeeld",playing:"Nu aan het afspelen"},remote:"Afstandsbediening openen",cast:"Scherm casten",stop_cast:"Casten stoppen",open:"Openen ",open_google:"Google Home openen"},ni={user_title:"Gebruikerslocatie op de kaart tonen",user_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers de locatie van andere gebruikers op de kaart zien door op hun kaarten te klikken. Indien uitgeschakeld is locatie-informatie niet zichtbaar voor niet-beheerders.",add_button_title:"Knop ‘gebruiker toevoegen’ tonen",add_button_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers ook de knop zien om een nieuwe gebruiker toe te voegen. Zij kunnen de toevoeging echter niet voltooien en worden doorgestuurd naar hun eigen profielpagina. Indien uitgeschakeld is de knop alleen zichtbaar voor gebruikers met beheerdersrechten."},ai={common:qe,actions:Ke,material_dashboard_card:Xe,material_climate_card:Ze,material_button_card:Je,material_control_card:Qe,material_slider_card:ti,material_lights_card:ei,material_media_overlay:ii,material_users_card:ni};const oi={en:Object.freeze({__proto__:null,actions:ft,common:mt,default:$t,material_button_card:vt,material_climate_card:gt,material_control_card:bt,material_dashboard_card:_t,material_lights_card:xt,material_media_overlay:wt,material_slider_card:yt,material_users_card:At}),it:Object.freeze({__proto__:null,actions:kt,common:Et,default:Pt,material_button_card:Tt,material_climate_card:Ot,material_control_card:St,material_dashboard_card:Ct,material_lights_card:It,material_media_overlay:Nt,material_slider_card:Mt,material_users_card:Lt}),fr:Object.freeze({__proto__:null,actions:Rt,common:jt,default:Bt,material_button_card:Vt,material_climate_card:Ut,material_control_card:Dt,material_dashboard_card:zt,material_lights_card:Ht,material_media_overlay:Gt,material_slider_card:Ft,material_users_card:Yt}),es:Object.freeze({__proto__:null,actions:qt,common:Wt,default:ne,material_button_card:Zt,material_climate_card:Xt,material_control_card:Jt,material_dashboard_card:Kt,material_lights_card:te,material_media_overlay:ee,material_slider_card:Qt,material_users_card:ie}),de:Object.freeze({__proto__:null,actions:oe,common:ae,default:me,material_button_card:le,material_climate_card:re,material_control_card:ce,material_dashboard_card:se,material_lights_card:ue,material_media_overlay:he,material_slider_card:de,material_users_card:pe}),pt_BR:Object.freeze({__proto__:null,actions:_e,common:fe,default:Ee,material_button_card:be,material_climate_card:ve,material_control_card:ye,material_dashboard_card:ge,material_lights_card:we,material_media_overlay:Ae,material_slider_card:xe,material_users_card:$e}),zh_CN:Object.freeze({__proto__:null,actions:Ce,common:ke,default:je,material_button_card:Se,material_climate_card:Te,material_control_card:Me,material_dashboard_card:Oe,material_lights_card:Ne,material_media_overlay:Le,material_slider_card:Ie,material_users_card:Pe}),sv:Object.freeze({__proto__:null,actions:ze,common:Re,default:We,material_button_card:De,material_climate_card:Ve,material_control_card:Fe,material_dashboard_card:Ue,material_lights_card:Ge,material_media_overlay:Ye,material_slider_card:He,material_users_card:Be}),nl:Object.freeze({__proto__:null,actions:Ke,common:qe,default:ai,material_button_card:Je,material_climate_card:Ze,material_control_card:Qe,material_dashboard_card:Xe,material_lights_card:ei,material_media_overlay:ii,material_slider_card:ti,material_users_card:ni})};function si(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=t.split(".").reduce((t,e)=>t[e],oi[n])}catch(e){a=t.split(".").reduce((t,e)=>t[e],oi.en)}return void 0===a&&(a=t.split(".").reduce((t,e)=>t[e],oi.en)),""!==e&&""!==i&&(a=a.replace(e,i)),a}var ri,li;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ri||(ri={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(li||(li={}));var ci=["closed","locked","off"],di=function(t,e,i,n){n=n||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,t.dispatchEvent(a),a},ui=function(t){di(window,"haptic",t)},hi=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),di(window,"location-changed",{replace:i})},pi=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(ui("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&di(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&hi(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,a=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===a?"homeassistant":a;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(o,n,{entity_id:e})})(t,e,ci.includes(t.states[e].state))}(e,i.entity),ui("success"));break;case"call-service":if(!n.service)return void ui("failure");var a=n.service.split(".",2);e.callService(a[0],a[1],n.service_data,n.target),ui("success");break;case"fire-dom-event":di(t,"ll-custom",n)}};function mi(t,e){if(!t)return;const i=document.createElement("span");i.classList.add("ripple");const n=t.getBoundingClientRect(),a=Math.max(n.width,n.height);i.style.width=i.style.height=`${a}px`;const o=e.clientX-n.left-a/2,s=e.clientY-n.top-a/2;i.style.left=`${o}px`,i.style.top=`${s}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const r=getComputedStyle(t);"static"===r.position&&(t.style.position="relative"),"hidden"!==r.overflow&&(t.style.overflow="hidden"),t.appendChild(i),i.addEventListener("animationend",()=>i.remove())}const fi={type:"custom:material-button-card"},_i="2.1.9";function gi(t,e){return null!=t?t:e}function vi(t){const e=new Date(t);if(isNaN(e.getTime()))return t;const i=new Date,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Date(n);a.setDate(n.getDate()-1);const o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return o.getTime()===n.getTime()?`${si("common.today_at")} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:o.getTime()===a.getTime()?`${si("common.yesterday_at")} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:function(t){const e=new Date(t);if(isNaN(e.getTime()))return t;const i=new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e);return i.replace(/([a-zàèéìòù]+)/,t=>t.charAt(0).toUpperCase()+t.slice(1))}(t)}function bi(t){return null==t||("string"==typeof t?0===t.trim().length:"number"==typeof t?0===t||Number.isNaN(t):Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)}function yi(t,e,i,n=t=>t){null!=e&&""!==e&&i.setProperty(t,n(e))}const xi={dark:{offline:{climate:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},button:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},light:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",slider:"var(--md-sys-color-surface-container-highest, #2c2c2e)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},material_cool:{title:"#cbe5fe",subtitle:"#b3d7f0",icon:"#cbe5fe",button:"#143546",background:"rgba(26, 61, 82, 0.85)"},material_dry:{title:"#fff2c2",subtitle:"#e6d9a8",icon:"#fff2c2",button:"#4d4520",background:"rgba(102, 85, 26, 0.85)"},material_fan:{title:"#c2f5d9",subtitle:"#a8e9c6",icon:"#c2f5d9",button:"#1f3a2f",background:"rgba(32, 77, 58, 0.85)"},material_heat:{title:"#ffe1c9",subtitle:"#f2c3a4",icon:"#ffe1c9",button:"#5b2d1a",background:"rgba(130, 52, 24, 0.85)"},material_eco:{title:"#d0f5c2",subtitle:"#b5e8a8",icon:"#d0f5c2",button:"#23401f",background:"rgba(42, 77, 32, 0.85)"},default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #d8e3f7)",icon:"var(--md-sys-color-on-secondary-container, #d8e3f7)",percentage:"var(--md-sys-color-on-secondary-container, #d8e3f7)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",background:"var(--md-sys-color-secondary-container, #3e4758)"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, #414246)"}},button:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",background:"var(--md-sys-color-surface-container, #292a2e)"},light:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",slider:"var(--md-sys-color-surface-container, #292a2e)",background:"var(--md-sys-color-surface-container, #292a2e)"}}},light:{offline:{climate:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))"},button:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",percentage:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"},light:{title:"var(--md-sys-color-outline, #959597)",icon:"var(--md-sys-color-outline, #959597)",percentage:"var(--md-sys-color-outline, #959597)",slider:"var(--md-sys-color-surface-container-highest, #dfdfe1)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},material_cool:{title:"#006b9c",subtitle:"#006b9c",icon:"#006b9c",button:"#cbe5fe",background:"#e8f1ff"},material_dry:{title:"#8c6b00",subtitle:"#8c6b00",icon:"#8c6b00",button:"#fff2c2",background:"#fff9e6"},material_fan:{title:"#006d48",subtitle:"#006d48",icon:"#006d48",button:"#b8f0d3",background:"#d9f6e6"},material_heat:{title:"#9b2f00",subtitle:"#9b2f00",icon:"#9b2f00",button:"#ffd9c2",background:"#ffe8dc"},material_eco:{title:"#2d6b00",subtitle:"#2d6b00",icon:"#2d6b00",button:"#d0f5c2",background:"#eaf9e6"},default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #131c2b)",icon:"var(--md-sys-color-on-secondary-container, #131c2b)",percentage:"var(--md-sys-color-on-secondary-container, #131c2b)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",background:"var(--md-sys-color-secondary-container, #d8e3f7)"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, #dddddf)"}},button:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",background:"var(--md-sys-color-surface-container, #e8e8ea)"},light:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",slider:"var(--md-sys-color-surface-container, #e8e8ea)",background:"var(--md-sys-color-surface-container, #e8e8ea)"}}}};var wi,Ai,$i,Ei,ki,Ci,Oi;function Ti(t){return Object.values($i).includes(t)}function Si(t){const e=t.device_class,i=t.state_class;return"string"==typeof e&&Ti(e)?e:"string"==typeof i&&Ti(i)?i:void 0}function Mi(t){const e=Number.parseInt(t);return!(!isNaN(e)&&0!==e)&&Object.values(ki).includes(t)}function Ii(t,e=""){const i=Number.parseInt(t);return!(!isNaN(i)&&0!==i)&&(!(e===wi.SCENE&&"unknown"===t.toLowerCase()||e===wi.STATE&&"unavailable"!=t.toLowerCase())&&(!function(t){return Object.values(ki).includes(t)||Object.values(Ci).includes(t)}(t)&&("offline"===t.toLowerCase()||"unavailable"===t.toLowerCase())))}function Ni(t,e){return bi(e)?e:"true"==t||"auto"==t&&e<7?5*e:e}function Li(t,e=Ai.CLIMATE){switch(t){case ki.AUTO:case ki.HEAT:case ki.HEAT_COOL:return"material";case ki.COOL:return"material_cool";case ki.FAN_ONLY:case ki.FAN:return"material_fan";case ki.DRY:return"material_dry";case ki.ECO:return"material_eco";default:return e&&e==Ai.FAN?"material_fan":"material"}}!function(t){t.GENERIC="generic",t.THERMOMETER="thermometer",t.AUTOMATION="automation",t.SCENE="scene",t.MEDIA_PLAYER="media_player",t.STATE="state",t.ACTION="action",t.APP_VERSION="app_version",t.LIGHT="light",t.COVER="cover",t.NUMBER="number",t.INPUT_NUMBER="input_number",t.MEDIA_PLAYER_VOLUME="media_player_volume",t.FAN="fan",t.CLIMATE="climate"}(wi||(wi={})),function(t){t.BINARY_SENSOR="binary_sensor",t.SENSOR="sensor",t.SWITCH="switch",t.LIGHT="light",t.COVER="cover",t.BUTTON="button",t.NUMBER="number",t.INPUT_NUMBER="input_number",t.FAN="fan",t.CLIMATE="climate",t.MEDIA_PLAYER="media_player"}(Ai||(Ai={})),function(t){t.MOTION="motion",t.OCCUPANCY="occupancy",t.PRESENCE="presence",t.DOOR="door",t.CONNECTIVITY="connectivity",t.MEASUREMENT="measurement",t.BATTERY="battery",t.TEMPERATURE="temperature",t.HUMIDITY="humidity",t.TIMESTAMP="timestamp",t.TAMPER="tamper",t.ILLUMINANCE="illuminance",t.NONE="none"}($i||($i={})),function(t){t.ASCIUGATRICE="asciugatrice",t.DRYER="dryer",t.HELPER="helper",t.TEMPLATE="template",t.DIALOG_HIDDEN="dialog_hidden"}(Ei||(Ei={})),function(t){t.ON="on",t.AUTO="auto",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.FAN_ONLY="fan_only",t.FAN="fan",t.DRY="dry",t.ECO="eco",t.IDLE="idle",t.PLAYING="playing",t.PAUSED="paused",t.OPEN="open",t.OPENING="opening",t.IDLE_2="Idle"}(ki||(ki={})),function(t){t.OFF="off",t.CLOSED="closed",t.CLOSING="closing"}(Ci||(Ci={})),Object.assign(Object.assign({},ki),Ci),function(t){t.NEST_MINI="Google Nest Mini",t.GOOGLE_HOME="Google Home",t.NEST_HUB="Google Nest Hub",t.GOOGLE_TV_STREAMER="Google TV Streamer",t.GOOGLE_CAST_GROUP="Google Cast Group"}(Oi||(Oi={}));const Pi={[Ai.SWITCH]:{on:"m3rf:switch",off:"m3r:switch"},[Ai.NUMBER]:{on:"m3rf:settings-input-component",off:"m3r:settings-input-component"},[Ai.FAN]:{on:"m3of:mode-fan",off:"m3o:mode-fan"}},ji={[wi.LIGHT]:{on:"m3of:lightbulb",off:"m3r:lightbulb"},[wi.COVER]:{on:"m3rf:blinds",off:"m3rf:blinds-closed"},[wi.SCENE]:{on:"mdi:creation-outline",off:"mdi:creation-outline"}},Ri={[$i.CONNECTIVITY]:{on:"m3of:nest-wifi-router",off:"m3o:nest-wifi-router"},[$i.PRESENCE]:{on:"m3rf:sensor-occupied",off:"m3r:sensor-occupied"},[$i.OCCUPANCY]:{on:"m3rf:sensor-occupied",off:"m3r:sensor-occupied"},[$i.MOTION]:{on:"m3rf:sensors-krx",off:"m3r:sensors-krx"},[$i.MEASUREMENT]:{on:"mdi:scale-bathroom",off:"mdi:scale-bathroom"},[$i.DOOR]:{on:"m3rf:sensor-door",off:"m3r:sensor-door"},[$i.TEMPERATURE]:{on:"m3rf:temp-preferences-eco",off:"m3r:temp-preferences-eco"},[$i.HUMIDITY]:{on:"m3rf:humidity-percentage",off:"m3r:humidity-percentage"},[$i.TAMPER]:{on:"m3rf:tamper-detection-on",off:"m3r:tamper-detection-on"},[$i.ILLUMINANCE]:{on:"m3rf:light-mode",off:"m3r:light-mode"}},zi={auto:"m3of:thermostat-auto",heat_cool:"m3of:mode-heat-cool",heat:"m3of:mode-heat",dry:"m3of:cool-to-dry",fan:"m3of:mode-fan",fan_only:"m3of:mode-fan",cool:"m3of:mode",eco:"m3rf:eco",off:"m3s:thermometer",unavailable:"m3s:thermometer"},Ui={[Oi.NEST_MINI]:{on:"m3of:nest-mini",off:"m3o:nest-mini"},[Oi.GOOGLE_HOME]:{on:"m3of:home-speaker",off:"m3o:home-speaker"},[Oi.NEST_HUB]:{on:"m3of:nest-display",off:"m3o:nest-display"},[Oi.GOOGLE_CAST_GROUP]:{on:"m3rf:speaker-group",off:"m3r:speaker-group"}};function Vi(t,e,i){var n,a,o,s,r,l;const c=t.entity_id.split(".")[0],d=t.state,u=null!==(n=e.control_type)&&void 0!==n?n:"generic",h=Mi(d),p=!Ii(d,u),m=Si(t.attributes),f=null===(a=e.use_default_icon)||void 0===a||a,_=null===(o=e.use_material_icons)||void 0===o||o,g=function(t,e,i){if("string"==typeof t.icon&&t.icon.trim().startsWith("[[[")&&t.icon.trim().endsWith("]]]"))try{const n=t.icon.trim().slice(3,-3),a=new Function("entity","state","hass",n)(e,e.state,i);if(a&&"string"==typeof a)return a}catch(t){return console.warn("Error evaluating icon template:",t),"mdi:alert-circle-outline"}return null}(e,t,i);if(g)return g;if(!f)return e.dual_icon?h?e.icon_on||`mdi:${c}`:e.icon_off||`mdi:${c}`:e.icon||`mdi:${c}`;if(!_)return null;const v=null===(r=null===(s=null==i?void 0:i.entities)||void 0===s?void 0:s[t.entity_id])||void 0===r?void 0:r.icon;if(v)return v;const b=null===(l=null==t?void 0:t.attributes)||void 0===l?void 0:l.icon;if(b)return b;const y=function(t){var e,i,n,a,o,s;const{domain:r,state:l,controlType:c,isOn:d,isOnline:u,deviceClass:h,stateObj:p,config:m,hass:f}=t;if(Pi[r])return d?Pi[r].on:Pi[r].off;switch(c){case wi.LIGHT:return m.icon&&"m3of:lightbulb"!==m.icon&&"m3r:lightbulb"!==m.icon?m.icon:d?ji[wi.LIGHT].on:ji[wi.LIGHT].off;case wi.COVER:return m.icon?m.icon:d?ji[wi.COVER].on:ji[wi.COVER].off;case wi.THERMOMETER:{const t=null===(e=p.attributes)||void 0===e?void 0:e.preset_mode;return null!==(i=zi["eco"===t?"eco":l])&&void 0!==i?i:"m3of:thermometer"}case wi.SCENE:return ji[wi.SCENE].on;case wi.MEDIA_PLAYER:{const t=null===(a=null===(n=null==f?void 0:f.entities)||void 0===n?void 0:n[m.entity])||void 0===a?void 0:a.device_id,e=t?null===(s=null===(o=null==f?void 0:f.devices)||void 0===o?void 0:o[t])||void 0===s?void 0:s.model:null;return e&&Ui[e]?d?Ui[e].on:Ui[e].off:d?"m3rf:tv-gen":"m3r:tv-gen"}case wi.GENERIC:case wi.STATE:if(r===Ai.BINARY_SENSOR||r===Ai.SENSOR){if(h===$i.BATTERY)return function(t,e){return e?t>=90?"m3of:battery-android-0":t>=70?"m3of:battery-android-5":t>=50?"m3of:battery-android-4":t>=30?"m3of:battery-android-3":t>=10?"m3of:battery-android-2":t>=5?"m3of:battery-android-1":"m3of:battery-android-0":"m3r:battery-android-alert"}(Number.parseInt(l),u);if(h&&Ri[h]){const t=Ri[h];return[$i.TEMPERATURE,$i.HUMIDITY].includes(h)?u?t.on:t.off:d?t.on:t.off}}}return null}({stateObj:t,config:e,hass:i,domain:c,state:d,controlType:u,isOn:h,isOnline:p,deviceClass:m});return y||null}function Di(t,e,i,n="false",a=!1,o){var s,r,l,c;if(e===wi.APP_VERSION)return`V${_i}`;if(bi(t))return"";const d=null!==(r=null===(s=t.entity_id)||void 0===s?void 0:s.split(".")[0])&&void 0!==r?r:"",u=Mi(t.state),h=(null==o?void 0:o.formatEntityState)?o.formatEntityState(t):t.state,p=Si(t.attributes);if(Ii(t.state))return si("common.offline");if(d===Ai.FAN){if(!u)return h;return`${h} • ${o.formatEntityAttributeValue(t,"percentage")}`}if(e===wi.THERMOMETER&&!i){const{preset_mode:e,temperature:i,current_temperature:s}=null!==(l=t.attributes)&&void 0!==l?l:{},r="eco"===e?`${si("common.eco")} • `:"";return`${!u&&!bi(i)&&a?si("common.indoor"):h} • ${r}${o?o.formatEntityAttributeValue(t,"current_temperature",Ni(n,s)):`${Ni(n,s)}°`}`}if(e===wi.MEDIA_PLAYER&&!i){if(!u)return"";const e=gi(null===(c=t.attributes)||void 0===c?void 0:c.app_name,"");return e?`${h} • ${e}`:h}return p===$i.TIMESTAMP||"event"===d?vi(t.state):e===wi.AUTOMATION?si(u?"common.active":"common.inactive"):(null==o?void 0:o.formatEntityState)?o.formatEntityState(t):t.state}function Fi(t,e){if(t.name)return t.name;const i=e.states[t.entity];if(i&&i.attributes.friendly_name)return i.attributes.friendly_name;if(e&&e.entities&&e.entities[t.entity]){const i=e.entities[t.entity].device_id;return e.devices[i].name}}function Hi(t,e){return Ii(t.state)?si("common.offline"):(null==e?void 0:e.formatEntityState)?e.formatEntityState(t):t.state}function Gi(t){t.open=!1,t.dispatchEvent(new CustomEvent("close-dialog",{bubbles:!0,composed:!0})),t.remove()}function Yi(t,e,i){var n;const a=null==e?void 0:e.entity;if(!a||!i)return;Gi(t);const o=new CustomEvent("hass-more-info",{detail:{entityId:a},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(o)}let Bi=class extends rt{constructor(){super(...arguments),this.open=!1,this._menuOpen=!1}render(){var t,e,i,n,a,o,s,r;const l=this.config.entity,c=this.hass.entities[l],d=null==c?void 0:c.device_id,u=this.hass.states[l];let h,p=[u];!c.labels.includes(Ei.HELPER)&&!c.labels.includes(Ei.TEMPLATE)&&(h=Object.values(this.hass.entities).filter(t=>t.device_id===d).filter(t=>{var e;return!(null===(e=t.labels)||void 0===e?void 0:e.includes(Ei.DIALOG_HIDDEN))}).map(t=>t.entity_id),p=h.map(t=>this.hass.states[t]).filter(t=>void 0!==t));const m=null===(t=this.hass.devices[d])||void 0===t?void 0:t.area_id,f=null===(e=this.hass.areas[m])||void 0===e?void 0:e.name,_=null!==(a=null!==(i=this.config.name)&&void 0!==i?i:null===(n=null==u?void 0:u.attributes)||void 0===n?void 0:n.friendly_name)&&void 0!==a?a:null==u?void 0:u.entity_id,g=(null===(s=null===(o=this.hass)||void 0===o?void 0:o.themes)||void 0===s?void 0:s.darkMode)?"dark":"light",v=function(t){switch(Si(t.attributes)){case $i.BATTERY:case $i.HUMIDITY:case $i.TEMPERATURE:return!Ii(t.state)}return Mi(t.state)}(u),b=null!==(r=Vi(u,this.config,this.hass))&&void 0!==r?r:"m3r:sensors-krx",y=Hi(u);return H`
      <ha-dialog
        .open=${this.open}
        scrimClickAction=""
        escapeKeyAction="close"
        hideActions
        @click=${this._handleDialogClick}
      >
        <div class="header" @click=${()=>function(t){var e;const i=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector("ha-dialog");i&&(i.classList.contains("large")?i.classList.remove("large"):i.classList.add("large"))}(this)}>
          <div class="header-left">
            <ha-icon-button @click=${()=>Gi(this)} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <div class="header-title">
              ${f?H`<p class="breadcrumb">${f}</p>`:H``}
              <p class="main-title">${_}</p>
            </div>
          </div>
          <div class="header-right">
            <ha-icon-button
              @click=${()=>Yi(this,this.config,this.hass)}
              class="settings-btn"
            >
              <ha-icon
                icon="m3r:insert-chart"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="History"
              ></ha-icon>
            </ha-icon-button>
            <!--<ha-icon-button @click="" class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>-->
            <!-- Menu dropdown -->
            <ha-button-menu
              corner="BOTTOM_END"
              menu-corner="END"
              fixed
              @click=${t=>t.stopPropagation()}
              @opened=${()=>this._menuOpen=!0}
              @closed=${()=>this._menuOpen=!1}
            >
              <ha-icon-button slot="trigger"
                ><ha-icon
                  icon="mdi:dots-vertical"
                  style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                  title="Menu"
                ></ha-icon
              ></ha-icon-button>

              <ha-list-item
                mwc-list-item
                @click=${()=>function(t,e,i){var n;const a=e.entity;if(!a||!i)return;if(!i.states[a])return;const o=null===(n=i.entities)||void 0===n?void 0:n[a],s=null==o?void 0:o.device_id;Gi(t),setTimeout(()=>{s?hi(0,`/config/devices/device/${s}`):Yi(t,e,i)},100)}(this,this.config,this.hass)}
              >
                <ha-icon
                  icon="mdi:devices"
                  style="padding-right: 10px;"
                ></ha-icon>
                ${si("common.info_device")}
              </ha-list-item>

              <ha-list-item
                mwc-list-item
                @click=${()=>function(t,e,i){var n;const a=e.entity;if(!a||!i)return;const o=null===(n=i.entities[a])||void 0===n?void 0:n.platform;Gi(t),setTimeout(()=>{o?hi(0,`/config/integrations/integration/${o}`):Yi(t,e,i)},100)}(this,this.config,this.hass)}
              >
                <ha-icon icon="m3r:info" style="padding-right: 10px;"></ha-icon>
                ${si("common.related")}
              </ha-list-item>
            </ha-button-menu>
          </div>
        </div>

        <!-- Contenuto -->
        <div class="content">
          <div style="display: flex; justify-content: center;">
            <div
              class="circle ${v?"present":"absent"} ${g}"
            >
              <div class="inner">
                <!--<ha-icon
                  icon=${v?"m3rf:sensor-door":"m3r:sensor-door"}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>-->
                <ha-icon
                  icon=${b}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>
                <div class="label">${_}</div>
                <div class="state">${y}</div>
              </div>
            </div>
          </div>

          <div class="menu-section">
            ${p.map(t=>{var e;if(function(t){const e=t.entity_id.split(".")[0];return"number"==e||"update"==e}(t))return;const i=null!==(e=Vi(t,this.config,this.hass))&&void 0!==e?e:"m3r:info",n=t.entity_id,a=this.hass.entities[t.entity_id];return H`
                <div
                  class="menu-card link ${g} state"
                  @click=${()=>function(t,e,i){var n;if(!t||!i)return;Gi(e);const a=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(a)}(n,this,this.hass)}
                >
                  <ha-icon icon="${i}"></ha-icon>
                  <span class="menu-text"
                    >${function(t,e){const i=e.name;if(i)return i;const n=Si(t.attributes);return n||t.attributes.device_class}(t,a)}</span
                  >
                  <span class="menu-text flex-end"
                    >${Hi(t)}</span
                  >
                </div>
              `})}
          </div>
        </div>
      </ha-dialog>
    `}_handleDialogClick(t){var e;if(this._menuOpen)return;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-dialog");if(!i)return;const n=t.composedPath();n.includes(i.shadowRoot.querySelector(".mdc-dialog__container"))||n.includes(this.shadowRoot.querySelector(".content"))||Gi(this)}};function Wi(t,e="none"){if(!t)return`action: ${e}`;if("google-home"===t.action)return'action: url\n  url_path: |\n    [[[ \n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]';if("settings"===t.action)return'action: navigate\n  navigation_path: |\n    [[[ \n      const isAdmin = hass.user?.is_admin;\n      return isAdmin ? "/config/dashboard" : "/profile";\n    ]]]';const i=[`action: ${t.action||e}`];for(const e of Object.keys(t)){if("action"===e)continue;const n=t[e];"string"!=typeof n||n.includes("[[[")?"string"==typeof n&&n.includes("[[[")?i.push(`  ${e}: |\n    ${n.replace(/\n/g,"\n    ")}`):i.push(`  ${e}: ${JSON.stringify(n)}`):i.push(`  ${e}: ${n}`)}return i.join("\n")}function qi(t,e,i,n){if(!t||"object"!=typeof t)return t;const a={};for(const o of Object.keys(t))a[o]=Ki(t[o],e,i,n);return a}function Ki(t,e,i,n){if("string"==typeof t&&t.trim().startsWith("[[[")&&t.trim().endsWith("]]]"))try{const a=t.trim().slice(3,-3),o=new Function("entity","state","hass",a)(e,i,n);if(o&&"string"==typeof o)return o}catch(e){return console.warn("Error evaluating icon template:",e),t}return t}function Xi(t,e,i,n){var a;if(!n||!e)return;switch(n.action){case"perform-action":{const t=n.perform_action||"",[i,o]=t?t.split("."):(null===(a=n.service)||void 0===a?void 0:a.split("."))||[];if(!i||!o)return;const s=Object.assign(Object.assign({},n.data),n.target||{});e.callService(i,o,s);break}default:pi(t,e,bi(i.entity)?{}:{entity:i.entity},n)}}Bi.styles=s`
    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
      --dialog-content-padding: 10px;
    }

    @media (min-width: 450px) {
      ha-dialog.large {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    /* Fullscreen mobile */
    @media (max-width: 450px) {
      ha-dialog {
        --mdc-dialog-min-width: 100vw;
        --mdc-dialog-max-width: 100vw;
        --mdc-dialog-min-height: 100vh;
        --mdc-dialog-max-height: 100vh;
        --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.5);
        --ha-dialog-border-radius: 0px;
      }
      ha-dialog > * {
        height: 100%;
        overflow-y: auto;
      }

      .menu-card.link,
      .circle.absent {
        filter: brightness(1) !important;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      /*gap: 10px;*/
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      /*gap: 10px;*/
    }

    .header-title {
      margin-top: 2px;
    }

    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .breadcrumb {
      font-size: 12px;
      color: var(--secondary-text-color, #888);
      margin: 0;
    }

    .main-title {
      font-weight: 500;
      font-size: 18px;
      margin: 0;
    }

    .content {
      /*padding: 40px 16px 0px 16px;*/
      padding: 40px 0px 0px 0px;
      /*margin-bottom: -30px;*/
    }

    ha-button-menu {
      display: flex;
      align-items: center;
    }

    .circle {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
      text-align: center;
      overflow: hidden;
    }

    /* Bordo attivo */
    .circle.present {
      border: 10px solid var(--md-sys-color-secondary-container);
      animation: pulse-outline 2s infinite;
    }

    /* Bordo inattivo */
    .circle.absent {
      border: 15px solid var(--md-sys-color-surface-container);
    }

    .circle.absent.light {
      filter: brightness(0.9);
    }

    /* Effetto pulsazione sul bordo */
    @keyframes pulse-outline {
      0% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0.4));
      }
      70% {
        box-shadow: 0 0 0 10px
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
      100% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
    }

    /* Contenuto interno */
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Testo in basso */
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    .circle ha-icon {
      margin-bottom: 8px;
    }

    .circle.absent ha-icon {
      color: var(--disabled-color, #888);
    }

    .label {
      font-size: 16px;
      color: var(--primary-text-color);
      font-weight: 500;
      line-height: 1.2;
    }

    .state {
      font-size: 13px;
      color: var(--secondary-text-color);
      text-transform: capitalize;
    }

    /* ------------------------------------
    * Menu Cards
    * ------------------------------------ */
    .menu-section {
      margin: 40px 0px 20px 0px;
      justify-items: center;
    }

    .menu-card {
      margin-top: 10px;
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.state {
      border-radius: 28px;
    }

    .menu-card.light {
      filter: brightness(0.9);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .flex-end {
      text-align: end;
      flex: auto;
      padding-right: 5px;
    }
    /* ------------------------------------
    * END Menu Cards
    * ------------------------------------ */
  `,t([ht({type:Object})],Bi.prototype,"hass",void 0),t([ht({type:Object})],Bi.prototype,"config",void 0),t([ht({type:Boolean})],Bi.prototype,"open",void 0),Bi=t([ct("sensor-dialog")],Bi);let Zi=class extends rt{constructor(){super(...arguments),this._config=fi,this.color=xi,this._moved=!1}setConfig(t){if(!t)throw new Error(si("common.invalid_configuration"));const e=Object.assign({},t);e.control_type!==wi.APP_VERSION&&e.control_type!==wi.ACTION||delete e.entity,this._config=e}static getStubConfig(t,e){const i=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:material-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-button-card-editor")}updated(){requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".state-wrapper"),e=this.renderRoot.querySelector(".state");if(t&&e){e.scrollWidth>t.clientWidth?e.classList.add("scroll"):e.classList.remove("scroll")}})}_onClick(t){mi(t.currentTarget,t),this._toggle()}_toggle(){var t,e,i;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const n=this._config.entity,a=n?n.split(".")[0]:"",o=null!==(t=this._config.control_type)&&void 0!==t?t:wi.GENERIC,s=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(e=this._config.use_default_toggle)||void 0===e||e){if(s.includes(a)&&o!=wi.THERMOMETER&&o!=wi.MEDIA_PLAYER||o==wi.AUTOMATION)return this.hass.callService("homeassistant","toggle",{entity_id:n});switch(Si(this.hass.states[this._config.entity].attributes)){case $i.DOOR:case $i.TEMPERATURE:case $i.HUMIDITY:case $i.MOTION:case $i.PRESENCE:case $i.OCCUPANCY:return function(t,e,i,n){var a,o;const s=document.createElement(e);s.config=n,s.hass=i,s.open=!0;const r=null!==(o=null===(a=t.shadowRoot)||void 0===a?void 0:a.host)&&void 0!==o?o:t,l=new MutationObserver(()=>{s.isConnected&&(s.hass=t.hass,s.requestUpdate())});l.observe(r,{attributes:!0}),s.addEventListener("close-dialog",()=>{l.disconnect(),s.remove()}),s.style.position="fixed",s.style.inset="0",s.style.zIndex="9999",document.body.appendChild(s)}(this,"sensor-dialog",this.hass,this._config)}return"media_player"===a||o==wi.MEDIA_PLAYER?void this._openMediaOverlay():di(this,"hass-more-info",{entityId:n})}if(this._config.tap_action&&"object"==typeof this._config.tap_action){const t=qi(this._config.tap_action,this.hass.states[n],null===(i=this.hass.states[n])||void 0===i?void 0:i.state,this.hass);return void Xi(this,this.hass,bi(n)?{}:{entity:n},t)}if("media_player"!==a&&o!=wi.MEDIA_PLAYER)return di(this,"hass-more-info",{entityId:n});this._openMediaOverlay()}_startPress(t){this._cancelPress(),this._moved=!1,"undefined"!=typeof TouchEvent&&t instanceof TouchEvent&&t.touches.length>0?(this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY):t instanceof MouseEvent&&(this._startX=t.clientX,this._startY=t.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(t){if(!this._startX||!this._startY||0===t.touches.length)return;const e=t.touches[0].clientX,i=t.touches[0].clientY,n=Math.abs(e-this._startX),a=Math.abs(i-this._startY);(n>10||a>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(t){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&t instanceof MouseEvent&&this._onClick(t))}_handleHold(){var t,e,i,n;if(null===(t=navigator.vibrate)||void 0===t||t.call(navigator,50),!this._config||!this.hass)return;const a=this._config.entity,o=null!==(e=this._config.control_type)&&void 0!==e?e:"generic",s=null===(i=this._config.use_default_toggle)||void 0===i||i,r=null==a?void 0:a.split(".")[0],l=!!r&&["light","switch","fan","climate","input_boolean","cover","script"].includes(r),c=o===wi.MEDIA_PLAYER;if(s)return void(l||!c?a&&di(this,"hass-more-info",{entityId:a}):a&&this.hass.callService("homeassistant","toggle",{entity_id:a}));const d=this._config.hold_action;if(!d)return;if("string"==typeof d)return void Xi(this,this.hass,a?{entity:a}:{},{action:d});const u=qi(d,a?this.hass.states[a]:void 0,a?null===(n=this.hass.states[a])||void 0===n?void 0:n.state:void 0,this.hass);Xi(this,this.hass,a?{entity:a}:{},u)}_openMediaOverlay(){const t=document.createElement("material-media-overlay");t.hass=this.hass,t.entity=this._config.entity;const e=new MutationObserver(()=>{t&&(t.hass=this.hass,t.requestUpdate())});e.observe(this,{attributes:!0,childList:!1,subtree:!1}),t.addEventListener("close-overlay",()=>{e.disconnect(),t.remove()}),t.style.position="fixed",t.style.inset="0",t.style.zIndex="9999",document.body.appendChild(t)}render(){var t,e,i,n,a,o,s;if(!this._config||!this.hass)return H``;const r=this.hass.states[this._config.entity];if(this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION&&!r)return H`<ha-card
          ><div class="warning">${si("common.no_entity")}</div></ha-card
        >`;let l,c=!1,d=null!==(t=this._config.name)&&void 0!==t?t:"",u=null!==(e=this._config.icon)&&void 0!==e?e:"",h=!1,p=$i.NONE;const m=null===(i=this._config.use_default_text)||void 0===i||i;this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION&&(c=Mi(r.state),d=Fi(this._config,this.hass),u=Vi(r,this._config,this.hass),h=Ii(r.state,this._config.control_type),p=Si(r.attributes));const f=(null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light";m?l=this._config.control_type!=wi.ACTION?Di(r,this._config.control_type,h,this._config.fix_temperature,!1,this.hass):"":(l=c?this._config.text_on:this._config.text_off,Ii(r.state)&&(l=si("common.offline")));const _=bi(r)?null:r.entity_id.split(".")[0],g=this._config.control_type==wi.GENERIC&&"button"==_&&(this._config.use_default_text||bi(this._config.use_default_text));let v;if(this._config.control_type==wi.THERMOMETER){v="eco"===(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.preset_mode)?"eco":null!==(s=null==r?void 0:r.state)&&void 0!==s?s:"unavailable"}else v=r&&r.state?r.state:"unavaiable";return function(t,e,i,n,a,o){var s;const r=i?"offline":n?"on":"off",l=e.control_type==wi.THERMOMETER&&e.use_material_color&&n?"climate":"button",c=null===(s=e.entity)||void 0===s?void 0:s.split(".")[0],d=xi,u=e.use_material_color?Li(o,c):"default";let h;h=i||n&&!e.use_material_color||!n?d[a][r][l]:d[a][r][l][u],bi(h)||(yi("--bsc-name-color",h.title,t),yi("--bsc-icon-color",h.icon,t),yi("--bsc-percentage-color","climate"==l?h.title:h.percentage,t),yi("--bsc-background",h.background,t),yi("--bsc-height",e.height||97,t,t=>`${t}px`),yi("--bsc-border-radius",e.border_radius,t))}(this.style,this._config,h,c,f,v),H`
      <ha-card
        class="material-button ${c?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${h||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          ${u?H`<ha-icon .icon=${u} class="icon"></ha-icon>`:H`<ha-state-icon .stateObj=${r} class="icon"></ha-state-icon>`}
          <div class="text">
            <div class="name ellipsis">${d}</div>
            ${p==$i.MEASUREMENT||this._config.control_type==wi.SCENE&&m||this._config.control_type==wi.MEDIA_PLAYER&&!c||this._config.control_type==wi.ACTION||g?H``:H`<div class="state-wrapper">
                  <div class="state">${l}</div>
                </div>`}
          </div>
        </div>
        ${h?H`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.MEDIA_PLAYER||this._config.control_type==wi.ACTION||this._config.control_type==wi.STATE?H`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`:H``}
      </ha-card>
    `}};
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */
function Ji(t){return null==t}Zi.styles=s`
    :host {
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.material-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,t([ht({attribute:!1})],Zi.prototype,"hass",void 0),t([pt()],Zi.prototype,"_config",void 0),Zi=t([ct("material-button-card")],Zi);var Qi={isNothing:Ji,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:Ji(t)?[]:[t]},repeat:function(t,e){var i,n="";for(i=0;i<e;i+=1)n+=t;return n},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var i,n,a,o;if(e)for(i=0,n=(o=Object.keys(e)).length;i<n;i+=1)t[a=o[i]]=e[a];return t}};function tn(t,e){var i="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(i+="\n\n"+t.mark.snippet),n+" "+i):n}function en(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=tn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}en.prototype=Object.create(Error.prototype),en.prototype.constructor=en,en.prototype.toString=function(t){return this.name+": "+tn(this,t)};var nn=en;function an(t,e,i,n,a){var o="",s="",r=Math.floor(a/2)-1;return n-e>r&&(e=n-r+(o=" ... ").length),i-n>r&&(i=n+r-(s=" ...").length),{str:o+t.slice(e,i).replace(/\t/g,"→")+s,pos:n-e+o.length}}function on(t,e){return Qi.repeat(" ",e-t.length)+t}var sn=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,a=[0],o=[],s=-1;i=n.exec(t.buffer);)o.push(i.index),a.push(i.index+i[0].length),t.position<=i.index&&s<0&&(s=a.length-2);s<0&&(s=a.length-1);var r,l,c="",d=Math.min(t.line+e.linesAfter,o.length).toString().length,u=e.maxLength-(e.indent+d+3);for(r=1;r<=e.linesBefore&&!(s-r<0);r++)l=an(t.buffer,a[s-r],o[s-r],t.position-(a[s]-a[s-r]),u),c=Qi.repeat(" ",e.indent)+on((t.line-r+1).toString(),d)+" | "+l.str+"\n"+c;for(l=an(t.buffer,a[s],o[s],t.position,u),c+=Qi.repeat(" ",e.indent)+on((t.line+1).toString(),d)+" | "+l.str+"\n",c+=Qi.repeat("-",e.indent+d+3+l.pos)+"^\n",r=1;r<=e.linesAfter&&!(s+r>=o.length);r++)l=an(t.buffer,a[s+r],o[s+r],t.position-(a[s]-a[s+r]),u),c+=Qi.repeat(" ",e.indent)+on((t.line+r+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},rn=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ln=["scalar","sequence","mapping"];var cn=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===rn.indexOf(e))throw new nn('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(i){t[i].forEach(function(t){e[String(t)]=i})}),e}(e.styleAliases||null),-1===ln.indexOf(this.kind))throw new nn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function dn(t,e){var i=[];return t[e].forEach(function(t){var e=i.length;i.forEach(function(i,n){i.tag===t.tag&&i.kind===t.kind&&i.multi===t.multi&&(e=n)}),i[e]=t}),i}function un(t){return this.extend(t)}un.prototype.extend=function(t){var e=[],i=[];if(t instanceof cn)i.push(t);else if(Array.isArray(t))i=i.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new nn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof cn))throw new nn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new nn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new nn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(t){if(!(t instanceof cn))throw new nn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(un.prototype);return n.implicit=(this.implicit||[]).concat(e),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=dn(n,"implicit"),n.compiledExplicit=dn(n,"explicit"),n.compiledTypeMap=function(){var t,e,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(t){t.multi?(i.multi[t.kind].push(t),i.multi.fallback.push(t)):i[t.kind][t.tag]=i.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var hn=un,pn=new cn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),mn=new cn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),fn=new cn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),_n=new hn({explicit:[pn,mn,fn]});var gn=new cn("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var vn=new cn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function bn(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function yn(t){return 48<=t&&t<=55}function xn(t){return 48<=t&&t<=57}var wn=new cn("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i=t.length,n=0,a=!1;if(!i)return!1;if("-"!==(e=t[n])&&"+"!==e||(e=t[++n]),"0"===e){if(n+1===i)return!0;if("b"===(e=t[++n])){for(n++;n<i;n++)if("_"!==(e=t[n])){if("0"!==e&&"1"!==e)return!1;a=!0}return a&&"_"!==e}if("x"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!bn(t.charCodeAt(n)))return!1;a=!0}return a&&"_"!==e}if("o"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!yn(t.charCodeAt(n)))return!1;a=!0}return a&&"_"!==e}}if("_"===e)return!1;for(;n<i;n++)if("_"!==(e=t[n])){if(!xn(t.charCodeAt(n)))return!1;a=!0}return!(!a||"_"===e)},construct:function(t){var e,i=t,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(e=i[0])&&"+"!==e||("-"===e&&(n=-1),e=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===e){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!Qi.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),An=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var $n=/^[-+]?[0-9]+e/;var En=new cn("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!An.test(t)||"_"===t[t.length-1])},construct:function(t){var e,i;return i="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:i*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||Qi.isNegativeZero(t))},represent:function(t,e){var i;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Qi.isNegativeZero(t))return"-0.0";return i=t.toString(10),$n.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),kn=_n.extend({implicit:[gn,vn,wn,En]}),Cn=kn,On=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Tn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Sn=new cn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==On.exec(t)||null!==Tn.exec(t))},construct:function(t){var e,i,n,a,o,s,r,l,c=0,d=null;if(null===(e=On.exec(t))&&(e=Tn.exec(t)),null===e)throw new Error("Date resolve error");if(i=+e[1],n=+e[2]-1,a=+e[3],!e[4])return new Date(Date.UTC(i,n,a));if(o=+e[4],s=+e[5],r=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(d=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(d=-d)),l=new Date(Date.UTC(i,n,a,o,s,r,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var Mn=new cn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),In="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Nn=new cn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i,n=0,a=t.length,o=In;for(i=0;i<a;i++)if(!((e=o.indexOf(t.charAt(i)))>64)){if(e<0)return!1;n+=6}return n%8==0},construct:function(t){var e,i,n=t.replace(/[\r\n=]/g,""),a=n.length,o=In,s=0,r=[];for(e=0;e<a;e++)e%4==0&&e&&(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)),s=s<<6|o.indexOf(n.charAt(e));return 0===(i=a%4*6)?(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)):18===i?(r.push(s>>10&255),r.push(s>>2&255)):12===i&&r.push(s>>4&255),new Uint8Array(r)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,i,n="",a=0,o=t.length,s=In;for(e=0;e<o;e++)e%3==0&&e&&(n+=s[a>>18&63],n+=s[a>>12&63],n+=s[a>>6&63],n+=s[63&a]),a=(a<<8)+t[e];return 0===(i=o%3)?(n+=s[a>>18&63],n+=s[a>>12&63],n+=s[a>>6&63],n+=s[63&a]):2===i?(n+=s[a>>10&63],n+=s[a>>4&63],n+=s[a<<2&63],n+=s[64]):1===i&&(n+=s[a>>2&63],n+=s[a<<4&63],n+=s[64],n+=s[64]),n}}),Ln=Object.prototype.hasOwnProperty,Pn=Object.prototype.toString;var jn=new cn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,a,o,s=[],r=t;for(e=0,i=r.length;e<i;e+=1){if(n=r[e],o=!1,"[object Object]"!==Pn.call(n))return!1;for(a in n)if(Ln.call(n,a)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==s.indexOf(a))return!1;s.push(a)}return!0},construct:function(t){return null!==t?t:[]}}),Rn=Object.prototype.toString;var zn=new cn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,a,o,s=t;for(o=new Array(s.length),e=0,i=s.length;e<i;e+=1){if(n=s[e],"[object Object]"!==Rn.call(n))return!1;if(1!==(a=Object.keys(n)).length)return!1;o[e]=[a[0],n[a[0]]]}return!0},construct:function(t){if(null===t)return[];var e,i,n,a,o,s=t;for(o=new Array(s.length),e=0,i=s.length;e<i;e+=1)n=s[e],a=Object.keys(n),o[e]=[a[0],n[a[0]]];return o}}),Un=Object.prototype.hasOwnProperty;var Vn=new cn("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,i=t;for(e in i)if(Un.call(i,e)&&null!==i[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),Dn=Cn.extend({implicit:[Sn,Mn],explicit:[Nn,jn,zn,Vn]}),Fn=Object.prototype.hasOwnProperty,Hn=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Gn=/[\x85\u2028\u2029]/,Yn=/[,\[\]\{\}]/,Bn=/^(?:!|!!|![a-z\-]+!)$/i,Wn=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function qn(t){return Object.prototype.toString.call(t)}function Kn(t){return 10===t||13===t}function Xn(t){return 9===t||32===t}function Zn(t){return 9===t||32===t||10===t||13===t}function Jn(t){return 44===t||91===t||93===t||123===t||125===t}function Qn(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function ta(t){return 120===t?2:117===t?4:85===t?8:0}function ea(t){return 48<=t&&t<=57?t-48:-1}function ia(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function na(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}function aa(t,e,i){"__proto__"===e?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[e]=i}for(var oa=new Array(256),sa=new Array(256),ra=0;ra<256;ra++)oa[ra]=ia(ra)?1:0,sa[ra]=ia(ra);function la(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||Dn,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function ca(t,e){var i={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return i.snippet=sn(i),new nn(e,i)}function da(t,e){throw ca(t,e)}function ua(t,e){t.onWarning&&t.onWarning.call(null,ca(t,e))}var ha={YAML:function(t,e,i){var n,a,o;null!==t.version&&da(t,"duplication of %YAML directive"),1!==i.length&&da(t,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&da(t,"ill-formed argument of the YAML directive"),a=parseInt(n[1],10),o=parseInt(n[2],10),1!==a&&da(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=o<2,1!==o&&2!==o&&ua(t,"unsupported YAML version of the document")},TAG:function(t,e,i){var n,a;2!==i.length&&da(t,"TAG directive accepts exactly two arguments"),n=i[0],a=i[1],Bn.test(n)||da(t,"ill-formed tag handle (first argument) of the TAG directive"),Fn.call(t.tagMap,n)&&da(t,'there is a previously declared suffix for "'+n+'" tag handle'),Wn.test(a)||da(t,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch(e){da(t,"tag prefix is malformed: "+a)}t.tagMap[n]=a}};function pa(t,e,i,n){var a,o,s,r;if(e<i){if(r=t.input.slice(e,i),n)for(a=0,o=r.length;a<o;a+=1)9===(s=r.charCodeAt(a))||32<=s&&s<=1114111||da(t,"expected valid JSON character");else Hn.test(r)&&da(t,"the stream contains non-printable characters");t.result+=r}}function ma(t,e,i,n){var a,o,s,r;for(Qi.isObject(i)||da(t,"cannot merge mappings; the provided source object is unacceptable"),s=0,r=(a=Object.keys(i)).length;s<r;s+=1)o=a[s],Fn.call(e,o)||(aa(e,o,i[o]),n[o]=!0)}function fa(t,e,i,n,a,o,s,r,l){var c,d;if(Array.isArray(a))for(c=0,d=(a=Array.prototype.slice.call(a)).length;c<d;c+=1)Array.isArray(a[c])&&da(t,"nested arrays are not supported inside keys"),"object"==typeof a&&"[object Object]"===qn(a[c])&&(a[c]="[object Object]");if("object"==typeof a&&"[object Object]"===qn(a)&&(a="[object Object]"),a=String(a),null===e&&(e={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(o))for(c=0,d=o.length;c<d;c+=1)ma(t,e,o[c],i);else ma(t,e,o,i);else t.json||Fn.call(i,a)||!Fn.call(e,a)||(t.line=s||t.line,t.lineStart=r||t.lineStart,t.position=l||t.position,da(t,"duplicated mapping key")),aa(e,a,o),delete i[a];return e}function _a(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):da(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function ga(t,e,i){for(var n=0,a=t.input.charCodeAt(t.position);0!==a;){for(;Xn(a);)9===a&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),a=t.input.charCodeAt(++t.position);if(e&&35===a)do{a=t.input.charCodeAt(++t.position)}while(10!==a&&13!==a&&0!==a);if(!Kn(a))break;for(_a(t),a=t.input.charCodeAt(t.position),n++,t.lineIndent=0;32===a;)t.lineIndent++,a=t.input.charCodeAt(++t.position)}return-1!==i&&0!==n&&t.lineIndent<i&&ua(t,"deficient indentation"),n}function va(t){var e,i=t.position;return!(45!==(e=t.input.charCodeAt(i))&&46!==e||e!==t.input.charCodeAt(i+1)||e!==t.input.charCodeAt(i+2)||(i+=3,0!==(e=t.input.charCodeAt(i))&&!Zn(e)))}function ba(t,e){1===e?t.result+=" ":e>1&&(t.result+=Qi.repeat("\n",e-1))}function ya(t,e){var i,n,a=t.tag,o=t.anchor,s=[],r=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),n=t.input.charCodeAt(t.position);0!==n&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,da(t,"tab characters must not be used in indentation")),45===n)&&Zn(t.input.charCodeAt(t.position+1));)if(r=!0,t.position++,ga(t,!0,-1)&&t.lineIndent<=e)s.push(null),n=t.input.charCodeAt(t.position);else if(i=t.line,Aa(t,e,3,!1,!0),s.push(t.result),ga(t,!0,-1),n=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>e)&&0!==n)da(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!r&&(t.tag=a,t.anchor=o,t.kind="sequence",t.result=s,!0)}function xa(t){var e,i,n,a,o=!1,s=!1;if(33!==(a=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&da(t,"duplication of a tag property"),60===(a=t.input.charCodeAt(++t.position))?(o=!0,a=t.input.charCodeAt(++t.position)):33===a?(s=!0,i="!!",a=t.input.charCodeAt(++t.position)):i="!",e=t.position,o){do{a=t.input.charCodeAt(++t.position)}while(0!==a&&62!==a);t.position<t.length?(n=t.input.slice(e,t.position),a=t.input.charCodeAt(++t.position)):da(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!Zn(a);)33===a&&(s?da(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(e-1,t.position+1),Bn.test(i)||da(t,"named tag handle cannot contain such characters"),s=!0,e=t.position+1)),a=t.input.charCodeAt(++t.position);n=t.input.slice(e,t.position),Yn.test(n)&&da(t,"tag suffix cannot contain flow indicator characters")}n&&!Wn.test(n)&&da(t,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(e){da(t,"tag name is malformed: "+n)}return o?t.tag=n:Fn.call(t.tagMap,i)?t.tag=t.tagMap[i]+n:"!"===i?t.tag="!"+n:"!!"===i?t.tag="tag:yaml.org,2002:"+n:da(t,'undeclared tag handle "'+i+'"'),!0}function wa(t){var e,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&da(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!Zn(i)&&!Jn(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&da(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function Aa(t,e,i,n,a){var o,s,r,l,c,d,u,h,p,m=1,f=!1,_=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,o=s=r=4===i||3===i,n&&ga(t,!0,-1)&&(f=!0,t.lineIndent>e?m=1:t.lineIndent===e?m=0:t.lineIndent<e&&(m=-1)),1===m)for(;xa(t)||wa(t);)ga(t,!0,-1)?(f=!0,r=o,t.lineIndent>e?m=1:t.lineIndent===e?m=0:t.lineIndent<e&&(m=-1)):r=!1;if(r&&(r=f||a),1!==m&&4!==i||(h=1===i||2===i?e:e+1,p=t.position-t.lineStart,1===m?r&&(ya(t,p)||function(t,e,i){var n,a,o,s,r,l,c,d=t.tag,u=t.anchor,h={},p=Object.create(null),m=null,f=null,_=null,g=!1,v=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=h),c=t.input.charCodeAt(t.position);0!==c;){if(g||-1===t.firstTabInLine||(t.position=t.firstTabInLine,da(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),o=t.line,63!==c&&58!==c||!Zn(n)){if(s=t.line,r=t.lineStart,l=t.position,!Aa(t,i,2,!1,!0))break;if(t.line===o){for(c=t.input.charCodeAt(t.position);Xn(c);)c=t.input.charCodeAt(++t.position);if(58===c)Zn(c=t.input.charCodeAt(++t.position))||da(t,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(fa(t,h,p,m,f,null,s,r,l),m=f=_=null),v=!0,g=!1,a=!1,m=t.tag,f=t.result;else{if(!v)return t.tag=d,t.anchor=u,!0;da(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return t.tag=d,t.anchor=u,!0;da(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&(fa(t,h,p,m,f,null,s,r,l),m=f=_=null),v=!0,g=!0,a=!0):g?(g=!1,a=!0):da(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=n;if((t.line===o||t.lineIndent>e)&&(g&&(s=t.line,r=t.lineStart,l=t.position),Aa(t,e,4,!0,a)&&(g?f=t.result:_=t.result),g||(fa(t,h,p,m,f,_,s,r,l),m=f=_=null),ga(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===o||t.lineIndent>e)&&0!==c)da(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return g&&fa(t,h,p,m,f,null,s,r,l),v&&(t.tag=d,t.anchor=u,t.kind="mapping",t.result=h),v}(t,p,h))||function(t,e){var i,n,a,o,s,r,l,c,d,u,h,p,m=!0,f=t.tag,_=t.anchor,g=Object.create(null);if(91===(p=t.input.charCodeAt(t.position)))s=93,c=!1,o=[];else{if(123!==p)return!1;s=125,c=!0,o={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=o),p=t.input.charCodeAt(++t.position);0!==p;){if(ga(t,!0,e),(p=t.input.charCodeAt(t.position))===s)return t.position++,t.tag=f,t.anchor=_,t.kind=c?"mapping":"sequence",t.result=o,!0;m?44===p&&da(t,"expected the node content, but found ','"):da(t,"missed comma between flow collection entries"),h=null,r=l=!1,63===p&&Zn(t.input.charCodeAt(t.position+1))&&(r=l=!0,t.position++,ga(t,!0,e)),i=t.line,n=t.lineStart,a=t.position,Aa(t,e,1,!1,!0),u=t.tag,d=t.result,ga(t,!0,e),p=t.input.charCodeAt(t.position),!l&&t.line!==i||58!==p||(r=!0,p=t.input.charCodeAt(++t.position),ga(t,!0,e),Aa(t,e,1,!1,!0),h=t.result),c?fa(t,o,g,u,d,h,i,n,a):r?o.push(fa(t,null,g,u,d,h,i,n,a)):o.push(d),ga(t,!0,e),44===(p=t.input.charCodeAt(t.position))?(m=!0,p=t.input.charCodeAt(++t.position)):m=!1}da(t,"unexpected end of the stream within a flow collection")}(t,h)?_=!0:(s&&function(t,e){var i,n,a,o,s=1,r=!1,l=!1,c=e,d=0,u=!1;if(124===(o=t.input.charCodeAt(t.position)))n=!1;else{if(62!==o)return!1;n=!0}for(t.kind="scalar",t.result="";0!==o;)if(43===(o=t.input.charCodeAt(++t.position))||45===o)1===s?s=43===o?3:2:da(t,"repeat of a chomping mode identifier");else{if(!((a=ea(o))>=0))break;0===a?da(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?da(t,"repeat of an indentation width identifier"):(c=e+a-1,l=!0)}if(Xn(o)){do{o=t.input.charCodeAt(++t.position)}while(Xn(o));if(35===o)do{o=t.input.charCodeAt(++t.position)}while(!Kn(o)&&0!==o)}for(;0!==o;){for(_a(t),t.lineIndent=0,o=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),Kn(o))d++;else{if(t.lineIndent<c){3===s?t.result+=Qi.repeat("\n",r?1+d:d):1===s&&r&&(t.result+="\n");break}for(n?Xn(o)?(u=!0,t.result+=Qi.repeat("\n",r?1+d:d)):u?(u=!1,t.result+=Qi.repeat("\n",d+1)):0===d?r&&(t.result+=" "):t.result+=Qi.repeat("\n",d):t.result+=Qi.repeat("\n",r?1+d:d),r=!0,l=!0,d=0,i=t.position;!Kn(o)&&0!==o;)o=t.input.charCodeAt(++t.position);pa(t,i,t.position,!1)}}return!0}(t,h)||function(t,e){var i,n,a;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=a=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if(pa(t,n,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;n=t.position,t.position++,a=t.position}else Kn(i)?(pa(t,n,a,!0),ba(t,ga(t,!1,e)),n=a=t.position):t.position===t.lineStart&&va(t)?da(t,"unexpected end of the document within a single quoted scalar"):(t.position++,a=t.position);da(t,"unexpected end of the stream within a single quoted scalar")}(t,h)||function(t,e){var i,n,a,o,s,r;if(34!==(r=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=n=t.position;0!==(r=t.input.charCodeAt(t.position));){if(34===r)return pa(t,i,t.position,!0),t.position++,!0;if(92===r){if(pa(t,i,t.position,!0),Kn(r=t.input.charCodeAt(++t.position)))ga(t,!1,e);else if(r<256&&oa[r])t.result+=sa[r],t.position++;else if((s=ta(r))>0){for(a=s,o=0;a>0;a--)(s=Qn(r=t.input.charCodeAt(++t.position)))>=0?o=(o<<4)+s:da(t,"expected hexadecimal character");t.result+=na(o),t.position++}else da(t,"unknown escape sequence");i=n=t.position}else Kn(r)?(pa(t,i,n,!0),ba(t,ga(t,!1,e)),i=n=t.position):t.position===t.lineStart&&va(t)?da(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}da(t,"unexpected end of the stream within a double quoted scalar")}(t,h)?_=!0:!function(t){var e,i,n;if(42!==(n=t.input.charCodeAt(t.position)))return!1;for(n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!Zn(n)&&!Jn(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&da(t,"name of an alias node must contain at least one character"),i=t.input.slice(e,t.position),Fn.call(t.anchorMap,i)||da(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],ga(t,!0,-1),!0}(t)?function(t,e,i){var n,a,o,s,r,l,c,d,u=t.kind,h=t.result;if(Zn(d=t.input.charCodeAt(t.position))||Jn(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(Zn(n=t.input.charCodeAt(t.position+1))||i&&Jn(n)))return!1;for(t.kind="scalar",t.result="",a=o=t.position,s=!1;0!==d;){if(58===d){if(Zn(n=t.input.charCodeAt(t.position+1))||i&&Jn(n))break}else if(35===d){if(Zn(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&va(t)||i&&Jn(d))break;if(Kn(d)){if(r=t.line,l=t.lineStart,c=t.lineIndent,ga(t,!1,-1),t.lineIndent>=e){s=!0,d=t.input.charCodeAt(t.position);continue}t.position=o,t.line=r,t.lineStart=l,t.lineIndent=c;break}}s&&(pa(t,a,o,!1),ba(t,t.line-r),a=o=t.position,s=!1),Xn(d)||(o=t.position+1),d=t.input.charCodeAt(++t.position)}return pa(t,a,o,!1),!!t.result||(t.kind=u,t.result=h,!1)}(t,h,1===i)&&(_=!0,null===t.tag&&(t.tag="?")):(_=!0,null===t.tag&&null===t.anchor||da(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===m&&(_=r&&ya(t,p))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&da(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((u=t.implicitTypes[l]).resolve(t.result)){t.result=u.construct(t.result),t.tag=u.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(Fn.call(t.typeMap[t.kind||"fallback"],t.tag))u=t.typeMap[t.kind||"fallback"][t.tag];else for(u=null,l=0,c=(d=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,d[l].tag.length)===d[l].tag){u=d[l];break}u||da(t,"unknown tag !<"+t.tag+">"),null!==t.result&&u.kind!==t.kind&&da(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+u.kind+'", not "'+t.kind+'"'),u.resolve(t.result,t.tag)?(t.result=u.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):da(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||_}function $a(t){var e,i,n,a,o=t.position,s=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(a=t.input.charCodeAt(t.position))&&(ga(t,!0,-1),a=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==a));){for(s=!0,a=t.input.charCodeAt(++t.position),e=t.position;0!==a&&!Zn(a);)a=t.input.charCodeAt(++t.position);for(n=[],(i=t.input.slice(e,t.position)).length<1&&da(t,"directive name must not be less than one character in length");0!==a;){for(;Xn(a);)a=t.input.charCodeAt(++t.position);if(35===a){do{a=t.input.charCodeAt(++t.position)}while(0!==a&&!Kn(a));break}if(Kn(a))break;for(e=t.position;0!==a&&!Zn(a);)a=t.input.charCodeAt(++t.position);n.push(t.input.slice(e,t.position))}0!==a&&_a(t),Fn.call(ha,i)?ha[i](t,i,n):ua(t,'unknown document directive "'+i+'"')}ga(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,ga(t,!0,-1)):s&&da(t,"directives end mark is expected"),Aa(t,t.lineIndent-1,4,!1,!0),ga(t,!0,-1),t.checkLineBreaks&&Gn.test(t.input.slice(o,t.position))&&ua(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&va(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,ga(t,!0,-1)):t.position<t.length-1&&da(t,"end of the stream or a document separator is expected")}function Ea(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new la(t,e),n=t.indexOf("\0");for(-1!==n&&(i.position=n,da(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)$a(i);return i.documents}var ka={loadAll:function(t,e,i){null!==e&&"object"==typeof e&&void 0===i&&(i=e,e=null);var n=Ea(t,i);if("function"!=typeof e)return n;for(var a=0,o=n.length;a<o;a+=1)e(n[a])},load:function(t,e){var i=Ea(t,e);if(0!==i.length){if(1===i.length)return i[0];throw new nn("expected a single document in the stream, but found more")}}},Ca=Object.prototype.toString,Oa=Object.prototype.hasOwnProperty,Ta=65279,Sa={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Ma=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ia=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Na(t){var e,i,n;if(e=t.toString(16).toUpperCase(),t<=255)i="x",n=2;else if(t<=65535)i="u",n=4;else{if(!(t<=4294967295))throw new nn("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+Qi.repeat("0",n-e.length)+e}function La(t){this.schema=t.schema||Dn,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=Qi.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var i,n,a,o,s,r,l;if(null===e)return{};for(i={},a=0,o=(n=Object.keys(e)).length;a<o;a+=1)s=n[a],r=String(e[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=t.compiledTypeMap.fallback[s])&&Oa.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[s]=r;return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Pa(t,e){for(var i,n=Qi.repeat(" ",e),a=0,o=-1,s="",r=t.length;a<r;)-1===(o=t.indexOf("\n",a))?(i=t.slice(a),a=r):(i=t.slice(a,o+1),a=o+1),i.length&&"\n"!==i&&(s+=n),s+=i;return s}function ja(t,e){return"\n"+Qi.repeat(" ",t.indent*e)}function Ra(t){return 32===t||9===t}function za(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==Ta||65536<=t&&t<=1114111}function Ua(t){return za(t)&&t!==Ta&&13!==t&&10!==t}function Va(t,e,i){var n=Ua(t),a=n&&!Ra(t);return(i?n:n&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!a)||Ua(e)&&!Ra(e)&&35===t||58===e&&a}function Da(t,e){var i,n=t.charCodeAt(e);return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function Fa(t){return/^\n* /.test(t)}function Ha(t,e,i,n,a,o,s,r){var l,c=0,d=null,u=!1,h=!1,p=-1!==n,m=-1,f=function(t){return za(t)&&t!==Ta&&!Ra(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(Da(t,0))&&function(t){return!Ra(t)&&58!==t}(Da(t,t.length-1));if(e||s)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!za(c=Da(t,l)))return 5;f=f&&Va(c,d,r),d=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=Da(t,l)))u=!0,p&&(h=h||l-m-1>n&&" "!==t[m+1],m=l);else if(!za(c))return 5;f=f&&Va(c,d,r),d=c}h=h||p&&l-m-1>n&&" "!==t[m+1]}return u||h?i>9&&Fa(t)?5:s?2===o?5:2:h?4:3:!f||s||a(t)?2===o?5:2:1}function Ga(t,e,i,n,a){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==Ma.indexOf(e)||Ia.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var o=t.indent*Math.max(1,i),s=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-o),r=n||t.flowLevel>-1&&i>=t.flowLevel;switch(Ha(e,r,t.indent,s,function(e){return function(t,e){var i,n;for(i=0,n=t.implicitTypes.length;i<n;i+=1)if(t.implicitTypes[i].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!n,a)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+Ya(e,t.indent)+Ba(Pa(e,o));case 4:return">"+Ya(e,t.indent)+Ba(Pa(function(t,e){var i,n,a=/(\n+)([^\n]*)/g,o=(r=t.indexOf("\n"),r=-1!==r?r:t.length,a.lastIndex=r,Wa(t.slice(0,r),e)),s="\n"===t[0]||" "===t[0];var r;for(;n=a.exec(t);){var l=n[1],c=n[2];i=" "===c[0],o+=l+(s||i||""===c?"":"\n")+Wa(c,e),s=i}return o}(e,s),o));case 5:return'"'+function(t){for(var e,i="",n=0,a=0;a<t.length;n>=65536?a+=2:a++)n=Da(t,a),!(e=Sa[n])&&za(n)?(i+=t[a],n>=65536&&(i+=t[a+1])):i+=e||Na(n);return i}(e)+'"';default:throw new nn("impossible error: invalid scalar style")}}()}function Ya(t,e){var i=Fa(t)?String(e):"",n="\n"===t[t.length-1];return i+(n&&("\n"===t[t.length-2]||"\n"===t)?"+":n?"":"-")+"\n"}function Ba(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function Wa(t,e){if(""===t||" "===t[0])return t;for(var i,n,a=/ [^ ]/g,o=0,s=0,r=0,l="";i=a.exec(t);)(r=i.index)-o>e&&(n=s>o?s:r,l+="\n"+t.slice(o,n),o=n+1),s=r;return l+="\n",t.length-o>e&&s>o?l+=t.slice(o,s)+"\n"+t.slice(s+1):l+=t.slice(o),l.slice(1)}function qa(t,e,i,n){var a,o,s,r="",l=t.tag;for(a=0,o=i.length;a<o;a+=1)s=i[a],t.replacer&&(s=t.replacer.call(i,String(a),s)),(Xa(t,e+1,s,!0,!0,!1,!0)||void 0===s&&Xa(t,e+1,null,!0,!0,!1,!0))&&(n&&""===r||(r+=ja(t,e)),t.dump&&10===t.dump.charCodeAt(0)?r+="-":r+="- ",r+=t.dump);t.tag=l,t.dump=r||"[]"}function Ka(t,e,i){var n,a,o,s,r,l;for(o=0,s=(a=i?t.explicitTypes:t.implicitTypes).length;o<s;o+=1)if(((r=a[o]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof e&&e instanceof r.instanceOf)&&(!r.predicate||r.predicate(e))){if(i?r.multi&&r.representName?t.tag=r.representName(e):t.tag=r.tag:t.tag="?",r.represent){if(l=t.styleMap[r.tag]||r.defaultStyle,"[object Function]"===Ca.call(r.represent))n=r.represent(e,l);else{if(!Oa.call(r.represent,l))throw new nn("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');n=r.represent[l](e,l)}t.dump=n}return!0}return!1}function Xa(t,e,i,n,a,o,s){t.tag=null,t.dump=i,Ka(t,i,!1)||Ka(t,i,!0);var r,l=Ca.call(t.dump),c=n;n&&(n=t.flowLevel<0||t.flowLevel>e);var d,u,h="[object Object]"===l||"[object Array]"===l;if(h&&(u=-1!==(d=t.duplicates.indexOf(i))),(null!==t.tag&&"?"!==t.tag||u||2!==t.indent&&e>0)&&(a=!1),u&&t.usedDuplicates[d])t.dump="*ref_"+d;else{if(h&&u&&!t.usedDuplicates[d]&&(t.usedDuplicates[d]=!0),"[object Object]"===l)n&&0!==Object.keys(t.dump).length?(!function(t,e,i,n){var a,o,s,r,l,c,d="",u=t.tag,h=Object.keys(i);if(!0===t.sortKeys)h.sort();else if("function"==typeof t.sortKeys)h.sort(t.sortKeys);else if(t.sortKeys)throw new nn("sortKeys must be a boolean or a function");for(a=0,o=h.length;a<o;a+=1)c="",n&&""===d||(c+=ja(t,e)),r=i[s=h[a]],t.replacer&&(r=t.replacer.call(i,s,r)),Xa(t,e+1,s,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=ja(t,e)),Xa(t,e+1,r,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=t.dump));t.tag=u,t.dump=d||"{}"}(t,e,t.dump,a),u&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,a,o,s,r,l="",c=t.tag,d=Object.keys(i);for(n=0,a=d.length;n<a;n+=1)r="",""!==l&&(r+=", "),t.condenseFlow&&(r+='"'),s=i[o=d[n]],t.replacer&&(s=t.replacer.call(i,o,s)),Xa(t,e,o,!1,!1)&&(t.dump.length>1024&&(r+="? "),r+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Xa(t,e,s,!1,!1)&&(l+=r+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),u&&(t.dump="&ref_"+d+" "+t.dump));else if("[object Array]"===l)n&&0!==t.dump.length?(t.noArrayIndent&&!s&&e>0?qa(t,e-1,t.dump,a):qa(t,e,t.dump,a),u&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,a,o,s="",r=t.tag;for(n=0,a=i.length;n<a;n+=1)o=i[n],t.replacer&&(o=t.replacer.call(i,String(n),o)),(Xa(t,e,o,!1,!1)||void 0===o&&Xa(t,e,null,!1,!1))&&(""!==s&&(s+=","+(t.condenseFlow?"":" ")),s+=t.dump);t.tag=r,t.dump="["+s+"]"}(t,e,t.dump),u&&(t.dump="&ref_"+d+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new nn("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&Ga(t,t.dump,e,o,c)}null!==t.tag&&"?"!==t.tag&&(r=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),r="!"===t.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",t.dump=r+" "+t.dump)}return!0}function Za(t,e){var i,n,a=[],o=[];for(Ja(t,a,o),i=0,n=o.length;i<n;i+=1)e.duplicates.push(a[o[i]]);e.usedDuplicates=new Array(n)}function Ja(t,e,i){var n,a,o;if(null!==t&&"object"==typeof t)if(-1!==(a=e.indexOf(t)))-1===i.indexOf(a)&&i.push(a);else if(e.push(t),Array.isArray(t))for(a=0,o=t.length;a<o;a+=1)Ja(t[a],e,i);else for(a=0,o=(n=Object.keys(t)).length;a<o;a+=1)Ja(t[n[a]],e,i)}function Qa(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var to={Type:cn,Schema:hn,FAILSAFE_SCHEMA:_n,JSON_SCHEMA:kn,CORE_SCHEMA:Cn,DEFAULT_SCHEMA:Dn,load:ka.load,loadAll:ka.loadAll,dump:{dump:function(t,e){var i=new La(e=e||{});i.noRefs||Za(t,i);var n=t;return i.replacer&&(n=i.replacer.call({"":n},"",n)),Xa(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:nn,types:{binary:Nn,float:En,map:fn,null:gn,pairs:zn,set:Vn,timestamp:Sn,bool:vn,int:wn,merge:Mn,omap:jn,seq:mn,str:pn},safeLoad:Qa("safeLoad","load"),safeLoadAll:Qa("safeLoadAll","loadAll"),safeDump:Qa("safeDump","dump")};const eo=t=>{switch(t){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};function io(t){const e=t.cameras,i=t.lighting,n=t.wifi,a=t.climate,o="tap_action";return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\n  slidesOffsetAfter: 7\ncards:\n  - type: custom:button-card\n    show_icon: false\n    show_name: false\n    show_label: false\n    tap_action:\n      action: none\n    hold_action:\n      action: none\n    styles:\n      card:\n        - width: 13px\n        - height: 130px\n        - min-width: 13px\n        - min-height: 130px\n        - padding: 0px\n        - margin: 0px\n        - box-shadow: none\n        - background: transparent\n        - pointer-events: none\n        - border: none\n  ${t.hide_cameras?"":function(t,e){return`- type: custom:button-card\n    icon: m3r:videocam\n    name: ${si("material_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${si("material_dashboard_card.devices")}" : devices + " " + "${si("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${eo(t)}:\n      action: none\n      haptic: medium\n    ${t}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('camera.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#1A2238' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n                ]]]\n`}(o,e)}\n  ${t.hide_lighting?"":function(t,e){return`- type: custom:button-card\n    icon: m3r:light-group\n    name: ${si("material_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${si("material_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${eo(t)}:\n      action: none\n      haptic: medium\n    ${t}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n`}(o,i)}\n  ${t.hide_wifi?"":function(t,e){return`- type: custom:button-card\n    icon: m3of:wifi\n    name: ${si("material_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${si("material_dashboard_card.devices")}") : (devices + " " + "${si("material_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${eo(t)}:\n      action: none\n      haptic: medium\n    ${t}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n`}(o,n)}\n  ${t.hide_climate?"":function(t,e){return`- type: custom:button-card\n    icon: m3of:thermostat\n    name: ${si("material_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${si("material_dashboard_card.devices")}" : climateEntities + " " + "${si("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${eo(t)}:\n      action: none\n      haptic: medium\n    ${t}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(o,a)}\n`}let no=class extends rt{static getStubConfig(){return{type:"custom:material-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=to.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-dashboard-card-editor")}mapTemplate(t){return io(t)}_handleClick(t){const e=t.target.closest(".ripple-card");e&&mi(e,t)}render(){return this._card?H`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};no.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,t([ht({attribute:!1})],no.prototype,"hass",void 0),t([pt()],no.prototype,"_config",void 0),t([pt()],no.prototype,"_card",void 0),no=t([ct("material-dashboard-card")],no);const ao={type:"custom:material-dashboard-card"};function oo(t,e){const i=t.target.getAttribute("configValue"),n=t.detail.value;i&&e._config[i]!==n&&(e._config=Object.assign(Object.assign({},e._config),{[i]:n}),e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e._config}})))}function so(t,e){var i;const n=t.detail.value;(null===(i=e._config)||void 0===i?void 0:i.entity)!==n&&(e._config=Object.assign(Object.assign({},e._config),{entity:n}),e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e._config}})))}function ro(t,e){var i,n,a;const o=t.target,s=o.getAttribute("configValue"),r=null!==(a=null!==(n=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:o.value)&&void 0!==a?a:o.checked;s&&e._config[s]!==r&&(e._config=Object.assign(Object.assign({},e._config),{[s]:r}),e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e._config}})))}let lo=class extends rt{constructor(){super(...arguments),this._config=ao}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n;return this._config&&this.hass?H`
      <div class="form">
        <span class="switch-label"
          >${si("material_dashboard_card.description")}</span
        >

        <div class="switch-row">
          <span class="text-label">
            ${si("material_dashboard_card.cameras")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${si("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(t=this._config.hide_cameras)&&void 0!==t&&t}
              configValue="hide_cameras"
              @change=${t=>ro(t,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.cameras||""}
          .label=${si("material_dashboard_card.cameras")}
          configValue="cameras"
          @value-changed=${t=>oo(t,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${si("material_dashboard_card.lighting")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${si("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(e=this._config.hide_lighting)&&void 0!==e&&e}
              configValue="hide_lighting"
              @change=${t=>ro(t,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.lighting||""}
          .label=${si("material_dashboard_card.lighting")}
          configValue="lighting"
          @value-changed=${t=>oo(t,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${si("material_dashboard_card.wifi")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${si("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(i=this._config.hide_wifi)&&void 0!==i&&i}
              configValue="hide_wifi"
              @change=${t=>ro(t,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.wifi||""}
          .label=${si("material_dashboard_card.wifi")}
          configValue="wifi"
          @value-changed=${t=>oo(t,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${si("material_dashboard_card.climate")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${si("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(n=this._config.hide_climate)&&void 0!==n&&n}
              configValue="hide_climate"
              @change=${t=>ro(t,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.climate||""}
          .label=${si("material_dashboard_card.climate")}
          configValue="climate"
          @value-changed=${t=>oo(t,this)}
        ></ha-selector>
      </div>
    `:H``}};lo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-control {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .switch-label {
      font-size: 14px;
      font-weight: 500;
    }
  `,t([ht({attribute:!1})],lo.prototype,"hass",void 0),t([pt()],lo.prototype,"_config",void 0),lo=t([ct("material-dashboard-card-editor")],lo);class co{#t;#e;#i=0;#n=0;#a=0;#o=0;#s;#r=!1;#l;#c;#d;constructor(t,e,{touchActions:i,stopScrollDirection:n="both"}={}){this.#t=t,this.#e=i,this.#s=e,this.#l=n,this.#c=this.#u.bind(this),this.#d=this.#h.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#d),this.#t.addEventListener("pointermove",this.#d),this.#t.addEventListener("pointerup",this.#d),this.#t.addEventListener("pointercancel",this.#d),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#d),this.#t.removeEventListener("pointermove",this.#d),this.#t.removeEventListener("pointerup",this.#d),this.#t.removeEventListener("pointercancel",this.#d),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#r=!0}#m(){this.#r=!1}#u(t){this.#r&&t.preventDefault()}#h(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#n=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#s){const e=t.pageX-this.#i,i=t.pageY-this.#n,n=Math.abs(e/i)>1,a=Math.abs(e/i)<1;"horizontal"===this.#l&&n&&this.#p(),"vertical"===this.#l&&a&&this.#p(),"both"===this.#l&&this.#p(),this.#s(t,{startX:this.#i,startY:this.#n,relativeX:e,relativeY:i,totalX:e+this.#a,totalY:i+this.#o})}"pointerup"===t.type&&(this.#a=+this.#a+t.pageX-this.#i,this.#o=+this.#o+t.pageY-this.#n,this.#t.releasePointerCapture(t.pointerId),this.#m()),"pointercancel"===t.type&&(this.#s(t,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#a,totalY:this.#o}),this.#t.releasePointerCapture(t.pointerId),this.#m())}}const uo={type:"custom:material-slider-card",control_type:wi.LIGHT,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function ho(t,e,i,n=t=>t){null!=e&&""!==e&&i.setProperty(t,n(e))}class po extends rt{constructor(){super(...arguments),this._config=uo,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=xi,this.clickOffset=0,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now()),["pointerdown","pointermove","pointerup"].includes(t.type)&&(this.isHold||this._updateValue()),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();!this.isHold&&Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light.")).sort();return{type:"custom:material-slider-card",entity:e[Math.floor(Math.random()*e.length)],icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-slider-card-editor")}setConfig(t){if(!t)throw new Error(si("common.invalid_configuration"));if(!t.entity)throw new Error(si("common.no_entity_set"));const e=t.entity.split(".")[0];if(t.control_type===wi.LIGHT&&e!==Ai.LIGHT||t.control_type===wi.COVER&&e!==Ai.COVER||t.control_type===wi.NUMBER&&e!==Ai.NUMBER||t.control_type===wi.INPUT_NUMBER&&e!==Ai.INPUT_NUMBER||t.control_type===wi.MEDIA_PLAYER_VOLUME&&e!==Ai.MEDIA_PLAYER||t.control_type===wi.FAN&&e!==Ai.FAN||t.control_type===wi.CLIMATE&&e!==Ai.CLIMATE)throw new Error(`Entity must match the selected control type (${t.control_type})`);const i=Object.assign(Object.assign({},uo),t);i.attribute||(i.control_type===wi.LIGHT?i.attribute="brightness":i.control_type===wi.COVER?i.attribute="current_position":i.control_type===wi.NUMBER||i.control_type===wi.INPUT_NUMBER?i.attribute="value":i.control_type===wi.MEDIA_PLAYER_VOLUME?i.attribute="volume_level":i.control_type===wi.FAN?i.attribute="percentage":i.control_type===wi.CLIMATE&&(i.attribute="temperature")),this._config=i,this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,i,n,a,o,s,r,l,c,d,u,h,p,m,f,_,g,v,b,y,x,w,A,$,E,k,C,O,T,S,M,I,N,L,P,j,R,z,U,V;if(!this._entity)return;if(this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._config.control_type===wi.LIGHT){const t=null!==(a=null===(n=null===(i=this._state)||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.brightness)&&void 0!==a?a:0;this.currentValue=Math.round(100*t/255)}else if(this._config.control_type===wi.COVER)this.currentValue=null!==(r=null===(s=null===(o=this._state)||void 0===o?void 0:o.attributes)||void 0===s?void 0:s.current_position)&&void 0!==r?r:0;else if(this._config.control_type===wi.NUMBER||this._config.control_type===wi.INPUT_NUMBER){const t=parseFloat(null!==(c=null===(l=this._state)||void 0===l?void 0:l.state)&&void 0!==c?c:"0"),e=null!==(h=null===(u=null===(d=this._state)||void 0===d?void 0:d.attributes)||void 0===u?void 0:u.min)&&void 0!==h?h:0,i=null!==(f=null===(m=null===(p=this._state)||void 0===p?void 0:p.attributes)||void 0===m?void 0:m.max)&&void 0!==f?f:100;this.currentValue=Math.round((t-e)/(i-e)*100)}else if(this._config.control_type===wi.MEDIA_PLAYER_VOLUME){const t=null!==(v=null===(g=null===(_=this._state)||void 0===_?void 0:_.attributes)||void 0===g?void 0:g.volume_level)&&void 0!==v?v:0;this.currentValue=Math.round(100*t)}else if(this._config.control_type===wi.FAN){const t="on"===this._status&&null!==(x=null===(y=null===(b=this._state)||void 0===b?void 0:b.attributes)||void 0===y?void 0:y.percentage)&&void 0!==x?x:0;this.currentValue=t}else if(this._config.control_type===wi.CLIMATE){const t=null!==(C=null!==($=null===(A=null===(w=this._state)||void 0===w?void 0:w.attributes)||void 0===A?void 0:A.temperature)&&void 0!==$?$:null===(k=null===(E=this._state)||void 0===E?void 0:E.attributes)||void 0===k?void 0:k.min_temp)&&void 0!==C?C:0,e=null!==(S=null===(T=null===(O=this._state)||void 0===O?void 0:O.attributes)||void 0===T?void 0:T.min_temp)&&void 0!==S?S:7,i=null!==(N=null===(I=null===(M=this._state)||void 0===M?void 0:M.attributes)||void 0===I?void 0:I.max_temp)&&void 0!==N?N:35;this.currentValue=Math.round((t-e)/(i-e)*100)}this._name=null!==(z=null!==(R=null!==(L=this._config.name)&&void 0!==L?L:null===(j=null===(P=this._state)||void 0===P?void 0:P.attributes)||void 0===j?void 0:j.friendly_name)&&void 0!==R?R:this._entity.split(".")[1])&&void 0!==z?z:"";const D=(null===(U=t.themes)||void 0===U?void 0:U.darkMode)?"dark":"light",F=null===(V=t.states[this._entity])||void 0===V?void 0:V.state;this._lastTheme===D&&this._lastEntityState===F||(this._lastTheme=D,this._lastEntityState=F,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new co(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){var t,e,i;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container");if(!n)return;const a=n.clientWidth;if(!a||0===a)return;this.containerWidth=a;const o=n.getBoundingClientRect(),s=this.mousePos.x-o.left,r=Math.max(0,Math.min(s,a))/a*100,l=null!==(e=this._config.min)&&void 0!==e?e:0,c=null!==(i=this._config.max)&&void 0!==i?i:100;this.currentValue=Math.round(l+r/100*(c-l)),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,n=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i),this.currentValue>n&&(this.currentValue=n)}_updateSlider(){var t,e,i,n,a,o,s,r,l,c,d,u,h,p,m,f,_,g,v;this.style.setProperty("--bsc-percent",this.currentValue+"%");const b=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");if(this._state&&this._state.attributes.brightness)b&&(b.innerText=Math.round(this.currentValue)+"%");else if(this._config.control_type==wi.COVER&&this._state&&this._state.attributes.current_position)this._state.state==ki.OPENING?b&&(b.innerText=this._getStateText("opening")):b&&(b.innerText=this._getStateText("open")+" • "+Math.round(this.currentValue)+"%");else if(this._config.control_type!=wi.NUMBER&&this._config.control_type!=wi.INPUT_NUMBER||!this._state)if(this._config.control_type==wi.MEDIA_PLAYER_VOLUME&&this._state)b&&(b.innerText=Math.round(this.currentValue)+"%");else if(this._config.control_type==wi.FAN&&this._state)b&&(b.innerText=Math.round(this.currentValue)+"%");else if(this._config.control_type==wi.CLIMATE&&this._state){const t=null!==(d=null===(c=this._state.attributes)||void 0===c?void 0:c.min_temp)&&void 0!==d?d:7,e=null!==(h=null===(u=this._state.attributes)||void 0===u?void 0:u.max_temp)&&void 0!==h?h:35,i=t+this.currentValue/100*(e-t),n=null!==(_=null===(f=null===(m=null===(p=this._hass)||void 0===p?void 0:p.config)||void 0===m?void 0:m.unit_system)||void 0===f?void 0:f.temperature)&&void 0!==_?_:"°C",a=(null!==(v=null===(g=this._state.attributes)||void 0===g?void 0:g.target_temp_step)&&void 0!==v?v:.5)<1?1:0;b&&(b.innerText=`${i.toFixed(a)} ${n}`)}else b&&(b.innerText=this._getStateText("on"));else{const t=null!==(i=null===(e=this._state.attributes)||void 0===e?void 0:e.min)&&void 0!==i?i:0,c=null!==(a=null===(n=this._state.attributes)||void 0===n?void 0:n.max)&&void 0!==a?a:100,d=t+this.currentValue/100*(c-t),u=null!==(s=null===(o=this._state.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==s?s:"",h=null!==(l=null===(r=this._state.attributes)||void 0===r?void 0:r.step)&&void 0!==l?l:1,p=h<1?Math.ceil(-Math.log10(h)):0,m=d.toFixed(p);b&&(b.innerText=`${m}${u?" "+u:""}`)}}_getStateText(t){var e,i,n;if(null===(e=this._hass)||void 0===e?void 0:e.localize){const e=`component.${null!==(n=null===(i=this._entity)||void 0===i?void 0:i.split(".")[0])&&void 0!==n?n:"cover"}.entity_component._.state.${t}`,a=this._hass.localize(e);if(a&&a!==e)return a}return si(`common.${t}`)}_updateColors(){var t,e,i,n,a;let o="var(--bsc-color)",s="0%",r="50%",l=!1;if(this._state)if(this._status==ki.ON){const a=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==n?n:255;l=!0,a&&(o=`rgb(${a.join(",")})`),c&&(s=`${Math.ceil(100*c/255)}%`,r=`${Math.ceil(100*c/510+50)}%`)}else this._status==ki.OPEN?l=!0:this._config.control_type!==wi.NUMBER&&this._config.control_type!==wi.INPUT_NUMBER&&this._config.control_type!==wi.MEDIA_PLAYER_VOLUME&&this._config.control_type!==wi.FAN&&this._config.control_type!==wi.CLIMATE||Ii(this._status)?o="var(--bsc-off-color)":l=!0;const c=null===(a=null==this?void 0:this.shadowRoot)||void 0===a?void 0:a.getElementById("percentage");if(!l){Ii(this._status)?c&&(c.innerText=this._getStateText("offline")):(this._status==Ci.OFF&&c&&(c.innerText=this._getStateText("off")),this._status==Ci.CLOSED&&c&&(c.innerText=this._getStateText("closed")),this._status==Ci.CLOSING&&c&&(c.innerText=this._getStateText("closing")))}this.style.setProperty("--bsc-entity-color",o),this.style.setProperty("--bsc-brightness",s),this.style.setProperty("--bsc-brightness-ui",r),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,i,n,a,o,s,r,l,c,d,u,h,p,m,f,_,g,v,b,y;if(!this._shouldUpdate)return;if(!this._state)return;if(this._config.control_type===wi.COVER)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(t=this._state.attributes.current_position)&&void 0!==t?t:0),void this._updateSlider();if(this._config.control_type===wi.NUMBER||this._config.control_type===wi.INPUT_NUMBER){const t=null!==(i=null===(e=this._state.attributes)||void 0===e?void 0:e.min)&&void 0!==i?i:0,s=null!==(a=null===(n=this._state.attributes)||void 0===n?void 0:n.max)&&void 0!==a?a:100;if(this._config.min=0,this._config.max=100,"unavailable"==this._status)this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5");else{this.style.removeProperty("--bsc-opacity");const e=parseFloat(null!==(o=this._state.state)&&void 0!==o?o:"0");this.currentValue=Math.round((e-t)/(s-t)*100)}return void this._updateSlider()}if(this._config.control_type===wi.FAN)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):"on"!==this._status?(this.style.removeProperty("--bsc-opacity"),this.currentValue=0):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(r=null===(s=this._state.attributes)||void 0===s?void 0:s.percentage)&&void 0!==r?r:0),void this._updateSlider();if(this._config.control_type===wi.CLIMATE){if(this._config.min=0,this._config.max=100,"unavailable"==this._status)this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5");else{this.style.removeProperty("--bsc-opacity");const t=null!==(c=null===(l=this._state.attributes)||void 0===l?void 0:l.min_temp)&&void 0!==c?c:7,e=null!==(u=null===(d=this._state.attributes)||void 0===d?void 0:d.max_temp)&&void 0!==u?u:35,i=null!==(p=null===(h=this._state.attributes)||void 0===h?void 0:h.temperature)&&void 0!==p?p:t;this.currentValue=Math.round((i-t)/(e-t)*100)}return void this._updateSlider()}if(this._config.control_type===wi.MEDIA_PLAYER_VOLUME){if(this._config.min=0,this._config.max=100,"unavailable"==this._status||"off"==this._status)this.currentValue=0,"unavailable"==this._status?this.style.setProperty("--bsc-opacity","0.5"):this.style.removeProperty("--bsc-opacity");else{this.style.removeProperty("--bsc-opacity");const t=null!==(f=null===(m=this._state.attributes)||void 0===m?void 0:m.volume_level)&&void 0!==f?f:0;this.currentValue=Math.round(100*t)}return void this._updateSlider()}const x=null===(_=this._config)||void 0===_?void 0:_.attribute;let w=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)w=null!==(g=this._config.min)&&void 0!==g?g:0;else switch(x){case"brightness":w=Math.round(100*(null!==(v=this._state.attributes.brightness)&&void 0!==v?v:255)/255);break;case"red":case"green":case"blue":const t=null!==(b=this._state.attributes.rgb_color)&&void 0!==b?b:[255,255,255];"red"===x&&(w=t[0]),"green"===x&&(w=t[1]),"blue"===x&&(w=t[2]),w=Math.ceil(100*w/255);break;case"hue":case"saturation":const e=null!==(y=this._state.attributes.hs_color)&&void 0!==y?y:[100,100];"hue"===x&&(w=e[0]),"saturation"===x&&(w=e[1])}this.currentValue=w,this._updateSlider()}_setValue(){var t,e,i,n,a,o,s,r,l,c,d,u,h,p,m,f;if(!this._state)return;if(this._config.control_type===wi.COVER)return void this._hass.callService("cover","set_cover_position",{entity_id:this._state.entity_id,position:this.currentValue});if(this._config.control_type===wi.NUMBER){const a=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.min)&&void 0!==e?e:0,o=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.max)&&void 0!==n?n:100,s=a+this.currentValue/100*(o-a);return void this._hass.callService("number","set_value",{entity_id:this._state.entity_id,value:s})}if(this._config.control_type===wi.INPUT_NUMBER){const t=null!==(o=null===(a=this._state.attributes)||void 0===a?void 0:a.min)&&void 0!==o?o:0,e=null!==(r=null===(s=this._state.attributes)||void 0===s?void 0:s.max)&&void 0!==r?r:100,i=t+this.currentValue/100*(e-t);return void this._hass.callService("input_number","set_value",{entity_id:this._state.entity_id,value:i})}if(this._config.control_type===wi.FAN)return void(0===this.currentValue?this._hass.callService("fan","turn_off",{entity_id:this._state.entity_id}):this._hass.callService("fan","set_percentage",{entity_id:this._state.entity_id,percentage:this.currentValue}));if(this._config.control_type===wi.CLIMATE){const t=null!==(c=null===(l=this._state.attributes)||void 0===l?void 0:l.min_temp)&&void 0!==c?c:7,e=null!==(u=null===(d=this._state.attributes)||void 0===d?void 0:d.max_temp)&&void 0!==u?u:35,i=t+this.currentValue/100*(e-t);return"off"===this._status&&this._hass.callService("climate","turn_on",{entity_id:this._state.entity_id}),void this._hass.callService("climate","set_temperature",{entity_id:this._state.entity_id,temperature:i})}if(this._config.control_type===wi.MEDIA_PLAYER_VOLUME){const t=this.currentValue/100;return void this._hass.callService("media_player","volume_set",{entity_id:this._state.entity_id,volume_level:t})}let _,g=this.currentValue,v=null!==(p=null===(h=this._config)||void 0===h?void 0:h.attribute)&&void 0!==p?p:"brightness",b=!0;switch(v){case"brightness":g=Math.ceil(g/100*255),g||(b=!1);break;case"red":case"green":case"blue":_=null!==(m=this._state.attributes.rgb_color)&&void 0!==m?m:[255,255,255],"red"===v&&(_[0]=g),"green"===v&&(_[1]=g),"blue"===v&&(_[2]=g),g=_,v="rgb_color";break;case"hue":case"saturation":_=null!==(f=this._state.attributes.hs_color)&&void 0!==f?f:[100,100],"hue"===v&&(_[0]=g),"saturation"===v&&(_[1]=g),g=_,v="hs_color"}const y={entity_id:this._state.entity_id};b?(y[v]=g,this._config.transition&&(y.transition=this._config.transition),this._hass.callService("light","turn_on",y)):this._hass.callService("light","turn_off",y)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){mi(t.currentTarget,t)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,e,i,n,a,o,s,r,l;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${si("common.no_entity")}: ${this._entity}`);const c=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,d=null!==(n=this._config.show_percentage&&!0)&&void 0!==n&&n,u=null!==(a=this._config.bold_text&&!0)&&void 0!==a&&a,h=null===(s=null===(o=this._hass)||void 0===o?void 0:o.states)||void 0===s?void 0:s[this._entity],p=Ii(h.state),m=(null===(l=null===(r=this._hass)||void 0===r?void 0:r.themes)||void 0===l?void 0:l.darkMode)?"dark":"light",f=Mi(h.state);!function(t,e,i,n,a){const o=i?"offline":n?"on":"off",s=e.control_type==wi.LIGHT?Ai.LIGHT:Ai.BUTTON,r=xi[a][o][s];bi(r)||(ho("--bsc-name-color",r.title,t),ho("--bsc-icon-color",r.icon,t),ho("--bsc-percentage-color",r.percentage,t),e.control_type!=wi.LIGHT&&n?(ho("--bsc-slider-color",r.background,t),ho("--bsc-background",r.back_slider_color,t)):(ho("--bsc-slider-color",r.slider,t),ho("--bsc-background",r.background,t)),ho("--bsc-name-margin","-20px",t),ho("--bsc-icon-margin","-10px",t),ho("--bsc-percentage-margin","-20px",t),ho("--bsc-primary-text-color",e.text_color,t),ho("--bsc-border-color",e.border_color,t),ho("--bsc-border-radius",e.border_radius,t),ho("--bsc-border-style",e.border_style,t),ho("--bsc-border-width",e.border_width,t),ho("--bsc-height",e.height,t,t=>`${t}px`))}(this.style,this._config,p,f,m);const _=Vi(h,this._config,this.hass);return H`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${p?"padding: 12px 35px 12px 12px;":"padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${c?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${_||void 0}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(t=>t??Y)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${u?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${d?"":"hide"} ${u?"bold":""}"
            ></span>
          </p>
        </div>
        ${p?H`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_showWarning(t){return H` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),H` ${e} `}static get styles(){return s`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius, 28px);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 28px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition:
          background-color 1s ease,
          filter 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease,
          filter 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      @media (max-width: 420px) {
        #icon_offline {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `}}t([pt()],po.prototype,"_config",void 0),t([pt()],po.prototype,"_entity",void 0),t([pt()],po.prototype,"_state",void 0),t([pt()],po.prototype,"_status",void 0),t([pt()],po.prototype,"_name",void 0);const mo={type:"custom:material-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let fo=class extends rt{constructor(){super(...arguments),this._config=mo,this.material_color_scheme=xi}setConfig(t){if(!t||!t.entity)throw new Error(si("common.invalid_configuration"));this._config=t}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("climate.")).sort();return{type:"custom:material-climate-card",entity:e[Math.floor(Math.random()*e.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-climate-card-editor")}_onClick(t){if(mi(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const e=this._config.entity;di(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const i=this.hass.states[this._config.entity],n=Number(Ni(this._config.fix_temperature,i.attributes.temperature));if(isNaN(n))return;const a=(o=this._config.fix_temperature,bi(s=n+t)?s:"true"==o||"auto"==o&&s<7?s/5:s);var o,s;this.hass.states[this._config.entity].attributes.temperature=a,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:a}),setTimeout(()=>{this.requestUpdate()},500)}render(){var t,e,i;if(!this._config||!this.hass)return H``;const n=this.hass.states[this._config.entity];if(!n)return H`<ha-card
        ><div class="warning">${si("common.no_entity")}</div></ha-card
      >`;const a=Fi(this._config,this.hass),o=Ii(n.state),s=Di(n,"thermometer",o,this._config.fix_temperature,!0,this.hass),r=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light",l=Mi(n.state),c=!l&&!bi(n.attributes.temperature),d=null===(i=n.attributes)||void 0===i?void 0:i.preset_mode,u=d&&"eco"==d?d:n.state;!function(t,e,i,n,a,o){const s=e?"offline":i?"on":"off",r="climate",l=xi,c=o?Li(a):"default";let d;d=e?l[n][s][r]:i?l[n][s][r][c]:l[n][s][r].default,bi(d)||(yi("--bsc-name-color",d.title,t),yi("--bsc-icon-color",d.icon,t),yi("--bsc-adjustTemp-color",d.button,t),yi("--bsc-internalTemp-color",d.subtitle,t),yi("--bsc-background",d.background,t))}(this.style,o,l,r,u,this._config.use_material_color);const h={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return H`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            ${Vi(n,h,this.hass)?H`<ha-icon
                  id="icon_offline"
                  icon="${Vi(n,h,this.hass)}"
                  title="Climate"
                  class="chevron"
                  style="
                    --mdc-icon-size: 20px;
                    margin-top: -5px;
                  "
                ></ha-icon>`:H`<ha-state-icon
                  .stateObj=${n}
                  title="Climate"
                  class="chevron"
                  style="
                    --mdc-icon-size: 20px;
                    margin-top: -5px;
                  "
                ></ha-state-icon>`}

            <span class="valve-name">${a}</span>
          </div>

          ${o?H`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:H`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${o?H`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:H`
              <div
                class="temperature-control"
                style="${l||c?"justify-content: space-between;":"justify-content: center;"}"
              >
                ${l||c?H`<button
                      class="control-btn minus-btn"
                      @click=${()=>this._adjustTemp(-(this._config.decrease_temp||mo.decrease_temp))}
                    >
                      −
                    </button>`:H``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${l||c?"":"font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${l||c?Ni(this._config.fix_temperature,n.attributes.temperature):si("common.off")}
                </div>
                ${l||c?H`<button
                      class="control-btn plus-btn"
                      @click=${()=>this._adjustTemp(+(this._config.increase_temp||mo.increase_temp))}
                    >
                      +
                    </button>`:H``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${s}</span>
              </div>
            `}
      </div>
    `}};fo.styles=s`
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bsc-background);
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: var(--bsc-icon-color);
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: var(--bsc-adjustTemp-color);
      border: none;
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `,t([ht({attribute:!1})],fo.prototype,"hass",void 0),t([pt()],fo.prototype,"_config",void 0),fo=t([ct("material-climate-card")],fo);let _o=class extends rt{constructor(){super(...arguments),this._config=mo}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n,a,o,s,r;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,H`
      <div class="form">
        <ha-textfield
          label="${si("material_climate_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${t=>ro(t,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${si("material_climate_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${t=>so(t,this)}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${t=>ro(t,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
            configValue="use_default_icon"
            @change=${t=>ro(t,this)}
          />
        </div>

        ${this._config.use_default_icon?H`
              <div class="switch-row">
                <span class="switch-label"
                  >${null!==(a=si("material_climate_card.use_material_icons"))&&void 0!==a?a:"Use Material Icons"}</span
                >
                <ha-switch
                  .checked=${null===(o=this._config.use_material_icons)||void 0===o||o}
                  configValue="use_material_icons"
                  @change=${t=>ro(t,this)}
                />
              </div>
            `:H`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon||""}
                configValue="icon"
                @value-changed=${t=>ro(t,this)}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${si("material_climate_card.increase_temp")}"
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @input=${t=>ro(t,this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${si("material_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @input=${t=>ro(t,this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${si("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(s=this._config.fix_temperature)&&void 0!==s&&s}
            configValue="fix_temperature"
            @change=${t=>ro(t,this)}
          />
        </div>-->

        <ha-select
          label="${si("material_climate_card.fix_temperature")}"
          .value=${null!==(r=this._config.fix_temperature)&&void 0!==r?r:"false"}
          configValue="fix_temperature"
          @selected=${t=>ro(t,this)}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${si("material_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${si("material_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${si("material_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
      </div>
    `):H``}};_o.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,t([ht({attribute:!1})],_o.prototype,"hass",void 0),t([pt()],_o.prototype,"_config",void 0),_o=t([ct("material-climate-card-editor")],_o);const go={type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}},vo={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}};let bo=class extends rt{constructor(){super(...arguments),this._config=go}async setConfig(t){if(!t)throw new Error(si("common.invalid_configuration"));this._config=t}static getStubConfig(){return{type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"none"}}}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=to.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-control-card-editor")}mapTemplate(){const t=Fi(this._config,this.hass),e=function(t){const e=t.name;let i=t.icon;if("string"==typeof i&&i.trim().startsWith("[[[")&&i.trim().endsWith("]]]")){const t=i.trim().split("\n").map(t=>"  "+t).join("\n");i=`|\n${t}`}return`type: custom:button-card\nname: ${e}\nicon: ${i}\n${t.use_card_entity&&t.entity?"entity: "+t.entity:""}\ntap_action:\n  ${Wi(t.tap_action)}\nhold_action:\n  ${Wi(t.hold_action)}\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    - background-color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-surface-container, '#1f2022')"\n            : "var(--md-sys-color-surface-container, '#eeedf2')";\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')"\n            : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";\n        ]]]\n  icon:\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')"\n            : "var(--md-sys-color-on-surface-variant,'#43484e')";\n        ]]]\n`}(Object.assign(Object.assign({},this._config),{name:t}));return e}render(){return this._card?H`${this._card}`:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};bo.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,t([ht({attribute:!1})],bo.prototype,"hass",void 0),t([pt()],bo.prototype,"_config",void 0),t([pt()],bo.prototype,"_card",void 0),bo=t([ct("material-control-card")],bo);let yo=class extends rt{constructor(){super(...arguments),this._config=go,this._configLoaded=!1}setConfig(t){this._config=Object.assign({},t),this._configLoaded=!0}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}_tapActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.tap_action.action!=e){const t=vo[e];this._config.tap_action=t}else"navigation_path"==t&&(this._config.tap_action.navigation_path=e),"url_path"==t&&(this._config.tap_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}_holdActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.hold_action.action!=e){const t=vo[e];this._config.hold_action=t}else"navigation_path"==t&&(this._config.hold_action.navigation_path=e),"url_path"==t&&(this._config.hold_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}render(){var t,e,i,n,a;if(!this._configLoaded||!this.hass)return H``;this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_card_entity=null!==(e=this._config.use_card_entity)&&void 0!==e&&e;const o=(t,e,i)=>{var n;const a=null!==(n=null==e?void 0:e.action)&&void 0!==n?n:"more-info";return H`
        <ha-select
          style="display: block;"
          label="${si("actions."+t+"_title")}"
          .value=${a}
          @selected=${t=>{const e=t.target.value;i("action",e)}}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${si("actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${si("actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${si("actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${si("actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${si("actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${si("actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${si("actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${"navigate"===a?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{navigation:{}}}
                .value=${(null==e?void 0:e.navigation_path)||""}
                .label=${si("actions.navigate")}
                .configValue=${"navigation_path"}
                @value-changed=${t=>i("navigation_path",t.detail.value)}
              ></ha-selector>
            `:""}
        ${"url"===a?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${(null==e?void 0:e.url_path)||""}
                .label=${si("actions.url")}
                .configValue=${"url_path"}
                @value-changed=${t=>i("url_path",t.detail.value)}
              ></ha-selector>
            `:""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `};return H`
      <div class="form">
        <ha-textfield
          label="${si("material_control_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${t=>ro(t,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${t=>ro(t,this)}
          />
        </div>

        ${this._config.use_card_entity?H`
              <ha-entity-picker
                label="${si("material_control_card.entity")}"
                .value=${this._config.entity||""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${t=>so(t,this)}
                required
              ></ha-entity-picker>
            `:""}

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${t=>ro(t,this)}
          />
        </div>

        ${this._config.use_default_icon?H`
              <div class="switch-row">
                <span class="switch-label"
                  >${null!==(i=si("material_control_card.use_material_icons"))&&void 0!==i?i:"Use Material Icons"}</span
                >
                <ha-switch
                  .checked=${null===(n=this._config.use_material_icons)||void 0===n||n}
                  configValue="use_material_icons"
                  @change=${t=>ro(t,this)}
                />
              </div>
            `:""}

        ${this._config.use_default_icon?"":H`
              <div class="switch-row">
                <span class="switch-label"
                  >${si("material_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(a=this._config.dual_icon)&&void 0!==a&&a}
                  configValue="dual_icon"
                  @change=${t=>ro(t,this)}
                />
              </div>
              ${this._config.dual_icon?H`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${t=>ro(t,this)}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${t=>ro(t,this)}
                      ></ha-icon-picker>
                    </div>
                  `:H`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${t=>ro(t,this)}
                    ></ha-icon-picker>
                  `}
            `}

        <div class="warning">${si("actions.warning")}</div>
        <div>
          <h4 style="margin-bottom: 10px;">
            ${si("actions.tap_action_title")}
          </h4>
          ${o("tap_action",this._config.tap_action,this._tapActionChanged())}
        </div>

        <div>
          <h4 style="margin-bottom: 10px;">
            ${si("actions.hold_action_title")}
          </h4>
          ${o("hold_action",this._config.hold_action,this._holdActionChanged())}
        </div>
      </div>
    `}};yo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,t([ht({attribute:!1})],yo.prototype,"hass",void 0),t([pt()],yo.prototype,"_config",void 0),t([pt()],yo.prototype,"_configLoaded",void 0),yo=t([ct("material-control-card-editor")],yo);let xo=class extends rt{constructor(){super(...arguments),this._config=fi,this._configLoaded=!1,this._onTapSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.tap_action)||void 0===e?void 0:e.action)&&this._setAction("tap_action",i)},this._onHoldSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.hold_action)||void 0===e?void 0:e.action)&&this._setAction("hold_action",i)}}setConfig(t){this._config=Object.assign(Object.assign(Object.assign({},fi),t),{tap_action:t.tap_action,hold_action:t.hold_action}),this._configLoaded=!0}_valueChanged(t){var e;if(!this._config)return;const i=t.target,n=i.getAttribute("configValue"),a=Object.assign(Object.assign({},this._config),{[n]:null!==(e=i.checked)&&void 0!==e?e:i.value});a.control_type!==wi.APP_VERSION&&a.control_type!==wi.ACTION||delete a.entity,a.use_default_toggle&&(delete a.tap_action,delete a.hold_action),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a}}))}_getActionValue(t){var e;return t?"string"==typeof t?t:null!==(e=t.action)&&void 0!==e?e:"toggle":"toggle"}_setAction(t,e){if(!this._configLoaded)return;const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[e]||{action:e};this._config=Object.assign(Object.assign({},this._config),{[t]:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_setActionValue(t,e,i){let n=this._config[t];"string"==typeof n&&(n={action:n});const a=Object.assign(Object.assign({},n),{[e]:i});this._config=Object.assign(Object.assign({},this._config),{[t]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case wi.THERMOMETER:return["climate"];case wi.AUTOMATION:return["automation"];case wi.SCENE:return["scene"];case wi.MEDIA_PLAYER:return["media_player"];default:return}}render(){var t,e,i,n,a,o,s,r,l,c,d,u,h;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION||(this._config.use_default_icon=!1),this._config.control_type==wi.ACTION&&(this._config.use_default_toggle=!1),this._config.use_default_toggle=null===(e=this._config.use_default_toggle)||void 0===e||e,this._config.use_default_text=null===(i=this._config.use_default_text)||void 0===i||i,H`
      <div class="form">
        <ha-select
          label="${si("material_button_card.control_type")}"
          .value=${null!==(n=this._config.control_type)&&void 0!==n?n:"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${si("material_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${si("material_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="automation">
            ${si("material_button_card.type.automation")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${si("material_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${si("material_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${si("material_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${si("material_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${si("material_button_card.type.app_version")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${si("material_button_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION?H``:H`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity||""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${t=>so(t,this)}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${si("material_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${null===(a=this._config.use_default_icon)||void 0===a||a}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon?H`<div class="switch-row">
              <span class="switch-label"
                >${null!==(o=si("material_button_card.use_material_icons"))&&void 0!==o?o:"Use Material Icons"}</span
              >
              <ha-switch
                .checked=${null===(s=this._config.use_material_icons)||void 0===s||s}
                configValue="use_material_icons"
                @change=${this._valueChanged}
              />
            </div>`:H``}
        ${this._config.use_default_icon?H``:H`${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.SCENE||this._config.control_type==wi.STATE?H``:H`<div class="switch-row">
                  <span class="switch-label"
                    >${si("material_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${null!==(r=this._config.dual_icon)&&void 0!==r&&r}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon?H`
                  <div class="dual-icons">
                    <ha-icon-picker
                      label="Icon ON"
                      .value=${this._config.icon_on||""}
                      configValue="icon_on"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-on"
                    ></ha-icon-picker>
                    <ha-icon-picker
                      label="Icon OFF"
                      .value=${this._config.icon_off||""}
                      configValue="icon_off"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-off"
                    ></ha-icon-picker>
                  </div>
                `:H`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon||""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.SCENE||this._config.control_type==wi.MEDIA_PLAYER||this._config.control_type==wi.STATE?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${si("material_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${null===(l=this._config.use_default_text)||void 0===l||l}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text?H``:H`
              <div class="dual-icons">
                <ha-textfield
                  label="${si("material_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${si("material_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type!=wi.THERMOMETER?H``:H` <div class="switch-row">
                <span class="switch-label"
                  >${si("material_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(c=this._config.use_material_color)&&void 0!==c&&c}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${si("material_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(d=this._config.fix_temperature)&&void 0!==d&&d}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${si("material_climate_card.fix_temperature")}"
                .value=${null!==(u=this._config.fix_temperature)&&void 0!==u&&u}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${si("material_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${si("material_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${si("material_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}
        ${this._config.control_type==wi.ACTION?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${si("actions.automatic_action")}</span
              >
              <ha-switch
                .checked=${null===(h=this._config.use_default_toggle)||void 0===h||h}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle?H``:H`<div class="warning">${si("actions.warning")}</div>
              <ha-select
                label="${si("actions.tap_action_title")}"
                .value=${this._getActionValue(this._config.tap_action)}
                @selected=${this._onTapSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${si("actions.toggle")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${si("actions.more_info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${si("actions.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${si("actions.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${si("actions.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.tap_action,(t,e)=>this._setActionValue("tap_action",t,e))}

              <ha-select
                label="${si("actions.hold_action_title")}"
                .value=${this._getActionValue(this._config.hold_action)}
                @selected=${this._onHoldSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${si("actions.toggle")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${si("actions.more_info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${si("actions.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${si("actions.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${si("actions.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.hold_action,(t,e)=>this._setActionValue("hold_action",t,e))}`}
      </div>
    `):H``}_renderExtraField(t,e){var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:t;return H`
      ${"navigate"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{navigation:{}}}
              .value=${(null==t?void 0:t.navigation_path)||""}
              .label=${si("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${t=>e("navigation_path",t.detail.value)}
            ></ha-selector>
          `:""}
      ${"url"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${(null==t?void 0:t.url_path)||""}
              .label=${si("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${t=>e("url_path",t.detail.value)}
            ></ha-selector>
          `:""}
    `}};xo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,t([ht({attribute:!1})],xo.prototype,"hass",void 0),t([pt()],xo.prototype,"_config",void 0),t([pt()],xo.prototype,"_configLoaded",void 0),xo=t([ct("material-button-card-editor")],xo);let wo=class extends rt{constructor(){super(...arguments),this._config=uo}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case wi.LIGHT:return["light"];case wi.COVER:return["cover"];case wi.NUMBER:return["number"];case wi.INPUT_NUMBER:return["input_number"];case wi.MEDIA_PLAYER_VOLUME:return["media_player"];case wi.FAN:return["fan"];case wi.CLIMATE:return["climate"];default:return}}_getDomainName(t){const e=this.hass.localize(`component.${t}.title`);return e&&e!==`component.${t}.title`?e:t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")}render(){var t,e,i,n,a;if(!this._config||!this.hass)return H``;const o=this._getDomainName("light"),s=this._getDomainName("cover"),r=this._getDomainName("number"),l=this._getDomainName("input_number"),c=this._getDomainName("media_player"),d=this._getDomainName("fan"),u=this._getDomainName("climate");return H`
      <div class="form">
        <ha-select
          label="${si("material_slider_card.control_type")}"
          .value=${null!==(t=this._config.control_type)&&void 0!==t?t:"light"}
          configValue="control_type"
          @selected=${t=>ro(t,this)}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${o}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${s}
          </mwc-list-item>
          <mwc-list-item value="number">
            ${r}
          </mwc-list-item>
          <mwc-list-item value="input_number">
            ${l}
          </mwc-list-item>
          <mwc-list-item value="media_player_volume">
            ${c}
          </mwc-list-item>
          <mwc-list-item value="fan">
            ${d}
          </mwc-list-item>
          <mwc-list-item value="climate">
            ${u}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${si("material_slider_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${t=>ro(t,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${si("material_slider_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${t=>so(t,this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${si("material_slider_card.icon")}"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${t=>ro(t,this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${null===(e=this._config.show_percentage)||void 0===e||e}
            configValue="show_percentage"
            @change=${t=>ro(t,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${null!==(i=this._config.bold_text)&&void 0!==i&&i}
            configValue="bold_text"
            @change=${t=>ro(t,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${null!==(n=si("material_slider_card.use_material_icons"))&&void 0!==n?n:"Use Material Icons"}</span
          >
          <ha-switch
            .checked=${null===(a=this._config.use_material_icons)||void 0===a||a}
            configValue="use_material_icons"
            @change=${t=>ro(t,this)}
          />
        </div>
      </div>
    `}};wo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,t([ht({attribute:!1})],wo.prototype,"hass",void 0),t([pt()],wo.prototype,"_config",void 0),wo=t([ct("material-slider-card-editor")],wo);let Ao=class extends rt{static getStubConfig(){return{type:"custom:material-lights-card",on_text:"Lights on",off_text:"Lights off"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=to.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Lights"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-lights-card-editor")}mapTemplate(t){const e=function(t){const e=t.control_area&&t.area_id?t.area_id:void 0;return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      box-shadow: none !important;\n    }\ncard:\n  type: vertical-stack\n  cards:\n    - type: custom:mod-card\n      card_mod:\n        style: |\n          ha-card {\n            box-shadow: none !important;\n          }\n          hui-horizontal-stack-card:\n            $: |\n              #root > button-card {\n                margin: 0px;\n              }\n      card:\n        type: horizontal-stack\n        cards:\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.on_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-left-radius: 999vh\n                - border-bottom-left-radius: 999vh\n                - border-top-right-radius: 0vh\n                - border-bottom-right-radius: 0vh\n                - border: 1px solid\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - font-size: 15px\n                - font-weight: 600\n                - border-color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_on\n              data:\n                ${e?"area_id: "+e:"entity_id: all"}\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.off_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-right-radius: 999vh\n                - border-bottom-right-radius: 999vh\n                - border-top-left-radius: 0vh\n                - border-bottom-left-radius: 0vh\n                - border: 1px solid\n                - font-size: 15px\n                - font-weight: 600\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - border-color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : "var(--md-sys-color-surface-container)";\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${e?"'"+e+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_off\n              data:\n                ${e?"area_id: "+e:"entity_id: all"}\n`}(t);return e}_handleClick(t){const e=t.target.closest(".ripple-card");e&&mi(e,t)}render(){return this._card?H`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Ao.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,t([ht({attribute:!1})],Ao.prototype,"hass",void 0),t([pt()],Ao.prototype,"_config",void 0),t([pt()],Ao.prototype,"_card",void 0),Ao=t([ct("material-lights-card")],Ao);const $o={type:"custom:material-control-card",on_text:"Lights on",off_text:"Lights off",control_area:!1};let Eo=class extends rt{constructor(){super(...arguments),this._config=$o}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t;return this._config&&this.hass?H`
      <div class="form">
        <span class="text-label"
          >${si("material_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${si("material_lights_card.on_text")}"
          .value=${this._config.on_text||""}
          configValue="on_text"
          @input=${t=>ro(t,this)}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${si("material_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${si("material_lights_card.off_text")}"
          .value=${this._config.off_text||""}
          configValue="off_text"
          @input=${t=>ro(t,this)}
          placeholder="e.g. Lights Off"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${si("material_lights_card.control_area")}</span
          >
          <ha-switch
            .checked=${null!==(t=this._config.control_area)&&void 0!==t&&t}
            configValue="control_area"
            @change=${t=>{ro(t,this),this.resetForm()}}
          />
        </div>

        ${this._config.control_area?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{area:{}}}
                .value=${this._config.area_id}
                .label=${si("material_lights_card.area_id")}
                configValue="area_id"
                @value-changed=${t=>ro(t,this)}
              ></ha-selector>
            `:""}
      </div>
    `:H``}resetForm(){!this._config.control_area&&"area_id"in this._config&&(delete this._config.area_id,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}};function ko(t){const e=document.createElement("a");e.href=t,e.target="_blank",e.rel="noopener noreferrer",document.body.appendChild(e),e.click(),document.body.removeChild(e)}function Co(){ko(function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.apps.chromecast.app":/iPhone|iPad|iPod/i.test(t)?"googlehome://":"https://home.google.com/"}())}function Oo(){ko(function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.youtube":/iPhone|iPad|iPod/i.test(t)?"youtube://":"https://www.youtube.com/"}())}function To(){ko(function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.spotify.music":/iPhone|iPad|iPod/i.test(t)?"spotify://":"https://open.spotify.com/"}())}function So(){ko(function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.netflix.mediaclient":/iPhone|iPad|iPod/i.test(t)?"nflx://":"https://www.netflix.com/"}())}function Mo(){ko(function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.twitch.tv":/iPhone|iPad|iPod/i.test(t)?"twitch://":"https://www.twitch.tv/"}())}Eo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,t([ht({attribute:!1})],Eo.prototype,"hass",void 0),t([pt()],Eo.prototype,"_config",void 0),Eo=t([ct("material-lights-card-editor")],Eo);let Io=class extends rt{constructor(){super(...arguments),this._closing=!1,this._volume=0,this._progress=0,this._isPlaying=!1,this._isPaused=!1,this._isOff=!0,this._isConnected=!1,this._isDragging=!1,this._animationFrameId=null,this._lastPosition=0,this._lastDuration=1,this._lastFrameTime=0,this._dragPositionSeconds=0,this._touchStartX=null,this._touchCurrentX=null,this._swipeThreshold=80,this._swipeEdge=50,this._onTouchStart=t=>{this._touchStartX=t.changedTouches[0].clientX,this._touchCurrentX=this._touchStartX},this._onTouchMove=t=>{this._touchCurrentX=t.changedTouches[0].clientX,null!==this._touchStartX&&this._touchStartX<this._swipeEdge&&t.preventDefault()},this._onTouchEnd=()=>{if(null===this._touchStartX||null===this._touchCurrentX)return;const t=this._touchCurrentX-this._touchStartX;this._touchStartX<this._swipeEdge&&t>this._swipeThreshold&&this._close(),this._touchStartX=null,this._touchCurrentX=null}}_close(){this._closing=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("close-overlay",{bubbles:!0,composed:!0}))},200)}_callService(t,e={}){if(this.entity)try{this.hass.callService("media_player",t,Object.assign({entity_id:this.entity},e))}catch(t){console.error("Error calling service:",t)}else console.error("No entity defined for service call")}_computeServerPosition(t){var e,i;const n=Number(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.media_position)||0,a=null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.media_position_updated_at;if(!a)return n;const o=Date.parse(a);if(isNaN(o))return n;const s=Date.now();return n+Math.max(0,(s-o)/1e3)}updated(t){var e,i,n;if(super.updated(t),!this.hass||!this.entity)return;const a=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[this.entity];if(a&&t.has("hass")){const t=null!==(n=a.attributes.volume_level)&&void 0!==n?n:0;Math.abs(t-this._volume)>.01&&(this._volume=t);const e=Number(a.attributes.media_duration)||1,i=this._computeServerPosition(a);this._lastDuration=Math.max(e,1),this._lastPosition=Math.min(i,this._lastDuration);const o=Math.round(this._lastPosition/this._lastDuration*1e3)/10;Math.abs(o-this._progress)>.1&&(this._progress=o),this.changePlyingState(a),this._isConnected=["playing","paused","idle"].includes(a.state),this._isOff="off"===a.state,this._lastFrameTime=Date.now()}}changePlyingState(t){const e="playing"===t.state&&t.attributes.media_title,i="paused"===t.state,n=this._isPlaying;this._isPaused=i,e!==n&&(this._isPlaying=e,this._isPlaying&&null===this._animationFrameId&&!this._isDragging?this._animateProgress():this._isPlaying||null===this._animationFrameId||(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null))}_animateProgress(){const t=()=>{if(!this._isPlaying||this._isDragging)return void(this._animationFrameId=null);const e=Date.now(),i=(e-this._lastFrameTime)/1e3;this._lastFrameTime=e,this._lastPosition=Math.min(this._lastPosition+i,this._lastDuration),this._progress=this._lastPosition/Math.max(1,this._lastDuration)*100,this.requestUpdate(),this._animationFrameId=requestAnimationFrame(t)};null===this._animationFrameId&&(this._lastFrameTime=Date.now(),this._animationFrameId=requestAnimationFrame(t))}_startSeek(t){t.preventDefault();const e=this.renderRoot.querySelector(".progress-bar");if(!e)return;this._isDragging=!0;const i=t=>{var i,n,a;const o=e.getBoundingClientRect(),s=(t=>t.touches?t.touches[0].clientX:t.clientX)(t);let r=(s-o.left)/o.width;r=Math.min(Math.max(r,0),1);const l=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[this.entity],c=Number(null===(a=null==l?void 0:l.attributes)||void 0===a?void 0:a.media_duration)||1;this._dragPositionSeconds=r*c,this._progress=100*r;const d=e.querySelector(".progress-fill"),u=e.querySelector(".progress-thumb");d&&(d.style.width=`${this._progress}%`),u&&(u.style.left=`calc(${this._progress}% - 6px)`)},n=t=>i(t),a=t=>{var e,o,s;i(t);const r=null===(o=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===o?void 0:o[this.entity],l=Number(null===(s=null==r?void 0:r.attributes)||void 0===s?void 0:s.media_duration)||1,c=this._dragPositionSeconds;this._callService("media_seek",{seek_position:c}),this._lastPosition=Math.min(c,l),this._lastDuration=Math.max(l,1),this._lastFrameTime=Date.now(),this._progress=this._lastPosition/this._lastDuration*100,this._isDragging=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a),i(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),null!==this._animationFrameId&&(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_startDrag(t){try{t.preventDefault(),t.stopPropagation();const e=this.renderRoot.querySelector(".volume-card");if(!e)return;const i=t=>{const i=e.getBoundingClientRect();let n=((t instanceof TouchEvent?t.touches[0].clientX:t.clientX)-i.left)/i.width;n=Math.min(Math.max(n,0),1),this._volume=n,this._callService("volume_set",{volume_level:n})},n=t=>{t.preventDefault(),i(t)},a=t=>{t.preventDefault(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n,{passive:!1}),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a)}catch(t){console.error("Error updating volume:",t)}}_onClick(t){mi(t.currentTarget,t)}_onRemoteClick(t){this._onClick(t),this._moreInfo()}_moreInfo(){var t;if(!this.hass||!this.entity)return;this._close();const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entity},bubbles:!0,composed:!0});null===(t=document.querySelector("home-assistant"))||void 0===t||t.dispatchEvent(e)}async _turnOnDevice(t){this._onClick(t),this._callService("turn_on")}_stopCast(t){this._onClick(t);const e=this.hass.states[this.entity];if(!e)return;e.attributes.supported_features&&8192&e.attributes.supported_features?this._callService("media_stop"):this._callService("turn_off")}_togglePlay(t){if(t&&(t.preventDefault(),t.stopPropagation()),!this.hass||!this.entity)return;const e=this._isPlaying?"media_pause":"media_play";this._isPlaying=!this._isPlaying,this._isPaused=!this._isPaused,this.requestUpdate(),this.hass.callService("media_player",e,{entity_id:this.entity}).then(()=>{this._isPlaying?this._animateProgress():cancelAnimationFrame(this._animationFrameId)}).catch(t=>console.error(`Error calling ${e}:`,t))}_settings(){var t;if(!this.hass||!this.entity)return;if(!this.hass.states[this.entity])return;const e=null===(t=this.hass.entities)||void 0===t?void 0:t[this.entity],i=null==e?void 0:e.device_id;this._close(),setTimeout(()=>{i?hi(0,`/config/devices/device/${i}`):this._moreInfo()},200)}openLinks(t,e){this._onClick(t),"Google"==e&&Co(),"YouTube"==e&&Oo(),"Spotify"==e&&To(),"Netflix"==e&&So(),"Twitch"==e&&Mo()}render(){var t,e,i,n,a;const o=this.hass.states[this.entity];if(!o)return H``;const{attributes:s}=o,r=gi(this._isPlaying,"playing"==o.state),l=gi(this._isPaused,"paused"==o.state),c=(r||l)&&s.media_title,d=Math.round(100*this._volume),u=s.media_title&&""!==s.media_title?s.media_title:gi(this._isPlaying,"playing"==o.state)?si("material_media_overlay.media_card.playing"):si("material_media_overlay.media_card.no_content"),h=null!==(t=s.media_artist)&&void 0!==t?t:"",p=null!==(e=s.app_name)&&void 0!==e?e:"",m=null!==(i=s.entity_picture)&&void 0!==i?i:s.entity_picture_local,f=m?`background-image: url(${m}); \n     background-size: cover; \n     background-position: center; \n     filter: brightness(0.4);`:"",_=this._isOff;return yi("--volume-brightness","dark"==((null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light")?"brightness(0.7)":"brightness(1.05)",this.style),H`
      <div class="overlay ${this._closing?"closing":""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${s.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${f}"></div>
          ${function(t,e){switch(t){case"Spotify":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;case"YouTube":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Netflix":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Prime Video":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Prime.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Twitch":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Twitch.jpg"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;default:return H`<ha-icon
        icon="m3r:play-circle"
        style="${e?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
      ></ha-icon>`}}(p,m)}
          
          ${_||!c?H``:H`<ha-icon
                  class="pause-button"
                  icon=${r?"mdi:pause":"mdi:play"}
                  @click=${t=>this._togglePlay(t)}
                  title=${r?"Pause":"Play"}
                  style=${`\n                    ${r?"":"border-radius: 50px;"}\n                    transition: width 1s ease-in-out, background-color 1s ease-in-out;\n                    background-color: ${o.attributes.media_title?"var(--md-sys-color-tertiary-container)":"var(--md-sys-color-secondary-container)"};\n                    color: ${o.attributes.media_title?"var(--md-sys-color-on-tertiary-container)":"var(--md-sys-color-on-secondary-container)"};\n                  `}
                >
                </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${u}
            </div>
            <div
              class="video-channel"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${h}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${_||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${()=>this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${_||!c?"disabled":""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%; ${m?"background-color: #fff;":"background-color: var(--md-sys-color-on-secondary-container);"}"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px); ${m?"background-color: #fff; border: 1px solid #fff;":"background-color: var(--md-sys-color-on-secondary-container); border: 1px solid var(--md-sys-color-on-secondary-container);"}""
              ></div>
            </div>
            <ha-icon
              class="${_||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${()=>this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${d?H`<div
                class="volume-card"
                @mousedown=${this._startDrag}
                @touchstart=${this._startDrag}
              >
                <div
                  id="slider"
                  class="animate"
                  style="width: ${100*this._volume}%"
                ></div>
                <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
                <span class="volume-text" id="volumeText">${d}%</span>
              </div>`:H``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${si("material_media_overlay.remote")}</span
          >
        </div>

        ${_||!this._isConnected?H`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${si("material_media_overlay.cast")}</span
                >
              </div>`:H`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${si("material_media_overlay.stop_cast")}</span
                >
              </div>`}
        ${function(t){return"YouTube"==t||"Spotify"==t||"Netflix"==t||"Prime Video"==t||"Twitch"==t}(p)?H`<div
                class="menu-card link"
                @click=${t=>this.openLinks(t,p)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${si("material_media_overlay.open")} ${p}</span
                >
              </div>`:H``}
        <div class="menu-card link" @click=${t=>this.openLinks(t,"Google")}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${si("material_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `}};Io.styles=s`
    :host {
      -webkit-tap-highlight-color: transparent;
      font-family: var(--font-family);
    }

    .overlay {
      position: fixed;
      inset: 0;
      /*background: var(--card-background-color, #121212);*/
      background: var(
        --view-background,
        var(--lovelace-background, var(--primary-background-color))
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 18px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: 100%;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      /*background-color: var(--md-sys-color-secondary-container);
      background-color: var(--md-sys-color-tertiary-container);*/
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      /*color: var(--md-sys-color-on-secondary-container)
      color: var(--md-sys-color-on-tertiary-container);*/
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 18px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 2px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      /*background-color: #6750a4;
      background-color: var(--md-sys-color-on-secondary-container);*/
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--md-sys-color-on-secondary-container);
      border: 1px solid var(--md-sys-color-on-secondary-container);
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: 100%;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: var(--volume-brightness); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 550;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: 100%;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 15px;
      /*font-size: 16px;*/
      font-weight: 550;
      letter-spacing: 0.1px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }

    @supports (width: -webkit-fill-available) {
      .menu-card,
      .volume-card,
      .video-card {
        width: -webkit-fill-available;
      }
    }
  `,t([ht({attribute:!1})],Io.prototype,"hass",void 0),t([ht()],Io.prototype,"entity",void 0),t([pt()],Io.prototype,"_closing",void 0),t([pt()],Io.prototype,"_volume",void 0),t([pt()],Io.prototype,"_progress",void 0),t([pt()],Io.prototype,"_isPlaying",void 0),t([pt()],Io.prototype,"_isPaused",void 0),t([pt()],Io.prototype,"_isOff",void 0),t([pt()],Io.prototype,"_isConnected",void 0),t([pt()],Io.prototype,"_isDragging",void 0),Io=t([ct("material-media-overlay")],Io);const No={type:"custom:material-users-card",is_user_map_enabled:!1,is_add_button_enabled:!1};let Lo=class extends rt{constructor(){super(...arguments),this._config=No}static getStubConfig(){return{type:"custom:material-users-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=to.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material User"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-users-card-editor")}mapTemplate(){const t=function(t,e){return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      padding-left: 16px;\n      padding-right: 24px;\n      padding-top: 12px;\n      padding-bottom: 12px;\n      background: transparent;\n      box-shadow: none;\n    }\ncard:\n  type: horizontal-stack\n  cards:\n    - type: custom:auto-entities\n      card_param: cards\n      card:\n        type: horizontal-stack\n      sort:\n        numeric: false\n      filter:\n        include:\n          - domain: person\n            options:\n              type: custom:button-card\n              entity: this.entity_id\n              show_entity_picture: true\n              show_name: false\n              tap_action:\n                action: ${t||e.is_user_map_enabled?"more-info":"none"}\n              styles:\n                icon:\n                  - width: 40px\n                  - height: 40px\n                  - border-radius: 100%\n                img_cell:\n                  - background-color: transparent\n                  - border-radius: 100%\n                card:\n                  - border-radius: 100%\n                  - margin-left: 0px\n                  - margin-right: 1px\n                  - padding: 0px\n                  - width: max-content\n                  - justify-self: center\n          ${t||e.is_add_button_enabled?'- type: custom:button-card\n            icon: mdi:plus\n            show_entity_picture: true\n            show_name: false\n            styles:\n              icon:\n                - width: 24px\n                - height: 24px\n                - border-radius: 100%\n                - color: var(--token-color-text-primary)\n              card:\n                - border-radius: 100%\n                - margin-left: 0px\n                - margin-right: 1px\n                - padding: 8px\n                - width: max-content\n                - justify-self: center\n                - background-color: var(--token-color-background-card)\n            tap_action:\n              action: navigate\n              navigation_path: |\n                [[[ \n                  const isAdmin = hass.user?.is_admin;\n                  if (isAdmin) {\n                    return "/config/person";\n                  } else {\n                    return "/profile";\n                  }\n                ]]]\n            hold_action:\n              action: none':""}\n`}(this.hass.user.is_admin,this._config);return t}render(){return this._card?H` ${this._card} `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Lo.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,t([ht({attribute:!1})],Lo.prototype,"hass",void 0),t([pt()],Lo.prototype,"_config",void 0),t([pt()],Lo.prototype,"_card",void 0),Lo=t([ct("material-users-card")],Lo);const Po={type:"custom:material-menu-card",name:"Activity",icon:"mdi:history",label:"Info on the latest actions performed",tap_action:{action:"navigate",navigation_path:"./activity"}};let jo=class extends rt{constructor(){super(...arguments),this._config=Po}static getStubConfig(){return Po}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=to.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Menu"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-menu-card-editor")}mapTemplate(){return function(t){const{name:e,icon:i,label:n,tap_action:a,hold_action:o,double_tap_action:s}=t;return`type: custom:button-card\nname: ${e}\nicon: ${i}\nlabel: ${n}\nshow_name: true\nshow_icon: true\nshow_label: true\ntap_action:\n  ${Wi(a)}\nhold_action:\n  ${Wi(o)}\ndouble_tap_action:\n  ${Wi(s)}\nstyles:\n  grid:\n    - grid-template-columns: 54px calc(100% - 54px)\n    - grid-template-rows: 1fr 1fr\n    - grid-template-areas: |\n        "i n"\n        "i l"\n  card:\n    - height: 55px\n    - border-radius: 30px\n    - background-color: transparent\n    - padding: 0px\n    - box-shadow: none\n    - margin: 0px -15px\n  icon:\n    - color: var(--token-color-text-primary)\n    - width: 24px\n    - padding-right: 0px\n  name:\n    - font-size: 1.2rem\n    - align-self: end\n    - justify-self: start\n    - text-align: left\n    - width: 100%\n    - padding-bottom: 3px\n    - color: var(--token-color-text-primary)\n  label:\n    - font-size: 1rem\n    - align-self: start\n    - justify-self: start\n    - text-align: left\n    - padding-top: 3px\n    - width: 100%\n    - color: var(--token-color-text-secondary)\n`}(this._config)}render(){return this._card?H` ${this._card} `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};jo.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,t([ht({attribute:!1})],jo.prototype,"hass",void 0),t([pt()],jo.prototype,"_config",void 0),t([pt()],jo.prototype,"_card",void 0),jo=t([ct("material-menu-card")],jo);let Ro=class extends rt{constructor(){super(...arguments),this._config=Po,this._configLoaded=!1}setConfig(t){this._config=Object.assign(Object.assign({},Po),t),this._configLoaded=!0}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return this._config&&this.hass?H`
      <div class="form">
        <ha-textfield
          label="Name"
          .value=${this._config.name||""}
          configValue="name"
          @input=${t=>ro(t,this)}
        ></ha-textfield>

        <ha-textfield
          label="Label"
          .value=${this._config.label||""}
          configValue="label"
          @input=${t=>ro(t,this)}
        ></ha-textfield>

        <ha-icon-picker
          label="Icon"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${t=>ro(t,this)}
        ></ha-icon-picker>

        <div class="warning">${si("actions.warning")}</div>

        <h4 style="margin: 15px 0px -5px 0px;">
          ${si("actions.tap_action_title")}
        </h4>
        ${this._renderActionSection("tap_action",this._config.tap_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${si("actions.hold_action_title")}
        </h4>
        ${this._renderActionSection("hold_action",this._config.hold_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${si("actions.double_tap_action_title")}
        </h4>
        ${this._renderActionSection("double_tap_action",this._config.double_tap_action)}
      </div>
    `:H``}_renderActionSection(t,e){return this._renderActionEditor(e,(e,i)=>this._actionChanged(t,e,i))}_actionChanged(t,e,i){if(!this._configLoaded)return;const n=Object.assign({},this._config[t]||{});n[e]=i,this._config=Object.assign(Object.assign({},this._config),{[t]:n}),this._fireConfigChanged()}_renderActionEditor(t,e){var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:"none";return H`
      <ha-select
        label=${si("actions.select_option")}
        .value=${n}
        @selected=${t=>e("action",t.target.value)}
        @closed=${t=>t.stopPropagation()}
      >
        <mwc-list-item value="toggle">
          ${si("actions.toggle")}
        </mwc-list-item>
        <mwc-list-item value="more-info">
          ${si("actions.more_info")}
        </mwc-list-item>
        <mwc-list-item value="none">
          ${si("actions.none")}
        </mwc-list-item>
        <mwc-list-item value="navigate">
          ${si("actions.navigate")}
        </mwc-list-item>
        <mwc-list-item value="url"> ${si("actions.url")} </mwc-list-item>
        <!--<mwc-list-item value="call-service">
          ${si("actions.call_service")}
        </mwc-list-item>
        <mwc-list-item value="assist">
          ${si("actions.assist")}
        </mwc-list-item>
        <mwc-list-item value="fire-dom-event">
          ${si("actions.fire_dom")}
        </mwc-list-item>-->
        <mwc-list-item value="google-home">
          ${si("actions.google_home")}
        </mwc-list-item>
        <mwc-list-item value="settings">
          ${si("actions.settings")}
        </mwc-list-item>
      </ha-select>

      ${this._renderActionFields(n,t,e)}
    `}_renderActionFields(t,e,i){switch(t){case"navigate":return H`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{navigation:{}}}
            .value=${(null==e?void 0:e.navigation_path)||""}
            .label=${si("actions.navigate")}
            .configValue=${"navigation_path"}
            @value-changed=${t=>i("navigation_path",t.detail.value)}
          ></ha-selector>
        `;case"url":return H`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{text:{}}}
            .value=${(null==e?void 0:e.url_path)||""}
            .label=${si("actions.url")}
            .configValue=${"url_path"}
            @value-changed=${t=>i("url_path",t.detail.value)}
          ></ha-selector>
        `;default:return H``}}};Ro.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    ha-select,
    ha-textfield,
    ha-textarea {
      width: 100%;
    }
    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,t([ht({attribute:!1})],Ro.prototype,"hass",void 0),t([pt()],Ro.prototype,"_config",void 0),t([pt()],Ro.prototype,"_configLoaded",void 0),Ro=t([ct("material-menu-card-editor")],Ro);let zo=class extends rt{constructor(){super(...arguments),this._config=No}setConfig(t){this._config=Object.assign({},t)}render(){var t,e;return this._config&&this.hass?H`
      <div class="form">
        <div class="switch-row">
          <span class="switch-label"
            >${si("material_users_card.user_title")}
            <div class="small-text">
              ${si("material_users_card.user_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(t=this._config.is_user_map_enabled)&&void 0!==t&&t}
            configValue="is_user_map_enabled"
            @change=${t=>ro(t,this)}
          />
        </div>
        <div class="switch-row">
          <span class="switch-label"
            >${si("material_users_card.add_button_title")}
            <div class="small-text">
              ${si("material_users_card.add_button_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(e=this._config.is_add_button_enabled)&&void 0!==e&&e}
            configValue="is_add_button_enabled"
            @change=${t=>ro(t,this)}
          />
        </div>
      </div>
    `:H``}};var Uo;zo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .small-text {
      font-size: 0.9rem;
      color: gray;
    }
  `,t([ht({attribute:!1})],zo.prototype,"hass",void 0),t([pt()],zo.prototype,"_config",void 0),zo=t([ct("material-users-card-editor")],zo),console.info(`%c Material Home Components %c ${si("common.version")} ${_i}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("material-slider-card",po),customElements.get("material-slider-card-editor")||customElements.define("material-slider-card-editor",wo),customElements.get("material-button-card")||customElements.define("material-button-card",Zi),customElements.get("material-button-card-editor")||customElements.define("material-button-card-editor",xo),customElements.get("material-dashboard-card")||customElements.define("material-dashboard-card",no),customElements.get("material-dashboard-card-editor")||customElements.define("material-dashboard-card-editor",lo),customElements.get("material-climate-card")||customElements.define("material-climate-card",fo),customElements.get("material-climate-card-editor")||customElements.define("material-climate-card-editor",_o),customElements.get("material-control-card")||customElements.define("material-control-card",bo),customElements.get("material-control-card-editor")||customElements.define("material-control-cardeditor",yo),customElements.get("material-lights-card")||customElements.define("material-lights-card",Ao),customElements.get("material-lights-card-editor")||customElements.define("material-lights-cardeditor",Eo),customElements.get("material-media-overlay")||customElements.define("material-media-overlay",Io),customElements.get("material-users-card")||customElements.define("material-users-card",Lo),customElements.get("material-users-card-editor")||customElements.define("material-users-card-editor",zo),customElements.get("material-menu-card-editor")||customElements.define("material-menu-card-editor",Ro),customElements.get("material-menu-card")||customElements.define("material-menu-card",jo),window.customCards=null!==(Uo=window.customCards)&&void 0!==Uo?Uo:[],window.customCards.push({type:"material-slider-card",name:"Material Slider Card",preview:!0,description:"A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard."}),window.customCards.push({type:"material-button-card",name:"Material Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready."}),window.customCards.push({type:"material-dashboard-card",name:"Material Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces."}),window.customCards.push({type:"material-climate-card",name:"Material Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices."}),window.customCards.push({type:"material-control-card",name:"Material Control Card",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant."}),window.customCards.push({type:"material-lights-card",name:"Material Lights Control",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant."}),window.customCards.push({type:"material-users-card",name:"Material Users",preview:!0,description:"A card to view and manage users in your Home, providing a clear interface to see active users and control permissions."}),window.customCards.push({type:"material-menu-card",name:"Material Menu",preview:!0,description:"The menu to manage your home's settings, allowing you to view and adjust key options clearly and easily."});
