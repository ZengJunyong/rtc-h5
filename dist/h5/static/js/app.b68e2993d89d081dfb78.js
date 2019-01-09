webpackJsonp([1],{"/5hJ":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),i=o("8+8L"),r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]},s=a;var l=!1;var c=o("VU/8")({name:"App"},s,!1,function(e){l||o("HnCy")},null,null);c.options.__file="src/_start/h5/App.vue";var m=c.exports,d=o("/ocq"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("视频会议系统")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],attrs:{type:"number",placeholder:"请输入房间号",required:""},domProps:{value:e.room},on:{input:function(t){t.target.composing||(e.room=t.target.value)}}}),e._v(" "),o("button",{staticClass:"join",on:{click:e.enterRoom}},[e._v("创建/加入房间")])])};u._withStripped=!0;var v={render:u,staticRenderFns:[]},p=v;var f=!1;var g=o("VU/8")({name:"index",data:function(){return{room:"123"}},methods:{enterRoom:function(){this.$router.push({name:"room",query:{room:this.room}})}}},p,!1,function(e){f||o("EIJB")},"data-v-47323bf2",null);g.options.__file="src/components/index.vue";var h=g.exports,_=o("mvHQ"),w=o.n(_),C=o("EKMJ");function b(){V.enumDevices(function(e){console.log("enumDevices",e),M=e},function(e){console.error("enum device error: "+e)})}var V,y,x,S,M,R,k,N={appid:3104114736,idName:(new Date).getTime()+"",nickName:"u"+(new Date).getTime(),server:"wss://wsliveroom3104114736-api.zego.im:8282/ws",logLevel:2,logUrl:"",remoteLogLevel:0,audienceCreateRoom:!0},P={cgi_token:"",roomlist:"",signal:"",token:"https://wsliveroom-demo.zego.im:8282/token"},E=!1,U=[];function O(){(V=new C.ZegoClient).setUserStateUpdate(!0),V.config(N),b(),function(){var e={onStreamUpdated:function(e,t){if(console.log("onStreamUpdated",e,t),0==e){for(var o=U.length,n=0;n<t.length;n++)console.info(t[n].stream_id+" was added"),U.push(t[n]),$(t[n].stream_id,x[o+n]);k(o+t.length)}else if(1==e){for(var i=0;i<U.length;i++)for(var r=0;r<t.length;r++)if(U[i].stream_id===t[r].stream_id){V.stopPlayingStream(U[i].stream_id),console.info(U[i].stream_id+" was devared"),U.splice(i,1);break}I()}}};for(var t in e)V[t]=e[t]}()}function I(){for(var e=U.length,t=0;t<e;t++)V.stopPlayingStream(U[t].stream_id);for(var o=0;o<e;o++)$(U[o].stream_id,x[o]);k(e)}function $(e,t){var o=V.startPlayingStream(e,t);t.muted=!1,o||(alert("哎呀，播放失败啦"),t.style="display:none")}console.log("sdk version is",C.ZegoClient.getCurrentVersion()),C.ZegoClient.isSupportWebrtc()?C.ZegoClient.isSupportH264(function(e){O(),e||alert("浏览器不支持视频h264编码，不能推拉音频流")},function(e){console.error(e)}):alert("浏览器不支持webrtc，换一个浏览器试试吧");var z={zg:V,init:O,openRoom:function(e,t,o,i,r,a){y=o,x=i,R=r,k=a,e?(S&&V.stopScreenShot(),n.a.http.get(P.token,{params:{app_id:N.appid,id_name:N.idName,cgi_token:P.cgi_token}}).then(function(o){console.log("gettoken success"),function(e,t,o){V.login(e,o,t,function(e){console.log("login success"),function(e,t){if(e.length>=20)return alert("房间太拥挤，换一个吧！"),void function(){console.info("leave room  and close stream"),E&&(V.stopPreview(y),V.stopPublishingStream(N.idName),E=!1);for(var e=0;e<U.length;e++)V.stopPlayingStream(U[e].stream_id);U=[],V.logout()}();var o,i;U=e,I(),console.log("login success"),!0,1===t&&(i={audio:!0,audioInput:M.microphones[0].deviceId||null,video:!0,videoInput:M.cameras[0].deviceId||null,videoQuality:2,horizontal:!0,externalCapture:!1,externalMediaStream:null},i=n.a.util.extend(i,o),console.log("previewConfig",i),V.startPreview(y,i,function(){console.log("preview success"),R(),E=!0,V.startPublishingStream(N.idName,y),b()},function(e){alert(w()(e)),console.error("preview failed",e)})||alert("预览失败！"))}(e,o)},function(e){!function(e){alert("登录失败"),console.error(e)}(e)})}(e,o.data,t)})):alert("请输入房间号")},enableCamera:function(e){V.enableCamera(y,e)},enableMicrophone:function(e){V.enableMicrophone(y,e)}},J={name:"room",data:function(){return{previewVideo:!1,remoteVideo:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],lengthOfRemoteVideo:0,enableCamera:!0,enableMic:!0}},mounted:function(){var e=this;z.init(),z.openRoom(this.$route.query.room,1,document.getElementById("previewVideo"),document.querySelectorAll(".remoteVideo"),function(){e.previewVideo=!0},function(t){e.lengthOfRemoteVideo=t;for(var o=0;o<e.remoteVideo.length;o++)e.remoteVideo.splice(o,1,o<t)})},methods:{toggleCamera:function(){this.enableCamera=!this.enableCamera,z.enableCamera(this.enableCamera)},toggleMic:function(){this.enableMic=!this.enableMic,z.enableMicrophone(this.enableMic)}}},Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container flex"},[o("div",{staticClass:"room",class:e.lengthOfRemoteVideo<=3?"":"scroll"},[o("div",{staticClass:"video flex-center",class:e.previewVideo?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:e.previewVideo,expression:"previewVideo"}],attrs:{id:"previewVideo",muted:"",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!e.previewVideo,expression:"!previewVideo"}],attrs:{src:"static/roomset_1.png",alt:""}})]),e._v(" "),e._l(e.remoteVideo,function(t,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.lengthOfRemoteVideo<=3?n<3:n<e.lengthOfRemoteVideo,expression:"lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"}],staticClass:"video flex-center",class:t?"":"opacity55"},[o("video",{directives:[{name:"show",rawName:"v-show",value:t,expression:"r"}],staticClass:"remoteVideo",attrs:{autoplay:"",playsinline:"",controls:""}}),e._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t,expression:"!r"}],attrs:{src:"static/roomset_"+(n+2)+".png",alt:""}})])})],2),e._v(" "),o("div",{staticClass:"bottom"},[o("img",{attrs:{src:"static/camera"+(e.enableCamera?"":"-dis")+".png",alt:""},on:{click:e.toggleCamera}}),e._v(" "),o("img",{attrs:{src:"static/mic"+(e.enableMic?"":"-dis")+".png",alt:""},on:{click:e.toggleMic}})])])};Z._withStripped=!0;var q={render:Z,staticRenderFns:[]},A=q;var D=!1;var F=o("VU/8")(J,A,!1,function(e){D||o("vZf/")},"data-v-7030392a",null);F.options.__file="src/components/room.vue";var H=F.exports,L=function(){var e=this.$createElement;this._self._c;return this._m(0)};L._withStripped=!0;var W={render:L,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"template-view"},[t("button",{staticClass:".btn"},[this._v("Get Method")])])}]},B=W;var G=!1;var T=o("VU/8")({name:"template",components:{},data:function(){return{show:!1}},methods:{}},B,!1,function(e){G||o("p+W8")},"data-v-2f56c616",null);T.options.__file="src/pages/test.vue";var j=T.exports;n.a.use(d.a);var Q=new d.a({routes:[{path:"/",name:"index",component:h},{path:"/room",name:"room",component:H},{path:"/test",name:"test",component:j}]});o("MGcz");n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",router:Q,components:{App:m},template:"<App/>"})},0:function(e,t){},EIJB:function(e,t){},HnCy:function(e,t){},MGcz:function(e,t){},"p+W8":function(e,t){},"vZf/":function(e,t){}},["/5hJ"]);
//# sourceMappingURL=app.b68e2993d89d081dfb78.js.map