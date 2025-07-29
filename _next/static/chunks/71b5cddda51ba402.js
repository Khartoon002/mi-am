(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["object" == typeof document ? document.currentScript : void 0, {
    73757: e => {
        "use strict";
        var {g: t, __dirname: i} = e;
        e.s({
            default: () => u
        });
        var a = e.i(31636)
          , r = e.i(21042)
          , n = e.i(86240)
          , s = e.i(38653)
          , o = e.i(59808);
        function u({children: e, target: t, name: i="whatsapp_link", className: u}) {
            let {data: c, isFetching: l} = (0,
            o.useAgentInfo)()
              , [f,g] = (0,
            s.useState)("");
            return (0,
            s.useEffect)( () => {
                c && g(c[i])
            }
            , [c, l]),
            (0,
            a.jsx)(n.default, {
                href: f,
                className: (0,
                r.default)(u),
                onClick: () => gtag_report_conversion(),
                target: t,
                children: e
            })
        }
    }
    ,
    80234: e => {
        var {g: t, __dirname: i} = e;
        e.n(e.i(73757))
    }
}]);
