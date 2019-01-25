webpackJsonp([1],{"/5hJ":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),i=o("8+8L"),r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]},s=a;var l=!1;var c=o("VU/8")({name:"App"},s,!1,function(e){l||o("HnCy")},null,null);c.options.__file="src/_start/h5/App.vue";var d=c.exports,u=o("/ocq"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("视频会议系统")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],attrs:{type:"number",placeholder:"请输入房间号",required:""},domProps:{value:e.room},on:{input:function(t){t.target.composing||(e.room=t.target.value)}}}),e._v(" "),o("button",{staticClass:"join",on:{click:e.enterRoom}},[e._v("创建/加入房间")])])};m._withStripped=!0;var p={render:m,staticRenderFns:[]},v=p;var f=!1;var h=o("VU/8")({name:"index",data:function(){return{room:"123"}},methods:{enterRoom:function(){this.$router.push({name:"room",query:{room:this.room}})}}},v,!1,function(e){f||o("EIJB")},"data-v-47323bf2",null);h.options.__file="src/components/index.vue";var g=h.exports,w=o("mvHQ"),_=o.n(w),S=o("2dwv");function b(){var e=window.navigator.userAgent,t=void 0!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),o=-1!=e.indexOf("Firefox"),n=void 0!=window.opr,i=e.indexOf("Chrome")&&window.chrome,r=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return t?"IE":o?"Firefox":n?"Opera":i?"Chrome":r?"Safari":"Unkown"}function C(){x.enumDevices(function(e){console.log("enumDevices",e),k=e},function(e){console.error("enum device error: "+e)})}S.appid;var x,y,V,P,A,O,k,M,R,N=S._config,I=S._otherConfig,E=!1,F=!1,U=[],z=[];function $(){(x=new ZegoClient).setUserStateUpdate(!0),console.log(N),x.config(N),C(),function(){var e={onStreamUpdated:function(e,t){if(console.log("onStreamUpdated",e,t),0==e){for(var o=U.length,n=z.length,i=0,r=0,a=0;a<t.length;a++)console.info(t[a].stream_id+" was added"),"v"===t[a].stream_id.charAt(0)?(U.push(t[a]),J(t[a].stream_id,P[o+i]),i++):(z.push(t[a]),L(t[a].stream_id,A[n+r]),r++);R(o+i)}else if(1==e){for(var s=!1,l=0;l<U.length;l++)for(var c=0;c<t.length;c++)if(U[l].stream_id===t[c].stream_id){x.stopPlayingStream(U[l].stream_id),console.info(U[l].stream_id+" was devared"),U.splice(l,1),s=!0;break}s&&q();var d=!1;for(l=0;l<z.length;l++)for(c=0;c<t.length;c++)if(z[l].stream_id===t[c].stream_id){x.stopPlayingStream(z[l].stream_id),console.info(z[l].stream_id+" was devared"),z.splice(l,1),d=!0;break}d&&Z()}}};for(var t in e)x[t]=e[t]}()}function q(){for(var e=U.length,t=0;t<e;t++)x.stopPlayingStream(U[t].stream_id);for(var o=0;o<e;o++)J(U[o].stream_id,P[o]);R(e)}function Z(){for(var e=z.length,t=0;t<e;t++)x.stopPlayingStream(z[t].stream_id);for(var o=0;o<e;o++)L(z[o].stream_id,A[o])}function j(e){var t={audio:!0,audioInput:k.microphones[0].deviceId||null,video:!0,videoInput:k.cameras[0].deviceId||null,videoQuality:2,horizontal:!0,externalCapture:!1,externalMediaStream:null};t=n.a.util.extend(t,e),console.log("previewConfig",t),x.startPreview(y,t,function(){console.log("preview success"),M(),F=!0,x.startPublishingStream(N.idName,y),C()},function(e){alert(_()(e)),console.error("preview failed",e)})||alert("预览失败！")}function D(e){var t={audio:!0,audioInput:k.microphones[0].deviceId||null,video:!1,videoInput:k.cameras[0].deviceId||null,videoQuality:2,horizontal:!0,externalCapture:!1,externalMediaStream:null};t=n.a.util.extend(t,e),console.log("previewConfig",t),(V=document.getElementById("screenAudio")).muted=!0,x.startPreview(V,t,function(){console.log("preview audio success"),x.startPublishingStream(N.idAudioName,V)},function(e){alert(_()(e)),console.error("preview failed",e)})||alert("预览失败！")}function J(e,t){var o=x.startPlayingStream(e,t);t.addEventListener("error",function(e,t,o,n){console.log(e,t,o,n)}),t.muted=!1,o||(alert("哎呀，播放失败啦"),t.style="display:none")}function L(e,t){var o=x.startPlayingStream(e,t,null,{playType:"audio"});t.muted=!1,o||(alert("哎呀，播放失败啦"),t.style="display:none")}var T=function(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),o=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){o=!1;break}return o}()&&("Chrome"===b()||"Firefox"===b());console.log("sdk version is",ZegoClient.getCurrentVersion()),ZegoClient.isSupportWebrtc()?ZegoClient.isSupportH264(function(e){$(),e||alert("浏览器不支持视频h264编码，不能推拉音频流")},function(e){console.error(e)}):alert("浏览器不支持webrtc，换一个浏览器试试吧");var W={zg:x,openRoom:function(e,t,o,i,r,a,s){y=o,P=i,A=r,M=a,R=s,e?(O&&x.stopScreenShot(),n.a.http.get(I.token,{params:{app_id:N.appid,id_name:N.idName,cgi_token:I.cgi_token}}).then(function(o){console.log("gettoken success"),function(e,t,o){x.login(e,o,t,function(e){console.log("login success"),function(e,t){if(e.length>=20)return alert("房间太拥挤，换一个吧！"),void function(){console.info("leave room  and close stream"),F&&(x.stopPreview(y),x.stopPublishingStream(N.idName),F=!1);for(var e=0;e<U.length;e++)x.stopPlayingStream(U[e].stream_id);for(e=0;e<z.length;e++)x.stopPlayingStream(z[e].stream_id);U=[],z=[],x.logout()}();e.forEach(function(e){"v"===e.stream_id.charAt(0)?U.push(e):z.push(e)}),q(),Z(),console.log("login success"),E=!0,1===t&&j()}(e,o)},function(e){!function(e){alert("登录失败"),console.error(e)}(e)})}(e,o.data,t)})):alert("请输入房间号")},enableCamera:function(e){x.enableCamera(y,e)},enableMicrophone:function(e){x.enableMicrophone(y,e)},isSupportShareScreen:T,enableScreen:function(e){e?(E&&x.stopPublishingStream(N.idName),E&&x.stopPreview(y),"Firefox"===b()&&x.startScreenShotFirFox("window",!1,function(e,t){console.log("startScreenShot:"+e),O=e,y.srcObject=t,E&&(j({externalMediaStream:null,width:640,height:480,frameRate:15,bitRate:1e3}),D({audio:!1}))}),"Chrome"===b()&&x.startScreenShotChrome(function(e,t){console.log("startScreenShot:"+e),O=e,y.srcObject=t,E&&(j({externalCapture:!0,audio:!1}),D())})):(x.stopScreenShot(),x.stopPreview(y),x.stopPublishingStream(N.idName),j(),x.stopPreview(V),x.stopPublishingStream(N.idAudioName))}},B={name:"room",data:function(){return{previewVideo:!1,remoteVideo:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],lengthOfRemoteVideo:0,enableCamera:!0,enableMic:!0,enableScreen:!1}},mounted:function(){var e=this;W.openRoom(this.$route.query.room,1,document.getElementById("previewVideo"),document.querySelectorAll(".remoteVideo"),document.querySelectorAll(".remoteAudio"),function(){e.previewVideo=!0},function(t){e.lengthOfRemoteVideo=t;for(var o=0;o<e.remoteVideo.length;o++)e.remoteVideo.splice(o,1,o<t)})},methods:{toggleCamera:function(){this.enableCamera=!this.enableCamera,W.enableCamera(this.enableCamera)},toggleMic:function(){this.enableMic=!this.enableMic,W.enableMicrophone(this.enableMic)},toggleScreen:function(){W.isSupportShareScreen?(this.enableScreen=!this.enableScreen,W.enableScreen(this.enableScreen)):alert("屏幕分享功能只支持桌面系统的Chrome或者Firefox浏览器")}}},H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container flex"},[o("div",{staticClass:"room",class:e.lengthOfRemoteVideo<=3?"":"scroll"},[o("div",{staticClass:"video flex-center",class:e.previewVideo?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:e.previewVideo,expression:"previewVideo"}],attrs:{id:"previewVideo",muted:"",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!e.previewVideo,expression:"!previewVideo"}],attrs:{src:"static/roomset_1.png",alt:""}})]),e._v(" "),e._l(e.remoteVideo,function(t,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.lengthOfRemoteVideo<=3?n<3:n<e.lengthOfRemoteVideo,expression:"lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"}],staticClass:"video flex-center",class:t?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:t,expression:"r"}],staticClass:"remoteVideo",attrs:{autoplay:"",playsinline:"",controls:""}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t,expression:"!r"}],attrs:{src:"static/roomset_"+(n+2)+".png",alt:""}})])})],2),e._v(" "),o("div",{staticClass:"bottom"},[o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/camera"+(e.enableCamera?"-dis":"")+".png",alt:""},on:{click:e.toggleCamera}})]),e._v(" "),o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/mic"+(e.enableMic?"-dis":"")+".png",alt:""},on:{click:e.toggleMic}})]),e._v(" "),o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/screen"+(e.enableScreen?"-dis":"")+".png",alt:""},on:{click:e.toggleScreen}})]),e._v(" "),o("div",{staticClass:"none"},[o("audio",{attrs:{id:"screenAudio",autoplay:"",muted:"",playsinline:""}}),e._v(" "),e._l(e.remoteVideo,function(e){return o("audio",{staticClass:"remoteAudio",attrs:{autoplay:"",playsinline:""}})})],2)])])};H._withStripped=!0;var G={render:H,staticRenderFns:[]},Q=G;var X=!1;var K=o("VU/8")(B,Q,!1,function(e){X||o("vZf/")},"data-v-7030392a",null);K.options.__file="src/components/room.vue";var Y=K.exports,ee=function(){var e=this.$createElement;this._self._c;return this._m(0)};ee._withStripped=!0;var te={render:ee,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"template-view"},[t("button",{staticClass:".btn"},[this._v("Get Method")])])}]},oe=te;var ne=!1;var ie=o("VU/8")({name:"template",components:{},data:function(){return{show:!1}},methods:{}},oe,!1,function(e){ne||o("p+W8")},"data-v-2f56c616",null);ie.options.__file="src/pages/test.vue";var re=ie.exports;n.a.use(u.a);var ae=new u.a({routes:[{path:"/",name:"index",component:g},{path:"/room",name:"room",component:Y},{path:"/test",name:"test",component:re}]});o("MGcz");n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",router:ae,components:{App:d},template:"<App/>"})},0:function(e,t){},"2dwv":function(e,t,o){"use strict";e.exports={appid:3104114736,_config:{appid:3104114736,idName:"v"+(new Date).getTime(),idAudioName:"a"+(new Date).getTime(),nickName:"u"+(new Date).getTime(),server:"wss://wsliveroom3104114736-api.zego.im:8282/ws",logLevel:2,logUrl:"",remoteLogLevel:0,audienceCreateRoom:!0},_otherConfig:{cgi_token:"",roomlist:"",signal:"",token:"https://wsliveroom-demo.zego.im:8282/token"}}},EIJB:function(e,t){},HnCy:function(e,t){},MGcz:function(e,t){},"p+W8":function(e,t){},"vZf/":function(e,t){}},["/5hJ"]);
//# sourceMappingURL=app.baeff4008b74c086ae35.js.map