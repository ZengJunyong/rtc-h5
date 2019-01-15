!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var r = t();
        for (var n in r) ("object" == typeof exports ? exports : e)[n] = r[n]
    }
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {i: n, l: !1, exports: {}};
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }

        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 4)
    }([function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.PROTO_VERSION = "1.1.7", t.ROOMVERSION = "V1", function (e) {
            e[e.debug = 0] = "debug", e[e.info = 1] = "info", e[e.warn = 2] = "warn", e[e.error = 3] = "error", e[e.report = 99] = "report", e[e.disable = 100] = "disable"
        }(t.ENUM_LOG_LEVEL || (t.ENUM_LOG_LEVEL = {})), function (e) {
            e[e.disable = 0] = "disable", e[e.websocket = 1] = "websocket", e[e.https = 2] = "https"
        }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {}));
        var n = function () {
            function e(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = null), this._id = null, this.next = null, this.prev = null, this._id = e, this._data = t
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id
                }, set: function (e) {
                    this._id = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                }, set: function (e) {
                    this._data = e
                }, enumerable: !0, configurable: !0
            }), e.prototype.hasNext = function () {
                return this.next && this.next.id
            }, e.prototype.hasPrev = function () {
                return this.prev && this.prev.id
            }, e
        }();
        t.ListNode = n;
        var i = function () {
            function e() {
                this.start = new n, this.end = new n, this._idCounter = 0, this._numNodes = 0, this.start.next = this.end, this.start.prev = null, this.end.prev = this.start, this.end.next = null
            }

            return e.prototype.insertBefore = function (e, t) {
                var r = new n(this._idCounter, t);
                return r.next = e, r.prev = e.prev, e.prev.next = r, e.prev = r, ++this._idCounter, ++this._numNodes, r
            }, e.prototype.addLast = function (e) {
                return this.insertBefore(this.end, e)
            }, e.prototype.add = function (e) {
                return this.addLast(e)
            }, e.prototype.getFirst = function () {
                return 0 === this._numNodes ? null : this.start.next
            }, e.prototype.getLast = function () {
                return 0 === this._numNodes ? null : this.end.prev
            }, e.prototype.size = function () {
                return this._numNodes
            }, e.prototype.getFromFirst = function (e) {
                var t = 0, r = this.start.next;
                if (e >= 0) for (; t < e && null !== r;) r = r.next, ++t; else r = null;
                if (null === r) throw"Index out of bounds.";
                return r
            }, e.prototype.get = function (e) {
                return 0 === e ? this.getFirst() : e === this._numNodes - 1 ? this.getLast() : this.getFromFirst(e)
            }, e.prototype.remove = function (e) {
                return e.prev.next = e.next, e.next.prev = e.prev, --this._numNodes, e
            }, e.prototype.removeFirst = function () {
                var e = null;
                return this._numNodes > 0 && (e = this.remove(this.start.next)), e
            }, e.prototype.removeLast = function () {
                var e = null;
                return this._numNodes > 0 && (e = this.remove(this.end.prev)), e
            }, e.prototype.removeAll = function () {
                this.start.next = this.end, this.end.prev = this.start, this._numNodes = 0, this._idCounter = 0
            }, e.prototype.each = function (e) {
                for (var t = this.start; t.hasNext();) e(t = t.next)
            }, e.prototype.find = function (e) {
                for (var t = this.start, r = !1, n = null; t.hasNext() && !r;) e(t = t.next) && (n = t, r = !0);
                return n
            }, e.prototype.map = function (e) {
                for (var t = this.start, r = []; t.hasNext();) e(t = t.next) && r.push(t);
                return r
            }, e.prototype.push = function (e) {
                return this.addLast(e)
            }, e.prototype.unshift = function (e) {
                this._numNodes > 0 ? this.insertBefore(this.start.next, e) : this.insertBefore(this.end, e)
            }, e.prototype.pop = function () {
                return this.removeLast()
            }, e.prototype.shift = function () {
                return this.removeFirst()
            }, e
        }();
        t.LinkedList = i, t.sdkErrorList = {
            SUCCESS: {code: "ZegoClient.Success", msg: "success."},
            PARAM: {code: "ZegoClient.Error.Param", msg: "input error."},
            HEARTBEAT_TIMEOUT: {code: "ZegoClient.Error.Timeout", msg: "heartbeat timeout."},
            LOGIN_TIMEOUT: {code: "ZegoClient.Error.Timeout", msg: "login timeout."},
            SEND_MSG_TIMEOUT: {code: "ZegoClient.Error.Timeout", msg: "send customsg timeout."},
            RESET_QUEUE: {code: "ZegoClient.Error.Timeout", msg: "msg waiting ack is clear when reset."},
            LOGIN_DISCONNECT: {code: "ZegoClient.Error.Network", msg: "network is broken and login fail."},
            KICK_OUT: {code: "ZegoClient.Error.Kickout", msg: "kickout reason="},
            UNKNOWN: {code: "ZegoClient.Error.Unknown", msg: "unknown error."},
            FREQ_LIMITED: {code: "ZegoClient.Error.requencyLimited", msg: "Frequency Limited."}
        }, function (e) {
            e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
        }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
            LOW: {
                width: 240,
                height: 320,
                frameRate: 15,
                bitRate: 300
            },
            MEDIUM: {width: 480, height: 640, frameRate: 15, bitRate: 800},
            HIGH: {width: 720, height: 1280, frameRate: 20, bitRate: 1500}
        }, t.ENUM_RETRY_STATE = {didNotStart: 0, retrying: 1, finished: 2}, t.ENUM_PUBLISH_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            publishing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_PLAY_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            playing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_CONNECT_STATE = {
            disconnect: 0,
            connecting: 1,
            connected: 2
        }, t.MAX_TRY_CONNECT_COUNT = 3, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.ENUM_PUBLISH_STREAM_STATE = {
            waiting_url: 1,
            tryPublish: 2,
            update_info: 3,
            publishing: 4,
            stop: 5
        }, t.ENUM_STREAM_SUB_CMD = {
            liveNone: 0,
            liveBegin: 2001,
            liveEnd: 2002,
            liveUpdate: 2003
        }, t.ENUM_STREAM_UPDATE_TYPE = {added: 0, deleted: 1}, function (e) {
            e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
        }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), t.ENUM_PUBLISH_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.ENUM_PLAY_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.MAX_TRY_LOGIN_COUNT = 5, t.TRY_LOGIN_INTERVAL = [2e3, 2e3, 3e3, 3e3, 4e3], t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
            added: 12001,
            deleted: 12002,
            updated: 12003
        }, t.SERVER_ERROR_CODE = 1e4, t.MIXSTREAM_ERROR_CODE = 1e4, function (e) {
            e[e.low = 1] = "low", e[e.stantard = 2] = "stantard", e[e.hight = 3] = "hight", e[e.custome = 4] = "custome"
        }(t.QUALITYLEVEL || (t.QUALITYLEVEL = {})), t.ENUM_SIGNAL_SUB_CMD = {
            none: 0,
            joinLiveRequest: 1001,
            joinLiveResult: 1002,
            joinLiveInvite: 1003,
            joinLiveStop: 1004
        }, t.ENUM_PUSH_SIGNAL_SUB_CMD = {
            none: 0,
            pushJoinLiveRequest: 11001,
            pushJoinLiveResult: 11002,
            pushJoinLiveInvite: 11003,
            pushJoinLiveStop: 11004
        }, function (e) {
            e[e.auto = 0] = "auto", e[e.ultra = 1] = "ultra"
        }(t.ENUM_PLAY_SOURCE_TYPE || (t.ENUM_PLAY_SOURCE_TYPE = {})), function (e) {
            e[e.cdn = 0] = "cdn", e[e.ultra = 1] = "ultra", e[e.customUrl = 2] = "customUrl"
        }(t.ENUM_DISPATCH_TYPE || (t.ENUM_DISPATCH_TYPE = {})), function (e) {
            e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
        }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {}))
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e() {
            }

            return e.checkConfigParam = function (e, t) {
                return e.appid && "number" == typeof e.appid ? e.server ? !(!e.idName || "string" != typeof e.idName) || (t.error("ccp.0 idName must be string and not empty"), !1) : (t.error("ccp.0 server must be string and not empty"), !1) : (t.error("ccp.0 appid must be number"), !1)
            }, e.checkLoginParam = function (e, t) {
                return !0
            }, e.registerCallback = function (e, t, r) {
                var n, i;
                t.success && (n = t.success), t.error && (i = t.error), r[e + "SuccessCallback"] = n, r[e + "ErrorCallback"] = i
            }, e.actionErrorCallback = function (e, t) {
                return t[e + "ErrorCallback"]
            }, e.actionSuccessCallback = function (e, t) {
                return t[e + "SuccessCallback"]
            }, e.getServerError = function (e) {
                var t = {
                    1: "parse json error.",
                    1001: "login is processing.",
                    1002: "liveroom request error.",
                    1003: "zpush connect fail.",
                    1004: "zpush handshake fail.",
                    1005: "zpush login fail.",
                    1006: "user login state is wrong.",
                    1007: "got no zpush addr",
                    1008: "token error",
                    1009: "dispatch error",
                    2002: "biz channel error",
                    1000000000: "liveroom cmd error, result="
                };
                if (0 === e) return {code: "ZegoClient.Success", msg: "success"};
                var r = {code: "ZegoClient.Error.Server", msg: ""};
                return r.msg = e > 1e9 ? t[1e9] + e : t[e] ? "unknown error code:" + e : t[e], r
            }, e.isKeepTryLogin = function (e) {
                switch (e) {
                    case 1002:
                    case 1003:
                        return !0;
                    default:
                        return !1
                }
            }, e.mergeStreamList = function (e, t, r, n, i) {
                e.debug("msl.0 call");
                for (var o, s = [], a = [], c = [], d = 0; d < n.length; d++) if (n[d].anchor_id_name != t) {
                    o = !1;
                    for (var l = 0; l < r.length; l++) if (n[d].stream_id === r[l].stream_id) {
                        n[d].extra_info !== r[l].extra_info && c.push(n[d]), o = !0;
                        break
                    }
                    o || s.push(n[d])
                } else e.debug("msl.0 have self stream added");
                for (var h = 0; h < r.length; h++) {
                    o = !1;
                    for (var p = 0; p < n.length; p++) if (n[p].anchor_id_name != t) {
                        if (r[h].stream_id === n[p].stream_id) {
                            o = !0;
                            break
                        }
                    } else e.debug("msl.0 have self stream deleted");
                    o || a.push(r[h])
                }
                r = n, i(s, a, c), e.debug("msl.0 call success")
            }, e.checkCustomCommandParam = function (e) {
                return !0
            }, e.generateRandumNumber = function (e) {
                return parseInt(Math.random() * (e + 1) + "", 10)
            }, e.uuid = function (e, t) {
                var r, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
                if (t = t || n.length, e) for (r = 0; r < e; r++) i[r] = n[0 | Math.random() * t]; else {
                    var o = void 0;
                    for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", r = 0; r < 36; r++) i[r] || (o = 0 | 16 * Math.random(), i[r] = n[19 == r ? 3 & o | 8 : o])
                }
                return i.join("")
            }, e.isSupportWebrtc = function () {
                var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                    t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
                    r = window.WebSocket;
                return !!e && !!t && !!r
            }, e.isSupportH264 = function (e, t) {
                new RTCPeerConnection(null).createOffer({
                    offerToReceiveAudio: 1,
                    offerToReceiveVideo: 1
                }).then(function (t) {
                    if (t && t.sdp) {
                        var r = t.sdp.split("\r\n").some(function (e) {
                            return e.startsWith("a=rtpmap:") && e.indexOf("H264/") > -1
                        });
                        e(r)
                    }
                }, function (e) {
                    t(e)
                })
            }, e
        }();
        t.ClientUtil = n
    }, function (e, t, r) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", {value: !0}), t.playErrorList = {
            DISPATCH_ERROR: {code: "ZegoPlayWeb.Error.Dispatch", msg: "dispatch request error"},
            DISPATCH_TIMEOUT: {code: "ZegoPlayWeb.Timeout.Dispatch", msg: "dispatch request timeout"},
            TOKEN_ERROR: {code: "ZegoPlayWeb.Error.Token", msg: "login token error"},
            SEND_SESSION_TIMEOUT: {code: "ZegoPlayWeb.Timeout.Session", msg: "send session request timeout"},
            CREATE_SESSION_ERROR: {code: "ZegoPlayWeb.Error.Session", msg: "create session error"},
            CREATE_OFFER_ERROR: {code: "ZegoPublish.Error.CreateOffer", msg: "create offer error"},
            SERVER_MEDIA_DESC_TIMEOUT: {
                code: "ZegoPlayWeb.Timeout.RemoteOffer",
                msg: "wating server mediaDesc timeout"
            },
            SET_REMOTE_DESC_ERROR: {code: "ZegoPlayWeb.Error.RemoteOffer", msg: "other side offer error"},
            CREATE_ANSWER_ERROR: {code: "ZegoPlayWeb.Error.CreateAnswer", msg: "create offer error"},
            SET_LOCAL_DESC_ERROR: {code: "ZegoPlayWeb.Error.LocalDesc", msg: "setLocalDescription error"},
            SEND_MEDIA_DESC_TIMEOUT: {code: "ZegoPlayWeb.Timeout.Desc", msg: "send mediaDesc timeout"},
            SEND_CANDIDATE_ERROR: {code: "ZegoPlayWeb.Error.Candidate", msg: "send candidate error"},
            SEND_CANDIDATE_TIMEOUT: {code: "ZegoPlayWeb.Timeout.Candidate", msg: "send candidate timeout"},
            SERVER_CANDIDATE_TIMEOUT: {code: "ZegoPlayWeb.Timeout.ServerCandidate", msg: "waiting candidate timeout"},
            SERVER_CANDIDATE_ERROR: {code: "ZegoPlayWeb.Error.ServerCandidate", msg: "recv candidate error"},
            MEDIA_CONNECTION_FAILED: {code: "ZegoPlayWeb.Error.ConnectionFailed", msg: "ice Connection state failed"},
            MEDIA_CONNECTION_CLOSED: {code: "ZegoPlayWeb.Error.ConnectionClosed", msg: "ice connection state closed"},
            SESSION_CLOSED: {code: "ZegoPlayWeb.Error.SessionClosed", msg: "server session closed"},
            WEBSOCKET_ERROR: {code: "ZegoPlayWeb.Error.SocketError", msg: "network error"}
        }, t.publishErrorList = {
            DISPATCH_ERROR: {code: "ZegoPublish.Error.Dispatch", msg: "dispatch request error"},
            DISPATCH_TIMEOUT: {code: "ZegoPublish.Timeout.Dispatch", msg: "dispatch request timeout"},
            TOKEN_ERROR: {code: "ZegoPublish.Error.Token", msg: "login token error"},
            SEND_SESSION_TIMEOUT: {code: "ZegoPublish.Timeout.Session", msg: "send session request timeout"},
            CREATE_SESSION_ERROR: {code: "ZegoPublish.Error.Session", msg: "create session error"},
            CREATE_OFFER_ERROR: {code: "ZegoPublish.Error.CreateOffer", msg: "create offer error"},
            SET_LOCAL_DESC_ERROR: {code: "ZegoPublish.Error.LocalDesc", msg: "setLocalDescription error"},
            SEND_MEDIA_DESC_TIMEOUT: {code: "ZegoPublish.Timeout.Desc", msg: "send mediaDesc timeout"},
            SERVER_MEDIA_DESC_TIMEOUT: {
                code: "ZegoPublish.Timeout.ServerAnswer",
                msg: "waiting server mediaDesc timeout"
            },
            SERVER_MEDIA_DESC_ERROR: {code: "ZegoPublish.Error.ServerAnswer", msg: "server mediaDesc type error"},
            SET_REMOTE_DESC_ERROR: {code: "ZegoPublish.Error.RemoteDesc", msg: "other side offer error"},
            SEND_CANDIDATE_TIMEOUT: {code: "ZegoPublish.Timeout.Candidate", msg: "sendIceCandidate error"},
            SERVER_CANDIDATE_TIMEOUT: {code: "ZegoPublish.Timeout.ServerCandidate", msg: "waiting candidate timeout"},
            SERVER_CANDIDATE_ERROR: {code: "ZegoPublish.Error.ServerCandidate", msg: "recv candidate error"},
            SESSION_CLOSED: {code: "ZegoPublish.Error.SessionClosed", msg: "server session closed"},
            MEDIA_CONNECTION_FAILED: {code: "ZegoPublish.Error.IConnectionFailed", msg: "Iice Connection state failed"},
            MEDIA_CONNECTION_CLOSED: {code: "ZegoPublish.Error.ConnectionClosed", msg: "ice connection state closed"},
            WEBSOCKET_ERROR: {code: "ZegoPublish.Error.SocketError", msg: "network error"}
        }, t.ENUM_PUBLISH_STATE_UPDATE = {start: 0, error: 1, retry: 2}, t.ENUM_PLAY_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2,
            stop: 3
        }, t.ENUM_RETRY_STATE = {didNotStart: 0, retrying: 1, finished: 2}, t.getSeq = (n = 1, function () {
            return n++
        })
    }, function (e, t, r) {
        (function (t) {
            var r;
            e.exports = function e(t, n, i) {
                function o(a, c) {
                    if (!n[a]) {
                        if (!t[a]) {
                            var d = "function" == typeof r && r;
                            if (!c && d) return r(a, !0);
                            if (s) return s(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var h = n[a] = {exports: {}};
                        t[a][0].call(h.exports, function (e) {
                            var r = t[a][1][e];
                            return o(r || e)
                        }, h, h.exports, e, t, n, i)
                    }
                    return n[a].exports
                }

                for (var s = "function" == typeof r && r, a = 0; a < i.length; a++) o(i[a]);
                return o
            }({
                1: [function (e, t, r) {
                    "use strict";
                    var n = e("sdp");

                    function i(e, t, r, i, o) {
                        var s = n.writeRtpDescription(e.kind, t);
                        if (s += n.writeIceParameters(e.iceGatherer.getLocalParameters()), s += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : o || "active"), s += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? s += "a=sendrecv\r\n" : e.rtpSender ? s += "a=sendonly\r\n" : e.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", e.rtpSender) {
                            var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
                            e.rtpSender._initialTrackId = a;
                            var c = "msid:" + (i ? i.id : "-") + " " + a + "\r\n";
                            s += "a=" + c, s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, s += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                        }
                        return s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), s
                    }

                    function o(e, t) {
                        var r = {codecs: [], headerExtensions: [], fecMechanisms: []}, n = function (e, t) {
                            e = parseInt(e, 10);
                            for (var r = 0; r < t.length; r++) if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r]
                        }, i = function (e, t, r, i) {
                            var o = n(e.parameters.apt, r), s = n(t.parameters.apt, i);
                            return o && s && o.name.toLowerCase() === s.name.toLowerCase()
                        };
                        return e.codecs.forEach(function (n) {
                            for (var o = 0; o < t.codecs.length; o++) {
                                var s = t.codecs[o];
                                if (n.name.toLowerCase() === s.name.toLowerCase() && n.clockRate === s.clockRate) {
                                    if ("rtx" === n.name.toLowerCase() && n.parameters && s.parameters.apt && !i(n, s, e.codecs, t.codecs)) continue;
                                    (s = JSON.parse(JSON.stringify(s))).numChannels = Math.min(n.numChannels, s.numChannels), r.codecs.push(s), s.rtcpFeedback = s.rtcpFeedback.filter(function (e) {
                                        for (var t = 0; t < n.rtcpFeedback.length; t++) if (n.rtcpFeedback[t].type === e.type && n.rtcpFeedback[t].parameter === e.parameter) return !0;
                                        return !1
                                    });
                                    break
                                }
                            }
                        }), e.headerExtensions.forEach(function (e) {
                            for (var n = 0; n < t.headerExtensions.length; n++) {
                                var i = t.headerExtensions[n];
                                if (e.uri === i.uri) {
                                    r.headerExtensions.push(i);
                                    break
                                }
                            }
                        }), r
                    }

                    function s(e, t, r) {
                        return -1 !== {
                            offer: {
                                setLocalDescription: ["stable", "have-local-offer"],
                                setRemoteDescription: ["stable", "have-remote-offer"]
                            },
                            answer: {
                                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
                            }
                        }[t][e].indexOf(r)
                    }

                    function a(e, t) {
                        var r = e.getRemoteCandidates().find(function (e) {
                            return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
                        });
                        return r || e.addRemoteCandidate(t), !r
                    }

                    function c(e, t) {
                        var r = new Error(t);
                        return r.name = e, r.code = {
                            NotSupportedError: 9,
                            InvalidStateError: 11,
                            InvalidAccessError: 15,
                            TypeError: void 0,
                            OperationError: void 0
                        }[e], r
                    }

                    t.exports = function (e, t) {
                        function r(t, r) {
                            r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {track: t}))
                        }

                        function d(t, r, n, i) {
                            var o = new Event("track");
                            o.track = r, o.receiver = n, o.transceiver = {receiver: n}, o.streams = i, e.setTimeout(function () {
                                t._dispatchEvent("track", o)
                            })
                        }

                        var l = function (r) {
                            var i = this, o = document.createDocumentFragment();
                            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
                                i[e] = o[e].bind(o)
                            }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", r = JSON.parse(JSON.stringify(r || {})), this.usingBundle = "max-bundle" === r.bundlePolicy, "negotiate" === r.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                            switch (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"), r.iceTransportPolicy) {
                                case"all":
                                case"relay":
                                    break;
                                default:
                                    r.iceTransportPolicy = "all"
                            }
                            switch (r.bundlePolicy) {
                                case"balanced":
                                case"max-compat":
                                case"max-bundle":
                                    break;
                                default:
                                    r.bundlePolicy = "balanced"
                            }
                            if (r.iceServers = function (e, t) {
                                var r = !1;
                                return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                                    if (e && (e.urls || e.url)) {
                                        var n = e.urls || e.url;
                                        e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                                        var i = "string" == typeof n;
                                        return i && (n = [n]), n = n.filter(function (e) {
                                            return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || r ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (r = !0, !0)
                                        }), delete e.url, e.urls = i ? n[0] : n, !!n.length
                                    }
                                })
                            }(r.iceServers || [], t), this._iceGatherers = [], r.iceCandidatePoolSize) for (var s = r.iceCandidatePoolSize; s > 0; s--) this._iceGatherers.push(new e.RTCIceGatherer({
                                iceServers: r.iceServers,
                                gatherPolicy: r.iceTransportPolicy
                            })); else r.iceCandidatePoolSize = 0;
                            this._config = r, this.transceivers = [], this._sdpSessionId = n.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
                        };
                        Object.defineProperty(l.prototype, "localDescription", {
                            configurable: !0, get: function () {
                                return this._localDescription
                            }
                        }), Object.defineProperty(l.prototype, "remoteDescription", {
                            configurable: !0,
                            get: function () {
                                return this._remoteDescription
                            }
                        }), l.prototype.onicecandidate = null, l.prototype.onaddstream = null, l.prototype.ontrack = null, l.prototype.onremovestream = null, l.prototype.onsignalingstatechange = null, l.prototype.oniceconnectionstatechange = null, l.prototype.onconnectionstatechange = null, l.prototype.onicegatheringstatechange = null, l.prototype.onnegotiationneeded = null, l.prototype.ondatachannel = null, l.prototype._dispatchEvent = function (e, t) {
                            this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t))
                        }, l.prototype._emitGatheringStateChange = function () {
                            var e = new Event("icegatheringstatechange");
                            this._dispatchEvent("icegatheringstatechange", e)
                        }, l.prototype.getConfiguration = function () {
                            return this._config
                        }, l.prototype.getLocalStreams = function () {
                            return this.localStreams
                        }, l.prototype.getRemoteStreams = function () {
                            return this.remoteStreams
                        }, l.prototype._createTransceiver = function (e, t) {
                            var r = this.transceivers.length > 0, n = {
                                track: null,
                                iceGatherer: null,
                                iceTransport: null,
                                dtlsTransport: null,
                                localCapabilities: null,
                                remoteCapabilities: null,
                                rtpSender: null,
                                rtpReceiver: null,
                                kind: e,
                                mid: null,
                                sendEncodingParameters: null,
                                recvEncodingParameters: null,
                                stream: null,
                                associatedRemoteMediaStreams: [],
                                wantReceive: !0
                            };
                            if (this.usingBundle && r) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport; else {
                                var i = this._createIceAndDtlsTransports();
                                n.iceTransport = i.iceTransport, n.dtlsTransport = i.dtlsTransport
                            }
                            return t || this.transceivers.push(n), n
                        }, l.prototype.addTrack = function (t, r) {
                            if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                            var n, i = this.transceivers.find(function (e) {
                                return e.track === t
                            });
                            if (i) throw c("InvalidAccessError", "Track already exists.");
                            for (var o = 0; o < this.transceivers.length; o++) this.transceivers[o].track || this.transceivers[o].kind !== t.kind || (n = this.transceivers[o]);
                            return n || (n = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), n.track = t, n.stream = r, n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport), n.rtpSender
                        }, l.prototype.addStream = function (e) {
                            var r = this;
                            if (t >= 15025) e.getTracks().forEach(function (t) {
                                r.addTrack(t, e)
                            }); else {
                                var n = e.clone();
                                e.getTracks().forEach(function (e, t) {
                                    var r = n.getTracks()[t];
                                    e.addEventListener("enabled", function (e) {
                                        r.enabled = e.enabled
                                    })
                                }), n.getTracks().forEach(function (e) {
                                    r.addTrack(e, n)
                                })
                            }
                        }, l.prototype.removeTrack = function (t) {
                            if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                            if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                            var r = this.transceivers.find(function (e) {
                                return e.rtpSender === t
                            });
                            if (!r) throw c("InvalidAccessError", "Sender was not created by this connection.");
                            var n = r.stream;
                            r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null;
                            var i = this.transceivers.map(function (e) {
                                return e.stream
                            });
                            -1 === i.indexOf(n) && this.localStreams.indexOf(n) > -1 && this.localStreams.splice(this.localStreams.indexOf(n), 1), this._maybeFireNegotiationNeeded()
                        }, l.prototype.removeStream = function (e) {
                            var t = this;
                            e.getTracks().forEach(function (e) {
                                var r = t.getSenders().find(function (t) {
                                    return t.track === e
                                });
                                r && t.removeTrack(r)
                            })
                        }, l.prototype.getSenders = function () {
                            return this.transceivers.filter(function (e) {
                                return !!e.rtpSender
                            }).map(function (e) {
                                return e.rtpSender
                            })
                        }, l.prototype.getReceivers = function () {
                            return this.transceivers.filter(function (e) {
                                return !!e.rtpReceiver
                            }).map(function (e) {
                                return e.rtpReceiver
                            })
                        }, l.prototype._createIceGatherer = function (t, r) {
                            var n = this;
                            if (r && t > 0) return this.transceivers[0].iceGatherer;
                            if (this._iceGatherers.length) return this._iceGatherers.shift();
                            var i = new e.RTCIceGatherer({
                                iceServers: this._config.iceServers,
                                gatherPolicy: this._config.iceTransportPolicy
                            });
                            return Object.defineProperty(i, "state", {
                                value: "new",
                                writable: !0
                            }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function (e) {
                                var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                                i.state = r ? "completed" : "gathering", null !== n.transceivers[t].bufferedCandidateEvents && n.transceivers[t].bufferedCandidateEvents.push(e)
                            }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i
                        }, l.prototype._gather = function (t, r) {
                            var i = this, o = this.transceivers[r].iceGatherer;
                            if (!o.onlocalcandidate) {
                                var s = this.transceivers[r].bufferedCandidateEvents;
                                this.transceivers[r].bufferedCandidateEvents = null, o.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), o.onlocalcandidate = function (e) {
                                    if (!(i.usingBundle && r > 0)) {
                                        var s = new Event("icecandidate");
                                        s.candidate = {sdpMid: t, sdpMLineIndex: r};
                                        var a = e.candidate, c = !a || 0 === Object.keys(a).length;
                                        if (c) "new" !== o.state && "gathering" !== o.state || (o.state = "completed"); else {
                                            "new" === o.state && (o.state = "gathering"), a.component = 1, a.ufrag = o.getLocalParameters().usernameFragment;
                                            var d = n.writeCandidate(a);
                                            s.candidate = Object.assign(s.candidate, n.parseCandidate(d)), s.candidate.candidate = d, s.candidate.toJSON = function () {
                                                return {
                                                    candidate: s.candidate.candidate,
                                                    sdpMid: s.candidate.sdpMid,
                                                    sdpMLineIndex: s.candidate.sdpMLineIndex,
                                                    usernameFragment: s.candidate.usernameFragment
                                                }
                                            }
                                        }
                                        var l = n.getMediaSections(i._localDescription.sdp);
                                        l[s.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + s.candidate.candidate + "\r\n", i._localDescription.sdp = n.getDescription(i._localDescription.sdp) + l.join("");
                                        var h = i.transceivers.every(function (e) {
                                            return e.iceGatherer && "completed" === e.iceGatherer.state
                                        });
                                        "gathering" !== i.iceGatheringState && (i.iceGatheringState = "gathering", i._emitGatheringStateChange()), c || i._dispatchEvent("icecandidate", s), h && (i._dispatchEvent("icecandidate", new Event("icecandidate")), i.iceGatheringState = "complete", i._emitGatheringStateChange())
                                    }
                                }, e.setTimeout(function () {
                                    s.forEach(function (e) {
                                        o.onlocalcandidate(e)
                                    })
                                }, 0)
                            }
                        }, l.prototype._createIceAndDtlsTransports = function () {
                            var t = this, r = new e.RTCIceTransport(null);
                            r.onicestatechange = function () {
                                t._updateIceConnectionState(), t._updateConnectionState()
                            };
                            var n = new e.RTCDtlsTransport(r);
                            return n.ondtlsstatechange = function () {
                                t._updateConnectionState()
                            }, n.onerror = function () {
                                Object.defineProperty(n, "state", {
                                    value: "failed",
                                    writable: !0
                                }), t._updateConnectionState()
                            }, {iceTransport: r, dtlsTransport: n}
                        }, l.prototype._disposeIceAndDtlsTransports = function (e) {
                            var t = this.transceivers[e].iceGatherer;
                            t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                            var r = this.transceivers[e].iceTransport;
                            r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                            var n = this.transceivers[e].dtlsTransport;
                            n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport)
                        }, l.prototype._transceive = function (e, r, i) {
                            var s = o(e.localCapabilities, e.remoteCapabilities);
                            r && e.rtpSender && (s.encodings = e.sendEncodingParameters, s.rtcp = {
                                cname: n.localCName,
                                compound: e.rtcpParameters.compound
                            }, e.recvEncodingParameters.length && (s.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(s)), i && e.rtpReceiver && s.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach(function (e) {
                                delete e.rtx
                            }), e.recvEncodingParameters.length ? s.encodings = e.recvEncodingParameters : s.encodings = [{}], s.rtcp = {compound: e.rtcpParameters.compound}, e.rtcpParameters.cname && (s.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (s.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(s))
                        }, l.prototype.setLocalDescription = function (e) {
                            var t, r, i = this;
                            if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
                            if (!s("setLocalDescription", e.type, i.signalingState) || i._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState));
                            if ("offer" === e.type) t = n.splitSections(e.sdp), r = t.shift(), t.forEach(function (e, t) {
                                var r = n.parseRtpParameters(e);
                                i.transceivers[t].localCapabilities = r
                            }), i.transceivers.forEach(function (e, t) {
                                i._gather(e.mid, t)
                            }); else if ("answer" === e.type) {
                                t = n.splitSections(i._remoteDescription.sdp), r = t.shift();
                                var a = n.matchPrefix(r, "a=ice-lite").length > 0;
                                t.forEach(function (e, t) {
                                    var s = i.transceivers[t], c = s.iceGatherer, d = s.iceTransport,
                                        l = s.dtlsTransport, h = s.localCapabilities, p = s.remoteCapabilities,
                                        u = n.isRejected(e) && 0 === n.matchPrefix(e, "a=bundle-only").length;
                                    if (!u && !s.rejected) {
                                        var g = n.getIceParameters(e, r), f = n.getDtlsParameters(e, r);
                                        a && (f.role = "server"), i.usingBundle && 0 !== t || (i._gather(s.mid, t), "new" === d.state && d.start(c, g, a ? "controlling" : "controlled"), "new" === l.state && l.start(f));
                                        var m = o(h, p);
                                        i._transceive(s, m.codecs.length > 0, !1)
                                    }
                                })
                            }
                            return i._localDescription = {
                                type: e.type,
                                sdp: e.sdp
                            }, "offer" === e.type ? i._updateSignalingState("have-local-offer") : i._updateSignalingState("stable"), Promise.resolve()
                        }, l.prototype.setRemoteDescription = function (i) {
                            var o = this;
                            if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + i.type + '"'));
                            if (!s("setRemoteDescription", i.type, o.signalingState) || o._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + i.type + " in state " + o.signalingState));
                            var l = {};
                            o.remoteStreams.forEach(function (e) {
                                l[e.id] = e
                            });
                            var h = [], p = n.splitSections(i.sdp), u = p.shift(),
                                g = n.matchPrefix(u, "a=ice-lite").length > 0,
                                f = n.matchPrefix(u, "a=group:BUNDLE ").length > 0;
                            o.usingBundle = f;
                            var m = n.matchPrefix(u, "a=ice-options:")[0];
                            return o.canTrickleIceCandidates = !!m && m.substr(14).split(" ").indexOf("trickle") >= 0, p.forEach(function (s, c) {
                                var d = n.splitLines(s), p = n.getKind(s),
                                    m = n.isRejected(s) && 0 === n.matchPrefix(s, "a=bundle-only").length,
                                    S = d[0].substr(2).split(" ")[2], v = n.getDirection(s, u), C = n.parseMsid(s),
                                    b = n.getMid(s) || n.generateIdentifier();
                                if (m || "application" === p && ("DTLS/SCTP" === S || "UDP/DTLS/SCTP" === S)) o.transceivers[c] = {
                                    mid: b,
                                    kind: p,
                                    protocol: S,
                                    rejected: !0
                                }; else {
                                    var y, T, E, R, _, L, M, P, U;
                                    !m && o.transceivers[c] && o.transceivers[c].rejected && (o.transceivers[c] = o._createTransceiver(p, !0));
                                    var w, O, N = n.parseRtpParameters(s);
                                    m || (w = n.getIceParameters(s, u), (O = n.getDtlsParameters(s, u)).role = "client"), M = n.parseRtpEncodingParameters(s);
                                    var D = n.parseRtcpParameters(s),
                                        I = n.matchPrefix(s, "a=end-of-candidates", u).length > 0,
                                        z = n.matchPrefix(s, "a=candidate:").map(function (e) {
                                            return n.parseCandidate(e)
                                        }).filter(function (e) {
                                            return 1 === e.component
                                        });
                                    if (("offer" === i.type || "answer" === i.type) && !m && f && c > 0 && o.transceivers[c] && (o._disposeIceAndDtlsTransports(c), o.transceivers[c].iceGatherer = o.transceivers[0].iceGatherer, o.transceivers[c].iceTransport = o.transceivers[0].iceTransport, o.transceivers[c].dtlsTransport = o.transceivers[0].dtlsTransport, o.transceivers[c].rtpSender && o.transceivers[c].rtpSender.setTransport(o.transceivers[0].dtlsTransport), o.transceivers[c].rtpReceiver && o.transceivers[c].rtpReceiver.setTransport(o.transceivers[0].dtlsTransport)), "offer" !== i.type || m) "answer" !== i.type || m || (y = o.transceivers[c], T = y.iceGatherer, E = y.iceTransport, R = y.dtlsTransport, _ = y.rtpReceiver, L = y.sendEncodingParameters, P = y.localCapabilities, o.transceivers[c].recvEncodingParameters = M, o.transceivers[c].remoteCapabilities = N, o.transceivers[c].rtcpParameters = D, z.length && "new" === E.state && (!g && !I || f && 0 !== c ? z.forEach(function (e) {
                                        a(y.iceTransport, e)
                                    }) : E.setRemoteCandidates(z)), f && 0 !== c || ("new" === E.state && E.start(T, w, "controlling"), "new" === R.state && R.start(O)), o._transceive(y, "sendrecv" === v || "recvonly" === v, "sendrecv" === v || "sendonly" === v), !_ || "sendrecv" !== v && "sendonly" !== v ? delete y.rtpReceiver : (U = _.track, C ? (l[C.stream] || (l[C.stream] = new e.MediaStream), r(U, l[C.stream]), h.push([U, _, l[C.stream]])) : (l.default || (l.default = new e.MediaStream), r(U, l.default), h.push([U, _, l.default])))); else {
                                        (y = o.transceivers[c] || o._createTransceiver(p)).mid = b, y.iceGatherer || (y.iceGatherer = o._createIceGatherer(c, f)), z.length && "new" === y.iceTransport.state && (!I || f && 0 !== c ? z.forEach(function (e) {
                                            a(y.iceTransport, e)
                                        }) : y.iceTransport.setRemoteCandidates(z)), P = e.RTCRtpReceiver.getCapabilities(p), t < 15019 && (P.codecs = P.codecs.filter(function (e) {
                                            return "rtx" !== e.name
                                        })), L = y.sendEncodingParameters || [{ssrc: 1001 * (2 * c + 2)}];
                                        var A, k = !1;
                                        "sendrecv" === v || "sendonly" === v ? (k = !y.rtpReceiver, _ = y.rtpReceiver || new e.RTCRtpReceiver(y.dtlsTransport, p), k && (U = _.track, C && "-" === C.stream || (C ? (l[C.stream] || (l[C.stream] = new e.MediaStream, Object.defineProperty(l[C.stream], "id", {
                                            get: function () {
                                                return C.stream
                                            }
                                        })), Object.defineProperty(U, "id", {
                                            get: function () {
                                                return C.track
                                            }
                                        }), A = l[C.stream]) : (l.default || (l.default = new e.MediaStream), A = l.default)), A && (r(U, A), y.associatedRemoteMediaStreams.push(A)), h.push([U, _, A]))) : y.rtpReceiver && y.rtpReceiver.track && (y.associatedRemoteMediaStreams.forEach(function (t) {
                                            var r, n, i = t.getTracks().find(function (e) {
                                                return e.id === y.rtpReceiver.track.id
                                            });
                                            i && (r = i, (n = t).removeTrack(r), n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {track: r})))
                                        }), y.associatedRemoteMediaStreams = []), y.localCapabilities = P, y.remoteCapabilities = N, y.rtpReceiver = _, y.rtcpParameters = D, y.sendEncodingParameters = L, y.recvEncodingParameters = M, o._transceive(o.transceivers[c], !1, k)
                                    }
                                }
                            }), void 0 === o._dtlsRole && (o._dtlsRole = "offer" === i.type ? "active" : "passive"), o._remoteDescription = {
                                type: i.type,
                                sdp: i.sdp
                            }, "offer" === i.type ? o._updateSignalingState("have-remote-offer") : o._updateSignalingState("stable"), Object.keys(l).forEach(function (t) {
                                var r = l[t];
                                if (r.getTracks().length) {
                                    if (-1 === o.remoteStreams.indexOf(r)) {
                                        o.remoteStreams.push(r);
                                        var n = new Event("addstream");
                                        n.stream = r, e.setTimeout(function () {
                                            o._dispatchEvent("addstream", n)
                                        })
                                    }
                                    h.forEach(function (e) {
                                        var t = e[0], n = e[1];
                                        r.id === e[2].id && d(o, t, n, [r])
                                    })
                                }
                            }), h.forEach(function (e) {
                                e[2] || d(o, e[0], e[1], [])
                            }), e.setTimeout(function () {
                                o && o.transceivers && o.transceivers.forEach(function (e) {
                                    e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
                                })
                            }, 4e3), Promise.resolve()
                        }, l.prototype.close = function () {
                            this.transceivers.forEach(function (e) {
                                e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
                            }), this._isClosed = !0, this._updateSignalingState("closed")
                        }, l.prototype._updateSignalingState = function (e) {
                            this.signalingState = e;
                            var t = new Event("signalingstatechange");
                            this._dispatchEvent("signalingstatechange", t)
                        }, l.prototype._maybeFireNegotiationNeeded = function () {
                            var t = this;
                            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function () {
                                if (t.needNegotiation) {
                                    t.needNegotiation = !1;
                                    var e = new Event("negotiationneeded");
                                    t._dispatchEvent("negotiationneeded", e)
                                }
                            }, 0))
                        }, l.prototype._updateIceConnectionState = function () {
                            var e, t = {
                                new: 0,
                                closed: 0,
                                checking: 0,
                                connected: 0,
                                completed: 0,
                                disconnected: 0,
                                failed: 0
                            };
                            if (this.transceivers.forEach(function (e) {
                                t[e.iceTransport.state]++
                            }), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
                                this.iceConnectionState = e;
                                var r = new Event("iceconnectionstatechange");
                                this._dispatchEvent("iceconnectionstatechange", r)
                            }
                        }, l.prototype._updateConnectionState = function () {
                            var e, t = {
                                new: 0,
                                closed: 0,
                                connecting: 0,
                                connected: 0,
                                completed: 0,
                                disconnected: 0,
                                failed: 0
                            };
                            if (this.transceivers.forEach(function (e) {
                                t[e.iceTransport.state]++, t[e.dtlsTransport.state]++
                            }), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
                                this.connectionState = e;
                                var r = new Event("connectionstatechange");
                                this._dispatchEvent("connectionstatechange", r)
                            }
                        }, l.prototype.createOffer = function () {
                            var r = this;
                            if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
                            var o = r.transceivers.filter(function (e) {
                                return "audio" === e.kind
                            }).length, s = r.transceivers.filter(function (e) {
                                return "video" === e.kind
                            }).length, a = arguments[0];
                            if (a) {
                                if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                                void 0 !== a.offerToReceiveAudio && (o = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio), void 0 !== a.offerToReceiveVideo && (s = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo)
                            }
                            for (r.transceivers.forEach(function (e) {
                                "audio" === e.kind ? --o < 0 && (e.wantReceive = !1) : "video" === e.kind && --s < 0 && (e.wantReceive = !1)
                            }); o > 0 || s > 0;) o > 0 && (r._createTransceiver("audio"), o--), s > 0 && (r._createTransceiver("video"), s--);
                            var d = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                            r.transceivers.forEach(function (i, o) {
                                var s = i.track, a = i.kind, c = i.mid || n.generateIdentifier();
                                i.mid = c, i.iceGatherer || (i.iceGatherer = r._createIceGatherer(o, r.usingBundle));
                                var d = e.RTCRtpSender.getCapabilities(a);
                                t < 15019 && (d.codecs = d.codecs.filter(function (e) {
                                    return "rtx" !== e.name
                                })), d.codecs.forEach(function (e) {
                                    "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), i.remoteCapabilities && i.remoteCapabilities.codecs && i.remoteCapabilities.codecs.forEach(function (t) {
                                        e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
                                    })
                                }), d.headerExtensions.forEach(function (e) {
                                    var t = i.remoteCapabilities && i.remoteCapabilities.headerExtensions || [];
                                    t.forEach(function (t) {
                                        e.uri === t.uri && (e.id = t.id)
                                    })
                                });
                                var l = i.sendEncodingParameters || [{ssrc: 1001 * (2 * o + 1)}];
                                s && t >= 15019 && "video" === a && !l[0].rtx && (l[0].rtx = {ssrc: l[0].ssrc + 1}), i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, a)), i.localCapabilities = d, i.sendEncodingParameters = l
                            }), "max-compat" !== r._config.bundlePolicy && (d += "a=group:BUNDLE " + r.transceivers.map(function (e) {
                                return e.mid
                            }).join(" ") + "\r\n"), d += "a=ice-options:trickle\r\n", r.transceivers.forEach(function (e, t) {
                                d += i(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), d += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                                    e.component = 1, d += "a=" + n.writeCandidate(e) + "\r\n"
                                }), "completed" === e.iceGatherer.state && (d += "a=end-of-candidates\r\n"))
                            });
                            var l = new e.RTCSessionDescription({type: "offer", sdp: d});
                            return Promise.resolve(l)
                        }, l.prototype.createAnswer = function () {
                            var r = this;
                            if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
                            if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState));
                            var s = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                            r.usingBundle && (s += "a=group:BUNDLE " + r.transceivers.map(function (e) {
                                return e.mid
                            }).join(" ") + "\r\n");
                            var a = n.getMediaSections(r._remoteDescription.sdp).length;
                            r.transceivers.forEach(function (e, n) {
                                if (!(n + 1 > a)) {
                                    if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? s += "m=application 0 DTLS/SCTP 5000\r\n" : s += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? s += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (s += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (s += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                                    var c;
                                    e.stream && ("audio" === e.kind ? c = e.stream.getAudioTracks()[0] : "video" === e.kind && (c = e.stream.getVideoTracks()[0]), c && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {ssrc: e.sendEncodingParameters[0].ssrc + 1}));
                                    var d = o(e.localCapabilities, e.remoteCapabilities),
                                        l = d.codecs.filter(function (e) {
                                            return "rtx" === e.name.toLowerCase()
                                        }).length;
                                    !l && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, s += i(e, d, "answer", e.stream, r._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (s += "a=rtcp-rsize\r\n")
                                }
                            });
                            var d = new e.RTCSessionDescription({type: "answer", sdp: s});
                            return Promise.resolve(d)
                        }, l.prototype.addIceCandidate = function (e) {
                            var t, r = this;
                            return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function (i, o) {
                                if (!r._remoteDescription) return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                                if (e && "" !== e.candidate) {
                                    var s = e.sdpMLineIndex;
                                    if (e.sdpMid) for (var d = 0; d < r.transceivers.length; d++) if (r.transceivers[d].mid === e.sdpMid) {
                                        s = d;
                                        break
                                    }
                                    var l = r.transceivers[s];
                                    if (!l) return o(c("OperationError", "Can not add ICE candidate"));
                                    if (l.rejected) return i();
                                    var h = Object.keys(e.candidate).length > 0 ? n.parseCandidate(e.candidate) : {};
                                    if ("tcp" === h.protocol && (0 === h.port || 9 === h.port)) return i();
                                    if (h.component && 1 !== h.component) return i();
                                    if ((0 === s || s > 0 && l.iceTransport !== r.transceivers[0].iceTransport) && !a(l.iceTransport, h)) return o(c("OperationError", "Can not add ICE candidate"));
                                    var p = e.candidate.trim();
                                    0 === p.indexOf("a=") && (p = p.substr(2)), (t = n.getMediaSections(r._remoteDescription.sdp))[s] += "a=" + (h.type ? p : "end-of-candidates") + "\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("")
                                } else for (var u = 0; u < r.transceivers.length && (r.transceivers[u].rejected || (r.transceivers[u].iceTransport.addRemoteCandidate({}), (t = n.getMediaSections(r._remoteDescription.sdp))[u] += "a=end-of-candidates\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join(""), !r.usingBundle)); u++) ;
                                i()
                            })
                        }, l.prototype.getStats = function (t) {
                            if (t && t instanceof e.MediaStreamTrack) {
                                var r = null;
                                if (this.transceivers.forEach(function (e) {
                                    e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver)
                                }), !r) throw c("InvalidAccessError", "Invalid selector.");
                                return r.getStats()
                            }
                            var n = [];
                            return this.transceivers.forEach(function (e) {
                                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (t) {
                                    e[t] && n.push(e[t].getStats())
                                })
                            }), Promise.all(n).then(function (e) {
                                var t = new Map;
                                return e.forEach(function (e) {
                                    e.forEach(function (e) {
                                        t.set(e.id, e)
                                    })
                                }), t
                            })
                        }, ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function (t) {
                            var r = e[t];
                            if (r && r.prototype && r.prototype.getStats) {
                                var n = r.prototype.getStats;
                                r.prototype.getStats = function () {
                                    return n.apply(this).then(function (e) {
                                        var t = new Map;
                                        return Object.keys(e).forEach(function (r) {
                                            var n;
                                            e[r].type = {
                                                inboundrtp: "inbound-rtp",
                                                outboundrtp: "outbound-rtp",
                                                candidatepair: "candidate-pair",
                                                localcandidate: "local-candidate",
                                                remotecandidate: "remote-candidate"
                                            }[(n = e[r]).type] || n.type, t.set(r, e[r])
                                        }), t
                                    })
                                }
                            }
                        });
                        var h = ["createOffer", "createAnswer"];
                        return h.forEach(function (e) {
                            var t = l.prototype[e];
                            l.prototype[e] = function () {
                                var e = arguments;
                                return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then(function (t) {
                                    "function" == typeof e[0] && e[0].apply(null, [t])
                                }, function (t) {
                                    "function" == typeof e[1] && e[1].apply(null, [t])
                                }) : t.apply(this, arguments)
                            }
                        }), (h = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (e) {
                            var t = l.prototype[e];
                            l.prototype[e] = function () {
                                var e = arguments;
                                return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then(function () {
                                    "function" == typeof e[1] && e[1].apply(null)
                                }, function (t) {
                                    "function" == typeof e[2] && e[2].apply(null, [t])
                                }) : t.apply(this, arguments)
                            }
                        }), ["getStats"].forEach(function (e) {
                            var t = l.prototype[e];
                            l.prototype[e] = function () {
                                var e = arguments;
                                return "function" == typeof e[1] ? t.apply(this, arguments).then(function () {
                                    "function" == typeof e[1] && e[1].apply(null)
                                }) : t.apply(this, arguments)
                            }
                        }), l
                    }
                }, {sdp: 2}],
                2: [function (e, t, r) {
                    "use strict";
                    var n = {
                        generateIdentifier: function () {
                            return Math.random().toString(36).substr(2, 10)
                        }
                    };
                    n.localCName = n.generateIdentifier(), n.splitLines = function (e) {
                        return e.trim().split("\n").map(function (e) {
                            return e.trim()
                        })
                    }, n.splitSections = function (e) {
                        var t = e.split("\nm=");
                        return t.map(function (e, t) {
                            return (t > 0 ? "m=" + e : e).trim() + "\r\n"
                        })
                    }, n.getDescription = function (e) {
                        var t = n.splitSections(e);
                        return t && t[0]
                    }, n.getMediaSections = function (e) {
                        var t = n.splitSections(e);
                        return t.shift(), t
                    }, n.matchPrefix = function (e, t) {
                        return n.splitLines(e).filter(function (e) {
                            return 0 === e.indexOf(t)
                        })
                    }, n.parseCandidate = function (e) {
                        for (var t, r = {
                            foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                            component: parseInt(t[1], 10),
                            protocol: t[2].toLowerCase(),
                            priority: parseInt(t[3], 10),
                            ip: t[4],
                            port: parseInt(t[5], 10),
                            type: t[7]
                        }, n = 8; n < t.length; n += 2) switch (t[n]) {
                            case"raddr":
                                r.relatedAddress = t[n + 1];
                                break;
                            case"rport":
                                r.relatedPort = parseInt(t[n + 1], 10);
                                break;
                            case"tcptype":
                                r.tcpType = t[n + 1];
                                break;
                            case"ufrag":
                                r.ufrag = t[n + 1], r.usernameFragment = t[n + 1];
                                break;
                            default:
                                r[t[n]] = t[n + 1]
                        }
                        return r
                    }, n.writeCandidate = function (e) {
                        var t = [];
                        t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
                        var r = e.type;
                        return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
                    }, n.parseIceOptions = function (e) {
                        return e.substr(14).split(" ")
                    }, n.parseRtpMap = function (e) {
                        var t = e.substr(9).split(" "), r = {payloadType: parseInt(t.shift(), 10)};
                        return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
                    }, n.writeRtpMap = function (e) {
                        var t = e.payloadType;
                        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                        var r = e.channels || e.numChannels || 1;
                        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
                    }, n.parseExtmap = function (e) {
                        var t = e.substr(9).split(" ");
                        return {
                            id: parseInt(t[0], 10),
                            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                            uri: t[1]
                        }
                    }, n.writeExtmap = function (e) {
                        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
                    }, n.parseFmtp = function (e) {
                        for (var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++) t = n[i].trim().split("="), r[t[0].trim()] = t[1];
                        return r
                    }, n.writeFmtp = function (e) {
                        var t = "", r = e.payloadType;
                        if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                            var n = [];
                            Object.keys(e.parameters).forEach(function (t) {
                                e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t)
                            }), t += "a=fmtp:" + r + " " + n.join(";") + "\r\n"
                        }
                        return t
                    }, n.parseRtcpFb = function (e) {
                        var t = e.substr(e.indexOf(" ") + 1).split(" ");
                        return {type: t.shift(), parameter: t.join(" ")}
                    }, n.writeRtcpFb = function (e) {
                        var t = "", r = e.payloadType;
                        return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function (e) {
                            t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
                        }), t
                    }, n.parseSsrcMedia = function (e) {
                        var t = e.indexOf(" "), r = {ssrc: parseInt(e.substr(7, t - 7), 10)}, n = e.indexOf(":", t);
                        return n > -1 ? (r.attribute = e.substr(t + 1, n - t - 1), r.value = e.substr(n + 1)) : r.attribute = e.substr(t + 1), r
                    }, n.getMid = function (e) {
                        var t = n.matchPrefix(e, "a=mid:")[0];
                        if (t) return t.substr(6)
                    }, n.parseFingerprint = function (e) {
                        var t = e.substr(14).split(" ");
                        return {algorithm: t[0].toLowerCase(), value: t[1]}
                    }, n.getDtlsParameters = function (e, t) {
                        var r = n.matchPrefix(e + t, "a=fingerprint:");
                        return {role: "auto", fingerprints: r.map(n.parseFingerprint)}
                    }, n.writeDtlsParameters = function (e, t) {
                        var r = "a=setup:" + t + "\r\n";
                        return e.fingerprints.forEach(function (e) {
                            r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
                        }), r
                    }, n.getIceParameters = function (e, t) {
                        var r = n.splitLines(e), i = {
                            usernameFragment: (r = r.concat(n.splitLines(t))).filter(function (e) {
                                return 0 === e.indexOf("a=ice-ufrag:")
                            })[0].substr(12), password: r.filter(function (e) {
                                return 0 === e.indexOf("a=ice-pwd:")
                            })[0].substr(10)
                        };
                        return i
                    }, n.writeIceParameters = function (e) {
                        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
                    }, n.parseRtpParameters = function (e) {
                        for (var t = {
                            codecs: [],
                            headerExtensions: [],
                            fecMechanisms: [],
                            rtcp: []
                        }, r = n.splitLines(e), i = r[0].split(" "), o = 3; o < i.length; o++) {
                            var s = i[o], a = n.matchPrefix(e, "a=rtpmap:" + s + " ")[0];
                            if (a) {
                                var c = n.parseRtpMap(a), d = n.matchPrefix(e, "a=fmtp:" + s + " ");
                                switch (c.parameters = d.length ? n.parseFmtp(d[0]) : {}, c.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + s + " ").map(n.parseRtcpFb), t.codecs.push(c), c.name.toUpperCase()) {
                                    case"RED":
                                    case"ULPFEC":
                                        t.fecMechanisms.push(c.name.toUpperCase())
                                }
                            }
                        }
                        return n.matchPrefix(e, "a=extmap:").forEach(function (e) {
                            t.headerExtensions.push(n.parseExtmap(e))
                        }), t
                    }, n.writeRtpDescription = function (e, t) {
                        var r = "";
                        r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map(function (e) {
                            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
                        }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function (e) {
                            r += n.writeRtpMap(e), r += n.writeFmtp(e), r += n.writeRtcpFb(e)
                        });
                        var i = 0;
                        return t.codecs.forEach(function (e) {
                            e.maxptime > i && (i = e.maxptime)
                        }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function (e) {
                            r += n.writeExtmap(e)
                        }), r
                    }, n.parseRtpEncodingParameters = function (e) {
                        var t, r = [], i = n.parseRtpParameters(e), o = -1 !== i.fecMechanisms.indexOf("RED"),
                            s = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
                            a = n.matchPrefix(e, "a=ssrc:").map(function (e) {
                                return n.parseSsrcMedia(e)
                            }).filter(function (e) {
                                return "cname" === e.attribute
                            }), c = a.length > 0 && a[0].ssrc,
                            d = n.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                                var t = e.substr(17).split(" ");
                                return t.map(function (e) {
                                    return parseInt(e, 10)
                                })
                            });
                        d.length > 0 && d[0].length > 1 && d[0][0] === c && (t = d[0][1]), i.codecs.forEach(function (e) {
                            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                                var n = {ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10)};
                                c && t && (n.rtx = {ssrc: t}), r.push(n), o && ((n = JSON.parse(JSON.stringify(n))).fec = {
                                    ssrc: t,
                                    mechanism: s ? "red+ulpfec" : "red"
                                }, r.push(n))
                            }
                        }), 0 === r.length && c && r.push({ssrc: c});
                        var l = n.matchPrefix(e, "b=");
                        return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") ? 1e3 * parseInt(l[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function (e) {
                            e.maxBitrate = l
                        })), r
                    }, n.parseRtcpParameters = function (e) {
                        var t = {}, r = n.matchPrefix(e, "a=ssrc:").map(function (e) {
                            return n.parseSsrcMedia(e)
                        }).filter(function (e) {
                            return "cname" === e.attribute
                        })[0];
                        r && (t.cname = r.value, t.ssrc = r.ssrc);
                        var i = n.matchPrefix(e, "a=rtcp-rsize");
                        t.reducedSize = i.length > 0, t.compound = 0 === i.length;
                        var o = n.matchPrefix(e, "a=rtcp-mux");
                        return t.mux = o.length > 0, t
                    }, n.parseMsid = function (e) {
                        var t, r = n.matchPrefix(e, "a=msid:");
                        if (1 === r.length) return {stream: (t = r[0].substr(7).split(" "))[0], track: t[1]};
                        var i = n.matchPrefix(e, "a=ssrc:").map(function (e) {
                            return n.parseSsrcMedia(e)
                        }).filter(function (e) {
                            return "msid" === e.attribute
                        });
                        return i.length > 0 ? {stream: (t = i[0].value.split(" "))[0], track: t[1]} : void 0
                    }, n.generateSessionId = function () {
                        return Math.random().toString().substr(2, 21)
                    }, n.writeSessionBoilerplate = function (e, t) {
                        var r = void 0 !== t ? t : 2;
                        return "v=0\r\no=thisisadapterortc " + (e || n.generateSessionId()) + " " + r + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                    }, n.writeMediaSection = function (e, t, r, i) {
                        var o = n.writeRtpDescription(e.kind, t);
                        if (o += n.writeIceParameters(e.iceGatherer.getLocalParameters()), o += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), o += "a=mid:" + e.mid + "\r\n", e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
                            var s = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                            o += "a=" + s, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                        }
                        return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), o
                    }, n.getDirection = function (e, t) {
                        for (var r = n.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                            case"a=sendrecv":
                            case"a=sendonly":
                            case"a=recvonly":
                            case"a=inactive":
                                return r[i].substr(2)
                        }
                        return t ? n.getDirection(t) : "sendrecv"
                    }, n.getKind = function (e) {
                        var t = n.splitLines(e), r = t[0].split(" ");
                        return r[0].substr(2)
                    }, n.isRejected = function (e) {
                        return "0" === e.split(" ", 2)[1]
                    }, n.parseMLine = function (e) {
                        var t = n.splitLines(e), r = t[0].substr(2).split(" ");
                        return {kind: r[0], port: parseInt(r[1], 10), protocol: r[2], fmt: r.slice(3).join(" ")}
                    }, n.parseOLine = function (e) {
                        var t = n.matchPrefix(e, "o=")[0], r = t.substr(2).split(" ");
                        return {
                            username: r[0],
                            sessionId: r[1],
                            sessionVersion: parseInt(r[2], 10),
                            netType: r[3],
                            addressType: r[4],
                            address: r[5]
                        }
                    }, "object" == typeof t && (t.exports = n)
                }, {}],
                3: [function (e, r, n) {
                    (function (t) {
                        "use strict";
                        var n = e("./adapter_factory.js");
                        r.exports = n({window: t.window})
                    }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {"./adapter_factory.js": 4}],
                4: [function (e, t, r) {
                    "use strict";
                    var n = e("./utils");
                    t.exports = function (t, r) {
                        var i = t && t.window, o = {shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0};
                        for (var s in r) hasOwnProperty.call(r, s) && (o[s] = r[s]);
                        var a = n.log, c = n.detectBrowser(i), d = e("./chrome/chrome_shim") || null,
                            l = e("./edge/edge_shim") || null, h = e("./firefox/firefox_shim") || null,
                            p = e("./safari/safari_shim") || null, u = e("./common_shim") || null, g = {
                                browserDetails: c,
                                commonShim: u,
                                extractVersion: n.extractVersion,
                                disableLog: n.disableLog,
                                disableWarnings: n.disableWarnings
                            };
                        switch (c.browser) {
                            case"chrome":
                                if (!d || !d.shimPeerConnection || !o.shimChrome) return a("Chrome shim is not included in this adapter release."), g;
                                a("adapter.js shimming chrome."), g.browserShim = d, u.shimCreateObjectURL(i), d.shimGetUserMedia(i), d.shimMediaStream(i), d.shimSourceObject(i), d.shimPeerConnection(i), d.shimOnTrack(i), d.shimAddTrackRemoveTrack(i), d.shimGetSendersWithDtmf(i), d.shimSenderReceiverGetStats(i), d.fixNegotiationNeeded(i), u.shimRTCIceCandidate(i), u.shimMaxMessageSize(i), u.shimSendThrowTypeError(i);
                                break;
                            case"firefox":
                                if (!h || !h.shimPeerConnection || !o.shimFirefox) return a("Firefox shim is not included in this adapter release."), g;
                                a("adapter.js shimming firefox."), g.browserShim = h, u.shimCreateObjectURL(i), h.shimGetUserMedia(i), h.shimSourceObject(i), h.shimPeerConnection(i), h.shimOnTrack(i), h.shimRemoveStream(i), h.shimSenderGetStats(i), h.shimReceiverGetStats(i), h.shimRTCDataChannel(i), u.shimRTCIceCandidate(i), u.shimMaxMessageSize(i), u.shimSendThrowTypeError(i);
                                break;
                            case"edge":
                                if (!l || !l.shimPeerConnection || !o.shimEdge) return a("MS edge shim is not included in this adapter release."), g;
                                a("adapter.js shimming edge."), g.browserShim = l, u.shimCreateObjectURL(i), l.shimGetUserMedia(i), l.shimPeerConnection(i), l.shimReplaceTrack(i), u.shimMaxMessageSize(i), u.shimSendThrowTypeError(i);
                                break;
                            case"safari":
                                if (!p || !o.shimSafari) return a("Safari shim is not included in this adapter release."), g;
                                a("adapter.js shimming safari."), g.browserShim = p, u.shimCreateObjectURL(i), p.shimRTCIceServerUrls(i), p.shimCallbacksAPI(i), p.shimLocalStreamsAPI(i), p.shimRemoteStreamsAPI(i), p.shimTrackEventTransceiver(i), p.shimGetUserMedia(i), p.shimCreateOfferLegacy(i), u.shimRTCIceCandidate(i), u.shimMaxMessageSize(i), u.shimSendThrowTypeError(i);
                                break;
                            default:
                                a("Unsupported browser!")
                        }
                        return g
                    }
                }, {
                    "./chrome/chrome_shim": 5,
                    "./common_shim": 7,
                    "./edge/edge_shim": 8,
                    "./firefox/firefox_shim": 11,
                    "./safari/safari_shim": 13,
                    "./utils": 14
                }],
                5: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils.js"), i = n.log;

                    function o(e, t, r) {
                        var n = r ? "outbound-rtp" : "inbound-rtp", i = new Map;
                        if (null === t) return i;
                        var o = [];
                        return e.forEach(function (e) {
                            "track" === e.type && e.trackIdentifier === t.id && o.push(e)
                        }), o.forEach(function (t) {
                            e.forEach(function (r) {
                                r.type === n && r.trackId === t.id && function e(t, r, n) {
                                    r && !n.has(r.id) && (n.set(r.id, r), Object.keys(r).forEach(function (i) {
                                        i.endsWith("Id") ? e(t, t.get(r[i]), n) : i.endsWith("Ids") && r[i].forEach(function (r) {
                                            e(t, t.get(r), n)
                                        })
                                    }))
                                }(e, r, i)
                            })
                        }), i
                    }

                    t.exports = {
                        shimGetUserMedia: e("./getusermedia"), shimMediaStream: function (e) {
                            e.MediaStream = e.MediaStream || e.webkitMediaStream
                        }, shimOnTrack: function (e) {
                            if ("object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) "RTCRtpTransceiver" in e || n.wrapPeerConnectionEvent(e, "track", function (e) {
                                return e.transceiver || (e.transceiver = {receiver: e.receiver}), e
                            }); else {
                                Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                                    get: function () {
                                        return this._ontrack
                                    }, set: function (e) {
                                        this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                                    }, enumerable: !0, configurable: !0
                                });
                                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                                e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                    var r = this;
                                    return r._ontrackpoly || (r._ontrackpoly = function (t) {
                                        t.stream.addEventListener("addtrack", function (n) {
                                            var i;
                                            i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find(function (e) {
                                                return e.track && e.track.id === n.track.id
                                            }) : {track: n.track};
                                            var o = new Event("track");
                                            o.track = n.track, o.receiver = i, o.transceiver = {receiver: i}, o.streams = [t.stream], r.dispatchEvent(o)
                                        }), t.stream.getTracks().forEach(function (n) {
                                            var i;
                                            i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find(function (e) {
                                                return e.track && e.track.id === n.id
                                            }) : {track: n};
                                            var o = new Event("track");
                                            o.track = n, o.receiver = i, o.transceiver = {receiver: i}, o.streams = [t.stream], r.dispatchEvent(o)
                                        })
                                    }, r.addEventListener("addstream", r._ontrackpoly)), t.apply(r, arguments)
                                }
                            }
                        }, shimGetSendersWithDtmf: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                                var t = function (e, t) {
                                    return {
                                        track: t, get dtmf() {
                                            return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                                        }, _pc: e
                                    }
                                };
                                if (!e.RTCPeerConnection.prototype.getSenders) {
                                    e.RTCPeerConnection.prototype.getSenders = function () {
                                        return this._senders = this._senders || [], this._senders.slice()
                                    };
                                    var r = e.RTCPeerConnection.prototype.addTrack;
                                    e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                                        var i = r.apply(this, arguments);
                                        return i || (i = t(this, e), this._senders.push(i)), i
                                    };
                                    var n = e.RTCPeerConnection.prototype.removeTrack;
                                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                        n.apply(this, arguments);
                                        var t = this._senders.indexOf(e);
                                        -1 !== t && this._senders.splice(t, 1)
                                    }
                                }
                                var i = e.RTCPeerConnection.prototype.addStream;
                                e.RTCPeerConnection.prototype.addStream = function (e) {
                                    var r = this;
                                    r._senders = r._senders || [], i.apply(r, [e]), e.getTracks().forEach(function (e) {
                                        r._senders.push(t(r, e))
                                    })
                                };
                                var o = e.RTCPeerConnection.prototype.removeStream;
                                e.RTCPeerConnection.prototype.removeStream = function (e) {
                                    var t = this;
                                    t._senders = t._senders || [], o.apply(t, [e]), e.getTracks().forEach(function (e) {
                                        var r = t._senders.find(function (t) {
                                            return t.track === e
                                        });
                                        r && t._senders.splice(t._senders.indexOf(r), 1)
                                    })
                                }
                            } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                                var s = e.RTCPeerConnection.prototype.getSenders;
                                e.RTCPeerConnection.prototype.getSenders = function () {
                                    var e = this, t = s.apply(e, []);
                                    return t.forEach(function (t) {
                                        t._pc = e
                                    }), t
                                }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                                    get: function () {
                                        return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                                    }
                                })
                            }
                        }, shimSenderReceiverGetStats: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) {
                                if (!("getStats" in e.RTCRtpSender.prototype)) {
                                    var t = e.RTCPeerConnection.prototype.getSenders;
                                    t && (e.RTCPeerConnection.prototype.getSenders = function () {
                                        var e = this, r = t.apply(e, []);
                                        return r.forEach(function (t) {
                                            t._pc = e
                                        }), r
                                    });
                                    var r = e.RTCPeerConnection.prototype.addTrack;
                                    r && (e.RTCPeerConnection.prototype.addTrack = function () {
                                        var e = r.apply(this, arguments);
                                        return e._pc = this, e
                                    }), e.RTCRtpSender.prototype.getStats = function () {
                                        var e = this;
                                        return this._pc.getStats().then(function (t) {
                                            return o(t, e.track, !0)
                                        })
                                    }
                                }
                                if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                                    var i = e.RTCPeerConnection.prototype.getReceivers;
                                    i && (e.RTCPeerConnection.prototype.getReceivers = function () {
                                        var e = this, t = i.apply(e, []);
                                        return t.forEach(function (t) {
                                            t._pc = e
                                        }), t
                                    }), n.wrapPeerConnectionEvent(e, "track", function (e) {
                                        return e.receiver._pc = e.srcElement, e
                                    }), e.RTCRtpReceiver.prototype.getStats = function () {
                                        var e = this;
                                        return this._pc.getStats().then(function (t) {
                                            return o(t, e.track, !1)
                                        })
                                    }
                                }
                                if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
                                    var s = e.RTCPeerConnection.prototype.getStats;
                                    e.RTCPeerConnection.prototype.getStats = function () {
                                        if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                            var t, r, n, i = arguments[0];
                                            return this.getSenders().forEach(function (e) {
                                                e.track === i && (t ? n = !0 : t = e)
                                            }), this.getReceivers().forEach(function (e) {
                                                return e.track === i && (r ? n = !0 : r = e), e.track === i
                                            }), n || t && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t ? t.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                                        }
                                        return s.apply(this, arguments)
                                    }
                                }
                            }
                        }, shimSourceObject: function (e) {
                            var t = e && e.URL;
                            "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
                                get: function () {
                                    return this._srcObject
                                }, set: function (e) {
                                    var r = this;
                                    this._srcObject = e, this.src && t.revokeObjectURL(this.src), e ? (this.src = t.createObjectURL(e), e.addEventListener("addtrack", function () {
                                        r.src && t.revokeObjectURL(r.src), r.src = t.createObjectURL(e)
                                    }), e.addEventListener("removetrack", function () {
                                        r.src && t.revokeObjectURL(r.src), r.src = t.createObjectURL(e)
                                    })) : this.src = ""
                                }
                            }))
                        }, shimAddTrackRemoveTrackWithNative: function (e) {
                            e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                var e = this;
                                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function (t) {
                                    return e._shimmedLocalStreams[t][0]
                                })
                            };
                            var t = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                                if (!r) return t.apply(this, arguments);
                                this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                                var n = t.apply(this, arguments);
                                return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n) : this._shimmedLocalStreams[r.id] = [r, n], n
                            };
                            var r = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function (e) {
                                var t = this;
                                this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function (e) {
                                    var r = t.getSenders().find(function (t) {
                                        return t.track === e
                                    });
                                    if (r) throw new DOMException("Track already exists.", "InvalidAccessError")
                                });
                                var n = t.getSenders();
                                r.apply(this, arguments);
                                var i = t.getSenders().filter(function (e) {
                                    return -1 === n.indexOf(e)
                                });
                                this._shimmedLocalStreams[e.id] = [e].concat(i)
                            };
                            var n = e.RTCPeerConnection.prototype.removeStream;
                            e.RTCPeerConnection.prototype.removeStream = function (e) {
                                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], n.apply(this, arguments)
                            };
                            var i = e.RTCPeerConnection.prototype.removeTrack;
                            e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                var t = this;
                                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                                    var n = t._shimmedLocalStreams[r].indexOf(e);
                                    -1 !== n && t._shimmedLocalStreams[r].splice(n, 1), 1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r]
                                }), i.apply(this, arguments)
                            }
                        }, shimAddTrackRemoveTrack: function (e) {
                            var t = n.detectBrowser(e);
                            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return this.shimAddTrackRemoveTrackWithNative(e);
                            var r = e.RTCPeerConnection.prototype.getLocalStreams;
                            e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                var e = this, t = r.apply(this);
                                return e._reverseStreams = e._reverseStreams || {}, t.map(function (t) {
                                    return e._reverseStreams[t.id]
                                })
                            };
                            var i = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function (t) {
                                var r = this;
                                if (r._streams = r._streams || {}, r._reverseStreams = r._reverseStreams || {}, t.getTracks().forEach(function (e) {
                                    var t = r.getSenders().find(function (t) {
                                        return t.track === e
                                    });
                                    if (t) throw new DOMException("Track already exists.", "InvalidAccessError")
                                }), !r._reverseStreams[t.id]) {
                                    var n = new e.MediaStream(t.getTracks());
                                    r._streams[t.id] = n, r._reverseStreams[n.id] = t, t = n
                                }
                                i.apply(r, [t])
                            };
                            var o = e.RTCPeerConnection.prototype.removeStream;

                            function s(e, t) {
                                var r = t.sdp;
                                return Object.keys(e._reverseStreams || []).forEach(function (t) {
                                    var n = e._reverseStreams[t], i = e._streams[n.id];
                                    r = r.replace(new RegExp(i.id, "g"), n.id)
                                }), new RTCSessionDescription({type: t.type, sdp: r})
                            }

                            e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var t = this;
                                t._streams = t._streams || {}, t._reverseStreams = t._reverseStreams || {}, o.apply(t, [t._streams[e.id] || e]), delete t._reverseStreams[t._streams[e.id] ? t._streams[e.id].id : e.id], delete t._streams[e.id]
                            }, e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                                var n = this;
                                if ("closed" === n.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                var i = [].slice.call(arguments, 1);
                                if (1 !== i.length || !i[0].getTracks().find(function (e) {
                                    return e === t
                                })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                                var o = n.getSenders().find(function (e) {
                                    return e.track === t
                                });
                                if (o) throw new DOMException("Track already exists.", "InvalidAccessError");
                                n._streams = n._streams || {}, n._reverseStreams = n._reverseStreams || {};
                                var s = n._streams[r.id];
                                if (s) s.addTrack(t), Promise.resolve().then(function () {
                                    n.dispatchEvent(new Event("negotiationneeded"))
                                }); else {
                                    var a = new e.MediaStream([t]);
                                    n._streams[r.id] = a, n._reverseStreams[a.id] = r, n.addStream(a)
                                }
                                return n.getSenders().find(function (e) {
                                    return e.track === t
                                })
                            }, ["createOffer", "createAnswer"].forEach(function (t) {
                                var r = e.RTCPeerConnection.prototype[t];
                                e.RTCPeerConnection.prototype[t] = function () {
                                    var e = this, t = arguments,
                                        n = arguments.length && "function" == typeof arguments[0];
                                    return n ? r.apply(e, [function (r) {
                                        var n = s(e, r);
                                        t[0].apply(null, [n])
                                    }, function (e) {
                                        t[1] && t[1].apply(null, e)
                                    }, arguments[2]]) : r.apply(e, arguments).then(function (t) {
                                        return s(e, t)
                                    })
                                }
                            });
                            var a = e.RTCPeerConnection.prototype.setLocalDescription;
                            e.RTCPeerConnection.prototype.setLocalDescription = function () {
                                return arguments.length && arguments[0].type ? (arguments[0] = function (e, t) {
                                    var r = t.sdp;
                                    return Object.keys(e._reverseStreams || []).forEach(function (t) {
                                        var n = e._reverseStreams[t], i = e._streams[n.id];
                                        r = r.replace(new RegExp(n.id, "g"), i.id)
                                    }), new RTCSessionDescription({type: t.type, sdp: r})
                                }(this, arguments[0]), a.apply(this, arguments)) : a.apply(this, arguments)
                            };
                            var c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                            Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                                get: function () {
                                    var e = c.get.apply(this);
                                    return "" === e.type ? e : s(this, e)
                                }
                            }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                var t = this;
                                if ("closed" === t.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                                var r, n = e._pc === t;
                                if (!n) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                                t._streams = t._streams || {}, Object.keys(t._streams).forEach(function (n) {
                                    var i = t._streams[n].getTracks().find(function (t) {
                                        return e.track === t
                                    });
                                    i && (r = t._streams[n])
                                }), r && (1 === r.getTracks().length ? t.removeStream(t._reverseStreams[r.id]) : r.removeTrack(e.track), t.dispatchEvent(new Event("negotiationneeded")))
                            }
                        }, shimPeerConnection: function (e) {
                            var t = n.detectBrowser(e);
                            if (!e.RTCPeerConnection && e.webkitRTCPeerConnection) e.RTCPeerConnection = function (t, r) {
                                return i("PeerConnection"), t && t.iceTransportPolicy && (t.iceTransports = t.iceTransportPolicy), new e.webkitRTCPeerConnection(t, r)
                            }, e.RTCPeerConnection.prototype = e.webkitRTCPeerConnection.prototype, e.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                                get: function () {
                                    return e.webkitRTCPeerConnection.generateCertificate
                                }
                            }); else {
                                var r = e.RTCPeerConnection;
                                e.RTCPeerConnection = function (e, t) {
                                    if (e && e.iceServers) {
                                        for (var i = [], o = 0; o < e.iceServers.length; o++) {
                                            var s = e.iceServers[o];
                                            !s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (n.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, i.push(s)) : i.push(e.iceServers[o])
                                        }
                                        e.iceServers = i
                                    }
                                    return new r(e, t)
                                }, e.RTCPeerConnection.prototype = r.prototype, Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                                    get: function () {
                                        return r.generateCertificate
                                    }
                                })
                            }
                            var o = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function (e, t, r) {
                                var n = this, i = arguments;
                                if (arguments.length > 0 && "function" == typeof e) return o.apply(this, arguments);
                                if (0 === o.length && (0 === arguments.length || "function" != typeof arguments[0])) return o.apply(this, []);
                                var s = function (e) {
                                    var t = {}, r = e.result();
                                    return r.forEach(function (e) {
                                        var r = {
                                            id: e.id,
                                            timestamp: e.timestamp,
                                            type: {
                                                localcandidate: "local-candidate",
                                                remotecandidate: "remote-candidate"
                                            }[e.type] || e.type
                                        };
                                        e.names().forEach(function (t) {
                                            r[t] = e.stat(t)
                                        }), t[r.id] = r
                                    }), t
                                }, a = function (e) {
                                    return new Map(Object.keys(e).map(function (t) {
                                        return [t, e[t]]
                                    }))
                                };
                                return arguments.length >= 2 ? o.apply(this, [function (e) {
                                    i[1](a(s(e)))
                                }, arguments[0]]) : new Promise(function (e, t) {
                                    o.apply(n, [function (t) {
                                        e(a(s(t)))
                                    }, t])
                                }).then(t, r)
                            }, t.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                                var r = e.RTCPeerConnection.prototype[t];
                                e.RTCPeerConnection.prototype[t] = function () {
                                    var e = arguments, t = this, n = new Promise(function (n, i) {
                                        r.apply(t, [e[0], n, i])
                                    });
                                    return e.length < 2 ? n : n.then(function () {
                                        e[1].apply(null, [])
                                    }, function (t) {
                                        e.length >= 3 && e[2].apply(null, [t])
                                    })
                                }
                            }), t.version < 52 && ["createOffer", "createAnswer"].forEach(function (t) {
                                var r = e.RTCPeerConnection.prototype[t];
                                e.RTCPeerConnection.prototype[t] = function () {
                                    var e = this;
                                    if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                                        var t = 1 === arguments.length ? arguments[0] : void 0;
                                        return new Promise(function (n, i) {
                                            r.apply(e, [n, i, t])
                                        })
                                    }
                                    return r.apply(this, arguments)
                                }
                            }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                                var r = e.RTCPeerConnection.prototype[t];
                                e.RTCPeerConnection.prototype[t] = function () {
                                    return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                                }
                            });
                            var s = e.RTCPeerConnection.prototype.addIceCandidate;
                            e.RTCPeerConnection.prototype.addIceCandidate = function () {
                                return arguments[0] ? s.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                            }
                        }, fixNegotiationNeeded: function (e) {
                            n.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
                                var t = e.target;
                                if ("stable" === t.signalingState) return e
                            })
                        }, shimGetDisplayMedia: function (e, t) {
                            "getDisplayMedia" in e.navigator || ("function" == typeof t ? navigator.getDisplayMedia = function (e) {
                                return t(e).then(function (t) {
                                    return e.video = {
                                        mandatory: {
                                            chromeMediaSource: "desktop",
                                            chromeMediaSourceId: t,
                                            maxFrameRate: e.video.frameRate || 3
                                        }
                                    }, navigator.mediaDevices.getUserMedia(e)
                                })
                            } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
                        }
                    }
                }, {"../utils.js": 14, "./getusermedia": 6}],
                6: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils.js"), i = n.log;
                    t.exports = function (e) {
                        var t = n.detectBrowser(e), r = e && e.navigator, o = function (e) {
                            if ("object" != typeof e || e.mandatory || e.optional) return e;
                            var t = {};
                            return Object.keys(e).forEach(function (r) {
                                if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                    var n = "object" == typeof e[r] ? e[r] : {ideal: e[r]};
                                    void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                                    var i = function (e, t) {
                                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                                    };
                                    if (void 0 !== n.ideal) {
                                        t.optional = t.optional || [];
                                        var o = {};
                                        "number" == typeof n.ideal ? (o[i("min", r)] = n.ideal, t.optional.push(o), (o = {})[i("max", r)] = n.ideal, t.optional.push(o)) : (o[i("", r)] = n.ideal, t.optional.push(o))
                                    }
                                    void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", r)] = n.exact) : ["min", "max"].forEach(function (e) {
                                        void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, r)] = n[e])
                                    })
                                }
                            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                        }, s = function (e, n) {
                            if (t.version >= 61) return n(e);
                            if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
                                var s = function (e, t, r) {
                                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                };
                                e = JSON.parse(JSON.stringify(e)), s(e.audio, "autoGainControl", "googAutoGainControl"), s(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = o(e.audio)
                            }
                            if (e && "object" == typeof e.video) {
                                var a = e.video.facingMode;
                                a = a && ("object" == typeof a ? a : {ideal: a});
                                var c, d = t.version < 66;
                                if (a && ("user" === a.exact || "environment" === a.exact || "user" === a.ideal || "environment" === a.ideal) && (!r.mediaDevices.getSupportedConstraints || !r.mediaDevices.getSupportedConstraints().facingMode || d) && (delete e.video.facingMode, "environment" === a.exact || "environment" === a.ideal ? c = ["back", "rear"] : "user" !== a.exact && "user" !== a.ideal || (c = ["front"]), c)) return r.mediaDevices.enumerateDevices().then(function (t) {
                                    var r = (t = t.filter(function (e) {
                                        return "videoinput" === e.kind
                                    })).find(function (e) {
                                        return c.some(function (t) {
                                            return -1 !== e.label.toLowerCase().indexOf(t)
                                        })
                                    });
                                    return !r && t.length && -1 !== c.indexOf("back") && (r = t[t.length - 1]), r && (e.video.deviceId = a.exact ? {exact: r.deviceId} : {ideal: r.deviceId}), e.video = o(e.video), i("chrome: " + JSON.stringify(e)), n(e)
                                });
                                e.video = o(e.video)
                            }
                            return i("chrome: " + JSON.stringify(e)), n(e)
                        }, a = function (e) {
                            return {
                                name: {
                                    PermissionDeniedError: "NotAllowedError",
                                    PermissionDismissedError: "NotAllowedError",
                                    InvalidStateError: "NotAllowedError",
                                    DevicesNotFoundError: "NotFoundError",
                                    ConstraintNotSatisfiedError: "OverconstrainedError",
                                    TrackStartError: "NotReadableError",
                                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                    MediaDeviceKillSwitchOn: "NotAllowedError",
                                    TabCaptureError: "AbortError",
                                    ScreenCaptureError: "AbortError",
                                    DeviceCaptureError: "AbortError"
                                }[e.name] || e.name,
                                message: e.message,
                                constraint: e.constraint || e.constraintName,
                                toString: function () {
                                    return this.name + (this.message && ": ") + this.message
                                }
                            }
                        };
                        r.getUserMedia = function (e, t, n) {
                            s(e, function (e) {
                                r.webkitGetUserMedia(e, t, function (e) {
                                    n && n(a(e))
                                })
                            })
                        };
                        var c = function (e) {
                            return new Promise(function (t, n) {
                                r.getUserMedia(e, t, n)
                            })
                        };
                        if (r.mediaDevices || (r.mediaDevices = {
                            getUserMedia: c, enumerateDevices: function () {
                                return new Promise(function (t) {
                                    var r = {audio: "audioinput", video: "videoinput"};
                                    return e.MediaStreamTrack.getSources(function (e) {
                                        t(e.map(function (e) {
                                            return {label: e.label, kind: r[e.kind], deviceId: e.id, groupId: ""}
                                        }))
                                    })
                                })
                            }, getSupportedConstraints: function () {
                                return {
                                    deviceId: !0,
                                    echoCancellation: !0,
                                    facingMode: !0,
                                    frameRate: !0,
                                    height: !0,
                                    width: !0
                                }
                            }
                        }), r.mediaDevices.getUserMedia) {
                            var d = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                            r.mediaDevices.getUserMedia = function (e) {
                                return s(e, function (e) {
                                    return d(e).then(function (t) {
                                        if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function (e) {
                                            e.stop()
                                        }), new DOMException("", "NotFoundError");
                                        return t
                                    }, function (e) {
                                        return Promise.reject(a(e))
                                    })
                                })
                            }
                        } else r.mediaDevices.getUserMedia = function (e) {
                            return c(e)
                        };
                        void 0 === r.mediaDevices.addEventListener && (r.mediaDevices.addEventListener = function () {
                            i("Dummy mediaDevices.addEventListener called.")
                        }), void 0 === r.mediaDevices.removeEventListener && (r.mediaDevices.removeEventListener = function () {
                            i("Dummy mediaDevices.removeEventListener called.")
                        })
                    }
                }, {"../utils.js": 14}],
                7: [function (e, t, r) {
                    "use strict";
                    var n = e("sdp"), i = e("./utils");
                    t.exports = {
                        shimRTCIceCandidate: function (e) {
                            if (e.RTCIceCandidate && !(e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) {
                                var t = e.RTCIceCandidate;
                                e.RTCIceCandidate = function (e) {
                                    if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                                        var r = new t(e), i = n.parseCandidate(e.candidate), o = Object.assign(r, i);
                                        return o.toJSON = function () {
                                            return {
                                                candidate: o.candidate,
                                                sdpMid: o.sdpMid,
                                                sdpMLineIndex: o.sdpMLineIndex,
                                                usernameFragment: o.usernameFragment
                                            }
                                        }, o
                                    }
                                    return new t(e)
                                }, e.RTCIceCandidate.prototype = t.prototype, i.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                                    return t.candidate && Object.defineProperty(t, "candidate", {
                                        value: new e.RTCIceCandidate(t.candidate),
                                        writable: "false"
                                    }), t
                                })
                            }
                        }, shimCreateObjectURL: function (e) {
                            var t = e && e.URL;
                            if ("object" == typeof e && e.HTMLMediaElement && "srcObject" in e.HTMLMediaElement.prototype && t.createObjectURL && t.revokeObjectURL) {
                                var r = t.createObjectURL.bind(t), n = t.revokeObjectURL.bind(t), o = new Map, s = 0;
                                t.createObjectURL = function (e) {
                                    if ("getTracks" in e) {
                                        var t = "polyblob:" + ++s;
                                        return o.set(t, e), i.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), t
                                    }
                                    return r(e)
                                }, t.revokeObjectURL = function (e) {
                                    n(e), o.delete(e)
                                };
                                var a = Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype, "src");
                                Object.defineProperty(e.HTMLMediaElement.prototype, "src", {
                                    get: function () {
                                        return a.get.apply(this)
                                    }, set: function (e) {
                                        return this.srcObject = o.get(e) || null, a.set.apply(this, [e])
                                    }
                                });
                                var c = e.HTMLMediaElement.prototype.setAttribute;
                                e.HTMLMediaElement.prototype.setAttribute = function () {
                                    return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = o.get(arguments[1]) || null), c.apply(this, arguments)
                                }
                            }
                        }, shimMaxMessageSize: function (e) {
                            if (!e.RTCSctpTransport && e.RTCPeerConnection) {
                                var t = i.detectBrowser(e);
                                "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                                    get: function () {
                                        return void 0 === this._sctp ? null : this._sctp
                                    }
                                });
                                var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                                e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                    var e, i, o, s;
                                    if (this._sctp = null, e = arguments[0], (i = n.splitSections(e.sdp)).shift(), i.some(function (e) {
                                        var t = n.parseMLine(e);
                                        return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                                    })) {
                                        var a, c = function (e) {
                                                var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                                if (null === t || t.length < 2) return -1;
                                                var r = parseInt(t[1], 10);
                                                return r != r ? -1 : r
                                            }(arguments[0]),
                                            d = (o = c, s = 65536, "firefox" === t.browser && (s = t.version < 57 ? -1 === o ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), s),
                                            l = function (e, r) {
                                                var i = 65536;
                                                "firefox" === t.browser && 57 === t.version && (i = 65535);
                                                var o = n.matchPrefix(e.sdp, "a=max-message-size:");
                                                return o.length > 0 ? i = parseInt(o[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (i = 2147483637), i
                                            }(arguments[0], c);
                                        a = 0 === d && 0 === l ? Number.POSITIVE_INFINITY : 0 === d || 0 === l ? Math.max(d, l) : Math.min(d, l);
                                        var h = {};
                                        Object.defineProperty(h, "maxMessageSize", {
                                            get: function () {
                                                return a
                                            }
                                        }), this._sctp = h
                                    }
                                    return r.apply(this, arguments)
                                }
                            }
                        }, shimSendThrowTypeError: function (e) {
                            if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
                                var t = e.RTCPeerConnection.prototype.createDataChannel;
                                e.RTCPeerConnection.prototype.createDataChannel = function () {
                                    var e = t.apply(this, arguments);
                                    return r(e, this), e
                                }, i.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                                    return r(e.channel, e.target), e
                                })
                            }

                            function r(e, t) {
                                var r = e.send;
                                e.send = function () {
                                    var n = arguments[0], i = n.length || n.size || n.byteLength;
                                    if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                                    return r.apply(e, arguments)
                                }
                            }
                        }
                    }
                }, {"./utils": 14, sdp: 2}],
                8: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils"), i = e("./filtericeservers"), o = e("rtcpeerconnection-shim");
                    t.exports = {
                        shimGetUserMedia: e("./getusermedia"), shimPeerConnection: function (e) {
                            var t = n.detectBrowser(e);
                            if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function (e) {
                                return e
                            }), e.RTCSessionDescription || (e.RTCSessionDescription = function (e) {
                                return e
                            }), t.version < 15025)) {
                                var r = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                                Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                                    set: function (e) {
                                        r.set.call(this, e);
                                        var t = new Event("enabled");
                                        t.enabled = e, this.dispatchEvent(t)
                                    }
                                })
                            }
                            !e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                                get: function () {
                                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                                }
                            }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
                            var s = o(e, t.version);
                            e.RTCPeerConnection = function (e) {
                                return e && e.iceServers && (e.iceServers = i(e.iceServers)), new s(e)
                            }, e.RTCPeerConnection.prototype = s.prototype
                        }, shimReplaceTrack: function (e) {
                            !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
                        }
                    }
                }, {"../utils": 14, "./filtericeservers": 9, "./getusermedia": 10, "rtcpeerconnection-shim": 1}],
                9: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils");
                    t.exports = function (e, t) {
                        var r = !1;
                        return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                            if (e && (e.urls || e.url)) {
                                var i = e.urls || e.url;
                                e.url && !e.urls && n.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                                var o = "string" == typeof i;
                                return o && (i = [i]), i = i.filter(function (e) {
                                    var n = 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !r;
                                    return n ? (r = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp")
                                }), delete e.url, e.urls = o ? i[0] : i, !!i.length
                            }
                        })
                    }
                }, {"../utils": 14}],
                10: [function (e, t, r) {
                    "use strict";
                    t.exports = function (e) {
                        var t = e && e.navigator, r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                        t.mediaDevices.getUserMedia = function (e) {
                            return r(e).catch(function (e) {
                                return Promise.reject(function (e) {
                                    return {
                                        name: {PermissionDeniedError: "NotAllowedError"}[e.name] || e.name,
                                        message: e.message,
                                        constraint: e.constraint,
                                        toString: function () {
                                            return this.name
                                        }
                                    }
                                }(e))
                            })
                        }
                    }
                }, {}],
                11: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils");
                    t.exports = {
                        shimGetUserMedia: e("./getusermedia"), shimOnTrack: function (e) {
                            "object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                                get: function () {
                                    return this._ontrack
                                }, set: function (e) {
                                    this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function (e) {
                                        e.stream.getTracks().forEach(function (t) {
                                            var r = new Event("track");
                                            r.track = t, r.receiver = {track: t}, r.transceiver = {receiver: r.receiver}, r.streams = [e.stream], this.dispatchEvent(r)
                                        }.bind(this))
                                    }.bind(this))
                                }
                            }), "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                                get: function () {
                                    return {receiver: this.receiver}
                                }
                            })
                        }, shimSourceObject: function (e) {
                            "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
                                get: function () {
                                    return this.mozSrcObject
                                }, set: function (e) {
                                    this.mozSrcObject = e
                                }
                            }))
                        }, shimPeerConnection: function (e) {
                            var t = n.detectBrowser(e);
                            if ("object" == typeof e && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                                e.RTCPeerConnection || (e.RTCPeerConnection = function (r, n) {
                                    if (t.version < 38 && r && r.iceServers) {
                                        for (var i = [], o = 0; o < r.iceServers.length; o++) {
                                            var s = r.iceServers[o];
                                            if (s.hasOwnProperty("urls")) for (var a = 0; a < s.urls.length; a++) {
                                                var c = {url: s.urls[a]};
                                                0 === s.urls[a].indexOf("turn") && (c.username = s.username, c.credential = s.credential), i.push(c)
                                            } else i.push(r.iceServers[o])
                                        }
                                        r.iceServers = i
                                    }
                                    return new e.mozRTCPeerConnection(r, n)
                                }, e.RTCPeerConnection.prototype = e.mozRTCPeerConnection.prototype, e.mozRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                                    get: function () {
                                        return e.mozRTCPeerConnection.generateCertificate
                                    }
                                }), e.RTCSessionDescription = e.mozRTCSessionDescription, e.RTCIceCandidate = e.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                                    var r = e.RTCPeerConnection.prototype[t];
                                    e.RTCPeerConnection.prototype[t] = function () {
                                        return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                                    }
                                });
                                var r = e.RTCPeerConnection.prototype.addIceCandidate;
                                e.RTCPeerConnection.prototype.addIceCandidate = function () {
                                    return arguments[0] ? r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                                };
                                var i = {
                                    inboundrtp: "inbound-rtp",
                                    outboundrtp: "outbound-rtp",
                                    candidatepair: "candidate-pair",
                                    localcandidate: "local-candidate",
                                    remotecandidate: "remote-candidate"
                                }, o = e.RTCPeerConnection.prototype.getStats;
                                e.RTCPeerConnection.prototype.getStats = function (e, r, n) {
                                    return o.apply(this, [e || null]).then(function (e) {
                                        if (t.version < 48 && (e = function (e) {
                                            var t = new Map;
                                            return Object.keys(e).forEach(function (r) {
                                                t.set(r, e[r]), t[r] = e[r]
                                            }), t
                                        }(e)), t.version < 53 && !r) try {
                                            e.forEach(function (e) {
                                                e.type = i[e.type] || e.type
                                            })
                                        } catch (t) {
                                            if ("TypeError" !== t.name) throw t;
                                            e.forEach(function (t, r) {
                                                e.set(r, Object.assign({}, t, {type: i[t.type] || t.type}))
                                            })
                                        }
                                        return e
                                    }).then(r, n)
                                }
                            }
                        }, shimSenderGetStats: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getSenders;
                                t && (e.RTCPeerConnection.prototype.getSenders = function () {
                                    var e = this, r = t.apply(e, []);
                                    return r.forEach(function (t) {
                                        t._pc = e
                                    }), r
                                });
                                var r = e.RTCPeerConnection.prototype.addTrack;
                                r && (e.RTCPeerConnection.prototype.addTrack = function () {
                                    var e = r.apply(this, arguments);
                                    return e._pc = this, e
                                }), e.RTCRtpSender.prototype.getStats = function () {
                                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
                                }
                            }
                        }, shimReceiverGetStats: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getReceivers;
                                t && (e.RTCPeerConnection.prototype.getReceivers = function () {
                                    var e = this, r = t.apply(e, []);
                                    return r.forEach(function (t) {
                                        t._pc = e
                                    }), r
                                }), n.wrapPeerConnectionEvent(e, "track", function (e) {
                                    return e.receiver._pc = e.srcElement, e
                                }), e.RTCRtpReceiver.prototype.getStats = function () {
                                    return this._pc.getStats(this.track)
                                }
                            }
                        }, shimRemoveStream: function (e) {
                            !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var t = this;
                                n.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function (r) {
                                    r.track && -1 !== e.getTracks().indexOf(r.track) && t.removeTrack(r)
                                })
                            })
                        }, shimRTCDataChannel: function (e) {
                            e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
                        }, shimGetDisplayMedia: function (e, t) {
                            "getDisplayMedia" in e.navigator || (navigator.getDisplayMedia = function (e) {
                                if (!e || !e.video) {
                                    var r = new DOMException("getDisplayMedia without video constraints is undefined");
                                    return r.name = "NotFoundError", r.code = 8, Promise.reject(r)
                                }
                                return !0 === e.video ? e.video = {mediaSource: t} : e.video.mediaSource = t, navigator.mediaDevices.getUserMedia(e)
                            })
                        }
                    }
                }, {"../utils": 14, "./getusermedia": 12}],
                12: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils"), i = n.log;
                    t.exports = function (e) {
                        var t = n.detectBrowser(e), r = e && e.navigator, o = e && e.MediaStreamTrack,
                            s = function (e) {
                                return {
                                    name: {
                                        InternalError: "NotReadableError",
                                        NotSupportedError: "TypeError",
                                        PermissionDeniedError: "NotAllowedError",
                                        SecurityError: "NotAllowedError"
                                    }[e.name] || e.name,
                                    message: {"The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."}[e.message] || e.message,
                                    constraint: e.constraint,
                                    toString: function () {
                                        return this.name + (this.message && ": ") + this.message
                                    }
                                }
                            }, a = function (e, n, o) {
                                var a = function (e) {
                                    if ("object" != typeof e || e.require) return e;
                                    var t = [];
                                    return Object.keys(e).forEach(function (r) {
                                        if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                            var n = e[r] = "object" == typeof e[r] ? e[r] : {ideal: e[r]};
                                            if (void 0 === n.min && void 0 === n.max && void 0 === n.exact || t.push(r), void 0 !== n.exact && ("number" == typeof n.exact ? n.min = n.max = n.exact : e[r] = n.exact, delete n.exact), void 0 !== n.ideal) {
                                                e.advanced = e.advanced || [];
                                                var i = {};
                                                "number" == typeof n.ideal ? i[r] = {
                                                    min: n.ideal,
                                                    max: n.ideal
                                                } : i[r] = n.ideal, e.advanced.push(i), delete n.ideal, Object.keys(n).length || delete e[r]
                                            }
                                        }
                                    }), t.length && (e.require = t), e
                                };
                                return e = JSON.parse(JSON.stringify(e)), t.version < 38 && (i("spec: " + JSON.stringify(e)), e.audio && (e.audio = a(e.audio)), e.video && (e.video = a(e.video)), i("ff37: " + JSON.stringify(e))), r.mozGetUserMedia(e, n, function (e) {
                                    o(s(e))
                                })
                            };
                        if (r.mediaDevices || (r.mediaDevices = {
                            getUserMedia: function (e) {
                                return new Promise(function (t, r) {
                                    a(e, t, r)
                                })
                            }, addEventListener: function () {
                            }, removeEventListener: function () {
                            }
                        }), r.mediaDevices.enumerateDevices = r.mediaDevices.enumerateDevices || function () {
                            return new Promise(function (e) {
                                e([{
                                    kind: "audioinput",
                                    deviceId: "default",
                                    label: "",
                                    groupId: ""
                                }, {kind: "videoinput", deviceId: "default", label: "", groupId: ""}])
                            })
                        }, t.version < 41) {
                            var c = r.mediaDevices.enumerateDevices.bind(r.mediaDevices);
                            r.mediaDevices.enumerateDevices = function () {
                                return c().then(void 0, function (e) {
                                    if ("NotFoundError" === e.name) return [];
                                    throw e
                                })
                            }
                        }
                        if (t.version < 49) {
                            var d = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                            r.mediaDevices.getUserMedia = function (e) {
                                return d(e).then(function (t) {
                                    if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function (e) {
                                        e.stop()
                                    }), new DOMException("The object can not be found here.", "NotFoundError");
                                    return t
                                }, function (e) {
                                    return Promise.reject(s(e))
                                })
                            }
                        }
                        if (!(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
                            var l = function (e, t, r) {
                                t in e && !(r in e) && (e[r] = e[t], delete e[t])
                            }, h = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                            if (r.mediaDevices.getUserMedia = function (e) {
                                return "object" == typeof e && "object" == typeof e.audio && (e = JSON.parse(JSON.stringify(e)), l(e.audio, "autoGainControl", "mozAutoGainControl"), l(e.audio, "noiseSuppression", "mozNoiseSuppression")), h(e)
                            }, o && o.prototype.getSettings) {
                                var p = o.prototype.getSettings;
                                o.prototype.getSettings = function () {
                                    var e = p.apply(this, arguments);
                                    return l(e, "mozAutoGainControl", "autoGainControl"), l(e, "mozNoiseSuppression", "noiseSuppression"), e
                                }
                            }
                            if (o && o.prototype.applyConstraints) {
                                var u = o.prototype.applyConstraints;
                                o.prototype.applyConstraints = function (e) {
                                    return "audio" === this.kind && "object" == typeof e && (e = JSON.parse(JSON.stringify(e)), l(e, "autoGainControl", "mozAutoGainControl"), l(e, "noiseSuppression", "mozNoiseSuppression")), u.apply(this, [e])
                                }
                            }
                        }
                        r.getUserMedia = function (e, i, o) {
                            if (t.version < 44) return a(e, i, o);
                            n.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(i, o)
                        }
                    }
                }, {"../utils": 14}],
                13: [function (e, t, r) {
                    "use strict";
                    var n = e("../utils");
                    t.exports = {
                        shimLocalStreamsAPI: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection) {
                                if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                    return this._localStreams || (this._localStreams = []), this._localStreams
                                }), "getStreamById" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getStreamById = function (e) {
                                    var t = null;
                                    return this._localStreams && this._localStreams.forEach(function (r) {
                                        r.id === e && (t = r)
                                    }), this._remoteStreams && this._remoteStreams.forEach(function (r) {
                                        r.id === e && (t = r)
                                    }), t
                                }), !("addStream" in e.RTCPeerConnection.prototype)) {
                                    var t = e.RTCPeerConnection.prototype.addTrack;
                                    e.RTCPeerConnection.prototype.addStream = function (e) {
                                        this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(e) && this._localStreams.push(e);
                                        var r = this;
                                        e.getTracks().forEach(function (n) {
                                            t.call(r, n, e)
                                        })
                                    }, e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                                        return r && (this._localStreams ? -1 === this._localStreams.indexOf(r) && this._localStreams.push(r) : this._localStreams = [r]), t.call(this, e, r)
                                    }
                                }
                                "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                    this._localStreams || (this._localStreams = []);
                                    var t = this._localStreams.indexOf(e);
                                    if (-1 !== t) {
                                        this._localStreams.splice(t, 1);
                                        var r = this, n = e.getTracks();
                                        this.getSenders().forEach(function (e) {
                                            -1 !== n.indexOf(e.track) && r.removeTrack(e)
                                        })
                                    }
                                })
                            }
                        }, shimRemoteStreamsAPI: function (e) {
                            "object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                                return this._remoteStreams ? this._remoteStreams : []
                            }), "onaddstream" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                                get: function () {
                                    return this._onaddstream
                                }, set: function (e) {
                                    var t = this;
                                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function (e) {
                                        e.streams.forEach(function (e) {
                                            if (t._remoteStreams || (t._remoteStreams = []), !(t._remoteStreams.indexOf(e) >= 0)) {
                                                t._remoteStreams.push(e);
                                                var r = new Event("addstream");
                                                r.stream = e, t.dispatchEvent(r)
                                            }
                                        })
                                    })
                                }
                            }))
                        }, shimCallbacksAPI: function (e) {
                            if ("object" == typeof e && e.RTCPeerConnection) {
                                var t = e.RTCPeerConnection.prototype, r = t.createOffer, n = t.createAnswer,
                                    i = t.setLocalDescription, o = t.setRemoteDescription, s = t.addIceCandidate;
                                t.createOffer = function (e, t) {
                                    var n = arguments.length >= 2 ? arguments[2] : arguments[0], i = r.apply(this, [n]);
                                    return t ? (i.then(e, t), Promise.resolve()) : i
                                }, t.createAnswer = function (e, t) {
                                    var r = arguments.length >= 2 ? arguments[2] : arguments[0], i = n.apply(this, [r]);
                                    return t ? (i.then(e, t), Promise.resolve()) : i
                                };
                                var a = function (e, t, r) {
                                    var n = i.apply(this, [e]);
                                    return r ? (n.then(t, r), Promise.resolve()) : n
                                };
                                t.setLocalDescription = a, a = function (e, t, r) {
                                    var n = o.apply(this, [e]);
                                    return r ? (n.then(t, r), Promise.resolve()) : n
                                }, t.setRemoteDescription = a, a = function (e, t, r) {
                                    var n = s.apply(this, [e]);
                                    return r ? (n.then(t, r), Promise.resolve()) : n
                                }, t.addIceCandidate = a
                            }
                        }, shimGetUserMedia: function (e) {
                            var t = e && e.navigator;
                            t.getUserMedia || (t.webkitGetUserMedia ? t.getUserMedia = t.webkitGetUserMedia.bind(t) : t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, r, n) {
                                t.mediaDevices.getUserMedia(e).then(r, n)
                            }.bind(t)))
                        }, shimRTCIceServerUrls: function (e) {
                            var t = e.RTCPeerConnection;
                            e.RTCPeerConnection = function (e, r) {
                                if (e && e.iceServers) {
                                    for (var i = [], o = 0; o < e.iceServers.length; o++) {
                                        var s = e.iceServers[o];
                                        !s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (n.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, delete s.url, i.push(s)) : i.push(e.iceServers[o])
                                    }
                                    e.iceServers = i
                                }
                                return new t(e, r)
                            }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                                get: function () {
                                    return t.generateCertificate
                                }
                            })
                        }, shimTrackEventTransceiver: function (e) {
                            "object" == typeof e && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                                get: function () {
                                    return {receiver: this.receiver}
                                }
                            })
                        }, shimCreateOfferLegacy: function (e) {
                            var t = e.RTCPeerConnection.prototype.createOffer;
                            e.RTCPeerConnection.prototype.createOffer = function (e) {
                                var r = this;
                                if (e) {
                                    void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                                    var n = r.getTransceivers().find(function (e) {
                                        return e.sender.track && "audio" === e.sender.track.kind
                                    });
                                    !1 === e.offerToReceiveAudio && n ? "sendrecv" === n.direction ? n.setDirection ? n.setDirection("sendonly") : n.direction = "sendonly" : "recvonly" === n.direction && (n.setDirection ? n.setDirection("inactive") : n.direction = "inactive") : !0 !== e.offerToReceiveAudio || n || r.addTransceiver("audio"), void 0 !== e.offerToReceiveAudio && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                                    var i = r.getTransceivers().find(function (e) {
                                        return e.sender.track && "video" === e.sender.track.kind
                                    });
                                    !1 === e.offerToReceiveVideo && i ? "sendrecv" === i.direction ? i.setDirection("sendonly") : "recvonly" === i.direction && i.setDirection("inactive") : !0 !== e.offerToReceiveVideo || i || r.addTransceiver("video")
                                }
                                return t.apply(r, arguments)
                            }
                        }
                    }
                }, {"../utils": 14}],
                14: [function (e, t, r) {
                    "use strict";
                    var n = !0, i = !0;

                    function o(e, t, r) {
                        var n = e.match(t);
                        return n && n.length >= r && parseInt(n[r], 10)
                    }

                    t.exports = {
                        extractVersion: o, wrapPeerConnectionEvent: function (e, t, r) {
                            if (e.RTCPeerConnection) {
                                var n = e.RTCPeerConnection.prototype, i = n.addEventListener;
                                n.addEventListener = function (e, n) {
                                    if (e !== t) return i.apply(this, arguments);
                                    var o = function (e) {
                                        var t = r(e);
                                        t && n(t)
                                    };
                                    return this._eventMap = this._eventMap || {}, this._eventMap[n] = o, i.apply(this, [e, o])
                                };
                                var o = n.removeEventListener;
                                n.removeEventListener = function (e, r) {
                                    if (e !== t || !this._eventMap || !this._eventMap[r]) return o.apply(this, arguments);
                                    var n = this._eventMap[r];
                                    return delete this._eventMap[r], o.apply(this, [e, n])
                                }, Object.defineProperty(n, "on" + t, {
                                    get: function () {
                                        return this["_on" + t]
                                    }, set: function (e) {
                                        this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                                    }, enumerable: !0, configurable: !0
                                })
                            }
                        }, disableLog: function (e) {
                            return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (n = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
                        }, disableWarnings: function (e) {
                            return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (i = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
                        }, log: function () {
                            if ("object" == typeof window) {
                                if (n) return;
                                "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                            }
                        }, deprecated: function (e, t) {
                            i && console.warn(e + " is deprecated, please use " + t + " instead.")
                        }, detectBrowser: function (e) {
                            var t = e && e.navigator, r = {browser: null, version: null};
                            if (void 0 === e || !e.navigator) return r.browser = "Not a browser.", r;
                            if (t.mozGetUserMedia) r.browser = "firefox", r.version = o(t.userAgent, /Firefox\/(\d+)\./, 1); else if (t.webkitGetUserMedia) r.browser = "chrome", r.version = o(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2); else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) r.browser = "edge", r.version = o(t.userAgent, /Edge\/(\d+).(\d+)$/, 2); else {
                                if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return r.browser = "Not a supported browser.", r;
                                r.browser = "safari", r.version = o(t.userAgent, /AppleWebKit\/(\d+)\./, 1)
                            }
                            return r
                        }
                    }
                }, {}]
            }, {}, [3])(3)
        }).call(this, r(11))
    }, function (e, t, r) {
        "use strict";
        var n,
            i = this && this.__extends || (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(0), s = r(2), a = r(5), c = r(7), d = r(1), l = r(15), h = r(23), p = r(24), u = r(3),
            g = function (e) {
                function t() {
                    var t = this, r = new a.LoggerWeb, n = new h.StateCenter, i = new c.ZegoStreamCenterWeb(r, n);
                    return (t = e.call(this) || this).streamCenter = i, t.logger = r, t.stateCenter = n, t.init(), t.bindWindowListener(), t
                }

                return i(t, e), t.prototype.getSocket = function (e) {
                    return new WebSocket(e)
                }, t.prototype.enableCamera = function (e, t) {
                    return this.logger.debug("zc.p.ec.0 call"), "boolean" != typeof t ? (this.logger.error("zc.p.ec.0 argument is not bool"), !1) : this.streamCenter.enableCamera(e, t)
                }, t.prototype.enableMicrophone = function (e, t) {
                    return this.logger.debug("zc.p.em.0 call"), "boolean" != typeof t ? (this.logger.error("zc.p.em.0 argument is not bool"), !1) : this.streamCenter.enableMicrophone(e, t)
                }, t.prototype.setLocalAudioOutput = function (e, t) {
                    return this.logger.debug("zc.p.slao call"), "string" != typeof t ? (console.error("audiooutput is not string"), !1) : this.streamCenter.setPublishStreamAudioOutput(e, t)
                }, t.prototype.setPlayAudioOutput = function (e, t) {
                    return this.logger.debug("zc.p.spao call"), "string" != typeof t ? (console.error("audiooutput is not string"), !1) : this.streamCenter.setPlayStreamAudioOutput(e, t)
                }, t.prototype.setCustomSignalUrl = function (e) {
                    return this.logger.debug("zc.p.scs.0 call: " + e), e && 0 != e.length ? 0 != e.indexOf("wss://") ? (this.logger.error("zc.p.scs.0 url is not correct"), !1) : void (this.stateCenter.customUrl = e) : (this.logger.error("zc.p.scs.0 param error"), !1)
                }, t.prototype.setQualityMonitorCycle = function (e) {
                    "number" == typeof e && e >= 1e3 && this.streamCenter.setQualityMonitorCycle(e)
                }, t.prototype.startPlayingStream = function (e, t, r, n) {
                    var i = this;
                    if (this.logger.debug("zc.p.sps.0 call"), !e || "" === e) return this.logger.error("zc.p.sps.0 param error"), !1;
                    if (!t) return this.logger.error("zc.p.sps.0 don't have remoteVideo"), !1;
                    if (this.stateCenter.customUrl) return this.streamCenter.setPlayStateStart(e, t, r, n) ? this.streamCenter.startPlayingStream(e, [this.stateCenter.customUrl]) : (this.logger.error("zc.p.sps.0 cannot start play"), !1);
                    if (!this.stateCenter.isLogin()) return this.logger.error("zc.p.sps.0 not login"), !1;
                    for (var a = !1, c = 0; c < this.stateCenter.streamList.length; c++) if (this.stateCenter.streamList[c].stream_id === e) {
                        a = !0;
                        break
                    }
                    if (0 == a && this.logger.info("zc.p.sps.0 cannot find stream"), this.stateCenter.pullLimited || (e = NaN + e), !this.streamCenter.setPlayStateStart(e, t, r, n)) return this.logger.info("zc.p.sps.0 cannot start play"), !1;
                    var d = {stream_id: e, ptype: "pull", signals: this.streamCenter.getAllInUseUrl()};
                    return this.socketCenter.registerRouter("webrtc_url", function (e) {
                        i.handleFetchWebRtcUrlRsp(e)
                    }), this.socketCenter.sendMessage("webrtc_url", d, void 0, function (t, r) {
                        t == o.sdkErrorList.SEND_MSG_TIMEOUT ? i.onPlayStateUpdate(o.ENUM_PLAY_STATE_UPDATE.error, e, s.playErrorList.DISPATCH_TIMEOUT) : i.onPlayStateUpdate(o.ENUM_PLAY_STATE_UPDATE.error, e, s.playErrorList.DISPATCH_ERROR), i.streamCenter.stopPlayingStream(e)
                    }), !0
                }, t.prototype.stopPlayingStream = function (e) {
                    if (this.logger.debug("zc.p.sps.1.0 call"), !e || "" === e) return this.logger.info("zc.p.sps.1.0 param error"), !1;
                    for (var t in this.streamCenter.stopPlayingStream(e), this.stateCenter.streamUrlMap) if (this.stateCenter.streamUrlMap[t] === e) {
                        delete this.stateCenter.streamUrlMap[t];
                        break
                    }
                    return this.logger.debug("zc.p.sps.1.0 call success"), !0
                }, t.prototype.startPreview = function (e, t, r, n) {
                    return this.logger.debug("zc.p.sp.0 call"), e ? this.streamCenter.startPreview(e, t, r, n) : (this.logger.error("zc.p.sp.0 no localVideo"), !1)
                }, t.prototype.stopPreview = function (e) {
                    return this.logger.debug("zc.p.sp.1 call"), e ? this.streamCenter.stopPreview(e) : (this.logger.info("zc.p.sp.1 param error"), !1)
                }, t.prototype.startPublishingStream = function (e, t, r, n) {
                    var i = this;
                    if (this.logger.debug("zc.p.sps.1 call"), !e) return this.logger.error("zc.p.sps.1 param error"), !1;
                    if (this.stateCenter.customUrl && 0 != this.stateCenter.customUrl.length) return this.stateCenter.publishStreamList[e] = {
                        state: o.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                        extra_info: r
                    }, this.streamCenter.setPublishStateStart(e, t, n) ? this.streamCenter.startPublishingStream(e, [this.stateCenter.customUrl]) : (this.logger.info("zc.p.sps.1 cannot start publish"), !1);
                    if (!this.stateCenter.isLogin()) return this.logger.error("zc.p.sps.1 not login"), !1;
                    if (this.stateCenter.publishStreamList[e] = {
                        state: o.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                        extra_info: r
                    }, !this.streamCenter.setPublishStateStart(e, t, n)) return this.logger.error("zc.p.sps.1 cannot start publish"), !1;
                    this.logger.info("zc.p.sps.1 start publish");
                    var a = {
                        stream_id: e,
                        ptype: "push",
                        signals: this.streamCenter.getAllInUseUrl(),
                        header_kvs: [{key: "grpc-metadata-push", value: n && n.cdnUrl || ""}]
                    };
                    return this.socketCenter.registerRouter("webrtc_url", function (e) {
                        i.handleFetchWebRtcUrlRsp(e)
                    }), this.socketCenter.sendMessage("webrtc_url", a, void 0, function (t, r) {
                        t == o.sdkErrorList.SEND_MSG_TIMEOUT ? i.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.error, e, s.publishErrorList.DISPATCH_TIMEOUT) : i.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.error, e, s.publishErrorList.DISPATCH_ERROR), i.streamCenter.stopPublishingStream(e)
                    }), !0
                }, t.prototype.stopPublishingStream = function (e) {
                    return this.logger.debug("zc.p.sps.1.1 call"), e ? (this.streamCenter.stopPublishingStream(e), this.stateCenter.publishStreamList[e] && (this.stateCenter.publishStreamList[e].state >= o.ENUM_PUBLISH_STREAM_STATE.update_info && this.streamHandler.updateStreamInfo(e, o.ENUM_STREAM_SUB_CMD.liveEnd), delete this.stateCenter.publishStreamList[e]), !0) : (this.logger.info("zc.p.sps.1.1 param error"), !1)
                }, t.prototype.startScreenShotChrome = function (e) {
                    if (!t.screenShotReady) return this.logger.error('zc.b.ss Please install the extension:1. Go to chrome://extensions  2. Check: "Enable Developer mode   3. Click: "Load the unpacked extension... 4. Choose "extension" folder from the repository 5. Reload this page\n                                      '), !1;
                    window.postMessage({
                        type: "SS_UI_REQUEST",
                        text: "start"
                    }, "*"), d.ClientUtil.registerCallback("screenShare", {success: e}, this.stateCenter.callbackList)
                }, t.prototype.startScreenShotFirFox = function (e, t, r) {
                    var n = this, i = {video: {}, audio: t};
                    i.video.mediaSource = e, navigator.mediaDevices.getUserMedia(i).then(function (e) {
                        n.stateCenter.screenShotStream = e, r(!0, e)
                    }).catch(function (e) {
                        n.logger.error("zc.b.ssf " + e), r(!1, null)
                    })
                }, t.prototype.stopScreenShot = function () {
                    this.stateCenter.screenShotStream.getTracks().forEach(function (e) {
                        e.stop()
                    }), window.postMessage({type: "SS_UI_CANCEL", text: "start"}, "*")
                }, t.prototype.WebrtcOnPublishStateUpdateHandle = function (e, t, r) {
                    this.stateCenter.publishStreamList[t].state == o.ENUM_PUBLISH_STREAM_STATE.publishing && this.onPublishStateUpdate(e, t, r)
                }, t.prototype.setCDNInfo = function (e, t) {
                    e.urls_flv = t.urls_flv, e.urls_hls = t.urls_m3u8, e.urls_https_flv = t.urls_https_flv, e.urls_https_hls = t.urls_https_m3u8, e.urls_rtmp = t.urls_rtmp
                }, t.prototype.loginBodyData = function () {
                    return {
                        id_name: this.stateCenter.idName,
                        nick_name: this.stateCenter.nickName,
                        role: this.stateCenter.role,
                        token: this.stateCenter.token,
                        version: o.PROTO_VERSION,
                        room_name: this.stateCenter.roomid,
                        user_state_flag: this.stateCenter.userStateUpdate ? 1 : 0,
                        room_create_flag: this.stateCenter.roomCreateFlag,
                        client_type: o.E_CLIENT_TYPE.ClientType_Webrtc,
                        third_token: this.stateCenter.third_token
                    }
                }, t.prototype.screenStreamFrom = function (e, t, r) {
                    var n = this, i = {};
                    i.audio = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e
                        }
                    }, i.video = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e,
                            maxWidth: window.screen.width,
                            maxHeight: window.screen.height
                        }
                    }, !t && (i.audio = !1), navigator.mediaDevices.getUserMedia(i).then(function (e) {
                        n.stateCenter.screenShotStream = e, r(!0, e)
                    }).catch(function (e) {
                        n.logger.error("zc.b.ssf " + e), r(!1, null)
                    })
                }, t.isSupportWebrtc = function () {
                    return d.ClientUtil.isSupportWebrtc()
                }, t.isSupportH264 = function (e, t) {
                    d.ClientUtil.isSupportH264(e, t)
                }, t.prototype.enumDevices = function (e, r) {
                    t.enumDevices(e, r)
                }, t.enumDevices = function (e, t) {
                    void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function (t) {
                        for (var r = [], n = [], i = [], o = 0; o < t.length; o++) {
                            var s = t[o];
                            "audioinput" === s.kind && r.push({
                                label: s.label,
                                deviceId: s.deviceId
                            }), "audiooutput" === s.kind && n.push({
                                label: s.label,
                                deviceId: s.deviceId
                            }), "videoinput" === s.kind && i.push({label: s.label, deviceId: s.deviceId})
                        }
                        e && e({microphones: r, speakers: n, cameras: i})
                    }).catch(function (e) {
                        t && t(e)
                    }) : t && t("browser don't support enumerate devices")
                }, t.getAudioInfo = function (e, t) {
                    return e.srcObject ? (new p.SoundMeter).connectToSource(e.srcObject, function (e) {
                        t(e)
                    }) : (console.warn("srcObject is empty!"), !1)
                }, t.handleDataAvailable = function (e) {
                    e.data && e.data.size > 0 && t.recordedBlobs.push(e.data)
                }, t.startRecord = function (e) {
                    var r = e.captureStream();
                    t.recordedBlobs = [];
                    var n = {mimeType: "video/webm;codecs=vp9"};
                    MediaRecorder.isTypeSupported(n.mimeType) || (n = {mimeType: "video/webm;codecs=vp8"}, MediaRecorder.isTypeSupported(n.mimeType) || (n = {mimeType: "video/webm"}, MediaRecorder.isTypeSupported(n.mimeType) || (n = {mimeType: ""})));
                    try {
                        t.mediaRecorder = new MediaRecorder(r, n)
                    } catch (e) {
                        return void console.error("Exception while creating MediaRecorder:", e)
                    }
                    t.mediaRecorder.onstop = function (e) {
                        console.log("Recorder stopped: ", e)
                    }, t.mediaRecorder.ondataavailable = t.handleDataAvailable, t.mediaRecorder.start(10)
                }, t.stopRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.stop() : console.warn("please invoke startRecord first")
                }, t.resumeRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.resume() : console.warn("please invoke startRecord first")
                }, t.pauseRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.pause() : console.warn("please invoke startRecord first")
                }, t.saveRecord = function (e) {
                    if (t.mediaRecorder && t.recordedBlobs) {
                        var r = new Blob(t.recordedBlobs, {type: "video/webm"}), n = window.URL.createObjectURL(r),
                            i = document.createElement("a");
                        i.style.display = "none", i.href = n, i.download = e + ".webm", document.body.appendChild(i), i.click(), setTimeout(function () {
                            document.body.removeChild(i), window.URL.revokeObjectURL(n)
                        }, 100)
                    } else console.warn("please invoke startRecord first")
                }, t.takeSnapShot = function (e, t) {
                    if (e && 0 !== e.videoHeight) {
                        var r = document.createElement("canvas");
                        r.width = e.videoWidth, r.height = e.videoHeight, r.getContext("2d").drawImage(e, 0, 0, r.width, r.height), t.src = r.toDataURL("image/jpeg")
                    } else console.error("video can not empty")
                }, t.saveSnapShot = function (e, t) {
                    if (e && 0 !== e.videoHeight) {
                        var r = document.createElement("canvas");
                        r.width = e.videoWidth, r.height = e.videoHeight, r.getContext("2d").drawImage(e, 0, 0, r.width, r.height), r.toBlob(function (e) {
                            var r = window.URL.createObjectURL(e), n = document.createElement("a");
                            n.style.display = "none", n.href = r, n.download = t + ".jpeg", document.body.appendChild(n), n.click(), setTimeout(function () {
                                document.body.removeChild(n), window.URL.revokeObjectURL(r)
                            }, 100)
                        })
                    } else console.error("video can not empty")
                }, t.filterStreamList = function (e, t) {
                    var r = {}, n = {}, i = {}, o = [], s = 0;
                    for (var a in e.forEach(function (e, r) {
                        e.stream_id == t && (s = r)
                    }), e[s]) "urls_flv" != a && "urls_https_flv" != a || (r[a] = e[s][a]), "urls_hls" != a && "urls_https_hls" != a || (n[a] = e[s][a]), "urls_rtmp" == a && (i[a] = e[s][a]);
                    var c = window.location.protocol;
                    if ("safari" == u.browserDetails.browser) for (var a in n) n[a] && n[a].forEach(function (e) {
                        -1 !== e.indexOf(c) && o.push(e)
                    }); else if ("http:" == c) for (var a in r) r[a] && r[a].forEach(function (e) {
                        -1 === e.indexOf("http") && -1 === e.indexOf("https") || o.push(e)
                    }); else if ("https:" == c) for (var a in r) r[a] && r[a].forEach(function (e) {
                        -1 !== e.indexOf(c) && o.push(e)
                    }); else if ("rtmp:" == c) for (var a in i) i[a] && i[a].forEach(function (e) {
                        -1 !== e.indexOf(c) && o.push(e)
                    });
                    return o.filter(function (e, t, r) {
                        return r.indexOf(e) == t
                    })
                }, t.prototype.bindWindowListener = function () {
                    var e = this,
                        t = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ? "pagehide" : "beforeunload";
                    window.addEventListener(t, function (t) {
                        for (var r in window.event.cancelBubble = !0, e.streamCenter.publisherList) e.stopPublishingStream(r);
                        for (var r in e.streamCenter.playerList) e.stopPublishingStream(r);
                        console.log(e.streamCenter.playerList), console.log(e.streamCenter.publisherList), e.logout()
                    }), window.addEventListener("message", function (t) {
                        var r = t.data, n = r.type, i = r.streamId, o = r.canRequestAudioTrack;
                        t.origin;
                        "SS_DIALOG_SUCCESS" === n && e.screenStreamFrom(i, o, d.ClientUtil.actionSuccessCallback("screenShare", e.stateCenter.callbackList))
                    })
                }, t.screenShotReady = !1, t
            }(l.BaseCenter);
        t.ZegoClient = g, window.addEventListener("message", function (e) {
            var t = e.data, r = t.type, n = (t.streamId, e.origin);
            n !== window.location.origin && console.warn("ScreenStream: you should discard foreign event from origin:", n), "SS_PING" === r && (g.screenShotReady = !0)
        })
    }, function (e, t, r) {
        "use strict";
        var n,
            i = this && this.__extends || (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(6), s = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.openWebSocketLogServer = function (e) {
                if (this.url != e) {
                    if (this.url = e, !e) return;
                    if (null != this.websocket && 2 != this.websocket.readyState && 3 != this.websocket.readyState) return;
                    this.stopWebSocketServer(), this.websocket = new WebSocket(e), this.websocket.onopen = function (e) {
                    }, this.websocket.onclose = function (e) {
                        console.error("onclose   websocket error:", e)
                    }, this.websocket.onmessage = function (e) {
                    }, this.websocket.onerror = function (e) {
                        console.error("open log websocket error:" + e)
                    }
                }
            }, t.prototype.SendHttpsLog = function () {
                var e = this;
                if (0 != this.logCacheSend.length) {
                    var t = this.logCacheSend.join("\n"), r = new XMLHttpRequest;
                    r.onreadystatechange = function () {
                        if (4 == r.readyState) if (200 == r.status) {
                            if (0 == r.responseText.length) return;
                            try {
                                var t = JSON.parse(r.responseText).interval;
                                "number" == typeof t && e.logUploadInterval !== t && (e.timeInterval = t, e.openHttpsLogServer(e.url))
                            } catch (e) {
                                console.log("send result failed " + e)
                            }
                        } else console.log("send failed " + r.status)
                    }, r.open("POST", this.url, !0), r.send(t), this.logCacheSend = []
                }
            }, t.prototype.logReportParamList = function (e, t) {
                var r = new Date, n = r.getFullYear() + "/";
                return n += (o.D[r.getMonth() + 1] || r.getMonth() + 1) + "/", n += (o.D[r.getDate()] || r.getDate()) + " ", n += (o.D[r.getHours()] || r.getHours()) + ":", n += (o.D[r.getMinutes()] || r.getMinutes()) + ":", n += o.D[r.getSeconds()] || r.getSeconds(), n += "." + r.getTime() % 1e3, t.time = n, t.level = e, t.console = "rtc", t.appid = this.appid, t.roomid = this.roomid, t.userid = this.userid, t.id_name = this.userid, t.userName = this.userName, t.sessionid = this.sessionid, t.version = this.version, [JSON.stringify(t)]
            }, t
        }(o.Logger);
        t.LoggerWeb = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0);
        t.D = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
        var i = function () {
            function e() {
                this.logUploadTimer = null, this.logUploadInterval = 1e4, this.logCache = [], this.logCacheSend = [], this.logCacheMax = 100
            }

            return e.prototype.setLogLevel = function (e) {
                this.logLevel < n.ENUM_LOG_LEVEL.debug || this.logLevel > n.ENUM_LOG_LEVEL.report ? this.logLevel = n.ENUM_LOG_LEVEL.disable : this.logLevel = e
            }, e.prototype.setRemoteLogLevel = function (e) {
                this.logRemoteLevel < n.ENUM_LOG_LEVEL.debug || this.logRemoteLevel > n.ENUM_LOG_LEVEL.report ? this.logRemoteLevel = n.ENUM_LOG_LEVEL.disable : this.logRemoteLevel = e
            }, e.prototype.setSessionInfo = function (e, t, r, n, i, o) {
                this.appid = e, this.roomid = t, this.sessionid = r, this.userid = n, this.userName = i, this.version = o
            }, e.prototype.openLogServer = function (e) {
                try {
                    e.startsWith("wss:") ? (this.logType = n.ENUM_REMOTE_TYPE.websocket, this.openWebSocketLogServer(e)) : e.startsWith("https:") ? (this.logType = n.ENUM_REMOTE_TYPE.https, this.openHttpsLogServer(e)) : this.logType = n.ENUM_REMOTE_TYPE.disable
                } catch (e) {
                    this.error(JSON.stringify(e))
                }
            }, e.prototype.stopLogServer = function () {
                this.logType == n.ENUM_REMOTE_TYPE.websocket ? this.stopWebSocketServer() : this.logType == n.ENUM_REMOTE_TYPE.https && (this.SendHttpsLog(), this.stopHttpsServer()), this.logType = n.ENUM_REMOTE_TYPE.disable
            }, e.prototype.stopWebSocketServer = function () {
                this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
            }, e.prototype.openHttpsLogServer = function (e) {
                var t = this;
                this.url = e, e && (this.stopHttpsServer(), this.logUploadTimer || (this.logUploadTimer = setInterval(function () {
                    t.SendHttpsLog()
                }, this.logUploadInterval)))
            }, e.prototype.stopHttpsServer = function () {
                this.logUploadTimer && (clearInterval(this.logUploadTimer), this.logUploadTimer = null)
            }, e.prototype.report = function (e) {
                var t = this.logReportParamList(n.ENUM_LOG_LEVEL.report, e);
                this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= n.ENUM_LOG_LEVEL.report && console.debug.apply(console, t), this.RemoteLog(n.ENUM_LOG_LEVEL.report, t, !0)
            }, e.prototype.debug = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(n.ENUM_LOG_LEVEL.debug, e.join(""));
                this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= n.ENUM_LOG_LEVEL.debug && console.debug.apply(console, r), this.log(n.ENUM_LOG_LEVEL.debug, r)
            }, e.prototype.info = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(n.ENUM_LOG_LEVEL.info, e.join(""));
                this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= n.ENUM_LOG_LEVEL.info && console.info.apply(console, r), this.log(n.ENUM_LOG_LEVEL.info, r)
            }, e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(n.ENUM_LOG_LEVEL.warn, e.join(""));
                this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= n.ENUM_LOG_LEVEL.warn && console.warn.apply(console, r), this.log(n.ENUM_LOG_LEVEL.warn, r)
            }, e.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(n.ENUM_LOG_LEVEL.error, e.join(""));
                this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= n.ENUM_LOG_LEVEL.error && console.error.apply(console, r), this.log(n.ENUM_LOG_LEVEL.error, r)
            }, e.prototype.log = function (e, t) {
                this.logRemoteLevel !== n.ENUM_LOG_LEVEL.disable && this.logRemoteLevel <= e && this.RemoteLog(e, t)
            }, e.prototype.RemoteLog = function (e, t, r) {
                if (void 0 === r && (r = !1), "" != this.url) if (this.logType == n.ENUM_REMOTE_TYPE.websocket) this.RemoteWebSocketLog(e, t); else if (this.logType == n.ENUM_REMOTE_TYPE.https) this.RemoteHttpsLog(e, t, r); else if (this.logLevel !== n.ENUM_LOG_LEVEL.disable && this.logLevel <= e) for (this.logCacheSend.push(t); this.logCacheSend.length > this.logCacheMax;) this.logCacheSend.shift()
            }, e.prototype.RemoteWebSocketLog = function (e, t) {
                if (null == this.websocket || 2 == this.websocket.readyState || 3 == this.websocket.readyState) {
                    var r = this.url;
                    this.url = "", this.openLogServer(r), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                } else if (0 == this.websocket.readyState) this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t); else if (1 == this.websocket.readyState) if (this.logCacheSend.length > 0) {
                    for (var n = "", i = 0; i < this.logCacheSend.length; i++) (n + this.logCacheSend[i]).length > 4e3 && (this.websocket.send(n), n = ""), n = n + this.logCacheSend[i] + "\n";
                    t = n + t, this.logCacheSend = [], this.websocket.send(t)
                } else this.websocket.send(t); else console.warn("wrong socket state:" + this.websocket.readyState), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
            }, e.prototype.RemoteHttpsLog = function (e, t, r) {
                this.logCacheSend.push(t), (this.logCacheSend.length >= this.logCacheMax || !0 === r) && this.SendHttpsLog()
            }, e.prototype.logParamList = function (e, r) {
                var n = new Date, i = n.getFullYear() + "/";
                i += (t.D[n.getMonth() + 1] || n.getMonth() + 1) + "/", i += (t.D[n.getDate()] || n.getDate()) + " ", i += (t.D[n.getHours()] || n.getHours()) + ":", i += (t.D[n.getMinutes()] || n.getMinutes()) + ":", i += t.D[n.getSeconds()] || n.getSeconds(), i += "." + n.getTime() % 1e3;
                var o = r.substr(0, r.indexOf(" "));
                0 == o.length && (o = r);
                var s = r.substr(r.indexOf(" ") + 1);
                0 == s.length && (s = "");
                var a = {
                    time: i,
                    level: e,
                    action: o,
                    content: s,
                    appid: this.appid,
                    roomid: this.roomid,
                    userid: this.userid,
                    userName: this.userName,
                    sessionid: this.sessionid
                };
                return [JSON.stringify(a)]
            }, e
        }();
        t.Logger = i
    }, function (e, t, r) {
        "use strict";
        var n,
            i = this && this.__extends || (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(8), s = r(9), a = r(10), c = r(2), d = r(0), l = r(12), h = r(13), p = function (e) {
            function t(t, r) {
                var n = e.call(this, t, r) || this;
                return n.testEnvironment = !1, n.heartbeatTimer = null, n.heartbeatInterval = 1e4, n.qualityTimerInterval = 3e3, n.maxRetryCount = 5, n.previewVideoList = [], n.signalList = {}, n.checkMessageTimeout = function () {
                    for (var e in n.signalList) n.signalList[e].signal && n.signalList[e].signal.checkMessageTimeout()
                }, n.getAllInUseUrl = function () {
                    var e = [];
                    for (var t in n.signalList) e.push(t);
                    return e
                }, n.onDisconnectHandle = function (e) {
                    if (n.logger.info("zsc.od.0 call"), n.signalList[e]) {
                        for (var t = n.signalList[e], r = 0; r < t.publishConnectedList.length; r++) {
                            var i = n.publisherList[t.publishConnectedList[r]];
                            i && i.publisher && i.publisher.onDisconnect()
                        }
                        for (r = 0; r < t.playConnectedList.length; r++) {
                            var o = n.playerList[t.playConnectedList[r]];
                            o && o.player && o.player.onDisconnect()
                        }
                        delete n.signalList[e], n.stopSignalHeartbeat()
                    }
                }, n.logger = t, n.stateCenter = r, n.dataReport = new o.ZegoDataReport(n.logger), n
            }

            return i(t, e), t.prototype.onSignalDisconnected = function (e) {
            }, t.prototype.setQualityMonitorCycle = function (e) {
                this.logger.debug("zsc.qmc.0 timeInterval " + e), this.qualityTimerInterval = e
            }, t.prototype.setSessionInfo = function (e, t, r, n) {
                this.logger.debug("zsc.ssi.0 called"), this.appid = e, this.userid = t, this.token = r, this.testEnvironment = n
            }, t.prototype.onPlayStateUpdate = function (e, t, r) {
            }, t.prototype.onPlayQualityUpdate = function (e, t) {
            }, t.prototype.onPublishStateUpdate = function (e, t, r) {
            }, t.prototype.onPublishQualityUpdate = function (e, t) {
            }, t.prototype.onUpdateHeartBeartIntervalHandle = function (e) {
                e != this.heartbeatInterval && (this.logger.debug("zsc.uhb.0 update " + e), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatInterval = e, this.startSignalHeartbeat())
            }, t.prototype.enableMicrophone = function (e, t) {
                var r = this.checkPreview(e);
                return r ? r.enableMicrophone(t) : (this.logger.info("zsc.em.0 no preview"), !1)
            }, t.prototype.enableCamera = function (e, t) {
                var r = this.checkPreview(e);
                return r ? r.enableCamera(t) : (this.logger.error("zsc.ec.0 no preview"), !1)
            }, t.prototype.startPreview = function (e, t, r, n) {
                if (!e) return this.logger.error("zsc.sp.0 localVideo null"), !1;
                var i = this.checkPreview(e);
                return i ? (this.logger.warn("zsc.sp.0 localvideo alredy exist"), !0) : (i = new s.ZegoPreview(this.logger), this.previewVideoList.push(i), i.startPreview(e, t, r, n), this.logger.debug("zsc.sp.0 call success"), !0)
            }, t.prototype.stopPreview = function (e) {
                if (!e) return this.logger.warn("zsc.sp.0 localVideo null"), !1;
                for (var t in this.publisherList) this.publisherList[t].localVideo === e && (this.publisherList[t].localVideo = null);
                var r = this.checkPreview(e);
                return r ? (r.previewSuc && (r.stopPreview(), this.removePreview(r)), !0) : (this.logger.warn("zsc.sp.0 no preview"), !1)
            }, t.prototype.setPublishStateStart = function (e, t, r) {
                var n = this, i = this.getTotalStreamId(e);
                if (this.publisherList[i]) return this.logger.error("zsc.pss.0 publisher already exist"), !1;
                var o = new a.ZegoPublish(this.logger, null, this.dataReport, this.qualityTimerInterval);
                return o.onPublishStateUpdate = function (t, r, i) {
                    var o = n.publisherList[r];
                    o ? n.onPublishStateUpdate(t, o.streamId, i) : n.logger.error("zsc.psuh.0 cannot find publish " + e)
                }, o.onPublishQualityUpdate = function (t, r) {
                    var i = n.publisherList[t];
                    i ? n.onPublishQualityUpdate(i.streamId, r) : n.logger.error("zsc.psuh.0 cannot find publish " + e)
                }, this.publisherList[i] = {
                    localVideo: t,
                    publisher: o,
                    serverUrls: [],
                    retryCount: 0,
                    streamId: e,
                    playOption: r
                }, this.dataReport.eventStart(o.reportSeq, "GetSignalUrl"), !0
            }, t.prototype.getTotalStreamId = function (e) {
                if (this.testEnvironment) {
                    var t = "zegotest-" + this.appid + "-" + e;
                    return this.logger.info("zsc.gts.0 test streamid " + t), t
                }
                return e
            }, t.prototype.startPublishingStream = function (e, t, r) {
                this.logger.info("zsc.sps.0 call");
                var n = this.getTotalStreamId(e), i = this.publisherList[n];
                if (!i) return this.logger.error("zsc.sps.0 publisher don't exist"), !1;
                var o = i.publisher;
                if (this.dataReport.eventEndWithMsg(o.reportSeq, "GetSignalUrl", {urls: t}), !t || 0 === t.length) return this.onPublishStateUpdate(c.ENUM_PUBLISH_STATE_UPDATE.error, e, c.publishErrorList.DISPATCH_ERROR), this.logger.info("zsc.sps.0 server don't have signal url"), !1;
                var s = t[0];
                return i.serverUrls = i.serverUrls.concat(t), this.connectPublishServer(n, s)
            }, t.prototype.updateWaitingList = function (e, t, r, n, i) {
                t ? e.publishWaitingList.push({
                    streamId: r,
                    success: n,
                    error: i
                }) : e.playWaitingList.push({streamId: r, success: n, error: i})
            }, t.prototype.publishStream = function (e) {
                var t = this.publisherList[e].publisher;
                if (t) {
                    var r = null, n = null, i = this.publisherList[e].playOption,
                        o = this.checkPreview(this.publisherList[e].localVideo);
                    o && (r = o.localStream, n = o.videoInfo), r || this.logger.info("zsc.ps.0 no localStream"), this.logger.debug("zsc.ps.0 call success"), t.startPublish(e, r, n, i)
                } else this.logger.info("zsc.ps.0 publisher don't exist")
            }, t.prototype.connectPublishServer = function (e, t) {
                var r = this, n = this.publisherList[e];
                return n ? (this.dataReport.eventStart(n.publisher.reportSeq, "ConnectServer"), this.connetWithReuseSignalServer(e, !0, t, function (e, n) {
                    var i = r.publisherList[e];
                    if (i) {
                        var o = i.publisher;
                        if (o) {
                            r.dataReport.eventEndWithMsg(o.reportSeq, "ConnectServer", {result: 0, server: t});
                            var s = n.tokenInfo;
                            r.logger.info("zsc.cps.0 update token success"), s && s.report && (o.qualityUpload = s.report, o.qualityUploadInterval = s.report_interval), o.signal = n.signal, i.retryCount = 0, r.publishStream(e), r.getTokenSuccess()
                        } else r.logger.info("zsc.cps.1 check publisher don't exist")
                    } else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                }, function (e, t) {
                    r.logger.error("zsc.cps.0 update token failed " + t);
                    var n = r.publisherList[e];
                    if (n) if (r.shouldRetry(n, t)) {
                        r.logger.info("zsc.cps.1 retry connect");
                        var i = n.serverUrls[0];
                        n.serverUrls.splice(0, 1), n.retryCount += 1, r.connectPublishServer(e, i)
                    } else r.onPublishStateUpdate(c.ENUM_PUBLISH_STATE_UPDATE.error, e, c.publishErrorList.TOKEN_ERROR); else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                }), !0) : (this.logger.error("zsc.cps.0 publisher don't exist"), !1)
            }, t.prototype.shouldRetry = function (e, t) {
                return 0 != e.serverUrls.length && (!(e.retryCount >= this.maxRetryCount) && 3 == t)
            }, t.prototype.getTokenSuccess = function () {
                this.logger.debug("zsc.gts.0 call")
            }, t.prototype.stopPublishingStream = function (e) {
                var t = this.getTotalStreamId(e), r = this.publisherList[t];
                r ? (r.publisher && (r.publisher.stopPublish(), delete r.publisher), this.removeStreamFromSignal(!0, t), this.stopSignalHeartbeat(), delete this.publisherList[t], this.logger.debug("zsc.sps.0.1 call success")) : this.logger.warn("zsc.sps.0.1 publisher don't exist")
            }, t.prototype.setPlayStreamAudioOutput = function (e, t) {
                var r = this.getTotalStreamId(e);
                if (null != t && 0 != t.length) {
                    this.logger.debug("zsc.psao.1 device " + t);
                    var n = this.playerList[r];
                    return n ? n.player ? n.player.setAudioDestination(t) : (this.logger.info("zsc.psao.1 player don't exist"), !1) : (this.logger.info("zsc.psao.1 play don't exist"), !1)
                }
                return !1
            }, t.prototype.setPublishStreamAudioOutput = function (e, t) {
                if (null != t && 0 != t.length && e) {
                    this.logger.debug("zsc.psao.0 device " + t);
                    var r = this.checkPreview(e);
                    r ? r.setAudioDestination(t) : this.logger.info("zsc.psao.0 no preview")
                }
                return !1
            }, t.prototype.connetWithReuseSignalServer = function (e, t, r, n, i) {
                var o = this;
                this.logger.info("zsc.crss.0 begin " + r);
                var s = null;
                if (this.signalList[r]) (s = this.signalList[r]).state == d.ENUM_SIGNAL_STATE.connected ? (this.logger.info("zsc.crss.0 already connected " + r + " streamId: " + e), t ? s.publishConnectedList.push(e) : s.playConnectedList.push(e), n(e, s)) : s.state == d.ENUM_SIGNAL_STATE.connecting && (this.logger.debug("zsc.crss.0 signal is connecting " + r + " streamId: " + e), this.updateWaitingList(s, t, e, n, i)); else {
                    this.logger.info("zsc.crss.0 new signal " + r + " streamId: " + e);
                    var a = new l.ZegoSignal(this.logger, this.stateCenter);
                    a.setSessionInfo(this.appid, this.userid), a.onUpdateHeartBeartInterval = this.onUpdateHeartBeartIntervalHandle, a.onDisconnect = this.onDisconnectHandle, this.signalList[r] = {
                        signal: a,
                        state: d.ENUM_SIGNAL_STATE.connecting,
                        publishWaitingList: [],
                        playWaitingList: [],
                        publishConnectedList: [],
                        playConnectedList: [],
                        tokenInfo: null
                    }, this.updateWaitingList(this.signalList[r], t, e, n, i), a.connectServer(this.token, r, function (e, t, n) {
                        s = o.signalList[r];
                        var i, a, c = 0;
                        if (0 != e) {
                            for (o.logger.debug("zsc.crss.0 connect failed " + t), c = 0; c < s.publishWaitingList.length; c++) (i = s.publishWaitingList[c]).error && i.error(i.streamId, e);
                            for (c = 0; c < s.playWaitingList.length; c++) (a = s.playWaitingList[c]).error && a.error(a.streamId, e);
                            delete o.signalList[r]
                        } else {
                            for (o.logger.debug("zsc.crss.0 connected success " + t), s.state = d.ENUM_SIGNAL_STATE.connected, s.tokenInfo = n, c = 0; c < s.publishWaitingList.length; c++) (i = s.publishWaitingList[c]).success && i.success(i.streamId, s), s.publishConnectedList.push(i.streamId);
                            for (c = 0; c < s.playWaitingList.length; c++) (a = s.playWaitingList[c]).success && a.success(a.streamId, s), s.playConnectedList.push(a.streamId);
                            s.publishWaitingList = [], s.playWaitingList = [], null == o.heartbeatTimer && o.startSignalHeartbeat()
                        }
                    })
                }
            }, t.prototype.setPlayStateStart = function (e, t, r, n) {
                var i = this.getTotalStreamId(e);
                if (this.playerList[i]) return this.logger.warn("zsc.pss.1 player already exist"), !1;
                var o = new h.ZegoPlayWeb(this.logger, null, this.dataReport, this.qualityTimerInterval);
                return o.onPlayStateUpdate = this.onPlayStateUpdate, o.onPlayQualityUpdate = this.onPlayQualityUpdate, o.onVideoSizeChanged = this.onVideoSizeChanged, this.playerList[i] = {
                    player: o,
                    remoteVideo: t,
                    audioOutput: r,
                    signal: null,
                    serverUrls: [],
                    retryCount: 0,
                    playOption: n
                }, this.dataReport.eventStart(o.reportSeq, "GetSignalUrl"), !0
            }, t.prototype.startPlayingStream = function (e, t, r) {
                this.logger.info("zsc.sps.1 start play called");
                var n = this.getTotalStreamId(e), i = this.playerList[n];
                if (!i) return this.logger.error("zsc.sps.1 player don't exist"), !1;
                var o = i.player;
                return this.dataReport.eventEndWithMsg(o.reportSeq, "GetSignalUrl", {urls: t}), 0 == t.length ? (this.onPlayStateUpdate(c.ENUM_PLAY_STATE_UPDATE.error, e, c.playErrorList.DISPATCH_ERROR), this.logger.info("zsc.sps.1 server don't have signal url"), !1) : (i.serverUrls = i.serverUrls.concat(t), this.connectPlayServer(n, t[0]))
            }, t.prototype.connectPlayServer = function (e, t) {
                var r = this, n = this.playerList[e];
                return n ? (this.dataReport.eventStart(n.player.reportSeq, "ConnectServer"), this.connetWithReuseSignalServer(e, !1, t, function (e, n) {
                    var i = r.playerList[e];
                    if (i) {
                        var o = i.player;
                        if (o) {
                            r.dataReport.eventEndWithMsg(o.reportSeq, "ConnectServer", {result: 0, server: t});
                            var s = n.tokenInfo;
                            r.logger.info("zsc.cps.1 update token success"), s && s.report && (o.qualityUpload = s.report, o.qualityUploadInterval = s.report_interval), o.signal = n.signal, i.retryCount = 0, r.playStream(e), r.getTokenSuccess()
                        } else r.logger.error("zsc.cps.1 checkplayer don't exist")
                    } else r.logger.error("zsc.cps.1 after connect player don't exist")
                }, function (e, t) {
                    var n = r.playerList[e];
                    if (n) if (r.shouldRetry(n, t)) {
                        r.logger.info("zsc.cps.1 retry connect");
                        var i = n.serverUrls[0];
                        n.serverUrls.splice(0, 1), n.retryCount += 1, r.connectPlayServer(e, i)
                    } else r.onPlayStateUpdate(c.ENUM_PLAY_STATE_UPDATE.error, e, c.playErrorList.TOKEN_ERROR); else r.logger.error("zsc.cps.1 after connect player don't exist")
                }), !0) : (this.logger.error("zsc.cps.1 player don't exist"), !1)
            }, t.prototype.playStream = function (e) {
                var t = this.playerList[e].player;
                t ? (this.logger.info("zsc.ps.1 call success"), t.startPlay(e, this.playerList[e].remoteVideo, this.playerList[e].audioOutput, this.playerList[e].playOption)) : this.logger.warn("zsc.ps.1 player don't exist")
            }, t.prototype.removeStreamFromSignal = function (e, t) {
                var r = [];
                for (var n in this.signalList) {
                    var i = this.signalList[n];
                    if (e) {
                        for (var o = 0; o < i.publishConnectedList.length; o++) if (i.publishConnectedList[o] === t) {
                            this.logger.debug("zsc.rsfs.0 found from publish"), i.publishConnectedList.splice(o, 1);
                            break
                        }
                    } else for (var s = 0; s < i.playConnectedList.length; s++) if (i.playConnectedList[s] === t) {
                        this.logger.debug("zsc.rsfs.0 found from play"), i.playConnectedList.splice(s, 1);
                        break
                    }
                    0 == i.publishConnectedList.length && 0 == i.playConnectedList.length && (i.signal.disconnectServer(), r.push(n))
                }
                for (var a = 0; a < r.length; a++) delete this.signalList[r[a]]
            }, t.prototype.stopSignalHeartbeat = function () {
                this.logger.debug("zsc.ssh.1 call");
                var e = 0;
                for (var t in this.signalList) e += 1;
                this.heartbeatTimer && 0 == e && (this.logger.info("zsc.ssh.1 stop"), clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
            }, t.prototype.stopPlayingStream = function (e) {
                var t = this.getTotalStreamId(e), r = this.playerList[t];
                r ? (r.player && (r.player.stopPlay(), delete r.player), this.removeStreamFromSignal(!1, t), this.stopSignalHeartbeat(), delete this.playerList[t], this.logger.debug("zsc.sps.1.1 call success")) : this.logger.info("zsc.sps.1.1 player don't exist")
            }, t.prototype.reset = function () {
                for (var e in this.publisherList) this.publisherList[e].publisher && this.publisherList[e].publisher.stopPublish();
                for (var t in this.playerList) this.playerList[t].player && this.playerList[t].player.stopPlay();
                for (var r in this.signalList) this.signalList[r].signal && this.signalList[r].signal.disconnectServer();
                this.playerList = {}, this.publisherList = {}, this.signalList = {}, this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
            }, t.prototype.startSignalHeartbeat = function () {
                var e = this;
                this.logger.debug("zsc.ssh.0 call"), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatTimer = setTimeout(function () {
                    e.checkSignalHeartbeat()
                }, this.heartbeatInterval)
            }, t.prototype.checkSignalHeartbeat = function () {
                for (var e in this.logger.debug("zsc.csh.0 call"), this.signalList) this.signalList[e].signal && this.signalList[e].signal.sendHeartbeat();
                this.heartbeatTimer && this.startSignalHeartbeat()
            }, t.prototype.checkPreview = function (e) {
                for (var t = 0; t < this.previewVideoList.length; t++) if (this.previewVideoList[t].localVideo === e) return this.previewVideoList[t];
                return null
            }, t.prototype.removePreview = function (e) {
                for (var t = 0; t < this.previewVideoList.length; t++) if (this.previewVideoList[t] === e) {
                    this.previewVideoList.splice(t, 1);
                    break
                }
            }, t.prototype.onPlayerStreamUrlUpdate = function (e, t, r) {
            }, t.prototype.onVideoSizeChanged = function (e, t, r) {
            }, t
        }(r(14).ZegoStreamCenter);
        t.ZegoStreamCenterWeb = p
    }, function (e, t, r) {
        "use strict";
        var n = this && this.__assign || Object.assign || function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e) {
                this.log = e, this.dataStatistics = {}, this.logger = e
            }

            return e.prototype.newReport = function (e) {
                this.dataStatistics[e] = {abs_time: Date.now(), time_consumed: 0, error: 0, events: []}
            }, e.prototype.addMsgExt = function (e, t) {
                this.dataStatistics[e] ? this.dataStatistics[e].msg_ext = t : console.warn(e + " not exist")
            }, e.prototype.eventStart = function (e, t) {
                this.dataStatistics[e] ? null != this.dataStatistics[e].events ? this.dataStatistics[e].events.push({
                    event: t,
                    abs_time: Date.now(),
                    time_consumed: 0
                }) : this.logger.warn("zd.es.0 no events") : this.logger.warn("zd.es.0 no seq match")
            }, e.prototype.eventEnd = function (e, t, r) {
                if (this.dataStatistics[e]) {
                    var n = this.dataStatistics[e].events;
                    if (n && 0 !== n.length) {
                        for (var i = n.length - 1; i >= 0; i--) if (n[i].event == t && n[i].time_consumed) {
                            n[i].time_consumed = Date.now() - n[i].abs_time;
                            break
                        }
                    } else this.logger.info("zd.ee.0 no events")
                } else this.logger.info("zd.ee.0 no seq match")
            }, e.prototype.eventEndWithMsg = function (e, t, r) {
                if (this.dataStatistics[e]) {
                    var i = this.dataStatistics[e].events;
                    if (i) {
                        for (var o = i.length - 1; o >= 0; o--) if (i[o].event == t && i[o].time_consumed) {
                            i[o].time_consumed = Date.now() - i[o].abs_time, null == i[o].msg_ext && (i[o].msg_ext = {}), i[o].msg_ext = n({}, r);
                            break
                        }
                    } else this.logger.warn("zd.ee.0 no events")
                } else this.logger.warn("zd.ee.0 no seq match")
            }, e.prototype.addEventInfo = function (e, t, r, n) {
                if (this.dataStatistics[e]) {
                    var i = this.dataStatistics[e].events;
                    if (null != i) {
                        for (var o = i.length - 1; o >= 0; o--) if (i[o].event == t && null != i[o].time_consumed && i[o].event == t && null != i[o].time_consumed) {
                            null == i[o].msg_ext && (i[o].msg_ext = {}), i[o].msg_ext[r] = n;
                            break
                        }
                    } else this.logger.warn("zd.aei.0 no events")
                } else this.logger.warn("zd.aei.0 no seq match")
            }, e.prototype.addEvent = function (e, t, r) {
                this.dataStatistics[e] ? this.dataStatistics[e].events && (r ? this.dataStatistics[e].events.push({
                    event: t,
                    abs_time: Date.now(),
                    msg_ext: r
                }) : this.dataStatistics[e].events.push({
                    event: t,
                    abs_time: Date.now()
                })) : this.logger.warn("zd.ae.0 no seq match")
            }, e.prototype.uploadReport = function (e, t) {
                var r = this.dataStatistics[e];
                null != r && (r.itemtype = t, r.time_consumed = Date.now() - r.abs_time, this.logger.report(r), delete this.dataStatistics[e])
            }, e
        }();
        t.ZegoDataReport = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = function () {
            function e(e) {
                var t = this;
                this.log = e, this.localVideo = null, this.localStream = null, this.videoInfo = {}, this.previewSuc = !1, this.enableMicrophone = function (e) {
                    return t.localStream ? (t.localStream.getAudioTracks().forEach(function (t) {
                        t.enabled = e
                    }), t.logger.debug("zp.em.2 call success"), !0) : (t.logger.error("zp.em.2 no localStream"), !1)
                }, this.enableCamera = function (e) {
                    return t.localStream ? (t.localStream.getVideoTracks().forEach(function (t) {
                        t.enabled = e
                    }), t.logger.debug("zp.ec.2 call success"), !0) : (t.logger.error("zp.ec.2 no localStream"), !1)
                }, this.setAudioDestination = function (e) {
                    return t.localVideo ? "undefined" !== t.localVideo.sinkId ? (t.localVideo.setSinkId(e).then(function () {
                        t.logger.info("zp.sad.2 success device: " + e)
                    }).catch(function (e) {
                        t.logger.info("zp.sad.2 " + e.name)
                    }), !0) : (t.logger.error("zp.sad.2 browser does not suppport"), !1) : (t.logger.error("zp.sad.2 no localVideo"), !1)
                }, this.logger = e
            }

            return e.prototype.getMediaStreamConstraints = function (e) {
                var t = {audio: null, video: null};
                if (t.audio = !1, t.video = !1, e.audio && (e.audioInput ? t.audio = {deviceId: {exact: e.audioInput}} : t.audio = !0), e.video) {
                    var r = 640, i = 480, o = 15, s = 800;
                    if (1 === e.videoQuality ? (r = n.ENUM_RESOLUTION_TYPE.LOW.width, i = n.ENUM_RESOLUTION_TYPE.LOW.height, o = n.ENUM_RESOLUTION_TYPE.LOW.frameRate, s = n.ENUM_RESOLUTION_TYPE.LOW.bitRate) : 2 === e.videoQuality ? (r = n.ENUM_RESOLUTION_TYPE.MEDIUM.width, i = n.ENUM_RESOLUTION_TYPE.MEDIUM.height, o = n.ENUM_RESOLUTION_TYPE.MEDIUM.frameRate, s = n.ENUM_RESOLUTION_TYPE.MEDIUM.bitRate) : 3 === e.videoQuality ? (r = n.ENUM_RESOLUTION_TYPE.HIGH.width, i = n.ENUM_RESOLUTION_TYPE.HIGH.height, o = n.ENUM_RESOLUTION_TYPE.HIGH.frameRate, s = n.ENUM_RESOLUTION_TYPE.HIGH.bitRate) : 4 === e.videoQuality ? (r = e.width, i = e.height, o = e.frameRate, s = e.bitRate || 800) : this.logger.info("zp.gmsc.2 user default"), !0 === e.horizontal) {
                        var a = i;
                        i = r, r = a
                    }
                    t.video = {
                        width: r,
                        height: i,
                        frameRate: o,
                        bitRate: s
                    }, null != e.facingMode ? t.video.facingMode = e.facingMode : null != e.videoInput && (t.video.deviceId = {exact: e.videoInput}), this.logger.info("zp.gmsc.2 width: " + r + " height: " + i + " rate: " + o)
                }
                return t
            }, e.prototype.startPreview = function (e, t, r, n) {
                var i = this;
                if (this.logger.debug("zp.sv.2 called"), this.localVideo = e, void 0 !== navigator.mediaDevices && null != navigator.mediaDevices.getUserMedia) {
                    if (t.externalMediaStream instanceof MediaStream) return this.logger.debug("zp.sv.2 use external media stream"), this.previewSuc = !0, this.localStream = t.externalMediaStream, this.videoInfo = {
                        width: t.width,
                        height: t.height,
                        frameRate: t.frameRate,
                        bitRate: t.bitRate
                    }, void (r && r());
                    if (t.externalCapture) this.captureStream(e) ? (this.previewSuc = !0, r && r()) : n && n("browser don't support"); else {
                        var o = this.getMediaStreamConstraints(t);
                        this.videoInfo = o.video, this.logger.info("zp.sv.2 ", JSON.stringify(o)), navigator.mediaDevices.getUserMedia(o).then(function (e) {
                            if (i.logger.info("zp.sv.2 success"), !i.localVideo) return i.logger.info("zp.sv.2 no localVideo"), void (n && n("no localVideo"));
                            i.localVideo.srcObject = e, i.localStream = e, i.previewSuc = !0, r && r()
                        }, function (e) {
                            i.logger.info("zp.sv.2 failed"), n && n(e.name)
                        })
                    }
                } else n && n("browser don't support")
            }, e.prototype.captureStream = function (e) {
                if (!e) return this.logger.info("zp.cs.2 no local video"), !1;
                if (e.captureStream) this.localStream = e.captureStream(), this.logger.debug("zp.cs.2 captureStream"); else {
                    if (!e.mozCaptureStream) return this.logger.info("zp.cs.2 don't support"), !1;
                    this.localStream = e.mozCaptureStream(), this.logger.debug("zp.cs.2 mozCaptureStream")
                }
                return this.videoInfo = {
                    width: e.videoWidth,
                    height: e.videoHeight,
                    frameRate: 0,
                    bitRate: 0
                }, this.logger.debug("zp.cs.2 called success"), !0
            }, e.prototype.stopPreview = function () {
                if (this.logger.info("zp.sv.2.1 called"), this.localStream) {
                    var e = this.localStream.getTracks();
                    e.reverse(), e.forEach(function (e) {
                        e.stop()
                    }), this.localStream = null, this.localVideo.srcObject = null, this.localVideo = null, this.videoInfo = {}
                }
            }, e
        }();
        t.ZegoPreview = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(2), o = r(3), s = function () {
            function e(e, t, r, o) {
                this.state = n.ENUM_PUBLISH_STATE.stop, this.sessionId = 0, this.waitingICETimeInterval = 5e3, this.waitingAnswerTimeInterval = 5e3, this.candidateInfo = [], this.waitingICETimer = null, this.waitingAnswerTimer = null, this.qualityTimer = null, this.publishQualityList = [], this.maxQualityListCount = 10, this.lastPublishStats = {}, this.reportSeq = i.getSeq(), this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.qualitySeq = 0, this.maxRetryCount = 3, this.currentRetryCount = 0, this.retryState = n.ENUM_RETRY_STATE.didNotStart, this.waitingServerTimerInterval = 3e3, this.waitingServerTimer = null, this.videoInfo = {
                    width: 0,
                    height: 0,
                    frameRate: 0,
                    bitRate: 0
                }, this.offerSeq = 0, this.qualityCount = 0, this.closeSessionSignal = !1, this.logger = e, this.signal = t, this.dataReport = r, this.qualityTimeInterval = o, r.newReport(this.reportSeq)
            }

            return e.prototype.publishStateUpdateError = function (e) {
                0 != this.sessionId && this.shouldSendCloseSession(e) && (this.signal.sendCloseSession(i.getSeq(), this.sessionId, 1), this.closeSessionSignal = !0), this.state = n.ENUM_PUBLISH_STATE.stop, this.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, this.streamId, e), this.resetPublish()
            }, e.prototype.resetPublish = function () {
                this.logger.info("zp.rp.0 call"), this.streamId = null, this.state = n.ENUM_PUBLISH_STATE.stop, null == this.peerConnection && null == this.peerConnection || (this.peerConnection.close(), this.peerConnection = null), null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), this.clearPublishQualityTimer(), this.signal && (this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId)), this.sessionSeq = 0, this.offerSeq = 0, this.candidateInfo = [], this.publishQualityList = [], this.qualityUploadLastTime = 0, this.currentRetryCount = 0, this.retryState = n.ENUM_RETRY_STATE.didNotStart, this.clearTryPublishTimer()
            }, e.prototype.clearTryPublishTimer = function () {
                null != this.waitingServerTimer && (clearTimeout(this.waitingServerTimer), this.waitingServerTimer = null)
            }, e.prototype.clearPublishQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPublishStats = {}, this.qualityCount = 0
            }, e.prototype.shouldSendCloseSession = function (e) {
                return this.state != n.ENUM_PUBLISH_STATE.stop && this.state != n.ENUM_PUBLISH_STATE.waitingSessionRsp
            }, e.prototype.startPublish = function (e, t, r, o) {
                var s = this;
                this.logger.info("zp.sp.0 called"), e ? (this.streamId = e, this.localStream = t, r && (this.videoInfo = r), this.sessionSeq = i.getSeq(), this.dataReport.eventStart(this.reportSeq, "CreateSession"), this.signal.createSession(this.sessionSeq, 0, 0, e, o && o.streamParams, function (e, t, r) {
                    s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {sessionId: r.session_id}), s.logger.info("zp.sp.0 sessionId:" + r.session_id), s.sessionSeq == e ? 0 !== r.result ? (s.logger.error("zp.sp.0 create session failed " + r.result), s.publishStateUpdateError(i.publishErrorList.CREATE_SESSION_ERROR)) : (s.sessionId = r.session_id, s.logger.debug("zp.sp.0 create session success " + s.sessionId), s.onCreatePublishSessionSuccess(r)) : s.logger.error("zp.sp.0 seq is not match.")
                }, function (e, t) {
                    s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {error: e}), s.publishStateUpdateError(i.publishErrorList.SEND_SESSION_TIMEOUT)
                }), this.state = n.ENUM_PUBLISH_STATE.waitingSessionRsp, this.logger.debug("zp.sp.0 called success")) : this.logger.error("zp.sp.0 streamId is null")
            }, e.prototype.onCreatePublishSessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.0 called");
                var r = [];
                e.turn_server && r.push(e.turn_server), e.stun_server && r.push(e.stun_server);
                var n = {
                    iceTransportPolicy: "relay",
                    iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]
                };
                this.logger.info("zp.ops.0 username: " + e.turn_username), this.logger.info("zp.ops.0 credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(n), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                };
                var o = [], s = [];
                this.localStream && (this.localStream.getTracks().forEach(function (e) {
                    t.peerConnection.addTrack(e, t.localStream)
                }), o = this.localStream.getVideoTracks(), s = this.localStream.getAudioTracks(), o.length > 0 && this.logger.info("zp.ops.0 video device: " + o[0].label), s.length > 0 && this.logger.info("zp.ops.0 audio device: " + s[0].label));
                var a = {offerToReceiveAudio: s.length > 0 ? 1 : 0, offerToReceiveVideo: o.length > 0 ? 1 : 0};
                this.logger.info("zp.ops.0 createOffer: " + a), this.dataReport.eventStart(this.reportSeq, "CreateOffer"), this.peerConnection.createOffer(a).then(function (e) {
                    t.dataReport.eventEnd(t.reportSeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }, function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 create offer error " + e.toString()), t.publishStateUpdateError(i.publishErrorList.CREATE_OFFER_ERROR)
                }), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, function (e, r, n) {
                    t.onRecvCandidateInfo(e, r, n)
                }), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, function (e, r, n) {
                    t.onRecvCloseSession(e, r, n)
                }), this.signal.registerPushCallback("MediaDescPush", this.sessionId, function (e, r, n) {
                    t.onRecvMediaDescription(e, r, n)
                }), this.signal.registerPushCallback("SessionResetPush", this.sessionId, function (e, r, n) {
                    t.onRecvResetSession(e, r, n)
                }), this.logger.debug("zp.ops.0 call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                0 != this.videoInfo.bitRate && (e.sdp = this.updateBandwidthRestriction(e.sdp, this.videoInfo.bitRate)), this.logger.info("zp.oco.0 localSdp1 " + e.sdp.substr(0, e.sdp.length / 2)), this.logger.info("zp.oco.0 localSdp2 " + e.sdp.substr(e.sdp.length / 2)), this.dataReport.eventStart(this.reportSeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then(function () {
                    t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }, function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "SetLocalDescription", {error: e.toString()}), t.logger.error("zp.oco.0 error " + e.toString()), t.publishStateUpdateError(i.publishErrorList.SET_LOCAL_DESC_ERROR)
                })
            }, e.prototype.updateBandwidthRestriction = function (e, t) {
                var r = "AS";
                return "firefox" === o.browserDetails.browser && (t = 1e3 * (t >>> 0), r = "TIAS"), e = -1 === e.indexOf("b=" + r + ":") ? (e = e.replace(/c=IN (.*)\r\n/g, "c=IN $1\r\nb=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "") : (e = e.replace(new RegExp("b=" + r + ":.*\r\n", "g"), "b=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "")
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.0 success");
                var r = {
                    sdp: e.sdp,
                    width: this.videoInfo.width,
                    height: this.videoInfo.height,
                    frameRate: this.videoInfo.frameRate,
                    video_min_kpbs: this.videoInfo.bitRate,
                    video_max_kpbs: this.videoInfo.bitRate,
                    audio_kpbs: 48
                };
                this.offerSeq = i.getSeq(), this.dataReport.eventStart(this.reportSeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.offerSeq, this.sessionId, 0, r, function (e, r, o) {
                    t.offerSeq == e && t.sessionId == r ? (t.logger.info("zp.osd.0 send success"), t.dataReport.eventEnd(t.reportSeq, "SendMediaDesc"), t.waitingAnswerTimer = setTimeout(function () {
                        t.state == n.ENUM_PUBLISH_STATE.waitingServerAnswer && (t.logger.error("zp.osd.0 waiting timeout"), t.publishStateUpdateError(i.publishErrorList.SERVER_MEDIA_DESC_TIMEOUT))
                    }, t.waitingAnswerTimeInterval), t.state = n.ENUM_PUBLISH_STATE.waitingServerAnswer) : t.logger.error("zp.osd.0 seq or sessionId is not equal")
                }, function (e, r) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "SendMediaDesc", {error: e}), t.publishStateUpdateError(i.publishErrorList.SEND_MEDIA_DESC_TIMEOUT)
                }), this.state = n.ENUM_PUBLISH_STATE.waitingOffserRsp, this.logger.debug("zp.osd.0 call success")
            }, e.prototype.onRecvMediaDescription = function (e, t, r) {
                this.logger.info("zp.ormd.0 received"), this.state == n.ENUM_PUBLISH_STATE.waitingServerAnswer ? (null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), this.dataReport.addEvent(this.reportSeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0), 1 == r.type ? this.onGetRemoteOfferSucceses(r.sdp) : this.publishStateUpdateError(i.publishErrorList.SERVER_MEDIA_DESC_ERROR)) : this.logger.info("zp.ormd.0 current state " + this.state + " not allowed")
            }, e.prototype.onGetRemoteOfferSucceses = function (e) {
                var t = this;
                this.logger.info("zp.oro.0 remoteSdp:", e);
                var r = {
                    type: "answer", sdp: e, toJSON: function () {
                    }
                };
                this.dataReport.eventStart(this.reportSeq, "SetRemoteDescription"), this.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).then(function () {
                    t.logger.info("zp.oro.0 set success"), t.dataReport.eventEnd(t.reportSeq, "SetRemoteDescription")
                }, function (e) {
                    t.logger.error("zp.oro.0 failed: " + e.toString()), t.dataReport.eventEndWithMsg(t.reportSeq, "SetRemoteDescription", {error: e.toString()}), t.publishStateUpdateError(i.publishErrorList.SET_REMOTE_DESC_ERROR)
                }), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [], this.state = n.ENUM_PUBLISH_STATE.waitingServerICE, this.waitingICETimer = setTimeout(function () {
                    t.state == n.ENUM_PUBLISH_STATE.waitingServerICE && (t.logger.error("zp.orod.0 waiting server timeout"), t.publishStateUpdateError(i.publishErrorList.SERVER_CANDIDATE_TIMEOUT))
                }, this.waitingICETimeInterval), this.logger.debug("zp.oro.0 call success")
            }, e.prototype.onIceConnectionStateChange = function (e) {
                this.state != n.ENUM_PUBLISH_STATE.stop && null != this.peerConnection && (this.logger.info("zp.oics.0 stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState ? (this.logger.info("zp.oics.0 connected state " + this.state), this.dataReport.eventEnd(this.reportSeq, "IceConnected"), this.state != n.ENUM_PUBLISH_STATE.publishing && this.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.start, this.streamId), this.state = n.ENUM_PUBLISH_STATE.publishing, this.retryState != n.ENUM_RETRY_STATE.didNotStart && (this.retryState = n.ENUM_RETRY_STATE.finished, this.currentRetryCount = 0), this.dataReport.eventStart(this.reportSeq, "PublishState"), this.setPublishQualityTimer()) : "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceClosed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(this.reportSeq, "IceFailed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)))
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.0 candidate" + e.candidate), e.candidate) if (this.logger.info("zp.oic.0 candidate" + e.candidate.candidate), this.state < n.ENUM_PUBLISH_STATE.waitingServerICE || this.state == n.ENUM_PUBLISH_STATE.stop) this.candidateInfo.push({
                    candidate: e.candidate.candidate,
                    sdpMid: e.candidate.sdpMid,
                    sdpMLineIndex: e.candidate.sdpMLineIndex
                }); else {
                    var t = {
                        candidate: e.candidate.candidate,
                        sdpMid: e.candidate.sdpMid,
                        sdpMLineIndex: e.candidate.sdpMLineIndex
                    };
                    this.sendCandidateInfo([t])
                }
            }, e.prototype.sendCandidateInfo = function (e) {
                var t = this;
                this.logger.info("zp.sci.0 called"), !(e = e.filter(function (e) {
                    return e.candidate.indexOf("relay") > 0
                })) || e.length < 1 ? this.logger.info("zp.sci.0 cancelled") : (this.dataReport.eventStart(this.reportSeq, "SendIceCandidate"), this.signal.sendCandidateInfo(i.getSeq(), this.sessionId, e, function (e, r, n) {
                    t.logger.debug("zp.sci.0 send success"), t.dataReport.eventEnd(t.reportSeq, "SendIceCandidate")
                }, function (e, r) {
                    t.logger.error("zp.sci.0 failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(t.reportSeq, "SendIceCandidate", {error: e}), t.publishStateUpdateError(i.publishErrorList.SEND_CANDIDATE_TIMEOUT)
                }))
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.ocs.0 called " + e.target.signalingState)
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var o = this;
                if (this.logger.debug("zp.oci.0 received " + r.infos.length), this.state == n.ENUM_PUBLISH_STATE.waitingServerICE) {
                    null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), this.dataReport.addEvent(this.reportSeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0);
                    for (var s = 0; s < r.infos.length; s++) {
                        var a = {
                            sdpMid: r.infos[s].sdpMid,
                            sdpMLineIndex: r.infos[s].sdpMLineIndex,
                            candidate: r.infos[s].candidate
                        };
                        this.logger.debug("zp.orci.0 candidate " + a.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(a)).then(function () {
                            o.logger.debug("zp.oci.0 add success")
                        }, function (e) {
                            o.logger.error("zp.oci.0 add error " + e.toString()), o.publishStateUpdateError(i.publishErrorList.SERVER_CANDIDATE_ERROR)
                        })
                    }
                    this.state = n.ENUM_PUBLISH_STATE.connecting, this.dataReport.eventStart(this.reportSeq, "IceConnected")
                } else this.logger.info("zp.oci.0 current state " + this.state + " not allowed")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.0 reason: " + r.reason), this.dataReport.addEvent(this.reportSeq, "RecvCloseSession"), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var n = JSON.parse(JSON.stringify(i.publishErrorList.SESSION_CLOSED));
                n.msg += r.reason, this.publishStateUpdateError(n)
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                this.logger.info("zp.orrs.0 received "), t == this.sessionId ? (this.dataReport.addEvent(this.reportSeq, "RecvResetSession"), this.shouldRetryPublish() && this.startRetryPublish()) : this.logger.error("zp.orrs.0 cannot find session")
            }, e.prototype.shouldRetryPublish = function () {
                return this.retryState == n.ENUM_RETRY_STATE.didNotStart && this.state != n.ENUM_PUBLISH_STATE.publishing ? (this.logger.info("zp.srp.0.0 connection didn't success"), !1) : this.retryState == n.ENUM_RETRY_STATE.retrying ? (this.logger.info("zp.srp.0.0 already retrying"), !1) : this.currentRetryCount > this.maxRetryCount ? (this.logger.info("zp.srp.0.0 beyond max"), !1) : (this.logger.info("zp.srp.1.0 call success"), !0)
            }, e.prototype.startRetryPublish = function () {
                this.logger.info("zp.srp.0 call");
                var e = this.streamId;
                e ? (this.resetPublish(), this.tryStartPublish(e)) : this.logger.info("zp.srp.0 no streamid")
            }, e.prototype.tryStartPublish = function (e) {
                var t = this;
                if (this.logger.info("zp.tsp.0 call"), this.clearTryPublishTimer(), this.streamId = e, this.currentRetryCount > this.maxRetryCount) return this.logger.info("zp.tsp.0 beyond max limit"), void this.publishStateUpdateError(i.publishErrorList.WEBSOCKET_ERROR);
                this.retryState = n.ENUM_RETRY_STATE.retrying, this.currentRetryCount += 1, this.signal.isServerConnected() ? (this.logger.debug("zp.tsp.0 signal connected"), this.startPublish(e, this.localStream, this.videoInfo)) : (this.logger.debug("zp.tsp.0 signal server not connected"), this.waitingAnswerTimer = setTimeout(function () {
                    t.tryStartPublish(e)
                }, this.waitingAnswerTimeInterval))
            }, e.prototype.checkPublishConnectionFailedState = function (e) {
                var t = null;
                "failed" == e ? t = i.publishErrorList.MEDIA_CONNECTION_FAILED : "closed" == e && (t = i.publishErrorList.MEDIA_CONNECTION_CLOSED), null != t && (this.state != n.ENUM_PUBLISH_STATE.publishing && this.retryState == n.ENUM_PUBLISH_STATE.didNotStart ? (this.logger.info("zp.oics.0  state " + this.state + " retryState " + this.retryState + " connectionState " + e), this.publishStateUpdateError(t)) : this.shouldRetryPublish() ? (this.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId), this.startRetryPublish()) : this.publishStateUpdateError(t))
            }, e.prototype.setPublishQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.debug("zp.spq.0 called"), this.clearPublishQualityTimer(), this.qualityTimer = setInterval(function () {
                    e.peerConnection && e.peerConnection.getStats(null).then(function (t) {
                        e.getPublishStats(t)
                    }, function (t) {
                        e.logger.info("zp.spq.0 getStats error " + t.toString())
                    })
                }, this.qualityTimeInterval), this.lastPublishStats = {
                    time: 0,
                    audioBytesSent: 0,
                    videoBytesSent: 0,
                    framesEncoded: 0,
                    framesSent: 0
                }, this.qualitySeq = i.getSeq(), this.qualityCount = 0, this.dataReport.newReport(this.qualitySeq))
            }, e.prototype.getPublishStats = function (e) {
                var t = this;
                if (e) {
                    var r = {
                        audioBitrate: 0,
                        videoBitrate: 0,
                        videoFPS: 0,
                        nackCount: 0,
                        pliCount: 0,
                        sliCount: 0,
                        frameHeight: 0,
                        frameWidth: 0,
                        videoTransferFPS: 0,
                        totalRoundTripTime: 0,
                        currentRoundTripTime: 0
                    }, n = this.lastPublishStats.time;
                    e.forEach(function (e) {
                        ("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "audio" == e.mediaType ? (0 != n && (r.audioBitrate = 8 * (e.bytesSent - t.lastPublishStats.audioBytesSent) / (e.timestamp - n)), r.audioBitrate < 0 && (r.audioBitrate = 0), t.lastPublishStats.audioBytesSent = e.bytesSent, t.lastPublishStats.time = e.timestamp) : ("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "video" == e.mediaType ? (0 != n && (r.videoBitrate = 8 * (e.bytesSent - t.lastPublishStats.videoBytesSent) / (e.timestamp - n), r.videoFPS = 1e3 * (e.framesEncoded - t.lastPublishStats.framesEncoded) / (e.timestamp - n)), r.videoBitrate < 0 && (r.videoBitrate = 0), r.videoFPS < 0 && (r.videoFPS = 0), r.nackCount = e.nackCount, r.pliCount = e.pliCount, r.sliCount = e.sliCount, t.lastPublishStats.videoBytesSent = e.bytesSent, t.lastPublishStats.framesEncoded = e.framesEncoded, t.lastPublishStats.time = e.timestamp) : "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0) ? (r.frameHeight = e.frameHeight, r.frameWidth = e.frameWidth, 0 != n && (r.videoTransferFPS = 1e3 * (e.framesSent - t.lastPublishStats.framesSent) / (e.timestamp - n)), r.videoTransferFPS < 0 && (r.videoTransferFPS = 0), t.lastPublishStats.framesSent = e.framesSent) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (r.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (r.currentRoundTripTime = e.currentRoundTripTime))
                    }), this.uploadPublishQuality(r), 0 != n && this.onPublishQualityUpdate(this.streamId, r)
                }
            }, e.prototype.uploadPublishQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (this.logger.debug("zp.upq.0 upload"), e.stream_type = "publish", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.signal.QualityReport(i.getSeq(), this.sessionId, e, function (e, r, n) {
                        void 0 !== n.report && (t.qualityUpload = n.report, t.qualityUploadInterval = n.report_interval_ms)
                    }, function (e, r) {
                        t.logger.info("zp.upq.0 upload failed " + e)
                    }), this.qualityUploadLastTime = r)
                }
            }, e.prototype.stopPublish = function () {
                this.logger.debug("zp.sp.0.1 called"), this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(i.getSeq(), this.sessionId, 0), this.dataReport.eventEndWithMsg(this.reportSeq, "PublishState", {state: this.state + ""}), this.dataReport.addEvent(this.reportSeq, "StopPublish"), this.dataReport.addMsgExt(this.reportSeq, {
                    stream: this.streamId,
                    sessionId: this.sessionId
                }), this.dataReport.uploadReport(this.reportSeq, "RTCPublishStream"), this.resetPublish()
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.onPublishQualityUpdate = function (e, t) {
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.0 call"), this.logger.info("zp.od.0 websocket disconnect"), this.dataReport.addEvent(this.reportSeq, "OnDisconnect"), this.publishStateUpdateError(i.publishErrorList.WEBSOCKET_ERROR)
            }, e
        }();
        t.ZegoPublish = s
    }, function (e, t) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function (e, t, r) {
        "use strict";
        var n = this && this.__assign || Object.assign || function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), o = r(2), s = function () {
            function e(e, t) {
                this.sendDataMap = {}, this.sendDataList = new i.LinkedList, this.sendDataCheckOnceCount = 100, this.signalSeq = 0, this.pushCallback = {}, this.sessionInfos = {}, this.tryHeartbeatCount = 0, this.heartbeatInterval = 1e4, this.sendDataTimeout = 5e3, this.sendDataDropTimeout = 1e4, this.tryConnectCount = 1, this.tryConnectTimer = null, this.tryConnectInterval = 3e3, this.state = i.ENUM_CONNECT_STATE.disconnect, this.tokenType = 0, this.browser = this.getBrowserAndVersion(), this.platform = navigator.platform, this.logger = e, this.stateCenter = t
            }

            return e.prototype.getBrowserAndVersion = function () {
                var e, t = navigator.userAgent,
                    r = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
                return /trident/i.test(r[1]) ? {
                    name: "IE",
                    version: (e = /\brv[ :]+([\d\.]+)/g.exec(t) || [])[1] || ""
                } : "Chrome" === r[1] && null != (e = t.match(/\bOPR|Edge\/([\d\.]+)/)) ? {
                    name: "Opera",
                    version: e[1]
                } : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/([\d+\.]+)/i)) && r.splice(1, 1, e[1]), {
                    name: r[0],
                    version: r[1]
                })
            }, e.prototype.setSessionInfo = function (e, t) {
                this.logger.debug("zs.ssi.0 call"), this.appid = e + "", this.userid = t
            }, e.prototype.onDisconnect = function (e) {
            }, e.prototype.onUpdateHeartBeartInterval = function (e) {
            }, e.prototype.resetConnectTimer = function () {
                this.logger.info("zs.rct.0 call"), clearTimeout(this.tryConnectTimer), this.tryConnectTimer = null, this.tryConnectCount = 0
            }, e.prototype.bindWebSocketHandle = function () {
                var e = this;
                this.websocket.onmessage = function (t) {
                    var r = JSON.parse(t.data);
                    e.logger.debug("zs.bsh.0 signmsg= ", r.header.cmd), r.header.appid == e.appid && r.header.user_id === e.userid ? e.handleServerPush(r) : e.logger.warn("zs.bsh.0 check header failed")
                }, this.websocket.onclose = function (t) {
                    e.logger.info("zs.bsh.0 close msg = " + JSON.stringify(t)), e.state != i.ENUM_CONNECT_STATE.disconnect && (e.resetConnectTimer(), e.startConnectTimer(), e.resetCheckMessage())
                }, this.websocket.onerror = function (t) {
                    e.logger.error("zs.bsh.0 msg = " + JSON.stringify(t))
                }
            }, e.prototype.resetCheckMessage = function () {
                this.logger.debug("zs.rcm.0 call");
                for (var e = this.sendDataList.getFirst(); null != e;) this.sendDataList.remove(e), e._data.error && e._data.error(i.SEND_MSG_RESET, e._data.seq), e = this.sendDataList.getFirst();
                this.sendDataMap = {}
            }, e.prototype.handleServerPush = function (e) {
                switch (e.header.cmd) {
                    case"LoginRsp":
                        this.handleRespondData("LoginReq", e);
                        break;
                    case"CreateSessionRsp":
                        this.handleRespondData("CreateSessionReq", e), 0 === e.body.result && this.addSession(e.header.session_id, e.body.session_token);
                        break;
                    case"MediaDescRsp":
                        this.handleRespondData("MediaDescReq", e);
                        break;
                    case"CandidateInfoRsp":
                        this.handleRespondData("CandidateInfoReq", e);
                        break;
                    case"CloseSessionRsp":
                        this.handleRespondData("CloseSessionReq", e), this.removeSession(e.header.session_id);
                        break;
                    case"ClientHBRsp":
                        this.handleRespondData("ClientHBReq", e);
                        break;
                    case"MediaDescPush":
                    case"CandidateInfoPush":
                        this.handlePushData(e);
                        break;
                    case"CloseSessionPush":
                        this.handlePushData(e), this.removeSession(e.header.session_id);
                        break;
                    case"QualityReportRsp":
                        this.handleRespondData("QualityReportReq", e);
                        break;
                    case"SessionResetPush":
                        this.handlePushResetSessionData(e)
                }
            }, e.prototype.disconnectCallback = function () {
                this.connectCallback && (this.connectCallback(-1, this.server, void 0), this.connectCallback = null);
                var e = this.server;
                this.disconnectServer(), this.onDisconnect(e)
            }, e.prototype.updateToken = function () {
                var e = this;
                this.logger.info("zs.ut.0 call");
                var t = {
                    token: this.token,
                    tokenType: this.tokenType,
                    roomid: this.stateCenter.roomid,
                    anchorname: this.stateCenter.anchor_info.anchor_id,
                    sdkversion: i.PROTO_VERSION,
                    osinfo: navigator.appVersion
                };
                if (0 != Object.keys(this.sessionInfos).length) {
                    var r = [];
                    for (var n in this.sessionInfos) {
                        var s = parseInt(n);
                        r.push({session_id: s, session_token: this.sessionInfos[s].token})
                    }
                    t.sessions = r
                }
                this.sendMessageWithCallback("LoginReq", o.getSeq(), 0, t, function (t, r, n) {
                    if (0 == n.result) {
                        e.token = n.token, e.tokenType = n.tokenType;
                        var i = {report: n.report, report_interval: n.report_interval_ms};
                        null != e.connectCallback && (e.connectCallback(0, e.server, i), e.connectCallback = null)
                    } else {
                        var o = {error: n.strError};
                        null != e.connectCallback && (e.connectCallback(n.result, e.server, o), e.connectCallback = null)
                    }
                }, function (t, r) {
                    null != e.connectCallback && (e.connectCallback(-1, e.server, void 0), e.connectCallback = null)
                })
            }, e.prototype.sendMessageWithCallback = function (e, t, r, n, o, s) {
                if (this.logger.debug("zs.smwc.0 call " + e), !this.websocket || 1 !== this.websocket.readyState) return this.logger.error("zs.smwc.0 connect not establish"), void (s && s(i.SEND_MSG_TIMEOUT, t));
                var a = {header: this.getHeader(e, t, r), body: n};
                null == o && (o = null), null == s && (s = null);
                var c = {seq: t, deleted: !1, cmd: e, time: Date.parse(new Date + ""), success: o, error: s},
                    d = this.sendDataList.push(c);
                this.sendDataMap[c.seq] = d;
                var l = JSON.stringify(a);
                this.websocket.send(l), this.logger.debug("zs.smwc.0 success")
            }, e.prototype.getHeader = function (e, t, r) {
                return this.globalHeader = {
                    version: "1.0.1",
                    cmd: e,
                    appid: this.appid + "",
                    seq: t,
                    user_id: this.userid,
                    session_id: r
                }, this.globalHeader
            }, e.prototype.connectServer = function (e, t, r) {
                var n = this;
                if (this.token = e, this.server = t, this.state = i.ENUM_CONNECT_STATE.connecting, this.connectCallback = r, this.websocket && 1 === this.websocket.readyState) this.resetConnectTimer(), this.state = i.ENUM_CONNECT_STATE.connected; else {
                    this.logger.debug("zs.cs.0 need new websocket");
                    try {
                        this.websocket && (this.logger.warn("zs.cs.0 close error websocket"), this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.websocket = new WebSocket(this.server), this.websocket.onopen = function () {
                            n.resetConnectTimer(), n.logger.info("zs.cs.0 websocket open call"), n.bindWebSocketHandle(), n.updateToken(), n.state = i.ENUM_CONNECT_STATE.connected
                        }
                    } catch (e) {
                        this.logger.error("zs.cs.0 websocket error " + e)
                    }
                }
                this.tryConnectTimer = setTimeout(function () {
                    n.startConnectTimer(r)
                }, this.tryConnectInterval)
            }, e.prototype.startConnectTimer = function (e) {
                if (this.logger.info("zs.sct.0 call"), this.tryConnectCount >= i.MAX_TRY_CONNECT_COUNT) return this.logger.error("zs.sct.0 beyond max limit"), void this.disconnectCallback();
                this.websocket && 1 === this.websocket.readyState ? this.resetConnectTimer() : (this.tryConnectCount += 1, this.connectServer(this.token, this.server, e))
            }, e.prototype.disconnectServer = function () {
                this.logger.debug("zs.ds.0 call"), this.server = null, this.connectCallback = null, this.resetCheckMessage(), this.resetConnectTimer(), this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.token = "", this.sessionInfos = {}, this.tokenType = 0, this.tryHeartbeatCount = 0, this.tryConnectCount = 0, this.state = i.ENUM_CONNECT_STATE.disconnect
            }, e.prototype.isServerConnected = function () {
                return !(!this.websocket || 1 !== this.websocket.readyState)
            }, e.prototype.createSession = function (e, t, r, n, i, o, s) {
                void 0 === i && (i = ""), this.logger.debug("zs.cs.1 call: ", n);
                var a = {
                    type: t,
                    stream_id: n,
                    platform: this.platform,
                    browser: this.browser.name,
                    version: this.browser.version,
                    app_id: this.appid,
                    negotiate_mode: r,
                    strAuthParam: i
                };
                this.sendMessageWithCallback("CreateSessionReq", e, 0, a, o, s)
            }, e.prototype.removeSession = function (e) {
                this.logger.info("zs.rs.0 call"), this.sessionInfos[e] && delete this.sessionInfos[e]
            }, e.prototype.sendCloseSession = function (e, t, r, n, i) {
                this.logger.debug("zs.scs.0 call: ", t);
                var o = {reason: r};
                this.removeSession(t), this.sendMessageWithCallback("CloseSessionReq", e, t, o, n, i)
            }, e.prototype.sendMessage = function (e, t, r, n) {
                if (this.logger.debug("zs.sm.0 call " + e), this.websocket && 1 === this.websocket.readyState) {
                    var i = {header: this.getHeader(e, t, r), body: n}, o = JSON.stringify(i);
                    this.websocket.send(o), this.logger.debug("zs.sm.0 success")
                } else this.logger.error("zs.sm.0 connect not establish")
            }, e.prototype.handleRespondData = function (e, t) {
                this.logger.debug("zs.hrd.0 call");
                var r = this.sendDataMap[t.header.seq];
                if (null != r) {
                    var n = r._data;
                    n.cmd !== e ? this.logger.error("sz.hrd.0 command is not match") : n.success && n.success(t.header.seq, t.header.session_id, t.body), delete this.sendDataMap[t.header.seq], this.sendDataList.remove(r)
                } else {
                    if ("CloseSessionRsp" == t.header.cmd) return;
                    this.logger.error("zs.hrd.0 cannot find data " + e)
                }
            }, e.prototype.addSession = function (e, t) {
                this.logger.info("zs.as.0 call"), this.sessionInfos[e] = {token: t}
            }, e.prototype.handlePushData = function (e) {
                this.logger.debug("zs.hpd.0 call " + e.header.cmd + " session " + e.header.session_id);
                var t = this.pushCallback[e.header.cmd + e.header.session_id];
                t ? t.callback && t.callback(e.header.seq, e.header.session_id, e.body) : this.logger.info("zs.hpd.0 no callbackData " + e.header.cmd + " session: " + e.header.session_id)
            }, e.prototype.handlePushResetSessionData = function (e) {
                this.logger.debug("zs.hprsd.0 call ");
                var t = [];
                if (0 == e.body.cResetType) t = Object.keys(this.sessionInfos); else if (1 == e.body.cResetType) for (var r = 0; r < e.body.session_ids.length; r++) t.push(e.body.session_ids[r]);
                if (this.sendResetSessionAck(e.header.seq, 0, 0), 0 != t.length) for (var n = 0; n < t.length; n++) {
                    var i = this.pushCallback[e.header.cmd + t[n]];
                    null == i ? this.logger.info("zs.hprsd.0 no callbackData " + t[n]) : i.callback && i.callback(i.object, e.header.seq, t[n], e.body)
                } else this.logger.info("zs.hprsd.0 no session to callback")
            }, e.prototype.sendMediaDesc = function (e, t, r, n, i, o) {
                this.logger.debug("zs.smd.0 call: ", t);
                var s = {type: r, sdp: n.sdp};
                null != n.width && (s.width = n.width), null != n.height && (s.height = n.height), null != n.frameRate && (s.framerate = n.frameRate), null != n.video_min_kpbs && (s.video_min_kpbs = n.video_min_kpbs), null != n.video_max_kpbs && (s.video_max_kpbs = n.video_max_kpbs), null != n.audio_kpbs && (s.audio_kpbs = n.audio_kpbs), this.sendMessageWithCallback("MediaDescReq", e, t, s, i, o)
            }, e.prototype.sendCandidateInfo = function (e, t, r, n, i) {
                this.logger.debug("zs.sci.0 call: ", t);
                for (var o = [], s = 0; s < r.length; s++) {
                    var a = {candidate: r[s].candidate, sdpMid: r[s].sdpMid, sdpMLineIndex: r[s].sdpMLineIndex};
                    o.push(a)
                }
                var c = {infos: o};
                this.sendMessageWithCallback("CandidateInfoReq", e, t, c, n, i)
            }, e.prototype.sendMediaDescAck = function (e, t, r) {
                this.logger.debug("zs.smda.0 call: ", t);
                var n = {result: r};
                this.sendMessage("MediaDescAck", e, t, n)
            }, e.prototype.sendCandidateInfoAck = function (e, t, r) {
                this.logger.debug("zs.scia.0 call: ", t);
                var n = {result: r};
                this.sendMessage("CandidateInfoAck", e, t, n)
            }, e.prototype.sendCloseSessionAck = function (e, t, r) {
                this.logger.debug("zs.scsa.0 call: ", t);
                var n = {result: r};
                this.sendMessage("CloseSessionAck", e, t, n)
            }, e.prototype.sendResetSessionAck = function (e, t, r) {
                this.logger.debug("zs.ssra.0 call: ", t);
                var n = {result: r};
                this.sendMessage("SessionResetAck", e, t, n)
            }, e.prototype.registerPushCallback = function (e, t, r) {
                r && "function" == typeof r && (this.logger.debug("zs.rpc.0 setcallback"), this.pushCallback[e + t] = {callback: r})
            }, e.prototype.unregisterPushCallback = function (e, t) {
                delete this.pushCallback[e + t]
            }, e.prototype.checkMessageTimeout = function () {
                for (var e = this.sendDataList.getFirst(), t = Date.parse(new Date + ""), r = 0, n = 0, o = 0; !(null == e || e._data.time + this.sendDataTimeout > t || (delete this.sendDataMap[e._data.seq], this.sendDataList.remove(e), ++n, null == e._data.error || this.sendDataDropTimeout > 0 && e._data.time + this.sendDataDropTimeout < t ? ++o : e._data.error && e._data.error(i.SEND_MSG_TIMEOUT, e._data.seq), ++r >= this.sendDataCheckOnceCount));) e = this.sendDataList.getFirst();
                0 == n && 0 == o || this.logger.debug("zs.cmt.0 call success, state: timeout=", n, " drop=", o)
            }, e.prototype.sendHeartbeat = function () {
                var e = this;
                if (this.logger.debug("zs.shb.0 call"), 0 != Object.keys(this.sessionInfos).length) {
                    if (++this.tryHeartbeatCount > i.MAX_TRY_HEARTBEAT_COUNT) return this.logger.error("zs.shb.0 heartbeat try limit"), void this.disconnectCallback();
                    var t = [];
                    for (var r in this.sessionInfos) t.push(parseInt(r));
                    var n = {session_ids: t};
                    this.sendMessageWithCallback("ClientHBReq", o.getSeq(), 0, n, function (t, r, n) {
                        e.heartbeatInterval != n.hb_interval && (e.heartbeatInterval = n.hb_interval, e.onUpdateHeartBeartInterval(n.hb_interval)), e.tryHeartbeatCount = 0
                    }, function (t, r) {
                        e.tryHeartbeatCount += 1
                    })
                } else this.logger.info("zs.shb.0 no need to heartbeat")
            }, e.prototype.QualityReport = function (e, t, r, i, o) {
                this.logger.debug("zs.qr.0 call");
                var s = {streams: [n({}, r, {aid: t})]};
                this.sendMessageWithCallback("QualityReportReq", e, t, s, i, o)
            }, e
        }();
        t.ZegoSignal = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(2), o = function () {
            function e(e, t, r, o) {
                this.state = n.ENUM_PLAY_STATE.stop, this.candidateInfo = [], this.waitICETimer = null, this.waitingICETimeInterval = 5e3, this.waitingOfferTimer = null, this.waitingOfferTimeInterval = 5e3, this.waitingServerTimer = null, this.waitingServerTimerInterval = 3e3, this.qualityTimer = null, this.playQualityList = [], this.maxQualityListCount = 10, this.lastPlayStats = {
                    time: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0
                }, this.reportSeq = i.getSeq(), this.videoSizeCallback = !1, this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.maxRetryCount = 3, this.currentRetryCount = 0, this.retryState = n.ENUM_RETRY_STATE.didNotStart, this.closeSessionSignal = !1, this.logger = e, this.signal = t, this.dataReport = r, this.qualityTimeInterval = o, r.newReport(this.reportSeq)
            }

            return e.prototype.setAudioDestination = function (e) {
                var t = this;
                return this.remoteVideo ? "undefined" !== this.remoteVideo.sinkId ? (this.remoteVideo.setSinkId(e).then(function () {
                    t.logger.info("zp.sad.1 success device: " + e)
                }).catch(function (e) {
                    t.logger.info("zp.sad.1 " + e.name)
                }), !0) : (this.logger.error("zp.sad.1 browser does not suppport"), !1) : (this.logger.info("zp.sad.1 no remoteVideo"), !1)
            }, e.prototype.startPlay = function (e, t, r, o) {
                var s = this;
                this.logger.info("zp.sp.1 called ", e), e ? (this.streamId = e, this.remoteVideo = t, this.audioOutput = r, this.playOption = o, this.sessionSeq = i.getSeq(), this.dataReport.eventStart(this.reportSeq, "CreateSession"), this.signal.createSession(this.sessionSeq, 1, 0, e, o && o.streamParams, function (e, t, r) {
                    s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {sessionId: r.session_id}), s.logger.info("zp.sp.1 sessionId:" + r.session_id), s.sessionSeq == e ? 0 !== r.result ? (s.logger.error("zp.sp.1 create error"), s.playStateUpdateError(i.playErrorList.CREATE_SESSION_ERROR)) : (s.sessionId = r.session_id, s.onCreatePlaySessionSuccess(r)) : s.logger.error("zp.sp.1 seq is not match.")
                }, function (e, t) {
                    s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {error: e}), s.playStateUpdateError(i.playErrorList.SEND_SESSION_TIMEOUT)
                }), this.state = n.ENUM_PLAY_STATE.waitingSessionRsp, this.logger.debug("zp.sp.1 called success")) : this.logger.warn("zp.sp.1 streamId is null")
            }, e.prototype.onCreatePlaySessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.1 success");
                var r = [];
                e.turn_server && r.push(e.turn_server), e.stun_server && r.push(e.stun_server);
                var n = {iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]};
                this.logger.info("zp.ops.1 username: " + e.turn_username), this.logger.info("zp.ops.1 credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(n), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                }, this.peerConnection.ontrack = function (e) {
                    t.onGotRemoteStream(e.streams[0])
                }, this.remoteVideo.oncanplay = function () {
                    t.logger.debug("zp.ops.1 " + t.remoteVideo.videoWidth + " X " + t.remoteVideo.videoHeight), t.videoSizeCallback || (t.logger.debug("zp.ops.1 onresize callback"), t.onVideoSizeChanged(t.streamId, t.remoteVideo.videoWidth, t.remoteVideo.videoHeight), t.videoSizeCallback = !0)
                };
                var o = {offerToReceiveAudio: 1, offerToReceiveVideo: 1};
                this.playOption && "audio" === this.playOption.playType && (o.offerToReceiveVideo = 0), this.playOption && "video" === this.playOption.playType && (o.offerToReceiveAudio = 0), this.logger.info("zp.ops.1 createOffer: " + o), this.dataReport.eventStart(this.reportSeq, "CreateOffer"), this.peerConnection.createOffer(o).then(function (e) {
                    t.dataReport.eventEnd(t.reportSeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }, function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 create offer error " + e.toString()), t.playStateUpdateError(i.playErrorList.CREATE_OFFER_ERROR)
                }), this.signal.registerPushCallback("MediaDescPush", this.sessionId, function (e, r, n) {
                    t.onRecvMediaDesc(e, r, n)
                }), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, function (e, r, n) {
                    t.onRecvCandidateInfo(e, r, n)
                }), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, function (e, r, n) {
                    t.onRecvCloseSession(e, r, n)
                }), this.signal.registerPushCallback("SessionResetPush", this.sessionId, function (e, r, n) {
                    t.onRecvResetSession(e, r, n)
                }), this.logger.debug("zp.ops.1 call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                this.logger.info("zp.oco.1 localSdp ", e.sdp), this.dataReport.eventStart(this.reportSeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then(function () {
                    t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }, function (e) {
                    t.logger.error("zp.oca.1 set error " + e.toString()), t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription", {error: e.toString()}), t.playStateUpdateError(i.playErrorList.SET_LOCAL_DESC_ERROR)
                })
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.1 success");
                var r = {sdp: e.sdp};
                this.answerSeq = i.getSeq(), this.dataReport.eventStart(this.reportSeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.answerSeq, this.sessionId, 0, r, function (e, r, o) {
                    t.answerSeq == e && t.sessionId == r ? (t.logger.info("zp.osd.1 send success"), t.dataReport.eventEnd(t.reportSeq, "SendMediaDesc"), t.waitingOfferTimer = setTimeout(function () {
                        t.state == n.ENUM_PLAY_STATE.waitingOffserRsp && (t.logger.error("zp.osd.1 waiting timeout"), t.playStateUpdateError(i.playErrorList.SERVER_CANDIDATE_TIMEOUT))
                    }, t.waitingOfferTimeInterval), t.state = n.ENUM_PLAY_STATE.waitingServerAnswer) : t.logger.error("zp.osd.1 seq or sessionId is not equal " + t.answerSeq + " " + e, 0 + t.sessionId + " " + r)
                }, function (e, r) {
                    t.logger.error("zp.osd.1 failed to send " + e), t.dataReport.eventEndWithMsg(t.reportSeq, "SendMediaDesc", {error: e}), t.playStateUpdateError(i.playErrorList.SEND_MEDIA_DESC_TIMEOUT)
                }), this.state = n.ENUM_PLAY_STATE.waitingOffserRsp
            }, e.prototype.onRecvMediaDesc = function (e, t, r) {
                var o = this;
                if (this.logger.info("zp.orm.1 received ", r), this.state === n.ENUM_PLAY_STATE.waitingServerAnswer) {
                    null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), this.dataReport.addEvent(this.reportSeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0);
                    var s = {
                        type: "answer", sdp: r.sdp, toJSON: function () {
                        }
                    };
                    this.dataReport.eventStart(this.reportSeq, "SetRemoteDescription"), this.logger.info("zp.orm.1 remoteSdp ", s.sdp), this.peerConnection.setRemoteDescription(new RTCSessionDescription(s)).then(function () {
                        o.dataReport.eventEnd(o.reportSeq, "SetRemoteDescription"), o.logger.info("zp.orm.1 set success")
                    }, function (e) {
                        o.logger.error("zp.orm.1 set remote error " + e.toString()), o.dataReport.eventEndWithMsg(o.reportSeq, "SetRemoteDescription", {error: e.toString()}), o.playStateUpdateError(i.playErrorList.SET_REMOTE_DESC_ERROR)
                    }), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [], this.waitICETimer = setTimeout(function () {
                        o.state == n.ENUM_PLAY_STATE.waitingServerICE && (o.logger.error("zp.orm.1 waiting server timeout"), o.playStateUpdateError(i.playErrorList.SERVER_CANDIDATE_TIMEOUT))
                    }, this.waitingICETimeInterval), this.state = n.ENUM_PLAY_STATE.waitingServerICE, this.logger.debug("zp.orm.1 call success")
                } else this.logger.error("zp.orm.1 current state " + this.state + " not allowed")
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var o = this;
                if (this.logger.debug("zp.orci.1 received "), this.state == n.ENUM_PLAY_STATE.waitingServerICE) {
                    null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), this.dataReport.addEvent(this.reportSeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0);
                    for (var s = 0; s < r.infos.length; s++) {
                        var a = {
                            sdpMid: r.infos[s].sdpMid,
                            sdpMLineIndex: r.infos[s].sdpMLineIndex,
                            candidate: r.infos[s].candidate
                        };
                        this.logger.debug("zp.orci.1 candidate " + a.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(a)).then(function () {
                            o.logger.debug("zp.orci.1 add success")
                        }, function (e) {
                            o.logger.error("zp.orci.1 add error " + e.toString()), o.playStateUpdateError(i.playErrorList.SERVER_CANDIDATE_ERROR)
                        })
                    }
                    this.state = n.ENUM_PLAY_STATE.connecting, this.logger.debug("zp.orci.1 call success")
                } else this.logger.warn("zp.orci.1 current state " + this.state + " not allowed")
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.1 called"), null != e.candidate) if (this.logger.debug("zp.oic.1 candidate " + e.candidate.candidate), this.state < n.ENUM_PLAY_STATE.waitingServerICE || this.state == n.ENUM_PLAY_STATE.stop) this.logger.debug("zp.oic.1 cached"), this.candidateInfo.push({
                    candidate: e.candidate.candidate,
                    sdpMid: e.candidate.sdpMid,
                    sdpMLineIndex: e.candidate.sdpMLineIndex
                }); else {
                    this.logger.debug("zp.oic.1 send");
                    var t = {
                        candidate: e.candidate.candidate,
                        sdpMid: e.candidate.sdpMid,
                        sdpMLineIndex: e.candidate.sdpMLineIndex
                    };
                    this.sendCandidateInfo([t])
                }
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.oisc.1 called " + e.target.signalingState)
            }, e.prototype.onIceConnectionStateChange = function (e) {
                this.state != n.ENUM_PLAY_STATE.stop && null != this.peerConnection && (this.logger.info("zp.oisc.1  stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceConnected"), this.state != n.ENUM_PLAY_STATE.playing && this.onPlayStateUpdate(i.ENUM_PLAY_STATE_UPDATE.start, this.streamId), this.state = n.ENUM_PLAY_STATE.playing, this.retryState != n.ENUM_RETRY_STATE.didNotStart && (this.retryState = n.ENUM_RETRY_STATE.finished, this.currentRetryCount = 0), this.dataReport.eventStart(this.reportSeq, "PlayState"), this.setPlayQualityTimer()) : "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceClosed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(this.reportSeq, "IceFailed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)))
            }, e.prototype.checkPlayConnectionFailedState = function (e) {
                var t = null;
                "failed" == e ? t = i.playErrorList.MEDIA_CONNECTION_FAILED : "closed" == e && (t = i.playErrorList.MEDIA_CONNECTION_CLOSED), null != t && (this.state != n.ENUM_PLAY_STATE.playing && this.retryState == n.ENUM_PLAY_STATE.didNotStart ? (this.logger.info("zp.oics.1  state " + this.state + " retryState " + this.retryState + " connectionState " + e), this.playStateUpdateError(t)) : this.shouldRetryPlay() ? (this.onPlayStateUpdate(i.ENUM_PLAY_STATE_UPDATE.retry, this.streamId), this.startRetryPlay()) : this.playStateUpdateError(t))
            }, e.prototype.shouldRetryPlay = function () {
                return this.retryState == n.ENUM_RETRY_STATE.didNotStart && this.state != n.ENUM_PLAY_STATE.playing ? (this.logger.info("zp.srp.1.0 connection didn't success"), !1) : this.retryState == n.ENUM_RETRY_STATE.retrying ? (this.logger.info("zp.srp.0.0 already retrying"), !1) : this.currentRetryCount > this.maxRetryCount ? (this.logger.info("zp.srp.1.0 beyond max"), !1) : (this.logger.debug("zp.srp.1.0 call success"), !0)
            }, e.prototype.startRetryPlay = function () {
                this.logger.debug("zp.srp.0 call");
                var e = this.streamId, t = this.remoteVideo, r = this.audioOutput;
                this.resetPlay(), this.tryStartPlay(e, t, r)
            }, e.prototype.clearTryPlayTimer = function () {
                null != this.waitingServerTimer && (clearTimeout(this.waitingServerTimer), this.waitingServerTimer = null)
            }, e.prototype.tryStartPlay = function (e, t, r) {
                var o = this;
                if (this.logger.debug("zp.tsp.1 call"), this.clearTryPlayTimer(), this.streamId = e, this.remoteVideo = t, this.audioOutput = r, this.currentRetryCount > this.maxRetryCount) return this.logger.error("zp.tsp.1 beyond max limit"), void this.playStateUpdateError(i.playErrorList.WEBSOCKET_ERROR);
                this.retryState = n.ENUM_RETRY_STATE.retrying, this.currentRetryCount += 1, this.signal.isServerConnected() ? (this.logger.debug("zp.tsp.1 signal connected"), this.startPlay(e, this.remoteVideo, this.audioOputput)) : (this.logger.debug("zp.tsp.1 signal server not connected"), this.waitingServerTimer = setTimeout(function () {
                    o.tryStartPlay(e, o.remoteVideo, o.audioOputput)
                }, this.waitingServerTimerInterval))
            }, e.prototype.clearPlayQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPlayStats = {
                    time: null,
                    audioBytesReceived: null,
                    videoBytesReceived: null,
                    framesDecoded: null,
                    framesDropped: null,
                    framesReceived: null
                }
            }, e.prototype.resetPlay = function () {
                this.logger.info("zp.rp.1 call"), this.streamId = null, this.state = n.ENUM_PLAY_STATE.stop, null != this.peerConnection && (this.peerConnection.close(), this.peerConnection = null), null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), this.clearPlayQualityTimer(), this.remoteVideo && (this.remoteVideo.srcObject = null, this.remoteVideo.oncanplay = null, this.remoteVideo = null), this.audioOputput = null, this.signal && (this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId)), this.sessionSeq = 0, this.answerSeq = 0, this.videoSizeCallback = !1, this.currentRetryCount = 0, this.retryState = n.ENUM_RETRY_STATE.didNotStart, this.clearTryPlayTimer()
            }, e.prototype.setPlayQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.debug("zp.spq.1 startTimer"), this.clearPlayQualityTimer(), this.qualityTimer = setInterval(function () {
                    e.peerConnection && e.peerConnection.getStats(null).then(function (t) {
                        e.getPlayStats(t)
                    }, function (t) {
                        e.logger.info("zp.spq.1 getStats error " + t.toString())
                    })
                }, this.qualityTimeInterval), this.lastPlayStats = {
                    time: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0
                })
            }, e.prototype.getPlayStats = function (e) {
                var t = this;
                if (null != e) {
                    var r = {
                        audioFractionLost: 0,
                        audioPacketsLost: 0,
                        audioBitrate: 0,
                        videoBitrate: 0,
                        videoFPS: 0,
                        playData: 0,
                        nackCount: 0,
                        pliCount: 0,
                        sliCount: 0,
                        videoFractionLos: 0,
                        audioJitter: 0,
                        videoFractionLost: null,
                        videoFramesDecoded: 0,
                        frameHeight: 0,
                        frameWidth: 0,
                        videoTransferFPS: 0,
                        videoFramesDropped: 0,
                        totalRoundTripTime: 0,
                        currentRoundTripTime: 0
                    }, n = this.lastPlayStats.time;
                    e.forEach(function (e) {
                        ("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("audio" == e.mediaType || e.id.indexOf("AudioStream") >= 0) ? (0 != n && (r.audioBitrate = 8 * (e.bytesReceived - t.lastPlayStats.audioBytesReceived) / (e.timestamp - n)), r.audioBitrate < 0 && (r.audioBitrate = 0), r.audioJitter = e.jitter, r.audioPacketsLost = e.packetsLost, r.audioFractionLost = e.fractionLost, t.lastPlayStats.audioBytesReceived = e.bytesReceived, t.lastPlayStats.time = e.timestamp) : ("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("video" == e.mediaType || e.id.indexOf("VideoStream") >= 0) ? (0 != n && (r.videoBitrate = 8 * (e.bytesReceived - t.lastPlayStats.videoBytesReceived) / (e.timestamp - n), r.videoFPS = 1e3 * (e.framesDecoded - t.lastPlayStats.framesDecoded) / (e.timestamp - n)), r.videoBitrate < 0 && (r.videoBitrate = 0), r.videoFPS < 0 && (r.videoFPS = 0), r.nackCount = e.nackCount, r.pliCount = e.pliCount, r.sliCount = e.sliCount, r.videoFractionLost = e.fractionLost, r.videoFramesDecoded = e.framesDecoded, t.lastPlayStats.videoBytesReceived = e.bytesReceived, t.lastPlayStats.framesDecoded = e.framesDecoded, t.lastPlayStats.time = e.timestamp) : "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0) ? (r.frameHeight = e.frameHeight, r.frameWidth = e.frameWidth, 0 != n && (r.videoTransferFPS = 1e3 * (e.framesReceived - t.lastPlayStats.framesReceived) / (e.timestamp - n), r.videoFramesDropped = e.framesDropped - t.lastPlayStats.framesDropped), r.videoTransferFPS < 0 && (r.videoTransferFPS = 0), r.videoFramesDropped < 0 && (r.videoFramesDropped = 0), t.lastPlayStats.framesReceived = e.framesReceived, t.lastPlayStats.framesDropped = e.framesDropped) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (r.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (r.currentRoundTripTime = e.currentRoundTripTime))
                    }), this.uploadPlayQuality(r), 0 != n && this.onPlayQualityUpdate(this.streamId, r)
                }
            }, e.prototype.uploadPlayQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (this.logger.debug("zp.upq.1 upload"), e.stream_type = "play", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.signal.QualityReport(i.getSeq(), this.sessionId, e, function (e, r, n) {
                        void 0 !== n.report && (t.qualityUpload = n.report, t.qualityUploadInterval = n.report_interval_ms)
                    }, function (e, r) {
                        t.logger.info("zp.upq.1 upload failed " + e)
                    }), this.qualityUploadLastTime = r)
                }
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                this.logger.info("zp.orrs.1 received "), t == this.sessionId ? (this.dataReport.addEvent(this.reportSeq, "RecvResetSession"), this.shouldRetryPlay() && this.startRetryPlay()) : this.logger.info("zp.orrs.1 cannot find session")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.1 reason: " + r.reason), this.dataReport.addEvent(this.reportSeq, "RecvCloseSession"), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var n = JSON.parse(JSON.stringify(i.playErrorList.SESSION_CLOSED));
                n.msg += r.reason, 24 === r.reason ? this.startRetryPlay() : this.playStateUpdateError(n)
            }, e.prototype.onGotRemoteStream = function (e) {
                this.logger.info("zp.ogrs.0 called " + e), this.remoteVideo ? (this.remoteVideo.srcObject = e, this.audioOputput && this.setAudioDestination(this.audioOputput), this.dataReport.addEvent(this.reportSeq, "GetRemoteStream")) : this.logger.error("zp.ogrs.0 no remoteVideo")
            }, e.prototype.sendCandidateInfo = function (e) {
                var t = this;
                this.logger.debug("zp.sci.1 called"), !(e = e.filter(function (e) {
                    return !(e.candidate.indexOf("tcp") > 0)
                })) || e.length < 1 ? this.logger.info("zp.sci.1 cancelled") : (this.dataReport.eventStart(this.reportSeq, "SendIceCandidate"), this.signal.sendCandidateInfo(i.getSeq(), this.sessionId, e, function (e, r, n) {
                    t.logger.debug("zp.sci.1 send success"), t.dataReport.eventEnd(t.reportSeq, "SendIceCandidate")
                }, function (e, r) {
                    t.logger.error("zp.sci.1 failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(t.reportSeq, "SendIceCandidate", {error: e}), t.playStateUpdateError(i.playErrorList.SEND_CANDIDATE_ERROR)
                }))
            }, e.prototype.shouldSendCloseSession = function (e) {
                return this.state != i.ENUM_PLAY_STATE_UPDATE.stop && this.state != n.ENUM_PLAY_STATE.waitingSessionRsp
            }, e.prototype.playStateUpdateError = function (e) {
                this.logger.debug("zp.psue.1 called ", e.code), 0 != this.sessionId && this.shouldSendCloseSession(e) && (this.signal.sendCloseSession(i.getSeq(), this.sessionId, 1), this.closeSessionSignal = !0), this.state = n.ENUM_PLAY_STATE.stop, this.onPlayStateUpdate(i.ENUM_PLAY_STATE_UPDATE.error, this.streamId, e), this.resetPlay()
            }, e.prototype.onPlayStateUpdate = function (e, t, r) {
            }, e.prototype.onPlayQualityUpdate = function (e, t) {
            }, e.prototype.onVideoSizeChanged = function (e, t, r) {
            }, e.prototype.stopPlay = function () {
                this.logger.debug("zp.sp.1.1 called"), this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(i.getSeq(), this.sessionId, 0), this.dataReport.eventEndWithMsg(this.reportSeq, "PlayState", {state: this.state + ""}), this.dataReport.addEvent(this.reportSeq, "StopPlay"), this.dataReport.addMsgExt(this.reportSeq, {
                    stream: this.streamId,
                    sessionId: this.sessionId
                }), this.dataReport.uploadReport(this.reportSeq, "RTCPlayStream"), this.resetPlay()
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.1 call"), this.logger.info("zp.od.1 websocket disconnect"), this.dataReport.addEvent(this.reportSeq, "OnDisconnect"), this.playStateUpdateError(i.playErrorList.WEBSOCKET_ERROR)
            }, e
        }();
        t.ZegoPlayWeb = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e(e, t) {
                this.playerList = {}, this.publisherList = {}
            }

            return e.prototype.setSessionInfo = function (e, t, r, n) {
            }, e
        }();
        t.ZegoStreamCenter = n
    }, function (e, t, r) {
        "use strict";
        var n,
            i = this && this.__extends || (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(16), s = r(0), a = r(1), c = r(17), d = r(18), l = r(19), h = r(20), p = r(21), u = r(22),
            g = function (e) {
                function t() {
                    return e.call(this) || this
                }

                return i(t, e), t.prototype.init = function () {
                    this.bindSocketHandler(), this.bindStreamHandler(), this.bindHeatBeatHandler(), this.bindRoomHandler(), this.bindMessageHandler(), this.bindLiveHandler(), this.bindStreamCenterHandler()
                }, t.prototype.bindSocketHandler = function () {
                    var e = this;
                    this.socketCenter = new c.SocketCenter(this.logger, this.stateCenter), this.socketCenter.registerRouter("push_signal", function (t) {
                        e.liveHandler.handlePushSignalMsg(t)
                    }), this.socketCenter.getSocket = function (t) {
                        return e.getSocket(t)
                    }, this.socketCenter.handlePushKickout = function (t) {
                        e.logger.info("zb.cm.bsh.0  call hpk"), e.roomHandler.setRunState(s.ENUM_RUN_STATE.logout), e.roomHandler.resetRoom(), e.onKickOut({
                            code: s.sdkErrorList.KICK_OUT.code,
                            msg: s.sdkErrorList.KICK_OUT.msg + t.body.reason
                        }), e.logger.debug("zb.cm.bsh.0  call hpk success")
                    }, this.socketCenter.handlePushCustomMsg = function (t) {
                        e.messageHandler.handlePushCustomMsg(t)
                    }, this.socketCenter.handlePushUserStateUpdateMsg = function (t) {
                        e.roomHandler.handlePushUserStateUpdateMsg(t)
                    }, this.socketCenter.handlePushRoomMsg = function (t) {
                        e.onRecvRoomMsg(t.body.chat_data, t.body.server_msg_id, t.body.ret_msg_id)
                    }, this.socketCenter.handlePushMergeMsg = function (t) {
                        e.messageHandler.handlePushMergeMsg(t)
                    }, this.socketCenter.handlePushTransMsg = function (t) {
                        e.messageHandler.handlePushTransMsg(t)
                    }, this.socketCenter.handleBigImMsgRsp = function (t) {
                        e.messageHandler.handleBigImMsgRsp(t)
                    }
                }, t.prototype.bindStreamHandler = function () {
                    var e = this;
                    this.streamHandler = new l.StreamHandler(this.logger, this.stateCenter, this.socketCenter), this.streamHandler.onStreamUpdated = function (t, r) {
                        e.onStreamUpdated(t, r)
                    }, this.streamHandler.onPublishStateUpdate = function (t, r, n) {
                        e.onPublishStateUpdate(t, r, n)
                    }, this.streamHandler.onStreamExtraInfoUpdated = function (t) {
                        e.onStreamExtraInfoUpdated(t)
                    }, this.streamHandler.setCDNInfo = function (t, r) {
                        e.setCDNInfo(t, r)
                    }
                }, t.prototype.bindHeatBeatHandler = function () {
                    var e = this;
                    this.heartBeatHandler = new h.HeartBeatHandler(this.logger, this.stateCenter, this.socketCenter), this.heartBeatHandler.onRecvReliableMessage = function (t, r, n) {
                        e.onRecvReliableMessage(t, r, n)
                    }, this.heartBeatHandler.handleFetchStreamListRsp = function (t) {
                        e.streamHandler.handleFetchStreamListRsp(t)
                    }, this.heartBeatHandler.fetchUserList = function () {
                        e.roomHandler.fetchUserList()
                    }, this.heartBeatHandler.onUpdateOnlineCount = function (t, r) {
                        e.onUpdateOnlineCount(t, r)
                    }, this.heartBeatHandler.updateStreamInfo = function (t, r, n, i) {
                        void 0 === n && (n = ""), e.streamHandler.updateStreamInfo(t, r, n, i)
                    }, this.heartBeatHandler.hbLogout = function (t) {
                        e.onDisconnect(t)
                    }
                }, t.prototype.bindRoomHandler = function () {
                    var e = this;
                    this.roomHandler = new d.RoomHandler(this.logger, this.stateCenter, this.socketCenter), this.roomHandler.loginSuccessCallBack = function (t, r) {
                        var n = r.body.hearbeat_interval < s.MINIUM_HEARTBEAT_INTERVAL ? s.MINIUM_HEARTBEAT_INTERVAL : r.body.hearbeat_interval;
                        e.heartBeatHandler.start(n), e.heartBeatHandler.resetCheckMessage(), e.heartBeatHandler.startCheckMessageTimeout(), e.streamCenter.setSessionInfo(e.stateCenter.appid, e.stateCenter.idName, e.stateCenter.token, e.stateCenter.testEnvironment), r.body.anchor_info && e.onGetAnchorInfo(r.body.anchor_info.anchor_id_name, r.body.anchor_info.anchor_nick_name), r.body.online_count && e.onUpdateOnlineCount(e.stateCenter.roomid, r.body.online_count), e.logger.info("zb.cm.brh hls userStateUpdate " + e.stateCenter.userStateUpdate), e.stateCenter.userStateUpdate && (e.logger.info("zb.cm.brh hls fetch all new userlist"), e.roomHandler.fetchUserList()), e.streamHandler.handleStreamStart(t, r)
                    }, this.roomHandler.onGetTotalUserList = function (t, r) {
                        e.onGetTotalUserList(t, r)
                    }, this.roomHandler.resetRoomCallBack = function () {
                        e.heartBeatHandler.resetHeartbeat(), e.heartBeatHandler.resetCheckMessage(), e.resetStreamCenter()
                    }, this.roomHandler.onUserStateUpdate = function (t, r) {
                        e.onUserStateUpdate(t, r)
                    }, this.roomHandler.onDisconnect = function (t) {
                        e.onDisconnect(t)
                    }, this.roomHandler.loginBodyData = function () {
                        return e.loginBodyData()
                    }
                }, t.prototype.bindMessageHandler = function () {
                    var e = this;
                    this.messageHandler = new p.MessageHandler(this.logger, this.stateCenter, this.socketCenter), this.messageHandler.onRecvCustomCommand = function (t, r, n) {
                        e.onRecvCustomCommand(t, r, n)
                    }, this.messageHandler.onRecvBigRoomMessage = function (t, r) {
                        e.onRecvBigRoomMessage(t, r)
                    }, this.messageHandler.onRecvReliableMessage = function (t, r, n) {
                        e.onRecvReliableMessage(t, r, n)
                    }
                }, t.prototype.bindLiveHandler = function () {
                    var e = this;
                    this.liveHandler = new u.LiveHandler(this.logger, this.stateCenter, this.socketCenter), this.liveHandler.onRecvEndJoinLiveCommand = function (t, r, n, i) {
                        e.onRecvEndJoinLiveCommand(t, r, n, i)
                    }, this.liveHandler.onRecvInviteJoinLiveRequest = function (t, r, n, i) {
                        e.onRecvInviteJoinLiveRequest(t, r, n, i)
                    }, this.liveHandler.onRecvJoinLiveRequest = function (t, r, n, i) {
                        e.onRecvJoinLiveRequest(t, r, n, i)
                    }
                }, t.prototype.bindStreamCenterHandler = function () {
                    var e = this;
                    this.streamCenter.onPlayStateUpdate = function (t, r, n) {
                        e.onPlayStateUpdateHandle(t, r, n)
                    }, this.streamCenter.onPlayQualityUpdate = function (t, r) {
                        e.onPlayQualityUpdate(t, r)
                    }, this.streamCenter.onPublishStateUpdate = function (t, r, n) {
                        e.onPublishStateUpdateHandle(t, r, n)
                    }, this.streamCenter.onPublishQualityUpdate = function (t, r) {
                        e.onPublishQualityUpdate(t, r)
                    }, this.streamCenter.onPlayerStreamUrlUpdate = function (t, r, n) {
                        e.onStreamUrlUpdate(t, r, n)
                    }, this.streamCenter.onVideoSizeChanged = function (t, r, n) {
                        e.onVideoSizeChanged(t, r, n)
                    }
                }, t.prototype.config = function (e) {
                    return this.logger.debug("zb.cm.cf call"), a.ClientUtil.checkConfigParam(e, this.logger) ? (this.stateCenter.appid = e.appid, this.stateCenter.server = e.server, this.stateCenter.idName = e.idName, this.stateCenter.nickName = e.nickName, this.logger.setLogLevel(e.logLevel), !1 === e.audienceCreateRoom && (this.stateCenter.roomCreateFlag = 0), e.remoteLogLevel ? this.logger.setRemoteLogLevel(e.remoteLogLevel) : this.logger.setRemoteLogLevel(0), this.logger.setSessionInfo(e.appid, "", "", e.idName, "", s.PROTO_VERSION), e.logUrl && this.logger.openLogServer(e.logUrl), -1 != this.stateCenter.server.indexOf("test2-wsliveroom-api.zego.im") && (this.stateCenter.testEnvironment = !0), this.stateCenter.configOK = !0, this.logger.debug("zb.cm.cf call success"), !0) : (this.logger.error("zb.cm.cf param error"), !1)
                }, t.prototype.login = function (e, t, r, n, i) {
                    "string" != typeof e || "string" != typeof r || 1 !== t && 2 !== t ? console.error("login params error") : this.roomHandler.login(e, t, r, null, n, i)
                }, t.prototype.loginWithAuthor = function (e, t, r, n, i, o) {
                    "string" != typeof e || "string" != typeof r || "string" != typeof n || 1 != t && 2 != t ? console.error("loginWithAuthor params error") : this.roomHandler.login(e, t, r, n, i, o)
                }, t.prototype.logout = function () {
                    return this.roomHandler.logout()
                }, t.prototype.setUserStateUpdate = function (e) {
                    "boolean" == typeof e ? this.roomHandler.setUserStateUpdate(e) : console.error("setUserStateUpdate param error")
                }, t.prototype.onUserStateUpdate = function (e, t) {
                }, t.prototype.onGetTotalUserList = function (e, t) {
                }, t.prototype.onUpdateOnlineCount = function (e, t) {
                }, t.prototype.onGetAnchorInfo = function (e, t) {
                }, t.prototype.release = function () {
                    this.logger.debug("zb.cm.rl call"), this.roomHandler.setRunState(s.ENUM_RUN_STATE.logout), this.roomHandler.resetRoom(), this.logger.stopLogServer(), this.logger.debug("zb.cm.rl call success")
                }, t.prototype.sendCustomCommand = function (e, t, r, n) {
                    return "string" != typeof t && "object" != typeof t ? (console.error("sendCustomCommand params error"), !1) : this.messageHandler.sendCustomCommand(e, t, r, n)
                }, t.prototype.onRecvCustomCommand = function (e, t, r) {
                }, t.prototype.sendRoomMsg = function (e, t, r, n, i) {
                    this.messageHandler.sendRoomMsg(e, t, r, n, i)
                }, t.prototype.onRecvRoomMsg = function (e, t, r) {
                }, t.prototype.sendReliableMessage = function (e, t, r, n) {
                    this.messageHandler.sendReliableMessage(e, t, r, n)
                }, t.prototype.onRecvReliableMessage = function (e, t, r) {
                }, t.prototype.sendBigRoomMessage = function (e, t, r, n, i) {
                    this.messageHandler.sendBigRoomMessage(e, t, r, n, i)
                }, t.prototype.onRecvBigRoomMessage = function (e, t) {
                }, t.prototype.sendRelayMessage = function (e, t, r, n) {
                    this.messageHandler.sendRelayMessage(e, t, r, n)
                }, t.prototype.requestJoinLive = function (e, t, r, n) {
                    return this.liveHandler.requestJoinLive(e, t, r, n)
                }, t.prototype.onRecvJoinLiveRequest = function (e, t, r, n) {
                }, t.prototype.inviteJoinLive = function (e, t, r, n) {
                    return this.liveHandler.inviteJoinLive(e, t, r, n)
                }, t.prototype.onRecvInviteJoinLiveRequest = function (e, t, r, n) {
                }, t.prototype.endJoinLive = function (e, t, r) {
                    return this.liveHandler.endJoinLive(e, t, r)
                }, t.prototype.onRecvEndJoinLiveCommand = function (e, t, r, n) {
                }, t.prototype.respondJoinLive = function (e, t, r, n) {
                    return this.liveHandler.respondJoinLive(e, t, r, n)
                }, t.prototype.updateMixStream = function (e, t, r) {
                    return this.streamHandler.updateMixStream(e, t, r)
                }, t.prototype.stopMixStream = function (e, t, r) {
                    return this.streamHandler.stopMixStream(e, t, r)
                }, t.prototype.updateStreamExtraInfo = function (e, t) {
                    return this.streamHandler.updateStreamExtraInfo(e, t)
                }, t.prototype.onStreamUrlUpdate = function (e, t, r) {
                }, t.prototype.onStreamUpdated = function (e, t) {
                }, t.prototype.onStreamExtraInfoUpdated = function (e) {
                }, t.prototype.onPlayStateUpdate = function (e, t, r) {
                }, t.prototype.onVideoSizeChanged = function (e, t, r) {
                }, t.prototype.onPlayQualityUpdate = function (e, t) {
                }, t.prototype.onPublishStateUpdate = function (e, t, r) {
                }, t.prototype.onPublishQualityUpdate = function (e, t) {
                }, t.prototype.onDisconnect = function (e) {
                }, t.prototype.onKickOut = function (e) {
                }, t.getCurrentVersion = function () {
                    return s.PROTO_VERSION
                }, t
            }(o.Common);
        t.BaseCenter = g
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = function () {
            function e() {
            }

            return e.prototype.onPlayStateUpdateHandle = function (e, t, r) {
                1 == e && this.stopPlayingStream(t), this.onPlayStateUpdate(e, t, r)
            }, e.prototype.onPublishStateUpdateHandle = function (e, t, r) {
                var i = this;
                0 == e ? this.stateCenter.publishStreamList[t] && (this.stateCenter.publishStreamList[t].state == n.ENUM_PUBLISH_STREAM_STATE.tryPublish ? (this.stateCenter.publishStreamList[t].state = n.ENUM_PUBLISH_STREAM_STATE.update_info, this.streamHandler.updateStreamInfo(t, n.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[t].extra_info, function (e) {
                    i.stateCenter.publishStreamList[t] && i.stateCenter.publishStreamList[t].state == n.ENUM_PUBLISH_STREAM_STATE.update_info && (i.stateCenter.publishStreamList[t].state = n.ENUM_PUBLISH_STREAM_STATE.stop, i.onPublishStateUpdate(1, t, e), i.streamCenter.stopPlayingStream(t))
                })) : this.WebrtcOnPublishStateUpdateHandle(e, t, r)) : (this.onPublishStateUpdate(e, t, r), 1 == e && this.stopPublishingStream(t))
            }, e.prototype.resetStreamCenter = function () {
                if (this.stateCenter.customUrl && (this.stateCenter.customUrl = null), this.streamCenter.reset(), !this.socketCenter.isDisConnect()) for (var e in this.stateCenter.publishStreamList) this.stateCenter.publishStreamList[e].state == n.ENUM_PUBLISH_STREAM_STATE.publishing && this.streamHandler.updateStreamInfo(e, n.ENUM_STREAM_SUB_CMD.liveEnd, this.stateCenter.publishStreamList[e].extra_info)
            }, e.prototype.handleFetchWebRtcUrlRsp = function (e) {
                var t = e.body.stream_id;
                if ("push" === e.body.ptype) this.stateCenter.publishStreamList[t] ? this.streamCenter.startPublishingStream(t, e.body.urls) : this.logger.error("cb.cm.hfwur no streamid to publish"); else if ("pull" == e.body.ptype) {
                    for (var r = !1, n = 0; n < this.stateCenter.streamList.length; n++) if (this.stateCenter.streamList[n].stream_id === t) {
                        r = !0;
                        break
                    }
                    0 == r && this.logger.warn("cb.cm.hfwur cannot find stream, continue to play"), this.streamCenter.startPlayingStream(t, e.body.urls)
                }
            }, e
        }();
        t.Common = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(1), o = function () {
            function e(e, t) {
                var r = this;
                this.cmdSeq = 0, this.responseRouters = {}, this.logger = e, this.stateCenter = t, this.responseRouters = {
                    push_kickout: function (e) {
                        r.handlePushKickout(e)
                    }, push_custommsg: function (e) {
                        r.handlePushCustomMsg(e)
                    }, push_im_chat: function (e) {
                        r.handlePushRoomMsg(e)
                    }, push_userlist_update: function (e) {
                        r.handlePushUserStateUpdateMsg(e)
                    }, push_merge_message: function (e) {
                        r.handlePushMergeMsg(e)
                    }, trans: function (e) {
                        r.handleTransRsp(e)
                    }, push_trans: function (e) {
                        r.handlePushTransMsg(e)
                    }
                }
            }

            return e.prototype.handlePushKickout = function (e) {
            }, e.prototype.handlePushCustomMsg = function (e) {
            }, e.prototype.handlePushRoomMsg = function (e) {
            }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
            }, e.prototype.handlePushMergeMsg = function (e) {
            }, e.prototype.handlePushTransMsg = function (e) {
            }, e.prototype.handleBigImMsgRsp = function (e) {
            }, e.prototype.handleTransRsp = function (e) {
                if (this.stateCenter.isLogin()) if (0 == e.body.err_code) {
                    var t = e.body.trans_type;
                    this.stateCenter.transSeqMap[t] ? (this.stateCenter.transSeqMap[t].seq = e.body.trans_seq, this.logger.debug("zb.sc.htr trans " + t + " seq " + e.body.trans_seq)) : this.logger.error("zb.sc.htr cannot match send info")
                } else this.logger.error("zb.sc.htr trans send error " + e.body.err_code); else this.logger.error("zb.sc.htr not login")
            }, e.prototype.handleBizChannelRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && t.success(e.header.seq, e.body.cmd, e.body.rsp_body) : null != t.error && t.error(e.body.err_code, e.header.seq, e.body.rsp_body)
            }, e.prototype.registerRouter = function (e, t) {
                this.responseRouters[e] = t
            }, e.prototype.getSocket = function (e) {
                return null
            }, e.prototype.getHeaderV2 = function (e) {
                return {
                    Protocol: "req_v2",
                    cmd: e,
                    appid: this.stateCenter.appid,
                    seq: ++this.cmdSeq,
                    user_id: this.stateCenter.userid,
                    session_id: this.stateCenter.sessionid || "",
                    room_id: this.stateCenter.roomid || ""
                }
            }, e.prototype.getHeader = function (e) {
                return {
                    Protocol: "req",
                    cmd: e,
                    appid: this.stateCenter.appid,
                    seq: ++this.cmdSeq,
                    user_id: this.stateCenter.userid,
                    session_id: this.stateCenter.sessionid || "",
                    room_id: this.stateCenter.roomid || ""
                }
            }, e.prototype.sendMessage = function (e, t, r, i) {
                if (this.logger.debug("zb.sc.sm call " + e), this.isDisConnect()) return this.logger.error("zb.sc.sm error  " + e), -1;
                var o = "V1" === n.ROOMVERSION ? this.getHeader(e) : this.getHeaderV2(e), s = {header: o, body: t};
                if (null == r && (r = null), null == i && (i = null), null != r || null != i) {
                    var a = {data: s, seq: o.seq, deleted: !1, time: Date.parse(new Date + ""), success: r, error: i},
                        c = this.stateCenter.sendCommandList.push(a);
                    this.stateCenter.sendCommandMap[a.seq] = c
                }
                return this.websocket.send(JSON.stringify(s)), this.logger.debug("zb.sc.sm success"), o.seq
            }, e.prototype.sendCustomMessage = function (e, t, r, i) {
                if (this.logger.debug("zb.sc.scm call"), this.isDisConnect()) return this.logger.error("zb.sc.scm error"), !1;
                var o = "V1" === n.ROOMVERSION ? this.getHeader(e) : this.getHeaderV2(e), s = {header: o, body: t},
                    a = JSON.stringify(s);
                null == r && (r = null), null == i && (i = null);
                var c = {data: s, seq: o.seq, deleted: !1, time: Date.parse(new Date + ""), success: r, error: i},
                    d = this.stateCenter.sendDataList.push(c);
                return this.stateCenter.sendDataMap[c.seq] = d, this.websocket.send(a), this.logger.debug("zb.sc.scm success seq: ", o.seq), !0
            }, e.prototype.isDisConnect = function () {
                return !this.websocket || 1 !== this.websocket.readyState
            }, e.prototype.closeSocket = function () {
                this.websocket && (this.logger.info("zb.sc.cs close websocket"), this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
            }, e.prototype.createSocket = function (e) {
                this.websocket = this.getSocket(e)
            }, e.prototype.openHandler = function (e) {
                this.websocket.onopen = e
            }, e.prototype.closeHandler = function (e) {
                this.websocket.onclose = e
            }, e.prototype.errorHandler = function () {
                var e = this;
                this.websocket.onerror = function (t) {
                    e.logger.error("zb.sc.oe msg=" + JSON.stringify(t))
                }
            }, e.prototype.checkResponse = function (e) {
                return (e.header.appid !== this.stateCenter.appid || e.header.session_id !== this.stateCenter.sessionid || e.header.user_id !== this.stateCenter.userid || e.header.room_id !== this.stateCenter.roomid || this.stateCenter.runState !== n.ENUM_RUN_STATE.login) && (this.logger.error("zb.sc.crp check session fail."), !0)
            }, e.prototype.responseHandler = function () {
                var e = this;
                this.websocket.onmessage = function (t) {
                    var r = JSON.parse(t.data);
                    e.logger.info("zb.sc.ws.rph jsonmsg= ", r.header.cmd), e.logger.info("zb.sc.ws.rph jsonmsg= ", t.data), "login" !== r.header.cmd ? "logout" !== r.header.cmd ? e.stateCenter.isLogin() ? e.checkResponse(r) ? e.logger.error("zb.sc.ws.rph check session fail.") : (e.handleSendCommandMsgRsp(r), e.logger.info("zb.sc.ws.rph cmd=" + r.header.cmd + ",function=" + !!e.responseRouters[r.header.cmd]), e.responseRouters[r.header.cmd] && e.responseRouters[r.header.cmd](r)) : e.logger.warn("zb.sc.ws.rph  already logout") : e.responseRouters.logout(r, e.cmdSeq) : e.responseRouters.login(r, e.cmdSeq)
                }
            }, e.prototype.handleSendCommandMsgRsp = function (e) {
                this.logger.debug("zb.sc.hscmr call");
                var t, r = this.stateCenter.sendCommandMap[e.header.seq];
                null != r && ("login" == (t = r._data).data.header.cmd ? this.logger.debug("zb.sc.hscmr don't check " + t.data.header.cmd) : "relay" == t.data.header.cmd ? this.handleRelayRspCallback(e, t) : "bigim_chat" == t.data.header.cmd ? this.handleBigImRspCallback(e, t) : "biz_channel" == t.data.header.cmd ? this.handleBizChannelRspCallback(e, t) : 0 === e.body.err_code ? null != t.success && t.success(e.header.seq) : null != t.error && t.error(i.ClientUtil.getServerError(e.body.err_code), e.header.seq), delete this.stateCenter.sendCommandMap[e.header.seq], this.stateCenter.sendCommandList.remove(r)), this.logger.debug("zb.sc.hscmr call success")
            }, e.prototype.handleRelayRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && t.success(e.header.seq, e.body.relay_result) : null != t.error && t.error(i.ClientUtil.getServerError(e.body.err_code), e.header.seq)
            }, e.prototype.handleBigImRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && this.handleBigImMsgRsp(e) : null != t.error && t.error(i.ClientUtil.getServerError(e.body.err_code), e.header.seq)
            }, e
        }();
        t.SocketCenter = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(1), o = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.setRunState = function (e) {
                this.logger.debug("zb.rh.srs old=" + this.stateCenter.runState + ", new=" + e), this.stateCenter.lastRunState = this.stateCenter.runState, this.stateCenter.runState = e
            }, e.prototype.resetTryLogin = function () {
                this.logger.debug("zb.rh.rtl call"), clearTimeout(this.stateCenter.tryLoginTimer), this.stateCenter.tryLoginTimer = null, this.stateCenter.tryLoginCount = 0, this.logger.debug("zb.rh.rtl call success")
            }, e.prototype.resetBigRoomInfo = function () {
                this.stateCenter.transSeqMap = {}, this.stateCenter.realyMessageList = [], this.stateCenter.relayTimer && (clearTimeout(this.stateCenter.relayTimer), this.stateCenter.relayTimer = null), this.stateCenter.bigImLastTimeIndex = 0, this.stateCenter.bigIMmessageList = [], this.stateCenter.bigImCallbackMap = {}, this.stateCenter.bigImTimer && (clearTimeout(this.stateCenter.bigImTimer), this.stateCenter.bigImTimer = null), this.stateCenter.serverTimeOffset = 0, this.stateCenter.datiTimeWindow = 0, this.stateCenter.bigimTimeWindow = 0
            }, e.prototype.resetRoom = function () {
                var e = this;
                if (this.logger.debug("zb.rh.rr call"), this.resetTryLogin(), this.resetRoomCallBack(), this.stateCenter.streamList = [], this.stateCenter.streamQuerying = !1, this.stateCenter.publishStreamList = {}, this.stateCenter.joinLiveCallbackMap = {}, this.stateCenter.joinLiveRequestMap = {}, this.stateCenter.streamUrlMap = {}, this.resetBigRoomInfo(), this.stateCenter.cmdCallback = {}, this.logger.debug("zb.rh.rr call send logout=", this.stateCenter.sessionid), "0" !== this.stateCenter.sessionid) {
                    this.socketCenter.registerRouter("logout", function (t) {
                        e.handleLogoutRsp(t)
                    }), this.socketCenter.sendMessage("logout", {reserve: 0})
                }
                this.socketCenter.closeSocket(), this.setRunState(n.ENUM_RUN_STATE.logout), this.stateCenter.userid = "", this.stateCenter.sessionid = "", this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.userid, this.stateCenter.idName, this.stateCenter.sessionid, n.PROTO_VERSION), this.logger.debug("zb.rh.rr call success")
            }, e.prototype.resetRoomCallBack = function () {
            }, e.prototype.onDisconnect = function (e) {
            }, e.prototype.loginSuccessCallBack = function (e, t) {
            }, e.prototype.onGetTotalUserList = function (e, t) {
            }, e.prototype.login = function (e, t, r, o, s, a) {
                if (this.logger.setSessionInfo(this.stateCenter.appid, e, "", this.stateCenter.idName, "", n.PROTO_VERSION), this.logger.info("zb.rh.lg call:", e, r), o && (this.stateCenter.third_token = o), !this.stateCenter.configOK || !i.ClientUtil.checkLoginParam(e, r)) return this.logger.error("zb.rh.lg param error"), void a({
                    code: "",
                    msg: "param error"
                });
                this.stateCenter.runState !== n.ENUM_RUN_STATE.logout && (this.logger.debug("zb.rh.lg reset"), this.setRunState(n.ENUM_RUN_STATE.logout), this.resetRoom()), this.logger.debug("zb.rh.lg begin"), this.setRunState(n.ENUM_RUN_STATE.trylogin), this.stateCenter.roomid = e, this.stateCenter.token = r, this.stateCenter.role = t, i.ClientUtil.registerCallback("login", {
                    success: s,
                    error: a
                }, this.stateCenter.callbackList), this.resetTryLogin(), this.tryLogin(), this.logger.info("zb.rh.lg call success")
            }, e.prototype.loginBodyData = function () {
                return null
            }, e.prototype.tryLogin = function () {
                var e = this;
                if (this.logger.debug("zb.rh.tl call"), this.stateCenter.runState === n.ENUM_RUN_STATE.trylogin) {
                    if (++this.stateCenter.tryLoginCount > n.MAX_TRY_LOGIN_COUNT) {
                        this.logger.error("zb.rh.tl fail times limit");
                        var t = this.stateCenter.lastRunState;
                        return this.setRunState(n.ENUM_RUN_STATE.logout), this.resetRoom(), void (t == n.ENUM_RUN_STATE.login ? (this.logger.error("zb.rh.tl fail and disconnect"), this.onDisconnect(n.sdkErrorList.LOGIN_DISCONNECT)) : (this.logger.info("zb.rh.tl fail and callback user"), i.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(n.sdkErrorList.LOGIN_TIMEOUT)))
                    }
                    if (this.stateCenter.startConnceTime = (new Date).getTime(), console.warn("start connect", this.stateCenter.startConnceTime), this.socketCenter.isDisConnect()) {
                        this.logger.debug("zb.rh.tl need new websocket");
                        try {
                            this.socketCenter.closeSocket(), this.logger.debug("zb.rh.tl new websocket"), this.socketCenter.createSocket(this.stateCenter.server), this.socketCenter.registerRouter("login", function (t, r) {
                                e.handleLoginRsp(t, r)
                            }), this.socketCenter.closeHandler(function (t) {
                                e.socketCenter.closeSocket(), e.closeHandler(t)
                            }), this.socketCenter.openHandler(function () {
                                e.openHandler()
                            })
                        } catch (e) {
                            this.logger.error("zb.rh.tl websocket err:" + e)
                        }
                    } else {
                        var r = this.loginBodyData();
                        this.logger.info("zb.rh.tl use current websocket and sent login"), this.socketCenter.sendMessage("login", r)
                    }
                    this.stateCenter.tryLoginTimer = setTimeout(function () {
                        e.tryLogin()
                    }, n.TRY_LOGIN_INTERVAL[this.stateCenter.tryLoginCount % n.MAX_TRY_LOGIN_COUNT]), this.logger.info("zb.rh.tl call success")
                } else this.logger.error("zb.rh.tl state error")
            }, e.prototype.handleLoginRsp = function (e, t) {
                if (this.logger.debug("zb.rh.hlr call"), this.stateCenter.runState === n.ENUM_RUN_STATE.trylogin) {
                    if (e.header.seq === t) return 0 !== e.body.err_code ? (this.handleLoginFail(e), void this.logger.error("zb.rh.hlr server error=", e.body.err_code)) : (this.handleLoginSuccess(e), void this.logger.info("zb.rh.hlr call success."));
                    this.logger.error("zb.rh.hlr in wrong seq, local=", t, ",recv=", e.header.seq)
                } else this.logger.error("zb.rh.hlr state error")
            }, e.prototype.handleLoginFail = function (e) {
                if (this.logger.debug("zb.rh.hlf call"), i.ClientUtil.isKeepTryLogin(e.body.err_code)) this.logger.warn("zb.rh.hlf KeepTry true"); else {
                    var t = this.stateCenter.lastRunState;
                    this.setRunState(n.ENUM_RUN_STATE.logout), this.resetRoom();
                    var r = i.ClientUtil.getServerError(e.body.err_code);
                    t === n.ENUM_RUN_STATE.login ? (this.logger.info("zb.rh.hlf callback disconnect"), this.onDisconnect(r)) : (this.logger.info("zb.rh.hlf callback error"), i.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(r)), this.logger.debug("zb.rh.hlf call success")
                }
            }, e.prototype.handleLoginSuccess = function (e) {
                this.stateCenter.startloginSucTime = (new Date).getTime(), console.warn("login suc", this.stateCenter.startloginSucTime, this.stateCenter.startloginSucTime - this.stateCenter.startloginTime, this.stateCenter.startloginSucTime - this.stateCenter.startConnceTime), this.logger.info("zb.rh.hls call");
                var t = this.stateCenter.lastRunState;
                if (this.setRunState(n.ENUM_RUN_STATE.login), this.stateCenter.userid = e.body.user_id, this.stateCenter.sessionid = e.body.session_id, this.stateCenter.anchor_info = e.body.anchor_info || this.stateCenter.anchor_info, this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.userid, this.stateCenter.idName, this.stateCenter.sessionid, n.PROTO_VERSION), e.body.config_info && (this.logger.setRemoteLogLevel(e.body.config_info.log_level), "" != e.body.config_info.log_url && this.logger.openLogServer(e.body.config_info.log_url)), null != e.body.ret_timestamp && "string" == typeof e.body.ret_timestamp) {
                    var r = parseFloat(e.body.ret_timestamp);
                    this.stateCenter.serverTimeOffset = 0 == r ? 0 : e.body.ret_timestamp - (new Date).getTime()
                }
                e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.stateCenter.datiTimeWindow = e.body.dati_time_window), this.resetTryLogin(), this.loginSuccessCallBack(t, e)
            }, e.prototype.openHandler = function () {
                this.logger.info("zb.rh.oh websocket.onpen call"), this.socketCenter.responseHandler();
                var e = this.loginBodyData();
                this.logger.info("zb.rh.oh websocket.onpen send login"), this.stateCenter.startloginTime = (new Date).getTime(), console.warn("start login", this.stateCenter.startloginTime, this.stateCenter.startloginTime - this.stateCenter.startConnceTime), this.socketCenter.sendMessage("login", e), this.logger.debug("zb.rh.oh websocket.onpen call success")
            }, e.prototype.closeHandler = function (e) {
                this.logger.info("zb.rh.ws.oc msg=" + JSON.stringify(e)), this.stateCenter.runState !== n.ENUM_RUN_STATE.logout ? this.stateCenter.runState === n.ENUM_RUN_STATE.trylogin && this.stateCenter.tryLoginCount <= n.MAX_TRY_LOGIN_COUNT ? this.logger.info("zb.rh.ws.oc is called because of try login") : this.stateCenter.runState === n.ENUM_RUN_STATE.login ? (this.logger.info("zb.rh.ws.oc is called because of network broken, try again"), this.setRunState(n.ENUM_RUN_STATE.trylogin), this.resetTryLogin(), this.tryLogin()) : (this.logger.error("zb.rh.ws.oc out of think!!!"), this.setRunState(n.ENUM_RUN_STATE.logout), this.resetRoom(), this.onDisconnect(n.sdkErrorList.UNKNOWN)) : this.logger.info("zb.rh.ws.oc onclose logout flow call websocket.close")
            }, e.prototype.logout = function () {
                return this.logger.debug("zb.rh.lo call"), this.stateCenter.runState === n.ENUM_RUN_STATE.logout ? (this.logger.warn("zb.rh.lo at logout"), !1) : (this.resetRoom(), this.logger.info("zb.rh.lo call success"), !0)
            }, e.prototype.setUserStateUpdate = function (e) {
                return this.logger.debug("zb.rh.su call"), "boolean" != typeof e ? (this.logger.info("zb.rh.su param error"), !1) : (this.stateCenter.userStateUpdate = e, this.logger.info("zb.rh.su call success " + e), !0)
            }, e.prototype.fetchUserList = function () {
                this.logger.debug("zb.rh.ful call"), this.stateCenter.userQuerying ? this.logger.warn("zb.rh.ful is already querying") : (this.stateCenter.userQuerying = !0, this.stateCenter.userTempList = [], "V1" === n.ROOMVERSION ? this.fetchUserListWithPage(0) : this.fetchUserListWithPageV2(0), this.logger.info("zb.rh.ful the first time call"))
            }, e.prototype.fetchUserListWithPageV2 = function (e) {
                var t = this;
                this.logger.debug("zb.rh.fulwp call"), this.socketCenter.registerRouter("user_list_v2", function (r) {
                    t.handleFetchUserListRspV2(e, r)
                }), this.socketCenter.sendMessage("user_list_v2", {
                    marker: 0 === e ? "" : e + "",
                    mode: 0,
                    limit: 100
                }), this.logger.info("zb.rh.fulwp call success")
            }, e.prototype.fetchUserListWithPage = function (e) {
                var t = this;
                this.logger.debug("zb.rh.fulwp call"), this.socketCenter.registerRouter("user_list", function (e) {
                    t.handleFetchUserListRsp(e)
                }), this.socketCenter.sendMessage("user_list", {
                    user_index: e,
                    sort_type: 0
                }), this.logger.info("zb.rh.fulwp call success")
            }, e.prototype.handleFetchUserListRspV2 = function (e, t) {
                if (this.logger.debug("zb.rh.hfulr call"), 0 != t.body.err_code) return this.stateCenter.userQuerying = !1, void this.logger.info("zb.rh.hfulr fetch error " + t.body.err_code);
                if (this.stateCenter.userStateUpdate) {
                    if (this.stateCenter.userTempList = this.stateCenter.userTempList.concat(t.body.user_baseinfos), e != t.body.marker) return this.logger.warn("zb.rh.hfulr fetch another page"), void this.fetchUserListWithPageV2(e + 1);
                    this.stateCenter.userSeq = t.body.server_user_seq, this.logger.info("zb.rh.hfulr set user Seq " + this.stateCenter.userSeq);
                    for (var r = [], n = 0; n < this.stateCenter.userTempList.length; n++) {
                        var i = {
                            idName: this.stateCenter.userTempList[n].id_name,
                            nickName: this.stateCenter.userTempList[n].nick_name,
                            role: this.stateCenter.userTempList[n].role
                        };
                        r.push(i)
                    }
                    this.stateCenter.userQuerying = !1, this.onGetTotalUserList(this.stateCenter.roomid, r), this.stateCenter.userTempList = [], this.logger.info("zb.rh.hfulr call success user_list " + r + " count " + r.length)
                }
            }, e.prototype.handleFetchUserListRsp = function (e) {
                if (this.logger.debug("zb.rh.hfulr call"), 0 != e.body.err_code) return this.stateCenter.userQuerying = !1, void this.logger.info("zb.rh.hfulr fetch error " + e.body.err_code);
                if (this.stateCenter.userStateUpdate) {
                    this.stateCenter.userTempList = this.stateCenter.userTempList.concat(e.body.user_baseinfos);
                    var t = e.body.ret_user_index;
                    if (t != e.body.server_user_index) return this.logger.warn("zb.rh.hfulr fetch another page"), void this.fetchUserListWithPage(t + 1);
                    this.stateCenter.userSeq = e.body.server_user_seq, this.logger.info("zb.rh.hfulr set user Seq " + this.stateCenter.userSeq);
                    for (var r = [], n = 0; n < this.stateCenter.userTempList.length; n++) {
                        var i = {
                            idName: this.stateCenter.userTempList[n].id_name,
                            nickName: this.stateCenter.userTempList[n].nick_name,
                            role: this.stateCenter.userTempList[n].role
                        };
                        r.push(i)
                    }
                    this.stateCenter.userQuerying = !1, this.onGetTotalUserList(this.stateCenter.roomid, r), this.stateCenter.userTempList = [], this.logger.info("zb.rh.hfulr call success user_list " + r + " count " + r.length)
                }
            }, e.prototype.handleLogoutRsp = function (e) {
                this.logger.debug("zb.rh.hlor result=", e.body.err_code)
            }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                if (this.logger.info("zb.rh.hpus call"), this.stateCenter.isLogin()) if (this.stateCenter.userStateUpdate) {
                    if (this.stateCenter.userSeq + e.body.user_actions.length !== e.body.user_list_seq) return this.logger.warn("zb.rh.hpus fetch new userlist " + this.stateCenter.userSeq, NaN + e.body.user_list_seq), void this.fetchUserList();
                    this.stateCenter.userSeq = e.body.user_list_seq, this.logger.debug("zb.rh.hpus push userSeq " + this.stateCenter.userSeq);
                    for (var t = [], r = 0; r < e.body.user_actions.length; r++) {
                        var n = {
                            action: e.body.user_actions[r].Action,
                            idName: e.body.user_actions[r].IdName,
                            nickName: e.body.user_actions[r].NickName,
                            role: e.body.user_actions[r].Role,
                            loginTime: e.body.user_actions[r].LoginTime
                        };
                        t.push(n)
                    }
                    this.onUserStateUpdate(e.body.room_id, t), this.logger.info("zb.rh.hpus call success")
                } else this.logger.error("zb.rh.hpus no userStateUpdate flag"); else this.logger.error("zb.rh.hpus not login")
            }, e.prototype.onUserStateUpdate = function (e, t) {
            }, e
        }();
        t.RoomHandler = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(1), o = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.setCDNInfo = function (e, t) {
            }, e.prototype.onStreamUpdated = function (e, t) {
            }, e.prototype.onStreamExtraInfoUpdated = function (e) {
            }, e.prototype.handleStreamStart = function (e, t) {
                var r = this;
                if (this.stateCenter.streamQuerying = !1, this.socketCenter.registerRouter("stream", function (e) {
                    r.handleStreamUpdateRsp(e)
                }), this.socketCenter.registerRouter("push_stream_update", function (e) {
                    r.handlePushStreamUpdateMsg(e)
                }), e == n.ENUM_RUN_STATE.login) this.logger.info("zb.sh.hss recover from disconnect so call streamupdate"), this.handleFullUpdateStream(t.body.stream_seq, t.body.stream_info || []); else {
                    this.logger.info("zb.sh.hss success callback user"), this.stateCenter.streamList = t.body.stream_info || [], this.stateCenter.streamSeq = t.body.stream_seq;
                    for (var o = 0; o < this.stateCenter.streamList.length; o++) this.stateCenter.streamList[o].anchor_id_name == this.stateCenter.idName && (this.updateStreamInfo(this.stateCenter.streamList[o].stream_id, n.ENUM_STREAM_SUB_CMD.liveEnd), this.stateCenter.streamList.splice(o, 1));
                    var s = this.makeCallbackStreamList(this.stateCenter.streamList);
                    i.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList)(s)
                }
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.updateStreamInfo = function (e, t, r, n) {
                var i = this;
                void 0 === r && (r = ""), this.logger.debug("zb.sh.usi call");
                var o = {stream_id: e, extra_info: r}, s = {sub_cmd: t, stream_msg: JSON.stringify(o)};
                this.socketCenter.registerRouter("stream", function (e) {
                    i.handleStreamUpdateRsp(e)
                }), this.socketCenter.sendMessage("stream", s, void 0, n), this.logger.info("zb.sh.usi call success cmd " + t)
            }, e.prototype.handleStreamUpdateRsp = function (e) {
                if (this.stateCenter.isLogin()) if (0 == e.body.err_code) {
                    this.logger.info("zb.sh.hsur stream seq " + this.stateCenter.streamSeq + " server seq " + e.body.stream_seq), this.stateCenter.streamSeq = e.body.stream_seq;
                    for (var t = 0; t < e.body.stream_info.length; t++) {
                        var r = e.body.stream_info[t].stream_id;
                        if (!this.stateCenter.publishStreamList[r]) return void this.logger.info("hsur.0 stream is not exist");
                        this.stateCenter.publishStreamList[r].state == n.ENUM_PUBLISH_STREAM_STATE.update_info && (this.stateCenter.publishStreamList[r].state = n.ENUM_PUBLISH_STREAM_STATE.publishing, this.onPublishStateUpdate(0, r, 0))
                    }
                } else this.logger.error("zb.sh.hsur stream update error " + e.body.err_code); else this.logger.error("zb.sh.hsur not login")
            }, e.prototype.handleFetchStreamListRsp = function (e) {
                this.logger.info("zb.sh.hfslr call"), this.stateCenter.streamQuerying = !1, 0 === e.body.err_code ? this.stateCenter.streamSeq !== e.body.stream_seq ? (this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info), this.logger.debug("zb.sh.hfslr call success")) : this.logger.info("zb.sh.hfslr same seq") : this.logger.info("zb.sh.hfslr server error=", e.body.err_code)
            }, e.prototype.handleFullUpdateStream = function (e, t) {
                var r = this;
                this.logger.debug("zb.sh.hfus call"), this.stateCenter.streamSeq = e, this.logger.debug("zb.sh.hfus server seq " + this.stateCenter.streamSeq), i.ClientUtil.mergeStreamList(this.logger, this.stateCenter.idName, this.stateCenter.streamList, t, function (e, t, i) {
                    0 !== e.length && (r.logger.debug("zb.sh.hfus callback addstream"), r.onStreamUpdated(n.ENUM_STREAM_UPDATE_TYPE.added, r.makeCallbackStreamList(e))), 0 !== t.length && (r.logger.debug("zb.sh.hfus callback delstream"), r.onStreamUpdated(n.ENUM_STREAM_UPDATE_TYPE.deleted, r.makeCallbackStreamList(t))), 0 !== i.length && (r.logger.debug("zb.sh.hfus callback updatestream"), r.onStreamExtraInfoUpdated(r.makeCallbackStreamList(i)))
                }), this.logger.info("zb.sh.hfus call success")
            }, e.prototype.handlePushStreamUpdateMsg = function (e) {
                if (this.logger.info("zb.sh.hpsum call"), e.body.stream_info && 0 !== e.body.stream_info.length) {
                    if (e.body.stream_info.length + this.stateCenter.streamSeq !== e.body.stream_seq) return this.logger.info("zb.sh.hpsum call updatestream"), void this.fetchStreamList();
                    switch (this.stateCenter.streamSeq = e.body.stream_seq, e.body.stream_cmd) {
                        case n.ENUM_STREAM_UPDATE_CMD.added:
                            this.handleAddedStreamList(e.body.stream_info);
                            break;
                        case n.ENUM_STREAM_UPDATE_CMD.deleted:
                            this.handleDeletedStreamList(e.body.stream_info);
                            break;
                        case n.ENUM_STREAM_UPDATE_CMD.updated:
                            this.handleUpdatedStreamList(e.body.stream_info)
                    }
                    this.logger.info("zb.sh.hpsum call success")
                } else this.logger.info("zb.sh.hpsum, emtpy list")
            }, e.prototype.handleAddedStreamList = function (e) {
                this.logger.debug("zb.sh.hasl call");
                for (var t, r = [], i = 0; i < e.length; i++) if (e[i].anchor_id_name != this.stateCenter.idName) {
                    t = !1;
                    for (var o = 0; o < this.stateCenter.streamList.length; o++) if (e[i].stream_id === this.stateCenter.streamList[o].stream_id) {
                        t = !0;
                        break
                    }
                    t || r.push(e[i])
                } else this.logger.debug("hdsl.0 have self stream added");
                if (0 !== r.length) {
                    this.logger.debug("zb.sh.hasl callback addstream");
                    for (var s = 0; s < r.length; s++) this.stateCenter.streamList.push(r[s]);
                    this.onStreamUpdated(n.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(r))
                }
                this.logger.info("zb.sh.hasl call success")
            }, e.prototype.handleDeletedStreamList = function (e) {
                this.logger.debug("zb.sh.hdsl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var i = this.stateCenter.streamList.length - 1; i >= 0; i--) if (e[r].stream_id === this.stateCenter.streamList[i].stream_id) {
                        this.stateCenter.streamList.splice(i, 1), t.push(e[r]);
                        break
                    }
                } else this.logger.debug("zb.sh.hdsl have self stream deleted");
                0 !== t.length && (this.logger.debug("zb.sh.hdsl callback delstream"), this.onStreamUpdated(n.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.hdsl call")
            }, e.prototype.handleUpdatedStreamList = function (e) {
                this.logger.debug("zb.sh.husl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var n = 0; n < this.stateCenter.streamList.length; n++) if (e[r].stream_id === this.stateCenter.streamList[n].stream_id) {
                        e[r].extra_info !== this.stateCenter.streamList[n].extra_info && (this.stateCenter.streamList[n] = e[r], t.push(e[r]));
                        break
                    }
                } else this.logger.debug("hsul.0 have self stream updated");
                0 !== t.length && (this.logger.debug("zb.sh.husl callback updatestream"), this.onStreamExtraInfoUpdated(this.makeCallbackStreamList(t))), this.logger.info("zb.sh.husl call success")
            }, e.prototype.fetchStreamList = function () {
                if (this.logger.info("zb.sh.fsl call"), this.stateCenter.isLogin()) this.logger.info("zb.sh.fsl state error"); else if (this.stateCenter.streamQuerying) this.logger.info("zb.sh.fsl already doing"); else {
                    this.stateCenter.streamQuerying = !0, this.logger.debug("zb.sh.fsl send fetch request");
                    this.socketCenter.registerRouter("stream_info", this.handleFetchStreamListRsp), this.socketCenter.sendMessage("stream_info", {reserve: 0}), this.logger.debug("zb.sh.fsl call success")
                }
            }, e.prototype.makeCallbackStreamList = function (e) {
                var t = [];
                if (e && e.length > 0) for (var r = 0; r < e.length; r++) {
                    var n = {
                        anchor_id_name: e[r].anchor_id_name,
                        stream_gid: e[r].stream_gid,
                        anchor_nick_name: e[r].anchor_nick_name,
                        extra_info: e[r].extra_info,
                        stream_id: e[r].stream_id,
                        urls_flv: "",
                        urls_rtmp: "",
                        urls_hls: "",
                        urls_https_flv: "",
                        urls_https_hls: ""
                    };
                    this.setCDNInfo(n, e[r]), t.push(n)
                }
                return t
            }, e.prototype.updateMixStream = function (e, t, r) {
                var o = this;
                if (this.logger.info("zb.sh.ums call"), null == e.outputStreamId && null == e.outputUrl) return this.logger.error("zb.sh.ums no mix stream info"), !1;
                if (0 == e.streamList.length) return this.logger.error("zb.sh.ums no input stream"), !1;
                var s = {
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: n.PROTO_VERSION
                };
                "string" == typeof e.userData && e.userData.length <= 1e4 && (s.UserData = e.userData);
                for (var a = [], c = 0; c < e.streamList.length; c++) {
                    var d = e.streamList[c], l = d.streamId;
                    this.stateCenter.testEnvironment && (l = "zegotest-" + this.stateCenter.appid + "-" + d.streamId), a.push({
                        stream_id: l,
                        rect: {layer: c, top: d.top, left: d.left, bottom: d.bottom, right: d.right}
                    })
                }
                s.MixInput = a;
                var h = {};
                if (null != e.outputStreamId ? this.stateCenter.testEnvironment ? h.stream_id = "zegotest-" + this.stateCenter.appid + "-" + e.outputStreamId : h.stream_id = e.outputStreamId : null != e.outputUrl && (h.mixurl = e.outputUrl), !e.outputBitrate) return this.logger.error("zb.sh.ums no bitrate param"), !1;
                if (h.bitrate = e.outputBitrate, !e.outputFps) return this.logger.error("zb.sh.ums no fps param"), !1;
                if (h.fps = e.outputFps, !e.outputWidth) return this.logger.error("zb.sh.ums no width param"), !1;
                if (h.width = e.outputWidth, !e.outputHeight) return this.logger.error("zb.sh.ums no height param"), !1;
                if (h.height = e.outputHeight, e.outputAudioConfig && (h.audio_enc_id = e.outputAudioConfig), e.outputAudioBitrate && (h.audio_bitrate = e.outputAudioBitrate), e.outputAudioChannels && (h.audio_channel_cnt = e.outputAudioChannels), e.outputBgColor) {
                    if ("string" != typeof e.outputBgColor) return this.logger.error("zb.sh.ums param outputBgImage error"), !1;
                    s.output_bg_color = e.outputBgColor
                }
                if (e.outputBgImage) {
                    if ("string" != typeof e.outputBgImage || !e.outputBgImage.startsWith("preset-id://")) return this.logger.error("zb.sh.ums param outputBgImage error"), !1;
                    s.output_bg_image = e.outputBgImage
                }
                this.stateCenter.testEnvironment ? h.testenv = 1 : h.testenv = 0, s.MixOutput = [h];
                var p = {channel: "zeus", cmd: "start_mix", req_body: JSON.stringify(s)};
                return this.logger.debug("zb.sh.ums send command"), this.socketCenter.sendMessage("biz_channel", p, function (s, a, c) {
                    o.logger.debug("zb.sh.ums receive message");
                    var d = "zegotest-" + o.stateCenter.appid + "-";
                    if (0 != c.length) {
                        for (var l = JSON.parse(c), h = [], p = e.outputStreamId, u = 0; u < l.play.length; u++) {
                            var g = {rtmpUrls: null, hlsUrls: null, flvUrls: null};
                            o.stateCenter.testEnvironment && p.startsWith(d) && (p = p.slice(d.length)), l.play[u].rtmp_url && l.play[u].rtmp_url.length > 0 && (g.rtmpUrls = [l.play[u].rtmp_url]), l.play[u].hls_url && l.play[u].hls_url.length > 0 && (g.hlsUrls = [l.play[u].hls_url]), l.play[u].hdl_url && l.play[u].hdl_url.length > 0 && (g.flvUrls = [l.play[u].hdl_url]), h.push(g)
                        }
                        t && t(p, h)
                    } else r && r(i.ClientUtil.getServerError(n.MIXSTREAM_ERROR_CODE + 1))
                }, function (e, t, s) {
                    if ("number" == typeof e) {
                        o.logger.debug("zb.sh.ums error: " + e);
                        var a = [];
                        if (1000000150 == e && 0 != s.length) for (var c = JSON.parse(s), d = "zegotest-" + o.stateCenter.appid + "-", l = 0; l < c.non_exist_streams.length; l++) {
                            var h = c.non_exist_streams[l];
                            o.stateCenter.testEnvironment && h.startsWith(d) ? a.push(h.slice(d.length)) : a.push(h)
                        }
                        r && r(i.ClientUtil.getServerError(n.MIXSTREAM_ERROR_CODE + e), a)
                    } else o.logger.debug("zb.sh.ums error code " + e.code), r && r(e)
                }), !0
            }, e.prototype.stopMixStream = function (e, t, r) {
                if (this.logger.info("zb.sh.sms call"), null == e.outputStreamId && null == e.outputUrl) return this.logger.error("zb.sh.sms no mix stream info"), !1;
                var o = {
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: n.PROTO_VERSION
                };
                null != e.outputStreamId ? this.stateCenter.testEnvironment ? o.stream_id = "zegotest-" + this.stateCenter.appid + "-" + e.outputStreamId : o.stream_id = e.outputStreamId : null != e.outputUrl && (o.mixurl = e.outputUrl);
                var s = {channel: "zeus", cmd: "stop_mix", req_body: JSON.stringify(o)};
                return this.socketCenter.sendMessage("biz_channel", s, function (e, r) {
                    t && t()
                }, function (e, t) {
                    "number" == typeof e ? r && r(i.ClientUtil.getServerError(n.MIXSTREAM_ERROR_CODE + e)) : r && r(e)
                }), !0
            }, e.prototype.updateStreamExtraInfo = function (e, t) {
                return this.logger.info("zb.sh.usei call"), e ? "string" == typeof t && (this.stateCenter.publishStreamList[e] && (this.stateCenter.publishStreamList[e].extra_info = t, this.stateCenter.publishStreamList[e].state >= n.ENUM_PUBLISH_STREAM_STATE.update_info && this.updateStreamInfo(e, n.ENUM_STREAM_SUB_CMD.liveUpdate, t)), !0) : (this.logger.error("zb.sh.usei param error"), !1)
            }, e
        }();
        t.StreamHandler = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(1), o = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.resetHeartbeat = function () {
                this.logger.debug("zb.hb.rht call"), clearTimeout(this.stateCenter.heartbeatTimer), this.stateCenter.heartbeatTimer = null, this.stateCenter.tryHeartbeatCount = 0, this.logger.debug("zb.hb.rht call success")
            }, e.prototype.hbLogout = function (e) {
            }, e.prototype.start = function (e) {
                var t = this;
                if (this.logger.debug("zb.hb.sht call"), this.stateCenter.isLogin()) {
                    if (++this.stateCenter.tryHeartbeatCount > 3) return this.logger.error("zb.hb.sht come to try limit"), void this.hbLogout(n.sdkErrorList.HEARTBEAT_TIMEOUT);
                    this.logger.debug("zb.hb.sht send packet");
                    this.socketCenter.registerRouter("hb", function (e) {
                        t.handleHeartbeatRsp(e)
                    }), this.socketCenter.sendMessage("hb", {reserve: 0}), this.logger.debug("zb.hb.sht call success"), this.stateCenter.heartbeatInterval = e, this.stateCenter.heartbeatTimer = setTimeout(function () {
                        t.start(t.stateCenter.heartbeatInterval)
                    }, this.stateCenter.heartbeatInterval)
                } else this.logger.error("zb.hb.sht state error")
            }, e.prototype.handleHeartbeatRsp = function (e) {
                if (this.logger.debug("zb.hb.hhbr call"), 0 !== e.body.err_code) return this.logger.error("zb.hb.hhbr call disconnect, server error=", e.body.err_code), void this.hbLogout(i.ClientUtil.getServerError(e.body.err_code));
                for (var t in this.stateCenter.tryHeartbeatCount = 0, this.stateCenter.heartbeatInterval = e.body.hearbeat_interval, this.stateCenter.heartbeatInterval < n.MINIUM_HEARTBEAT_INTERVAL && (this.stateCenter.heartbeatInterval = n.MINIUM_HEARTBEAT_INTERVAL), e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.stateCenter.datiTimeWindow = e.body.dati_time_window), this.ReliableMessageHandler(e), this.fetchStreamList(e), e.body.server_user_seq !== this.stateCenter.userSeq && this.stateCenter.userStateUpdate && (this.logger.info("zb.hb.hhbr call update user " + e.body.server_user_seq, this.stateCenter.userSeq), this.fetchUserList()), this.stateCenter.publishStreamList) this.stateCenter.publishStreamList[t].state == n.ENUM_PUBLISH_STREAM_STATE.update_info && (this.logger.info("zb.hb.hhbr try to update stream info"), this.updateStreamInfo(t, n.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[t].extra_info));
                null != e.body.online_count && 0 != e.body.online_count && this.onUpdateOnlineCount(this.stateCenter.roomid, e.body.online_count), this.logger.debug("zb.hb.hhbr call success")
            }, e.prototype.ReliableMessageHandler = function (e) {
                if (e.body.trans_seqs) for (var t = 0; t < e.body.trans_seqs.length; t++) {
                    var r = e.body.trans_seqs[t].trans_type, n = e.body.trans_seqs[t].trans_seq;
                    if (!this.stateCenter.transSeqMap[r] || this.stateCenter.transSeqMap[r].seq !== n) {
                        var i = 0;
                        this.stateCenter.transSeqMap[r] ? (i = this.stateCenter.transSeqMap[r].seq, this.logger.debug("zb.hb.rmh type " + r + " old seq " + this.stateCenter.transSeqMap[r].seq + " server seq " + n)) : (i = 0, this.logger.debug("zb.hb.rmh type " + r + " server seq " + n)), this.fetchReliableMessage(r, i)
                    }
                }
            }, e.prototype.fetchReliableMessage = function (e, t) {
                var r = this;
                this.logger.debug("zb.hb.frm call");
                var n = {trans_type: e, trans_local_seq: t};
                this.socketCenter.registerRouter("trans_fetch", function (e) {
                    r.handleFetchTransRsp(e)
                }), this.socketCenter.sendMessage("trans_fetch", n), this.logger.debug("zb.hb.frm call success")
            }, e.prototype.handleFetchTransRsp = function (e) {
                if (this.stateCenter.isLogin()) if (0 == e.body.err_code) {
                    var t = e.body.trans_type, r = e.body.trans_seq;
                    this.stateCenter.transSeqMap[t] = {seq: r}, e.body.trans_user_idname != this.stateCenter.idName && this.onRecvReliableMessage(t, r, e.body.trans_data), this.logger.debug("zb.hb.hftr trans " + t + " seq " + r)
                } else this.logger.error("zb.hb.hftr trans send error " + e.body.err_code); else this.logger.error("zb.hb.hftr not login")
            }, e.prototype.fetchStreamList = function (e) {
                var t = this;
                e.body.stream_seq !== this.stateCenter.streamSeq && (this.logger.debug("zb.hb.fsl current seq " + this.stateCenter.streamSeq + " server Seq " + e.body.stream_seq), this.logger.debug("zb.hb.fsl call"), this.stateCenter.isLogin() ? this.stateCenter.streamQuerying ? this.logger.warn("zb.hb.fsl already doing") : (this.stateCenter.streamQuerying = !0, this.logger.debug("zb.hb.fsl send fetch request"), this.socketCenter.registerRouter("stream_info", function (e) {
                    t.handleFetchStreamListRsp(e)
                }), this.socketCenter.sendMessage("stream_info", {reserve: 0}), this.logger.debug("zb.hb.fsl call success")) : this.logger.error("zb.hb.fsl state error"))
            }, e.prototype.handleFetchStreamListRsp = function (e) {
            }, e.prototype.fetchUserList = function () {
            }, e.prototype.updateStreamInfo = function (e, t, r, n) {
                void 0 === r && (r = "")
            }, e.prototype.onUpdateOnlineCount = function (e, t) {
            }, e.prototype.onRecvReliableMessage = function (e, t, r) {
            }, e.prototype.resetCheckMessage = function () {
                this.logger.debug("zb.hb.rcm call"), clearTimeout(this.stateCenter.sendDataCheckTimer), this.stateCenter.sendDataCheckTimer = null, this.checkSendMessageList(this.stateCenter.sendDataList), this.checkSendMessageList(this.stateCenter.sendCommandList), this.stateCenter.sendDataMap = {}, this.stateCenter.sendCommandMap = {}, this.logger.debug("zb.hb.rcm call success")
            }, e.prototype.checkSendMessageList = function (e) {
                for (var t = e.getFirst(); null != t;) e.remove(t), t._data.error && (t._data.data.body.custom_msg ? t._data.error(n.sdkErrorList.SEND_MSG_TIMEOUT, t._data.data.header.seq, t._data.data.body.custom_msg) : t._data.error(n.sdkErrorList.SEND_MSG_TIMEOUT, t._data.data.header.seq)), t = e.getFirst()
            }, e.prototype.checkMessageListTimeout = function (e, t) {
                for (var r = e.getFirst(), i = Date.parse(new Date + ""), o = 0, s = 0, a = 0; !(null == r || r._data.time + this.stateCenter.sendDataTimeout > i || (delete t[r._data.data.header.seq], e.remove(r), ++s, null == r._data.error || this.stateCenter.sendDataDropTimeout > 0 && r._data.time + this.stateCenter.sendDataDropTimeout < i ? ++a : r._data.data.body.custom_msg ? r._data.error(n.sdkErrorList.SEND_MSG_TIMEOUT, r._data.data.header.seq, r._data.data.body.custom_msg) : r._data.error(n.sdkErrorList.SEND_MSG_TIMEOUT, r._data.data.header.seq), ++o >= this.stateCenter.sendDataCheckOnceCount));) r = e.getFirst();
                0 == s && 0 == a || this.logger.debug("zb.hb.cmt call success, stat: timeout=", s, "drop=", a)
            }, e.prototype.startCheckMessageTimeout = function () {
                var e = this;
                this.stateCenter.isLogin() ? (this.checkMessageListTimeout(this.stateCenter.sendDataList, this.stateCenter.sendDataMap), this.checkMessageListTimeout(this.stateCenter.sendCommandList, this.stateCenter.sendCommandMap), this.stateCenter.sendDataCheckTimer = setTimeout(function () {
                    e.startCheckMessageTimeout()
                }, this.stateCenter.sendDataCheckInterval)) : this.logger.error("zb.hb.scmt state error")
            }, e
        }();
        t.HeartBeatHandler = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(1), o = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.sendCustomCommand = function (e, t, r, n) {
                var o = this;
                if (this.logger.debug("zb.mh.scc call"), !this.stateCenter.isLogin()) return this.logger.error("zb.mh.scc state error"), !1;
                if (!e || 0 == e.length) return this.logger.error("zb.mh.scc dstMembers error"), !1;
                var s = {
                    from_userid: this.stateCenter.idName,
                    from_username: this.stateCenter.nickName,
                    request_id: this.stateCenter.getRequestId(),
                    custom_content: t || "",
                    room_id: this.stateCenter.roomid
                }, a = {dest_id_name: e, custom_msg: JSON.stringify(s)};
                return i.ClientUtil.checkCustomCommandParam(a) ? (this.socketCenter.registerRouter("custommsg", function (e) {
                    o.handleSendCustomMsgRsp(e)
                }), this.socketCenter.sendCustomMessage("custommsg", a, r, n), this.logger.info("zb.mh.scc call success"), !0) : (this.logger.info("zb.mh.scc param error"), !1)
            }, e.prototype.handleSendCustomMsgRsp = function (e) {
                this.logger.debug("zb.mh.hscmrcall");
                var t, r = this.stateCenter.sendDataMap[e.header.seq];
                null != r ? ("custommsg" != (t = r._data).data.header.cmd ? this.logger.error("zb.mh.hscmrcmd wrong" + t.data.header.cmd) : 0 === e.body.err_code ? null != t.success && t.success(e.header.seq, t.data.body.custom_msg) : null != t.error && t.error(i.ClientUtil.getServerError(e.body.err_code), e.header.seq, t.data.body.custom_msg), delete this.stateCenter.sendDataMap[e.header.seq], this.stateCenter.sendDataList.remove(r)) : this.logger.error("zb.mh.hscmrno found seq=" + e.header.seq), this.logger.debug("zb.mh.hscmr  call success")
            }, e.prototype.handlePushCustomMsg = function (e) {
                var t = JSON.parse(e.body.custommsg);
                this.logger.debug("zb.mh.hpcm submsg=", t), this.onRecvCustomCommand(t.from_userid, t.from_username, t.custom_content)
            }, e.prototype.onRecvCustomCommand = function (e, t, r) {
            }, e.prototype.sendRoomMsg = function (e, t, r, i, o) {
                var s = this;
                if (this.logger.debug("zb.mh.srm call"), this.stateCenter.isLogin()) {
                    var a = Date.parse(new Date + "");
                    if (this.stateCenter.sendRoomMsgTime > 0 && this.stateCenter.sendRoomMsgTime + this.stateCenter.SendRoomMsgInterval > a) return this.logger.info("zb.mh.srm freq error"), void (o && o(n.sdkErrorList.FREQ_LIMITED, 0, e, t, r));
                    this.stateCenter.sendRoomMsgTime = a, this.logger.debug("zb.mh.srm send fetch request");
                    var c = {msg_category: e, msg_type: t, msg_content: r};
                    this.socketCenter.registerRouter("im_chat", function (e) {
                        s.handleSendRoomMsgRsp(e)
                    }), this.socketCenter.sendCustomMessage("im_chat", c, i, o), this.logger.info("zb.mh.srm call success")
                } else this.logger.error("zb.mh.srm state error")
            }, e.prototype.handleSendRoomMsgRsp = function (e) {
                this.logger.debug("zb.mh.hsrmr call");
                var t, r = this.stateCenter.sendDataMap[e.header.seq];
                null != r ? ("im_chat" != (t = r._data).data.header.cmd ? this.logger.error("zb.mh.hsrmr cmd wrong" + t.data.header.cmd) : 0 === e.body.err_code ? t.success && t.success(e.header.seq, e.body.msg_id, t.data.body.msg_category, t.data.body.msg_type, t.data.body.msg_content) : t.error && t.error(i.ClientUtil.getServerError(e.body.err_code), e.header.seq, t.data.body.msg_category, t.data.body.msg_type, t.data.body.msg_content), delete this.stateCenter.sendDataMap[e.header.seq], this.stateCenter.sendDataList.remove(r)) : this.logger.error("hzb.mh.hsrmr no found seq=" + e.header.seq), this.logger.info("zb.mh.hsrmr call success")
            }, e.prototype.onRecvRoomMsg = function (e, t, r) {
            }, e.prototype.sendReliableMessage = function (e, t, r, n) {
                this.logger.debug("zb.mh.srirm call"), this.stateCenter.transSeqMap[e] && delete this.stateCenter.transSeqMap[e], this.stateCenter.transSeqMap[e] = {seq: 0};
                var i = {trans_type: e, trans_data: t};
                this.socketCenter.sendMessage("trans", i, r, n)
            }, e.prototype.sendBigRoomMessage = function (e, t, r, n, i) {
                var o = this;
                this.logger.debug("zb.mh.sbim call");
                var s = this.stateCenter.bigimTimeWindow, a = this.stateCenter.serverTimeOffset,
                    c = (new Date).getTime() + a, d = (++this.stateCenter.cmdSeq).toString();
                if (null == n && (n = null), null == i && (i = null), this.stateCenter.bigImCallbackMap[d] = {
                    success: n,
                    error: i
                }, 0 == s) {
                    var l = {msg_category: e, msg_type: t, msg_content: r, bigmsg_client_id: d};
                    this.logger.debug("zb.mh.sbim no time window"), this.sendBigRoomMessageInternal([l], function (e) {
                        o.handleBigImMsgRsp(e)
                    }, i)
                } else {
                    var h = Math.floor(c / s);
                    if (this.logger.debug("currentIndex " + h + " lastTimeIndex " + this.stateCenter.bigImLastTimeIndex), this.stateCenter.bigImLastTimeIndex < h && 0 == this.stateCenter.bigImMessageList.length) {
                        this.stateCenter.bigImLastTimeIndex = h;
                        var p = {msg_category: e, msg_type: t, msg_content: r, bigmsg_client_id: d};
                        this.sendBigRoomMessageInternal([p], function (e) {
                            o.handleBigImMsgRsp(e)
                        }, i)
                    } else this.stateCenter.bigImMessageList.push({
                        msg_category: e,
                        msg_type: t,
                        msg_content: r,
                        bigmsg_client_id: d
                    }), 1 == this.stateCenter.bigImMessageList.length && this.setBigImTimer(a, s)
                }
            }, e.prototype.handlePushMergeMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    for (var t = 0; t < e.body.messages.length; t++) 14001 === e.body.messages[t].sub_cmd && this.handlePushBigRooMsg(e.body.messages[t].msg_body);
                    this.logger.debug("zb.mh.hpmm call success")
                } else this.logger.error("zb.mh.hpmmnot login")
            }, e.prototype.handlePushBigRooMsg = function (e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return void this.logger.warn("zb.mh.hpbrm parse json error")
                }
                if (t) {
                    for (var r = t.room_id, n = [], i = 0; i < t.msg_data.length; i++) {
                        var o = t.msg_data[i];
                        o.id_name != this.stateCenter.idName ? n.push({
                            idName: o.id_name,
                            nickName: o.nick_name,
                            messageId: o.bigmsg_id,
                            category: o.msg_category,
                            type: o.msg_type,
                            content: o.msg_content,
                            time: o.send_time
                        }) : this.logger.debug("zb.mh.hpbrm self message")
                    }
                    0 == n.length ? this.logger.debug("zb.mh.hpbrm no other pushData except self") : this.onRecvBigRoomMessage(n, r), this.logger.debug("zb.mh.hpbrm call success")
                } else this.logger.warn("zb.mh.hpbrm cann't find message body")
            }, e.prototype.onRecvBigRoomMessage = function (e, t) {
            }, e.prototype.sendBigRoomMessageInternal = function (e, t, r) {
                this.logger.debug("zb.mh.sbim call");
                var n = {msgs: e};
                this.socketCenter.sendMessage("bigim_chat", n, t, r)
            }, e.prototype.handleBigImMsgRsp = function (e) {
                if (this.stateCenter.isLogin()) {
                    this.stateCenter.bigimTimeWindow != e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window);
                    for (var t = 0; t < e.body.msgs.length; t++) {
                        var r = e.body.msgs[t].bigmsg_client_id, n = e.body.msgs[t].bigmsg_id;
                        if (this.stateCenter.bigImCallbackMap[r]) {
                            var i = this.stateCenter.bigImCallbackMap[r].success;
                            null != i && i(e.header.seq, n), delete this.stateCenter.bigImCallbackMap[r]
                        }
                    }
                } else this.logger.info("zb.mh.hbmr not login")
            }, e.prototype.setBigImTimer = function (e, t) {
                var r = this, n = t - ((new Date).getTime() + e) % t, o = i.ClientUtil.generateRandumNumber(t) + n;
                this.logger.info("zb.mh.sbt setTimer " + o), this.stateCenter.bigImTimer = setTimeout(function () {
                    r.onBigImTimer()
                }, o)
            }, e.prototype.onBigImTimer = function () {
                var e = this, t = (new Date).getTime() + this.stateCenter.serverTimeOffset;
                this.stateCenter.bigImLastTimeIndex = Math.floor(t / this.stateCenter.bigimTimeWindow);
                for (var r = [], n = [], i = 0; i < this.stateCenter.bigImMessageList.length && !(i >= 20); i++) {
                    var o = this.stateCenter.bigImMessageList[i];
                    r.push({
                        msg_category: o.msg_category,
                        msg_type: o.msg_type,
                        msg_content: o.msg_content,
                        bigmsg_client_id: o.bigmsg_client_id
                    }), n.push(o.bigmsg_client_id)
                }
                this.stateCenter.bigImMessageList.length > 20 ? this.stateCenter.bigImMessageList.splice(0, 20) : this.stateCenter.bigImMessageList = [], this.sendBigRoomMessageInternal(r, function (t) {
                    e.handleBigImMsgRsp(t)
                }, function (t, r) {
                    for (var i = 0; i < n.length; i++) {
                        var o = n[i], s = e.stateCenter.bigImCallbackMap[o];
                        s && (null != s.error && s.error(t, r), delete e.stateCenter.bigImCallbackMap[o])
                    }
                }), clearTimeout(this.stateCenter.bigImTimer), this.stateCenter.bigImTimer = null, this.stateCenter.bigImMessageList.length > 0 && this.setBigImTimer(this.stateCenter.serverTimeOffset, this.stateCenter.bigimTimeWindow)
            }, e.prototype.sendRelayMessage = function (e, t, r, n) {
                this.logger.debug("zb.mh.srm call");
                var i = this.stateCenter.datiTimeWindow, o = this.stateCenter.serverTimeOffset;
                i > 0 ? (this.stateCenter.realyMessageList.push({
                    type: e,
                    data: t,
                    success: r,
                    error: n
                }), 1 == this.stateCenter.realyMessageList.length && this.setRelayTimer(o, i)) : this.sendRelayMessageInternal(e, t, r, n)
            }, e.prototype.sendRelayMessageInternal = function (e, t, r, n) {
                this.logger.debug("zb.mh.srmi call");
                var i = {relay_type: e, relay_data: t};
                this.socketCenter.sendMessage("relay", i, r, n)
            }, e.prototype.setRelayTimer = function (e, t) {
                var r = this, n = 2 * t - ((new Date).getTime() + e) % t, o = i.ClientUtil.generateRandumNumber(n);
                this.logger.info("zb.mh.srt setTimer " + o), this.stateCenter.relayTimer = setTimeout(function () {
                    r.onRelayTimer()
                }, o)
            }, e.prototype.onRelayTimer = function () {
                if (0 != this.stateCenter.realyMessageList.length) {
                    var e = this.stateCenter.realyMessageList[0];
                    this.sendRelayMessageInternal(e.type, e.data, e.success, e.error), clearTimeout(this.stateCenter.relayTimer), this.stateCenter.relayTimer = null, this.stateCenter.realyMessageList.splice(0, 1), this.stateCenter.realyMessageList.length > 0 && this.setRelayTimer(this.stateCenter.serverTimeOffset, this.stateCenter.datiTimeWindow)
                } else this.logger.info("zb.mh.ort no relay data")
            }, e.prototype.handlePushTransMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    var t = e.body.trans_type, r = e.body.trans_seq;
                    this.stateCenter.transSeqMap[t] ? this.stateCenter.transSeqMap[t].seq = r : this.stateCenter.transSeqMap[t] = {seq: r}, e.body.trans_user_idname != this.stateCenter.idName ? this.onRecvReliableMessage(t, r, e.body.trans_data) : this.logger.debug("zb.mh.hptr receive self trans message"), this.logger.info("zb.mh.hptr trans " + t + " seq " + r)
                } else this.logger.error("zb.mh.hptr not login")
            }, e.prototype.onRecvReliableMessage = function (e, t, r) {
            }, e
        }();
        t.MessageHandler = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.requestJoinLive = function (e, t, r, i) {
                this.logger.debug("zb.lh.rjl call");
                var o = this.stateCenter.getRequestId(), s = this.stateCenter.getSignalCmdContent(o, e);
                return null != i && (this.stateCenter.joinLiveCallbackMap[o] = i, this.sendSignalCmd(n.ENUM_SIGNAL_SUB_CMD.joinLiveRequest, s, e, t, r), !0)
            }, e.prototype.inviteJoinLive = function (e, t, r, i) {
                this.logger.debug("zb.lh.ijl call");
                var o = this.stateCenter.getRequestId(), s = this.stateCenter.getSignalCmdContent(o, e);
                return null != i && (this.stateCenter.joinLiveCallbackMap[o] = i, this.sendSignalCmd(n.ENUM_SIGNAL_SUB_CMD.joinLiveInvite, s, e, t, r), !0)
            }, e.prototype.endJoinLive = function (e, t, r) {
                this.logger.debug("zb.lh.ejl call");
                var i = this.stateCenter.getRequestId(), o = this.stateCenter.getSignalCmdContent(i, e);
                return this.sendSignalCmd(n.ENUM_SIGNAL_SUB_CMD.joinLiveStop, o, e, t, r), !0
            }, e.prototype.respondJoinLive = function (e, t, r, i) {
                this.logger.debug("zb.lh.rpjl call");
                var o = this.stateCenter.joinLiveRequestMap[e];
                if (!o) return this.logger.info("zb.lh.rpjl no dest id name"), !1;
                var s = 0;
                !0 === t && (s = 1);
                var a = this.stateCenter.getSignalCmdContent(e, o, s);
                return this.sendSignalCmd(n.ENUM_SIGNAL_SUB_CMD.joinLiveResult, a, o, r, i), delete this.stateCenter.joinLiveRequestMap[e], !0
            }, e.prototype.sendSignalCmd = function (e, t, r, n, i) {
                if (this.logger.debug("zb.lh.ssc call"), this.stateCenter.isLogin()) {
                    this.logger.debug("zb.lh.ssc send signal cmd " + e);
                    var o = {sub_cmd: e, signal_msg: t, dest_id_name: [r]};
                    this.socketCenter.sendMessage("signal", o, n, i), this.logger.info("zb.lh.ssc call success")
                } else this.logger.error("zb.lh.ssc state error")
            }, e.prototype.handlePushSignalMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    var t = JSON.parse(e.body.signal_msg);
                    switch (this.logger.debug("zb.lh.hpcm hpsm= ", t), e.body.sub_cmd) {
                        case n.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:
                            this.handlePushJoinLiveRequestMsg(t);
                            break;
                        case n.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:
                            this.handlePushJoinLiveResultMsg(t);
                            break;
                        case n.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:
                            this.handlePushJoinLiveInviteMsg(t);
                            break;
                        case n.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:
                            this.handlePushJoinLiveStopMsg(t)
                    }
                    this.logger.debug("zb.lh.hpsm call end")
                } else this.logger.warn("zb.lh.hpsm not login")
            }, e.prototype.handlePushJoinLiveRequestMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.from_userid;
                    "string" == typeof r ? (this.stateCenter.joinLiveRequestMap[t] = r, this.logger.info("zb.lh.hpjlrm onRecvJoinLiveRequest " + r), this.onRecvJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlrm no from user")
                } else this.logger.error("zb.lh.hpjlrm no requestId")
            }, e.prototype.onRecvJoinLiveRequest = function (e, t, r, n) {
            }, e.prototype.handlePushJoinLiveInviteMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.from_userid;
                    "string" == typeof r ? (this.stateCenter.joinLiveRequestMap[t] = r, this.logger.info("zb.lh.hpjlim onRecvInviteJoinLiveRequest " + r), this.onRecvInviteJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlim no from user")
                } else this.logger.error("zb.lh.hpjlim no requestId")
            }, e.prototype.onRecvInviteJoinLiveRequest = function (e, t, r, n) {
            }, e.prototype.handlePushJoinLiveResultMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.result;
                    if (null != r) {
                        var n = 1 == r;
                        if (this.stateCenter.joinLiveCallbackMap[t]) {
                            var i = this.stateCenter.joinLiveCallbackMap[t];
                            if (!i) return void this.logger.info("hpjlrm.o no callback");
                            this.logger.info("zb.lh.hpjlrm joinLiveRequest/invite result " + n), delete this.stateCenter.joinLiveCallbackMap[t], i(n, e.from_userid, e.from_username)
                        }
                    } else this.logger.info("zb.lh.hpjlrm no result")
                } else this.logger.error("zb.lh.hpjlrm no requestId")
            }, e.prototype.handlePushJoinLiveStopMsg = function (e) {
                var t = e.request_id;
                "string" == typeof t ? (this.logger.info("zb.lh.hpjlsm onRecvEndJoinLiveCommand " + e.from_userid), this.onRecvEndJoinLiveCommand(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlsm no requestId")
            }, e.prototype.onRecvEndJoinLiveCommand = function (e, t, r, n) {
            }, e
        }();
        t.LiveHandler = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), i = r(2), o = function () {
            function e() {
                this.testEnvironment = !1, this.third_token = "", this.pullLimited = !0, this.configOK = !1, this.roomCreateFlag = 1, this.runState = n.ENUM_RUN_STATE.logout, this.lastRunState = n.ENUM_RUN_STATE.logout, this.callbackList = {}, this.streamList = [], this.publishStreamList = {}, this.userQuerying = !1, this.userTempList = [], this.userSeq = 0, this.anchor_info = {
                    anchor_id: "",
                    anchor_id_name: "",
                    anchor_nick_name: ""
                }, this.sendCommandMap = {}, this.sendCommandList = new n.LinkedList, this.sendDataMap = {}, this.sendDataList = new n.LinkedList, this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}, this.streamUrlMap = {}, this.cmdCallback = {}, this.transSeqMap = {}, this.realyMessageList = [], this.relayTimer = null, this.bigImLastTimeIndex = 0, this.bigIMmessageList = [], this.bigImCallbackMap = {}, this.bigImTimer = null, this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0, this.bigImMessageList = [], this.tryLoginCount = 0, this.tryLoginTimer = null, this.heartbeatTimer = null, this.sendDataCheckTimer = null, this.sendDataCheckInterval = 2e3, this.sendDataTimeout = 5e3, this.sendDataDropTimeout = 1e4, this.sendDataCheckOnceCount = 100, this.sendRoomMsgTime = 0, this.SendRoomMsgInterval = 500, this.cmdSeq = 0
            }

            return e.prototype.isLogin = function () {
                return this.runState === n.ENUM_RUN_STATE.login
            }, e.prototype.getRequestId = function () {
                return this.idName + "-" + i.getSeq()
            }, e.prototype.getSignalCmdContent = function (e, t, r) {
                var n = {
                    request_id: e,
                    room_id: this.roomid,
                    from_userid: this.idName,
                    from_username: this.nickName,
                    to_userid: t
                };
                return null != r && (n.result = r), JSON.stringify(n)
            }, e
        }();
        t.StateCenter = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e() {
                var e = this;
                this.instant = 0, this.slow = 0, this.clip = 0;
                var t = new AudioContext || new webkitAudioContext;
                this.context = t, this.script = t.createScriptProcessor(2048, 1, 1), this.script.addEventListener("audioprocess", function (t) {
                    var r, n = t.inputBuffer.getChannelData(0), i = 0, o = 0;
                    for (r = 0; r < n.length; ++r) i += n[r] * n[r], Math.abs(n[r]) > .99 && (o += 1);
                    e.instant = Math.sqrt(i / n.length), e.slow = .95 * e.slow + .05 * e.instant, e.clip = o / n.length
                })
            }

            return e.prototype.connectToSource = function (e, t) {
                console.log("SoundMeter connecting");
                try {
                    this.mic = this.context.createMediaStreamSource(e), this.mic.connect(this.script), this.script.connect(this.context.destination), void 0 !== t && t(null)
                } catch (e) {
                    console.error(e), void 0 !== t && t(e)
                }
                return this
            }, e.prototype.stop = function () {
                this.mic.disconnect(), this.script.disconnect()
            }, e
        }();
        t.SoundMeter = n
    }])
});