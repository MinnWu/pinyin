(function (a) {
    var b = {
        bind: function (c, d, e) {
            d = d.replace(/^on/i, "").toLowerCase();
            if (c.addEventListener) {
                c.addEventListener(d, e, false)
            }
            else {
                if (c.attachEvent) {
                    c.attachEvent("on" + d, e)
                }
            }
            return c
        },
        sendByImage: function (d, f) {
            var c = new Image();
            var e = "cpro_log_" + Math.floor(Math.random() * 2147483648).toString(36);
            f = f || a; f[e] = c;
            c.onload = c.onerror = c.onabort = function () {
                c.onload = c.onerror = c.onabort = null;
                f[e] = null; c = null
            }; c.src = d
        },
        loadHandler: function () {
            try {
                var j = parseInt(100 * Math.random());
                if (j < 100) {
                    var t = a.location.href; var d = t.split("&");
                    var z = []; var n = ""; var v = [];
                    var s = 0, r = 0, q = 0, p = 0;
                    for (var x = 0, w = d.length; x < w; x++) {
                        z = d[x].split("="); n = z[0];
                        if (n == "tt") {
                            v = z[1].split("."); s = v[0] || 0; r = v[1] || 0; q = v[2] - r || 0; p = v[3] || 0
                        }
                        if (n == "feid" && (typeof feid === "undefined" || feid === "$feid$")) {
                            feid = z[1]
                        }
                    } var o = startTime - p - s;
                    var m = (new Date()).getTime() - startTime;
                    var h = r, g = q, f = p, e = o, c = m;
                    var u = (new Date()).getTime();
                    var k = "//eclick.baidu.com/time.jpg?stamp=" + u + "&s1=" + h + "&s2=" + g + "&s3=" + f + "&s4=" + e + "&s5=" + c;
                    if (typeof templateid !== "undefined") {
                        k = k + "&templateid=" + templateid
                    }
                    if (typeof feid !== "undefined" && feid !== "$feid$") {
                        k = k + "&feid=" + feid
                    }
                    if (config && config.s) {
                        k = k + "&s=" + config.s
                    }
                    b.sendByImage(k)
                }
            } catch (y) {

            } finally { }
        }
    }; b.bind(a, "load", b.loadHandler)
})(window);