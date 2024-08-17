<!-- <?php require('/www/website/public/footer.php') ?> -->



	<!-- Google analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-30042696-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'UA-30042696-1');
	</script>


	<!-- Microsoft clarity usage analytics -->
	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
			t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
			y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
		})(window, document, "clarity", "script", "hxl3bdiaiq");
	</script>


	<!-- Amplitude pipeline usage analytics -->
	<script type="text/javascript">
		!function () { "use strict"; !function (e, t) { var n = e.amplitude || { _q: [], _iq: {} }; if (n.invoked) e.console && console.error && console.error("Amplitude snippet has been loaded."); else { var r = function (e, t) { e.prototype[t] = function () { return this._q.push({ name: t, args: Array.prototype.slice.call(arguments, 0) }), this } }, s = function (e, t, n) { return function (r) { e._q.push({ name: t, args: Array.prototype.slice.call(n, 0), resolve: r }) } }, o = function (e, t, n) { e[t] = function () { if (n) return { promise: new Promise(s(e, t, Array.prototype.slice.call(arguments))) } } }, i = function (e) { for (var t = 0; t < m.length; t++)o(e, m[t], !1); for (var n = 0; n < g.length; n++)o(e, g[n], !0) }; n.invoked = !0; var u = t.createElement("script"); u.type = "text/javascript", u.integrity = "sha384-x0ik2D45ZDEEEpYpEuDpmj05fY91P7EOZkgdKmq4dKL/ZAVcufJ+nULFtGn0HIZE", u.crossOrigin = "anonymous", u.async = !0, u.src = "https://cdn.amplitude.com/libs/analytics-browser-2.0.0-min.js.gz", u.onload = function () { e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK") }; var a = t.getElementsByTagName("script")[0]; a.parentNode.insertBefore(u, a); for (var c = function () { return this._q = [], this }, p = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove", "getUserProperties"], l = 0; l < p.length; l++)r(c, p[l]); n.Identify = c; for (var d = function () { return this._q = [], this }, f = ["getEventProperties", "setProductId", "setQuantity", "setPrice", "setRevenue", "setRevenueType", "setEventProperties"], v = 0; v < f.length; v++)r(d, f[v]); n.Revenue = d; var m = ["getDeviceId", "setDeviceId", "getSessionId", "setSessionId", "getUserId", "setUserId", "setOptOut", "setTransport", "reset", "extendSession"], g = ["init", "add", "remove", "track", "logEvent", "identify", "groupIdentify", "setGroup", "revenue", "flush"]; i(n), n.createInstance = function (e) { return n._iq[e] = { _q: [] }, i(n._iq[e]), n._iq[e] }, e.amplitude = n } }(window, document) }();

		amplitude.init('22c65699d4c0d9ee32ba08a9c3087dcd');
		amplitude.track('Visited frontpage');
	</script>

	<!--Tawk.to customer support-->
	<script type="text/javascript">
		var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
		window.Tawk_API.autoStart = false;

		(function () {
			var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = 'https://embed.tawk.to/64b6ec5acc26a871b0293d74/1h5l8mh5h';
			s1.charset = 'UTF-8';
			s1.setAttribute('crossorigin', '*');
			s0.parentNode.insertBefore(s1, s0);
		})();
	</script>
	<!--End of Tawk.to Script-->