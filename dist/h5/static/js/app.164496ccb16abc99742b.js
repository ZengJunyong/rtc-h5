webpackJsonp([1],{"/5hJ":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),i=o("8+8L"),r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]},s=a;var c=!1;var l=o("VU/8")({name:"App"},s,!1,function(e){c||o("HnCy")},null,null);l.options.__file="src/_start/h5/App.vue";var d=l.exports,m=o("/ocq"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("视频会议系统")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],attrs:{type:"number",placeholder:"请输入房间号",required:""},domProps:{value:e.room},on:{input:function(t){t.target.composing||(e.room=t.target.value)}}}),e._v(" "),o("button",{staticClass:"join",on:{click:e.enterRoom}},[e._v("创建/加入房间")])])};u._withStripped=!0;var v={render:u,staticRenderFns:[]},p=v;var f=!1;var h=o("VU/8")({name:"index",data:function(){return{room:"123"}},methods:{enterRoom:function(){this.$router.push({name:"room",query:{room:this.room}})}}},p,!1,function(e){f||o("EIJB")},"data-v-47323bf2",null);h.options.__file="src/components/index.vue";var g=h.exports,w=o("mvHQ"),_=o.n(w);function S(){var e=window.navigator.userAgent,t=void 0!=window.ActiveXObject&&-1!=e.indexOf("MSIE"),o=-1!=e.indexOf("Firefox"),n=void 0!=window.opr,i=e.indexOf("Chrome")&&window.chrome,r=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return t?"IE":o?"Firefox":n?"Opera":i?"Chrome":r?"Safari":"Unkown"}function b(){C.enumDevices(function(e){console.log("enumDevices",e),O=e},function(e){console.error("enum device error: "+e)})}var C,x,V,y,O,P,R,k={appid:3104114736,idName:(new Date).getTime()+"",nickName:"u"+(new Date).getTime(),server:"wss://wsliveroom3104114736-api.zego.im:8282/ws",logLevel:2,logUrl:"",remoteLogLevel:0,audienceCreateRoom:!0},M={cgi_token:"",roomlist:"",signal:"",token:"https://wsliveroom-demo.zego.im:8282/token"},N=!1,A=!1,E=[];function U(){(C=new ZegoClient).setUserStateUpdate(!0),console.log(k),C.config(k),b(),function(){var e={onStreamUpdated:function(e,t){if(console.log("onStreamUpdated",e,t),0==e){for(var o=E.length,n=0;n<t.length;n++)console.info(t[n].stream_id+" was added"),E.push(t[n]),$(t[n].stream_id,V[o+n]);R(o+t.length)}else if(1==e){for(var i=0;i<E.length;i++)for(var r=0;r<t.length;r++)if(E[i].stream_id===t[r].stream_id){C.stopPlayingStream(E[i].stream_id),console.info(E[i].stream_id+" was devared"),E.splice(i,1);break}F()}}};for(var t in e)C[t]=e[t]}()}function F(){for(var e=E.length,t=0;t<e;t++)C.stopPlayingStream(E[t].stream_id);for(var o=0;o<e;o++)$(E[o].stream_id,V[o]);R(e)}function I(e){var t={audio:!0,audioInput:O.microphones[0].deviceId||null,video:!0,videoInput:O.cameras[0].deviceId||null,videoQuality:2,horizontal:!0,externalCapture:!1,externalMediaStream:null};t=n.a.util.extend(t,e),console.log("previewConfig",t),C.startPreview(x,t,function(){console.log("preview success"),P(),A=!0,C.startPublishingStream(k.idName,x),b()},function(e){alert(_()(e)),console.error("preview failed",e)})||alert("预览失败！")}function $(e,t){var o=C.startPlayingStream(e,t);t.muted=!1,o||(alert("哎呀，播放失败啦"),t.style="display:none")}console.log("sdk version is",ZegoClient.getCurrentVersion()),ZegoClient.isSupportWebrtc()?ZegoClient.isSupportH264(function(e){U(),e||alert("浏览器不支持视频h264编码，不能推拉音频流")},function(e){console.error(e)}):alert("浏览器不支持webrtc，换一个浏览器试试吧");var z={zg:C,init:U,openRoom:function(e,t,o,i,r,a){x=o,V=i,P=r,R=a,e?(y&&C.stopScreenShot(),n.a.http.get(M.token,{params:{app_id:k.appid,id_name:k.idName,cgi_token:M.cgi_token}}).then(function(o){console.log("gettoken success"),function(e,t,o){C.login(e,o,t,function(e){console.log("login success"),function(e,t){if(e.length>=20)return alert("房间太拥挤，换一个吧！"),void function(){console.info("leave room  and close stream"),A&&(C.stopPreview(x),C.stopPublishingStream(k.idName),A=!1);for(var e=0;e<E.length;e++)C.stopPlayingStream(E[e].stream_id);E=[],C.logout()}();E=e,F(),console.log("login success"),N=!0,1===t&&I()}(e,o)},function(e){!function(e){alert("登录失败"),console.error(e)}(e)})}(e,o.data,t)})):alert("请输入房间号")},enableCamera:function(e){C.enableCamera(x,e)},enableMicrophone:function(e){C.enableMicrophone(x,e)},enableScreen:function(e){if(function(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),o=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){o=!1;break}return o}())if(e){N&&C.stopPublishingStream(k.idName),N&&C.stopPreview(x);var t={externalMediaStream:null,width:640,height:480,frameRate:15,bitRate:1e3};"Firefox"===S()&&C.startScreenShotFirFox("window",!1,function(e,o){console.log("startScreenShot:"+e),y=e,x.srcObject=o,N&&I(t)}),"Chrome"===S()&&C.startScreenShotChrome(function(e,t){console.log("startScreenShot:"+e),y=e,x.srcObject=t,N&&I({externalCapture:!0})})}else C.stopScreenShot(),C.stopPreview(x),C.stopPublishingStream(k.idName),I()}},Z={name:"room",data:function(){return{previewVideo:!1,remoteVideo:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],lengthOfRemoteVideo:0,enableCamera:!0,enableMic:!0,enableScreen:!1}},mounted:function(){var e=this;z.openRoom(this.$route.query.room,1,document.getElementById("previewVideo"),document.querySelectorAll(".remoteVideo"),function(){e.previewVideo=!0},function(t){e.lengthOfRemoteVideo=t;for(var o=0;o<e.remoteVideo.length;o++)e.remoteVideo.splice(o,1,o<t)})},methods:{toggleCamera:function(){this.enableCamera=!this.enableCamera,z.enableCamera(this.enableCamera)},toggleMic:function(){this.enableMic=!this.enableMic,z.enableMicrophone(this.enableMic)},toggleScreen:function(){this.enableScreen=!this.enableScreen,z.enableScreen(this.enableScreen)}}},j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container flex"},[o("div",{staticClass:"room",class:e.lengthOfRemoteVideo<=3?"":"scroll"},[o("div",{staticClass:"video flex-center",class:e.previewVideo?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:e.previewVideo,expression:"previewVideo"}],attrs:{id:"previewVideo",muted:"",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!e.previewVideo,expression:"!previewVideo"}],attrs:{src:"static/roomset_1.png",alt:""}})]),e._v(" "),e._l(e.remoteVideo,function(t,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.lengthOfRemoteVideo<=3?n<3:n<e.lengthOfRemoteVideo,expression:"lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"}],staticClass:"video flex-center",class:t?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:t,expression:"r"}],staticClass:"remoteVideo",attrs:{autoplay:"",playsinline:"",controls:""}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t,expression:"!r"}],attrs:{src:"static/roomset_"+(n+2)+".png",alt:""}})])})],2),e._v(" "),o("div",{staticClass:"bottom"},[o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/camera"+(e.enableCamera?"":"-dis")+".png",alt:""},on:{click:e.toggleCamera}})]),e._v(" "),o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/mic"+(e.enableMic?"":"-dis")+".png",alt:""},on:{click:e.toggleMic}})]),e._v(" "),o("div",{staticClass:"flex-center"},[o("img",{attrs:{src:"static/screen"+(e.enableScreen?"":"-dis")+".png",alt:""},on:{click:e.toggleScreen}})])])])};j._withStripped=!0;var q={render:j,staticRenderFns:[]},J=q;var W=!1;var D=o("VU/8")(Z,J,!1,function(e){W||o("vZf/")},"data-v-7030392a",null);D.options.__file="src/components/room.vue";var H=D.exports,L=function(){var e=this.$createElement;this._self._c;return this._m(0)};L._withStripped=!0;var B={render:L,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"template-view"},[t("button",{staticClass:".btn"},[this._v("Get Method")])])}]},G=B;var T=!1;var Q=o("VU/8")({name:"template",components:{},data:function(){return{show:!1}},methods:{}},G,!1,function(e){T||o("p+W8")},"data-v-2f56c616",null);Q.options.__file="src/pages/test.vue";var X=Q.exports;n.a.use(m.a);var K=new m.a({routes:[{path:"/",name:"index",component:g},{path:"/room",name:"room",component:H},{path:"/test",name:"test",component:X}]});o("MGcz");n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",router:K,components:{App:d},template:"<App/>"})},0:function(e,t){},EIJB:function(e,t){},HnCy:function(e,t){},MGcz:function(e,t){},"p+W8":function(e,t){},"vZf/":function(e,t){}},["/5hJ"]);
//# sourceMappingURL=app.164496ccb16abc99742b.js.map