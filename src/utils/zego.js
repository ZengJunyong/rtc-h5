import { ZegoClient } from "webrtc-zego";
import Vue from "vue";

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
  $(".remoteVideo").html("");
  zg.logout();
}

function listenChild() {
  var listens = {
    onGetAnchorInfo: function(userid, username) {
      anchor_userid = userid, anchro_username = username;
    },

    onRecvJoinLiveRequest: function(requestId, from_userid, from_username, roomid) {
      console.log("onRecvJoinLiveRequest", requestId, from_userid, from_username, roomid);
      var accept = window.confirm("收到请求连麦");
      window._fromUserId = from_userid;
      zg.respondJoinLive(requestId, accept, function(seq) {
        console.log("respondJoinLive success", seq);
      }, function(err, seq) {
        console.log("respondJoinLive err", err, seq);
      });
    },

    onRecvInviteJoinLiveRequest: function(requestId, from_userid, from_username, roomid) {
      console.log("onRecvInviteJoinLiveRequest", requestId, from_userid, from_username, roomid);
      var accept = window.confirm("收到邀请连麦");
      accept && doPreviewPublish();
    },

    onRecvEndJoinLiveCommand: function(requestId, from_userid, from_username, roomid) {
      console.log("onRecvEndJoinLiveCommand", requestId, from_userid, from_username, roomid);
      isPreviewed && zg.stopPreview(previewVideo);
      isPreviewed && zg.stopPublishingStream(_config.idName);
    },
    onUserStateUpdate: function(roomId, userList) {
      console.log("onUserStateUpdate", roomId, userList);
    },
    onGetTotalUserList: function(roomId, userList) {
      console.log("onGetTotalUserList", roomId, userList);
    }
  };
  for (var key in listens) {
    zg[key] = listens[key];
  }
}

function listen() {
  var _config = {
    onPlayStateUpdate: function(type, streamid, error) {
      if (type == 0) {
        console.info("play  success");
      } else if (type == 2) {
        console.info("play retry");
      } else {

        console.error("play error " + error.msg);

        var _msg = error.msg;
        if (error.msg.indexOf("server session closed, reason: ") > -1) {
          var code = error.msg.replace("server session closed, reason: ", "");
          if (code == 21) {
            _msg = "音频编解码不支持(opus)";
          } else if (code == 22) {
            _msg = "视频编解码不支持(H264)";
          } else if (code == 20) {
            _msg = "sdp 解释错误";
          }
        }
        alert("拉流失败,reason = " + _msg);
      }

    },
    onPublishStateUpdate: function(type, streamid, error) {
      if (type == 0) {
        console.info(" publish  success");
      } else if (type == 2) {
        console.info(" publish  retry");
      } else {
        console.error("publish error " + error.msg);
        var _msg = error.msg;
        if (error.msg.indexOf("server session closed, reason: ") > -1) {
          var code = error.msg.replace("server session closed, reason: ", "");
          if (code == 21) {
            _msg = "音频编解码不支持(opus)";
          } else if (code == 22) {
            _msg = "视频编解码不支持(H264)";
          } else if (code == 20) {
            _msg = "sdp 解释错误";
          }
        }
        alert("推流失败,reason = " + _msg);

      }

    },
    onPublishQualityUpdate: function(streamid, quality) {
      console.info("#" + streamid + "#" + "publish " + " audio: " + quality.audioBitrate + " video: " + quality.videoBitrate + " fps: " + quality.videoFPS);
    },

    onPlayQualityUpdate: function(streamid, quality) {
      console.info("#" + streamid + "#" + "play " + " audio: " + quality.audioBitrate + " video: " + quality.videoBitrate + " fps: " + quality.videoFPS);
    },

    onDisconnect: function(error) {
      console.error("onDisconnect " + JSON.stringify(error));
      alert("网络连接已断开" + JSON.stringify(error));
      leaveRoom();
    },

    onKickOut: function(error) {
      console.error("onKickOut " + JSON.stringify(error));
    },
    onStreamUpdated: function(type, streamList) {
      if (type == 0) {
        let len = useLocalStreamList.length;
        for (let i = 0; i < streamList.length; i++) {
          useLocalStreamList.push(streamList[i]);
          play(streamList[i].stream_id, remoteVideos[len + i]);
        }
        onStreamUpdatedCallBack(len + streamList.length);
      } else if (type == 1) {
        for (var k = 0; k < useLocalStreamList.length; k++) {
          for (var j = 0; j < streamList.length; j++) {
            if (useLocalStreamList[k].stream_id === streamList[j].stream_id) {
              zg.stopPlayingStream(useLocalStreamList[k].stream_id);
              console.info(useLocalStreamList[k].stream_id + "was devared");
              useLocalStreamList.splice(k, 1);
              break;
            }
          }
        }
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
    }
  };

  for (var key in _config) {
    zg[key] = _config[key];
  }

  if (typeof listenChild === "function") {
    listenChild();
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

function loginSuccess(streamList, type) {
  var maxNumber = 4;

  //限制房间最多人数，原因：视频软解码消耗cpu，浏览器之间能支撑的个数会有差异，太多会卡顿
  if (streamList.length >= maxNumber) {
    alert("房间太拥挤，换一个吧！");
    leaveRoom();
    return;
  }
  useLocalStreamList = streamList;

  for (var index = 0; index < useLocalStreamList.length; index++) {
  }
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
  openRoom
};
