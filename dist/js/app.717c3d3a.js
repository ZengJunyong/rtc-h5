(function(e){function o(o){for(var n,a,s=o[0],c=o[1],l=o[2],u=0,m=[];u<s.length;u++)a=s[u],i[a]&&m.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(o);while(m.length)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,o=0;o<r.length;o++){for(var t=r[o],n=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(n=!1)}n&&(r.splice(o--,1),e=a(a.s=t[0]))}return e}var n={},i={app:0},r=[];function a(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)a.d(t,n,function(o){return e[o]}.bind(null,n));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var d=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var n=t("64a9"),i=t.n(n);i.a},1:function(e,o){},"227d":function(e,o,t){},"2b33":function(e,o,t){"use strict";var n=3104114736;e.exports={appid:n,_config:{appid:n,idName:"v"+(new Date).getTime(),idAudioName:"a"+(new Date).getTime(),nickName:"u"+(new Date).getTime(),server:"wss://wsliveroom"+n+"-api.zego.im:8282/ws",logLevel:2,logUrl:"",remoteLogLevel:0,audienceCreateRoom:!0},_otherConfig:{cgi_token:"",roomlist:"",signal:"",token:"https://wsliveroom-demo.zego.im:8282/token"}}},"56d7":function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c"),t("097d");var n=t("2b0e"),i=t("28dd"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s={name:"App"},c=s,l=(t("034f"),t("2877")),d=Object(l["a"])(c,r,a,!1,null,null,null),u=d.exports,m=t("8c4f"),f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"flex"},[t("div",[t("div",[t("h2",[e._v("加入一场会议")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],attrs:{type:"number",placeholder:"会议编号",required:""},domProps:{value:e.room},on:{input:function(o){o.target.composing||(e.room=o.target.value)}}}),t("p",{class:e.validate?"":"error"},[e._v("会议编号是6位数字")]),t("button",{on:{click:e.joinRoom}},[e._v("加入")])])]),t("div",[t("div",[t("h2",[e._v("发起一场会议")]),t("div",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.video,expression:"video"}],attrs:{type:"radio",id:"open",value:"1"},domProps:{checked:e._q(e.video,"1")},on:{change:function(o){e.video="1"}}}),t("label",{attrs:{for:"open"}},[e._v("视频开启")])]),t("div",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.video,expression:"video"}],attrs:{type:"radio",id:"close",value:"0"},domProps:{checked:e._q(e.video,"0")},on:{change:function(o){e.video="0"}}}),t("label",{attrs:{for:"close"}},[e._v("视频关闭")])]),t("button",{on:{click:e.createRoom}},[e._v("发起")])])])])])},v=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"flex-center logo"},[t("img",{attrs:{src:"static/logo.png",alt:""}})])}],p={name:"index",data:function(){return{room:"",video:1,validate:!0}},computed:{isSafariOnIphone:function(){var e=window.navigator.userAgent;return-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version")&&-1!=e.indexOf("iPhone")}},methods:{joinRoom:function(){var e=/^^[1-9]\d{5}$$/;e.test(this.room)?this.$router.push({name:"room",query:{room:this.room},params:{isSafariOnIphone:this.isSafariOnIphone}}):this.validate=!1},createRoom:function(){var e,o=!0;while(o)e=Math.floor(1e6*Math.random()),e>1e5&&(o=!1);this.$router.push({name:"room",query:{room:e,video:this.video},params:{isSafariOnIphone:this.isSafariOnIphone}})}}},g=p,h=(t("6b99"),Object(l["a"])(g,f,v,!1,null,"8f73abfc",null)),w=h.exports,b=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container flex"},[t("div",{staticClass:"room",class:e.lengthOfRemoteVideo<=3?"":"scroll"},[t("div",{staticClass:"video flex-center",class:e.previewVideo?"":"opacity55"},[t("video",{directives:[{name:"show",rawName:"v-show",value:e.previewVideo,expression:"previewVideo"}],attrs:{id:"previewVideo",muted:"",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}}),t("img",{directives:[{name:"show",rawName:"v-show",value:!e.previewVideo,expression:"!previewVideo"}],attrs:{src:"static/roomset_1.png",alt:""}})]),e._l(e.remoteVideo,function(o,n){return t("div",{directives:[{name:"show",rawName:"v-show",value:n<e.lengthOfRemoteVideo,expression:"i<lengthOfRemoteVideo"}],key:n,staticClass:"video flex-center",class:o?"":"opacity55"},[t("video",{directives:[{name:"show",rawName:"v-show",value:o,expression:"r"}],staticClass:"remoteVideo",attrs:{autoplay:"",playsinline:"",controls:""}}),t("img",{directives:[{name:"show",rawName:"v-show",value:!o,expression:"!r"}],attrs:{src:"static/roomset_"+(n+2)+".png",alt:""}})])})],2),t("div",{staticClass:"bottom"},[t("div",[t("div",{on:{click:e.toggleCamera}},[t("img",{attrs:{src:"static/camera.png",alt:""}}),t("div",{staticClass:"circle"},[t("i",{class:e.enableCamera?"green":"red"}),e._v("\n                    "+e._s(e.enableCamera?"关闭视频":"开启视频")+"\n                ")])]),t("div",{on:{click:e.toggleMic}},[t("img",{attrs:{src:"static/mic.png",alt:""}}),t("div",{staticClass:"circle"},[t("i",{class:e.enableMic?"green":"red"}),e._v("\n                    "+e._s(e.enableMic?"关闭声音":"开启声音")+"\n                ")])]),e.isSupportShareScreen?t("div",{on:{click:e.toggleScreen}},[t("img",{attrs:{src:"static/screen"+(e.enableScreen?"-dis":"")+".png",alt:""}}),e._v("\n                "+e._s(e.enableScreen?"关闭分享":"屏幕分享")+"\n            ")]):e._e()]),t("div",[t("div",{on:{click:e.copyToClipboard}},[t("img",{attrs:{src:"static/link.png",alt:""}}),e._v("\n                复制链接\n            ")]),e._m(0),t("div",{staticClass:"red",on:{click:function(o){e.endMeeting()}}},[t("img",{attrs:{src:"static/end-meeting.png",alt:""}}),e._v("\n                结束会议\n            ")]),t("div",[t("span",{staticClass:"flex-center"},[e._v(e._s(e.room))]),e._v("\n                会议编号\n            ")])]),t("div",{staticClass:"none"},[t("audio",{attrs:{id:"screenAudio",autoplay:"",muted:"",playsinline:""}}),e._l(e.remoteVideo,function(e,o){return t("audio",{key:o,staticClass:"remoteAudio",attrs:{autoplay:"",playsinline:""}})})],2)])])},S=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("img",{attrs:{src:"static/invite.png",alt:""}}),e._v("\n                邀请朋友\n            ")])}],_=t("f499"),y=t.n(_),C=(t("ac6a"),t("2b33"));function x(){var e=window.navigator.userAgent,o=void 0!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),t=-1!=e.indexOf("Firefox"),n=void 0!=window.opr,i=e.indexOf("Chrome")&&window.chrome,r=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return o?"IE":t?"Firefox":n?"Opera":i?"Chrome":r?"Safari":"Unkown"}function O(){for(var e=navigator.userAgent,o=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,n=0;n<o.length;n++)if(e.indexOf(o[n])>0){t=!1;break}return t}function P(){k.enumDevices(function(e){console.log("enumDevices",e),I=e},function(e){console.error("enum device error: "+e)})}var k,M,V,A,N,j,I,R,$,E=C._config,q=C._otherConfig,T=!1,F=!1,U=[],z=[];function D(){console.info("leave room  and close stream"),F&&(k.stopPreview(M),k.stopPublishingStream(E.idName),F=!1);for(var e=0;e<U.length;e++)k.stopPlayingStream(U[e].stream_id);for(var o=0;o<z.length;o++)k.stopPlayingStream(z[o].stream_id);U=[],z=[],k.logout()}function Z(){var e={onStreamUpdated:function(e,o){if(console.log("onStreamUpdated",e,o),0==e){for(var t=U.length,n=z.length,i=0,r=0,a=0;a<o.length;a++)console.info(o[a].stream_id+" was added"),"v"===o[a].stream_id.charAt(0)?(U.push(o[a]),oe(o[a].stream_id,A[t+i]),i++):(z.push(o[a]),te(o[a].stream_id,N[n+r]),r++);$(t+i)}else if(1==e){for(var s=!1,c=0;c<U.length;c++)for(var l=0;l<o.length;l++)if(U[c].stream_id===o[l].stream_id){k.stopPlayingStream(U[c].stream_id),console.info(U[c].stream_id+" was devared"),U.splice(c,1),s=!0;break}s&&W();for(var d=!1,u=0;u<z.length;u++)for(var m=0;m<o.length;m++)if(z[u].stream_id===o[m].stream_id){k.stopPlayingStream(z[u].stream_id),console.info(z[u].stream_id+" was devared"),z.splice(u,1),d=!0;break}d&&H()}}};for(var o in e)k[o]=e[o]}function B(){k=new window.ZegoClient,k.setUserStateUpdate(!0),console.log(E),k.config(E),P(),Z()}function L(e,o,t,i,r,a,s){M=t,A=i,N=r,R=a,$=s,e?(j&&k.stopScreenShot(),n["a"].http.get(q.token,{params:{app_id:E.appid,id_name:E.idName,cgi_token:q.cgi_token}}).then(function(t){console.log("gettoken success"),J(e,t.data,o)})):alert("请输入房间号")}function J(e,o,t){k.login(e,t,o,function(e){console.log("login success"),X(e,t)},function(e){Q(e)})}function Q(e){alert("登录失败"),console.error(e)}function W(){for(var e=U.length,o=0;o<e;o++)k.stopPlayingStream(U[o].stream_id);for(var t=0;t<e;t++)oe(U[t].stream_id,A[t]);$(e)}function H(){for(var e=z.length,o=0;o<e;o++)k.stopPlayingStream(z[o].stream_id);for(var t=0;t<e;t++)te(z[t].stream_id,N[t])}function X(e,o){var t=20;if(e.length>=t)return alert("房间太拥挤，换一个吧！"),void D();e.forEach(function(e){"v"===e.stream_id.charAt(0)?U.push(e):z.push(e)}),W(),H(),console.log("login success"),T=!0,1===o&&G()}function G(e){var o=2,t={audio:!0,audioInput:I.microphones[0].deviceId||null,video:!0,facingMode:"user",videoQuality:1*o,horizontal:!0,externalCapture:!1,externalMediaStream:null};t=n["a"].util.extend(t,e),console.log("previewConfig",t);var i=k.startPreview(M,t,function(){console.log("preview success"),R(),F=!0,Y(),P()},function(e){alert(y()(e)),console.error("preview failed",e)});i||alert("预览失败！")}function K(e){var o=2,t={audio:!0,audioInput:I.microphones[0].deviceId||null,video:!1,videoInput:I.cameras[0].deviceId||null,videoQuality:1*o,horizontal:!0,externalCapture:!1,externalMediaStream:null};t=n["a"].util.extend(t,e),console.log("previewConfig",t),V=document.getElementById("screenAudio"),V.muted=!0;var i=k.startPreview(V,t,function(){console.log("preview audio success"),ee()},function(e){alert(y()(e)),console.error("preview failed",e)});i||alert("预览失败！")}function Y(){k.startPublishingStream(E.idName,M)}function ee(){k.startPublishingStream(E.idAudioName,V)}function oe(e,o){var t=k.startPlayingStream(e,o);o.muted=!1,t||(alert("哎呀，播放失败啦"),o.style="display:none")}function te(e,o){var t=k.startPlayingStream(e,o,null,{playType:"audio"});o.muted=!1,t||(alert("哎呀，播放失败啦"),o.style="display:none")}function ne(e){k.enableCamera(M,e)}function ie(e){k.enableMicrophone(M,e)}var re=O()&&("Chrome"===x()||"Firefox"===x());function ae(e){e?(T&&k.stopPublishingStream(E.idName),T&&k.stopPreview(M),"Firefox"===x()&&k.startScreenShotFirFox("window",!1,function(e,o){console.log("startScreenShot:"+e),j=e,M.srcObject=o,T&&(G({externalMediaStream:null,width:640,height:480,frameRate:15,bitRate:1e3}),K({audio:!1}))}),"Chrome"===x()&&k.startScreenShotChrome(function(e,o){console.log("startScreenShot:"+e),j=e,M.srcObject=o,T&&(G({externalCapture:!0,audio:!1}),K())})):(k.stopScreenShot(),k.stopPreview(M),k.stopPublishingStream(E.idName),G(),k.stopPreview(V),k.stopPublishingStream(E.idAudioName))}console.log("sdk version is",window.ZegoClient.getCurrentVersion()),window.ZegoClient.isSupportWebrtc()?window.ZegoClient.isSupportH264(function(e){B(),e||alert("浏览器不支持视频h264编码，不能推拉音频流")},function(e){console.error(e)}):alert("浏览器不支持webrtc，换一个浏览器试试吧");var se={zg:k,openRoom:L,enableCamera:ne,enableMicrophone:ie,isSupportShareScreen:re,enableScreen:ae,leaveRoom:D},ce={name:"room",data:function(){return{previewVideo:!1,remoteVideo:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],lengthOfRemoteVideo:0,enableCamera:!0,enableMic:!0,enableScreen:!1}},beforeCreate:function(){this.$route.params.isSafariOnIphone&&location.reload(!0)},mounted:function(){var e=this;se.openRoom(this.room,1,document.getElementById("previewVideo"),document.querySelectorAll(".remoteVideo"),document.querySelectorAll(".remoteAudio"),function(){e.previewVideo=!0,"0"===e.$route.query.video&&e.toggleCamera()},function(o){e.lengthOfRemoteVideo=o;for(var t=0;t<e.remoteVideo.length;t++)e.remoteVideo.splice(t,1,t<o)})},computed:{room:function(){return this.$route.query.room+""},isSupportShareScreen:function(){return se.isSupportShareScreen}},methods:{toggleCamera:function(){this.enableCamera=!this.enableCamera,se.enableCamera(this.enableCamera)},toggleMic:function(){this.enableMic=!this.enableMic,se.enableMicrophone(this.enableMic)},toggleScreen:function(){this.enableScreen=!this.enableScreen,se.enableScreen(this.enableScreen)},copyToClipboard:function(){var e="您好，快来加入视频会议吧，我在这儿等你："+location.origin+"#/room?room="+this.room,o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),alert("会议的链接已经复制到剪贴板，请通过邮件，微信等发送给他人即可加入该会议。")},endMeeting:function(){se.leaveRoom(),this.$router.push({name:"index"})}}},le=ce,de=(t("aa63"),Object(l["a"])(le,b,S,!1,null,"21a13c80",null)),ue=de.exports;n["a"].use(m["a"]);var me=new m["a"]({mode:"hash",base:"",routes:[{path:"/",name:"index",component:w},{path:"/room",name:"room",component:ue}]}),fe=t("9483");Object(fe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("e008");n["a"].config.productionTip=!1,n["a"].use(i["a"]),new n["a"]({router:me,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,o,t){},"6b99":function(e,o,t){"use strict";var n=t("227d"),i=t.n(n);i.a},a4f4:function(e,o,t){},aa63:function(e,o,t){"use strict";var n=t("a4f4"),i=t.n(n);i.a},e008:function(e,o,t){}});
//# sourceMappingURL=app.717c3d3a.js.map