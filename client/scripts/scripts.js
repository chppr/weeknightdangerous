!function(n,t,e){"use strict";function a(n,t,e){if(!n)throw gn("areq","Argument '{0}' is {1}",t||"?",e||"required");return n}function r(n,t){return n||t?n?t?(R(n)&&(n=n.join(" ")),R(t)&&(t=t.join(" ")),n+" "+t):n:t:""}function i(n){var t={};return n&&(n.to||n.from)&&(t.to=n.to,t.from=n.from),t}function o(n,t,e){var a="";return n=R(n)?n:n&&H(n)&&n.length?n.split(/\s+/):[],q(n,function(n,r){n&&n.length>0&&(a+=r>0?" ":"",a+=e?t+n:n+t)}),a}function s(n,t){var e=n.indexOf(t);t>=0&&n.splice(e,1)}function l(n){if(n instanceof _)switch(n.length){case 0:return[];case 1:if(n[0].nodeType===V)return n;break;default:return _(u(n))}return n.nodeType===V?_(n):void 0}function u(n){if(!n[0])return n;for(var t=0;t<n.length;t++){var e=n[t];if(e.nodeType==V)return e}}function c(n,t,e){q(t,function(t){n.addClass(t,e)})}function f(n,t,e){q(t,function(t){n.removeClass(t,e)})}function d(n){return function(t,e){e.addClass&&(c(n,t,e.addClass),e.addClass=null),e.removeClass&&(f(n,t,e.removeClass),e.removeClass=null)}}function m(n){if(n=n||{},!n.$$prepared){var t=n.domOperation||F;n.domOperation=function(){n.$$domOperationFired=!0,t(),t=F},n.$$prepared=!0}return n}function p(n,t){v(n,t),h(n,t)}function v(n,t){t.from&&(n.css(t.from),t.from=null)}function h(n,t){t.to&&(n.css(t.to),t.to=null)}function g(n,t,e){var a=t.options||{},r=e.options||{},i=(a.addClass||"")+" "+(r.addClass||""),o=(a.removeClass||"")+" "+(r.removeClass||""),s=C(n.attr("class"),i,o);r.preparationClasses&&(a.preparationClasses=A(r.preparationClasses,a.preparationClasses),delete r.preparationClasses);var l=a.domOperation!==F?a.domOperation:null;return W(a,r),l&&(a.domOperation=l),s.addClass?a.addClass=s.addClass:a.addClass=null,s.removeClass?a.removeClass=s.removeClass:a.removeClass=null,t.addClass=a.addClass,t.removeClass=a.removeClass,a}function C(n,t,e){function a(n){H(n)&&(n=n.split(" "));var t={};return q(n,function(n){n.length&&(t[n]=!0)}),t}var r=1,i=-1,o={};n=a(n),t=a(t),q(t,function(n,t){o[t]=r}),e=a(e),q(e,function(n,t){o[t]=o[t]===r?null:i});var s={addClass:"",removeClass:""};return q(o,function(t,e){var a,o;t===r?(a="addClass",o=!n[e]):t===i&&(a="removeClass",o=n[e]),o&&(s[a].length&&(s[a]+=" "),s[a]+=e)}),s}function $(n){return n instanceof t.element?n[0]:n}function y(n,t,e){var a="";t&&(a=o(t,X,!0)),e.addClass&&(a=A(a,o(e.addClass,Y))),e.removeClass&&(a=A(a,o(e.removeClass,Z))),a.length&&(e.preparationClasses=a,n.addClass(a))}function D(n,t){t.preparationClasses&&(n.removeClass(t.preparationClasses),t.preparationClasses=null),t.activeClasses&&(n.removeClass(t.activeClasses),t.activeClasses=null)}function S(n,t){var e=t?"-"+t+"s":"";return w(n,[vn,e]),[vn,e]}function b(n,t){var e=t?"paused":"",a=z+fn;return w(n,[a,e]),[a,e]}function w(n,t){var e=t[0],a=t[1];n.style[e]=a}function A(n,t){return n?t?n+" "+t:n:t}function k(n){return[pn,n+"s"]}function I(n,t){var e=t?mn:vn;return[e,n+"s"]}function T(n,t,e){var a=Object.create(null),r=n.getComputedStyle(t)||{};return q(e,function(n,t){var e=r[n];if(e){var i=e.charAt(0);("-"===i||"+"===i||i>=0)&&(e=x(e)),0===e&&(e=null),a[t]=e}}),a}function x(n){var t=0,e=n.split(/\s*,\s*/);return q(e,function(n){"s"==n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n=parseFloat(n)||0,t=t?Math.max(n,t):n}),t}function O(n){return 0===n||null!=n}function j(n,t){var e=P,a=n+"s";return t?e+=on:a+=" linear all",[e,a]}function L(){var n=Object.create(null);return{flush:function(){n=Object.create(null)},count:function(t){var e=n[t];return e?e.total:0},get:function(t){var e=n[t];return e&&e.value},put:function(t,e){n[t]?n[t].total++:n[t]={total:1,value:e}}}}function N(n,t,e){q(e,function(e){n[e]=J(n[e])?n[e]:t.style.getPropertyValue(e)})}var P,M,z,E,F=t.noop,G=t.copy,W=t.extend,_=t.element,q=t.forEach,R=t.isArray,H=t.isString,B=t.isObject,U=t.isUndefined,J=t.isDefined,K=t.isFunction,Q=t.isElement,V=1,Y="-add",Z="-remove",X="ng-",nn="-active",tn="-prepare",en="ng-animate",an="$$ngAnimateChildren",rn="";U(n.ontransitionend)&&J(n.onwebkittransitionend)?(rn="-webkit-",P="WebkitTransition",M="webkitTransitionEnd transitionend"):(P="transition",M="transitionend"),U(n.onanimationend)&&J(n.onwebkitanimationend)?(rn="-webkit-",z="WebkitAnimation",E="webkitAnimationEnd animationend"):(z="animation",E="animationend");var on="Duration",sn="Property",ln="Delay",un="TimingFunction",cn="IterationCount",fn="PlayState",dn=9999,mn=z+ln,pn=z+on,vn=P+ln,hn=P+on,gn=t.$$minErr("ng"),Cn=["$$rAF",function(n){function t(n){a=a.concat(n),e()}function e(){if(a.length){for(var t=a.shift(),i=0;i<t.length;i++)t[i]();r||n(function(){r||e()})}}var a,r;return a=t.queue=[],t.waitUntilQuiet=function(t){r&&r(),r=n(function(){r=null,t(),e()})},t}],$n=["$interpolate",function(n){return{link:function(e,a,r){function i(n){n="on"===n||"true"===n,a.data(an,n)}var o=r.ngAnimateChildren;t.isString(o)&&0===o.length?a.data(an,!0):(i(n(o)(e)),r.$observe("ngAnimateChildren",i))}}}],yn="$$animateCss",Dn=1e3,Sn=3,bn=1.5,wn={transitionDuration:hn,transitionDelay:vn,transitionProperty:P+sn,animationDuration:pn,animationDelay:mn,animationIterationCount:z+cn},An={transitionDuration:hn,transitionDelay:vn,animationDuration:pn,animationDelay:mn},kn=["$animateProvider",function(n){var t=L(),e=L();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(n,a,r,l,u,c,f,g){function C(n,t){var e="$$ngAnimateParentKey",a=n.parentNode,r=a[e]||(a[e]=++W);return r+"-"+n.getAttribute("class")+"-"+t}function y(e,a,r,i){var o=t.get(r);return o||(o=T(n,e,i),"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)),t.put(r,o),o}function D(r,i,s,l){var u;if(t.count(s)>0&&(u=e.get(s),!u)){var c=o(i,"-stagger");a.addClass(r,c),u=T(n,r,l),u.animationDuration=Math.max(u.animationDuration,0),u.transitionDuration=Math.max(u.transitionDuration,0),a.removeClass(r,c),e.put(s,u)}return u||{}}function A(n){_.push(n),f.waitUntilQuiet(function(){t.flush(),e.flush();for(var n=u(),a=0;a<_.length;a++)_[a](n);_.length=0})}function x(n,t,e){var a=y(n,t,e,wn),r=a.animationDelay,i=a.transitionDelay;return a.maxDelay=r&&i?Math.max(r,i):r||i,a.maxDuration=Math.max(a.animationDuration*a.animationIterationCount,a.transitionDuration),a}var L=d(a),W=0,_=[];return function(n,e){function u(){d()}function f(){d(!0)}function d(t){if(!(J||Q&&K)){J=!0,K=!1,H.$$skipPreparationClasses||a.removeClass(n,$n),a.removeClass(n,kn),b(U,!1),S(U,!1),q(cn,function(n){U.style[n[0]]=""}),L(n,H),p(n,H),Object.keys(B).length&&q(B,function(n,t){n?U.style.setProperty(t,n):U.style.removeProperty(t)}),H.onDone&&H.onDone(),pn&&pn.length&&n.off(pn.join(" "),W);var e=n.data(yn);e&&(l.cancel(e[0].timer),n.removeData(yn)),V&&V.complete(!t)}}function y(n){Wn.blockTransition&&S(U,n),Wn.blockKeyframeAnimation&&b(U,!!n)}function T(){return V=new r({end:u,cancel:f}),A(F),d(),{$$willAnimate:!1,start:function(){return V},end:u}}function W(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||Date.now(),a=parseFloat(t.elapsedTime.toFixed(Sn));Math.max(e-ln,0)>=an&&a>=rn&&(Q=!0,d())}function _(){function t(){if(!J){if(y(!1),q(cn,function(n){var t=n[0],e=n[1];U.style[t]=e}),L(n,H),a.addClass(n,kn),Wn.recalculateTimingStyles){if(wn=U.className+" "+$n,xn=C(U,wn),Fn=x(U,wn,xn),Gn=Fn.maxDelay,en=Math.max(Gn,0),rn=Fn.maxDuration,0===rn)return void d();Wn.hasTransitions=Fn.transitionDuration>0,Wn.hasAnimations=Fn.animationDuration>0}if(Wn.applyAnimationDelay&&(Gn="boolean"!=typeof H.delay&&O(H.delay)?parseFloat(H.delay):Gn,en=Math.max(Gn,0),Fn.animationDelay=Gn,_n=I(Gn,!0),cn.push(_n),U.style[_n[0]]=_n[1]),an=en*Dn,on=rn*Dn,H.easing){var t,r=H.easing;Wn.hasTransitions&&(t=P+un,cn.push([t,r]),U.style[t]=r),Wn.hasAnimations&&(t=z+un,cn.push([t,r]),U.style[t]=r)}Fn.transitionDuration&&pn.push(M),Fn.animationDuration&&pn.push(E),ln=Date.now();var i=an+bn*on,o=ln+i,s=n.data(yn)||[],u=!0;if(s.length){var c=s[0];u=o>c.expectedEndTime,u?l.cancel(c.timer):s.push(d)}if(u){var f=l(e,i,!1);s[0]={timer:f,expectedEndTime:o},s.push(d),n.data(yn,s)}pn.length&&n.on(pn.join(" "),W),H.to&&(H.cleanupStyles&&N(B,U,Object.keys(H.to)),h(n,H))}}function e(){var t=n.data(yn);if(t){for(var e=1;e<t.length;e++)t[e]();n.removeData(yn)}}if(!J){if(!U.parentNode)return void d();var r=function(n){if(Q)K&&n&&(K=!1,d());else if(K=!n,Fn.animationDuration){var t=b(U,K);K?cn.push(t):s(cn,t)}},i=zn>0&&(Fn.transitionDuration&&0===On.transitionDuration||Fn.animationDuration&&0===On.animationDuration)&&Math.max(On.animationDelay,On.transitionDelay);i?l(t,Math.floor(i*zn*Dn),!1):t(),tn.resume=function(){r(!0)},tn.pause=function(){r(!1)}}}var H=e||{};H.$$prepared||(H=m(G(H)));var B={},U=$(n);if(!U||!U.parentNode||!g.enabled())return T();var J,K,Q,V,tn,en,an,rn,on,ln,cn=[],fn=n.attr("class"),mn=i(H),pn=[];if(0===H.duration||!c.animations&&!c.transitions)return T();var vn=H.event&&R(H.event)?H.event.join(" "):H.event,hn=vn&&H.structural,gn="",Cn="";hn?gn=o(vn,X,!0):vn&&(gn=vn),H.addClass&&(Cn+=o(H.addClass,Y)),H.removeClass&&(Cn.length&&(Cn+=" "),Cn+=o(H.removeClass,Z)),H.applyClassesEarly&&Cn.length&&L(n,H);var $n=[gn,Cn].join(" ").trim(),wn=fn+" "+$n,kn=o($n,nn),In=mn.to&&Object.keys(mn.to).length>0,Tn=(H.keyframeStyle||"").length>0;if(!Tn&&!In&&!$n)return T();var xn,On;if(H.stagger>0){var jn=parseFloat(H.stagger);On={transitionDelay:jn,animationDelay:jn,transitionDuration:0,animationDuration:0}}else xn=C(U,wn),On=D(U,$n,xn,An);H.$$skipPreparationClasses||a.addClass(n,$n);var Ln;if(H.transitionStyle){var Nn=[P,H.transitionStyle];w(U,Nn),cn.push(Nn)}if(H.duration>=0){Ln=U.style[P].length>0;var Pn=j(H.duration,Ln);w(U,Pn),cn.push(Pn)}if(H.keyframeStyle){var Mn=[z,H.keyframeStyle];w(U,Mn),cn.push(Mn)}var zn=On?H.staggerIndex>=0?H.staggerIndex:t.count(xn):0,En=0===zn;En&&!H.skipBlocking&&S(U,dn);var Fn=x(U,wn,xn),Gn=Fn.maxDelay;en=Math.max(Gn,0),rn=Fn.maxDuration;var Wn={};if(Wn.hasTransitions=Fn.transitionDuration>0,Wn.hasAnimations=Fn.animationDuration>0,Wn.hasTransitionAll=Wn.hasTransitions&&"all"==Fn.transitionProperty,Wn.applyTransitionDuration=In&&(Wn.hasTransitions&&!Wn.hasTransitionAll||Wn.hasAnimations&&!Wn.hasTransitions),Wn.applyAnimationDuration=H.duration&&Wn.hasAnimations,Wn.applyTransitionDelay=O(H.delay)&&(Wn.applyTransitionDuration||Wn.hasTransitions),Wn.applyAnimationDelay=O(H.delay)&&Wn.hasAnimations,Wn.recalculateTimingStyles=Cn.length>0,(Wn.applyTransitionDuration||Wn.applyAnimationDuration)&&(rn=H.duration?parseFloat(H.duration):rn,Wn.applyTransitionDuration&&(Wn.hasTransitions=!0,Fn.transitionDuration=rn,Ln=U.style[P+sn].length>0,cn.push(j(rn,Ln))),Wn.applyAnimationDuration&&(Wn.hasAnimations=!0,Fn.animationDuration=rn,cn.push(k(rn)))),0===rn&&!Wn.recalculateTimingStyles)return T();if(null!=H.delay){var _n;"boolean"!=typeof H.delay&&(_n=parseFloat(H.delay),en=Math.max(_n,0)),Wn.applyTransitionDelay&&cn.push(I(_n)),Wn.applyAnimationDelay&&cn.push(I(_n,!0))}return null==H.duration&&Fn.transitionDuration>0&&(Wn.recalculateTimingStyles=Wn.recalculateTimingStyles||En),an=en*Dn,on=rn*Dn,H.skipBlocking||(Wn.blockTransition=Fn.transitionDuration>0,Wn.blockKeyframeAnimation=Fn.animationDuration>0&&On.animationDelay>0&&0===On.animationDuration),H.from&&(H.cleanupStyles&&N(B,U,Object.keys(H.from)),v(n,H)),Wn.blockTransition||Wn.blockKeyframeAnimation?y(rn):H.skipBlocking||S(U,!1),{$$willAnimate:!0,end:u,start:function(){return J?void 0:(tn={end:u,cancel:f,resume:null,pause:null},V=new r(tn),A(_),V)}}}}]}],In=["$$animationProvider",function(n){function t(n){return n.parentNode&&11===n.parentNode.nodeType}n.drivers.push("$$animateCssDriver");var e="ng-animate-shim",a="ng-anchor",r="ng-anchor-out",i="ng-anchor-in";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(n,o,s,l,u,c,f){function m(n){return n.replace(/\bng-\S+\b/g,"")}function p(n,t){return H(n)&&(n=n.split(" ")),H(t)&&(t=t.split(" ")),n.filter(function(n){return-1===t.indexOf(n)}).join(" ")}function v(t,o,l){function u(n){var t={},e=$(n).getBoundingClientRect();return q(["width","height","top","left"],function(n){var a=e[n];switch(n){case"top":a+=C.scrollTop;break;case"left":a+=C.scrollLeft}t[n]=Math.floor(a)+"px"}),t}function c(){var t=n(h,{addClass:r,delay:!0,from:u(o)});return t.$$willAnimate?t:null}function f(n){return n.attr("class")||""}function d(){var t=m(f(l)),e=p(t,g),a=p(g,t),o=n(h,{to:u(l),addClass:i+" "+e,removeClass:r+" "+a,delay:!0});return o.$$willAnimate?o:null}function v(){h.remove(),o.removeClass(e),l.removeClass(e)}var h=_($(o).cloneNode(!0)),g=m(f(h));o.addClass(e),l.addClass(e),h.addClass(a),D.append(h);var y,S=c();if(!S&&(y=d(),!y))return v();var b=S||y;return{start:function(){function n(){e&&e.end()}var t,e=b.start();return e.done(function(){return e=null,!y&&(y=d())?(e=y.start(),e.done(function(){e=null,v(),t.complete()}),e):(v(),void t.complete())}),t=new s({end:n,cancel:n})}}}function h(n,t,e,a){var r=g(n,F),i=g(t,F),o=[];return q(a,function(n){var t=n.out,a=n["in"],r=v(e,t,a);r&&o.push(r)}),r||i||0!==o.length?{start:function(){function n(){q(t,function(n){n.end()})}var t=[];r&&t.push(r.start()),i&&t.push(i.start()),q(o,function(n){t.push(n.start())});var e=new s({end:n,cancel:n});return s.all(t,function(n){e.complete(n)}),e}}:void 0}function g(t){var e=t.element,a=t.options||{};t.structural&&(a.event=t.event,a.structural=!0,a.applyClassesEarly=!0,"leave"===t.event&&(a.onDone=a.domOperation)),a.preparationClasses&&(a.event=A(a.event,a.preparationClasses));var r=n(e,a);return r.$$willAnimate?r:null}if(!u.animations&&!u.transitions)return F;var C=f[0].body,y=$(l),D=_(t(y)||C.contains(y)?y:C);return d(c),function(n){return n.from&&n.to?h(n.from,n.to,n.classes,n.anchors):g(n)}}]}],Tn=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,e,a){function r(e){e=R(e)?e:e.split(" ");for(var a=[],r={},i=0;i<e.length;i++){var o=e[i],s=n.$$registeredAnimations[o];s&&!r[o]&&(a.push(t.get(s)),r[o]=!0)}return a}var i=d(a);return function(n,t,a,o){function s(){o.domOperation(),i(n,o)}function l(){d=!0,s(),p(n,o)}function u(n,t,a,r,i){var o;switch(a){case"animate":o=[t,r.from,r.to,i];break;case"setClass":o=[t,g,C,i];break;case"addClass":o=[t,g,i];break;case"removeClass":o=[t,C,i];break;default:o=[t,i]}o.push(r);var s=n.apply(n,o);if(s)if(K(s.start)&&(s=s.start()),s instanceof e)s.done(i);else if(K(s))return s;return F}function c(n,t,a,r,i){var o=[];return q(r,function(r){var s=r[i];s&&o.push(function(){var r,i,o=!1,l=function(n){o||(o=!0,(i||F)(n),r.complete(!n))};return r=new e({end:function(){l()},cancel:function(){l(!0)}}),i=u(s,n,t,a,function(n){var t=n===!1;l(t)}),r})}),o}function f(n,t,a,r,i){var o=c(n,t,a,r,i);if(0===o.length){var s,l;"beforeSetClass"===i?(s=c(n,"removeClass",a,r,"beforeRemoveClass"),l=c(n,"addClass",a,r,"beforeAddClass")):"setClass"===i&&(s=c(n,"removeClass",a,r,"removeClass"),l=c(n,"addClass",a,r,"addClass")),s&&(o=o.concat(s)),l&&(o=o.concat(l))}return 0!==o.length?function(n){var t=[];return o.length&&q(o,function(n){t.push(n())}),t.length?e.all(t,n):n(),function(n){q(t,function(t){n?t.cancel():t.end()})}}:void 0}var d=!1;3===arguments.length&&B(a)&&(o=a,a=null),o=m(o),a||(a=n.attr("class")||"",o.addClass&&(a+=" "+o.addClass),o.removeClass&&(a+=" "+o.removeClass));var v,h,g=o.addClass,C=o.removeClass,$=r(a);if($.length){var y,D;"leave"==t?(D="leave",y="afterLeave"):(D="before"+t.charAt(0).toUpperCase()+t.substr(1),y=t),"enter"!==t&&"move"!==t&&(v=f(n,t,o,$,D)),h=f(n,t,o,$,y)}if(v||h){var S;return{$$willAnimate:!0,end:function(){return S?S.end():(l(),S=new e,S.complete(!0)),S},start:function(){function n(n){l(n),S.complete(n)}function t(t){d||((a||F)(t),n(t))}if(S)return S;S=new e;var a,r=[];return v&&r.push(function(n){a=v(n)}),r.length?r.push(function(n){s(),n(!0)}):s(),h&&r.push(function(n){a=h(n)}),S.setHost({end:function(){t()},cancel:function(){t(!0)}}),e.chain(r,n),S}}}}}]}],xn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(n,t){function e(t){var e=t.element,a=t.event,r=t.options,i=t.classes;return n(e,a,i,r)}return function(n){if(n.from&&n.to){var a=e(n.from),r=e(n.to);if(!a&&!r)return;return{start:function(){function n(){return function(){q(i,function(n){n.end()})}}function e(n){o.complete(n)}var i=[];a&&i.push(a.start()),r&&i.push(r.start()),t.all(i,e);var o=new t({end:n(),cancel:n()});return o}}}return e(n)}}]}],On="data-ng-animate",jn="$ngAnimatePin",Ln=["$animateProvider",function(n){function t(n){if(!n)return null;var t=n.split(c),e=Object.create(null);return q(t,function(n){e[n]=!0}),e}function e(n,e){if(n&&e){var a=t(e);return n.split(c).some(function(n){return a[n]})}}function r(n,t,e,a){return f[n].some(function(n){return n(t,e,a)})}function i(n,t){var e=(n.addClass||"").length>0,a=(n.removeClass||"").length>0;return t?e&&a:e||a}var o=1,s=2,c=" ",f=this.rules={skip:[],cancel:[],join:[]};f.join.push(function(n,t,e){return!t.structural&&i(t)}),f.skip.push(function(n,t,e){return!t.structural&&!i(t)}),f.skip.push(function(n,t,e){return"leave"==e.event&&t.structural}),f.skip.push(function(n,t,e){return e.structural&&e.state===s&&!t.structural}),f.cancel.push(function(n,t,e){return e.structural&&t.structural}),f.cancel.push(function(n,t,e){return e.state===s&&t.structural}),f.cancel.push(function(n,t,a){if(a.structural)return!1;var r=t.addClass,i=t.removeClass,o=a.addClass,s=a.removeClass;return U(r)&&U(i)||U(o)&&U(s)?!1:e(r,s)||e(i,o)}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(t,e,c,f,v,h,C,S,b,w){function A(){var n=!1;return function(t){n?t():e.$$postDigest(function(){n=!0,t()})}}function k(n,t){return g(n,t,{})}function I(n,t,e){var a=$(t),r=$(n),i=[],o=F[e];return o&&q(o,function(n){X.call(n.node,a)?i.push(n.callback):"leave"===e&&X.call(n.node,r)&&i.push(n.callback)}),i}function T(n,a,u){function c(e,a,r,i){T(function(){var e=I(S,n,a);e.length&&t(function(){q(e,function(t){t(n,r,i)})})}),e.progress(a,r,i)}function d(t){D(n,b),Z(n,b),p(n,b),b.domOperation(),w.complete(!t)}var v,S,b=G(u);n=l(n),n&&(v=$(n),S=n.parent()),b=m(b);var w=new C,T=A();if(R(b.addClass)&&(b.addClass=b.addClass.join(" ")),b.addClass&&!H(b.addClass)&&(b.addClass=null),R(b.removeClass)&&(b.removeClass=b.removeClass.join(" ")),b.removeClass&&!H(b.removeClass)&&(b.removeClass=null),b.from&&!B(b.from)&&(b.from=null),b.to&&!B(b.to)&&(b.to=null),!v)return d(),w;var j=[v.className,b.addClass,b.removeClass].join(" ");if(!Y(j))return d(),w;var E=["enter","move","leave"].indexOf(a)>=0,F=!z||f[0].hidden||M.get(v),W=!F&&P.get(v)||{},_=!!W.state;if(F||_&&W.state==o||(F=!L(n,S,a)),F)return d(),w;E&&x(n);var U={structural:E,element:n,event:a,addClass:b.addClass,removeClass:b.removeClass,close:d,options:b,runner:w};if(_){var J=r("skip",n,U,W);if(J)return W.state===s?(d(),w):(g(n,W,U),W.runner);var K=r("cancel",n,U,W);if(K)if(W.state===s)W.runner.end();else{if(!W.structural)return g(n,W,U),W.runner;W.close()}else{var Q=r("join",n,U,W);if(Q){if(W.state!==s)return y(n,E?a:null,b),a=U.event=W.event,b=g(n,W,U),W.runner;k(n,U)}}}else k(n,U);var V=U.structural;if(V||(V="animate"===U.event&&Object.keys(U.options.to||{}).length>0||i(U)),!V)return d(),O(n),w;var X=(W.counter||0)+1;return U.counter=X,N(n,o,U),e.$$postDigest(function(){var t=P.get(v),e=!t;t=t||{};var r=n.parent()||[],o=r.length>0&&("animate"===t.event||t.structural||i(t));if(e||t.counter!==X||!o)return e&&(Z(n,b),p(n,b)),(e||E&&t.event!==a)&&(b.domOperation(),w.end()),void(o||O(n));a=!t.structural&&i(t,!0)?"setClass":t.event,N(n,s);var l=h(n,a,t.options);l.done(function(t){d(!t);var e=P.get(v);e&&e.counter===X&&O($(n)),c(w,a,"close",{})}),w.setHost(l),c(w,a,"start",{})}),w}function x(n){var t=$(n),e=t.querySelectorAll("["+On+"]");q(e,function(n){var t=parseInt(n.getAttribute(On)),e=P.get(n);if(e)switch(t){case s:e.runner.end();case o:P.remove(n)}})}function O(n){var t=$(n);t.removeAttribute(On),P.remove(t)}function j(n,t){return $(n)===$(t)}function L(n,t,e){var a,r=_(f[0].body),i=j(n,r)||"HTML"===n[0].nodeName,o=j(n,c),s=!1,l=M.get($(n)),u=_.data(n[0],jn);for(u&&(t=u),t=$(t);t&&(o||(o=j(t,c)),t.nodeType===V);){var d=P.get(t)||{};if(!s){var m=M.get(t);if(m===!0&&l!==!1){l=!0;break}m===!1&&(l=!1),s=d.structural}if(U(a)||a===!0){var p=_.data(t,an);J(p)&&(a=p)}if(s&&a===!1)break;if(i||(i=j(t,r)),i&&o)break;t=o||!(u=_.data(t,jn))?t.parentNode:$(u)}var v=(!s||a)&&l!==!0;return v&&o&&i}function N(n,t,e){e=e||{},e.state=t;var a=$(n);a.setAttribute(On,t);var r=P.get(a),i=r?W(r,e):e;P.put(a,i)}var P=new v,M=new v,z=null,E=e.$watch(function(){return 0===S.totalPendingRequests},function(n){n&&(E(),e.$$postDigest(function(){e.$$postDigest(function(){null===z&&(z=!0)})}))}),F={},K=n.classNameFilter(),Y=K?function(n){return K.test(n)}:function(){return!0},Z=d(b),X=Node.prototype.contains||function(n){return this===n||!!(16&this.compareDocumentPosition(n))},nn={on:function(n,t,e){var a=u(t);F[n]=F[n]||[],F[n].push({node:a,callback:e}),_(t).on("$destroy",function(){nn.off(n,t,e)})},off:function(n,t,e){function a(n,t,e){var a=u(t);return n.filter(function(n){var t=n.node===a&&(!e||n.callback===e);return!t})}var r=F[n];r&&(F[n]=1===arguments.length?null:a(r,t,e))},pin:function(n,t){a(Q(n),"element","not an element"),a(Q(t),"parentElement","not an element"),n.data(jn,t)},push:function(n,t,e,a){return e=e||{},e.domOperation=a,T(n,t,e)},enabled:function(n,t){var e=arguments.length;if(0===e)t=!!z;else{var a=Q(n);if(a){var r=$(n),i=M.get(r);1===e?t=!i:M.put(r,!t)}else t=z=!!n}return t}};return nn}]}],Nn=["$animateProvider",function(n){function t(n,t){n.data(s,t)}function e(n){n.removeData(s)}function a(n){return n.data(s)}var i="ng-animate-ref",o=this.drivers=[],s="$$animationRunner";this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(n,s,l,u,c,f){function v(n){function t(n){if(n.processed)return n;n.processed=!0;var e=n.domNode,a=e.parentNode;i.put(e,n);for(var o;a;){if(o=i.get(a)){o.processed||(o=t(o));break}a=a.parentNode}return(o||r).children.push(n),n}function e(n){var t,e=[],a=[];for(t=0;t<n.children.length;t++)a.push(n.children[t]);var r=a.length,i=0,o=[];for(t=0;t<a.length;t++){var s=a[t];0>=r&&(r=i,i=0,e.push(o),o=[]),o.push(s.fn),s.children.forEach(function(n){i++,a.push(n)}),r--}return o.length&&e.push(o),e}var a,r={children:[]},i=new c;for(a=0;a<n.length;a++){var o=n[a];i.put(o.domNode,n[a]={domNode:o.domNode,fn:o.fn,children:[]})}for(a=0;a<n.length;a++)t(n[a]);return e(r)}var h=[],g=d(n);return function(c,d,C){function y(n){var t="["+i+"]",e=n.hasAttribute(i)?[n]:n.querySelectorAll(t),a=[];return q(e,function(n){var t=n.getAttribute(i);t&&t.length&&a.push(n)}),a}function D(n){var t=[],e={};q(n,function(n,a){var r=n.element,o=$(r),s=n.event,l=["enter","move"].indexOf(s)>=0,u=n.structural?y(o):[];if(u.length){var c=l?"to":"from";q(u,function(n){var t=n.getAttribute(i);e[t]=e[t]||{},e[t][c]={animationID:a,element:_(n)}})}else t.push(n)});var a={},r={};return q(e,function(e,i){var o=e.from,s=e.to;if(!o||!s){var l=o?o.animationID:s.animationID,u=l.toString();return void(a[u]||(a[u]=!0,t.push(n[l])))}var c=n[o.animationID],f=n[s.animationID],d=o.animationID.toString();if(!r[d]){var m=r[d]={structural:!0,beforeStart:function(){c.beforeStart(),f.beforeStart()},close:function(){c.close(),f.close()},classes:S(c.classes,f.classes),from:c,to:f,anchors:[]};m.classes.length?t.push(m):(t.push(c),t.push(f))}r[d].anchors.push({out:o.element,"in":s.element})}),t}function S(n,t){n=n.split(" "),t=t.split(" ");for(var e=[],a=0;a<n.length;a++){var r=n[a];if("ng-"!==r.substring(0,3))for(var i=0;i<t.length;i++)if(r===t[i]){e.push(r);break}}return e.join(" ")}function b(n){for(var t=o.length-1;t>=0;t--){var e=o[t];if(l.has(e)){var a=l.get(e),r=a(n);if(r)return r}}}function w(){c.addClass(en),j&&n.addClass(c,j),L&&(n.removeClass(c,L),L=null)}function A(n,t){function e(n){a(n).setHost(t)}n.from&&n.to?(e(n.from.element),e(n.to.element)):e(n.element)}function k(){var n=a(c);!n||"leave"===d&&C.$$domOperationFired||n.end()}function I(t){c.off("$destroy",k),e(c),g(c,C),p(c,C),C.domOperation(),j&&n.removeClass(c,j),c.removeClass(en),x.complete(!t)}C=m(C);var T=["enter","move","leave"].indexOf(d)>=0,x=new u({end:function(){I()},cancel:function(){I(!0)}});if(!o.length)return I(),x;t(c,x);var O=r(c.attr("class"),r(C.addClass,C.removeClass)),j=C.tempClasses;j&&(O+=" "+j,C.tempClasses=null);var L;return T&&(L="ng-"+d+tn,n.addClass(c,L)),h.push({element:c,classes:O,event:d,structural:T,options:C,beforeStart:w,close:I}),c.on("$destroy",k),h.length>1?x:(s.$$postDigest(function(){var n=[];q(h,function(t){a(t.element)?n.push(t):t.close()}),h.length=0;var t=D(n),e=[];q(t,function(n){e.push({domNode:$(n.from?n.from.element:n.element),fn:function(){n.beforeStart();var t,e=n.close,r=n.anchors?n.from.element||n.to.element:n.element;if(a(r)){var i=b(n);i&&(t=i.start)}if(t){var o=t();o.done(function(n){e(!n)}),A(n,o)}else e()}})}),f(v(e))}),x)}}]}],Pn=["$animate","$rootScope",function(n,t){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(t,e,a,r,i){var o,s;t.$watchCollection(a.ngAnimateSwap||a["for"],function(a){o&&n.leave(o),s&&(s.$destroy(),s=null),(a||0===a)&&(s=t.$new(),i(s,function(t){o=t,n.enter(t,null,e)}))})}}}];t.module("ngAnimate",[]).directive("ngAnimateSwap",Pn).directive("ngAnimateChildren",$n).factory("$$rAFScheduler",Cn).provider("$$animateQueue",Ln).provider("$$animation",Nn).provider("$animateCss",kn).provider("$$animateCssDriver",In).provider("$$animateJs",Tn).provider("$$animateJsDriver",xn)}(window,window.angular),function(n,t,e){"use strict";function a(n){return n.complete&&("undefined"==typeof n.naturalWidth||0!==n.naturalWidth)}function r(n){return Array.prototype.slice.call(n)}var i={gridWidth:300,gutterSize:10,gridNo:"auto",direction:"ltor",refreshOnImgLoad:!0,cssGrid:!1,performantScroll:!1,pageSize:"auto",scrollContainer:"body",infiniteScrollDelay:3e3,infiniteScrollDistance:100},o=n.element,s=function(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},l={visibility:"hidden",opacity:0,top:0,left:0,width:""},u=function(){var n=o(t);return function(t){return n[0]=t,n}}();o(document.head).append("<style>.ag-no-transition{-webkit-transition: none !important;transition: none !important;} .angular-grid{position : relative;} .angular-grid > *{opacity : 0} .angular-grid > .angular-grid-item{opacity : 1}</style>"),n.module("angularGrid",[]).directive("angularGrid",["$timeout","$window","$q","angularGridInstance",function(c,f,d,m){return{restrict:"A",scope:{model:"=angularGrid",dep_gridWidth:"=gridWidth",dep_gutterSize:"=gutterSize",dep_refreshOnImgLoad:"=refreshOnImgLoad",dep_direction:"=direction",dep_cssGrid:"=cssGrid",dep_options:"=angularGridOptions",dep_gridNo:"=gridNo",dep_agId:"@angularGridId",gridNo:"=agGridNo",gridWidth:"=agGridWidth",gutterSize:"=agGutterSize",refreshOnImgLoad:"=agRefreshOnImgLoad",direction:"=agDirection",cssGrid:"=agCssGrid",options:"=agOptions",agId:"@",pageSize:"=agPageSize",performantScroll:"=agPerformantScroll",scrollContainer:"=agScrollContainer",infiniteScroll:"&agInfiniteScroll",infiniteScrollDistance:"=agInfiniteScrollDistance",infiniteScrollDelay:"=agInfiniteScrollDelay"},link:function(p,v,h){function g(){_={},Object.keys(i).forEach(function(n){p[n]!==e?_[n]=p[n]:p["dep_"+n]!==e&&(_[n]=p["dep_"+n])}),_=n.extend({},i,_,p.options||p.dep_options),_.cssGrid&&(_.gutterSize=0),"auto"==_.pageSize&&(_.pageSize=t.offsetWidth>=768?2:3)}function C(n,t){t=t||document.body;var e=0,a=0;if(n.offsetParent)do e+=n.offsetLeft,a+=n.offsetTop,n=n.offsetParent;while(n&&n!=t);return{left:e,top:a}}function $(){var n=o(document.querySelector(_.scrollContainer)),t=n[0];return{height:t.offsetHeight,scrollHeight:t.scrollHeight,startFrom:C(E,t).top,$elm:"body"==_.scrollContainer?F:n}}function y(n,t,e){q.pageInfo=[{from:0}];var a,r,i,o=_.pageSize,s=q.scrollContInfo.height,l=s*o,u=Math.ceil(t/l),c=0;for(c=0;u>c;c++)for(var f=0,d=n.length;d>f;f++)if(a=n[f],r=c?l*c:0,i=l*(c+1),a.bottom<r||a.top>i){if(a.top>i)break}else q.pageInfo[c]||(q.pageInfo[c]={from:f}),q.pageInfo[c].to=f;q.pageInfo=q.pageInfo.map(function(n,t){var e=Math.max(t-1,0),a=Math.min(t+1,q.pageInfo.length-1);return{from:q.pageInfo[e].from,to:q.pageInfo[a].to}})}function D(n){var t,e,a,r;for(a=0,r=M.length;r>a;a++)e=u(M[a]),t=e.data(),t.$scope&&(e.data("_agOldWatchers",t.$scope.$$watchers),t.$scope.$$watchers=[]);for(a=0,r=n.length;r>a;a++)t=u(n[a]).data(),t.$scope&&(t.$scope.$$watchers=t._agOldWatchers||[],t.$scope.$digest())}function S(n){q.lastScrollPosition=n;var t;if(!q.isBusy){var e=0,a=_.pageSize;if(n>q.scrollContInfo.startFrom+q.scrollContInfo.height*a&&(e=Math.floor((n-q.scrollContInfo.startFrom)/(q.scrollContInfo.height*a))),e!=q.lastPage){q.lastPage=e;var r=q.pageInfo[e];r&&(v.children().detach(),t=Array.prototype.slice.call(M,r.from,r.to+1),D(t),v.append(t))}}}function b(){clearTimeout(q.infiniteScrollTimeout),q.isLoading=!1}function w(n){if(!q.isLoading&&p.model.length){var t=q.scrollContInfo.scrollHeight,e=q.scrollContInfo.height;n>=t-e*(1+_.infiniteScrollDistance/100)&&(q.isLoading=!0,p.infiniteScroll(),q.infiniteScrollTimeout=setTimeout(b,_.infiniteScrollDelay))}}function A(){var n=this.scrollTop||this.scrollY;_.performantScroll&&S(n),p.infiniteScroll&&w(n)}function k(){var n,t=E.offsetWidth;if(_.cssGrid){n=o(M[0]).clone(),n.css(l).addClass("ag-no-transition ag-clone"),v.append(n);var e=n[0].offsetWidth;return n.remove(),{no:Math.floor((t+12)/e),width:e}}var a="auto"==_.gridNo?_.gridWidth:Math.floor(t/_.gridNo)-_.gutterSize,r="auto"==_.gridNo?Math.floor((t+_.gutterSize)/(a+_.gutterSize)):_.gridNo,i=(t+_.gutterSize)%(a+_.gutterSize);return a+=Math.floor(i/r),{no:r,width:a}}function I(t,e){var i=e.beforeLoad||n.noop,o=e.onLoad||n.noop,s=e.isLoaded||n.noop,l=e.onFullLoad||n.noop,u=e.ignoreCheck||n.noop,c=t.find("img"),f=[];r(c).forEach(function(n){i(n),a(n)||u(n)?s(n):f.push(d(function(t,e){n.onload=function(){o(n),t()},n.onerror=e}))}),f.length?d.all(f).then(l,l):setTimeout(function(){l()},0)}function T(){W++;var t,e=k(),a=e.width,i=e.no,s=[];for(t=0;i>t;t++)s.push(0);r(M).forEach(function(n){var t=u(n);r(t.find("img")).forEach(function(n){var e=o(n);if(e.hasClass("img-loaded"))return void e.css("height","");t.addClass("ag-no-transition"),t.css("width",a+"px");var r=e.attr("actual-width")||e.attr("data-actual-width"),i=e.attr("actual-height")||e.attr("data-actual-height");r&&i&&e.css("height",i*n.width/r+"px")}),t.removeClass("ag-no-transition")});var c=M.clone();c.addClass("ag-no-transition ag-clone");var f=n.extend({},l);f.width=a+"px",c.css(f),v.append(c),function(n){I(c,{ignoreCheck:function(n){return!u(n).hasClass("img-loaded")},onFullLoad:function(){if(!(W>n)){var t,e,r,o=[],l=[];for(e=0,r=c.length;r>e;e++)o.push(c[e].offsetHeight);for(e=0,r=M.length;r>e;e++){t=u(M[e]);var f=o[e],d=Math.min.apply(Math,s),m=s.indexOf(d);s[m]=d+f+_.gutterSize;var h=m*(a+_.gutterSize),g={position:"absolute",top:d+"px"};"rtol"==_.direction?g.right=h+"px":g.left=h+"px",g.width=a+"px",l.push({top:d,bottom:d+f}),t.css(g).addClass("angular-grid-item")}var C=Math.max.apply(Math,s);v.css("height",C+"px"),c.remove(),(_.performantScroll||p.infiniteScroll)&&(q.scrollContInfo=$()),_.performantScroll&&(q.lastPage=null,y(l,C,i),q.isBusy=!1,S(q.lastScrollPosition||0)),b()}}})}(W)}function x(){var n=!1;r(M).forEach(function(t){var e=o(t),a=e.find("img");a.length&&(e.addClass("img-loading"),I(e,{beforeLoad:function(n){u(n).addClass("img-loading")},isLoaded:function(n){u(n).removeClass("img-loading").addClass("img-loaded")},onLoad:function(t){!n&&_.refreshOnImgLoad&&(n=!0,c(function(){T(),n=!1},100)),u(t).removeClass("img-loading").addClass("img-loaded")},onFullLoad:function(){e.removeClass("img-loading").addClass("img-loaded")}}))})}function O(){return o(r(v.children()).filter(function(n){return!u(n).hasClass("ag-clone")}))}function j(){var n=r(M).filter(function(n){return u(n).hasClass("ng-leave");
});return d(function(t){n.length?u(n[0]).one("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd",function(){c(function(){M=O(),t()})}):t()})}function L(){q.isBusy=!0,c(function(){M=O(),j().then(function(){x(),c(function(){T()})})})}function N(){g(),M&&T()}function P(){q.isBusy=!0;var n=E.offsetWidth;R!=n&&(R=n,z&&c.cancel(z),z=c(function(){_.performantScroll&&(v.children().detach(),v.append(M)),T()},100))}var M,z,E=v[0],F=o(f),G=p.agId||p.dep_agId,W=0;v.addClass("angular-grid");var _;["gridWidth","gutterSize","refreshOnImgLoad","direction","options","cssGrid","gridNo","agId"].forEach(function(n){var t=s(n),a="ag-"+s(n);"options"==n&&(t="angular-grid-options"),"agId"==n&&(t="angular-grid-id",a="ag-id"),p["dep_"+n]!==e&&console&&console.warn&&console.warn(t+" is deprecated. Use "+a+" instead in template.")}),g();var q={};setTimeout(function(){q.scrollContInfo=$(),q.scrollContInfo.$elm.on("scroll",A)},0),p.$watch("model",L,!0),p.$watch("options",N,!0),Object.keys(i).forEach(function(n){p[n]!==e&&p.$watch(n,N)});var R=E.offsetWidth;F.on("resize",P),G&&(m[G]={refresh:function(){L()},handleScroll:function(n){_.performantScroll&&S(n),p.infiniteScroll&&w(n)}}),p.$on("$destroy",function(){G&&delete m[G],F.off("resize",P),clearTimeout(q.infiniteScrollTimeout),q.scrollContInfo&&q.scrollContInfo.$elm.off("scroll",A)})}}}]).factory("angularGridInstance",function(){var n={};return n})}(angular,window);