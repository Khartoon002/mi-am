(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["object" == typeof document ? document.currentScript : void 0, {
    26338: e => {
        "use strict";
        var {g: a, __dirname: t} = e;
        {
            e.s({
                default: () => h
            });
            var l = e.i(31636),
                s = e.i(97434),
                n = e.i(21042),
                r = e.i(47791),
                i = e.i(12568),
                o = e.i(86240),
                c = e.i(38653),
                d = e.i(89017),
                m = e.i(58204),
                u = e.i(21879),
                p = e.i(59808);
            let a = (0, r.default)(() => e.r(92989)(e.i).then(e => e.PaystackConsumer), {
                loadableGenerated: {
                    modules: [5383]
                },
                ssr: !1
            });
            function h() {
                let [e, t] = (0, c.useState)(0),
                    [r, h] = (0, c.useState)(null),
                    { control: x, watch: f } = (0, d.useForm)(),
                    { data: b } = (0, p.useAgentInfo)(),
                    g = (0, c.useCallback)(e => {
                        window.open("https://linktr.ee/makemoneyonline312", "_blank")
                    }, []),
                    j = () => {
                        console.log("closed")
                    };
                return (0, l.jsx)("div", {
                    className: "main",
                    children: (0, l.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault(), gtag_report_conversion("https://linktr.ee/makemoneyonline312")
                        },
                        className: "mx-auto flex w-full flex-col items-stretch justify-center md:w-2/4",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "space-y-5",
                            children: [(0,
                            l.jsx)(o.default, {
                                href: "/",
                                children: (0,
                                l.jsx)(i.default, {
                                    src: "/img/miamor-logo.png",
                                    alt: "",
                                    className: "mx-auto hidden w-32",
                                    width: 512,
                                    height: 512
                                })
                            }), (0,
                            l.jsx)("h2", {
                                className: "mt-2 text-center text-3xl font-extrabold",
                                children: "Create An Account"
                            })]
                        }), 0 == e && (0,
                        l.jsxs)("div", {
                            className: "space-y-8 py-5",
                            children: [(0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "first_name",
                                name: "first_name",
                                placeholder: "Enter First Name",
                                label: "First Name"
                            }), (0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "last_name",
                                name: "last_name",
                                placeholder: "Enter Last Name",
                                label: "Last Name"
                            }), (0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "username",
                                name: "username",
                                placeholder: "Enter Username",
                                label: "Username"
                            }), (0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "phone_number",
                                name: "phone_number",
                                placeholder: "Enter Phone Number",
                                label: "Phone Number"
                            }), (0,
                            l.jsx)("button", {
                                type: "button",
                                onClick: () => t(1),
                                className: "btn w-full !py-2",
                                children: "Continue"
                            })]
                        }), 1 == e && (0,
                        l.jsxs)("div", {
                            className: "space-y-4 py-5",
                            children: [(0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "email",
                                name: "email",
                                placeholder: "Enter Email Address",
                                label: "Email Address"
                            }), (0,
                            l.jsx)(u.default, {
                                control: x,
                                id: "password",
                                name: "password",
                                placeholder: "Enter Password",
                                label: "Password"
                            
                            }), (0,
                            l.jsxs)("div", {
                                className: "mt-2 flex items-center justify-between gap-x-5",
                                children: [(0,
                                l.jsx)("button", {
                                    type: "button",
                                    onClick: () => t(0),
                                    className: "btn w-full !bg-gray-600 !py-2 !text-white",
                                    children: "Previous"
                                }), (0,
                                l.jsx)("button", {
                                    type: "submit",
                                    className: "btn w-full !py-2",
                                    children: "Submit"
                                })]
                            })]
                        })]
                    })
                })
            }
        }
    }
    ,
    92989: e => {
        var {g: a, __dirname: t} = e;
        e.v(a => Promise.all(["static/chunks/2dc1625b9c6f6850.js"].map(a => e.l(a))).then( () => a(5383)))
    }
}]);