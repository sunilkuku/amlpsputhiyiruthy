// iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license

!function(n,r,d){var m=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(t){n.setTimeout(t,1e3/60)},f=function(){var e={},o=r.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,i){for(var s in i)t[s]=i[s]},e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},e.prefixPointerEvent=function(t){return n.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=d.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=d.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=d.abs(t)+r)/l),{destination:d.round(r),duration:h}};var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in n,hasPointer:!(!n.PointerEvent&&!n.MSPointerEvent),hasTransition:t("transition")in o}),e.isBadAndroid=function(){var t=n.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}return!1}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin"),touchAction:t("touchAction")}),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},e.offset=function(t){for(t.offsetLeft,t.offsetTop;t=t.offsetParent;)t.offsetLeft,t.offsetTop;return{left:0,top:0}},e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return d.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*d.pow(2,-10*t)*d.sin((t-.055)*(2*d.PI)/.22)+1}}}),e.tap=function(t,i){var s=r.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=r.createEvent(n.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),i.view=t.view||n,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},e.getTouchAction=function(t,i){var s="none";return"vertical"===t?s="pan-y":"horizontal"===t&&(s="pan-x"),i&&"none"!=s&&(s+=" pinch-zoom"),s},e.getRect=function(t){if(t instanceof SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}},e}();function t(t,i){for(var s in this.wrapper="string"==typeof t?r.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={zoomMin:1,zoomMax:4,startZoom:1,resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!f.hasPointer,disableTouch:f.hasPointer||!f.hasTouch,disableMouse:f.hasPointer||f.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===n.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&f.hasPerspective?" translateZ(0)":"",this.options.useTransition=f.hasTransition&&this.options.useTransition,this.options.useTransform=f.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?f.ease[this.options.bounceEasing]||f.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this.scale=d.min(d.max(this.options.startZoom,this.options.zoomMin),this.options.zoomMax),this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function h(t,i,s){var e=r.createElement("div"),o=r.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),e.className="iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function a(t,i){for(var s in this.wrapper="string"==typeof i.el?r.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(f.addEvent(this.indicator,"touchstart",this),f.addEvent(n,"touchend",this)),this.options.disablePointer||(f.addEvent(this.indicator,f.prefixPointerEvent("pointerdown"),this),f.addEvent(n,f.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(f.addEvent(this.indicator,"mousedown",this),f.addEvent(n,"mouseup",this))),this.options.fade){this.wrapperStyle[f.style.transform]=this.scroller.translateZ;var e=f.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=f.isBadAndroid?"0.0001ms":"0ms";var o=this;f.isBadAndroid&&m(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}t.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents(),this.options.zoom&&this._initZoom(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if("pointerdown"!=t.type||t.isPrimary){if(1!=f.eventType[t.type])if(0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||f.eventType[t.type]===this.initiated)){!this.options.preventDefault||f.isBadAndroid||f.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=f.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=f.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(d.round(i.x),d.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}}},_move:function(t){if(this.enabled&&f.eventType[t.type]===this.initiated&&("pointermove"!=t.type||t.isPrimary)){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=f.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=d.abs(this.distX),o=d.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&f.eventType[t.type]===this.initiated&&("pointerup"!=t.type||t.isPrimary)){this.options.preventDefault&&!f.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=f.getTime()-this.startTime,o=d.round(this.x),n=d.round(this.y),r=d.abs(o-this.startX),h=d.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=f.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&f.tap(t,this.options.tap),this.options.click&&f.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?f.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?f.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,a=d.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||d.max(d.max(d.min(d.abs(o-c.x),1e3),d.min(d.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=f.ease.quadratic),this.scrollTo(o,n,a,l),void this._execEvent("scrollToPage");this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},setScrollerSize:function(t,i){this.scrollerW=t,this.scrollerH=i},setWrapperOffset:function(t,i){this.wrapperOffsetLeft=t,this.wrapperOffsetTop=i},refresh:function(){f.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var t=f.getRect(this.scroller);this.scrollerW&&(t.width=this.scrollerW),this.scrollerH&&(t.height=this.scrollerH),this.scrollerWidth=d.round(t.width*this.scale),this.scrollerHeight=d.round(t.height*this.scale),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,f.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[f.style.touchAction]=f.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[f.style.touchAction]||(this.wrapper.style[f.style.touchAction]=f.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=f.offset(this.wrapper),this.wrapperOffsetLeft&&(this.wrapperOffset.left=this.wrapperOffsetLeft),this.wrapperOffsetTop&&(this.wrapperOffset.top=this.wrapperOffsetTop),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},getScrollerWidth:function(){return void 0!==this.scrollerW?this.scrollerW:this.scroller.offsetWidth},getScrollerHeight:function(){return void 0!==this.scrollerH?this.scrollerH:this.scroller.offsetHeight},scrollTo:function(t,i,s,e){if(s){if(this.prevDisabled&&0==t)return void this.goToPage(1,0,0);if(this.nextDisabled&&t==-(this.scrollerWidth-this.wrapperWidth))return void this.goToPage(1,0,0)}this.options.keepInCenterH&&this.getScrollerWidth()*this.scale<this.wrapperWidth&&(t=this.wrapperWidth/2-this.getScrollerWidth()*this.scale/2),this.options.keepInCenterV&&this.getScrollerHeight()*this.scale<this.wrapperHeight&&(i=this.wrapperHeight/2-this.getScrollerHeight()*this.scale/2),e=e||f.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=f.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top;var r=f.getRect(t),h=f.getRect(this.wrapper);!0===s&&(s=d.round(r.width/2-h.width/2)),!0===e&&(e=d.round(r.height/2-h.height/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?d.max(d.abs(this.x-n.left),d.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=f.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&f.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;m(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[f.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[f.style.transform]="translate("+t+"px,"+i+"px) scale("+this.scale+") "+this.translateZ:(t=d.round(t),i=d.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?f.removeEvent:f.addEvent,s=this.options.bindToWrapper?this.wrapper:n;i(n,"orientationchange",this),i(n,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),f.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,f.prefixPointerEvent("pointerdown"),this),i(s,f.prefixPointerEvent("pointermove"),this),i(s,f.prefixPointerEvent("pointercancel"),this),i(s,f.prefixPointerEvent("pointerup"),this)),f.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=n.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((s=s[f.style.transform].split(")")[0].split(", "))[12]||s[4]),i=+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),i=+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initZoom:function(){this.scrollerStyle[f.style.transformOrigin]="0 0"},_zoomStart:function(t){var i=d.abs(t.touches[0].pageX-t.touches[1].pageX),s=d.abs(t.touches[0].pageY-t.touches[1].pageY);this.touchesDistanceStart=d.sqrt(i*i+s*s),this.startScale=this.scale,this.originX=d.abs(t.touches[0].pageX+t.touches[1].pageX)/2+this.wrapperOffset.left-this.x,this.originY=d.abs(t.touches[0].pageY+t.touches[1].pageY)/2+this.wrapperOffset.top-this.y,this._execEvent("zoomStart")},_zoom:function(t){if(this.enabled&&f.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o=d.abs(t.touches[0].pageX-t.touches[1].pageX),n=d.abs(t.touches[0].pageY-t.touches[1].pageY),r=d.sqrt(o*o+n*n),h=1/this.touchesDistanceStart*r*this.startScale;this.scaled=!0,h<this.options.zoomMin?h=.5*this.options.zoomMin*d.pow(2,h/this.options.zoomMin):h>this.options.zoomMax&&(h=2*this.options.zoomMax*d.pow(.5,this.options.zoomMax/h)),i=h/this.startScale,s=this.originX-this.originX*i+this.startX,e=this.originY-this.originY*i+this.startY,this.scale=h,this.scrollTo(s,e,0)}},_zoomEnd:function(t){var i,s,e;this.enabled&&f.eventType[t.type]===this.initiated&&(this.options.preventDefault&&t.preventDefault(),this.isInTransition=0,this.initiated=0,this.scale>this.options.zoomMax?this.scale=this.options.zoomMax:this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin),this.refresh(),e=this.scale/this.startScale,i=this.originX-this.originX*e+this.startX,s=this.originY-this.originY*e+this.startY,0<i?i=0:i<this.maxScrollX&&(i=this.maxScrollX),0<s?s=0:s<this.maxScrollY&&(s=this.maxScrollY),this.x==i&&this.y==s||this.scrollTo(i,s,this.options.bounceTime),this.scaled=!1,this._execEvent("zoomEnd"))},zoom:function(t,i,s,e){if(t<this.options.zoomMin?t=this.options.zoomMin:t>this.options.zoomMax&&(t=this.options.zoomMax),t!=this.scale){var o=t/this.scale,n=this;1!=o&&(clearTimeout(this.zoomStartTimeout),this.zoomStartTimeout=setTimeout(function(){n._execEvent("zoomStart")},0),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n._execEvent("zoomEnd")},Number(e+100))),i=void 0===i?this.wrapperWidth/2:i,s=void 0===s?this.wrapperHeight/2:s,e=void 0===e?300:e,i=i+this.wrapperOffset.left-this.x,s=s+this.wrapperOffset.top-this.y,i=i-i*o+this.x,s=s-s*o+this.y,this.scale=t,this.refresh(),0<i?i=0:i<this.maxScrollX&&(i=this.maxScrollX),0<s?s=0:s<this.maxScrollY&&(s=this.maxScrollY),this.scrollTo(i,s,e)}},_wheelZoom:function(t){var i,s;if("deltaX"in t)i=-t.deltaY/d.abs(t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaY/d.abs(t.wheelDeltaY);else if("wheelDelta"in t)i=t.wheelDelta/d.abs(t.wheelDelta);else{if(!("detail"in t))return;i=-t.detail/d.abs(t.wheelDelta)}s=this.scale+i/5,this.zoom(s,t.pageX,t.pageY,0)},_initWheel:function(){f.addEvent(this.wrapper,"wheel",this),f.addEvent(this.wrapper,"mousewheel",this),f.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,f.removeEvent(this.wrapper,"wheel",this),f.removeEvent(this.wrapper,"mousewheel",this),f.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,s=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,s=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+d.round(this.hasHorizontalScroll?i:0),o=this.y+d.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=d.round(c/2),e=d.round(p/2);l>-this.scrollerWidth;){for(this.pages[h]=[],o=t=0;o>-this.scrollerHeight;)this.pages[h][t]={x:d.max(l,this.maxScrollX),y:d.max(o,this.maxScrollY),width:c,height:p,cx:l-s,cy:o-e},o-=p,t++;l-=c,h++}else for(t=(n=this.options.snap).length,i=-1;h<t;h++)r=f.getRect(n[h]),(0===h||r.left<=f.getRect(n[h-1]).left)&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=d.max(-r.left,this.maxScrollX),o=d.max(-r.top,this.maxScrollY),s=l-d.round(r.width/2),e=o-d.round(r.height/2),this.pages[a][i]={x:l,y:o,width:r.width,height:r.height,cx:s,cy:e},l>this.maxScrollX&&a++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||d.max(d.max(d.min(d.abs(this.x-this.startX),1e3),d.min(d.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(d.abs(t-this.absStartX)<this.snapThresholdX&&d.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||d.max(d.max(d.min(d.abs(o-this.x),1e3),d.min(d.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];f.addEvent(n,"keydown",this),this.on("destroy",function(){f.removeEvent(n,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=f.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(d.round(i.x),d.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?d.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=f.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=f.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&m(t)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t),this.options.zoom&&t.touches&&1<t.touches.length&&this._zoomStart(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":if(this.options.zoom&&t.touches&&t.touches[1])return void this._zoom(t);this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":if(this.scaled)return void this._zoomEnd(t);this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":if("zoom"==this.options.wheelAction)return void this._wheelZoom(t);this._wheel(t);break;case"keydown":this._key(t)}}},a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(f.removeEvent(this.indicator,"touchstart",this),f.removeEvent(this.indicator,f.prefixPointerEvent("pointerdown"),this),f.removeEvent(this.indicator,"mousedown",this),f.removeEvent(n,"touchmove",this),f.removeEvent(n,f.prefixPointerEvent("pointermove"),this),f.removeEvent(n,"mousemove",this),f.removeEvent(n,"touchend",this),f.removeEvent(n,f.prefixPointerEvent("pointerup"),this),f.removeEvent(n,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=f.getTime(),this.options.disableTouch||f.addEvent(n,"touchmove",this),this.options.disablePointer||f.addEvent(n,f.prefixPointerEvent("pointermove"),this),this.options.disableMouse||f.addEvent(n,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;f.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),f.removeEvent(n,"touchmove",this),f.removeEvent(n,f.prefixPointerEvent("pointermove"),this),f.removeEvent(n,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||d.max(d.max(d.min(d.abs(this.scroller.x-i.x),1e3),d.min(d.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=f.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&f.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;m(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[f.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(f.addClass(this.wrapper,"iScrollBothScrollbars"),f.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(f.removeClass(this.wrapper,"iScrollBothScrollbars"),f.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),f.getRect(this.wrapper),this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=d.max(d.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=d.max(d.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&d.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&d.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=d.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=d.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=d.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=d.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[f.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?d.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?d.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[f.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},t.utils=f,"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):n.IScroll=t,n.FLIPBOOK=n.FLIPBOOK||{},n.FLIPBOOK.IScroll=t,n.PointerEvent=void 0}(window,document,Math);