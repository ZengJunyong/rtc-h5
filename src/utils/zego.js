import { ZegoClient } from "webrtc-zego";
import Vue from "vue";

function getBrowser() {
  var ua = window.navigator.userAgent;
  var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
  var isFirefox = ua.indexOf("Firefox") != -1;
  var isOpera = window.opr != undefined;
  var isChrome = ua.indexOf("Chrome") && window.chrome;
  var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
  if (isIE) {
    return "IE";
  } else if (isFirefox) {
    return "Firefox";
  } else if (isOpera) {
    return "Opera";
  } else if (isChrome) {
    return "Chrome";
  } else if (isSafari) {
    return "Safari";
  } else {
    return "Unkown";
  }
}


function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function enumDevices() {
  var audioInputList = [], videoInputList = [];
  zg.enumDevices(deviceInfo => {
    console.log("enumDevices", deviceInfo);
    device = deviceInfo;
  }, function(error) {
    console.error("enum device error: " + error);
  });
}

var zg,
  appid = 3104114736,
  _config = {
    appid: appid * 1,
    idName: new Date().getTime() + "",
    nickName: "u" + new Date().getTime(),
    server: "wss://wsliveroom" + appid + "-api.zego.im:8282/ws",//"wss://wsliveroom-alpha.zego.im:8282/ws",
    logLevel: 2,
    logUrl: "",
    remoteLogLevel: 0,
    audienceCreateRoom: true
  },
  _otherConfig = {
    cgi_token: "",
    roomlist: "",
    signal: "",
    token: "https://wsliveroom-demo.zego.im:8282/token"//"https://wsliveroom"+appid+"-api.zego.im:8282/token",
  },
  loginRoom = false,
  previewVideo,
  remoteVideos,
  screenCaptrue,
  isPreviewed = false,
  useLocalStreamList = [];
var anchor_userid = "", anchro_username = "";
var device;
var openRoomCallBack, onStreamUpdatedCallBack;

function leaveRoom() {
  console.info("leave room  and close stream");

  if (isPreviewed) {
    zg.stopPreview(previewVideo);
    zg.stopPublishingStream(_config.idName);
    isPreviewed = false;
  }

  for (var i = 0; i < useLocalStreamList.length; i++) {
    zg.stopPlayingStream(useLocalStreamList[i].stream_id);
  }

  useLocalStreamList = [];
  zg.logout();
}

function listen() {
  var _config = {
    onStreamUpdated: function(type, streamList) {
      console.log("onStreamUpdated", type, streamList);
      if (type == 0) {
        let len = useLocalStreamList.length;
        for (let i = 0; i < streamList.length; i++) {
          console.info(streamList[i].stream_id + " was added");
          useLocalStreamList.push(streamList[i]);
          play(streamList[i].stream_id, remoteVideos[len + i]);
        }
        onStreamUpdatedCallBack(len + streamList.length);
      } else if (type == 1) {
        for (var k = 0; k < useLocalStreamList.length; k++) {
          for (var j = 0; j < streamList.length; j++) {
            if (useLocalStreamList[k].stream_id === streamList[j].stream_id) {
              zg.stopPlayingStream(useLocalStreamList[k].stream_id);
              console.info(useLocalStreamList[k].stream_id + " was devared");
              useLocalStreamList.splice(k, 1);
              break;
            }
          }
        }
        renderRemoteVideos();
      }
    }
  };

  for (var key in _config) {
    zg[key] = _config[key];
  }
}

function init() {

  zg = new ZegoClient();
  zg.setUserStateUpdate(true);//重要  启动用户变化监听

  zg.config(_config);
  enumDevices();

  listen();
}

/*
    roomId, type 请参考 zepo 的文档
    video 表示将视频渲染到本地的DOM
    callback 通知 vue ，zg 这边完成了
 */
function openRoom(roomId, type, video, rVideos, callback1, callback2) {

  previewVideo = video;
  remoteVideos = rVideos;
  openRoomCallBack = callback1;
  onStreamUpdatedCallBack = callback2;

  if (!roomId) {
    alert("请输入房间号");
    return;
  }

  screenCaptrue && zg.stopScreenShot();

  //get token
  Vue.http.get(_otherConfig.token, {
    params: {
      app_id: _config.appid,
      id_name: _config.idName,
      cgi_token: _otherConfig.cgi_token
    }
  }).then(
    (res) => {
      console.log("gettoken success");
      startLogin(roomId, res.data, type);
    });
}

//login
function startLogin(roomId, token, type) {
  zg.login(roomId, type, token, function(streamList) {
    console.log("login success");
    loginSuccess(streamList, type);
  }, function(err) {
    loginFailed(err);
  });
}


function loginFailed(err) {
  alert("登录失败");
  console.error(err);

}

function renderRemoteVideos() {
  // 界面上的2，3，4...为远程用户，如果有人退出，重排列
  let len = useLocalStreamList.length;
  for (let i = 0; i < len; i++) {
    zg.stopPlayingStream(useLocalStreamList[i].stream_id);
  }
  for (let i = 0; i < len; i++) {
    play(useLocalStreamList[i].stream_id, remoteVideos[i]);
  }
  onStreamUpdatedCallBack(len);
}

function loginSuccess(streamList, type) {
  var maxNumber = 20;

  //限制房间最多人数，原因：视频软解码消耗cpu，浏览器之间能支撑的个数会有差异，太多会卡顿
  if (streamList.length >= maxNumber) {
    alert("房间太拥挤，换一个吧！");
    leaveRoom();
    return;
  }
  useLocalStreamList = streamList;

  renderRemoteVideos();
  console.log(`login success`);

  loginRoom = true;

  //开始预览本地视频
  type === 1 && doPreviewPublish();

}

//预览
function doPreviewPublish(config) {
  var quality = 2;

  var previewConfig = {
    "audio": true,
    "audioInput": device.microphones[0].deviceId || null,
    "video": true,
    "videoInput": device.cameras[0].deviceId || null,
    "videoQuality": quality * 1,
    "horizontal": true,
    "externalCapture": false,
    "externalMediaStream": null
  };
  previewConfig = Vue.util.extend(previewConfig, config);
  console.log("previewConfig", previewConfig);
  var result = zg.startPreview(previewVideo, previewConfig, function() {
    console.log("preview success");
    openRoomCallBack();
    isPreviewed = true;
    publish();
    //部分浏览器会有初次调用摄像头后才能拿到音频和视频设备label的情况，
    enumDevices();
  }, function(err) {
    alert(JSON.stringify(err));
    console.error("preview failed", err);
  });

  if (!result) alert("预览失败！");
}

//推流
function publish() {
  zg.startPublishingStream(_config.idName, previewVideo);
}

function play(streamId, video) {
  var result = zg.startPlayingStream(streamId, video);

  video.muted = false;
  if (!result) {
    alert("哎呀，播放失败啦");
    video.style = "display:none";
  }
}

function enableCamera(enable) {
  zg.enableCamera(previewVideo, enable);
}

function enableMicrophone(enable) {
  zg.enableMicrophone(previewVideo, enable);
}

function enableScreen(enable) {
  if (IsPC()) {
    if (enable) {
      loginRoom && zg.stopPublishingStream(_config.idName);
      loginRoom && zg.stopPreview(previewVideo);

      var config = {
        externalMediaStream: null,
        width: 640,
        height: 480,
        frameRate: 15,
        bitRate: 1000
      };

      getBrowser() === "Firefox" && zg.startScreenShotFirFox("window", false, function(suc, mediastream) {
        console.log("startScreenShot:" + suc);
        screenCaptrue = suc;
        previewVideo.srcObject = mediastream;
        // 推送屏幕可有两种形式，一是作为流媒体直接推送 即下面这种形式
        //另一种是作为externalCapture，前提是需要先将流喂给video标签；，下面chrome推送方式就是这种形式；可任意选择其中之一
        if (loginRoom) {
          doPreviewPublish(config);
        }
      });

      getBrowser() === "Chrome" && zg.startScreenShotChrome(function(suc, mediastream) {
        console.log("startScreenShot:" + suc);
        screenCaptrue = suc;
        // 推送屏幕可有两种形式，一是作为externalCapture，前提是需要先将流喂给video标签；即下面这种形式
        //另一种是作为流媒体直接推送，上面火狐推送方式就是这种形式；可任意选择其中之一
        previewVideo.srcObject = mediastream;
        if (loginRoom) {
          doPreviewPublish({ externalCapture: true });
        }
      });
    } else {
      zg.stopScreenShot();
      zg.stopPreview(previewVideo);
      zg.stopPublishingStream(_config.idName);

      doPreviewPublish();
    }
  }
}

console.log("sdk version is", ZegoClient.getCurrentVersion());
if (ZegoClient.isSupportWebrtc()) {
  ZegoClient.isSupportH264(result => {
    init();
    if (!result) {
      alert("浏览器不支持视频h264编码，不能推拉音频流");
    }
  }, err => {
    console.error(err);
  });
} else {
  alert("浏览器不支持webrtc，换一个浏览器试试吧");
}

export default {
  zg,
  init,
  openRoom,
  enableCamera,
  enableMicrophone,
  enableScreen
};
