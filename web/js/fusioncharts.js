/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.5.1

 @attributions (infers respective third-party copyrights)
 Raphael 2.1.0 (modified as 'Red Raphael') <http://raphaeljs.com/license.html>
 JSON v2 <http://www.JSON.org/js.html>
 Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
 */
(function () {
    if (!window.FusionCharts || !window.FusionCharts.version) {
        var d = window, l = d.document, D = d.navigator, w = {window: d}, p = w.modules = {}, c = w.interpreters = {}, N = Object.prototype.toString, b = /msie/i.test(D.userAgent) && !d.opera, I = /loaded|complete/, a = !1, z = function () {
            var a = w.ready;
            w.ready = !0;
            w.raiseEvent && (w.readyNotified = !0, w.raiseEvent("ready", {version: w.core.version, now: !a}, w.core));
            w.readyNow = !a
        }, F = function (a, c) {
            var b, e;
            if (c instanceof Array)for (b = 0; b < c.length; b += 1)"object" !== typeof c[b] ? a[b] = c[b] : ("object" !== typeof a[b] && (a[b] = c[b] instanceof Array ? [] : {}), F(a[b], c[b])); else for (b in c)"object" === typeof c[b] ? (e = N.call(c[b]), "[object Object]" === e ? ("object" !== typeof a[b] && (a[b] = {}), F(a[b], c[b])) : "[object Array]" === e ? (a[b] instanceof Array || (a[b] = []), F(a[b], c[b])) : a[b] = c[b]) : a[b] = c[b];
            return a
        };
        w.extend = function (a, c, b, e) {
            var h;
            b && a.prototype && (a = a.prototype);
            if (!0 === e)F(a, c); else for (h in c)a[h] = c[h];
            return a
        };
        w.uniqueId = function () {
            return "chartobject-" + (w.uniqueId.lastId += 1)
        };
        w.uniqueId.lastId = 0;
        w.policies =
        {
            options: {
                chartTypeSourcePath: ["typeSourcePath", ""],
                product: ["product", "v3"],
                insertMode: ["insertMode", "replace"],
                safeMode: ["safeMode", !0],
                overlayButton: ["overlayButton", void 0],
                containerBackgroundColor: ["containerBackgroundColor", "#ffffff"],
                containerBackgroundOpacity: ["containerBackgroundOpacity", 1],
                containerClassName: ["containerClassName", "fusioncharts-container"],
                chartType: ["type", void 0],
                baseChartMessageFont: ["baseChartMessageFont", "Verdana,sans"],
                baseChartMessageFontSize: ["baseChartMessageFontSize",
                    "10"],
                baseChartMessageColor: ["baseChartMessageColor", "#666666"],
                dataLoadStartMessage: ["dataLoadStartMessage", "Retrieving data. Please wait."],
                dataLoadErrorMessage: ["dataLoadErrorMessage", "Error in loading data."],
                dataInvalidMessage: ["dataInvalidMessage", "Invalid data."],
                dataEmptyMessage: ["dataEmptyMessage", "No data to display."],
                typeNotSupportedMessage: ["typeNotSupportedMessage", "Chart type not supported."],
                loadMessage: ["loadMessage", "Loading chart. Please wait."],
                renderErrorMessage: ["renderErrorMessage",
                    "Unable to render chart."]
            },
            attributes: {lang: ["lang", "EN"], id: ["id", void 0]},
            width: ["width", "400"],
            height: ["height", "300"],
            src: ["swfUrl", ""]
        };
        c.stat = "swfUrl id width height debugMode registerWithJS backgroundColor scaleMode lang detectFlashVersion autoInstallRedirect".split(" ");
        w.parsePolicies = function (a, c, b) {
            var e, h, m;
            for (h in c)if (w.policies[h] instanceof Array)m = b[c[h][0]], a[h] = void 0 === m ? c[h][1] : m; else for (e in"object" !== typeof a[h] && (a[h] = {}), c[h])m = b[c[h][e][0]], a[h][e] = void 0 === m ? c[h][e][1] :
                m
        };
        w.parseCommands = function (a, b, g) {
            var e, h;
            "string" === typeof b && (b = c[b] || []);
            e = 0;
            for (h = b.length; e < h; e++)a[b[e]] = g[e];
            return a
        };
        w.registrars = {
            module: function () {
                return w.core.apply(w.core, arguments)
            }
        };
        w.core = function (a) {
            if (!(this instanceof w.core)) {
                if (1 === arguments.length && a instanceof Array && "private" === a[0]) {
                    if (p[a[1]])return;
                    p[a[1]] = {};
                    a[3] instanceof Array && (w.core.version[a[1]] = a[3]);
                    return "function" === typeof a[2] ? a[2].call(w, p[a[1]]) : w
                }
                if (1 === arguments.length && "string" === typeof a)return w.core.items[a];
                w.raiseError && w.raiseError(this, "25081840", "run", "", new SyntaxError('Use the "new" keyword while creating a new FusionCharts object'))
            }
            var b = {};
            this.__state = {};
            1 === arguments.length && "object" === typeof arguments[0] ? b = arguments[0] : w.parseCommands(b, c.stat, arguments);
            1 < arguments.length && "object" === typeof arguments[arguments.length - 1] && (delete b[c.stat[arguments.length - 1]], w.extend(b, arguments[arguments.length - 1]));
            this.id = "undefined" === typeof b.id ? this.id = w.uniqueId() : b.id;
            this.args = b;
            w.core.items[this.id] instanceof w.core && w.raiseWarning(this, "06091847", "param", "", Error('A FusionChart oject with the specified id "' + this.id + '" already exists. Renaming it to ' + (this.id = w.uniqueId())));
            w.parsePolicies(this, w.policies, b);
            this.attributes.id = this.id;
            this.resizeTo && this.resizeTo(b.width, b.height, !0);
            this.chartType && this.chartType(b.type || b.swfUrl, !0);
            w.raiseEvent("beforeInitialize", b, this);
            w.core.items[this.id] = this;
            w.core.defaultOptions = w.core.options;
            w.raiseEvent("initialized", b, this);
            return this
        };
        w.core.prototype =
        {};
        w.core.prototype.constructor = w.core;
        w.extend(w.core, {
            id: "FusionCharts",
            version: ["3", "5", "1"],
            items: {},
            options: {},
            getObjectReference: function (a) {
                return w.core.items[a].ref
            },
            register: function (a) {
                return w.registrars[a = a && a.toString && a.toString().toLowerCase()] && w.registrars[a].apply(w.core, Array.prototype.slice.call(arguments, 1))
            }
        });
        d.FusionCharts = w.core;
        d.FusionMaps && d.FusionMaps.legacy && (w.core(["private", "modules.core.geo", d.FusionMaps.legacy, d.FusionMaps.version]), a = !0);
        I.test(l.readyState) ||
        l.loaded ? (w.ready = !0, setTimeout(z, 1)) : function () {
            function c() {
                arguments.callee.done || (arguments.callee.done = !0, g && clearTimeout(g), a || (d.FusionMaps && d.FusionMaps.legacy && w.core(["private", "modules.core.geo", d.FusionMaps.legacy, d.FusionMaps.version]), d.FusionMaps = w.core), setTimeout(z, 1))
            }

            function s() {
                I.test(l.readyState) ? c() : g = setTimeout(s, 10)
            }

            var g, e;
            l.addEventListener ? l.addEventListener("DOMContentLoaded", c, !1) : l.attachEvent && d.attachEvent("onLoad", c);
            if (b)try {
                "https:" === d.location.protocol ? l.write('<script id="__ie_onload_fusioncharts" defer="defer" src="//:">\x3c/script>') :
                    l.write('<script id="__ie_onload_fusioncharts" defer="defer" src="javascript:void(0)">\x3c/script>'), e = l.getElementById("__ie_onload_fusioncharts"), e.onreadystatechange = function () {
                    "complete" == this.readyState && c()
                }
            } catch (h) {
            }
            // i.test(D.userAgent) && (g = setTimeout(s, 10));
            d.onload = function (a) {
                return function () {
                    c();
                    a && a.call && a.call(d)
                }
            }(d.onload)
        }();
        d.FusionMaps = w.core
    }
})();
FusionCharts.register("module", ["private", "modules.mantle.errormanager", function () {
    var d = this, l = d.window, D = {
        type: "TypeException",
        range: "ValueRangeException",
        impl: "NotImplementedException",
        param: "ParameterException",
        run: "RuntimeException",
        comp: "DesignTimeError",
        undefined: "UnspecifiedException"
    }, w = function (c, p, b, I, a, z) {
        var F = "#" + p + " " + (c ? c.id : "unknown-source") + I + " " + z + " >> ";
        a instanceof Error ? (a.name = D[b], a.module = "FusionCharts" + I, a.level = z, a.message = F + a.message, F = a.message, l.setTimeout(function () {
            throw a;
        }, 0)) : F += a;
        p = {id: p, nature: D[b], source: "FusionCharts" + I, message: F};
        d.raiseEvent(z, p, c);
        if ("function" === typeof l["FC_" + z])l["FC_" + z](p)
    }, p;
    d.raiseError = function (c, d, b, p, a) {
        w(c, d, b, p, a, "Error")
    };
    d.raiseWarning = function (c, d, b, p, a) {
        w(c, d, b, p, a, "Warning")
    };
    p = {
        outputHelpers: {
            text: function (c, d) {
                p.outputTo("#" + c.eventId + " [" + (c.sender.id || c.sender).toString() + '] fired "' + c.eventType + '" event. ' + ("error" === c.eventType || "warning" === c.eventType ? d.message : ""))
            }, event: function (c, d) {
                this.outputTo(c, d)
            }, verbose: function (c,
                                  d) {
                p.outputTo(c.eventId, c.sender.id, c.eventType, d)
            }
        }, outputHandler: function (c, l) {
            "function" !== typeof p.outputTo ? d.core["debugger"].outputFailed = !0 : (d.core["debugger"].outputFailed = !1, p.currentOutputHelper(c, l))
        }, currentOutputHelper: void 0, outputTo: void 0, enabled: !1
    };
    p.currentOutputHelper = p.outputHelpers.text;
    d.extend(d.core, {
        "debugger": {
            syncStateWithCharts: !0, outputFormat: function (c) {
                return c && "function" === typeof c.toLowerCase && "function" === typeof p.outputHelpers[c = c.toLowerCase()] ? (p.currentOutputHelper =
                    p.outputHelpers[c], !0) : !1
            }, outputTo: function (c) {
                "function" === typeof c ? p.outputTo = c : null === c && (d.core["debugger"].enable(!1), delete p.outputTo)
            }, enable: function (c, l, b) {
                var I;
                "object" === typeof c && 1 === arguments.length && (I = c, c = I.state, l = I.outputTo, b = I.outputFormat);
                "function" === typeof c && ("string" !== typeof l || 2 !== arguments.length && !I || (b = l), l = c, c = !0);
                if ("boolean" === typeof c && c !== p.enabled)d.core[(p.enabled = c) ? "addEventListener" : "removeEventListener"]("*", p.outputHandler);
                "function" === typeof l && (p.outputTo =
                    l);
                d.core["debugger"].outputFormat(b);
                return p.enabled
            }, enableFirebugLite: function () {
                var c;
                l.console && l.console.firebug ? d.core["debugger"].enable(l.console.log, "verbose") : ((c = l.document.getElementsByTagName("html")) && c[0].setAttribute("debug", "true"), d.loadScript("https://getfirebug.com/firebug-lite.js#overrideConsole=false,startOpened=true", function () {
                    d.core["debugger"].enable(l.console.log, "verbose")
                }, "{ startOpened: true }", !0, !0))
            }
        }, debugMode: {
            enabled: function () {
                l.setTimeout(function () {
                    throw Error("Deprecated! Please use FusionCharts.debugger.enable instead.");
                }, 0);
                return d.core["debugger"].enable.apply(d.core["debugger"], arguments)
            }
        }
    }, !1)
}]);
FusionCharts.register("module", ["private", "modules.mantle.eventmanager", function () {
    var d = this, l = d.window, D = d.core, w = l.Object.prototype.toString, p = w.call([]), c = function (a, c, b, g) {
        try {
            a[0].call(c, b, g || {})
        } catch (e) {
            setTimeout(function () {
                throw e;
            }, 0)
        }
    }, N = function (a, b, s) {
        if (a instanceof Array)for (var g = 0, e; g < a.length; g += 1) {
            if (a[g][1] === b.sender || void 0 === a[g][1])e = a[g][1] === b.sender ? b.sender : d.core, c(a[g], e, b, s), !0 === b.detached && (a.splice(g, 1), g -= 1, b.detached = !1);
            if (!0 === b.cancelled)break
        }
    }, b = {
        unpropagator: function () {
            return !1 ===
                (this.cancelled = !0)
        }, detacher: function () {
            return !1 === (this.detached = !0)
        }, undefaulter: function () {
            return !1 === (this.prevented = !0)
        }, listeners: {}, lastEventId: 0, addListener: function (a, c, s) {
            var g, e;
            if (w.call(a) === p) {
                g = [];
                for (e = 0; e < a.length; e += 1)g.push(b.addListener(a[e], c, s));
                return g
            }
            if ("string" !== typeof a)d.raiseError(s || d.core, "03091549", "param", "::EventTarget.addListener", Error("Unspecified Event Type")); else if ("function" !== typeof c)d.raiseError(s || d.core, "03091550", "param", "::EventTarget.addListener",
                Error("Invalid Event Listener")); else return a = a.toLowerCase(), b.listeners[a] instanceof Array || (b.listeners[a] = []), b.listeners[a].push([c, s]), c
        }, removeListener: function (a, c, s) {
            var g;
            if ("function" !== typeof c)d.raiseError(s || d.core, "03091560", "param", "::EventTarget.removeListener", Error("Invalid Event Listener")); else if (a instanceof Array)for (g = 0; g < a.length; g += 1)b.removeListener(a[g], c, s); else if ("string" !== typeof a)d.raiseError(s || d.core, "03091559", "param", "::EventTarget.removeListener", Error("Unspecified Event Type"));
            else if (a = a.toLowerCase(), a = b.listeners[a], a instanceof Array)for (g = 0; g < a.length; g += 1)a[g][0] === c && a[g][1] === s && (a.splice(g, 1), g -= 1)
        }, triggerEvent: function (a, c, s, g, e, h) {
            if ("string" !== typeof a)d.raiseError(c, "03091602", "param", "::EventTarget.dispatchEvent", Error("Invalid Event Type")); else {
                a = a.toLowerCase();
                var m = {
                    eventType: a,
                    eventId: b.lastEventId += 1,
                    sender: c || Error("Orphan Event"),
                    cancelled: !1,
                    stopPropagation: this.unpropagator,
                    prevented: !1,
                    preventDefault: this.undefaulter,
                    detached: !1,
                    detachHandler: this.detacher
                };
                N(b.listeners[a], m, s);
                N(b.listeners["*"], m, s);
                switch (m.prevented) {
                    case !0:
                        if ("function" === typeof h)try {
                            h.call(g || c || l, m, s || {})
                        } catch (M) {
                            setTimeout(function () {
                                throw M;
                            }, 0)
                        }
                        break;
                    default:
                        if ("function" === typeof e)try {
                            e.call(g || c || l, m, s || {})
                        } catch (z) {
                            setTimeout(function () {
                                throw z;
                            }, 0)
                        }
                }
                return !0
            }
        }
    }, I = d.raiseEvent = function (a, c, s, g, e, h) {
        return b.triggerEvent(a, s, c, g, e, h)
    }, a = d.legacyEventList = {}, z = {};
    d.disposeEvents = function (a) {
        var c, s;
        for (c in b.listeners)for (s = 0; s < b.listeners[c].length; s += 1)b.listeners[c][s][1] ===
        a && b.listeners[c].splice(s, 1)
    };
    d.raiseEventWithLegacy = function (c, b, s, g, e, h, m) {
        var d = a[c];
        I(c, b, s, e, h, m);
        d && "function" === typeof l[d] && setTimeout(function () {
            l[d].apply(e || l, g)
        }, 0)
    };
    d.raiseEventGroup = function (a, c, b, g, e, h, m) {
        var d = g.id, C = a + d;
        z[C] ? (clearTimeout(z[C]), delete z[C]) : d && C ? z[C] = setTimeout(function () {
            I(c, b, g, e, h, m);
            delete z[C]
        }, 0) : I(c, b, g, e, h, m)
    };
    d.addEventListener = function (a, c) {
        return b.addListener(a, c)
    };
    d.removeEventListener = function (a, c) {
        return b.removeListener(a, c)
    };
    d.extend(D, {
        addEventListener: function (a,
                                    c) {
            return b.addListener(a, c)
        }, removeEventListener: function (a, c) {
            return b.removeListener(a, c)
        }, ready: function (a, c, b) {
            d.ready ? (D.ready = function (a, e) {
                "function" === typeof a && setTimeout(function () {
                    a.call(e || D, c || D)
                }, 0)
            }, D.ready(a, b)) : "function" === typeof a && D.addEventListener("ready", function () {
                D.ready(a, c, b)
            });
            return this
        }
    });
    D.on = D.addEventListener;
    d.extend(D.prototype, {
        addEventListener: function (a, c) {
            return b.addListener(a, c, this)
        }, removeEventListener: function (a, c) {
            return b.removeListener(a, c, this)
        }
    });
    D.prototype.on = D.prototype.addEventListener;
    d.policies.options.events = ["events", {}];
    d.addEventListener("beforeInitialize", function (a) {
        a = a.sender;
        var c = a.options.events, b;
        if (c)for (b in c)"function" === typeof c[b] && a.addEventListener(b, c[b])
    });
    d.ready && !d.readyNotified && (d.readyNotified = !0, d.raiseEvent("ready", {
        version: d.core.version,
        now: d.readyNow
    }, d.core))
}]);
FusionCharts.register("module", ["private", "modules.mantle.ajax", function () {
    var d = this, l = d.window, D = parseFloat(l.navigator.appVersion.split("MSIE")[1]), w = 5.5 <= D && 7 >= D ? !0 : !1, p = "file:" === l.location.protocol, c = l.ActiveXObject, N = (!c || !p) && l.XMLHttpRequest, b = {
        objects: 0,
        xhr: 0,
        requests: 0,
        success: 0,
        failure: 0,
        idle: 0
    }, I = function () {
        var a;
        if (N)return I = function () {
            b.xhr++;
            return new N
        }, I();
        try {
            a = new c("Msxml2.XMLHTTP"), I = function () {
                b.xhr++;
                return new c("Msxml2.XMLHTTP")
            }
        } catch (d) {
            try {
                a = new c("Microsoft.XMLHTTP"),
                    I = function () {
                        b.xhr++;
                        return new c("Microsoft.XMLHTTP")
                    }
            } catch (p) {
                a = !1
            }
        }
        return a
    };
    d.core.ajax = {
        stats: function (a) {
            return a ? b[a] : d.extend({}, b)
        },
        headers: {
            "If-Modified-Since": "Sat, 29 Oct 1994 19:43:31 GMT",
            "X-Requested-With": "XMLHttpRequest",
            "X-Requested-By": "FusionCharts",
            Accept: "text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    };
    D = d.ajax = function (a, c) {
        this.onSuccess = a;
        this.onError = c;
        this.open = !1;
        b.objects++;
        b.idle++
    };
    d.extend(D.prototype, {
        headers: d.core.ajax.headers,
        transact: function (a, c, F, K) {
            var s = this, g = s.xmlhttp, e = s.headers, h = s.onError, m = s.onSuccess;
            a = "POST" === a;
            var M, C;
            if (!g || w)g = I(), s.xmlhttp = g;
            g.onreadystatechange = function () {
                try {
                    4 === g.readyState && (!g.status && p || 200 <= g.status && 300 > g.status || 304 === g.status || 1223 === g.status || 0 === g.status ? (m && m(g.responseText, s, K, c), b.success++) : h && (h(Error("XmlHttprequest Error"), s, K, c), b.failure++), b.idle--, s.open = !1)
                } catch (a) {
                    h && h(a, s, K, c), l.FC_DEV_ENVIRONMENT && setTimeout(function () {
                        throw a;
                    }, 0), b.failure++
                }
            };
            try {
                g.open(a ?
                    "POST" : "GET", c, !0);
                g.overrideMimeType && g.overrideMimeType("text/plain");
                if (a)if ("string" === typeof F)M = F; else {
                    M = [];
                    for (C in F)M.push(C + "=" + (F[C] + "").replace(/\=/g, "%3D").replace(/\&/g, "%26"));
                    M = M.join("&")
                } else M = null;
                for (C in e)g.setRequestHeader(C, e[C]);
                g.send(M);
                b.requests++;
                b.idle++;
                s.open = !0
            } catch (q) {
                d.raiseError(d.core, "1110111515A", "run", "XmlHttprequest Error", q.message)
            }
            return g
        }, get: function (a, c) {
            return this.transact("GET", a, void 0, c)
        }, post: function (a, c, b) {
            return this.transact("POST", a, c,
                b)
        }, abort: function () {
            var a = this.xmlhttp;
            this.open = !1;
            return a && "function" === typeof a.abort && a.readyState && 0 !== a.readyState && a.abort()
        }, dispose: function () {
            this.open && this.abort();
            delete this.onError;
            delete this.onSuccess;
            delete this.xmlhttp;
            delete this.open;
            b.objects--;
            return null
        }
    })
}]);
FusionCharts.register("module", ["private", "modules.mantle.runtime;1.1", function () {
    var d = this, l = d.window, D = /(^|[\/\\])(fusioncharts\.js)([\?#].*)?$/ig, w = /[\\\"<>;&]/, p = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//i, c = {}, N = {}, b = {}, I = {}, a = d.purgeDOM = function (c) {
        var b = c.attributes, g, e;
        if (b)for (g = b.length - 1; 0 <= g; g -= 1)e = b[g].name, "function" === typeof c[e] && (c[e] = null);
        if (b = c.childNodes)for (b = b.length, g = 0; g < b; g += 1)a(c.childNodes[g])
    }, z = function (a, c, b) {
        var e, h;
        for (e in a)if (a[e] instanceof Array)c[a[e][0]] = b[e]; else for (h in a[e])c[a[e][h][0]] =
            b[e][h]
    }, F = /^(FusionCharts|FusionWidgets|FusionMaps)/;
    d.getScriptBaseUri = function (a) {
        var c = l.document.getElementsByTagName("script"), b = c.length, e, h;
        for (h = 0; h < b; h += 1)if (e = c[h].getAttribute("src"), void 0 !== e && null !== e && null !== e.match(a))return e.replace(a, "$1")
    };
    d.core.options.scriptBaseUri = function () {
        var a = d.getScriptBaseUri(D);
        return void 0 === a ? (d.raiseError(FusionCharts, "1603111624", "run", ">GenericRuntime~scriptBaseUri", "Unable to locate FusionCharts script source location (URL)."), "") : a
    }();
    d.isXSSSafe =
        function (a, c) {
            return c && null !== p.exec(a) ? !1 : null === w.exec(a)
        };
    d.xssEncode = function (a) {
        return null === a || void 0 === a || "function" !== typeof a.toString ? "" : a = a.toString().replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };
    d.loadScript = function (a, s, g, e, h) {
        if (!a)return !1;
        var m = s && s.success || s, M = s && s.failure, C, q = {type: "script", success: !1}, Y = function () {
            I[C] = clearTimeout(I[C]);
            q.success ? m && m(a, C) : M && M(a, C);
            d.raiseEvent("externalresourceload", q, d.core)
        };
        h = h ? "" : d.core.options.scriptBaseUri;
        C = h + a;
        d.isXSSSafe(C, !1) || (C = "function" === typeof l.encodeURIComponent ? l.encodeURIComponent(C) : l.escape(C));
        q.path = h;
        q.src = C;
        q.file = a;
        if (!0 === b[C] && e)return q.success = !0, q.notReloaded = !0, "function" === typeof s && (s(), d.raiseEvent("externalresourceload", q, d.core)), !0;
        if (c[C] && e)return !1;
        c[C] = !0;
        N[C] && N[C].parentNode && N[C].parentNode.removeChild(N[C]);
        s = N[C] = l.document.createElement("script");
        s.type = "text/javascript";
        s.src = C;
        g && (s["\v" === "v" ? "text" : "innerHTML"] = g);
        "function" === typeof m && (b[C] = !1, I[C] = clearTimeout(I[C]), s.onload = function () {
            b[C] = !0;
            q.success = !0;
            Y()
        }, s.onerror = function () {
            b[C] = !1;
            c[C] = !1;
            Y()
        }, s.onreadystatechange = function () {
            if ("complete" === this.readyState || "loaded" === this.readyState)b[C] = !0, q.success = !0, Y()
        });
        l.document.getElementsByTagName("head")[0].appendChild(s);
        "function" === typeof M && (I[C] = setTimeout(function () {
            b[C] || Y()
        }, d.core.options.html5ResourceLoadTimeout || 15E3));
        return !0
    };
    d.capitalizeString = function (a, c) {
        return a ? a.replace(c ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/,
            function (a, c, b) {
                return c + b.toUpperCase()
            }) : a
    };
    d.extend(d.core, {
        clone: function (a, c) {
            var b = typeof a, e, h = d.extend({}, this.args, !1, !1);
            z(d.policies, h, this);
            z(d.renderer.getRendererPolicy(this.options.renderer), h, this);
            delete h.id;
            delete h.animate;
            delete h.stallLoad;
            e = h.link;
            h = d.extend({}, h, !1, !1);
            h.link = e;
            switch (b) {
                case "object":
                    d.extend(h, a);
                    break;
                case "boolean":
                    c = a
            }
            return c ? h : new d.core(h)
        }, isActive: function () {
            if (!this.ref || l.document.getElementById(this.id) !== this.ref)return !1;
            try {
                return F.test(this.ref.signature())
            } catch (a) {
                return !1
            }
        },
        chartType: function (a, c) {
            var b = this.src, e = !0 === c, h = this.options, m;
            "string" === typeof a && (c = "object" === typeof c ? c : {}, b = a.replace(/[\?\#][\s\S]*$/g, ""), m = null !== b.match(/\.swf\s*?$/ig), b = b.replace(/\.swf\s*?$/ig, ""), h.chartType = b.replace(/^[\s\S]*\//ig, "").replace(/^fcmap_/i, ""), h.chartTypeSourcePath = -1 === b.indexOf("/") ? c.chartTypeSourcePath || this.options.chartTypeSourcePath || d.core.options.chartTypeSourcePath || "" : b.replace(/[^\/]*?$/ig, ""), this.src = ((d.core.options.scriptBaseUri || "") + (h.chartTypeSourcePath ||
                d.core.options.chartTypeSourcePath || "")).replace(/\/\s*$/g, "") + "/" + h.chartType.replace(/\.swf\s*?$/ig, "") + ".swf", m && (d.raiseWarning(this, "08101320181", "comp", "FusionCharts#chartType", 'Chart type has ".swf" in alias and as such has been deprecated. Please use chart type alias.'), h.chartTypeSourcePath = d.core.options.chartTypeSourcePath || ""), void 0 !== c.dataSource && null !== c.dataSource ? this.setChartData(c.dataSource, c.dataFormat, c.dataConfiguration) : this.isActive() && !e && this.render());
            return (h.chartType ||
            "").toLowerCase()
        }
    }, !0);
    l.getChartFromId = function (a) {
        d.raiseWarning(this, "11133001041", "comp", "GenericRuntime~getObjectFromId()", 'Use of deprecated getChartFromId() or getMapFromId(). Replace with "FusionCharts()" or FusionCharts.items[].');
        return d.core.items[a] instanceof d.core ? d.core.items[a].ref : l.swfobject && l.swfobject.getObjectById(a)
    };
    l.getMapFromId = l.getChartFromId
}]);
FusionCharts.register("module", ["private", "api.printmanager", function () {
    var d = this;
    d.extend(d.core, {
        printManager: {
            configure: function () {
                d.raiseWarning(d.core, "28141714", "impl", ".printManager.configure", "PrintManager is deprecated")
            }, isReady: function () {
                d.raiseWarning(d.core, "28141714", "impl", ".printManager.isReady", "PrintManager is deprecated");
                return !1
            }, enabled: function () {
                d.raiseWarning(d.core, "28141714", "impl", ".printManager.enabled", "PrintManager is deprecated");
                return !1
            }, managedPrint: function () {
                d.raiseWarning(d.core,
                    "28141714", "impl", ".printManager.managedPrint", "PrintManager is deprecated")
            }
        }
    }, !1)
}]);
FusionCharts.register("module", ["private", "modules.interface.renderer", function () {
    var d = this, l = d.window, D = l.document, w = function () {
        d.raiseError(this, "25081845", "run", "::RendererManager", Error("No active renderer"))
    }, p = d.FusionChartsDOMInsertModes = {
        REPLACE: "replace",
        APPEND: "append",
        PREPEND: "prepend"
    }, c = {
        undefined: {
            render: w,
            remove: w,
            update: w,
            resize: w,
            config: w,
            policies: {}
        }
    }, N = {}, b = function (a) {
        return function () {
            var c = this.ref;
            if (void 0 === c || null === c || "function" !== typeof c[a])d.raiseError(this, "25081617",
                "run", "#" + a + "()", "ExternalInterface call failed. Check whether chart has been rendered."); else return c[a].apply(c, arguments)
        }
    }, I = function (a, c) {
        return "function" === typeof a[c] ? function () {
            return a[c].apply(a, arguments)
        } : a[c]
    }, a = function (a, c) {
        var b = D.getElementById(a), e = c.id || c.getAttribute("id"), h, m;
        if (null === b)return !1;
        if (a === e)return !0;
        e = c.getElementsByTagName("*");
        h = 0;
        for (m = e.length; h < m; h++)if (e[h] === b)return !1;
        return !0
    }, z = /[^\%\d]*$/ig, F;
    d.policies.options.containerElementId = ["renderAt", void 0];
    d.policies.options.renderer = ["renderer", void 0];
    d.normalizeCSSDimension = function (a, c, b) {
        a = void 0 === a ? b.offsetWidth || parseFloat(b.style.width) : a;
        c = void 0 === c ? b.offsetHeight || parseFloat(b.style.height) : c;
        var e = {}, h = b.style, m;
        h.width = a = a.toString ? a.toString() : "0";
        h.height = c = c.toString ? c.toString() : "0";
        if ((e.widthIsRelative = a.match(/^\s*\d*\.?\d*\%\s*$/) && !a.match(/^\s*0\%\s*$/)) && 0 === b.offsetWidth)for (m = b; m = m.offsetParent;)if (0 < m.offsetWidth) {
            a = (m.offsetWidth * parseFloat(a.match(/\d*/)[0]) / 100).toString();
            break
        }
        if ((e.heightIsRelative = c.match(/^\s*\d*\.?\d*\%\s*$/) && !c.match(/^\s*0\%\s*$/)) && 20 >= b.offsetHeight)for (m = b; m = m.offsetParent;)if (0 < m.offsetHeight) {
            c = (m.offsetHeight * parseFloat(c.match(/\d*/)[0]) / 100).toString();
            break
        }
        e.width = a.replace ? a.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : a;
        e.height = c.replace ? c.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : c;
        h.width = e.width;
        h.height = e.height;
        e.pixelWidth = e.widthIsRelative ? b.offsetWidth : parseInt(e.width, 10) || 0;
        e.pixelHeight = e.heightIsRelative ? b.offsetHeight : parseInt(e.height,
            10) || 0;
        return e
    };
    F = d.renderer = {
        register: function (a, b) {
            if (!a || "function" !== typeof a.toString)throw Error("#03091436 ~renderer.register() Invalid value for renderer name.");
            a = a.toString().toLowerCase();
            if (void 0 !== c[a])return d.raiseError(d.core, "03091438", "param", "::RendererManager>register", 'Duplicate renderer name specified in "name"'), !1;
            c[a] = b;
            return !0
        },
        userSetDefault: !1,
        setDefault: function (a) {
            if (!a || "function" !== typeof a.toString)return d.raiseError(d.core, "25081731", "param", "::RendererManager>setDefault",
                'Invalid renderer name specified in "name"'), !1;
            if (void 0 === c[a = a.toString().toLowerCase()])return d.raiseError(d.core, "25081733", "range", "::RendererManager>setDefault", "The specified renderer does not exist."), !1;
            this.userSetDefault = !1;
            d.policies.options.renderer = ["renderer", a];
            return !0
        },
        notifyRender: function (a) {
            var c = d.core.items[a && a.id];
            c && (!1 !== a.success || a.silent) || d.raiseError(d.core.items[a.id], "25081850", "run", "::RendererManager", Error("There was an error rendering the chart. Enable FusionCharts JS debugger for more information."));
            if (c.ref = a.ref)a.ref.FusionCharts = d.core.items[a.id];
            d.raiseEvent("internal.DOMElementCreated", {}, c)
        },
        protectedMethods: {
            options: !0,
            attributes: !0,
            src: !0,
            ref: !0,
            constructor: !0,
            signature: !0,
            link: !0,
            addEventListener: !0,
            removeEventListener: !0
        },
        getRenderer: function (a) {
            return c[a]
        },
        getRendererPolicy: function (a) {
            a = c[a].policies;
            return "object" === typeof a ? a : {}
        },
        currentRendererName: function () {
            return d.policies.options.renderer[1]
        },
        update: function (a) {
            N[a.id].update.apply(a, Array.prototype.slice.call(arguments,
                1))
        },
        render: function (a) {
            N[a.id].render.apply(a, Array.prototype.slice.call(arguments, 1))
        },
        remove: function (a) {
            N[a.id].remove.apply(a, Array.prototype.slice.call(arguments, 1))
        },
        resize: function (a) {
            N[a.id].resize.apply(a, Array.prototype.slice.call(arguments, 1))
        },
        config: function (a) {
            N[a.id].config.apply(a, Array.prototype.slice.call(arguments, 1))
        },
        dispose: function (a) {
            N[a.id].dispose.apply(a, Array.prototype.slice.call(arguments, 1))
        }
    };
    d.addEventListener("beforeInitialize", function (a) {
        a = a.sender;
        var b = a.options.renderer.toLowerCase(),
            g;
        "string" === typeof a.options.renderer && void 0 === c[b] && (a.options.renderer = d.policies.options.renderer[1]);
        a.options.renderer = b;
        N[a.id] = c[a.options.renderer];
        !0 !== N[a.id].initialized && "function" === typeof N[a.id].init && (N[a.id].init(), N[a.id].initialized = !0);
        d.parsePolicies(a, N[a.id].policies || {}, a.args);
        for (g in N[a.id].prototype)a[g] = N[a.id].prototype[g];
        for (g in N[a.id].events)a.addEventListener(g, N[a.id].events[g])
    });
    d.addEventListener(["rendered", "dataloaderror", "nodatatodisplay", "rendercancelled"],
        function (a, c) {
            var b = a.sender;
            b instanceof d.core && b.__state.rendering && (d.raiseEvent("internal.rendered", c, b), delete b.__state.rendering)
        });
    d.addEventListener("loaded", function (a) {
        var c = a.sender;
        a = a.sender.ref;
        var g, e;
        if (void 0 !== a && null !== a && "function" === typeof a.getExternalInterfaceMethods) {
            try {
                g = a.getExternalInterfaceMethods(), g = "string" === typeof g ? g.split(",") : []
            } catch (h) {
                g = [], d.raiseError(c, "13111126041", "run", "RendererManager^Loaded", Error("Error while retrieving data from the chart-object." +
                    (h.message && 0 <= h.message.indexOf("NPObject") ? " Possible cross-domain security restriction." : "")))
            }
            for (a = 0; a < g.length; a += 1)e = g[a], void 0 === c[e] && (c[e] = b(e));
            if (c.ref)for (e in g = F.protectedMethods, a = F.getRenderer(c.options.renderer).protectedMethods, c)if (a && !g[e] && !a[e] && void 0 === c.ref[e])try {
                c.ref[e] = I(c, e)
            } catch (m) {
            }
        }
    });
    d.legacyEventList.resized = "FC_Resized";
    d.extend(d.core.prototype, {
        render: function (c, b, g) {
            var e = this, h, m, M;
            if ((M = l[this.id]) && M.FusionCharts && M.FusionCharts === this || (M = this.ref) && M.FusionCharts &&
                M.FusionCharts === this)d.renderer.dispose(this), M === l[this.id] && (l[this.id] = void 0);
            void 0 !== l[this.id] && d.raiseError(this, "25081843", "comp", ".render", Error("#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name forchart JS variable, chart-id and container id."));
            g ? "function" !== typeof g && (g = void 0) : "function" === typeof b ? (g = b, b = void 0) : b || "function" !== typeof c || (g = c, c = void 0);
            b = (b || this.options.insertMode).toLowerCase() || p.REPLACE;
            void 0 === c && (c = this.options.containerElementId);
            "string" === typeof c && (c = D.getElementById(c));
            if (void 0 === c || null === c)return d.raiseError(this, "03091456", "run", ".render()", Error("Unable to find the container DOM element.")), this;
            if (a(this.id, c))return d.raiseError(this, "05102109", "run", ".render()", Error("A duplicate object already exists with the specific Id: " + this.id)), this;
            h = D.createElement(this.options.containerElementType || "span");
            h.setAttribute("id", this.id);
            if ("append" !== b && "prepend" !== b)for (; c.hasChildNodes();)c.removeChild(c.firstChild);
            "prepend" === b && c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h);
            this.options.containerElement = c;
            this.options.containerElementId = c.id;
            if (b = h.style)b.position = "relative", b.textAlign = "left", b.lineHeight = "normal", b.display = "inline-block", b.zoom = "1", b.fontWeight = "normal", b.fontVariant = "normal", b.fontStyle = "normal", b.textDecoration = "none", b["*DISPLAY"] = "inline", b.padding = "0", b.margin = "0", b.border = "none";
            this.options.containerClassName && (h.className = this.options.containerClassName);
            b = d.normalizeCSSDimension(this.width,
                this.height, h);
            this.__state.renderedWidth = b.pixelWidth;
            this.__state.renderedHeight = b.pixelHeight;
            this.__state.rendering = !0;
            d.raiseEvent("beforeRender", m = {
                container: c,
                width: this.width,
                height: this.height,
                renderer: this.options.renderer
            }, this, void 0, function (a, c) {
                d.renderer.render(e, h, function () {
                    d.renderer.notifyRender.apply(this, arguments);
                    if (g)try {
                        g.call(a.sender, c.container)
                    } catch (b) {
                        setTimeout(function () {
                            throw b;
                        })
                    }
                })
            }, function () {
                d.raiseEvent("renderCancelled", m, e)
            });
            return this
        }, remove: function () {
            d.renderer.remove(this);
            return this
        }, resizeTo: function (a, c, b) {
            var e = this, h = e.width, m = e.height, M = e.__state;
            "object" === typeof a && (b = c, c = a.h, a = a.w);
            a = null === a || void 0 === a ? h : a.toString().replace(z, "");
            c = null === c || void 0 === c ? m : c.toString().replace(z, "");
            !0 !== b ? d.raiseEvent("beforeresize", {
                currentWidth: h,
                currentHeight: m,
                newWidth: a,
                newHeight: c
            }, e, void 0, function () {
                e.width = a;
                e.height = c;
                d.renderer.resize(e, {width: a, height: c});
                d.raiseEventWithLegacy("resized", {
                    width: e.width,
                    height: e.height,
                    prevWidth: h,
                    prevHeight: m,
                    pixelWidth: e.ref &&
                    e.ref.offsetWidth || 0,
                    pixelHeight: e.ref && e.ref.offsetHeight || 0,
                    originalWidth: M.renderedWidth,
                    originalHeight: M.renderedHeight
                }, e, [e.id, e.width, e.height])
            }, function () {
                d.raiseEvent("resizecancelled", {
                    currentWidth: h,
                    currentHeight: m,
                    cancelledTargetWidth: a,
                    cancelledTargetHeight: c
                }, e)
            }) : (e.width = a, e.height = c);
            return this
        }, dispose: function () {
            var a = this, c = {};
            d.raiseEvent("beforeDispose", c, a, void 0, function () {
                d.renderer.dispose(a);
                d.raiseEvent("disposed", c, a);
                d.disposeEvents(a);
                delete d.core.items[a.id];
                for (var b in a)a.hasOwnProperty(b) && delete a[b];
                a.disposed = !0
            }, function () {
                d.raiseEvent("disposeCancelled", c, a)
            })
        }, configure: function (a, c) {
            var b;
            a && ("string" === typeof a ? (b = {}, b[a] = c) : b = a, d.renderer.config(this, b))
        }
    });
    d.extend(d.core, {
        setCurrentRenderer: function () {
            var a = F.setDefault.apply(F, arguments);
            F.userSetDefault = !0;
            return a
        }, getCurrentRenderer: function () {
            return F.currentRendererName.apply(F, arguments)
        }, render: function (a, c) {
            return a instanceof d.core ? (a.render(c), a) : (new d.core(a)).render(c)
        }
    }, !1)
}]);
FusionCharts.register("module", ["private", "modules.interface.transcoder", function () {
    var d = this, l = d.window, D = d.transcoders = {}, w = {}, p = {}, c = /url$/i, N = d._interactiveCharts = {
        selectscatter: [!0, !1],
        dragcolumn2d: [!0, !0],
        dragarea: [!0, !0],
        dragline: [!0, !0],
        dragnode: [!0, !0]
    }, b = function (c, b, m, g) {
        var s = m.obj;
        m = m.args;
        m.dataSource = c;
        m.xmlHttpRequestObject = b;
        m.source = "XmlHttpRequest";
        m.url = g;
        d.raiseEvent("dataLoadRequestCompleted", m, s, void 0, a, z)
    }, I = function (a, c, b) {
        var g = b.obj;
        b = b.args;
        b.error = a;
        b.httpStatus = c.xhr &&
        c.xhr.status ? c.xhr.status : -1;
        b.xmlHttpRequestObject = c;
        d.raiseEvent("dataLoadError", b, g);
        "function" === typeof l.FC_DataLoadError && l.FC_DataLoadError(g.id, b)
    }, a = function (a, c) {
        a.sender.setChartData(c.dataSource, c.dataFormat, c.config, c.successcallback, c.silent)
    }, z = function (a, c) {
        d.raiseEvent("dataLoadCancelled", c, a.sender);
        c.xmlHttpRequestObject.abort()
    }, F = function (a, c) {
        var m = a.sender, g = m.__state, s = c.url;
        m.options.dataSource = c.url;
        g.dhmXhrObj || (g.dhmXhrObj = new d.ajax(b, I));
        g.dhmXhrObj.get("function" === typeof l.decodeURIComponent ? l.decodeURIComponent(s) : l.unescape(s), {
            obj: m,
            args: c
        })
    }, K = function (a, c) {
        var b = a.sender, g = b.__state;
        d.raiseEvent("dataLoadRequestCancelled", c, b);
        g && g.dhmXhrObj && g.dhmXhrObj.abort()
    }, s = function (a, c) {
        var b = a.sender, g = b.__state, s = b.id;
        w[s] = c;
        p[s] && delete p[s];
        p[s] = {};
        g.dataReady = void 0;
        g.dataAvailable = !0;
        !0 !== c.silent && (!0 !== b.options.safeMode || !0 !== g.rendering || b.isActive() ? (delete g.args, d.renderer.update(b, c)) : (g.updatePending = c, d.raiseWarning(b, "23091255", "run", "::DataHandler~update",
            "Renderer update was postponed due to async loading.")));
        d.raiseEvent("dataUpdated", c, b, void 0, c.successcallback)
    }, g = function (a, c) {
        d.raiseEvent("dataUpdateCancelled", c, a.sender, void 0, c.failurecallback)
    };
    d.dataFormats = {};
    d.policies.options.dataSource = ["dataSource", void 0];
    d.policies.options.dataFormat = ["dataFormat", void 0];
    d.policies.options.dataConfiguration = ["dataConfiguration", void 0];
    d.policies.options.showDataLoadingMessage = ["showDataLoadingMessage", !1];
    d.addDataHandler = function (a, c) {
        if ("string" !== typeof a || void 0 !== D[a.toLowerCase()])d.raiseError(d.core, "03091606", "param", "::DataManager.addDataHandler", Error("Invalid Data Handler Name")); else {
            var b = {}, g = a.toLowerCase();
            D[g] = c;
            c.name = a;
            b["set" + a + "Data"] = function (c, b, h) {
                return this.setChartData(c, a, b, h)
            };
            c.transportable && (b["set" + a + "Url"] = function (c, b, h) {
                return this.setChartDataUrl(c, a, b, h)
            }, d.dataFormats[a + "URL"] = g + "Url");
            b["get" + a + "Data"] = function () {
                return this.getChartData(a)
            };
            d.dataFormats[a] = g;
            d.extend(d.core, b, !0)
        }
    };
    d.extend(d.core.prototype,
        {
            setChartDataUrl: function (a, b, m, g, s) {
                if (void 0 === b || null === b || "function" !== typeof b.toString)b = this.options.dataFormat, d.raiseWarning(this, "03091609", "param", "FusionCharts#setChartDataUrl", "Invalid Data Format. Reverting to current data format - " + b);
                b = b.toString().toLowerCase();
                b = c.test(b) ? b.slice(0, -3) : b;
                d.raiseEvent("dataLoadRequested", {
                    source: "XmlHttpRequest",
                    url: a,
                    dataFormat: b,
                    silent: !!s,
                    config: m,
                    successcallback: g
                }, this, void 0, F, K)
            }, setChartData: function (a, b, m, z, C) {
            var q = this.options, Y, u;
            if (void 0 ===
                b || null === b || "function" !== typeof b.toString)b = q.dataFormat, d.raiseWarning(this, "03091610", "param", "FusionCharts#setChartData", "Invalid Data Format. Reverting to current data format - " + b);
            b = b.toString().toLowerCase();
            c.test(b) ? this.setChartDataUrl(a, b, m, z, C) : (q.dataSource = a, Y = b, q.dataFormat = b, u = D[Y], "undefined" === typeof u ? d.raiseError(d.core, "03091611", "param", "FusionCharts#setChartData", Error("Data Format not recognized")) : (b = (b = d.renderer && d.renderer.getRenderer(q.renderer || d.renderer.currentRendererName())) &&
                b.dataFormat, m = b === Y ? u.passthrough ? u.passthrough(a, m) : {data: a} : u.encode(a, this, m || q.dataConfiguration) || {}, m["native"] = b === Y, m.format = m["native"] ? b : "xml", m.dataFormat = Y, m.dataSource = a, m.silent = !!C, "function" === typeof z && (m.successcallback = z), d.raiseEvent("beforeDataUpdate", m, this, void 0, s, g)))
        }, getChartData: function (a, c) {
            var b = this.options, g = this.id, s;
            if (void 0 === a || "function" !== typeof a.toString || void 0 === (s = D[a = a.toString().toLowerCase()]))d.raiseError(this, "25081543", "param", "::transcoder~getChartData()",
                Error('Unrecognized data-format specified in "format"')); else return p[g][a] ? b = p[g][a] : w[g] ? (a === w[g].format ? p[g][a] = w[g] : (p[g].xml || (p[g].xml = "xml" === w[g].format ? w[g] : D[w[g].format].encode(w[g].data, this, b.dataConfiguration)), p[g][a] || (p[g][a] = s.decode(p[g].xml.data, this, b.dataConfiguration))), b = p[g][a]) : b = {error: Error("Data not defined")}, !0 === Boolean(c) ? b : b.data
        }, dataReady: function (a) {
            return a ? this.__state.dataAvailable : this.__state.dataReady
        }
        });
    d.extend(d.core, {
        transcodeData: function (a, c, b, g,
                                 s) {
            if (c && "function" === typeof c.toString && b && "function" === typeof b.toString && void 0 !== D[b = b.toString().toLowerCase()] && void 0 !== D[c = c.toString().toLowerCase()])return a = D[c].encode(a, this, s), b = D[b].decode(a.data, this, s), b.error instanceof Error || (b.error = a.error), g ? b : b.data;
            d.raiseError(this, "14090217", "param", ".transcodeData()", Error("Unrecognized data-format specified during transcoding."))
        }
    }, !1);
    d.getRenderer && !d.getRenderer("flash") || d.addEventListener("DataLoadRequested", function (a) {
        var c = a.sender;
        c.options && "flash" === c.options.renderer && c.options.useLegacyXMLTransport && a.preventDefault()
    });
    d.addEventListener("beforeInitialize", function (a) {
        a = a.sender;
        var b = a.options, g = b.dataSource, s = d.renderer && d.renderer.getRenderer(b.renderer);
        delete w[a.id];
        p[a.id] = {};
        if (void 0 !== g && null !== g) {
            a.__state.dataSetDuringConstruction = !0;
            if ("string" !== typeof b.dataFormat)switch (typeof g) {
                case "function":
                    g = b.dataSource = g.call(a, b.dataConfiguration);
                    b.dataFormat = "JSON";
                    break;
                case "string":
                    b.dataFormat = /^\s*?\{[\s\S]*\}\s*?$/g.test(a.options.dataFormat) ?
                        "JSON" : "XML";
                    break;
                case "object":
                    b.dataFormat = "JSON"
            }
            b.dataFormat && b.dataFormat.toString && (a.__state.dataFetchDuringConstruction = c.test(b.dataFormat.toString()));
            a.setChartData(g, b.dataFormat, void 0, void 0, !0)
        } else s && (a.__state.dataSetDuringConstruction = !1, d.raiseWarning(a, "1810131922A", "param", ":dataHandler~event:beforeInitialize", "Data source was not defined during construction, hence set to blank renderer default - " + s.dataFormat), a.setChartData("", s.dataFormat, void 0, void 0, !0), a.__state.dataAvailable = !1)
    });
    d.addEventListener("beforeDispose", function (a) {
        var c = a.sender;
        delete w[a.sender.id];
        delete p[a.sender.id];
        c && c.__state && c.__state.dhmXhrObj && c.__state.dhmXhrObj.abort()
    });
    d.addEventListener("disposed", function (a) {
        delete p[a.sender.id]
    });
    d.addEventListener("loaded", function (a) {
        a = a.sender;
        var c = a.__state.updatePending;
        a instanceof d.core && void 0 !== c && (delete a.__state.updatePending, d.renderer.update(a, c))
    });
    d.addEventListener("dataUpdated", function (a, c) {
        var b = a.sender, g = b.__state;
        g.rendering &&
        (g.dataFetchDuringConstruction || g.updatePending) && (delete g.dataFetchDuringConstruction, delete g.updatePending, d.renderer.update(b, c))
    });
    d.addEventListener(["dataLoadError", "dataInvalid"], function (a) {
        a.sender.__state.dataAvailable = !1
    });
    d.addEventListener("loaded", function (a) {
        a = a.sender;
        var c = a.__state, b, g, s;
        s = function (a, c) {
            return function (b) {
                return !1 === b ? c.apply(this) : this.ref.getUpdatedXMLData ? d.core.transcodeData(this.ref.getUpdatedXMLData(), "xml", a) : this.getData ? this.getData(a) : c.apply(this)
            }
        };
        if (a.chartType && N[a.chartType()] && N[a.chartType()][0]) {
            for (b in d.transcoders)g = d.transcoders[b].name, g = "get" + g + "Data", a[g] = s(b, a.constructor.prototype[g]), a[g]._dynamicdatarouter = !0;
            c.dynamicDataRoutingEnabled = !0
        } else if (c.dynamicDataRoutingEnabled) {
            for (b in d.transcoders)g = d.transcoders[b].name, g = "get" + g + "Data", a.hasOwnProperty(g) && a[g]._dynamicdatarouter && delete a[g];
            c.dynamicDataRoutingEnabled = !1
        }
    })
}]);
"object" !== typeof JSON && (JSON = {});
(function () {
    function d(a) {
        return 10 > a ? "0" + a : a
    }

    function l(a) {
        p.lastIndex = 0;
        return p.test(a) ? '"' + a.replace(p, function (a) {
            var c = b[a];
            return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function D(a, b) {
        var d, p, s, g, e = c, h, m = b[a];
        m && "object" === typeof m && "function" === typeof m.toJSON && (m = m.toJSON(a));
        "function" === typeof I && (m = I.call(b, a, m));
        switch (typeof m) {
            case "string":
                return l(m);
            case "number":
                return isFinite(m) ? String(m) : "null";
            case "boolean":
            case "null":
                return String(m);
            case "object":
                if (!m)return "null";
                c += N;
                h = [];
                if ("[object Array]" === Object.prototype.toString.apply(m)) {
                    g = m.length;
                    for (d = 0; d < g; d += 1)h[d] = D(d, m) || "null";
                    s = 0 === h.length ? "[]" : c ? "[\n" + c + h.join(",\n" + c) + "\n" + e + "]" : "[" + h.join(",") + "]";
                    c = e;
                    return s
                }
                if (I && "object" === typeof I)for (g = I.length, d = 0; d < g; d += 1)"string" === typeof I[d] && (p = I[d], (s = D(p, m)) && h.push(l(p) + (c ? ": " : ":") + s)); else for (p in m)Object.prototype.hasOwnProperty.call(m, p) && (s = D(p, m)) && h.push(l(p) + (c ? ": " : ":") + s);
                s = 0 === h.length ? "{}" : c ? "{\n" + c + h.join(",\n" +
                    c) + "\n" + e + "}" : "{" + h.join(",") + "}";
                c = e;
                return s
        }
    }

    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var w = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c, N, b = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, I;
    "function" !== typeof JSON.stringify && (JSON.stringify = function (a, b, d) {
        var p;
        N = c = "";
        if ("number" === typeof d)for (p = 0; p < d; p += 1)N += " "; else"string" === typeof d && (N = d);
        if ((I = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))throw Error("JSON.stringify");
        return D("", {"": a})
    });
    "function" !== typeof JSON.parse && (JSON.parse = function (a, c) {
        function b(a, g) {
            var e, d, m = a[g];
            if (m && "object" === typeof m)for (e in m)Object.prototype.hasOwnProperty.call(m, e) && (d = b(m, e), void 0 !== d ? m[e] = d : delete m[e]);
            return c.call(a, g, m)
        }

        var d;
        a = String(a);
        w.lastIndex = 0;
        w.test(a) && (a = a.replace(w, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return d = eval("(" + a + ")"), "function" === typeof c ? b({"": d}, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();
FusionCharts.register("module", ["private", "modules.data.json", function () {
    var d = this, l = d.window, D = l.document, w = d.xssEncode, p, c;
    void 0 === l.JSON && d.raiseError(this, "1113062012", "run", "JSONDataHandler", Error("Could not find library support for JSON parsing."));
    d.policies.options.allowIESafeXMLParsing = ["_allowIESafeXMLParsing", !0];
    p = function () {
        var c = {
                set: !0,
                trendlines: !0,
                vtrendlines: !0,
                line: {trendlines: !0, vtrendlines: !0},
                data: !0,
                dataset: !0,
                lineset: !0,
                categories: !0,
                category: !0,
                linkeddata: !0,
                application: !0,
                definition: !0,
                axis: !0,
                connectors: !0,
                connector: {connectors: !0},
                trendset: !0,
                row: {rows: !0},
                column: {columns: !0},
                label: {labels: !0},
                color: {colorrange: !0},
                dial: {dials: !0},
                pointer: {pointers: !0},
                point: {trendpoints: !0},
                process: {processes: !0},
                task: {tasks: !0},
                milestone: {milestones: !0},
                datacolumn: {datatable: !0},
                text: {datacolumn: !0},
                item: {legend: !0},
                alert: {alerts: !0},
                groups: {annotations: !0},
                items: {groups: !0, data: !0},
                shapes: !0,
                shape: {shapes: !0},
                entitydef: !0,
                entity: {entitydef: !0}
            }, b = {
                chart: "linkedchart",
                map: "linkedmap",
                set: "data",
                vline: {chart: "data", graph: "data", dataset: "data", categories: "category", linkedchart: "data"},
                apply: {application: "application"},
                style: {definition: "definition"},
                marker: {application: "application", definition: "definition", data: "items"},
                entity: {entitydef: "entitydef", data: "data"},
                shape: {shapes: "shapes"},
                connector: {
                    connectors: {
                        chart: "connector",
                        linkedchart: "connector",
                        map: "connectors",
                        linkedmap: "connectors"
                    }
                },
                annotationgroup: {annotations: "groups"},
                annotation: {groups: "items"}
            }, p = {vline: {vline: "true"}},
            a = {chart: !0, map: !0, graph: !0}, z = {dataset: "data", categories: "category"}, F = {
                target: "target",
                value: "value"
            }, K = {
                styles: {definition: !0, application: !0},
                chart: {value: !0, target: !0},
                graph: {value: !0, target: !0},
                linkedchart: {value: !0, target: !0},
                markers: {definition: !0, application: !0, shapes: !0, connectors: !0, data: !0},
                map: {entitydef: !0, data: !0},
                linkedmap: {entitydef: !0, data: !0}
            }, s, g;
        s = {
            append: function (a, b, g, d) {
                !c[g] || !0 !== c[g] && !0 !== c[g][d] ? b[g] = a : (b[g] instanceof Array || (b[g] = []), b[g].push(a))
            }, child: function (c, g,
                                m, M) {
                var C, q, Y, u, l, t;
                for (C = 0; C < g.length; C += 1)switch (Y = g[C], q = Y.nodeName.toLowerCase(), Y.nodeType) {
                    case 1:
                        u = s.attr(Y.attributes);
                        t = a[q];
                        !0 === t && (l = u, u = {}, u[q] = l);
                        t = p[q];
                        "object" === typeof t && d.extend(u, t);
                        if (t = b[q])if ("object" === typeof t && "object" === typeof t[m])for (l in l = void 0, t[m]) {
                            if (M[l]) {
                                q = t[m][l];
                                break
                            }
                        } else"object" === typeof t && "string" === typeof t[m] ? q = t[m] : "string" === typeof t && (q = t);
                        Y.childNodes.length && ((t = K[m]) && t[q] ? s.child(c, Y.childNodes, q, M) : s.child(u, Y.childNodes, q, M));
                        (t = K[m]) && t[q] ||
                        s.append(u, c, q, m);
                        break;
                    case 3:
                        if (t = F[m])q = t, u = Y.data, s.append(u, c, q, m);
                        t = z[m];
                        "string" === typeof t && M.chart && parseInt(M.chart.compactdatamode, 10) && (q = t, u = Y.data, c[q] = c[q] ? c[q] + u : u)
                }
            }, attr: function (a) {
                var c, b = {};
                if (!a || !a.length)return b;
                for (c = 0; c < a.length; c += 1)b[a[c].nodeName.toLowerCase()] = a[c].value || a[c].nodeValue;
                return b
            }
        };
        g = function (a) {
            var c = {}, b, p, z, q, Y, u, F, t, I;
            if ("object" !== typeof a && a && "function" !== typeof a.toString)return g.errorObject = new TypeError("xml2json.parse()"), c;
            a = a.toString().replace(/<\!--[\s\S]*?--\x3e/g,
                "").replace(/<\?xml[\s\S]*?\?>/ig, "").replace(/&(?!([^;\n\r]+?;))/g, "&amp;$1");
            a = a.replace(/^\s\s*/, "");
            for (var K = /\s/, w = a.length; K.test(a.charAt(w -= 1)););
            a = a.slice(0, w + 1);
            if (!a)return c;
            try {
                l.DOMParser ? b = (new l.DOMParser).parseFromString(a, "text/xml") : D.body && d.core.options.allowIESafeXMLParsing ? (p = D.createElement("xml"), p.innerHTML = a, D.body.appendChild(p), b = p.XMLDocument, D.body.removeChild(p)) : (b = new l.ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
                if (!(b && b.childNodes && 1 === b.childNodes.length &&
                    (z = b.childNodes[0]) && z.nodeName && (q = z.nodeName.toLowerCase())) || "chart" !== q && "map" !== q && "graph" !== q)return g.errorObject = new TypeError("xml2json.parse()"), c;
                if ("graph" === q) {
                    Y = b.createElement("chart");
                    for (I = (F = z.attributes) && F.length || 0; I--;)Y.setAttribute(F[I].name, F[I].value), F.removeNamedItem(F[I].name);
                    if (I = (t = z.childNodes) && t.length || 0)I -= 1, u = z.removeChild(t[I]), Y.appendChild(u);
                    for (; I--;)u = z.removeChild(t[I]), Y.insertBefore(u, Y.firstChild);
                    b.replaceChild(Y, z);
                    z = Y
                }
            } catch (N) {
                g.errorObject = N
            }
            z ?
                (z.attributes && (c[q] = s.attr(z.attributes)), z.childNodes && s.child(c, z.childNodes, q, c), delete g.errorObject) : g.errorObject = new TypeError("xml2json.parse()");
            return c
        };
        return function (a) {
            delete g.errorObject;
            return {data: g(a), error: g.errorObject}
        }
    }();
    c = function () {
        var c, b;
        c = {
            items: {
                explode: {data: "set", groups: {annotations: "annotationgroup"}, items: {groups: "annotation"}},
                text: {chart: {target: "target", value: "value"}, graph: {target: "target", value: "value"}},
                dsv: {dataset: {data: "dataset"}, categories: {category: "categories"}},
                attr: {
                    chart: {chart: "chart"},
                    graph: {graph: "graph"},
                    map: {map: "map"},
                    linkedmap: {map: "map"},
                    linkedchart: {chart: "chart"}
                },
                group: {
                    styles: {definition: "style", application: "apply"},
                    map: {data: "entity", entitydef: "entity"},
                    markers: {
                        definition: "marker",
                        application: "marker",
                        shapes: "shape",
                        connectors: "connector",
                        items: "marker"
                    }
                },
                tag: {markers: {items: "data"}}
            }, qualify: function (c, a, b) {
                return "object" === typeof this.items[c][b] ? this.items[c][b][a] : this.items[c][b]
            }
        };
        b = function (d, a, z, p) {
            var l = "", s = "", g = "", e = "", h, m, M;
            a &&
            "function" === typeof a.toLowerCase && (a = a.toLowerCase());
            if (void 0 === z && d[a])for (h in d[a])m = h.toLowerCase(), "compactdatamode" === m && (p.applyDSV = 1 == d[a][h]);
            if (d instanceof Array)for (h = 0; h < d.length; h += 1)g = "string" === typeof d[h] ? g + w(d[h]) : g + b(d[h], a, z, p); else {
                for (h in d)m = h.toLowerCase(), d[h] instanceof Array && (M = c.qualify("group", m, a)) ? (g = c.qualify("tag", m, a) || m, s += "<" + g + ">" + b(d[h], M, a, p) + "</" + g + ">") : "object" === typeof d[h] ? (M = c.qualify("attr", m, a)) ? (e = b(d[h], M, a, p).replace(/\s*\/\>/ig, ""), a = m) : s += b(d[h],
                    m, a, p) : p.applyDSV && (M = c.qualify("dsv", m, a)) ? s += d[h] : (M = c.qualify("text", m, a)) ? (g = c.qualify("tag", m, a) || M, s += "<" + g + ">" + d[h] + "</" + g + ">") : "vline" === m && Boolean(d[h]) ? a = "vline" : l += " " + m + '="' + w(d[h]).toString().replace(/\"/ig, "&quot;") + '"';
                if (M = c.qualify("explode", z, a))a = M;
                g = a;
                g = ("" !== e ? e : "<" + g) + l + ("" !== s ? ">" + s + "</" + g + ">" : " />")
            }
            return g
        };
        return function (c) {
            delete b.errorObject;
            if (c && "string" === typeof c)try {
                c = JSON.parse(c)
            } catch (a) {
                b.errorObject = a
            }
            return {
                data: b(c, c && c.graph ? "graph" : c && c.map ? "map" : "chart",
                    void 0, {}), error: b.errorObject
            }
        }
    }();
    d.addDataHandler("JSON", {
        encode: c, decode: p, passthrough: function (c) {
            var b = {data: {}};
            if (!c)return b;
            if ("string" !== typeof c)try {
                c = JSON.stringify(c)
            } catch (d) {
                return b.error = d, b
            }
            try {
                b.data = JSON.parse(c.replace(/"([^"]+)":/g, function (a, c) {
                    return '"' + c.toLowerCase() + '":'
                }))
            } catch (a) {
                b.error = a
            }
            return b
        }, transportable: !0
    })
}]);
FusionCharts.register("module", ["private", "modules.data.xml", function () {
    var d = function (d) {
        return {data: d, error: void 0}
    };
    this.addDataHandler("XML", {encode: d, decode: d, transportable: !0})
}]);
FusionCharts.register("module", ["private", "modules.data.csv", function () {
    var d = this, l = d.window, D = d.core, w = l.parseInt, p = l.parseFloat, c = function (c) {
        return c
    }, N;
    N = function (c) {
        this.data = [];
        this.columnCount = this.rowCount = 0;
        this.configure(c)
    };
    N.decodeLiterals = function (c, d) {
        return void 0 !== c && null !== c && c.toString ? c.replace("{tab}", "\t").replace("{quot}", '"').replace("{apos}", "'") : d
    };
    N.prototype.set = function (c, d, a) {
        var p;
        if (this.rowCount <= c) {
            for (p = this.rowCount; p <= c; p += 1)this.data[p] = [];
            this.rowCount = c + 1
        }
        this.columnCount <=
        d && (this.columnCount = d + 1);
        this.data[c][d] = a
    };
    N.prototype.setRow = function (c, d) {
        var a;
        if (this.rowCount <= c) {
            for (a = this.rowCount; a <= c; a += 1)this.data[a] = [];
            this.rowCount = c + 1
        }
        this.columnCount < d.length && (this.columnCount = d.length);
        this.data[c] = d
    };
    N.prototype.get = function (c, d) {
        var a = this.data;
        return a[c] && a[c][d]
    };
    N.prototype.configure = function (c) {
        var d = N.decodeLiterals;
        this.delimiter = d(c.delimiter, ",");
        this.qualifier = d(c.qualifier, '"');
        this.eolCharacter = d(c.eolCharacter, "\r\n");
        this.numberFormatted = !!w(c.numberFormatted,
            0)
    };
    N.prototype.clear = function () {
        this.data = [];
        this.columnCount = this.rowCount = 0
    };
    N.prototype.toString = function () {
        var c, d, a = "";
        for (c = 0; c < this.rowCount; c += 1)d = this.qualifier + this.data[c].join(this.qualifier + this.delimiter + this.qualifier) + this.qualifier, a += '""' === d ? this.eolCharacter : d + this.eolCharacter;
        0 < this.rowCount && (a = a.slice(0, a.length - 2));
        return a
    };
    d.addDataHandler("CSV", {
        encode: function (c, p) {
            d.raiseError(p, "0604111215", "run", "::CSVDataHandler.encode()", "FusionCharts CSV data-handler only supports encoding of data.");
            throw Error("FeatureNotSupportedException()");
        }, decode: function (b, d) {
            var a = D.transcodeData(b, "xml", "json") || {}, z = d.jsVars, l, w, s, g, e, h, m, M = a.chart || a.map || a.graph || {};
            m = Boolean(M.exporterrorcolumns || 0);
            var C = a.categories && a.categories[0] && a.categories[0].category || [], q = a.map && !a.chart || z && z.instanceAPI && "geo" === z.instanceAPI.defaultSeriesType, Y = !1, u = !1, ea = !1, t = !1;
            w = !1;
            var V = c, X = {}, ia, Ba, qa, da, ka, aa, Z, ca, S, G, fa;
            e = 0;
            l = new N({
                separator: M.exportdataseparator,
                qualifier: M.exportdataqualifier,
                numberFormatted: M.exportdataformattedval
            });
            D.formatNumber && l.numberFormatted && (V = function (a) {
                return D.formatNumber(a, M)
            });
            if (q)for (G in X.geo = !0, C = z.hcObj && z.hcObj.entities && z.hcObj.entities.items || [], l.setRow(0, ["Id", " Short Name", "Long Name", "Value", "Formatted Value"]), z = 0, C)u = C[G], fa = u.eJSON, w = u.value, l.setRow(++z, [G, fa.shortLabel, fa.label, void 0 === w ? "" : w, u.formattedValue]); else if (void 0 !== (ia = a.dials && a.dials.dial || a.pointers && a.pointers.pointer || a.value))if (X.gauge = !0, "string" === typeof ia)l.set(0, 0, V(ia)), X.singlevalue = !0, "string" === typeof a.target && (l.set(0, 1, V(a.target)), X.bullet = !0); else for (l.setRow(0, ["Id", "Value"]), X.multivalue = !0, z = 0, h = 1, e = ia.length; z < e; z += 1, h += 1)l.setRow(h, [h, V(ia[z].value)]); else if (ia = a.dataset || !(a.data instanceof Array) && []) {
                X.multiseries = !0;
                s = 1;
                if (Ba = a.lineset)ia = ia.concat(Ba), X.lineset = !0;
                if (qa = a.axis)ia = ia.concat(qa), X.multiaxis = !0;
                aa = ia.length;
                ka = C.length;
                if (!(aa = ia.length)) {
                    for (z = 0; z < ka; z += 1)Z = C[z], l.set(z + 1, 0, Z.label || Z.name);
                    X.multilevel = !0
                }
                for (z = 0; z < aa; z += 1)for (ca = ia, ca[z].dataset ? (ca = ca[z].dataset,
                    g = 0, da = ca.length) : (ca = ia, g = z, da = g + 1); g < da && !Y && !ea; g += 1, s += 1) {
                    q = ca[g];
                    l.set(0, s, q.seriesname);
                    "string" === typeof q.data && (X.compactdata = !0, q.data = q.data.split(M.dataseparator || "|"));
                    h = e = 0;
                    for (S = q.data && q.data.length || 0; e < S || e < ka; e += 1) {
                        Z = C[e];
                        w = h + 1;
                        G = q.data && q.data[h] || {};
                        if (void 0 !== G.x && void 0 !== G.y) {
                            Y = X.xy = !0;
                            break
                        }
                        if (void 0 !== G.open || void 0 !== G.high || void 0 !== G.close || void 0 !== G.low) {
                            t = X.ohlc = !0;
                            break
                        }
                        if (void 0 !== G.rowid && void 0 !== G.columnid) {
                            ea = X.heatmap = !0;
                            break
                        }
                        if (e < ka && !Z.vline) {
                            l.set(w, 0, Z.label ||
                                Z.name);
                            Z = p(G ? G.value : "");
                            Z = isNaN(Z) ? "" : V(Z);
                            l.set(w, s, Z);
                            if (u || m || G.errorvalue)u || l.set(0, s + 1, "Error"), fa = 1, l.set(w, s + 1, V(G.errorvalue));
                            h += 1
                        }
                    }
                    fa && (s += fa, fa = 0)
                }
                Ba && (ia = ia.slice(0, -Ba.length));
                qa && (ia = ia.slice(0, -qa.length))
            } else if (ia = a.data) {
                l.set(0, 1, M.yaxisname || "Value");
                X.singleseries = !0;
                w = "1" == M.showsumatend;
                z = 0;
                for (ka = ia.length; z < ka; z += 1)G = ia[z], G.vline || (Z = p(G.value ? G.value : ""), l.setRow(z + 1, [G.label || G.name, isNaN(Z) ? "" : (e += Z, V(Z))]));
                w && (X.summation = !0, l.setRow(z + 1, [M.sumlabel || "Total", V(e)]))
            }
            if (t)for (l.clear(),
                           l.setRow(0, ["Open", "Close", "High", "Low"]), z = 0, w = 1, ia = a.dataset, da = ia.length; z < da; z += 1)for (e = 0, q = ia[z] && ia[z].data || [], aa = q.length; e < aa; e += 1, w += 1)G = q[e] || {}, l.setRow(e + 1, [V(G.open), V(G.close), V(G.high), V(G.low)]); else if (Y)for (l.clear(), u = !1, fa = 0, l.setRow(0, ["Series", "x", "y"]), z = 0, w = 1, ia = a.dataset, da = ia.length; z < da; z += 1)for (e = 0, q = ia[z] && ia[z].data || [], aa = q.length; e < aa; e += 1, w += 1) {
                G = q[e] || {};
                Z = [ia[z].seriesname, V(G.x), V(G.y)];
                void 0 !== G.z && (Z.push(V(G.z)), fa || (l.set(0, 3, "z"), fa = 1));
                if (u || m || void 0 !==
                    G.errorvalue || void 0 !== G.horizontalerrorvalue || void 0 !== G.verticalerrorvalue)a = V(G.errorvalue), Z.push(G.errorvalue, void 0 === G.horizontalerrorvalue ? a : V(G.horizontalerrorvalue), void 0 === G.verticalerrorvalue ? a : V(G.verticalerrorvalue)), u || (l.set(0, fa + 3, "Error"), l.set(0, fa + 4, "Horizontal Error"), l.set(0, fa + 5, "Vertical Error")), u = X.error = !0;
                l.setRow(w, Z)
            } else if (ea) {
                l.clear();
                Y = {};
                ea = {};
                z = 0;
                e = 1;
                C = a.rows && a.rows.row || [];
                for (m = C.length; z < m; z += 1, e += 1)Z = C[z], Z.id && (Y[Z.id.toLowerCase()] = e, l.set(e, 0, Z.label ||
                    Z.id));
                z = 0;
                e = 1;
                C = a.columns && a.columns.column || [];
                for (m = C.length; z < m; z += 1, e += 1)Z = C[z], Z.id && (ea[Z.id.toLowerCase()] = e, l.set(0, e, Z.label || Z.id));
                q = a.dataset && a.dataset[0] && a.dataset[0].data || [];
                z = 0;
                for (m = q.length; z < m; z += 1)G = q[z], w = G.rowid.toLowerCase(), s = G.columnid.toLowerCase(), Y[w] || (Y[w] = l.rowCount, l.set(l.rowCount, 0, G.rowid)), ea[s] || (ea[s] = l.columnCount, l.set(0, l.columnCount, G.columnid)), l.set(Y[w], ea[s], V(G.value))
            }
            ia = C = Ba = qa = null;
            0 < l.rowCount && void 0 === l.get(0, 0) && l.set(0, 0, M.xaxisname || "Label");
            return {data: l.toString(), error: void 0, predictedFormat: X}
        }, transportable: !1
    });
    D.addEventListener("Loaded", function (c) {
        c = c.sender;
        "javascript" !== c.options.renderer || c.getDataAsCSV || (c.getDataAsCSV = c.ref.getDataAsCSV = c.getCSVData)
    })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js", function () {
    var d = this, l = d.window, D = l.document, w = d.core.options, p = /msie/i.test(l.navigator.userAgent) && !l.opera, c = Boolean(l.SVGAngle || D.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")), N = function () {
    }, b = d.hcLib = {cmdQueue: []}, I = b.moduleCmdQueue = {
        base: [],
        charts: [],
        powercharts: [],
        widgets: [],
        maps: []
    }, a = b.moduleDependencies = {}, z = b.moduleMeta = {
        base: "fusioncharts.js", charts: "fusioncharts.charts.js", powercharts: "fusioncharts.powercharts.js",
        widgets: "fusioncharts.widgets.js", maps: "fusioncharts.maps.js"
    }, F = {}, K = b.getMetaSentence = function () {
        var a = {};
        return function (c) {
            c = c && c.replace(/(^\s*)|(\s*$)/g, "") || "";
            return a[c] || (a[c] = {key: c, subject: c.replace(/[^\/]*?$/ig, ""), predicate: c.replace(/^.*\//ig, "")})
        }
    }(), s = b.getDependentModuleName = function (c) {
        var b = [], e, d;
        c = K(c).predicate;
        for (e in a)void 0 !== (d = a[e][c]) && (b[d] = e);
        return b
    }, g = b.hasModule = function (a) {
        var c, b;
        if (a instanceof Array) {
            c = 0;
            for (b = a.length; c < b; c += 1)if (!Boolean(d.modules["modules.renderer.js-" +
                K(a[c]).predicate]))return !1;
            return !0
        }
        return Boolean(d.modules["modules.renderer.js-" + K(a).predicate])
    }, e = b.loadModule = function (a, c, b, e) {
        a instanceof Array || (a = [a]);
        var h = a.length, m = 0, s;
        s = function () {
            if (m >= h)c && c(); else {
                var p = a[m], l = p && p.match(/[^\/]*$/i)[0], C = z[p];
                m += 1;
                if (p) {
                    if (g(l)) {
                        s();
                        return
                    }
                    if (F[l]) {
                        d.raiseError(e || d.core, "1112201445A", "run", "JavaScriptRenderer~loadModule() ", "required resources are absent or blocked from loading.");
                        b && b(l);
                        return
                    }
                } else b && b(l);
                p = d.core.options["html5" + d.capitalizeString(l) +
                "Src"];
                d.loadScript(void 0 === p ? C : p, {
                    success: function () {
                        g(l) ? s() : b && b(l)
                    }, failure: b && function () {
                        b(l)
                    }
                }, void 0, !0)
            }
        };
        s()
    }, h = b.executeWaitingCommands = function (a) {
        for (var c; c = a.shift();)"object" === typeof c && N[c.cmd].apply(c.obj, c.args)
    }, m = function (a) {
        delete a.sender.jsVars._reflowData;
        a.sender.jsVars._reflowData = {};
        delete a.sender.jsVars._reflowClean
    }, M = function () {
        var a = function () {
        };
        a.prototype = {
            LoadDataErrorText: "Error in loading data.",
            XMLLoadingText: "Retrieving data. Please wait",
            InvalidXMLText: "Invalid data.",
            ChartNoDataText: "No data to display.",
            ReadingDataText: "Reading data. Please wait",
            ChartNotSupported: "Chart type not supported.",
            PBarLoadingText: "",
            LoadingText: "Loading chart. Please wait",
            RenderChartErrorText: "Unable to render chart."
        };
        return a.prototype.constructor = a
    }(), C = b.getContainerBackgroundColor = function (a) {
        var e = a.options.containerBackgroundColor, d = a.options.containerBackgroundOpacity, g = a.jsVars.transparent;
        void 0 !== g && null !== g ? d = a.jsVars.transparent ? 0 : 1 : (d = parseFloat(d), 0 > d ? d = 0 : 1 < d && (d = 1));
        e || (e = "#ffffff");
        if (p && !c)return d ? e : "transparent";
        e = e.replace(/^#?([a-f0-9]+)/ig, "$1");
        e = b.graphics.HEXtoRGB(e);
        e[3] = d.toString();
        return "rgba(" + e.join(",") + ")"
    };
    b.injectModuleDependency = function (c, e, d) {
        var g = !1, h = K(c).subject;
        c = K(c).predicate;
        e = void 0 === e ? c : K(e).predicate;
        a[c] || (a[c] = {}, I[c] || (I[c] = [], b.moduleMeta[c] = h + w.html5ScriptNamePrefix + (e && e.replace && e.replace(/^[\s\S]*\//ig, "").replace(/\?/g, "%3F").replace(/\#/g, "%23").replace(/\:/g, "%3A") || "") + w.html5ScriptNameSuffix), g = !0);
        a[c][e] = d || 0;
        return g
    };
    b.needsModule = function (a, c) {
        a = K(a).predicate;
        c = K(c).predicate;
        return void 0 !== (b.moduleDependencies[a] && b.moduleDependencies[a][c])
    };
    b.cleanupWaitingCommands = function (a) {
        for (var c = a.chartType(), c = s(c), b, e = [], d; b = c.shift();) {
            for (b = I[b] || []; d = b.shift();)"object" === typeof d && d.obj !== a && e.push(d);
            b.concat(e);
            e = []
        }
    };
    d.extend(d.core.options, {html5ScriptNameSuffix: ".js", html5ScriptNamePrefix: "fusioncharts."});
    d.extend(N, {
        dataFormat: "json", ready: !1, policies: {
            jsVars: {}, options: {
                showChartLoadingMessage: ["showChartLoadingMessage",
                    !0]
            }
        }, init: function () {
            g("base") ? N.ready = !0 : e("base", function () {
                N.ready = !0;
                h(b.cmdQueue)
            }, void 0, d.core)
        }, render: function (a) {
            var c = a, e = this.jsVars.msgStore;
            c && this.options.showChartLoadingMessage && (c.innerHTML = '<small style="display: inline-block; *zoom:1; *display:inline; width: 100%; font-family: Verdana,sans; font-size: 10px; color: #666666; text-align: center; padding-top: ' + (parseInt(c.style.height, 10) / 2 - 5) + 'px">' + (e.PBarLoadingText || e.LoadingText) + "</small>", c.style.backgroundColor = C(this));
            b.cmdQueue.push({cmd: "render", obj: this, args: arguments})
        }, update: function () {
            b.cmdQueue.push({cmd: "update", obj: this, args: arguments})
        }, resize: function () {
            b.cmdQueue.push({cmd: "resize", obj: this, args: arguments})
        }, dispose: function () {
            var a = b.cmdQueue, c, e;
            c = 0;
            for (e = a.length; c < e; c += 1)a[c].obj === this && (a.splice(c, 1), e -= 1, c -= 1)
        }, load: function () {
            b.cmdQueue.push({cmd: "load", obj: this, args: arguments})
        }, config: function (a, c) {
            var b, e = this.jsVars, d = e.msgStore, e = e.cfgStore, g = this.options, h;
            h = {
                LoadingText: "loadMessage",
                ChartNotSupported: "typeNotSupportedMessage",
                RenderChartErrorText: "renderErrorMessage",
                XMLLoadingText: "dataLoadStartMessage",
                ChartNoDataText: "dataEmptyMessage",
                LoadDataErrorText: "dataLoadErrorMessage",
                InvalidXMLText: "dataInvalidMessage"
            };
            "string" === typeof a && 1 < arguments.length && (b = a, a = {}, a[b] = c);
            for (b in a)void 0 !== d[b] ? d[b] = a[b] : e[b.toLowerCase()] = a[b], h[b] && (g[h[b]] = a[b])
        }, protectedMethods: {}, events: {
            beforeInitialize: function (a) {
                var c = a.sender;
                a = c.jsVars;
                var e;
                a.fcObj = c;
                a.msgStore = a.msgStore || new M;
                a.cfgStore = a.cfgStore || {};
                a.previousDrawCount = -1;
                a.drawCount = 0;
                a._reflowData = {};
                c.addEventListener("beforeRender", function (a) {
                    a.sender.jsVars.smartLabel = new b.SmartLabelManager(c.id, D.body || D.getElementsByTagName("body")[0]);
                    a.detachHandler()
                });
                a.userModules instanceof Array || (e = a.userModules, a.userModules = [], "string" === typeof e && (a.userModules = a.userModules.concat(e.split(","))));
                b.chartAPI && b.chartAPI[void 0] || (a.needsLoaderCall = !0)
            }, initialized: function (a) {
                a = a.sender;
                var c = a.jsVars;
                c.needsLoaderCall &&
                (delete c.needsLoaderCall, N.load.call(a))
            }, beforeDataUpdate: m, beforeDispose: function (a) {
                var c = a.sender.jsVars;
                c.smartLabel && !c.smartLabel.disposed && c.smartLabel.dispose();
                m.apply(this, arguments)
            }, beforeRender: function (a) {
                var c = a.sender.jsVars;
                delete c.drLoadAttempted;
                delete c.waitingModule;
                delete c.waitingModuleError;
                m.apply(this, arguments)
            }, dataLoadRequested: function (a) {
                a = a.sender;
                var c = a.jsVars;
                delete c.loadError;
                a.ref && a.options.showDataLoadingMessage ? c.hcObj && !c.hasNativeMessage && c.hcObj.showLoading ?
                    c.hcObj.showMessage(c.msgStore.XMLLoadingText) : a.ref.showChartMessage ? a.ref.showChartMessage("XMLLoadingText") : c.stallLoad = !0 : c.stallLoad = !0
            }, dataLoadRequestCompleted: function (a) {
                delete a.sender.jsVars.stallLoad
            }, dataLoadError: function (a) {
                var c = a.sender, b = c.jsVars;
                delete b.stallLoad;
                b.loadError = !0;
                c.ref && "function" === typeof c.ref.showChartMessage && c.ref.showChartMessage("LoadDataErrorText");
                c.__state.dataFetchDuringConstruction && delete c.__state.dataFetchDuringConstruction;
                m.apply(this, arguments)
            }
        },
        _call: function (a, c, b) {
            a.apply(b || l, c || [])
        }
    });
    d.extend(N.prototype, {
        getSWFHTML: function () {
            d.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~getSWFHTML()", "getSWFHTML() is not supported for JavaScript charts.")
        }, addVariable: function () {
            d.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".');
            d.core.prototype.configure.apply(this, arguments)
        }, getXML: function () {
            d.raiseWarning(this, "11171116291", "run", "JavaScriptRenderer~getXML()",
                'Use of deprecated "getXML()". Replace with "getXMLData()".');
            return this.getXMLData.apply(this, arguments)
        }, setDataXML: function () {
            d.raiseWarning(this, "11171116292", "run", "JavaScriptRenderer~setDataXML()", 'Use of deprecated "setDataXML()". Replace with "setXMLData()".');
            return this.setXMLData.apply(this, arguments)
        }, setDataURL: function () {
            d.raiseWarning(this, "11171116293", "run", "JavaScriptRenderer~setDataURL()", 'Use of deprecated "SetDataURL()". Replace with "setXMLUrl()".');
            return this.setXMLUrl.apply(this,
                arguments)
        }, hasRendered: function () {
            return !(!this.jsVars.hcObj || !this.jsVars.hcObj.hasRendered)
        }, setTransparent: function (a) {
            var c;
            if (c = this.jsVars)"boolean" !== typeof a && null !== a && (a = !0), c.transparent = null === a ? !1 : !0 === a ? !0 : !1
        }
    });
    d.extend(d.core, {
        _fallbackJSChartWhenNoFlash: function () {
            l.swfobject.hasFlashPlayerVersion(d.core.options.requiredFlashPlayerVersion) || d.renderer.setDefault("javascript")
        }, _enableJSChartsForSelectedBrowsers: function (a) {
            void 0 !== a && null !== a && d.renderer.setDefault((new RegExp(a)).test(l.navigator.userAgent) ?
                "javascript" : "flash")
        }, _doNotLoadExternalScript: function (a) {
            var c, b;
            for (c in a)b = c.toLowerCase(), z[b] && (F[b] = Boolean(a[c]))
        }, _preloadJSChartModule: function () {
            throw"NotImplemented()";
        }
    });
    d.renderer.register("javascript", N);
    c || p ? d.renderer.setDefault("javascript") : l.swfobject && l.swfobject.hasFlashPlayerVersion && !l.swfobject.hasFlashPlayerVersion(d.core.options.requiredFlashPlayerVersion) && (d.raiseWarning(d.core, "1204111846", "run", "JSRenderer", "Switched to JavaScript as default rendering due to absence of required Flash Player."),
        d.renderer.setDefault("javascript"))
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-lib", function () {
    var d = this, l = d.window, D = l.document, w = Boolean(l.SVGAngle || D.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")), p = /msie/i.test(l.navigator.userAgent) && !l.opera, c = l.parseFloat, N = /\s+/g, b = /^#?/, I = /^rgba/i, a = /[#\s]/ig, z = /\{br\}/ig, F = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i, K = Math.abs, s = Math.pow, g = Math.round, e = s(2, -24), h = Object.prototype.toString, m = void 0 !== D.documentElement.ontouchstart, M = "http://www.fusioncharts.com?BS=FCHSEvalMark&utm_source=FCS_trial&pver=" +
            l.escape(d.core.version), C = !/fusioncharts\.com$/i.test(l.location.hostname), q = Math, Y = q.max, u = q.min, ea = {
            pageX: 0,
            pageY: 0
        }, t = d.hcLib || (d.hcLib = {}), V = function (a) {
            var c = a.data, b = c.chart, k = b.paper, e = a.state, n = S(ca(a.originalEvent)), d = n.target || n.originalTarget || n.srcElement || n.relatedTarget || n.fromElement, g = b.elements.resizeBox, h = c.layerX = n.pageX - c.chartPosLeft, q = c.layerY = n.pageY - c.chartPosTop, E = h - c.ox, J = q - c.oy, m = c.bBox, L = c.ox, t = c.oy, s = c.zoomX, p = c.zoomY, m = c.canvasY, T = c.canvasX, l = c.canvasW, z = c.canvasH, G =
                c.canvasX2, C = c.canvasY2, qa = c.strokeWidth, E = c.attr;
            switch (e) {
                case "start":
                    a = ia(this);
                    c.chartPosLeft = a.left;
                    c.chartPosTop = a.top;
                    h = n.pageX - c.chartPosLeft;
                    q = n.pageY - c.chartPosTop;
                    c.oy = q;
                    c.ox = h;
                    c.allowMove = !1;
                    g || (g = b.elements.resizeBox = k.rect(b.layers.tracker).attr(E));
                    h > T && h < G && q > m && q < C && (c.allowMove = !0);
                    d && d.ishot && (c.allowMove = !1);
                    g.attr({x: 0, y: 0, width: 0, height: 0}).show();
                    break;
                case "end":
                    m = g.getBBox();
                    b = {
                        chart: b,
                        selectionLeft: m.x,
                        selectionTop: m.y,
                        selectionHeight: m.height,
                        selectionWidth: m.width,
                        originalEvent: a.originalEvent
                    };
                    c.isDragged && (c.selectionEnd && c.selectionEnd(b), c.isDragged = 0);
                    g.hide();
                    delete c.oy;
                    delete c.ox;
                    break;
                default:
                    if (!c.allowMove)break;
                    E = h - c.ox;
                    J = q - c.oy;
                    L = c.ox;
                    t = c.oy;
                    c.isDragged || (b = {
                        chart: b,
                        selectionLeft: (s ? u(L, L + E) : T) + .5 * qa,
                        selectionTop: (p ? u(t, t + J) : m) + .5 * qa,
                        selectionHeight: 0,
                        selectionWidth: 0,
                        originalEvent: a.originalEvent
                    }, c.selectionStart && c.selectionStart(b), c.isDragged = 1);
                    E = -(L - u(L - (L - Y(L + E, T)), G));
                    J = -(t - u(t - (t - Y(t + J, m)), C));
                    g.attr({
                        x: (s ? u(L, L + E) : T) + .5 * qa,
                        y: (p ? u(t, t + J) : m) + .5 * qa,
                        width: s ? K(E) : l,
                        height: p ?
                            K(J) : z
                    })
            }
        }, X = function (a) {
            var c = a.data;
            a = a.originalEvent;
            var b = a.target || a.originalTarget || a.srcElement || a.relatedTarget || a.fromElement, k = a.type, e = a.layerX, n = a.layerY;
            void 0 === e && (e = a.pageX - c.chartPosLeft, n = a.pageY - c.chartPosTop);
            "mousedown" === k && (b.ishot = e > c.canvasX && e < c.canvasX2 && n > c.canvasY && n < c.canvasY2);
            "mouseup" === k && setTimeout(function () {
                b.ishot = !1
            }, 1)
        }, q = function () {
            var a = "innerWidth", c = "innerHeight", b = D.documentElement || D.body, k = b;
            "innerWidth" in l ? k = l : (a = "clientWidth", c = "clientHeight");
            return function () {
                return {
                    width: k[a],
                    height: k[c], scrollTop: b.scrollTop, scrollLeft: b.scrollLeft
                }
            }
        }(), ia = function (a, c) {
            var b = {left: a.offsetLeft || 0, top: a.offsetTop || 0};
            for (a = a.offsetParent; a;)b.left += a.offsetLeft || 0, b.top += a.offsetTop || 0, a === D.body || a === D.documentElement || c || (b.left -= a.scrollLeft, b.top -= a.scrollTop), a = a.offsetParent;
            return b
        }, Ba = function (a) {
            return a && a.replace(/\$/g, "$$$$")
        }, qa = function (a, c) {
            return a || !1 === a || 0 === a ? a : c
        }, da = function () {
            var a, c, b;
            c = 0;
            for (b = arguments.length; c < b; c += 1)if ((a = arguments[c]) || !1 === a || 0 === a)return a;
            return ""
        }, ka = function () {
            var a, c, b;
            c = 0;
            for (b = arguments.length; c < b; c += 1)if ((a = arguments[c]) || !1 === a || 0 === a)return a
        }, aa = function (a, c, b, k) {
            return t.dem.listen(a, c, b, k)
        }, Z = function (a, c, b) {
            return t.dem.unlisten(a, c, b)
        }, ca = function (a) {
            a = a.sourceEvent || a.originalEvent || a;
            return m && a && a.touches && a.touches[0] || a || ea
        }, S = function () {
            var a;
            return function (c) {
                void 0 === c.pageX && (c.pageX = c.clientX + (a || (a = l.document.body || l.document.documentElement)).scrollLeft, c.pageY = c.clientY + a.scrollTop);
                return c
            }
        }(), G = function (a,
                           c) {
            c = S(ca(c));
            var b = c.pageX, k = c.pageY, e = ia(a);
            return {chartX: b - e.left, chartY: k - e.top, pageX: b, pageY: k}
        }, fa = function (a) {
            return a && a.replace(/^#?([a-f0-9]+)/ig, "#$1") || "none"
        }, n = function () {
            var a, c, b;
            c = 0;
            for (b = arguments.length; c < b; c += 1)if (((a = arguments[c]) || !1 === a || 0 === a) && !isNaN(a = Number(a)))return a
        }, E = function (a, c) {
            a = a || !1 === a || 0 === a ? Number(a) : NaN;
            return isNaN(a) ? null : c ? K(a) : a
        }, L = function (a) {
            return "string" === typeof a ? a.replace(z, "<br />") : ""
        }, T = function (a, c) {
            for (var b = c.length, k = -1; b--;)if (a === c[b]) {
                k =
                    b;
                break
            }
            return k
        }, Ha = function () {
            if (Array.isArray)return Array.isArray;
            var a = Object.prototype.toString, c = a.call([]);
            return function (b) {
                return a.call(b) === c
            }
        }(), Ja = function (a, c, b, k, e) {
            var n, d, g, q;
            e ? (k.push(a), e.push(c)) : (k = [a], e = [c]);
            if (c instanceof Array)for (n = 0; n < c.length; n += 1) {
                try {
                    d = a[n], g = c[n]
                } catch (E) {
                    continue
                }
                if ("object" !== typeof g)b && void 0 === g || (a[n] = g); else {
                    if (null === d || "object" !== typeof d)d = a[n] = g instanceof Array ? [] : {};
                    q = T(g, e);
                    -1 !== q ? d = a[n] = k[q] : Ja(d, g, b, k, e)
                }
            } else for (n in c) {
                try {
                    d = a[n],
                        g = c[n]
                } catch (J) {
                    continue
                }
                if (null !== g && "object" === typeof g)if (q = h.call(g), "[object Object]" === q) {
                    if (null === d || "object" !== typeof d)d = a[n] = {};
                    q = T(g, e);
                    -1 !== q ? d = a[n] = k[q] : Ja(d, g, b, k, e)
                } else"[object Array]" === q ? (null !== d && d instanceof Array || (d = a[n] = []), q = T(g, e), -1 !== q ? d = a[n] = k[q] : Ja(d, g, b, k, e)) : a[n] = g; else a[n] = g
            }
            return a
        }, Ca = function (a, c, b) {
            if ("object" !== typeof a && "object" !== typeof c)return null;
            if ("object" !== typeof c || null === c)return a;
            "object" !== typeof a && (a = c instanceof Array ? [] : {});
            Ja(a, c, b);
            return a
        },
        ma = function (a, c) {
            var b;
            if (c instanceof Array)for (b = c.length - 1; 0 <= b; b -= 1)"object" !== typeof c[b] ? !0 === c[b] && a && a.splice && a.splice(b, 1) : h.call(c[b]) === h.call(a[b]) && ma(a[b], c[b]); else for (b in c)"object" !== typeof c[b] ? !0 === c[b] && a && a.splice && a.splice(b, 1) : h.call(c[b]) === h.call(a[b]) && ma(a[b], c[b]);
            return a
        }, Da = function () {
            var a = /^@window_/g;
            return function (c, b) {
                var k = c.replace(/\[[\'\"]/g, ".").replace(/[\'\"]\]/g, "").replace(/\[/g, ".@window_").replace(/\]/g, "").split("."), e = l, n, d;
                d = "";
                var g, q, h;
                q = k.length;
                for (h = 0; h < q; h += 1) {
                    g = k[h];
                    n = e;
                    if (g.match(a))d = l[g.replace(a, "")], e = e[d]; else {
                        if (void 0 === e || null === e)throw(d || g).replace(a, "") + " is not defined";
                        e = e[g]
                    }
                    d = g
                }
                !e || "function" !== typeof e.call && e !== l.alert ? setTimeout(function () {
                    throw g.replace(a, "") + "() is not a function";
                }, 0) : e === l.alert ? e(b) : e.call(n, b)
            }
        }(), Ga = function () {
            var a = "FusionChartslinkEval" + parseInt(+new Date, 10);
            return function (c) {
                try {
                    l[a] = new Function(c), eval('window["' + a + '"]();')
                } catch (b) {
                    setTimeout(function () {
                        throw b;
                    }, 0)
                }
                w ? delete l[a] : l[a] =
                    null
            }
        }(), U = function (a, c) {
            a = Number(a);
            a = isNaN(a) ? 100 : a;
            void 0 !== c && (a = a * c / 100);
            return a % 101
        }, ra = function (a, c, b) {
            a = a.split(",");
            var k;
            void 0 !== b && (b = n(b.split(",")[0]));
            a[0] = U(a[0], b);
            for (k = 1; k < c; k += 1)a[k] = a[0] * U(a[k], b) / 100;
            return a.join(",")
        }, za = function (c, b, k) {
            var e = 0, n = 0, d = 0;
            k && k.match(I) && (k = k.split(","), e = k[0].slice(k[0].indexOf("(") + 1), n = k[1], d = k[2], b || 0 === b || (b = parseInt(100 * k[3].slice(0, k[3].indexOf(")")), 10)));
            if (c)if (c.match(I))k = c.split(","), e = k[0].slice(k[0].indexOf("(") + 1), n = k[1], d = k[2];
            else {
                c = c.replace(a, "").split(",")[0];
                switch (c.length) {
                    case 3:
                        c = c.charAt(0) + c.charAt(0) + c.charAt(1) + c.charAt(1) + c.charAt(2) + c.charAt(2);
                        break;
                    case 6:
                        break;
                    default:
                        c = (c + "FFFFFF").slice(0, 6)
                }
                e = parseInt(c.slice(0, 2), 16);
                n = parseInt(c.slice(2, 4), 16);
                d = parseInt(c.slice(4, 6), 16)
            }
            b || 0 === b || (b = 100);
            "string" === typeof b && (b = b.split(",")[0]);
            b = parseInt(b, 10) / 100;
            return "rgba(" + e + "," + n + "," + d + "," + b + ")"
        }, Na = function () {
            var a = {};
            return function (b) {
                var k = (b = b || this) && b.FCcolor || b, e = k.color, n = k.ratio, d = k.angle, g = k.alpha,
                    q = k.r, h = k.cx, E = k.cy, J = k.fx, m = k.fy, L = k.gradientUnits, u = k.x1, t = k.y1, s = k.x2, p = k.y2, S = 1, T, l, z, G;
                if ("string" === typeof b)return a[G = "~" + b] || (a[G] = b.replace(/^#?([a-f0-9]{3,6})/ig, "#$1"));
                e = e || "";
                if (!e)return T;
                G = [e, g, n, d, q, h, E, L, J, m, u, s, t, p].join("_").replace(/[\(\)\s,\xb0#]/g, "_");
                if (a[G])return a[G];
                n = n && (n + "").split(",") || [];
                g = (g || 0 === g) && (g + "").split(",") || [];
                if (e = e.split(","))if (T = "", 1 === e.length)z = e[0].replace(/^#?([a-f0-9]{3,6})/ig, "$1"), T = g.length ? "rgba(" + Aa(z).join(",") + "," + .01 * c(g[0]) + ")" : z.replace(/^#?([a-f0-9]{3,6})/ig,
                    "#$1"); else {
                    b = 0;
                    for (l = e.length; b < l; b++)z = e[b].replace(/^#?([a-f0-9]{3,6})/ig, "$1"), isNaN(n[b]) || (n[b] = c(n[b]), z += ":" + n[b], isNaN(n[b + 1]) || (n[b + 1] = c(n[b + 1]) + n[b])), isNaN(g[b]) || "" === g[b] || (S = .01 * g[b]), e[b] = "rgba(" + Aa(z).join(",") + "," + S + ")", isNaN(n[b]) || (e[b] = e[b] + ":" + n[b]);
                    T += e.join("-");
                    if (void 0 !== q || void 0 !== J || void 0 !== h || k.radialGradient)T = "xr(" + [J, m, q, h, E, L].join() + ")" + T; else {
                        T = "-" + T;
                        if (void 0 !== u || void 0 !== t || void 0 !== s || void 0 !== p)T = "(" + [u, t, s, p, L].join() + ")" + T;
                        void 0 === d && (d = 0);
                        T = 360 - c(d) %
                            360 + T
                    }
                }
                return a[G] = T
            }
        }(), Ea = function () {
            return function () {
                return ""
            }
        }(), Za = function (c) {
            return c.replace(a, "").replace(b, "#")
        }, xa = function (c, b) {
            b = (0 > b || 100 < b ? 100 : b) / 100;
            c = c.replace(a, "");
            var k = parseInt(c, 16), e = Math.floor(k / 65536), n = Math.floor((k - 65536 * e) / 256);
            return ("000000" + (e * b << 16 | n * b << 8 | (k - 65536 * e - 256 * n) * b).toString(16)).slice(-6)
        }, lb = function (c, b) {
            b = (0 > b || 100 < b ? 100 : b) / 100;
            c = c.replace(a, "");
            var k = parseInt(c, 16), e = Math.floor(k / 65536), n = Math.floor((k - 65536 * e) / 256);
            return ("000000" + (256 - (256 - e) * b << 16 |
            256 - (256 - n) * b << 8 | 256 - (256 - (k - 65536 * e - 256 * n)) * b).toString(16)).slice(-6)
        }, Aa = function (a) {
            a = parseInt(a, 16);
            var c = Math.floor(a / 65536), b = Math.floor((a - 65536 * c) / 256);
            return [c, b, Math.floor(a - 65536 * c - 256 * b)]
        }, La = function (a, c) {
            if ("object" !== typeof a)return "";
            if (a.fontSize || a["font-size"])!a.fontSize && a["font-size"] && (a.fontSize = a["font-size"], delete a["font-size"]), a.lineHeight = (parseFloat(a.fontSize) || c || 10) * t.lineHeightFactor + "px", delete a["line-height"];
            !a.lineHeight && a["line-height"] && (a.lineHeight = a["line-height"],
                delete a["line-height"]);
            return a.lineHeight
        }, nb = function (a, c, b, k, e) {
            var d = da(a.labelbordercolor, c.bordercolor, b.labelbordercolor, ""), g = ka(a.labelbgcolor, c.bgcolor, b.labelbgcolor), q = n(a.labelborderthickness, c.borderthickness, b.labelborderthickness, 1);
            e = n(b.usedataplotcolorforlabels, 0) ? e || k.color : k.color;
            d = d ? za(d, n(a.labelborderalpha, c.borderalpha, b.labelborderalpha, a.labelalpha, c.alpha, b.labelalpha, 100)) : "";
            a = {
                fontFamily: ka(a.labelfont, c.font, b.labelfont, k.fontFamily),
                fontSize: ka(a.labelfontsize,
                    c.fontsize, b.labelfontsize, parseInt(k.fontSize, 10)) + "px",
                color: za(ka(a.labelfontcolor, c.fontcolor, b.labelfontcolor, e), n(a.labelfontalpha, c.fontalpha, b.labelfontalpha, a.labelalpha, c.alpha, b.labelalpha, 100)),
                fontWeight: n(a.labelfontbold, c.fontbold, b.labelfontbold) ? "bold" : "normal",
                fontStyle: n(a.labelfontitalic, c.fontitalic, b.labelfontitalic) ? "italic" : "normal",
                border: d || g ? q + "px solid" : "",
                borderColor: d,
                borderThickness: q,
                borderPadding: n(a.labelborderpadding, c.borderpadding, b.labelborderpadding, 2),
                borderRadius: n(a.labelborderradius,
                    c.borderradius, b.labelborderradius, 0),
                backgroundColor: g ? za(g, n(a.labelbgalpha, c.bgalpha, b.labelbgalpha, a.labelalpha, c.alpha, b.labelalpha, 100)) : "",
                borderDash: n(a.labelborderdashed, c.borderdashed, b.labelborderdashed, 0) ? eb(n(a.labelborderdashlen, c.borderdashlen, b.labelborderdashlen, 4), n(a.labelborderdashgap, c.borderdashgap, b.labelborderdashgap, 2), q) : void 0
            };
            a.lineHeight = La(a);
            return a
        }, Hb = function () {
            var a = {
                top: {align: "center", verticalAlign: "top", textAlign: "center"},
                right: {
                    align: "right", verticalAlign: "middle",
                    textAlign: "left"
                },
                bottom: {align: "center", verticalAlign: "bottom", textAlign: "center"},
                left: {align: "left", verticalAlign: "middle", textAlign: "right"}
            }, c = /([^\,^\s]+)\)$/g, b = function (a, c) {
                var b;
                /^(bar|bar3d)$/.test(a) && (this.isBar = !0, this.yPos = "bottom", this.yOppPos = "top", this.xPos = "left", this.xOppPos = "right");
                b = parseInt(c.labelstep, 10);
                this.labelStep = 1 < b ? b : 1;
                this.showLabel = n(c.showlabels, c.shownames, 1);
                this.is3D = /3d$/.test(a)
            };
            b.prototype = {
                isBar: !1, yPos: "left", yOppPos: "right", xPos: "bottom", xOppPos: "top",
                addAxisGridLine: function (b, k, e, n, d, g, q, R) {
                    var h = "" === e ? !1 : !0, E = 0 < n || 0 < g.match(c)[1] ? !0 : !1, J;
                    if (h || E)E || (g = "rgba(0,0,0,0)", n = .1), J = {
                        isGrid: !0,
                        width: n,
                        dashStyle: d,
                        color: g,
                        value: k,
                        zIndex: void 0 === q ? 2 : q
                    }, h && (k = b.opposite ? R ? this.xOppPos : this.yOppPos : R ? this.xPos : this.yPos, k = a[k], J.label = {
                        text: e,
                        style: b.labels.style,
                        textAlign: k.textAlign,
                        align: k.align,
                        verticalAlign: k.verticalAlign,
                        rotation: 0,
                        x: 0,
                        y: 0
                    }), b.plotLines.push(J);
                    return J
                }, addAxisAltGrid: function (a, c) {
                    if (!this.is3D) {
                        var b = n(a._lastValue, a.min), B =
                            ka(a._altGrid, !1);
                        B && a.plotBands.push({isGrid: !0, color: a.alternateGridColor, to: c, from: b, zIndex: 1});
                        a._lastValue = c;
                        a._altGrid = !B
                    }
                }, addXaxisCat: function (c, b, k, e, n, d, g, P) {
                    var q = a[c.opposite ? this.xOppPos : this.xPos];
                    b = {
                        isGrid: !0,
                        isDataLabel: !0,
                        width: .1,
                        color: "rgba(0,0,0,0)",
                        value: b,
                        label: {
                            text: e,
                            link: ka(n.labellink, d.link, g.labellink),
                            style: nb(n, d, g, c.labels.style, P),
                            textAlign: q.textAlign,
                            align: q.align,
                            verticalAlign: q.verticalAlign,
                            rotation: 0,
                            x: 0,
                            y: 0
                        }
                    };
                    0 !== k % this.labelStep && (b.stepped = !0, b.label.style =
                        c.steppedLabels.style);
                    c.plotLines.push(b)
                }, addVline: function (a, c, b, B) {
                    B = B._FCconf;
                    var k = B.isBar, e = B.divlineStyle, d = L(c.label), g = Boolean(n(c.showlabelborder, B.showVLineLabelBorder, 1)), P = Boolean(n(c.showlabelbackground, 1)), q = ka(c.labelhalign, k ? "left" : "center"), R = ka(c.labelvalign, k ? "middle" : "bottom").toLowerCase(), h = n(c.labelposition, 0), J = n(c.lineposition, .5), E = n(c.showvlines, B.showVLines, 1), m = n(c.alpha, B.vLineAlpha, 80), u = ka(c.color, B.vLineColor).replace(/^#?/, "#"), t = P ? ka(c.labelbgcolor, B.vLineLabelBgColor,
                        "333333").replace(/^#?/, "#") : "", s = ka(c.labelcolor, B.vLineLabelColor, c.color, B.vLineColor).replace(/^#?/, "#"), p = n(c.thickness, B.vLineThickness, 1), T = .5 * p, S = Boolean(Number(ka(c.dashed, 0))), z = n(c.dashlen, 5), l = n(c.dashgap, 2), G = B.smartLabel, C = parseInt(e.fontSize, 10) + 2, r = 0, v = n(c.rotatelabel, B.rotateVLineLabels) ? 270 : 0, J = 0 > J || 1 < J ? .5 : J, h = 0 > h || 1 < h ? 0 : h;
                    G.setStyle(e);
                    G = G.getOriSize(d);
                    u = za(u, E ? m : "0");
                    if (k) {
                        switch (R) {
                            case "top":
                                C -= G.height + T + 2;
                                break;
                            case "middle":
                                C -= .5 * G.height + 1;
                                break;
                            default:
                                C += T
                        }
                        c.labelhalign ||
                        (r -= G.width * h)
                    } else {
                        switch (R) {
                            case "top":
                                C = .5 * -G.height + 1;
                                break;
                            case "middle":
                                C = 0;
                                break;
                            default:
                                C = .5 * G.height
                        }
                        switch (q) {
                            case "left":
                                r += p;
                                break;
                            case "right":
                                r -= p + 1
                        }
                    }
                    a.plotLines.push({
                        isVline: !0,
                        color: u,
                        width: p,
                        value: b - 1 + J,
                        zIndex: n(c.showontop, B.showVLinesOnTop) ? 5 : 3,
                        dashStyle: S ? eb(z, l, p) : void 0,
                        label: {
                            text: d,
                            align: k ? "left" : "center",
                            offsetScale: h,
                            rotation: v,
                            y: C,
                            x: r,
                            textAlign: q,
                            backgroundColor: t,
                            borderWidth: E && g ? "1px" : "",
                            borderType: E && g ? "solid" : "",
                            borderColor: E && g ? s : "",
                            backgroundOpacity: E && P ? ka(c.labelbgalpha,
                                B.vLineLabelBgAlpha) / 100 : 0,
                            style: {
                                color: E ? s : u,
                                fontSize: e.fontSize,
                                fontFamily: e.fontFamily,
                                lineHeight: e.lineHeight,
                                backgroundColor: t
                            }
                        }
                    })
                }
            };
            return b.prototype.constructor = b
        }(), ub = function () {
            var a = function (a, b, B, k, e) {
                a = Math.abs(b - a);
                b = a / (B + 1);
                c(a, B, k) || (e && Number(b) / Number(k) < (1 < k ? 2 : .5) && (k /= 10), b = (Math.floor(b / k) + 1) * k, a = b * (B + 1));
                return a
            }, c = function (a, c, B) {
                return b(a / (c + 1)) > b(B) ? !1 : !0
            }, b = function (a) {
                a = Math.abs(a);
                a = String(a);
                var c = 0, b = a.indexOf(".");
                -1 != b && (c = a.length - b - 1);
                return c
            };
            return function (b,
                             k, n, d, g, q, R, h) {
                var E, J, m, L, u, t, s;
                b = !0 === isNaN(b) || void 0 === b ? .1 : b;
                k = !0 === isNaN(k) || void 0 === k ? 0 : k;
                b === k && 0 === b && (b = .1);
                g = void 0 === typeof g ? !0 : g;
                q = void 0 === typeof q ? !0 : q;
                E = Math.floor(Math.log(Math.abs(b)) / Math.LN10);
                J = Math.floor(Math.log(Math.abs(k)) / Math.LN10);
                J = Math.max(J, E);
                E = Math.pow(10, J);
                2 > Math.abs(b) / E && 2 > Math.abs(k) / E && (J--, E = Math.pow(10, J));
                J = Math.floor(Math.log(b - k) / Math.LN10);
                J = Math.pow(10, J);
                0 < b - k && 10 <= E / J && (E = J);
                J = (Math.floor(b / E) + 1) * E;
                0 > k ? m = -1 * (Math.floor(Math.abs(k / E)) + 1) * E : q ? m = 0 : (m =
                    Math.floor(Math.abs(k / E) - 1) * E, m = 0 > m ? 0 : m);
                g && 0 >= b && (J = 0);
                g = n || 0 === n ? !0 : !1;
                q = d || 0 === d ? !0 : !1;
                b = !1 === g || !0 === g && Number(n) < b && b - Number(n) > e ? J : Number(n);
                k = !1 === q || !0 === q && Number(d) > k && Number(d) - k > e ? m : Number(d);
                d = Math.abs(b - k);
                if (!1 === q && !1 === g && h)if (0 < b && 0 > k)for (n = !1, g = 10 < E ? E / 10 : E, h = a(k, b, R, g, !1), q = h - (R + 1) * g; !1 === n;) {
                    if (q += (R + 1) * g, c(q, R, g))if (h = q - d, J = q / (R + 1), L = Math.min(Math.abs(k), b), m = L == Math.abs(k) ? -1 : 1, 0 === R)n = !0; else for (t = 1; t <= Math.floor((R + 1) / 2); t++)u = J * t, !(u - L > h) && u > L && (s = q - u, s / J == Math.floor(s / J) &&
                    u / J == Math.floor(u / J) && (d = q, b = -1 == m ? s : u, k = -1 == m ? -u : -s, n = !0))
                } else n = a(k, b, R, E, !0), h = n - d, d = n, 0 < b ? b += h : k -= h; else if (h && 0 < R) {
                    h = 0;
                    for (n = 1; ;) {
                        g = R + h * n;
                        g = 0 === g ? 1 : g;
                        if (c(d, g, E))break;
                        h = -1 == n || h > R ? ++h : h;
                        if (25 < h) {
                            g = 0;
                            break
                        }
                        n = h <= R ? -1 * n : 1
                    }
                    R = g
                }
                return {Max: b, Min: k, Range: d, interval: E, divGap: (b - k) / (R + 1)}
            }
        }(), Qb = function () {
            var a = function (a, c, b) {
                var B = b.jsVars && b.jsVars.smartLabel, k = a.offsetWidth;
                a = a.offsetHeight;
                this.title.y = a / 2;
                this.title.x = k / 2;
                this.title.style = b._chartMessageStyle;
                delete b._chartMessageStyle;
                void 0 !==
                c && (B ? (La(this.title.style), B.setStyle(this.title.style), c = B.getSmartText(L(c), k, a), this.title.text = c.text) : this.title.text = L(c), this.title.verticalAlign = "middle")
            };
            a.prototype = {
                chart: {events: {}, margin: [0, 0, 0, 0], backgroundColor: {FCcolor: {alpha: 0}}},
                credits: {href: M, text: "FusionCharts XT Trial", enabled: C},
                legend: {enabled: !1},
                title: {text: "", style: {fontFamily: "Verdana,sans", fontSize: "10px", color: "#666666"}},
                plotOptions: {series: {}},
                series: [{}],
                exporting: {enabled: !1},
                nativeMessage: !0
            };
            return a.prototype.constructor =
                a
        }(), xb = {
            "true": {"true": {"true": "center", "false": "center"}, "false": {"true": "center", "false": "center"}},
            "false": {"true": {"true": "right", "false": "left"}, "false": {"true": "left", "false": "right"}}
        }, Ua = function () {
            return function (a, c, k, e, d, g, q) {
                var h, E = k.trendStyle, m, u, t, s, p, T, S, z, l, G, C, Y, M, w = g ? "xAxis" : "dataLabels";
                if (g ? k.showVLines : k.showTrendlines)for (h = 0, u = a.length; h < u; h += 1)if ((M = a[h]) && M.line)for (m = 0, t = M.line.length; m < t; m += 1)s = M.line[m], G = k.numberFormatter.getCleanValue(ka(s.startvalue, s.value, 0)), C =
                    k.numberFormatter.getCleanValue(ka(s.endvalue, ka(s.startvalue, s.value, 0))), g ? z = c : e && s.parentyaxis && /^s$/i.test(s.parentyaxis) ? (z = c[1], Y = 1) : z = c[0], T = z.max, S = z.min, p = !1, T >= G && T >= C && S <= G && S <= C && (e && s.parentyaxis && /^s$/i.test(s.parentyaxis) ? p = "1" !== ka(s.valueonleft, k.trendlineValuesOnOpp) : e || (p = "1" === ka(s.valueonright, k.trendlineValuesOnOpp)), T = Boolean(n(s.istrendzone, g ? 1 : 0)), (S = (g ? k.showVLineLabels : k.showTrendlineLabels) ? L(ka(s.displayvalue, k.numberFormatter[w](p ? C : G, Y))) : "") ? (l = G < C, p = {
                    text: S,
                    textAlign: d ?
                        "center" : p ? "left" : "right",
                    align: d ? xb[T][!q][l] : p ? "right" : "left",
                    verticalAlign: d ? "bottom" : "middle",
                    rotation: 0,
                    x: 0,
                    y: 0,
                    style: E
                }, S = ka(s.color, k.trendlineColor), s.alwaysVisible = T, S && (p.style = Ca({}, E), p.style.color = S.replace(b, "#"))) : p = void 0, S = qa(L(ka(s.tooltext, M.tooltext, k.trendLineToolText))), S = J(S, [7, 15, 16, 17, 18, 19], {
                    startValue: G,
                    startDataValue: k.numberFormatter[w](G, Y),
                    endValue: C,
                    endDataValue: k.numberFormatter[w](C, Y),
                    axisName: z.title && z.title.text
                }, s), l = n(s.thickness, k.trendlineThickness, 1), T ? z.plotBands.push({
                    isTrend: !0,
                    color: za(ka(s.color, k.trendlineColor), ka(s.alpha, k.trendlineAlpha, 40)),
                    from: G,
                    to: C,
                    label: p,
                    zIndex: k.is3d || "1" !== ka(s.showontop, k.showTrendlinesOnTop) ? 3 : 5,
                    tooltext: S,
                    alwaysVisible: s.alwaysVisible
                }) : z.plotLines.push({
                    isTrend: !0,
                    color: za(ka(s.color, k.trendlineColor, k.trendlineColor), ka(s.alpha, k.trendlineAlpha, 99)),
                    value: G,
                    to: C,
                    width: l,
                    dashStyle: "1" == ka(s.dashed, k.trendlinesAreDashed) ? eb(n(s.dashlen, k.trendlinesDashLen), n(s.dashgap, k.trendlinesDashGap), l) : void 0,
                    label: p,
                    zIndex: k.is3d || "1" !== ka(s.showontop,
                        k.showTrendlinesOnTop) ? 3 : 5,
                    tooltext: S
                }))
            }
        }(), eb = function (a, c, b, k) {
            return k || void 0 === k ? [a, c] : ""
        }, cb = function () {
        }, k = function (a, c, b) {
            var e, n = k[a];
            n || (n = function () {
            }, n.prototype = b instanceof cb ? b : new cb, n.prototype.constructor = n, n = k[a] = new n);
            b && (n.base = b);
            n.name = a;
            for (e in c)switch (typeof c[e]) {
                case "object":
                    if (c[e] instanceof cb) {
                        n[e] = c[e][e];
                        break
                    }
                default:
                    n[e] = c[e];
                    break;
                case "undefined":
                    delete n[e]
            }
            return this instanceof k ? (a = function () {
            }, a.prototype = n, a.prototype.constructor = a, new a) : n
        }, J = function () {
            var a =
                [{
                    regex: /((^|[^\\])((\\)\\)*\$cleanvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cleanvalue))/ig,
                    argIndex: 2,
                    argKey: "cleanvalue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$datavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datavalue))/ig,
                    argIndex: 2,
                    argKey: "formattedValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$value)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$value))/ig,
                    argIndex: 3,
                    argKey: "value"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$label)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$label))/ig,
                    argIndex: 2,
                    argKey: "label"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$seriesname)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$seriesname))/ig, argIndex: 5, argKey: "seriesname"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$yaxisname)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yaxisname))/ig,
                    argIndex: 2,
                    argKey: "yaxisName"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$xaxisname)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxisname))/ig,
                    argIndex: 2,
                    argKey: "xaxisName"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$displayvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$displayvalue))/ig,
                    argIndex: 3,
                    argKey: "displayvalue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$xdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xdatavalue))/ig, argIndex: 2, argKey: "xDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$ydatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$ydatavalue))/ig,
                    argIndex: 2,
                    argKey: "yDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$xvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xvalue))/ig,
                    argIndex: 3,
                    argKey: "x"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$yvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yvalue))/ig,
                    argIndex: 3,
                    argKey: "y"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$zvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zvalue))/ig,
                    argIndex: 3, argKey: "z"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$name)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$name))/ig,
                    argIndex: 3,
                    argKey: "name"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$percentValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentValue))/ig,
                    argIndex: 2,
                    argKey: "percentValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$startValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startValue))/ig,
                    argIndex: 2,
                    argKey: "startValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$startDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startDataValue))/ig,
                    argIndex: 2,
                    argKey: "startDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$endValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endValue))/ig,
                    argIndex: 2,
                    argKey: "endValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$endDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endDataValue))/ig,
                    argIndex: 2,
                    argKey: "endDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$axisName)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$axisName))/ig,
                    argIndex: 2,
                    argKey: "axisName"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$cumulativevalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativevalue))/ig,
                    argIndex: 2,
                    argKey: "cumulativeValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$cumulativedatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativedatavalue))/ig,
                    argIndex: 2,
                    argKey: "cumulativeDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$cumulativePercentValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativePercentValue))/ig,
                    argIndex: 2,
                    argKey: "cumulativePercentValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$cumulativepercentdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativepercentdatavalue))/ig,
                    argIndex: 2,
                    argKey: "cumulativePercentDataValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$sum)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sum))/ig,
                        argIndex: 2,
                        argKey: "sum"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedsum)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsum))/ig,
                    argIndex: 2,
                    argKey: "unformattedSum"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$targetvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetvalue))/ig,
                    argIndex: 2,
                    argKey: "targetValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$targetdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetdatavalue))/ig,
                    argIndex: 2,
                    argKey: "targetDataValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$processname)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$processname))/ig,
                        argIndex: 2,
                        argKey: "processName"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$start)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$start))/ig,
                    argIndex: 2,
                    argKey: "start"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$end)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$end))/ig,
                    argIndex: 2,
                    argKey: "end"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$percentcomplete)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentcomplete))/ig,
                    argIndex: 2,
                    argKey: "percentComplete"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$taskpercentcomplete)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskpercentcomplete))/ig,
                    argIndex: 2,
                    argKey: "taskPercentComplete"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$taskstartdate)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskstartdate))/ig,
                    argIndex: 2,
                    argKey: "taskStartDate"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$taskenddate)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskenddate))/ig,
                    argIndex: 2,
                    argKey: "taskEndDate"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tasklabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tasklabel))/ig,
                    argIndex: 2,
                    argKey: "taskLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$date)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$date))/ig, argIndex: 2, argKey: "date"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$percentofprevvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentofprevvalue))/ig,
                    argIndex: 2,
                    argKey: "percentOfPrevValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$sname)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sname))/ig,
                    argIndex: 2,
                    argKey: "sName"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$lname)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lname))/ig,
                    argIndex: 2,
                    argKey: "lName"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromid)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromid))/ig,
                    argIndex: 2, argKey: "fromId"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
                    argIndex: 2,
                    argKey: "fromLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toid)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toid))/ig,
                    argIndex: 2,
                    argKey: "toId"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
                    argIndex: 2,
                    argKey: "toLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromxvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxvalue))/ig,
                    argIndex: 2,
                    argKey: "fromXValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$fromyvalue)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromyvalue))/ig,
                        argIndex: 2,
                        argKey: "fromYValue"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromxdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxdatavalue))/ig,
                    argIndex: 2,
                    argKey: "fromXDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromydatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromydatavalue))/ig,
                    argIndex: 2,
                    argKey: "fromYDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
                    argIndex: 2, argKey: "fromLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toxvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxvalue))/ig,
                    argIndex: 2,
                    argKey: "toXValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toyvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toyvalue))/ig,
                    argIndex: 2,
                    argKey: "toYValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toxdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxdatavalue))/ig,
                    argIndex: 2,
                    argKey: "toXDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toydatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toydatavalue))/ig,
                    argIndex: 2, argKey: "toYDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
                    argIndex: 2,
                    argKey: "toLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$openvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$openvalue))/ig,
                    argIndex: 2,
                    argKey: "openValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$closevalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closevalue))/ig,
                    argIndex: 2,
                    argKey: "closeValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$highvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highvalue))/ig,
                    argIndex: 2, argKey: "highValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$lowvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowvalue))/ig,
                    argIndex: 2,
                    argKey: "lowValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$opendatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$opendatavalue))/ig,
                    argIndex: 2,
                    argKey: "openDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$closedatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closedatavalue))/ig,
                    argIndex: 2,
                    argKey: "closeDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$highdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highdatavalue))/ig,
                    argIndex: 2,
                    argKey: "highDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$lowdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowdatavalue))/ig,
                    argIndex: 2,
                    argKey: "lowDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$maxvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxvalue))/ig,
                    argIndex: 2,
                    argKey: "maxValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$maxdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxdatavalue))/ig,
                    argIndex: 2,
                    argKey: "maxDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$minvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$minvalue))/ig,
                    argIndex: 2, argKey: "minValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$mindatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mindatavalue))/ig,
                    argIndex: 2,
                    argKey: "minDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$q1)/ig,
                    argIndex: 2,
                    argKey: "Q1"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedQ1)/ig,
                    argIndex: 2,
                    argKey: "unformattedQ1"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$q3)/ig,
                    argIndex: 2,
                    argKey: "Q3"
                }, {regex: /((^|[^\\])((\\)\\)*\$unformattedQ3)/ig, argIndex: 2, argKey: "unformattedQ3"}, {
                    regex: /((^|[^\\])((\\)\\)*\$median)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$median))/ig,
                    argIndex: 2, argKey: "median"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedMedian)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMedian))/ig,
                    argIndex: 2,
                    argKey: "unformattedMedian"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$SD)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$SD))/ig,
                    argIndex: 2,
                    argKey: "SD"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedsd)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsd))/ig,
                    argIndex: 2,
                    argKey: "unformattedsd"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$QD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$QD))/ig,
                    argIndex: 2, argKey: "QD"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedQD)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedQD))/ig,
                    argIndex: 2,
                    argKey: "unformattedQD"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$MD)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$MD))/ig,
                    argIndex: 2,
                    argKey: "MD"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedMD)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMD))/ig,
                    argIndex: 2,
                    argKey: "unformattedMD"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$mean)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mean))/ig, argIndex: 2,
                    argKey: "mean"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
                    argIndex: 2,
                    argKey: "unformattedMean"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
                    argIndex: 2,
                    argKey: "unformattedMean"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$volumeValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeValue))/ig,
                    argIndex: 2,
                    argKey: "volumeValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$volumeDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeDataValue))/ig,
                    argIndex: 2,
                    argKey: "volumeDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromXValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXValue))/ig,
                    argIndex: 2,
                    argKey: "fromXValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromYValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYValue))/ig,
                    argIndex: 2,
                    argKey: "fromYValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromXDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXDataValue))/ig,
                    argIndex: 2,
                    argKey: "fromXDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromYDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYDataValue))/ig,
                    argIndex: 2,
                    argKey: "fromYDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$fromLabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromLabel))/ig,
                    argIndex: 2,
                    argKey: "fromLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toXValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXValue))/ig,
                    argIndex: 2,
                    argKey: "toXValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toYValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYValue))/ig,
                    argIndex: 2,
                    argKey: "toYValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toXDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXDataValue))/ig,
                    argIndex: 2, argKey: "toXDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$toYDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYDataValue))/ig,
                    argIndex: 2,
                    argKey: "toYDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
                    argIndex: 2,
                    argKey: "toLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tlLabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlLabel))/ig,
                    argIndex: 5,
                    argKey: "tlLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$trlabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trlabel))/ig,
                    argIndex: 5,
                    argKey: "trLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$bllabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$bllabel))/ig,
                    argIndex: 5,
                    argKey: "blLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$brlabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brlabel))/ig,
                    argIndex: 5,
                    argKey: "brLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$rowlabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$rowlabel))/ig,
                    argIndex: 5,
                    argKey: "rowLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$columnlabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$columnlabel))/ig,
                    argIndex: 5,
                    argKey: "columnLabel"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$errorvalue)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorvalue))/ig,
                        argIndex: 2,
                        argKey: "errorValue"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$errordatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errordatavalue))/ig,
                    argIndex: 2,
                    argKey: "errorDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$errorpercentvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentvalue))/ig,
                    argIndex: 2,
                    argKey: "errorPercentValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$errorpercentdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentdatavalue))/ig,
                    argIndex: 2,
                    argKey: "errorPercentDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorValue))/ig,
                    argIndex: 2,
                    argKey: "horizontalErrorValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorDataValue))/ig,
                    argIndex: 2,
                    argKey: "horizontalErrorDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$verticalErrorValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorValue))/ig,
                    argIndex: 2,
                    argKey: "verticalErrorValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$verticalErrorDataValue)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorDataValue))/ig,
                        argIndex: 2,
                        argKey: "verticalErrorDataValue"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercent)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentValue))/ig,
                    argIndex: 2,
                    argKey: "horizontalErrorPercentValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercentDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentDataValue))/ig,
                    argIndex: 2,
                    argKey: "horizontalErrorPercentDataValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercent)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentValue))/ig,
                        argIndex: 2,
                        argKey: "verticalErrorPercentValue"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercentDataValue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentDataValue))/ig,
                    argIndex: 2,
                    argKey: "verticalErrorPercentDataValue"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$xaxispercentvalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxispercentvalue))/ig,
                    argIndex: 2,
                    argKey: "xAxisPercentValue"
                },
                    {
                        regex: /((^|[^\\])((\\)\\)*\$percentdatavalue)/ig,
                        escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentdatavalue))/ig,
                        argIndex: 2,
                        argKey: "percentDataValue"
                    }, {
                    regex: /((^|[^\\])((\\)\\)*\$trType)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trType))/ig,
                    argIndex: 4,
                    argKey: "trtype"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$tlType)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlType))/ig,
                    argIndex: 4,
                    argKey: "tltype"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$brType)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brType))/ig,
                    argIndex: 4,
                    argKey: "brtype"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$blType)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$blType))/ig, argIndex: 4, argKey: "bltype"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$colorRangeLabel)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$colorRangeLabel))/ig,
                    argIndex: 5,
                    argKey: "colorRangeLabel"
                }, {
                    regex: /((^|[^\\])((\\)\\)*\$zdatavalue)/ig,
                    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zdatavalue))/ig,
                    argIndex: 2,
                    argKey: "zDataValue"
                }], c = [], b, k = a.length;
            for (b = 0; b < k; b += 1)c.push(b);
            return function () {
                var b = arguments[0], k = arguments[1], e, n, d, g, q;
                Ha(k) || (k = c);
                if (b)for (q = k.length, g = 0; g < q; g +=
                    1)if (d = a[k[g]])e = Ba(qa((n = arguments[d.argIndex]) && n[d.argKey], "") + ""), b = b.replace(d.regex, "$2$4" + (d.parsingMethod ? d.parsingMethod(e) : e)), b = b.replace(d.escapeRegex, "$2$4$5");
                return b
            }
        }();
    d.core._setLineHeightFactor = function (a) {
        !(a = c(a)) || 0 > a || (t.lineHeightFactor = a)
    };
    d.extend(t, {
        BLANKSTRINGPLACEHOLDER: "#BLANK#",
        BLANKSTRING: "",
        COLOR_BLACK: "000000",
        COLOR_GLASS: "rgba(255, 255, 255, 0.3)",
        COLOR_WHITE: "FFFFFF",
        COLOR_TRANSPARENT: "rgba(0,0,0,0)",
        HASHSTRING: "#",
        BREAKSTRING: "<br />",
        STRINGSTRING: "string",
        OBJECTSTRING: "object",
        COMMASTRING: ",",
        ZEROSTRING: "0",
        SAMPLESTRING: "Ay0",
        TESTSTR: "Ag",
        ONESTRING: "1",
        DECIMALSTRING: ".",
        STRINGUNDEFINED: "undefined",
        POSITION_TOP: "top",
        POSITION_RIGHT: "right",
        POSITION_BOTTOM: "bottom",
        POSITION_LEFT: "left",
        POSITION_CENTER: "center",
        POSITION_MIDDLE: "middle",
        POSITION_START: "start",
        POSITION_END: "end",
        FC_CONFIG_STRING: "_FCconf",
        SHAPE_RECT: "rect",
        HUNDREDSTRING: "100",
        PXSTRING: "px",
        COMMASPACE: ", ",
        TEXTANCHOR: "text-anchor",
        TOUCH_THRESHOLD_PIXELS: 15,
        CLICK_THRESHOLD_PIXELS: 5,
        regex: {
            stripWhitespace: N, dropHash: b,
            startsRGBA: I, cleanColorCode: a, breakPlaceholder: z, hexcode: /^#?[0-9a-f]{6}/i
        },
        fireEvent: function (a, c, b, k) {
            t.dem.fire(a, c, b, k)
        },
        plotEventHandler: function (a, c, b) {
            c = c || {};
            var k = c.type, e = G(a.container, c), e = Ca(e, this.data("eventArgs")), n = a.logic.fireGroupEvent, g = this.data("groupId"), q = function (a, b) {
                c.FusionChartsPreventEvent = !0;
                p && b.toolText && t.toolTip && t.toolTip.preventTooltip()
            };
            "index" in e && !("dataIndex" in e) && (e.dataIndex = e.index);
            "value" in e && !("dataValue" in e) && (e.dataValue = e.value);
            b = ka(b, "dataplotclick").toLowerCase();
            "dataplotrollover" === b ? (c.FusionChartsPreventEvent = !1, n ? d.raiseEventGroup(g, b, e, a.fusionCharts, void 0, void 0, q) : d.raiseEvent(b, e, a.logic.chartInstance, void 0, void 0, q)) : n && "dataplotclick" !== b ? d.raiseEventGroup(g, b, e, a.fusionCharts) : d.raiseEvent(b, e, a.logic.chartInstance);
            ("click" === k || "mouseup" === k || "touchend" === k && "dataplotclick" === b) && a.linkClickFN.call({link: e.link}, a)
        },
        getEventCoordinate: S,
        getMouseCoordinate: G,
        addEvent: aa,
        removeEvent: Z,
        getTouchEvent: ca,
        extend2: Ca,
        deltend: function (a, c) {
            if ("object" !== typeof a || "object" !== typeof c)return null;
            ma(a, c);
            return a
        },
        imprint: function (a, c, b) {
            var k;
            if ("object" !== typeof a || null === a)return c;
            if ("object" !== typeof c || null === c)return a;
            for (k in c)if (void 0 === a[k] || !b && null === a[k])a[k] = c[k];
            return a
        },
        pluck: ka,
        pluckNumber: n,
        getFirstDefinedValue: function () {
            var a, c, b;
            c = 0;
            for (b = arguments.length; c < b; c += 1)if ((a = arguments[c]) || !1 === a || 0 === a || "" == a)return a
        },
        createElement: function (a, c, b) {
            a = D.createElement(a);
            for (var k in c)a.setAttribute(k, c[k]);
            b && b.appendChild && b.appendChild(a);
            return a
        },
        hashify: fa,
        pluckFontSize: function () {
            var a, c, b;
            c = 0;
            for (b = arguments.length; c < b; c += 1)if (((a = arguments[c]) || !1 === a || 0 === a) && !isNaN(a = Number(a)))return 1 > a ? 1 : a;
            return 1
        },
        getValidValue: qa,
        getPosition: ia,
        getViewPortDimension: q,
        bindSelectionEvent: function (a, c) {
            c = c || {};
            var b = a.options.chart, k = a.container, e = b.zoomType, d = Ca({}, c.attr || {}), g = d["stroke-width"] = n(d.strokeWidth, d["stroke-width"], 1), q = ia(k), h = a.eventListeners || (a.eventListeners = []);
            c = Ca({
                chart: a,
                zoomX: /x/.test(e),
                zoomY: /y/.test(e),
                canvasY: a.canvasTop,
                canvasX: a.canvasLeft,
                canvasW: a.canvasWidth,
                canvasH: a.canvasHeight,
                canvasX2: a.canvasLeft + a.canvasWidth,
                canvasY2: a.canvasTop + a.canvasHeight,
                strokeWidth: g,
                chartPosLeft: q.left,
                chartPosTop: q.top,
                attr: d
            }, c);
            d.stroke = da(d.stroke, "rgba(51,153,255,0.8)");
            d.fill = da(d.fill, "rgba(185,213,241,0.3)");
            d.ishot = !0;
            k && (Z(k, "pointerdrag", V), h.push(aa(k, "pointerdrag", V, c)));
            b.link && (Z(a.container, "mouseup mousedown", X), h.push(aa(a.container, "mouseup mousedown", X, c)))
        },
        createContextMenu: function (a) {
            var c = a.chart, b = c.smartLabel,
                k = c.logic.hcJSON && c.logic.hcJSON.chart.useRoundEdges, e = t.Raphael, n = function (a) {
                    var c = a.menufillcolor && fa(a.menufillcolor), b = a.menulabelcolor && fa(a.menulabelcolor), A = a.menufillhovercolor && fa(a.menufillhovercolor);
                    a = a.menulabelhovercolor && fa(a.menulabelhovercolor);
                    return {attrs: {backgroundColor: c, color: b}, hover: {backgroundColor: A, color: a}}
                }(c.definition.chart), d = function (a, c, b) {
                    c = c || {};
                    a = (a = (a = a && e.tintshade(a.color, .7)) && e.getRGB(a)) && "rgb(" + [a.r, a.g, a.b].join() + ")";
                    return {
                        backgroundColor: c.backgroundHoverColor ||
                        b.backgroundColor || a || "rgb(64, 64, 64)", color: c.hoverColor || b.color || "#FFFFFF"
                    }
                }(a.basicStyle, a.hover, n.hover), g = function (a, c, b) {
                    c = Ca({}, c || {});
                    c = Ca(c, a);
                    return {
                        fontFamily: c.fontFamily || "Verdana,sans",
                        fontSize: c.fontSize || "10px",
                        color: c.color || b.color || "#000000",
                        backgroundColor: c.backgroundColor || b.backgroundColor || "rgb(255, 255, 255)"
                    }
                }(a.basicStyle, a.attrs, n.attrs), q = {
                    textAlign: "left",
                    align: "left",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    paddingTop: "5px",
                    cursor: "pointer",
                    borderWidth: "0px"
                }, h = a.items,
                E = a.position, J = a.verticalPadding || 3, m = a.horizontalPadding || 6, u = {}, L, s, T, S, z, l, G, C, M, qa, F, Ha, I;
            if (c)L = ia(c.container); else return !1;
            S = function () {
                var a = u.items, c = a.length, v = 0, A = 0, H = 0, f, e;
                u.menuItems || (u.menuItems = []);
                for (b.setStyle(g); c--;)f = a[c], f = b.getOriSize(f.text), H || (H = f.height + 2 * J), v += H, A = Y(A, f.width + 2 * m);
                u.height = v;
                u.width = A;
                u.itemH = H;
                this.style.width = A + "px";
                u.menuRect || (v = u.menuRect = D.createElement("div"), v.style.border = "1px solid rgb(100, 100, 100)", k && (v.style.mozBorderRadius = "4px", v.style.webkitBorderRadius =
                    "4px", v.style.borderRadius = "4px", v.style.overflow = "hidden"), p && !w ? v.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Color=#999999,direction=135,strength=3)" : (v.style.mozBoxShadow = "3px 3px 3px #999", v.style.webkitBoxShadow = "3px 3px 3px #999", v.style.boxShadow = "3px 3px 3px #999"), this.appendChild(v));
                A = a.length;
                for (c = 0; c < A; c += 1)if (f = a[c], u.menuItems[c])u.menuItems[c].label.innerHTML = f.text; else {
                    u.menuItems[c] = {};
                    v = u.menuItems[c].box = D.createElement("div");
                    v.style.height = H + "px";
                    v.style.lineHeight =
                        H + "px";
                    for (e in q)v.style[e] = q[e];
                    for (e in g)v.style[e] = g[e];
                    u.menuRect.appendChild(v);
                    v.innerHTML = f.text;
                    t.dem.listen(v, "click", I);
                    t.dem.listen(v, "pointerhover", qa);
                    u.menuItems[c].box._itemIdx = c
                }
                for (; u.menuItems[c];)u.menuItems[c].box.parentNode.removeChild(u.menuItems[c].box), u.menuItems.splice(c, 1)
            };
            z = function () {
                T || (T = D.createElement("div"), T.style.position = "absolute", T.style.zIndex = "50", T.style.display = "none", c.container.appendChild && c.container.appendChild(T));
                return T
            };
            l = function () {
                s = setTimeout(u.hide,
                    800)
            };
            G = function () {
                s && clearTimeout(s)
            };
            C = function (a) {
                var b = a.x;
                a = a.y;
                var v = {x: b, y: a}, A = u.width, k = u.height, f = c.chartHeight, e = c.chartWidth;
                b + A > e && 0 < b - A ? v.x -= A : b + A > e && (v.x = 0);
                a + k > f && 0 < a - k && (v.y -= k);
                return v
            };
            M = function () {
                u.hide()
            };
            qa = function (a) {
                a.target && a.target.parentNode && ("start" === a.state ? F : Ha).call(a.target)
            };
            F = function () {
                var a = u.menuItems[this._itemIdx], c;
                G();
                for (c in d)a.box.style[c] = d[c]
            };
            Ha = function () {
                var a = u.menuItems[this._itemIdx], c;
                for (c in g)a.box.style[c] = g[c];
                l()
            };
            I = function (a) {
                var c =
                    u.items[this._itemIdx];
                c.onclick && c.onclick.call(c, a);
                a.originalEvent.stopPropagation ? a.originalEvent.stopPropagation() : a.originalEvent.cancelBubble = !0;
                u.hide()
            };
            u.showItem = function (a) {
                a = this.menuItems[a];
                var c = this.height, b = this.itemH;
                a && a._isHidden && (a.box.style.display = "", this.height = c + b, a._isHidden = !1, a = C(E), this.left = a.x, this.top = a.y)
            };
            u.hideItem = function (a) {
                a = this.menuItems[a];
                var c = this.height, b = this.itemH;
                a && !a._isHidden && (a.box.style.display = "none", this.height = c - b, a._isHidden = !0, a = C(E), this.left =
                    a.x, this.top = a.y)
            };
            u.redraw = function () {
                var a = this.menuContainer;
                this.items = h;
                a ? S.call(this.menuContainer) : E && void 0 !== E.x && void 0 !== E.y ? (this.menuContainer = z(), S.call(this.menuContainer), a = C(E), this.left = a.x, this.top = a.y, this.menuContainer.style.left = this.left + "px", this.menuContainer.style.top = this.top + "px") : (this.menuContainer = z(), S.call(this.menuContainer))
            };
            u.show = function (a) {
                var c = this;
                a && void 0 !== a.x && void 0 !== a.y ? (a = C(a), c.menuContainer.style.left = a.x + "px", c.menuContainer.style.top = a.y + "px") :
                    (c.menuContainer.style.left = c.left + "px", c.menuContainer.style.top = c.top + "px");
                c.menuContainer.style.display = "";
                setTimeout(function () {
                    c.visible = !0;
                    e.click(M)
                }, 400)
            };
            u.hide = function () {
                this.visible && (this.visible = !1, u.menuContainer.style.display = "none", u.menuContainer.style.left = -u.width + "px", u.menuContainer.style.top = -u.height + "px", e.unclick(M))
            };
            u.update = function (a) {
                a && a.length && (this.items = a, this.redraw())
            };
            u.updatePosition = function (a) {
                var b = L.left, v = L.top;
                L = ia(c.container);
                a ? (E = a, a = C(a), this.left =
                    a.x, this.top = a.y) : (this.left -= b - L.left, this.top -= v - L.top)
            };
            u.add = function (a) {
                var c = this.menuItems, v = c.length, A;
                b.setStyle(g);
                this.width = Y(this.width, b.getOriSize(a.text).width);
                c[v] = {};
                c = c[v].box = D.createElement("div");
                c.style.height = this.itemH + "px";
                c.style.lineHeight = this.itemH + "px";
                for (A in q)c.style[A] = q[A];
                for (A in g)c.style[A] = g[A];
                u.menuRect.appendChild(c);
                c.innerHTML = a.text;
                t.dem.listen(c, "click", I);
                t.dem.listen(c, "pointerhover", qa);
                u.menuItems[v].box._itemIdx = v;
                this.height += this.itemH
            };
            u.removeItems =
                function () {
                    for (var a = this.menuItems, c = a && a.length, b; c--;)b = a[c], t.dem.unlisten(b.box, "click", I), t.dem.unlisten(b.box, "pointerhover", qa), b.box && b.box.parentNode && b.box.parentNode.removeChild(b.box);
                    delete this.menuItems;
                    delete this.items
                };
            u.setPosition = function (a) {
                void 0 !== a.x && void 0 !== a.y && (this.menuContainer.style.x = a.x, this.menuContainer.style.y = a.y)
            };
            u.destroy = function () {
                this.removeItems();
                this.menuContainer.parentNode.removeChild(this.menuContainer)
            };
            h && h.length && (u.redraw(), u.hide());
            return u
        },
        getDefinedColor: function (a, c) {
            return a || 0 === a || "" === a ? a : c
        },
        getFirstValue: da,
        getFirstColor: function (a) {
            a = a.split(",")[0];
            a = a.replace(N, "");
            "" == a && (a = "000000");
            return a.replace(b, "#")
        },
        getColorCodeString: function (a, c) {
            var b = "", k, e, n = 0, d = c.split(",");
            for (e = d.length; n < e; n += 1)k = d[n].split("-"), b = 2 === k.length ? "-1" !== k[0].indexOf("dark") ? b + (lb(a, 100 - parseInt(k[1], 10)) + ",") : b + (xa(a, 100 - parseInt(k[1], 10)) + ",") : b + (d[n] + ",");
            return b.substring(0, b.length - 1)
        },
        pluckColor: function (a) {
            if (qa(a))return a = a.split(",")[0],
                a = a.replace(N, ""), "" == a && (a = "000000"), a.replace(b, "#")
        },
        toRaphaelColor: Na,
        gradientify: Ea,
        trimString: function (a) {
            a = a.replace(/^\s\s*/, "");
            for (var c = /\s/, b = a.length; c.test(a.charAt(b -= 1)););
            return a.slice(0, b + 1)
        },
        getFirstAlpha: function (a) {
            a = parseInt(a, 10);
            if (isNaN(a) || 100 < a || 0 > a)a = 100;
            return a
        },
        parsePointValue: E,
        parseUnsafeString: L,
        parseTooltext: J,
        toPrecision: function (a, c) {
            var b = s(10, c);
            return g(a * b) / b
        },
        hasTouch: m,
        CREDIT_HREF: M,
        CREDIT_STRING: "FusionCharts XT Trial",
        getSentenceCase: function (a) {
            a = a ||
                "";
            return a.charAt(0).toUpperCase() + a.substr(1)
        },
        getCrispValues: function (a, c, b) {
            var k = b % 2 / 2;
            b = g(a + k) - k;
            a = g(a + c + k) - k - b;
            return {position: b, distance: a}
        },
        regescape: function (a) {
            return a && a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        regReplaceEscape: Ba,
        isArray: Ha,
        stubFN: function () {
        },
        falseFN: function () {
            return !1
        },
        stableSort: function (a, c) {
            var b = a.length, k;
            for (k = 0; k < b; k++)a[k].ssI = k;
            a.sort(function (a, b) {
                var k = c(a, b);
                return 0 === k ? a.ssI - b.ssI : k
            });
            for (k = 0; k < b; k++)delete a[k].ssI
        },
        hasSVG: w,
        isIE: p,
        lineHeightFactor: 1.2,
        getLinkAction: function (a, c) {
            var b = function (a) {
                return a
            };
            return function () {
                var k = n((a.chart || a.map || {}).unescapelinks, 1), e = da(this.link, ""), g = ka(e, this.options && this.options.chart && this.options.chart.link || "", this.series && this.series.chart && this.series.chart.options && this.series.chart.options.chart && this.series.chart.options.chart.link || ""), q = g, h, E, J, m, u, L, s, t, p, T;
                void 0 !== g && (k && (g = l.decodeURIComponent ? l.decodeURIComponent(g) : l.unescape(g)), g = g.replace(/^\s+/, "").replace(/\s+$/, ""), -1 !== g.search(/^[a-z]*\s*[\-\:]\s*/i) &&
                (u = g.split(/\s*[\-\:]\s*/)[0].toLowerCase(), T = u.length), setTimeout(function () {
                    switch (u) {
                        case "j":
                            g = g.replace(/^j\s*\-/i, "j-");
                            h = g.indexOf("-", 2);
                            -1 === h ? Da(g.slice(2)) : Da(g.substr(2, h - 2).replace(/\s/g, ""), g.slice(h + 1));
                            break;
                        case "javascript":
                            Ga(g.replace(/^javascript\s*\:/i, ""));
                            break;
                        case "n":
                            g.replace(/^n\s*\-/i, "n-");
                            l.open(b(g.slice(2), k));
                            break;
                        case "f":
                            g = g.replace(/^f\s*\-/i, "f-");
                            h = g.indexOf("-", 2);
                            -1 !== h ? (E = g.substr(2, h - 2)) && l.frames[E] ? l.frames[E].location = b(g.slice(h + 1), k) : l.open(b(g.slice(h +
                                1), k), E) : l.open(b(g.slice(2), k));
                            break;
                        case "p":
                            g = g.replace(/p\s*\-/i, "p-");
                            h = g.indexOf("-", 2);
                            J = g.indexOf(",", 2);
                            -1 === h && (h = 1);
                            m = b(g.slice(h + 1), k);
                            l.open(m, g.substr(2, J - 2), g.substr(J + 1, h - J - 1)).focus();
                            break;
                        case "newchart":
                        case "newmap":
                            ":" === g.charAt(T) && (h = g.indexOf("-", T + 1), p = g.substring(T + 1, h), T = h);
                            h = g.indexOf("-", T + 1);
                            L = g.substring(T + 1, h).toLowerCase();
                            switch (L) {
                                case "xmlurl":
                                case "jsonurl":
                                    t = g.substring(h + 1, g.length);
                                    break;
                                case "xml":
                                case "json":
                                    var e = s = g.substring(h + 1, g.length), n = {chart: {}},
                                        S, e = e.toLowerCase();
                                    if (a.linkeddata)for (S = 0; S < a.linkeddata.length; S += 1)a.linkeddata[S].id.toLowerCase() === e && (n = a.linkeddata[S].linkedchart || a.linkeddata[S].linkedmap);
                                    t = n;
                                    L = "json"
                            }
                            d.raiseEvent("linkedChartInvoked", {alias: p, linkType: L.toUpperCase(), data: t}, c);
                            break;
                        default:
                            l.location.href = g
                    }
                    d.raiseEvent("linkClicked", {linkProvided: q, linkInvoked: g, linkAction: u && u.toLowerCase()}, c)
                }, 0))
            }
        },
        graphics: {
            parseAlpha: ra, convertColor: za, getDarkColor: xa, getLightColor: lb, mapSymbolName: function (a, c) {
                var b = "circle";
                a = E(a);
                3 <= a && (b = (c ? "spoke_" : "poly_") + a);
                return b
            }, getColumnColor: function (a, c, b, k, e, n, g, d, h) {
                var q, E;
                q = a.split(",");
                E = c.split(",");
                n = n.split(",");
                g = g.split(",");
                a = a.replace(/\s/g, "").replace(/\,$/, "");
                h ? d = {
                    FCcolor: {
                        color: q[0],
                        alpha: E[0]
                    }
                } : e ? (a = q[0], E = E[0], d = {
                    FCcolor: {
                        color: xa(a, 75) + "," + lb(a, 10) + "," + xa(a, 90) + "," + lb(a, 55) + "," + xa(a, 80),
                        alpha: E + "," + E + "," + E + "," + E + "," + E,
                        ratio: "0,11,14,57,18",
                        angle: d ? "90" : "0"
                    }
                }, n = [xa(a, 70)]) : (c = ra(c, q.length), d = {
                    FCcolor: {
                        color: a,
                        alpha: c,
                        ratio: b,
                        angle: d ? -k : k
                    }
                });
                return [d,
                    {FCcolor: {color: n[0], alpha: g[0]}}]
            }, getAngle: function (a, c, b) {
                a = 180 * Math.atan(c / a) / Math.PI;
                2 == b ? a = 180 - a : 3 == b ? a += 180 : 4 == b && (a = 360 - a);
                return a
            }, parseColor: Za, getValidColor: function (a) {
                return F.test(Za(a)) && a
            }, HSBtoRGB: function (a) {
                var c = a[0], b = 0, k = 0, e = 0, n = [], n = a[1] / 100;
                a = a[2] / 100;
                var d = c / 60 - Math.floor(c / 60), h = a * (1 - n), q = a * (1 - d * n), n = a * (1 - (1 - d) * n);
                switch (Math.floor(c / 60) % 6) {
                    case 0:
                        b = a;
                        k = n;
                        e = h;
                        break;
                    case 1:
                        b = q;
                        k = a;
                        e = h;
                        break;
                    case 2:
                        b = h;
                        k = a;
                        e = n;
                        break;
                    case 3:
                        b = h;
                        k = q;
                        e = a;
                        break;
                    case 4:
                        b = n;
                        k = h;
                        e = a;
                        break;
                    case 5:
                        b =
                            a, k = h, e = q
                }
                return n = [g(255 * b), g(255 * k), g(255 * e)]
            }, RGBtoHSB: function (a) {
                var c = a[0], b = a[1];
                a = a[2];
                var k = Math.max(Math.max(c, b), a), e = Math.min(Math.min(c, b), a), n = 0, d = 0;
                k == e ? n = 0 : k == c ? n = (60 * (b - a) / (k - e) + 360) % 360 : k == b ? n = 60 * (a - c) / (k - e) + 120 : k == a && (n = 60 * (c - b) / (k - e) + 240);
                d = 0 === k ? 0 : (k - e) / k;
                return [g(n), g(100 * d), g(k / 255 * 100)]
            }, RGBtoHex: function (a) {
                return ("000000" + (a[0] << 16 | a[1] << 8 | a[2]).toString(16)).slice(-6)
            }, HEXtoRGB: Aa
        },
        setImageDisplayMode: function (a, c, b, k, e, n, g, d) {
            var h = k / 100 * d.width;
            k = k / 100 * d.height;
            d = {};
            var q,
                E = n - 2 * e;
            q = g - 2 * e;
            var J = function (a, c, b, k, n, d) {
                var g = {};
                switch (a) {
                    case "top":
                        g.y = e;
                        break;
                    case "bottom":
                        g.y = d - k - e;
                        break;
                    case "middle":
                        g.y = (d - k) / 2
                }
                switch (c) {
                    case "left":
                        g.x = e;
                        break;
                    case "right":
                        g.x = n - b - e;
                        break;
                    case "middle":
                        g.x = (n - b) / 2
                }
                return g
            };
            switch (a) {
                case "center":
                    d.width = h;
                    d.height = k;
                    d.y = g / 2 - k / 2;
                    d.x = n / 2 - h / 2;
                    break;
                case "stretch":
                    d.width = n - 2 * e;
                    d.height = g - 2 * e;
                    d.y = e;
                    d.x = e;
                    break;
                case "tile":
                    d.width = h;
                    d.height = k;
                    d.tileInfo = {};
                    d.tileInfo.xCount = a = Math.ceil(E / h);
                    d.tileInfo.yCount = q = Math.ceil(q / k);
                    c = J(c,
                        b, h * a, k * q, n, g);
                    d.y = c.y;
                    d.x = c.x;
                    break;
                case "fit":
                    a = h / k > E / q ? E / h : q / k;
                    d.width = h * a;
                    d.height = k * a;
                    c = J(c, b, d.width, d.height, n, g);
                    d.y = c.y;
                    d.x = c.x;
                    break;
                case "fill":
                    a = h / k > E / q ? q / k : E / h;
                    d.width = h * a;
                    d.height = k * a;
                    c = J(c, b, d.width, d.height, n, g);
                    d.y = c.y;
                    d.x = c.x;
                    break;
                default:
                    c = J(c, b, h, k, n, g), d.width = h, d.height = k, d.y = c.y, d.x = c.x
            }
            return d
        },
        setLineHeight: La,
        parsexAxisStyles: nb,
        supportedStyle: {
            font: "font",
            fontFamily: "font-family",
            "font-family": "font-family",
            fontWeight: "font-weight",
            "font-weight": "font-weight",
            fontSize: "font-size",
            "font-size": "font-size",
            lineHeight: "line-height",
            "line-height": "line-height",
            textDecoration: "text-decoration",
            "text-decoration": "text-decoration",
            color: "color",
            whiteSpace: "white-space",
            "white-space": "white-space",
            padding: "padding",
            margin: "margin",
            background: "background",
            backgroundColor: "background-color",
            "background-color": "background-color",
            backgroundImage: "background-image",
            "background-image": "background-image",
            backgroundPosition: "background-position",
            "background-position": "background-position",
            backgroundPositionLeft: "background-position-left",
            "background-position-left": "background-position-left",
            backgroundPositionTop: "background-position-top",
            "background-position-top": "background-position-top",
            backgroundRepeat: "background-repeat",
            "background-repeat": "background-repeat",
            border: "border",
            borderColor: "border-color",
            "border-color": "border-color",
            borderStyle: "border-style",
            "border-style": "border-style",
            borderThickness: "border-thickness",
            "border-thickness": "border-thickness",
            borderTop: "border-top",
            "border-top": "border-top",
            borderTopColor: "border-top-color",
            "border-top-color": "border-top-color",
            borderTopStyle: "border-top-style",
            "border-top-style": "border-top-style",
            borderTopThickness: "border-top-thickness",
            "border-top-thickness": "border-top-thickness",
            borderRight: "border-right",
            "border-right": "border-right",
            borderRightColor: "border-right-color",
            "border-right-color": "border-right-color",
            borderRightStyle: "border-right-style",
            "border-right-style": "border-right-style",
            borderRightThickness: "border-right-thickness",
            "border-right-thickness": "border-right-thickness",
            borderBottom: "border-bottom",
            "border-bottom": "border-bottom",
            borderBottomColor: "border-bottom-color",
            "border-bottom-color": "border-bottom-color",
            borderBottomStyle: "border-bottom-style",
            "border-bottom-style": "border-bottom-style",
            borderBottomThickness: "border-bottom-thickness",
            "border-bottom-thickness": "border-bottom-thickness",
            borderLeft: "border-left",
            "border-left": "border-left",
            borderLeftColor: "border-left-color",
            "border-left-color": "border-left-color",
            borderLeftStyle: "border-left-style",
            "border-left-Style": "border-left-style",
            borderLeftThickness: "border-left-thickness",
            "border-left-thickness": "border-left-thickness"
        },
        getAxisLimits: ub,
        createTrendLine: Ua,
        getDashStyle: eb,
        axisLabelAdder: Hb,
        chartAPI: k,
        createDialog: Qb
    })
}]);
window.FusionCharts && window.FusionCharts.register("module", ["private", "vendor.redraphael", function () {
    var d = this.hcLib, l = window.Raphael, D;
    (function () {
        (function (d, p) {
            var c = /[\.\/]/, l = function () {
            }, b = function (a, c) {
                return a - c
            }, I, a, z = {n: {}}, F = function (c, d) {
                c = String(c);
                var g = a, e = Array.prototype.slice.call(arguments, 2), h = F.listeners(c), m = 0, p, z = [], q = {}, l = [], u = I;
                I = c;
                for (var w = a = 0, t = h.length; w < t; w++)"zIndex" in h[w] && (z.push(h[w].zIndex), 0 > h[w].zIndex && (q[h[w].zIndex] = h[w]));
                for (z.sort(b); 0 > z[m];)if (p = q[z[m++]],
                        l.push(p.apply(d, e)), a)return a = g, l;
                for (w = 0; w < t; w++)if (p = h[w], "zIndex" in p)if (p.zIndex == z[m]) {
                    l.push(p.apply(d, e));
                    if (a)break;
                    do if (m++, (p = q[z[m]]) && l.push(p.apply(d, e)), a)break; while (p)
                } else q[p.zIndex] = p; else if (l.push(p.apply(d, e)), a)break;
                a = g;
                I = u;
                return l.length ? l : null
            };
            F._events = z;
            F.listeners = function (a) {
                a = a.split(c);
                var b = z, d, e, h, m, p, l, q, Y = [b], u = [];
                h = 0;
                for (m = a.length; h < m; h++) {
                    q = [];
                    p = 0;
                    for (l = Y.length; p < l; p++)for (b = Y[p].n, d = [b[a[h]], b["*"]], e = 2; e--;)if (b = d[e])q.push(b), u = u.concat(b.f || []);
                    Y = q
                }
                return u
            };
            F.on = function (a, b) {
                a = String(a);
                if ("function" != typeof b)return function () {
                };
                for (var d = a.split(c), e = z, h = 0, m = d.length; h < m; h++)e = e.n, e = e.hasOwnProperty(d[h]) && e[d[h]] || (e[d[h]] = {n: {}});
                e.f = e.f || [];
                h = 0;
                for (m = e.f.length; h < m; h++)if (e.f[h] == b)return l;
                e.f.push(b);
                return function (a) {
                    +a == +a && (b.zIndex = +a)
                }
            };
            F.f = function (a) {
                var c = [].slice.call(arguments, 1);
                return function () {
                    F.apply(null, [a, null].concat(c).concat([].slice.call(arguments, 0)))
                }
            };
            F.stop = function () {
                a = 1
            };
            F.nt = function (a) {
                return a ? (new RegExp("(?:\\.|\\/|^)" +
                    a + "(?:\\.|\\/|$)")).test(I) : I
            };
            F.nts = function () {
                return I.split(c)
            };
            F.off = F.unbind = function (a, b) {
                if (a) {
                    var d = a.split(c), e, h, m, p, l, q, Y = [z];
                    p = 0;
                    for (l = d.length; p < l; p++)for (q = 0; q < Y.length; q += m.length - 2) {
                        m = [q, 1];
                        e = Y[q].n;
                        if ("*" != d[p])e[d[p]] && m.push(e[d[p]]); else for (h in e)e.hasOwnProperty(h) && m.push(e[h]);
                        Y.splice.apply(Y, m)
                    }
                    p = 0;
                    for (l = Y.length; p < l; p++)for (e = Y[p]; e.n;) {
                        if (b) {
                            if (e.f) {
                                q = 0;
                                for (d = e.f.length; q < d; q++)if (e.f[q] == b) {
                                    e.f.splice(q, 1);
                                    break
                                }
                                !e.f.length && delete e.f
                            }
                            for (h in e.n)if (e.n.hasOwnProperty(h) &&
                                e.n[h].f) {
                                m = e.n[h].f;
                                q = 0;
                                for (d = m.length; q < d; q++)if (m[q] == b) {
                                    m.splice(q, 1);
                                    break
                                }
                                !m.length && delete e.n[h].f
                            }
                        } else for (h in delete e.f, e.n)e.n.hasOwnProperty(h) && e.n[h].f && delete e.n[h].f;
                        e = e.n
                    }
                } else F._events = z = {n: {}}
            };
            F.once = function (a, c) {
                var b = function () {
                    F.unbind(a, b);
                    return c.apply(this, arguments)
                };
                return F.on(a, b)
            };
            F.version = "0.4.2";
            F.toString = function () {
                return "You are running Eve 0.4.2"
            };
            "undefined" != typeof module && module.exports ? module.exports = F : p || "undefined" == typeof define ? d.eve = F : define("eve",
                [], function () {
                    return F
                })
        })(this, !0);
        (function (d, p, c) {
            !c && "function" === typeof define && define.amd ? define(["eve"], function (c) {
                return p(d, c)
            }) : p(d, d.eve)
        })(this, function (d, p) {
            function c(a) {
                var b, f;
                c._url = "";
                if (c.is(a, "function"))return m ? a() : p.on("raphael.DOMload", a);
                if (c.is(a, q))return c._engine.create[M](c, a.splice(0, 3 + c.is(a[0], C))).add(a);
                b = Array.prototype.slice.call(arguments, 0);
                return c.is(b[b.length - 1], "function") ? (f = b.pop(), m ? f.call(c._engine.create[M](c, b)) : p.on("raphael.DOMload", function () {
                    f.call(c._engine.create[M](c,
                        b))
                })) : c._engine.create[M](c, arguments)
            }

            function l() {
                return this.hex
            }

            function b(a, c) {
                for (var b = [], f = 0, r = a.length; r - 2 * !c > f; f += 2) {
                    var v = [{x: +a[f - 2], y: +a[f - 1]}, {x: +a[f], y: +a[f + 1]}, {
                        x: +a[f + 2],
                        y: +a[f + 3]
                    }, {x: +a[f + 4], y: +a[f + 5]}];
                    c ? f ? r - 4 == f ? v[3] = {x: +a[0], y: +a[1]} : r - 2 == f && (v[2] = {
                        x: +a[0],
                        y: +a[1]
                    }, v[3] = {x: +a[2], y: +a[3]}) : v[0] = {
                        x: +a[r - 2],
                        y: +a[r - 1]
                    } : r - 4 == f ? v[3] = v[2] : f || (v[0] = {x: +a[f], y: +a[f + 1]});
                    b.push(["C", (-v[0].x + 6 * v[1].x + v[2].x) / 6, (-v[0].y + 6 * v[1].y + v[2].y) / 6, (v[1].x + 6 * v[2].x - v[3].x) / 6, (v[1].y + 6 * v[2].y - v[3].y) /
                    6, v[2].x, v[2].y])
                }
                return b
            }

            function I(a, c, b, f, r, v, k, A, H) {
                null == H && (H = 1);
                H = (1 < H ? 1 : 0 > H ? 0 : H) / 2;
                for (var e = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, g = 0; 12 > g; g++)var B = H * e[g] + H, W = B * (B * (-3 * a + 9 * b - 9 * r + 3 * k) + 6 * a - 12 * b + 6 * r) - 3 * a + 3 * b, B = B * (B * (-3 * c + 9 * f - 9 * v + 3 * A) + 6 * c - 12 * f + 6 * v) - 3 * c + 3 * f, n = n + d[g] * Da(W * W + B * B);
                return H * n
            }

            function a(a, c, b, f, r, v, k, A, H) {
                if (!(0 > H || I(a, c, b, f, r, v, k, A) < H)) {
                    var e = .5, d = 1 - e, n;
                    for (n =
                             I(a, c, b, f, r, v, k, A, d); .01 < Ha(n - H);)e /= 2, d += (n < H ? 1 : -1) * e, n = I(a, c, b, f, r, v, k, A, d);
                    return d
                }
            }

            function z(a, b, f) {
                a = c._path2curve(a);
                b = c._path2curve(b);
                for (var r, v, k, A, H, e, d, n, g, B, W = f ? 0 : [], h = 0, q = a.length; h < q; h++)if (g = a[h], "M" == g[0])r = H = g[1], v = e = g[2]; else {
                    "C" == g[0] ? (g = [r, v].concat(g.slice(1)), r = g[6], v = g[7]) : (g = [r, v, r, v, H, e, H, e], r = H, v = e);
                    for (var ba = 0, E = b.length; ba < E; ba++)if (B = b[ba], "M" == B[0])k = d = B[1], A = n = B[2]; else {
                        "C" == B[0] ? (B = [k, A].concat(B.slice(1)), k = B[6], A = B[7]) : (B = [k, A, k, A, d, n, d, n], k = d, A = n);
                        var J;
                        var Q =
                            g, u = B;
                        J = f;
                        var m = c.bezierBBox(Q), p = c.bezierBBox(u);
                        if (c.isBBoxIntersect(m, p)) {
                            for (var m = I.apply(0, Q), p = I.apply(0, u), m = L(~~(m / 5), 1), p = L(~~(p / 5), 1), P = [], t = [], ua = {}, s = J ? 0 : [], S = 0; S < m + 1; S++) {
                                var pb = c.findDotsAtSegment.apply(c, Q.concat(S / m));
                                P.push({x: pb.x, y: pb.y, t: S / m})
                            }
                            for (S = 0; S < p + 1; S++)pb = c.findDotsAtSegment.apply(c, u.concat(S / p)), t.push({
                                x: pb.x,
                                y: pb.y,
                                t: S / p
                            });
                            for (S = 0; S < m; S++)for (Q = 0; Q < p; Q++) {
                                var mb = P[S], ya = P[S + 1], u = t[Q], pb = t[Q + 1], l = .001 > Ha(ya.x - mb.x) ? "y" : "x", z = .001 > Ha(pb.x - u.x) ? "y" : "x", R;
                                R = mb.x;
                                var ta =
                                    mb.y, ac = ya.x, tc = ya.y, G = u.x, uc = u.y, C = pb.x, qa = pb.y;
                                if (L(R, ac) < T(G, C) || T(R, ac) > L(G, C) || L(ta, tc) < T(uc, qa) || T(ta, tc) > L(uc, qa))R = void 0; else {
                                    var Y = (R * tc - ta * ac) * (G - C) - (R - ac) * (G * qa - uc * C), Gc = (R * tc - ta * ac) * (uc - qa) - (ta - tc) * (G * qa - uc * C), ga = (R - ac) * (uc - qa) - (ta - tc) * (G - C);
                                    if (ga) {
                                        var Y = Y / ga, Gc = Gc / ga, ga = +Y.toFixed(2), $ = +Gc.toFixed(2);
                                        R = ga < +T(R, ac).toFixed(2) || ga > +L(R, ac).toFixed(2) || ga < +T(G, C).toFixed(2) || ga > +L(G, C).toFixed(2) || $ < +T(ta, tc).toFixed(2) || $ > +L(ta, tc).toFixed(2) || $ < +T(uc, qa).toFixed(2) || $ > +L(uc, qa).toFixed(2) ?
                                            void 0 : {x: Y, y: Gc}
                                    } else R = void 0
                                }
                                R && ua[R.x.toFixed(4)] != R.y.toFixed(4) && (ua[R.x.toFixed(4)] = R.y.toFixed(4), mb = mb.t + Ha((R[l] - mb[l]) / (ya[l] - mb[l])) * (ya.t - mb.t), u = u.t + Ha((R[z] - u[z]) / (pb[z] - u[z])) * (pb.t - u.t), 0 <= mb && 1.001 >= mb && 0 <= u && 1.001 >= u && (J ? s++ : s.push({
                                    x: R.x,
                                    y: R.y,
                                    t1: T(mb, 1),
                                    t2: T(u, 1)
                                })))
                            }
                            J = s
                        } else J = J ? 0 : [];
                        if (f)W += J; else {
                            m = 0;
                            for (p = J.length; m < p; m++)J[m].segment1 = h, J[m].segment2 = ba, J[m].bez1 = g, J[m].bez2 = B;
                            W = W.concat(J)
                        }
                    }
                }
                return W
            }

            function F(a, c, b, f, r, v) {
                null != a ? (this.a = +a, this.b = +c, this.c = +b, this.d = +f, this.e = +r, this.f = +v) : (this.a = 1, this.c = this.b = 0, this.d = 1, this.f = this.e = 0)
            }

            function K() {
                return this.x + " " + this.y + " " + this.width + " × " + this.height
            }

            function s(a, c, b, f, r, v) {
                function k(a, c) {
                    var b, Oa, f, r;
                    f = a;
                    for (Oa = 0; 8 > Oa; Oa++) {
                        r = ((e * f + H) * f + A) * f - a;
                        if (Ha(r) < c)return f;
                        b = (3 * e * f + 2 * H) * f + A;
                        if (1E-6 > Ha(b))break;
                        f -= r / b
                    }
                    b = 0;
                    Oa = 1;
                    f = a;
                    if (f < b)return b;
                    if (f > Oa)return Oa;
                    for (; b < Oa;) {
                        r = ((e * f + H) * f + A) * f;
                        if (Ha(r - a) < c)break;
                        a > r ? b = f : Oa = f;
                        f = (Oa - b) / 2 + b
                    }
                    return f
                }

                var A = 3 * c, H = 3 * (f - c) - A, e = 1 - A - H, d = 3 * b, n = 3 * (r - b) - d, g = 1 - d - n;
                return function (a,
                                 c) {
                    var b = k(a, c);
                    return ((g * b + n) * b + d) * b
                }(a, 1 / (200 * v))
            }

            function g(a, c) {
                var b = [], f = {};
                this.ms = c;
                this.times = 1;
                if (a) {
                    for (var r in a)a.hasOwnProperty(r) && (f[fa(r)] = a[r], b.push(fa(r)));
                    b.sort(B)
                }
                this.anim = f;
                this.top = b[b.length - 1];
                this.percents = b
            }

            function e(a, b, f, r, v, A) {
                f = fa(f);
                var e, d, n, g, B, h, q = a.ms, ba = {}, E = {}, J = {};
                if (r)for (h = 0, m = Ma.length; h < m; h++) {
                    var u = Ma[h];
                    if (u.el.id == b.id && u.anim == a) {
                        u.percent != f ? (Ma.splice(h, 1), n = 1) : d = u;
                        b.attr(u.totalOrigin);
                        break
                    }
                } else r = +E;
                h = 0;
                for (var m = a.percents.length; h < m; h++)if (a.percents[h] ==
                    f || a.percents[h] > r * a.top) {
                    f = a.percents[h];
                    B = a.percents[h - 1] || 0;
                    q = q / a.top * (f - B);
                    g = a.percents[h + 1];
                    e = a.anim[f];
                    break
                } else r && b.attr(a.anim[a.percents[h]]);
                if (e) {
                    if (d)d.initstatus = r, d.start = new Date - d.ms * r; else {
                        for (var Q in e)if (e.hasOwnProperty(Q) && (k.hasOwnProperty(Q) || b.ca[Q]))switch (ba[Q] = b.attr(Q), null == ba[Q] && (ba[Q] = cb[Q]), E[Q] = e[Q], k[Q]) {
                            case C:
                                J[Q] = (E[Q] - ba[Q]) / q;
                                break;
                            case "colour":
                                ba[Q] = c.getRGB(ba[Q]);
                                h = c.getRGB(E[Q]);
                                J[Q] = {r: (h.r - ba[Q].r) / q, g: (h.g - ba[Q].g) / q, b: (h.b - ba[Q].b) / q};
                                break;
                            case "path":
                                h =
                                    H(ba[Q], E[Q]);
                                u = h[1];
                                ba[Q] = h[0];
                                J[Q] = [];
                                h = 0;
                                for (m = ba[Q].length; h < m; h++) {
                                    J[Q][h] = [0];
                                    for (var L = 1, P = ba[Q][h].length; L < P; L++)J[Q][h][L] = (u[h][L] - ba[Q][h][L]) / q
                                }
                                break;
                            case "transform":
                                h = b._;
                                if (m = tc(h[Q], E[Q]))for (ba[Q] = m.from, E[Q] = m.to, J[Q] = [], J[Q].real = !0, h = 0, m = ba[Q].length; h < m; h++)for (J[Q][h] = [ba[Q][h][0]], L = 1, P = ba[Q][h].length; L < P; L++)J[Q][h][L] = (E[Q][h][L] - ba[Q][h][L]) / q; else m = b.matrix || new F, h = {
                                    _: {transform: h.transform},
                                    getBBox: function () {
                                        return b.getBBox(1)
                                    }
                                }, ba[Q] = [m.a, m.b, m.c, m.d, m.e, m.f], W(h,
                                    E[Q]), E[Q] = h._.transform, J[Q] = [(h.matrix.a - m.a) / q, (h.matrix.b - m.b) / q, (h.matrix.c - m.c) / q, (h.matrix.d - m.d) / q, (h.matrix.e - m.e) / q, (h.matrix.f - m.f) / q];
                                break;
                            case "csv":
                                m = G(e[Q]).split(xa);
                                u = G(ba[Q]).split(xa);
                                if ("clip-rect" == Q)for (ba[Q] = u, J[Q] = [], h = u.length; h--;)J[Q][h] = (m[h] - ba[Q][h]) / q;
                                E[Q] = m;
                                break;
                            default:
                                for (m = [].concat(e[Q]), u = [].concat(ba[Q]), J[Q] = [], h = b.ca[Q].length; h--;)J[Q][h] = ((m[h] || 0) - (u[h] || 0)) / q
                        }
                        h = e.easing;
                        Q = c.easing_formulas[h];
                        if (!Q)if ((Q = G(h).match(La)) && 5 == Q.length) {
                            var t = Q;
                            Q = function (a) {
                                return s(a,
                                    +t[1], +t[2], +t[3], +t[4], q)
                            }
                        } else Q = R;
                        h = e.start || a.start || +new Date;
                        u = {
                            anim: a,
                            percent: f,
                            timestamp: h,
                            start: h + (a.del || 0),
                            status: 0,
                            initstatus: r || 0,
                            stop: !1,
                            ms: q,
                            easing: Q,
                            from: ba,
                            diff: J,
                            to: E,
                            el: b,
                            callback: e.callback,
                            prev: B,
                            next: g,
                            repeat: A || a.times,
                            origin: b.attr(),
                            totalOrigin: v
                        };
                        Ma.push(u);
                        if (r && !d && !n && (u.stop = !0, u.start = new Date - q * r, 1 == Ma.length))return Wc();
                        n && (u.start = new Date - u.ms * r);
                        1 == Ma.length && cd(Wc)
                    }
                    p("raphael.anim.start." + b.id, b, a)
                }
            }

            function h(a) {
                for (var c = 0; c < Ma.length; c++)Ma[c].el.paper == a &&
                Ma.splice(c--, 1)
            }

            c.upgrade = "1.0.0";
            c.version = "2.1.0";
            c.eve = p;
            D = c;
            var m, M = "apply", C = "number", q = "array", Y = Array.prototype.slice, u = Array.prototype.splice, ea = function () {
                return function () {
                }.hasOwnProperty("prototype")
            }(), t = {
                doc: document,
                win: d
            }, V = Object.prototype.hasOwnProperty.call(t.win, "Raphael"), X = t.win.Raphael, ia = t.doc, Ba = t.win, qa = c.supportsTouch = "createTouch" in ia, da = function () {
            };
            c.ca = c.customAttributes = da.prototype;
            var ka = function () {
                    this.ca = this.customAttributes = new da;
                    this._CustomAttributes = function () {
                    };
                    this._CustomAttributes.prototype = this.ca;
                    this._elementsById = {};
                    this.id = c._oid++;
                    p("raphael.new", this)
                }, aa = c.fn = ka.prototype = c.prototype, Z = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1,
                    group: 1
                }, ca = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel".split(" "), S = c._touchMap = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                }, G = Ba.String, fa = Ba.parseFloat, n = Ba.parseInt, E = Ba.Math, L = E.max, T = E.min, Ha = E.abs, Ja = E.pow, Ca = E.cos, ma = E.sin,
                Da = E.sqrt, Ga = E.round, U = E.PI, ra = U / 180, za = 180 / U, Na = G.prototype.toLowerCase, Ea = G.prototype.toUpperCase, Za = Ba.Object.prototype.toString, xa = /[, ]+/, lb = /\{(\d+)\}/g;
            c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i;
            var Aa = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
                La = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, nb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, Hb = /,?([achlmqrstvxz]),?/gi, ub = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
                Qb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, xb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;
            c._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/;
            var Ua = {NaN: 1, Infinity: 1, "-Infinity": 1}, eb = {hs: 1, rg: 1}, cb = c._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                "clip-path": "",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "about:blank",
                "letter-spacing": 0,
                "line-height": 12,
                "vertical-align": "middle",
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                visibility: "",
                title: "",
                transform: "",
                rotation: 0,
                width: 0,
                x: 0,
                y: 0
            }, k = c._availableAnimAttrs = {
                blur: C,
                "clip-rect": "csv",
                "clip-path": "path",
                cx: C,
                cy: C,
                fill: "colour",
                "fill-opacity": C,
                "font-size": C,
                height: C,
                opacity: C,
                path: "path",
                r: C,
                rx: C,
                ry: C,
                stroke: "colour",
                "stroke-opacity": C,
                "stroke-width": C,
                transform: "transform",
                width: C,
                x: C,
                y: C
            }, J = {}, B = function (a, c) {
                return fa(a) - fa(c)
            }, P = function () {
            }, R = function (a) {
                return a
            }, ga = c._rectPath = function (a, c, b, f, r) {
                return r ? [["M", a + r, c], ["l", b - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, f - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - b, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - f], ["a", r, r, 0, 0, 1, r, -r], ["z"]] : [["M", a, c], ["l", b, 0], ["l", 0, f], ["l", -b, 0], ["z"]]
            }, $ = function (a, c, b, f) {
                null == f && (f = b);
                return [["M", a, c], ["m", 0, -f], ["a", b, f, 0, 1, 1, 0, 2 * f], ["a", b, f, 0, 1, 1, 0, -2 * f], ["z"]]
            }, sa = c._getPath = {
                group: function () {
                    return !1
                },
                path: function (a) {
                    return a.attr("path")
                }, circle: function (a) {
                    a = a.attrs;
                    return $(a.cx, a.cy, a.r)
                }, ellipse: function (a) {
                    a = a.attrs;
                    return $(a.cx, a.cy, a.rx, a.ry)
                }, rect: function (a) {
                    a = a.attrs;
                    return ga(a.x, a.y, a.width, a.height, a.r)
                }, image: function (a) {
                    a = a.attrs;
                    return ga(a.x, a.y, a.width, a.height)
                }, text: function (a) {
                    a = a._getBBox();
                    return ga(a.x, a.y, a.width, a.height)
                }
            }, ha = c.mapPath = function (a, c) {
                if (!c)return a;
                var b, f, r, v, k, A, e;
                a = H(a);
                r = 0;
                for (k = a.length; r < k; r++)for (e = a[r], v = 1, A = e.length; v < A; v += 2)b = c.x(e[v], e[v +
                1]), f = c.y(e[v], e[v + 1]), e[v] = b, e[v + 1] = f;
                return a
            };
            c.pick = function () {
                for (var a, c = 0, b = arguments.length; c < b; c += 1)if ((a = arguments[c]) || !1 === a || 0 === a)return a
            };
            var na = c._lastArgIfGroup = function (a, b) {
                var f = a.length - 1, r = a[f];
                if (r && r.constructor === c.el.constructor && "group" === r.type)return b && (a[f] = void 0, delete a[f], u.call(a, f, 1)), r
            }, Qa = c._serializeArgs = function (a) {
                var b = a[0], f, r;
                if (c.is(b, "object") && !c.is(b, "array") && "group" !== b.type)for (f = b, b.path && (b = b.path) && !c.is(b, "string") && c.is(b[0], q), b = 1, r = arguments.length; b <
                r; b += 2)f[arguments[b]] || (f[arguments[b]] = arguments[b + 1]); else for (f = {}, b = 1, r = arguments.length; b < r; b += 2)f[arguments[b]] = a[(b - 1) / 2] || arguments[b + 1];
                return f
            }, pa = c.merge = function (a, c, b, f, r) {
                var v, k, A, H;
                r ? (f.push(a), r.push(c)) : (f = [a], r = [c]);
                if (c instanceof Array)for (v = 0; v < c.length; v += 1) {
                    try {
                        k = a[v], A = c[v]
                    } catch (e) {
                        continue
                    }
                    if ("object" !== typeof A)b && void 0 === A || (a[v] = A); else {
                        if (null === k || "object" !== typeof k)k = a[v] = A instanceof Array ? [] : {};
                        H = checkCyclicRef(A, r);
                        -1 !== H ? k = a[v] = f[H] : pa(k, A, b, f, r)
                    }
                } else for (v in c) {
                    try {
                        k =
                            a[v], A = c[v]
                    } catch (d) {
                        continue
                    }
                    if (null !== A && "object" === typeof A)if (H = Za.call(A), "[object Object]" === H) {
                        if (null === k || "object" !== typeof k)k = a[v] = {};
                        H = checkCyclicRef(A, r);
                        -1 !== H ? k = a[v] = f[H] : pa(k, A, b, f, r)
                    } else"[object Array]" === H ? (null !== k && k instanceof Array || (k = a[v] = []), H = checkCyclicRef(A, r), -1 !== H ? k = a[v] = f[H] : pa(k, A, b, f, r)) : a[v] = A; else a[v] = A
                }
                return a
            };
            c.extend = function (a, c, b) {
                if ("object" !== typeof a && "object" !== typeof c)return null;
                if ("object" !== typeof c || null === c)return a;
                "object" !== typeof a && (a = c instanceof Array ? [] : {});
                pa(a, c, b);
                return a
            };
            var O = c.is = function (a, c) {
                c = Na.call(c);
                return "finite" == c ? !Ua.hasOwnProperty(+a) : c == q ? a instanceof Array : "object" !== c || void 0 !== a && null !== a ? "null" == c && null === a || c == typeof a && null !== a || "object" == c && a === Object(a) || "array" == c && Array.isArray && Array.isArray(a) || Za.call(a).slice(8, -1).toLowerCase() == c : !1
            };
            c.createUUID = function (a, c) {
                return function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, c).toUpperCase()
                }
            }(/[xy]/g, function (a) {
                var c = 16 * E.random() | 0;
                return ("x" ==
                a ? c : c & 3 | 8).toString(16)
            });
            var tb = c.clone = ea ? function (a) {
                if (Object(a) !== a)return a;
                var c = new a.constructor, b;
                for (b in a)"prototype" !== b && a.hasOwnProperty(b) && (c[b] = tb(a[b]));
                return c
            } : function (a) {
                if (Object(a) !== a)return a;
                var c = new a.constructor, b;
                for (b in a)a.hasOwnProperty(b) && (c[b] = tb(a[b]));
                return c
            };
            c._g = t;
            c.type = Ba.ENABLE_RED_CANVAS && (Ba.CanvasRenderingContext2D || ia.createElement("canvas").getContext) ? "CANVAS" : Ba.SVGAngle || ia.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
                "1.1") ? "SVG" : "VML";
            if ("VML" == c.type) {
                var bb = ia.createElement("div"), wa;
                bb.innerHTML = '<v:shape adj="1"/>';
                wa = bb.firstChild;
                wa.style.behavior = "url(#default#VML)";
                if (!wa || "object" != typeof wa.adj)return c.type = "";
                bb = null
            }
            c.svg = !((c.vml = "VML" == c.type) || (c.canvas = "CANVAS" == c.type));
            c._Paper = ka;
            c._id = 0;
            c._oid = 0;
            c.angle = function (a, b, f, r, v, k) {
                return null == v ? (a -= f, b -= r, a || b ? (E.atan2(-b, -a) * za + 540) % 360 : 0) : c.angle(a, b, v, k) - c.angle(f, r, v, k)
            };
            c.rad = function (a) {
                return a % 360 * ra
            };
            c.deg = function (a) {
                return a * za % 360
            };
            c.snapTo = function (a, c, b) {
                var f;
                O(b, "finite") || (b = 10);
                if (O(a, q))for (f = a.length; f--;) {
                    if (Ha(a[f] - c) <= b)return a[f]
                } else {
                    a = +a;
                    f = c % a;
                    if (f < b)return c - f;
                    if (f > a - b)return c - f + a
                }
                return c
            };
            c.setWindow = function (a) {
                p("raphael.setWindow", c, t.win, a);
                Ba = t.win = a;
                ia = t.doc = t.win.document;
                c._engine.initWin && c._engine.initWin(t.win)
            };
            var Fa = function (a) {
                if (c.vml) {
                    var b = /^\s+|\s+$/g, f;
                    try {
                        var r = new ActiveXObject("htmlfile");
                        r.write("<body>");
                        r.close();
                        f = r.body
                    } catch (v) {
                        f = createPopup().document.body
                    }
                    var k = f.createTextRange();
                    Fa = Ya(function (a) {
                        try {
                            f.style.color = G(a).replace(b, "");
                            var c = k.queryCommandValue("ForeColor");
                            return "#" + ("000000" + ((c & 255) << 16 | c & 65280 | (c & 16711680) >>> 16).toString(16)).slice(-6)
                        } catch (r) {
                            return "none"
                        }
                    })
                } else {
                    var A = t.doc.createElement("i");
                    A.title = "Raphaël Colour Picker";
                    A.style.display = "none";
                    t.doc.body.appendChild(A);
                    Fa = Ya(function (a) {
                        A.style.color = a;
                        return t.doc.defaultView.getComputedStyle(A, "").getPropertyValue("color")
                    })
                }
                return Fa(a)
            }, Lb = function () {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            }, yb =
                function () {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                }, ja = function () {
                return this.hex
            }, la = function (a, b, f) {
                null == b && O(a, "object") && "r" in a && "g" in a && "b" in a && (f = a.b, b = a.g, a = a.r);
                null == b && O(a, "string") && (f = c.getRGB(a), a = f.r, b = f.g, f = f.b);
                if (1 < a || 1 < b || 1 < f)a /= 255, b /= 255, f /= 255;
                return [a, b, f]
            }, zb = function (a, b, f, r) {
                var v = {r: a *= 255, g: b *= 255, b: f *= 255, hex: c.rgb(a, b, f), toString: ja};
                O(r, "finite") && (v.opacity = r);
                return v
            };
            c.color = function (a) {
                var b;
                c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r,
                    a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {hex: "none"}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1));
                a.toString = ja;
                return a
            };
            c.hsb2rgb = function (a, c, b, f) {
                this.is(a, "object") && "h" in a && "s" in a && "b" in a && (b = a.b, c = a.s, a = a.h, f = a.o);
                var r, v, k;
                a = 360 * a % 360 / 60;
                k = b * c;
                c = k * (1 - Ha(a % 2 - 1));
                b = r = v = b -
                    k;
                a = ~~a;
                b += [k, c, 0, 0, c, k][a];
                r += [c, k, k, c, 0, 0][a];
                v += [0, 0, c, k, k, c][a];
                return zb(b, r, v, f)
            };
            c.hsl2rgb = function (a, c, b, f) {
                this.is(a, "object") && "h" in a && "s" in a && "l" in a && (b = a.l, c = a.s, a = a.h);
                if (1 < a || 1 < c || 1 < b)a /= 360, c /= 100, b /= 100;
                var r, v, k;
                a = 360 * a % 360 / 60;
                k = 2 * c * (.5 > b ? b : 1 - b);
                c = k * (1 - Ha(a % 2 - 1));
                b = r = v = b - k / 2;
                a = ~~a;
                b += [k, c, 0, 0, c, k][a];
                r += [c, k, k, c, 0, 0][a];
                v += [0, 0, c, k, k, c][a];
                return zb(b, r, v, f)
            };
            c.rgb2hsb = function (a, c, b) {
                b = la(a, c, b);
                a = b[0];
                c = b[1];
                b = b[2];
                var f, r;
                f = L(a, c, b);
                r = f - T(a, c, b);
                a = ((0 == r ? null : f == a ? (c - b) / r : f ==
                    c ? (b - a) / r + 2 : (a - c) / r + 4) + 360) % 6 * 60 / 360;
                return {h: a, s: 0 == r ? 0 : r / f, b: f, toString: Lb}
            };
            c.rgb2hsl = function (a, c, b) {
                b = la(a, c, b);
                a = b[0];
                c = b[1];
                b = b[2];
                var f, r, v;
                f = L(a, c, b);
                r = T(a, c, b);
                v = f - r;
                a = ((0 == v ? null : f == a ? (c - b) / v : f == c ? (b - a) / v + 2 : (a - c) / v + 4) + 360) % 6 * 60 / 360;
                f = (f + r) / 2;
                return {h: a, s: 0 == v ? 0 : .5 > f ? v / (2 * f) : v / (2 - 2 * f), l: f, toString: yb}
            };
            c._path2string = function () {
                return this.join(",").replace(Hb, "$1")
            };
            var Ya = c._cacher = function (a, c, b) {
                function f() {
                    var r = Y.call(arguments, 0), v = r.join("␀"), k = f.cache = f.cache || {}, A = f.count = f.count ||
                        [];
                    if (k.hasOwnProperty(v)) {
                        a:for (var r = A, A = v, H = 0, e = r.length; H < e; H++)if (r[H] === A) {
                            r.push(r.splice(H, 1)[0]);
                            break a
                        }
                        return b ? b(k[v]) : k[v]
                    }
                    1E3 <= A.length && delete k[A.shift()];
                    A.push(v);
                    k[v] = a[M](c, r);
                    return b ? b(k[v]) : k[v]
                }

                return f
            };
            c._preload = function (a, c) {
                var b = ia.createElement("img");
                b.style.cssText = "position:absolute;left:-9999em;top:-9999em";
                b.onload = function () {
                    c.call(this);
                    this.onload = null;
                    ia.body.removeChild(this)
                };
                b.onerror = function () {
                    ia.body.removeChild(this)
                };
                ia.body.appendChild(b);
                b.src = a
            };
            c.getRGB = Ya(function (a) {
                var b, f, r, v, k;
                a && O(a, "object") && "opacity" in a && (b = a.opacity);
                if (!a || (a = G(a)).indexOf("-") + 1)return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: l};
                if ("none" == a)return {r: -1, g: -1, b: -1, hex: "none", toString: l};
                !eb.hasOwnProperty(a.toLowerCase().substring(0, 2)) && "#" !== a.charAt() && (a = Fa(a));
                if (a = a.match(Aa)) {
                    a[2] && (v = n(a[2].substring(5), 16), r = n(a[2].substring(3, 5), 16), f = n(a[2].substring(1, 3), 16));
                    a[3] && (v = n((k = a[3].charAt(3)) + k, 16), r = n((k = a[3].charAt(2)) + k, 16), f = n((k = a[3].charAt(1)) +
                        k, 16));
                    a[4] && (k = a[4].split(nb), f = fa(k[0]), "%" == k[0].slice(-1) && (f *= 2.55), r = fa(k[1]), "%" == k[1].slice(-1) && (r *= 2.55), v = fa(k[2]), "%" == k[2].slice(-1) && (v *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (b = fa(k[3])), k[3] && "%" == k[3].slice(-1) && (b /= 100));
                    if (a[5])return k = a[5].split(nb), f = fa(k[0]), "%" == k[0].slice(-1) && (f *= 2.55), r = fa(k[1]), "%" == k[1].slice(-1) && (r *= 2.55), v = fa(k[2]), "%" == k[2].slice(-1) && (v *= 2.55), "deg" != k[0].slice(-3) && "°" != k[0].slice(-1) || (f /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (b = fa(k[3])),
                    k[3] && "%" == k[3].slice(-1) && (b /= 100), c.hsb2rgb(f, r, v, b);
                    if (a[6])return k = a[6].split(nb), f = fa(k[0]), "%" == k[0].slice(-1) && (f *= 2.55), r = fa(k[1]), "%" == k[1].slice(-1) && (r *= 2.55), v = fa(k[2]), "%" == k[2].slice(-1) && (v *= 2.55), "deg" != k[0].slice(-3) && "°" != k[0].slice(-1) || (f /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (b = fa(k[3])), k[3] && "%" == k[3].slice(-1) && (b /= 100), c.hsl2rgb(f, r, v, b);
                    a = {r: f, g: r, b: v, toString: l};
                    a.hex = "#" + (16777216 | v | r << 8 | f << 16).toString(16).slice(1);
                    c.is(b, "finite") && (a.opacity = b);
                    return a
                }
                return {
                    r: -1,
                    g: -1, b: -1, hex: "none", error: 1, toString: l
                }
            }, c);
            c.tintshade = Ya(function (a, b) {
                var f = c.getRGB(a), r;
                r = 255;
                0 > b && (b *= -1, r = 0);
                1 < b && (b = 1);
                r = 0 === b ? f : {r: r - (r - f.r) * b, g: r - (r - f.g) * b, b: r - (r - f.b) * b, toString: l};
                r.hex = c.rgb(r.r, r.g, r.b);
                f.error && (r.error = f.error);
                "opacity" in f ? (r.rgba = "rgba(" + [r.r, r.g, r.b, f.opacity].join() + ")", r.opacity = f.opacity) : r.rgba = "rgb(" + [r.r, r.g, r.b].join() + ")";
                return r
            }, c);
            c.hsb = Ya(function (a, b, f) {
                return c.hsb2rgb(a, b, f).hex
            });
            c.hsl = Ya(function (a, b, f) {
                return c.hsl2rgb(a, b, f).hex
            });
            c.rgb = Ya(function (a,
                                 c, b) {
                return "#" + (16777216 | b | c << 8 | a << 16).toString(16).slice(1)
            });
            c.getColor = function (a) {
                a = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: a || .75};
                var c = this.hsb2rgb(a.h, a.s, a.b);
                a.h += .075;
                1 < a.h && (a.h = 0, a.s -= .2, 0 >= a.s && (this.getColor.start = {h: 0, s: 1, b: a.b}));
                return c.hex
            };
            c.getColor.reset = function () {
                delete this.start
            };
            c.parsePathString = function (a) {
                if (!a)return null;
                var b = wb(a);
                if (b.arr)return Ta(b.arr);
                var f = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, r = [];
                c.is(a, q) && c.is(a[0], q) && (r = Ta(a));
                r.length ||
                G(a).replace(ub, function (a, c, b) {
                    var v = [];
                    a = c.toLowerCase();
                    b.replace(xb, function (a, c) {
                        c && v.push(+c)
                    });
                    "m" == a && 2 < v.length && (r.push([c].concat(v.splice(0, 2))), a = "l", c = "m" == c ? "l" : "L");
                    if ("r" == a)r.push([c].concat(v)); else for (; v.length >= f[a] && (r.push([c].concat(v.splice(0, f[a]))), f[a]););
                });
                r.toString = c._path2string;
                b.arr = Ta(r);
                return r
            };
            c.parseTransformString = Ya(function (a) {
                if (!a)return null;
                var b = [];
                c.is(a, q) && c.is(a[0], q) && (b = Ta(a));
                b.length || G(a).replace(Qb, function (a, c, f) {
                    var r = [];
                    Na.call(c);
                    f.replace(xb,
                        function (a, c) {
                            c && r.push(+c)
                        });
                    b.push([c].concat(r))
                });
                b.toString = c._path2string;
                return b
            });
            var wb = function (a) {
                var c = wb.ps = wb.ps || {};
                c[a] ? c[a].sleep = 100 : c[a] = {sleep: 100};
                setTimeout(function () {
                    for (var b in c)c.hasOwnProperty(b) && b != a && (c[b].sleep--, !c[b].sleep && delete c[b])
                });
                return c[a]
            };
            c.findDotsAtSegment = function (a, c, b, f, r, v, k, A, H) {
                var e = 1 - H, d = Ja(e, 3), n = Ja(e, 2), g = H * H, h = g * H, B = d * a + 3 * n * H * b + 3 * e * H * H * r + h * k, d = d * c + 3 * n * H * f + 3 * e * H * H * v + h * A, n = a + 2 * H * (b - a) + g * (r - 2 * b + a), h = c + 2 * H * (f - c) + g * (v - 2 * f + c), W = b + 2 * H * (r - b) + g *
                    (k - 2 * r + b), g = f + 2 * H * (v - f) + g * (A - 2 * v + f);
                a = e * a + H * b;
                c = e * c + H * f;
                r = e * r + H * k;
                v = e * v + H * A;
                A = 90 - 180 * E.atan2(n - W, h - g) / U;
                (n > W || h < g) && (A += 180);
                return {x: B, y: d, m: {x: n, y: h}, n: {x: W, y: g}, start: {x: a, y: c}, end: {x: r, y: v}, alpha: A}
            };
            c.bezierBBox = function (a, b, f, r, v, k, H, e) {
                c.is(a, "array") || (a = [a, b, f, r, v, k, H, e]);
                a = A.apply(null, a);
                return {
                    x: a.min.x,
                    y: a.min.y,
                    x2: a.max.x,
                    y2: a.max.y,
                    width: a.max.x - a.min.x,
                    height: a.max.y - a.min.y
                }
            };
            c.isPointInsideBBox = function (a, c, b) {
                return c >= a.x && c <= a.x2 && b >= a.y && b <= a.y2
            };
            c.isBBoxIntersect = function (a,
                                          b) {
                var f = c.isPointInsideBBox;
                return f(b, a.x, a.y) || f(b, a.x2, a.y) || f(b, a.x, a.y2) || f(b, a.x2, a.y2) || f(a, b.x, b.y) || f(a, b.x2, b.y) || f(a, b.x, b.y2) || f(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
            };
            c.pathIntersection = function (a, c) {
                return z(a, c)
            };
            c.pathIntersectionNumber = function (a, c) {
                return z(a, c, 1)
            };
            c.isPointInsidePath = function (a, b, f) {
                var r = c.pathBBox(a);
                return c.isPointInsideBBox(r, b, f) && (1 == z(a, [["M", b, f], ["H", r.x2 + 10]], 1) % 2 || 1 == z(a, [["M", b, f], ["V", r.y2 + 10]],
                        1) % 2)
            };
            c._removedFactory = function (a) {
                return function () {
                    p("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
                }
            };
            var Tb = c.pathBBox = function (a) {
                    var c = wb(a);
                    if (c.bbox)return c.bbox;
                    if (!a)return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
                    a = H(a);
                    for (var b = 0, f = 0, r = [], v = [], k, e = 0, d = a.length; e < d; e++)k = a[e], "M" == k[0] ? (b = k[1], f = k[2], r.push(b), v.push(f)) : (b = A(b, f, k[1], k[2], k[3], k[4], k[5], k[6]), r = r.concat(b.min.x, b.max.x), v = v.concat(b.min.y, b.max.y), b = k[5], f = k[6]);
                    a = T[M](0, r);
                    k = T[M](0,
                        v);
                    r = L[M](0, r);
                    v = L[M](0, v);
                    v = {x: a, y: k, x2: r, y2: v, width: r - a, height: v - k};
                    c.bbox = tb(v);
                    return v
                }, Ta = function (a) {
                    a = tb(a);
                    a.toString = c._path2string;
                    return a
                }, $b = c._pathToRelative = function (a) {
                    var b = wb(a);
                    if (b.rel)return Ta(b.rel);
                    c.is(a, q) && c.is(a && a[0], q) || (a = c.parsePathString(a));
                    var f = [], r = 0, v = 0, k = 0, A = 0, H = 0;
                    "M" == a[0][0] && (r = a[0][1], v = a[0][2], k = r, A = v, H++, f.push(["M", r, v]));
                    for (var e = a.length; H < e; H++) {
                        var d = f[H] = [], n = a[H];
                        if (n[0] != Na.call(n[0]))switch (d[0] = Na.call(n[0]), d[0]) {
                            case "a":
                                d[1] = n[1];
                                d[2] = n[2];
                                d[3] = n[3];
                                d[4] = n[4];
                                d[5] = n[5];
                                d[6] = +(n[6] - r).toFixed(3);
                                d[7] = +(n[7] - v).toFixed(3);
                                break;
                            case "v":
                                d[1] = +(n[1] - v).toFixed(3);
                                break;
                            case "m":
                                k = n[1], A = n[2];
                            default:
                                for (var g = 1, h = n.length; g < h; g++)d[g] = +(n[g] - (g % 2 ? r : v)).toFixed(3)
                        } else for (f[H] = [], "m" == n[0] && (k = n[1] + r, A = n[2] + v), d = 0, g = n.length; d < g; d++)f[H][d] = n[d];
                        n = f[H].length;
                        switch (f[H][0]) {
                            case "z":
                                r = k;
                                v = A;
                                break;
                            case "h":
                                r += +f[H][n - 1];
                                break;
                            case "v":
                                v += +f[H][n - 1];
                                break;
                            default:
                                r += +f[H][n - 2], v += +f[H][n - 1]
                        }
                    }
                    f.toString = c._path2string;
                    b.rel = Ta(f);
                    return f
                },
                Pb = c._pathToAbsolute = function (a) {
                    var f = wb(a), r;
                    if (f.abs)return Ta(f.abs);
                    c.is(a, q) && c.is(a && a[0], q) || (a = c.parsePathString(a));
                    if (!a || !a.length)return r = ["M", 0, 0], r.toString = c._path2string, r;
                    var v = 0, k = 0, A = 0, H = 0, e = 0;
                    r = [];
                    "M" == a[0][0] && (v = +a[0][1], k = +a[0][2], A = v, H = k, e++, r[0] = ["M", v, k]);
                    for (var d = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n, g = e, h = a.length; g < h; g++) {
                        r.push(e = []);
                        n = a[g];
                        if (n[0] != Ea.call(n[0]))switch (e[0] = Ea.call(n[0]), e[0]) {
                            case "A":
                                e[1] = n[1];
                                e[2] =
                                    n[2];
                                e[3] = n[3];
                                e[4] = n[4];
                                e[5] = n[5];
                                e[6] = +(n[6] + v);
                                e[7] = +(n[7] + k);
                                break;
                            case "V":
                                e[1] = +n[1] + k;
                                break;
                            case "H":
                                e[1] = +n[1] + v;
                                break;
                            case "R":
                                for (var B = [v, k].concat(n.slice(1)), W = 2, ba = B.length; W < ba; W++)B[W] = +B[W] + v, B[++W] = +B[W] + k;
                                r.pop();
                                r = r.concat(b(B, d));
                                break;
                            case "M":
                                A = +n[1] + v, H = +n[2] + k;
                            default:
                                for (W = 1, ba = n.length; W < ba; W++)e[W] = +n[W] + (W % 2 ? v : k)
                        } else if ("R" == n[0])B = [v, k].concat(n.slice(1)), r.pop(), r = r.concat(b(B, d)), e = ["R"].concat(n.slice(-2)); else for (B = 0, W = n.length; B < W; B++)e[B] = n[B];
                        switch (e[0]) {
                            case "Z":
                                v =
                                    A;
                                k = H;
                                break;
                            case "H":
                                v = e[1];
                                break;
                            case "V":
                                k = e[1];
                                break;
                            case "M":
                                A = e[e.length - 2], H = e[e.length - 1];
                            default:
                                v = e[e.length - 2], k = e[e.length - 1]
                        }
                    }
                    r.toString = c._path2string;
                    f.abs = Ta(r);
                    return r
                }, Mb = function (a, c, b, f) {
                    return [a, c, b, f, b, f]
                }, Kb = function (a, c, b, f, r, v) {
                    var k = 1 / 3, A = 2 / 3;
                    return [k * a + A * b, k * c + A * f, k * r + A * b, k * v + A * f, r, v]
                }, r = function (a, c, b, f, v, k, A, H, e, n) {
                    var d = 120 * U / 180, g = ra * (+v || 0), h = [], B, W = Ya(function (a, c, b) {
                        var f = a * Ca(b) - c * ma(b);
                        a = a * ma(b) + c * Ca(b);
                        return {x: f, y: a}
                    });
                    if (n)Q = n[0], B = n[1], k = n[2], ba = n[3]; else {
                        B =
                            W(a, c, -g);
                        a = B.x;
                        c = B.y;
                        B = W(H, e, -g);
                        H = B.x;
                        e = B.y;
                        Ca(ra * v);
                        ma(ra * v);
                        B = (a - H) / 2;
                        Q = (c - e) / 2;
                        ba = B * B / (b * b) + Q * Q / (f * f);
                        1 < ba && (ba = Da(ba), b *= ba, f *= ba);
                        var ba = b * b, q = f * f, ba = (k == A ? -1 : 1) * Da(Ha((ba * q - ba * Q * Q - q * B * B) / (ba * Q * Q + q * B * B)));
                        k = ba * b * Q / f + (a + H) / 2;
                        var ba = ba * -f * B / b + (c + e) / 2, Q = E.asin(((c - ba) / f).toFixed(9));
                        B = E.asin(((e - ba) / f).toFixed(9));
                        Q = a < k ? U - Q : Q;
                        B = H < k ? U - B : B;
                        0 > Q && (Q = 2 * U + Q);
                        0 > B && (B = 2 * U + B);
                        A && Q > B && (Q -= 2 * U);
                        !A && B > Q && (B -= 2 * U)
                    }
                    if (Ha(B - Q) > d) {
                        var h = B, q = H, J = e;
                        B = Q + d * (A && B > Q ? 1 : -1);
                        H = k + b * Ca(B);
                        e = ba + f * ma(B);
                        h = r(H, e, b, f, v, 0, A,
                            q, J, [B, h, k, ba])
                    }
                    k = B - Q;
                    v = Ca(Q);
                    d = ma(Q);
                    A = Ca(B);
                    B = ma(B);
                    k = E.tan(k / 4);
                    b = 4 / 3 * b * k;
                    k *= 4 / 3 * f;
                    f = [a, c];
                    a = [a + b * d, c - k * v];
                    c = [H + b * B, e - k * A];
                    H = [H, e];
                    a[0] = 2 * f[0] - a[0];
                    a[1] = 2 * f[1] - a[1];
                    if (n)return [a, c, H].concat(h);
                    h = [a, c, H].concat(h).join().split(",");
                    n = [];
                    H = 0;
                    for (e = h.length; H < e; H++)n[H] = H % 2 ? W(h[H - 1], h[H], g).y : W(h[H], h[H + 1], g).x;
                    return n
                }, v = function (a, c, b, f, r, v, k, A, H) {
                    var e = 1 - H;
                    return {
                        x: Ja(e, 3) * a + 3 * Ja(e, 2) * H * b + 3 * e * H * H * r + Ja(H, 3) * k,
                        y: Ja(e, 3) * c + 3 * Ja(e, 2) * H * f + 3 * e * H * H * v + Ja(H, 3) * A
                    }
                }, A = Ya(function (a, c, b, f, r, k, A, H) {
                    var e =
                        r - 2 * b + a - (A - 2 * r + b), n = 2 * (b - a) - 2 * (r - b), d = a - b, g = (-n + Da(n * n - 4 * e * d)) / 2 / e, e = (-n - Da(n * n - 4 * e * d)) / 2 / e, h = [c, H], B = [a, A];
                    "1e12" < Ha(g) && (g = .5);
                    "1e12" < Ha(e) && (e = .5);
                    0 < g && 1 > g && (g = v(a, c, b, f, r, k, A, H, g), B.push(g.x), h.push(g.y));
                    0 < e && 1 > e && (g = v(a, c, b, f, r, k, A, H, e), B.push(g.x), h.push(g.y));
                    e = k - 2 * f + c - (H - 2 * k + f);
                    n = 2 * (f - c) - 2 * (k - f);
                    d = c - f;
                    g = (-n + Da(n * n - 4 * e * d)) / 2 / e;
                    e = (-n - Da(n * n - 4 * e * d)) / 2 / e;
                    "1e12" < Ha(g) && (g = .5);
                    "1e12" < Ha(e) && (e = .5);
                    0 < g && 1 > g && (g = v(a, c, b, f, r, k, A, H, g), B.push(g.x), h.push(g.y));
                    0 < e && 1 > e && (g = v(a, c, b, f, r, k, A, H, e), B.push(g.x),
                        h.push(g.y));
                    return {min: {x: T[M](0, B), y: T[M](0, h)}, max: {x: L[M](0, B), y: L[M](0, h)}}
                }), H = c._path2curve = Ya(function (a, c) {
                    var b = !c && wb(a);
                    if (!c && b.curve)return Ta(b.curve);
                    var f = Pb(a), v = c && Pb(c), k = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, A = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, H = function (a, c) {
                        var b, f;
                        if (!a)return ["C", c.x, c.y, c.x, c.y, c.x, c.y];
                        a[0] in {T: 1, Q: 1} || (c.qx = c.qy = null);
                        switch (a[0]) {
                            case "M":
                                c.X = a[1];
                                c.Y = a[2];
                                break;
                            case "A":
                                a = ["C"].concat(r[M](0, [c.x, c.y].concat(a.slice(1))));
                                break;
                            case "S":
                                b =
                                    c.x + (c.x - (c.bx || c.x));
                                f = c.y + (c.y - (c.by || c.y));
                                a = ["C", b, f].concat(a.slice(1));
                                break;
                            case "T":
                                c.qx = c.x + (c.x - (c.qx || c.x));
                                c.qy = c.y + (c.y - (c.qy || c.y));
                                a = ["C"].concat(Kb(c.x, c.y, c.qx, c.qy, a[1], a[2]));
                                break;
                            case "Q":
                                c.qx = a[1];
                                c.qy = a[2];
                                a = ["C"].concat(Kb(c.x, c.y, a[1], a[2], a[3], a[4]));
                                break;
                            case "L":
                                a = ["C"].concat(Mb(c.x, c.y, a[1], a[2]));
                                break;
                            case "H":
                                a = ["C"].concat(Mb(c.x, c.y, a[1], c.y));
                                break;
                            case "V":
                                a = ["C"].concat(Mb(c.x, c.y, c.x, a[1]));
                                break;
                            case "Z":
                                a = ["C"].concat(Mb(c.x, c.y, c.X, c.Y))
                        }
                        return a
                    }, e = function (a,
                                     c) {
                        if (7 < a[c].length) {
                            a[c].shift();
                            for (var b = a[c]; b.length;)a.splice(c++, 0, ["C"].concat(b.splice(0, 6)));
                            a.splice(c, 1);
                            g = L(f.length, v && v.length || 0)
                        }
                    }, n = function (a, c, b, r, k) {
                        a && c && "M" == a[k][0] && "M" != c[k][0] && (c.splice(k, 0, ["M", r.x, r.y]), b.bx = 0, b.by = 0, b.x = a[k][1], b.y = a[k][2], g = L(f.length, v && v.length || 0))
                    }, d = 0, g = L(f.length, v && v.length || 0);
                    for (; d < g; d++) {
                        f[d] = H(f[d], k);
                        e(f, d);
                        v && (v[d] = H(v[d], A));
                        v && e(v, d);
                        n(f, v, k, A, d);
                        n(v, f, A, k, d);
                        var h = f[d], B = v && v[d], W = h.length, ba = v && B.length;
                        k.x = h[W - 2];
                        k.y = h[W - 1];
                        k.bx =
                            fa(h[W - 4]) || k.x;
                        k.by = fa(h[W - 3]) || k.y;
                        A.bx = v && (fa(B[ba - 4]) || A.x);
                        A.by = v && (fa(B[ba - 3]) || A.y);
                        A.x = v && B[ba - 2];
                        A.y = v && B[ba - 1]
                    }
                    v || (b.curve = Ta(f));
                    return v ? [f, v] : f
                }, null, Ta);
            c._parseDots = Ya(function (a) {
                for (var b = [], f = 0, r = a.length; f < r; f++) {
                    var v = {}, k = a[f].match(/^([^:]*):?([\d\.]*)/);
                    v.color = c.getRGB(k[1]);
                    if (v.color.error)return null;
                    v.opacity = v.color.opacity;
                    v.color = v.color.hex;
                    k[2] && (v.offset = k[2] + "%");
                    b.push(v)
                }
                f = 1;
                for (r = b.length - 1; f < r; f++)if (!b[f].offset) {
                    a = fa(b[f - 1].offset || 0);
                    k = 0;
                    for (v = f + 1; v < r; v++)if (b[v].offset) {
                        k =
                            b[v].offset;
                        break
                    }
                    k || (k = 100, v = r);
                    k = fa(k);
                    for (k = (k - a) / (v - f + 1); f < v; f++)a += k, b[f].offset = a + "%"
                }
                return b
            });
            var f = c._tear = function (a, c) {
                a == c.top && (c.top = a.prev);
                a == c.bottom && (c.bottom = a.next);
                a.next && (a.next.prev = a.prev);
                a.prev && (a.prev.next = a.next)
            };
            c._tofront = function (a, c) {
                if (c.top === a)return !1;
                f(a, c);
                a.next = null;
                a.prev = c.top;
                c.top.next = a;
                c.top = a;
                return !0
            };
            c._toback = function (a, c) {
                if (c.bottom === a)return !1;
                f(a, c);
                a.next = c.bottom;
                a.prev = null;
                c.bottom.prev = a;
                c.bottom = a;
                return !0
            };
            c._insertafter = function (a,
                                       c, b, r) {
                f(a, b);
                a.parent = r;
                c === r.top && (r.top = a);
                c.next && (c.next.prev = a);
                a.next = c.next;
                a.prev = c;
                c.next = a
            };
            c._insertbefore = function (a, c, b, r) {
                f(a, b);
                a.parent = r;
                c === r.bottom && (r.bottom = a);
                c.prev && (c.prev.next = a);
                a.prev = c.prev;
                c.prev = a;
                a.next = c
            };
            var Q = c.toMatrix = function (a, c) {
                var b = Tb(a), f = {
                    _: {transform: ""}, getBBox: function () {
                        return b
                    }
                };
                W(f, c);
                return f.matrix
            };
            c.transformPath = function (a, c) {
                return ha(a, Q(a, c))
            };
            var W = c._extractTransform = function (a, b) {
                if (null == b)return a._.transform;
                b = G(b).replace(/\.{3}|\u2026/g,
                    a._.transform || "");
                var f = c.parseTransformString(b), r = 0, v = 0, k = 0, A = 1, H = 1, e = a._, k = new F;
                e.transform = f || [];
                if (f)for (var v = 0, n = f.length; v < n; v++) {
                    var d = f[v], g = d.length, h = G(d[0]).toLowerCase(), B = d[0] != h, W = B ? k.invert() : 0, ba;
                    "t" == h && 3 == g ? B ? (g = W.x(0, 0), h = W.y(0, 0), B = W.x(d[1], d[2]), W = W.y(d[1], d[2]), k.translate(B - g, W - h)) : k.translate(d[1], d[2]) : "r" == h ? 2 == g ? (ba = ba || a.getBBox(1), k.rotate(d[1], ba.x + ba.width / 2, ba.y + ba.height / 2), r += d[1]) : 4 == g && (B ? (B = W.x(d[2], d[3]), W = W.y(d[2], d[3]), k.rotate(d[1], B, W)) : k.rotate(d[1],
                        d[2], d[3]), r += d[1]) : "s" == h ? 2 == g || 3 == g ? (ba = ba || a.getBBox(1), k.scale(d[1], d[g - 1], ba.x + ba.width / 2, ba.y + ba.height / 2), A *= d[1], H *= d[g - 1]) : 5 == g && (B ? (B = W.x(d[3], d[4]), W = W.y(d[3], d[4]), k.scale(d[1], d[2], B, W)) : k.scale(d[1], d[2], d[3], d[4]), A *= d[1], H *= d[2]) : "m" == h && 7 == g && k.add(d[1], d[2], d[3], d[4], d[5], d[6]);
                    e.dirtyT = 1;
                    a.matrix = k
                }
                a.matrix = k;
                e.sx = A;
                e.sy = H;
                e.deg = r;
                e.dx = v = k.e;
                e.dy = k = k.f;
                1 == A && 1 == H && !r && e.bbox ? (e.bbox.x += +v, e.bbox.y += +k) : e.dirtyT = 1
            }, ba = function (a) {
                var c = a[0];
                switch (c.toLowerCase()) {
                    case "t":
                        return [c,
                            0, 0];
                    case "m":
                        return [c, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == a.length ? [c, 0, a[2], a[3]] : [c, 0];
                    case "s":
                        return 5 == a.length ? [c, 1, 1, a[3], a[4]] : 3 == a.length ? [c, 1, 1] : [c, 1]
                }
            }, tc = c._equaliseTransform = function (a, b) {
                b = G(b).replace(/\.{3}|\u2026/g, a);
                a = c.parseTransformString(a) || [];
                b = c.parseTransformString(b) || [];
                for (var f = L(a.length, b.length), r = [], v = [], k = 0, A, H, e, d; k < f; k++) {
                    e = a[k] || ba(b[k]);
                    d = b[k] || ba(e);
                    if (e[0] != d[0] || "r" == e[0].toLowerCase() && (e[2] != d[2] || e[3] != d[3]) || "s" == e[0].toLowerCase() && (e[3] != d[3] || e[4] != d[4]))return;
                    r[k] = [];
                    v[k] = [];
                    A = 0;
                    for (H = L(e.length, d.length); A < H; A++)A in e && (r[k][A] = e[A]), A in d && (v[k][A] = d[A])
                }
                return {from: r, to: v}
            };
            c._getContainer = function (a, b, f, r) {
                var v;
                v = null != r || c.is(a, "object") ? a : t.doc.getElementById(a);
                if (null != v)return v.tagName ? null == b ? {
                    container: v,
                    width: v.style.pixelWidth || v.offsetWidth,
                    height: v.style.pixelHeight || v.offsetHeight
                } : {container: v, width: b, height: f} : {container: 1, x: a, y: b, width: f, height: r}
            };
            c.pathToRelative = $b;
            c._engine = {};
            c.path2curve = H;
            c.matrix = function (a, c, b, f, r, v) {
                return new F(a,
                    c, b, f, r, v)
            };
            (function (a) {
                function b(a) {
                    return a[0] * a[0] + a[1] * a[1]
                }

                function f(a) {
                    var c = Da(b(a));
                    a[0] && (a[0] /= c);
                    a[1] && (a[1] /= c)
                }

                a.add = function (a, c, b, f, r, v) {
                    var k = [[], [], []], A = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]];
                    c = [[a, b, r], [c, f, v], [0, 0, 1]];
                    a && a instanceof F && (c = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]);
                    for (a = 0; 3 > a; a++)for (b = 0; 3 > b; b++) {
                        for (f = r = 0; 3 > f; f++)r += A[a][f] * c[f][b];
                        k[a][b] = r
                    }
                    this.a = k[0][0];
                    this.b = k[1][0];
                    this.c = k[0][1];
                    this.d = k[1][1];
                    this.e = k[0][2];
                    this.f = k[1][2]
                };
                a.invert = function () {
                    var a =
                        this.a * this.d - this.b * this.c;
                    return new F(this.d / a, -this.b / a, -this.c / a, this.a / a, (this.c * this.f - this.d * this.e) / a, (this.b * this.e - this.a * this.f) / a)
                };
                a.clone = function () {
                    return new F(this.a, this.b, this.c, this.d, this.e, this.f)
                };
                a.translate = function (a, c) {
                    this.add(1, 0, 0, 1, a, c)
                };
                a.scale = function (a, c, b, f) {
                    null == c && (c = a);
                    (b || f) && this.add(1, 0, 0, 1, b, f);
                    this.add(a, 0, 0, c, 0, 0);
                    (b || f) && this.add(1, 0, 0, 1, -b, -f)
                };
                a.rotate = function (a, b, f) {
                    a = c.rad(a);
                    b = b || 0;
                    f = f || 0;
                    var r = +Ca(a).toFixed(9);
                    a = +ma(a).toFixed(9);
                    this.add(r,
                        a, -a, r, b, f);
                    this.add(1, 0, 0, 1, -b, -f)
                };
                a.x = function (a, c) {
                    return a * this.a + c * this.c + this.e
                };
                a.y = function (a, c) {
                    return a * this.b + c * this.d + this.f
                };
                a.get = function (a) {
                    return +this[G.fromCharCode(97 + a)].toFixed(4)
                };
                a.toString = function () {
                    return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                };
                a.toMatrixString = function () {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() +
                        ")"
                };
                a.toFilter = function () {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                };
                a.offset = function () {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                };
                a.split = function () {
                    var a = {};
                    a.dx = this.e;
                    a.dy = this.f;
                    var r = [[this.a, this.c], [this.b, this.d]];
                    a.scalex = Da(b(r[0]));
                    f(r[0]);
                    a.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1];
                    r[1] = [r[1][0] - r[0][0] * a.shear, r[1][1] - r[0][1] *
                    a.shear];
                    a.scaley = Da(b(r[1]));
                    f(r[1]);
                    a.shear /= a.scaley;
                    var v = -r[0][1], r = r[1][1];
                    0 > r ? (a.rotate = c.deg(E.acos(r)), 0 > v && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(E.asin(v));
                    a.isSimple = !+a.shear.toFixed(9) && (a.scalex.toFixed(9) == a.scaley.toFixed(9) || !a.rotate);
                    a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate;
                    a.noRotation = !+a.shear.toFixed(9) && !a.rotate;
                    return a
                };
                a.toTransformString = function (a) {
                    a = a || this.split();
                    return a.isSimple ? (a.scalex = +a.scalex.toFixed(4), a.scaley = +a.scaley.toFixed(4), a.rotate = +a.rotate.toFixed(4), (a.dx || a.dy ? "t" + [a.dx, a.dy] : "") + (1 != a.scalex || 1 != a.scaley ? "s" + [a.scalex, a.scaley, 0, 0] : "") + (a.rotate ? "r" + [a.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            })(F.prototype);
            var pb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
            "Apple Computer, Inc." == navigator.vendor && (pb && 4 > pb[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && pb && 8 > pb[1] ?
                aa.safari = function () {
                    var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
                    setTimeout(function () {
                        a.remove()
                    });
                    return !0
                } : aa.safari = P;
            for (var uc = function () {
                this.returnValue = !1
            }, ta = function () {
                return this.originalEvent.preventDefault()
            }, Gc = function () {
                this.cancelBubble = !0
            }, ua = function () {
                return this.originalEvent.stopPropagation()
            }, ac = c.addEvent = function () {
                if (t.doc.addEventListener)return function (a, c, b, f) {
                    var r = qa && S[c] ? S[c] : c, v = function (r) {
                        var v = t.doc.documentElement.scrollTop ||
                            t.doc.body.scrollTop, k = t.doc.documentElement.scrollLeft || t.doc.body.scrollLeft;
                        if (qa && S.hasOwnProperty(c))for (var A = 0, H = r.targetTouches && r.targetTouches.length; A < H; A++)if (r.targetTouches[A].target == a) {
                            H = r;
                            r = r.targetTouches[A];
                            r.originalEvent = H;
                            r.preventDefault = ta;
                            r.stopPropagation = ua;
                            break
                        }
                        return b.call(f, r, r.clientX + k, r.clientY + v)
                    };
                    a.addEventListener(r, v, !1);
                    return function () {
                        a.removeEventListener(r, v, !1);
                        return !0
                    }
                };
                if (t.doc.attachEvent)return function (a, c, b, f) {
                    var r = function (a) {
                        a = a || t.win.event;
                        var c = a.clientX + (t.doc.documentElement.scrollLeft || t.doc.body.scrollLeft), r = a.clientY + (t.doc.documentElement.scrollTop || t.doc.body.scrollTop);
                        a.preventDefault = a.preventDefault || uc;
                        a.stopPropagation = a.stopPropagation || Gc;
                        return b.call(f, a, c, r)
                    };
                    a.attachEvent("on" + c, r);
                    return function () {
                        a.detachEvent("on" + c, r);
                        return !0
                    }
                }
            }(), nc = [], Xc = function (a) {
                for (var b = a.clientX, f = a.clientY, r = t.doc.documentElement.scrollTop || t.doc.body.scrollTop, v = t.doc.documentElement.scrollLeft || t.doc.body.scrollLeft, k, A = nc.length; A--;) {
                    k =
                        nc[A];
                    if (qa)for (var H = a.touches.length, e; H--;) {
                        if (e = a.touches[H], e.identifier == k.el._drag.id) {
                            b = e.clientX;
                            f = e.clientY;
                            (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                    } else a.preventDefault();
                    if (!k.el.removed) {
                        var H = c._engine.getNode(k.el), d = H.nextSibling, n = H.parentNode, g = H.style.display;
                        t.win.opera && n.removeChild(H);
                        H.style.display = "none";
                        e = k.el.paper.getElementByPoint(b, f);
                        H.style.display = g;
                        t.win.opera && (d ? n.insertBefore(H, d) : n.appendChild(H));
                        e && p("raphael.drag.over." + k.el.id, k.el, e);
                        b += v;
                        f += r;
                        p("raphael.drag.move." + k.el.id, k.move_scope || k.el, b - k.el._drag.x, f - k.el._drag.y, b, f, a)
                    }
                }
            }, Yc = function (a) {
                c.unmousemove(Xc).unmouseup(Yc);
                for (var b = nc.length, f; b--;)f = nc[b], f.el._drag = {}, p("raphael.drag.end." + f.el.id, f.end_scope || f.start_scope || f.move_scope || f.el, a);
                nc = []
            }, oa = c.el = {}, dd = ca.length; dd--;)(function (a) {
                c[a] = oa[a] = function (b, f) {
                    c.is(b, "function") && (this.events = this.events || [], this.events.push({
                        name: a,
                        f: b,
                        unbind: ac(this.shape || this.node || t.doc, a, b, f || this)
                    }));
                    return this
                };
                c["un" +
                a] = oa["un" + a] = function (c) {
                    for (var b = this.events || [], f = b.length; f--;)if (b[f].name == a && b[f].f == c) {
                        b[f].unbind();
                        b.splice(f, 1);
                        !b.length && delete this.events;
                        break
                    }
                    return this
                }
            })(ca[dd]);
            oa.data = function (a, b) {
                var f = J[this.id] = J[this.id] || {};
                if (1 == arguments.length) {
                    if (c.is(a, "object")) {
                        for (var r in a)a.hasOwnProperty(r) && this.data(r, a[r]);
                        return this
                    }
                    p("raphael.data.get." + this.id, this, f[a], a);
                    return f[a]
                }
                f[a] = b;
                p("raphael.data.set." + this.id, this, b, a);
                return this
            };
            oa.removeData = function (a) {
                null == a ? delete J[this.id] :
                J[this.id] && delete J[this.id][a];
                return this
            };
            oa.getData = function () {
                return tb(J[this.id] || {})
            };
            var db = [], gd = function () {
                this.untrack = ac(t.doc, "mouseup", fd, this)
            }, fd = function () {
                this.untrack();
                this.untrack = null;
                return this.fn && this.fn.apply(this.scope || this.el, arguments)
            };
            oa.mouseup = function (a, b, f) {
                if (!f)return c.mouseup.apply(this, arguments);
                db.push(f = {el: this, fn: a, scope: b});
                f.unbind = ac(this.shape || this.node || t.doc, "mousedown", gd, f);
                return this
            };
            oa.unmouseup = function (a) {
                for (var b = db.length, f; b--;)db[b].el ===
                this && db[b].fn === a && (f = db[b], f.unbind(), f.untrack && f.untrack(), db.splice(b, 1));
                return f ? this : c.unmouseup.apply(this, arguments)
            };
            oa.hover = function (a, c, b, f) {
                return this.mouseover(a, b).mouseout(c, f || b)
            };
            oa.unhover = function (a, c) {
                return this.unmouseover(a).unmouseout(c)
            };
            var Hc = [];
            oa.drag = function (a, b, f, r, v, k) {
                function A(H) {
                    (H.originalEvent || H).preventDefault();
                    var e = t.doc.documentElement.scrollTop || t.doc.body.scrollTop, d = t.doc.documentElement.scrollLeft || t.doc.body.scrollLeft;
                    this._drag.x = H.clientX + d;
                    this._drag.y = H.clientY + e;
                    this._drag.id = H.identifier;
                    !nc.length && c.mousemove(Xc).mouseup(Yc);
                    nc.push({el: this, move_scope: r, start_scope: v, end_scope: k});
                    b && p.on("raphael.drag.start." + this.id, b);
                    a && p.on("raphael.drag.move." + this.id, a);
                    f && p.on("raphael.drag.end." + this.id, f);
                    p("raphael.drag.start." + this.id, v || r || this, H.clientX + d, H.clientY + e, H)
                }

                this._drag = {};
                Hc.push({el: this, start: A});
                this.mousedown(A);
                return this
            };
            oa.onDragOver = function (a) {
                a ? p.on("raphael.drag.over." + this.id, a) : p.unbind("raphael.drag.over." +
                    this.id)
            };
            oa.undrag = function () {
                for (var a = Hc.length; a--;)Hc[a].el == this && (this.unmousedown(Hc[a].start), Hc.splice(a, 1), p.unbind("raphael.drag.*." + this.id));
                !Hc.length && c.unmousemove(Xc).unmouseup(Yc);
                delete this._drag
            };
            oa.follow = function (a, b, f) {
                if (a.removed || a.constructor !== c.el.constructor)return this;
                a.followers.push({el: this, stalk: f = {before: "insertBefore", after: "insertAfter"}[f], cb: b});
                f && this[f](a);
                return this
            };
            oa.unfollow = function (a) {
                if (a.removed || a.constructor !== c.el.constructor)return this;
                for (var b = 0, f = a.followers.length; b < f; b++)if (a.followers[b].el === this) {
                    a.followers.splice(b, 1);
                    break
                }
                return this
            };
            aa.hide = function () {
                this.canvas.style.visibility = "hidden";
                return this
            };
            aa.show = function () {
                this.canvas.style.visibility = "";
                return this
            };
            aa.group = function () {
                var a = arguments, b = na(a, !0), a = c._engine.group(this, a[0], b);
                return this.__set__ && this.__set__.push(a), this._elementsById[a.id] = a
            };
            aa.circle = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "cx", 0, "cy", 0, "r", 0, "fill", "none", "stroke", "#000"),
                    b = c._engine.circle(this, a, b);
                return this.__set__ && this.__set__.push(b), this._elementsById[b.id] = b
            };
            aa.rect = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "x", 0, "y", 0, "width", 0, "height", 0, "r", 0, "fill", "none", "stroke", "#000"), b = c._engine.rect(this, a, b);
                return this.__set__ && this.__set__.push(b), this._elementsById[b.id] = b
            };
            aa.ellipse = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "x", 0, "y", 0, "rx", 0, "ry", 0, "fill", "none", "stroke", "#000"), b = c._engine.ellipse(this, a, b);
                return this.__set__ && this.__set__.push(b),
                    this._elementsById[b.id] = b
            };
            aa.path = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "path", "", "fill", "none", "stroke", "#000"), b = c._engine.path(this, a, b);
                return this.__set__ && this.__set__.push(b), this._elementsById[b.id] = b
            };
            aa.image = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "src", "about:blank", "x", 0, "y", 0, "width", 0, "height", 0);
                out = c._engine.image(this, a, b);
                return this.__set__ && this.__set__.push(out), this._elementsById[out.id] = out
            };
            aa.text = function () {
                var a = arguments, b = na(a, !0), a = Qa(a, "x", 0, "y", 0, "text",
                    "", "stroke", "none", "fill", "#000", "text-anchor", "middle", "vertical-align", "middle"), b = c._engine.text(this, a, b);
                return this.__set__ && this.__set__.push(b), this._elementsById[b.id] = b
            };
            aa.set = function (a) {
                !c.is(a, "array") && (a = u.call(arguments, 0, arguments.length));
                var b = new kc(a);
                this.__set__ && this.__set__.push(b);
                return b
            };
            aa.setStart = function (a) {
                this.__set__ = a || this.set()
            };
            aa.setFinish = function (a) {
                a = this.__set__;
                delete this.__set__;
                return a
            };
            aa.setSize = function (a, b) {
                return c._engine.setSize.call(this,
                    a, b)
            };
            aa.setViewBox = function (a, b, f, r, v) {
                return c._engine.setViewBox.call(this, a, b, f, r, v)
            };
            aa.top = aa.bottom = null;
            aa.raphael = c;
            aa.getElementByPoint = function (a, c) {
                var b, f, r = this.canvas, v = t.doc.elementFromPoint(a, c);
                if (t.win.opera && "svg" == v.tagName) {
                    f = r.getBoundingClientRect();
                    b = r.ownerDocument;
                    var k = b.body, A = b.documentElement;
                    b = f.top + (t.win.pageYOffset || A.scrollTop || k.scrollTop) - (A.clientTop || k.clientTop || 0);
                    f = f.left + (t.win.pageXOffset || A.scrollLeft || k.scrollLeft) - (A.clientLeft || k.clientLeft || 0);
                    k = r.createSVGRect();
                    k.x = a - f;
                    k.y = c - b;
                    k.width = k.height = 1;
                    b = r.getIntersectionList(k, null);
                    b.length && (v = b[b.length - 1])
                }
                if (!v)return null;
                for (; v.parentNode && v != r.parentNode && !v.raphael;)v = v.parentNode;
                v == this.canvas.parentNode && (v = r);
                return v = v && v.raphael ? this.getById(v.raphaelid) : null
            };
            aa.getElementsByBBox = function (a) {
                var b = this.set();
                this.forEach(function (f) {
                    c.isBBoxIntersect(f.getBBox(), a) && b.push(f)
                });
                return b
            };
            aa.getById = function (a) {
                return this._elementsById[a] || null
            };
            aa.forEach = function (a, c) {
                for (var b = this.bottom; b &&
                !1 !== a.call(c, b);)b = b.next;
                return this
            };
            aa.getElementsByPoint = function (a, c) {
                var b = this.set();
                this.forEach(function (f) {
                    f.isPointInside(a, c) && b.push(f)
                });
                return b
            };
            oa.isPointInside = function (a, b) {
                var f = this.realPath = this.realPath || sa[this.type](this), r;
                return c.isPointInsidePath((r = this.attr("transform")) && r.length && c.transformPath(f, r) || f, a, b)
            };
            oa.getBBox = function (a) {
                if (this.removed)return {};
                var c = this._;
                if (a) {
                    if (c.dirty || !c.bboxwt)this.realPath = sa[this.type](this), c.bboxwt = Tb(this.realPath), c.bboxwt.toString =
                        K, c.dirty = 0;
                    return c.bboxwt
                }
                if (c.dirty || c.dirtyT || !c.bbox) {
                    if (c.dirty || !this.realPath)c.bboxwt = 0, this.realPath = sa[this.type](this);
                    c.bbox = Tb(ha(this.realPath, this.matrix));
                    c.bbox.toString = K;
                    c.dirty = c.dirtyT = 0
                }
                return c.bbox
            };
            oa.clone = function () {
                if (this.removed)return null;
                var a = this.paper[this.type]().attr(this.attr());
                this.__set__ && this.__set__.push(a);
                return a
            };
            oa.glow = function (a) {
                if ("text" == this.type)return null;
                a = a || {};
                var c = (a.width || 10) + (+this.attr("stroke-width") || 1), b = a.fill || !1, f = a.opacity ||
                    .5, r = a.offsetx || 0, v = a.offsety || 0;
                a = a.color || "#000";
                for (var k = c / 2, A = this.paper, H = A.set(), e = this.realPath || sa[this.type](this), e = this.matrix ? ha(e, this.matrix) : e, d = 1; d < k + 1; d++)H.push(A.path(e).attr({
                    stroke: a,
                    fill: b ? a : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(c / k * d).toFixed(3),
                    opacity: +(f / k).toFixed(3)
                }));
                return H.insertBefore(this).translate(r, v)
            };
            var Zc = function (b, f, r, v, k, A, H, e, d) {
                return null == d ? I(b, f, r, v, k, A, H, e) : c.findDotsAtSegment(b, f, r, v, k, A, H, e, a(b, f, r, v, k, A, H,
                    e, d))
            }, vc = function (a, b) {
                return function (f, r, v) {
                    f = H(f);
                    for (var k, A, e, d, n = "", g = {}, B = 0, h = 0, W = f.length; h < W; h++) {
                        e = f[h];
                        if ("M" == e[0])k = +e[1], A = +e[2]; else {
                            d = Zc(k, A, e[1], e[2], e[3], e[4], e[5], e[6]);
                            if (B + d > r) {
                                if (b && !g.start) {
                                    k = Zc(k, A, e[1], e[2], e[3], e[4], e[5], e[6], r - B);
                                    n += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y];
                                    if (v)return n;
                                    g.start = n;
                                    n = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, e[5], e[6]].join();
                                    B += d;
                                    k = +e[5];
                                    A = +e[6];
                                    continue
                                }
                                if (!a && !b)return k = Zc(k, A, e[1], e[2], e[3], e[4], e[5], e[6], r - B), {
                                    x: k.x, y: k.y,
                                    alpha: k.alpha
                                }
                            }
                            B += d;
                            k = +e[5];
                            A = +e[6]
                        }
                        n += e.shift() + e
                    }
                    g.end = n;
                    k = a ? B : b ? g : c.findDotsAtSegment(k, A, e[0], e[1], e[2], e[3], e[4], e[5], 1);
                    k.alpha && (k = {x: k.x, y: k.y, alpha: k.alpha});
                    return k
                }
            }, Nc = vc(1), Fb = vc(), $a = vc(0, 1);
            c.getTotalLength = Nc;
            c.getPointAtLength = Fb;
            c.getSubpath = function (a, c, b) {
                if (1E-6 > this.getTotalLength(a) - b)return $a(a, c).end;
                a = $a(a, b, 1);
                return c ? $a(a, c).end : a
            };
            oa.getTotalLength = function () {
                if ("path" == this.type)return this.node.getTotalLength ? this.node.getTotalLength() : Nc(this.attrs.path)
            };
            oa.getPointAtLength =
                function (a) {
                    if ("path" == this.type)return Fb(this.attrs.path, a)
                };
            oa.getSubpath = function (a, b) {
                if ("path" == this.type)return c.getSubpath(this.attrs.path, a, b)
            };
            var Pa = c.easing_formulas = {
                linear: function (a) {
                    return a
                }, "<": function (a) {
                    return Ja(a, 1.7)
                }, ">": function (a) {
                    return Ja(a, .48)
                }, "<>": function (a) {
                    var c = .48 - a / 1.04, b = Da(.1734 + c * c);
                    a = b - c;
                    a = Ja(Ha(a), 1 / 3) * (0 > a ? -1 : 1);
                    c = -b - c;
                    c = Ja(Ha(c), 1 / 3) * (0 > c ? -1 : 1);
                    a = a + c + .5;
                    return 3 * (1 - a) * a * a + a * a * a
                }, backIn: function (a) {
                    return a * a * (2.70158 * a - 1.70158)
                }, backOut: function (a) {
                    a -=
                        1;
                    return a * a * (2.70158 * a + 1.70158) + 1
                }, elastic: function (a) {
                    return a == !!a ? a : Ja(2, -10 * a) * ma(2 * (a - .075) * U / .3) + 1
                }, bounce: function (a) {
                    a < 1 / 2.75 ? a *= 7.5625 * a : a < 2 / 2.75 ? (a -= 1.5 / 2.75, a = 7.5625 * a * a + .75) : a < 2.5 / 2.75 ? (a -= 2.25 / 2.75, a = 7.5625 * a * a + .9375) : (a -= 2.625 / 2.75, a = 7.5625 * a * a + .984375);
                    return a
                }
            };
            Pa.easeIn = Pa["ease-in"] = Pa["<"];
            Pa.easeOut = Pa["ease-out"] = Pa[">"];
            Pa.easeInOut = Pa["ease-in-out"] = Pa["<>"];
            Pa["back-in"] = Pa.backIn;
            Pa["back-out"] = Pa.backOut;
            var Ma = [], cd = d.requestAnimationFrame || d.webkitRequestAnimationFrame ||
                d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame || function (a) {
                    setTimeout(a, 16)
                }, Wc = function () {
                for (var a = +new Date, b = 0; b < Ma.length; b++) {
                    var f = Ma[b];
                    if (!f.el.removed && !f.paused) {
                        var r = a - f.start, v = f.ms, A = f.easing, H = f.from, d = f.diff, n = f.to, g = f.el, B = {}, h, W = {}, ba;
                        f.initstatus ? (r = (f.initstatus * f.anim.top - f.prev) / (f.percent - f.prev) * v, f.status = f.initstatus, delete f.initstatus, f.stop && Ma.splice(b--, 1)) : f.status = (f.prev + r / v * (f.percent - f.prev)) / f.anim.top;
                        if (!(0 > r))if (r < v) {
                            var Q =
                                A(r / v), q;
                            for (q in H)if (H.hasOwnProperty(q)) {
                                switch (k[q]) {
                                    case C:
                                        h = +H[q] + Q * v * d[q];
                                        break;
                                    case "colour":
                                        h = "rgb(" + [qb(Ga(H[q].r + Q * v * d[q].r)), qb(Ga(H[q].g + Q * v * d[q].g)), qb(Ga(H[q].b + Q * v * d[q].b))].join() + ")";
                                        break;
                                    case "path":
                                        h = [];
                                        r = 0;
                                        for (A = H[q].length; r < A; r++) {
                                            h[r] = [H[q][r][0]];
                                            n = 1;
                                            for (W = H[q][r].length; n < W; n++)h[r][n] = (+H[q][r][n] + Q * v * d[q][r][n]).toFixed(4);
                                            h[r] = h[r].join(" ")
                                        }
                                        h = h.join(" ");
                                        break;
                                    case "transform":
                                        if (d[q].real)for (h = [], r = 0, A = H[q].length; r < A; r++)for (h[r] = [H[q][r][0]], n = 1, W = H[q][r].length; n <
                                        W; n++)h[r][n] = H[q][r][n] + Q * v * d[q][r][n]; else h = function (a) {
                                            return +H[q][a] + Q * v * d[q][a]
                                        }, h = [["m", h(0), h(1), h(2), h(3), h(4), h(5)]];
                                        break;
                                    case "csv":
                                        if ("clip-rect" == q)for (h = [], r = 4; r--;)h[r] = +H[q][r] + Q * v * d[q][r];
                                        break;
                                    default:
                                        for (A = [].concat(H[q]), h = [], r = g.ca[q].length; r--;)h[r] = +A[r] + Q * v * d[q][r]
                                }
                                B[q] = h
                            }
                            g.attr(B);
                            (function (a, c, b) {
                                setTimeout(function () {
                                    p("raphael.anim.frame." + a, c, b)
                                })
                            })(g.id, g, f.anim)
                        } else {
                            (function (a, b, f) {
                                setTimeout(function () {
                                    p("raphael.anim.frame." + b.id, b, f);
                                    p("raphael.anim.finish." +
                                        b.id, b, f);
                                    c.is(a, "function") && a.call(b)
                                })
                            })(f.callback, g, f.anim);
                            g.attr(n);
                            Ma.splice(b--, 1);
                            if (1 < f.repeat && !f.next) {
                                for (ba in n)n.hasOwnProperty(ba) && (W[ba] = f.totalOrigin[ba]);
                                f.el.attr(W);
                                e(f.anim, f.el, f.anim.percents[0], null, f.totalOrigin, f.repeat - 1)
                            }
                            f.next && !f.stop && e(f.anim, f.el, f.next, null, f.totalOrigin, f.repeat)
                        }
                    }
                }
                c.svg && g && g.paper && g.paper.safari();
                Ma.length && cd(Wc)
            }, qb = function (a) {
                return 255 < a ? 255 : 0 > a ? 0 : a
            };
            oa.animateWith = function (a, b, f, r, v, k) {
                if (this.removed)return k && k.call(this), this;
                f =
                    f instanceof g ? f : c.animation(f, r, v, k);
                e(f, this, f.percents[0], null, this.attr());
                f = 0;
                for (r = Ma.length; f < r; f++)if (Ma[f].anim == b && Ma[f].el == a) {
                    Ma[r - 1].start = Ma[f].start;
                    break
                }
                return this
            };
            oa.onAnimation = function (a) {
                a ? p.on("raphael.anim.frame." + this.id, a) : p.unbind("raphael.anim.frame." + this.id);
                return this
            };
            g.prototype.delay = function (a) {
                var c = new g(this.anim, this.ms);
                c.times = this.times;
                c.del = +a || 0;
                return c
            };
            g.prototype.repeat = function (a) {
                var c = new g(this.anim, this.ms);
                c.del = this.del;
                c.times = E.floor(L(a,
                        0)) || 1;
                return c
            };
            c.animation = function (a, b, f, r) {
                if (a instanceof g)return a;
                if (c.is(f, "function") || !f)r = r || f || null, f = null;
                a = Object(a);
                b = +b || 0;
                var v = {}, k, A;
                for (A in a)a.hasOwnProperty(A) && fa(A) != A && fa(A) + "%" != A && (k = !0, v[A] = a[A]);
                return k ? (f && (v.easing = f), r && (v.callback = r), new g({100: v}, b)) : new g(a, b)
            };
            oa.animate = function (a, b, f, r) {
                if (this.removed)return r && r.call(this), this;
                a = a instanceof g ? a : c.animation(a, b, f, r);
                e(a, this, a.percents[0], null, this.attr());
                return this
            };
            oa.setTime = function (a, c) {
                a && null !=
                c && this.status(a, T(c, a.ms) / a.ms);
                return this
            };
            oa.status = function (a, c) {
                var b = [], f = 0, r, v;
                if (null != c)return e(a, this, -1, T(c, 1)), this;
                for (r = Ma.length; f < r; f++)if (v = Ma[f], v.el.id == this.id && (!a || v.anim == a)) {
                    if (a)return v.status;
                    b.push({anim: v.anim, status: v.status})
                }
                return a ? 0 : b
            };
            oa.pause = function (a) {
                for (var c = 0; c < Ma.length; c++)Ma[c].el.id != this.id || a && Ma[c].anim != a || !1 === p("raphael.anim.pause." + this.id, this, Ma[c].anim) || (Ma[c].paused = !0);
                return this
            };
            oa.resume = function (a) {
                for (var c = 0; c < Ma.length; c++)if (Ma[c].el.id ==
                    this.id && (!a || Ma[c].anim == a)) {
                    var b = Ma[c];
                    !1 !== p("raphael.anim.resume." + this.id, this, b.anim) && (delete b.paused, this.status(b.anim, b.status))
                }
                return this
            };
            oa.stop = function (a) {
                for (var c = 0; c < Ma.length; c++)Ma[c].el.id != this.id || a && Ma[c].anim != a || !1 !== p("raphael.anim.stop." + this.id, this, Ma[c].anim) && Ma.splice(c--, 1);
                return this
            };
            p.on("raphael.remove", h);
            p.on("raphael.clear", h);
            oa.toString = function () {
                return "Raphaël’s object"
            };
            oa.toFront = function () {
                if (this.removed)return this;
                var a = c._engine.getNode(this),
                    b = this.parent, f = this.followers, r;
                c._tofront(this, b) && b.canvas.appendChild(a);
                a = 0;
                for (b = f.length; a < b; a++)(r = f[a]).stalk && r.el[r.stalk](this);
                return this
            };
            oa.toBack = function () {
                if (this.removed)return this;
                var a = c._engine.getNode(this), b = this.parent, f = this.followers, r;
                c._toback(this, b) && b.canvas.insertBefore(a, b.canvas.firstChild);
                a = 0;
                for (b = f.length; a < b; a++)(r = f[a]).stalk && r.el[r.stalk](this);
                return this
            };
            oa.insertAfter = function (a) {
                if (this.removed)return this;
                var b = c._engine.getNode(this), f = c._engine.getLastNode(a),
                    r = a.parent.canvas, v = this.followers, k;
                f.nextSibling ? r.insertBefore(b, f.nextSibling) : r.appendChild(b);
                c._insertafter(this, a, this.parent, a.parent);
                b = 0;
                for (f = v.length; b < f; b++)(k = v[b]).stalk && k.el[k.stalk](a);
                return this
            };
            oa.insertBefore = function (a) {
                if (this.removed)return this;
                var b = c._engine.getNode(this), f = c._engine.getNode(a), r = this.followers, v;
                a.parent.canvas.insertBefore(b, f);
                c._insertbefore(this, a, this.parent, a.parent);
                this.parent = a.parent;
                b = 0;
                for (f = r.length; b < f; b++)(v = r[b]).stalk && v.el[v.stalk](a);
                return this
            };
            oa.appendChild = function (a) {
                if (this.removed || "group" !== this.type)return this;
                var b = this.followers, f, r, v;
                if (a.parent === this)return a.toFront(), this;
                r = c._engine.getNode(a);
                c._tear(a, a.parent);
                this.canvas.appendChild(r);
                a.parent = this;
                !this.bottom && (this.bottom = a);
                a.prev = this.top;
                a.next = null;
                this.top && (this.top.next = a);
                this.top = a;
                r = 0;
                for (v = b.length; r < v; r++)(f = b[r]).stalk && f.el[f.stalk](a);
                return this
            };
            oa.removeChild = function (a) {
                if (this.removed || "group" !== this.type || a.parent !== this)return this;
                var b = c._engine.getNode(a), f = this.paper;
                c._tear(a, this);
                f.canvas.appendChild(b);
                this.parent = f;
                !f.bottom && (f.bottom = this);
                (this.prev = f.top) && (f.top.next = this);
                f.top = this;
                this.next = null;
                return this
            };
            var kc = function (a) {
                this.items = [];
                this.length = 0;
                this.type = "set";
                if (a)for (var c = 0, b = a.length; c < b; c++)!a[c] || a[c].constructor != oa.constructor && a[c].constructor != kc || (this[this.items.length] = this.items[this.items.length] = a[c], this.length++)
            }, ib = kc.prototype;
            ib.push = function () {
                for (var a, c, b = 0, f = arguments.length; b <
                f; b++)!(a = arguments[b]) || a.constructor != oa.constructor && a.constructor != kc || (c = this.items.length, this[c] = this.items[c] = a, this.length++);
                return this
            };
            ib.pop = function () {
                this.length && delete this[this.length--];
                return this.items.pop()
            };
            ib.forEach = function (a, c) {
                for (var b = 0, f = this.items.length; b < f && !1 !== a.call(c, this.items[b], b); b++);
                return this
            };
            for (var jb in oa)oa.hasOwnProperty(jb) && (ib[jb] = function (a) {
                return function () {
                    var c = arguments;
                    return this.forEach(function (b) {
                        b[a][M](b, c)
                    })
                }
            }(jb));
            ib.attr = function (a,
                                b) {
                if (a && c.is(a, q) && c.is(a[0], "object"))for (var f = 0, r = a.length; f < r; f++)this.items[f].attr(a[f]); else for (f = 0, r = this.items.length; f < r; f++)this.items[f].attr(a, b);
                return this
            };
            ib.clear = function () {
                for (; this.length;)this.pop()
            };
            ib.splice = function (a, c, b) {
                a = 0 > a ? L(this.length + a, 0) : a;
                c = L(0, T(this.length - a, isNaN(c) && this.length || c));
                var f = [], r = [], v = [], k;
                for (k = 2; k < arguments.length; k++)v.push(arguments[k]);
                for (k = 0; k < c; k++)r.push(this[a + k]);
                for (; k < this.length - a; k++)f.push(this[a + k]);
                var A = v.length;
                for (k = 0; k <
                A + f.length; k++)this.items[a + k] = this[a + k] = k < A ? v[k] : f[k - A];
                for (k = this.items.length = this.length -= c - A; this[k];)delete this[k++];
                return new kc(r)
            };
            ib.exclude = function (a) {
                for (var c = 0, b = this.length; c < b; c++)if (this[c] == a)return this.splice(c, 1), !0
            };
            ib.animate = function (a, b, f, r) {
                !c.is(f, "function") && f || (r = f || null);
                var v = this.items.length, k = v, A = this, e;
                if (!v)return this;
                r && (e = function () {
                    !--v && r.call(A)
                });
                f = c.is(f, "string") ? f : e;
                b = c.animation(a, b, f, e);
                for (a = this.items[--k].animate(b); k--;)this.items[k] && !this.items[k].removed &&
                this.items[k].animateWith(a, b, b);
                return this
            };
            ib.insertAfter = function (a) {
                for (var c = this.items.length; c--;)this.items[c].insertAfter(a);
                return this
            };
            ib.getBBox = function () {
                for (var a = [], c = [], b = [], f = [], r = this.items.length; r--;)if (!this.items[r].removed) {
                    var v = this.items[r].getBBox();
                    a.push(v.x);
                    c.push(v.y);
                    b.push(v.x + v.width);
                    f.push(v.y + v.height)
                }
                a = T[M](0, a);
                c = T[M](0, c);
                b = L[M](0, b);
                f = L[M](0, f);
                return {x: a, y: c, x2: b, y2: f, width: b - a, height: f - c}
            };
            ib.clone = function (a) {
                a = new kc;
                for (var c = 0, b = this.items.length; c <
                b; c++)a.push(this.items[c].clone());
                return a
            };
            ib.toString = function () {
                return "Raphaël‘s set"
            };
            ib.glow = function (a) {
                var c = this.paper.set();
                this.forEach(function (b, f) {
                    var r = b.glow(a);
                    null != r && r.forEach(function (a, b) {
                        c.push(a)
                    })
                });
                return c
            };
            c.registerFont = function (a) {
                if (!a.face)return a;
                this.fonts = this.fonts || {};
                var c = {w: a.w, face: {}, glyphs: {}}, b = a.face["font-family"], f;
                for (f in a.face)a.face.hasOwnProperty(f) && (c.face[f] = a.face[f]);
                this.fonts[b] ? this.fonts[b].push(c) : this.fonts[b] = [c];
                if (!a.svg) {
                    c.face["units-per-em"] =
                        n(a.face["units-per-em"], 10);
                    for (var r in a.glyphs)if (a.glyphs.hasOwnProperty(r) && (b = a.glyphs[r], c.glyphs[r] = {
                            w: b.w,
                            k: {},
                            d: b.d && "M" + b.d.replace(/[mlcxtrv]/g, function (a) {
                                return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[a] || "M"
                            }) + "z"
                        }, b.k))for (var v in b.k)b.hasOwnProperty(v) && (c.glyphs[r].k[v] = b.k[v])
                }
                return a
            };
            aa.getFont = function (a, b, f, r) {
                r = r || "normal";
                f = f || "normal";
                b = +b || {normal: 400, bold: 700, lighter: 300, bolder: 800}[b] || 400;
                if (c.fonts) {
                    var v = c.fonts[a];
                    if (!v) {
                        a = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g,
                                "") + "(\\s|$)", "i");
                        for (var k in c.fonts)if (c.fonts.hasOwnProperty(k) && a.test(k)) {
                            v = c.fonts[k];
                            break
                        }
                    }
                    var A;
                    if (v)for (k = 0, a = v.length; k < a && (A = v[k], A.face["font-weight"] != b || A.face["font-style"] != f && A.face["font-style"] || A.face["font-stretch"] != r); k++);
                    return A
                }
            };
            aa.print = function (a, b, f, r, v, k, A) {
                k = k || "middle";
                A = L(T(A || 0, 1), -1);
                var e = G(f).split(""), H = 0, d = 0, n = "";
                c.is(r, f) && (r = this.getFont(r));
                if (r) {
                    f = (v || 16) / r.face["units-per-em"];
                    var g = r.face.bbox.split(xa);
                    v = +g[0];
                    var h = g[3] - g[1], B = 0;
                    k = +g[1] + ("baseline" ==
                        k ? h + +r.face.descent : h / 2);
                    for (var g = 0, W = e.length; g < W; g++) {
                        if ("\n" == e[g])d = q = H = 0, B += h; else var ba = d && r.glyphs[e[g - 1]] || {}, q = r.glyphs[e[g]], H = H + (d ? (ba.w || r.w) + (ba.k && ba.k[e[g]] || 0) + r.w * A : 0), d = 1;
                        q && q.d && (n += c.transformPath(q.d, ["t", H * f, B * f, "s", f, f, v, k, "t", (a - v) / f, (b - k) / f]))
                    }
                }
                return this.path(n).attr({fill: "#000", stroke: "none"})
            };
            aa.add = function (a) {
                if (c.is(a, "array"))for (var b = this.set(), f = 0, r = a.length, v; f < r; f++)v = a[f] || {}, Z.hasOwnProperty(v.type) && b.push(this[v.type]().attr(v));
                return b
            };
            c.format = function (a,
                                 b) {
                var f = c.is(b, q) ? [0].concat(b) : arguments;
                a && c.is(a, "string") && f.length - 1 && (a = a.replace(lb, function (a, c) {
                    return null == f[++c] ? "" : f[c]
                }));
                return a || ""
            };
            c.fullfill = function () {
                var a = /\{([^\}]+)\}/g, c = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, b = function (a, b, f) {
                    var r = f;
                    b.replace(c, function (a, c, b, f, v) {
                        c = c || f;
                        r && (c in r && (r = r[c]), "function" == typeof r && v && (r = r()))
                    });
                    return r = (null == r || r == f ? a : r) + ""
                };
                return function (c, f) {
                    return String(c).replace(a, function (a, c) {
                        return b(a, c, f)
                    })
                }
            }();
            c.ninja =
                function () {
                    V ? t.win.Raphael = X : delete Raphael;
                    return c
                };
            var hd = c.vml && .5 || 0;
            c.crispBound = Ya(function (a, c, b, f, r) {
                var v = {}, k;
                a = a || 0;
                c = c || 0;
                b = b || 0;
                f = f || 0;
                r = r || 0;
                k = r % 2 / 2 + hd;
                v.x = Ga(a + k) - k;
                v.y = Ga(c + k) - k;
                v.width = Ga(a + b + k) - k - v.x;
                v.height = Ga(c + f + k) - k - v.y;
                v["stroke-width"] = r;
                0 === v.width && 0 !== b && (v.width = 1);
                0 === v.height && 0 !== f && (v.height = 1);
                return v
            }, c);
            oa.crisp = function () {
                var a = this.attrs, b, f = this.attr(["x", "y", "width", "height", "stroke-width"]), f = c.crispBound(f.x, f.y, f.width, f.height, f["stroke-width"]);
                for (b in f)a[b] ===
                f[b] && delete f[b];
                return this.attr(f)
            };
            c.st = ib;
            c.define = function (a, b, f, r, v, k) {
                var A;
                if (c.is(a, q))for (k = 0, A = a.length; k < A; k++)c.define(a[k]); else if (c.is(a, "object"))c.define(a.name, a[a.name], a.ca, a.fn, a.e, a.data); else if (a && !c.fn[a])return c.fn[a] = function () {
                    var k = arguments, A = b.apply(this, k), e;
                    if (r && c.is(r, "object"))for (e in r)A[e] = r[e];
                    if (v && c.is(v, "object"))for (e in v)A[e] && A[e](v[e]);
                    if (f) {
                        if (c.is(f, "function"))A.ca[a] = f; else for (e in f)A.ca[e] = f[e];
                        A.ca[a] && (c._lastArgIfGroup(k, !0), A.attr(a, Y.call(k)))
                    }
                    return A
                },
                f && (c.fn[a].ca = f), r && (c.fn[a].fn = r), v && (c.fn[a].e = v), k && (c.fn[a].data = k), c.fn[a]
            };
            (function (a, b, f) {
                function r() {
                    /in/.test(a.readyState) ? setTimeout(r, 9) : c.eve("raphael.DOMload")
                }

                null == a.readyState && a.addEventListener && (a.addEventListener(b, f = function () {
                    a.removeEventListener(b, f, !1);
                    a.readyState = "complete"
                }, !1), a.readyState = "loading");
                r()
            })(document, "DOMContentLoaded");
            p.on("raphael.DOMload", function () {
                m = !0
            });
            (function () {
                if (c.svg) {
                    var a = String, b = parseFloat, f = parseInt, r = Math, v = r.max, k = r.abs, A = r.pow,
                        e = r.sqrt, H = /[, ]+/, d = !(!/AppleWebKit/.test(c._g.win.navigator.userAgent) || /Chrome/.test(c._g.win.navigator.userAgent) && !(29 > c._g.win.navigator.appVersion.match(/Chrome\/(\d+)\./)[1])), n = c.eve, g = {
                            block: "M5,0 0,2.5 5,5z",
                            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                            open: "M6,1 1,3.5 6,6",
                            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                        }, h = {};
                    c.toString = function () {
                        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                    };
                    c._url = "";
                    var B = function (a, c) {
                            var b =
                                a.gradient;
                            if (b) {
                                if (b === c)return;
                                b.refCount--;
                                b.refCount || b.parentNode.removeChild(b);
                                delete a.gradient
                            }
                            c && (a.gradient = c, c.refCount++)
                        }, W = c._createNode = function (b, f) {
                            if (f) {
                                "string" == typeof b && (b = W(b));
                                for (var r in f)f.hasOwnProperty(r) && ("xlink:" == r.substring(0, 6) ? b.setAttributeNS("http://www.w3.org/1999/xlink", r.substring(6), a(f[r])) : b.setAttribute(r, a(f[r])))
                            } else b = c._g.doc.createElementNS("http://www.w3.org/2000/svg", b);
                            return b
                        }, ba = {userSpaceOnUse: "userSpaceOnUse", objectBoundingBox: "objectBoundingBox"},
                        q = {pad: "pad", redlect: "reflect", repeat: "repeat"}, Q = function (f, H) {
                            if (!f.paper || !f.paper.defs)return 0;
                            var d = "linear", n = f.paper, g = (n.id + "-" + H).replace(/[\(\)\s%:,\xb0#]/g, "_"), h = .5, Q = .5, J, E, m, u, L, p = f.node, t = p.style, ua = c._g.doc.getElementById(g);
                            if (!ua) {
                                H = a(H).replace(c._radial_gradient, function (a, c) {
                                    d = "radial";
                                    c = c && c.split(",") || [];
                                    u = c[5];
                                    L = c[6];
                                    var f = c[0], r = c[1], v = c[2], k = c[3], H = c[4], n = f && r, g;
                                    v && (J = /\%/.test(v) ? v : b(v));
                                    if (u === ba.userSpaceOnUse)return n && (h = f, Q = r), k && H && (E = k, m = H, n || (h = E, Q = m)), "";
                                    n && (h =
                                        b(f), Q = b(r), f = 2 * (.5 < Q) - 1, .25 < (g = A(h - .5, 2)) + A(Q - .5, 2) && .25 > g && (Q = e(.25 - g) * f + .5) && .5 !== Q && (Q = Q.toFixed(5) - 1E-5 * f));
                                    k && H && (E = b(k), m = b(H), f = 2 * (.5 < m) - 1, .25 < (g = A(E - .5, 2)) + A(m - .5, 2) && .25 > g && (m = e(.25 - g) * f + .5) && .5 !== m && (m = m.toFixed(5) - 1E-5 * f), n || (h = E, Q = m));
                                    return ""
                                });
                                H = H.split(/\s*\-\s*/);
                                if ("linear" == d) {
                                    var ua = H.shift(), P = ua.match(/\((.*)\)/), s, P = P && P[1] && P[1].split(/\s*\,\s*/), ua = -b(ua);
                                    if (isNaN(ua))return null;
                                    P && P.length ? (P[0] in ba ? (u = P.shift(), P[0] in q && (L = P.shift())) : (P[4] && (u = P[4]), P[5] && (L = P[5])),
                                        s = [P[0] || "0%", P[1] || "0%", P[2] || "100%", P[3] || "0%"]) : (s = [0, 0, r.cos(c.rad(ua)), r.sin(c.rad(ua))], ua = 1 / (v(k(s[2]), k(s[3])) || 1), s[2] *= ua, s[3] *= ua, 0 > s[2] && (s[0] = -s[2], s[2] = 0), 0 > s[3] && (s[1] = -s[3], s[3] = 0))
                                }
                                P = c._parseDots(H);
                                if (!P)return null;
                                ua = W(d + "Gradient", {id: g});
                                ua.refCount = 0;
                                u in ba && ua.setAttribute("gradientUnits", a(u));
                                L in q && ua.setAttribute("spreadMethod", a(L));
                                "radial" === d ? (void 0 !== J && ua.setAttribute("r", a(J)), void 0 !== E && void 0 !== m && (ua.setAttribute("cx", a(E)), ua.setAttribute("cy", a(m))), ua.setAttribute("fx",
                                    a(h)), ua.setAttribute("fy", a(Q))) : W(ua, {x1: s[0], y1: s[1], x2: s[2], y2: s[3]});
                                s = 0;
                                for (var S = P.length; s < S; s++)ua.appendChild(W("stop", {
                                    offset: P[s].offset ? P[s].offset : s ? "100%" : "0%",
                                    "stop-color": P[s].color || "#fff",
                                    "stop-opacity": void 0 === P[s].opacity ? 1 : P[s].opacity
                                }));
                                n.defs.appendChild(ua)
                            }
                            B(f, ua);
                            W(p, {fill: "url('" + c._url + "#" + g + "')", opacity: 1, "fill-opacity": 1});
                            t.fill = "";
                            t.opacity = 1;
                            return t.fillOpacity = 1
                        }, E = function (a) {
                            var c = a.getBBox(1);
                            W(a.pattern, {
                                patternTransform: a.matrix.invert() + " translate(" + c.x +
                                "," + c.y + ")"
                            })
                        }, J = function (b, f, r) {
                            if ("path" == b.type) {
                                for (var v = a(f).toLowerCase().split("-"), k = b.paper, A = r ? "end" : "start", e = b.node, H = b.attrs, d = H["stroke-width"], n = v.length, B = "classic", ba, q, Q = 3, E = 3, J = 5; n--;)switch (v[n]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        B = v[n];
                                        break;
                                    case "wide":
                                        E = 5;
                                        break;
                                    case "narrow":
                                        E = 2;
                                        break;
                                    case "long":
                                        Q = 5;
                                        break;
                                    case "short":
                                        Q = 2
                                }
                                "open" == B ? (Q += 2, E += 2, J += 2, ba = 1, q = r ? 4 : 1, v = {
                                    fill: "none",
                                    stroke: H.stroke
                                }) : (q = ba = Q / 2, v = {fill: H.stroke, stroke: "none"});
                                b._.arrows ? r ? (b._.arrows.endPath && h[b._.arrows.endPath]--, b._.arrows.endMarker && h[b._.arrows.endMarker]--) : (b._.arrows.startPath && h[b._.arrows.startPath]--, b._.arrows.startMarker && h[b._.arrows.startMarker]--) : b._.arrows = {};
                                if ("none" != B) {
                                    var n = "raphael-marker-" + B, m = "raphael-marker-" + A + B + Q + E + "-obj" + b.id;
                                    c._g.doc.getElementById(n) ? h[n]++ : (k.defs.appendChild(W(W("path"), {
                                        "stroke-linecap": "round",
                                        d: g[B],
                                        id: n
                                    })), h[n] = 1);
                                    var u = c._g.doc.getElementById(m);
                                    u ? (h[m]++, Q = u.getElementsByTagName("use")[0]) : (u = W(W("marker"),
                                        {
                                            id: m,
                                            markerHeight: E,
                                            markerWidth: Q,
                                            orient: "auto",
                                            refX: q,
                                            refY: E / 2
                                        }), Q = W(W("use"), {
                                        "xlink:href": "#" + n,
                                        transform: (r ? "rotate(180 " + Q / 2 + " " + E / 2 + ") " : "") + "scale(" + Q / J + "," + E / J + ")",
                                        "stroke-width": (1 / ((Q / J + E / J) / 2)).toFixed(4)
                                    }), u.appendChild(Q), k.defs.appendChild(u), h[m] = 1);
                                    W(Q, v);
                                    k = ba * ("diamond" != B && "oval" != B);
                                    r ? (r = b._.arrows.startdx * d || 0, d = c.getTotalLength(H.path) - k * d) : (r = k * d, d = c.getTotalLength(H.path) - (b._.arrows.enddx * d || 0));
                                    v = {};
                                    v["marker-" + A] = "url('" + c._url + "#" + m + "')";
                                    if (d || r)v.d = c.getSubpath(H.path,
                                        r, d);
                                    W(e, v);
                                    b._.arrows[A + "Path"] = n;
                                    b._.arrows[A + "Marker"] = m;
                                    b._.arrows[A + "dx"] = k;
                                    b._.arrows[A + "Type"] = B;
                                    b._.arrows[A + "String"] = f
                                } else r ? (r = b._.arrows.startdx * d || 0, d = c.getTotalLength(H.path) - r) : (r = 0, d = c.getTotalLength(H.path) - (b._.arrows.enddx * d || 0)), b._.arrows[A + "Path"] && W(e, {d: c.getSubpath(H.path, r, d)}), delete b._.arrows[A + "Path"], delete b._.arrows[A + "Marker"], delete b._.arrows[A + "dx"], delete b._.arrows[A + "Type"], delete b._.arrows[A + "String"];
                                for (v in h)h.hasOwnProperty(v) && !h[v] && (b = c._g.doc.getElementById(v)) &&
                                b.parentNode.removeChild(b)
                            }
                        }, m = {
                            "": [0],
                            none: [0],
                            "-": [3, 1],
                            ".": [1, 1],
                            "-.": [3, 1, 1, 1],
                            "-..": [3, 1, 1, 1, 1, 1],
                            ". ": [1, 3],
                            "- ": [4, 3],
                            "--": [8, 3],
                            "- .": [4, 3, 1, 3],
                            "--.": [8, 3, 1, 3],
                            "--..": [8, 3, 1, 3, 1, 3]
                        }, u = function (b, f, r) {
                            var v = m[a(f).toLowerCase()], k, A;
                            if (f = v || void 0 !== f && [].concat(f)) {
                                k = b.attrs["stroke-width"] || 1;
                                r = {round: k, square: k, butt: 0}[b.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0;
                                A = f.length;
                                k = v ? k : 1;
                                for (v = []; A--;)v[A] = f[A] * k + (A % 2 ? 1 : -1) * r, 0 > v[A] && (v[A] = 0);
                                c.is(f, "array") && W(b.node, {"stroke-dasharray": v.join(",")})
                            }
                        },
                        L = function (a, c) {
                            for (var b in c)n("raphael.attr." + b + "." + a.id, a, c[b], b), a.ca[b] && a.attr(b, c[b])
                        }, p = c._setFillAndStroke = function (b, r) {
                            if (b.paper.canvas) {
                                var A = b.node, e = b.attrs, n = b.paper, g = A.style, h = g.visibility;
                                g.visibility = "hidden";
                                for (var ba in r)if (r.hasOwnProperty(ba) && c._availableAttrs.hasOwnProperty(ba)) {
                                    var q = r[ba];
                                    e[ba] = q;
                                    switch (ba) {
                                        case "blur":
                                            b.blur(q);
                                            break;
                                        case "href":
                                        case "title":
                                        case "target":
                                            var m = A.parentNode;
                                            if ("a" != m.tagName.toLowerCase()) {
                                                if ("" == q)break;
                                                var L = W("a");
                                                L.raphael = !0;
                                                L.raphaelid =
                                                    A.raphaelid;
                                                m.insertBefore(L, A);
                                                L.appendChild(A);
                                                m = L
                                            }
                                            "target" == ba ? m.setAttributeNS("http://www.w3.org/1999/xlink", "show", "blank" == q ? "new" : q) : m.setAttributeNS("http://www.w3.org/1999/xlink", ba, q);
                                            A.titleNode = m;
                                            break;
                                        case "cursor":
                                            g.cursor = q;
                                            break;
                                        case "transform":
                                            b.transform(q);
                                            break;
                                        case "rotation":
                                            c.is(q, "array") ? b.rotate.apply(b, q) : b.rotate(q);
                                            break;
                                        case "arrow-start":
                                            J(b, q);
                                            break;
                                        case "arrow-end":
                                            J(b, q, 1);
                                            break;
                                        case "clip-path":
                                            var ua = !0;
                                        case "clip-rect":
                                            m = !ua && a(q).split(H);
                                            b._.clipispath = !!ua;
                                            if (ua || 4 == m.length) {
                                                b.clip && b.clip.parentNode.parentNode.removeChild(b.clip.parentNode);
                                                var L = W("clipPath"), p = W(ua ? "path" : "rect");
                                                L.id = c.createUUID();
                                                W(p, ua ? {
                                                    d: q ? e["clip-path"] = c._pathToAbsolute(q) : c._availableAttrs.path,
                                                    fill: "none"
                                                } : {
                                                    x: m[0],
                                                    y: m[1],
                                                    width: m[2],
                                                    height: m[3],
                                                    transform: b.matrix.invert()
                                                });
                                                L.appendChild(p);
                                                n.defs.appendChild(L);
                                                W(A, {"clip-path": "url('" + c._url + "#" + L.id + "')"});
                                                b.clip = p
                                            }
                                            !q && (q = A.getAttribute("clip-path")) && ((q = c._g.doc.getElementById(q.replace(/(^url\(#|\)$)/g, ""))) && q.parentNode.removeChild(q),
                                                W(A, {"clip-path": ""}), delete b.clip);
                                            break;
                                        case "path":
                                            "path" == b.type && (W(A, {d: q ? e.path = c._pathToAbsolute(q) : c._availableAttrs.path}), b._.dirty = 1, b._.arrows && ("startString" in b._.arrows && J(b, b._.arrows.startString), "endString" in b._.arrows && J(b, b._.arrows.endString, 1)));
                                            break;
                                        case "width":
                                            if (A.setAttribute(ba, q), b._.dirty = 1, e.fx)ba = "x", q = e.x; else break;
                                        case "x":
                                            e.fx && (q = -e.x - (e.width || 0));
                                        case "rx":
                                            if ("rx" == ba && "rect" == b.type)break;
                                        case "cx":
                                            A.setAttribute(ba, q);
                                            b.pattern && E(b);
                                            b._.dirty = 1;
                                            break;
                                        case "height":
                                            if (A.setAttribute(ba, q), b._.dirty = 1, e.fy)ba = "y", q = e.y; else break;
                                        case "y":
                                            e.fy && (q = -e.y - (e.height || 0));
                                        case "ry":
                                            if ("ry" == ba && "rect" == b.type)break;
                                        case "cy":
                                            A.setAttribute(ba, q);
                                            b.pattern && E(b);
                                            b._.dirty = 1;
                                            break;
                                        case "r":
                                            "rect" == b.type ? W(A, {rx: q, ry: q}) : A.setAttribute(ba, q);
                                            b._.dirty = 1;
                                            break;
                                        case "src":
                                            "image" == b.type && A.setAttributeNS("http://www.w3.org/1999/xlink", "href", q);
                                            break;
                                        case "stroke-width":
                                            if (1 != b._.sx || 1 != b._.sy)q /= v(k(b._.sx), k(b._.sy)) || 1;
                                            n._vbSize && (q *= n._vbSize);
                                            d && 0 ===
                                            q && (q = 1E-6);
                                            A.setAttribute(ba, q);
                                            e["stroke-dasharray"] && u(b, e["stroke-dasharray"], r);
                                            b._.arrows && ("startString" in b._.arrows && J(b, b._.arrows.startString), "endString" in b._.arrows && J(b, b._.arrows.endString, 1));
                                            break;
                                        case "stroke-dasharray":
                                            u(b, q, r);
                                            break;
                                        case "fill":
                                            var s = a(q).match(c._ISURL);
                                            if (s) {
                                                var L = W("pattern"), t = W("image");
                                                L.id = c.createUUID();
                                                W(L, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                                                W(t, {x: 0, y: 0, "xlink:href": s[1]});
                                                L.appendChild(t);
                                                (function (a) {
                                                    c._preload(s[1], function () {
                                                        var c =
                                                            this.offsetWidth, b = this.offsetHeight;
                                                        W(a, {width: c, height: b});
                                                        W(t, {width: c, height: b});
                                                        n.safari()
                                                    })
                                                })(L);
                                                n.defs.appendChild(L);
                                                g.fill = "url('" + c._url + "#" + L.id + "')";
                                                W(A, {fill: g.fill});
                                                b.pattern = L;
                                                b.pattern && E(b);
                                                break
                                            }
                                            m = c.getRGB(q);
                                            if (!m.error)delete r.gradient, delete e.gradient, !c.is(e.opacity, "undefined") && c.is(r.opacity, "undefined") && W(A, {opacity: e.opacity}), !c.is(e["fill-opacity"], "undefined") && c.is(r["fill-opacity"], "undefined") && W(A, {"fill-opacity": e["fill-opacity"]}), b.gradient && B(b); else if (("circle" ==
                                                b.type || "ellipse" == b.type || "r" != a(q).charAt()) && Q(b, q)) {
                                                if ("opacity" in e || "fill-opacity" in e)if (m = c._g.doc.getElementById(A.getAttribute("fill").replace(/^url\(#|\)$/g, "")))m = m.getElementsByTagName("stop"), W(m[m.length - 1], {"stop-opacity": ("opacity" in e ? e.opacity : 1) * ("fill-opacity" in e ? e["fill-opacity"] : 1)});
                                                e.gradient = q;
                                                e.fill = "none";
                                                g.fill = "";
                                                break
                                            }
                                            m.hasOwnProperty("opacity") ? (W(A, {"fill-opacity": g.fillOpacity = 1 < m.opacity ? m.opacity / 100 : m.opacity}), b._.fillOpacityDirty = !0) : b._.fillOpacityDirty && c.is(e["fill-opacity"],
                                                "undefined") && c.is(r["fill-opacity"], "undefined") && (A.removeAttribute("fill-opacity"), g.fillOpacity = "", delete b._.fillOpacityDirty);
                                        case "stroke":
                                            m = c.getRGB(q);
                                            A.setAttribute(ba, m.hex);
                                            g[ba] = m.hex;
                                            "stroke" == ba && (m.hasOwnProperty("opacity") ? (W(A, {"stroke-opacity": g.strokeOpacity = 1 < m.opacity ? m.opacity / 100 : m.opacity}), b._.strokeOpacityDirty = !0) : b._.strokeOpacityDirty && c.is(e["stroke-opacity"], "undefined") && c.is(r["stroke-opacity"], "undefined") && (A.removeAttribute("stroke-opacity"), g.strokeOpacity = "",
                                                delete b._.strokeOpacityDirty), b._.arrows && ("startString" in b._.arrows && J(b, b._.arrows.startString), "endString" in b._.arrows && J(b, b._.arrows.endString, 1)));
                                            break;
                                        case "gradient":
                                            "circle" != b.type && "ellipse" != b.type && "r" == a(q).charAt() || Q(b, q);
                                            break;
                                        case "line-height":
                                        case "vertical-align":
                                            break;
                                        case "visibility":
                                            "hidden" === q ? b.hide() : b.show();
                                            break;
                                        case "opacity":
                                            e.gradient && !e.hasOwnProperty("stroke-opacity") && W(A, {"stroke-opacity": 1 < q ? q / 100 : q});
                                        case "fill-opacity":
                                            if (e.gradient) {
                                                if (m = c._g.doc.getElementById(A.getAttribute("fill").replace(/^url\(#|\)$/g,
                                                        "")))m = m.getElementsByTagName("stop"), W(m[m.length - 1], {"stop-opacity": q});
                                                break
                                            }
                                        default:
                                            "font-size" == ba && (q = f(q, 10) + "px"), m = ba.replace(/(\-.)/g, function (a) {
                                                return a.substring(1).toUpperCase()
                                            }), g[m] = q, b._.dirty = 1, A.setAttribute(ba, q)
                                    }
                                }
                                "text" === b.type && P(b, r);
                                g.visibility = h
                            }
                        }, P = function (f, r) {
                            if ("text" == f.type && (r.hasOwnProperty("text") || r.hasOwnProperty("font") || r.hasOwnProperty("font-size") || r.hasOwnProperty("x") || r.hasOwnProperty("y") || r.hasOwnProperty("line-height") || r.hasOwnProperty("vertical-align"))) {
                                var v =
                                    f.attrs, k = f.node, A = k.firstChild && c._g.doc.defaultView.getComputedStyle(k.firstChild, "") ? b(c._g.doc.defaultView.getComputedStyle(k.firstChild, "").getPropertyValue("font-size")) : 10, e = b(r["line-height"] || v["line-height"]) || 1.2 * A, H = v.hasOwnProperty("vertical-align") ? v["vertical-align"] : "middle";
                                isNaN(e) && (e = 1.2 * A);
                                c.is(r.text, "array") && (r.text = r.text.join("<br>"));
                                H = "top" === H ? -.5 : "bottom" === H ? .5 : 0;
                                if (r.hasOwnProperty("text") && (r.text !== v.text || f._textdirty)) {
                                    for (v.text = r.text; k.firstChild;)k.removeChild(k.firstChild);
                                    for (var d = a(r.text).split(/\n|<br\s*?\/?>/ig), A = [], n, g = 0, h = d.length; g < h; g++)n = W("tspan"), g ? W(n, {
                                        dy: e,
                                        x: v.x
                                    }) : W(n, {
                                        dy: e * d.length * H,
                                        x: v.x
                                    }), d[g] || (n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), d[g] = " "), n.appendChild(c._g.doc.createTextNode(d[g])), k.appendChild(n), A[g] = n;
                                    f._textdirty = !1
                                } else for (A = k.getElementsByTagName("tspan"), g = 0, h = A.length; g < h; g++)g ? W(A[g], {
                                    dy: e,
                                    x: v.x
                                }) : W(A[0], {dy: e * A.length * H, x: v.x});
                                W(k, {x: v.x, y: v.y});
                                f._.dirty = 1;
                                k = f._getBBox();
                                e = v.y - (k.y + k.height /
                                    2);
                                if (k.isCalculated)switch (v["vertical-align"]) {
                                    case "top":
                                        e = .75 * k.height;
                                        break;
                                    case "bottom":
                                        e = -(.25 * k.height);
                                        break;
                                    default:
                                        e = v.y - (k.y + .25 * k.height)
                                }
                                e && c.is(e, "finite") && A[0] && W(A[0], {dy: e})
                            }
                        }, t = function (a, b, f) {
                            f = f || b;
                            f.canvas && f.canvas.appendChild(a);
                            this.node = this[0] = a;
                            a.raphael = !0;
                            a.raphaelid = this.id = c._oid++;
                            this.matrix = c.matrix();
                            this.realPath = null;
                            this.attrs = this.attrs || {};
                            this.followers = this.followers || [];
                            this.paper = b;
                            this.ca = this.customAttributes = this.customAttributes || new b._CustomAttributes;
                            this._ = {transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1};
                            this.parent = f;
                            !f.bottom && (f.bottom = this);
                            (this.prev = f.top) && (f.top.next = this);
                            f.top = this;
                            this.next = null
                        }, ua = c.el;
                    t.prototype = ua;
                    ua.constructor = t;
                    c._engine.getNode = function (a) {
                        a = a.node || a[0].node;
                        return a.titleNode || a
                    };
                    c._engine.getLastNode = function (a) {
                        a = a.node || a[a.length - 1].node;
                        return a.titleNode || a
                    };
                    ua.rotate = function (c, f, r) {
                        if (this.removed)return this;
                        c = a(c).split(H);
                        c.length - 1 && (f = b(c[1]), r = b(c[2]));
                        c = b(c[0]);
                        null == r && (f = r);
                        if (null == f ||
                            null == r)r = this.getBBox(1), f = r.x + r.width / 2, r = r.y + r.height / 2;
                        this.transform(this._.transform.concat([["r", c, f, r]]));
                        return this
                    };
                    ua.scale = function (c, f, r, v) {
                        var k;
                        if (this.removed)return this;
                        c = a(c).split(H);
                        c.length - 1 && (f = b(c[1]), r = b(c[2]), v = b(c[3]));
                        c = b(c[0]);
                        null == f && (f = c);
                        null == v && (r = v);
                        if (null == r || null == v)k = this.getBBox(1);
                        r = null == r ? k.x + k.width / 2 : r;
                        v = null == v ? k.y + k.height / 2 : v;
                        this.transform(this._.transform.concat([["s", c, f, r, v]]));
                        return this
                    };
                    ua.translate = function (c, f) {
                        if (this.removed)return this;
                        c = a(c).split(H);
                        c.length - 1 && (f = b(c[1]));
                        c = b(c[0]) || 0;
                        this.transform(this._.transform.concat([["t", c, +f || 0]]));
                        return this
                    };
                    ua.transform = function (a) {
                        var b = this._;
                        if (null == a)return b.transform;
                        c._extractTransform(this, a);
                        this.clip && !b.clipispath && W(this.clip, {transform: this.matrix.invert()});
                        this.pattern && E(this);
                        this.node && W(this.node, {transform: this.matrix});
                        if (1 != b.sx || 1 != b.sy)a = this.attrs.hasOwnProperty("stroke-width") ? this.attrs["stroke-width"] : 1, this.attr({"stroke-width": a});
                        return this
                    };
                    ua.hide =
                        function () {
                            !this.removed && this.paper.safari(this.node.style.display = "none");
                            return this
                        };
                    ua.show = function () {
                        !this.removed && this.paper.safari(this.node.style.display = "");
                        return this
                    };
                    ua.remove = function () {
                        if (!this.removed && this.parent.canvas) {
                            var a = c._engine.getNode(this), b = this.paper, f = b.defs;
                            b.__set__ && b.__set__.exclude(this);
                            n.unbind("raphael.*.*." + this.id);
                            for (this.gradient && f && B(this); f = this.followers.pop();)f.el.remove();
                            for (; f = this.bottom;)f.remove();
                            this._drag && this.undrag();
                            if (this.events)for (; f =
                                                       this.events.pop();)f.unbind();
                            this.parent.canvas.removeChild(a);
                            this.removeData();
                            delete b._elementsById[this.id];
                            c._tear(this, this.parent);
                            for (f in this)this[f] = "function" === typeof this[f] ? c._removedFactory(f) : null;
                            this.removed = !0
                        }
                    };
                    ua._getBBox = function () {
                        var a = this.node, c = {}, b = this.attrs, f, r;
                        "none" === a.style.display && (this.show(), r = !0);
                        try {
                            c = a.getBBox(), "text" == this.type && (void 0 === c.x && (c.isCalculated = !0, f = b["text-anchor"], c.x = (b.x || 0) - c.width * ("start" === f ? 0 : "middle" === f ? .5 : 1)), void 0 === c.y && (c.isCalculated = !0, f = b["vertical-align"], c.y = (b.y || 0) - c.height * ("bottom" === f ? 1 : "middle" === f ? .5 : 0)))
                        } catch (v) {
                        } finally {
                            c = c || {}
                        }
                        r && this.hide();
                        return c
                    };
                    ua.attr = function (a, b) {
                        if (this.removed)return this;
                        if (null == a) {
                            var f = {}, r;
                            for (r in this.attrs)this.attrs.hasOwnProperty(r) && (f[r] = this.attrs[r]);
                            f.gradient && "none" == f.fill && (f.fill = f.gradient) && delete f.gradient;
                            f.transform = this._.transform;
                            f.visibility = "none" === this.node.style.display ? "hidden" : "visible";
                            return f
                        }
                        if (null == b && c.is(a, "string")) {
                            if ("fill" == a && "none" ==
                                this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
                            if ("transform" == a)return this._.transform;
                            if ("visibility" == a)return "none" === this.node.style.display ? "hidden" : "visible";
                            var f = a.split(H), v = {}, k = 0;
                            for (r = f.length; k < r; k++)a = f[k], a in this.attrs ? v[a] = this.attrs[a] : c.is(this.ca[a], "function") ? v[a] = this.ca[a].def : v[a] = c._availableAttrs[a];
                            return r - 1 ? v : v[f[0]]
                        }
                        if (null == b && c.is(a, "array")) {
                            v = {};
                            k = 0;
                            for (r = a.length; k < r; k++)v[a[k]] = this.attr(a[k]);
                            return v
                        }
                        null != b ? (f = {}, f[a] = b) : null != a && c.is(a,
                            "object") && (f = a);
                        for (k in f)n("raphael.attr." + k + "." + this.id, this, f[k], k);
                        var A = {};
                        for (k in this.ca)if (this.ca[k] && f.hasOwnProperty(k) && c.is(this.ca[k], "function") && !this.ca["_invoked" + k]) {
                            this.ca["_invoked" + k] = !0;
                            r = this.ca[k].apply(this, [].concat(f[k]));
                            delete this.ca["_invoked" + k];
                            for (v in r)r.hasOwnProperty(v) && (f[v] = r[v]);
                            this.attrs[k] = f[k];
                            !1 === r && (A[k] = f[k], delete f[k])
                        }
                        p(this, f);
                        var e, k = 0;
                        for (r = this.followers.length; k < r; k++)e = this.followers[k], e.cb && !e.cb.call(e.el, f, this) || e.el.attr(f);
                        for (v in A)f[v] =
                            A[v];
                        return this
                    };
                    ua.blur = function (a) {
                        if (0 !== +a) {
                            var b = W("filter"), f = W("feGaussianBlur");
                            this.attrs.blur = a;
                            b.id = c.createUUID();
                            W(f, {stdDeviation: +a || 1.5});
                            b.appendChild(f);
                            this.paper.defs.appendChild(b);
                            this._blur = b;
                            W(this.node, {filter: "url('" + c._url + "#" + b.id + "')"})
                        } else this._blur && (this._blur.parentNode.removeChild(this._blur), delete this._blur, delete this.attrs.blur), this.node.removeAttribute("filter")
                    };
                    ua.on = function (a, b) {
                        if (this.removed)return this;
                        var f = b;
                        c.supportsTouch && (a = c._touchMap[a] ||
                            "click" === a && "touchstart" || a, f = function (a) {
                            a.preventDefault();
                            b()
                        });
                        this.node["on" + a] = f;
                        return this
                    };
                    c._engine.path = function (a, c, b) {
                        var f = W("path");
                        a = new t(f, a, b);
                        a.type = "path";
                        p(a, c);
                        L(a, c);
                        return a
                    };
                    c._engine.group = function (a, c, b) {
                        var f = W("g");
                        a = new t(f, a, b);
                        a.type = "group";
                        a.canvas = a.node;
                        a.top = a.bottom = null;
                        a._id = c || "";
                        c && f.setAttribute("class", "raphael-group-" + a.id + "-" + c);
                        return a
                    };
                    c._engine.circle = function (a, c, b) {
                        var f = W("circle");
                        a = new t(f, a, b);
                        a.type = "circle";
                        p(a, c);
                        L(a, c);
                        return a
                    };
                    c._engine.rect =
                        function (a, c, b) {
                            var f = W("rect");
                            a = new t(f, a, b);
                            a.type = "rect";
                            c.rx = c.ry = c.r;
                            p(a, c);
                            L(a, c);
                            return a
                        };
                    c._engine.ellipse = function (a, c, b) {
                        var f = W("ellipse");
                        a = new t(f, a, b);
                        a.type = "ellipse";
                        p(a, c);
                        L(a, c);
                        return a
                    };
                    c._engine.image = function (a, c, b) {
                        var f = W("image");
                        a = new t(f, a, b);
                        a.type = "image";
                        f.setAttribute("preserveAspectRatio", "none");
                        p(a, c);
                        L(a, c);
                        return a
                    };
                    c._engine.text = function (a, c, b) {
                        var f = W("text");
                        a = new t(f, a, b);
                        a.type = "text";
                        a._textdirty = !0;
                        p(a, c);
                        L(a, c);
                        return a
                    };
                    c._engine.setSize = function (a,
                                                  c) {
                        this.width = a || this.width;
                        this.height = c || this.height;
                        this.canvas.setAttribute("width", this.width);
                        this.canvas.setAttribute("height", this.height);
                        this._viewBox && this.setViewBox.apply(this, this._viewBox);
                        return this
                    };
                    c._engine.create = function () {
                        var a = c._getContainer.apply(0, arguments), b = a && a.container, f = a.x, r = a.y, v = a.width, a = a.height;
                        if (!b)throw Error("SVG container not found.");
                        var k = W("svg"), A, f = f || 0, r = r || 0, v = v || 512, a = a || 342;
                        W(k, {height: a, version: 1.1, width: v, xmlns: "http://www.w3.org/2000/svg"});
                        1 == b ? (k.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;position:absolute;left:" + f + "px;top:" + r + "px", c._g.doc.body.appendChild(k), A = 1) : (k.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;position:relative",
                            b.firstChild ? b.insertBefore(k, b.firstChild) : b.appendChild(k));
                        b = new c._Paper;
                        b.width = v;
                        b.height = a;
                        b.canvas = k;
                        W(k, {id: "raphael-paper-" + b.id});
                        b.clear();
                        b._left = b._top = 0;
                        A && (b.renderfix = function () {
                        });
                        b.renderfix();
                        return b
                    };
                    c._engine.setViewBox = function (a, c, b, f, r) {
                        n("raphael.setViewBox", this, this._viewBox, [a, c, b, f, r]);
                        var k = v(b / this.width, f / this.height), A = this.top, e = r ? "meet" : "xMinYMin", H;
                        null == a ? (this._vbSize && (k = 1), delete this._vbSize, H = "0 0 " + this.width + " " + this.height) : (this._vbSize = k, H = a + " " + c +
                            " " + b + " " + f);
                        for (W(this.canvas, {
                            viewBox: H,
                            preserveAspectRatio: e
                        }); k && A;)e = "stroke-width" in A.attrs ? A.attrs["stroke-width"] : 1, A.attr({"stroke-width": e}), A._.dirty = 1, A._.dirtyT = 1, A = A.prev;
                        this._viewBox = [a, c, b, f, !!r];
                        return this
                    };
                    c.prototype.renderfix = function () {
                        var a = this.canvas, c = a.style, b;
                        try {
                            b = a.getScreenCTM() || a.createSVGMatrix()
                        } catch (f) {
                            b = a.createSVGMatrix()
                        }
                        a = -b.e % 1;
                        b = -b.f % 1;
                        if (a || b)a && (this._left = (this._left + a) % 1, c.left = this._left + "px"), b && (this._top = (this._top + b) % 1, c.top = this._top + "px")
                    };
                    c.prototype._desc =
                        function (a) {
                            var b = this.desc;
                            if (b)for (; b.firstChild;)b.removeChild(b.firstChild); else this.desc = b = W("desc"), this.canvas.appendChild(b);
                            b.appendChild(c._g.doc.createTextNode(c.is(a, "string") ? a : "Created with Red Raphaël " + c.version))
                        };
                    c.prototype.clear = function () {
                        var a;
                        for (n("raphael.clear", this); a = this.bottom;)a.remove();
                        for (a = this.canvas; a.firstChild;)a.removeChild(a.firstChild);
                        this.bottom = this.top = null;
                        a.appendChild(this.desc = W("desc"));
                        a.appendChild(this.defs = W("defs"))
                    };
                    c.prototype.remove = function () {
                        var a;
                        for (n("raphael.remove", this); a = this.bottom;)a.remove();
                        this.defs && this.defs.parentNode.removeChild(this.defs);
                        this.desc && this.desc.parentNode.removeChild(this.desc);
                        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                        for (a in this)this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                        this.removed = !0
                    };
                    var S = c.st, s;
                    for (s in ua)ua.hasOwnProperty(s) && !S.hasOwnProperty(s) && (S[s] = function (a) {
                        return function () {
                            var c = arguments;
                            return this.forEach(function (b) {
                                b[a].apply(b, c)
                            })
                        }
                    }(s))
                }
            })();
            (function () {
                if (c.vml) {
                    var a = String, b = parseFloat, f = Math, r = f.round, v = f.max, k = f.min, A = f.sqrt, e = f.abs, H = /[, ]+/, d = c.eve, n = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    }, g = /([clmz]),?([^clmz]*)/gi, h = / progid:\S+Blur\([^\)]+\)/g, B = /-?[^,\s-]+/g, W = {
                        path: 1,
                        rect: 1,
                        image: 1
                    }, q = {circle: 1, ellipse: 1}, ba = function (b) {
                        var f = /[ahqstv]/ig, v = c._pathToAbsolute;
                        a(b).match(f) && (v = c._path2curve);
                        f = /[clmz]/g;
                        if (v == c._pathToAbsolute && !a(b).match(f))return (b = a(b).replace(g, function (a, c, b) {
                                var f = [], v = "m" == c.toLowerCase(),
                                    k = n[c];
                                b.replace(B, function (a) {
                                    v && 2 == f.length && (k += f + n["m" == c ? "l" : "L"], f = []);
                                    f.push(r(21600 * a))
                                });
                                return k + f
                            })) || "m0,0";
                        var f = v(b), k;
                        b = [];
                        for (var A = 0, e = f.length; A < e; A++) {
                            v = f[A];
                            k = f[A][0].toLowerCase();
                            "z" == k && (k = "x");
                            for (var H = 1, d = v.length; H < d; H++)k += r(21600 * v[H]) + (H != d - 1 ? "," : "");
                            b.push(k)
                        }
                        return b.length ? b.join(" ") : "m0,0"
                    }, Q = function (a, b, f) {
                        var r = c.matrix();
                        r.rotate(-a, .5, .5);
                        return {dx: r.x(b, f), dy: r.y(b, f)}
                    }, m = function (a, c, b, f, r, v) {
                        var k = a._, A = a.matrix, H = k.fillpos;
                        a = a.node;
                        var d = a.style, n = 1, g = "",
                            h = 21600 / c, B = 21600 / b;
                        d.visibility = "hidden";
                        if (c && b) {
                            a.coordsize = e(h) + " " + e(B);
                            d.rotation = v * (0 > c * b ? -1 : 1);
                            v && (r = Q(v, f, r), f = r.dx, r = r.dy);
                            0 > c && (g += "x");
                            0 > b && (g += " y") && (n = -1);
                            d.flip = g;
                            a.coordorigin = f * -h + " " + r * -B;
                            if (H || k.fillsize)if (f = (f = a.getElementsByTagName("fill")) && f[0])a.removeChild(f), H && (r = Q(v, A.x(H[0], H[1]), A.y(H[0], H[1])), f.position = r.dx * n + " " + r.dy * n), k.fillsize && (f.size = k.fillsize[0] * e(c) + " " + k.fillsize[1] * e(b)), a.appendChild(f);
                            d.visibility = "visible"
                        }
                    };
                    c._url = "";
                    c.toString = function () {
                        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                            this.version
                    };
                    var E = function (c, b, f) {
                        b = a(b).toLowerCase().split("-");
                        f = f ? "end" : "start";
                        for (var r = b.length, v = "classic", k = "medium", A = "medium"; r--;)switch (b[r]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                v = b[r];
                                break;
                            case "wide":
                            case "narrow":
                                A = b[r];
                                break;
                            case "long":
                            case "short":
                                k = b[r]
                        }
                        c = c.node.getElementsByTagName("stroke")[0];
                        c[f + "arrow"] = v;
                        c[f + "arrowlength"] = k;
                        c[f + "arrowwidth"] = A
                    }, J = function (a, c) {
                        for (var b in c)d("raphael.attr." + b + "." + a.id, a, c[b], b), a.ca[b] && a.attr(b,
                            c[b])
                    }, u = c._setFillAndStroke = function (f, A) {
                        if (f.paper.canvas) {
                            f.attrs = f.attrs || {};
                            var e = f.node, d = f.attrs, n = e.style, g = W[f.type] && (A.x != d.x || A.y != d.y || A.width != d.width || A.height != d.height || A.cx != d.cx || A.cy != d.cy || A.rx != d.rx || A.ry != d.ry || A.r != d.r), h = q[f.type] && (d.cx != A.cx || d.cy != A.cy || d.r != A.r || d.rx != A.rx || d.ry != A.ry), B = "group" === f.type, Q;
                            for (Q in A)A.hasOwnProperty(Q) && (d[Q] = A[Q]);
                            g && (d.path = c._getPath[f.type](f), f._.dirty = 1);
                            A.href && (e.href = A.href);
                            A.title && (e.title = A.title);
                            A.target && (e.target = A.target);
                            A.cursor && (n.cursor = A.cursor);
                            "blur" in A && f.blur(A.blur);
                            if (A.path && "path" == f.type || g)e.path = ba(~a(d.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(d.path) : d.path), "image" == f.type && (f._.fillpos = [d.x, d.y], f._.fillsize = [d.width, d.height], m(f, 1, 1, 0, 0, 0));
                            "transform" in A && f.transform(A.transform);
                            "rotation" in A && (n = A.rotation, c.is(n, "array") ? f.rotate.apply(f, n) : f.rotate(n));
                            "visibility" in A && ("hidden" === A.visibility ? f.hide() : f.show());
                            h && (n = +d.cx, h = +d.cy, g = +d.rx || +d.r || 0, Q = +d.ry || +d.r || 0, e.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                                r(21600 * (n - g)), r(21600 * (h - Q)), r(21600 * (n + g)), r(21600 * (h + Q)), r(21600 * n)));
                            "clip-rect" in A && (n = a(A["clip-rect"]).split(H), 4 == n.length && (n[0] = +n[0], n[1] = +n[1], n[2] = +n[2] + n[0], n[3] = +n[3] + n[1], g = B ? e : e.clipRect || c._g.doc.createElement("div"), h = g.style, B ? (f.clip = n.slice(), g = f.matrix.offset(), g = [b(g[0]), b(g[1])], n[0] -= g[0], n[1] -= g[1], n[2] -= g[0], n[3] -= g[1], h.width = "10800px", h.height = "10800px") : e.clipRect || (h.top = "0", h.left = "0", h.width = f.paper.width + "px", h.height = f.paper.height + "px", e.parentNode.insertBefore(g,
                                e), g.appendChild(e), g.raphael = !0, g.raphaelid = e.raphaelid, e.clipRect = g), h.position = "absolute", h.clip = c.format("rect({1}px {2}px {3}px {0}px)", n)), A["clip-rect"] || (B && f.clip ? (e.style.clip = "rect(auto auto auto auto)", delete f.clip) : e.clipRect && (e.clipRect.style.clip = "rect(auto auto auto auto)")));
                            f.textpath && (B = f.textpath.style, A.font && (B.font = A.font), A["font-family"] && (B.fontFamily = '"' + A["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), A["font-size"] && (B.fontSize = A["font-size"]), A["font-weight"] &&
                            (B.fontWeight = A["font-weight"]), A["font-style"] && (B.fontStyle = A["font-style"]));
                            "arrow-start" in A && E(f, A["arrow-start"]);
                            "arrow-end" in A && E(f, A["arrow-end"], 1);
                            if (null != A.opacity || null != A["stroke-width"] || null != A.fill || null != A.src || null != A.stroke || null != A["stroke-width"] || null != A["stroke-opacity"] || null != A["fill-opacity"] || null != A["stroke-dasharray"] || null != A["stroke-miterlimit"] || null != A["stroke-linejoin"] || null != A["stroke-linecap"]) {
                                B = e.getElementsByTagName("fill");
                                n = -1;
                                B = B && B[0];
                                !B && (B = P("fill"));
                                "image" == f.type && A.src && (B.src = A.src);
                                A.fill && (B.on = !0);
                                if (null == B.on || "none" == A.fill || null === A.fill)B.on = !1;
                                B.on && A.fill && ((h = a(A.fill).match(c._ISURL)) ? (B.parentNode == e && e.removeChild(B), B.rotate = !0, B.src = h[1], B.type = "tile", g = f.getBBox(1), B.position = g.x + " " + g.y, f._.fillpos = [g.x, g.y], c._preload(h[1], function () {
                                    f._.fillsize = [this.offsetWidth, this.offsetHeight]
                                })) : (h = c.getRGB(A.fill), B.color = h.hex, B.src = "", B.type = "solid", h.error && (f.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != a(A.fill).charAt()) && L(f, A.fill,
                                    B) ? (d.fill = "none", d.gradient = A.fill, B.rotate = !1) : "opacity" in h && !("fill-opacity" in A) && (n = h.opacity)));
                                if (-1 !== n || "fill-opacity" in A || "opacity" in A)h = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+n + 1 || 2) - 1), h = k(v(h, 0), 1), B.opacity = h, B.src && (B.color = "none");
                                e.appendChild(B);
                                B = e.getElementsByTagName("stroke") && e.getElementsByTagName("stroke")[0];
                                n = !1;
                                !B && (n = B = P("stroke"));
                                if (A.stroke && "none" != A.stroke || A["stroke-width"] || null != A["stroke-opacity"] || A["stroke-dasharray"] || A["stroke-miterlimit"] ||
                                    A["stroke-linejoin"] || A["stroke-linecap"])B.on = !0;
                                "none" != A.stroke && null !== A.stroke && null != B.on && 0 != A.stroke && 0 != A["stroke-width"] || (B.on = !1);
                                h = c.getRGB("stroke" in A ? A.stroke : d.stroke);
                                B.on && A.stroke && (B.color = h.hex);
                                h = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1);
                                g = .75 * (b(A["stroke-width"]) || 1);
                                h = k(v(h, 0), 1);
                                null == A["stroke-width"] && (g = d["stroke-width"]);
                                A["stroke-width"] && (B.weight = g);
                                g && 1 > g && (h *= g) && (B.weight = 1);
                                B.opacity = h;
                                A["stroke-linejoin"] && (B.joinstyle = A["stroke-linejoin"]) ||
                                n && (n.joinstyle = "miter");
                                B.miterlimit = A["stroke-miterlimit"] || 8;
                                A["stroke-linecap"] && (B.endcap = "butt" == A["stroke-linecap"] ? "flat" : "square" == A["stroke-linecap"] ? "square" : "round");
                                A["stroke-dasharray"] && (h = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                }, B.dashstyle = h.hasOwnProperty(A["stroke-dasharray"]) ? h[A["stroke-dasharray"]] : A["stroke-dasharray"].join && A["stroke-dasharray"].join(" ") ||
                                "");
                                n && e.appendChild(B)
                            }
                            if ("text" == f.type) {
                                f.paper.canvas.style.display = "";
                                e = f.paper.span;
                                B = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
                                h = d["line-height"] && (d["line-height"] + "").match(/\d+(?:\.\d*)?(?=px)/);
                                n = e.style;
                                d.font && (n.font = d.font);
                                d["font-family"] && (n.fontFamily = d["font-family"]);
                                d["font-weight"] && (n.fontWeight = d["font-weight"]);
                                d["font-style"] && (n.fontStyle = d["font-style"]);
                                B = b(d["font-size"] || B && B[0]) || 10;
                                n.fontSize = 100 * B + "px";
                                h = b(d["line-height"] || h && h[0]) || 12;
                                d["line-height"] && (n.lineHeight =
                                    100 * h + "px");
                                c.is(A.text, "array") && (A.text = f.textpath.string = A.text.join("\n").replace(/<br\s*?\/?>/ig, "\n"));
                                f.textpath.string && (e.innerHTML = a(f.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                                e = e.getBoundingClientRect();
                                f.W = d.w = (e.right - e.left) / 100;
                                f.H = d.h = (e.bottom - e.top) / 100;
                                f.X = d.x;
                                f.Y = d.y;
                                switch (d["vertical-align"]) {
                                    case "top":
                                        f.bby = f.H / 2;
                                        break;
                                    case "bottom":
                                        f.bby = -f.H / 2;
                                        break;
                                    default:
                                        f.bby = 0
                                }
                                ("x" in A || "y" in A || void 0 !== f.bby) && (f.path.v = c.format("m{0},{1}l{2},{1}",
                                    r(21600 * d.x), r(21600 * (d.y + (f.bby || 0))), r(21600 * d.x) + 1));
                                e = "x y text font font-family font-weight font-style font-size line-height".split(" ");
                                B = 0;
                                for (n = e.length; B < n; B++)if (e[B] in A) {
                                    f._.dirty = 1;
                                    break
                                }
                                switch (d["text-anchor"]) {
                                    case "start":
                                        f.textpath.style["v-text-align"] = "left";
                                        f.bbx = f.W / 2;
                                        break;
                                    case "end":
                                        f.textpath.style["v-text-align"] = "right";
                                        f.bbx = -f.W / 2;
                                        break;
                                    default:
                                        f.textpath.style["v-text-align"] = "center", f.bbx = 0
                                }
                                f.textpath.style["v-text-kern"] = !0
                            }
                        }
                    }, L = function (f, r, v) {
                        f.attrs = f.attrs || {};
                        var k = Math.pow, e = "linear", H = ".5 .5";
                        f.attrs.gradient = r;
                        r = a(r).replace(c._radial_gradient, function (a, c) {
                            e = "radial";
                            c = c && c.split(",") || [];
                            var f = c[3], r = c[4];
                            f && r && (f = b(f), r = b(r), .25 < k(f - .5, 2) + k(r - .5, 2) && (r = A(.25 - k(f - .5, 2)) * (2 * (.5 < r) - 1) + .5), H = f + " " + r);
                            return ""
                        });
                        r = r.split(/\s*\-\s*/);
                        if ("linear" == e) {
                            var d = r.shift(), d = -b(d);
                            if (isNaN(d))return null
                        }
                        r = c._parseDots(r);
                        if (!r)return null;
                        f = f.shape || f.node;
                        if (r.length) {
                            v.parentNode == f && f.removeChild(v);
                            v.on = !0;
                            v.method = "none";
                            v.color = r[0].color;
                            v.color2 = r[r.length -
                            1].color;
                            for (var n = [], g = 1, h = void 0 === r[0].opacity ? 1 : r[0].opacity, B = 0, W = r.length; B < W; B++)r[B].offset && n.push(r[B].offset + " " + r[B].color), void 0 !== r[B].opacity && (g = r[B].opacity);
                            v.colors = n.length ? n.join() : "0% " + v.color;
                            v.opacity = g;
                            v["o:opacity2"] = h;
                            "radial" == e ? (v.type = "gradientTitle", v.focus = "100%", v.focussize = "0 0", v.focusposition = H, v.angle = 0) : (v.type = "gradient", v.angle = (270 - d) % 360);
                            f.appendChild(v)
                        }
                        return 1
                    }, ua = function (a, b, f) {
                        f = f || b;
                        var r;
                        f.canvas && f.canvas.appendChild(a);
                        r = P("skew");
                        r.on = !0;
                        a.appendChild(r);
                        this.skew = r;
                        this.node = this[0] = a;
                        a.raphael = !0;
                        a.raphaelid = this.id = c._oid++;
                        this.Y = this.X = 0;
                        this.attrs = this.attrs || {};
                        this.followers = this.followers || [];
                        this.paper = b;
                        this.ca = this.customAttributes = this.customAttributes || new b._CustomAttributes;
                        this.matrix = c.matrix();
                        this._ = {transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1};
                        this.parent = f;
                        !f.bottom && (f.bottom = this);
                        (this.prev = f.top) && (f.top.next = this);
                        f.top = this;
                        this.next = null
                    }, f = c.el;
                    ua.prototype = f;
                    f.constructor = ua;
                    f.transform = function (b) {
                        if (null ==
                            b)return this._.transform;
                        var f = this.paper._viewBoxShift, r = f ? "s" + [f.scale, f.scale] + "-1-1t" + [f.dx, f.dy] : "", v;
                        f && (v = b = a(b).replace(/\.{3}|\u2026/g, this._.transform || ""));
                        c._extractTransform(this, r + b);
                        var f = this.matrix.clone(), k = this.skew;
                        b = this.node;
                        var r = ~a(this.attrs.fill).indexOf("-"), A = !a(this.attrs.fill).indexOf("url(");
                        f.translate(-.5, -.5);
                        A || r || "image" == this.type ? (k.matrix = "1 0 0 1", k.offset = "0 0", k = f.split(), r && k.noRotation || !k.isSimple ? (b.style.filter = f.toFilter(), f = this.getBBox(), r = this.getBBox(1),
                            A = f.x2 && r.x2 && "x2" || "x", k = f.y2 && r.y2 && "y2" || "y", A = f[A] - r[A], f = f[k] - r[k], b.coordorigin = -21600 * A + " " + -21600 * f, m(this, 1, 1, A, f, 0)) : (b.style.filter = "", m(this, k.scalex, k.scaley, k.dx, k.dy, k.rotate))) : (b.style.filter = "", k.matrix = a(f), k.offset = f.offset());
                        v && (this._.transform = v);
                        return this
                    };
                    f.rotate = function (c, f, r) {
                        if (this.removed)return this;
                        if (null != c) {
                            c = a(c).split(H);
                            c.length - 1 && (f = b(c[1]), r = b(c[2]));
                            c = b(c[0]);
                            null == r && (f = r);
                            if (null == f || null == r)r = this.getBBox(1), f = r.x + r.width / 2, r = r.y + r.height / 2;
                            this._.dirtyT =
                                1;
                            this.transform(this._.transform.concat([["r", c, f, r]]));
                            return this
                        }
                    };
                    f.translate = function (c, f) {
                        if (this.removed)return this;
                        c = a(c).split(H);
                        c.length - 1 && (f = b(c[1]));
                        c = b(c[0]) || 0;
                        f = +f || 0;
                        this._.bbox && (this._.bbox.x += c, this._.bbox.y += f);
                        this.transform(this._.transform.concat([["t", c, f]]));
                        return this
                    };
                    f.scale = function (c, f, r, v) {
                        if (this.removed)return this;
                        c = a(c).split(H);
                        c.length - 1 && (f = b(c[1]), r = b(c[2]), v = b(c[3]), isNaN(r) && (r = null), isNaN(v) && (v = null));
                        c = b(c[0]);
                        null == f && (f = c);
                        null == v && (r = v);
                        if (null ==
                            r || null == v)var k = this.getBBox(1);
                        r = null == r ? k.x + k.width / 2 : r;
                        v = null == v ? k.y + k.height / 2 : v;
                        this.transform(this._.transform.concat([["s", c, f, r, v]]));
                        this._.dirtyT = 1;
                        return this
                    };
                    f.hide = function (a) {
                        !this.removed && (this.node.style.display = "none");
                        return this
                    };
                    f.show = function (a) {
                        !this.removed && (this.node.style.display = "");
                        return this
                    };
                    f._getBBox = function () {
                        return this.removed ? {} : {
                            x: this.X + (this.bbx || 0) - this.W / 2,
                            y: this.Y + (this.bby || 0) - this.H / 2,
                            width: this.W,
                            height: this.H
                        }
                    };
                    f.remove = function () {
                        if (!this.removed &&
                            this.parent.canvas) {
                            var a = c._engine.getNode(this), b = this.paper, f = this.shape;
                            b.__set__ && b.__set__.exclude(this);
                            d.unbind("raphael.*.*." + this.id);
                            f && f.parentNode.removeChild(f);
                            for (a.parentNode && a.parentNode.removeChild(a); a = this.followers.pop();)a.el.remove();
                            for (; a = this.bottom;)a.remove();
                            this._drag && this.undrag();
                            if (this.events)for (; a = this.events.pop();)a.unbind();
                            this.removeData();
                            delete b._elementsById[this.id];
                            c._tear(this, this.parent);
                            for (a in this)this[a] = "function" === typeof this[a] ? c._removedFactory(a) :
                                null;
                            this.removed = !0
                        }
                    };
                    f.attr = function (a, b) {
                        if (this.removed)return this;
                        if (null == a) {
                            var f = {}, r;
                            for (r in this.attrs)this.attrs.hasOwnProperty(r) && (f[r] = this.attrs[r]);
                            f.gradient && "none" == f.fill && (f.fill = f.gradient) && delete f.gradient;
                            f.transform = this._.transform;
                            f.visibility = "none" === this.node.style.display ? "hidden" : "visible";
                            return f
                        }
                        if (null == b && c.is(a, "string")) {
                            if ("fill" == a && "none" == this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
                            if ("visibility" == a)return "none" === this.node.style.display ?
                                "hidden" : "visible";
                            var f = a.split(H), v = {}, k = 0;
                            for (r = f.length; k < r; k++)a = f[k], a in this.attrs ? v[a] = this.attrs[a] : c.is(this.ca[a], "function") ? v[a] = this.ca[a].def : v[a] = c._availableAttrs[a];
                            return r - 1 ? v : v[f[0]]
                        }
                        if (this.attrs && null == b && c.is(a, "array")) {
                            v = {};
                            k = 0;
                            for (r = a.length; k < r; k++)v[a[k]] = this.attr(a[k]);
                            return v
                        }
                        null != b && (f = {}, f[a] = b);
                        null == b && c.is(a, "object") && (f = a);
                        for (k in f)d("raphael.attr." + k + "." + this.id, this, f[k], k);
                        if (f) {
                            var A = {};
                            for (k in this.ca)if (this.ca[k] && f.hasOwnProperty(k) && c.is(this.ca[k],
                                    "function") && !this.ca["_invoked" + k]) {
                                this.ca["_invoked" + k] = !0;
                                r = this.ca[k].apply(this, [].concat(f[k]));
                                delete this.ca["_invoked" + k];
                                for (v in r)r.hasOwnProperty(v) && (f[v] = r[v]);
                                this.attrs[k] = f[k];
                                !1 === r && (A[k] = f[k], delete f[k])
                            }
                            "text" in f && "text" == this.type && (c.is(f.text, "array") && (f.text = f.text.join("\n")), this.textpath.string = f.text.replace(/<br\s*?\/?>/ig, "\n"));
                            u(this, f);
                            var e, k = 0;
                            for (r = this.followers.length; k < r; k++)e = this.followers[k], e.cb && !e.cb.call(e.el, f, this) || e.el.attr(f);
                            for (v in A)f[v] =
                                A[v]
                        }
                        return this
                    };
                    f.blur = function (a) {
                        var b = this.node.runtimeStyle, f = b.filter, f = f.replace(h, "");
                        0 !== +a ? (this.attrs.blur = a, b.filter = f + "  progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", r(+a || 1.5))) : (b.filter = f, b.margin = 0, delete this.attrs.blur);
                        return this
                    };
                    f.on = function (a, b) {
                        if (this.removed)return this;
                        this.node["on" + a] = function () {
                            var a = c._g.win.event;
                            a.target = a.srcElement;
                            b(a)
                        };
                        return this
                    };
                    c._engine.getNode = function (a) {
                        a = a.node || a[0].node;
                        return a.clipRect || a
                    };
                    c._engine.getLastNode = function (a) {
                        a = a.node || a[a.length - 1].node;
                        return a.clipRect || a
                    };
                    c._engine.group = function (a, b, f) {
                        var r = c._g.doc.createElement("div"), v = new ua(r, a, f);
                        r.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
                        v._id = b || "";
                        b && (r.className = "raphael-group-" + v.id + "-" + b);
                        (f || a).canvas.appendChild(r);
                        v.type = "group";
                        v.canvas = v.node;
                        v.transform = c._engine.group.transform;
                        v.top = null;
                        v.bottom = null;
                        return v
                    };
                    c._engine.group.transform = function (f) {
                        if (null == f)return this._.transform;
                        var r = this.node.style, v = this.clip, k = this.paper._viewBoxShift, A = k ? "s" + [k.scale, k.scale] + "-1-1t" + [k.dx, k.dy] : "";
                        k && (f = a(f).replace(/\.{3}|\u2026/g, this._.transform || ""));
                        c._extractTransform(this, A + f);
                        f = this.matrix;
                        A = f.offset();
                        k = b(A[0]) || 0;
                        A = b(A[1]) || 0;
                        r.left = k + "px";
                        r.top = A + "px";
                        r.zoom = (this._.tzoom = f.get(0)) + "";
                        v && (r.clip = c.format("rect({1}px {2}px {3}px {0}px)", [v[0] - k, v[1] - A, v[2] - k, v[3] - A]));
                        return this
                    };
                    c._engine.path = function (a, c, b) {
                        var f = P("shape");
                        f.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
                        f.coordsize = "21600 21600";
                        f.coordorigin = a.coordorigin;
                        a = new ua(f, a, b);
                        a.type = c.type || "path";
                        a.path = [];
                        a.Path = "";
                        c.type && delete c.type;
                        u(a, c);
                        J(a, c);
                        return a
                    };
                    c._engine.rect = function (a, b, f) {
                        var r = c._rectPath(b.x, b.y, b.w, b.h, b.r);
                        b.path = r;
                        b.type = "rect";
                        a = a.path(b, f);
                        b = a.attrs;
                        a.X = b.x;
                        a.Y = b.y;
                        a.W = b.width;
                        a.H = b.height;
                        b.path = r;
                        return a
                    };
                    c._engine.ellipse = function (a, c, b) {
                        c.type = "ellipse";
                        a = a.path(c, b);
                        c = a.attrs;
                        a.X = c.x - c.rx;
                        a.Y = c.y - c.ry;
                        a.W = 2 * c.rx;
                        a.H = 2 * c.ry;
                        return a
                    };
                    c._engine.circle = function (a, c, b) {
                        c.type =
                            "circle";
                        a = a.path(c, b);
                        c = a.attrs;
                        a.X = c.x - c.r;
                        a.Y = c.y - c.r;
                        a.W = a.H = 2 * c.r;
                        return a
                    };
                    c._engine.image = function (a, b, f) {
                        var r = c._rectPath(b.x, b.y, b.w, b.h);
                        b.path = r;
                        b.type = "image";
                        b.stroke = "none";
                        a = a.path(b, f);
                        f = a.attrs;
                        var r = a.node, v = r.getElementsByTagName("fill")[0];
                        f.src = b.src;
                        a.X = f.x = b.x;
                        a.Y = f.y = b.y;
                        a.W = f.width = b.w;
                        a.H = f.height = b.h;
                        v.parentNode == r && r.removeChild(v);
                        v.rotate = !0;
                        v.src = f.src;
                        v.type = "tile";
                        a._.fillpos = [f.x, f.y];
                        a._.fillsize = [f.w, f.h];
                        r.appendChild(v);
                        m(a, 1, 1, 0, 0, 0);
                        return a
                    };
                    c._engine.text =
                        function (b, f, v) {
                            var k = P("shape"), A = P("path"), e = P("textpath");
                            x = f.x || 0;
                            y = f.y || 0;
                            text = f.text;
                            A.v = c.format("m{0},{1}l{2},{1}", r(21600 * f.x), r(21600 * f.y), r(21600 * f.x) + 1);
                            A.textpathok = !0;
                            e.string = a(f.text).replace(/<br\s*?\/?>/ig, "\n");
                            e.on = !0;
                            k.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
                            k.coordsize = "21600 21600";
                            k.coordorigin = "0 0";
                            b = new ua(k, b, v);
                            b.shape = k;
                            b.path = A;
                            b.textpath = e;
                            b.type = "text";
                            b.attrs.text = a(f.text || "");
                            b.attrs.x = f.x;
                            b.attrs.y = f.y;
                            b.attrs.w = 1;
                            b.attrs.h = 1;
                            u(b, f);
                            J(b, f);
                            k.appendChild(e);
                            k.appendChild(A);
                            return b
                        };
                    c._engine.setSize = function (a, b) {
                        var f = this.canvas.style;
                        this.width = a;
                        this.height = b;
                        a == +a && (a += "px");
                        b == +b && (b += "px");
                        f.width = a;
                        f.height = b;
                        f.clip = "rect(0 " + a + " " + b + " 0)";
                        this._viewBox && c._engine.setViewBox.apply(this, this._viewBox);
                        return this
                    };
                    c._engine.setViewBox = function (a, b, c, f, r) {
                        d("raphael.setViewBox", this, this._viewBox, [a, b, c, f, r]);
                        var k = this.width, A = this.height, e = 1 / v(c / k, f / A), H, n;
                        r && (H = A / f, n = k / c, c * H < k && (a -= (k - c * H) / 2 / H), f * n < A && (b -= (A - f * n) / 2 /
                            n));
                        this._viewBox = [a, b, c, f, !!r];
                        this._viewBoxShift = {dx: -a, dy: -b, scale: e};
                        this.forEach(function (a) {
                            a.transform("...")
                        });
                        return this
                    };
                    var P;
                    c._engine.initWin = function (b) {
                        var f = b.document;
                        f.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                        try {
                            !f.namespaces.rvml && f.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), P = c._createNode = function (b, c) {
                                var r = f.createElement("<rvml:" + b + ' class="rvml">'), v;
                                for (v in c)r[v] = a(c[v]);
                                return r
                            }
                        } catch (r) {
                            P = c._createNode = function (b, c) {
                                var r = f.createElement("<" +
                                    b + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'), v;
                                for (v in c)r[v] = a(c[v]);
                                return r
                            }
                        }
                    };
                    c._engine.initWin(c._g.win);
                    c._engine.create = function () {
                        var a = c._getContainer.apply(0, arguments), b = a.container, f = a.height, r = a.width, v = a.x, a = a.y;
                        if (!b)throw Error("VML container not found.");
                        var k = new c._Paper, A = k.canvas = c._g.doc.createElement("div"), e = A.style, v = v || 0, a = a || 0, r = r || 512, f = f || 342;
                        k.width = r;
                        k.height = f;
                        r == +r && (r += "px");
                        f == +f && (f += "px");
                        k.coordsize = "21600000 21600000";
                        k.coordorigin = "0 0";
                        A.id = "raphael-paper-" +
                            k.id;
                        k.span = c._g.doc.createElement("span");
                        k.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
                        A.appendChild(k.span);
                        e.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;cursor:default;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, f);
                        1 == b ? (c._g.doc.body.appendChild(A), e.left = v + "px", e.top = a + "px", e.position = "absolute") : b.firstChild ? b.insertBefore(A, b.firstChild) : b.appendChild(A);
                        k.renderfix = function () {
                        };
                        return k
                    };
                    c.prototype.clear =
                        function () {
                            var a;
                            for (d("raphael.clear", this); a = this.bottom;)a.remove();
                            this.canvas.innerHTML = "";
                            this.span = c._g.doc.createElement("span");
                            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
                            this.canvas.appendChild(this.span);
                            this.bottom = this.top = null
                        };
                    c.prototype.remove = function () {
                        var a;
                        for (d("raphael.remove", this); a = this.bottom;)a.remove();
                        this.canvas.parentNode.removeChild(this.canvas);
                        for (a in this)this[a] = "function" == typeof this[a] ?
                            c._removedFactory(a) : null;
                        return !0
                    };
                    var p = c.st, s;
                    for (s in f)f.hasOwnProperty(s) && !p.hasOwnProperty(s) && (p[s] = function (a) {
                        return function () {
                            var b = arguments;
                            return this.forEach(function (c) {
                                c[a].apply(c, b)
                            })
                        }
                    }(s))
                }
            })();
            V ? t.win.Raphael = c : Raphael = c;
            return c
        }, !0)
    })();
    d.Raphael = D;
    d.Raphael.desc = "";
    l && l !== D ? window.Raphael = l : window.Raphael === D && (window.Raphael = void 0)
}]);
FusionCharts.register("module", ["private", "fusioncharts.redraphael.helper", function () {
    var d = {};
    this.hcLib.Raphael.fn._elementFromEvent = function (l) {
        if (!l || this.removed)return null;
        var D = l.srcElement || l.target || (l = l.originalEvent) && (l.srcElement || l.target) || d;
        "tspan" === D.nodeName && (D = D.parentNode);
        return this.getById(D.raphaelid)
    }
}]);
FusionCharts.register("module", ["private", "fusioncharts.redraphael.css", function () {
    var d = this.hcLib.Raphael, l = d.eve, D = d._g, w = d.fn, p = d.el, c = /[, ]+/, N = /\B([A-Z]{1})/g, b, I;
    b = function (a) {
        this.rules = {};
        this.ns = a || ""
    };
    I = b.prototype;
    I.getSheet = function () {
        var a = this.node;
        a || (a = this.node = D.doc.createElement("style"), this.node.setAttribute("id", d.format("raphael-stylesheet-{0}", d._oid++)), this.node.setAttribute("type", "text/css"), (D.doc.head || D.doc.getElementsByTagName("head")[0]).appendChild(this.node));
        return a
    };
    I.setCssText = function (a) {
        var b = this.node;
        if (!b)if (a)b = this.getSheet(); else return;
        b.styleSheet ? b.styleSheet.cssText = a || "" : (b.innerHTML = "", a && b.appendChild(D.doc.createTextNode(a)))
    };
    I.destroy = function () {
        this.node && this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.rules
    };
    I.clear = function () {
        this.setCssText("");
        this.rules = {}
    };
    I.add = function (a, b) {
        var c = this.rules[a] || (this.rules[a] = {}), d;
        for (d in b)c[d] = b[d]
    };
    I.render = function () {
        this.setCssText(this.toString())
    };
    I.toString =
        function (a) {
            var b = a ? "" : "\n", c = a ? "" : "\t";
            a = a ? ":" : ": ";
            var d = b, p, g;
            for (p in this.rules) {
                d += p.replace(/(^|\,)/g, "$1" + this.ns + " ") + " {" + b;
                p = this.rules[p];
                for (g in p)p[g] && (d += c + g.replace(N, "-$1").toLowerCase() + a + p[g] + ";" + b);
                d += "}" + b
            }
            return d
        };
    l.on("raphael.new", function () {
        this._stylesheet = this._stylesheet || new b;
        this.cssNamespace("")
    });
    l.on("raphael.remove", function () {
        this._stylesheet && this._stylesheet.destroy();
        delete this._stylesheet
    });
    w.cssNamespace = function (a) {
        arguments.length && (this._stylesheet.ns =
            d.format("{0}#raphael-paper-{1}", a && a + " " || "", this.id));
        return this._stylesheet.ns
    };
    w.cssAddRule = function (a, b) {
        if (1 === arguments.length && "object" === typeof a) {
            for (var c in a)this.cssAddRule(c, a[c]);
            return this
        }
        return this._stylesheet.add(a, b), this
    };
    w.cssRender = function () {
        return d.svg && this._stylesheet.render(), this
    };
    w.cssClear = function () {
        return this._stylesheet.clear(), this
    };
    d._availableAttrs["class"] = "";
    d.svg && l.on("raphael.attr.class", function (a) {
        var b = this.node;
        a = a || "";
        b.setAttribute("class", "group" ===
        this.type && this._id ? "raphael-group-" + this.id + "-" + this._id + " " + a : a)
    });
    d.vml && l.on("raphael.attr.class", function (a) {
        var b = this.paper, c = "." + a, b = b._stylesheet && b._stylesheet.rules, d = this.parent, p = this.attrs, g = {}, e;
        this.node.className = "group" === this.type ? a && this._id + " " + a || this._id : "rvml " + a;
        if (c && b) {
            a = b[c];
            for (e in a)"color" === e && "text" === this.type && (e = "fill"), !p[e] && (g[e] = a[e]);
            for (; d && d.attr;) {
                if (a = d.attr("class"))for (e in c = "." + a + " " + c, a = b[c], a)"color" === e && "text" === this.type && (e = "fill"), p[e] || g[e] ||
                (g[e] = a[e]);
                d = d.parent
            }
            this.css(g)
        }
    });
    p.css = function (a, b) {
        var p, w, s, g;
        if (this.removed)return this;
        this.styles || (this.styles = {});
        if (null == b && d.is(a, "string")) {
            p = a.split(c);
            w = {};
            g = 0;
            for (s = p.length; g < s; g++)a = p[g], a in this.styles && (w[a] = this.styles[a]);
            return s - 1 ? w : w[p[0]]
        }
        if (null == b && d.is(a, "array")) {
            w = {};
            g = 0;
            for (s = a.length; g < s; g++)w[a[g]] = this.styles(a[g]);
            return w
        }
        null != b ? (p = {}, p[a] = b) : null != a && d.is(a, "object") && (p = a);
        w = {};
        for (g in p)s = g.replace(/\B([A-Z]{1})/g, "-$1").toLowerCase(), d._availableAttrs.hasOwnProperty(s) ||
        "color" === s ? ("color" === s && "text" === this.type && (s = "fill"), w[s] = p[g], w.dirty = !0) : (l("raphael.css." + s + "." + this.id, this, p[g], s), this.node.style[s] = p[g], this.styles[s] = p[g]);
        g = 0;
        for (s = this.followers.length; g < s; g++)this.followers[g].el.attr(p);
        w.hasOwnProperty("dirty") && (delete w.dirty, this.attr(w));
        return this
    }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelexport", function () {
    var d = this.hcLib, l = d.Raphael, D = d.pluckNumber, w = d.pluck, p = l._availableAttrs, c = /^matrix\(|\)$/g, N = /\,/g, b = /\n|<br\s*?\/?>/ig, I = /[^\d\.]/ig, a = /[\%\(\)\s,\xb0#]/g, z = /group/ig, F = /&/g, K = /"/g, s = /'/g, g = /</g, e = />/g, h = 0;
    (function (d) {
        var l = Math, C = parseFloat, q = l.max, Y = l.abs, u = l.pow, ea = String, t = /[, ]+/, V = [{
            reg: /xmlns\=\"http\:\/\/www.w3.org\/2000\/svg\"/ig,
            repStr: ""
        }, {
            reg: /^.*<svg /,
            repStr: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" '
        },
            {reg: /\/svg>.*$/, repStr: "/svg>"}, {reg: /<desc\>[^<]*<\/desc\>/, repStr: ""}, {
                reg: /zIndex="[^"]+"/g,
                repStr: ""
            }, {reg: /url\((\\?[\'\"])[^#]+#/g, repStr: "url($1#"}, {
                reg: / href=/g,
                repStr: " xlink:href="
            }, {reg: /(id|class|width|height)=([^" >]+)/g, repStr: '$1="$2"'}, {
                reg: /:(path|rect)/g,
                repStr: "$1"
            }, {reg: /<ima?ge? ([^\>]+?)[^\/]\>/gi, repStr: "<image $1 />"}, {
                reg: /<\/ima?ge?\>/g,
                repStr: ""
            }, {
                reg: /style="([^"]+)"/g, repStr: function (a) {
                    return a.toLowerCase()
                }
            }], X = {
            blur: function () {
            }, transform: function () {
            }, src: function (a,
                              b) {
                b.attrSTR += ' xlink:href="' + b.attrs.src + '"'
            }, path: function (a, b) {
                var c = b.attrs.path, c = d._pathToAbsolute(c || "");
                b.attrSTR += ' d="' + (c.toString && c.toString() || "").replace(N, " ") + '"'
            }, gradient: function (b, c, e) {
                var g = b.attrs.gradient, h = "linear", p, t, s, G = .5, z = .5, n = t = "", E = "", L, T, w, I;
                p = g.replace(a, "_");
                if (!e[p]) {
                    g = ea(g).replace(d._radial_gradient, function (a, b) {
                        var c, e, d, n, g, q, m;
                        b = b && b.split(",") || [];
                        h = "radial";
                        c = b[0];
                        e = b[1];
                        d = b[2];
                        n = b[3];
                        g = b[4];
                        I = b[5];
                        m = c && e;
                        d && (w = /\%/.test(d) ? d : C(d));
                        if ("userSpaceOnUse" ===
                            I)return m && (G = c, z = e), n && g && (L = n, T = g, m || (G = L, z = T)), "";
                        m && (G = C(c), z = C(e), c = 2 * (.5 < z) - 1, .25 < (q = u(G - .5, 2)) + u(z - .5, 2) && .25 > q && (z = l.sqrt(.25 - q) * c + .5) && .5 !== z && (z = z.toFixed(5) - 1E-5 * c));
                        n && g && (L = C(n), T = C(g), c = 2 * (.5 < T) - 1, .25 < (q = u(L - .5, 2)) + u(T - .5, 2) && .25 > q && (T = l.sqrt(.25 - q) * c + .5) && .5 !== T && (T = T.toFixed(5) - 1E-5 * c), m || (G = L, z = T));
                        return ""
                    });
                    g = g.split(/\s*\-\s*/);
                    if ("linear" === h) {
                        t = g.shift();
                        t = -C(t);
                        if (isNaN(t))return null;
                        s = [0, 0, l.cos(d.rad(t)), l.sin(d.rad(t))];
                        t = 1 / (q(Y(s[2]), Y(s[3])) || 1);
                        s[2] *= t;
                        s[3] *= t;
                        0 > s[2] &&
                        (s[0] = -s[2], s[2] = 0);
                        0 > s[3] && (s[1] = -s[3], s[3] = 0)
                    }
                    g = d._parseDots(g);
                    if (!g)return null;
                    "radial" === h ? (t = '<radialGradient fx = "' + G + '" fy = "' + z + '" cy = "' + T + '" cx = "' + L + '" r = "' + w + '" gradientUnits = "' + I + '" id = "' + p + '">', n = "</radialGradient>") : (t = '<linearGradient x1 = "' + s[0] + '" y1 = "' + s[1] + '" x2 = "' + s[2] + '" y2 = "' + s[3] + '" gradientTransform ="matrix(' + b.matrix.invert() + ')" id = "' + p + '">', n = "</linearGradient>");
                    b = 0;
                    for (s = g.length; b < s; b++)E += '<stop offset="' + (g[b].offset ? g[b].offset : b ? "100%" : "0%") +
                        '" stop-color="' + (g[b].color || "#fff") + '" stop-opacity="' + (void 0 === g[b].opacity ? 1 : g[b].opacity) + '" />';
                    e[p] = !0;
                    e.str += t + E + n
                }
                c.attrSTR += " fill=\"url('#" + p + "')\""
            }, fill: function (a, b) {
                var c = b.attrs, e = c.fill, g;
                a.attrs.gradient || (e = d.color(e), g = e.opacity, "text" === a.type ? b.styleSTR += "fill:" + e + "; stroke-opacity:0; " : (b.attrSTR += ' fill="' + e + '"', c["fill-opacity"] || !g && 0 !== g || (b.attrSTR += ' fill-opacity="' + g + '"')))
            }, stroke: function (a, b) {
                var c = b.attrs, e, g;
                e = d.color(c.stroke);
                g = e.opacity;
                "text" !== a.type && (b.attrSTR +=
                    ' stroke="' + e + '"', c["stroke-opacity"] || !g && 0 !== g || (b.attrSTR += ' stroke-opacity="' + g + '"'))
            }, "clip-rect": function (b, e, d) {
                var g = ea(e.attrs["clip-rect"]), q = g.split(t), g = g.replace(a, "_") + "__" + h++;
                4 === q.length && (d[g] || (d[g] = !0, d.str += '<clipPath id="' + g + '"><rect x="' + q[0] + '" y="' + q[1] + '" width="' + q[2] + '" height="' + q[3] + '" transform="matrix(' + b.matrix.invert().toMatrixString().replace(c, "") + ')"/></clipPath>'), e.attrSTR += ' clip-path="url(#' + g + ')"')
            }, cursor: function (a, b) {
                var c = b.attrs.cursor;
                c && (b.styleSTR +=
                    "cursor:" + c + "; ")
            }, font: function (a, b) {
                b.styleSTR += "font:" + b.attrs.font.replace(/\"/ig, " ") + "; "
            }, "font-size": function (a, b) {
                var c = w(b.attrs["font-size"], "10");
                c && c.replace && (c = c.replace(I, ""));
                b.styleSTR += "font-size:" + c + "px; "
            }, "font-weight": function (a, b) {
                b.styleSTR += "font-weight:" + b.attrs["font-weight"] + "; "
            }, "font-family": function (a, b) {
                b.styleSTR += "font-family:" + b.attrs["font-family"] + "; "
            }, "line-height": function () {
            }, "clip-path": function () {
            }, visibility: function () {
            }, "vertical-align": function () {
            },
            "text-anchor": function (a, b) {
                var c = b.attrs["text-anchor"] || "middle";
                "text" === a.type && (b.attrSTR += ' text-anchor="' + c + '"')
            }, title: function () {
            }, text: function (a, c) {
                var d = c.attrs, h = d.text, q = w(d["font-size"], d.font, "10"), m = w(d["line-height"]), u, p, t;
                q && q.replace && (q = q.replace(I, ""));
                q = D(q);
                m && m.replace && (m = m.replace(I, ""));
                m = D(m, q && 1.2 * q);
                u = q ? .85 * q : .75 * m;
                q = d.x;
                p = w(d["vertical-align"], "middle").toLowerCase();
                h = ea(h).split(b);
                t = h.length;
                d = 0;
                for (u = "top" === p ? u : "bottom" === p ? u - m * t : u - m * t * .5; d < t; d++)c.textSTR += "<tspan ",
                    p = (h[d] || "").replace(F, "&amp;").replace(K, "&quot;").replace(s, "&#39;").replace(g, "&lt;").replace(e, "&gt;"), c.textSTR = d ? c.textSTR + ('dy="' + m + '" x="' + q + '" ') : c.textSTR + ('dy="' + u + '"'), c.textSTR += ">" + p + "</tspan>"
            }
        }, ia = function (a, b) {
            var e = "", d = {
                attrSTR: "",
                styleSTR: "",
                textSTR: "",
                attrs: a.attr()
            }, g = a.isShadow, h = "", q = "", m, u, t = d.attrs;
            if ("none" === a.node.style.display || g)a.next && (e += ia(a.next, b)); else {
                for (m in t)if ("gradient" !== m && (void 0 !== p[m] || X[m]) && void 0 !== t[m])if (X[m])X[m](a, d, b); else d.attrSTR += " " + m +
                    '="' + t[m] + '"';
                a.attrs.gradient && X.gradient(a, d, b);
                "rect" === a.type && t.r && (d.attrSTR += ' rx="' + t.r + '" ry="' + t.r + '"');
                for (u in a.styles)d.styleSTR += u + ":" + a.styles[u] + "; ";
                "image" === a.type && (d.attrSTR += ' preserveAspectRatio="none"');
                if ("text" === a.type && !t["text-anchor"])X["text-anchor"](a, d);
                a.bottom && (h = ia(a.bottom, b));
                a.next && (q = ia(a.next, b));
                g = a.type;
                g.match(z) && (g = "g");
                e += "<" + g + ' transform="matrix(' + a.matrix.toMatrixString().replace(c, "") + ')" style="' + d.styleSTR + '"' + d.attrSTR + ">" + d.textSTR + h + "</" +
                    g + ">" + q
            }
            return e
        };
        d.fn.toSVG = function (a) {
            var b = "", c = {str: ""}, e = 0, g = V.length, h = "";
            if (d.svg) {
                if (this.canvas && this.canvas.parentNode) {
                    for (b = this.canvas.parentNode.innerHTML; e < g; e += 1)c = V[e], b = b.replace(c.reg, c.repStr);
                    this._stylesheet && (b = b.replace(/^(<svg\s[\s\S]*?>)/ig, '$1<style type="text/css">' + this._stylesheet.toString(!0) + "</style>"))
                }
            } else b = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + this.width + '" version="1.1" height="' +
                this.height + '">', this.bottom && (h = ia(this.bottom, c)), b += "<defs>" + c.str + "</defs>" + h + "</svg>";
            a || (b = b.replace(/<image [^\>]*\>/gi, ""));
            return b
        }
    })(l)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelshadow", function () {
    var d = this.window, l = d.Math.sqrt, D = d.parseFloat, w = d.parseInt, d = d.SVGFilterElement || d.SVGFEColorMatrixElement && 2 === d.SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE, p = this.hcLib.Raphael, c = {
        "drop-shadow": "drop-shadow",
        stroke: "stroke",
        fill: "fill",
        "stroke-width": "stroke-width",
        "stroke-opacity": "stroke-opacity",
        "stroke-linecap": "stroke-linecap",
        "stroke-linejoin": "stroke-linejoin",
        "shape-rendering": "shape-rendering",
        transform: "transform"
    }, N = p._createNode, b;
    p.svg ? (d && (p.el.dropshadow = function (b, a, c, d) {
        var w = this.node, s = this._.shadowFilter, g = this.paper.cacheShadows || (this.paper.cacheShadows = {}), e = "drop-shadow" + [b, a, c, d].join(" "), h;
        if ("none" === b) {
            if (s) {
                s.use -= 1;
                this.node.removeAttribute("filter");
                if (!s.use) {
                    e = s.hash;
                    for (h in s)b = s[h], b.parentNode && b.parentNode.removeChild(b), delete s[h];
                    delete g[e]
                }
                delete this._.shadowFilter
            }
        } else s && g[e] === s || (s = this.paper.defs.appendChild(N("filter", {
            id: p.createUUID(), width: "200%",
            height: "200%"
        })), d = p.color(d), d.error && (d = p.color("rgba(0,0,0,1)")), h = p.pick(d.opacity, 1), this._.shadowFilter = g[e] = {
            use: 1,
            filter: s,
            hash: e,
            offset: s.appendChild(N("feOffset", {result: "offOut", "in": "SourceGraphic", dx: D(b), dy: D(a)})),
            matrix: s.appendChild(N("feColorMatrix", {
                result: "matrixOut",
                "in": "offOut",
                type: "matrix",
                values: "0 0 0 0 " + d.r / 255 + " 0 0 0 0 " + d.g / 255 + " 0 0 0 0 " + d.b / 255 + " 0 0 0 " + h + " 0"
            })),
            blur: s.appendChild(N("feGaussianBlur", {result: "blurOut", "in": "matrixOut", stdDeviation: l(D(c))})),
            blend: s.appendChild(N("feComposite",
                {"in": "SourceGraphic", in2: "blurOut", operator: "over"}))
        }, w.setAttribute("filter", 'url("' + p._url + "#" + s.id + '")'));
        return this
    }), b = function (b, a) {
        var d = this.__shadowscale, p = {}, l, s;
        for (s in b)switch (c[s] && (p[s] = b[s], delete b[s]), s) {
            case "transform":
                l = a.matrix.clone();
                l.translate(this.__shadowx, this.__shadowy);
                this.transform(l.toTransformString());
                break;
            case "stroke-width":
                b[s] = ((p[s] || 1) + 6 - 2 * this.__shadowlevel) * d
        }
        this.attr(b);
        for (s in p)b[s] = p[s]
    }, p.ca["drop-shadow"] = function (c, a, d, l, D, s) {
        d = this._.shadows ||
            (this._.shadows = []);
        var g, e, h, m, M;
        if (!this.__shadowblocked)if ("none" === c)for (; e = d.pop();)e.remove(); else for (l = p.color(l), l.error && (l = p.color("rgba(0,0,0,1)")), D instanceof Array ? (g = D[0], D = D[1]) : g = D, g = 1 / p.pick(g, 1), D = 1 / p.pick(D, 1), c = p.pick(c, 1) * g, a = p.pick(a, 1) * g, g = .05 * p.pick(l.opacity, 1), h = w(this.attr("stroke-width") || 1, 10) + 6, m = this.matrix.clone(), m.translate(c, a), M = 1; 3 >= M; M++)e = (d[M - 1] || this.clone().follow(this, b, !s && "before")).attr({
            stroke: l.hex, "stroke-opacity": g * M, "stroke-width": (h - 2 * M) * D, transform: m.toTransformString(),
            "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none"
        }), e.__shadowlevel = M, e.__shadowscale = D, e.__shadowx = c, e.__shadowy = a, s && s.appendChild(e), d.push(e);
        return !1
    }, p.el.shadow = function (b, a, c, d) {
        var l;
        c && c.constructor === p.el.constructor && (d = c, c = void 0);
        "object" === typeof b && (a && a.constructor === p.el.constructor && (d = a), a = b.opacity, c = b.scalefactor, l = !!b.useFilter, b = void 0 === b.apply ? !!a : b.apply);
        void 0 === a && (a = 1);
        if (this.dropshadow) {
            if (l)return b && this.dropshadow(1, 1, 3, "rgb(64,64,64)") || this.dropshadow("none"),
                this;
            this._.shadowFilter && this.dropshadow("none")
        }
        return this.attr("drop-shadow", b ? [1, 1, 3, "rgba(64,64,64," + a + ")", c, d] : "none")
    }) : p.vml ? (p.ca["drop-shadow"] = function (b, a, c, d, l, s) {
        var g = this._.shadow, e, h;
        if (this.isShadow)return !1;
        "none" === b ? g && (this._.shadow = g.remove()) : (g || (g = this._.shadow = this.clone(), s && s.appendChild(g.follow(this)) || g.follow(this, void 0, "before"), g.attr({
            fill: "none",
            "fill-opacity": .5,
            "stroke-opacity": 1
        }).isShadow = !0, 0 >= g.attr("stroke-width") && g.attr("stroke-width", 1)), s = g.node.runtimeStyle,
            e = s.filter.replace(/ progid:\S+Blur\([^\)]+\)/g, ""), d = p.color(d), d.error && (d = p.color("rgba(0,0,0,1)")), h = p.pick(d.opacity, 1) / 5, l = 1 / p.pick(l, 1), b = p.pick(b, 1) * l, a = p.pick(a, 1) * l, g.translate(b, a), s.filter = e + " progid:DXImageTransform.Microsoft.Blur(pixelRadius=" + D(.4 * c) + " makeShadow=True Color=" + d.hex + ' shadowOpacity="' + h + '");');
        return !1
    }, p.el.shadow = function (b, a, c, d) {
        c && c.constructor === p.el.constructor && (d = c, c = void 0);
        "object" === typeof b && (a && "group" === a.type && (d = a), a = b.opacity, c = b.scalefactor, b = void 0 ===
        b.apply ? !!a : b.apply);
        void 0 === a && (a = 1);
        return this.attr("drop-shadow", b || !a ? [1, 1, 5, "rgba(64,64,64," + a + ")", c, d] : "none")
    }) : p.canvas && (p.el.shadow = function () {
        return this
    })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelshapes", function () {
    var d = this.window, l = "createTouch" in d.document, D = /msie/i.test(d.navigator.userAgent) && !d.opera, w = d.Math, p = w.cos, c = w.sin, N = w.abs, b = w.pow, I = w.atan2, a = w.tan, z = w.acos, F = w.min, K = w.round, s = w.PI, g = w.sqrt, e = 2 * s, h = d.parseInt, m = d.parseFloat, M = String, C = Array.prototype.slice, q = b(2, -24), Y = "rgba(192,192,192," + (D ? .002 : 1E-6) + ")", u = this.hcLib.Raphael, ea = u.eve, t = u._createNode, V = u._setFillAndStroke, X = u.el.constructor, ia = {
        speed: "optimizeSpeed",
        crisp: "crispEdges", precision: "geometricPrecision"
    }, Ba = {enabled: !1, "false": !1, 0: !1, disabled: !0, "true": !0, 1: !0}, qa = {
        Q: "L",
        Z: "X",
        q: "l",
        z: "x",
        ",": " "
    }, da = /,?([achlmqrstvxz]),?/gi, ka = /\s*\,\s*/g, aa, Z = function () {
        return this.join(",").replace(da, aa)
    }, ca, S, G = u._cacher(function (a, c, e, d) {
        return g(b(e - a, 2) + b(d - c, 2))
    }), fa = u._cacher(function (a, b, c, e, d) {
        var g = c - a, h = e - b;
        c = G(a, b, c, e);
        return {x: a + g / c * d, y: b + h / c * d}
    });
    if (u.svg)ea.on("raphael.attr.shape-rendering", function (a, b) {
        var c = this.node;
        this.attrs[b] = a = ia[a] || a ||
            "auto";
        c.setAttribute(b, a);
        c.style.shapeRendering = a
    }); else if (u.vml)ea.on("raphael.attr.shape-rendering", function (a) {
        this.node.style.antialias = "crisp" !== a
    });
    u.define && u.define([{
        name: "polypath", polypath: function () {
            return this.path(void 0, u._lastArgIfGroup(arguments))
        }, ca: {
            polypath: function (a, b, e, d, g, q) {
                var t, l, S;
                t = [];
                a = h(a, 10) || 0;
                b = m(b) || 0;
                e = m(e) || 0;
                d = m(d) || 0;
                g = null === g || isNaN(g) ? .5 * s : u.rad(g);
                q = null === q || isNaN(q) ? 0 : m(q);
                l = g;
                if (2 < a)switch (g = 2 * s / a, q) {
                    case 0:
                        for (q = 0; q < a; q++)t.push("L", b + d * p(-l), e + d *
                            c(-l)), l += g;
                        t[0] = "M";
                        t.push("Z");
                        break;
                    case 1:
                        for (q = 0; q < a; q++)t.push("M", b, e, "L", b + d * p(-l), e + d * c(-l)), l += g;
                        break;
                    default:
                        g *= .5;
                        S = d * p(g) * (1 - q);
                        for (q = 0; q < a; q++)t.push("L", b + d * p(-l), e + d * c(-l)), l += g, t.push("L", b + S * p(-l), e + S * c(-l)), l += g;
                        t[0] = "M";
                        t.push("Z")
                } else 0 === d ? t.push("M", b, e, "L", b, e, "Z") : t.push("M", b - d, e, "A", d, d, 0, 0, 0, b + d, e, "A", d, d, 0, 0, 0, b - d, e, "Z");
                return {path: t}
            }, r: function (a) {
                var b = this.attrs.polypath;
                b[3] = a;
                this.attr("polypath", b);
                return !1
            }
        }
    }, {
        name: "ringpath", ringpath: function () {
            return this.path(void 0,
                u._lastArgIfGroup(arguments))
        }, ca: function (a, b, d, g, h, m) {
            var u = m % e - h % e, t = m - h, l, S, G, z, C;
            this._.ringangle = .5 * (h + m);
            N(t) < q ? (t = p(h), h = c(h), d = ["M", a + d * t, b + d * h, "L", a + g * t, b + g * h, "Z"]) : (N(t) > q && N(t) % e < q ? (d = ["M", a - d, b, "A", d, d, 0, 0, 0, a + d, b, "A", d, d, 0, 0, 0, a - d, b], 0 !== g && (d = d.concat(["M", a - g, b, "A", g, g, 0, 0, 1, a + g, b, "A", g, g, 0, 0, 1, a - g, b]))) : (t = p(h), h = c(h), l = p(m), m = c(m), u %= e, 0 > u && (u += e), u = u < s ? 0 : 1, S = a + d * t, z = b + d * h, G = a + d * l, C = b + d * m, l = a + g * l, m = b + g * m, .01 > N(S - G) && .01 > N(z - C) && (z = C + .01), d = ["M", S, z, "A", d, d, 0, u, 1, G, C, "L", l, m], 0 !==
            g && (a += g * t, b += g * h, .01 > N(l - a) && .01 > N(m - b) && (b = m + .01), d.push("A", g, g, 0, u, 0, a, b))), d.push("Z"));
            return {path: d}
        }
    }, {
        name: "cubepath", cubepath: function () {
            var a = {
                "stroke-linejoin": "round",
                "shape-rendering": "precision",
                stroke: "none"
            }, b = arguments, c = b.length - 1, e = b[c], d, g;
            e && e.constructor === u.el.constructor ? b[c] = void 0 : e = void 0;
            c = this.path(a, e);
            d = this.path(a, e);
            a = this.path(a, e);
            a._.cubetop = c.follow(a, void 0, "before");
            a._.cubeside = d.follow(a, void 0, "before");
            for (g in u.fn.cubepath.ca)a.ca[g] = u.fn.cubepath.ca[g];
            return a.attr("cubepath", [b[0], b[1], b[2], b[3], b[4], b[5]])
        }, fn: {
            _getBBox2: function () {
                var a = this._.cubeside.getBBox(), b = this._.cubetop.getBBox(), c = this.getBBox();
                return {x: c.x + b.height, y: c.y - a.width, width: c.width, height: c.height}
            }
        }, ca: {
            cubepath: function (a, b, c, e, d, g) {
                var h = this._.cubetop, q = this._.cubeside;
                a = a || 0;
                b = b || 0;
                c = c || 0;
                e = e || 0;
                d = d || 0;
                g = g || 0;
                this.attr("path", ["M", a + c, b, "l", 0, e, -c, 0, 0, -e, "z"]);
                h.attr("path", ["M", a, b, "l", 1, 1, c - 1, 0, 0, -1, d, -g, -c, 0, "z"]);
                q.attr("path", ["M", a + c - 1, b + 1, "l", 0, e - 1, 1, 0, d, -g,
                    0, -e, -d, g]);
                return !1
            }, "stroke-linejoin": function () {
                return {"stroke-linejoin": "round"}
            }, "drop-shadow": function (a, b, c, e) {
                var d = this._.cubetop, g = this._.cubeside;
                this.dropshadow && (d.dropshadow(a, -b, c, e), g.dropshadow(a, -b, c, e));
                return !1
            }, fill: function (a, b) {
                var c = this._.cubetop, e = this._.cubeside, d = this.attr("cubepath") || [0, 0, 0, 0, 0, 0], g = d[2], h = d[4], d = d[5], q;
                a = u.color(a);
                b ? (this.attr("fill", a), c.attr("fill", u.tintshade(a, -.78).rgba), e.attr("fill", u.tintshade(a, -.65).rgba)) : (q = "opacity" in a ? "rgba(" + [a.r, a.g,
                    a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")", this.attr("fill", [270, u.tintshade(q, .55).rgba, u.tintshade(q, -.65).rgba].join("-")), e.attr("fill", [270, u.tintshade(q, -.75).rgba, u.tintshade(q, -.35).rgba].join("-")), c.attr("fill", [45 + u.deg(I(d, h + g)), u.tintshade(q, -.78).rgba, u.tintshade(q, .22).rgba].join("-")));
                return !1
            }
        }
    }, {
        name: "scroller", scroller: function (a, b, c, e, d, g, h) {
            var q = this.group("scroller", h), p = q.attrs, t = q._.scroller = {};
            d = d && "horizontal" || "vertical";
            var s, l = {}, S, G, z;
            t.track = this.rect(q).mousedown(function (a) {
                var b =
                    p["scroll-position"];
                a = "horizontal" === p["scroll-orientation"] ? a.layerX || a.x : a.layerY || a.y;
                a = (a - t.anchorOffset) / t.trackLength;
                s = u.animation({"scroll-position": a}, 2E3 * N(b - a), "easeIn");
                q.animate(s);
                ea("raphael.scroll.start." + q.id, q, b)
            }).mouseup(t._mouseupTrack = function () {
                this.stop(s);
                ea("raphael.scroll.end." + this.id, this, p["scroll-position"])
            }, q, !0);
            t.anchor = this.rect(q).drag(function () {
                l["scroll-position"] = S + arguments[G] / t.trackLength;
                q.animate(l, 0)
            }, function (a, b, c) {
                G = "horizontal" === p["scroll-orientation"] ?
                    0 : 1;
                ea("raphael.scroll.start." + q.id, q, S = p["scroll-position"]);
                c.stopPropagation()
            }, function () {
                ea("raphael.scroll.end." + q.id, q, S = p["scroll-position"])
            });
            for (z in u.fn.scroller.fn)q[z] = u.fn.scroller.fn[z];
            for (z in u.fn.scroller.ca)q.ca[z] = u.fn.scroller.ca[z];
            p["scroll-orientation"] = d;
            p["stroke-width"] = 1;
            q.ca["scroll-repaint"] = q.ca["scroll-repaint-" + d];
            !u.is(g, "object") && (g = {});
            return q.attr({
                ishot: !0,
                "scroll-display-buttons": g.showButtons && "arrow" || "none",
                "scroll-display-style": g.displayStyleFlat &&
                "flat" || "3d",
                "scroll-ratio": m(g.scrollRatio) || 1,
                "scroll-position": m(g.scrollPosition) || 0,
                "scroll-repaint": [a, b, c, e]
            })
        }, fn: {
            scroll: function (a, b) {
                var c = this._.scroller;
                b = b || this;
                c.callback = function () {
                    return a.apply(b, arguments)
                };
                return this
            }, remove: function () {
                var a = this._.scroller, b;
                this.attr("scroll-display-buttons", "none");
                a.track.unmouseup(a._mouseupTrack);
                for (b in a)a[b] && a[b].remove && a[b].remove(), a[b] = null;
                delete this._.scroller;
                u.el.remove.apply(this, arguments)
            }
        }, ca: {
            "stroke-width": function () {
                return !1
            },
            "drop-shadow": function (a, b, c, e, d, g) {
                this._.scroller.track.attr("drop-shadow", [a, b, c, e, d, g]);
                return !1
            }, "scroll-display-style": function (a) {
                var b = this.attrs, c = b["scroll-display-style"], e = b.fill;
                a = {flat: "flat", "3d": "3d", transparent: "transparent"}[a] || c;
                e && a !== c && (b["scroll-display-style"] = a, this.attr("fill", e));
                return {"scroll-display-style": a}
            }, "scroll-display-buttons": function (a) {
                var b = this, c = b.paper, e = b._.scroller, d = b.attrs, g = d["scroll-display-buttons"], h = d["scroll-repaint"], q, m;
                void 0 === g && (g = "none");
                a = {none: "none", arrow: "arrow"}[a] || g;
                a !== g && (d["scroll-display-buttons"] = a, "none" === a && e.start ? (e.arrowstart.remove(), delete e.arrowstart, e.arrowend.remove(), delete e.arrowend, e.start.unmouseup(e._mouseupStart), e.start.remove(), delete e.start, e.end.unmouseup(e._mouseupEnd), e.end.remove(), delete e.end) : (e.arrowstart = c.polypath(b), e.arrowend = c.polypath(b), e.start = c.rect(b).mousedown(function () {
                    var a;
                    0 !== (a = d["scroll-position"]) && (b.animate({"scroll-position": a - .1}, 100).animate(q = u.animation({"scroll-position": 0},
                        4500 * a, "easeIn")), ea("raphael.scroll.start." + b.id, b, a))
                }).mouseup(e._mouseupStart = function () {
                    b.stop(q);
                    ea("raphael.scroll.end." + b.id, b, d["scroll-position"])
                }, b, !0), e.end = c.rect(b).mousedown(function () {
                    var a;
                    1 !== (a = d["scroll-position"]) && (b.animate({"scroll-position": a + .1}, 100).animate(m = u.animation({"scroll-position": 1}, 4500 * (1 - a), "easeIn")), ea("raphael.scroll.start." + b.id, b, a))
                }).mouseup(e._mouseupEnd = function () {
                    b.stop(m);
                    ea("raphael.scroll.end." + b.id, b, d["scroll-position"])
                }, b, !0), d.fill && b.attr("fill",
                    d.fill)), h && b.attr("scroll-repaint", h));
                return {"scroll-display-buttons": a}
            }, "scroll-orientation": function (a) {
                var b = this.attrs, c = b["scroll-repaint"], e = b["scroll-orientation"];
                a = {horizontal: "horizontal", vertical: "vertical"}[a] || e;
                e !== a && (this.ca["scroll-repaint"] = this.ca["scroll-repaint-" + a], c && (c[2] += c[3], c[3] = c[2] - c[3], c[2] -= c[3], this.attr("scroll-repaint", c)), b.fill && this.attr("fill", b.fill));
                return {"scroll-orientation": a}
            }, "scroll-ratio": function (a) {
                var b = this.attrs, c = b["scroll-ratio"], e = b["scroll-repaint"];
                a = 1 < a ? 1 : .01 > a ? .01 : m(a);
                e && a !== c && (b["scroll-ratio"] = a, this.attr("scroll-repaint", e));
                return {"scroll-ratio": a}
            }, "scroll-position": function (a, b) {
                var c = this.attrs, e = "horizontal" === c["scroll-orientation"], d = c["scroll-repaint"], g = c["scroll-position"], h = this._.scroller, q = h.anchor;
                a = 1 < a ? 1 : 0 > a ? 0 : m(a);
                isNaN(a) && (a = g);
                d && (g !== a || b) && (g = h.start && h.start.attr(e && "width" || "height") || 0, e && q.attr("x", d[0] + g + (d[2] - 2 * g - q.attr("width")) * a + .5) || q.attr("y", d[1] + g + (d[3] - 2 * g - q.attr("height")) * a + .5), !b && 1 > c["scroll-ratio"] &&
                (ea("raphael.scroll.change." + this.id, this, a), h.callback && h.callback(a)));
                return {"scroll-position": a}
            }, r: function (a) {
                var b = this._.scroller;
                b.track.attr("r", a);
                b.anchor.attr("r", "none" === this.attrs["scroll-display-buttons"] && a || 0);
                return !1
            }, "scroll-repaint-horizontal": function (a, b, c, e) {
                var d = this.attrs, g = this._.scroller, h = d["scroll-ratio"], q = d["scroll-position"], m = 0, u = c * h, d = "none" === d["scroll-display-buttons"];
                c && (c -= 1);
                a && (a += .5);
                e && (e -= 1);
                b && (b += .5);
                g.track.attr({width: c, height: e, y: b, x: a}).crisp();
                d || (m = F(e, .5 * c), u -= 2 * m * h, g.start.attr({
                    width: m,
                    height: e,
                    x: a,
                    y: b
                }), g.arrowstart.attr("polypath", [3, a + .5 * m, b + .5 * e, .25 * m, 180]), g.end.attr({
                    width: m,
                    height: e,
                    x: a + c - m,
                    y: b
                }), g.arrowend.attr("polypath", [3, a + c - .5 * m, b + .5 * m, .25 * m, 0]));
                g.trackLength = c - 2 * m - u;
                g.trackOffset = a + m + .5;
                g.anchorOffset = g.trackOffset + .5 * (u - 1);
                g.anchor.attr({height: e, width: u - 1, y: b, x: g.trackOffset + g.trackLength * q}).crisp()
            }, "scroll-repaint-vertical": function (a, b, c, e) {
                var d = this.attrs, g = this._.scroller, h = d["scroll-ratio"], q = d["scroll-position"],
                    m = 0, u = e * h, d = "none" === d["scroll-display-buttons"];
                c && (c -= 1);
                a && (a += .5);
                e && (e -= 1);
                b && (b += .5);
                g.track.attr({width: c, height: e, y: b, x: a}).crisp();
                d || (m = F(c, .5 * e), u -= 2 * m * h, g.start.attr({
                    width: c,
                    height: m,
                    x: a,
                    y: b
                }), g.arrowstart.attr("polypath", [3, a + .5 * c, b + .5 * m, .25 * m, 90]), g.end.attr({
                    width: c,
                    height: m,
                    x: a,
                    y: b + e - m
                }), g.arrowend.attr("polypath", [3, a + .5 * c, b + e - .5 * m, .25 * m, -90]));
                g.trackLength = e - 2 * m - u;
                g.trackOffset = b + m + .5;
                g.anchorOffset = g.trackOffset + .5 * (u - 1);
                g.anchor.attr({
                    height: u - 1, width: c, y: g.trackOffset + g.trackLength *
                    q, x: a
                }).crisp()
            }, fill: function (a) {
                var b = this.attrs, c = this._.scroller, e = b["scroll-repaint"], d = "flat" === b["scroll-display-style"], g = "horizontal" === b["scroll-orientation"], h = {stroke: "none"}, q;
                l && e && 3 < (q = 16 - e[g && 3 || 2]) && (h.stroke = Y, h["stroke-width"] = q);
                a = u.color(a);
                a.error && (a = "#000000");
                a = "opacity" in a ? "rgba(" + [a.r, a.g, a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")";
                h.fill = d && a || [90 * g, u.tintshade(a, .15).rgba, a].join("-");
                h.stroke = u.tintshade(a, -.75).rgba;
                c.track.attr(h);
                h.fill = d && u.tintshade(a, -.6).rgba ||
                    [270 * g, u.tintshade(a, .3).rgba + ":40", u.tintshade(a, -.7).rgba].join("-");
                h.stroke = u.tintshade(a, -.6).rgba;
                c.anchor.attr(h);
                h.stroke = "none";
                "none" !== b["scroll-display-buttons"] && (h.fill = Y, c.start.attr(h), c.end.attr(h), h.fill = u.tintshade(a, -.4).rgba, c.arrowstart.attr(h), c.arrowend.attr(h));
                return !1
            }
        }
    }, {
        name: "button", button: function (a, b, c, e, d, g) {
            g = this.group("button", g);
            var h;
            g._.button = {
                bound: this.rect(g),
                tracker: this.rect(g).attr({fill: Y, stroke: Y, cursor: "pointer"}).data("compositeButton", g)
            };
            !u.is(d,
                "object") && (d = {});
            for (h in u.fn.button.fn)g[h] = u.fn.button.fn[h];
            for (h in u.fn.button.ca)g.ca[h] = u.fn.button.ca[h];
            return g.attr({
                ishot: !0,
                "button-padding": [d.horizontalPadding, d.verticalPadding],
                "button-label": c,
                "button-symbol": e,
                "button-disabled": d.disabled || "false",
                "button-symbol-position": d.symbolPosition,
                "button-symbol-padding": d.symbolPadding
            }).attr("button-repaint", [a, b, d.width, d.height, d.r])
        }, data: {
            hoverin: function () {
                var a = this._.button.hoverbackIn;
                a && !1 === a() || (this.attr("fill", "hover").hovered = !0)
            }, hoverout: function () {
                var a = this._.button.hoverbackOut;
                a && !1 === a() || (this.attr("fill", (this.pressed || this.active) && "active" || "normal").hovered = !1)
            }, mousedown: function () {
                this.attr("fill", "active").pressed = !0
            }, mouseup: function () {
                var a = this._.button.callback;
                this.attr("fill", this.hovered && "hover" || this.active && "active" || "normal").pressed = !1;
                a()
            }
        }, fn: {
            tooltip: function () {
                u.el.tooltip && u.el.tooltip.apply(this._.button.tracker, arguments);
                return this
            }, buttonclick: function (a, b) {
                var c = this._.button;
                b = b ||
                    this;
                c.callback = function () {
                    return a.apply(b, arguments)
                };
                return this
            }, labelcss: function () {
                var a = this._.button, b = a.label;
                a.cssArg = arguments;
                b && b.css.apply(b, arguments);
                return this.attr("button-repaint", this.attrs["button-repaint"])
            }, buttonhover: function (a, b, c, e) {
                var d = this._.button;
                c = c || this;
                e = e || this;
                d.hoverbackIn = function () {
                    return a.apply(c, arguments)
                };
                d.hoverbackOut = function () {
                    return b.apply(e, arguments)
                };
                return this
            }, remove: function () {
                var a = this._.button, b;
                this.attr("button-disabled", "true");
                for (b in a)a[b] &&
                a[b].remove && a[b].remove(), a[b] = null;
                delete this._.button;
                u.el.remove.apply(this, arguments)
            }
        }, ca: {
            "button-active": function (a) {
                this.attr("fill", (this.active = !!a) ? "active" : this.hovered && "hover" || "normal")
            }, "button-disabled": function (a) {
                var b = this._.button.tracker, c = this.attrs["button-disabled"], e = this.paper.button.data;
                a = Ba[a];
                c = Ba[c];
                if (void 0 !== a && a !== c)switch (a) {
                    case !0:
                        b.attr("fill", "rgba(204,204,205,.5)").unmousedown(e.mousedown).unmouseup(e.mouseup).unhover(e.hoverin, e.hoverout);
                        break;
                    case !1:
                        b.attr("fill",
                            Y).mousedown(e.mousedown, this).mouseup(e.mouseup, this, !0).hover(e.hoverin, e.hoverout, this, this)
                }
            }, "button-label": function (a) {
                var b = this._.button, c = this.attrs, e = b.label, d = b.cssArg, g = this.attrs["button-repaint"];
                a = M(a || "");
                "none" === a ? e && (b.label = e.remove()) : a && (!e && (e = b.label = this.paper.text(this).insertBefore(b.tracker)), e.attr({
                    text: a,
                    "text-anchor": "middle",
                    "vertical-align": "middle"
                }), d && d.length && e.css.apply(e, d));
                g && c["button-label"] !== a && this.attr("button-repaint", g)
            }, "button-symbol": function (a) {
                var b =
                    this.attrs, c = this._.button, e = c.symbol, d = this.attrs["button-repaint"];
                a = M(a || "");
                "none" === a ? e && (c.symbol = e.remove()) : a && !e && (c.symbol = this.paper.symbol(this).insertAfter(c.bound));
                d && b["button-symbol"] !== a && this.attr("button-repaint", d)
            }, "button-symbol-position": function (a) {
                return {
                    "button-symbol-position": {
                        top: "top",
                        right: "right",
                        bottom: "bottom",
                        left: "left",
                        none: "none"
                    }[M(a).toLowerCase()] || "none"
                }
            }, "button-symbol-padding": function (a) {
                return {"button-symbol-padding": m(a)}
            }, "button-padding": function (a,
                                           b) {
                return {"button-padding": [null == a && (a = 5) || m(a), null == b && a || m(b)]}
            }, "button-repaint": function (a, b, c, e, d) {
                var g = this._.button, h = g.bound, q = g.label, m = g.symbol, p = this.attrs, t = p["button-padding"], s = t[0], l = t[1], S, G;
                void 0 === a && (a = 0);
                void 0 === b && (b = 0);
                if (void 0 === c || void 0 === e)S = q && q.getBBox() || {
                        width: 0,
                        height: 0
                    }, void 0 === c && (c = 2 * s + S.width), void 0 === e && (e = 2 * l + S.height);
                h = u.crispBound(a, b, c, e, h.attr("stroke-width"));
                h.r = u.pick(d, K(.1 * F(e, c)));
                a = h.x;
                b = h.y;
                c = h.width;
                e = h.height;
                q && q.attr({x: a + c / 2, y: b + e / 2});
                if (m) {
                    !u.is(G = p["button-symbol-padding"], "finite") && (G = .2 * e);
                    d = e - l;
                    S = .5 * d;
                    switch (p["button-symbol-position"] + (q && "+" || "-")) {
                        case "right+":
                            a = a + (c + (2 * S + l)) - S - s;
                            b += .5 * e;
                            q.attr("transform", ["t", -(d + G), 0]);
                            break;
                        case "left+":
                            a = a + s + S;
                            b += .5 * e;
                            q.attr("transform", ["t", d + G, 0]);
                            break;
                        case "top+":
                            a += .5 * c;
                            b = b + t[1] + S;
                            q.attr("transform", ["t", 0, d + G]);
                            break;
                        case "bottom+":
                            a += .5 * c;
                            b = b + (e + (2 * S + G)) - l - S;
                            q.attr("transform", ["t", 0, -(d + G)]);
                            break;
                        default:
                            a += .5 * c, b += .5 * e
                    }
                    m.attr("symbol", [p["button-symbol"], a, b, S])
                }
                g.bound.attr(h);
                g.tracker.attr(h)
            }, fill: function (a, b, c, e) {
                var d = this._.button, g = d.bound, h = d.symbol, q = d.label, m = {
                    normal: d.gradient,
                    active: d.gradientActive,
                    hover: d.gradientHover
                }[a];
                m || (a = u.getRGB(a), a.error && (a = u.color("#cccccc")), a = "opacity" in a ? "rgba(" + [a.r, a.g, a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")", d.gradient = [90, u.tintshade(a, -.8).rgba + ":0", u.tintshade(a, .8).rgba + ":100"].join("-"), d.gradientActive = [270, u.tintshade(a, -.8).rgba + ":0", u.tintshade(a, .8).rgba + ":100"].join("-"), e = u.getRGB(e), e.error && (e = a) || (e =
                    "opacity" in e ? "rgba(" + [e.r, e.g, e.b, e.opacity] + ")" : "rgb(" + [e.r, e.g, e.b] + ")"), d.gradientHover = [90, u.tintshade(e, -.9).rgba + ":0", u.tintshade(e, .7).rgba + ":100"].join("-"), c = c || u.tintshade(a, .2).rgba, b = b || u.tintshade(a, -.2).rgba, d.symbolFill = c, d.labelFill = b, m = (this.pressed || this.active) && d.gradientActive || this.hovered && d.gradienthover || d.gradient);
                g.attr("fill", m);
                h && h.attr("fill", d.symbolFill);
                q && q.attr("fill", d.labelFill);
                return !1
            }, stroke: function (a, b) {
                var c = this._.button, e = c.symbol;
                a = u.color(a);
                a.error &&
                (a = u.color("#999999"));
                c.bound.attr("stroke", a);
                e && e.attr("stroke", b || a);
                return !1
            }, "stroke-width": function (a, b) {
                var c = this._.button, e = c.symbol;
                c.bound.attr("stroke-width", a);
                c.tracker.attr("stroke-width", a);
                e && e.attr("stroke-width", b);
                return !1
            }
        }
    }, {
        name: "trianglepath", trianglepath: function () {
            var a = arguments, b = u._lastArgIfGroup(a);
            return this.path(b).attr("trianglepath", [a[0], a[1], a[2], a[3], a[4], a[5], a[6] || 0, a[7] || 0, a[8] || 0])
        }, fn: {
            sides: function () {
                var a = this._args;
                return [G(a[0], a[1], a[2], a[3]), G(a[2],
                    a[3], a[4], a[5]), G(a[4], a[5], a[0], a[1])]
            }, enclosedAngles: function () {
                var a = this._sides;
                return [z((b(a[0], 2) + b(a[2], 2) - b(a[1], 2)) / (2 * a[0] * a[2])), z((b(a[0], 2) + b(a[1], 2) - b(a[2], 2)) / (2 * a[0] * a[1])), z((b(a[2], 2) + b(a[1], 2) - b(a[0], 2)) / (2 * a[2] * a[1]))]
            }, semiperimeter: function () {
                var a = this._sides || this.sides();
                return (a[0] + a[1] + a[2]) / 2
            }
        }, ca: {
            trianglepath: function (b, c, e, d, h, q, m, u, p) {
                if (m || u || p) {
                    this._args = arguments;
                    this._sides = this.sides();
                    var t = this.enclosedAngles(), s;
                    s = this.semiperimeter();
                    s = g(s * (s - this._sides[0]) *
                            (s - this._sides[1]) * (s - this._sides[2])) / s;
                    t = [F(m, s) / a(t[0] / 2), F(u, s) / a(t[1] / 2), F(p, s) / a(t[2] / 2)];
                    t = [fa(b, c, h, q, t[0]), fa(b, c, e, d, t[0]), fa(e, d, b, c, t[1]), fa(e, d, h, q, t[1]), fa(h, q, e, d, t[2]), fa(h, q, b, c, t[2])];
                    this.attr({path: ["M", t[0].x, t[0].y, "Q", b, c, t[1].x, t[1].y, "L", t[2].x, t[2].y, "Q", e, d, t[3].x, t[3].y, "L", t[4].x, t[4].y, "Q", h, q, t[5].x, t[5].y, "L", t[0].x, t[0].y]})
                } else this.attr({path: ["M", b, c, "L", e, d, h, q, "Z"]})
            }
        }
    }]);
    u.ca["text-bound"] = function (a, b, c, e, d, g) {
        e = this.paper;
        var h = this._.textbound;
        if ("text" ===
            this.type) {
            if (!(b && "none" !== b || a && "none" !== a))return this._.textbound = h && h.unfollow(this).remove(), !1;
            c && u.is(c, "finite") || (c = 0);
            d && u.is(d, "finite") || (d = 0);
            !h && (h = this._.textbound = e.rect(0, 0, 0, 0, this.group).follow(this, u.ca["text-bound"].reposition, "before"));
            h.attr({stroke: b, "stroke-width": c, fill: a, "shape-rendering": 1 === c && "crisp" || "", r: d});
            g && h.attr("stroke-dasharray", g);
            u.ca["text-bound"].reposition.call(h, this.attr(), this);
            return !1
        }
    };
    u.ca["text-bound"].reposition = function (a, b) {
        var c = {}, e, d, g,
            h, q;
        a.hasOwnProperty("visibility") && this.attr("visibility", a.visibility);
        if (a.hasOwnProperty("text-bound") || a.hasOwnProperty("x") || a.hasOwnProperty("y") || a.hasOwnProperty("text") || a.hasOwnProperty("text-anchor") || a.hasOwnProperty("text-align") || a.hasOwnProperty("font-size") || a.hasOwnProperty("line-height") || a.hasOwnProperty("vertical-align") || a.hasOwnProperty("transform") || a.hasOwnProperty("rotation"))e = b.attrs["text-bound"], d = M(e && e[3] || "0").split(ka), e = m(d[0]) || 0, d = u.pick(m(d[1]), e), g = b.getBBox(),
            h = g.width, q = g.height, isNaN(h) || (c.x = g.x - e, c.y = g.y - d, c.width = h + 2 * e, c.height = q + 2 * d), this.attr(c)
    };
    u.fn.symbol = function () {
        var a = arguments, b = a.length - 1, c = a[b];
        c && c.constructor === u.el.constructor ? a[b] = void 0 : c = void 0;
        b = this.path(void 0, c);
        b.ca.symbol = u.fn.symbol.ca.symbol;
        return a.length === !!c + 0 ? b : b.attr("symbol", a)
    };
    u.fn.symbol.cache = {
        "": u._cacher(function (a, b, c, e) {
            return 3 < arguments.length ? ["M", a, b, "h", c, "v", e, "h", -c, "v", -e, "z"] : ["M", a - c, b - c, "h", c *= 2, "v", c, "h", -c, "v", -c, "z"]
        })
    };
    u.fn.symbol.ca = {
        symbol: function (a) {
            var b =
                u.is(a, "object") && 1 === arguments.length && !u.is(a, "function") ? a : arguments, c;
            b === a && (a = b[0]);
            b = (c = u.is(a, "function") && a || u.fn.symbol.cache[a] || u.fn.symbol.cache[""]) && c.apply(u, C.call(b, 1));
            u.is(b, "array") || u.is(b, "string") ? this.attr("path", b) : b && this.attr(b)
        }
    };
    u.addSymbol = function (a, b) {
        var c = u.is(b, "function") && (c = {}, c[a] = b, c) || a, e = u.fn.symbol.cache, d = [], g;
        for (g in c)b = c[g], e[g] = u.is(b, "function") && u._cacher(b, u) || (d.push(g), b);
        for (; g = d.pop();)e[g] = e[e[g]]
    };
    u.svg ? (aa = "$1", ca = function (a) {
        a ? "string" === typeof a ? a = a.replace(da, aa) : a.toString = Z : a = "M0,0";
        this.node.setAttribute("d", a.toString());
        return this
    }, u._engine.litepath = function (a, b, c, e) {
        a = t("path");
        (e || b).canvas.appendChild(a);
        b = new X(a, b, e);
        b.type = "litepath";
        b.id = a.raphaelid = u._oid++;
        a.raphael = !0;
        V(b, {fill: "none", stroke: "#000"});
        return b
    }, u._getPath.litepath = function (a) {
        return u.parsePathString(a.node.getAttribute("d"))
    }) : u.vml && (aa = function (a, b) {
        return qa[b] || b
    }, S = function () {
        this._transform.apply(this, arguments);
        this._.bcoord && (this.node.coordsize =
            this._.bcoord);
        return this
    }, ca = function (a) {
        a ? "string" === typeof a ? a = a.replace(da, aa) : a.toString = Z : a = "M0,0";
        this.node.path = a;
        return this
    }, u._engine.litepath = function (a, b, c, e) {
        a = t("shape");
        var d = a.style, g = new X(a, b, e);
        d.cssText = "position:absolute;left:0;top:0;width:21600px;height:21600px;";
        c = m(c);
        isNaN(c) ? a.coordsize = "21600 21600" : (g._.bzoom = c, d.width = "1px", d.height = "1px", a.coordsize = g._.bcoord = c + " " + c);
        a.coordorigin = b.coordorigin;
        g.type = "litepath";
        g.id = a.raphaelid = u._oid++;
        a.raphael = !0;
        g._transform =
            g.transform;
        g.transform = S;
        u._setFillAndStroke(g, {fill: "none", stroke: "#000"});
        (e || b).canvas.appendChild(a);
        b = t("skew");
        b.on = !0;
        a.appendChild(b);
        g.skew = b;
        return g
    }, u._getPath.litepath = function (a) {
        return u.parsePathString(a.node.path || "")
    });
    u.fn.litepath = function (a, b, c) {
        b && b.constructor === X && (c = b, b = void 0);
        a && a.constructor === X && (c = a, a = "");
        b = u._engine.litepath(a, this, b, c);
        b.ca.litepath = ca;
        a && b.attr("litepath", u.is(a, "array") ? [a] : a);
        return this.__set__ && this.__set__.push(b), this._elementsById[b.id] = b
    }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-htmlrenderer", function () {
    var d = this.hcLib, l = d.Raphael, D = d.dem, w = this.window, p = w.document, c = /msie/i.test(w.navigator.userAgent) && !w.opera, N = "VML" === l.type, b = "createTouch" in p, I = {cursor: "cursor"}, a = {
        x: "left",
        y: "top",
        strokeWidth: "borderThickness",
        "stroke-width": "borderThickness",
        width: "width",
        height: "height"
    }, z = {fill: "backgroundColor", stroke: "borderColor", color: "color"}, F = {
        left: 0, top: 0, padding: 0, border: "none", margin: 0, outline: "none", "-webkit-apperance": "none",
        position: "absolute", zIndex: 20
    }, K, s = function (b, c, d, g) {
        b = p.createElement(b);
        for (var s in c)a[s] ? b.style[s] = c[s] : b.setAttribute(s, c[s]);
        for (s in d)b.style[s] = d[s];
        g && g.appendChild && g.appendChild(b);
        return b
    }, g;
    g = function (a, b, c) {
        b && b instanceof g && (b = b.element);
        (this.element = s(a, c, F, b)).ishot = "true";
        this.nodeName = a.toLowerCase();
        this.added = Boolean(b)
    };
    g.prototype = {
        attr: function (b) {
            var d = this.element, g = {}, s, l, q, Y, u, w, t;
            if ("object" !== typeof b) {
                if (!(g = this[b])) {
                    if ("string" === typeof b)d && d.getAttribute &&
                    (Y = d.getAttribute(b)); else if (void 0 !== b && null !== b && "object" === typeof b)for (q in b)d.setAttribute(q, b[q]);
                    g = Y
                }
                return g
            }
            for (s in b) {
                q = b[s];
                if (I[s]) {
                    switch (s) {
                        case "cursor":
                            "pointer" === q && N && (q = "hand")
                    }
                    d.style[I[s]] = q;
                    l = !0
                } else if (a[s])d.style[a[s]] = q + "px", l = !0; else if (z[s])d.style[z[s]] = q && q.replace(/^#?([a-f0-9]+)/ig, "#$1") || "none", l = !0; else if (/^visibility$/i.test(s))l = "hidden" === q, d.style.display = l ? "none" : "", this.hidden = l, l = !0; else if (/^opacity$/i.test(s))d.style.opacity = q, c && (l = 100 * Number(q), d.style.filter =
                    "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + l + ")"), l = !0; else if (/^innerhtml$/i.test(s)) {
                    if (N && "select" == d.nodeName.toLowerCase()) {
                        for (l = q.match(/<option\s?[\s\S]*?(\/>|><\/option>|>[\s\S]*?<\/option>)/ig); d.firstChild;)d.removeChild(d.firstChild);
                        u = 0;
                        for (w = l.length; u < w; u += 1)Y = l[u], t = p.createElement("option"), /<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig.test(Y) && (t.value = Y.replace(/<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig, "$1").replace(/[\s\S]*value\s*\=\s*[\'\"]([\s\S]*)[\'\"]/,
                            "$1")), t.text = Y.replace(/<option\s*[\s\S]*[\'\"]?\s*?[\/>|\>]([\s\S]*)<\/option>/ig, "$1 "), d.options.add(t)
                    } else"input" !== d.nodeName.toLowerCase() && void 0 !== q && (d.innerHTML = q || "");
                    l = !0
                } else/^text$/i.test(s) ? ("input" !== d.nodeName.toLowerCase() && (d.innerHTML = "", void 0 !== q && d.appendChild(p.createTextNode(q))), l = !0) : /^type$/i.test(s) && c && this.added && (l = !0);
                l && (g[s] = q, delete b[s], l = !1)
            }
            for (s in b)d.setAttribute(s, b[s]);
            for (s in g)this[s] = b[s] = g[s], delete g[s];
            return this
        }, val: function (a) {
            var b = this.element,
                c = void 0 === a;
            return "input" === this.nodeName && "checkbox" === b.getAttribute("type") ? c ? this.checked() ? 1 : 0 : this.checked(a) : c ? b.value : (b.value = a, this)
        }, checked: function (a) {
            var b = this.element;
            return void 0 === a ? b.checked : (a ? b.setAttribute("checked", "checked") : b.removeAttribute("checked"), this)
        }, css: function (a, b) {
            var c = this.element.style, d;
            if ("object" === typeof a)for (d in a)c[d] = a[d]; else d && void 0 !== b && (c[d] = b);
            return this
        }, translate: function (a, b) {
            var c = this.element;
            void 0 !== a && (c.style.left = a + "px");
            void 0 !==
            b && (c.style.top = b + "px");
            return this
        }, add: function (a, b) {
            var c = this.element, d = a.element;
            b ? d.insertBefore(c, d.firstChild) : d.appendChild(c);
            this.added = !0;
            return this
        }, hide: function () {
            this.element.style.display = "none";
            return this
        }, show: function () {
            this.element.style.display = "";
            return this
        }, focus: function () {
            "function" === typeof this.element.focus ? this.element.focus() : d.dem.fire(this.element, "focus")
        }, destroy: function () {
            var a = this.element || {};
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = a.onblur = a.onfocus =
                null;
            K || (K = s("div"));
            a && K.appendChild(a);
            K.innerHTML = "";
            delete this.element;
            return null
        }, on: N ? function (a, b) {
            this.element["on" + a] = function () {
                var a = w.event;
                a.target = a.srcElement;
                b(a)
            };
            return this
        } : function (a, c) {
            var d = c;
            b && "click" === a && (a = "touchstart", d = function (a) {
                a.preventDefault();
                c()
            });
            this.element["on" + a] = d;
            return this
        }, bind: function (a, b, c) {
            D.listen(this.element, a, b, c);
            return this
        }, unbind: function (a, b) {
            D.unlisten(this.element, a, b);
            return this
        }, trigger: function (a, b) {
            D.fire(this.element, a, b);
            return this
        },
        fadeIn: function (a, b) {
            var c = "fast" === a ? 400 : 1E3;
            this.show();
            this.attr({opacity: 0});
            d.danimate.animate(this.element, {opacity: 1}, c, "linear", b)
        }
    };
    g.prototype.constructor = g;
    l.fn.html = function (a, b, c, d) {
        var p = {}, q;
        b && "type" in b && (p.type = b.type, delete b.type);
        a = (new g(a, d, p)).css(c).attr(b);
        for (q in p)b[q] = p[q];
        return a
    }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaeltooltip", function () {
    var d = this, l = d.window, D = l.document, w = D.body || D.getElementsByTagName("body")[0], p = d.hcLib, c = p.Raphael, N = c.eve, b = p.createElement, I = p.addEvent, a = p.removeEvent, z = p.getPosition, F = p.hasTouch, K = p.getTouchEvent, s = l.Math, g = s.ceil, e = s.floor, h = {}, m = l.screen.availHeight, M = l.screen.availWidth, C = {
            "": 1,
            moz: 1,
            webkit: 1,
            o: 1,
            ms: 1
        }, q = {borderRadius: "borderRadius", boxShadow: "boxShadow"}, Y = /\-([a-z])/ig, u = function (a, b) {
            return b.toUpperCase()
        },
        ea = function (a) {
            var b = t.forbiddenStyle, d, e, g;
            for (d in a)e = Y.test(d) ? d.replace(Y, u) : d, void 0 !== a[d] && !b[e] && (this[e] = a[d]), c.vml && /color/ig.test(e) && (this[e] = c.getRGB(this[e]).toString());
            for (d in q)if (this[d])for (g in C)this[g + d] = this[d]
        }, t = p.toolTip = {
            elementId: "fusioncharts-tooltip-element",
            element: null,
            lastTarget: null,
            currentTarget: null,
            currentPaper: null,
            pointeroffset: 12,
            prevented: !1,
            defaultStyle: p.extend2(ea.prototype, {
                backgroundColor: "#ffffee", borderColor: "#000000", borderWidth: "1px", color: "#000000",
                fontSize: "10px", lineHeight: "12px", padding: "3px", borderStyle: "solid"
            }),
            defaultContainerStyle: {
                position: "absolute",
                textAlign: "left",
                margin: "0",
                zIndex: "99999",
                pointer: "default",
                display: "block"
            },
            forbiddenStyle: {}
        }, V = function (b) {
            !0 === t._oobready ? t._oobready = !1 : (a(w, "touchstart", V), !t.hidden && t.currentTarget && (b = b.srcElement || b.target || h, b.raphael && t.currentTarget.paper.getById(b.raphaelid) === t.currentTarget || t.hide()))
        };
    c.svg && (t.defaultContainerStyle.pointerEvents = "none", t.defaultStyle.borderRadius = "0",
        t.defaultStyle.boxShadow = "none");
    c.vml && (t.forbiddenStyle.borderRadius = !0, t.forbiddenStyle.boxShadow = !0, t.defaultStyle.filter = "");
    t.setup = function () {
        var a = t.container, e = t.textElement, g = t.style, h = t.defaultContainerStyle, q = t.forbiddenStyle, m;
        a || (a = t.element = b("span"), (D.body || D.getElementsByTagName("body")[0]).appendChild(a), a.setAttribute("id", t.elementId), g = t.containerStyle = a.style, e = t.textElement = b("span"), a.appendChild(e), t.style = c.vml ? e.runtimeStyle : e.style, t.style.overflow = "hidden", t.style.display =
            "block", t.hidden = !1, t.hide());
        for (m in h)!q[m] && (g[m] = h[m]);
        t.scatted = !0;
        N.on("raphael.drag.start.*", function () {
            t.scatted && (t.waitingScat = !0)
        });
        N.on("raphael.drag.move.*", function () {
            t.waitingScat && (t.block(), t.waitingScat = !1)
        });
        N.on("raphael.drag.end.*", function () {
            t.waitingScat = !1;
            t.scatted && t.unblock(!0)
        });
        N.on("raphael.remove", function () {
            if (t.currentPaper === this || t.currentTarget && t.currentTarget.paper === this)t.hide(), t.currentTarget = t.currentPaper = null
        });
        d.addEventListener("LinkedChartInvoked",
            function (a) {
                t.currentPaper === a.sender.jsVars.hcObj.paper && t.hide()
            })
    };
    t.restyle = function (a) {
        var b = t.style, c;
        for (c in a)b[c] = a[c]
    };
    t.onelement = function (a) {
        if (!a.__tipProcessed) {
            var b = this.paper, c = "group" === this.type ? b && b._elementFromEvent(a) : this, d = b.__tipStyle;
            c && d && c.__tipNeeded && ((a.originalEvent || a).FusionChartsPreventEvent && t.preventTooltip(), t.hiding && (t.hiding = clearTimeout(t.hiding)), t.currentPaper !== b && (b.__tipCp = b.canvas && z(b.canvas.parentNode, !0) || {}, t.restyle(b.__tipStyle), t.currentPaper =
                b), t.lastTarget = t.currentTarget, t.currentTarget = c, t.scatted = c.__tipScatted, t.onredraw.call(this, a), a.__tipProcessed = !0, F && (t._oobready = !0, I(w || (w = D.body || D.getElementsByTagName("body")[0]), "touchstart", V)))
        }
    };
    t.onredraw = function (a) {
        a.__tipProcessed || (a.__tipProcessed = !0, (this.paper && this.paper._elementFromEvent(a)) === t.currentTarget && (t.redrawing && clearTimeout(t.redrawing), a = K(a), t.x = e(a.pageX || a.clientX + D.body.scrollLeft + D.documentElement.scrollLeft || 0), t.y = e(a.pageY || a.clientY + D.body.scrollTop +
            D.documentElement.scrollTop || 0), t.redrawing = setTimeout(t.redraw, 0)))
    };
    t.onhide = function (a) {
        a.__tipProcessed || (a.__tipProcessed = !0, (this.paper && this.paper._elementFromEvent(a)) === t.currentTarget && (t.hiding = setTimeout(t.hide, 200)))
    };
    t.redraw = function () {
        if (!t.prevented && !t.blocked && t.currentTarget && t.currentTarget.__tipNeeded) {
            var a = t.currentTarget, b = a.paper, c = t.textElement, d = t.containerStyle, e = t.style, h = a.__tipText, a = t.pointeroffset, q = b.__tipCp, u = D.documentElement || D.body, p = u.scrollLeft, u = u.scrollTop,
                s = t.x, l = t.y, z, n = b.width, C = b.height, b = b.__tipConstrain;
            if (100 > n || 100 > C)b = !1;
            t.hidden && (t.containerStyle.top = "-999em", t.show());
            h !== t.text && (t.text = h, d.width = d.height = "", c.innerHTML = h, e.whiteSpace = "nowrap", h = g(e.pixelWidth || c.offsetWidth || 0), z = g(e.pixelHeight || c.offsetHeight || 0), (t.textWidthOverflow = s + h > q.left + n) ? (d.width = (n > h ? h + 2 * a : n - 2 * a || 0) + "px", e.whiteSpace = "normal") : d.width = "", (t.textHeightOverflow = z > C) ? (d.height = (C || 0) - 2 * a + "px", e.whiteSpace = "normal") : d.height = "");
            h = g(e.pixelWidth || c.offsetWidth ||
                0);
            z = g(e.pixelHeight || c.offsetHeight || 0);
            b ? (t.textWidthOverflow ? s = (s - h < q.left ? q.left : s - h) - p : s + a + h > q.left - p + n - a && (s = s - h - a), t.textHeightOverflow ? l = q.top - u : l + a + z > q.top - u + C - a && (l = l - z - 1.5 * a)) : (p + M < s + a + h && (s = s - h - a), u + m < l + a + z && (l = l - z - 1.5 * a));
            d.left = (s + a || 0) + "px";
            d.top = (l + a || 0) + "px";
            t.hidden && t.show()
        }
    };
    t.hide = function () {
        t.hiding && (t.hiding = clearTimeout(t.hiding));
        t.containerStyle.display = "none";
        t.hidden = !0;
        t.prevented = !1
    };
    t.show = function () {
        t.blocked || (t.hiding && (t.hiding = clearTimeout(t.hiding)), t.containerStyle.display =
            "inline", t.hidden = !1)
    };
    t.preventTooltip = function () {
        t.prevented = !0
    };
    t.block = function () {
        t.blocked = !0;
        t.containerStyle.display = "none"
    };
    t.unblock = function (a) {
        t.blocked = !1;
        a && (t.containerStyle.display = t.hidden && "none" || "inline")
    };
    c.fn.tooltip = function (a, b, d) {
        b && (b = .4 * (void 0 === b.opacity ? 1 : b.opacity), c.svg ? a.boxShadow = "1px 1px 3px rgba(64,64,64," + b + ")" : a.filter = 'progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color="#404040", shadowOpacity="' + b / 2 + '")');
        this.__tipStyle = new ea(a);
        this.__tipCp =
            this.canvas && z(this.canvas.parentNode, !0) || {};
        this.__tipConstrain = Boolean(d);
        return this
    };
    c.el.trackTooltip = function (a) {
        var b = !!this.__tiptracking;
        if (void 0 === a || (a = !!a) === b)return this;
        a ? F ? this.touchstart(t.onelement) : (this.mouseover(t.onelement), this.mousemove(t.onredraw), this.mouseout(t.onhide)) : F ? this.untouchstart(t.onelement) : (this.unmouseover(t.onelement), this.unmousemove(t.onredraw), this.unmouseout(t.onhide));
        this.__tiptracking = a;
        return this
    };
    c.el.tooltip = function (a, b, d, e, g) {
        t.setup();
        c.el.tooltip =
            function (a, b, c, d, e) {
                b = !1 === a || void 0 === a || "" === a;
                this.__tipScatted = void 0 === d ? this.__tipScatted : !d;
                void 0 === this.__tipScatted && (this.__tipScatted = !0);
                null !== e && (this.__tip_blocked = e);
                b ^ !this.__tipText && (this.__tipNeeded = !b);
                this.__tipText = a;
                if (t.currentTarget === this && a !== t.text && !t.hidden)t[b ? "hide" : "redraw"]();
                return this
            };
        return c.el.tooltip.call(this, a, b, d, e, g)
    };
    d.core._setTooltipZIndex = function (a) {
        a = parseInt(a, 10);
        t && !isNaN(a) && (t.defaultContainerStyle.zIndex = a, t.containerStyle && (t.containerStyle.zIndex =
            a))
    }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-smartlabel", function () {
    var d = this.hcLib, l = d.isIE, D = d.hasSVG, w = Math.max, p = this.window, c = / HtmlUnit/.test(p.navigator.userAgent), N = p.document, b = / AppleWebKit\//.test(p.navigator.userAgent), I = !!N.createElement("canvas").getContext, a = !(!I || !N.createElement("canvas").getContext("2d").measureText), p = function () {
        function p(a, b, c) {
            if (!a || !a.length)return 0;
            var d = c.getWidthFunction(), e = 0, g = 0, g = d(a), h = g / a.length;
            c = b;
            e = Math.ceil(b / h);
            if (g < b)return a.length -
                1;
            e > a.length && (c = b - g, e = a.length);
            for (; 0 < c;)if (c = b - d(a.substr(0, e)), g = Math.floor(c / h))e += g; else return e;
            for (; 0 > c;)if (c = b - d(a.substr(0, e)), g = Math.floor(c / h))e += g; else break;
            return e
        }

        function F(a, b) {
            b = 5 < b ? b : 5;
            this.maxContainers = 20 > b ? b : 20;
            this.last = this.first = null;
            this.containers = {};
            this.length = 0;
            this.rootNode = a;
            if (ea) {
                var c = N.createElementNS("http://www.w3.org/2000/svg", "svg");
                c.setAttributeNS("http://www.w3.org/2000/svg", "xlink", "http://www.w3.org/1999/xlink");
                c.setAttributeNS("http://www.w3.org/2000/svg",
                    "height", "0");
                c.setAttributeNS("http://www.w3.org/2000/svg", "width", "0");
                this.svgRoot = c;
                this.rootNode.appendChild(c)
            }
        }

        function K(a, b, d) {
            if ("undefined" !== typeof a && "object" !== typeof a) {
                this.id = a;
                var g;
                "string" === typeof b && (b = N.getElementById(b));
                a:{
                    if (b && (b.offsetWidth || b.offsetHeight)) {
                        if (b.appendChild) {
                            b.appendChild(b = N.createElement("div"));
                            b.className = "fusioncharts-smartlabel-container";
                            b.setAttribute("aria-hidden", "true");
                            b.setAttribute("role", "presentation");
                            a = b;
                            break a
                        }
                    } else if ((a = N.getElementsByTagName("body")[0]) &&
                        a.appendChild) {
                        b = N.createElement("div");
                        b.className = "fusioncharts-smartlabel-container";
                        b.setAttribute("aria-hidden", "true");
                        b.setAttribute("role", "presentation");
                        a.appendChild(b);
                        a = b;
                        break a
                    }
                    a = void 0
                }
                a = this.parentContainer = a;
                a.innerHTML = "WgI";
                if (c || !a.offsetHeight && !a.offsetWidth)ea = !0;
                a.innerHTML = "";
                for (g in e)a.style[g] = e[g];
                this.containerManager = new F(a, 10);
                this.showNoEllipses = !d;
                this.init = !0;
                this.style = {};
                this.setStyle()
            }
        }

        var s = d.supportedStyle, g = {
            fontWeight: 1, "font-weight": 1, fontStyle: 1, "font-style": 1,
            fontSize: 1, "font-size": 1, fontFamily: 1, "font-family": 1
        }, e = {
            position: "absolute",
            top: "-9999em",
            left: "-9999em",
            whiteSpace: "nowrap",
            padding: "0px",
            width: "1px",
            height: "1px",
            overflow: "hidden"
        }, h = b ? 0 : 4.5, m = 0, M = /\b_SmartLabel\b/, C = /\b_SmartLabelBR\b/, q = /(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig, Y = RegExp("\\<span[^\\>]+?_SmartLabel[^\\>]{0,}\\>(.*?)\\<\\/span\\>", "ig"), u = /<[^>][^<]*[^>]+>/i, ea = !1, t = 0, V = 0, X, ia, Ba;
        N.getElementsByClassName ? (X = "getElementsByClassName", ia = "_SmartLabel", Ba = !0) : (X = "getElementsByTagName",
            ia = "span", Ba = !1);
        F.prototype = {
            get: function (a) {
                var b = this.containers, c = this.length, d = this.maxContainers, e, g = "", h = "", h = this.getCanvasFont(a);
                for (e in s)void 0 !== a[e] && (g += s[e] + ":" + a[e] + ";");
                if (!g)return !1;
                if (b[g])g = b[g], this.first !== g && (g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), g.next = this.first, g.next.prev = g, this.last === g && (this.last = g.prev), g.prev = null, this.first = g); else {
                    if (c >= d)for (a = c - d + 1; a--;)this.removeContainer(this.last);
                    g = this.addContainer(g, h)
                }
                return g
            }, getCanvasFont: function (b) {
                var c,
                    d = [];
                if (!I || !a)return !1;
                for (c in g)void 0 !== b[c] && d.push(b[c]);
                return d.join(" ")
            }, setMax: function (a) {
                var b = this.length;
                a = 5 < a ? a : 5;
                a = 20 > a ? a : 20;
                if (a < b) {
                    for (b -= a; b--;)this.removeContainer(this.last);
                    this.length = a
                }
                this.maxContainers = a
            }, addContainer: function (a, b) {
                var c, d;
                this.containers[a] = d = {
                    next: null,
                    prev: null,
                    node: null,
                    ellipsesWidth: 0,
                    lineHeight: 0,
                    dotWidth: 0,
                    avgCharWidth: 4,
                    keyStr: a,
                    canvasStr: b,
                    charCache: {}
                };
                d.next = this.first;
                d.next && (d.next.prev = d);
                this.first = d;
                this.last || (this.last = d);
                this.length +=
                    1;
                c = d.node = N.createElement("div");
                this.rootNode.appendChild(c);
                l && !D ? c.style.setAttribute("cssText", a) : c.setAttribute("style", a);
                c.setAttribute("aria-hidden", "true");
                c.setAttribute("role", "presentation");
                c.style.display = "inline-block";
                c.innerHTML = "WgI";
                d.lineHeight = c.offsetHeight;
                d.avgCharWidth = c.offsetWidth / 3;
                ea ? (c = d.svgText = N.createElementNS("http://www.w3.org/2000/svg", "text"), c.setAttribute("style", a), this.svgRoot.appendChild(c), c.textContent = "WgI", d.lineHeight = c.getBBox().height, d.avgCharWidth =
                    (c.getBBox().width - h) / 3, c.textContent = "...", d.ellipsesWidth = c.getBBox().width - h, c.textContent = ".", d.dotWidth = c.getBBox().width - h) : b ? (c = d.canvas = N.createElement("canvas"), c.style.height = c.style.width = "0px", this.rootNode.appendChild(c), d.context = c = c.getContext("2d"), c.font = b, d.ellipsesWidth = c.measureText("...").width, d.dotWidth = c.measureText(".").width) : (c.innerHTML = "...", d.ellipsesWidth = c.offsetWidth, c.innerHTML = ".", d.dotWidth = c.offsetWidth, c.innerHTML = "");
                return d
            }, removeContainer: function (a) {
                var b =
                    a.keyStr;
                b && this.length && a && (this.length -= 1, a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), this.first === a && (this.first = a.next), this.last === a && (this.last = a.prev), a.node.parentNode.removeChild(a.node), a.canvas && a.canvas.parentNode.removeChild(a.canvas), delete this.containers[b])
            }, dispose: function () {
                var a, b = this.containers;
                this.maxContainers = null;
                for (a in b)this.removeContainer(b[a]);
                this.rootNode.parentNode.removeChild(this.rootNode);
                this.last = this.first = this.rootNode = null
            }
        };
        F.prototype.constructor =
            F;
        K.prototype = {
            dispose: function () {
                this.init && (this.containerManager.dispose(), delete this.container, delete this.context, delete this.cache, delete this.containerManager, delete this.containerObj, delete this.id, delete this.style, delete this.parentContainer, delete this.showNoEllipses)
            }, useEllipsesOnOverflow: function (a) {
                this.init && (this.showNoEllipses = !a)
            }, getWidthFunction: function () {
                var a = this.context, b = this.container, c = this.containerObj.svgText;
                return c ? function (a) {
                    var b;
                    c.textContent = a;
                    a = c.getBBox();
                    b = a.width - h;
                    1 > b && (b = a.width);
                    return b
                } : a ? function (b) {
                    return a.measureText(b).width
                } : function (a) {
                    b.innerHTML = a;
                    return b.offsetWidth
                }
            }, getSmartText: function (a, b, c, d) {
                if (!this.init)return !1;
                if (void 0 === a || null === a)a = "";
                var e = {
                    text: a,
                    maxWidth: b,
                    maxHeight: c,
                    width: null,
                    height: null,
                    oriTextWidth: null,
                    oriTextHeight: null,
                    oriText: a,
                    isTruncated: !1
                }, g = !1, h, s, l = 0, n, E, L, D = -1, I = g = -1;
                s = this.container;
                var F = this.context, K = 0;
                L = 0;
                var ma, Da, Ga;
                Ga = [];
                var U = 0, ra = this.showNoEllipses ? "" : "...";
                E = this.lineHeight;
                var za, K = [],
                    D = h = -1;
                za = function (a) {
                    a = a.replace(/^\s\s*/, "");
                    for (var b = /\s/, c = a.length; b.test(a.charAt(c -= 1)););
                    return a.slice(0, c + 1)
                };
                g = -1;
                Da = this.getWidthFunction();
                if (s) {
                    if (!ea) {
                        s.innerHTML = a;
                        e.oriTextWidth = g = s.offsetWidth;
                        e.oriTextHeight = L = s.offsetHeight;
                        if (L <= c && g <= b)return e.width = e.oriTextWidth = g, e.height = e.oriTextHeight = L, e;
                        if (E > c)return e.text = "", e.width = e.oriTextWidth = 0, e.height = e.oriTextHeight = 0, e
                    }
                    a = za(a).replace(/(\s+)/g, " ");
                    g = u.test(a);
                    E = this.showNoEllipses ? b : b - m;
                    if (g) {
                        l = a.replace(q, "$2");
                        a = a.replace(q,
                            '$1<span class="_SmartLabel">$2</span>');
                        a = a.replace(/(<br\s*\/*\>)/g, '<span class="_SmartLabel _SmartLabelBR">$1</span>');
                        s.innerHTML = a;
                        U = s[X](ia);
                        F = 0;
                        for (Da = U.length; F < Da; F += 1)if (a = U[F], Ba || M.test(a.className))za = a.innerHTML, "" !== za && (" " === za ? D = K.length : "-" === za && (h = K.length), K.push({
                            spaceIdx: D,
                            dashIdx: h,
                            elem: a
                        }), Ga.push(za));
                        U = 0;
                        h = K.length;
                        t = K[0].elem.offsetWidth;
                        if (t > b)return e.text = "", e.width = e.oriTextWidth = e.height = e.oriTextHeight = 0, e;
                        t > E && !this.showNoEllipses && (E = b - 2 * V, E > t ? ra = ".." : (E = b - V,
                            E > t ? ra = "." : (E = 0, ra = "")));
                        Ga = K[0].elem.offsetLeft;
                        F = K[0].elem.offsetTop;
                        if (d)for (; U < h; U += 1)a = K[U].elem, Da = a.offsetLeft - Ga + a.offsetWidth, Da > E && (ma || (ma = U), s.offsetWidth > b && (n = U, U = h)); else for (; U < h; U += 1)a = K[U].elem, za = a.offsetHeight + (a.offsetTop - F), Da = a.offsetLeft - Ga + a.offsetWidth, d = null, Da > E ? (ma || (ma = U), Da > b && (g = K[U].spaceIdx, D = K[U].dashIdx, g > I ? (K[g].elem.innerHTML = "<br/>", I = g) : D > I ? (K[D].elem.innerHTML = D === U ? "<br/>-" : "-<br/>", I = D) : a.parentNode.insertBefore(d = N.createElement("br"), a), a.offsetHeight +
                        a.offsetTop > c ? (d ? d.parentNode.removeChild(d) : I === D ? K[D].elem.innerHTML = "-" : K[g].elem.innerHTML = " ", n = U, U = h) : ma = null)) : za > c && (n = U, U = h);
                        if (n < h) {
                            e.isTruncated = !0;
                            ma = ma ? ma : n;
                            for (U = h - 1; U >= ma; U -= 1)a = K[U].elem, a.parentNode.removeChild(a);
                            for (; 0 <= U; U -= 1)a = K[U].elem, C.test(a.className) ? a.parentNode.removeChild(a) : U = 0
                        }
                        e.text = s.innerHTML.replace(Y, "$1");
                        e.isTruncated && (e.text += ra, e.tooltext = l)
                    } else {
                        Ga = a.split("");
                        h = Ga.length;
                        s = "";
                        n = [];
                        ma = Ga[0];
                        this.cache[ma] ? t = this.cache[ma].width : (t = Da(ma), this.cache[ma] = {width: t});
                        if (E > t)n = a.substr(0, p(a, E, this)).split(""), U = n.length; else {
                            if (t > b)return e.text = "", e.width = e.oriTextWidth = e.height = e.oriTextHeight = 0, e;
                            ra && (E = b - 2 * V, E > t ? ra = ".." : (E = b - V, E > t ? ra = "." : (E = 0, ra = "")))
                        }
                        K = Da(n.join(""));
                        L = this.lineHeight;
                        if (d) {
                            for (; U < h; U += 1)if (ma = n[U] = Ga[U], this.cache[ma] ? t = this.cache[ma].width : (t = Da(ma), this.cache[ma] = {width: t}), K += t, K > E && (s || (s = n.slice(0, -1).join("")), K > b))return e.text = za(s) + ra, e.tooltext = e.oriText, e.width = Da(e.text), e.height = this.lineHeight, e;
                            e.text = n.join("");
                            e.width = K;
                            e.height = this.lineHeight
                        } else {
                            for (; U < h; U += 1)if (ma = n[U] = Ga[U], " " !== ma || F || (ma = "&nbsp;"), this.cache[ma] ? t = this.cache[ma].width : (t = Da(ma), this.cache[ma] = {width: t}), K += t, K > E && (s || (s = n.slice(0, -1).join("")), K > b)) {
                                g = a.substr(0, n.length).lastIndexOf(" ");
                                D = a.substr(0, n.length).lastIndexOf("-");
                                g > I ? (K = Da(n.slice(I + 1, g).join("")), n.splice(g, 1, "<br/>"), I = g, d = g + 1) : D > I ? (D === n.length - 1 ? (K = Da(n.slice(I + 1, g).join("")), n.splice(D, 1, "<br/>-")) : (K = Da(n.slice(I + 1, g).join("")), n.splice(D, 1, "-<br/>")), I = D, d = D + 1) : (n.splice(n.length -
                                    1, 1, "<br/>" + Ga[U]), g = n.length - 2, K = Da(n.slice(I + 1, g + 1).join("")), I = g, d = U);
                                L += this.lineHeight;
                                if (L > c)return e.text = za(s) + ra, e.tooltext = e.oriText, e.width = b, e.height = L - this.lineHeight, e;
                                l = w(l, K);
                                s = null;
                                ma = p(a.substr(d), E, this);
                                K = Da(a.substr(d, ma || 1));
                                n.length < d + ma && (n = n.concat(a.substr(n.length, d + ma - n.length).split("")), U = n.length - 1)
                            }
                            l = w(l, K);
                            e.text = n.join("");
                            e.width = l;
                            e.height = L
                        }
                        return e
                    }
                    e.height = s.offsetHeight;
                    e.width = s.offsetWidth
                } else e.error = Error("Body Tag Missing!");
                return e
            }, setStyle: function (a) {
                if (!this.init)return !1;
                if (a !== this.style || this.styleNotSet) {
                    a || (a = this.style);
                    var b = a, c = b.fontSize = b.fontSize || "12px";
                    b.lineHeight = b.lineHeight || b["line-height"] || 1.2 * parseInt(c, 10) + "px";
                    this.style = a;
                    (this.containerObj = a = this.containerManager.get(a)) ? (this.container = a.node, this.context = a.context, this.cache = a.charCache, this.lineHeight = a.lineHeight, m = a.ellipsesWidth, V = a.dotWidth, this.styleNotSet = !1) : this.styleNotSet = !0
                }
            }, getTextSize: function (a, b, c) {
                if (!this.init)return !1;
                var d = {
                    text: a, width: null, height: null, oriTextWidth: null,
                    oriTextHeight: null, isTruncated: !1
                }, e = this.container;
                e && (e.innerHTML = a, d.oriTextWidth = e.offsetWidth, d.oriTextHeight = e.offsetHeight, d.width = Math.min(d.oriTextWidth, b), d.height = Math.min(d.oriTextHeight, c), d.width < d.oriTextWidth || d.height < d.oriTextHeight) && (d.isTruncated = !0);
                return d
            }, getOriSize: function (a) {
                if (!this.init)return !1;
                var b = {text: a, width: null, height: null}, c = this.container, d = this.getWidthFunction(), e = 0;
                if (ea) {
                    a = a.split(/(<br\s*\/*\>)/g);
                    c = a.length;
                    for (b.height = this.lineHeight * c; c--;)e = w(e,
                        d(a[c]));
                    b.width = e
                } else c && (c.innerHTML = a, b.width = c.offsetWidth, b.height = c.offsetHeight);
                return b
            }
        };
        return K.prototype.constructor = K
    }();
    d.SmartLabelManager = p
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-numberformatter", function () {
    var d = this, l = d.hcLib, D = l.pluckNumber, w = l.extend2, p = l.getValidValue, c = l.pluck, N = l.getFirstValue, b = Math.abs, I = Math.pow, a = Math.round, z = function (a) {
        return a && a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, F = {}, K = function (a) {
        var b = [], c;
        for (c in a)b.push(c + "_" + a[c]);
        b.sort();
        return b.join(",")
    }, s = function (a) {
        var b = {}, c;
        for (c in a)b[c.toLowerCase()] = a[c];
        return b
    };
    l.NumberFormatter = function () {
        function d(b, c, e) {
            var g;
            if (0 >= c)return a(b) + "";
            if (isNaN(c))return b += "", 12 < b.length && -1 != b.indexOf(".") && (c = 12 - b.split(".")[0].length, g = I(10, c), b = a(b * g) / g + ""), b;
            g = I(10, c);
            b = a(b * g) / g + "";
            if (1 == e)for (-1 == b.indexOf(".") && (b += ".0"), e = b.split("."), c -= e[1].length, e = 1; e <= c; e++)b += "0";
            return b
        }

        function e(a, b, c, d, e) {
            var g = Number(a), h = "", m = !1, s = "", p = "", l = s = 0;
            if (isNaN(g))return "";
            if (1E15 < g)return g.toExponential(e ? 1 : 14);
            s = 0;
            l = a.length;
            -1 != a.indexOf(".") && (h = a.substring(a.indexOf(".") + 1, a.length), l = a.indexOf("."));
            0 > g && (m = !0, s = 1);
            s =
                a.substring(s, l);
            a = s.length;
            e = d.length - 1;
            g = d[e];
            if (a < g)p = s; else for (; a >= g;)p = (a - g ? c : "") + s.substr(a - g, g) + p, a -= g, g = 0 >= (e -= 1) ? d[0] : d[e], a < g && (p = s.substring(a, 0) + p);
            "" != h && (p = p + b + h);
            !0 === m && (p = "-" + p);
            return p
        }

        var h, m = {
            formatnumber: "1",
            formatnumberscale: "1",
            defaultnumberscale: "",
            numberscaleunit: ["K", "M"],
            numberscalevalue: [1E3, 1E3],
            numberprefix: "",
            numbersuffix: "",
            decimals: "",
            forcedecimals: "0",
            yaxisvaluedecimals: "2",
            decimalseparator: ".",
            thousandseparator: ",",
            thousandseparatorposition: [3],
            indecimalseparator: "",
            inthousandseparator: "",
            sformatnumber: "1",
            sformatnumberscale: "0",
            sdefaultnumberscale: "",
            snumberscaleunit: ["K", "M"],
            snumberscalevalue: [1E3, 1E3],
            snumberprefix: "",
            snumbersuffix: "",
            sdecimals: "2",
            sforcedecimals: "0",
            syaxisvaluedecimals: "2",
            xFormatNumber: "0",
            xFormatNumberScale: "0",
            xDefaultNumberScale: "",
            xNumberScaleUnit: ["K", "M"],
            xNumberScaleValue: [1E3, 1E3],
            xNumberPrefix: "",
            xNumberSuffix: ""
        }, s = {mscombidy2d: {formatnumberscale: "1"}}, l = function (a, b, d) {
            var e, g, h, l, C, I, F, K, ka, aa = b.name, Z = w({}, m), ca, S, G, fa, n, E,
                L, T, Ha, Ja, Ca;
            (h = s[aa]) && (Z = w(Z, h));
            this.csConf = Z;
            this.chartAPI = b;
            p(a.numberscaleunit) && (e = a.numberscaleunit.split(","));
            if (g = p(a.snumberscaleunit, a.numberscaleunit))g = g.split(",");
            if (h = p(a.xnumberscaleunit, a.numberscaleunit))h = h.split(",");
            if (l = p(a.ticknumberscaleunit, a.numberscaleunit))l = l.split(",");
            if (C = p(a.ynumberscaleunit, a.numberscaleunit))C = C.split(",");
            p(a.numberscalevalue) && (I = a.numberscalevalue.split(","));
            if (S = p(a.snumberscalevalue, a.numberscalevalue))S = S.split(",");
            if (F = p(a.xnumberscalevalue,
                    a.numberscalevalue))F = F.split(",");
            if (K = p(a.ticknumberscalevalue, a.numberscalevalue))K = K.split(",");
            if (ka = p(a.ynumberscalevalue, a.numberscalevalue))ka = ka.split(",");
            if (p(a.thousandseparatorposition))for (ca = a.thousandseparatorposition.split(","), G = ca.length, n = m.thousandseparatorposition[0]; G--;)fa = parseInt(ca[G], 10), 0 >= fa && (fa = n), n = ca[G] = fa;
            b || (b = {});
            G = D(a.scalerecursively, 0);
            fa = D(a.sscalerecursively, G);
            n = D(a.xscalerecursively, G);
            E = D(a.maxscalerecursion, -1);
            L = D(a.smaxscalerecursion, E);
            T = D(a.xmaxscalerecursion,
                E);
            Ha = p(a.scaleseparator, " ");
            Ja = p(a.sscaleseparator, Ha);
            Ca = p(a.xscaleseparator, Ha);
            E || (E = -1);
            this.baseConf = e = {
                cacheStore: [],
                formatnumber: c(a.formatnumber, b.formatnumber, Z.formatnumber),
                formatnumberscale: c(a.formatnumberscale, b.formatnumberscale, Z.formatnumberscale),
                defaultnumberscale: N(a.defaultnumberscale, b.defaultnumberscale, Z.defaultnumberscale),
                numberscaleunit: c(e, b.numberscaleunit, Z.numberscaleunit).concat(),
                numberscalevalue: c(I, b.numberscalevalue, Z.numberscalevalue).concat(),
                numberprefix: N(a.numberprefix,
                    b.numberprefix, Z.numberprefix),
                numbersuffix: N(a.numbersuffix, b.numbersuffix, Z.numbersuffix),
                decimalprecision: parseInt("auto" === a.decimals ? Z.decimalprecision : c(a.decimals, a.decimalprecision, b.decimals, Z.decimals, b.decimalprecision, Z.decimalprecision), 10),
                forcedecimals: c(a.forcedecimals, b.forcedecimals, Z.forcedecimals),
                decimalseparator: c(a.decimalseparator, b.decimalseparator, Z.decimalseparator),
                thousandseparator: c(a.thousandseparator, b.thousandseparator, Z.thousandseparator),
                thousandseparatorposition: c(ca,
                    b.thousandseparatorposition, Z.thousandseparatorposition),
                indecimalseparator: N(a.indecimalseparator, b.indecimalseparator, Z.indecimalseparator),
                inthousandseparator: N(a.inthousandseparator, b.inthousandseparator, Z.inthousandseparator),
                scalerecursively: G,
                maxscalerecursion: E,
                scaleseparator: Ha
            };
            p(e.inthousandseparator) && (this.baseConf._REGinthousandseparator = new RegExp(z(e.inthousandseparator), "g"));
            p(e.indecimalseparator) && (this.baseConf._REGindecimalseparator = new RegExp(z(e.indecimalseparator)));
            this.Y =
                [];
            d || (d = {
                cacheStore: [],
                formatnumber: e.formatnumber,
                formatnumberscale: e.formatnumberscale,
                defaultnumberscale: e.defaultnumberscale,
                numberscaleunit: e.numberscaleunit.concat(),
                numberscalevalue: e.numberscalevalue.concat(),
                numberprefix: e.numberprefix,
                numbersuffix: e.numbersuffix,
                decimalprecision: e.decimalprecision,
                forcedecimals: e.forcedecimals,
                decimalseparator: e.decimalseparator,
                thousandseparator: e.thousandseparator,
                thousandseparatorposition: e.thousandseparatorposition,
                indecimalseparator: e.indecimalseparator,
                inthousandseparator: e.inthousandseparator,
                scalerecursively: G,
                maxscalerecursion: E,
                scaleseparator: Ha
            }, b.useScaleRecursively && (d.numberscalevalue && d.numberscalevalue.length) == (d.numberscaleunit && d.numberscaleunit.length) || (d.scalerecursively = G = 0), I = {
                cacheStore: [],
                formatnumber: d.formatnumber,
                formatnumberscale: d.formatnumberscale,
                defaultnumberscale: d.defaultnumberscale,
                numberscaleunit: d.numberscaleunit.concat(),
                numberscalevalue: d.numberscalevalue.concat(),
                numberprefix: d.numberprefix,
                numbersuffix: d.numbersuffix,
                decimalprecision: parseInt(c(a.yaxisvaluedecimals, d.decimalprecision, 2), 10),
                forcedecimals: c(a.forceyaxisvaluedecimals, d.forcedecimals),
                decimalseparator: d.decimalseparator,
                thousandseparator: d.thousandseparator,
                thousandseparatorposition: d.thousandseparatorposition.concat(),
                indecimalseparator: d.indecimalseparator,
                inthousandseparator: d.inthousandseparator,
                scalerecursively: G,
                maxscalerecursion: E,
                scaleseparator: Ha
            }, S = {
                cacheStore: [],
                formatnumber: c(a.sformatnumber, b.sformatnumber, m.sformatnumber),
                formatnumberscale: c(a.sformatnumberscale,
                    b.sformatnumberscale, m.sformatnumberscale),
                defaultnumberscale: N(a.sdefaultnumberscale, b.sdefaultnumberscale, d.defaultnumberscale),
                numberscaleunit: c(g, b.snumberscaleunit, m.snumberscaleunit).concat(),
                numberscalevalue: c(S, b.snumberscalevalue, m.snumberscalevalue).concat(),
                numberprefix: N(a.snumberprefix, b.snumberprefix, m.snumberprefix),
                numbersuffix: N(a.snumbersuffix, b.snumbersuffix, m.snumbersuffix),
                decimalprecision: parseInt(c(a.syaxisvaluedecimals, a.sdecimals, a.decimals, b.sdecimals, m.sdecimals), 10),
                forcedecimals: c(a.forcesyaxisvaluedecimals,
                    a.sforcedecimals, a.forcedecimals, b.sforcedecimals, m.sforcedecimals),
                decimalseparator: c(a.decimalseparator, b.decimalseparator, m.decimalseparator),
                thousandseparator: c(a.thousandseparator, b.thousandseparator, m.thousandseparator),
                thousandseparatorposition: d.thousandseparatorposition.concat(),
                indecimalseparator: c(a.indecimalseparator, b.indecimalseparator, m.indecimalseparator),
                inthousandseparator: c(a.inthousandseparator, b.inthousandseparator, m.inthousandseparator),
                scalerecursively: fa,
                maxscalerecursion: L,
                scaleseparator: Ja
            }, g = w({}, S), g.decimalprecision = parseInt(c(a.sdecimals, a.decimals, a.syaxisvaluedecimals, b.sdecimals, m.sdecimals), 10), g.forcedecimals = c(a.sforcedecimals, a.forcedecimals, a.forcesyaxisvaluedecimals, b.sforcedecimals, m.sforcedecimals), g.cacheStore = [], b.useScaleRecursively && (S.numberscalevalue && S.numberscalevalue.length) == (S.numberscaleunit && S.numberscaleunit.length) || (S.scalerecursively = fa = 0), /^(bubble|scatter|selectscatter)$/.test(aa) && (I.formatnumber = c(a.yformatnumber, I.formatnumber),
                I.formatnumberscale = c(a.yformatnumberscale, I.formatnumberscale), I.defaultnumberscale = N(a.ydefaultnumberscale, I.defaultnumberscale), I.numberscaleunit = c(C, I.numberscaleunit), I.numberscalevalue = c(ka, I.numberscalevalue), I.numberprefix = c(a.ynumberprefix, I.numberprefix), I.numbersuffix = c(a.ynumbersuffix, I.numbersuffix), d.formatnumber = c(a.yformatnumber, d.formatnumber), d.formatnumberscale = c(a.yformatnumberscale, d.formatnumberscale), d.defaultnumberscale = N(a.ydefaultnumberscale, d.defaultnumberscale), d.numberscaleunit =
                c(a.ynumberscaleunit, d.numberscaleunit.concat()), d.numberscalevalue = c(a.ynumberscalevalue, d.numberscalevalue.concat()), d.numberprefix = c(a.ynumberprefix, d.numberprefix), d.numbersuffix = c(a.ynumbersuffix, d.numbersuffix)), /^(mscombidy2d|mscombidy3d)$/.test(aa) && (S.formatnumberscale = D(a.sformatnumberscale)), /^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(aa) && (d.decimalprecision = c(a.decimals, "2")), G && (d.numberscalevalue.push(1), d.numberscaleunit.unshift(d.defaultnumberscale), I.numberscalevalue.push(1),
                I.numberscaleunit.unshift(I.defaultnumberscale)), fa && (S.numberscalevalue.push(1), S.numberscaleunit.unshift(S.defaultnumberscale), g.numberscalevalue.push(1), g.numberscaleunit.unshift(g.defaultnumberscale)), this.Y[0] = {
                yAxisLabelConf: I,
                dataLabelConf: d
            }, this.Y[1] = {
                yAxisLabelConf: S,
                dataLabelConf: g
            }, this.paramLabels = d, this.param1 = I, this.param2 = S, this.paramLabels2 = g);
            this.paramX = {
                cacheStore: [],
                formatnumber: c(a.xformatnumber, e.formatnumber),
                formatnumberscale: c(a.xformatnumberscale, e.formatnumberscale),
                defaultnumberscale: N(a.xdefaultnumberscale,
                    e.defaultnumberscale),
                numberscaleunit: c(h, e.numberscaleunit.concat()),
                numberscalevalue: c(F, e.numberscalevalue.concat()),
                numberprefix: c(a.xnumberprefix, e.numberprefix),
                numbersuffix: c(a.xnumbersuffix, e.numbersuffix),
                decimalprecision: parseInt(c(a.xaxisvaluedecimals, a.xaxisvaluesdecimals, e.decimalprecision, 2), 10),
                forcedecimals: c(a.forcexaxisvaluedecimals, 0),
                decimalseparator: e.decimalseparator,
                thousandseparator: e.thousandseparator,
                thousandseparatorposition: e.thousandseparatorposition.concat(),
                indecimalseparator: e.indecimalseparator,
                inthousandseparator: e.inthousandseparator,
                scalerecursively: n,
                maxscalerecursion: T,
                scaleseparator: Ca
            };
            this.paramLegend = w(w({}, e), {
                cacheStore: [],
                decimalprecision: parseInt(D(a.legendvaluedecimals, e.decimalprecision, 2), 10),
                forcedecimals: D(a.legendvalueforcedecimals, e.forcedecimals, 0),
                formatnumberscale: c(a.legendvalueformatnumberscale, e.formatnumberscale),
                formatnumber: c(a.legendvalueformatnumber, e.formatnumber)
            });
            b.useScaleRecursively && (this.paramX.numberscalevalue && this.paramX.numberscalevalue.length) ==
            (this.paramX.numberscaleunit && this.paramX.numberscaleunit.length) || (this.paramX.scalerecursively = n = 0);
            n && (this.paramX.numberscalevalue.push(1), this.paramX.numberscaleunit.unshift(this.paramX.defaultnumberscale));
            this.paramScale = {
                cacheStore: [],
                formatnumber: c(a.tickformatnumber, e.formatnumber),
                formatnumberscale: c(a.tickformatnumberscale, e.formatnumberscale),
                defaultnumberscale: N(a.tickdefaultnumberscale, e.defaultnumberscale),
                numberscaleunit: c(l, e.numberscaleunit.concat()),
                numberscalevalue: c(K, e.numberscalevalue.concat()),
                numberprefix: c(a.ticknumberprefix, e.numberprefix),
                numbersuffix: c(a.ticknumbersuffix, e.numbersuffix),
                decimalprecision: parseInt(c(a.tickvaluedecimals, e.decimalprecision, "2"), 10),
                forcedecimals: c(a.forcetickvaluedecimals, e.forcedecimals, 0),
                decimalseparator: e.decimalseparator,
                thousandseparator: e.thousandseparator,
                thousandseparatorposition: e.thousandseparatorposition.concat(),
                indecimalseparator: e.indecimalseparator,
                inthousandseparator: e.inthousandseparator,
                scalerecursively: G,
                maxscalerecursion: E,
                scaleseparator: Ha
            };
            G && (this.paramScale.numberscalevalue.push(1), this.paramScale.numberscaleunit.unshift(this.paramScale.defaultnumberscale));
            this.timeConf = {
                inputDateFormat: c(a.inputdateformat, a.dateformat, "mm/dd/yyyy"),
                outputDateFormat: c(a.outputdateformat, a.inputdateformat, a.dateformat, "mm/dd/yyyy"),
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                daySuffix: " st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" ")
            };
            this.cleaneValueCacheStore = {};
            this.percentStrCacheStore = {}
        };
        l.prototype = {
            cleaneValueCacheStore: {}, percentStrCacheStore: {}, dispose: function () {
                this.Y && delete this.Y;
                this.cleaneValueCacheStore && delete this.cleaneValueCacheStore;
                this.percentStrCacheStore && delete this.percentStrCacheStore;
                this.paramLabels && delete this.paramLabels;
                this.param1 && delete this.param1;
                this.param2 && delete this.param2;
                this.paramLabels2 && delete this.paramLabels2;
                this.csConf && delete this.csConf;
                this.chartAPI && delete this.chartAPI;
                this.baseConf && delete this.baseConf;
                this.timeConf && delete this.timeConf;
                this.paramX && delete this.paramX;
                this.paramScale && delete this.paramScale
            }, parseMLAxisConf: function (a, d) {
                var e = this.baseConf, g = this.csConf, h = this.chartAPI, s = D(a.scalerecursively, e.scalerecursively), l = D(a.maxscalerecursion, e.maxscalerecursion), z = p(a.scaleseparator, e.scaleseparator), C, w, I, M, F, K;
                d = D(d, this.Y.length);
                p(a.numberscaleunit) && (C = a.numberscaleunit.split(","));
                p(a.numberscalevalue) && (w = a.numberscalevalue.split(","));
                l || (l = -1);
                if (p(a.thousandseparatorposition))for (I = a.thousandseparatorposition.split(","), M = I.length, K = m.thousandseparatorposition[0]; M--;)(F = D(b(I[M]))) ? K = F : F = K, I[M] = F;
                e = {
                    cacheStore: [],
                    formatnumber: c(a.formatnumber, e.formatnumber),
                    formatnumberscale: c(a.formatnumberscale, e.formatnumberscale),
                    defaultnumberscale: N(a.defaultnumberscale, e.defaultnumberscale),
                    numberscaleunit: c(C, e.numberscaleunit).concat(),
                    numberscalevalue: c(w, e.numberscalevalue).concat(),
                    numberprefix: N(a.numberprefix, e.numberprefix),
                    numbersuffix: N(a.numbersuffix,
                        e.numbersuffix),
                    forcedecimals: c(a.forcedecimals, e.forcedecimals),
                    decimalprecision: parseInt("auto" === a.decimals ? g.decimalprecision : c(a.decimals, e.decimalprecision), 10),
                    decimalseparator: c(a.decimalseparator, e.decimalseparator),
                    thousandseparator: c(a.thousandseparator, e.thousandseparator),
                    thousandseparatorposition: c(I, e.thousandseparatorposition),
                    indecimalseparator: N(a.indecimalseparator, e.indecimalseparator),
                    inthousandseparator: N(a.inthousandseparator, e.inthousandseparator),
                    scalerecursively: s,
                    maxscalerecursion: l,
                    scaleseparator: z
                };
                h.useScaleRecursively && (e.numberscalevalue && e.numberscalevalue.length) == (e.numberscaleunit && e.numberscaleunit.length) || (e.scalerecursively = s = 0);
                h = {
                    cacheStore: [],
                    formatnumber: e.formatnumber,
                    formatnumberscale: e.formatnumberscale,
                    defaultnumberscale: e.defaultnumberscale,
                    numberscaleunit: e.numberscaleunit.concat(),
                    numberscalevalue: e.numberscalevalue.concat(),
                    numberprefix: e.numberprefix,
                    numbersuffix: e.numbersuffix,
                    decimalprecision: parseInt(c(a.yaxisvaluedecimals, e.decimalprecision, 2), 10),
                    forcedecimals: c(a.forceyaxisvaluedecimals, e.forcedecimals),
                    decimalseparator: e.decimalseparator,
                    thousandseparator: e.thousandseparator,
                    thousandseparatorposition: e.thousandseparatorposition.concat(),
                    indecimalseparator: e.indecimalseparator,
                    inthousandseparator: e.inthousandseparator,
                    scalerecursively: s,
                    maxscalerecursion: l,
                    scaleseparator: z
                };
                s && (e.numberscalevalue.push(1), e.numberscaleunit.unshift(e.defaultnumberscale), h.numberscalevalue.push(1), h.numberscaleunit.unshift(h.defaultnumberscale));
                this.Y[d] = {
                    dataLabelConf: e,
                    yAxisLabelConf: h
                }
            }, percentValue: function (a) {
                var b = this.percentStrCacheStore[a];
                void 0 === b && (b = isNaN(this.paramLabels.decimalprecision) ? "2" : this.paramLabels.decimalprecision, b = this.percentStrCacheStore[a] = e(d(a, b, this.paramLabels.forcedecimals), this.paramLabels.decimalseparator, this.paramLabels.thousandseparator, this.paramLabels.thousandseparatorposition) + "%");
                return b
            }, getCleanValue: function (a, c) {
                var e = this.cleaneValueCacheStore[a];
                if (void 0 === e) {
                    var d = this.baseConf, e = a + "";
                    d._REGinthousandseparator &&
                    (e = e.replace(d._REGinthousandseparator, ""));
                    d._REGindecimalseparator && (e = e.replace(d._REGindecimalseparator, "."));
                    e = parseFloat(e);
                    e = isFinite(e) ? e : NaN;
                    this.cleaneValueCacheStore[a] = e = isNaN(e) ? null : c ? b(e) : e
                }
                return e
            }, dataLabels: function (a, b) {
                var c = this.Y[b] || (b ? this.Y[1] : this.Y[0]), e, c = c && c.dataLabelConf || this.baseConf;
                e = c.cacheStore[a];
                void 0 === e && (e = c.cacheStore[a] = h(a, c));
                return e
            }, yAxis: function (a, b) {
                var c = this.Y[b] || (b ? this.Y[1] : this.Y[0]), e, c = c && c.yAxisLabelConf || this.baseConf;
                e = c.cacheStore[a];
                void 0 === e && (e = c.cacheStore[a] = h(a, c, !0));
                return e
            }, xAxis: function (a) {
                var b = this.paramX.cacheStore[a];
                void 0 === b && (b = this.paramX.cacheStore[a] = h(a, this.paramX, !0));
                return b
            }, sYAxis: function (a) {
                var b = this.Y[1], c, b = b && b.yAxisLabelConf || this.baseConf;
                c = b.cacheStore[a];
                void 0 === c && (c = b.cacheStore[a] = h(a, b));
                return c
            }, scale: function (a) {
                var b = this.paramScale.cacheStore[a];
                void 0 === b && (b = this.paramScale.cacheStore[a] = h(a, this.paramScale));
                return b
            }, getCleanTime: function (a) {
                var b;
                this.timeConf.inputDateFormat &&
                Date.parseExact && (b = Date.parseExact(a, this.timeConf.inputDateFormat));
                return b && b.getTime()
            }, legendValue: function (a) {
                var b = this.paramLegend.cacheStore[a];
                void 0 === b && (b = this.paramLegend.cacheStore[a] = h(a, this.paramLegend));
                return b
            }, legendPercentValue: function (a) {
                var b = this.percentStrCacheStore[a], c = this.paramLegend;
                void 0 === b && (b = isNaN(c.decimalprecision) ? "2" : c.decimalprecision, b = this.percentStrCacheStore[a] = e(d(a, b, c.forcedecimals), c.decimalseparator, c.thousandseparator, c.thousandseparatorposition) +
                    "%");
                return b
            }, getDateValue: function (a) {
                var b, c, e;
                a = /^dd/.test(this.timeConf.inputDateFormat) && a && a.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/, "$2/$1/$3") || a;
                b = new Date(a);
                c = b.getTime();
                !c && a && /\:/.test(a) && (a = a.split(":"), c = D(a[0], 0), e = D(a[1], 0), a = D(a[2], 0), c = 23 < c ? 24 === c && 0 === e && 0 === a ? c : 23 : c, e = 59 < e ? 59 : e, a = 59 < a ? 59 : a, b = new Date, b.setHours(c), b.setMinutes(e), b.setSeconds(a), c = b.getTime());
                return {ms: c, date: b}
            }, getFormattedDate: function (a, b) {
                var e = "object" === typeof a && a || new Date(a), d = this.timeConf, g =
                    c(b, d.outputDateFormat), h = e.getFullYear(), m = e.getMonth(), s = e.getDate(), p = e.getDay(), l = e.getMinutes(), z = e.getSeconds(), e = e.getHours(), l = 9 < l ? "" + l : "0" + l, z = 9 < z ? "" + z : "0" + z, e = 9 < e ? "" + e : "0" + e;
                g.match(/dnl/) && (g = g.replace(/dnl/ig, d.days[p]));
                g.match(/dns/) && (g = g.replace(/dns/ig, d.days[p] && d.days[p].substr(0, 3)));
                g.match(/dd/) && (g = g.replace(/dd/ig, s));
                g.match(/mnl/) && (g = g.replace(/mnl/ig, d.months[m]));
                g.match(/mns/) && (g = g.replace(/mns/ig, d.months[m] && d.months[m].substr(0, 3)));
                g.match(/mm/) && (g = g.replace(/mm/ig,
                    m + 1));
                g.match(/yyyy/) && (g = g.replace(/yyyy/ig, h));
                g.match(/yy/) && (g = g.replace(/yy/ig, (h % 1E3 % 100 + "").replace(/^(\d)$/, "0$1")));
                g.match(/hh12/) && (g = g.replace(/hh12/ig, e % 12 || 12));
                g.match(/hh/) && (g = g.replace(/hh/ig, e));
                g.match(/mn/) && (g = g.replace(/mn/ig, l));
                g.match(/ss/) && (g = g.replace(/ss/ig, z));
                g.match(/ampm/) && (g = g.replace(/ampm/ig, 12 > e ? "AM" : "PM"));
                g.match(/ds/) && (g = g.replace(/ds/ig, d.daySuffix[s]));
                return g
            }
        };
        l.prototype.constructor = l;
        h = function (a, b, h) {
            if (null !== a) {
                a = Number(a);
                var m = a + "", s, p, l, z, C;
                s = 1 == b.formatnumberscale ? b.defaultnumberscale : "";
                C = (C = m.split(".")[1]) ? C.length : b.forcedecimals ? "2" : "";
                if (1 == b.formatnumberscale) {
                    m = a;
                    p = b.numberscalevalue;
                    a = b.numberscaleunit;
                    s = {};
                    var w = b.defaultnumberscale;
                    l = 0;
                    var I = [], M = [];
                    if (b.scalerecursively) {
                        for (l = 0; l < p.length; l++)if (z = D(p[l]) || 1E3, Math.abs(Number(m)) >= z && l < p.length - 1)w = m % z, m = (m - w) / z, 0 !== w && (I.push(w), M.push(a[l])); else {
                            I.push(m);
                            M.push(a[l]);
                            break
                        }
                        I.reverse();
                        M.reverse();
                        s.value = I;
                        s.scale = M
                    } else {
                        if (p.length === a.length)for (l = 0; l < p.length; l++)if (z =
                                D(p[l]) || 1E3, Math.abs(Number(m)) >= z)w = a[l] || "", m = Number(m) / z; else break;
                        s.value = m;
                        s.scale = w
                    }
                    p = s;
                    a = m = p.value;
                    s = p.scale
                }
                if (b.scalerecursively && 0 !== b.formatnumberscale && "0" !== b.formatnumberscale) {
                    h = p.value;
                    p = p.scale;
                    a = -1 == b.maxscalerecursion ? h.length : Math.min(h.length, b.maxscalerecursion);
                    if (1 == b.formatnumber)for (m = "", z = 0; z < a; z++)s = 0 === z ? h[z] : Math.abs(h[z]), l = s + "", z == a - 1 && (l = d(s, c(b.decimalprecision, C), b.forcedecimals)), m = m + e(l, b.decimalseparator, b.thousandseparator, b.thousandseparatorposition) + p[z] +
                        (z < a - 1 ? b.scaleseparator : ""); else for (m = "", z = 0; z < a; z++)m = m + (0 === z ? h[z] : Math.abs(h[z]) + "") + p[z] + (z < a - 1 ? b.scaleseparator : "");
                    m = (b.numberprefix || "") + m + (b.numbersuffix || "")
                } else 1 == b.formatnumber && (m = d(a, c(b.decimalprecision, C), b.forcedecimals), m = e(m, b.decimalseparator, b.thousandseparator, b.thousandseparatorposition, h)), m = (b.numberprefix || "") + m + s + (b.numbersuffix || "");
                return m
            }
        };
        return l
    }();
    d.extend(d.core, {
        formatNumber: function (a, b) {
            b = b && s(b) || {};
            var c = K(b), d;
            F[c] ? d = F[c] : F[c] = d = new l.NumberFormatter(b,
                {useScaleRecursively: !0});
            return d.dataLabels(a)
        }
    }, !1);
    d.extend(d.core, {
        formatNumber: function (a, b, c, m) {
            c = c && s(c) || {};
            var p = this.jsVars.instanceAPI || {}, z = p.numberFormatter, q;
            "" === K(c) ? z ? q = z : (z = this.getChartData(d.dataFormats.JSON, !0), z = z.data || {}, z = z.chart || {}, c = K(z), F[c] ? q = F[c] : F[c] = q = new l.NumberFormatter(z, p)) : (z = this.getChartData(d.dataFormats.JSON, !0), z = z.data || {}, z = z.chart || {}, z = w(w({}, z), c), c = K(z), F[c] ? q = F[c] : F[c] = q = new l.NumberFormatter(z, p));
            switch ((b && b.toLowerCase ? b : "").toLowerCase()) {
                case "yaxisvalues":
                    a =
                        q.yAxis(a, m);
                    break;
                case "xaxisvalues":
                    a = q.xAxis(a);
                    break;
                case "scale":
                    a = q.scale(a);
                    break;
                default:
                    a = q.dataLabels(a, m)
            }
            return a
        }
    }, !0)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-dom", function () {
    var d = this.hcLib, l = this.window, D = l.document, w = d.extend2, p = "ontouchstart" in l;
    (function (c) {
        var d = function () {
            var b = {}, a;
            b.pointerdrag = {
                start: ["mousedown"],
                end: ["mouseup"],
                onStart: ["mousemove"],
                postHandlers: {},
                preHandlers: {}
            };
            b.pointerhover = {start: ["mouseover"], end: ["mouseout"]};
            b.click = {start: ["click"]};
            b.escape = {
                start: ["keydown"], preHandlers: {
                    start: function (a) {
                        a = a || l.event;
                        return a.keyCode && 27 === a.keyCode ? !0 : !1
                    }
                }
            };
            p && (a =
                b.pointerdrag, a.start.push("touchstart"), a.end.push("touchend"), a.onStart.push("touchmove"), a.postHandlers.onStart = function (a) {
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }, a = b.click, a.start.push("touchstart"));
            return b
        }(), b;
        b = w({}, d);
        c.dem = new function () {
            var c = {}, a = {}, d = D.addEventListener ? function (a, b, c) {
                a.addEventListener(b, c, !1)
            } : function (a, b, c) {
                a.attachEvent("on" + b, c)
            }, p = D.removeEventListener ? function (a, b, c) {
                a.removeEventListener(b, c, !1)
            } : function (a, b, c) {
                a.detachEvent("on" + b, c)
            }, K = function (a,
                             c, d) {
                var g = [], p, q, z;
                z = b[c];
                d.start = function (b) {
                    b = b || l.event;
                    for (var c = z.onStart, g = z.end, h = [], p = [], q = c && c.length || 0; q--;)h.push(s(a, c[q], d, "onStart"));
                    for (q = g && g.length || 0; q--;)p.push(s(a, g[q], d, "end"));
                    d.startUn = d.startUn ? d.startUn.concat(h) : h;
                    d.endUn = d.endUn ? d.endUn.concat(p) : p;
                    d.state = "start";
                    d.closure(b)
                };
                d.onStart = function (a) {
                    a = a || l.event;
                    d.state = "on";
                    if (d.gDef && d.gDef.preHandlers && "function" === typeof d.gDef.preHandlers.onStart)d.gDef.preHandlers.onStart(a);
                    d.closure(a);
                    if (d.gDef && d.gDef.postHandlers &&
                        "function" === typeof d.gDef.postHandlers.onStart)d.gDef.postHandlers.onStart(a)
                };
                d.end = function (a) {
                    a = a || l.event;
                    for (var b = d.startUn, c = d.endUn, e = b && b.length || 0; e--;)b[e]();
                    delete d.startUn;
                    d.startUn = [];
                    for (e = c && c.length || 0; e--;)c[e]();
                    delete d.endUn;
                    d.endUn = [];
                    d.state = "end";
                    d.closure(a)
                };
                if (z)for (c = z.start, q = c.length; q--;)(p = c[q]) && g.push(s(a, p, d, "start"));
                return g
            }, s = function (a, b, c, g) {
                g = g || "closure";
                d(a, b, c[g]);
                return function () {
                    p(a, b, c[g])
                }
            }, g = function (a) {
                return function (b) {
                    b = b || l.event;
                    a.handler.call(a.context ||
                        a.elem, {
                        data: a.data,
                        type: a.type,
                        state: a.state,
                        isGesture: a.isGesture,
                        target: b.target || b.srcElement,
                        originalEvent: b
                    })
                }
            };
            return {
                listen: function (d, h, m, p, l) {
                    var q = this;
                    h = "string" === typeof h ? h.split(" ") : h;
                    var z = h.length, u = [], w = function (a, b, c) {
                        u.push(function () {
                            q.unlisten(a, b, c)
                        })
                    }, t, F, N, ia, Ba;
                    if (d.ownerDocument && d.ownerDocument === D)for (; z--;)F = h[z], ia = Boolean(b[F]), Ba = "function" === typeof m ? m : m[z], N = {
                        handler: Ba,
                        elem: d,
                        type: F,
                        isGesture: ia,
                        gDef: ia ? b[F] : null,
                        data: p,
                        context: l,
                        start: [],
                        end: [],
                        links: {
                            prev: null,
                            next: null
                        }
                    }, N.closure = g(N), ia ? ((t = a[F]) || (t = a[F] = []), t.push(N), K(d, F, N)) : ((t = c[F]) || (t = c[F] = []), t.push(N), s(d, F, N)), w(d, F, Ba); else for (; z--;)F = h[z], Ba = "function" === typeof m ? m : m[z], N = {
                        handler: Ba,
                        elem: d,
                        type: F,
                        isGesture: ia,
                        data: p,
                        context: l,
                        start: [],
                        end: [],
                        links: {prev: null, next: null}
                    }, N.closure = g(N), (t = c[F]) || (t = c[F] = []), t.push(N), s(d, F, N), w(d, F, Ba);
                    return {
                        unlisten: function () {
                            for (var a = u.length; a--;)u[a]();
                            u.length = 0;
                            u = null
                        }
                    }
                }, unlisten: function (d, g, m) {
                    var s, l = !1, q, z;
                    if (Boolean(b[g]))for (q = (s = a[g]) &&
                        s.length || 0; q--;) {
                        if (z = s[q], z.handler === m && z.elem === d) {
                            var l = d, u = void 0, w = void 0, t = void 0, u = void 0;
                            if (u = b[g])for (u = u.start, t = u.length; t--;)(w = u[t]) && p(l, w, z.start);
                            s.splice(q, 1);
                            l = !0
                        }
                    } else for (q = (s = c[g]) && s.length || 0; q--;)z = s[q], z.handler === m && z.elem === d && (p(d, g, z.closure), s.splice(q, 1), l = !0);
                    return l
                }, fire: function (a, b, d, g) {
                    var s;
                    if (a.ownerDocument && a.ownerDocument === D)D.createEvent ? (s = D.createEvent("HTMLEvents"), s.initEvent(b, !0, !0), d && (d.originalEvent ? d.originalEvent = s : w(s, d)), "function" === typeof a[b] &&
                    a[b].call(a), a.dispatchEvent(s)) : (s = D.createEventObject(), s.eventType = b, d && (d.originalEvent ? d.originalEvent = s : w(s, d)), "function" === typeof a[b] && a[b].call(a), a.fireEvent("on" + b, s)), g && !s.returnValue && g(s); else for (g = (b = c[b]) && b.length || 0; g--;)s = b[g], s.elem === a && s.closure(d)
                }
            }
        }
    })(d || l);
    (function (c) {
        function d(a, b) {
            var c = "";
            D.defaultView && D.defaultView.getComputedStyle ? c = D.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function (a, b) {
                return b.toUpperCase()
            }),
                c = a.currentStyle[b]);
            c = parseInt(c, 10);
            return isNaN(c) ? 0 : c
        }

        function b(b, c, d, g, e, h, m, p) {
            var l = c / 40, q = a[h || "linear"](g - d, l), w = 0, u = function () {
                var a;
                w < l ? (a = q[w], b.style[e] = d + a + p, z && "opacity" === e && (a = 100 * Number(a), b.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + a + ")"), w += 1, setTimeout(u, 40)) : m && m()
            };
            p = p || "";
            setTimeout(u, 40)
        }

        var p = {
            width: {suffix: "px"},
            height: {suffix: "px"},
            opacity: !0,
            top: {suffix: "px"},
            left: {suffix: "px"}
        }, a = {
            linear: function (a, b) {
                for (var c = [], d = a / b, e = 0; e < b; e += 1)c[e] = d * (e + 1);
                return c
            }
        }, z = /msie/i.test(l.navigator.userAgent) && !l.opera;
        c.danimate = w({
            animate: function (a, c, s, g, e) {
                g = {};
                var h = {}, m = function () {
                    z += 1;
                    z === l && "function" === typeof e && e()
                }, l = 0, z = 0, q, w;
                if (40 > s) {
                    for (w in c)a.style[w] = c[w];
                    e && e()
                } else for (w in c)p[w] && (l += 1, g[w] = c[w], h[w] = d(a, w), q = "object" === typeof p[w] && p[w].suffix, b(a, s, h[w], g[w], w, "linear", m, q))
            }
        }, {})
    })(d || l)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-colormanager", function () {
    var d = this.hcLib, l = d.pluckNumber, D = d.graphics.getDarkColor, w = d.graphics.getLightColor, p = "AFD8F8 F6BD0F 8BBA00 FF8E46 008E8E D64646 8E468E 588526 B3AA00 008ED6 9D080D A186BE CC6600 FDC689 ABA000 F26D7D FFF200 0054A6 F7941C CC3300 006600 663300 6DCFF6".split(" "), c = "8BBA00 F6BD0F FF654F AFD8F8 FDB398 CDC309 B1D0D2 FAD1B9 B8A79E D7CEA5 C4B3CE E9D3BE EFE9AD CEA7A2 B2D9BA".split(" "), N = d.defaultPaletteOptions = {
        paletteColors: [p,
            p, p, p, p],
        bgColor: ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
        bgAngle: [270, 270, 270, 270, 270],
        bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
        bgAlpha: ["50,50", "60,50", "40,20", "20,10", "30,30"],
        canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        canvasBgAngle: [0, 0, 0, 0, 0],
        canvasBgAlpha: ["100", "100", "100", "100", "100"],
        canvasBgRatio: ["", "", "", "", ""],
        canvasBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
        canvasBorderAlpha: [100, 100, 100, 90, 100],
        showShadow: [0,
            1, 1, 1, 1],
        divLineColor: ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"],
        divLineAlpha: [40, 45, 65, 40, 30],
        altHGridColor: ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        altHGridAlpha: [50, 35, 10, 20, 15],
        altVGridColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        altVGridAlpha: [10, 20, 10, 15, 10],
        anchorBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
        baseFontColor: ["555555", "60634E",
            "025B6A", "A15E01", "68001B"],
        borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
        borderAlpha: [50, 50, 50, 50, 50],
        legendBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        legendBorderColor: ["545454", "545454", "415D6F", "845001", "D55979"],
        plotGradientColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        plotBorderColor: ["333333", "8A8A8A", "FFFFFF", "FFFFFF", "FFFFFF"],
        plotFillColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        bgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        bgAlpha3D: ["100",
            "100", "100", "100", "100"],
        bgAngle3D: [90, 90, 90, 90, 90],
        bgRatio3D: ["", "", "", "", ""],
        canvasBgColor3D: ["DDE3D5", "D8D8D7", "EEDFCA", "CFD2D8", "FEE8E0"],
        canvasBaseColor3D: ["ACBB99", "BCBCBD", "C8A06C", "96A4AF", "FAC7BC"],
        divLineColor3D: ["ACBB99", "A4A4A4", "BE9B6B", "7C8995", "D49B8B"],
        divLineAlpha3D: [100, 100, 100, 100, 100],
        legendBgColor3D: ["F0F3ED", "F3F3F3", "F7F0E8", "EEF0F2", "FEF8F5"],
        legendBorderColor3D: ["C6CFB8", "C8C8C8", "DFC29C", "CFD5DA", "FAD1C7"],
        toolTipbgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        toolTipBorderColor3D: ["49563A",
            "666666", "49351D", "576373", "681C09"],
        baseFontColor3D: ["49563A", "4A4A4A", "49351D", "48505A", "681C09"],
        anchorBgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]
    }, p = d.colorManager = function (b, c) {
        var a = b.chart, p = d.extend2({}, N), F = c.defaultPaletteOptions || {}, K;
        p || (p = {});
        for (K in F)p[K] = F[K];
        p = this.paletteOptions = p;
        F = this.themeEnabled = a.palettethemecolor;
        this.paletteIndex = (0 < a.palette && 6 > a.palette ? a.palette : l(c.paletteIndex, 1)) - 1;
        this.iterator = 0;
        this.paletteColors = p.paletteColors[this.themeEnabled ? 0 :
            this.paletteIndex];
        K = a.palettecolors;
        void 0 !== K && null !== K && "" !== a.palettecolors && (this.paletteColors = a.palettecolors.split(/\s*\,\s*/));
        this.paletteLen = this.paletteColors.length;
        this.useFlatColors = l(a.useflatdataplotcolor, c.useFlatColor, 0);
        F && (this.paletteIndex = 5, p.bgColor.push(w(F, 35) + "," + w(F, 10)), p.bgAngle.push(270), p.bgRatio.push("0,100"), p.bgAlpha.push("50,50"), p.canvasBgColor.push("FFFFFF"), p.canvasBgAngle.push(0), p.canvasBgAlpha.push("100"), p.canvasBgRatio.push(""), p.canvasBorderColor.push(D(F,
            80)), p.canvasBorderAlpha.push(100), p.showShadow.push(1), p.divLineColor.push(D(F, 20)), p.divLineAlpha.push(40), p.altHGridColor.push(w(F, 20)), p.altHGridAlpha.push(15), p.altVGridColor.push(w(F, 80)), p.altVGridAlpha.push(10), p.anchorBgColor.push("FFFFFF"), p.toolTipBgColor.push("FFFFFF"), p.toolTipBorderColor.push(D(F, 80)), p.baseFontColor.push(F.split && F.split(",")[0]), p.borderColor.push(D(F, 60)), p.borderAlpha.push(50), p.legendBgColor.push("FFFFFF"), p.legendBorderColor.push(D(F, 80)), p.plotGradientColor.push("FFFFFF"),
            p.plotBorderColor.push(D(F, 85)), p.plotFillColor.push(D(F, 85)), p.bgColor3D.push("FFFFFF"), p.bgAlpha3D.push("100"), p.bgAngle3D.push(90), p.bgRatio3D.push(""), p.canvasBgColor3D.push(w(F, 20)), p.canvasBaseColor3D.push(w(F, 40)), p.divLineColor3D.push(D(F, 20)), p.divLineAlpha3D.push(40), p.legendBgColor3D.push("FFFFFF"), p.legendBorderColor3D.push(D(F, 80)), p.toolTipbgColor3D.push("FFFFFF"), p.toolTipBorderColor3D.push(D(F, 80)), p.baseFontColor3D.push(F.split && F.split(",")[0]), p.anchorBgColor3D.push("FFFFFF"), p.tickColor &&
        p.tickColor.push(D(F, 90)), p.trendDarkColor && p.trendDarkColor.push(D(F, 90)), p.trendLightColor && p.trendLightColor.push(w(F, p.TrendLightShadeOffset)), p.msgLogColor && p.msgLogColor.push(w(F, 80)), p.dialColor && p.dialColor.push(D(F, 95) + ",FFFFFF," + D(F, 95)), p.dialBorderColor && p.dialBorderColor.push(D(F, 95) + ",FFFFFF," + D(F, 95)), p.pivotColor && p.pivotColor.push(w(F, 95) + ",FFFFFF," + w(F, 95)), p.pivotBorderColor && p.pivotBorderColor.push(D(F, 95) + ",FFFFFF," + D(F, 95)), p.pointerBorderColor && p.pointerBorderColor.push(D(F,
            75)), p.pointerBgColor && p.pointerBgColor.push(D(F, 75)), p.thmBorderColor && p.thmBorderColor.push(D(F, 90)), p.thmFillColor && p.thmFillColor.push(w(F, 55)), p.cylFillColor && p.cylFillColor.push(w(F, 55)), p.periodColor && p.periodColor.push(w(F, 10)), p.winColor && p.winColor.push("666666"), p.lossColor && p.lossColor.push("CC0000"), p.drawColor && p.drawColor.push("666666"), p.scorelessColor && p.scorelessColor.push("FF0000"), p.gridColor && p.gridColor.push(w(F, 30)), p.categoryBgColor && p.categoryBgColor.push(w(F, 10)), p.dataTableBgColor &&
        p.dataTableBgColor.push(w(F, 10)), p.gridResizeBarColor && p.gridResizeBarColor.push(D(F, 90)), p.scrollBarColor && p.scrollBarColor.push(w(F, 50)))
    };
    p.prototype = {
        getColor: function (b) {
            return this.paletteOptions[b][this.paletteIndex]
        }, getPlotColor: function (b) {
            var c = this.paletteColors;
            b = this.useFlatColors ? this.getColor("plotFillColor") : c[b % this.paletteLen];
            b || (this.iterator === this.paletteLen && (this.iterator = 0), b = c[this.iterator], this.iterator += 1);
            return b
        }, parseColorMix: function (b, c) {
            var a = [], d, p, l, s, g, e, h,
                m, M, C;
            c = c.replace(/\s/g, "");
            c = c.toLowerCase();
            if ("" === c || null === c || void 0 === c)a = [b]; else for (p = c.split(","), l = b.split(","), s = Math.max(p.length, l.length, 1), g = p[0], e = l[0], M = /[\{\}]/ig, C = 0; C < s; C++)h = (p[C] || g).replace(M, ""), m = l[C] || e, "color" == h ? a.push(m) : "light" == h.substr(0, 5) ? (d = h.indexOf("-"), d = -1 == d ? 1 : h.substr(d + 1, h.length - d), d = 100 - d, a.push(w(m, d))) : "dark" == h.substr(0, 4) ? (d = h.indexOf("-"), d = -1 == d ? 1 : h.substr(d + 1, h.length - d), d = 100 - d, a.push(D(m, d))) : a.push(h);
            return a
        }, parseAlphaList: function (b, c) {
            var a =
                b.split(","), d = [], p, w = 100, s;
            for (s = 0; s < c; s++)p = l(a[s]), void 0 !== p && null !== p && (w = p), d[s] = w;
            return d.join()
        }, parseRatioList: function (b, c) {
            var a = b.split(","), d = [], p = 0, l, s;
            for (s = 0; s < c; s++)l = a[s], l = isNaN(l) || void 0 === l ? 0 : Math.abs(Number(l)), l = 100 < l ? 100 : l, d[s] = l, p += l;
            p = 100 < p ? 100 : p;
            if (a.length < c)for (s = a.length; s < c; s++)d[s] = (100 - p) / (c - a.length);
            d[-1] = 0;
            return d.join()
        }
    };
    p.prototype.constructor = p;
    d.defaultGaugePaletteOptions = {
        paletteColors: [c, c, c, c, c],
        bgColor: ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE",
            "A86402,FDC16D", "FF7CA0,FFD1DD"],
        bgAngle: [270, 270, 270, 270, 270],
        bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
        bgAlpha: ["50,50", "60,50", "40,20", "20,10", "30,30"],
        toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
        baseFontColor: ["555555", "60634E", "025B6A", "A15E01", "68001B"],
        tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
        trendDarkColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
        trendLightColor: ["f1f1f1", "F3F5DD",
            "EDFBFE", "FFF5E8", "FFD1DD"],
        pointerBorderColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
        pointerBgColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
        canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        canvasBgAngle: [0, 0, 0, 0, 0],
        canvasBgAlpha: ["100", "100", "100", "100", "100"],
        canvasBgRatio: ["", "", "", "", ""],
        canvasBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
        canvasBorderAlpha: [100, 100, 100, 90, 100],
        altHGridColor: ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        altHGridAlpha: [50,
            35, 10, 20, 15],
        altVGridColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        altVGridAlpha: [10, 20, 10, 15, 10],
        borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
        borderAlpha: [50, 50, 50, 50, 50],
        legendBgColor: ["ffffff", "ffffff", "ffffff", "ffffff", "ffffff"],
        legendBorderColor: ["545454", "545454", "415D6F", "845001", "D55979"],
        plotFillColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        plotBorderColor: ["999999", "8A8A8A", "6BA9B6", "C1934D", "FC819F"],
        msgLogColor: ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"],
        TrendLightShadeOffset: 30
    }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-annotations", function () {
    var d = this, l = d.core, D = d.hcLib, w = d.window, p = /msie/i.test(w.navigator.userAgent) && !w.opera, c = D.addEvent, N = D.removeEvent, b = D.hasTouch, I = w.Number, a = b ? 6 : 5, z = "rgba(192,192,192," + (p ? .002 : 1E-6) + ")", p = w.Math, F = p.min, K = p.max, s = p.sin, g = p.cos, e = p.PI, h = e / 180, m = d.extend, M = D.pluck, C = D.pluckNumber, q = D.graphics.convertColor, Y = D.getValidValue, u = D.parseUnsafeString, ea = D.setImageDisplayMode, t = D.graphics.parseColor, V = D.setLineHeight,
        X = D.getMouseCoordinate, ia = {style: {}}, Ba = D.toRaphaelColor, qa = function (a, b) {
            return {start: -b, end: -a, angle: a - b}
        }, da = function (a, b, c, d, e) {
            var g, h, p = 0, m = 0;
            h = void 0 === b || null === b ? 1 : b;
            var s;
            if (!a || !a.toString)return {value: c, hasDynamicMacros: !1};
            a = a.toString();
            a = a.toLowerCase().replace(/\s/g, "");
            if (c = a.match(/^[\+\-]?\d+(\.\d+)?|[\+\-]\d+(\.\d+)?/g)) {
                for (b = 0; b < c.length; b += 1)p += Number(c[b]) || 0;
                p *= h
            }
            if (c = a.match(/^[\+\-]?(\$[a-z0-9\.]+)|[\+\-](\$[a-z0-9\.]+)/g))for (b = 0; b < c.length; b += 1) {
                g = c[b];
                var q = d, l = e, t = g.split("."),
                    u = void 0, w = void 0, z = 0;
                for (h = void 0; u = t.shift();)switch (typeof(w = q[u])) {
                    case "object":
                        q = w[u];
                        break;
                    case "function":
                        w = w(t, l), "-" === g.charAt() && (w *= -1), h = !0;
                    default:
                        z += I(w) || 0, t.length = 0
                }
                g = z;
                h && (s = !0);
                m += g
            }
            if (c = a.match(/^[\+\-]?\$\d+(\.\d+)?|[\+\-]\$\d+(\.\d+)?/g))for (b = 0; b < c.length; b += 1)m = m + Number(c[b].replace("$", "")) || 0;
            return {value: p + m, hasDynamicMacros: s}
        }, ka = function (a, b, c) {
            if (!b.removed) {
                b = b.data("annotation");
                var e = b.getRenderer(), g = X(e.container, c), h = g.annotationOptions = b.options, p = g.groupOptions =
                    b.group.options;
                g._shape = b;
                "id" in h && (g.annotationId = h.id);
                "id" in p && (g.groupId = p.id);
                d.raiseEvent(a, g, e.fusionCharts, c)
            }
        }, aa, Z, ca;
    Z = function (a, b, c, d, e) {
        this.options = a;
        this.attrs = {};
        this.css = {};
        this.bounds = {};
        this.shared = b;
        this.snaps = c || {};
        this.annotations = e;
        this.items = b = [];
        this._idstore = d;
        a.id && (this._id = a.id, d[a.id] = this);
        if (a = a.items)for (d = 0, c = a.length; d < c; d += 1)b.push(new ca(a[d], this))
    };
    m(Z.prototype, {
        scaleImageX: 1,
        scaleImageY: 1,
        scaleText: 1,
        scaleValue: 1,
        scaleValueComplement: 1,
        scaleX: 1,
        scaleY: 1
    });
    Z.prototype.setup = function () {
        var a = this.options, b = this.shared, c = this.getRenderer();
        c && (this.isBelow = 0 !== C(a.showbelow, a.showbelowchart, b.showbelow), this.useTracker = !this.isBelow && c.layers.tracker && this.shared.useTracker, this.raiseOwnEvents = b.interactionevents)
    };
    Z.prototype.scale = function () {
        var a = this.options, b = this.shared, c = this.bounds, d = this.snaps, e = this.getRenderer(), g = b.rootxscale, h = b.rootyscale, p = c.xs = C(a.xscale, b.xscale, 100) / 100, m = c.ys = C(a.yscale, b.yscale, 100) / 100, s, q, l;
        e && (this.scaleText *= m,
            this.scaleImageX *= p, this.scaleImageY *= m, 0 !== C(a.autoscale, b.autoscale) && (p = C(a.origw, b.origw), m = C(a.origh, b.origh), p = e.chartWidth / p, m = e.chartHeight / m, e = 0 !== C(a.constrainedscale, b.constrainedscale), s = p < m ? p : m, q = e ? s : p, l = e ? s : m, this.scaleValue = Z.prototype.scaleValue * s, this.scaleValueComplement = Z.prototype.scaleValueComplement * (e ? s : p < m ? m : p), this.scaleX = Z.prototype.scaleX * q, this.scaleY = Z.prototype.scaleX * l, c.xs *= q, c.ys *= l, g *= q, h *= l, "1" == M(a.scaletext, b.scaletext) && (this.scaleText = Z.prototype.scaleText * l),
        "1" == M(a.scaleimages, b.scaleimages) && (this.scaleImageX = Z.prototype.scaleImageX * q, this.scaleImageY = Z.prototype.scaleImageY * l)), c.x = da(M(a.x, a.xpos), g, 0, d, this.isBelow).value + C(a.grpxshift, b.grpxshift, 0), c.y = da(M(a.y, a.ypos), h, 0, d, this.isBelow).value + C(a.grpyshift, b.grpyshift, 0), this.xshift = C(a.xshift, b.xshift, 0), this.yshift = C(a.yshift, b.yshift, 0))
    };
    Z.prototype.draw = function () {
        var a = this.getRenderer(), b = this.options, c = this.bounds, d = this.items, e = a && a.layers.dataset, g = this.wrapper;
        if (a) {
            g || (this.wrapper =
                g = a.paper.group("annotations"), e && (this.isBelow ? g.insertBefore(e) : g.insertAfter(a.layers.datalabels || e)));
            this.wrapper.attr({x: 0, y: 0, visibility: C(b.visible, 1) ? "" : "hidden"}).translate(c.x, c.y);
            b = 0;
            for (c = d.length; b < c; b += 1)a = d[b], a.scale(!0), a.queueDraw ? a.queue() : (a.setup(), a.draw());
            return this
        }
    };
    Z.prototype.destroy = function () {
        for (var a = this.wrapper, b = this.items, c; c = b.shift();)c.destroy();
        a && (this.wrapper = a.remove());
        this._idstore[this._id] === this && delete this._idstore[this._id]
    };
    Z.prototype.addItem =
        function (a, b) {
            var c;
            this.items.push(c = new ca(a, this, this._idstore));
            b && null !== this.getRenderer() && (c.scale(), c.setup(), c.draw());
            return c
        };
    Z.prototype.removeItem = function (a) {
        for (var b = this.items, c = b.length; c--;)if (a === b[c]._id)return b.splice(c, 1)
    };
    Z.prototype.getRenderer = function () {
        return this.annotations && this.annotations.getRenderer() || null
    };
    ca = function (a, b) {
        var c = !1, d;
        this.options = a;
        this.group = b;
        this.args = [];
        this.attrs = {};
        this.attrsTracker = {};
        this.style = {};
        this.bounds = {};
        this._idstore = b._idstore;
        a.id && (this._id = a.id, b._idstore[a.id] = this);
        this.type = a.type && a.type.toLowerCase && a.type.toLowerCase();
        for (d in ca.eventNames)"function" === typeof a[d] && (this[d] = a[d], c = !0);
        this.hasEvents = c;
        "function" === typeof a.onload && (this.onload = a.onload)
    };
    d.extend(ca.prototype, {
        getAbsoluteBounds: function () {
            var a = this.bounds, b = a.x1, c = a.y1, d = a.x2, e = a.y2, g = F(b, d), h = F(c, e), b = K(b, d) - g, c = K(c, e) - h;
            return {x: g, width: b, y: h, height: c, r: a.r, unscaled: {width: b / a.xs, height: c / a.ys}}
        }, queue: function () {
            this.group.annotations.shapesToDraw.push(this)
        },
        scale: function (a) {
            var b = this, c = b.group, d = c.bounds, e = b.bounds, g = b.options, h = c.snaps, p = M(g.x, g.xpos), m = M(g.y, g.ypos), s = M(g.tox, g.toxpos), q = M(g.toy, g.toypos), l = e.xs = d.xs, d = e.ys = d.ys, t = C(g.xshift, c.xshift, 0), u = C(g.yshift, c.yshift, 0), w;
            w = function (d, e, g, h) {
                d = da(d, e, g, h, c.isBelow);
                d.hasDynamicMacros && a && (b.queueDraw = !0);
                return d.value
            };
            b.hasDimension = !0;
            b.hasDimensionX = !0;
            b.hasDimensionY = !0;
            e.x1 = w(p, l, 0, h) + t;
            void 0 === s ? (b.hasDimension = !1, b.hasDimensionX = !1, e.x2 = e.x1) : e.x2 = w(s, l, 0, h) + t;
            e.y1 = w(m, d, 0, h) + u;
            void 0 === q ? (b.hasDimension = !1, b.hasDimensionY = !1, e.y2 = e.y1) : e.y2 = w(q, d, 0, h) + u;
            ca.angularShapeTypes[b.type] && (e.angles = qa(w(g.startangle, 1, 0, h), w(g.endangle, 1, 360, h)));
            e.r = w(g.radius, c.scaleValue, 0, h)
        }, setup: function () {
            var a = this.options, b = this.group, c = b.options, d = this.attrs, e = this.style, g = b.scaleValue, h = C(c.fillalpha, c.alpha, 100), p = this.fillAlpha = M(a.fillalpha, a.alpha, h), s = this.fillColor = M(a.fillcolor, a.color, c.color), l = this.fillPattern = M(a.fillpattern && a.fillpattern.toLowerCase && a.fillpattern.toLowerCase(),
                c.fillpattern && c.fillpattern.toLowerCase && c.fillpattern.toLowerCase()), t = this.bordered = C(a.showborder, ca.borderedShapeTypes[this.type], !!Y(a.bordercolor)), w = this.borderColor = M(a.bordercolor, c.bordercolor, s), h = this.borderAlpha = C(a.borderalpha, a.alpha, c.borderalpha, h), D = this.dashed = !!C(a.dashed, 0), I = C(a.borderthickness, a.thickness, 2) * g;
            this.link = M(a.link, c.link);
            this.shadow = "1" == M(a.showshadow, c.showshadow);
            void 0 === s && (s = ca.borderedShapeTypes[this.type] && "none" || "#ff0000", void 0 === w && (w = "#ff0000"));
            t && I ? (d.stroke = q(w, h), d["stroke-linecap"] = "round", d["stroke-width"] = I, D && (d["stroke-dasharray"] = [C(a.dashlen, 5) * g, C(a.dashgap, 3) * g])) : d.stroke = "none";
            this.fillOptions = {
                gradientUnits: "objectBoundingBox",
                color: s,
                alpha: p,
                ratio: M(a.fillratio, c.fillratio),
                angle: 360 - C(a.fillangle, 0),
                radialGradient: "radial" === l
            };
            this.link && (e.cursor = "pointer", e._cursor = "hand");
            d.visibility = C(a.visible, 1) ? "" : "hidden";
            this.useTracker = b.useTracker;
            this.toolText = u(M(a.tooltext, c.tooltext));
            if (this.useTracker || this.link || this.toolText)m(this.attrsTracker,
                {stroke: z, fill: z}), this.link && (this.attrsTracker.ishot = +new Date);
            this.raiseOwnEvents = b.raiseOwnEvents
        }, draw: function () {
            var a = this.getRenderer(), b = this.type, d = this.attrs, e = this.style, g = a && a.paper, h = ca.types[b] && ca.types[b].call && ca.types[b].call(this, a), p = ca.imageShapeTypes[h], m = ca.textShapeTypes[h], s = p || m || ca.trackerShapeTypes[h], q = this.link || this.toolText, l = this.wrapper, b = this.tracker, t = a && a.layers.tracker || this.group.wrapper, u = !1, w = b || l, z = ca.eventNames, C = ca.ownEvents, D, I;
            if (a) {
                if (h) {
                    if (l)if (l.elemType !==
                        h) {
                        if (this.ownEventsAttached) {
                            for (I in C)w["un" + I].apply(l, C[I]);
                            this.ownEventsAttached = !1
                        }
                        l = l.remove()
                    } else if (this.hasEvents)for (D in z)(I = this[D]) && I.eventAttached && (N(w.node, z[D], I), I.eventAttached = !1);
                    p || (d.fill = Ba(this.fillOptions));
                    l ? l.attr(d).css(e) : (this.args.push(this.group.wrapper), l = this.wrapper = g[h].apply(g, this.args).attr(d).css(e), l.elemType = h, l.data("annotation", this), u = !0, this.args.pop());
                    !this.shadow || this.shadowAdded || p || m ? l.shadow(this.shadowAdded = !1) : l.shadow(this.shadowAdded = !0, K(this.borderAlpha, this.fillOptions.alpha) / 100);
                    q ? this.useTracker && (b || (this.args.push(t), b = this.tracker = s ? g.rect(0, 0, 0, 0, 0, t) : g[h].apply(g, this.args), this.args.pop()), b.attr(d).attr(this.attrsTracker)) : b && (b = b.remove());
                    w = b || l;
                    if (this.raiseOwnEvents && !this.ownEventsAttached) {
                        for (I in C)w[I].apply(l, C[I]);
                        this.ownEventsAttached = !0
                    }
                    this.link && w.click(a.linkClickFN, this);
                    this.toolText && (w.tooltip(this.toolText || ""), this.group.wrapper.trackTooltip(!0));
                    if (this.hasEvents)for (D in z)(I = this[D]) && !I.eventAttached &&
                    (c(w.node, z[D], I, this), I.eventAttached = !0);
                    p || (b && s && (a = l.getBBox(), b.attr({
                        x: a.x,
                        y: a.y,
                        width: a.width,
                        height: a.height
                    })), u && this.onload && this.onload(d))
                }
                return this
            }
        }, destroy: function () {
            var a = this.wrapper, b = this.tracker, c = b || a, d = ca.eventNames, e = ca.ownEvents, g, h;
            if (a) {
                if (this.ownEventsAttached) {
                    for (h in e)c["un" + h].apply(a, e[h]);
                    this.ownEventsAttached = !1
                }
                if (this.hasEvents)for (g in d)(h = this[g]) && h.eventAttached && (N(c.node, d[g], h), h.eventAttached = !1);
                b && (this.tracker = b.remove());
                this.wrapper = a.remove()
            }
            this._idstore[this._id] ===
            this && delete this._idstore[this._id]
        }, getRenderer: function () {
            return this.group && this.group.getRenderer() || null
        }
    });
    d.extend(ca, {
        imageShapeTypes: {image: !0},
        angularShapeTypes: {circle: !0, arc: !0},
        textShapeTypes: {text: !0},
        trackerShapeTypes: {image: !0, text: !0},
        borderedShapeTypes: {path: !0, line: !0},
        eventNames: {
            onmouseover: b ? "touchstart" : "mouseover",
            onmouseout: "mouseout",
            onmousemove: b ? "touchmove" : "mousemove",
            onclick: "click"
        },
        ownEvents: {
            click: [function (a) {
                ka("annotationClick", this, a)
            }], hover: [function (a) {
                ka("annotationRollOver",
                    this, a)
            }, function (a) {
                ka("annotationRollOut", this, a)
            }]
        },
        textAlignOptions: {left: "start", right: "end", center: "middle"},
        textVerticalAlignOptions: {top: "bottom", middle: "middle", bottom: "top"},
        textRotationOptions: {0: "0", 1: "270", right: "90", cw: "90", left: "270", ccw: "270"},
        types: {
            rectangle: function () {
                var a = this.args, b = this.attrs, c = this.getAbsoluteBounds(), d = .5 * c.width;
                c.r > d && (c.r = d);
                a[0] = b.x = c.x;
                a[1] = b.y = c.y;
                a[2] = b.width = c.width;
                a[3] = b.height = c.height;
                a[4] = b.r = c.r;
                return "rect"
            }, line: function () {
                var b = this.attrs,
                    c = this.bounds;
                this.args[0] = b.path = ["M", c.x1, c.y1, "L", c.x2, c.y2];
                1 === b["stroke-width"] && (b["shape-rendering"] = "crisp");
                b["stroke-width"] < a && (this.attrsTracker["stroke-width"] = a);
                this.bordered && this.dashed && (this.attrsTracker["stroke-dasharray"] = "solid");
                return "path"
            }, path: function () {
                var a = this.attrs, b = this.bounds;
                this.args[0] = a.path = this.options.path;
                a.transform = ["T", b.x1, b.y1, "S", b.xs, b.ys, b.x1, b.y1];
                1 === a["stroke-width"] && (a["shape-rendering"] = "crisp");
                return "path"
            }, polygon: function () {
                var a = this.args,
                    b = this.attrs, c = this.options, d = this.bounds, e = this.group, g = e.snaps;
                a[0] = da(c.sides, 1, 5, g, e.isBelow).value;
                a[1] = d.x1;
                a[2] = d.y1;
                a[3] = d.r;
                a[4] = da(c.startangle, 1, 0, g, e.isBelow).value;
                a[5] = 0;
                b.polypath = a.slice(0);
                return "polypath"
            }, circle: function (a) {
                var b = this.args, c = this.attrs, d = this.options, p = this.bounds, m = a.chartWidth, l = a.chartHeight, q = this.group.scaleValueComplement, t = this.group.snaps, u = p.angles, w = this.group;
                a = p.r;
                M(d.radius) || (p.r = m < l ? m * p.xs : l * p.ys, p.r = a = .3 * p.r);
                d = da(d.yradius, q, a, t, w.isBelow).value;
                this.fillPattern || (this.fillOptions.radialGradient = !0, this.fillPattern = "radial");
                "radial" === this.fillPattern && (this.fillOptions.cx = this.fillOptions.cy = .5);
                m = u.angle % 360;
                if (!m && a === d)return b[0] = c.cx = p.x1, b[1] = c.cy = p.y1, b[2] = c.r = p.r, "circle";
                m || (u.start -= .001);
                l = u.start * h;
                m = u.end * h;
                u = u.angle * h;
                q = p.x1;
                t = p.y1;
                p = q + g(l) * a;
                l = t + s(l) * d;
                q += g(m) * a;
                m = t + s(m) * d;
                b[0] = c.path = ["M", p, l, "A", a, d, 0, 0, u >= e ? 0 : 1, q, m, "Z"];
                return "path"
            }, arc: function (a) {
                var b = this.options, c = this.args, d = this.attrs, e = this.bounds, g = a.chartWidth;
                a = a.chartHeight;
                var p = this.group, m = p.scaleValue, s = e.angles;
                M(b.radius) || (e.r = g < a ? g * e.xs : a * e.ys, e.r *= .3);
                e.innerR = da(b.innerradius, m, .8 * e.r, this.group.snaps, p.isBelow).value;
                e.innerR > e.r && (e.innerR += e.r, e.r = e.innerR - e.r, e.innerR -= e.r);
                this.fillPattern || (this.fillOptions.radialGradient = !0, this.fillPattern = "radial");
                "radial" === this.fillPattern && (this.fillOptions.cx = this.fillOptions.cy = .5);
                c[0] = e.x1;
                c[1] = e.y1;
                c[2] = e.r;
                c[3] = e.innerR;
                c[4] = s.start * h;
                c[5] = s.end * h;
                d.ringpath = c.slice(0);
                return "ringpath"
            }, text: function (a) {
                var b =
                    this.args, c = this.style, d = this.attrs, e = this.group, g = this.bounds, h = this.options, p = this.getAbsoluteBounds(), s = M(h.align, e.options.textalign, "center").toLowerCase(), l = M(h.valign, e.options.textvalign, "middle").toLowerCase(), q = u(M(h.text, h.label)), w = a.logic.smartLabel, z = C(h.wrap, e.options.wraptext, 1), D, I, F = M(h.rotatetext, e.options.rotatetext, "0").toLowerCase(), F = ca.textRotationOptions[F], N = "0" !== F ? "y" : "x", K = a.options.orphanStyles;
                a = m({}, K.defaultStyle.style || {});
                K = e.id && K[e.id.toLowerCase()] || ia;
                a = m(a,
                    K.style);
                var K = parseFloat(a.fontSize), Y = M(h.font, e.options.font, a.fontFamily), e = C(h.fontsize, e.options.fontsize, K) * e.scaleText;
                z && (D = C(h.wrapwidth, this.hasDimensionX ? p.width / g.xs : void 0), I = C(h.wrapheight, this.hasDimensionY ? p.height / g.ys : void 0), D && (D *= g.xs), I && (I *= g.ys));
                c.fontFamily = Y;
                c.fontWeight = C(h.bold, h.isbold, 0) ? "bold" : "normal";
                C(h.italic, h.isitalic, 0) && (c.fontStyle = "italic");
                h.bgcolor && (!d["text-bound"] && (d["text-bound"] = []), d["text-bound"][0] = t(h.bgcolor));
                h.bordercolor && (!d["text-bound"] &&
                (d["text-bound"] = []), d["text-bound"][1] = t(h.bordercolor), d["text-bound"][2] = C(h.borderthickness, 1), d["text-bound"][3] = C(h.padding, 1));
                h.fontcolor && (d.fill = t(h.fontcolor), this.fillOptions && (this.fillOptions.color = d.fill));
                c.fontSize = e + "px";
                e === K ? c.lineHeight = a.lineHeight : V(c);
                d["text-anchor"] = ca.textAlignOptions[s] || ca.textAlignOptions.center;
                w.setStyle(c);
                c = w.getSmartText(q, D, I, !1);
                d["vertical-align"] = ca.textVerticalAlignOptions[l] || ca.textVerticalAlignOptions.middle;
                d["text-anchor"] === ca.textAlignOptions.left ?
                    p[N] += C(h.leftmargin, 0) : d["text-anchor"] === ca.textAlignOptions.center && (p[N] += .5 * C(h.leftmargin, 0));
                "0" !== F && (d.rotation = [parseFloat(F), p.x, p.y]);
                b[0] = d.x = p.x;
                b[1] = d.y = p.y;
                b[2] = d.text = c.text;
                c.tooltext && (d.title = c.tooltext);
                delete d.stroke;
                delete d["stroke-weight"];
                return "text"
            }, image: function (a) {
                var b = this, c = b.style, d = a.chartWidth, e = a.chartHeight;
                a = b.options;
                var g = b.attrs, h = b.args, p = Y(a.url), s = b.group.scaleImageX * M(Number(a.xscale), 100) / 100, l = b.group.scaleImageY * M(Number(a.yscale), 100) / 100, q = b.getAbsoluteBounds(),
                    t = {width: 1, height: 1}, u;
                if (!p)return h[0] = g.x = q.x, h[1] = g.y = q.y, h[2] = g.width = q.width, h[3] = g.height = q.height, h[4] = g.r = q.r, "rect";
                u = new w.Image;
                u.onload = function () {
                    t = ea("none", "top", "left", 100, 0, d, e, u);
                    delete t.x;
                    delete t.y;
                    t = m(t, {
                        width: (b.hasDimensionX ? q.unscaled.width : t.width) * s,
                        height: (b.hasDimensionY ? q.unscaled.height : t.height) * l
                    });
                    setTimeout(function () {
                        var a, d, e;
                        if (a = b.wrapper) {
                            a.attr(t);
                            if (d = b.tracker)e = a.getBBox(), d.attr({
                                x: e.x,
                                y: e.y,
                                width: e.width,
                                height: e.height
                            });
                            a.css({
                                opacity: c.opacity = K(C(b.fillAlpha,
                                        b.borderAlpha), b.borderAlpha) / 100
                            })
                        }
                        b.onload && b.onload(t)
                    }, 0)
                };
                u.src = p;
                h[0] = g.src = p;
                h[1] = g.x = q.x;
                h[2] = g.y = q.y;
                h[3] = g.width = (b.hasDimensionX ? q.unscaled.width : t.width) * s;
                h[4] = g.height = (b.hasDimensionY ? q.unscaled.height : t.height) * l;
                c.opacity = K(C(b.fillAlpha, b.borderAlpha), b.borderAlpha) / 100;
                delete g.stroke;
                delete g.fill;
                delete g["stroke-linecap"];
                return "image"
            }
        }
    });
    aa = function () {
        this.groups = [];
        this._idstore = {};
        this._options = {}
    };
    D.Annotations = aa;
    d.extend(aa.prototype, {
        reset: function (a, b, c) {
            var d = this.groups,
                e;
            this.clear();
            if (c) {
                e = {};
                for (var g in c)switch (typeof c[g]) {
                    case "object":
                    case "function":
                        e["-$" + g] = e["$" + g] = e["+$" + g] = c[g];
                        break;
                    default:
                        e["$" + g] = e["+$" + g] = c[g], e["-$" + g] = -1 * c[g]
                }
                e = this._literals = e
            }
            b && (this._options = b);
            if (a && a.groups && d)for (c = 0; c < a.groups.length; c += 1)d.push(new Z(a.groups[c], b, e, this._idstore, this))
        }, getRenderer: function () {
            return this._renderer
        }, addGroup: function (a) {
            var b = this.getRenderer();
            this.groups.push(a = new Z(a, this._options, this._literals, this._idstore, this));
            b && (a.setup(),
                a.scale(), a.draw());
            return a
        }, addItem: function (a, b, c) {
            var e, g = this.getRenderer();
            "string" === typeof a ? e = this._idstore[a] : (c = b, b = a);
            if (e && e.addItem) {
                if (!g && c) {
                    d.raiseWarning(this, "04031411430", "run", "Annotations~addItem()", "Cannot draw the shapeif the group has not been drawn. Use Annotations~draw() to draw the group and pass the renderer to it.");
                    return
                }
                a = e.addItem(b, c)
            } else a = this.addGroup({}).addItem(b, c);
            return a
        }, draw: function (a) {
            var b = this.groups, c, d;
            if (b && (this._renderer = a || this._renderer))for (c =
                                                                     0, d = b.length; c < d; c++)a = b[c], a.setup(), a.scale(), a.draw()
        }, clear: function () {
            var a = this.groups, b;
            if (a) {
                for (; b = a.shift();)b.destroy();
                this.shapesToDraw = []
            }
        }, dispose: function () {
            var a;
            this.disposing = !0;
            this.clear();
            for (a in this)delete this[a];
            this.disposed = !0
        }, hide: function (a) {
            if (a = this._idstore[a])return a.attrs.visibility = "hidden", a.wrapper && a.wrapper.hide(), a
        }, show: function (a) {
            if (a = this._idstore[a])return a.attrs.visibility = "", a.wrapper && a.wrapper.show(), a
        }, update: function (a, b, c) {
            a = this._idstore[a];
            var d;
            if (a && b) {
                if ("object" === typeof b)for (d in b.id && delete b.id, b.type && delete b.type, b)a.options[(d + "").toLowerCase()] = b[d] + ""; else a.options[(b + "").toLowerCase()] = c + "";
                a.wrapper && (a.scale(), a.setup(), a.draw());
                return a
            }
        }, destroy: function (a) {
            var b = this._idstore[a], c = b.group;
            b && "function" === typeof b.destroy && (c && c.removeItem(a), b.destroy())
        }, shapesToDraw: []
    });
    d.core.addEventListener("beforeinitialize", function (a) {
        "javascript" === a.sender.options.renderer && (a.sender.annotations = new aa)
    });
    d.core.addEventListener("disposed",
        function (a) {
            a.sender.annotations && a.sender.annotations.dispose()
        });
    d.addEventListener("internal.animationComplete", function (a) {
        var b = (a = a.sender.annotations) && a.shapesToDraw, c = b && b.length, d, e;
        if (c) {
            for (e = 0; e < c; e++)d = b[e], d.queueDraw = !1, d.scale(), d.setup(), d.draw();
            a.shapesToDraw = []
        }
    });
    l.addEventListener("rendered", function (a, b) {
        if ("javascript" === b.renderer) {
            var c = a.sender, d = c.jsVars || {}, e = d.instanceAPI;
            d.hcObj && e && e.drawAnnotations ? (c.showAnnotation || (c.showAnnotation = function () {
                c.annotations.show.apply(c.annotations,
                    arguments)
            }), c.hideAnnotation || (c.hideAnnotation = function () {
                c.annotations.hide.apply(c.annotations, arguments)
            })) : (delete c.showAnnotation, delete c.hideAnnotation)
        }
    })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-base", function () {
    var d = this, l = d.hcLib, D = d.window, w = D.document, p = l.BLANKSTRING, c = l.createTrendLine, N = "https:" === D.location.protocol ? "https://export.api3.fusioncharts.com/" : "http://export.api3.fusioncharts.com/", b = l.pluck, I = l.getValidValue, a = l.pluckNumber, z = l.getFirstValue, F = l.getDefinedColor, K = l.parseUnsafeString, s = l.FC_CONFIG_STRING, g = l.extend2, e = l.getDashStyle, h = l.parseTooltext, m = l.toPrecision, M = l.regex.dropHash, C = l.HASHSTRING, q = l.getSentenceCase,
        Y = l.addEvent, u = D.Math, ea = l.TOUCH_THRESHOLD_PIXELS, t = l.CLICK_THRESHOLD_PIXELS, V = u.min, X = u.max, ia = u.abs, Ba = u.ceil, qa = u.floor, da = u.log, ka = u.pow, aa = u.round, Z = l.graphics.getColumnColor, ca = l.getFirstColor, S = l.setLineHeight, G = l.pluckFontSize, fa = l.getFirstAlpha, n = l.graphics.getDarkColor, E = l.graphics.getLightColor, L = l.graphics.convertColor, T = l.COLOR_TRANSPARENT, Ha = l.POSITION_CENTER, Ja = l.POSITION_TOP, Ca = l.POSITION_BOTTOM, ma = l.POSITION_RIGHT, Da = l.POSITION_LEFT, Ga = l.parsexAxisStyles, U = l.chartAPI, ra = l.graphics.mapSymbolName,
        za = U.singleseries, Na = U.multiseries, Ea = l.COMMASTRING, Za = l.STRINGUNDEFINED, xa = l.ZEROSTRING, lb = l.ONESTRING, Aa = l.HUNDREDSTRING, La = l.PXSTRING, nb = l.COMMASPACE, Hb = D.navigator.userAgent.match(/(iPad|iPhone|iPod)/g), ub = !/fusioncharts\.com$/i.test(D.location.hostname), Qb = {
            left: "start",
            right: "end",
            center: "middle"
        }, xb = l.BLANKSTRINGPLACEHOLDER, Ua = l.BGRATIOSTRING, eb = l.COLOR_WHITE, cb = l.TESTSTR, k = l.graphics.getAngle, J = l.axisLabelAdder, B = l.falseFN, P = l.NumberFormatter, R = l.getLinkAction, ga = l.getAxisLimits, $ = l.createDialog,
        sa = function (a, b) {
            return 0 < a ? da(a) / da(b || 10) : null
        }, ha = l.hasTouch = void 0 !== w.documentElement.ontouchstart, na = l.fireEvent = function (a, b, c, d) {
            l.dem.fire(a, b, c, d)
        }, Qa = {1: "bold", 0: "normal"}, pa = {1: "italic", 0: "normal"}, O = {1: "underline", 0: "none"}, za = {
            font: function (a, b) {
                b.style.fontFamily = a
            }, size: function (a, b) {
                a && (b.style.fontSize = G(a) + La)
            }, color: function (a, b, c) {
                b.style.color = a && a.replace && a.replace(M, C) || p;
                c && (b.color = b.style.color)
            }, bgcolor: function (a, b) {
                b.style.backgroundColor = a && a.replace && a.replace(M, C) ||
                    p
            }, bordercolor: function (a, b) {
                b.style.border = "1px solid";
                b.style.borderColor = a && a.replace && a.replace(M, C) || p
            }, ishtml: p, leftmargin: function (b, c) {
                c.style.marginLeft = a(b, 0) + La
            }, letterspacing: function (b, c) {
                c.style.letterSpacing = a(b, 0) + La
            }, bold: function (a, b) {
                b.style.fontWeight = Qa[a] || ""
            }, italic: function (a, b) {
                b.style.fontStyle = pa[a] || ""
            }, underline: function (a, b) {
                b.style.textDecoration = O[a] || ""
            }
        }, tb = l.chartPaletteStr = {
            chart2D: {
                bgColor: "bgColor",
                bgAlpha: "bgAlpha",
                bgAngle: "bgAngle",
                bgRatio: "bgRatio",
                canvasBgColor: "canvasBgColor",
                canvasBaseColor: "canvasBaseColor",
                divLineColor: "divLineColor",
                legendBgColor: "legendBgColor",
                legendBorderColor: "legendBorderColor",
                toolTipbgColor: "toolTipbgColor",
                toolTipBorderColor: "toolTipBorderColor",
                baseFontColor: "baseFontColor",
                anchorBgColor: "anchorBgColor"
            }, chart3D: {
                bgColor: "bgColor3D",
                bgAlpha: "bgAlpha3D",
                bgAngle: "bgAngle3D",
                bgRatio: "bgRatio3D",
                canvasBgColor: "canvasBgColor3D",
                canvasBaseColor: "canvasBaseColor3D",
                divLineColor: "divLineColor3D",
                divLineAlpha: "divLineAlpha3D",
                legendBgColor: "legendBgColor3D",
                legendBorderColor: "legendBorderColor3D",
                toolTipbgColor: "toolTipbgColor3D",
                toolTipBorderColor: "toolTipBorderColor3D",
                baseFontColor: "baseFontColor3D",
                anchorBgColor: "anchorBgColor3D"
            }
        }, bb = function () {
            var a = {}, b, c = function () {
                var e, f, k, g, h = 0, B, p, m = parseInt(d.core.options.resizeTrackingInterval, 10) || 300, s;
                for (e in a)h += 1, f = a[e], k = f.jsVars, B = f.ref, !f.disposed && (g = B && B.parentNode) && (p = B.style) && (/\%/g.test(p.width) || /\%/g.test(p.height)) ? (B = g.offsetWidth, s = g.offsetHeight, !k.resizeLocked && (B && k._containerOffsetW !==
                B || s && k._containerOffsetH !== s) && (f.resizeTo && f.resizeTo(), k._containerOffsetW = B, k._containerOffsetH = s)) : (delete a[e], h -= 1);
                b = h ? setTimeout(c, m) : clearTimeout(b)
            };
            return function (e, f) {
                var k = e.jsVars, g = f || e.ref && e.ref.parentNode || {};
                k._containerOffsetW = g.parentNode.offsetWidth;
                k._containerOffsetH = g.parentNode.offsetHeight;
                a[e.id] = e;
                b || (b = setTimeout(c, parseInt(d.core.options.resizeTrackingInterval, 10) || 300))
            }
        }(), wa = {
            getExternalInterfaceMethods: function () {
                var a = U[this.jsVars.type], a = a && a.eiMethods, b = "saveAsImage,print,exportChart,getXML,hasRendered,signature,cancelExport,getSVGString,lockResize,showChartMessage,",
                    c;
                if ("string" === typeof a)b += a + Ea; else if (void 0 !== a || null !== a)for (c in a)b += c + Ea;
                return b.substr(0, b.length - 1)
            }, drawOverlayButton: function (a) {
                var b = this.jsVars, c = b.overlayButton, e, f;
                if (a && a.show) {
                    c || (c = b.overlayButton = w.createElement("span"), l.dem.listen(c, "click", function () {
                        d.raiseEvent("OverlayButtonClick", a, b.fcObj)
                    }));
                    for (e = a.message ? a.message : "Back"; c.firstChild;)c.removeChild(c.firstChild);
                    c.appendChild(w.createTextNode(e));
                    b.overlayButtonMessage = e;
                    e = {
                        border: "1px solid " + (a.borderColor ? a.borderColor.replace(M,
                            C) : "#7f8975"),
                        backgroundColor: a.bgColor ? a.bgColor.replace(M, C) : "#edefec",
                        fontFamily: a.font ? a.font : "Verdana,sans",
                        color: "#" + a.fontColor ? a.fontColor : "49563a",
                        fontSize: (a.fontSize ? a.fontSize : "10") + La,
                        padding: (a.padding ? a.padding : "3") + La,
                        fontWeight: 0 === parseInt(a.bold, 10) ? "normal" : "bold",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        _cursor: "hand",
                        cursor: "pointer"
                    };
                    for (f in e)c.style[f] = e[f];
                    b.hcObj.container.appendChild(c);
                    b.overlayButtonActive = !0
                } else c && (b.overlayButton = c.parentNode.removeChild(c), b.overlayButtonActive = !1, delete b.overlayButtonMessage)
            }, print: function (a) {
                return this.jsVars.hcObj && this.jsVars.hcObj.hasRendered && this.jsVars.hcObj.print(a)
            }, exportChart: function (a) {
                var b = this.jsVars.hcObj;
                return b && b.options && b.options.exporting && b.options.exporting.enabled ? b.exportChart(a) : !1
            }, getSVGString: function () {
                return this.jsVars && this.jsVars.hcObj && this.jsVars.hcObj.paper && this.jsVars.hcObj.paper.toSVG()
            }, resize: function () {
                var a = this.jsVars, b = a.container, c = a.hcObj;
                c && (c && c.destroy && c.destroy(), l.createChart(a.fcObj,
                    b, a.type, void 0, void 0, !1, !0), delete a.isResizing)
            }, lockResize: function (a) {
                return "boolean" !== typeof a ? !!this.jsVars.resizeLocked : this.jsVars.resizeLocked = a
            }, showChartMessage: function (a, b, c) {
                var d = this.jsVars, f = d.hcObj, e = d.fcObj, k = e.options;
                d.msgStore[a] && (a = d.msgStore[a]);
                b && f && f.hasRendered ? a ? f.showMessage(a, c) : f.hideLoading() : (f && f.destroy && f.destroy(), e._chartMessageStyle = {
                    color: k.baseChartMessageColor,
                    fontFamily: k.baseChartMessageFont,
                    fontSize: k.baseChartMessageFontSize
                }, l.createChart(d.fcObj,
                    d.container, d.type, void 0, a));
                return a
            }, signature: function () {
                return "FusionCharts/3.4.0 (XT)"
            }
        }, Fa = l.HCstub = function (b, c, d, e) {
            b = b.chart;
            var f = a(b.showborder, 1) ? a(b.borderthickness, 1) : 0, k = a(b.charttopmargin, e.charttopmargin, 15) + f, g = a(b.chartrightmargin, e.chartrightmargin, 15) + f, h = a(b.chartbottommargin, e.chartbottommargin, 15) + f, f = a(b.chartleftmargin, e.chartleftmargin, 15) + f, m = k + h, s = f + g;
            d *= .7;
            c *= .7;
            m > d && (k -= (m - d) * k / m, h -= (m - d) * h / m);
            s > c && (f -= (s - c) * f / s, g -= (s - c) * g / s);
            c = {
                _FCconf: {
                    0: {stack: {}},
                    1: {stack: {}},
                    x: {stack: {}},
                    oriCatTmp: [],
                    noWrap: !1,
                    marginLeftExtraSpace: 0,
                    marginRightExtraSpace: 0,
                    marginBottomExtraSpace: 0,
                    marginTopExtraSpace: 0,
                    marimekkoTotal: 0
                },
                chart: {
                    alignTicks: !1,
                    ignoreHiddenSeries: !1,
                    events: {},
                    reflow: !1,
                    spacingTop: k,
                    spacingRight: g,
                    spacingBottom: h,
                    spacingLeft: f,
                    marginTop: k,
                    marginRight: g,
                    marginBottom: h,
                    marginLeft: f,
                    borderRadius: 0,
                    plotBackgroundColor: "#FFFFFF",
                    style: {},
                    animation: a(b.defaultanimation, b.animation, 1) ? {duration: 500 * a(b.animationduration, 1)} : !1
                },
                colors: "AFD8F8 F6BD0F 8BBA00 FF8E46 008E8E D64646 8E468E 588526 B3AA00 008ED6 9D080D A186BE CC6600 FDC689 ABA000 F26D7D FFF200 0054A6 F7941C CC3300 006600 663300 6DCFF6".split(" "),
                credits: {href: l.CREDIT_HREF, text: l.CREDIT_STRING, enabled: ub},
                global: {},
                labels: {items: []},
                lang: {},
                legend: {
                    enabled: !0,
                    symbolWidth: 12,
                    borderRadius: 1,
                    backgroundColor: "#FFFFFF",
                    initialItemX: 0,
                    title: {text: p, x: 0, y: 0, padding: 2},
                    scroll: {},
                    itemStyle: {}
                },
                loading: {},
                plotOptions: {
                    series: {
                        pointPadding: 0,
                        borderColor: "#333333",
                        events: {},
                        animation: a(b.animation, b.defaultanimation, 1) ? {duration: 1E3 * a(b.animationduration, 1)} : !1,
                        states: {hover: {enabled: !1}, select: {enabled: !1}},
                        dataLabels: {
                            enabled: !0, color: "#555555", style: {},
                            formatter: function () {
                                return this.point.showPercentValues ? e.numberFormatter.percentValue(this.percentage) : this.point.displayValue
                            }
                        },
                        point: {events: {}}
                    },
                    area: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    radar: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    areaspline: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    line: {
                        shadow: !0,
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    scatter: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    bubble: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    spline: {
                        states: {hover: {enabled: !1}},
                        marker: {lineWidth: 1, radius: 3, states: {hover: {enabled: !1}, select: {enabled: !1}}}
                    },
                    pie: {
                        size: "80%", allowPointSelect: !0, cursor: "pointer",
                        point: {
                            events: {
                                legendItemClick: b.interactivelegend === xa ? B : function () {
                                    this.slice()
                                }
                            }
                        }
                    },
                    pie3d: {
                        size: "80%",
                        allowPointSelect: !0,
                        cursor: "pointer",
                        point: {
                            events: {
                                legendItemClick: b.interactivelegend === xa ? B : function () {
                                    this.slice()
                                }
                            }
                        }
                    },
                    column: {},
                    floatedcolumn: {},
                    column3d: {},
                    bar: {},
                    bar3d: {}
                },
                point: {},
                series: [],
                subtitle: {text: p, style: {}},
                symbols: [],
                title: {text: p, style: {}},
                toolbar: {},
                tooltip: {style: {}},
                xAxis: {
                    steppedLabels: {style: {}},
                    labels: {x: 0, style: {}, enabled: !1},
                    lineWidth: 0,
                    plotLines: [],
                    plotBands: [],
                    title: {
                        style: {},
                        text: p
                    },
                    tickWidth: 0,
                    scroll: {enabled: !1}
                },
                yAxis: [{
                    startOnTick: !1,
                    endOnTick: !1,
                    title: {style: {}, text: p},
                    tickLength: 0,
                    labels: {x: 0, style: {}},
                    plotBands: [],
                    plotLines: []
                }, {
                    tickLength: 0,
                    gridLineWidth: 0,
                    startOnTick: !1,
                    endOnTick: !1,
                    title: {style: {}, text: p},
                    labels: {
                        x: 0, style: {}, enabled: !1, formatter: function () {
                            return this.value !== xb ? this.value : p
                        }
                    },
                    opposite: !0,
                    plotBands: [],
                    plotLines: []
                }],
                exporting: {buttons: {exportButton: {}, printButton: {enabled: !1}}}
            };
            b.palettecolors && "string" === typeof b.palettecolors && (c.colors =
                b.palettecolors.split(/\s*\,\s*/));
            return e.hcJSON = c
        }, Lb = l.placeVerticalAxis = function (b, c, d, e, f, k, g, h, B, m) {
            var l = d[s], q = l.smartLabel, J, n, t, P, u = 0, R = l.marginRightExtraSpace, w = l.marginLeftExtraSpace, z = {}, ga = {}, $ = {}, C = b.plotLines, ha = b.plotBands, l = c.verticalAxisValuesPadding, D = isNaN(c.fixedValuesPadding) ? 0 : c.fixedValuesPadding, sa = l - D, pa = c.verticalAxisValuesPadding, na = c.verticalAxisNamePadding, M = c.verticalAxisNameWidth, F = c.rotateVerticalAxisName && String(c.rotateVerticalAxisName).toLowerCase(), Qa = "none" !==
                F, N = b.offset ? b.offset : 0, Fa = 0, L = 0, E = 0, K = 0, O = 0, G = 0, Y = 0, la, bb, wa, V, l = 2, Y = g ? R + 5 : w + 4, tb = X(a(d.chart.plotBorderWidth, 1), 0), S = b.showLine ? b.lineThickness : tb, Lb = function (a, b) {
                var f, d;
                a && a.label && void 0 !== I(a.label.text) && (wa = a.label, wa.style && wa.style !== bb && (bb = wa.style, q.setStyle(bb)), J = q.getOriSize(a.label.text), d = (f = J.width) ? f + 2 : 0, a.isGrid ? (z[b] = {
                    width: f,
                    height: J.height,
                    label: wa
                }, K <= d && (K = d, c.lYLblIdx = b)) : a.isTrend && (g && wa.textAlign === Da || wa.textAlign === ma ? (ga[b] = {
                    width: f,
                    height: J.height,
                    label: wa
                }, O = X(O,
                    d)) : ($[b] = {width: f, height: J.height, label: wa}, G = X(G, d))))
            }, wb = function (a, c) {
                var d, e = c ? u : u + a;
                d = b.title.style;
                n = n || {};
                if (0 < e)return Qa ? (e < n.height && (q.setStyle(d), n = q.getSmartText(b.title.text, f, e)), d = n.height) : (e < n.width && (q.setStyle(d), n = q.getSmartText(b.title.text, e, f)), d = n.width), b.title._actualWidth = d, b.title.text = n.text, n.tooltext && (b.title.originalText = n.tooltext), c ? e - d + a : e - d;
                b.title.text = p;
                return 0
            }, ja = function (a, b, c) {
                for (var f in a)a[f].label.x = b, a[f].label.y = c
            }, E = 0;
            for (la = ha.length; E < la; E +=
                1)Lb(ha[E], E);
            E = 0;
            for (la = C.length; E < la; E += 1)Lb(C[E], E);
            b.title && b.title.text != p && (bb = b.title.style, q.setStyle(bb), t = q.getOriSize(cb).height, b.title._originalText = b.title.text, Qa ? (b.title.rotation = "cw" === F ? 90 : 270, n = q.getSmartText(b.title.text, f, k), u = n.height, P = t) : (b.title.rotation = 0, n = q.getSmartText(b.title.text, void 0 !== M ? M : k, f), u = n.width, P = 20));
            0 < G && (L = G + pa);
            B && (e = a(e.chart.maxlabelwidthpercent, 0), 1 <= e && 100 >= e && (B = e * B / 100, K > B && (K = B)));
            Fa = X(O, K);
            Fa += Fa ? sa + D : 0;
            0 < u && (Fa += u + na + Y);
            (function () {
                if (L + Fa >
                    k) {
                    V = L + Fa - k;
                    if (L) {
                        if (pa >= V) {
                            pa -= V;
                            return
                        }
                        V -= pa;
                        pa = 0
                    }
                    if (sa + na >= V)na >= V ? na -= V : (sa -= V - na, na = 0); else {
                        V -= sa + na;
                        na = sa = 0;
                        if (20 < G)if (O > K) {
                            if (G - O >= V) {
                                G -= V;
                                return
                            }
                            if (O - G >= V) {
                                O -= V;
                                return
                            }
                            O > G ? (V -= O - G, O = G) : (V -= G - O, G = O);
                            if (2 * (O - K) >= V) {
                                G -= V / 2;
                                O -= V / 2;
                                return
                            }
                            V -= 2 * (O - K);
                            G = O = K
                        } else {
                            if (G - 20 >= V) {
                                G -= V;
                                return
                            }
                            V -= G - 20;
                            G = 20
                        }
                        if (O > K) {
                            if (O - K >= V) {
                                O -= V;
                                return
                            }
                            V -= O - K;
                            O = K
                        }
                        u - P >= V ? u -= V : (V -= u - P, u = P, G >= V ? G = 0 : (V -= G, G = 0, u >= V ? u = 0 : (V -= u, u = 0, K >= V && (O = K -= V))))
                    }
                }
            })();
            E = function (a, b) {
                var c, d = 0, r = b ? G - 2 : G + a - 2, e;
                if (0 < G) {
                    for (e in $)wa = $[e].label,
                        $[e].width > r ? (wa.style && wa.style !== bb && (bb = wa.style, q.setStyle(bb)), c = q.getSmartText(wa.text, r, f, !0), wa.text = c.text, c.tooltext && (wa.originalText = c.tooltext), $[e].height = c.height, d = X(d, c.width)) : d = X(d, $[e].width);
                    return b ? r - d + a : r - d
                }
                for (e in $)$[e].label.text = p;
                return 0
            }(0, !0);
            E = wb(E, !0);
            E = function (a) {
                var b = 0, c = X(K, O) + a - 2, d;
                if (0 < c) {
                    for (d in z)wa = z[d].label, z[d].width > c ? (wa.style && wa.style !== bb && (bb = wa.style, q.setStyle(bb)), a = q.getSmartText(wa.text, c, f, !0), wa.text = a.text, a.tooltext && (wa.originalText =
                        a.tooltext), z[d].height = a.height, b = X(b, a.width)) : b = X(b, z[d].width);
                    for (d in ga)wa = ga[d].label, ga[d].width > c ? (wa.style && wa.style !== bb && (bb = wa.style, q.setStyle(bb)), a = q.getSmartText(wa.text, c, f, !0), wa.text = a.text, a.tooltext && (wa.originalText = a.tooltext), ga[d].height = a.height, b = X(b, a.width)) : b = X(b, ga[d].width);
                    return c - b
                }
                for (d in z)z[d].label.text = p;
                for (d in ga)ga[d].label.text = p;
                return 0
            }(E);
            E = wb(E);
            B = c.verticalAxisNamePadding - na;
            E && B && (E > B ? (na += B, E -= B) : (na += E, E = 0));
            B = c.verticalAxisValuesPadding - (sa +
                D);
            E && B && (E > B ? (sa += B, E -= B) : (sa += E, E = 0));
            B = c.verticalAxisValuesPadding - pa;
            E && B && (E > B ? (pa += B, E -= B) : (pa += E, E = 0));
            0 < G && (L = G + pa);
            Fa = X(O, K);
            Fa += Fa ? sa + D : 0;
            0 < u && (Fa += u + na + Y);
            B = X(O, K);
            B += 0 < B ? sa + D : 0;
            0 < u ? (Qa ? u < n.height && (n = q.getSmartText(b.title.text, f, u)) : (u < n.width && (n = q.getSmartText(b.title.text, u, f)), b.title.y = -((n.height - t) / 2)), b.title.text = n.text, n.tooltext && (b.title.originalText = n.tooltext), b.title.margin = B + na + Y + (Qa ? u - t : u / 2)) : b.title.text = p;
            t = -(sa + D + N + w + 2);
            R = R + pa + N + 2;
            Y = X(O, K);
            b.labels.style && (l = .35 * parseInt(b.labels.style.fontSize,
                    10));
            g ? (0 < G && ja($, t, l), 0 < Y && (ja(z, R, l), ja(ga, R, l))) : (0 < G && ja($, R, l), 0 < Y && (ja(z, t, l), ja(ga, t, l)));
            b.labels._textY = l;
            b.labels._righttX = R;
            b.labels._leftX = t;
            Fa = Fa || S;
            L = L || (h ? 0 : tb);
            m ? (d.chart.marginLeft += g ? L : Fa - m, d.chart.marginRight += g ? Fa - m : L) : (d.chart.marginLeft += g ? L : Fa, d.chart.marginRight += g ? Fa : L);
            return L + Fa
        }, Na = l.titleSpaceManager = function (b, c, d, e) {
            var f = this.snapLiterals || (this.snapLiterals = {}), k = c.chart, g = K(k.caption);
            c = K(k.subcaption);
            var h = k = a(k.captionpadding, 10), B = b[s], m = this.smartLabel || B.smartLabel,
                q = !1, l = 0, J, n, t = 0, P = 0, u = 0, R = 0, w = b.title, z = b.subtitle, ga = X(a(b.chart.plotBorderWidth, 1), 0), $ = 0, C = 0;
            if (3 < e) {
                k < ga && (k = ga + 2);
                g !== p && (J = w.style, u = Ba(a(parseFloat(J.fontHeight, 10), parseFloat(J.lineHeight, 10), 12)));
                c !== p && (n = z.style, R = a(parseInt(n.fontHeight, 10), parseInt(n.lineHeight, 10), 12));
                if (0 < u || 0 < R)e = X(e, 0), l = u + R + k, l > e ? (t = e - l, q = !0, t < k ? k = X(t, 5) : (t -= k, k = 0, R > t ? (P = R - t + 10, R = 0, z._originalText = z.text, z.text = "") : (t -= R, R = 0, u > t && (P = u - t)))) : P = e - l, 0 < u && (m.setStyle(J), u += P, e = m.getSmartText(g, d, u), P = u - e.height, w.height =
                    u = e.height, w.text = e.text, e.tooltext && (w.originalText = e.tooltext), $ = e.width), 0 < R && (m.setStyle(n), R += P, d = m.getSmartText(c, d, R), P = R - d.height, R = d.height, z.text = d.text, z.height = d.height, d.tooltext && (z.originalText = d.tooltext), C = d.width), q && 0 < P && (k += V(h - k, P)), l = u + R + k;
                l = l || ga;
                w.isOnTop ? (f.captionstarty = b.chart.marginTop, b.chart.marginTop += l) : (b.chart.marginBottom += l, f.captionstarty = w.y = B.height - b.chart.marginBottom + k, b.chart.marginTop += 5, l += 5);
                w._captionWidth = $;
                z._subCaptionWidth = C;
                w._lineHeight = u;
                z._lineHeight =
                    R
            } else z && (z.text = ""), w && (w.text = "");
            return l
        }, yb = l.stepYAxisNames = function (a, b, c, d, f, e) {
            var k = 0, g = d.plotLines, h = [], B, m = d.plotLines.length;
            b = b[s].smartLabel;
            for (var l = parseFloat(G(c.basefontsize, 10)), q; k < m; k += 1)c = g[k], c.isGrid && c.label && c.label.text && (h.push(c), 0 === c.value && (B = h.length - 1));
            if (m = h.length)if (d.labels.style ? b.setStyle(d.labels.style) : h[0].label && h[0].label.style && b.setStyle(d.labels.style), k = b.getOriSize("W").height, e || (k += .4 * l), a /= m - 1, a < k) {
                e = X(1, Ba(k / a));
                for (k = a = B; k < m; k += 1)c = h[k], k ===
                f && ((k - a) % e && q && (q.label.text = ""), a = f), c && c.label && ((k - a) % e ? c.label.text = p : q = c);
                for (k = a = B; 0 <= k; k -= 1)c = h[k], k === f && ((a - k) % e && q && (q.label.text = ""), a = f), c && c.label && ((a - k) % e ? c.label.text = p : q = c)
            }
        }, ja = l.placeHorizontalAxis = function (b, c, d, e, f, k, g) {
            var h = d[s], B = e && e.chart || {}, m, l, q, J, n, t, P, u, R, w, z, ga, $ = 0, C = 0, ha = 10, D = 1, sa = 0, pa = 0, na = 0, Fa = 0, M = !1, E = !1, F = !1, Qa = a(B.labelstep, 0), N = a(B.xaxisminlabelwidth, 0), O = a(B.maxlabelheight, k), L = c.labelDisplay, G = c.rotateLabels, K = c.horizontalLabelPadding, wa = h.marginBottomExtraSpace,
                Y = d.chart.marginLeft, bb = d.chart.marginRight, la = h.smartLabel, tb = h.plotBorderThickness, S = c.catCount, Lb = c.slantLabels, ja = f / (b.max - b.min), wb = 0, Ya = 0, yb = 0, zb = 0, T = e && e.chart || {}, $b = 1E3 * a(T.updateinterval, T.refreshinterval), U = T.datastreamurl, ca = Boolean(this.realtimeEnabled && $b && void 0 !== U), Ta, Tb, Z, ea, Pb, ia, Mb, fa, Kb, ka, ra, aa, da, za, ya, Xa, Na, gb, Va, Eb, Ja, Ea, xa, La, hb, Ga = null, Aa = null, Ka, Xb, lb, Wb, Vb, Sb, qc, oc, Yb, va, Nb, Ua, Ia = [], Ob = [], kb, Ab = 0, Bb = 0, Zb, gc, rb, fc, lc, nb, ab, mc = c.horizontalAxisNamePadding, Gb = 0, Sa = c.staggerLines,
                Jb = wb, eb = !1, hc, ic, cb, xb = !1, Qb, ub, Hb, Bc, Pc, ad, pc, Jc, Sc, Dc, Tc, Kc, Qc, zc;
            Nb = b.plotLines;
            ha = va = 0;
            for (ab = Nb.length; va < ab; va += 1)(l = Nb[va]) && l.label && !l.isTrend && ha < parseInt(l.label.style.lineHeight, 10) && (ha = parseInt(l.label.style.lineHeight, 10), t = l.label.style);
            if (t || b.labels.style)t = t || b.labels.style, la.setStyle(t), u = la.getOriSize("W"), ha = la.lineHeight, P = u.width + 4, ga = la.getOriSize("WWW").width + 4;
            b.title && b.title.text != p && (t = b.title.style, la.setStyle(t), pa = la.getOriSize("W").height, b.title.rotation = 0, J =
                la.getSmartText(b.title.text, f, k), C = J.height);
            Y != parseInt(B.chartleftmargin, 10) && (qc = !0);
            bb != parseInt(B.chartrightmargin, 10) && (oc = !0);
            void 0 !== B.canvaspadding && "" !== B.canvaspadding && (xb = !0);
            Yb = f - g;
            switch (L) {
                case "none":
                    M = F = !0;
                    G && ($ = Lb ? 300 : 270, u = ha, ha = P, P = u);
                    break;
                case "rotate":
                    $ = Lb ? 300 : 270;
                    u = ha;
                    ha = P;
                    P = u;
                    M = !0;
                    break;
                case "stagger":
                    E = M = !0;
                    R = qa((k - pa) / ha);
                    R < Sa && (Sa = R);
                    break;
                default:
                    G && ($ = Lb ? 300 : 270, u = ha, ha = P, P = u)
            }
            h.isBar && (M = !0);
            va = 0;
            Nb = b.plotLines;
            if (typeof d._FCconf.isXYPlot !== Za || h.isBar) {
                Ta = {};
                ia =
                    Pb = 0;
                ka = Kb = null;
                gb = {};
                eb = !0;
                ja = f / (b.max - b.min);
                Qb = function (a, c, f) {
                    var e, k, v, g, H, h;
                    h = a.plotObj;
                    H = a.labelTextWidth;
                    H || (n = h.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), H = la.getOriSize(n.text).width + 4, a.oriWidth = H, H > Tb && (H = Tb), a.labelTextWidth = H, a.leftEdge = h.value * ja - H / 2, a.rightEdge = h.value * ja + H / 2, f && (H = V(H, 2 * (l.value - b.min) * ja + d.chart.marginLeft), a.labelTextWidth = H));
                    if (typeof c !== Za) {
                        if (f = c.plotObj, n = f.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), c.oriWidth ? v = c.oriWidth : (v = la.getOriSize(n.text).width +
                                4, c.oriWidth = v), v > Tb && (v = Tb), c.labelTextWidth = v, c.leftEdge = f.value * ja - v / 2, c.rightEdge = f.value * ja + v / 2, e = h.value * ja, k = e + H / 2, g = f.value * ja, v = g - v / 2, v < k)if (e + P < g - P)k -= v, e = g - e, a.labelTextWidth = k > e ? V(H, e) : X(P, H - k / 2), c.labelTextWidth = 2 * (e - a.labelTextWidth / 2), a.leftEdge = h.value * ja - a.labelTextWidth / 2, a.rightEdge = h.value * ja + a.labelTextWidth / 2, c.leftEdge = f.value * ja - c.labelTextWidth / 2, c.rightEdge = f.value * ja + c.labelTextWidth / 2; else return c.labelTextWidth = 0, f.label.text = p, !1
                    } else f && (H = V(H, 2 * (b.max - l.value) * ja +
                        d.chart.marginRight), a.labelTextWidth = H, a.leftEdge = h.value * ja - H / 2, a.rightEdge = h.value * ja + H / 2);
                    a.nextCat = c;
                    return !0
                };
                E ? Sa > gc ? Sa = gc : 2 > Sa && (Sa = 2) : Sa = 1;
                for (ab = Nb.length; va < ab; va += 1)(l = Nb[va]) && l.label && typeof l.label.text !== Za && (l.isGrid ? (ea = {plotObj: l}, l.isCat && (fa = va % Sa, Ta[fa] || (Ta[fa] = []), Kb ? (ka = ea, Ta[fa].push(ka)) : (ka = Kb = ea, Ta[fa].push(Kb))), Ia.push(ea)) : l.isTrend && Ob.push({plotObj: l}));
                Ua = b.plotBands;
                va = 0;
                for (ab = Ua.length; va < ab; va += 1)(l = Ua[va]) && l.isTrend && l.label && typeof l.label.text !== Za && Ob.push({plotObj: l});
                if (Ia.length)if (!F && !$)if (h.distributedColumns)for (va = 0, ab = Ia.length; va < ab; va += 1)Xa = Ia[va], Na = va % Sa, l = Xa.plotObj, l.label && l.isCat && (0 <= va - Sa ? (aa = Ia[va - Sa], xa = aa.plotObj.value * ja + aa.plotObj._weight * ja / 2) : (aa = null, xa = b.min * ja - Y), va + Sa < ab ? (ra = Ia[va + Sa], La = ra.plotObj.value * ja - ra.plotObj._weight * ja / 2) : (ra = null, La = b.max * ja + bb), n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), da = l.value * ja, Hb = da - l._weight * ja / 2, ub = da + l._weight * ja / 2, 1 < Sa ? (Eb = Hb - xa, Ja = ub + La, hb = ub - Hb + V(Eb, Ja)) : hb = ub - Hb, n = l.label, n.style &&
                n.style !== t && la.setStyle(n.style), hb < P && P < la.getOriSize(n.text).width ? (l.label.text = p, Xa.labelTextWidth = 0) : (Xa.labelTextWidth = hb, m = la.getSmartText(n.text, hb - 4, k, M), hb = m.width + 4, Xa.labelTextWidth = hb, zb = X(zb, m.height))); else {
                    gc = Ia.length;
                    Zb = Ia.length - 1;
                    (kb = (Ia[Zb].plotObj.value - Ia[0].plotObj.value) * ja) ? (Tb = .1 * kb, Z = X(.2 * kb, kb / gc)) : Z = Tb = f;
                    for (q in Ta)for (va = 0, za = Ta[q].length; va < za;) {
                        for (Mb = va + 1; !Qb(Ta[q][va], Ta[q][Mb]);)Mb += 1;
                        va = Mb
                    }
                    Kb && (ia = (Kb.plotObj.value - b.min) * ja + Y - Kb.labelTextWidth / 2);
                    l = Ia[0].plotObj;
                    Kb && l === Kb.plotObj || (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), z = la.getOriSize(n.text).width + 4, da = (l.value - b.min) * ja + Y, Kb && (Ka = ia - da, z = Ka < z && Ka > P / 2 ? 2 * Ka : 0), Ia[0].labelTextWidth = z, 0 < z && (u = da - z / 2), u < ia && (ia = u));
                    ka && (z = ka.labelTextWidth, Pb = (b.max - ka.plotObj.value) * ja + bb - z / 2);
                    l = Ia[Zb].plotObj;
                    ka && l === ka.plotObj || (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), z = la.getOriSize(n.text).width + 4, da = (b.max - l.value) * ja + bb, ka && (Ka = da - Pb, z = Ka < z && Ka > P / 2 ? 2 * Ka : 0), Ia[Zb].labelTextWidth =
                        z, 0 < z && (u = da - z / 2), u < Pb && (Pb = u));
                    Ab = 0 > ia ? -ia : 0;
                    Bb = 0 > Pb ? -Pb : 0;
                    nb = Ab + Bb;
                    if (0 < nb)for (q in Yb > nb ? (ya = (ya = Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) : Ab < Bb ? Yb >= Bb && oc ? (ya = (ya = Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ja = f / (b.max - b.min)) : qc && (ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) : Yb >= Ab && qc ? (ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) : oc && (ya = (ya =
                        Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ja = f / (b.max - b.min)), bb = d.chart.marginRight, Y = d.chart.marginLeft, kb = (Ia[Zb].plotObj.value - Ia[0].plotObj.value) * ja, Tb = .1 * kb, Z = X(.2 * kb, kb / gc), Ta) {
                        va = 0;
                        for (za = Ta[q].length; va < za;) {
                            for (Mb = va + 1; !Qb(Ta[q][va], Ta[q][Mb], !0);)Mb += 1;
                            va = Mb
                        }
                        q += 1
                    }
                    va = 0;
                    for (ab = Ia.length; va < ab; va += 1)if (Xa = Ia[va], Na = va % Sa, l = Xa.plotObj, l.label)if (l.isCat)Xa.labelTextWidth && (gb[Na] = Xa); else {
                        ra = (aa = gb[Na]) ? aa.nextCat : Ta[Na] ? Ta[Na][0] : null;
                        Va = null;
                        if (va >= Sa)for (Aa = va - Sa, Va = Ia[Aa]; !Va.labelTextWidth;)if (Aa >=
                            Sa)Aa -= Sa, Va = Ia[Aa]; else {
                            Va = null;
                            break
                        }
                        xa = Va ? Va.rightEdge : b.min * ja - Y;
                        La = ra ? ra.leftEdge : b.max * ja + bb;
                        n = l.label;
                        n.style && n.style !== t && (t = n.style, la.setStyle(t));
                        z = la.getOriSize(n.text).width + 4;
                        Sb = l.value * ja - z / 2;
                        if (h.isBar && va == ab - 1 && Va)xa > Sb && (Va.plotObj.label.text = p, Va.labelTextWidth = 0, xa = Va.leftEdge); else if (xa > Sb || La < Sb + z) {
                            l.label.text = p;
                            Xa.labelTextWidth = 0;
                            continue
                        }
                        xa = X(xa, Sb);
                        da = l.value * ja;
                        hb = 2 * V(da - xa, La - da);
                        hb.toFixed && (hb = hb.toFixed(2));
                        n = l.label;
                        n.style && n.style !== t && la.setStyle(n.style);
                        hb <
                        P && P < la.getOriSize(n.text).width ? (l.label.text = p, Xa.labelTextWidth = 0) : (Xa.labelTextWidth = hb, m = la.getSmartText(n.text, hb - 4, k, M), hb = m.width + 4, Xa.labelTextWidth = hb, Xa.leftEdge = da - hb / 2, Xa.rightEdge = da + hb / 2, zb = X(zb, m.height))
                    }
                    Va = Ea = null;
                    va = 0;
                    for (ab = Ia.length; va < ab; va += 1)if (Xa = Ia[va], l = Xa.plotObj, Na = va % Sa, l.isCat && Xa.labelTextWidth) {
                        Va = Ea = null;
                        da = l.value * ja;
                        if (va >= Sa)for (Aa = va - Sa, Va = Ia[Aa]; !Va.labelTextWidth;)if (Aa > Sa)Aa -= Sa, Va = Ia[Aa]; else {
                            Va = null;
                            break
                        }
                        Eb = Va ? da - Va.rightEdge : da - b.min * ja + d.chart.marginLeft;
                        if (va + Sa < ab)for (Ga = va + Sa, Ea = Ia[Ga]; !Ea.labelTextWidth;)if (Ga + Sa < ab - 1)Ga += Sa, Ea = Ia[Ga]; else {
                            Ea = null;
                            break
                        }
                        Ja = Ea ? Ea.leftEdge - da : b.max * ja + d.chart.marginRight - da;
                        hb = 2 * V(Eb, Ja);
                        hb > Z && (hb = Z);
                        hb > Xa.oriWidth && (hb = Xa.oriWidth);
                        Xa.labelTextWidth = hb;
                        n = l.label;
                        n.style && n.style !== t && la.setStyle(n.style);
                        m = la.getSmartText(n.text, hb - 4, k, M);
                        Xa.labelTextWidth = m.width + 4;
                        zb = X(zb, m.height);
                        Xa.rightEdge = da + Xa.labelTextWidth / 2
                    }
                } else if ($)for (va = 0, ab = Ia.length; va < ab; va += 1)if ((l = Ia[va].plotObj) && l.label && l.label.text) {
                    n =
                        l.label;
                    n.style && n.style !== t && (t = n.style, la.setStyle(t));
                    q = 1;
                    if (va + q < ab)for (Bc = Ia[q + va].plotObj; Bc && (Bc.value - l.value) * ja < P;)if (l.isCat) {
                        if (Bc.label) {
                            Bc.label.text = p;
                            q += 1;
                            if (q + va >= ab - 1)break;
                            Bc = Nb[q + va].plotObj
                        }
                    } else if (Bc.isCat) {
                        l.label.text = p;
                        l = Bc;
                        va += q - 1;
                        n = l.label;
                        n.style && n.style !== t && (t = n.style, la.setStyle(t));
                        break
                    }
                    yb = X(yb, la.getOriSize(n.text).width + 4)
                }
                q = 0;
                for (ab = Ob.length; q < ab; q += 1)(l = Ob[q].plotObj) && l.label && void 0 !== I(l.label.text) && (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)),
                    m = la.getOriSize(n.text), n.verticalAlign === Ca ? wb = X(wb, m.height) : Ya = X(Ya, m.height))
            } else {
                for (ab = Nb.length; va < ab; va += 1)(l = Nb[va]) && (l.isGrid ? Ia.push(l) : l.isTrend && Ob.push(l));
                Ua = b.plotBands;
                va = 0;
                for (ab = Ua.length; va < ab; va += 1)(l = Ua[va]) && Ob.push(l);
                Zb = Ia.length - 1;
                gc = Ia.length;
                E && (Sa > gc ? Sa = gc : 2 > Sa && (Sa = 2));
                if (gc)for (b.scroll && b.scroll.viewPortMin && b.scroll.viewPortMax ? (Wb = b.scroll.viewPortMin, Vb = b.scroll.viewPortMax, oc = qc = !1) : (Wb = b.min, Vb = b.max), kb = (Ia[Zb].value - Ia[0].value) * ja, rb = kb / (S - 1), fc = (Ia[0].value -
                    Wb) * ja, lc = (Vb - Ia[Zb].value) * ja, "auto" === L ? rb < ga && ($ = Lb ? 300 : 270, u = ha, ha = P, P = u, M = !0) : "stagger" === L && (rb *= Sa), "line" !== this.defaultSeriesType && ("area" === this.defaultSeriesType ? h.drawFullAreaBorder && (tb > fc && (Wb = b.min -= tb / (2 * ja), fc += (Ia[0].value - Wb) * ja), tb > lc && (Vb = b.max += tb / (2 * ja), lc += (Vb - Ia[Zb].value) * ja)) : (tb > fc && (Wb = b.min -= tb / (2 * ja), fc += (Ia[0].value - Wb) * ja), tb > lc && (Vb = b.max += tb / (2 * ja), lc += (Vb - Ia[Zb].value) * ja))), P < N && (P = N), D = E || F ? X(1, Qa) : X(1, Qa, Ba(P / rb)), h.x && (h.x.stepValue = D), rb *= D, w = 2 * (fc + Y), (n = Nb[0].label) &&
                n.text && (n.style && la.setStyle(n.style), z = 270 === $ ? V(rb, la.getOriSize(n.text).height + 4) : V(rb, la.getOriSize(n.text).width + 4), z > w && (F || (Ab = (z - w) / 2), qc || (xb && (Ab = 0), rb -= Ab / (S - 1), cb = rb * (S - 1), ja = rb, hc = (kb - cb) / ja, Vb = b.max += hc, Wb = b.min -= hc, Ab = 0, kb = cb, fc = (Ia[0].value - Wb) * ja, lc = (Vb - Ia[Zb].value) * ja))), w = 2 * (lc + bb), (n = Nb[Zb].label) && n.text && (n.style && la.setStyle(n.style), z = 270 === $ ? V(rb, la.getOriSize(n.text).height + 4) : V(rb, la.getOriSize(n.text).width + 4), z > w && (F || (Bb = (z - w) / 2), oc || (xb && (Bb = 0), rb -= Bb / (S - 1), cb = rb *
                    (S - 1), ja = rb, hc = (kb - cb) / ja, Bb = 0, kb = cb, fc = (Ia[0].value - Wb) * ja, lc = (Vb - Ia[Zb].value) * ja))), nb = Ab + Bb, 0 < nb && (Yb > nb ? (ya = (ya = Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) : Ab < Bb ? Yb >= Bb && oc ? (ya = (ya = Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ja = f / (b.max - b.min)) : qc && (ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) : Yb >= Ab && qc ? (ya = (ya = Ab * f / (Ab + f)) ? ya + 4 : 0, d.chart.marginLeft += ya, f -= ya, ja = f / (b.max - b.min)) :
                oc && (ya = (ya = Bb * f / (Bb + f)) ? ya + 4 : 0, d.chart.marginRight += ya, f -= ya, ja = f / (b.max - b.min)), kb = (Ia[Zb].value - Ia[0].value) * ja, rb = kb / (S - 1), E && (rb *= Sa), D = E || F ? X(1, Qa) : $ ? X(1, Qa, Ba(ha / rb)) : X(1, Qa, Ba(P / rb)), h.x && (h.x.stepValue = D), rb *= D), q = 0; q < gc; q += 1) {
                    l = Ia[q];
                    if (q % D && l.label) {
                        if (l.stepped = !0, l.label.style = b.steppedLabels.style, !ca)continue
                    } else l.stepped = !1;
                    l && l.label && void 0 !== I(l.label.text) && (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), $ && F ? (m = la.getOriSize(n.text), yb = X(yb, m.width + 4), zb = X(zb, m.height)) :
                    F || (m = $ || E ? la.getOriSize(n.text) : la.getSmartText(n.text, rb - 4, k, M), yb = X(yb, m.width + 4), zb = X(zb, m.height)))
                }
                q = 0;
                for (ab = Ob.length; q < ab; q += 1)(l = Ob[q]) && l.label && void 0 !== I(l.label.text) && (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), m = la.getOriSize(n.text), n.verticalAlign === Ca ? wb = X(wb, m.height) : Ya = X(Ya, m.height));
                b.scroll && b.scroll.enabled && !$ && !F && (hc = yb / 2, d.chart.marginLeft < hc && (ic = hc - d.chart.marginLeft, Yb > ic && (f -= ic, Yb -= ic, d.chart.marginLeft += ic)), d.chart.marginRight < hc && (ic = hc - d.chart.marginRight,
                Yb > ic && (f -= ic, Yb -= ic, d.chart.marginRight += ic)))
            }
            F ? (Gb = ha, $ && (Gb = yb)) : Gb = $ ? yb : E ? Sa * zb : zb;
            0 < Gb && (Gb + K > O && (Gb = O - K, Sa = Math.floor(Gb / zb)), Jb += K + Gb);
            0 < C && (Jb += C + mc);
            Xb = K - 4;
            lb = Ya + Jb + 2;
            u = 0;
            lb > k && (Ka = lb - k, mc > Ka ? (mc -= Ka, Ka = 0) : (Ka -= mc, mc = 0, Xb > Ka ? (Xb -= Ka, Ka = 0) : (Ka -= Xb, Xb = 0), K = Xb + 4), Ya > Ka ? (Ya -= Ka, Ka = 0) : (0 < Ya && (Ka -= Ya, Ya = 0), 0 < Ka && (wb > Ka ? (wb -= Ka, Ka = 0) : (0 < wb && (Ka -= wb, wb = 0), 0 < Ka && ((u = C - pa) > Ka ? (C -= Ka, Ka = 0) : (Ka -= u, C = pa, 0 < Ka && ((u = Gb - ha) > Ka ? (Gb -= Ka, Ka = 0) : (Ka -= u, Gb = ha, 0 < Ka && (Ka -= C + mc, C = 0, 0 < Ka && (Ka -= Gb, Gb = 0, 0 < Ka && (K -= Ka)))))))))));
            K += wa;
            Pc = h.is3d ? -d.chart.xDepth : 0;
            ad = Gb + K;
            Dc = Pc;
            Tc = .5 * ha;
            sa = ha + K;
            ab = Ia.length;
            na = 0;
            if (eb)if ($)for (zc = ma, pc = Lb ? K + 8 : K + 4, ab = Ia.length, q = 0; q < ab; q += 1)(l = Ia[q].plotObj) && l.label && void 0 !== I(l.label.text) && (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), va = 1, m = la.getSmartText(n.text, Gb - 4, P, M), n.text = m.text, m.tooltext && (n.originalText = m.tooltext), Dc = Pc + Tc / 2, n.y = pc, n.x = Dc, n.rotation = $, n.textAlign = zc, na += 1); else for (Jc = Gb, zc = Ha, pc = sa, q = 0; q < ab; q += D)l = Ia[q].plotObj, ha = parseInt(l.label.style.lineHeight,
                10), l && l.label && void 0 !== I(l.label.text) && (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), F || (m = la.getSmartText(n.text, Ia[q].labelTextWidth - 4, Jc, M), n.text = m.text, m.tooltext && (n.originalText = m.tooltext), E && (pc = sa + na % Sa * ha)), n.y = pc, n.x = Dc, n.rotation = $, n.textAlign = zc, na += 1); else {
                $ ? (Jc = rb, Sc = Gb - 4, zc = ma, pc = Lb ? K + 8 : K + 4) : E ? (Sc = rb - 4, zc = Ha) : (Jc = Gb, Sc = rb - 4, zc = Ha, pc = sa);
                for (q = 0; q < ab; q += D)l = Ia[q], ha = Ba(parseFloat(l.label.style.lineHeight)), Tc = .5 * ha, sa = ha + K, l && l.label && void 0 !== I(l.label.text) && (n =
                    l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), F || (E && (Jc = ha), m = la.getSmartText(n.text, Sc, Jc, M), n.text = m.text, m.tooltext && (n.originalText = m.tooltext), E && (pc = sa + na % Sa * ha)), $ ? Dc = Pc + .5 * ha : E || (pc = ha + K), n.y = pc, n.x = Dc, n.rotation = $, n.textAlign = zc, na += 1);
                c._labelY = sa;
                c._labelX = Pc;
                c._yShipment = pc;
                c._isStagger = E;
                c._rotation = $;
                c._textAlign = zc;
                c._adjustedPx = Tc;
                c._staggerLines = Sa;
                c._labelHeight = ha
            }
            ab = Ob.length;
            for (q = Qc = Kc = 0; q < ab; q += 1)(l = Ob[q].plotObj ? Ob[q].plotObj : Ob[q]) && l.label && void 0 !== I(l.label.text) &&
            (n = l.label, n.style && n.style !== t && (t = n.style, la.setStyle(t)), n.verticalAlign === Ca ? (m = la.getSmartText(n.text, f, wb, !0), Qc = X(Qc, m.height), n.text = m.text, m.tooltext && (n.originalText = m.tooltext), n.y = ad + la.getOriSize(n.text).height, n.x = Dc) : (m = la.getSmartText(n.text, f, Ya, !0), Kc = X(Kc, m.height), n.text = m.text, m.tooltext && (n.originalText = m.tooltext), n.y = -(Ya - la.getOriSize("W").height + K + 2)));
            0 < C && (la.setStyle(b.title.style), J = la.getSmartText(b.title.text, f, C), b.title.text = J.text, J.tooltext && (b.title.originalText =
                J.tooltext), b.title.margin = ad + Qc + mc);
            Jb = Qc;
            0 < Gb && (h.horizontalAxisHeight = K + Gb - wa, Jb += h.horizontalAxisHeight);
            0 < C && (Jb += Fa = C + mc);
            Jb = Jb || K - wa;
            d.chart.marginBottom += Jb;
            0 < Kc && (d.chart.marginTop += Kc, Jb += Kc);
            if (b.opposite)for (b.title.margin -= Gb - (J && J.height || 0) + K, Jb -= Fa, d.chart.marginTop += Jb, d.chart.marginBottom -= Jb, d.xAxis.opposite = 1, ab = Nb.length, va = 0; va < ab; va += 1)(l = Nb[va]) && l.isGrid && (n = l.label) && void 0 !== n.text && (n.textAlign = Da, n.y -= pc + K + 4);
            return Jb
        }, la = l.configureLegendOptions = function (c, d, e, k, f) {
            k =
                c.legend;
            var g = c.chart, h = g.is3D ? tb.chart3D : tb.chart2D, B = g.useRoundEdges, l = a(d.legendiconscale, 1), m = (parseInt(k.itemStyle.fontSize, 10) || 10) + 1, q = this.colorManager, n;
            if (0 >= l || 5 < l)l = 1;
            k.padding = 4;
            0 >= m && (m = 1);
            n = 3 * l;
            m = V(m * l, f - 8);
            0 >= m && (n = m = 0);
            k.symbolWidth = m;
            k.symbolPadding = n;
            k.textPadding = 4;
            k.legendHeight = f = m + 2 * n;
            k.rowHeight = X(parseInt(k.itemStyle.lineHeight, 10) || 12, f);
            e ? (k.align = ma, k.verticalAlign = "middle", k.layout = "vertical") : k.x = (g.marginLeft - g.spacingLeft - g.marginRight + g.spacingRight) / 2;
            e = b(d.legendbordercolor,
                q.getColor(h.legendBorderColor));
            f = a(d.legendborderalpha, 100);
            g = a(d.legendbgalpha, 100);
            k.backgroundColor = L(b(d.legendbgcolor, q.getColor(h.legendBgColor)), g);
            k.borderColor = L(e, f);
            k.borderWidth = a(d.legendborderthickness, !B || d.legendbordercolor ? 1 : 0);
            k.shadow = Boolean(a(d.legendshadow, 1));
            k.symbol3DLighting = Boolean(a(d.use3dlighting, d.useplotgradientcolor, 1));
            k.shadow && (k.shadow = {enabled: k.shadow, opacity: X(f, g) / 100});
            k.reversed = Boolean(a(d.reverselegend, 0) - a(this.reverseLegend, 0));
            k.style = {padding: 4};
            Boolean(a(d.interactivelegend, 1)) ? k.symbolStyle = {
                _cursor: "hand",
                cursor: "pointer"
            } : (c.legend.interactiveLegend = !1, k.itemStyle.cursor = "default", k.itemHoverStyle = {cursor: "inherit"});
            k.borderRadius = a(d.legendborderradius, B ? 3 : 0);
            k.legendAllowDrag = Boolean(a(d.legendallowdrag, 0));
            k.title.text = K(z(d.legendcaption, p));
            k.legendScrollBgColor = ca(b(d.legendscrollbgcolor, d.scrollcolor, q.getColor("altHGridColor")));
            k.legendScrollBarColor = b(d.legendscrollbarcolor, e);
            k.legendScrollBtnColor = b(d.legendscrollbtncolor,
                e)
        }, zb = l.placeLegendBlockRight = function (b, c, d, e, f) {
            this.configureLegendOptions(b, c.chart, !0, f, d);
            var k = this.snapLiterals || (this.snapLiterals = {}), g = 0, h = b.series, B, l = b[s], m = this.smartLabel || l.smartLabel, q = b.chart.spacingRight, n = b.legend, J, t = n.textPadding, P = n.title.padding, u = n.symbolWidth, R = n.symbolPadding, w = u + 2 * R, z = 2 * e, ga = 0, $ = a(c.chart.legendpadding, 7);
            c = $ + n.borderWidth / 2 + a(c.chart.canvasborderthickness, 1);
            var C = 2 * n.padding, ha = C, D = !1, sa = [];
            d -= C + $;
            f && (h = h && h[0] && h[0].data);
            if (typeof h === Za || typeof h.length ===
                Za)return 0;
            f = h.length;
            for (g = 0; g < f; g += 1)(B = h[g]) && !1 !== B.showInLegend && (B.__i = g, sa.push(B));
            sa.sort(function (a, b) {
                return a.legendIndex - b.legendIndex || a.__i - b.__i
            });
            f = sa.length;
            J = d - w - $ - t;
            0 > J && (J = 0);
            m.setStyle(n.itemStyle);
            n.reversed && sa.reverse();
            for (g = 0; g < f; g += 1)B = sa[g], D = !0, B._legendX = 0, B._legendY = ha, 0 === J ? (ha += B._legendH = w, B.name = p, B._totalWidth = u + R) : (h = m.getSmartText(B.name, J, z), B.name = h.text, h.tooltext && (B.originalText = h.tooltext), h.height < w && (B._legendTestY = (w - h.height) / 2), B._totalWidth = u + R +
                t + h.width + $, ha += B._legendH = X(h.height, w), ga = X(h.width, ga));
            if (D)return n.itemWidth = ga + w + $ + t, n.width = n.itemWidth + C, n.title.text !== p && (m.setStyle(n.title.style), h = m.getSmartText(n.title.text, d, z), n.title.text = h.text, h.tooltext && (n.title.originalText = h.tooltext), g = h.width + C, n.width < g && (n.initialItemX = (g - n.width) / 2, n.width = g), n.initialItemY = h.height + P, ha += n.initialItemY), n.height = n.totalHeight = ha, n.height > e && (n.height = e, n.scroll.enabled = !0, n.scroll.flatScrollBars = l.flatScrollBars, n.scroll.scrollBar3DLighting =
                l.scrollBar3DLighting, n.width += (n.scroll.scrollBarWidth = 10) + (n.scroll.scrollBarPadding = 2)), k.legendstartx = l.width - q - n.width, k.legendwidth = n.width, k.legendendx = k.legendstartx + k.legendwidth, k.legendheight = n.height, c = V(n.width + c, d), b.chart.marginRight += c + $, c;
            n.enabled = !1;
            return 0
        }, Ya = l.placeLegendBlockBottom = function (b, c, d, e, f) {
            this.configureLegendOptions(b, c.chart, !1, f, d);
            var k = this.snapLiterals || (this.snapLiterals = {}), g = 0, h = b.series, B = b[s], l = B.smartLabel || this.smartLabel, m = b.chart, q = m.spacingBottom,
                n = m.spacingLeft, m = m.spacingRight, J = b.legend, t, P = J.textPadding, u = J.title.padding, R, w = J.symbolWidth, z = J.symbolPadding, ga = J.legendHeight, $ = c.chart;
            R = 0;
            var C = 2 * e, ha = J.rowHeight, D = .05 * ha, sa = [];
            t = a($.minimisewrappinginlegend, 0);
            var $ = a(parseInt($.legendnumcolumns, 10), 0), pa = 0, na = 0, I = 0, E = g = 0, M = J.padding, F = 2 * M, M = P + z + M;
            c = a(c.chart.legendpadding, 7) + J.borderWidth / 2 + 1;
            var Fa = F, Qa = !1, K, N = [], la = !1, O = 0, L = 0;
            0 > $ && ($ = 0);
            d -= F;
            l.setStyle(J.itemStyle);
            g = l.getOriSize(cb).height;
            c = V(c, e - g - 8);
            e -= c;
            f && (h = h && h[0] && h[0].data);
            if (typeof h === Za || typeof h.length === Za)return 0;
            f = h.length;
            for (g = 0; g < f; g += 1)(K = h[g]) && !1 !== K.showInLegend && (K.__i = g, N.push(K));
            N.sort(function (a, b) {
                return a.legendIndex - b.legendIndex || a.__i - b.__i
            });
            f = N.length;
            l.setStyle(J.itemStyle);
            for (g = 0; g < f; g += 1)Qa = !0, h = l.getOriSize(N[g].name), pa = X(pa, h.width), na += h.width, I += 1;
            g = na / I;
            ga = ga + D + P + z + F;
            na += ga * I;
            if (Qa) {
                g += ga;
                pa += ga;
                0 < $ && I < $ && ($ = I);
                na <= d && (0 >= $ || $ === I) ? ($ = I, E = g = na / I, la = !0) : 0 < $ && (E = d / $) > g ? E > pa && (E = pa) : d > pa && (t || 1.5 * g > pa) ? ($ = qa(d / pa), I < $ && ($ = I), E = pa) :
                    d >= 2 * g ? ($ = qa(d / g), I < $ && ($ = I), E = qa(d / $), E > pa && (E = pa)) : ($ = 1, E = d);
                J.itemWidth = E;
                t = E - ga;
                0 > t && (z = t = P = 0);
                J.symbolPadding = z;
                J.textPadding = P;
                J.width = E * $ - D;
                J.title.text !== p && (l.setStyle(J.title.style), h = l.getSmartText(J.title.text, d, C), J.title.text = h.text, h.tooltext && (J.title.originalText = h.tooltext), R = h.width + F, J.width < R && (J.initialItemX = (R - J.width) / 2, J.width = R), J.initialItemY = R = h.height + u);
                l.setStyle(J.itemStyle);
                J.reversed && N.reverse();
                for (g = 0; g < f; g += 1) {
                    d = N[g];
                    0 === t && (sa[O] = !0, d.name = p, u = 1, P = parseInt(O /
                        $, 10), D = O % $, d._legendX = D * E, d._legendY = P * ha + F, d._legendH = u * ha, d._totalWidth = w + z);
                    if (la)h = l.getOriSize(d.name), h.height < ha && (d._legendTestY = (ha - h.height) / 2), d._legendX = L, d._legendY = F, d._legendH = ha, d._totalWidth = w + M + h.width, L += h.width + ga; else {
                        h = l.getSmartText(d.name, t, C);
                        d.name = h.text;
                        for (h.tooltext && (d.originalText = h.tooltext); !0 === sa[O];)O += 1;
                        P = h.height / ha;
                        D = O;
                        for (u = 0; u < P; u += 1, D += $)sa[D] = !0;
                        h.height < ha && (d._legendTestY = (ha - h.height) / 2);
                        P = parseInt(O / $, 10);
                        D = O % $;
                        d._legendX = D * E;
                        d._legendY = P * ha + F;
                        d._legendH =
                            u * ha;
                        d._totalWidth = w + M + h.width
                    }
                    O += 1
                }
                l = la ? 1 : Ba(sa.length / $);
                J.height = J.totalHeight = Fa + (l * ha + R);
                J.rowHeight = ha;
                J.legendNumColumns = $;
                J.height > e && (J.height = e, J.scroll.enabled = !0, J.scroll.flatScrollBars = B.flatScrollBars, J.scroll.scrollBar3DLighting = B.scrollBar3DLighting, J.width += (J.scroll.scrollBarWidth = 10) + (J.scroll.scrollBarPadding = 2));
                k.legendstartx = n + .5 * (B.width - n - m - J.width) + (J.x || 0);
                k.legendwidth = J.width;
                k.legendendx = k.legendstartx + k.legendwidth;
                k.legendstarty = B.height - q - J.height;
                k.legendheight = J.height;
                k.legendendy = k.legendstarty + k.legendheight;
                c += J.height;
                b.chart.marginBottom += c;
                return c
            }
            J.enabled = !1;
            return 0
        }, wb = function (a, b) {
            return a.value - b.value
        }, Tb = function (a, b, c) {
            var d = b._originalText;
            a = a[s].smartLabel;
            b.text = b.rotation ? a.getSmartText(d, c, b._actualWidth).text : a.getSmartText(d, b._actualWidth, c).text;
            b.centerYAxisName = !0
        }, Ta = l.adjustVerticalAxisTitle = function (a, b, c) {
            if (b && b.text) {
                var d = b.text, f = a[s].smartLabel, e = 2 * V(a.chart.marginTop, a.chart.marginBottom) + c, k = c + a.chart.marginTop + a.chart.marginBottom;
                b.style && f.setStyle(b.style);
                d = f.getOriSize(d);
                void 0 === b.centerYAxisName && (b.centerYAxisName = !0);
                b.rotation ? d.width > e && (b.y = k / 2 - (c / 2 + a.chart.marginTop), b.centerYAxisName = !1) : d.height > e && (b.y = (k / 2 - (c / 2 + a.chart.marginTop)) / 2, b.centerYAxisName = !1)
            }
        }, $b = l.adjustVerticalCanvasMargin = function (b, c, d, e) {
            var f = c.chart, k = c = 0, g = 0, h = a(f.canvastopmargin, 0), f = a(f.canvasbottommargin, 0), B = h / (h + f), l = b.chart.marginTop, p = b.chart.marginBottom;
            f > p && (c += f - p);
            h > l && (c += h - l);
            c > d ? h > l && f > p ? (k = d * B, g = d * (1 - B)) : h > l ? k = d : g = d : 0 <
            c && (f > p && (g = f - p), h > l && (k = h - l));
            k && (b.chart.marginTop += k);
            g && (b.chart.marginBottom += g, e && e.title && (e.title.margin += g));
            return k + g
        }, Pb = l.adjustHorizontalCanvasMargin = function (b, c, d, e, f) {
            var k = c.chart;
            c = a(k.canvasleftmargin, 0);
            var k = a(k.canvasrightmargin, 0), g = c / (c + k), h = 0, B = b.chart.marginLeft, l = b.chart.marginRight, p = 0, m = 0;
            c > B && (h += c - B);
            k > l && (h += k - l);
            h > d ? c > B && k > l ? (p = d * g, m = d * (1 - g)) : k > l ? m = d : p = d : 0 < h && (c > B && (p = c - B), k > l && (m = k - l));
            p && (b.chart.marginLeft += p, e && e.title && (e.title.margin += p));
            m && (b.chart.marginRight +=
                m, f && f.title && (f.title.margin += m));
            return m + p
        }, Mb = function (a, b) {
            return a - b
        }, Kb = l.getDataParser = {
            column: function (c, d, k) {
                var g = c[s], f = d.borderWidth;
                return function (h, B, l) {
                    var p = d.plotgradientcolor, m = d.is3d, q = d.isRoundEdges, n = d.plotBorderColor, J = b(h.color, d.color), s = b(h.ratio, d.ratio), t = fa(d.plotBorderAlpha), P = a(h.dashed, d.dashed), u = b(h.dashlen, d.dashLen), R = b(h.dashgap, d.dashGap), w = d.use3DLighting, z = fa(b(h.alpha, d.alpha)).toString(), $ = {opacity: z / 100}, ga = d.isBar, ha = d.fillAangle, C = 0 > l ? ga ? 180 - ha : 360 - ha :
                        ha, ha = Z(J + Ea + p, z, s, C, q, n, V(z, t).toString(), ga, m), D = P ? e(u, R, f) : "none";
                    B = k.getPointStub(h, l, g.oriCatTmp[B], c, d, d.showValues, d.yAxis);
                    h = k.pointHoverOptions(h, d, {
                        plotType: "column",
                        is3d: m,
                        isBar: ga,
                        use3DLighting: w,
                        isRoundEdged: q,
                        color: J,
                        gradientColor: p,
                        alpha: z,
                        ratio: s,
                        angle: C,
                        borderWidth: f,
                        borderColor: n,
                        borderAlpha: t,
                        borderDashed: P,
                        borderDashGap: R,
                        borderDashLen: u,
                        shadow: $
                    });
                    B.y = l;
                    B.shadow = $;
                    B.color = ha[0];
                    B.borderColor = ha[1];
                    B.borderWidth = f;
                    B.use3DLighting = w;
                    B.dashStyle = D;
                    B.tooltipConstraint = k.tooltipConstraint;
                    B.hoverEffects = h.enabled && h.options;
                    B.rolloverProperties = h.enabled && h.rolloverOptions;
                    return B
                }
            }, line: function (c, d, k) {
                var g = c[s];
                return function (f, h, B) {
                    var l = a(f.alpha, d.lineAlpha), p = {opacity: l / 100}, m = a(f.anchorsides, d.anchorSides, 0), q = a(f.anchorborderthickness, d.anchorBorderThickness, 1), n = ca(b(f.anchorbordercolor, d.anchorBorderColor)), J = ca(b(f.anchorbgcolor, d.anchorBgColor)), s = a(f.anchorstartangle, d.anchorStartAngle, 90), t = b(f.anchoralpha, d.anchorAlpha), P = b(f.anchorbgalpha, t), u = a(f.anchorradius, d.anchorRadius),
                        R = Boolean(a(f.anchorshadow, d.anchorShadow, 0));
                    h = k.getPointStub(f, B, g.oriCatTmp[h], c, d, d.showValues, d.yAxis);
                    var w = b(f.anchorimageurl, d.imageUrl), z = b(f.anchorimagescale, d.imageScale), $ = b(f.anchorimagealpha, d.imageAlpha);
                    h.y = B;
                    h.shadow = p;
                    h.anchorShadow = d.anchorShadow;
                    h.dashStyle = a(f.dashed, d.lineDashed) ? e(d.lineDashLen, d.lineDashGap, d.lineThickness) : null;
                    h.color = {FCcolor: {color: ca(b(f.color, d.lineColor)), alpha: l}};
                    h.valuePosition = b(f.valueposition, d.valuePosition);
                    B = k.pointHoverOptions(f, d, {
                        plotType: "anchor",
                        anchorBgColor: J,
                        anchorAlpha: t,
                        anchorBgAlpha: P,
                        anchorAngle: s,
                        anchorBorderThickness: q,
                        anchorBorderColor: n,
                        anchorBorderAlpha: t,
                        anchorSides: m,
                        anchorRadius: u,
                        imageUrl: w,
                        imageScale: z,
                        imageAlpha: $,
                        shadow: p
                    });
                    h.marker = {
                        enabled: void 0 === d.drawAnchors ? 0 !== l : !!d.drawAnchors,
                        shadow: R && {opacity: t / 100},
                        fillColor: {
                            FCcolor: {
                                color: ca(b(f.anchorbgcolor, d.anchorBgColor)),
                                alpha: (b(f.anchorbgalpha, d.anchorBgAlpha) * t / 100).toString()
                            }
                        },
                        lineColor: {FCcolor: {color: ca(b(f.anchorbordercolor, d.anchorBorderColor)), alpha: t}},
                        imageUrl: w,
                        imageScale: z,
                        imageAlpha: $,
                        lineWidth: a(f.anchorborderthickness, d.anchorBorderThickness),
                        radius: a(f.anchorradius, d.anchorRadius),
                        symbol: ra(a(f.anchorsides, d.anchorSides)),
                        startAngle: b(f.anchorstartangle, d.anchorAngle)
                    };
                    h.hoverEffects = B.enabled && B.options;
                    h.rolloverProperties = B.enabled && B.rolloverOptions;
                    return h
                }
            }, area: function (c, d, e) {
                var k = c[s];
                return function (f, g, h) {
                    var B = b(f.alpha, d.fillAlpha), l = {
                        opacity: X(B, d.lineAlpha) / 100,
                        inverted: !0
                    }, p = a(f.anchorsides, d.anchorSides, 0), m = a(f.anchorborderthickness,
                        d.anchorBorderThickness, 1), q = ca(b(f.anchorbordercolor, d.anchorBorderColor)), n = ca(b(f.anchorbgcolor, d.anchorBgColor)), J = a(f.anchorstartangle, d.anchorStartAngle, 90), s = b(f.anchoralpha, d.anchorAlpha), t = b(f.anchorbgalpha, s), P = a(f.anchorradius, d.anchorRadius), u = Boolean(a(f.anchorshadow, d.anchorShadow, 0));
                    g = e.getPointStub(f, h, k.oriCatTmp[g], c, d, d.showValues, d.yAxis);
                    var R = b(f.anchorimageurl, d.imageUrl), w = b(f.anchorimagescale, d.imageScale), z = b(f.anchorimagealpha, d.imageAlpha);
                    g.y = h;
                    g.shadow = l;
                    g.anchorShadow =
                        d.anchorShadow;
                    g.color = {FCcolor: {color: ca(b(f.color, d.fillColor)), alpha: B}};
                    g.valuePosition = b(f.valueposition, d.valuePosition);
                    h = e.pointHoverOptions(f, d, {
                        plotType: "anchor",
                        anchorBgColor: n,
                        anchorAlpha: s,
                        anchorBgAlpha: t,
                        anchorAngle: J,
                        anchorBorderThickness: m,
                        anchorBorderColor: q,
                        anchorBorderAlpha: s,
                        anchorSides: p,
                        anchorRadius: P,
                        imageUrl: R,
                        imageScale: w,
                        imageAlpha: z,
                        shadow: l
                    });
                    g.marker = {
                        enabled: d.drawAnchors,
                        shadow: u && {opacity: s / 100},
                        fillColor: {
                            FCcolor: {
                                color: ca(b(f.anchorbgcolor, d.anchorBgColor)), alpha: (b(f.anchorbgalpha,
                                    d.anchorBgAlpha) * s / 100).toString()
                            }
                        },
                        lineColor: {FCcolor: {color: ca(b(f.anchorbordercolor, d.anchorBorderColor)), alpha: s}},
                        imageUrl: R,
                        imageScale: w,
                        imageAlpha: z,
                        lineWidth: a(f.anchorborderthickness, d.anchorBorderThickness),
                        radius: P,
                        symbol: ra(a(f.anchorsides, d.anchorSides)),
                        startAngle: b(f.anchorstartangle, d.anchorAngle)
                    };
                    g.hoverEffects = h.enabled && h.options;
                    g.rolloverProperties = h.enabled && h.rolloverOptions;
                    g.events = {click: d.getLink};
                    return g
                }
            }
        };
    d.core.options.resizeTrackingInterval = 300;
    d.core.options.preventTrackResize = !1;
    l.createChart = function (a, b, c, e, f, k, g) {
        var h = a.jsVars, B, p, m = U[c || (c = a.chartType())], q, n = h.hasNativeMessage, s = a.options, J = a.args, t;
        t = function (f) {
            var k = {renderer: "javascript"}, B = h.fcObj, p = B.width, s = B.height, J = m && m.eiMethods, t = h.overlayButton, P;
            b.jsVars = a.jsVars;
            h.container = b;
            h.hcObj = f;
            h.type = c;
            h.width = b.offsetWidth;
            h.height = b.offsetHeight;
            h.instanceAPI = q;
            if (f.hasRendered) {
                d.extend(b, wa);
                if (J && "string" !== typeof J)for (P in J)b[P] = J[P];
                h.overlayButtonActive && t && (t.innerHTML = "", t.appendChild(w.createTextNode(h.overlayButtonMessage)),
                    f.container.appendChild(t))
            }
            (/\%/g.test(p) || /\%/g.test(s)) && b && b.parentNode && !d.core.options.preventTrackResize && bb(B, b);
            e && (e({success: f.hasRendered, ref: b, id: a.id}), f.hasRendered && (l.raiseEvent("loaded", {
                type: c,
                renderer: "javascript"
            }, a, [a.id]), n || (B.__state.firstRenderNotified = !0, setTimeout(function () {
                l.raiseEvent("rendered", {renderer: "javascript"}, B, [B.id])
            }, 0))));
            f.hasRendered && h.previousDrawCount < h.drawCount && (k.width = h.width, k.height = h.height, k.drawCount = h.drawCount, k.displayingMessage = n, k.renderer =
                B.options.renderer, l.raiseEvent("drawcomplete", k, B, [B.id]), n || g || setTimeout(function () {
                B.__state && !B.__state.firstRenderNotified && l.raiseEvent("rendered", {renderer: "javascript"}, B, [B.id]);
                d.raiseEvent("renderComplete", k, B)
            }, 0))
        };
        h.instanceAPI && h.instanceAPI.dispose && h.instanceAPI.dispose();
        q = m ? new U(c) : new U("stub");
        q.chartInstance = a;
        q.origRenderWidth = a.__state.renderedWidth;
        q.origRenderHeight = a.__state.renderedHeight;
        void 0 !== f ? "string" === typeof f && (f = new $(b, f, a), n = h.hasNativeMessage = !0) : !m || !m.init ||
        m && "stub" === m.name ? (a._chartMessageStyle = {
            color: J.typeNotSupportedMessageColor || s.baseChartMessageColor,
            fontFamily: J.typeNotSupportedMessageFont || s.baseChartMessageFont,
            fontSize: J.typeNotSupportedMessageFontSize || s.baseChartMessageFontSize
        }, f = new $(b, s.typeNotSupportedMessage, a), n = h.hasNativeMessage = !0) : h.message ? (f = new $(b, h.message, a), n = h.hasNativeMessage = !0) : h.loadError ? (a._chartMessageStyle = {
            color: J.dataLoadErrorMessageColor || s.baseChartMessageColor,
            fontFamily: J.dataLoadErrorMessageFont || s.baseChartMessageFont,
            fontSize: J.dataLoadErrorMessageFontSize || s.baseChartMessageFontSize
        }, f = new $(b, s.dataLoadErrorMessage, a), n = h.hasNativeMessage = !0) : h.stallLoad ? (a._chartMessageStyle = {
            fontFamily: J.dataLoadStartMessageFont || s.baseChartMessageFont,
            fontSize: J.dataLoadStartMessageFontSize || s.baseChartMessageFontSize,
            color: J.dataLoadStartMessageColor || s.baseChartMessageColor
        }, f = new $(b, s.dataLoadStartMessage, a), n = h.hasNativeMessage = !0) : (d.raiseEvent("internal.drawStart", {
            chartType: c, logicName: q.name, logicBase: q.base && q.base.name,
            defaultSeriesType: q.defaultSeriesType
        }, a), B = a.jsVars && a.jsVars.themeObject && a.jsVars.themeObject.getThemedJSONData() || a.getChartData(d.dataFormats.JSON, !0), p = B.data, B.error instanceof Error ? (a._chartMessageStyle = {
            fontFamily: J.dataInvalidMessageFont || s.baseChartMessageFont,
            fontSize: J.dataInvalidMessageFontSize || s.baseChartMessageFontSize,
            color: J.dataInvalidMessageColor || s.baseChartMessageColor
        }, f = new $(b, s.dataInvalidMessage, a), n = h.hasNativeMessage = !0, a.__state.dataReady = !1, g || d.raiseEvent("dataInvalid",
            {error: B.error}, h.fcObj, void 0, function () {
                l.raiseEvent("dataxmlinvalid", {}, a, [a.id])
            })) : (g || l.raiseEvent("dataloaded", {}, a, [a.id]), f = q.init(b, p, a, t), q.inited = !0, h.previousDrawCount = h.drawCount, h.drawCount += 1, 0 === f.series.length ? (a._chartMessageStyle = {
            fontFamily: J.dataEmptyMessageFont || s.baseChartMessageFont,
            fontSize: J.dataEmptyMessageFontSize || s.baseChartMessageFontSize,
            color: J.dataEmptyMessageColor || s.baseChartMessageColor
        }, f = new $(b, s.dataEmptyMessage, a), n = h.hasNativeMessage = !0, a.__state.dataReady = !1, g || l.raiseEvent("nodatatodisplay", {}, a, [a.id])) : (a.__state.dataReady = !0, n = h.hasNativeMessage = !1, delete h.message)));
        f || (a._chartMessageStyle = {
            fontFamily: s.baseChartMessageFont,
            fontSize: s.baseChartMessageFontSize,
            color: s.baseChartMessageColor
        }, f = new $(b, "Error rendering chart {0x01}", a), n = h.hasNativeMessage = !0);
        n && !q.inited && q.init(b, p, a, t);
        f.chart = f.chart || {};
        f.credits = f.credits || {};
        f.credits.enabled = 0;
        !1 === k && (f.chart.animation = !1, f.plotOptions || (f.plotOptions = {}), f.plotOptions.series ||
        (f.plotOptions.series = {}), f.plotOptions.series.animation = !1);
        b.style && (f.chart.containerBackgroundColor = l.getContainerBackgroundColor(a));
        return q.draw(f, t)
    };
    U("base", {
        useScaleRecursively: !0,
        tooltipConstraint: "chart",
        rendererId: "root",
        canvasPaddingModifiers: ["anchor", "anchorlabel"],
        drawAnnotations: !0,
        draw: function (a, b) {
            var c = this.renderer;
            c || (c = this.renderer = new U("renderer." + this.rendererId));
            this.updateDefaultAnnotations();
            return c.init(this, a, b)
        },
        init: function (b, c, d) {
            var e = this.chartInstance ||
                d, f = e.jsVars;
            d = f._reflowData || (f._reflowData = {});
            var k = f._reflowClean, h = e.options, B = h.args, p, m;
            this.dataObj = c = g({}, c);
            m = c.chart = c.chart || c.graph || c.map || {};
            delete c.graph;
            delete c.map;
            d && !this.stateless && (p = d.hcJSON, delete d.hcJSON, g(this, d, !0), this.preReflowAdjustments && this.preReflowAdjustments.call(this), d.hcJSON = p);
            this.containerElement = b;
            this.config = {};
            this.smartLabel = f.smartLabel;
            this.smartLabel.useEllipsesOnOverflow(a(m.useellipseswhenoverflow, m.useellipsewhenoverflow, 1));
            this.colorManager =
                new l.colorManager(c, this);
            this.linkClickFN = R(c, e);
            this.numberFormatter = new P(c.chart, this);
            if (!this.standaloneInit)return e._chartMessageStyle = {
                fontFamily: B.typeNotSupportedMessageFont || h.baseChartMessageFont,
                fontSize: B.typeNotSupportedMessageFontSize || h.baseChartMessageFontSize,
                color: B.typeNotSupportedMessageColor || h.baseChartMessageColor
            }, new l.createDialog(b, h.typeNotSupportedMessage, e);
            b = this.chart(b.offsetWidth || parseFloat(b.style.width), b.offsetHeight || parseFloat(b.style.height), e);
            d && !this.stateless &&
            (d.hcJSON && g(b, d.hcJSON, !0), this.postReflowAdjustments && this.postReflowAdjustments.call(this), k && this.cleanedData && (this.cleanedData(this, k), this.cleanedData(d, k)));
            return b
        },
        postSpaceManager: function () {
            var b = this.hcJSON, c = b._FCconf, d = b.chart, e = d.marginLeft, f = d.spacingLeft, k = d.spacingRight, g = c.width - e - d.marginRight, h = b.title, b = b.subtitle, B = c.width, p = h.align, c = h.x, l = h.horizontalPadding, m = h.alignWithCanvas, q = (aa(e) || 0) + a(g, B) / 2, e = this.snapLiterals || (this.snapLiterals = {}), g = h._captionWidth, n = b._subCaptionWidth,
                s = h._lineHeight, J = b._lineHeight, t = h.text;
            if (void 0 === c) {
                switch (p) {
                    case ma:
                        c = m ? B - d.marginRight - l : B - l;
                        break;
                    case Da:
                        c = m ? d.marginLeft + l : l;
                        break;
                    default:
                        c = m ? q : f + .5 * (B - f - k) || B / 2
                }
                h.align === Da ? (k = f = 0, h.align = "start") : h.align === ma ? (f = g, k = n, h.align = "end") : (f = g / 2, k = n / 2, h.align = "middle");
                h.x = c;
                h.y = h.y || d.spacingTop || 0;
                b.y = t ? h.y + s + 2 : h.y || d.spacingTop || 0;
                e.captionstartx = c - f - 2;
                e.captionwidth = g + 4;
                e.captionendx = e.captionstartx + e.captionwidth;
                e.captionstarty = h.y || 0;
                e.captionheight = s + 2;
                e.captionendy = e.captionstarty +
                    e.captionheight;
                e.subcaptionstartx = c - k - 2;
                e.subcaptionwidth = n + 4;
                e.subcaptionendx = e.subcaptionstartx + e.subcaptionwidth;
                e.subcaptionstarty = b.y || 0;
                e.subcaptionheight = J + 2;
                e.subcaptionendy = e.subcaptionstarty + e.subcaptionheight
            }
        },
        chart: function (c, v) {
            var h = this.name, B = this.dataObj, f = B.chart, l = this.colorManager, m, q, P, u, R, w, $, ga = this.defaultSeriesType, C, sa, pa, na, M, F, N, la, O, ja, wa, V, Y, bb, wb, Lb, Ya, zb, yb, Ta, T, $b, U, Tb, Z, Pb, Mb, Kb, da, ka, fa, ra, aa, Ba, qa, za, Na, Ga, Cb, Rb, ob, fb, bc, vb, Za, Db, cb, sb, Wa, Ub, cc, Ra, Ib, mb, ya, Xa,
                eb, gb, Va, Eb, rc, sc, xc, xb, hb, ub, Hb, Ka, Xb, yc, Wb, Vb, Sb, qc, oc, Yb, va, Nb, Ic, Ia, Ob, kb, Ab, Bb, Zb, gc, rb, fc, lc, ed, ab, mc, Gb, Sa, Jb, Oc, hc, ic, $c;
            m = Fa(B, c, v, this);
            O = m.chart;
            la = m.xAxis;
            C = m[s];
            this.snapLiterals || (this.snapLiterals = {});
            wa = this.snapLiterals;
            wa.chartstartx = 0;
            wa.chartstarty = 0;
            wa.chartwidth = c;
            wa.chartheight = v;
            wa.chartendx = c;
            wa.chartendy = v;
            wa.chartcenterx = c / 2;
            wa.chartcentery = v / 2;
            wa.chartbottommargin = O.spacingBottom;
            wa.chartleftmargin = O.spacingLeft;
            wa.chartrightmargin = O.spacingRight;
            wa.charttopmargin = O.spacingTop;
            this.updateSnapPoints && this.updateSnapPoints();
            this.postHCJSONCreation && this.postHCJSONCreation.call(this, m);
            d.raiseEvent("internal.postlogic", this, this.chartInstance);
            m.labels.smartLabel = w = C.smartLabel = this.smartLabel;
            C.width = c;
            C.height = v;
            pa = m.plotOptions;
            C.isDual = this.isDual;
            C.numberFormatter = this.numberFormatter;
            C.axisGridManager = new J(ga, f);
            C.tooltext = f.plottooltext;
            C.trendLineToolText = f.trendlinetooltext;
            O.is3D = q = C.is3d = /3d$/.test(ga);
            O.isBar = sa = C.isBar = this.isBar;
            $ = /^pie/.test(ga);
            N = 1 == f.useroundedges;
            F = q ? tb.chart3D : tb.chart2D;
            O.events.click = m.plotOptions.series.point.events.click = this.linkClickFN;
            O.defaultSeriesType = ga;
            Lb = 0 < f.palette && 6 > f.palette ? f.palette : a(this.paletteIndex, 1);
            Lb -= 1;
            O.paletteIndex = Lb;
            O.usePerPointLabelColor = f.colorlabelsfromplot == lb;
            O.syncLabelWithAnchor = a(f.synclabelwithanchoronhover, 1);
            O.useRoundEdges = N && !q && !this.distributedColumns && "pie" !== this.defaultSeriesType;
            void 0 !== b(f.clickurl) && (O.link = f.clickurl, O.style.cursor = "pointer", m.plotOptions.series.point.events.click = function () {
                O.events.click.call({link: f.clickurl})
            });
            Ya = b(f.basefont, "Verdana,sans");
            zb = G(f.basefontsize, 10);
            yb = b(f.basefontcolor, l.getColor(F.baseFontColor));
            Ta = b(f.outcnvbasefont, Ya);
            T = G(f.outcnvbasefontsize, zb);
            $b = T + La;
            U = b(f.outcnvbasefontcolor, yb).replace(/^#?([a-f0-9]+)/ig, "#$1");
            Pb = zb;
            zb += La;
            yb = yb.replace(/^#?([a-f0-9]+)/ig, "#$1");
            C.trendStyle = C.outCanvasStyle = {fontFamily: Ta, color: U, fontSize: $b};
            Tb = S(C.trendStyle);
            C.inCanvasStyle = {fontFamily: Ya, fontSize: zb, color: yb};
            Z = S(C.inCanvasStyle);
            C.divlineStyle = {fontFamily: Ya, fontSize: zb, color: yb, lineHeight: Z};
            la.labels.style = {
                fontFamily: b(f.labelfont, Ta),
                fontSize: a(f.labelfontsize, T) + La,
                color: b(f.labelfontcolor, U)
            };
            la.labels.style.lineHeight = S(la.labels.style);
            la.steppedLabels.style = {fontFamily: Ta, fontSize: $b, lineHeight: Tb, color: U, visibility: "hidden"};
            m.yAxis[0].labels.style = {fontFamily: Ta, fontSize: $b, lineHeight: Tb, color: U};
            m.yAxis[1].labels.style = {fontFamily: Ta, fontSize: $b, lineHeight: Tb, color: U};
            Kb = b(f.legenditemfont, Ta);
            da = G(f.legenditemfontsize, T);
            ka = b(f.legenditemfontcolor, U).replace(/^#?([a-f0-9]+)/ig,
                "#$1");
            fa = Qa[a(f.legenditemfontbold, 0)] || "";
            Mb = G(f.legendcaptionfontsize, T) + La;
            da += La;
            m.legend.itemStyle = {fontFamily: Kb, fontSize: da, color: ka, fontWeight: fa};
            S(m.legend.itemStyle);
            m.legend.itemHiddenStyle = {
                fontFamily: Kb,
                fontSize: da,
                color: b(f.legenditemhiddencolor, "cccccc").replace(/^#?([a-f0-9]+)/ig, "#$1"),
                fontWeight: fa
            };
            S(m.legend.itemHiddenStyle);
            m.legend.itemHoverStyle = {color: b(f.legenditemhoverfontcolor, ka).replace(/^#?([a-f0-9]+)/ig, "#$1")};
            m.legend.title.style = {
                fontFamily: b(f.legendcaptionfont,
                    Kb),
                fontSize: Mb,
                color: b(f.legendcaptionfontcolor, U).replace(/^#?([a-f0-9]+)/ig, "#$1"),
                fontWeight: Qa[a(f.legendcaptionfontbold, 1)] || ""
            };
            S(m.legend.title.style);
            m.legend.title.align = Qb[f.legendcaptionalignment && f.legendcaptionalignment.toLowerCase() || Ha] || Qb.center;
            ja = (ja = z(f.valuebordercolor, p)) ? L(ja, a(f.valueborderalpha, f.valuealpha, 100)) : p;
            m.plotOptions.series.dataLabels.style = {
                fontFamily: b(f.valuefont, Ya),
                fontSize: b(f.valuefontsize, parseInt(zb, 10)) + La,
                lineHeight: Z,
                color: L(b(f.valuefontcolor, yb),
                    a(f.valuefontalpha, f.valuealpha, 100)),
                fontWeight: a(f.valuefontbold) ? "bold" : "normal",
                fontStyle: a(f.valuefontitalic) ? "italic" : "normal",
                border: ja || f.valuebgcolor ? a(f.valueborderthickness, 1) + "px solid" : "",
                borderColor: ja,
                borderThickness: a(f.valueborderthickness, 1),
                borderPadding: a(f.valueborderpadding, 2),
                borderRadius: a(f.valueborderradius, 0),
                backgroundColor: f.valuebgcolor ? L(f.valuebgcolor, a(f.valuebgalpha, f.valuealpha, 100)) : p,
                borderDash: a(f.valueborderdashed, 0) ? e(a(f.valueborderdashlen, 4), a(f.valueborderdashgap,
                    2), a(f.valueborderthickness, 1)) : void 0
            };
            S(m.plotOptions.series.dataLabels.style);
            m.plotOptions.series.dataLabels.color = m.plotOptions.series.dataLabels.style.color;
            m.tooltip.style = {fontFamily: Ya, fontSize: zb, lineHeight: Z, color: yb};
            m.title.style = {
                fontFamily: b(f.captionfont, Ta),
                color: b(f.captionfontcolor, U).replace(/^#?([a-f0-9]+)/ig, "#$1"),
                fontSize: a(f.captionfontsize, T + 3) + La,
                fontWeight: 0 === a(f.captionfontbold) ? "normal" : "bold"
            };
            m.title.align = b(f.captionalignment, Ha);
            m.title.isOnTop = a(f.captionontop,
                1);
            m.title.alignWithCanvas = a(f.aligncaptionwithcanvas, this.alignCaptionWithCanvas, 1);
            m.title.horizontalPadding = a(f.captionhorizontalpadding, m.title.alignWithCanvas ? 0 : 15);
            S(m.title.style);
            m.subtitle.style = {
                fontFamily: b(f.subcaptionfont, f.captionfont, Ta),
                color: b(f.subcaptionfontcolor, f.captionfontcolor, U).replace(/^#?([a-f0-9]+)/ig, "#$1"),
                fontSize: a(f.subcaptionfontsize, a(X(a(f.captionfontsize) - 3, -1), T) + a(this.subTitleFontSizeExtender, 1)) + La,
                fontWeight: 0 === a(f.subcaptionfontbold, this.subTitleFontWeight,
                    f.captionfontbold) ? "normal" : "bold"
            };
            m.subtitle.align = m.title.align;
            m.subtitle.isOnTop = m.title.isOnTop;
            m.subtitle.alignWithCanvas = m.title.alignWithCanvas;
            m.subtitle.horizontalPadding = m.title.horizontalPadding;
            S(m.subtitle.style);
            ja = (ja = z(f.xaxisnamebordercolor, p)) ? L(ja, a(f.xaxisnameborderalpha, f.xaxisnamealpha, 100)) : p;
            la.title.style = {
                fontFamily: b(f.xaxisnamefont, Ta),
                fontSize: b(f.xaxisnamefontsize, parseInt($b, 10)) + La,
                color: L(b(f.xaxisnamefontcolor, U), a(f.xaxisnamefontalpha, f.xaxisnamealpha, 100)),
                fontWeight: a(f.xaxisnamefontbold,
                    1) ? "bold" : "normal",
                fontStyle: a(f.xaxisnamefontitalic) ? "italic" : "normal",
                border: ja || f.xaxisnamebgcolor ? a(f.xaxisnameborderthickness, 1) + "px solid" : void 0,
                borderColor: ja,
                borderThickness: a(f.xaxisnameborderthickness, 1),
                borderPadding: a(f.xaxisnameborderpadding, 2),
                borderRadius: a(f.xaxisnameborderradius, 0),
                backgroundColor: f.xaxisnamebgcolor ? L(f.xaxisnamebgcolor, a(f.xaxisnamebgalpha, f.xaxisnamealpha, 100)) : p,
                borderDash: a(f.xaxisnameborderdashed, 0) ? e(a(f.xaxisnameborderdashlen, 4), a(f.xaxisnameborderdashgap,
                    2), a(f.xaxisnameborderthickness, 1)) : void 0
            };
            S(la.title.style);
            ja = (ja = b(f.pyaxisnamebordercolor, f.yaxisnamebordercolor, p)) ? L(ja, a(f.pyaxisnameborderalpha, f.yaxisnameborderalpha, f.pyaxisnamealpha, f.yaxisnamealpha, 100)) : p;
            m.yAxis[0].title.style = {
                fontFamily: b(f.pyaxisnamefont, f.yaxisnamefont, Ta),
                fontSize: b(f.pyaxisnamefontsize, f.yaxisnamefontsize, parseInt($b, 10)) + La,
                color: L(b(f.pyaxisnamefontcolor, f.yaxisnamefontcolor, U), a(f.pyaxisnamefontalpha, f.yaxisnamefontalpha, f.pyaxisnamealpha, f.yaxisnamealpha,
                    100)),
                fontWeight: a(f.pyaxisnamefontbold, f.yaxisnamefontbold, 1) ? "bold" : "normal",
                fontStyle: a(f.pyaxisnamefontitalic, f.yaxisnamefontitalic) ? "italic" : "normal",
                border: ja || f.pyaxisnamebgcolor || f.yaxisnamebgcolor ? a(f.pyaxisnameborderthickness, f.yaxisnameborderthickness, 1) + "px solid" : void 0,
                borderColor: ja,
                borderThickness: a(f.pyaxisnameborderthickness, f.yaxisnameborderthickness, 1),
                borderPadding: a(f.pyaxisnameborderpadding, f.yaxisnameborderpadding, 2),
                borderRadius: a(f.pyaxisnameborderradius, f.yaxisnameborderradius,
                    0),
                backgroundColor: f.pyaxisnamebgcolor || f.yaxisnamebgcolor ? L(b(f.pyaxisnamebgcolor, f.yaxisnamebgcolor), a(f.pyaxisnamebgalpha, f.yaxisnamebgalpha, f.pyaxisnamealpha, f.yaxisnamealpha, 100)) : p,
                borderDash: a(f.pyaxisnameborderdashed, f.yaxisnameborderdashed, 0) ? e(a(f.pyaxisnameborderdashlen, f.yaxisnameborderdashlen, 4), a(f.pyaxisnameborderdashgap, f.yaxisnameborderdashgap, 2), a(f.pyaxisnameborderthickness, f.yaxisnameborderthickness, 1)) : void 0
            };
            S(m.yAxis[0].title.style);
            m.yAxis[1].title.style = {
                fontFamily: Ta, color: U,
                fontSize: $b, lineHeight: void 0, fontWeight: "bold"
            };
            ja = (ja = b(f.syaxisnamebordercolor, f.yaxisnamebordercolor, p)) ? L(ja, a(f.syaxisnameborderalpha, f.yaxisnameborderalpha, f.syaxisnamealpha, f.yaxisnamealpha, 100)) : p;
            m.yAxis[1].title.style = {
                fontFamily: b(f.syaxisnamefont, f.yaxisnamefont, Ta),
                fontSize: b(f.syaxisnamefontsize, f.yaxisnamefontsize, parseInt($b, 10)) + La,
                color: L(b(f.syaxisnamefontcolor, f.yaxisnamefontcolor, U), a(f.syaxisnamefontalpha, f.yaxisnamefontalpha, f.syaxisnamealpha, f.yaxisnamealpha, 100)),
                fontWeight: a(f.syaxisnamefontbold,
                    f.yaxisnamefontbold, 1) ? "bold" : "normal",
                fontStyle: a(f.syaxisnamefontitalic, f.yaxisnamefontitalic) ? "italic" : "normal",
                border: ja || f.syaxisnamebgcolor || f.yaxisnamebgcolor ? a(f.syaxisnameborderthickness, f.yaxisnameborderthickness, 1) + "px solid" : void 0,
                borderColor: ja,
                borderThickness: a(f.syaxisnameborderthickness, f.yaxisnameborderthickness, 1),
                borderPadding: a(f.syaxisnameborderpadding, f.yaxisnameborderpadding, 2),
                borderRadius: a(f.syaxisnameborderradius, f.yaxisnameborderradius, 0),
                backgroundColor: f.syaxisnamebgcolor ||
                f.yaxisnamebgcolor ? L(b(f.syaxisnamebgcolor, f.yaxisnamebgcolor), a(f.syaxisnamebgalpha, f.yaxisnamebgalpha, f.syaxisnamealpha, f.yaxisnamealpha, 100)) : p,
                borderDash: a(f.syaxisnameborderdashed, f.yaxisnameborderdashed, 0) ? e(a(f.syaxisnameborderdashlen, f.yaxisnameborderdashlen, 4), a(f.syaxisnameborderdashgap, f.yaxisnameborderdashgap, 2), a(f.syaxisnameborderthickness, f.yaxisnameborderthickness, 1)) : void 0
            };
            S(m.yAxis[1].title.style);
            O.overlapColumns = a(f[sa && "overlapbars" || "overlapcolumns"], q ? 0 : 1);
            m.orphanStyles =
            {
                defaultStyle: {style: g({}, C.inCanvasStyle)},
                connectorlabels: {style: g({}, m.plotOptions.series.dataLabels)},
                vyaxisname: {style: g({}, m.yAxis[0].title.style)}
            };
            m.plotOptions.series.dataLabels.tlLabelStyle = {
                fontFamily: I(f.tlfont, Ya),
                color: ca(I(f.tlfontcolor, yb)),
                fontSize: G(f.tlfontsize, Pb) + "px"
            };
            S(m.plotOptions.series.dataLabels.tlLabelStyle);
            m.plotOptions.series.dataLabels.trLabelStyle = {
                fontFamily: I(f.trfont, Ya),
                color: ca(I(f.trfontcolor, yb)),
                fontSize: G(f.trfontsize, Pb) + "px"
            };
            S(m.plotOptions.series.dataLabels.trLabelStyle);
            m.plotOptions.series.dataLabels.blLabelStyle = {
                fontFamily: I(f.blfont, Ya),
                color: ca(I(f.blfontcolor, yb)),
                fontSize: G(f.blfontsize, Pb) + "px"
            };
            S(m.plotOptions.series.dataLabels.blLabelStyle);
            m.plotOptions.series.dataLabels.brLabelStyle = {
                fontFamily: I(f.brfont, Ya),
                color: ca(I(f.brfontcolor, yb)),
                fontSize: G(f.brfontsize, Pb) + "px"
            };
            S(m.plotOptions.series.dataLabels.brLabelStyle);
            this.parseStyles(m);
            delete m.xAxis.labels.style.backgroundColor;
            delete m.xAxis.labels.style.borderColor;
            delete m.yAxis[0].labels.style.backgroundColor;
            delete m.yAxis[0].labels.style.borderColor;
            delete m.yAxis[1].labels.style.backgroundColor;
            delete m.yAxis[1].labels.style.borderColor;
            C.showTooltip = a(f.showtooltip, this.showtooltip, 1);
            C.tooltipSepChar = b(f.tooltipsepchar, this.tooltipsepchar, nb);
            C.showValues = a(f.showvalues, this.showValues, 1);
            C.seriesNameInToolTip = a(f.seriesnameintooltip, 1);
            C.showVLines = a(f.showvlines, 1);
            C.showVLinesOnTop = a(f.showvlinesontop, 0);
            C.showVLineLabels = a(f.showvlinelabels, this.showVLineLabels, 1);
            C.showVLineLabelBorder = a(f.showvlinelabelborder,
                1);
            C.rotateVLineLabels = a(f.rotatevlinelabels, 0);
            C.vLineColor = b(f.vlinecolor, "333333");
            C.vLineLabelColor = b(f.vlinelabelcolor);
            C.vLineThickness = b(f.vlinethickness, 1);
            C.vLineAlpha = a(f.vlinealpha, 80);
            C.vLineLabelBgColor = b(f.vlinelabelbgcolor, "ffffff");
            C.vLineLabelBgAlpha = a(f.vlinelabelbgalpha, q ? 50 : 100);
            C.trendlineColor = b(f.trendlinecolor, "333333");
            C.trendlineThickness = b(f.trendlinethickness, 1);
            C.trendlineAlpha = a(f.trendlinealpha);
            C.showTrendlinesOnTop = b(f.showtrendlinesontop, 0);
            C.trendlineValuesOnOpp =
                b(f.trendlinevaluesonopp, f.trendlinevaluesonright, 0);
            C.trendlinesAreDashed = a(f.trendlinesaredashed, 0);
            C.trendlinesDashLen = a(f.trendlinedashlen, 5);
            C.trendlinesDashGap = a(f.trendlinedashgap, 2);
            C.showTrendlines = a(f.showtrendlines, 1);
            C.showTrendlineLabels = a(f.showtrendlinelabels, this.showTrendlineLabels, 1);
            C.flatScrollBars = a(f.flatscrollbars, 0);
            C.scrollBar3DLighting = a(f.scrollbar3dlighting, 1);
            O.anchorTrackingRadius = a(f.anchortrackingradius, ha ? ea : t);
            m.plotOptions.series.connectNullData = a(f.connectnulldata,
                0);
            O.backgroundColor = {
                FCcolor: {
                    color: b(f.bgcolor, l.getColor(F.bgColor)),
                    alpha: b(f.bgalpha, l.getColor(F.bgAlpha)),
                    angle: b(f.bgangle, l.getColor(F.bgAngle)),
                    ratio: b(f.bgratio, l.getColor(F.bgRatio))
                }
            };
            O.rotateValues = a(f.rotatevalues, 0);
            O.placeValuesInside = a(f.placevaluesinside, 0);
            O.valuePosition = b(f.valueposition, "auto");
            O.valuePadding = a(f.valuepadding, 2);
            O.managePlotOverflow = a(f.manageplotoverflow, 1);
            O.borderColor = L(b(f.bordercolor, q ? "#666666" : l.getColor("borderColor")), b(f.borderalpha, q ? "100" : l.getColor("borderAlpha")));
            na = a(f.showborder, q ? 0 : 1);
            O.borderWidth = na ? a(f.borderthickness, 1) : 0;
            O.borderRadius = a(f.borderradius, 0);
            O.borderDashStyle = a(f.borderdashed, 0) ? e(a(f.borderdashlen, 4), a(f.borderdashgap, 2), O.borderWidth) : void 0;
            O.plotBorderColor = L(b(f.canvasbordercolor, l.getColor("canvasBorderColor")), b(f.canvasborderalpha, l.getColor("canvasBorderAlpha")));
            "0" !== f.showcanvasborder && (M = Boolean(b(f.canvasborderthickness, N ? 0 : 1)), "1" !== f.showaxislines && "1" !== f.showxaxisline && "1" !== f.showyaxisline && "1" !== f.showsyaxisline ||
            "1" === f.showcanvasborder || (M = 0));
            O.plotBorderWidth = q || !M ? 0 : a(f.canvasborderthickness, this.canvasborderthickness, O.useRoundEdges ? 1 : 2);
            O.bgSWF = b(f.bgimage, f.bgswf);
            O.bgSWFAlpha = a(f.bgimagealpha, f.bgswfalpha, 100);
            ra = b(f.bgimagedisplaymode, "none").toLowerCase();
            aa = I(f.bgimagevalign, p).toLowerCase();
            Ba = I(f.bgimagehalign, p).toLowerCase();
            "tile" == ra || "fill" == ra || "fit" == ra ? (aa != Ja && "middle" != aa && aa != Ca && (aa = "middle"), Ba != Da && "middle" != Ba && Ba != ma && (Ba = "middle")) : (aa != Ja && "middle" != aa && aa != Ca && (aa = Ja), Ba !=
            Da && "middle" != Ba && Ba != ma && (Ba = Da));
            O.bgImageDisplayMode = ra;
            O.bgImageVAlign = aa;
            O.bgImageHAlign = Ba;
            O.bgImageScale = a(f.bgimagescale, 100);
            O.logoURL = I(f.logourl);
            O.logoPosition = b(f.logoposition, "tl").toLowerCase();
            O.logoAlpha = a(f.logoalpha, 100);
            O.logoLink = I(f.logolink);
            O.logoScale = a(f.logoscale, 100);
            O.logoLeftMargin = a(f.logoleftmargin, 0);
            O.logoTopMargin = a(f.logotopmargin, 0);
            qa = O.toolbar = {button: {}};
            za = qa.button;
            za.scale = a(f.toolbarbuttonscale, 1.15);
            za.width = a(f.toolbarbuttonwidth, 15);
            za.height = a(f.toolbarbuttonheight,
                15);
            za.radius = a(f.toolbarbuttonradius, 2);
            za.spacing = a(f.toolbarbuttonspacing, 5);
            za.fill = L(b(f.toolbarbuttoncolor, "ffffff"));
            za.labelFill = L(b(f.toolbarlabelcolor, "cccccc"));
            za.symbolFill = L(b(f.toolbarsymbolcolor, "ffffff"));
            za.hoverFill = L(b(f.toolbarbuttonhovercolor, "ffffff"));
            za.stroke = L(b(f.toolbarbuttonbordercolor, "bbbbbb"));
            za.symbolStroke = L(b(f.toolbarsymbolbordercolor, "9a9a9a"));
            za.strokeWidth = a(f.toolbarbuttonborderthickness, 1);
            za.symbolStrokeWidth = a(f.toolbarsymbolborderthickness, 1);
            Na = za.symbolPadding =
                a(f.toolbarsymbolpadding, 5);
            za.symbolHPadding = a(f.toolbarsymbolhpadding, Na);
            za.symbolVPadding = a(f.toolbarsymbolvpadding, Na);
            Ga = qa.position = b(f.toolbarposition, "tr").toLowerCase();
            switch (Ga) {
                case "tr":
                case "rt":
                case "top right":
                case "right top":
                    Ga = "tr";
                    break;
                case "br":
                case "rb":
                case "bottom right":
                case "right bottom":
                    Ga = "br";
                    break;
                case "tl":
                case "lt":
                case "top left":
                case "left top":
                    Ga = "tl";
                    break;
                case "bl":
                case "lb":
                case "bottom left":
                case "left bottom":
                    Ga = "bl";
                    break;
                default:
                    Ga = "tr"
            }
            Cb = qa.hAlign = "left" ===
            (p + f.toolbarhalign).toLowerCase() ? "l" : Ga.charAt(1);
            Rb = qa.vAlign = "bottom" === (p + f.toolbarvalign).toLowerCase() ? "b" : Ga.charAt(0);
            qa.hDirection = a(f.toolbarhdirection, "r" === Cb ? -1 : 1);
            qa.vDirection = a(f.toolbarvdirection, "b" === Rb ? -1 : 1);
            qa.vMargin = a(f.toolbarvmargin, 6);
            qa.hMargin = a(f.toolbarhmargin, 10);
            qa.x = a(f.toolbarx, "l" === Cb ? 0 : c);
            qa.y = a(f.toolbary, "t" === Rb ? 0 : v);
            ob = b(f.divlinecolor, l.getColor(F.divLineColor));
            fb = b(f.divlinealpha, q ? l.getColor("divLineAlpha3D") : l.getColor("divLineAlpha"));
            bc = a(f.divlinethickness,
                1);
            vb = Boolean(a(f.divlinedashed, f.divlineisdashed, this.divLineIsDashed, 0));
            Za = a(f.divlinedashlen, 4);
            Db = a(f.divlinedashgap, 2);
            m.yAxis[0].gridLineColor = L(ob, fb);
            m.yAxis[0].gridLineWidth = bc;
            m.yAxis[0].gridLineDashStyle = vb ? e(Za, Db, bc) : "none";
            m.yAxis[0].alternateGridColor = sa ? L(b(f.alternatevgridcolor, l.getColor("altVGridColor")), 1 === a(f.showalternatevgridcolor, 1) ? b(f.alternatevgridalpha, l.getColor("altVGridAlpha")) : xa) : L(b(f.alternatehgridcolor, l.getColor("altHGridColor")), "0" === f.showalternatehgridcolor ?
                0 : b(f.alternatehgridalpha, l.getColor("altHGridAlpha")));
            Eb = a(f.vdivlinethickness, 1);
            rc = Boolean(a(f.vdivlinedashed, f.vdivlineisdashed, 0));
            sc = a(f.vdivlinedashlen, 4);
            xc = a(f.vdivlinedashgap, 2);
            la.gridLineColor = L(b(f.vdivlinecolor, l.getColor(F.divLineColor)), b(f.vdivlinealpha, l.getColor("divLineAlpha")));
            la.gridLineWidth = Eb;
            la.gridLineDashStyle = rc ? e(sc, xc, Eb) : "none";
            la.alternateGridColor = L(b(f.alternatevgridcolor, l.getColor("altVGridColor")), "1" === f.showalternatehgridcolor ? b(f.alternatevgridalpha, l.getColor("altVGridAlpha")) :
                0);
            sb = b(f.canvasbgcolor, l.getColor(F.canvasBgColor));
            Ub = b(f.canvasbgalpha, l.getColor("canvasBgAlpha"));
            b(f.showcanvasbg, lb) == xa && (Ub = "0");
            m.plotOptions.series.shadow = a(f.showshadow, f.showcolumnshadow, this.defaultPlotShadow, l.getColor("showShadow"));
            this.inversed && (m.yAxis[0].reversed = !0, m.yAxis[1].reversed = !0);
            this.isStacked && (this.distributedColumns ? (C.showStackTotal = Boolean(a(f.showsum, 1)), R = a(f.usepercentdistribution, 1), cb = a(f.showpercentvalues, 0), Wa = a(f.showpercentintooltip, R, 0), C.showXAxisPercentValues =
                a(f.showxaxispercentvalues, 1)) : (C.showStackTotal = Boolean(a(this.showSum, f.showsum, 0)), R = a(this.stack100percent, f.stack100percent, 0), cb = a(f.showpercentvalues, R, 0), Wa = a(f.showpercentintooltip, cb)), C.showPercentValues = cb, C.showPercentInToolTip = Wa, R ? (C.isValueAbs = !0, pa[ga].stacking = "percent", C[0].stacking100Percent = !0) : pa[ga].stacking = "normal");
            this.isDual && ("0" === f.primaryaxisonleft && (m.yAxis[0].opposite = !0, m.yAxis[1].opposite = !1), m.yAxis[0].showAlways = !0, m.yAxis[1].showAlways = !0);
            O.useRoundEdges && (m.plotOptions.series.shadow =
                a(f.showshadow, f.showcolumnshadow, 1), m.plotOptions.series.borderRadius = 1, m.tooltip.style.borderRadius = "2px", O.plotBorderRadius = 3, M || (O.plotBorderWidth = 0), O.plotShadow = m.plotOptions.series.shadow ? {
                enabled: !0,
                opacity: Ub / 100
            } : 0);
            1 === a(f.use3dlighting, 1) && (m.legend.lighting3d = !0);
            m.plotOptions.series.userMaxColWidth = sa ? f.maxbarheight : a(f.maxcolwidth, this.maxColWidth);
            m.plotOptions.series.maxColWidth = ia(a(m.plotOptions.series.userMaxColWidth, 50)) || 1;
            m.title.text = K(f.caption);
            m.subtitle.text = K(f.subcaption);
            0 === a(f.showtooltip, this.showtooltip) && (m.tooltip.enabled = !1);
            cc = m.tooltip.style;
            cc.backgroundColor = L(b(cc.backgroundColor, f.tooltipbgcolor, l.getColor("toolTipBgColor")), b(f.tooltipbgalpha, 100));
            cc.borderColor = L(b(cc.borderColor, f.tooltipbordercolor, l.getColor("toolTipBorderColor")), b(f.tooltipborderalpha, 100));
            m.tooltip.shadow = a(f.showtooltipshadow, f.showshadow, 1) ? {
                enabled: !0,
                opacity: X(a(f.tooltipbgalpha, 100), a(f.tooltipborderalpha, 100)) / 100
            } : !1;
            m.tooltip.constrain = a(f.constraintooltip, 1);
            cc.borderWidth =
                a(f.tooltipborderthickness, 1) + "px";
            f.tooltipborderradius && (cc.borderRadius = a(f.tooltipborderradius, 1) + "px");
            cc.padding = a(f.tooltippadding, this.tooltippadding, 3) + "px";
            f.tooltipcolor && (cc.color = ca(f.tooltipcolor));
            C.userPlotSpacePercent = m.plotOptions.series.userPlotSpacePercent = f.plotspacepercent;
            Ra = a(f.plotspacepercent, 20) % 100;
            C.plotSpacePercent = m.plotOptions.series.groupPadding = Ra / 200;
            q && !$ ? (O.series2D3Dshift = "mscombi3d" === h ? !0 : Boolean(a(f.use3dlineshift, 0)), O.canvasBaseColor3D = b(f.canvasbasecolor,
                l.getColor("canvasBaseColor3D")), O.canvasBaseDepth = a(f.canvasbasedepth, 10), O.canvasBgDepth = a(f.canvasbgdepth, 3), O.showCanvasBg = Boolean(a(f.showcanvasbg, 1)), O.showCanvasBase = Boolean(a(f.showcanvasbase, 1)), sa ? (O.xDepth = 5, O.yDepth = 5, O.showCanvasBg && (C.marginTopExtraSpace += O.canvasBgDepth), C.marginLeftExtraSpace += O.yDepth + (O.showCanvasBase ? O.canvasBaseDepth : 0), C.marginBottomExtraSpace += 5) : (O.xDepth = 10, O.yDepth = 10, O.showCanvasBg && (C.marginRightExtraSpace += O.canvasBgDepth), C.marginBottomExtraSpace += O.yDepth +
                (O.showCanvasBase ? O.canvasBaseDepth : 0)), sb = sb.split(Ea)[0], Ub = Ub.split(Ea)[0], O.use3DLighting = Boolean(a(f.use3dlighting, 1)), O.plotBackgroundColor = O.use3DLighting ? {
                FCcolor: {
                    color: n(sb, 85) + Ea + E(sb, 55),
                    alpha: Ub + Ea + Ub,
                    ratio: Ua,
                    angle: k(c - (O.marginLeft + O.marginRight), v - (O.marginTop + O.marginBottom), 1)
                }
            } : L(sb, Ub), O.canvasBgColor = L(n(sb, 80), Ub), P = b(f.zeroplanecolor, f.divlinecolor, l.getColor(F.divLineColor)), u = b(f.zeroplanealpha, f.divlinealpha, l.getColor("divLineAlpha")), O.zeroPlaneColor = L(P, u), O.zeroPlaneBorderColor =
                L(b(f.zeroplanebordercolor, P), a(f.zeroplaneshowborder, 1) ? u : 0), O.zeroPlaneShowBorder = a(f.zeroplaneshowborder, 1)) : (O.is3D = !1, O.plotBackgroundColor = {
                FCcolor: {
                    color: sb,
                    alpha: Ub,
                    angle: b(f.canvasbgangle, l.getColor("canvasBgAngle")),
                    ratio: b(f.canvasbgratio, l.getColor("canvasBgRatio"))
                }
            });
            this.parseExportOptions(m);
            this.parseHoverEffectOptions(O);
            this.preSeriesAddition && this.preSeriesAddition(m, B, c, v);
            this.series && this.series(B, m, h, c, v);
            this.postSeriesAddition(m, B, c, v);
            this.spaceManager(m, B, c, v);
            this.postSpaceManager &&
            this.postSpaceManager(m, B, c, v);
            Ib = a(f.drawquadrant, 0);
            C.isXYPlot && Ib && (mb = la.min, ya = la.max, Xa = m.yAxis[0].min, eb = m.yAxis[0].max, gb = a(f.quadrantxval, (mb + ya) / 2), Va = a(f.quadrantyval, (Xa + eb) / 2), Va >= Xa && Va <= eb && gb >= mb && gb <= ya && (xb = L(b(f.quadrantlinecolor, O.plotBorderColor), b(f.quadrantlinealpha, Aa)), hb = a(f.quadrantlinethickness, O.plotBorderWidth), ub = a(f.quadrantlinedashed, f.quadrantlineisdashed, 0), Hb = a(f.quadrantlinedashLen, 4), Ka = a(f.quadrantlinedashgap, 2), Xb = I(f.quadrantlabeltl, p), yc = I(f.quadrantlabeltr,
                p), Wb = I(f.quadrantlabelbl, p), Vb = I(f.quadrantlabelbr, p), Sb = a(f.quadrantlabelpadding, 3), qc = ub ? e(Hb, Ka, hb) : "none", la.plotLines.push({
                color: xb,
                value: gb,
                width: hb,
                dashStyle: qc,
                zIndex: 3
            }), m.yAxis[0].plotLines.push({
                color: xb,
                value: Va,
                width: hb,
                dashStyle: qc,
                zIndex: 3
            }), oc = c - O.marginRight - O.marginLeft, Yb = v - O.marginTop - O.marginBottom, kb = C.inCanvasStyle, va = oc / (ya - mb) * (gb - mb), Nb = oc - va, Ia = Yb / (eb - Xa) * (Va - Xa), Ic = Yb - Ia, va -= Sb, Nb -= Sb, Ic -= Sb, Ia -= Sb, Ab = Sb + La, Bb = Yb - Sb + La, Zb = Sb + La, gc = oc - Sb + La, w.setStyle(kb), 0 < Ic && (Xb !==
            p && 0 < va && (Ob = w.getSmartText(Xb, va, Ic), m.labels.items.push({
                html: Ob.text,
                zIndex: 3,
                vAlign: Ja,
                style: {
                    left: Zb,
                    top: Ab,
                    fontSize: kb.fontSize,
                    lineHeight: kb.lineHeight,
                    fontFamily: kb.fontFamily,
                    color: kb.color
                }
            })), yc !== p && 0 < Nb && (Ob = w.getSmartText(yc, Nb, Ic), m.labels.items.push({
                html: Ob.text,
                textAlign: ma,
                vAlign: Ja,
                zIndex: 3,
                style: {
                    left: gc,
                    top: Ab,
                    fontSize: kb.fontSize,
                    lineHeight: kb.lineHeight,
                    fontFamily: kb.fontFamily,
                    color: kb.color
                }
            }))), 0 < Ia && (Wb !== p && 0 < va && (Ob = w.getSmartText(Wb, va, Ia), m.labels.items.push({
                html: Ob.text,
                vAlign: Ca,
                zIndex: 3,
                style: {
                    left: Zb,
                    top: Bb,
                    fontSize: kb.fontSize,
                    lineHeight: kb.lineHeight,
                    fontFamily: kb.fontFamily,
                    color: kb.color
                }
            })), Vb !== p && 0 < Nb && (Ob = w.getSmartText(Vb, Nb, Ia), m.labels.items.push({
                html: Ob.text,
                textAlign: ma,
                vAlign: Ca,
                zIndex: 3,
                style: {
                    left: gc,
                    top: Bb,
                    fontSize: kb.fontSize,
                    lineHeight: kb.lineHeight,
                    fontFamily: kb.fontFamily,
                    color: kb.color
                }
            })))));
            if (this.hasVDivLine && (rb = a(f.showvdivlines, 0), fc = a(f.numvdivlines, 0) + 1, rb && (fc = C.x.catCount - 1), 1 < fc)) {
                ab = la.min;
                mc = C.x.catCount - 1;
                Gb = la.max;
                Jb = mc /
                    fc;
                Oc = !0;
                hc = ab;
                la.scroll && !isNaN(la.scroll.viewPortMax) && (Gb = la.scroll.viewPortMax);
                lc = b(f.vdivlinecolor, ob);
                ed = a(f.vdivlinealpha, fb);
                Eb = a(f.vdivlinethickness, bc);
                rc = a(f.vdivlinedashed, f.vdivlineisdashed, vb);
                sc = a(f.vdivlinedashlen, Za);
                xc = a(f.vdivlinedashgap, Db);
                ($c = a(f.showalternatevgridcolor, 0)) && (ic = L(b(f.alternatevgridcolor, l.getColor("altVGridColor")), b(f.alternatevgridalpha, l.getColor("altVGridAlpha"))));
                for (Sa = Jb; Sa < mc; Sa += Jb, Oc = !Oc)Oc && $c && la.plotBands.push({
                    isNumVDIV: !0, color: ic, from: hc, to: Sa,
                    zIndex: 1
                }), la.plotLines.push({
                    isNumVDIV: !0,
                    width: Eb,
                    color: L(lc, ed),
                    dashStyle: rc ? e(sc, xc, Eb) : "none",
                    value: Sa,
                    zIndex: 1
                }), hc = Sa;
                Oc && $c && la.plotBands.push({isNumVDIV: !0, color: ic, from: hc, to: Gb, zIndex: 1})
            }
            V = O.marginTop;
            Y = O.marginBottom;
            bb = O.marginLeft;
            wb = O.marginRight;
            wa.canvasstartx = bb;
            wa.canvasstarty = V;
            wa.canvasendx = c - wb;
            wa.canvasendy = v - Y;
            wa.canvaswidth = wa.canvasendx - wa.canvasstartx;
            wa.canvasheight = wa.canvasendy - wa.canvasstarty;
            m.legend && m.legend.enabled && "vertical" === m.legend.layout && (wa.legendstarty =
                V + .5 * (C.height - Y - V - wa.legendheight) + (m.legend.y || 0), wa.legendendy = wa.legendstarty + wa.legendheight);
            q && O.xDepth > O.marginLeft && (O.marginLeft = O.xDepth);
            D.console && D.console.log && D.FC_DEV_ENVIRONMENT && console.log(m);
            return m
        },
        parseHoverEffectOptions: function (c) {
            var d = this.dataObj.chart, e;
            c.showHoverEffect = d.showhovereffect;
            c.plotHoverEffect = a(d.plothovereffect, d.anchorhovereffect, c.showHoverEffect);
            e = c.plotHoverEffects = {enabled: c.plotHoverEffect};
            e.highlight = a(d.highlightonhover, d.highlightplotonhover,
                c.plotHoverEffect);
            e.columnHighlight = a(e.highlight, d.highlightcolumnonhover, d.highlightbaronhover);
            e.anchorHighlight = a(e.highlight, d.highlightanchoronhover);
            e.imageHighlight = a(e.highlight, d.highlightanchorimageonhover);
            e.anchorImageHoverAlpha = b(d.anchorimagehoveralpha);
            e.anchorImageHoverScale = b(d.anchorimagehoverscale);
            e.bubbleHighlight = a(e.highlight, d.highlightbubbleonhover);
            e.color = b(d.plotfillhovercolor, d.columnhovercolor, d.barhovercolor, d.bubblehovercolor);
            e.alpha = b(d.plotfillhoveralpha, d.columnhoveralpha,
                d.barhoveralpha, d.bubblehoveralpha);
            e.scale = b(d.plothoverscale, d.columnhoverscale, d.barhoverscale, d.bubblehoverscale);
            e.gradientColor = d.plothovergradientcolor;
            e.ratio = d.plothoverratio;
            e.angle = d.plothoverangle;
            e.borderColor = d.plotborderhovercolor;
            e.borderAlpha = d.plotborderhoveralpha;
            e.borderThickness = d.plotborderhoverthickness;
            e.borderDashed = d.plotborderhoverdashed;
            e.borderDashGap = d.plotborderhoverdashgap;
            e.borderDashLen = d.plotborderhoverdashlen;
            e.shadow = d.plothovershadow;
            e.anchorScale = d.anchorhoverscale;
            e.anchorSides = d.anchorhoversides;
            e.anchorRadius = d.anchorhoverradius;
            e.anchorAlpha = d.anchorhoveralpha;
            e.anchorBgColor = b(d.anchorbghovercolor, d.anchorhovercolor);
            e.anchorBgAlpha = d.anchorbghoveralpha;
            e.anchorBorderColor = d.anchorborderhovercolor;
            e.anchorBorderAlpha = d.anchorborderhoveralpha;
            e.anchorBorderThickness = d.anchorborderhoverthickness;
            e.anchorStartAngle = d.anchorhoverstartangle;
            e.anchorDip = a(d.anchorhoverdip);
            e.anchorAnimation = a(d.anchorhoveranimation, 1);
            e.negativeColor = b(d.negativehovercolor, d.negativecolor);
            e.is3DBubble = a(d.is3donhover)
        },
        parseExportOptions: function (c) {
            var d = this.chartInstance, e = this.dataObj.chart;
            g(c.exporting, {
                enabled: a(e.exportenabled, 0),
                bgcolor: d.jsVars.transparent || 0 === a(d.options.containerBackgroundOpacity, 1) ? p : d.options.containerBackgroundColor || "#ffffff",
                bgalpha: (d.jsVars.transparent ? 0 : a(d.options.containerBackgroundOpacity, 1)) + p,
                exporttargetwindow: b(e.exporttargetwindow, Hb ? "_blank" : "_self"),
                exportaction: e.exportaction && "save" === e.exportaction.toString().toLowerCase() && "save" ||
                "download",
                exportfilename: b(e.exportfilename, "FusionCharts"),
                exporthandler: b(e.html5exporthandler, e.exporthandler, N),
                exportparameters: b(e.exportparameters, p),
                exportformat: b(e.exportformat, "PNG"),
                buttons: {
                    printButton: {enabled: !!a(e.printshowbutton, e.showprintmenuitem, 0)},
                    exportButton: {enabled: !(!a(e.exportenabled, 0) || !a(e.exportshowbutton, e.exportshowmenuitem, 1))}
                }
            });
            var d = c.exporting, k;
            e = e.exportformats;
            c = q(c.exporting.exportaction);
            c = {
                JPG: c + " as JPEG image", PNG: c + " as PNG image", PDF: c + " as PDF document",
                SVG: c + " as SVG vector image"
            };
            var f, h, B;
            if (e) {
                e = e.split(/\s*?\|\s*?/);
                for (B = 0; B < e.length; B++)h = (f = e[B].split(/\s*?=\s*?/)) && f[0].toUpperCase() || p, f = f && f[1] || p, c[h] && (k || (k = {})) && (k[h] = f || c[h]);
                k = k || c
            } else k = c;
            d.exportformats = k
        },
        defaultSeriesType: p,
        paletteIndex: 1,
        creditLabel: ub,
        titleSpaceManager: Na,
        placeLegendBlockBottom: Ya,
        configureLegendOptions: la,
        placeLegendBlockRight: zb,
        placeHorizontalAxis: ja,
        placeVerticalAxis: Lb,
        placeHorizontalCanvasMarginAdjustment: Pb,
        placeVerticalCanvasMarginAdjustment: $b,
        placeHorizontalXYSpaceManager: function (c,
                                                 d, e, k) {
            var f = c[s], g, h, B, m, l = d.chart, p, q, n, J, t, P, u, R = c.chart, w = f.marginLeftExtraSpace, z = f.marginTopExtraSpace, C = f.marginBottomExtraSpace, $ = f.marginRightExtraSpace;
            m = e - (w + $ + R.marginRight + R.marginLeft);
            var ga = k - (C + R.marginBottom + R.marginTop), ha = .3 * m;
            e = .3 * ga;
            var O = c.xAxis.showLine ? c.xAxis.lineThickness : 0;
            B = c.yAxis[0].showLine ? c.yAxis[0].lineThickness : 0;
            g = m - ha;
            k = ga - e;
            p = b(l.legendposition, Ca).toLowerCase();
            c.legend.enabled && p === ma && (g -= this.placeLegendBlockRight(c, d, g / 2, ga));
            t = a(l.xaxisnamepadding, 5);
            P =
                a(l.labelpadding, 4);
            u = b(l.rotatexaxisname, "ccw");
            u = u === xa ? "none" : u;
            q = b(l.showplotborder, f.is3d ? xa : lb) === lb;
            q = f.plotBorderThickness = q ? f.is3d ? 1 : a(l.plotborderthickness, 1) : 0;
            n = X(a(R.plotBorderWidth, 1), 0);
            !f.isDual && R.marginRight < n && void 0 === l.chartrightmargin && (h = n - R.marginRight, m > ha + h && (R.marginRight = n, m -= h, ha = .3 * m, g = m - ha));
            h = f.x;
            J = X(n, q / 2);
            P < J && (P = J);
            h.verticalAxisNamePadding = t;
            h.verticalAxisValuesPadding = P + O;
            h.rotateVerticalAxisName = u;
            h.verticalAxisNameWidth = a(l.xaxisnamewidth);
            g -= Lb(c.xAxis, h, c,
                d, ga, g, !1, !1, m);
            c.xAxis.lineEndExtension = B;
            g -= Pb(c, d, g, c.xAxis);
            m = g + ha;
            c.legend.enabled && p !== ma && (k -= this.placeLegendBlockBottom(c, d, m, k / 2));
            k -= this.titleSpaceManager(c, d, m, k / 2);
            h = f[0];
            h.horizontalAxisNamePadding = a(l.yaxisnamepadding, 5);
            h.horizontalLabelPadding = X(a(l.yaxisvaluespadding, 4)) + B;
            h.labelDisplay = "auto";
            h.staggerLines = a(l.staggerlines, 2);
            h.slantLabels = a(l.slantlabels, 0);
            h.horizontalLabelPadding = h.horizontalLabelPadding < n ? n : h.horizontalLabelPadding;
            this.xAxisMinMaxSetter(c, d, m);
            B = c.xAxis;
            t = B.plotLines;
            g = k / (B.max - B.min);
            t && t.length && (n = (t[0].value - B.min) * g, t = (B.max - t[t.length - 1].value) * g, f.isBar && (q > n && (B.min -= (q - n) / (2 * g)), q > t && (B.max += (q - t) / (2 * g))));
            k -= this.placeHorizontalAxis(c.yAxis[0], h, c, d, m, k, ha);
            k -= $b(c, d, k, c.yAxis[0]);
            yb(e + k, c, l, c.xAxis, f.x.lYLblIdx, !0);
            Ta(c, c.xAxis.title, k);
            c.legend.enabled && p === ma && (c = c.legend, d = e + k, c.height > d && (c.height = d, c.scroll.enabled = !0, d = (c.scroll.scrollBarWidth = 10) + (c.scroll.scrollBarPadding = 2), c.width += d, R.marginRight += d), c.y = 20);
            R.marginLeft += w;
            R.marginTop += z;
            R.marginBottom += C;
            R.marginRight += $
        },
        placeVerticalXYSpaceManager: function (c, d, e, k) {
            var f = c[s], g, h, B = !0;
            g = 0;
            var m = d.chart, l = !1, p, q, n, J, t = c.chart, P, u, R, w = f.marginLeftExtraSpace, z = f.marginTopExtraSpace, C = f.marginBottomExtraSpace, $ = f.marginRightExtraSpace;
            J = e - (w + $ + t.marginRight + t.marginLeft);
            var ga = k - (C + t.marginBottom + t.marginTop), ha = .3 * J;
            k = .3 * ga;
            var O = J - ha;
            e = ga - k;
            g = f.drawFullAreaBorder = a(m.drawfullareaborder, 1);
            var D = b(m.legendposition, Ca).toLowerCase();
            P = c.xAxis.showLine ? c.xAxis.lineThickness :
                0;
            u = c.yAxis[0].showLine ? c.yAxis[0].lineThickness : 0;
            R = f.isDual && c.yAxis[1].showLine ? c.yAxis[1].lineThickness : 0;
            p = a(m.yaxisnamepadding, 5);
            q = a(m.yaxisvaluespadding, m.labelypadding, 4);
            h = b(m.showplotborder, f.is3d ? xa : lb) === lb;
            h = f.plotBorderThickness = h ? f.is3d ? 1 : a(m.plotborderthickness, 1) : 0;
            n = X(a(t.plotBorderWidth, 1), 0);
            h = X(n, h / 2);
            "area" !== this.defaultSeriesType || g || (h = n);
            q < n && (q = n);
            !f.isDual && t.marginRight < n && void 0 === m.chartrightmargin && (g = n - c.chart.marginRight, J > ha + g && (J -= g, ha = .3 * J, O = J - ha));
            c.legend.enabled &&
            D === ma && (O -= this.placeLegendBlockRight(c, d, O / 2, ga));
            f.isDual && (l = !0, g = f[1], B = c.yAxis[1].opposite, n = b(m.rotateyaxisname, B ? "cw" : "ccw"), n = n === xa ? "none" : n, g.verticalAxisNamePadding = p, g.verticalAxisValuesPadding = q + R, g.rotateVerticalAxisName = n, g.verticalAxisNameWidth = a(m.syaxisnamewidth), O -= Lb(c.yAxis[1], g, c, d, ga, O / 2, B, l));
            g = f[0];
            B = !B;
            n = b(m.rotateyaxisname, B ? "cw" : "ccw");
            n = n === xa ? "none" : n;
            g.verticalAxisNamePadding = p;
            g.verticalAxisValuesPadding = q + u;
            g.rotateVerticalAxisName = n;
            g.verticalAxisNameWidth = a(l ? m.pyaxisnamewidth :
                m.yaxisnamewidth);
            O -= Lb(c.yAxis[0], g, c, d, ga, O, B, l, J);
            O -= Pb(c, d, O, c.yAxis[0], c.yAxis[1]);
            B = O + ha;
            c.legend.enabled && D !== ma && (e -= this.placeLegendBlockBottom(c, d, B, e / 2));
            e -= this.titleSpaceManager(c, d, B, e / 2);
            g = f.x;
            g.horizontalAxisNamePadding = a(m.xaxisnamepadding, 5);
            g.horizontalLabelPadding = a(m.labelpadding, m.labelxpadding, 4) + P;
            g.labelDisplay = b(m.labeldisplay, "auto").toLowerCase();
            g.rotateLabels = a(m.rotatelabels, m.rotatexaxislabels, 0);
            g.staggerLines = a(m.staggerlines, 2);
            g.slantLabels = a(m.slantlabels, m.slantlabel,
                0);
            c.yAxis[0].opposite ? (c.xAxis.lineEndExtension = u, c.xAxis.lineStartExtension = R) : (c.xAxis.lineEndExtension = R, c.xAxis.lineStartExtension = u);
            g.horizontalLabelPadding < h && (g.horizontalLabelPadding = h);
            J = {left: 0, right: 0};
            J = t.managePlotOverflow && this.canvasPaddingModifiers && this.calculateCanvasOverflow(c, !0) || J;
            P = J.left + J.right;
            u = .6 * B;
            P > u && (R = J.left / P, J.left -= R * (P - u), J.right -= (1 - R) * (P - u));
            this.xAxisMinMaxSetter(c, d, B, J.left, J.right);
            e -= this.placeHorizontalAxis(c.xAxis, g, c, d, B, e, ha);
            e -= $b(c, d, e, c.xAxis);
            c.title.alignWithCanvas || ("left" === c.title.align && c.yAxis[0].title.text && Tb(c, c.yAxis[0].title, k + e), "right" === c.title.align && l && c.yAxis[1].title.text && Tb(c, c.yAxis[1].title, k + e));
            l && (yb(k + e, c, m, c.yAxis[1], f[1].lYLblIdx), Ta(c, c.yAxis[1].title, k + e));
            yb(k + e, c, m, c.yAxis[0], f[0].lYLblIdx);
            Ta(c, c.yAxis[0].title, k + e);
            c.legend.enabled && D === ma && (c = c.legend, d = k + e, c.height > d && "gradient" !== c.type && (c.height = d, c.scroll.enabled = !0, d = (c.scroll.scrollBarWidth = 10) + (c.scroll.scrollBarPadding = 2), c.width += d, t.marginRight +=
                d));
            t.marginLeft += w;
            t.marginTop += z;
            t.marginBottom += C;
            t.marginRight += $
        },
        placeVerticalAxisTitle: Ta,
        calculateCanvasOverflow: function (a, b) {
            for (var c = this.canvasPaddingModifiers, d = a.chart, f = this.smartLabel, e = 0, k = 0, g = 0, h = 0, B = e = !1, m = !1, l = c && c.length || 0, q, n, J, s, t; l--;)switch (k = c[l], k) {
                case "anchor":
                    B = n = e = !0;
                    break;
                case "anchorlabel":
                    J = n = e = !0;
                    break;
                case "errorbar":
                    m = e = !0
            }
            if (e && (l = (c = a.series) && c.length || 0, b))for (; l--;)q = c[l], n && (e = q && q.data || [], 1 < e.length && (s = e[0], t = e[e.length - 1], B && (e = s && s.marker && s.marker.enabled &&
                (s.marker.radius || 0) + (s.marker.lineWidth || 0) || 0, k = t && t.marker && t.marker.enabled && (t.marker.radius || 0) + (t.marker.lineWidth || 0) || 0, g = X(e + 2, g), h = X(k + 2, h)), J && (f.setStyle(a.plotOptions.series.dataLabels.style), d.rotateValues ? (k = f.getOriSize(s && s.displayValue || p), e = k.height / 2, k = f.getOriSize(t && t.displayValue || p), k = k.height / 2) : (k = f.getOriSize(s && s.displayValue || p), e = k.width / 2, k = f.getOriSize(t && t.displayValue || p), k = k.width / 2), g = X(e + 2, g), h = X(k + 2, h)))), m && (k = e = q.errorBarWidth / 2 + q.errorBarThickness || 0, g = X(e +
                2, g), h = X(k + 2, h));
            return {left: g, right: h}
        },
        spaceManager: function () {
            return this.placeVerticalXYSpaceManager.apply(this, arguments)
        },
        axisMinMaxSetter: function (b, c, d, e, f, k, g, h) {
            d = c.stacking100Percent ? ga(99, 1, 100, 0, f, k, g, h) : ga(a(c.max, d), a(c.min, e), d, e, f, k, g, h);
            b.min = Number(m(d.Min, 10));
            b.max = Number(m(d.Max, 10));
            b.tickInterval = Number(m(d.divGap, 10));
            c.numdivlines = u.round((b.max - b.min) / b.tickInterval) - 1;
            2 >= d.Range / d.divGap && (b.alternateGridColor = T);
            this.highValue = c.max;
            this.lowValue = c.min;
            delete c.max;
            delete c.min
        },
        configurePlotLines: function (c, d, e, k, f, g, h, B, l, q, n) {
            var J = e.min, t = e.max, P = e.tickInterval, u = q ? "xAxis" : k.stacking100Percent ? "percentValue" : "yAxis", R = J, w = 1, z = e.gridLineColor, C = e.gridLineWidth, $ = e.gridLineDashStyle, ga = 0 > J && 0 < t ? !0 : !1, ha = 0 === J, O = 0 === t, D = 0 === a(k.showzeroplanevalue, c.showzeroplanevalue), sa = !0, pa, I = 1, na = 0 < a(c.numdivlines, 0), E = d[s].axisGridManager, F = this.colorManager, M = this.is3D, la = a(c.showaxislimitgridlines, this.showAxisLimitGridLines), M = a(la, M || d.chart.plotBorderWidth ? 0 : 1), Fa = this.inversed;
            d = d.xAxis;
            n = a(n, l ? 1 : 0);
            delete e._altGrid;
            delete e._lastValue;
            q && !k.catOccupied && (k.catOccupied = {});
            !ga || q && k.catOccupied[0] || (q ? (sa = a(c.showvzeroplane, 1), pa = a(c.showvzeroplanevalue, g), na = a(c.vzeroplanethickness, 1), F = b(c.vzeroplanealpha, c.vdivlinealpha, F.getColor("divLineAlpha")), c = 0 < na ? L(b(c.vzeroplanecolor, z), F) : T) : (F = a(c.divlinealpha, F.getColor("divLineAlpha")), pa = a(k.showzeroplanevalue, c.showzeroplanevalue, g), !1 === this.defaultZeroPlaneHighlighted ? (sa = a(k.showzeroplane, c.showzeroplane, !(this.defaultZeroPlaneHidden && !na)), na = C) : (na = 1 === C ? 2 : C, I = 5, F = V(2 * F, 100)), na = a(k.zeroplanethickness, c.zeroplanethickness, na), F = b(k.zeroplanealpha, c.zeroplanealpha, F), c = 0 < na ? L(b(k.zeroplanecolor, c.zeroplanecolor, z), F) : T), sa && (pa = pa ? B[u](0, n) : p, (I = E.addAxisGridLine(e, 0, pa, na, $, c, I, q)) && (I.isZeroPlane = !0)), e.effectiveZeroPlaneThickness = sa && parseInt(F, 10) && na);
            q && k.catOccupied[J] || (pa = !f || ha && D ? p : B[u](J, n), (I = la || M && (Fa || !d.showLine) ? E.addAxisGridLine(e, J, pa, C, $, z || T, 2, q) : E.addAxisGridLine(e, J, pa, .1, void 0, T, 2, q)) && (I.isMinLabel = !0));
            0 >= C && (C = .1, z = T);
            for (J = Number(m(R + P, 10)); J < t; J = Number(m(J + P, 10)), w += 1)ga && 0 > R && 0 < J && !l && (E.addAxisAltGrid(e, 0), w += 1), 0 === J || q && k.catOccupied[J] || (pa = 1 === g && 0 === w % h ? B[u](J, n) : p, E.addAxisGridLine(e, J, pa, C, $, z, 2, q)), R = J, l || E.addAxisAltGrid(e, J);
            l || E.addAxisAltGrid(e, t);
            0 !== w % h || q && k.catOccupied[t] || (pa = !f || O && D ? p : B[u](t, n), (I = la || M && (!Fa || !d.showLine) ? E.addAxisGridLine(e, t, pa, C, $, z || T, 2, q) : E.addAxisGridLine(e, t, pa, .1, $, T, 2, q)) && (I.isMaxLabel = !0));
            this.realtimeEnabled && (e.labels._enabled = e.labels.enabled,
                e._gridLineWidth = e.gridLineWidth, e._alternateGridColor = e.alternateGridColor);
            e.labels.enabled = !1;
            e.gridLineWidth = 0;
            e.alternateGridColor = T;
            e.plotLines.sort(wb)
        },
        xAxisMinMaxSetter: function (b, d, e, k, f) {
            var g = b[s], h = g.x, B = d.chart, m = h.min = a(h.min, 0), l = h.max = a(h.max, h.catCount - 1), p = 0, q = 0, n = b.chart.defaultSeriesType, J = /^(column|column3d|bar|bar3d|floatedcolumn|sparkwinloss|boxandwhisker2d|dragcolumn)$/.test(n), t = /^(line|area|spline|areaspline)$/.test(n), n = /^(scatter|bubble|candlestick|dragnode)$/.test(n),
                P = b.xAxis, u = P.scroll, R = u && u.enabled, w = a(B.canvaspadding), z = void 0 !== w && null !== w, C = Ba(V(a(w, k, 0), e / 2 - 10)), w = Ba(V(a(w, f, 0), e / 2 - 10)), $, ga, ha, O;
            h.adjustMinMax && ($ = a(B.setadaptivexmin, 1), l = m = !$, ga = a(this.numVDivLines, B.numvdivlines, 4), ha = B.adjustvdiv !== xa, O = a(B.showxaxisvalues, B.showxaxisvalue, 1), $ = a(B.showvlimits, O), O = a(B.showvdivlinevalue, B.showvdivlinevalues, O), this.axisMinMaxSetter(P, h, B.xaxismaxvalue, B.xaxisminvalue, m, l, ga, ha), m = P.min, l = P.max, h.requiredAutoNumericLabels && (ga = a(parseInt(B.xaxisvaluesstep,
                10), 1), this.configurePlotLines(B, b, P, h, $, O, 1 > ga ? 1 : ga, g.numberFormatter, !1, !0)), P.plotLines.sort(wb));
            P.labels.enabled = !1;
            P.gridLineWidth = 0;
            P.alternateGridColor = T;
            !J && !g.isScroll || g.hasNoColumn || z || void 0 === k || null === k || void 0 === f || null === f || (q = e / (l - m + 1) * .5, C = 0 < q - k ? 0 : C, w = 0 < q - f ? 0 : w, p = 0 < q - k ? .5 : 0, q = 0 < q - f ? .5 : 0);
            J && !g.hasNoColumn && (q = p = .5);
            g.is3d && (C += a(b.chart.xDepth, 0));
            b = (e - (C + w)) / ((R ? u.vxLength : l) - m + (p + q));
            P.min = m - (p + C / b);
            P.max = l + (q + w / b);
            R && (p = u.vxLength, b = P.max - P.min, u.viewPortMin = P.min, u.viewPortMax =
                P.max, u.scrollRatio = p / b, u.flatScrollBars = g.flatScrollBars, u.scrollBar3DLighting = g.scrollBar3DLighting, P.max = P.min + p);
            t && P.min === P.max && (P.min -= .65, P.max += .65);
            n && d.vtrendlines && c(d.vtrendlines, P, g, !1, !0, !0)
        },
        postSeriesAddition: function (c) {
            var d = c[s], e = d.isBar, k = d.is3d, f = c.chart.rotateValues && !e ? 270 : 0, B = d[0], m = B && B.stacking100Percent, l, p, q, n, J, t, P, u, R, w, C, z, $, ga, ha, O, D, sa, pa, I, na, F, E;
            if (this.isStacked)for (q in l = d.plotSpacePercent, p = c.chart.defaultSeriesType, l = 1 - 2 * l, O = c.series, D = this.numberFormatter,
                na = g({}, c.plotOptions.series.dataLabels.style), F = parseFloat(na.fontSize), E = !B.stacking100Percent, na.color = c.plotOptions.series.dataLabels.color, n = B.stack, n) {
                B = n[q].length;
                J = l / B;
                P = -(l - J) / 2;
                ga = [];
                z = 0;
                for (u = O.length; z < u; z += 1)R = O[z], R.yAxis || b(R.type, p) !== q || ga.push(R);
                for (t = 0; t < B; t += 1, P += J) {
                    C = n[q][t];
                    ha = [];
                    z = 0;
                    for (u = ga.length; z < u; z += 1)R = ga[z], a(R.columnPosition, 0) === t && ha.push(R.data);
                    if (C && C.length)for (w = 0, R = C.length; w < R; w += 1)if (z = C[w])for ($ = (z.n || 0) + (z.p || 0), d.showStackTotal && (u = w, u += P, z = 0 > $ ? z.n : z.p,
                        c.xAxis.plotLines.push({
                            value: u,
                            width: 0,
                            isVline: E,
                            isTrend: !E,
                            zIndex: 4,
                            _isStackSum: 1,
                            _catPosition: w,
                            _stackIndex: t,
                            label: {
                                align: Ha,
                                textAlign: k || 270 !== f ? e ? 0 > $ ? ma : Da : Ha : 0 > $ ? ma : Da,
                                offsetScale: E ? z : void 0,
                                offsetScaleIndex: 0,
                                rotation: f,
                                style: na,
                                verticalAlign: Ja,
                                y: e ? 0 : 0 > $ ? 270 === f ? 4 : F : -4,
                                x: 0,
                                text: d.numberFormatter.yAxis($)
                            }
                        })), z = 0, u = ha.length; z < u; z += 1)if (pa = ha[z][w])if (I = $ && (pa.y || 0) / $ * 100, sa = D.percentValue(I), pa.toolText = h(pa.toolText, [14, 24, 25, 112], {
                            percentValue: sa,
                            sum: D.dataLabels($),
                            unformattedSum: $
                        }),
                        pa.y || 0 === pa.y)m && (pa.y = I, pa.previousY || 0 === pa.previousY) && (pa.previousY = pa.previousY / $ * 100), pa.showPercentValues && (pa.displayValue = sa)
                }
            }
        },
        styleMapForFont: za,
        styleApplicationDefinition_font: function (a, b, c) {
            var d, f, e = !1, k, g, h = this.styleMapForFont;
            switch (b) {
                case "caption":
                    d = a.title;
                    break;
                case "datalabels":
                    d = a.xAxis.labels;
                    break;
                case "datavalues":
                    d = a.plotOptions.series.dataLabels;
                    e = !0;
                    break;
                case "tldatavalues":
                    d = {style: a.plotOptions.series.dataLabels.tlLabelStyle};
                    break;
                case "trdatavalues":
                    d = {style: a.plotOptions.series.dataLabels.trLabelStyle};
                    break;
                case "bldatavalues":
                    d = {style: a.plotOptions.series.dataLabels.blLabelStyle};
                    break;
                case "brdatavalues":
                    d = {style: a.plotOptions.series.dataLabels.brLabelStyle};
                    break;
                case "subcaption":
                    d = a.subtitle;
                    break;
                case "tooltip":
                    d = a.tooltip;
                    break;
                case "trendvalues":
                    d = {style: a[s].trendStyle};
                    break;
                case "xaxisname":
                    d = a.xAxis.title;
                    break;
                case "yaxisname":
                case "pyaxisname":
                case "axistitle":
                    d = [];
                    b = 0;
                    for (k = a.yAxis.length; b < k; b += 1)d.push(a.yAxis[b].title);
                    break;
                case "yaxisvalues":
                    d = [];
                    b = 0;
                    for (k = a.yAxis.length; b <
                    k; b += 1)d.push(a.yAxis[b].labels);
                    break;
                case "vlinelabels":
                    d = {style: a[s].divlineStyle};
                    break;
                case "legend":
                    d = {style: a.legend.itemStyle};
                    break;
                default:
                    (d = a.orphanStyles[b]) || (a.orphanStyles[b] = d = {text: "", style: {}})
            }
            if ("object" === typeof d)if (d instanceof Array)for (b = 0, k = d.length; b < k; b += 1) {
                g = d[b];
                for (f in c)if (a = f.toLowerCase(), "function" === typeof h[a])h[a](c[f], g, e);
                S(g.style)
            } else {
                for (f in c)if (a = f.toLowerCase(), "function" === typeof h[a])h[a](c[f], d, e);
                S(d.style)
            }
        },
        parseStyles: function (a) {
            var b, c, d,
                f = {}, e, k = this.dataObj;
            if (k.styles && k.styles.definition instanceof Array && k.styles.application instanceof Array) {
                for (b = 0; b < k.styles.definition.length; b += 1)c = k.styles.definition[b], c.type && c.name && this["styleApplicationDefinition_" + c.type.toLowerCase()] && (f[c.name.toLowerCase()] = c);
                for (b = 0; b < k.styles.application.length; b += 1)for (c = k.styles.application[b].styles && k.styles.application[b].styles.split(Ea) || [], e = 0; e < c.length; e += 1)if (d = c[e].toLowerCase(), f[d] && k.styles.application[b].toobject)this["styleApplicationDefinition_" +
                f[d].type.toLowerCase()](a, k.styles.application[b].toobject.toLowerCase(), f[d])
            }
        },
        updateDefaultAnnotations: function () {
            var c = this.renderer, d = this.dataObj, e = this.chartInstance, k = d && d.annotations || {}, f = {}, g;
            if (this.drawAnnotations && e.dataReady() && d && d.chart && a(d.chart.showannotations, 1)) {
                g = a(k.scaleonresize, d.chart.scaleonresize, 1);
                var c = {
                    interactionevents: b(this.annotationInteractionEvents, !0),
                    showbelow: b(k.showbelow, k.showbelowchart),
                    autoscale: k.autoscale,
                    scaletext: k.scaletext,
                    scaleimages: k.scaleimages,
                    constrainedscale: k.constrainedscale,
                    scaleonresize: g,
                    origw: b(k.origw, d.chart.origw, g ? this.origRenderWidth : c.chartWidth),
                    origh: b(k.origh, d.chart.origh, g ? this.origRenderHeight : c.chartHeight),
                    xshift: k.xshift,
                    yshift: k.yshift,
                    grpxshift: k.grpxshift,
                    grpyshift: k.grpyshift,
                    xscale: k.xscale,
                    yscale: k.yscale,
                    rootxscale: a(k.xscale, 100) / 100,
                    rootyscale: a(k.yscale, 100) / 100
                }, h;
                c || (c = {});
                for (h in f)c[h] = f[h];
                e.annotations.reset(k, c, this.snapLiterals)
            } else e.annotations.clear()
        },
        dispose: function () {
            var a;
            this.disposing = !0;
            this.renderer && this.renderer.dispose();
            this.numberFormatter && this.numberFormatter.dispose();
            this.hcJSON && this.hcJSON.chart && this.hcJSON.chart.renderTo && delete this.hcJSON.chart.renderTo;
            for (a in this)delete this[a];
            delete this.disposing;
            this.disposed = !0
        }
    });
    U("stub", {
        init: function (a, b, c) {
            this.containerElement = a;
            this.smartLabel = c.jsVars.smartLabel
        }, standaloneInit: !0
    }, U.base);
    U("barbase", {
        spaceManager: function () {
            return this.placeHorizontalXYSpaceManager.apply(this, arguments)
        }
    }, U.base);
    U("singleseries",
        {
            series: function (a, b, d) {
                var e = a.data || a.dataset && a.dataset[0] && a.dataset[0].data, f;
                e && 0 < e.length && e instanceof Array && (f = {
                    data: [],
                    hoverEffects: this.parseSeriesHoverOptions(a, b, {}, d),
                    colorByPoint: !0
                }, b.legend.enabled = !1, d = this.point(d, f, e, a.chart, b), d instanceof Array ? b.series = b.series.concat(d) : b.series.push(d), this.configureAxis(b, a), a.trendlines && c(a.trendlines, b.yAxis, b[s], !1, this.isBar))
            }, defaultSeriesType: p, configureAxis: function (c, d) {
            var e = c[s], k = c.xAxis, f = d.chart, g = c.chart.is3D, h, B, m, l, p, q,
                n, J, t, P, u, R, w = 0, z, C, $, ga, ha, O, D, sa = this.numberFormatter, pa = a(f.syncaxislimits, 0), na;
            k.title.text = K(f.xaxisname);
            na = a(parseInt(f.yaxisvaluesstep, 10), parseInt(f.yaxisvaluestep, 10), 1);
            na = 1 > na ? 1 : na;
            h = c.yAxis[0];
            B = e[0];
            e.isDual ? (m = sa.getCleanValue(f.pyaxismaxvalue), l = sa.getCleanValue(f.pyaxisminvalue), h.title.text = K(f.pyaxisname), pa && !B.stacking100Percent ? (R = e[1], u = a(R.max), R = a(R.min), void 0 !== u && void 0 !== R && (B.min = V(B.min, R), B.max = X(B.max, u)), u = sa.getCleanValue(f.syaxismaxvalue), R = sa.getCleanValue(f.syaxisminvalue),
            null !== R && (l = null !== l ? V(l, R) : R), null !== u && (m = null !== m ? X(m, u) : u)) : pa = 0) : (m = sa.getCleanValue(f.yaxismaxvalue), l = sa.getCleanValue(f.yaxisminvalue), h.title.text = K(f.yaxisname));
            n = a(this.isStacked ? 0 : this.setAdaptiveYMin, f.setadaptiveymin, this.defSetAdaptiveYMin, 0);
            q = p = !n;
            J = a(e.numdivlines, f.numdivlines, this.numdivlines, 4);
            t = f.adjustdiv !== xa;
            P = a(this.showYAxisValues, f.showyaxisvalues, f.showyaxisvalue, 1);
            u = a(f.showyaxislimits, f.showlimits, P);
            R = a(f.showdivlinevalue, f.showdivlinevalues, P);
            g || (w = a(f.showaxislines,
                f.drawAxisLines, 0), $ = a(f.axislinethickness, 1), ha = a(f.axislinealpha, 100), 100 < ha && (ha = 100), C = L(b(f.axislinecolor, "#000000"), ha), h.showLine = a(f.showyaxisline, w), z = k.showLine = a(f.showxaxisline, w), ga = k.lineThickness = a(f.xaxislinethickness, $), h.lineThickness = a(f.yaxislinethickness, $), O = k.lineAlpha = a(f.xaxislinealpha, ha), 100 < O && (O = k.lineAlpha = 100), D = h.lineAlpha = a(f.yaxislinealpha, ha), 100 < D && (D = h.lineAlpha = 100), k.lineColor = L(b(f.xaxislinecolor, C), O), h.lineColor = L(b(f.yaxislinecolor, C), D), c.chart.xAxisLineVisible =
                z && !!ga && 0 < O);
            this.axisMinMaxSetter(h, B, m, l, p, q, J, t);
            this.configurePlotLines(f, c, h, B, u, R, na, e.numberFormatter, !1);
            h.reversed && 0 <= h.min && (c.plotOptions.series.threshold = h.max);
            e.isDual && (h = c.yAxis[1], B = e[1], u = a(f.showsecondarylimits, u), R = a(f.showdivlinesecondaryvalue, P), pa ? (k = c.yAxis[0], h.min = k.min, h.max = k.max, h.tickInterval = k.tickInterval, delete B.max, delete B.min) : (m = sa.getCleanValue(f.syaxismaxvalue), l = sa.getCleanValue(f.syaxisminvalue), n = a(f.setadaptivesymin, n), q = p = !n, this.axisMinMaxSetter(h, B,
                m, l, p, q, J, t)), g || (h.showLine = a(f.showsyaxisline, w), h.lineThickness = a(f.syaxislinethickness, $), g = h.lineAlpha = a(f.syaxislinealpha, ha), 100 < g && (g = 100), h.lineColor = L(b(f.syaxislinecolor, C), g)), this.configurePlotLines(f, c, h, B, u, R, na, e.numberFormatter, !0), h.title.text = K(f.syaxisname))
        }, pointValueWatcher: function (c, d, e, k, f, g, h) {
            c = c[s];
            var B;
            if (null !== d)return e = a(e, 0), c[e] || (c[e] = {}), e = c[e], k && (this.distributedColumns && (c.marimekkoTotal += d), k = e.stack, f = a(f, 0), g = a(g, 0), h = b(h, Za), k[h] || (k[h] = []), h = k[h], h[g] ||
            (h[g] = []), g = h[g], g[f] || (g[f] = {}), f = g[f], 0 <= d ? f.p ? (B = f.p, d = f.p += d) : f.p = d : f.n ? (B = f.n, d = f.n += d) : f.n = d), e.max = e.max > d ? e.max : d, e.min = e.min < d ? e.min : d, B
        }, parseSeriesHoverOptions: function (c, d, e) {
            c = d.chart.plotHoverEffects;
            d = {enabled: b(e.showhovereffect, e.hovereffect, c.enabled)};
            d.highlight = a(e.highlightonhover, e.highlightplotonhover, c.highlight);
            d.columnHighlight = a(d.highlight, e.highlightcolumnonhover, e.highlightbaronhover, c.columnHighlight);
            d.anchorHighlight = a(d.highlight, e.highlightanchoronhover, c.anchorHighlight);
            d.anchorHighlight = a(d.highlight, e.highlightimageonhover, c.imageHighlight);
            d.bubbleHighlight = a(d.highlight, e.highlightbubbleonhover, e.highlightbaronhover, c.bubbleHighlight);
            d.imageHoverAlpha = b(e.anchorimagehoveralpha, c.anchorImageHoverAlpha);
            d.imageHoverScale = b(e.anchorimagehoverscale, c.anchorImageHoverScale);
            d.color = b(e.hovercolor, e.bubblehovercolor, c.color);
            d.alpha = b(e.hoveralpha, c.alpha);
            d.scale = b(e.hoverscale, e.bubblehoverscale, c.scale);
            d.gradientColor = void 0 !== e.hovergradientcolor ? e.hovergradientcolor :
                c.gradientColor;
            d.ratio = b(e.hoverratio, c.ratio);
            d.angle = b(e.hoverangle, c.angle);
            d.borderColor = b(e.borderhovercolor, c.borderColor);
            d.borderAlpha = b(e.borderhoveralpha, c.borderAlpha);
            d.borderThickness = a(e.borderhoverthickness, c.borderThickness);
            d.borderDashed = a(e.borderhoverdashed, c.borderDashed);
            d.borderDashGap = a(e.borderhoverdashgap, c.borderDashGap);
            d.borderDashLen = a(e.borderhoverdashlen, c.borderDashLen);
            d.shadow = b(e.hovershadow, c.shadow);
            d.anchorSides = b(e.anchorhoversides, c.anchorSides);
            d.anchorRadius =
                b(e.anchorhoverradius, c.anchorRadius);
            d.anchorScale = b(e.anchorhoverscale, c.anchorScale);
            d.anchorAlpha = b(e.anchorhoveralpha, e.hoveralpha, c.anchorAlpha);
            d.anchorBgColor = b(e.anchorbghovercolor, e.anchorhovercolor, c.anchorBgColor);
            d.anchorBgAlpha = b(e.anchorbghoveralpha, c.anchorBgAlpha);
            d.anchorBorderColor = b(e.anchorborderhovercolor, c.anchorBorderColor);
            d.anchorBorderAlpha = b(e.anchorborderhoveralpha, c.anchorBorderAlpha);
            d.anchorBorderThickness = a(e.anchorborderhoverthickness, c.anchorBorderThickness);
            d.anchorStartAngle =
                b(e.anchorhoverstartangle, c.anchorStartAngle);
            d.anchorDip = b(e.anchorhoverdip, c.anchorDip);
            d.anchorAnimation = a(e.anchorhoveranimation, c.anchorAnimation, 1);
            d.negativeColor = b(e.negativehovercolor, c.negativeColor);
            d.is3DBubble = a(e.is3donhover, c.is3DBubble);
            return d
        }, pointHoverOptions: function (c, d, k) {
            var g, f, h, B = {};
            g = d.hoverEffects;
            d = a(c.hovereffect, g && g.enabled);
            f = !1;
            var m = {enabled: d}, l = k && p + k.plotType.toLowerCase();
            if (void 0 === d)if (this.forceHoverEnable)f = d = m.enabled = !0; else {
                "anchor" == l && (f = k.imageUrl ?
                    d = m.enabled = void 0 !== b(c.anchorimagehoveralpha, g.imageHoverAlpha, c.anchorimagehoverscale, g.imageHoverScale, void 0) : d = m.enabled = void 0 !== b(c.hovercolor, c.anchorhovercolor, c.anchorbghovercolor, g.anchorBgColor, g.color, c.hoveralpha, c.anchorhoveralpha, g.anchorAlpha, c.bghoveralpha, c.anchorbghoveralpha, g.anchorBgAlpha, c.anchorborderhovercolor, c.borderhovercolor, g.anchorBorderColor, c.anchorborderhoverthickness, c.borderhoverthickness, g.anchorBorderThickness, c.anchorborderhoveralpha, c.borderhoveralpha, g.anchorBorderAlpha,
                        c.hoverdip, c.anchorhoverdip, g.anchorDip, c.anchorhoverstartangle, g.anchorStartAngle, c.hoversides, c.anchorhoversides, g.anchorSides, c.hoverradius, c.anchorhoverradius, g.anchorRadius, void 0));
                if ("column" == l || "bubble" == l)f = d = m.enabled = void 0 !== b(c.hoveralpha, g.alpha, c.hovergradientcolor, g.gradientColor, c.borderhovercolor, g.borderColor, c.borderhoverthickness, g.borderThickness, c.hoverratio, g.ratio, c.hoverangle, g.angle, c.borderhoveralpha, g.borderAlpha, c.borderhoverdashed, g.borderDashed, c.borderhoverdashgap,
                        g.borderDashGap, c.borderhoverdashlen, g.borderDashLen, c.hovercolor, g.color, void 0);
                f || "bubble" != l || (f = d = m.enabled = void 0 !== b(c.negativehovercolor, g.negativeColor, c.is3donhover, g.is3DBubble, c.hoverscale, g.scale, void 0));
                "pie" == l && (f = d = m.enabled = void 0 !== b(c.hovercolor, g.color, c.hoveralpha, g.alpha, c.borderhovercolor, g.borderColor, c.borderhoverthickness, g.borderThickness, c.borderhoveralpha, g.borderAlpha, void 0))
            }
            if (d) {
                m.highlight = a(c.highlightonhover, g.highlight);
                m.columnHighlight = a(m.highlight, c.highlightcolumnonhover,
                    c.highlightbaronhover);
                m.anchorHighlight = a(m.highlight, c.highlightanchoronhover);
                m.bubbleHighlight = a(m.highlight, c.highlightbubbleonhover);
                m.alpha = b(c.hoveralpha, g.alpha, k.alpha);
                m.scale = b(c.hoverscale, g.scale, 1);
                m.gradientColor = void 0 === c.hovergradientcolor ? g.gradientColor : c.hovergradientcolor;
                m.borderColor = b(c.borderhovercolor, g.borderColor, k.borderColor);
                m.borderThickness = a(c.borderhoverthickness, g.borderThickness, k.borderWidth);
                m.ratio = b(c.hoverratio, g.ratio, k.ratio);
                m.angle = b(c.hoverangle, g.angle,
                    k.angle);
                m.borderAlpha = b(c.borderhoveralpha, g.borderAlpha, k.borderAlpha);
                m.borderDashed = a(c.borderhoverdashed, g.borderDashed, k.borderDashed, 0);
                m.borderDashGap = a(c.borderhoverdashgap, g.borderDashGap, k.borderDashGap);
                m.borderDashLen = a(c.borderhoverdashlen, g.borderDashLen, k.borderDashLen);
                m.shadow = b(c.hovershadow, g.shadow, 0);
                m.color = b(c.hovercolor, g.color);
                "anchor" == l && (k.imageUrl ? (m.imageHoverAlpha = a(c.anchorimagehoveralpha, g.imageHoverAlpha, 100), m.imageHoverScale = k.imageScale * ia(a(c.anchorimagehoverscale,
                        g.imageHoverScale, 110)) * .01, m.anchorAnimation = a(c.anchorhoveranimation, g.anchorAnimation, 1)) : (m.anchorColor = ca(b(c.hovercolor, c.anchorhovercolor, c.anchorbghovercolor, g.anchorBgColor, g.color, k.anchorBgColor)), m.anchorAlpha = b(c.hoveralpha, c.anchorhoveralpha, g.anchorAlpha, k.anchorAlpha), m.anchorBgAlpha = b(c.bghoveralpha, c.anchorbghoveralpha, g.anchorBgAlpha, m.anchorAlpha, k.anchorBgAlpha), m.anchorBorderColor = b(c.anchorborderhovercolor, c.borderhovercolor, g.anchorBorderColor, k.anchorBorderColor), m.anchorBorderThickness =
                    b(c.anchorborderhoverthickness, c.borderhoverthickness, g.anchorBorderThickness, k.anchorBorderThickness), m.anchorBorderAlpha = a(c.anchorborderhoveralpha, c.borderhoveralpha, g.anchorBorderAlpha, m.anchorAlpha, k.anchorBorderAlpha), m.anchorDip = a(c.hoverdip, c.anchorhoverdip, g.anchorDip), m.startAngle = b(c.anchorhoverstartangle, g.anchorStartAngle, k.anchorAngle), m.anchorSides = a(c.hoversides, c.anchorhoversides, g.anchorSides, k.anchorSides), m.anchorRadius = a(c.hoverradius, c.anchorhoverradius, g.anchorRadius), m.anchorScale =
                    a(c.hoverscale, c.anchorhoverscale, g.anchorScale), m.anchorAnimation = a(c.anchorhoveranimation, g.anchorAnimation, 1), void 0 === m.anchorRadius && (m.anchorRadius = !f || m.anchorHighlight ? k.anchorRadius && k.anchorRadius + 1 : k.anchorRadius)));
                if (f || (m.columnHighlight || m.bubbleHighlight) && m.color && 1 == m.highlight)m.highlight = 0;
                "column" == l && (m.color = (b(m.color, k.color) + Ea + (void 0 === m.gradientColor ? k.gradientColor : m.gradientColor)).replace(/,+?$/, ""));
                "pie" === l && (m.color = b(m.color, k.color).replace(/,+?$/, ""));
                "bubble" ==
                l && (m.negativeColor = b(c.negativehovercolor, g.negativeColor, k.negativeColor), m.is3d = a(c.is3donhover, g.is3DBubble, k.is3d), m.color = m.negativeColor && 0 > c.z ? m.negativeColor : m.color || k.color, h = "string" == typeof m.color, m.color = ca(h ? m.color : m.color.FCcolor.color), m.color = m.is3d ? U.bubble.getPointColor(m.color, m.alpha) : {
                    FCcolor: {
                        color: m.color,
                        alpha: m.alpha
                    }
                });
                if (1 == m.highlight && "anchor" !== l) {
                    c = (h = "string" == typeof m.color) ? m.color.split(/\s{0,},\s{0,}/) : m.color.FCcolor.color.split(/\s{0,},\s{0,}/);
                    g = c.length;
                    for (f = 0; f < g; f++)c[f] = E(c[f], 70);
                    h ? m.color = c.join(",") : m.color.FCcolor.color = c.join(",")
                }
                "pie" === l && (B = {
                    color: this.getPointColor(m.color, m.alpha, k.radius3D),
                    alpha: m.alpha,
                    borderColor: L(m.borderColor, m.borderAlpha),
                    borderWidth: m.borderThickness
                });
                "column" == l && (m.colorArr = Z(m.color, m.alpha, m.ratio, m.angle, k.isRoundEdged, m.borderColor, V(m.alpha, m.borderAlpha).toString(), k.isBar, k.is3d), m.dashStyle = m.borderDashed ? e(m.borderDashLen, m.borderDashGap, m.borderThickness) : "none", B = {
                    shadow: m.shadow,
                    color: m.colorArr[0],
                    borderColor: m.colorArr[1],
                    borderWidth: m.borderThickness,
                    use3DLighting: k.use3DLighting,
                    dashStyle: m.dashStyle
                });
                "anchor" == l && (B = k.imageUrl ? {
                    animation: m.anchorAnimation,
                    imageHoverAlpha: m.imageHoverAlpha,
                    imageHoverScale: m.imageHoverScale
                } : {
                    animation: m.anchorAnimation,
                    shadow: m.shadow,
                    fillColor: {FCcolor: {color: m.anchorColor, alpha: m.anchorBgAlpha * m.anchorAlpha / 100 + p}},
                    lineColor: {FCcolor: {color: m.anchorBorderColor, alpha: m.anchorBorderAlpha}},
                    lineWidth: m.anchorBorderThickness,
                    radius: m.anchorRadius,
                    symbol: ra(m.anchorSides),
                    startAngle: m.startAngle,
                    sides: m.anchorSides,
                    scale: m.anchorScale,
                    dip: m.anchorDip
                });
                "bubble" == l && (B = {
                    symbol: m.seriesAnchorSymbol,
                    shadow: m.shadow,
                    scale: m.scale,
                    fillColor: m.color,
                    lineColor: {FCcolor: {color: m.borderColor, alpha: m.alpha}},
                    lineWidth: m.borderThickness
                })
            }
            return {enabled: d, options: m, rolloverOptions: B}
        }, getPointStub: function (c, d, e, k) {
            var f = this.dataObj.chart;
            k = k[s];
            d = null === d ? d : k.numberFormatter.dataLabels(d);
            var g = I(K(b(c.tooltext, k.tooltext))), m = I(K(c.displayvalue)), f = k.showTooltip ? void 0 !==
            g ? h(g, [1, 2, 3, 5, 6, 7], {
                formattedValue: d,
                label: e,
                yaxisName: K(f.yaxisname),
                xaxisName: K(f.xaxisname)
            }, c, f) : null === d ? !1 : e !== p ? e + k.tooltipSepChar + d : d : p;
            k = a(c.showvalue, k.showValues) ? void 0 !== m ? m : d : p;
            c = b(c.link);
            return {displayValue: k, categoryLabel: e, toolText: f, link: c}
        }, updateSnapPoints: function () {
            var a = this, b = a.snapLiterals, c = function (a, b) {
                var c = 0;
                switch (a) {
                    case "startx":
                        c = b.x;
                        break;
                    case "starty":
                        c = b.y;
                        break;
                    case "x":
                    case "middlex":
                    case "centerx":
                        c = b.x + b.width / 2;
                        break;
                    case "y":
                    case "middley":
                    case "centery":
                        c =
                            b.y + b.height / 2;
                        break;
                    case "endx":
                        c = b.x + b.width;
                        break;
                    case "endy":
                        c = b.y + b.height;
                        break;
                    default:
                        c = 0
                }
                return c
            };
            b.dataset = function (b, d) {
                var e = a.renderer && a.renderer.plots, k, g, h, m;
                h = a.is3D;
                if (!e || !e.length)return 0;
                isNaN(b[0]) ? k = 0 : (k = Number(b[0]), b = b.slice(1));
                g = b[0];
                if ("set" === g) {
                    isNaN(b[1]) ? (m = 0, b = b.slice(1)) : (m = Number(b[1]), b = b.slice(2));
                    g = b[0];
                    e = (e = e[k] && e[k].items[m]) && e.graphic;
                    if (!e)return 0;
                    h = d && h ? e._getBBox2() : e.getBBox();
                    m = c(g, h)
                }
                return m
            };
            b.xaxis = function (b) {
                var d = a.renderer && a.renderer.xAxis &&
                    a.renderer.xAxis[0] && a.renderer.xAxis[0].labels, e, k;
                if (!d || !d.length)return 0;
                k = b[0];
                if ("label" === k) {
                    isNaN(b[1]) ? (e = 0, b = b.slice(1)) : (e = Number(b[1]), b = b.slice(2));
                    k = b[0];
                    b = d[e];
                    if (!b)return 0;
                    b = b.getBBox();
                    e = c(k, b)
                }
                return e
            };
            b.yaxis = function (b) {
                var d = a.renderer && a.renderer.yAxis, e, k;
                if (!d || !d.length)return 0;
                isNaN(b[0]) ? e = 0 : (e = Number(b[0]), b = b.slice(1));
                e = d[e];
                if (!e)return 0;
                d = b[0];
                if ("label" === d) {
                    k = e.labels;
                    isNaN(b[1]) ? (e = 0, b = b.slice(1)) : (e = Number(b[1]), b = b.slice(2));
                    d = b[0];
                    b = k[e];
                    if (!b)return 0;
                    b = b.getBBox();
                    k = c(d, b)
                }
                return k
            }
        }
        }, U.base);
    U("multiseries", {
        series: function (b, d, e) {
            var k, f, g = d[s], h, m;
            d.legend.enabled = Boolean(a(b.chart.showlegend, 1));
            if (b.dataset && 0 < b.dataset.length) {
                this.categoryAdder(b, d);
                k = 0;
                for (f = b.dataset.length; k < f; k += 1)h = b.dataset[k], m = {
                    hoverEffects: this.parseSeriesHoverOptions(b, d, h, e),
                    visible: !a(h.initiallyhidden, 0),
                    data: []
                }, this.isStacked || (m.numColumns = f), h = this.point(e, m, h, b.chart, d, g.oriCatTmp.length, k), h instanceof Array ? d.series = d.series.concat(h) : d.series.push(h);
                this.configureAxis(d, b);
                b.trendlines && !this.isLog && c(b.trendlines, d.yAxis, g, !1, this.isBar, void 0, this.inversed)
            }
        }, categoryAdder: function (b, c) {
            var d, e = 0, f = c[s], k = f.axisGridManager, g = b.chart, h = c.xAxis, m, f = f.x, B, l, q, n;
            if (b.categories && b.categories[0] && b.categories[0].category)for (b.categories[0].font && (c.xAxis.labels.style.fontFamily = b.categories[0].font), void 0 !== (d = a(b.categories[0].fontsize)) && (1 > d && (d = 1), c.xAxis.labels.style.fontSize = d + La, S(c.xAxis.labels.style)), b.categories[0].fontcolor && (c.xAxis.labels.style.color =
                b.categories[0].fontcolor.split(Ea)[0].replace(/^\#?/, "#")), l = c[s].oriCatTmp, q = b.categories[0].category, d = 0; d < q.length; d += 1)q[d].vline ? k.addVline(h, q[d], e, c) : (B = a(q[d].showlabel, g.showlabels, 1), n = b.categories[0].category[d], m = K(z(n.label, n.name)), k.addXaxisCat(h, e, e, B ? m : p, {}, n, g), l[e] = z(K(n.tooltext), m), e += 1);
            f.catCount = e
        }, getPointStub: function (c, d, e, k, f, g, m, B, l, q) {
            var n = this.dataObj.chart, J = this.isDual, t = this.isXY, P = this.isMLAxis, u = this.isStacked, R = this.isErrorChart, w;
            k = k[s];
            var C, $, ga = null === d ?
                d : this.numberFormatter.dataLabels(d, m), ha, O = I(K(b(c.tooltext, f.plottooltext, k.tooltext))), D = k.tooltipSepChar, sa, pa = {}, na, E, F, M, la, Fa, N, Qa, ja;
            R && (E = null === B ? B : this.numberFormatter.dataLabels(B, m), Fa = null === d ? p : this.numberFormatter.percentValue(B / d * 100), sa = [1, 2, 3, 4, 5, 6, 7, 99, 100, 101, 102], d = {
                yaxisName: M = K(J ? m ? n.syaxisname : n.pyaxisname : n.yaxisname),
                xaxisName: la = K(n.xaxisname),
                formattedValue: ga,
                label: e,
                errorDataValue: E,
                errorPercentValue: Fa
            }, t ? (F = null === l ? l : this.numberFormatter.xAxis(l), N = null === q ? p : this.numberFormatter.percentValue(l /
                q * 100), sa.push(103, 104, 105, 106, 107, 108, 109, 110), ja = b(c.horizontalerrorvalue, c.errorvalue), d.errorValue = Qa = b(c.verticalerrorvalue, c.errorvalue), q = I(K(b(c.verticalerrorplottooltext, c.errorplottooltext, f.verticalerrorplottooltext, f.errorplottooltext, n.verticalerrorplottooltext, n.errorplottooltext))), null !== B && (d.verticalErrorDataValue = E, d.verticalErrorPercentValue = Fa, d.verticalErrorValue = Qa), null !== l && (d.horizontalErrorDataValue = F, d.horizontalErrorPercentValue = N, d.horizontalErrorValue = ja), na = I(K(b(c.horizontalerrorplottooltext,
                c.errorplottooltext, f.horizontalerrorplottooltext, f.errorplottooltext, n.horizontalerrorplottooltext, n.errorplottooltext))), pa._hErrortoolText = k.showTooltip ? void 0 !== na ? h(na, sa, {
                    yaxisName: M = K(J ? m ? n.syaxisname : n.pyaxisname : n.yaxisname),
                    xaxisName: la = K(n.xaxisname),
                    formattedValue: ga,
                    label: e,
                    errorDataValue: F,
                    errorPercentValue: N,
                    errorValue: ja,
                    verticalErrorDataValue: E,
                    verticalErrorPercentValue: Fa,
                    verticalErrorValue: Qa,
                    horizontalErrorDataValue: F,
                    horizontalErrorPercentValue: N,
                    horizontalErrorValue: ja
                }, c, n,
                f) : null === B ? !1 : F : !1) : (q = I(K(b(c.errorplottooltext, f.errorplottooltext, n.errorplottooltext))), d.errorValue = Qa = b(c.errorvalue)), pa._errortoolText = k.showTooltip ? void 0 !== q ? h(q, sa, d, c, n, f) : null === B ? !1 : E : !1);
            k.showTooltip ? void 0 !== O ? (u = [4, 5, 6, 7], m = {
                yaxisName: M || K(J ? m ? n.syaxisname : n.pyaxisname : P ? f._yAxisName : n.yaxisname),
                xaxisName: la || K(n.xaxisname)
            }, t ? (u.push(8, 9, 10, 11), m.yDataValue = ga, m.xDataValue = e, R && (u.push(103, 104, 105, 106, 107, 108, 109, 110), null !== B && (m.verticalErrorDataValue = E, m.verticalErrorPercentValue =
                Fa, m.verticalErrorValue = Qa), null !== l && (m.horizontalErrorDataValue = F, m.horizontalErrorPercentValue = N, m.horizontalErrorValue = ja))) : (u.push(1, 2, 3), m.formattedValue = ga, m.label = e, R && (u.push(99, 100, 101, 102), m.errorValue = Qa, null !== B && (m.errorDataValue = E, m.errorPercentValue = Fa))), f = h(O, u, m, c, n, f)) : null === ga ? f = !1 : (k.seriesNameInToolTip && (ha = z(f && f.seriesname)), f = ha ? ha + D : p, f += e ? e + D : p, k.showPercentInToolTip && u ? ($ = !0, f += "$percentValue") : f += ga) : f = !1;
            a(c.showvalue, g) ? void 0 !== I(c.displayvalue) ? w = K(c.displayvalue) :
                k.showPercentValues ? C = !0 : w = ga : w = p;
            pa.link = b(c.link);
            pa.displayValue = w;
            pa.categoryLabel = e;
            pa.toolText = f;
            pa.showPercentValues = C;
            pa.showPercentInToolTip = $;
            return pa
        }
    }, U.singleseries);
    U("xybase", {
        hideRLine: function () {
            var a = this.chart.series[this.index + 1];
            a && a.hide && a.hide()
        }, showRLine: function () {
            var a = this.chart.series[this.index + 1];
            a && a.show && a.show()
        }, getRegressionLineSeries: function (a, b, c) {
            var d, f, e, k;
            k = a.sumXY;
            var g = a.sumX, h = a.sumY;
            f = a.xValues;
            e = a.sumXsqure;
            d = a.yValues;
            a = a.sumYsqure;
            b ? (f.sort(Mb),
                d = f[0], f = f[f.length - 1], k = (c * k - g * h) / (c * e - ka(g, 2)), e = isNaN(k) ? h / c : k * (d - g / c) + h / c, c = isNaN(k) ? h / c : k * (f - g / c) + h / c, c = [{
                x: d,
                y: e
            }, {
                x: f,
                y: c
            }]) : (d.sort(Mb), e = d[0], d = d[d.length - 1], k = (c * k - g * h) / (c * a - ka(h, 2)), f = isNaN(k) ? g / c : k * (e - h / c) + g / c, c = isNaN(k) ? g / c : k * (d - h / c) + g / c, c = [{
                x: f,
                y: e
            }, {x: c, y: d}]);
            return c
        }, pointValueWatcher: function (a, b, c, d) {
            var f = a[s];
            null !== b && (a = f[0], a.max = a.max > b ? a.max : b, a.min = a.min < b ? a.min : b);
            null !== c && (a = f.x, a.max = a.max > c ? a.max : c, a.min = a.min < c ? a.min : c);
            d && (c = c || 0, b = b || 0, d.sumX += c, d.sumY += b, d.sumXY +=
                c * b, d.sumXsqure += ka(c, 2), d.xValues.push(c), d.sumYsqure += ka(b, 2), d.yValues.push(b))
        }
    }, U.multiseries);
    U("scrollbase", {
        postSeriesAddition: function () {
            var c = this.hcJSON, d = c.xAxis.scroll, e = c[s], k = e.width, f = e.x.catCount, g = this.dataObj.chart, h = this.colorManager, m, B, l, p, q, n;
            e.isScroll = !0;
            c.chart.hasScroll = !0;
            if (this.isStacked)m = 1; else {
                B = m = 0;
                p = c.series;
                n = c.chart.defaultSeriesType;
                for (l = p.length; B < l; B++)q = b(p[B].type, n), "column" === q && (m += 1);
                1 > m && (m = 1)
            }
            f *= m;
            k = a(g.numvisibleplot, qa(k / this.avgScrollPointWidth));
            d && 2 <= k && k < f && (d.enabled = !0, d.vxLength = k / m, d.startPercent = V(1, X(0, parseFloat(g.scrolltoend) || 0)), d.padding = a(g.scrollpadding, 0), d.height = a(g.scrollheight, 16), d.showButtons = !!a(g.scrollshowbuttons, 1), d.buttonPadding = a(g.scrollbtnpadding, 0), d.color = ca(b(g.scrollcolor, h.getColor("altHGridColor"))), e.marginBottomExtraSpace += d.padding + d.height);
            if (ha || a(g.enabletouchscroll, 0))c.chart.zoomType = "x", c.chart.nativeZoom = !1, c.chart.selectionMarkerFill = "rgba(255,255,255,0)", (c.callbacks || (c.callbacks = [])).push(function (a) {
                Y(a,
                    "selectionstart selectiondrag", U.scrollbase.performTouchScroll, {})
            })
        }, performTouchScroll: function (a) {
            var b = this.xAxis[0].scroller, c = b.config, c = c.trackLength / (c.width / c.scrollRatio) * (a.chartX || 1);
            !0 !== a.isOutsidePlot && na(b.elements.anchor.element, "selectionstart" === a.type ? "dragstart" : "drag", {
                pageX: -c,
                pageY: -a.chartY
            })
        }
    }, U.multiseries);
    U("logbase", {
        isLog: !0, isValueAbs: !0, configureAxis: function (d, e) {
            var k = d[s], h = k.axisGridManager, f = this.numberFormatter, m = d.series, B = d.xAxis, l = d.yAxis[0], q = k[0], n = e.chart,
                J = !a(n.showyaxislimits, n.showlimits, n.showyaxisvalues, 1), t = !a(n.showdivlinevalues, n.showyaxisvalues, 1), P = a(n.base, n.logbase, 10), u = a(n.yaxismaxvalue), R = a(n.yaxisminvalue), w = this.colorManager, z = 1 === a(n.showminordivlinevalues), C = b(n.minordivlinecolor, l.gridLineColor, w.getColor("divLineColor")), $ = a(n.minordivlinealpha, n.divlinealpha, w.getColor("divLineAlpha")), w = [l, void 0, void 0, a(n.divlinethickness, 2), l.gridLineDashStyle, l.gridLineColor, 2], C = [l, void 0, void 0, a(n.minordivlinethickness, 1), l.gridLineDashStyle,
                    L(b(n.minordivlinecolor, C), a(n.minordivlinealpha, $ / 2)), 2], $ = z || $ && C[3], ga = a(n.showaxislimitgridlines, this.showAxisLimitGridLines), ha = a(ga, this.is3D || d.chart.plotBorderWidth ? 0 : 1), O, D;
            0 >= P && (P = 10);
            0 >= u && (u = void 0);
            0 >= R && (R = void 0);
            u = this.getLogAxisLimits(q.max || P, q.min || 1, u, R, P, $ ? n.numminordivlines : 0);
            B.title.text = K(n.xaxisname);
            B.showLine = a(n.showxaxisline, n.showaxislines, 0);
            B.lineThickness = a(n.xaxislinethickness, n.axislinethickness, 1);
            B.lineAlpha = a(n.xaxislinealpha, n.axislinealpha, 100);
            B.lineColor =
                L(b(n.xaxislinecolor, n.axislinecolor, "000"));
            g(l, {
                title: {text: K(n.yaxisname)},
                labels: {enabled: !1},
                gridLineWidth: 0,
                alternateGridColor: T,
                reversed: "1" === n.invertyaxis,
                max: sa(u.Max, P),
                min: sa(u.Min, P),
                showLine: a(n.showyaxisline, n.showaxislines, 0),
                lineThickness: a(n.yaxislinethickness, n.axislinethickness, 1),
                lineAlpha: a(n.yaxislinealpha, n.axislinealpha, 100),
                lineColor: L(b(n.yaxislinecolor, n.axislinecolor, "000"))
            });
            for (n = m.length; n--;)if (R = m[n])for (R.threshold = l.min, D = (R = R.data) && R.length || 0; D--;)O = R[D], O.y =
                sa(O.y, P);
            delete q.max;
            delete q.min;
            q.isLog = !0;
            l.reversed && 0 <= l.min && (d.plotOptions.series.threshold = l.max);
            e.trendlines && c(e.trendlines, [{
                max: u.Max,
                min: u.Min,
                plotLines: l.plotLines,
                plotBands: l.plotBands,
                title: l.title
            }], k);
            for (n = l.plotLines.length; n--;)O = l.plotLines[n], O.value && (O.value = sa(O.value, P)), O.from && (O.from = sa(O.from, P)), O.to && (O.to = sa(O.to, P));
            for (n = l.plotBands.length; n--;)O = l.plotBands[n], O.from && (O.from = sa(O.from, P)), O.to && (O.to = sa(O.to, P));
            for (n = u.divArr.length; n--;) {
                O = u.divArr[n];
                if (O.ismajor)w[1] =
                    sa(O.value, P), w[2] = f.yAxis(O.value), h.addAxisGridLine.apply(h, w); else if ($ || O.isextreme)C[1] = sa(O.value, P), C[2] = z || O.isextreme ? f.yAxis(O.value) : p, h.addAxisGridLine.apply(h, C);
                R = l.plotLines[l.plotLines.length - 1];
                O.isextreme ? (R.width = ga || ha && (!O.isMin || !B.showLine) ? R.width : .1, J && (R.label.text = p)) : t && R.label && (R.label.text = p)
            }
        }, getLogAxisLimits: function (a, b, c, d, f, e) {
            var k = function (a) {
                return null === a || void 0 === a || "" === a || isNaN(a) ? !1 : !0
            }, g = 0, h = [], m, B, l, n, p, q, J, s;
            k(c) && Number(c) >= a ? a = Number(c) : (c = 1 < f ? Ba(da(a) /
                da(f)) : qa(da(a) / da(f)), a = ka(f, c), B = c);
            B || (B = 1 < f ? Ba(da(a) / da(f)) : qa(da(a) / da(f)));
            k(d) && Number(d) <= b ? b = Number(d) : (c = 1 < f ? qa(da(b) / da(f)) : Ba(da(b) / da(f)), b = ka(f, c), m = c);
            m || (m = 1 < f ? qa(da(b) / da(f)) : Ba(da(b) / da(f)));
            d = Number(String(da(f) / da(10)));
            e = Number(e) || (qa(d) == d ? 8 : 4);
            1 < f ? (l = B, n = m) : 0 < f && 1 > f && (l = m, n = B);
            d = B;
            for (m = l; m >= n; --m)if (l = ka(f, d), b <= l && a >= l && (h[g++] = {value: l, ismajor: !0}), m != n) {
                B = 1 < f ? -1 : 1;
                l = ka(f, d) - ka(f, d + B);
                c = l / (e + 1);
                for (k = 1; k <= e; ++k)l = ka(f, d + B) + c * k, b <= l && a >= l && (h[g++] = {
                    value: l,
                    ismajor: !1
                });
                1 <
                f ? d-- : d++
            }
            for (J in h)for (s in h[J])"value" == s && (p || (p = h[J][s] == b && (h[J].isextreme = h[J].isMin = !0)), q || (q = h[J][s] == a && (h[J].isextreme = h[J].isMax = !0)));
            p || (h[g++] = {value: b, ismajor: !0, isMin: !0, isextreme: !0});
            q || (h[g] = {value: a, ismajor: !0, isMax: !0, isextreme: !0});
            return {Max: a, Min: b, divArr: h}
        }, pointValueWatcher: function (b, c, d) {
            b = b[s];
            d = a(d, 0);
            0 < c && (b[d] || (b[d] = {}), d = b[d], d.max = d.max > c ? d.max : c, d.min = d.min < c ? d.min : c)
        }
    }, U.mslinebase);
    za = U.singleseries;
    Na = U.multiseries;
    U("column2dbase", {
        point: function (c, d, k,
                         h, f) {
            var m = k.length, B = f[s], l = B.axisGridManager, n = f.xAxis, B = B.x, q = this.colorManager, J = /3d$/.test(f.chart.defaultSeriesType), t = this.isBar, P = /^spark/i.test(c);
            c = b(h.showplotborder, P || J ? xa : lb) === lb ? J ? 1 : a(h.plotborderthickness, 1) : 0;
            var u = f.chart.useRoundEdges, R = a(h.plotborderalpha, h.plotfillalpha, 100), w = b(h.plotbordercolor, q.getColor("plotBorderColor")).split(Ea)[0], P = P ? "" : a(h.useplotgradientcolor, 1) ? F(h.plotgradientcolor, q.getColor("plotGradientColor")) : p, C = 0, $ = Boolean(a(h.use3dlighting, 1)), ga = f[s].numberFormatter,
                O, ha = a(h.plotborderdashed, 0), D = a(h.plotborderdashlen, 5), sa = a(h.plotborderdashgap, 4), pa, na, I, E, M, la, Fa, N, Qa, ja, wa, L, G, V;
            for (I = 0; I < m; I += 1)G = k[I], G.vline ? l.addVline(n, G, C, f) : (na = ga.getCleanValue(G.value), O = a(G.showlabel, h.showlabels, 1), E = K(z(G.label, G.name)), pa = b(G.color, q.getPlotColor()), M = b(G.alpha, h.plotfillalpha, Aa), la = b(G.ratio, h.plotfillratio), Fa = b(360 - h.plotfillangle, t ? 180 : 90), N = b(G.alpha, R), Qa = a(G.dashed, ha), ja = b(G.dashgap, sa), wa = b(G.dashlen, D), l.addXaxisCat(n, C, C, O ? E : p, G, {}, h, pa), C += 1, 0 > na &&
            (Fa = t ? 180 - Fa : 360 - Fa), V = {opacity: M / 100}, L = Z(pa + Ea + P.replace(/,+?$/, ""), M, la, Fa, u, w, N + p, t, J), O = Qa ? e(wa, ja, c) : "none", pa = this.pointHoverOptions(G, d, {
                plotType: "column",
                is3d: J,
                isBar: t,
                use3DLighting: $,
                isRoundEdged: u,
                color: pa,
                gradientColor: P,
                alpha: M,
                ratio: la,
                angle: Fa,
                borderWidth: c,
                borderColor: w,
                borderAlpha: N,
                borderDashed: Qa,
                borderDashGap: ja,
                borderDashLen: wa,
                shadow: V
            }), d.data.push(g(this.getPointStub(G, na, E, f), {
                y: na,
                shadow: V,
                color: L[0],
                borderColor: L[1],
                borderWidth: c,
                use3DLighting: $,
                dashStyle: O,
                tooltipConstraint: this.tooltipConstraint,
                hoverEffects: pa.enabled && pa.options,
                rolloverProperties: pa.enabled && pa.rolloverOptions
            })), this.pointValueWatcher(f, na));
            B.catCount = C;
            return d
        }, defaultSeriesType: "column"
    }, za);
    U("linebase", {
        defaultSeriesType: "line", hasVDivLine: !0, defaultPlotShadow: 1, point: function (c, d, k, h, f) {
            var m, B, l, n, q, J, t, P, u, R, w, C, $, ga, O, ha, D, pa, sa, na, I, E, F, M, la, Fa;
            c = f.chart;
            var N = k.length, Qa = f.xAxis;
            m = f[s];
            var ja = this.colorManager, G, wa = m.axisGridManager, L = 0, V = m.x, Y = f[s].numberFormatter, bb, tb, S;
            ga = ca(b(h.linecolor, h.palettecolors,
                ja.getColor("plotFillColor")));
            O = b(h.linealpha, Aa);
            w = a(h.linethickness, this.lineThickness, 4);
            C = Boolean(a(h.linedashed, 0));
            t = a(h.linedashlen, 5);
            P = a(h.linedashgap, 4);
            la = a(h.anchorshadow, 0);
            d.color = {FCcolor: {color: ga, alpha: O}};
            d.lineWidth = w;
            d.anchorShadow = la;
            d.step = b(this.stepLine, d.step);
            d.drawVerticalJoins = Boolean(a(d.drawVerticalJoins, h.drawverticaljoins, 1));
            d.useForwardSteps = Boolean(a(d.useForwardSteps, h.useforwardsteps, 1));
            $ = a(h.drawanchors, h.showanchors);
            for (B = 0; B < N; B += 1)n = k[B], n.vline ? wa.addVline(Qa,
                n, L, f) : (m = Y.getCleanValue(n.value), q = a(n.showlabel, h.showlabels, 1), l = K(z(n.label, n.name)), wa.addXaxisCat(Qa, L, L, q ? l : p, n, {}, h), L += 1, u = ca(b(n.color, ga)), R = a(n.alpha, O), q = a(n.dashed, C) ? e(t, P, w) : "none", J = {opacity: R / 100}, D = a(n.anchorsides, h.anchorsides, 0), M = a(n.anchorstartangle, h.anchorstartangle, 90), na = a(n.anchorradius, h.anchorradius, this.anchorRadius, 3), sa = ca(b(n.anchorbordercolor, h.anchorbordercolor, ga)), pa = a(n.anchorborderthickness, h.anchorborderthickness, this.anchorBorderThickness, 1), I = ca(b(n.anchorbgcolor,
                h.anchorbgcolor, ja.getColor("anchorBgColor"))), E = b(n.anchoralpha, h.anchoralpha, Aa), F = b(n.anchorbgalpha, h.anchorbgalpha, E), bb = b(n.anchorimageurl, h.anchorimageurl), tb = b(n.anchorimagescale, h.anchorimagescale, 100), S = b(n.anchorimagealpha, h.anchorimagealpha, 100), ha = void 0 === $ ? 0 !== R : !!$, Fa = Boolean(a(n.anchorshadow, la, 0)), G = this.pointHoverOptions(n, d, {
                plotType: "anchor",
                anchorBgColor: I,
                anchorAlpha: E,
                anchorBgAlpha: F,
                anchorAngle: M,
                anchorBorderThickness: pa,
                anchorBorderColor: sa,
                anchorBorderAlpha: E,
                anchorSides: D,
                anchorRadius: na,
                imageUrl: bb,
                imageScale: tb,
                imageAlpha: S,
                shadow: J
            }), d.data.push(g(this.getPointStub(n, m, l, f), {
                y: m,
                color: {FCcolor: {color: u, alpha: R}},
                shadow: J,
                dashStyle: q,
                valuePosition: b(n.valueposition, c.valuePosition),
                marker: {
                    enabled: !!ha,
                    shadow: Fa && {opacity: E / 100},
                    fillColor: {FCcolor: {color: I, alpha: F * E / 100 + p}},
                    lineColor: {FCcolor: {color: sa, alpha: E}},
                    lineWidth: pa,
                    radius: na,
                    startAngle: M,
                    symbol: ra(D),
                    imageUrl: bb,
                    imageScale: tb,
                    imageAlpha: S
                },
                tooltipConstraint: this.tooltipConstraint,
                hoverEffects: G.enabled &&
                G.options,
                rolloverProperties: G.enabled && G.rolloverOptions
            })), this.pointValueWatcher(f, m));
            V.catCount = L;
            return d
        }, defaultZeroPlaneHighlighted: !1
    }, za);
    U("area2dbase", {
        defaultSeriesType: "area", hasVDivLine: !0, point: function (c, d, k, h, f) {
            c = f.chart;
            var m = k.length, B = f.xAxis, l = f[s], n = l.axisGridManager, l = l.x, q = f[s].numberFormatter, J = this.colorManager, t = 0, P, u, R, w, C, $, ga, O, ha, D, pa, sa, na, E, M, la, Fa, N, Qa, ja, G, wa, L, V, Y, bb, tb, S;
            C = b(h.plotfillcolor, h.areabgcolor, I(h.palettecolors) ? J.getPlotColor(0) : J.getColor("plotFillColor")).split(/\s*\,\s*/)[0];
            G = Ea + (a(h.useplotgradientcolor, 1) ? F(h.plotgradientcolor, J.getColor("plotGradientColor")) : p);
            $ = b(h.plotfillalpha, h.areaalpha, this.isStacked ? Aa : "90");
            ga = a(h.plotfillangle, 270);
            O = b(h.plotbordercolor, h.areabordercolor, I(h.palettecolors) ? J.getPlotColor(0) : J.getColor("plotBorderColor")).split(/\s*\,\s*/)[0];
            ha = h.showplotborder == xa ? xa : b(h.plotborderalpha, h.plotfillalpha, h.areaalpha, Aa);
            P = a(h.plotborderangle, 270);
            u = Boolean(a(h.plotborderdashed, 0));
            R = a(h.plotborderdashlen, 5);
            na = a(h.plotborderdashgap, 4);
            Fa =
                a(h.plotborderthickness, h.areaborderthickness, 1);
            wa = d.fillColor = {FCcolor: {color: C + G.replace(/,+?$/, ""), alpha: $, ratio: Ua, angle: ga}};
            d.lineWidth = Fa;
            d.dashStyle = u ? e(R, na, Fa) : "none";
            d.lineColor = {FCcolor: {color: O, alpha: ha, ratio: Aa, angle: P}};
            d.step = b(this.stepLine, d.step);
            d.drawVerticalJoins = Boolean(a(d.drawVerticalJoins, h.drawverticaljoins, 1));
            d.useForwardSteps = Boolean(a(d.useForwardSteps, h.useforwardsteps, 1));
            Fa = Boolean(a(h.drawanchors, h.showanchors, 1));
            d.anchorShadow = L = a(h.anchorshadow, 0);
            for (u = 0; u <
            m; u += 1)na = k[u], na.vline ? n.addVline(B, na, t, f) : (P = q.getCleanValue(na.value), w = a(na.showlabel, h.showlabels, 1), R = K(z(na.label, na.name)), n.addXaxisCat(B, t, t, w ? R : p, na, {}, h), t += 1, w = a(na.anchorsides, h.anchorsides, 0), sa = a(na.anchorstartangle, h.anchorstartangle, 90), D = a(na.anchorradius, h.anchorradius, 3), pa = ca(b(na.anchorbordercolor, h.anchorbordercolor, O)), N = a(na.anchorborderthickness, h.anchorborderthickness, 1), E = ca(b(na.anchorbgcolor, h.anchorbgcolor, J.getColor("anchorBgColor"))), M = b(na.anchoralpha, h.anchoralpha,
                this.anchorAlpha, xa), la = b(na.anchorbgalpha, h.anchorbgalpha, M), V = Boolean(a(na.anchorshadow, L, 0)), Qa = I(na.color), ja = a(na.alpha), Qa = void 0 !== Qa || void 0 !== ja ? {
                FCcolor: {
                    color: Qa ? ca(Qa) + G : C,
                    alpha: void 0 === ja ? fa(ja) + p : $,
                    ratio: Ua,
                    angle: ga
                }
            } : wa, Y = b(na.anchorimageurl, h.anchorimageurl), bb = b(na.anchorimagescale, h.anchorimagescale, 100), tb = b(na.anchorimagealpha, h.anchorimagealpha, 100), ja = {
                opacity: X(ja, ha) / 100,
                inverted: !0
            }, S = this.pointHoverOptions(na, d, {
                plotType: "anchor",
                anchorBgColor: E,
                anchorAlpha: M,
                anchorBgAlpha: la,
                anchorAngle: sa,
                anchorBorderThickness: N,
                anchorBorderColor: pa,
                anchorBorderAlpha: M,
                anchorSides: w,
                anchorRadius: D,
                imageUrl: Y,
                imageScale: bb,
                imageAlpha: tb,
                shadow: ja
            }), d.data.push(g(this.getPointStub(na, P, R, f), {
                y: P,
                shadow: ja,
                color: Qa,
                valuePosition: b(na.valueposition, c.valuePosition),
                marker: {
                    enabled: Fa,
                    shadow: V && {opacity: M / 100},
                    fillColor: {FCcolor: {color: E, alpha: la * M / 100 + p}},
                    lineColor: {FCcolor: {color: pa, alpha: M}},
                    lineWidth: N,
                    radius: D,
                    symbol: ra(w),
                    startAngle: sa,
                    imageUrl: Y,
                    imageScale: bb,
                    imageAlpha: tb
                },
                tooltipConstraint: this.tooltipConstraint,
                previousY: this.pointValueWatcher(f, P),
                hoverEffects: S.enabled && S.options,
                rolloverProperties: S.enabled && S.rolloverOptions
            })));
            l.catCount = t;
            return d
        }
    }, za);
    U("mscolumn2dbase", {
        point: function (c, d, e, k, f, g, h, m, B) {
            c = a(k.ignoreemptydatasets, 0);
            var l = !1, n = e.data || [], q = f[s], J = b(d.type, this.defaultSeriesType), t = b(d.isStacked, f.plotOptions[J] && f.plotOptions[J].stacking), P = b(this.isValueAbs, q.isValueAbs, !1), u = a(d.yAxis, 0), R = f[s].numberFormatter, w = this.colorManager, C = w.getPlotColor(), z, $ = f._FCconf.isBar, ga = d.hoverEffects;
            t || (d.columnPosition = a(B, m, h));
            d.name = I(e.seriesname);
            if (0 === a(e.includeinlegend) || void 0 === d.name)d.showInLegend = !1;
            d.color = b(e.color, C).split(Ea)[0].replace(/^#?/g, "#");
            h = /3d$/.test(f.chart.defaultSeriesType);
            B = b(360 - k.plotfillangle, $ ? 180 : 90);
            0 > z && (B = 360 - B);
            e = d._dataParser = Kb.column(f, {
                seriesname: d.name,
                plottooltext: e.plottooltext,
                color: b(e.color, C),
                alpha: b(e.alpha, k.plotfillalpha, Aa),
                plotgradientcolor: a(k.useplotgradientcolor, 1) ? F(k.plotgradientcolor, w.getColor("plotGradientColor")) : p,
                ratio: b(e.ratio,
                    k.plotfillratio),
                fillAangle: B,
                isRoundEdges: f.chart.useRoundEdges,
                plotBorderColor: b(k.plotbordercolor, h ? eb : w.getColor("plotBorderColor")).split(Ea)[0],
                plotBorderAlpha: k.showplotborder == xa || h && k.showplotborder != lb ? xa : b(k.plotborderalpha, Aa),
                isBar: this.isBar,
                is3d: h,
                dashed: a(e.dashed, k.plotborderdashed, 0),
                dashLen: a(e.dashlen, k.plotborderdashlen, 5),
                dashGap: a(e.dashgap, k.plotborderdashgap, 4),
                borderWidth: a(k.plotborderthickness, lb),
                showValues: a(e.showvalues, q.showValues),
                yAxis: u,
                use3DLighting: a(k.use3dlighting,
                    1),
                _sourceDataset: e,
                hoverEffects: ga
            }, this);
            for (k = 0; k < g; k += 1)(q = n[k]) ? (z = R.getCleanValue(q.value, P), null === z ? d.data.push({y: null}) : (l = !0, q = e(q, k, z), d.data.push(q), q.previousY = this.pointValueWatcher(f, z, u, t, k, m, J))) : d.data.push({y: null});
            !c || l || this.realtimeEnabled || (d.showInLegend = !1);
            return d
        }, defaultSeriesType: "column"
    }, Na);
    U("mslinebase", {
        hasVDivLine: !0, point: function (c, d, e, k, f, g) {
            c = a(k.ignoreemptydatasets, 0);
            var h = !1, m = this.colorManager, B, l;
            B = f.chart;
            var n = e.data || [];
            l = f[s];
            var q = b(d.type, this.defaultSeriesType),
                J = b(d.isStacked, f.plotOptions[q] && f.plotOptions[q].stacking), t = b(this.isValueAbs, l.isValueAbs, !1), P = a(d.yAxis, 0), u = this.numberFormatter, R = ca(b(e.color, k.linecolor, m.getPlotColor())), w = a(e.alpha, k.linealpha, Aa), C = a(k.showshadow, this.defaultPlotShadow, 1), z = a(e.drawanchors, e.showanchors, k.drawanchors, k.showanchors), $ = a(e.anchorsides, k.anchorsides, 0), ga = a(e.anchorstartangle, k.anchorstartangle, 90), O = a(e.anchorradius, k.anchorradius, 3), ha = ca(b(e.anchorbordercolor, k.anchorbordercolor, R)), D = a(e.anchorborderthickness,
                k.anchorborderthickness, 1), m = ca(b(e.anchorbgcolor, k.anchorbgcolor, m.getColor("anchorBgColor"))), pa = b(e.anchoralpha, k.anchoralpha, Aa), sa = b(e.anchorbgalpha, k.anchorbgalpha, pa), na = pa && b(e.anchorshadow, k.anchorshadow, 0), E = d.hoverEffects;
            d.name = I(e.seriesname);
            if (0 === a(e.includeinlegend) || void 0 === d.name || 0 === w && 1 !== z)d.showInLegend = !1;
            d.marker = {
                fillColor: {FCcolor: {color: m, alpha: sa * pa / 100 + p}},
                lineColor: {FCcolor: {color: ha, alpha: pa + p}},
                lineWidth: D,
                radius: O,
                symbol: ra($),
                startAngle: ga
            };
            d.color = {
                FCcolor: {
                    color: R,
                    alpha: w
                }
            };
            d.shadow = C ? {opacity: C ? w / 100 : 0} : !1;
            d.anchorShadow = na;
            d.step = b(this.stepLine, d.step);
            d.drawVerticalJoins = Boolean(a(d.drawVerticalJoins, k.drawverticaljoins, 1));
            d.useForwardSteps = Boolean(a(d.useForwardSteps, k.useforwardsteps, 1));
            d.lineWidth = a(e.linethickness, k.linethickness, 2);
            B = d._dataParser = Kb.line(f, {
                seriesname: d.name,
                plottooltext: e.plottooltext,
                lineAlpha: w,
                anchorAlpha: pa,
                showValues: a(e.showvalues, l.showValues),
                yAxis: P,
                lineDashed: Boolean(a(e.dashed, k.linedashed, 0)),
                lineDashLen: a(e.linedashlen,
                    k.linedashlen, 5),
                lineDashGap: a(e.linedashgap, k.linedashgap, 4),
                lineThickness: d.lineWidth,
                lineColor: R,
                valuePosition: b(e.valueposition, B.valuePosition),
                drawAnchors: z,
                anchorBgColor: m,
                anchorBgAlpha: sa,
                anchorBorderColor: ha,
                anchorBorderThickness: D,
                anchorRadius: O,
                anchorSides: $,
                anchorAngle: ga,
                anchorShadow: d.anchorShadow,
                anchorStartAngle: a(e.anchorstartangle, k.anchorstartangle),
                _sourceDataset: e,
                hoverEffects: E,
                imageUrl: b(e.anchorimageurl, k.anchorimageurl),
                imageScale: b(e.anchorimagescale, k.anchorimagescale, 100),
                imageAlpha: b(e.anchorimagealpha, k.anchorimagealpha, 100)
            }, this);
            for (k = 0; k < g; k += 1)(l = n[k]) ? (e = u.getCleanValue(l.value, t), null === e ? d.data.push({y: null}) : (h = !0, l = B(l, k, e), d.data.push(l), l.previousY = this.pointValueWatcher(f, e, P, J, k, 0, q))) : d.data.push({y: null});
            !c || h || this.realtimeEnabled || (d.showInLegend = !1);
            return d
        }, defaultSeriesType: "line", defaultPlotShadow: 1, defaultZeroPlaneHighlighted: !1
    }, Na);
    U("msareabase", {
        hasVDivLine: !0, point: function (c, d, k, g, f, h) {
            c = a(g.ignoreemptydatasets, 0);
            var m = !1, B = f.chart,
                l = k.data || [], n = f[s], q = b(d.type, this.defaultSeriesType), J = b(d.isStacked, f.plotOptions[q] && f.plotOptions[q].stacking), t = b(this.isValueAbs, n.isValueAbs, !1), P = a(d.yAxis, 0), u = f[s].numberFormatter, R = this.colorManager, w = R.getPlotColor(), C = b(k.color, g.plotfillcolor, w).split(Ea)[0].replace(/^#?/g, "#").split(Ea)[0], z = b(k.alpha, g.plotfillalpha, g.areaalpha, this.areaAlpha, 70), $ = a(g.plotfillangle, 270), w = b(k.plotbordercolor, g.plotbordercolor, g.areabordercolor, this.isRadar ? w : "666666").split(Ea)[0], ga = b(k.showplotborder,
                g.showplotborder) == xa ? xa : b(k.plotborderalpha, g.plotborderalpha, k.alpha, g.plotfillalpha, g.areaalpha, "95"), O = a(g.plotborderangle, 270), ha = a(k.anchorsides, g.anchorsides, 0), D = a(k.anchorstartangle, g.anchorstartangle, 90), pa = a(k.anchorradius, g.anchorradius, 3), sa = ca(b(k.anchorbordercolor, g.anchorbordercolor, C)), na = a(k.anchorborderthickness, g.anchorborderthickness, 1), E = ca(b(k.anchorbgcolor, g.anchorbgcolor, R.getColor("anchorBgColor"))), I = a(k.anchoralpha, g.anchoralpha, this.anchorAlpha, 0), M = a(k.anchorbgalpha,
                g.anchorbgalpha, I), la = I && b(k.anchorshadow, g.anchorshadow, 0), Fa = d.hoverEffects;
            this.isRadar || (C += Ea + (a(g.useplotgradientcolor, 1) ? F(g.plotgradientcolor, R.getColor("plotGradientColor")) : p), C = C.replace(/,+?$/, ""));
            d.step = b(this.stepLine, d.step);
            d.drawVerticalJoins = Boolean(a(d.drawVerticalJoins, g.drawverticaljoins, 1));
            d.useForwardSteps = Boolean(a(d.useForwardSteps, g.useforwardsteps, 1));
            d.name = b(k.seriesname);
            if (0 === a(k.includeinlegend) || void 0 === d.name)d.showInLegend = !1;
            d.fillColor = {
                FCcolor: {
                    color: C, alpha: z,
                    ratio: Ua, angle: $
                }
            };
            d.color = C;
            d.shadow = {opacity: a(g.showshadow, 1) ? ga / 100 : 0};
            d.anchorShadow = la;
            d.lineColor = {FCcolor: {color: w, alpha: ga, ratio: Aa, angle: O}};
            d.lineWidth = b(k.plotborderthickness, g.plotborderthickness, 1);
            d.dashStyle = Boolean(a(k.dashed, g.plotborderdashed, 0)) ? e(a(k.dashlen, g.plotborderdashlen, 5), a(k.dashgap, g.plotborderdashgap, 4), d.lineWidth) : void 0;
            d.marker = {
                fillColor: {FCcolor: {color: E, alpha: M * I / 100 + p}},
                lineColor: {FCcolor: {color: sa, alpha: I + p}},
                lineWidth: na,
                radius: pa,
                symbol: ra(ha),
                startAngle: D
            };
            k = d._dataParser = Kb.area(f, {
                seriesname: d.name,
                plottooltext: k.plottooltext,
                lineAlpha: ga,
                anchorAlpha: I,
                showValues: a(k.showvalues, n.showValues),
                yAxis: P,
                fillColor: C,
                fillAlpha: z,
                valuePosition: b(k.valueposition, B.valuePosition),
                drawAnchors: Boolean(a(k.drawanchors, g.drawanchors, g.showanchors, 1)),
                anchorBgColor: E,
                anchorBgAlpha: M,
                anchorBorderColor: sa,
                anchorBorderThickness: na,
                anchorRadius: pa,
                anchorSides: ha,
                anchorAngle: D,
                anchorShadow: d.anchorShadow,
                getLink: this.linkClickFN,
                anchorStartAngle: a(k.anchorstartangle,
                    g.anchorstartangle),
                _sourceDataset: k,
                hoverEffects: Fa,
                imageUrl: b(k.anchorimageurl, g.anchorimageurl),
                imageScale: b(k.anchorimagescale, g.anchorimagescale, 100),
                imageAlpha: b(k.anchorimagealpha, g.anchorimagealpha, 100)
            }, this);
            for (B = 0; B < h; B += 1)(n = l[B]) ? (g = n ? u.getCleanValue(n.value, t) : null, null === g ? d.data.push({y: null}) : (m = !0, n = k(n, B, g), d.data.push(n), n.previousY = this.pointValueWatcher(f, g, P, J, B, 0, q))) : d.data.push({y: null});
            !c || m || this.realtimeEnabled || (d.showInLegend = !1);
            return d
        }, defaultSeriesType: "area",
        defaultPlotShadow: 0
    }, Na);
    U("scatterbase", {
        showValues: 0,
        defaultPlotShadow: 0,
        rendererId: "cartesian",
        defaultSeriesType: "scatter",
        canvasPaddingModifiers: ["anchorlabel"],
        point: function (c, d, k, g, f, h, m) {
            c = a(g.ignoreemptydatasets, 0);
            var B = this.colorManager, l = B.getPlotColor(), n, q, J, t, P, u, R, w, C, z, $, ga, O, ha, D, pa, sa, na, E;
            h = !1;
            var F, M;
            P = a(k.drawline, g.drawlines, 0);
            u = a(k.drawprogressioncurve, 0);
            t = k.data || [];
            var la, Fa, Qa, N, ja, G = a(k.showvalues, f[s].showValues), K = this.numberFormatter, wa, V = d._showRegression = a(k.showregressionline,
                g.showregressionline, 0);
            d.zIndex = 1;
            d.name = I(k.seriesname);
            if (0 === a(k.includeinlegend) || void 0 === d.name)d.showInLegend = !1;
            if (P || u)J = ca(b(k.color, l)), t = b(k.alpha, Aa), P = a(k.linethickness, g.linethickness, 2), u = Boolean(a(k.linedashed, k.dashed, g.linedashed, 0)), R = a(k.linedashlen, g.linedashlen, 5), w = a(k.linedashgap, g.linedashgap, 4), d.color = L(b(k.linecolor, g.linecolor, J), a(k.linealpha, g.linealpha, t)), d.lineWidth = P, d.dashStyle = u ? e(R, w, P) : "none";
            P = Boolean(a(k.drawanchors, k.showanchors, g.drawanchors, g.showanchors,
                1));
            m = a(k.anchorsides, g.anchorsides, m + 3);
            u = a(k.anchorradius, g.anchorradius, 3);
            J = ca(b(k.anchorbordercolor, k.color, g.anchorbordercolor, J, l));
            l = a(k.anchorborderthickness, g.anchorborderthickness, 1);
            R = ca(b(k.anchorbgcolor, g.anchorbgcolor, B.getColor("anchorBgColor")));
            w = b(k.anchoralpha, k.alpha, g.anchoralpha, Aa);
            $ = b(k.anchorbgalpha, k.alpha, g.anchorbgalpha, w);
            F = b(k.anchorstartangle, g.anchorstartangle, 90);
            d.anchorShadow = B = a(g.anchorshadow, 0);
            d.marker = {
                fillColor: this.getPointColor(R, Aa), lineColor: {
                    FCcolor: {
                        color: J,
                        alpha: w + p
                    }
                }, lineWidth: l, radius: u, symbol: ra(m)
            };
            t = k.data || [];
            ja = t.length;
            V && (d.events = {hide: this.hideRLine, show: this.showRLine}, la = {
                sumX: 0,
                sumY: 0,
                sumXY: 0,
                sumXsqure: 0,
                sumYsqure: 0,
                xValues: [],
                yValues: []
            }, N = a(k.showyonx, g.showyonx, 1), Fa = ca(b(k.regressionlinecolor, g.regressionlinecolor, J)), Qa = a(k.regressionlinethickness, g.regressionlinethickness, l), n = fa(a(k.regressionlinealpha, g.regressionlinealpha, w)), Fa = L(Fa, n));
            for (q = 0; q < ja; q += 1)(C = t[q]) ? (n = K.getCleanValue(C.y), E = K.getCleanValue(C.x), null === n ? d.data.push({
                y: null,
                x: E
            }) : (h = !0, M = this.getPointStub(C, n, K.xAxis(E), f, k, G), ga = a(C.anchorsides, m), O = a(C.anchorradius, u), ha = ca(b(C.anchorbordercolor, J)), D = a(C.anchorborderthickness, l), pa = ca(b(C.anchorbgcolor, R)), sa = b(C.anchoralpha, C.alpha, w), na = b(C.anchorbgalpha, $), z = Boolean(a(C.anchorshadow, B, 0)), wa = this.pointHoverOptions(C, d, {
                plotType: "anchor",
                anchorBgColor: pa,
                anchorAlpha: sa,
                anchorBgAlpha: na,
                anchorAngle: F,
                anchorBorderThickness: D,
                anchorBorderColor: ha,
                anchorBorderAlpha: sa,
                anchorSides: ga,
                anchorRadius: O,
                shadow: void 0
            }), d.data.push({
                y: n,
                x: E,
                displayValue: M.displayValue,
                toolText: M.toolText,
                link: M.link,
                marker: {
                    enabled: P,
                    shadow: z && {opacity: sa / 100},
                    fillColor: {FCcolor: {color: pa, alpha: na * sa / 100 + p}},
                    lineColor: {FCcolor: {color: ha, alpha: sa}},
                    lineWidth: D,
                    radius: O,
                    symbol: ra(ga),
                    startAngle: b(C.anchorstartangle, k.anchorstartangle, g.anchorstartangle, 90)
                },
                hoverEffects: wa.enabled && wa.options,
                rolloverProperties: wa.enabled && wa.rolloverOptions
            }), this.pointValueWatcher(f, n, E, V && la))) : d.data.push({y: null});
            V && (k = this.getRegressionLineSeries(la, N, ja), this.pointValueWatcher(f,
                k[0].y, k[0].x), this.pointValueWatcher(f, k[1].y, k[1].x), f = {
                type: "line",
                color: Fa,
                showInLegend: !1,
                lineWidth: Qa,
                enableMouseTracking: !1,
                marker: {enabled: !1},
                data: k,
                zIndex: 0
            }, d = [d, f]);
            c && !h && (d.showInLegend = !1);
            return d
        },
        postSeriesAddition: function (b, c) {
            for (var d = b.chart, e = c.chart, f = b.series, k = 0, g = f.length; k < g; k += 1)f[k]._showRegression && (f[k].relatedSeries = [k + 1]);
            d.clipBubbles = a(e.clipbubbles, 1)
        },
        categoryAdder: function (c, d) {
            var k, g = 0, f, h = d[s].x, m, B = d.xAxis, l, n, q = c.chart, J = parseInt(q.labelstep, 10), t = a(q.showlabels,
                1), P = b(q.xaxislabelmode, "categories").toLowerCase(), u = this.colorManager, R = d[s].numberFormatter, w, C, $, ga, O, ha;
            d._FCconf.isXYPlot = !0;
            J = 1 < J ? J : 1;
            h.catOccupied = {};
            if ("auto" !== P && c.categories && c.categories[0] && c.categories[0].category) {
                n = c.categories[0];
                n.font && (d.xAxis.labels.style.fontFamily = n.font);
                void 0 !== (f = a(n.fontsize)) && (1 > f && (f = 1), d.xAxis.labels.style.fontSize = f + La, S(d.xAxis.labels.style));
                n.fontcolor && (d.xAxis.labels.style.color = n.fontcolor.split(Ea)[0].replace(/^\#?/, "#"));
                k = b(n.verticallinecolor,
                    u.getColor("divLineColor"));
                f = a(n.verticallinethickness, 1);
                m = a(n.verticallinealpha, u.getColor("divLineAlpha"));
                u = a(n.verticallinedashed, 0);
                w = a(n.verticallinedashlen, 4);
                C = a(n.verticallinedashgap, 2);
                $ = L(k, m);
                for (k = 0; k < n.category.length; k += 1)ga = n.category[k], m = R.getCleanValue(ga.x), null === m || ga.vline || (h.catOccupied[m] = !0, l = a(ga.showlabel, ga.showname, t), O = a(ga.showverticalline, ga.showline, ga.sl, 0), ha = a(ga.linedashed, u), l = 0 === l || 0 !== g % J ? p : K(z(ga.label, ga.name)), B.plotLines.push({
                    isGrid: !0,
                    isCat: !0,
                    isDataLabel: !0,
                    width: O ? f : 0,
                    color: $,
                    dashStyle: e(w, C, f, ha),
                    value: m,
                    label: {
                        text: l,
                        link: b(ga.link, q.labellink),
                        style: Ga({}, ga, q, B.labels.style),
                        align: Ha,
                        verticalAlign: Ca,
                        textAlign: Ha,
                        rotation: 0,
                        x: 0,
                        y: 0
                    }
                }), this.pointValueWatcher(d, null, m), g += 1);
                "mixed" === P && (h.requiredAutoNumericLabels = a(this.requiredAutoNumericLabels, 1))
            } else h.requiredAutoNumericLabels = a(this.requiredAutoNumericLabels, 1);
            h.adjustMinMax = !0
        },
        getPointColor: function (a, b) {
            var c, d;
            a = ca(a);
            b = fa(b);
            c = E(a, 70);
            d = n(a, 50);
            return {
                FCcolor: {
                    gradientUnits: "objectBoundingBox",
                    cx: .4, cy: .4, r: "100%", color: c + Ea + d, alpha: b + Ea + b, ratio: Ua, radialGradient: !0
                }
            }
        }
    }, U.xybase);
    U("mscombibase", {
        canvasPaddingModifiers: ["anchor", "anchorlabel"], series: function (d, e, k) {
            var g, f, h, m, B = d.chart, l, n = [], q = [], p = [], J, t, P = e[s], u = this.isDual, R = 0, w;
            e.legend.enabled = Boolean(a(d.chart.showlegend, 1));
            if (d.dataset && 0 < d.dataset.length) {
                this.categoryAdder(d, e);
                m = P.oriCatTmp.length;
                g = 0;
                for (f = d.dataset.length; g < f; g += 1)switch (h = d.dataset[g], J = u && "s" === b(h.parentyaxis, "p").toLowerCase() ? !0 : !1, l = {
                    hoverEffects: this.parseSeriesHoverOptions(d,
                        e, h, k), visible: !a(h.initiallyhidden, 0), legendIndex: g, data: []
                }, J ? (l.yAxis = 1, t = z(h.renderas, this.secondarySeriesType), this.secondarySeriesFilter && (w = this.secondarySeriesFilter[t])) : (t = z(h.renderas, this.defaultSeriesType), this.defaultSeriesFilter && (w = this.defaultSeriesFilter[t])), t = t.toLowerCase(), t) {
                    case "line":
                    case "spline":
                        l.type = !0 === w ? t : "line";
                        n.push(U.mslinebase.point.call(this, k, l, h, B, e, m, g));
                        break;
                    case "area":
                    case "splinearea":
                        l.type = !0 === w ? t : "area";
                        e.chart.series2D3Dshift = !0;
                        p.push(U.msareabase.point.call(this,
                            k, l, h, B, e, m, g));
                        break;
                    case "column":
                    case "column3d":
                        q.push(U.mscolumn2dbase.point.call(this, k, l, d.dataset[g], B, e, m, g, void 0, R));
                        R += 1;
                        break;
                    default:
                        J ? (l.type = "line", n.push(U.mslinebase.point.call(this, k, l, h, B, e, m, g))) : (q.push(U.mscolumn2dbase.point.call(this, k, l, d.dataset[g], B, e, m, g, void 0, R)), R += 1)
                }
                "0" !== B.areaovercolumns ? (e.chart.areaOverColumns = !0, e.series = e.series.concat(q, p, n)) : (e.chart.areaOverColumns = !1, e.series = e.series.concat(p, q, n));
                if (0 === q.length && 1 !== m)P.hasNoColumn = !0; else if (!this.isStacked)for (k =
                                                                                                    0, g = q.length; k < g; k += 1)q[k].numColumns = g;
                this.configureAxis(e, d);
                d.trendlines && c(d.trendlines, e.yAxis, e[s], u, this.isBar)
            }
        }
    }, U.mscolumn2dbase)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-renderer", function () {
    function d(a, b, c, d) {
        var e = b.paper, g = b.layers, h = c ? "y-axis" : "x-axis", m = this.layerAboveDataset = g.layerAboveDataset, l = this.layerBelowDataset = g.layerBelowDataset, g = m.bands || (m.bands = []), n = g.length, q = l.bands || (l.bands = []), p = q.length, t = m.lines || (m.lines = []), s = t.length, u = l.lines || (l.lines = []), w = u.length, m = m.labels || (m.labels = []), C = m.length, l = l.labels || (l.labels = []), z = l.length;
        this.renderer = b;
        this.axisData = a || {};
        this.globalOptions =
            b.options;
        this.isVertical = c;
        this.topBandGroup = this.topBandGroup || e.group(h + "-bands", this.layerAboveDataset);
        this.belowBandGroup = this.belowBandGroup || e.group(h + "-bands", this.layerBelowDataset);
        g.push(this.topBandGroup);
        n && g[n].insertAfter(g[n - 1]);
        q.push(this.belowBandGroup);
        p && q[p].insertAfter(q[p - 1]);
        this.topLineGroup = this.topLineGroup || e.group(h + "-lines", this.layerAboveDataset);
        this.belowLineGroup = this.belowLineGroup || e.group(h + "-lines", this.layerBelowDataset);
        this.topLabelGroup = this.topLabelGroup ||
            e.group(h + "-labels", this.layerAboveDataset);
        this.belowLabelGroup = this.belowLabelGroup || e.group(h + "-labels", this.layerBelowDataset);
        t.push(this.topLineGroup);
        s && t[s].insertAfter(t[s - 1]);
        u.push(this.belowLineGroup);
        w && u[w].insertAfter(u[w - 1]);
        m.push(this.topLabelGroup);
        C && m[C].insertAfter(m[C - 1]);
        l.push(this.belowLabelGroup);
        z && l[z].insertAfter(l[z - 1]);
        this.isReverse = d;
        this.configure()
    }

    function l(a, b, c, d) {
        return U(b - c[1] - d.top, a - c[0] - d.left)
    }

    function D(a, b) {
        var c = b ? 360 : nb;
        a = (a || 0) % c;
        return 0 > a ? c + a :
            a
    }

    var w = this, p = w.window, c = w.hcLib, N = c.Raphael, b = c.chartAPI, I = /msie/i.test(p.navigator.userAgent) && !p.opera, a = p.document, z = p.Image, F = "VML" === N.type, K = c.BLANKSTRING, s = "rgba(192,192,192," + (I ? .002 : 1E-6) + ")", I = c.TOUCH_THRESHOLD_PIXELS, g = c.CLICK_THRESHOLD_PIXELS, e = c.stubFN, h = {
            pageX: 0,
            pageY: 0
        }, m = parseFloat, M = parseInt, C = c.extend2, q = c.addEvent, Y = c.getMouseCoordinate, u = c.removeEvent, ea = c.pluck, t = c.pluckNumber, V = c.toRaphaelColor, X = c.setImageDisplayMode, ia = c.FC_CONFIG_STRING, Ba = c.plotEventHandler, qa = c.isArray,
        da = c.each = function (a, b, c, d) {
            var e;
            c || (c = a);
            d || (d = {});
            if (qa(a))for (e = 0; e < a.length; e += 1) {
                if (!1 === b.call(c, a[e], e, a, d))return e
            } else if (null !== a && void 0 !== a)for (e in a)if (!1 === b.call(c, a[e], e, a, d))return e
        }, ka = c.createElement, aa = c.createContextMenu, Z = c.hasTouch, ca = Z ? I : g, S = c.getSentenceCase, G = c.getCrispValues, fa = c.getValidValue, n = c.getFirstValue, E = c.regex.dropHash, L = c.HASHSTRING, T = function (a) {
            return a !== Ja && null !== a
        }, Ha = function (a, b) {
            a[1] === a[4] && (a[1] = a[4] = ra(a[1]) + b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = ra(a[2]) +
                b % 2 / 2);
            return a
        }, Ja, Ca = 8 === a.documentMode ? "visible" : "", ma = p.Math, Da = ma.sin, Ga = ma.cos, U = ma.atan2, ra = ma.round, za = ma.min, Na = ma.max, Ea = ma.abs, Za = ma.ceil, xa = ma.floor, lb = 180 / ma.PI, Aa = ma.PI, La = Aa / 2, nb = 2 * Aa, Hb = Aa + La, ub = c.getFirstColor, Qb = c.graphics.getLightColor, xb = c.POSITION_TOP, Ua = c.POSITION_BOTTOM, eb = c.POSITION_RIGHT, cb = c.POSITION_LEFT;
    N.ca.ishot = function (a) {
        if (this.removed)return !1;
        var b = this.node;
        a = a || "";
        b.ishot = a;
        switch (this.type) {
            case "group":
                for (b = this.bottom; b;)b.attr("ishot", a), b = b.next;
                break;
            case "text":
                if (N.svg)for (b =
                                   b.getElementsByTagName("tspan")[0]; b;)b.ishot = a, b = b.nextSibling
        }
        return !1
    };
    N.addSymbol({
        printIcon: function (a, b, c) {
            var d = .75 * c, e = .5 * c, g = .33 * c, h = ra(a - c) + .5, m = ra(b - c) + .5, l = ra(a + c) + .5;
            c = ra(b + c) + .5;
            var n = ra(a - d) + .5, q = ra(b - d) + .5, d = ra(a + d) + .5, p = ra(b + e) + .5, t = ra(a + e) + .5, s = ra(b + g) + .5;
            a = ra(a - e) + .5;
            g = ra(b + g + g) + .5;
            return ["M", n, m, "L", d, m, d, q, n, q, "Z", "M", h, q, "L", h, p, n, p, n, b, d, b, d, p, l, p, l, q, "Z", "M", n, b, "L", n, c, d, c, d, b, "Z", "M", t, s, "L", a, s, "M", t, g, "L", a, g]
        }, exportIcon: function (a, b, c) {
            var d = .66 * c, e = .5 * d, g = ra(a - c) + .5,
                h = ra(b - c) + .5, m = ra(a + c) + .5;
            c = ra(b + c) - .5;
            var l = ra(a - e) + .5, n = b < c - 3 ? c - 3 : ra(b) + .5, e = ra(a + e) - .5, q = ra(a + d) - .5, d = ra(a - d) + .5;
            return ["M", g, n, "L", g, c, m, c, m, n, m, c, g, c, "Z", "M", a, c - 1, "L", d, b, l, b, l, h, e, h, e, b, q, b, "Z"]
        }
    });
    c.rendererRoot = b("renderer.root", {
        standaloneInit: !1, isRenderer: !0, inited: !1, callbacks: [], init: function (a, b, c) {
            var d = this, e = d.container = a && a.containerElement || b.chart.renderTo, g = b.tooltip, h = d.layer, m, l;
            d.options = b;
            d.logic = a;
            d.definition = a.dataObj;
            d.smartLabel = a.smartLabel;
            d.numberFormatter = a.numberFormatter;
            d.fusionCharts = a.chartInstance;
            d.linkClickFN = a.linkClickFN;
            l = (m = b.chart) && m.animation && m.animation.duration;
            d.animationCompleteQueue = [];
            e.innerHTML = K;
            e = d.paper = d.fusionCharts.jsVars.paper = new N(e, e.offsetWidth || a.width, e.offsetHeight || a.height);
            !1 !== w.core.options._useSVGDescTag && e._desc && (m = a.friendlyName || "Vector image", d.definition && d.definition.chart && d.definition.chart.caption && (m += ' with caption "' + d.definition.chart.caption + '"'), e._desc(m));
            d.chartWidth = e.width;
            d.chartHeight = e.height;
            d.elements ||
            (d.elements = {});
            h || (h = d.layers = {}, h.background = h.background || e.group("background"), h.dataset = h.dataset || e.group("dataset").insertAfter(h.background), h.tracker = h.tracker || e.group("hot").insertAfter(h.dataset));
            g && !1 !== g.enabled && (e.tooltip(g.style, g.shadow, g.constrain), h.tracker.trackTooltip(!0), h.dataset.trackTooltip(!0));
            d.disposeChartStyleSheet();
            d.setMargins();
            d.drawBackground();
            d.drawButtons();
            d.drawGraph();
            b.legend && b.legend.enabled && d.drawLegend();
            d.drawCaption();
            d.drawLogo();
            d.setChartEvents();
            d.drawLabels && d.drawLabels();
            da(b.callbacks, function (a) {
                a.apply(d, this)
            }, [a]);
            da(d.callbacks, function (a) {
                a.apply(d, this)
            }, [a]);
            d.fusionCharts.annotations && d.fusionCharts.annotations.draw(d);
            d.createChartStyleSheet();
            d.options.nativeMessage || l || w.raiseEvent("internal.animationComplete", {}, d.fusionCharts);
            d.hasRendered = !0;
            c && c(d)
        }, disposeChartStyleSheet: function () {
            this.paper.cssClear()
        }, createChartStyleSheet: function () {
            this.paper.cssRender()
        }, addCSSDefinition: function (a, b) {
            var c = this.paper;
            b.color &&
            (b.fill = b.color);
            c.cssAddRule(a, b)
        }, animationCompleteQueue: [], animationComplete: function () {
            var a, b, c, d;
            this.animatedElements = this.animatedElements ? ++this.animatedElements : 1;
            if (this.animatedElements === this.animatingElementsCount) {
                c = this.animationCompleteQueue;
                a = 0;
                for (b = c.length; a < b; a++)d = c[a], d.fn && d.fn.call(d.scope);
                this.animationCompleteQueue = [];
                w.raiseEvent("internal.animationComplete", {}, this.fusionCharts)
            }
        }, getAnimationCompleteFn: function () {
            var a = this;
            a.animatingElementsCount = a.animatingElementsCount ?
                ++a.animatingElementsCount : 1;
            return function () {
                a.animationComplete()
            }
        }, reinit: function (a, b, c) {
            this.hasRendered || this.init(b, c)
        }, dispose: function () {
            var a = this.eventListeners, b = a && a.length;
            this.disposing = !0;
            if (b)for (; b--;)a[b].unlisten();
            if (this.toolbar && this.toolbar.length) {
                for (; this.toolbar.length;)a = this.toolbar.pop(), a.remove();
                this.toolbar.add = null
            }
            if (this.menus && this.menus.length)for (; this.menus.length;)a = this.menus.pop(), a.destroy();
            this.paper && (this.paper.clear(), this.paper.remove(), delete this.paper);
            this.exportIframe && (this.exportIframe.parentNode.removeChild(this.exportIframe), delete this.exportIframe);
            delete this.disposing;
            this.container = null;
            this.disposed = !0
        }, onContainerClick: function (a) {
            var b = a.target || a.originalTarget || a.srcElement || a.relatedTarget || a.fromElement, d = a.data, e = d.fusionCharts;
            a = c.getMouseCoordinate(d.container, a.originalEvent);
            e.ref && (e = C({
                height: e.args.height,
                width: e.args.width,
                pixelHeight: e.ref.offsetHeight,
                pixelWidth: e.ref.offsetWidth,
                id: e.args.id,
                renderer: e.args.renderer,
                container: e.options.containerElement
            }, a), w.raiseEvent("chartclick", e, d.logic.chartInstance), b && b.ishot && d || d.options.chart.link && d.linkClickFN.call(d, d))
        }, onContainerMouseMove: function (a) {
            var b = a.data, d = b.fusionCharts;
            a = c.getMouseCoordinate(b.container, a.originalEvent);
            d.ref && (d = C({
                height: d.args.height,
                width: d.args.width,
                pixelHeight: d.ref.offsetHeight,
                pixelWidth: d.ref.offsetWidth,
                id: d.args.id,
                renderer: d.args.renderer,
                container: d.options.containerElement
            }, a), w.raiseEvent("chartMouseMove", d, b.logic.chartInstance))
        },
        onContainerRollOver: function (a) {
            var b = a.data, d = b.fusionCharts;
            a = c.getMouseCoordinate(b.container, a.originalEvent);
            d.ref && (d = C({
                height: d.args.height,
                width: d.args.width,
                pixelHeight: d.ref.offsetHeight,
                pixelWidth: d.ref.offsetWidth,
                id: d.args.id,
                renderer: d.args.renderer,
                container: d.options.containerElement
            }, a), w.raiseEvent("chartRollOver", d, b.logic.chartInstance))
        }, onContainerRollOut: function (a) {
            var b = a.chart, d = b.fusionCharts;
            a = c.getMouseCoordinate(b.container, a.event);
            d.ref && (d = C({
                height: d.args.height,
                width: d.args.width,
                pixelHeight: d.ref.offsetHeight,
                pixelWidth: d.ref.offsetWidth,
                id: d.args.id,
                renderer: d.args.renderer,
                container: d.options.containerElement
            }, a), w.raiseEvent("chartRollOut", d, b.logic.chartInstance))
        }, mouseStateIn: !1, winMouseHover: function (b) {
            var c = b.originalEvent, c = c.target || c.originalTarget || c.srcElement || c.relatedTarget || c.fromElement, d = b.data, e = d.paper;
            b = {chart: d, event: b.originalEvent};
            F ? e.getById(c.parentNode.raphaelid) || (d.onContainerRollOut(b), d.mouseStateIn = !1, u(a, "mouseover",
                d.winMouseHover)) : c.viewportElement || (d.mouseStateIn = !1, d.onContainerRollOut(b), u(p, "mouseover", d.winMouseHover))
        }, chartHoverManager: function () {
            return function (b) {
                var c = b.type, d = b.data, e = d.eventListeners || (d.eventListeners = []);
                "mouseover" !== c && "touchstart" !== c || !1 !== d.mouseStateIn || (d.mouseStateIn = !0, d.onContainerRollOver(b), e.push(q(F ? a : p, "mouseover", d.winMouseHover, d)))
            }
        }(), setChartEvents: function () {
            var a = this.options, b = this.eventListeners || (this.eventListeners = []), a = this.link = a.chart.link, c = this.container,
                d = t(this.definition && this.definition.chart.enablechartmousemoveevent, 0);
            u(c, "click", this.onContainerClick);
            b.push(q(c, "click", this.onContainerClick, this));
            u(this.paper.canvas, "mouseover", this.chartHoverManager, this);
            u(this.paper.canvas, "touchstart", this.chartHoverManager, this);
            u(this.paper.canvas, "mouseout", this.chartHoverManager, this);
            u(this.paper.canvas, "touchend", this.chartHoverManager, this);
            b.push(q(this.paper.canvas, "mouseover touchstart mouseout touchend", this.chartHoverManager, this));
            u(c, "mousemove",
                this.onContainerMouseMove, this);
            u(c, "touchmove", this.onContainerMouseMove, this);
            d && b.push(q(c, "mousemove touchmove", this.onContainerMouseMove, this));
            this.paper.canvas.style.cursor = N.svg ? a && "pointer" || "default" : a && "hand" || "default"
        }, onOverlayMessageClick: function () {
            var a = this.elements;
            N.animation({opacity: 0}, 1E3);
            a.messageText && a.messageText.hide();
            a.messageVeil && a.messageVeil.hide()
        }, showMessage: function (a, b) {
            var c = this.paper, d = this.options.chart, e = this.elements, g = e.messageText, h = e.messageVeil, m =
                c.width, l = c.height;
            h || (h = e.messageVeil = c.rect(0, 0, m, l).attr({fill: "rgba(0,0,0,0.2)", stroke: "none"}));
            h.show().toFront().attr("cursor", b ? "pointer" : "default")[b ? "click" : "unclick"](this.onOverlayMessageClick, this);
            g || (g = e.messageText = c.text(m / 2, l / 2, K).attr({
                fill: "rgba(255,255,255,1)",
                "font-family": "Verdana,sans",
                "font-size": 10,
                "line-height": 14,
                ishot: !0
            }));
            a = a || K;
            this.smartLabel.setStyle({"line-height": "14px", "font-family": "Verdana,sans", "font-size": "10px"});
            c = this.smartLabel.getSmartText(a, m - (d.spacingRight ||
                0) - (d.spacingLeft || 0), l - (d.spacingTop || 0) - (d.spacingBotton || 0));
            g.attr({
                text: c.text,
                ishot: !0,
                cursor: b ? "pointer" : "default"
            })[b ? "click" : "unclick"](this.onOverlayMessageClick, this).show().toFront()
        }, drawButtons: function () {
            var a = this, b = a.logic, c = "zoomline" === b.rendererId, d = a.paper, e = a.elements, g = a.toolbar || (a.toolbar = []), h = a.menus || (a.menus = []), m = a.layers, l = a.options, n = l[ia], b = n && n.outCanvasStyle || b.outCanvasStyle || {}, n = l.chart.toolbar || {}, q = n.hDirection, p = c ? 1 : n.vDirection, t = n.button || {}, s = t.scale, u =
                t.width * t.scale, w = t.height * t.scale, C = q * (t.spacing * t.scale + u), z = t.radius, D = (l = l.exporting) && l.buttons || {}, E = D.exportButton && !1 !== D.exportButton.enabled, D = D.printButton && !1 !== D.printButton.enabled, I, F = m.buttons || (m.buttons = d.group("buttons").trackTooltip(!0));
            g.y || (g.y = (c ? 0 : n.y) + n.vMargin * p + za(0, w * p));
            g.x || (g.x = n.x + n.hMargin * q - Na(0, u * q));
            g.count = 0;
            g.add = function (a, b, c) {
                c = "string" === typeof c ? {tooltip: c} : c || {};
                var e = 0 === g.count ? C - q * t.spacing * t.scale : C, e = c.x || (g.x += e), k = c.tooltip || "";
                g.push(a = d.button(e,
                    c.y || g.y, Ja, a, {
                        width: u,
                        height: w,
                        r: z,
                        id: g.count++,
                        verticalPadding: t.symbolHPadding * s,
                        horizontalPadding: t.symbolHPadding
                    }, F).attr({
                    ishot: !0,
                    fill: [t.fill, t.labelFill, t.symbolFill, t.hoverFill],
                    stroke: [t.stroke, t.symbolStroke],
                    "stroke-width": [t.strokeWidth, t.symbolStrokeWidth]
                }).tooltip(k).buttonclick(b));
                return a
            };
            E && (h.push(I = e.exportMenu = aa({
                chart: a, basicStyle: b, items: function (b) {
                    var c = [], d = function (b) {
                        return function () {
                            a.logic.chartInstance.exportChart({exportFormat: b})
                        }
                    }, e;
                    for (e in b)c.push({
                        text: b[e],
                        onclick: d(e)
                    });
                    return c
                }(l.exportformats)
            })), e.exportButton = g.add("exportIcon", function (a, b) {
                return function () {
                    I.visible ? I.hide() : I.show({x: a, y: b + 1})
                }
            }(g.x + u, g.y + w), {tooltip: "Export chart"}));
            D && (e.printButton = g.add("printIcon", function () {
                a.print()
            }, {tooltip: "Print chart"}))
        }, setMargins: function () {
            var a = this.paper, b = this.options.chart || {}, c = ra;
            this.canvasBorderWidth = b.plotBorderWidth || 0;
            this.canvasTop = c(b.marginTop) || 0;
            this.canvasLeft = c(b.marginLeft) || 0;
            this.canvasWidth = c(a.width - (b.marginLeft || 0) -
                (b.marginRight || 0));
            this.canvasHeight = c(a.height - (b.marginTop || 0) - (b.marginBottom || 0));
            this.canvasRight = this.canvasLeft + this.canvasWidth;
            this.canvasBottom = this.canvasTop + this.canvasHeight
        }, drawBackground: function () {
            var a = this, b = a.paper, c = a.layers, d = a.elements, e = c.background, g = d.background, h = d.chartborder, l = a.options.chart || {}, n = m(l.borderWidth) || 0, q = .5 * n, p = 2 * n, t = l.borderWidth || 0, s = a.chartHeight, u = a.chartWidth, C = d.backgroundImage, D = l.bgSWF, E = l.bgSWFAlpha / 100, I = l.bgImageDisplayMode, F = l.bgImageVAlign,
                M = l.bgImageHAlign, la = l.bgImageScale, N = t + "," + t + "," + (u - 2 * t) + "," + (s - 2 * t), G, K, L, Y, S, U, T;
            b.canvas.style.backgroundColor = l.containerBackgroundColor;
            !e && (e = c.background = b.group("background"));
            c = {x: n, y: n, width: b.width - p, height: b.height - p, stroke: "none", fill: V(l.backgroundColor)};
            g ? g.attr(c) : g = d.background = b.rect(c, e);
            c = {
                x: q,
                y: q,
                width: b.width - n,
                height: b.height - n,
                stroke: l.borderColor,
                "stroke-width": n,
                "stroke-dasharray": l.borderDashStyle,
                fill: "none",
                r: l.borderRadius || 0
            };
            h ? h.attr(c) : h = d.chartborder = b.rect(c, e);
            D && (G = new z, S = L = 1, C = [], G.onload = function () {
                K = X(I, F, M, la, t, u, s, G);
                K["clip-rect"] = N;
                if (K.tileInfo)for (L = K.tileInfo.xCount, S = U = K.tileInfo.yCount, T = K.y, delete K.tileInfo; L && K.width && K.height;)U -= 1, Y ? (C[void 0] = Y.clone().attr({
                    x: K.x,
                    y: K.y
                }), e.appendChild(C[void 0])) : C[void 0] = Y = b.image(D, e).attr(K).css({opacity: E}), K.y += K.height, 0 === U && (U = S, L -= 1, K.x += K.width, K.y = T); else C[0] = b.image(D, e), C[0].attr(K).css({opacity: E}).attr({
                    visibility: Ca,
                    "clip-rect": N
                });
                w.raiseEvent("BackgroundLoaded", {
                    url: D,
                    bgImageAlpha: 100 *
                    E,
                    bgImageDisplayMode: I,
                    bgImageVAlign: F,
                    bgImageHAlign: M,
                    bgImageScale: la,
                    imageWidth: G.width,
                    imageHeight: G.height
                }, a.logic.chartInstance)
            }, G.onerror = function (b) {
                w.raiseEvent("BackgroundLoadError", {
                    url: D,
                    bgImageAlpha: 100 * E,
                    error: b,
                    bgImageDisplayMode: I,
                    bgImageVAlign: F,
                    bgImageHAlign: M,
                    bgImageScale: la
                }, a.logic.chartInstance)
            }, G.src = D, d.backgroundImage = C)
        }, drawGraph: function () {
            var a = this, b = a.paper, c = a.plots = a.elements.plots, d = a.logic, e = a.layers, g = a.options, h = a.elements, m = g.chart, g = a.datasets = g.series, l = n(m.rendererId,
                m.defaultSeriesType), q = e.background, p = e.dataset = e.dataset || b.group("dataset").insertAfter(q), t, s, q = function (a, b) {
                return function (e) {
                    var k = c[a], g, h = {hcJSON: {series: []}}, m = h.hcJSON.series[a] || (h.hcJSON.series[a] = {}), l = d.chartInstance.jsVars._reflowData;
                    g = (e = n(e, !k.visible)) ? "visible" : "hidden";
                    da(k.graphics, function (a) {
                        !0 !== a.data("alwaysInvisible") && a.attr("visibility", g)
                    });
                    k.visible = e;
                    b.visible = e;
                    m.visible = e;
                    C(l, h, !0)
                }
            }, u = function (b) {
                return function (d, e) {
                    a["legendClick" + l] && a["legendClick" + l](c[b],
                        d, e) || a.legendClick && a.legendClick(c[b], d, e)
                }
            }, w = function (b) {
                return function () {
                    return a.getEventArgs && a.getEventArgs(c[b])
                }
            }, z = function (b, d, e) {
                return function (g, h) {
                    d.call(a, c[b], e, {numUpdate: g, hasAxisChanged: h})
                }
            };
            e.tracker = e.tracker || b.group("hot").insertAfter(p);
            a.drawCanvas();
            a.drawAxes();
            c || (c = a.plots = a.plots || [], h.plots = c);
            e = 0;
            for (h = g.length; e < h; e++)b = g[e] || {}, p = b.updatePlot = "updatePlot" + S(ea(b.type, b.plotType, l)), p = a[p], t = b.drawPlot = "drawPlot" + S(ea(b.type, b.plotType, l)), t = a[t] || a.drawPlot, (s =
                c[e]) || (c.push(s = {
                index: e,
                items: [],
                data: b.data || [],
                name: b.name,
                userID: b.userID,
                setVisible: q(e, b),
                legendClick: u(e),
                getEventArgs: w(e),
                realtimeUpdate: z(e, p || t, b)
            }), b.plot = s, b.legendClick = s.legendClick, b.getEventArgs = s.getEventArgs, b.setVisible = s.setVisible), t.call(a, s, b);
            m.hasScroll && (a.drawScroller(), a.finalizeScrollPlots())
        }, drawPlot: e, drawCanvas: e, drawAxes: e, drawScroller: function () {
        }, drawLegend: function () {
            var a = this, b = a.options, c = a.paper, d = b.chart || {}, e = b.legend, g = e.scroll, b = {elements: {}}, h = b.elements,
                m = a.layers.legend, l = h.box, n = h.caption, q = h.elementGroup, p = "vertical" === e.layout, s = d.marginBottom, u = d.spacingBottom, w = d.spacingLeft, z = d.spacingRight, D = c.width, E = c.height, I = a.canvasTop, F = e.width, M = e.height, G = e.borderRadius, L = e.backgroundColor, V = e.borderColor, Y = e.borderWidth || 0, U = .5 * Y, T = .5 * Y + 2, d = t(e.padding, 4), X = .5 * d, ca, Z, r, v, A, H, f, Q = g && g.enabled;
            p ? (p = D - z - F, s = I + .5 * (E - s - I - M) + (e.y || 0)) : (p = w + .5 * (D - w - z - F) + (e.x || 0), s = E - u - M);
            u = N.crispBound(p, s, F, M, Y);
            p = u.x;
            s = u.y;
            F = u.width;
            M = u.height;
            m || (m = a.layers.legend = c.group("legend").insertBefore(a.layers.tracker).translate(p,
                s).attr("class", "fusioncharts-legend"));
            a.addCSSDefinition(".fusioncharts-legend .fusioncharts-caption", C({"text-anchor": e.title.align}, e.title.style));
            e.legendAllowDrag && (a.addCSSDefinition(".fusioncharts-legend", {cursor: "move"}), Z = p, r = s, m.drag(function (a, b) {
                v = H + a;
                A = f + b;
                v + F + T > D && (v = D - F - T);
                A + M + T > E && (A = E - M - T);
                v < T && (v = T);
                A < T && (A = T);
                m.translate(v - Z, A - r);
                Z = v;
                r = A
            }, function () {
                H = Z;
                f = r
            }));
            G = {
                x: 0,
                y: 0,
                width: F,
                height: M,
                r: G,
                stroke: V,
                "stroke-width": Y,
                fill: L || "none",
                ishot: e.legendAllowDrag
            };
            l ? l.attr(G) : l = h.box =
                c.rect(G, m);
            l.shadow(e && e.shadow);
            Q ? (ca = M - d, l = "," + F + "," + ca, q = h.elementGroup = c.group("legenditems", m).attr({"clip-rect": "0," + X + l}), g = h.scroller || (h.scroller = c.scroller(F - 10 + X - Y, U, 10, M - Y, !1, {
                    scrollPosition: g.scrollPosition || 0,
                    scrollRatio: (ca + d) / e.totalHeight,
                    showButtons: !1,
                    displayStyleFlat: g.flatScrollBars
                }, m)), g.attr("fill", e.legendScrollBgColor).scroll(function (b) {
                q.transform(["T", 0, (ca - e.totalHeight) * b]);
                C(a.fusionCharts.jsVars._reflowData, {hcJSON: {legend: {scroll: {position: b}}}}, !0)
            })) : q = h.elementGroup =
                m;
            if (e.title && e.title.text !== K) {
                switch (e.title.align) {
                    case "start":
                        g = d;
                        break;
                    case "end":
                        g = F - d - (Q ? 10 : 0);
                        break;
                    default:
                        g = .5 * F
                }
                G = {
                    "class": "fusioncharts-caption",
                    "text-anchor": e.title.align,
                    text: e.title.text,
                    title: e.title.originalText || "",
                    x: g,
                    y: d,
                    fill: e.title.style.color,
                    "vertical-align": "top",
                    "line-height": e.title.style.lineHeight
                };
                n ? n.attr(G) : n = h.caption = c.text(G, q).attr("class", "fusioncharts-caption")
            }
            this["draw" + S(e.type || "point") + "LegendItem"](b)
        }, drawPointLegendItem: function (a) {
            var b = this, c = b.paper,
                d = b.options, e = d.series, g = d.chart.defaultSeriesType, d = d.legend, h = d.legendHeight, m = d.symbolPadding, l = d.textPadding || 2, n = t(d.padding, 4), q = d.itemHoverStyle, p = d.itemHiddenStyle, u = d.itemStyle, z = u.color, p = p && p.color || "#CCCCCC", D = q && q.color || z, q = d.symbol3DLighting, E = d.symbolWidth, I = !1 !== d.interactiveLegend, F = a.elements, M = F.elementGroup;
            a = a.item = [];
            var F = F.item = [], N = [], la = {
                line: !0,
                spline: !0,
                scatter: !0,
                bubble: !0,
                dragnode: !0,
                zoomline: !0
            }, K, G, L, S, T, U, X, ca, Z, r, v, A, H, f, Q, W, ba, ia, pb, da, ta;
            A = 0;
            for (H = e.length; A < H; A +=
                1)if ((K = e[A]) && !1 !== K.showInLegend)if (ca = K.type || g, "point" === K.legendType)for (K = K.data || [], T = 0, U = K.length; T < U; T += 1)L = K[T] || {}, !1 !== L.showInLegend && (L._legendType = ca, N.push(L)); else switch (K._legendType = ca, ca) {
                case "pie":
                case "pie3d":
                case "funnel":
                case "pyramid":
                    N = K.data;
                    break;
                default:
                    N.push(K)
            }
            N.sort(function (a, b) {
                return (a.legendIndex || 0) - (b.legendIndex || 0) || a.__i - b.__i
            });
            d.reversed && N.reverse();
            e = d.initialItemX || 0;
            g = d.initialItemY || 0;
            T = function (a) {
                var c = this.data("legendItem"), d = c.getEventArgs ? c.getEventArgs() :
                {}, e;
                a = Y(b.logic.chartInstance.ref, a);
                d.chartX = a.chartX;
                d.chartY = a.chartY;
                d.pageX = a.pageX;
                d.pageY = a.pageY;
                d.preventDefaults = function () {
                    e = !0
                };
                w.raiseEvent("LegendItemClicked", d, b.logic.chartInstance);
                I && !e && c.legendClick()
            };
            U = function (a) {
                var c = this.data("legendItem"), d = c.getEventArgs ? c.getEventArgs() : {};
                a = Y(b.logic.chartInstance.ref, a);
                var e = !1 !== c.visible, c = c.plot.legend.elements.legendItemText;
                d.chartX = a.chartX;
                d.chartY = a.chartY;
                d.pageX = a.pageX;
                d.pageY = a.pageY;
                e && c && c.attr({fill: D});
                w.raiseEvent("LegendItemRollover",
                    d, b.logic.chartInstance)
            };
            X = function (a) {
                var c = this.data("legendItem"), d = c.getEventArgs ? c.getEventArgs() : {};
                a = Y(b.logic.chartInstance.ref, a);
                var e = !1 !== c.visible, c = c.plot.legend.elements.legendItemText;
                d.chartX = a.chartX;
                d.chartY = a.chartY;
                d.pageX = a.pageX;
                d.pageY = a.pageY;
                e && c && c.attr({fill: z});
                w.raiseEvent("LegendItemRollout", d, b.logic.chartInstance)
            };
            b.addCSSDefinition(".fusioncharts-legend .fusioncharts-legenditem", d.itemStyle);
            A = 0;
            for (H = N.length; A < H; A += 1)!1 !== N[A].showInLegend && (ta = {
                elements: {}, hiddenColor: p,
                itemTextColor: z, hoverColor: D
            }, a.push(ta), F.push(ta.elements), K = N[A], Z = e + K._legendX + n, r = g + K._legendY - n, v = K._legendH, G = K._legendType || ca, L = !1 !== K.visible, S = ta.itemLineColor = V(K.color || {}), K.plot.legend = ta, ta.elements.legendItemText = c.text({
                "class": "fusioncharts-legenditem",
                x: Z + h + l - 2,
                y: r + (K._legendTestY || 0),
                text: K.name,
                fill: L ? z : p,
                "vertical-align": "top",
                "text-anchor": "start",
                cursor: u.cursor || "pointer",
                ishot: I,
                "line-height": u.lineHeight,
                "font-size": u.fontSize
            }, M).data("legendItem", K), la[G] ? (G = r + m + .5 * E,
            K.lineWidth && (da = ta.elements.legendItemLine = c.path({
                "stroke-width": K.lineWidth,
                stroke: L ? S : p,
                cursor: u.cursor || "pointer",
                ishot: I,
                path: ["M", Z + m, G, "L", Z + m + E, G]
            }, M).data("legendItem", K)), K && (ba = K.marker) && !1 !== ba.enabled && (ta.symbolStroke = V(ea((ia = ba.lineColor) && (ia.FCcolor && ia.FCcolor.color.split(",")[0] || ia), S)), q ? ba.fillColor && ba.fillColor.FCcolor ? (G = C({}, ba.fillColor), G.FCcolor.alpha = "100") : G = ea(ba.fillColor, S) : G = {
                FCcolor: {
                    color: ea((pb = ba.fillColor) && (pb.FCcolor && pb.FCcolor.color.split(",")[0] || pb),
                        S), angle: 0, ratio: "0", alpha: "100"
                }
            }, ta.symbolColor = V(G), f = .5 * E, S = Z + m + f, G = r + m + f, da && (f *= .6), Q = ba.symbol.split("_"), W = "spoke" === Q[0] ? 1 : 0, G = Q[1] ? ta.elements.legendItemSymbol = c.polypath(Q[1], S, G, f, ba.startAngle, W, M) : ta.elements.legendItemSymbol = c.circle(S, G, f, M), G.data("legendItem", K).attr({
                cursor: u.cursor || "pointer",
                stroke: L ? ta.symbolStroke : p,
                fill: L ? ta.symbolColor : p,
                "stroke-width": 1,
                ishot: I
            }))) : (G = b.getSymbolPath(Z + m, r + m, E, E, G, K, !q), ta.symbolColor = V(G.color), ta.symbolStroke = V(G.strokeColor), G = ta.elements.legendItemSymbol =
                c.path({
                    path: G.path,
                    "stroke-width": G.strokeWidth,
                    stroke: L ? ta.symbolStroke : p,
                    fill: L ? ta.symbolColor : p,
                    cursor: u.cursor || "pointer",
                    ishot: I
                }, M).data("legendItem", K)), ta.elements.legendItemBackground = c.rect({
                x: Z,
                y: r,
                width: K._totalWidth,
                height: v,
                r: 0,
                fill: V(K.legendFillColor || s),
                "stroke-width": 1,
                stroke: V(K.legendBorderColor || "none"),
                cursor: u.cursor || "pointer",
                ishot: I
            }, M).click(T).mouseover(U).mouseout(X).data("legendItem", K));
            d.reversed && N.reverse()
        }, drawCaption: function () {
            var a = this.options.chart, b = this.options.title,
                c = this.options.subtitle, d = this.paper, e = this.smartLabel, g = this.elements, h = this.layers, m = h.caption, l = g.caption, n = g.subcaption, q = b.text, p = c && c.text, t = b.x, s;
            !q && !p || m || (m = h.caption = d.group("caption"), h.tracker ? m.insertBefore(h.tracker) : m.insertAfter(h.dataset));
            q ? (this.addCSSDefinition(".fusioncharts-caption", b.style), s = {
                "class": "fusioncharts-caption",
                text: b.text,
                fill: b.style.color,
                x: t,
                y: b.y || a.spacingTop || 0,
                "text-anchor": b.align || "middle",
                "vertical-align": b.verticalAlign || "top",
                visibility: "visible",
                title: b.originalText || ""
            }, l ? l.attr(s) : l = g.caption = d.text(s, m).attr("class", "fusioncharts-caption"), l.css(b.style), e ? (e.setStyle(b.style), s = e.getOriSize(b.text).height) : s = 10) : l && (l = g.caption = l.remove());
            p ? (this.addCSSDefinition(".fusioncharts-subcaption", c.style), s = {
                "class": "fusioncharts-subcaption",
                text: c.text,
                title: c.originalText || "",
                fill: c.style.color,
                x: t,
                y: q ? l.attrs.y + s + 2 : b.y || a.spacingTop || 0,
                "text-anchor": b.align || "middle",
                "vertical-align": "top",
                visibility: "visible"
            }, n ? n.attr(s) : n = g.subcaption =
                d.text(s, m).attr("class", "fusioncharts-subcaption"), n.css(c.style)) : n && (g.subcaption = n.remove());
            q || p || !m || (h.caption = m.remove())
        }, drawLogo: function () {
            var a = this, b = a.paper, c = a.elements, d = a.options, e = d.credits, g = d.chart || {}, h = g.borderWidth || 0, m = a.chartHeight, l = a.chartWidth, n = c.logoImage, q = g.logoURL, t = g.logoAlpha / 100, s = g.logoPosition, u = g.logoLink, C = g.logoScale, D = g.logoLeftMargin, E = g.logoTopMargin, d = {
                    tr: {
                        vAlign: xb,
                        hAlign: eb
                    }, bl: {vAlign: Ua, hAlign: cb}, br: {vAlign: Ua, hAlign: eb}, cc: {vAlign: "middle", hAlign: "middle"}
                },
                I, M, K;
            a.logic && e.enabled && b.text().attr({
                text: e.text,
                x: 6,
                y: m - 4,
                "vertical-align": Ua,
                "text-anchor": "start",
                fill: "rgba(0,0,0,0.5)",
                title: e.title || ""
            }).css({fontSize: 9, fontFamily: "Verdana,sans", cursor: "pointer", _cursor: "hand"}).click(function () {
                try {
                    p.open(e.href)
                } catch (a) {
                    (p.top || p).location.href = e.href
                }
            });
            q && (I = new z, (K = d[s]) || (K = {vAlign: xb, hAlign: cb}), I.onload = function () {
                a.disposed || b.disposed || (M = X("none", K.vAlign, K.hAlign, C, h, l, m, I), F && (M.w = M.width || 0, M.h = M.height || 0), M.src = q, n = a.paper.image(M).translate(D,
                    E).css("opacity", t), u && n.css({cursor: "pointer", _cursor: "hand"}), n.mouseover(function (b) {
                    b = Y(a.logic.chartInstance.ref, b);
                    w.raiseEvent("LogoRollover", {
                        logoURL: q,
                        logoAlpha: 100 * t,
                        logoPosition: s || "tl",
                        logoScale: C,
                        logoLink: u,
                        chartX: b.chartX,
                        chartY: b.chartY,
                        pageX: b.pageX,
                        pageY: b.pageY
                    }, a.logic.chartInstance)
                }), n.mouseout(function (b) {
                    b = Y(a.logic.chartInstance.ref, b);
                    w.raiseEvent("LogoRollout", {
                        logoURL: q,
                        logoAlpha: 100 * t,
                        logoPosition: s || "tl",
                        logoScale: C,
                        logoLink: u,
                        chartX: b.chartX,
                        chartY: b.chartY,
                        pageX: b.pageX,
                        pageY: b.pageY
                    }, a.logic.chartInstance)
                }), n.click(function (b) {
                    b = Y(a.logic.chartInstance.ref, b);
                    w.raiseEvent("LogoClick", {
                        logoURL: q,
                        logoAlpha: 100 * t,
                        logoPosition: s || "tl",
                        logoScale: C,
                        logoLink: u,
                        chartX: b.chartX,
                        chartY: b.chartY,
                        pageX: b.pageX,
                        pageY: b.pageY
                    }, a.logic.chartInstance, void 0, function () {
                        u && g.events.click.call({link: u})
                    })
                }), w.raiseEvent("LogoLoaded", {
                    logoURL: q,
                    logoAlpha: 100 * t,
                    logoPosition: s || "tl",
                    logoScale: C,
                    logoLink: u
                }, a.logic.chartInstance))
            }, I.onerror = function (b) {
                w.raiseEvent("LogoLoadError",
                    {
                        logoURL: q,
                        logoAlpha: 100 * t,
                        logoPosition: s || "tl",
                        logoScale: C,
                        logoLink: u,
                        error: b
                    }, a.logic.chartInstance)
            }, I.src = q, c.logoImage = n)
        }, getEventArgs: function (a) {
            a = a || {};
            return {datasetName: a.name, datasetIndex: a.index, id: a.userID, visible: a.visible}
        }, legendClick: function (a, b) {
            var c = a.legend, d = c && c.elements, e = d && d.legendItemText, g = d && d.legendItemSymbol, d = d && d.legendItemLine, h = c && c.hiddenColor, m = c && c.itemLineColor, l = c && c.itemTextColor, n = c && c.symbolColor, q = c && c.symbolStroke, c = ea(b, !a.visible);
            a.setVisible(b);
            c ?
                (g && g.attr({
                    fill: n || m,
                    stroke: q
                }), e && e.attr({fill: l}), d && d.attr({stroke: m})) : (g && g.attr({
                fill: h,
                stroke: h
            }), e && e.attr({fill: h}), d && d.attr({stroke: h}));
            if ((e = this.datasets && this.datasets[a.index] && this.datasets[a.index].relatedSeries) && e instanceof Array && 0 < e.length)for (g = e.length; g--;)d = parseFloat(e[g]), d = this.plots[d], d.legendClick.call(d, c, !1)
        }, exportChart: function (b) {
            var d = this, e = d.fusionCharts, g = d.options;
            b = "object" === typeof b && function (a) {
                    var b = {}, c;
                    for (c in a)b[c.toLowerCase()] = a[c];
                    return b
                }(b) ||
                {};
            var h = C(C({}, g.exporting), b), m = (h.exportformat || "png").toLowerCase(), l = h.exporthandler, n = (h.exportaction || K).toLowerCase(), q = h.exporttargetwindow || K, t = h.exportfilename, s = h.exportparameters;
            if (!g.exporting || !g.exporting.enabled || !l)return !1;
            w.raiseEvent("beforeExport", h, e, void 0, function () {
                var b = d.layers.buttons, g = e.id, k = d.paper, u, C;
                b && b.attr("visibility", "hidden");
                u = k.toSVG();
                b && b.attr("visibility", "visible");
                u = u.replace(/(\sd\s*=\s*["'])[M\s\d\.]*(["'])/ig, "$1M 0 0 L 0 0$2");
                b = {
                    charttype: e.chartType(),
                    stream: u,
                    stream_type: "svg",
                    meta_bgColor: h.bgcolor || "",
                    meta_bgAlpha: h.bgalpha || "1",
                    meta_DOMId: e.id,
                    meta_width: k.width,
                    meta_height: k.height,
                    parameters: ["exportfilename=" + t, "exportformat=" + m, "exportaction=" + n, "exportparameters=" + s].join("|")
                };
                w.raiseEvent("exportDataReady", b, e);
                if ("download" === n) {
                    /webkit/ig.test(p.navigator.userAgent) && "_self" === q && (q = u = g + "export_iframe", d.exportIframe || (d.exportIframe = u = ka("IFRAME", {
                        name: u,
                        width: "1px",
                        height: "1px"
                    }, a.body), u.style.cssText = "position:absolute;left:-10px;top:-10px;"));
                    u = ka("form", {method: "POST", action: l, target: q, style: "display:none;"}, a.body);
                    for (C in b)ka("input", {type: "hidden", name: C, value: b[C]}, u);
                    u.submit();
                    a.body.removeChild(u);
                    u = void 0;
                    return !0
                }
                (new w.ajax(function (a) {
                    var b = {};
                    a.replace(RegExp("([^?=&]+)(=([^&]*))?", "g"), function (a, c, d, e) {
                        b[c] = e
                    });
                    c.raiseEvent("exported", b, e)
                }, function (a) {
                    a = {statusCode: 0, statusMessage: "failure", error: a, DOMId: g, width: k.width, height: k.height};
                    c.raiseEvent("exported", a, e, [a])
                })).post(l, b)
            }, function () {
                w.raiseEvent("exportCancelled",
                    h, e)
            })
        }, print: function (b) {
            var c = this, d = C({}, b);
            if (c.isPrinting)return !1;
            w.raiseEvent("BeforePrint", d, c.logic.chartInstance, void 0, function () {
                var b = c.container, e = c.elements, g = e.printButton, k = e.exportButton, h = [], m = b.parentNode, e = a.body || a.getElementsByTagName("body")[0], l = e.childNodes;
                c.isPrinting = !0;
                da(l, function (a, b) {
                    1 == a.nodeType && (h[b] = a.style.display, a.style.display = "none")
                });
                !1 !== d.hideButtons && (g && "hidden" != g.attrs.visibility && g.attr({visibility: "hidden"}), k && "hidden" != k.attrs.visibility && k.attr({visibility: "hidden"}));
                e.appendChild(b);
                p.print();
                setTimeout(function () {
                    g && g.attr({visibility: "visible"});
                    k && k.attr({visibility: "visible"});
                    m.appendChild(b);
                    da(l, function (a, b) {
                        1 == a.nodeType && (a.style.display = h[b])
                    });
                    c.isPrinting = !1;
                    w.raiseEvent("PrintComplete", d, c.logic.chartInstance)
                }, 1E3)
            }, function () {
                w.raiseEvent("PrintCancelled", d, c.logic.chartInstance)
            })
        }, getSymbolPath: function (a, b, c, d, e, g, h) {
            var m = ["M"], l, n, q;
            l = (g.color && ub("string" === typeof g.color ? g.color : g.color.FCcolor.color) || K).replace(E, "");
            q = Qb(l, 60).replace(E,
                L);
            h ? l = {
                FCcolor: {
                    color: l,
                    angle: 0,
                    ratio: "0",
                    alpha: "100"
                }
            } : (h = Qb(l, 40), l = {
                FCcolor: {
                    color: l + "," + l + "," + h + "," + l + "," + l,
                    ratio: "0,30,30,30,10",
                    angle: 0,
                    alpha: "100,100,100,100,100"
                }
            });
            switch (e) {
                case "column":
                case "dragcolumn":
                case "column3d":
                    g = .25 * c;
                    e = .5 * g;
                    h = .7 * d;
                    n = .4 * d;
                    m = m.concat([a, b + d, "l", 0, -h, g, 0, 0, h, "z", "m", g + e, 0, "l", 0, -d, g, 0, 0, d, "z", "m", g + e, 0, "l", 0, -n, g, 0, 0, n, "z"]);
                    l.FCcolor.angle = 270;
                    break;
                case "bar":
                case "bar3d":
                    g = .3 * c;
                    e = .6 * c;
                    h = d / 4;
                    n = h / 2;
                    m = m.concat([a, b, "L", a + e, b, a + e, b + h, a, b + h, "Z", "M", a, b + h + n, "L", a +
                    c, b + h + n, a + c, b + h + n + h, a, b + 2 * h + n, "Z", "M", a, b + 2 * (h + n), "L", a + g, b + 2 * (h + n), a + g, b + d, a, b + d, "Z"]);
                    break;
                case "area":
                case "area3d":
                case "areaspline":
                case "dragarea":
                    h = .6 * d;
                    n = .2 * d;
                    d *= .8;
                    m = m.concat([a, b + d, "L", a, b + h, a + .3 * c, b + n, a + .6 * c, b + h, a + c, b + n, a + c, b + d, "Z"]);
                    l.FCcolor.angle = 270;
                    break;
                case "pie":
                case "pie3d":
                    g = .5 * c;
                    e = .9 * g;
                    c = a + g + 1;
                    d = b + g - 1;
                    a = a + g - 1;
                    b = b + g + 1;
                    m = m.concat(["M", c, d, "L", c, d - e + 1, "A", e - 1, e - 1, 0, 0, 1, c + e - 1, d, "Z", "M", a, b, "L", a, b - e, "A", e, e, 0, 1, 0, a + e, b, "Z"]);
                    l.FCcolor.radialGradient = "1";
                    l.FCcolor.ratio = "0,0,0,100,0";
                    break;
                case "boxandwhisker2d":
                    m = m.concat([a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]);
                    l = g.color;
                    q = "#000000";
                    break;
                default:
                    m = m.concat([a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]), l.FCcolor.angle = 270, l.FCcolor.ratio = "0,70,30"
            }
            return {path: m, color: l, strokeWidth: .5, strokeColor: q}
        }
    });
    d.prototype = {
        configure: function () {
            var a = this.axisData, b = this.renderer, c = this.isVertical, d = this.isReverse, e = b.options, g = e.chart, h = g.marginBottom, g = g.marginRight, m = b.canvasTop, l = b.canvasLeft, n = this.min = a.min, n = this.span = (this.max = a.max) - n, l = this.startX =
                t(a.startX, l), m = this.startY = t(a.startY, m), q = this.endX = t(a.endX, b.canvasRight), a = this.endY = t(a.endY, b.canvasBottom), n = this.pixelRatio = c ? (a - m) / n : (q - l) / n, p = this.relatedObj = {};
            p.marginObj = {top: m, right: g, bottom: h, left: l};
            p.canvasObj = {x: l, y: m, w: q - l, h: a - m, toX: q, toY: a};
            this.startPixel = d ? c ? a : q : c ? m : l;
            this.pixelValueRatio = d ? -n : n;
            this.primaryOffset = this.secondaryOffset = 0;
            this.cache = {lowestVal: 0, highestVal: 0, indexArr: [], hashTable: {}};
            this.elements = this.elements || {};
            this.belowBandGroup && (b.elements.axes = b.elements.axes ||
                {}, b.elements.axes.belowBandGroup = this.belowBandGroup, e && e.chart && e.chart.hasScroll && this.belowBandGroup.attr({"clip-rect": b.elements["clip-canvas"]}));
            this.poi = {}
        }, draw: function () {
            var a = this.axisData, b = a && a.plotLines || [], c = a && a.plotBands || [], d = a && a.showLine, e = a && a.tickLength, g = a && a.tickWidth;
            a && a.title && this.drawAxisName();
            a && a.labels && (this.renderer.addCSSDefinition("." + a.labels.className + " .fusioncharts-label", a.labels.style), this.belowLabelGroup && this.belowLabelGroup.attr("class", a.labels.className),
            this.topLabelGroup && this.topLabelGroup.attr("class", a.labels.className));
            b && 0 < b.length && this.drawPlotLine();
            c && 0 < c.length && this.drawPlotBands();
            isNaN(e) || 0 === e || isNaN(g) || 0 === g || this.drawTicks();
            d && this.drawLine()
        }, scroll: function () {
        }, setOffset: function (a, b) {
            var c = this.primaryOffset = a, d = this.secondaryOffset = b || this.secondaryOffset, e = this.isVertical, g, h, m, l = [this.topLabelGroup, this.belowLabelGroup, this.topLineGroup, this.belowLineGroup, this.topBandGroup, this.belowBandGroup], n, q;
            n = 0;
            for (q = l.length; n <
            q; n += 1)if (m = l[n])g = e ? d : c, h = e ? c : d, m.attr({transform: "t" + g + "," + h});
            e || this.drawPlotLine && this.drawPlotLine()
        }, update: function () {
        }, drawTicks: function () {
            var a = this.axisData, b = this.renderer.paper, c = this.min, d = this.max, e = this.isVertical, g = this.layerBelowDataset, g = this.tickGroup = this.tickGroup || b.group("axis-ticks", g), h = this.relatedObj.canvasObj, m = a.offset, l = a.opposite, n = a.showAxis, q = a.tickInterval, p = a.tickLength, t = a.tickWidth, a = a.tickColor, s = c;
            if (e && n)for (c = this.getAxisPosition(c), e = this.getAxisPosition(d),
                                h = l ? h.toX + m : h.x - m, b.path(["M", h, c, "L", h, e], g).attr({
                stroke: a,
                "stroke-width": t
            }); xa(s) <= d;)m = this.getAxisPosition(s), c = l ? h + p : h - p, b.path(["M", h, m, "L", c, m], g).attr({
                stroke: a,
                "stroke-width": t
            }), s += q
        }, getAxisPosition: function (a, b) {
            var c;
            b ? c = (a - this.startPixel) / this.pixelValueRatio + this.min : (a = this.axisData.reversed ? this.min + (this.max - a) : a, c = this.startPixel + (a - this.min) * this.pixelValueRatio);
            return c
        }, drawPlotLine: function () {
            var a = this.renderer, b = a.paper, c = this.isVertical, d = +!c, e = this.lines = this.lines ||
                    [], g = this.labels = this.labels || [], h = this.relatedObj.canvasObj, m = this.globalOptions || {}, l = this.elements || {}, n = this.axisData.plotLines || [], q = this.primaryOffset, p = c ? this.startY : this.startX, u = c ? this.endY : this.endX, w = parseFloat(a.canvasBorderWidth) || 0, C = Na(n.length, Na(e.length, g.length)), z = a.layers.datalabels, D = this.belowLineGroup, E = this.topLineGroup, I = this.belowLabelGroup, M = this.topLabelGroup, F = !1 !== (a.tooltip || {}).enabled, G = function (b) {
                    return function (c) {
                        Ba.call(this, a, c, b)
                    }
                }, m = m.chart.xDepth || 0, N = [],
                L = 0, Y, S, T, U, X, Z, r, v, A, H, f, Q, W, ba, ia, pb, ea, ta, da, ua, ka, fa, aa, ra, oa, ma, db, qa, za, Da, Ga, xa, Ea, Fb, $a, Pa, Ma, Ja, Aa, La, Ca, ib, jb;
            for (jb = 0; jb < C; jb += 1) {
                T = U = X = null;
                T = e[jb];
                U = g[jb];
                if (r = n[jb])if (v = r.width, A = r.isVline, H = r.isTrend, f = r.isGrid, Q = r.tooltext, W = r.value, ba = r.color, ia = r.dashStyle, pb = H ? r.to : null, ea = r._isStackSum, Y = 3 < r.zIndex ? E : D, ta = r.label) {
                    da = ta.style;
                    ua = ta.text;
                    ka = da && da.color;
                    fa = ta.offsetScaleIndex || 0;
                    aa = ta.offsetScale;
                    if (ra = da && da.fontSize)oa = ra, -1 !== oa.indexOf("px") && (oa = oa.replace("px", ""), oa = parseFloat(oa));
                    S = da && da.lineHeight;
                    ra = da ? {
                        fontFamily: da.fontFamily,
                        fontSize: da.fontSize,
                        lineHeight: da.lineHeight,
                        fontWeight: da.fontWeight,
                        fontStyle: da.fontStyle
                    } : null;
                    S && (ma = S, -1 !== ma.indexOf("px") && (ma = ma.replace("px", ""), ma = parseFloat(ma)));
                    db = ta.rotation;
                    qa = ta.x || 0;
                    za = ta.y || 0;
                    Da = ta.align;
                    Ga = ta.verticalAlign;
                    xa = ta.textAlign;
                    Ea = (Ea = ta.borderWidth) ? -1 !== Ea.indexOf("px") ? Ea.replace("px", "") : 1 : 1;
                    S = ea ? z : 3 <= r.zIndex ? M : I;
                    ta.backgroundColor && (ta.labelBgClr = V({
                        color: ta.backgroundColor,
                        alpha: 100 * ta.backgroundOpacity
                    }));
                    ta.borderColor && (ta.labelBorderClr = V({color: ta.borderColor, alpha: "100"}));
                    Fb = oa ? .2 * oa : 2;
                    xa = "left" === xa ? "start" : "right" === xa ? "end" : "middle"
                }
                Z = Ca = "visible";
                ib = 0 > t(aa, W, 0);
                c ? (Pa = this.getAxisPosition(W), Ja = H ? this.getAxisPosition(pb) || Pa : Pa, Aa = Pa !== Ja ? !0 : !1, La = ["M", h.x, Pa, "L", h.toX, Ja], A ? a.logic.isBar && ($a = a.yAxis[fa], !ea && !isNaN(aa) && 0 <= aa && 1 >= aa && (aa = $a.min + ($a.max - $a.min) * aa), Ma = $a.getAxisPosition(t(aa, W)) + qa + Fb * (ib ? -1 : 1)) : Ma = ta ? $a = this.axisData.isOpposite || "right" === Da ? h.toX + qa : h.x + qa : $a = this.axisData.isOpposite ?
                    h.toX : h.x) : ($a = this.getAxisPosition(W) || 0, Ma = H ? this.getAxisPosition(pb) || $a : $a, !H && !A && 0 < m && ($a += m, Ma += m, u += m), Aa = $a !== Ma ? !0 : !1, La = ["M" + $a, h.y, "L", Ma, h.toY], Ca = $a + q < p || $a + q > u ? "hidden" : Ca, A ? ($a = a.yAxis[fa], !ea && !isNaN(aa) && 0 <= aa && 1 >= aa && (aa = $a.min + ($a.max - $a.min) * (1 - aa)), Pa = $a.getAxisPosition(t(aa, W)) + za, Pa -= (w + parseFloat(Ea)) * (za && (0 < za ? -1 : 1))) : this.axisData.opposite || "top" === Ga && !f ? (Pa = h.y + za, Ja = "bottom") : Pa = h.toY + za, Ja = Pa);
                Z = c ? Z : Ma + q < p || Ma + q > u ? "hidden" : Z;
                if (r && "visible" === Ca && .1 < v)Aa = {
                    path: Ha(La,
                        v),
                    stroke: ba,
                    "stroke-width": v,
                    "shape-rendering": !Aa && 1 <= v ? "crisp" : void 0,
                    "stroke-dasharray": ia ? ia : void 0,
                    visibility: Ca
                }, T ? T.attr(Aa) : (T = e[jb] = b.path(Aa, Y).css(r.style), l.lines = l.lines || [], l.lines.push(T)), F && Q && v < ca && Ca && (X = b.path({
                    stroke: s,
                    "stroke-width": ca,
                    ishot: !0,
                    path: La,
                    fill: s
                }, a.layers.tracker)), X = X || T, F && Q && X.tooltip(Q); else if (T || U)T && T.remove(), T = null, e && (e[jb] = null), l && l.lines && (l.lines[jb] = null);
                ta && r && !r.stepped && "visible" === Z && ta.text != K && " " != ta.text ? (Pa = H ? "left" === Da ? Pa : Ja : Ja, X = Ma -
                    +!A * d * m + d * (qa || 0), ea ? (Ja = c || db ? "middle" : "bottom", Pa += c ? 0 : oa * (ib ? -.4 : .4), db && (Pa += ib ? 4 : -2, xa = ib ? "end" : "start")) : d && this.axisData.opposite ? (Ja = Ua, xa = db ? "start" : "middle") : Ja = Ga, /\n|<br\s*?\/?>/ig.test(ua) && f && (db ? (Ja = "middle", X -= d * (qa || 0)) : (Ja = d && this.axisData.opposite && !db ? "middle" : xb, Pa -= ma)), Aa = {
                    "class": "fusioncharts-label",
                    text: ua,
                    fill: ra ? ka || ba : null,
                    title: ta && (ta.originalText || K),
                    cursor: ta.link ? "pointer" : K,
                    x: X,
                    y: Pa,
                    "text-anchor": xa,
                    "vertical-align": Ja,
                    transform: " ",
                    "text-bound": [da.backgroundColor ||
                    ta.labelBgClr, da.borderColor || ta.labelBorderClr, da.borderThickness || Ea, da.borderPadding || Fb, da.borderRadius, da.borderDash],
                    visibility: Z,
                    "line-height": da.lineHeight
                }, U ? U.attr(Aa) : (U = g[jb] = b.text(Aa, S).attr("class", "fusioncharts-label"), T && (T.label = U), l.labels = l.labels || [], l.labels.push(U)), ra && U.css(ra), r.isDataLabel && (Z = {
                    text: ua,
                    index: L,
                    link: ta.link
                }, L += 1, U.click(G("dataLabelClick")).hover(G("dataLabelRollOver"), G("dataLabelRollOut")).data("eventArgs", Z)), db && U.attr("transform", ["r", db, X, Pa]), ea &&
                U && N.push(U)) : U && (U.isRotationSet = !1, U.remove(), g && (g[jb] = null), l && l.labels && (l.labels[jb] = null));
                !T && !U || r && null === r.value || (r && r.isMinLabel ? this.poi.min = {
                    label: U,
                    index: jb,
                    line: T
                } : r && r.isMaxLabel ? this.poi.max = {
                    label: U,
                    index: jb,
                    line: T
                } : r && r.isZeroPlane && (this.poi.zero = {label: U, index: jb, line: T}));
                T = U = null
            }
            t(a.options.plotOptions.series.animation.duration, 0)
        }, drawPlotBands: function () {
            var a = this.renderer, b = a.paper, c = this.isVertical, d = this.axisData.plotBands || [], e = this.bands = this.bands || [], g = this.bandLabels =
                this.bandLabels || [], h = this.relatedObj.canvasObj, m = this.primaryOffset, l = c ? this.startY : this.startX, n = c ? this.endY : this.endX, q = a.options.chart.hasScroll, p = this.belowBandGroup, s = this.topBandGroup, u = this.belowLabelGroup, w = this.topLabelGroup, C = this.elements || {}, a = !1 !== (a.tooltip || {}).enabled, z, D, E, I, M, F, K, G, N, L, Y, S, T, U, r, v, A, H, f, Q, W, ba, X, Z, ca, ta, da, ua, ea, ia, aa, ka, oa, ra, fa, ma = Na(d.length, e.length);
            for (fa = 0; fa < ma; fa += 1) {
                ra = "visible";
                ka = e[fa];
                oa = g[fa];
                if (z = d[fa])if (D = z.tooltext, E = z.to, I = z.from, M = z.value, F =
                        z.width, K = z.color, ia = 3 < z.zIndex ? s : p, G = z.label) {
                    if (N = G.style) {
                        if (U = N.fontSize)L = U, -1 !== L.indexOf("px") && (L = L.replace("px", ""), parseFloat(L));
                        (L = N.lineHeight) && -1 !== L.indexOf("px") && (L = L.replace("px", ""), parseFloat(L));
                        f = N.color
                    }
                    (L = G.borderWidth) && -1 !== L.indexOf("px") && L.replace("px", "");
                    Y = G.align;
                    S = G.x;
                    T = G.y;
                    A = G.text;
                    H = G.originalText;
                    r = G.backgroundColor;
                    v = G.backgroundOpacity;
                    r && (W = G.labelBgClr = V({color: r, alpha: 100 * v}));
                    if (r = G.borderColor)ba = G.labelBorderClr = V({color: r, alpha: "100"});
                    r = G.textAlign;
                    r =
                        "left" === r ? "start" : "right" === r ? "end" : "middle";
                    v = G.verticalAlign;
                    Q = G.borderType;
                    aa = 3 < z.zIndex ? w : u
                }
                X = this.getAxisPosition(t(E, M));
                Z = this.getAxisPosition(t(I, M));
                ca = c ? h.x : Z;
                ta = c ? X : h.y;
                da = c ? h.w : (this.axisData.reversed ? Z - X : X - Z) || F || 1;
                Z = c ? Z - X || 1 : h.h;
                X = ca + da;
                da = Ea(da);
                0 > Z && (Z = Ea(Z), ta -= Z);
                c || (ra = q ? "hidden" : ca + m > n || X + m < l ? "hidden" : ra);
                G && (ua = c ? "right" === Y ? h.toX + S : h.x + S : ca + da / 2, ea = c ? ta + Z / 2 : h.toY + T);
                if (!ka && z && "visible" === ra)z = {
                    x: ca,
                    y: ta,
                    width: da,
                    height: Z,
                    fill: V(K),
                    "stroke-width": 0
                }, ka ? ka.attr(z) : (ka = e[fa] =
                    b.rect(z, ia), C.bands = C.bands || [], C.bands[fa] = ka), a && D && ka.tooltip(D); else if (ka && (!z || "hidden" === ra)) {
                    C.labels && (g[fa] = C.labels[fa] = null);
                    ka.label && ka.label.remove();
                    e[fa] = C.bands[fa] = null;
                    ka.remove();
                    continue
                }
                ka && G && G.text && (z = {
                    "class": "fusioncharts-label",
                    text: A,
                    title: H || "",
                    fill: f,
                    "text-bound": [W, ba, L, .2 * U, "solid" === Q ? !1 : !0],
                    x: ua,
                    y: ea,
                    "text-anchor": r,
                    "vertical-align": v,
                    "line-height": N.lineHeight
                }, oa ? oa.attr(z) : (oa = g[fa] = ka.label = b.text(z, aa).attr("class", "fusioncharts-label"), N && oa.css(N), C.labels =
                    C.labels || [], C.labels[fa] = oa))
            }
        }, drawAxisName: function () {
            var a = this.axisData, b = a.title || {}, c = b && b.style, d = b && b.className, e = b.align, g = b.centerYAxisName || !1, h = this.renderer.paper, m = this.isVertical, l = this.relatedObj.canvasObj, n = t(a.offset, 0) + t(b.margin, 0), q = b.text || "", p = this.name || void 0, a = a.opposite, s = this.layerBelowDataset, s = s.nameGroup = s.nameGroup || h.group("axis-name", s), u = t(b.rotation, a ? 90 : 270), w = m ? a ? l.toX + n : l.x - n : (l.x + l.toX) / 2, C = {
                fontFamily: c.fontFamily, fontSize: c.fontSize, lineHeight: c.lineHeight,
                fontWeight: c.fontWeight, fontStyle: c.fontStyle
            }, z, g = m ? "low" === e ? l.toY : g ? (l.y + l.toY) / 2 : this.renderer.chartHeight / 2 : l.toY + n;
            q ? (!isNaN(u) && u && m && (z = c.fontSize, z = -1 != z.indexOf("px") ? z.replace("px", "") : z, a ? (w += parseFloat(z), z = 270 === u ? "bottom" : "top") : (w -= parseFloat(z), z = 270 === u ? "top" : "bottom")), this.renderer.addCSSDefinition("." + d, C), d = {
                "class": d,
                x: 0,
                y: 0,
                text: q,
                fill: c.color,
                "text-anchor": "low" === e ? 90 == u ? "end" : "start" : "middle",
                "vertical-align": m ? u ? z : "middle" : a ? Ua : "top",
                transform: m ? "t" + w + "," + g + "r" + u : "t" + w +
                "," + g,
                "font-size": c.fontSize
            }, b.originalText && (d.title = b.originalText), p ? p.attr(d) : p = this.name = h.text(d, s), p.attr({
                "line-height": c.lineHeight,
                "text-bound": [c.backgroundColor, c.borderColor, c.borderThickness, c.borderPadding, c.borderRadius, c.borderDash]
            })) : p && p.remove();
            this.elements.name = p
        }, drawLine: function () {
            var a = this.axisData, b = this.renderer.paper, c = this.min, d = this.max, e = this.isVertical, g = a.opposite, h = this.layerBelowDataset, h = this.lineGroup = this.lineGroup || b.group("axis-lines", h), m = a.lineColor,
                l = a.lineThickness, n = a.lineEndExtension || 0, q = a.lineStartExtension || 0, a = this.relatedObj.canvasObj;
            e ? (c = this.getAxisPosition(c) - q, n = this.getAxisPosition(d) + n, d = e = g ? a.toX + l / 2 : a.x - l / 2) : (d = a.x - q, e = a.toX + n, c = n = g ? a.y - l / 2 : a.toY + l / 2);
            b = b.path({path: ["M", d, c, "L", e, n], stroke: m, "stroke-width": l}, h);
            this.elements.axisLine = b
        }, realtimeUpdateX: function (a) {
            if (0 < a) {
                for (var b = this.axisData.plotBands, c = this.min + a, d, e = b.length; e--;)(d = b[e]) && !d.isNumVDIV && (d.value < c || d.from < c || d.to < c ? b.splice(e, 1) : (void 0 !== d.value && (d.value -=
                    a), void 0 !== d.from && (d.from -= a), void 0 !== d.to && (d.to -= a)));
                this.drawPlotLine();
                this.drawPlotBands()
            }
        }, realtimeUpdateY: function (a, b) {
            var c = this.axisData, d = this.min = c.min = a, c = this.span = (this.max = c.max = b) - d, c = this.pixelRatio = this.isVertical ? this.relatedObj.canvasObj.h / c : this.relatedObj.canvasObj.w / c;
            this.pixelValueRatio = this.isReverse ? -c : c;
            this.drawPlotLine();
            this.drawPlotBands()
        }
    };
    d.prototype.constructor = d;
    b("renderer.cartesian", {
        drawCanvas: function () {
            var a = this.options.chart || {}, b = a.plotBackgroundColor,
                c = this.paper, d = this.elements, e = d.canvas, g = d.canvas3DBase, h = d.canvas3dbaseline, g = d.canvasBorder, m = d.canvasBg, l = this.canvasTop, n = this.canvasLeft, q = this.canvasWidth, p = this.canvasHeight, s = t(a.plotBorderRadius, 0), m = a.plotBorderWidth, u = .5 * m, w = a.plotBorderColor, C = a.isBar, z = a.is3D, D = a.use3DLighting, I = a.showCanvasBg, M = a.canvasBgDepth, G = a.showCanvasBase, K = a.canvasBaseColor3D, Y = a.canvasBaseDepth, S = a.plotShadow, U = F && 0 === m && S && S.enabled, T = a.xDepth || 0, a = a.yDepth || 0, X = this.layers, Z = X.background, ca = X.dataset;
            X.tracker =
                X.tracker || c.group("hot").insertAfter(ca);
            X.datalabels = X.datalabels || c.group("datalabels").insertAfter(ca);
            X = X.canvas = X.canvas || c.group("canvas").insertAfter(Z);
            g || (d.canvasBorder = c.rect({
                x: n - u,
                y: l - u,
                width: q + m,
                height: p + m,
                r: s,
                "stroke-width": m,
                stroke: w,
                "stroke-linejoin": 2 < m ? "round" : "miter"
            }, X).shadow(S));
            d["clip-canvas"] = [Na(0, n - T), Na(0, l - a), Na(1, q + 2 * T), Na(1, p + 2 * a)];
            d["clip-canvas-init"] = [Na(0, n - T), Na(0, l - a), 1, Na(1, p + 2 * a)];
            z && (I && (m = C ? d.canvasBg = c.path(["M", n, ",", l, "L", n + 1.2 * M, ",", l - M, ",", n + q - M, ",",
                l - M, ",", n + q, ",", l, "Z"], X) : d.canvasBg = c.path(["M", n + q, ",", l, "L", n + q + M, ",", l + 1.2 * M, ",", n + q + M, ",", l + p - M, ",", n + q, ",", l + p, "Z"], X), m.attr({
                "stroke-width": 0,
                stroke: "none",
                fill: V(b)
            })), G && (g = C ? d.canvas3DBase = c.cubepath(n - T - Y - 1, l + a + 1, Y, p, T + 1, a + 1, X) : d.canvas3DBase = c.cubepath(n - T - 1, l + p + a + 1, q, Y, T + 1, a + 1, X), g.attr({
                stroke: "none",
                "stroke-width": 0,
                fill: [K.replace(E, L), !D]
            }), h || (h = d.canvas3dbaseline = c.path(void 0, X)), h.attr({
                path: C ? ["M", n, l, "V", p + l] : ["M", n, l + p, "H", q + n],
                stroke: N.tintshade(K.replace(E, L), .05).rgba
            })));
            !e && b && (d.canvas = c.rect({
                x: n,
                y: l,
                width: q,
                height: p,
                r: s,
                "stroke-width": 0,
                stroke: "none",
                fill: V(b)
            }, X).shadow(U))
        }, drawAxes: function () {
            var a = this.logic, b = this.options, c = this.paper, e = this.layers, g = e.dataset, h = e.layerBelowDataset = e.layerBelowDataset || c.group("axisbottom").trackTooltip(!0), m = e.layerAboveDataset = e.layerAboveDataset || c.group("axistop").trackTooltip(!0), c = this.xAxis = [], e = this.yAxis = [];
            h.insertBefore(g);
            m.insertAfter(g);
            if (b.xAxis && b.xAxis.length)for (g = 0, h = b.xAxis.length; g < h; g += 1)c[g] = this.xAxis[g] =
                new d(b.xAxis[g], this, a.isBar); else c[0] = this.xAxis[0] = new d(b.xAxis, this, a.isBar);
            if (b.yAxis)for (g = 0, h = b.yAxis.length; g < h; g += 1)e[g] = this.yAxis[g] = new d(b.yAxis[g], this, !a.isBar, !a.isBar);
            g = 0;
            for (h = e.length; g < h; g += 1)e[g].axisData && (e[g].axisData.title && (e[g].axisData.title.className = "fusioncharts-yaxis-" + g + "-title"), e[g].axisData.labels && (e[g].axisData.labels.className = "fusioncharts-yaxis-" + g + "-gridlabels")), e[g].draw();
            g = 0;
            for (h = c.length; g < h; g += 1)c[g].axisData && (c[g].axisData.title && (c[g].axisData.title.className =
                "fusioncharts-xaxis-" + g + "-title"), c[g].axisData.labels && (c[g].axisData.labels.className = "fusioncharts-xaxis-" + g + "-gridlabels")), c[g].draw()
        }, drawScroller: function () {
            var a = this, b = a.options, c = a.paper, d = a.layers, e = a.xAxis["0"] || {}, g = e.axisData || {}, h = g.scroll || {}, m = a.canvasTop, l = a.canvasLeft, n = a.canvasWidth, q = a.canvasHeight, p = a.canvasBorderWidth, s = p || (g.showLine ? g.lineThickness : 0), u = p || g.lineStartExtension, g = p || g.lineEndExtension, p = b.chart.useRoundEdges, z, D, E, I, M, F, K, G, L, Y, V, S, T, U, X, Z = d.dataset, r = d.datalabels,
                v = d.tracker;
            I = d.layerAboveDataset;
            var A, H;
            h.enabled && (A = d.scroll = d.scroll || c.group("scroll").insertAfter(I), I = h.scrollRatio, b = t(b[ia].xAxisScrollPos, h.startPercent), M = h.viewPortMax, F = h.viewPortMin, D = h.vxLength, K = Za(D), G = h.showButtons, L = h.height, Y = h.padding, V = h.color, S = h.flatScrollBars, D = h.windowedCanvasWidth = e.getAxisPosition(D), z = h.fullCanvasWidth = e.getAxisPosition(M - F) - D, E = ra(b * z), T = a.fusionCharts.jsVars._reflowData, U = {hcJSON: {_FCconf: {xAxisScrollPos: 0}}}, X = U.hcJSON._FCconf, d.scroller = c.scroller(l -
                u, m + q + s + Y - !!s, n + u + g, L, !0, {
                showButtons: G,
                displayStyleFlat: S,
                scrollRatio: I,
                scrollPosition: b
            }, A).data("fullCanvasWidth", z).data("windowedCanvasWidth", D).attr({
                "scroll-display-style": S,
                fill: V,
                r: p && 2 || 0
            }).scroll(function (b) {
                var c;
                E = -ra(b * z);
                Z && Z.transform(["T", E, 0]);
                r && r.transform(["T", E, 0]);
                v && v.transform(["T", E, 0]);
                e.setOffset && e.setOffset(E);
                c = {position: b, direction: b - h.lastPos || 0, vxLength: K};
                X.xAxisScrollPos = h.lastPos = b;
                C(T, U, !0);
                if (0 !== c.direction)for (H = 0; H < a.datasets.length; H++)a[a.datasets[H].drawPlot +
                "Scroll"] && a[a.datasets[H].drawPlot + "Scroll"].call(a, a.plots[H], a.datasets[H], c)
            }), function () {
                var b;
                N.eve.on("raphael.scroll.start." + d.scroller.id, function (c) {
                    b = c;
                    w.raiseEvent("scrollstart", {scrollPosition: c}, a.logic.chartInstance)
                });
                N.eve.on("raphael.scroll.end." + d.scroller.id, function (c) {
                    w.raiseEvent("scrollend", {prevScrollPosition: b, scrollPosition: c}, a.logic.chartInstance)
                })
            }());
            return h.enabled
        }, finalizeScrollPlots: function () {
            var a = this, b = a.container, d = a.elements, e = a.layers, g = e.scroller, m = e.dataset,
                l = e.datalabels, e = e.tracker, n, p = {}, s, C = a.xAxis["0"] || {}, z = (C.axisData || {}).scroll || {}, D = t(a.options[ia].xAxisScrollPos, z.startPercent), E = z.fullCanvasWidth;
            z.enabled && (m.attr({"clip-rect": d["clip-canvas"]}), l.attr({"clip-rect": d["clip-canvas"]}), e.attr({"clip-rect": d["clip-canvas"]}), d = function (b) {
                var d = a.elements.canvas, e = n.left, m = n.top, l = b.state, q = Z && c.getTouchEvent(b) || h;
                b = b.originalEvent;
                e = (b.clientX || b.pageX || q.pageX) - e;
                m = (b.clientY || b.pageY || q.pageY) - m;
                switch (l) {
                    case "start":
                        s = d.isPointInside(e,
                            m);
                        p.ox = s && e || null;
                        if (!s)return !1;
                        p.prevScrollPosition = g.attrs["scroll-position"];
                        w.raiseEvent("scrollstart", {scrollPosition: p.prevScrollPosition}, a.logic.chartInstance);
                        break;
                    case "end":
                        w.raiseEvent("scrollend", {
                            prevScrollPosition: p.prevScrollPosition,
                            scrollPosition: p.scrollPosition
                        }, a.logic.chartInstance);
                        s = !1;
                        p = {};
                        break;
                    default:
                        if (!s)break;
                        d = e - p.ox;
                        p.ox = e;
                        p.scrollPosition = g.attrs["scroll-position"] - d / E;
                        g.attr({"scroll-position": p.scrollPosition})
                }
            }, Z && (n = c.getPosition(b), b && (u(b, "pointerdrag",
                d), q(b, "pointerdrag", d))), 0 < D && (b = -ra(D * E), m && m.transform(["T", b, 0]), l && l.transform(["T", b, 0]), e && e.transform(["T", b, 0]), C.setOffset && C.setOffset(b)))
        }, drawPlotColumn: function (a, b, c) {
            var d = this, e = a.data, g = e.length, h = a.items, l = a.graphics || (a.graphics = []), n = d.paper, q = d.smartLabel, p = d.logic, u = d.layers, w = d.options, C = d.elements, z = w.chart, D = !1 !== (w.tooltip || {}).enabled, E, I = d.definition.chart, F = w.plotOptions.series, K = F.dataLabels.style, G = d.xAxis[b.xAxis || 0], L = d.yAxis[b.yAxis || 0], Y = d.chartWidth, S = d.chartHeight,
                U = L.axisData.reversed, X = p.isLog, Z = p.is3D, da = p.isStacked, ka = p.isWaterfall, fa = p.isCandleStick, r = ea(G.axisData.scroll, {}), v = c || {}, A = r.enabled, H = t(v.position, w[ia].xAxisScrollPos, r.startPercent), f = v.vxLength || Za(r.vxLength), Q = v.scrollStart || Na(0, ra((g - f) * H) - 1) || 0, W = v.scrollEnd || za(g, Q + f + 2) || g, ba = z.canvasBorderOpacity = N.color(z.plotBorderColor).opacity, aa = d.canvasBorderWidth, pb = z.isCanvasBorder = 0 !== ba && 0 < aa, ma, ta = c !== Ja ? 0 : isNaN(+F.animation) && F.animation.duration || 1E3 * F.animation, qa = b.numColumns || 1, ua =
                    b.columnPosition || 0, ac = z.use3DLighting, nc = !1 === b.visible ? "hidden" : "visible", Da = z.overlapColumns, xa = G.getAxisPosition(0), oa = G.getAxisPosition(1) - xa, Aa = I && I.plotspacepercent, db = t(I && I.plotpaddingpercent), Ga = F.groupPadding, Ha = F.maxColWidth, La = (1 - .01 * Aa) * oa || za(oa * (1 - 2 * Ga), Ha * qa), Ca = La / 2, vc = La / qa, Nc = za(vc - 1, 1 < qa ? Da || db !== Ja ? 0 < db ? vc * db / 100 : 0 : 4 : 0), Fb = ua * vc - Ca + Nc / 2, $a = L.max, Pa = L.min, Ma = 0 < $a && 0 <= Pa, lb = 0 >= $a && 0 > Pa, cb = 0 < $a && 0 > Pa, qb = lb || U && Ma ? $a : X || Ma ? Pa : 0, kc = L.yBasePos = L.getAxisPosition(qb), ib, jb = t(z.useRoundEdges,
                0), Ua = u.dataset = u.dataset || n.group("dataset-orphan"), Oa = u.datalabels = u.datalabels || n.group("datalabels").insertAfter(Ua), bd = u.tracker, eb = d.canvasTop, nb = d.canvasLeft, xb = d.canvasWidth, ub = d.canvasBottom, Ec = d.canvasRight, wc, Hb, Cc, Qb, dc, ec, Lc, Cb, Rb, ob, fb, bc, vb, Ac, Db, jc, sb, Wa, Ub, cc, Ra, Ib, mb, ya, Xa, Mc, gb, Va, Eb, rc, sc, xc, Fc, hb, Rc, Vc, Ka, Xb, yc, Wb = function (a) {
                    Ba.call(this, d, a)
                }, Vb = function (a, b) {
                    return function (c) {
                        a.attr(b);
                        Ba.call(this, d, c, "DataPlotRollOver")
                    }
                }, Sb = function (a, b) {
                    return function (c) {
                        a.attr(b);
                        Ba.call(this,
                            d, c, "DataPlotRollOut")
                    }
                };
            d.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", {
                fontFamily: K.fontFamily,
                fontSize: K.fontSize,
                lineHeight: K.lineHeight,
                fontWeight: K.fontWeight,
                fontStyle: K.fontStyle,
                color: K.color
            });
            Oa.attr("class", "fusioncharts-datalabels");
            ta && (!c && Oa.attr({transform: "...t" + Y + "," + S}), d.animationCompleteQueue.push({
                fn: function () {
                    Oa.attr({transform: "...t" + -Y + "," + -S})
                }, scope: d
            }));
            vc -= Nc;
            A && Q > W - f - 2 && (Q = Na(0, W - f - 2));
            da && (Vc = Ua.shadows || (Ua.shadows = n.group("shadows", Ua).toBack()));
            Eb = Ua.column || (Ua.column = n.group("columns", Ua));
            fa || Z || A || Eb.attrs["clip-rect"] || Eb.attr({"clip-rect": C["clip-canvas"]});
            ka && Eb.toBack();
            if (Z)for (dc = z.xDepth || 0, ec = z.yDepth || 0, rc = Eb.negative = Eb.negative || n.group("negative-values", Eb), Fc = Eb.column = Eb.column || n.group("positive-values", Eb), xc = Eb.zeroPlane, !xc && 0 > Pa && 0 <= $a && (xc = Eb.zeroPlane = n.group("zero-plane", Eb).insertBefore(Fc), Hb = z.zeroPlaneColor, Cc = z.zeroPlaneBorderColor, Qb = z.zeroPlaneShowBorder, C.zeroplane = n.cubepath(nb - dc, kc + ec, xb, 1, dc, ec, xc).attr({
                fill: [Hb,
                    !ac], stroke: Cc || "none", "stroke-width": Qb ? 1 : 0
            })), (sc = rc.data("categoryplots")) || (rc.data("categoryplots", Array(g)), sc = rc.data("categoryplots")), (hb = Fc.data("categoryplots")) || (Fc.data("categoryplots", Array(g)), hb = Fc.data("categoryplots")), ob = 0; ob < g; ob += 1)sc[ob] = sc[ob] || n.group(rc), hb[ob] = hb[ob] || n.group(Fc); else Rc = Eb;
            q.setStyle({
                fontFamily: K.fontFamily,
                fontSize: K.fontSize,
                lineHeight: K.lineHeight,
                fontWeight: K.fontWeight,
                fontStyle: K.fontStyle
            });
            for (ob = Q; ob < W; ob += 1) {
                fb = e[ob];
                Db = fb.y;
                E = fb.toolText;
                wc =
                    a.index + "_" + ob;
                gb = Va = null;
                if (null === Db) {
                    if (Rb = h[ob])gb = Rb.graphic, Z || gb.attr({height: 0})
                } else {
                    Lc = !1;
                    Ac = t(fb.x, ob);
                    bc = fb.link;
                    vb = m(fb.borderWidth) || 0;
                    Mc = fb._FCW * oa;
                    sb = G.getAxisPosition(fb._FCX) || G.getAxisPosition(Ac) + Fb;
                    jc = fb.previousY;
                    Ub = L.getAxisPosition(jc || qb);
                    Wa = L.getAxisPosition(Db + (jc || 0));
                    Ra = Ea(Wa - Ub);
                    Ib = Mc || vc;
                    yc = {
                        index: ob,
                        link: bc,
                        value: fb.y,
                        displayValue: fb.displayValue,
                        categoryLabel: fb.categoryLabel,
                        toolText: fb.toolText,
                        id: a.userID,
                        datasetIndex: a.index,
                        datasetName: a.name,
                        visible: a.visible
                    };
                    if (Z) {
                        0 > Db && (Wa = Ub, Lc = !0);
                        Rc = 0 > Db ? sc : hb;
                        (Rb = h[ob]) || (Rb = h[ob] = {
                            index: ob,
                            value: Db,
                            graphic: n.cubepath(Rc[ob]),
                            dataLabel: null,
                            tracker: null,
                            hot: null
                        });
                        gb = Rb.graphic;
                        ya = Xa = {};
                        fb.hoverEffects && (ya = {
                            fill: [V(fb.color), !ac],
                            stroke: vb && V(fb.borderColor) || "NONE",
                            "stroke-width": vb
                        }, mb = fb.rolloverProperties, Xa = {
                            fill: [V(mb.color), !ac],
                            stroke: mb.borderWidth && V(mb.borderColor) || "NONE",
                            "stroke-width": mb.borderWidth
                        });
                        gb.attr({
                            cubepath: [sb - dc, ta ? kc + ec : Wa + ec, Ib, ta ? 0 : Ra, dc, ec],
                            fill: [V(fb.color), !ac],
                            stroke: vb && V(fb.borderColor) ||
                            "NONE",
                            "stroke-width": vb,
                            visibility: nc
                        }).shadow(F.shadow && fb.shadow, Vc).data("BBox", {height: Ra, width: Ib, x: sb, y: Wa});
                        ta && gb.animate({cubepath: [sb - dc, Wa + ec, Ib, Ra, dc, ec]}, ta, "normal", d.getAnimationCompleteFn());
                        if (bc || D)!da && Ra < ca && (Wa -= (ca - Ra) / 2, Ra = ca), Rb.tracker || (Rb.tracker = n.cubepath(bd)), Va = Rb.tracker, Va.attr({
                            cubepath: [sb - dc, Wa + ec, Ib, Ra, dc, ec],
                            cursor: bc ? "pointer" : "",
                            stroke: vb && s || "NONE",
                            "stroke-width": vb,
                            fill: s,
                            ishot: !0,
                            visibility: nc
                        });
                        (Va || gb).data("eventArgs", yc).data("groupId", wc).click(Wb).hover(Vb(gb,
                            Xa), Sb(gb, ya)).tooltip(E);
                        (Va || gb)._.cubetop.data("eventArgs", yc).data("groupId", wc).click(Wb).hover(Vb(gb, Xa), Sb(gb, ya)).tooltip(E);
                        (Va || gb)._.cubeside.data("eventArgs", yc).data("groupId", wc).click(Wb).hover(Vb(gb, Xa), Sb(gb, ya)).tooltip(E);
                        da && Lc && (gb.toBack(), Va && Va.toBack())
                    } else {
                        Cb = !1;
                        if (!X && !U && 0 > Db || !X && U && 0 < Db)Wa = Ub, Cb = !0;
                        U && !cb && 0 < Db && (Wa = Ub - Ra, Cb = !1);
                        ka && 0 > Db && T(jc) && (Wa -= Ra, Cb = !0);
                        fa || A || (M(Wa) <= eb && (Ra -= eb - Wa - +pb, Wa = eb - +pb), ra(Wa + Ra) >= ub && (Ra -= ra(Wa + Ra) - ub + +!!vb + +pb, z.xAxisLineVisible && !pb && (Ra += 1)), 1 >= vb && (ra(sb) <= nb && (Ib += sb, sb = nb - vb / 2 + +!!vb - +pb, Ib -= sb), ra(sb + Ib) >= Ec && (Ib = Ec - sb + vb / 2 - +!!vb + +pb)));
                        Ka = N.crispBound(sb, Wa, Ib, Ra, vb);
                        sb = Ka.x;
                        Wa = Ka.y;
                        Ib = Ka.width;
                        Ra = Ka.height;
                        if (!fa && pb && (!T(jc) || ka && jc === Db && Db === fb._FCY))if (lb && !U)ma = Wa - (eb - vb / 2), Ra += ma, kc = Wa -= ma; else if (X || Ma || U && lb)Ra = ub - Wa + vb / 2, kc = Wa + Ra;
                        ka && jc && 0 < vb && 0 !== F.connectorOpacity && 1 === F.connectorWidth && F.connectorDashStyle && (Ra -= 1, 0 > Db && (Wa += 1));
                        1 >= Ra && (Ra = 1, Wa += 0 > Db ? 1 : 0 === Db ? 0 : -Ra);
                        b._columnWidth = Ib;
                        if (!(Rb = h[ob])) {
                            Rb =
                                h[ob] = {
                                    index: ob,
                                    value: Db,
                                    width: Ib,
                                    graphic: null,
                                    valueBelowPlot: Cb,
                                    dataLabel: null,
                                    tracker: null
                                };
                            ib = 0;
                            ta || (kc = Wa, ib = Ra || 1);
                            ya = Xa = {};
                            fb.hoverEffects && (ya = {
                                fill: V(fb.color),
                                stroke: V(fb.borderColor),
                                "stroke-width": vb,
                                "stroke-dasharray": fb.dashStyle
                            }, mb = fb.rolloverProperties, Xa = {
                                fill: V(mb.color),
                                stroke: V(mb.borderColor),
                                "stroke-width": mb.borderWidth,
                                "stroke-dasharray": mb.dashStyle
                            });
                            Xb = {
                                x: sb,
                                y: kc,
                                width: Ib,
                                height: ib,
                                r: jb,
                                fill: V(fb.color),
                                stroke: V(fb.borderColor),
                                "stroke-width": vb,
                                "stroke-dasharray": fb.dashStyle,
                                "stroke-linejoin": "miter",
                                visibility: nc
                            };
                            gb ? gb.attr(Xb) : gb = Rb.graphic = n.rect(Xb, Rc);
                            gb.shadow(F.shadow && fb.shadow, Vc).data("BBox", Ka);
                            ta && gb.animate({y: Wa, height: Ra || 1}, ta, "normal", d.getAnimationCompleteFn());
                            if (bc || D)!da && Ra < ca && (Wa -= (ca - Ra) / 2, Ra = ca), Xb = {
                                x: sb,
                                y: Wa,
                                width: Ib,
                                height: Ra,
                                r: jb,
                                cursor: bc ? "pointer" : "",
                                stroke: s,
                                "stroke-width": vb,
                                fill: s,
                                ishot: !0,
                                visibility: nc
                            }, (Va = Rb.tracker) ? Va.attr(Xb) : Va = Rb.tracker = n.rect(Xb, bd);
                            Va = Rb.tracker;
                            (Va || gb).data("eventArgs", yc).data("groupId", wc).click(Wb).hover(Vb(gb,
                                Xa), Sb(gb, ya)).tooltip(E)
                        }
                    }
                    cc = d.drawPlotColumnLabel(a, b, ob, sb, Wa)
                }
                cc && l.push(cc);
                gb && l.push(gb);
                Va && l.push(Va);
                d.drawTracker && d.drawTracker.call(d, a, b, ob)
            }
            a.visible = !1 !== b.visible;
            return a
        }, drawPlotColumnScroll: function (a, b, c) {
            var d = a.data.length, e = a.items, g;
            g = c.vxLength;
            var h = Na(0, ra((d - g) * c.position) - 1) || 0, d = za(d, h + g + 2) || d;
            h > d - g - 2 && (h = Na(0, d - g - 2));
            c.scrollEnd = d;
            for (g = h; g < d; g++)if (!e[g]) {
                c.scrollStart = g;
                this.drawPlotColumn(a, b, c);
                break
            }
        }, drawPlotColumnLabel: function (a, b, c, d, e, g) {
            var h = this.options,
                m = this.logic, l = h.chart;
            d = this.paper;
            var n = this.smartLabel, q = this.layers, h = h.plotOptions.series.dataLabels.style, p = 1 === l.rotateValues ? 270 : 0, s = this.canvasHeight, t = this.canvasTop, u = a.data[c];
            a = a.items[c];
            var w = l.valuePadding + 2, C = a.graphic;
            c = a.dataLabel;
            var z = ea(a.valueBelowPlot, 0 > u.y), D = m.isStacked, m = m.is3D, E = l.xDepth || 0, I = l.yDepth || 0, M = u.displayValue;
            b = !1 === b.visible ? "hidden" : "visible";
            var l = l.placeValuesInside, F;
            g = g || q.datalabels;
            T(M) && M !== K && null !== u.y ? (a._state && a._state.labelWidth || (n = n.getOriSize(M),
                a._state = p ? {labelWidth: n.height, labelHeight: n.width} : {
                    labelWidth: n.width,
                    labelHeight: n.height
                }), C = C.data("BBox"), n = C.height, q = F = a._state.labelHeight + w, w = .5 * F + w, C = C.x + .5 * C.width, s = z ? t + s - (e + n) : e - t, D ? (e = e + .5 * n + (I || 0), C -= E) : l ? n >= q ? (e += z ? n - w : w, u._valueBelowPoint = 1, m && (C -= E, e += I)) : s >= q ? (e += z ? n + w : -w, m && z && (C -= E, e += I)) : (e += z ? n - w : w, u._valueBelowPoint = 1, m && (C -= E, e += I)) : s >= q ? (e += z ? n + w : -w, m && (z ? (C -= E, e += I) : C -= E / 2)) : (e += z ? n - w : w, u._valueBelowPoint = 1, m && (C -= E, e += I)), c ? c.attr({
                x: C,
                y: e,
                visibility: b
            }) : c = a.dataLabel =
                d.text({
                    text: M,
                    "class": "fusioncharts-label",
                    x: C,
                    y: e,
                    fill: h.color,
                    "font-size": h.fontSize,
                    visibility: b
                }, g).attr({
                    "line-height": h.lineHeight,
                    "text-bound": [h.backgroundColor, h.borderColor, h.borderThickness, h.borderPadding, h.borderRadius, h.borderDash]
                }), p && c.attr("transform", "T0,0,R" + p)) : c && c.attr({text: K});
            return c
        }, drawPlotFloatedcolumn: function (a, b) {
            this.drawPlotColumn.call(this, a, b)
        }, drawPlotColumn3d: function (a, b) {
            this.drawPlotColumn.call(this, a, b)
        }, drawPlotBar: function (a, b) {
            var c = this, d = a.data, e =
                d.length, g = a.items, h = a.graphics = [], l = c.paper, n = c.logic, q = c.layers, p = c.options, u = c.elements, C = p.chart, w = !1 !== (p.tooltip || {}).enabled, z, D = c.definition.chart, p = p.plotOptions.series, E = p.dataLabels.style, I = {
                fontFamily: E.fontFamily,
                fontSize: E.fontSize,
                lineHeight: E.lineHeight,
                fontWeight: E.fontWeight,
                fontStyle: E.fontStyle
            }, E = c.xAxis[b.xAxis || 0], F = c.yAxis[b.yAxis || 0], K = n.is3D, n = n.isStacked, G = C.canvasBorderOpacity = N.color(C.plotBorderColor).opacity, L = c.canvasBorderWidth, G = C.isCanvasBorder = 0 !== G && 0 < L, L = isNaN(+p.animation) &&
                p.animation.duration || 1E3 * p.animation, Y = b.numColumns || 1, S = b.columnPosition || 0, U = C.use3DLighting, T = !1 === b.visible ? "hidden" : "visible", X = C.overlapColumns, Z = E.getAxisPosition(0), Z = E.getAxisPosition(1) - Z, da = D && D.plotspacepercent, D = t(D && D.plotpaddingpercent), ka = p.groupPadding, r = p.maxColWidth, da = (1 - .01 * da) * Z || za(Z * (1 - 2 * ka), r * Y), Z = da / 2, da = da / Y, X = za(da - 1, 1 < Y ? X || D !== Ja ? 0 < D ? da * D / 100 : 0 : 4 : 0), Y = da - X, S = S * da - Z + X / 2, v = F.max, A = F.min, X = F.getAxisPosition(0 > v && 0 > A ? v : 0 < v && 0 < A ? A : 0), D = t(C.useRoundEdges, 0), H = c.canvasTop, Z =
                c.canvasLeft, f = c.canvasHeight, da = c.canvasRight, Q = c.chartWidth, W = c.chartHeight, ba, fa, ea, ia, ta, aa, ua, ma, qa, Da, ka = F.axisData.effectiveZeroPlaneThickness;
            ua = q.dataset = q.dataset || l.group("dataset-orphan");
            var xa = q.datalabels = q.datalabels || l.group("datalabels").insertAfter(ua), q = q.tracker, oa, Aa, db, Ga, Na, Ha, r = function (a) {
                    Ba.call(this, c, a)
                }, La = function (a, b) {
                    return function (d) {
                        a.attr(b);
                        Ba.call(this, c, d, "DataPlotRollOver")
                    }
                }, Ca = function (a, b) {
                    return function (d) {
                        a.attr(b);
                        Ba.call(this, c, d, "DataPlotRollOut")
                    }
                },
                Ua;
            c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", I);
            xa.attr("class", "fusioncharts-datalabels");
            L && (c.animationCompleteQueue.push({
                fn: function () {
                    xa.attr({transform: "...t" + -Q + "," + -W})
                }, scope: c
            }), xa.attr({transform: "...t" + Q + "," + W}));
            n && (Na = ua.shadows || (ua.shadows = l.group("shadows", ua).toBack()));
            ma = ua.column = ua.column || l.group("bars", ua);
            if (K)for (ba = C.xDepth || 0, fa = C.yDepth || 0, I = ma.negative = ma.negative || l.group("negative-values", ma), ua = ma.column = ma.column || l.group("positive-values",
                    ma), db = ma.zeroPlane, !db && 0 > A && 0 <= v && (db = ma.zeroPlane = l.group("zero-plane", ma).insertBefore(ua), Da = C.zeroPlaneColor, v = C.zeroPlaneBorderColor, A = C.zeroPlaneShowBorder, u.zeroplane = l.cubepath(X - ba, H + fa, 1, f, ba, fa, db).attr({
                fill: [Da, !U],
                stroke: v || "none",
                "stroke-width": A ? 1 : 0
            })), (db = I.data("categoryplots")) || (I.data("categoryplots", Array(e)), db = I.data("categoryplots")), (Da = ua.data("categoryplots")) || (ua.data("categoryplots", Array(e)), Da = ua.data("categoryplots")), u = 0; u < e; u += 1)db[u] = db[u] || l.group(I), Da[u] =
                Da[u] || l.group(ua); else ma.attrs["clip-rect"] || ma.attr({"clip-rect": u["clip-canvas"]}), Ga = ma;
            u = 0;
            for (I = e - 1; u < e; u += 1, I -= 1) {
                H = d[u];
                A = H.y;
                oa = f = null;
                if (null === A) {
                    if (aa = g[u])oa = aa.graphic, K || oa.attr({width: 0})
                } else {
                    ma = t(H.x, u);
                    ua = H.link;
                    z = H.toolText;
                    v = m(H.borderWidth) || 0;
                    ma = E.getAxisPosition(ma) + S;
                    aa = (ea = H.previousY) ? F.getAxisPosition(ea) : X;
                    qa = F.getAxisPosition(A + (ea || 0));
                    ea = Ea(qa - aa);
                    0 < A && (qa = aa);
                    Aa = {
                        index: u,
                        link: ua,
                        value: H.y,
                        displayValue: H.displayValue,
                        categoryLabel: H.categoryLabel,
                        toolText: H.toolText,
                        id: a.userID,
                        datasetIndex: a.index,
                        datasetName: a.name,
                        visible: a.visible
                    };
                    if (K) {
                        Ga = 0 > A ? db : Da;
                        (aa = g[u]) || (aa = g[u] = {
                            index: u,
                            value: A,
                            graphic: l.cubepath(Ga[I]),
                            dataLabel: null,
                            tracker: null
                        });
                        oa = aa.graphic;
                        ta = ia = {};
                        H.hoverEffects && (ta = {
                            fill: [V(H.color), !U],
                            stroke: v && V(H.borderColor) || "NONE",
                            "stroke-width": v
                        }, ia = H.rolloverProperties, ia = {
                            fill: [V(ia.color), !U],
                            stroke: ia.borderWidth && V(ia.borderColor) || "NONE",
                            "stroke-width": ia.borderWidth
                        });
                        oa.attr({
                            cubepath: [L ? X - ba : qa - ba, ma + fa, L ? 0 : ea, Y, ba, fa],
                            fill: [V(H.color),
                                !U],
                            stroke: v && V(H.borderColor) || "NONE",
                            "stroke-width": v,
                            "stroke-dasharray": H.dashStyle,
                            cursor: ua ? "pointer" : "",
                            visibility: T
                        }).shadow(p.shadow && H.shadow, Na).data("BBox", {height: Y, width: ea, x: qa, y: ma});
                        L && oa.animate({cubepath: [qa - ba, ma + fa, ea, Y, ba, fa]}, L, "normal", c.getAnimationCompleteFn());
                        if (ua || w)!n && ea < ca && (qa -= (ca - ea) / 2, ea = ca), aa.tracker || (aa.tracker = l.cubepath(q)), f = aa.tracker, f.attr({
                            cubepath: [qa - ba, ma + fa, ea, Y, ba, fa],
                            cursor: ua ? "pointer" : "",
                            stroke: v && s || "NONE",
                            "stroke-width": v,
                            fill: s,
                            ishot: !0
                        });
                        (f || oa).data("eventArgs", Aa).click(r).hover(La(oa, ia), Ca(oa, ta)).tooltip(z);
                        (f || oa)._.cubetop.data("eventArgs", Aa).click(r).hover(La(oa, ia), Ca(oa, ta));
                        (f || oa)._.cubeside.data("eventArgs", Aa).click(r).hover(La(oa, ia), Ca(oa, ta));
                        if (!n || n && 0 > A)oa.toBack(), f && f.toBack()
                    } else {
                        M(qa) <= Z && (ea += qa, qa = Z + v / 2 + .2, C.xAxisLineVisible && !G && (qa -= 1), ea -= qa);
                        ra(qa + ea) >= da && (ea = da - qa - v / 2 - .2);
                        Ha = N.crispBound(qa, ma, ea, Y, v);
                        qa = Ha.x;
                        ma = Ha.y;
                        ea = Ha.width;
                        Ua = Ha.height;
                        1 >= ea && (ea = 1, qa += 0 > A ? -ea : 0 === A ? 0 : 1 < ka ? ea : 0);
                        (aa = g[u]) ||
                        (aa = g[u] = {index: u, value: A, height: Ua, graphic: null, dataLabel: null, tracker: null});
                        oa = aa.graphic;
                        ta = ia = {};
                        H.hoverEffects && (ta = {
                            fill: V(H.color),
                            stroke: V(H.borderColor),
                            "stroke-width": v,
                            "stroke-dasharray": H.dashStyle
                        }, ia = H.rolloverProperties, ia = {
                            fill: V(ia.color),
                            stroke: V(ia.borderColor),
                            "stroke-width": ia.borderWidth,
                            "stroke-dasharray": ia.dashStyle
                        });
                        A = {
                            x: L ? X : qa,
                            y: ma,
                            width: L ? 0 : ea || 1,
                            height: Ua,
                            r: D,
                            fill: V(H.color),
                            stroke: V(H.borderColor),
                            "stroke-width": v,
                            "stroke-dasharray": H.dashStyle,
                            "stroke-linejoin": "miter",
                            cursor: ua ? "pointer" : "",
                            visibility: T
                        };
                        oa ? oa.attr(A) : oa = aa.graphic = l.rect(A, Ga);
                        oa.shadow(p.shadow && H.shadow, Na).data("BBox", Ha);
                        L && oa.animate({x: qa, width: ea || 1}, L, "normal", c.getAnimationCompleteFn());
                        if (ua || w)!n && ea < ca && (qa -= (ca - ea) / 2, ea = ca), f = aa.tracker, A = {
                            x: qa,
                            y: ma,
                            width: ea,
                            height: Y,
                            r: D,
                            cursor: ua ? "pointer" : "",
                            stroke: s,
                            "stroke-width": v,
                            fill: s,
                            ishot: !0
                        }, f ? f.attr(A) : f = aa.tracker = l.rect(A, q), f.data("eventArgs", Aa);
                        (f || oa).data("eventArgs", Aa).click(r).hover(La(oa, ia), Ca(oa, ta)).tooltip(z)
                    }
                    z = c.drawPlotBarLabel(a,
                        b, u, qa, ma)
                }
                z && h.push(z);
                oa && h.push(oa);
                f && h.push(f);
                c.drawTracker && c.drawTracker.call(c, a, b, u)
            }
            a.visible = !1 !== b.visible;
            return a
        }, drawPlotBarLabel: function (a, b, c, d, e, g) {
            var h = this.options, m = this.logic, l = h.chart, n = this.paper, q = this.layers, p = h.plotOptions.series.dataLabels.style, h = this.canvasLeft, s = this.canvasWidth, t = a.data[c], u = a.items[c];
            a = l.valuePadding + 2;
            var C = u.graphic;
            c = u.dataLabel;
            var w = 0 > t.y, z = m.isStacked, m = m.is3D, D = l.xDepth || 0, E = l.yDepth || 0, I = t.displayValue;
            b = !1 === b.visible ? "hidden" : "visible";
            l = l.placeValuesInside;
            g = g || q.datalabels;
            T(I) && I !== K && null !== t.y ? (c || (c = u.dataLabel = n.text({
                "class": "fusioncharts-label",
                text: I,
                "font-size": p.fontSize,
                "text-anchor": z ? "middle" : w ? l ? "start" : "end" : l ? "end" : "start",
                title: t.originalText || "",
                fill: p.color,
                x: 0,
                y: 0,
                "line-height": p.lineHeight
            }, g).attr("text-bound", [p.backgroundColor, p.borderColor, p.borderThickness, p.borderPadding, p.borderRadius, p.borderDash])), g = c.getBBox(), n = C.data("BBox"), p = n.height, q = n.width, n = g.width, n += a, e += .5 * p, p = d + (w ? 0 : q), d = w ? d - h : h + s -
            (d + q), z ? (p = p + .5 * (w ? q : -q) - (m ? D : 0), e += m ? E : 0) : (l ? q >= n ? (p += w ? a : -a, m && (p -= D, e += E)) : (p += w ? -a : a, m && w && (p -= D)) : d >= n ? (p += w ? -a : a, m && w && (p -= D, e += D)) : (p += w ? a + n : -(a + n), m && (p -= D, e += E)), p > h + s && (p = h + s - .5 * g.width - 4), p < h && (p = h + .5 * g.width + 4)), c.attr({
                x: p,
                y: e,
                visibility: b
            })) : c && c.attr({text: K});
            return c
        }, drawPlotBar3d: function (a, b) {
            this.drawPlotBar.call(this, a, b)
        }, drawPlotLine: function (a, b) {
            var c = this, d = c.paper, e = c.elements, g = c.options, h = g.chart, l = c.logic, n = g.plotOptions.series, q = a.items, p = a.graphics = a.graphics || [],
                u, C = c.xAxis[b.xAxis || 0], w = c.yAxis[b.yAxis || 0], D = l.multisetRealtime || l.dragExtended, E = l.isWaterfall, I, F, M, K, L, Y = 0, S = !1 !== (g.tooltip || {}).enabled, U, T = isNaN(+n.animation) && n.animation.duration || 1E3 * n.animation, X, Z = n.dataLabels.style, da = {
                    fontFamily: Z.fontFamily,
                    fontSize: Z.fontSize,
                    lineHeight: Z.lineHeight,
                    fontWeight: Z.fontWeight,
                    fontStyle: Z.fontStyle
                }, ea = h.xDepth || 0, ca = h.yDepth || 0, r = h.series2D3Dshift, v = b.step, A = b.drawVerticalJoins, H = b.useForwardSteps, f = a.data, Q = !1 === b.visible ? "hidden" : "visible", W, ba = f.length,
                ia = C.getAxisPosition(0), aa = C.getAxisPosition(1) - ia, ma = aa * ba, ta = C.axisData.scroll || {}, fa = h.hasScroll || !1, ka, qa = n.connectNullData, ra = c.chartWidth, Da = c.chartHeight, Aa = function () {
                    jc.attr({"clip-rect": null});
                    Db.show();
                    Ac.show();
                    sb.show();
                    Ec.attr({transform: "...t" + -ra + "," + -Da})
                }, oa, xa, db, Ga, Ha, Ja, La, Ea = null, Ca, Fb, $a = n.connectorWidth = m(b.lineWidth), Pa = b.color, Ma, Ua, lb = n.connectorDashStyle = b.dashStyle, qb, Za, ib, jb, cb, Oa, eb, nb, ub, xb = c.layers, Hb = xb.dataset = xb.dataset || d.group("dataset-orphan"), Ec = xb.datalabels =
                    xb.datalabels || d.group("datalabels").insertAfter(Hb), wc = xb.tracker, Qb = e["clip-canvas-init"].slice(0), Cc = e["clip-canvas"].slice(0), Uc = w.axisData.reversed, dc = w.max, ec = w.min, Lc = w.getAxisPosition(0 < dc && 0 < ec ? Uc ? dc : ec : 0 > dc && 0 > ec ? Uc ? ec : dc : Uc ? dc : 0) + (r ? ca : 0), Cb = [], Rb = h.anchorTrackingRadius, ob = /drag/ig.test(c.logic.rendererId), fb, bc, vb, Ac, Db, jc, sb, Wa, Ub, cc, Ra, Ib, mb = [], ya = function (a) {
                    Ba.call(this, c, a)
                }, Xa = function (a) {
                    return function (b) {
                        c.hoverPlotAnchor(this, b, "DataPlotRollOver", a, c)
                    }
                }, Mc = function (a) {
                    return function (b) {
                        c.hoverPlotAnchor(this,
                            b, "DataPlotRollOut", a, c)
                    }
                }, gb = function (e, f, g, h, m, l, n, q) {
                    return function () {
                        var r = g.imageUrl, t = g.imageScale, u = g.imageAlpha, v = n.imageHoverAlpha, C = n.imageHoverScale, w = this.height * t * .01, A = this.width * t * .01, z = this.width * C * .01;
                        eb = {x: e - this.width * t * .005, y: f - this.height * t * .005, width: A, height: w, alpha: u};
                        nb = {
                            x: e - this.width * C * .005,
                            y: f - this.height * C * .005,
                            width: z,
                            height: this.height * C * .01,
                            alpha: v
                        };
                        v = z > A ? nb : eb;
                        ob && (v = {cx: e, cy: f, r: .5 * Na(w, A)});
                        (h.graphic = jb = d.image(r, sb).attr(eb).css({opacity: .01 * u}).data("alwaysInvisible",
                            !t).data("setRolloverProperties", n).data("setRolloverAttr", nb).data("setRolloutAttr", eb).data("anchorRadius", t).data("anchorHoverRadius", C)) && p.push(jb);
                        if (xa || S || n)cb = h.tracker = (ob ? d.circle(wc) : d.rect(wc)).attr(v).attr({
                            cursor: xa ? "pointer" : "",
                            stroke: s,
                            "stroke-width": g.lineWidth,
                            fill: s,
                            ishot: !0,
                            visibility: Q
                        }).data("eventArgs", m).data("groupId", fb).click(ya).hover(Xa(h), Mc(h)).tooltip(l);
                        c.drawTracker && c.drawTracker.call(c, a, b, q);
                        (Ra = h.dataLabel = c.drawPlotLineLabel(a, b, q, e, f)) && p.push(Ra)
                    }
                }, Va = function (d,
                                  e, f, g, h, m, l, n) {
                    return function () {
                        (Ra = g.dataLabel = c.drawPlotLineLabel(a, b, n, d, e)) && p.push(Ra)
                    }
                };
            c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", da);
            Ec.attr("class", "fusioncharts-datalabels");
            n.connectorOpacity = N.color(Pa).opacity;
            w.yBasePos = Lc;
            E && (I = (F = c.definition.chart) && F.plotspacepercent, M = n.groupPadding, K = n.maxColWidth, L = (1 - .01 * I) * aa || za(aa * (1 - 2 * M), 1 * K), Y = L / 2);
            Ec.attr({transform: "...t" + ra + "," + Da});
            T && c.animationCompleteQueue.push({fn: Aa, scope: c});
            vb = Hb.line || (Hb.line = d.group("line-connector",
                    Hb));
            Ac = a.lineShadowLayer || (a.lineShadowLayer = d.group("connector-shadow", vb));
            Db = a.anchorShadowLayer || (a.anchorShadowLayer = d.group("anchor-shadow", vb));
            jc = a.lineLayer || (a.lineLayer = d.group("connector", vb));
            sb = a.anchorLayer || (a.anchorLayer = d.group("anchors", vb));
            sb.hide();
            Ac.hide();
            Db.hide();
            for (W = 0; W < ba; W += 1) {
                oa = f[W];
                Ha = oa.y;
                Ja = oa.previousY || 0;
                U = oa.toolText;
                fb = a.index + "_" + W;
                ub = Ra = jb = cb = null;
                u = q[W] = {
                    index: W,
                    value: null,
                    graphic: null,
                    connector: null,
                    dataLabel: null,
                    shadowGroup: Db,
                    tracker: null
                };
                if (null ===
                    Ha)mb.length = 0, 0 === qa && (Ea = null); else {
                    Ga = t(oa.x, W);
                    xa = oa.link;
                    "boxandwhisker" === b.relatedSeries && b.pointStart && (Ga += b.pointStart);
                    Fb = w.getAxisPosition(Ha + Ja) + (r ? ca : 0);
                    Ca = C.getAxisPosition(Ga) - ea;
                    Ca = G(Ca, $a, $a).position;
                    Fb = G(Fb, $a, $a).position;
                    if ((qb = oa.marker) && qb.enabled)if (Za = qb.symbol.split("_"), ib = "spoke" === Za[0] ? 1 : 0, db = qb.radius, Wa = qb.shadow, bc = {
                            index: W,
                            link: xa,
                            value: oa.y,
                            displayValue: oa.displayValue,
                            categoryLabel: oa.categoryLabel,
                            toolText: oa.toolText,
                            id: a.userID,
                            datasetIndex: a.index,
                            datasetName: a.name,
                            visible: a.visible
                        }, eb = nb = {}, Oa = oa.rolloverProperties, qb.imageUrl)Ib = new z, Ib.onload = gb(Ca, Fb, qb, u, bc, U, Oa, W), Ib.onerror = Va(Ca, Fb, qb, u, bc, U, Oa, W), Ib.src = qb.imageUrl; else {
                        Oa && (eb = {
                            polypath: [Za[1] || 2, Ca, Fb, db, qb.startAngle, ib],
                            fill: V(qb.fillColor),
                            "stroke-width": qb.lineWidth,
                            stroke: V(qb.lineColor)
                        }, nb = {
                            polypath: [Oa.sides || 2, Ca, Fb, Oa.radius, Oa.startAngle, Oa.dip],
                            fill: V(Oa.fillColor),
                            "stroke-width": Oa.lineWidth,
                            stroke: V(Oa.lineColor)
                        });
                        jb = u.graphic = d.polypath(Za[1] || 2, Ca, Fb, db, qb.startAngle, ib, sb).attr({
                            fill: V(qb.fillColor),
                            "stroke-width": qb.lineWidth,
                            stroke: V(qb.lineColor),
                            cursor: xa ? "pointer" : "",
                            visibility: db ? Q : "hidden"
                        }).data("alwaysInvisible", !db).data("setRolloverProperties", Oa).data("setRolloverAttr", nb).data("setRolloutAttr", eb).data("anchorRadius", db).data("anchorHoverRadius", Oa && Oa.radius).shadow(Wa || !1, Db);
                        if (xa || S || Oa)db = Na(db, Oa && Oa.radius || 0, Rb), cb = u.tracker = d.circle({
                            cx: Ca,
                            cy: Fb,
                            r: db,
                            cursor: xa ? "pointer" : "",
                            stroke: s,
                            "stroke-width": qb.lineWidth,
                            fill: s,
                            ishot: !0,
                            visibility: Q
                        }, wc);
                        (cb || jb).data("eventArgs", bc).data("groupId",
                            fb).click(ya).hover(Xa(u), Mc(u)).tooltip(U);
                        c.drawTracker && c.drawTracker.call(c, a, b, W)
                    }
                    Ub = cc !== [V(oa.color || Pa), oa.dashStyle || lb].join(":");
                    if (null !== Ea) {
                        if (mb.length && (Cb = Cb.concat(mb), mb.length = 0), (D || E || !Cb.join("")) && Cb.push("M", La, Ea), E && Cb.push("m", -Y, 0), v ? H ? (Cb.push("H", Ca), E && Cb.push("h", Y), A ? Cb.push("V", Fb) : Cb.push("m", 0, Fb - Ea)) : (A && Cb.push("V", Fb), Cb.push("M", La, Fb, "H", Ca)) : Cb.push("L", Ca, Fb), D || Ub)ub = u.connector = d.path(Cb, jc).attr({
                            "stroke-dasharray": Ua, "stroke-width": $a, stroke: Ma, "stroke-linecap": "round",
                            "stroke-linejoin": 2 < $a ? "round" : "miter", visibility: Q
                        }).shadow(n.shadow && oa.shadow, Ac), Cb = []
                    } else!D && mb.push("M", Ca, Fb);
                    qb && qb.imageUrl || (Ra = u.dataLabel = c.drawPlotLineLabel(a, b, W, Ca, Fb));
                    La = Ca;
                    Ea = Fb;
                    Ma = V(oa.color || Pa);
                    Ua = oa.dashStyle || lb;
                    cc = [Ma, Ua].join(":")
                }
                Ra && p.push(Ra);
                jb && p.push(jb);
                ub && p.push(ub);
                cb && p.push(cb)
            }
            !D && Cb.join("") && (ub = d.path(Cb, jc).attr({
                "stroke-dasharray": Ua,
                "stroke-width": $a,
                stroke: Ma,
                "stroke-linecap": "round",
                "stroke-linejoin": 2 < $a ? "round" : "miter",
                visibility: Q
            }).shadow(n.shadow &&
                oa.shadow, Ac)) && p.push(ub);
            fa && (ka = ta.startPercent, Cc[2] = ma + Qb[0], 1 === ka && (Qb[0] = Cc[2], Cc[0] = 0));
            T ? (X = N.animation({"clip-rect": Cc}, T, fa ? "easeIn" : "normal", c.getAnimationCompleteFn()), jc.attr({"clip-rect": Qb}).animate(E ? X.delay(T) : X)) : (Aa && Aa(), Aa = void 0);
            a.visible = !1 !== b.visible;
            return a
        }, hoverPlotAnchor: function (a, b, c, d, e) {
            var g = d.graphic;
            d = d.dataLabel;
            var h = e.options.chart, m = 1 === h.rotateValues ? 270 : 0, l = g.data("setRolloverProperties"), n = g.data("isRealtime"), q = n && g.attr("polypath"), p = g.data("setRolloverAttr"),
                s = "image" === g.type, t = g.data("setRolloutAttr"), u = d && (d.data("isBelow") ? 1 : -1) * (s ? .5 * (p.height - t.height) : g.data("anchorHoverRadius") - g.data("anchorRadius")), C = "DataPlotRollOver" == c ? p : t, w = {transform: "T0," + ("DataPlotRollOver" === c ? u : 0) + "R" + m}, z = {
                    fill: C.fill,
                    "stroke-width": C["stroke-width"],
                    stroke: C.stroke
                }, C = s ? C : {polypath: C.polypath}, h = h.syncLabelWithAnchor, D = g.data("anchorRadius"), E = g.data("anchorHoverRadius"), p = !(/,0\)$/.test(p.fill) && /,0\)$/.test(t.fill)) && g.data("anchorHoverRadius") - g.data("anchorRadius") &&
                    l.animation && 50;
            d && d.data("isMiddle") && (w = {transform: "T," + ("DataPlotRollOver" === c ? u : 0) + ",0R" + m});
            l && (("DataPlotRollOver" == c && 0 !== E || "DataPlotRollOut" == c && 0 !== D) && g.attr({visibility: "visible"}), s ? g.css({opacity: .01 * C.alpha}) : g.attr(z), n && !s && (C.polypath[1] = q[1], C.polypath[2] = q[2]), g.stop(), g.animate(C, p, "easeOut", function () {
                ("DataPlotRollOver" == c && !E || "DataPlotRollOut" == c && !D) && g.attr({visibility: "hidden"})
            }), d && d.stop(), p && h && d && d.animate(w, p, "easeOut"));
            Ba.call(a, e, b, c)
        }, drawPlotArea: function (a,
                                   b) {
            var c = this, d = c.paper, e = c.options, g = e.chart, h = c.logic, m = e.plotOptions.series, l = c.elements, n = a.items, p = a.graphics = a.graphics || [], q, u = c.xAxis[b.xAxis || 0], w = c.yAxis[b.yAxis || 0], D = w.axisData.reversed, E = g.xDepth || 0, I = g.yDepth || 0, h = h.isStacked, F = !1 !== (e.tooltip || {}).enabled, M, K, e = m.dataLabels.style, G = {
                    fontFamily: e.fontFamily,
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    fontWeight: e.fontWeight,
                    fontStyle: e.fontStyle,
                    color: e.color
                }, e = isNaN(+m.animation) && m.animation.duration || 1E3 * m.animation, L = g.series2D3Dshift,
                N = "0" === c.definition.chart.drawfullareaborder, Y = a.data, S = !1 === b.visible ? "hidden" : "visible", U = Y.length, T = u.getAxisPosition(0), X = (u.getAxisPosition(1) - T) * U, Z = u.axisData.scroll || {}, T = g.hasScroll || !1, da = m.connectNullData, r, v, A, H, f, Q = w.max, W = w.min, ba = w.getAxisPosition(0 < Q && 0 > W ? 0 : !D && 0 < Q && 0 <= W ? W : Q) + (L ? I : 0), ea = c.chartWidth, ca = c.chartHeight, D = function () {
                    cb.attr({"clip-rect": null});
                    qb.show();
                    Ua.show();
                    La.attr({transform: "...t" + -ea + "," + -ca})
                }, ia = null, ta, aa, Q = b.lineWidth, W = b.dashStyle, ma = V(b.fillColor), fa = V(b.lineColor),
                ka = 0, qa = /drag/ig.test(c.logic.rendererId), ra, oa, za, xa, Ca, Da, Aa = [], Ga = [], Ha = null, Ja = [], Ea = c.layers;
            H = Ea.dataset = Ea.dataset || d.group("dataset-orphan");
            var La = Ea.datalabels = Ea.datalabels || d.group("datalabels").insertAfter(H), Pa = Ea.tracker, Ea = l["clip-canvas-init"].slice(0), l = l["clip-canvas"].slice(0), g = g.anchorTrackingRadius, Ma, Ua, eb, qb, cb, ib, jb, lb, Oa, Za, nb = function (a) {
                Ba.call(this, c, a)
            }, ub = function (a) {
                return function (b) {
                    c.hoverPlotAnchor(this, b, "DataPlotRollOver", a, c)
                }
            }, xb = function (a) {
                return function (b) {
                    c.hoverPlotAnchor(this,
                        b, "DataPlotRollOut", a, c)
                }
            }, Ha = function (e, f, g, h, m, l, n, q) {
                return function () {
                    var r = g.imageUrl, t = g.imageScale, u = g.imageAlpha, w = n.imageHoverAlpha, A = n.imageHoverScale, z = this.width * t * .01, D = this.width * A * .01;
                    Ca = {
                        x: e - this.width * t * .005,
                        y: f - this.height * t * .005,
                        width: z,
                        height: this.height * t * .01,
                        alpha: u
                    };
                    Da = {
                        x: e - this.width * A * .005,
                        y: f - this.height * A * .005,
                        width: D,
                        height: this.height * A * .01,
                        alpha: w
                    };
                    w = D > z ? Da : Ca;
                    qa && (w = {cx: e, cy: f, r: .5 * Na(D, z)});
                    (h.graphic = oa = d.image(r, qb).attr(Ca).css({opacity: .01 * u}).data("alwaysInvisible",
                        !t).data("setRolloverProperties", n).data("setRolloverAttr", Da).data("setRolloutAttr", Ca).data("anchorRadius", t).data("anchorHoverRadius", A)) && p.push(oa);
                    if (v || F || n)Ma = C({
                        cursor: v ? "pointer" : "",
                        stroke: s,
                        "stroke-width": g.lineWidth,
                        fill: s,
                        ishot: !0,
                        visibility: S
                    }, w), za = h.tracker = (qa ? d.circle(Ma, Pa) : d.rect(Ma, Pa)).data("eventArgs", m).click(nb).hover(ub(h), xb(h)).tooltip(l), c.drawTracker && c.drawTracker.call(c, a, b, q);
                    (Za = h.dataLabel = c.drawPlotLineLabel(a, b, q, e, f)) && p.push(Za)
                }
            }, Hb = function (d, e, f, g, h, m, l, n) {
                return function () {
                    (Za =
                        g.dataLabel = c.drawPlotLineLabel(a, b, n, d, e)) && p.push(Za)
                }
            };
            c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", G);
            La.attr("class", "fusioncharts-datalabels");
            w.yBasePos = ba;
            La.attr({transform: "...t" + ea + "," + ca});
            e && c.animationCompleteQueue.push({fn: D, scope: c});
            G = H;
            h && (ib = G.shadows || (G.shadows = d.group("shadows", G).toBack()));
            cb = G.area = G.area || d.group("area", G);
            G = G.areaConnector || (G.areaConnector = d.group("area-connector", G));
            a.lineShadowLayer || (a.lineShadowLayer = d.group("connector-shadow",
                G));
            Ua = a.anchorShadowLayer || (a.anchorShadowLayer = d.group("anchor-shadow", G));
            eb = a.lineLayer || (a.lineLayer = d.group("connector", G));
            qb = a.anchorLayer || (a.anchorLayer = d.group("anchors", G));
            qb.hide();
            Ua.hide();
            G = H;
            for (G = 0; G < U; G += 1) {
                r = Y[G];
                H = r.y;
                q = t(r.x, G);
                ta = u.getAxisPosition(q) - E;
                oa = Za = za = null;
                q = n[G] = {};
                if (null === H)0 === da && (ia = null, 0 < ka && (1 === ka ? Aa.splice(-8, 8) : (Aa = Aa.concat(Ga), Aa.push("Z")), Ga = [])), q.chart = c, q.index = G, q.value = H; else {
                    v = r.link;
                    M = r.toolText;
                    K = r.previousY;
                    f = (f = w.getAxisPosition(K) || null) ||
                        ba;
                    aa = w.getAxisPosition(H + (K || 0)) + (L ? I : 0);
                    if ((Oa = r.marker) && Oa.enabled)if (K = {
                            index: G,
                            link: v,
                            value: r.y,
                            displayValue: r.displayValue,
                            categoryLabel: r.categoryLabel,
                            toolText: r.toolText,
                            id: a.userID,
                            datasetIndex: a.index,
                            datasetName: a.name,
                            visible: a.visible
                        }, Ca = Da = {}, xa = r.rolloverProperties, Oa.imageUrl)A = new z, A.onload = Ha(ta, aa, Oa, q, K, M, xa, G), A.onerror = Hb(ta, aa, Oa, q, K, M, xa, G), A.src = Oa.imageUrl; else {
                        ra = Oa.symbol.split("_");
                        A = Oa.radius;
                        lb = Oa.shadow;
                        xa && (Ca = {
                            polypath: [ra[1] || 2, ta, aa, A, Oa.startAngle, 0], fill: V(Oa.fillColor),
                            "stroke-width": Oa.lineWidth, stroke: V(Oa.lineColor)
                        }, xa = r.rolloverProperties, Da = {
                            polypath: [xa.sides || 2, ta, aa, xa.radius, xa.startAngle, xa.dip],
                            fill: V(xa.fillColor),
                            "stroke-width": xa.lineWidth,
                            stroke: V(xa.lineColor)
                        });
                        oa = q.graphic = d.polypath(ra[1] || 2, ta, aa, A, Oa.startAngle, 0, qb).attr({
                            fill: V(Oa.fillColor),
                            "stroke-width": Oa.lineWidth,
                            stroke: V(Oa.lineColor),
                            cursor: v ? "pointer" : "",
                            visibility: A ? S : "hidden"
                        }).data("alwaysInvisible", !A).data("setRolloverProperties", xa).data("setRolloverAttr", Da).data("setRolloutAttr",
                            Ca).data("anchorRadius", A).data("anchorHoverRadius", xa && xa.radius).shadow(lb || !1, Ua);
                        if (v || F || xa)h || (A = Na(A, xa && xa.radius || 0, g)), za = q.tracker = d.circle({
                            cx: ta,
                            cy: aa,
                            r: A,
                            cursor: v ? "pointer" : "",
                            stroke: s,
                            "stroke-width": Oa.lineWidth,
                            fill: s,
                            ishot: !0,
                            visibility: S
                        }, Pa);
                        (za || oa).data("eventArgs", K).click(nb).hover(ub(q), xb(q)).tooltip(M);
                        c.drawTracker && c.drawTracker.call(c, a, b, G)
                    }
                    null === ia ? (Ja.push("M", ta, ",", aa), Aa.push("M", ta, ",", f), ka = 0) : Ja.push("L", ta, ",", aa);
                    Aa.push("L", ta, ",", aa);
                    Ga.unshift("L", ta, ",",
                        f);
                    ka++;
                    ia = aa;
                    Oa && Oa.imageUrl || (Za = q.dataLabel = c.drawPlotLineLabel(a, b, G, ta, aa));
                    q.chart = c;
                    q.index = G;
                    q.value = H;
                    q.dataLabel = Za
                }
                Za && p.push(Za);
                oa && p.push(oa);
                za && p.push(za)
            }
            0 < ka && (1 === ka ? Aa.splice(-8, 8) : (Aa = Aa.concat(Ga), Aa.push("Z")));
            (Ha = a.graphic = d.path(Aa, cb).attr({
                fill: ma,
                "stroke-dasharray": W,
                "stroke-width": N ? 0 : Q,
                stroke: fa,
                "stroke-linecap": "round",
                "stroke-linejoin": 2 < Q ? "round" : "miter",
                visibility: S
            }).shadow(m.shadow && r.shadow, ib)) && p.push(Ha);
            T && (m = Z.startPercent, l[2] = X + Ea[0], 1 === m && (Ea[0] = l[2],
                l[0] = 0));
            e ? jb = cb.attr({"clip-rect": Ea}).animate({"clip-rect": l}, e, T ? "easeIn" : "normal", c.getAnimationCompleteFn()) : (D && D(), D = void 0);
            ib && (e ? ib.attr({"clip-rect": Ea}).animateWith(cb, jb, {"clip-rect": l}, e, T ? "easeIn" : "normal", function () {
                ib.attr({"clip-rect": null})
            }) : ib.attr({"clip-rect": null}));
            N && (m = a.connector = d.path(Ja, eb).attr({
                "stroke-dasharray": W,
                "stroke-width": Q,
                stroke: fa,
                "stroke-linecap": "round",
                "stroke-linejoin": 2 < Q ? "round" : "miter",
                visibility: S
            }), e ? eb.attr({"clip-rect": Ea}).animateWith(cb, jb,
                {"clip-rect": l}, e, T ? "easeIn" : "normal", function () {
                    eb.attr({"clip-rect": null})
                }) : eb.attr({"clip-rect": null}), m && p.push(m));
            a.visible = !1 !== b.visible;
            return a
        }, drawPlotScatter: function (a, b) {
            var c = this, d = c.options, e = d.chart, g = d.plotOptions.series, h = c.paper, m = c.elements, l = a.items, n, q = a.graphics = a.graphics || [], p = c.xAxis[b.xAxis || 0], t = c.yAxis[b.yAxis || 0], u = a.data, C = !1 === b.visible ? "hidden" : "visible", d = !1 !== (d.tooltip || {}).enabled, w, z = g.dataLabels.style, D = {
                fontFamily: z.fontFamily, fontSize: z.fontSize, lineHeight: z.lineHeight,
                fontWeight: z.fontWeight, fontStyle: z.fontStyle, color: z.color
            }, z = isNaN(+g.animation) && g.animation.duration || 1E3 * g.animation, E = c.chartWidth, I = c.chartHeight, F, M, G, K, L, N, Y, S, U, T = b.lineWidth, r = 0 < T, v = b.color, A = b.dashStyle, H = g.connectNullData, f = [], Q, W, X, Z, da, ea, ca = c.layers, aa = ca.dataset || (ca.dataset = h.group("dataset-orphan")), ia = ca.datalabels || (ca.datalabels = h.group("datalabels").insertAfter(aa)), ca = ca.tracker, e = e.anchorTrackingRadius, fa, ma, ka, qa = function (a) {
                Ba.call(this, c, a)
            }, oa = function (a) {
                return function (b) {
                    c.hoverPlotAnchor(this,
                        b, "DataPlotRollOver", a, c)
                }
            }, ra = function (a) {
                return function (b) {
                    c.hoverPlotAnchor(this, b, "DataPlotRollOut", a, c)
                }
            };
            c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", D);
            ia.attr("class", "fusioncharts-datalabels");
            z && (c.animationCompleteQueue.push({
                fn: function () {
                    ia.attr({transform: "...t" + -E + "," + -I})
                }, scope: c
            }), ia.attr({transform: "...t" + E + "," + I}));
            fa = aa.line || (aa.line = h.group("line-connector", aa));
            a.lineShadowLayer = h.group("connector-shadow", fa);
            aa = a.anchorShadowLayer = h.group("anchor-shadow",
                fa);
            D = a.lineLayer = h.group("connector", fa);
            fa = a.anchorLayer = h.group("anchors", fa);
            F = 0;
            for (M = u.length; F < M; F += 1) {
                G = u[F];
                Q = G.marker;
                S = U = Z = w = da = null;
                ka = a.index + "_" + F;
                N = G.y;
                L = G.x;
                if (null !== N && null !== L) {
                    if (Q && Q.enabled) {
                        K = G.link;
                        w = G.toolText;
                        X = Q.radius;
                        ma = Q.shadow;
                        U = t.getAxisPosition(N);
                        S = p.getAxisPosition(L);
                        W = {
                            index: F,
                            link: K,
                            y: G.y,
                            x: G.x,
                            displayValue: G.displayValue,
                            categoryLabel: G.categoryLabel,
                            toolText: G.toolText,
                            id: a.userID,
                            datasetIndex: a.index,
                            datasetName: a.name,
                            visible: a.visible
                        };
                        Z = Q.symbol.split("_");
                        n = l[F] = {index: F, x: L, y: N, value: N};
                        L = N = {};
                        G.hoverEffects && (L = {
                            polypath: [Z[1] || 2, S, U, X, Q.startAngle, 0],
                            fill: V(Q.fillColor),
                            "stroke-width": Q.lineWidth,
                            stroke: V(Q.lineColor)
                        }, ea = G.rolloverProperties, N = {
                            polypath: [ea.sides || 2, S, U, ea.radius, ea.startAngle, ea.dip],
                            fill: V(ea.fillColor),
                            "stroke-width": ea.lineWidth,
                            stroke: V(ea.lineColor)
                        });
                        Z = n.graphic = h.polypath(Z[1] || 2, S, U, X, Q.startAngle, 0, fa).attr({
                            fill: V(Q.fillColor),
                            "stroke-width": Q.lineWidth,
                            stroke: V(Q.lineColor),
                            cursor: K ? "pointer" : "",
                            visibility: X ? C : "hidden"
                        }).data("alwaysInvisible",
                            !X).data("setRolloverProperties", ea).data("setRolloverAttr", N).data("setRolloutAttr", L).data("anchorRadius", X).data("anchorHoverRadius", ea && ea.radius).shadow(ma || !1, aa);
                        if (K || d || ea)X = Na(X, ea && ea.radius || 0, e), da = n.tracker = h.circle({
                            cx: S,
                            cy: U,
                            r: X,
                            cursor: K ? "pointer" : "",
                            stroke: s,
                            "stroke-width": Q.lineWidth,
                            fill: s,
                            ishot: !0,
                            visibility: C
                        }, ca);
                        (da || Z).data("eventArgs", W).data("groupId", ka).click(qa).hover(oa(n), ra(n)).tooltip(w)
                    }
                    r && ((void 0 === Y || null === Y && 0 === H) && S && U && f.push("M", S, ",", U), S && U && f.push("L",
                        S, ",", U), Y = U);
                    w = n.dataLabel = c.drawPlotLineLabel(a, b, F, S, U)
                } else r && 0 === H && (Y = null), l[F] = {chart: c, index: F, x: L, y: N};
                w && q.push(w);
                Z && q.push(Z);
                da && q.push(da);
                c.drawTracker && c.drawTracker.call(c, a, b, F)
            }
            f.length && (g = a.graphic = h.path(f, D).attr({
                "stroke-dasharray": A,
                "stroke-width": T,
                stroke: v,
                "stroke-linecap": "round",
                "stroke-linejoin": 2 < T ? "round" : "miter",
                visibility: C
            }).shadow(g.shadow && G.shadow), D.attr({"clip-rect": m[z ? "clip-canvas-init" : "clip-canvas"]}), z && D.animate({"clip-rect": m["clip-canvas"]}, z, "normal"),
                q.push(g));
            z && fa.attr({opacity: 0}).animate({opacity: 1}, z, "normal", c.getAnimationCompleteFn());
            a.visible = !1 !== b.visible;
            return a
        }, drawPlotLineLabel: function (a, b, c, d, e, g) {
            var h = this.options, m = h.chart, l = this.paper, n = this.layers, q = h.plotOptions.series.dataLabels.style, h = 1 === m.rotateValues ? 270 : 0, p = this.canvasHeight, t = this.canvasTop, s = a.data, u = s[c], w = a.items[c], C = fa(u.valuePosition, "auto").toLowerCase();
            a = this.logic.defaultSeriesType;
            var z = w.graphic, D = u.marker, z = D && D.enabled ? z && "image" == z.type && .5 * z.attr("height") ||
            D && D.radius - 3 : 0, m = m.valuePadding + 2 + z;
            b = !1 === b.visible ? "hidden" : "visible";
            z = w.dataLabel;
            g = g || n.datalabels;
            switch (C) {
                case "above":
                    c = 0;
                    break;
                case "below":
                    c = 1;
                    break;
                default:
                    n = s[c - 1] || {}, s = s[c + 1] || {}, c = c ? n.y > u.y ? 1 : (null == n.y && s.y) > u.y ? 1 : 0 : 0
            }
            n = u.displayValue;
            T(n) && n !== K ? (z ? h && z.attr("transform", ["r", 360 - h]) : z = w.dataLabel = l.text(g).attr({
                "class": "fusioncharts-label",
                text: n,
                fill: q.color,
                "text-bound": [q.backgroundColor, q.borderColor, q.borderThickness, q.borderPadding, q.borderRadius, q.borderDash],
                "font-weight": q.fontWeight,
                "font-style": q.fontStyle,
                "font-family": q.fontFamily,
                "font-size": q.fontSize,
                "line-height": q.lineHeight
            }), z.attr({
                title: u.originalText || "",
                fill: q.color
            }), w._state && w._state.labelWidth || (g = z.getBBox(), w._state = {
                labelWidth: g.width,
                labelHeight: g.height
            }), l = q = h ? w._state.labelWidth : w._state.labelHeight, g = e - t, p = t + p - e, l = l + m + 4, t = .5 * q + m, /bubble/i.test(a) || (c ? p > l ? (e += t, u._valueBelowPoint = 1) : g > l && (e -= t, u._valueBelowPoint = 0) : g > l ? (e -= t, u._valueBelowPoint = 0) : p > l && (e += t, u._valueBelowPoint = 1)), z.attr({
                x: d,
                y: e,
                visibility: b
            }).data("isBelow",
                u._valueBelowPoint), h && z.attr("transform", "T0,0,R" + h)) : z && z.attr({text: K});
            return z
        }, drawLabels: function () {
            for (var a = this.paper, b = this.options, c = (b = b.labels && b.labels.items && b.labels.items) && b.length, d = this.layers.layerAboveDataset, e = this.elements.quadran || (this.elements.quadran = []), g = this.canvasTop, h = this.canvasLeft, m = {
                right: "end",
                left: "start",
                undefined: "start"
            }, l, n, q; c--;)q = b[c], l = q.style, n = {
                fontFamily: l.fontFamily,
                fontSize: l.fontSize,
                lineHeight: l.lineHeight,
                fontWeight: l.fontWeight,
                fontStyle: l.fontStyle,
                fill: l.color
            }, T(q.html) && q.html !== K && (e[c] = a.text(d).attr({
                text: q.html,
                x: parseInt(l.left, 10) + h,
                y: parseInt(l.top, 10) + g,
                "text-anchor": m[q.textAlign],
                "vertical-align": q.vAlign
            }).css(n))
        }
    }, b["renderer.root"]);
    b("renderer.piebase", {
        isHovered: !1, getPlotData: function (a, b) {
            var c = this.datasets[0], d = c.data[a], c = c.userData || (c.userData = []), e, g;
            if (c[a])c = c[a]; else {
                c = c[a] = {};
                for (g in d)"object" !== typeof(e = d[g]) && "function" !== typeof e && 0 !== g.indexOf("_") && (c[g] = e);
                c.value = c.y;
                c.label = c.name;
                delete c.y;
                delete c.total;
                delete c.doNotSlice;
                delete c.name;
                delete c.centerAngle;
                delete c.showInLegend
            }
            c.sliced = b;
            return c
        }, redrawDataLabels: function (a) {
            var b = a.elements.plots[0];
            a.placeDataLabels(!0, b.items, b);
            return {}
        }, sliceInOtherPies: function (a) {
            var b = this.options.series[0], c = b.plot.items, d = c.length, e = 0, g;
            for (b.enableMultiSlicing = !0; d--;)d !== a && (g = c[d]).sliced && ++e && this.plotGraphicClick.call(g);
            b.enableMultiSlicing = !1;
            return !!e
        }, plotGraphicClick: function (a) {
            var b = this.graphic || this, c = b.plotItem || b.data("plotItem"), d =
                c.seriesData, e = c.chart, g = e.logic.chartInstance, h = c.index, m = e.options.series[0].enableMultiSlicing, l = d.data[c.index].doNotSlice, n = c.slicedTranslation, q, p;
            !d.isRotating && Ba.call(b, e, a);
            if (!(d.isRotating || d.singletonCase || l || (b = !m && e.sliceInOtherPies(h), (a = c.sliced) && b)))return b = c.graphic, d = c.connector, m = c.dataLabel, n = "object" === typeof n ? "t" + n : n, l = c.connectorPath, q = (a ? -1 : 1) * c.transX, p = (a ? -1 : 1) * c.transY, w.raiseEvent("slicingStart", {
                slicedState: a,
                data: e.getPlotData(h, a)
            }, g), b.animate({
                transform: a ? "t0,0" :
                    n
            }, 200, "easeIn", function () {
                w.raiseEvent("slicingEnd", {slicedState: c.sliced, data: e.getPlotData(h, c.sliced)}, g)
            }), m && m.x && m.animate({x: m.x + (a ? 0 : q)}, 200, "easeIn"), l && (l[1] += q, l[2] += p, l[4] += q, l[6] += q, d.animate({path: l}, 200, "easeIn")), a = c.sliced = !a, b = {hcJSON: {series: []}}, b.hcJSON.series[0] = {data: n = []}, n[h] = {sliced: a}, C(g.jsVars._reflowData, b, !0), a
        }, plotDragStart: function (a, b, c) {
            var d = this.data("plotItem"), e = d.chart, d = d.seriesData, g = -e.datasets[0].startAngle * lb;
            e.options.series[0].enableRotation && (a = l.call(c,
                a, b, d.pieCenter, d.chartPosition), d.dragStartAngle = a, d.startingAngleOnDragStart = g)
        }, plotDragEnd: function () {
            var a = this.data("plotItem"), b = a.chart, c = a.seriesData, a = -b.datasets[0].startAngle * lb, d = {hcJSON: {series: [{startAngle: a}]}};
            b.disposed || (C(b.logic.chartInstance.jsVars._reflowData, d, !0), b.rotate(c, b.options.series[0]));
            c.isRotating && (setTimeout(function () {
                c.isRotating = !1
            }, 0), w.raiseEvent("RotationEnd", {
                startingAngle: D(a, !0),
                changeInAngle: a - c.startingAngleOnDragStart
            }, b.logic.chartInstance));
            !b.isHovered &&
            b.onPlotHover(this, !1)
        }, plotDragMove: function (a, b, c, d, e) {
            a = this.data("plotItem");
            var g = a.chart, h = a.seriesData, m = g.options.series;
            m[0].enableRotation && !h.singletonCase && (h.isRotating || (h.isRotating = !0, w.raiseEvent("RotationStart", {startingAngle: D(h.startingAngleOnDragStart, !0)}, g.logic.chartInstance)), c = l.call(e, c, d, h.pieCenter, h.chartPosition), m[0].startAngle += c - h.dragStartAngle, h.dragStartAngle = c, h.moveDuration = 0, c = (new Date).getTime(), !h._lastTime || h._lastTime + h.timerThreshold < c) && (setTimeout(function () {
                g.rotate(h,
                    m[0])
            }, 0), h._lastTime = c)
        }, plotMouseDown: function () {
            (this.plotItem || this.data("plotItem")).seriesData.isRotating = !1
        }, plotMouseUp: function (a) {
            var b = this.plotItem || this.data("plotItem"), c = b.chart, d = b.seriesData;
            N.supportsTouch && !d.isRotating && c.plotGraphicClick.call(b, a)
        }, plotRollOver: function (a) {
            var b = this.plotItem || this.data("plotItem"), c = b.chart, d, e;
            b.seriesData.isRotating || (Ba.call(this, c, a, "DataPlotRollOver"), c.onPlotHover(this, !0));
            c.isHovered = !0;
            (a = b.innerDiameter) && (d = b.centerLabelConfig) && (e =
                d.label) && c.drawDoughnutCenterLabel(e, b.center[0], b.center[1], a, a, d, !1)
        }, plotRollOut: function (a) {
            var b = this.plotItem || this.data("plotItem"), c = b.chart, d = c.options.series[0], e, g;
            b.seriesData.isRotating || (Ba.call(this, c, a, "DataPlotRollOut"), c.onPlotHover(this, !1));
            c.isHovered = !1;
            (a = b.innerDiameter) && (e = d.centerLabelConfig) && ((g = e.label) || !g) && c.drawDoughnutCenterLabel(g, b.center[0], b.center[1], a, a, e, !1)
        }, onPlotHover: function (a, b) {
            var c = a.data("plotItem"), d = c.rolloverProperties, e = b ? d.color : c.color, g =
                b ? d.borderWidth : c.borderWidth, h = b ? d.borderColor : c.borderColor;
            d && c.graphic.attr({fill: V(e), "stroke-width": g, stroke: h})
        }, getEventArgs: function (a) {
            a = a || {};
            return {
                datasetName: a.label,
                datasetIndex: a.originalIndex,
                id: a.userID,
                visible: !0,
                label: a.label,
                value: a.value,
                percentValue: a.percentage,
                tooltext: a.toolText,
                link: a.link,
                sliced: a.sliced
            }
        }, legendClick: function (a) {
            var b = a.chart;
            b.elements.plots[0].isRotating = !1;
            b.plotGraphicClick.call(a)
        }, placeDataLabels: function () {
            var a = function (a, b) {
                return a.point.value -
                    b.point.value
            }, b = function (a, b) {
                return a.angle - b.angle
            }, c = ["start", "start", "end", "end"], d = [-1, 1, 1, -1], e = [1, 1, -1, -1];
            return function (g, h, m, l) {
                var q = this.options.plotOptions, p = q.pie, s = this.canvasLeft + .5 * this.canvasWidth, u = this.canvasTop + .5 * this.canvasHeight, w = this.smartLabel, C = q.series.dataLabels, z = C.style, D = t(Za(parseFloat(z.lineHeight)), 12), D = n(C.placeLabelsInside, 1 === h.length ? !0 : !1), q = C.skipOverlapLabels, E = C.manageLabelOverflow, I = C.connectorPadding, F = C.distance, G = l && l.metrics || [s, u, p.size, p.innerSize ||
                    0], M = G[1], K = G[0];
                l = .5 * G[2];
                var L = [[], [], [], []], N = this.canvasLeft, Y = this.canvasTop, p = this.canvasWidth, F = m.labelsRadius || (m.labelsRadius = l + F), u = s = parseInt(z.fontSize, 10), S = u / 2, I = [I, I, -I, -I];
                m = m.labelsMaxInQuadrant || (m.labelsMaxInQuadrant = xa(F / u));
                var C = C.isSmartLineSlanted, G = G[3] / 2, V, U, T, r, v, A, H, f, Q, W, X, Z, ea, ca, aa, ia, fa, ka, qa, ra;
                g || w.setStyle(z);
                if (1 == h.length && !G && D)r = h[0], (aa = r.dataLabel) && aa.show(), r.slicedTranslation = [N, Y], aa && (aa.attr({
                    visibility: Ca,
                    align: "middle",
                    transform: ["t", K, M + S - 2]
                }), aa.x =
                    K); else if (D)ra = G + (l - G) / 2, da(h, function (a) {
                    (aa = a.dataLabel) && aa.show();
                    aa && (ea = a.angle, Z = M + ra * Da(ea) + S - 2, f = K + ra * Ga(ea), aa.x = f, aa._x = f, aa.y = Z, a.sliced && (qa = a.slicedTranslation, fa = qa[0] - N, ka = qa[1] - Y, f += fa, Z += ka), aa.attr({
                        visibility: Ca,
                        align: "middle",
                        transform: ["t", f, Z]
                    }))
                }); else {
                    da(h, function (a) {
                        (aa = a.dataLabel) && aa.show();
                        aa && (ea = a.angle % nb, 0 > ea && (ea = nb + ea), ia = 0 <= ea && ea < La ? 1 : ea < Aa ? 2 : ea < Hb ? 3 : 0, L[ia].push({
                            point: a,
                            angle: ea
                        }))
                    });
                    for (h = g = 4; h--;) {
                        if (q && (D = L[h].length - m, 0 < D))for (L[h].sort(a), z = L[h].splice(0,
                            D), D = 0, T = z.length; D < T; D += 1)r = z[D].point, r.dataLabel.attr({visibility: "hidden"}), r.connector && r.connector.attr({visibility: "hidden"});
                        L[h].sort(b)
                    }
                    D = Na(L[0].length, L[1].length, L[2].length, L[3].length);
                    ca = Na(za(D, m) * u, F + u);
                    L[1].reverse();
                    for (L[3].reverse(); g--;) {
                        G = L[g];
                        T = G.length;
                        q || (u = T > m ? ca / T : s, S = u / 2);
                        r = T * u;
                        z = ca;
                        for (h = 0; h < T; h += 1, r -= u)D = Ea(ca * Da(G[h].angle)), z < D ? D = z : D < r && (D = r), z = (G[h].oriY = D) - u;
                        V = c[g];
                        T = ca - (T - 1) * u;
                        z = 0;
                        for (h = G.length - 1; 0 <= h; h -= 1, T += u)if (r = G[h].point, ea = G[h].angle, v = r.sliced, aa = r.dataLabel,
                                D = Ea(ca * Da(ea)), D < z ? D = z : D > T && (D = T), z = D + u, W = (D + G[h].oriY) / 2, A = K + e[g] * F * Ga(ma.asin(W / ca)), W *= d[g], W += M, X = M + l * Da(ea), H = K + l * Ga(ea), (2 > g && A < H || 1 < g && A > H) && (A = H), f = A + I[g], Z = W - S - 2, Q = f + I[g], aa.x = Q, aa._x = Q, E && (U = 1 < g ? Q - this.canvasLeft : this.canvasLeft + p - Q, w.setStyle(r.style), D = t(Za(parseFloat(r.style.lineHeight)), 12) + 2 * Za(parseFloat(r.style.border), 12), D = w.getSmartText(r.labelText, U, D), aa.attr({
                                text: D.text,
                                title: D.tooltext || ""
                            })), aa.y = Z, v && (fa = r.transX, ka = r.transY, f += fa, A += fa, H += fa, X += ka, Q += fa), aa.attr({
                                visibility: Ca,
                                "text-anchor": V, vAlign: "middle", x: Q, y: W
                            }), D = r.connector)r.connectorPath = r = ["M", H, X, "L", C ? A : H, W, f, W], D.attr({
                            path: r,
                            visibility: Ca
                        })
                    }
                }
            }
        }()
    }, b["renderer.root"])
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-interface", function () {
    var d = this, l = d.hcLib, D = d.renderer.getRenderer("javascript"), w = l.hasModule, p = l.loadModule, c = l.getMetaSentence, N = l.moduleCmdQueue, b = l.executeWaitingCommands, I = l.injectModuleDependency, a = l.moduleDependencies, z = l.getDependentModuleName, F, K;
    F = function (a) {
        var g, e, h, m = {}, p;
        a = c(a);
        for (g in d.core.items)g = d.core.items[g], e = g.chartType(), h = g.options.chartTypeSourcePath + e, (e = g.jsVars) && e.waitingModule && g.__state.rendering &&
        l.needsModule(a.predicate, h) && (e.waitingModuleError = !0, e = z(h).concat(e.userModules), e.length && (e = e[e.length - 1], m[e] = l.moduleCmdQueue[e]));
        for (p in m)b(m[p]);
        d.raiseError(d.core, "11171116151", "run", "HC-interface~renderer.load", "Unable to load required modules and resources: " + a.key)
    };
    K = function (a, b, c) {
        var h = a.args, m = a.options;
        a._chartMessageStyle = {
            color: h.typeNotSupportedMessageColor || m.baseChartMessageColor,
            fontFamily: h.typeNotSupportedMessageFont || m.baseChartMessageFont,
            fontSize: h.typeNotSupportedMessageFontSize ||
            m.baseChartMessageFontSize
        };
        d.hcLib.createChart(a, b, "stub", c, m.typeNotSupportedMessage)
    };
    l.eventList = d.extend(d.legacyEventList, {
        loaded: "FC_Loaded",
        dataloaded: "FC_DataLoaded",
        rendered: "FC_Rendered",
        drawcomplete: "FC_DrawComplete",
        dataxmlinvalid: "FC_DataXMLInvalid",
        nodatatodisplay: "FC_NoDataToDisplay",
        exported: "FC_Exported"
    });
    l.raiseEvent = d.raiseEventWithLegacy;
    a.charts = d.extend(a.charts || {}, {
        column2d: 0,
        column3d: 0,
        bar2d: 0,
        bar3d: 0,
        pie2d: 0,
        pie3d: 0,
        line: 0,
        area2d: 0,
        doughnut2d: 0,
        doughnut3d: 0,
        pareto2d: 0,
        pareto3d: 0,
        mscolumn2d: 0,
        mscolumn3d: 0,
        msline: 0,
        msarea: 0,
        msbar2d: 0,
        msbar3d: 0,
        stackedcolumn2d: 0,
        marimekko: 0,
        stackedcolumn3d: 0,
        stackedarea2d: 0,
        stackedcolumn2dline: 0,
        stackedcolumn3dline: 0,
        stackedbar2d: 0,
        stackedbar3d: 0,
        msstackedcolumn2d: 0,
        mscombi2d: 0,
        mscombi3d: 0,
        mscolumnline3d: 0,
        mscombidy2d: 0,
        mscolumn3dlinedy: 0,
        stackedcolumn3dlinedy: 0,
        msstackedcolumn2dlinedy: 0,
        scatter: 0,
        bubble: 0,
        ssgrid: 0,
        scrollcolumn2d: 0,
        scrollcolumn3d: 0,
        scrollline2d: 0,
        scrollarea2d: 0,
        scrollstackedcolumn2d: 0,
        scrollcombi2d: 0,
        scrollcombidy2d: 0,
        zoomline: 0
    });
    a.powercharts = d.extend(a.powercharts || {}, {
        spline: 0,
        splinearea: 0,
        msspline: 0,
        mssplinearea: 0,
        mssplinedy: 0,
        multiaxisline: 0,
        multilevelpie: 0,
        waterfall2d: 0,
        msstepline: 0,
        inversemsline: 0,
        inversemscolumn2d: 0,
        inversemsarea: 0,
        errorbar2d: 0,
        errorscatter: 0,
        errorline: 0,
        logmsline: 0,
        logmscolumn2d: 0,
        logstackedcolumn2d: 0,
        radar: 0,
        dragnode: 0,
        candlestick: 0,
        selectscatter: 0,
        dragcolumn2d: 0,
        dragline: 0,
        dragarea: 0,
        boxandwhisker2d: 0,
        kagi: 0,
        heatmap: 0
    });
    a.widgets = d.extend(a.widgets || {}, {
        angulargauge: 0,
        bulb: 0,
        cylinder: 0,
        drawingpad: 0,
        funnel: 0,
        hbullet: 0,
        hled: 0,
        hlineargauge: 0,
        vlineargauge: 0,
        pyramid: 0,
        realtimearea: 0,
        realtimecolumn: 0,
        realtimeline: 0,
        realtimelinedy: 0,
        realtimestackedarea: 0,
        realtimestackedcolumn: 0,
        sparkcolumn: 0,
        sparkline: 0,
        sparkwinloss: 0,
        thermometer: 0,
        vbullet: 0,
        gantt: 0,
        vled: 0
    });
    a.maps = d.extend(a.maps || {}, {});
    d.extend(D, {
        render: function (a, b) {
            var c = this.chartType(), h = this.options.chartTypeSourcePath + c, m = this.jsVars, p = this.__state, C = l.chartAPI, q = this.options, F = this.args, u = this.options.showChartLoadingMessage,
                ea, t;
            ea = z(h).concat(m.userModules);
            m.isResizing && (m.isResizing = clearTimeout(m.isResizing));
            m.hcObj && m.hcObj.destroy && m.hcObj.destroy();
            if (C[c]) {
                if (C[p.lastRenderedType] && p.lastRenderedType !== c)for (t in d.raiseEvent("chartTypeChanged", {
                    previousType: p.lastRenderedType,
                    newType: c
                }, this), C[p.lastRenderedType].eiMethods)delete this[t];
                p.lastRenderedType = c;
                p.lastRenderedSrc = this.src;
                !m.waitingModuleError && l.raiseEvent("internal.loaded", {
                        type: c,
                        triggeredModuleLoad: m.drLoadAttempted || m.waitingModule
                    }, this,
                    [this.id]);
                delete m.waitingModule;
                delete m.waitingModuleError;
                delete m.drLoadAttempted;
                d.hcLib.createChart(this, a, c, b)
            } else {
                if (c && w(ea)) {
                    if (m.drLoadAttempted) {
                        d.raiseError(this, 11112822001, "run", "HC-interface~renderer.render", "Chart runtimes not loaded even when resource is present");
                        K(this, a, b);
                        return
                    }
                    I(h) && (ea = z(h).concat(m.userModules));
                    m.drLoadAttempted = !0
                } else {
                    if (!ea.length) {
                        K(this, a, b);
                        return
                    }
                    if (m.waitingModuleError) {
                        K(this, a, b);
                        delete m.waitingModule;
                        delete m.waitingModuleError;
                        return
                    }
                }
                (c =
                    N[ea[ea.length - 1]]) ? (c.push({
                    cmd: "render",
                    obj: this,
                    args: arguments
                }), m.waitingModule || (m = u ? q.PBarLoadingText || q.loadMessage : "", this._chartMessageStyle = {
                    color: F.loadMessageColor || q.baseChartMessageColor,
                    fontFamily: F.loadMessageFont || q.baseChartMessageFont,
                    fontSize: F.loadMessageFontSize || q.baseChartMessageFontSize
                }, d.hcLib.createChart(this, a, "stub", void 0, m), D.load.call(this, a, b))) : (d.raiseError(this, 12080515551, "run", "HC-interface~renderer.render", "Unregistered module in dependentModule definition."),
                    this._chartMessageStyle = {
                        color: F.renderErrorMessageColor || q.baseChartMessageColor,
                        fontFamily: F.renderErrorMessageFont || q.baseChartMessageFont,
                        fontSize: F.renderErrorMessageFontSize || q.baseChartMessageFontSize
                    }, d.hcLib.createChart(this, a, "stub", void 0, q.renderErrorMessage))
            }
        }, update: function (a) {
            var b = this.ref, c = this.jsVars;
            c.hcObj && c.hcObj.destroy && c.hcObj.destroy();
            c.isResizing && (c.isResizing = clearTimeout(c.isResizing));
            void 0 === a.error ? (delete c.stallLoad, delete c.loadError, this.isActive() ? this.src !==
            this.__state.lastRenderedSrc ? this.render() : d.hcLib.createChart(this, c.container) : this.__state.rendering && !c.waitingModule && d.hcLib.createChart(this, c.container)) : (this.isActive() && "function" === typeof b.showChartMessage && b.showChartMessage("InvalidXMLText"), delete c.loadError)
        }, resize: function (a) {
            var b = this.ref, c, h = this.jsVars;
            b && b.resize && (h.isResizing && (h.isResizing = clearTimeout(h.isResizing)), h.isResizing = setTimeout(function () {
                c = d.normalizeCSSDimension(a.width, a.height, b);
                void 0 !== a.width && (b.style.width =
                    c.width);
                void 0 !== a.height && (b.style.height = c.height);
                b.resize();
                delete h.isResizing
            }, 0))
        }, dispose: function () {
            var a, b = this.jsVars;
            b.isResizing && (b.isResizing = clearTimeout(b.isResizing));
            b.instanceAPI && b.instanceAPI.dispose && (b.instanceAPI.dispose(), delete b.instanceAPI);
            if (a = this.ref)d.purgeDOM(a), a.parentNode && a.parentNode.removeChild(a);
            b.container = null;
            l.cleanupWaitingCommands(this)
        }, load: function (a, c) {
            var e = this.jsVars, h = this.chartType(), m = d.hcLib.chartAPI[h], h = z(h).concat(e.userModules), w = h[h.length -
            1];
            m || !h || h && 0 === h.length ? (delete e.waitingModule, a && K(this, a || this.ref, c)) : e.waitingModule || (e.waitingModule = !0, delete e.waitingModuleError, p(h, function () {
                delete e.waitingModule;
                b(l.moduleCmdQueue[w])
            }, F, this))
        }
    })
}]);
FusionCharts.register("module", ["private", "modules.api.dynamicchartattributes", function () {
    var d = this;
    d.extend(d.core, {
        setChartAttribute: function (l, D) {
            var w, p, c, N;
            if ("string" === typeof l)w = l, l = {}, l[w] = D; else if (null === l || "object" !== typeof l)return;
            N = 0;
            if (c = (w = this.getChartData(d.dataFormats.JSON)) && (w.chart || w.graph || w.map)) {
                for (p in l)N += 1, null === l[p] ? delete c[p.toLowerCase()] : c[p.toLowerCase()] = l[p];
                0 < N && ("undefined" === typeof c.animation && (c.animation = "0"), this.setChartData(w, d.dataFormats.JSON))
            } else d.raiseError(this,
                "2105141421", "run", "#setChartAttribute()", "Could not retrieve attribute list. Is data ready?")
        }, getChartAttribute: function (l) {
            var D = this.getChartData(d.dataFormats.JSON), D = D && (D.chart || D.graph || D.map), w, p;
            if (0 === arguments.length || void 0 === l || void 0 === D)return D;
            if ("string" === typeof l)w = D[l.toString().toLowerCase()]; else if (l instanceof Array)for (w = {}, p = 0; p < l.length; p += 1)w[l[p]] = D[l[p].toString().toLowerCase()]; else d.raiseError(this, "25081429", "param", "~getChartAttribute()", 'Unexpected value of "attribute"');
            return w
        }
    }, !0)
}]);
FusionCharts.register("module", ["private", "api.linkmanager", function () {
    var d = this, l = d.FusionChartsDOMInsertModes, D = {}, w = function (c, l) {
        this.items = {};
        this.root = c;
        this.parent = l;
        l instanceof d.core ? this.level = this.parent.link.level + 1 : (D[c.id] = [{}], this.level = 0)
    }, p = function (c, d) {
        return (c.options.containerElement === d.options.containerElement || c.options.containerElementId === d.options.containerElementId) && c.options.insertMode === l.REPLACE
    };
    d.policies.link = ["link", void 0];
    w.prototype.configuration = function () {
        return D[this.root.id][this.level] ||
            (D[this.root.id][this.level] = {})
    };
    d.extend(d.core, {
        configureLink: function (c, l) {
            var b;
            if (c instanceof Array) {
                for (b = 0; b < c.length; b += 1)"object" !== typeof D[this.link.root.id][b] && (D[this.link.root.id][b] = {}), d.extend(D[this.link.root.id][b], c[b]);
                D[this.link.root.id].splice(c.length)
            } else"object" === typeof c ? ("number" !== typeof l && (l = this.link.level), void 0 === D[this.link.root.id][l] && (D[this.link.root.id][l] = {}), d.extend(D[this.link.root.id][l], c)) : d.raiseError(this, "25081731", "param", "~configureLink()",
                "Unable to update link configuration from set parameters")
        }
    }, !0);
    d.addEventListener("beforeInitialize", function (c) {
        c.sender.link instanceof w ? c.sender.link.parent instanceof d.core && (c.sender.link.parent.link.items[c.sender.id] = c.sender) : c.sender.link = new w(c.sender)
    });
    d.addEventListener("linkedChartInvoked", function (c, l) {
        var b = c.sender, D = b.clone({
            dataSource: l.data,
            dataFormat: l.linkType,
            link: new w(b.link.root, b)
        }, !0), a = l.alias, z;
        a && (!D.typeSource && D.swfUrl && (D.typeSource = D.swfUrl.replace(/(.*?)?[^\/]*\.swf.*?/ig,
            "$1")), D.type = a);
        b.args && 0 !== parseInt(b.args.animate, 10) && delete D.animate;
        d.extend(D, b.link.configuration());
        d.raiseEvent("beforeLinkedItemOpen", {level: b.link.level}, b.link.root, void 0, function () {
            d.core.items[D.id] instanceof d.core && d.core.items[D.id].dispose();
            z = new d.core(D);
            p(z, b) || b.options.overlayButton && b.options.overlayButton.message || ("object" !== typeof b.options.overlayButton && (b.options.overlayButton = {}), b.options.overlayButton.message = "Close");
            z.render();
            d.raiseEvent("linkedItemOpened",
                {level: b.link.level, item: z}, b.link.root)
        })
    });
    d.addEventListener("overlayButtonClick", function (c, l) {
        if ("LinkManager" === l.id) {
            var b = c.sender, w = b.link.level - 1, a = b.link.parent, z = b.link.root;
            d.raiseEvent("beforeLinkedItemClose", {level: w, item: b}, z, b, function () {
                setTimeout(function () {
                    d.core.items[b.id] && b.dispose();
                    d.raiseEvent("linkedItemClosed", {level: w}, z)
                }, 0);
                a.disposed || a.isActive() || !p(b, a) || a.render()
            })
        }
    });
    d.addEventListener("Loaded", function (c) {
        c = c.sender;
        var l;
        c && void 0 !== c.link && c.link.root !== c &&
        c.link.parent instanceof d.core && (c.ref && "function" === typeof c.ref.drawOverlayButton ? (l = d.extend({
            show: !0,
            id: "LinkManager"
        }, c.link.parent.options.overlayButton), d.extend(l, c.link.parent.link.configuration().overlayButton || {}), c.ref.drawOverlayButton(l)) : d.raiseWarning(c, "04091602", "run", "::LinkManager^Loaded", "Unable to draw overlay button on object. -" + c.id))
    });
    d.addEventListener("beforeDispose", function (c) {
        var l = c.sender;
        l && l.link instanceof w && (l && l.link && l.link.parent instanceof d.core && l.link.parent.link &&
        l.link.parent.link.items && delete l.link.parent.link.items[c.sender.id], delete D[l.id])
    })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-thememanager", function () {
    var d = this, l, D, w, p = /\s+!important$/, c = /\\!important$/, N = function (a, b) {
        for (var c = b.length, d = -1; c--;)if (a === b[c]) {
            d = c;
            break
        }
        return d
    }, b = function (a, c, d, m, l) {
        var p, q, s, u;
        l ? (m.push(a), l.push(c)) : (m = [a], l = [c]);
        if (c instanceof Array)for (p = 0; p < c.length; p += 1) {
            try {
                q = a[p], s = c[p]
            } catch (w) {
                continue
            }
            if ("object" !== typeof s)d && void 0 === s || (a[p] = s); else {
                if (null === q || "object" !== typeof q)q = a[p] = s instanceof Array ? [] : {};
                u = N(s, l);
                -1 !== u ? q = a[p] = m[u] : b(q, s, d, m, l)
            }
        } else for (p in c) {
            try {
                q = a[p], s = c[p]
            } catch (t) {
                continue
            }
            if (null !== s && "object" === typeof s)if (u = Object.prototype.toString.call(s), "[object Object]" === u) {
                if (null === q || "object" !== typeof q)q = a[p] = {};
                u = N(s, l);
                -1 !== u ? q = a[p] = m[u] : b(q, s, d, m, l)
            } else"[object Array]" === u ? (null !== q && q instanceof Array || (q = a[p] = []), u = N(s, l), -1 !== u ? q = a[p] = m[u] : b(q, s, d, m, l)) : a[p] = s; else a[p] = s
        }
        return a
    }, I = function (a, c, d) {
        if ("object" !== typeof a && "object" !== typeof c)return null;
        if ("object" !== typeof c ||
            null === c)return a;
        "object" !== typeof a && (a = c instanceof Array ? [] : {});
        b(a, c, d);
        return a
    }, a = function (a) {
        var b = {important: !1, str: ""};
        if (!a)return b;
        a = a.toString();
        p.test(a) ? (a = a.replace(p, ""), b.important = !0) : (a = a.replace(c, "!imporant"), b.important = !1);
        b.str = a;
        return b
    }, z = function (a, b) {
        var c, d, l, p, q, s, u = 0, w = 0;
        for (c in a)if (d = a[c], d instanceof Array)for (s = d.length, q = 0; q < s; q += 1) {
            if (p = d[q], "object" === typeof p)if ("category" === c)if ("true" === p.vline) {
                if (l = b.component("vline", u, p))F(p, l), u += 1
            } else {
                if (l = b.component("category",
                        w, p, s))F(p, l), w += 1
            } else if (l = b.component(c, q, p, s))F(p, l), z(p, l)
        } else"object" === typeof d && (l = b.component(c, null, d)) && (F(d, l), z(d, l))
    }, F = function (b, c) {
        var d = c.getAll(), m, l;
        for (m in d)l = d[m].toString(), l = a(l), l.important ? b[m.toLowerCase()] = l.str : void 0 === b[m.toLowerCase()] && (b[m.toLowerCase()] = l.str)
    }, K = function (a, b) {
        "geo" === b.defaultSeriesType && s.call(this, a, b)
    }, s = function (a, b) {
        var c = a.sender, m = c.getChartData(d.dataFormats.JSON, !0), l;
        m.error || ((l = m.data.chart.theme) ? w.themify(l, c, c.chartType(), m.data,
            "geo" === b.defaultSeriesType && "geo") : c.jsVars.themeObject && c.jsVars.themeObject.dispose())
    };
    l = function () {
        this.themeStore = {}
    };
    l.prototype = {
        constructor: l, add: function (a) {
            for (var b = 0, c = a.length, d; b < c; b += 1)(d = a[b].name) && (this.themeStore[d] = a[b])
        }, themify: function (a, b, c, m, l) {
            var p = b.jsVars, q = a.split(","), w = [], u = q.length, z, t;
            if (u) {
                for (t = 0; t < u; t += 1) {
                    z = this.themeStore;
                    var F;
                    F = q[t];
                    F = F.replace(/^\s\s*/, "");
                    for (var I = /\s/, N = F.length; I.test(F.charAt(N -= 1)););
                    F = F.slice(0, N + 1);
                    (z = z[F]) && w.push(this.evaluateThemeJSON(z.theme,
                        b, c, l))
                }
                w.length ? (p.themeObject = new D(w, b, !1, m), this.applyTheme(b), b.addEventListener("chartTypeChanged", s), b.addEventListener("internal.drawstart", K)) : d.raiseWarning(b, "14051100501", "run", "api.themes~themify()", 'The theme "' + a + '" requested has not been registered.')
            }
        }, evaluateThemeJSON: function (a, b, c, d) {
            var l = {}, p = b.jsVars, q = function (a) {
                var b, c;
                for (b in a)c = a[b], l[b] = c instanceof Array ? I(l[b] || [], c) : "object" === typeof c ? I(l[b] || {}, c) : c
            };
            c = c || b.chartType();
            p.themeObject && a !== p.themeObject && (p.themeObject.dispose(),
                delete p.themeObject);
            q(a.base);
            d && a[d] && q(a[d]);
            c && a[c] && q(a[c]);
            return l
        }, applyTheme: function (a) {
            a = a.jsVars.themeObject;
            var b = a.getThemedJSONData().data;
            b && z(b, a)
        }
    };
    D = function (a, b, c, d) {
        this.themeArray = a;
        this.themeComponents = {};
        this.base = {};
        this.chartInstance = b;
        this.isChildInstance = Boolean(c);
        this.themedData = c ? null : I({}, d);
        this.length = a.length;
        b = 0;
        for (c = a.length; b < c; b += 1)this.parse(a[b])
    };
    D.prototype = {
        constructor: D, pushTheme: function (a) {
            a && (this.themeArray.push(a), this.parse(a), this.length += 1)
        },
        popTheme: function () {
        }, parse: function (b) {
            var c = this.themeComponents, d = this.chartInstance, m = this.base, l, p, q;
            for (p in b)if ("string" === typeof b[p] || "number" === typeof b[p])if (m[p]) {
                if (l = a(b[p]), q = a(m[p]), l.important || !q.important)m[p] = b[p]
            } else m[p] = b[p]; else c[p] || (c[p] = []), l = c[p], b[p] instanceof Array ? l.push(I([], b[p])) : "object" === typeof b[p] ? l.push(new D([b[p]], d, !0)) : "function" === typeof b[p] && l.push(b[p])
        }, merge: function (b) {
            var c = this.base, d = b.base, m = this.themeComponents, l = b.themeComponents, p, q, s;
            for (s in d)if (p =
                    a(c[s]), q = a(d[s]), !p.important || q.important)c[s] = d[s];
            for (s in l)m[s] = m[s] ? m[s].concat(l[s]) : [].concat(l[s]);
            this.length += b.length
        }, get: function (a) {
            return this.base[a]
        }, getAll: function () {
            return I({}, this.base)
        }, component: function (a, b, c, d) {
            var l = this.themeComponents, p = this.chartInstance, q = new D([], p, !0), s, u, w;
            u = l[a];
            if (!u)return null;
            a = 0;
            for (l = u.length; a < l; a += 1)w = u[a], "function" === typeof w ? (b = b || 0, q.pushTheme(w.call(p, b, c, d))) : w instanceof Array ? (b = b || 0, s = w.length, b %= s, s = w[b], s instanceof D ? q.merge(s) :
                "function" === typeof s ? q.pushTheme(s.call(p, b, c, d)) : q.pushTheme(s)) : w instanceof D ? q.merge(w) : q.pushTheme(w);
            return q
        }, getThemedJSONData: function () {
            return {data: this.themedData}
        }, dispose: function () {
            var a = this.themeComponents, b = this.chartInstance, c, d;
            for (c in a)if (d = a[c].length) {
                for (; d--;)a[c][d].dispose && a[c][d].dispose();
                delete a[c]
            }
            this.isChildInstance || (b.removeEventListener("chartTypeChanged", s), b.removeEventListener("internal.drawstart", K));
            this.dataWithoutTheme = this.isChildInstance = this.themeArray =
                this.base = this.chartInstance = this.themeComponents = null
        }
    };
    w = new l;
    d.registrars.theme = d.registerTheme = function (a) {
        a && ("[object Array]" !== Object.prototype.toString.call(a) && (a = [a]), w.add(a))
    };
    d.addEventListener("beforeDataUpdate", function (a, b) {
        var c = a.sender, l = d.core.transcodeData(b.data, b.format, d.dataFormats.JSON), p = l.chart && l.chart.theme;
        p ? w.themify(p, c, c.args.type, l) : c.jsVars.themeObject && (c.jsVars.themeObject.dispose(), delete c.jsVars.themeObject)
    })
}]);
FusionCharts.register("theme", {
    name: "default", theme: {
        base: {
            chart: {
                labelDisplay: "stagger !important",
                caption: "Theme Caption \\!important",
                canvasBgColor: "#56EF22",
                borderThickness: "5 !important",
                borderColor: "#E60539",
                baseFontColor: "#781129"
            }, categories: [{
                fontColor: "#0F4F40", fontSize: 15, category: function (d) {
                    return {showLabel: d % 2 ? 0 : 1}
                }, vline: {color: "#000000", thickness: 2}
            }], dataset: [{
                color: "#8C3146", data: function (d, l) {
                    8 == d && (l.value = "");
                    return {color: 32E3 > Number(l.value) ? "#8C3146" : "#FF0000", alpha: "100"}
                }
            }],
            trendlines: [{
                line: function (d) {
                    return d ? {color: "#ff0000", thickness: 3} : {color: "#ffff00", thickness: 3}
                }
            }]
        },
        pie2d: {chart: {bgColor: "#FF0000"}},
        msline: {chart: {canvasBgColor: "#ff0000"}},
        geo: {chart: {canvasBgColor: "#0000ff"}},
        world: {chart: {canvasBgColor: "#00ff00"}}
    }
});
