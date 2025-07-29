(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["object" == typeof document ? document.currentScript : void 0, {
    66561: e => {
        var {g: a, __dirname: s} = e;
        e.v({
            className: "playpen_sans_48d066e4-module__g5I7ZW__className"
        })
    }
    ,
    68082: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        {
            e.s({
                default: () => s
            });
            var l = e.i(66561);
            let a = {
                className: l.default.className,
                style: {
                    fontFamily: "'Playpen Sans', 'Playpen Sans Fallback'",
                    fontStyle: "normal"
                }
            };
            null != l.default.variable && (a.variable = l.default.variable);
            let s = a
        }
    }
    ,
    26699: e => {
        var {g: a, __dirname: s} = e;
        e.v({
            className: "roboto_591cc0a9-module__vlbC6a__className"
        })
    }
    ,
    78764: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        {
            e.s({
                default: () => s
            });
            var l = e.i(26699);
            let a = {
                className: l.default.className,
                style: {
                    fontFamily: "'Roboto', 'Roboto Fallback'",
                    fontStyle: "normal"
                }
            };
            null != l.default.variable && (a.variable = l.default.variable);
            let s = a
        }
    }
    ,
    76293: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        {
            e.s({
                default: () => a
            });
            var l = e.i(31636)
              , t = e.i(58204);
            let a = ({icon: e="fa-regular fa-clock", title: a}) => (0,
            l.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0,
                l.jsx)(t.default, {
                    className: "mx-auto inline-block rounded-3xl border border-gray-300 bg-gray-950 !py-0",
                    children: (0,
                    l.jsx)("mark", {
                        className: "h-full  bg-transparent",
                        children: (0,
                        l.jsxs)("div", {
                            className: "mx-auto inline-flex items-center gap-x-2  px-6 py-2 text-gray-300",
                            children: [(0,
                            l.jsx)("i", {
                                className: e
                            }), (0,
                            l.jsx)("h3", {
                                role: "status",
                                className: "text-sm capitalize",
                                children: (0,
                                l.jsx)("strong", {
                                    children: a
                                })
                            })]
                        })
                    })
                })
            })
        }
    }
    ,
    35874: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        e.s({
            default: () => r
        });
        var l = e.i(31636)
          , t = e.i(21042)
          , i = e.i(38653);
        function r({description: e, image: a, title: s}) {
            let[r,n] = (0,
            i.useState)(!1);
            return (0,
            l.jsx)("div", {
                className: "glass-container group relative w-full cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl lg:max-h-[40rem]",
                onClick: () => {
                    n(e => !e)
                }
                ,
                onMouseLeave: () => {
                    n(!1)
                }
                ,
                children: (0,
                l.jsxs)("div", {
                    className: "glass-card",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "glass-front glass-details !min-h-[30em] !transform-none px-5",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "space-y-2 text-sm",
                            children: [(0,
                            l.jsx)("h3", {
                                className: "title !uppercase underline decoration-dotted underline-offset-4",
                                children: s
                            }), e]
                        }), (0,
                        l.jsx)("div", {
                            className: "bg-main-500 flex h-full w-full flex-1/2 items-center justify-center rounded-xl py-6 text-3xl font-bold",
                            children: "Click Me!"
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: (0,
                        t.default)("glass-back absolute", {
                            "rotate-y-0 transform-gpu transition-all delay-75 duration-700 ease-in-out": r
                        }),
                        children: (0,
                        l.jsx)("div", {
                            className: "absolute inset-0 mx-auto h-full w-full rounded-2xl bg-size-[90%_auto] bg-fixed bg-clip-border bg-center bg-no-repeat bg-origin-border !p-0",
                            style: {
                                backgroundImage: `url("${a}")`
                            }
                        })
                    })]
                })
            })
        }
    }
    ,
    57772: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        e.s({
            default: () => i
        });
        var l = e.i(31636)
          , t = e.i(21042);
        function i({children: e, blur: a=!0}) {
            return (0,
            l.jsxs)("div", {
                className: "relative inline-flex h-auto w-auto items-start justify-start py-0.5 text-white",
                children: [(0,
                l.jsx)("div", {
                    className: (0,
                    t.default)("animate-tilt via-main-200 to-main-500 absolute h-full w-full rounded-lg bg-gradient-to-br from-white", {
                        blur: !!a
                    })
                }), (0,
                l.jsx)("div", {
                    className: "bg-transparent relative inline-block h-auto w-auto overflow-hidden rounded-lg p-0",
                    children: e
                })]
            })
        }
    }
    ,
    48314: e => {
        "use strict";
        var {g: a, __dirname: s} = e;
        {
            e.s({
                default: () => g
            });
            var l = e.i(31636)
              , t = e.i(21042)
              , i = e.i(68082)
              , r = e.i(78764)
              , n = e.i(12568)
              , d = e.i(86240)
              , o = e.i(58204)
              , c = e.i(76293)
              , m = e.i(35874)
              , u = e.i(57772)
              , h = e.i(73650)
              , x = e.i(59808);
            let a = [{
                image: "/img/logo_t.png",
                title: "Turn Social Shares into Daily Earnings on MiAmor",
                description: (0,
                l.jsxs)("ul", {
                    className: "text-sm",
                    children: [(0,
                    l.jsx)("li", {
                        children: "📊 We grant you fractional parts, dividends, and stocks in MiAmor."
                    }), (0,
                    l.jsx)("li", {
                        children: "💹 As we grow, your shares grow in value."
                    }), (0,
                    l.jsx)("li", {
                        children: "💸 Sell your shares anytime, at your convenience."
                    }), (0,
                    l.jsx)("li", {
                        children: "👉 Become a part of something bigger—Join us now!"
                    })]
                })
            }, {
                image: "/img/miamor_k.jpg",
                title: "Love Beyond the Screen — Experience the MiAmor Love Trip",
                description: (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)("p", {
                        className: "text-sm font-medium",
                        children: "MiAmor bridges today's hustle with tomorrow's innovation."
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: ["5-day romantic getaway to South Africa.", "Find love. Win a journey. Make it unforgettable", "Collaborate with global creators", "Grow with a platform built for visionaries"].map( (e, a) => (0,
                        l.jsx)(u.default, {
                            blur: !1,
                            children: (0,
                            l.jsx)("div", {
                                className: "w-full rounded-lg border bg-black px-4 py-3 text-center text-xs",
                                children: (0,
                                l.jsx)("strong", {
                                    className: "!text-xs",
                                    children: e
                                })
                            }, a)
                        }, a))
                    })]
                })
            }, {
                image: "/img/miamor_store.jpg",
                title: "🏪 MIAMOR’S Sell It Sector — MiAmor’s Trusted Marketplace",
                description: (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)("p", {
                        className: "text-sm font-medium",
                        children: [" MiAmor isn’t just about love — it’s also about opportunity ", (0,
                        l.jsx)("br", {}), "With our Sell It Sector, every user gets access to a secure, user-friendly platform to trade legal items with ease."]
                    }), (0,
                    l.jsxs)("ul", {
                        className: "mt-3 space-y-2",
                        children: [(0,
                        l.jsx)("li", {
                            children: "No stress"
                        }), (0,
                        l.jsx)("li", {
                            children: "💰 Earn up to $20 every day."
                        }), (0,
                        l.jsx)("li", {
                            children: "💯 List. Connect. Sell."
                        })]
                    })]
                })
            }, {
                image: "/img/maimor_learning.jpg",
                title: "Where Learning Stops, Growth Stops — But Not on MiAmor.",
                description: (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)("p", {
                        className: "text-sm font-medium",
                        children: "Unleash Your Creative Power and master skills in"
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: ["Copywriting", "Graphic Design", "Development", "Content Creation", "E-commerce", "UI/UX", "Language Proficiency", "NFT Creations"].map( (e, a) => (0,
                        l.jsx)(u.default, {
                            blur: !1,
                            children: (0,
                            l.jsx)("div", {
                                className: "w-full rounded-lg border bg-black px-4 py-3 text-center text-xs",
                                children: (0,
                                l.jsx)("strong", {
                                    className: "!text-xs",
                                    children: e
                                })
                            }, a)
                        }, a))
                    })]
                })
            }, {
                image: "/img/miamor_challenge.jpg",
                title: "Introducing the MiAmor Couples Challenge – Love, Fun, and ₦300,000 Up for Grabs",
                description: (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)("p", {
                        className: "font-medium",
                        children: "It’s the season of love, and MiAmor is turning up the excitement! We've launched an exclusive"
                    }), ["💙 Couples Challenge for lovebirds on our platform, where the Top 3 winning couples will share ₦300,000 in cash prizes!"].map( (e, a) => (0,
                    l.jsx)(u.default, {
                        blur: !1,
                        children: (0,
                        l.jsx)("div", {
                            className: "w-full rounded-lg border bg-black px-4 py-3 text-center text-xs",
                            children: (0,
                            l.jsx)("strong", {
                                className: "!text-xs",
                                children: e
                            })
                        }, a)
                    }, a))]
                })
            }];
            function g() {
                return (0,
                l.jsx)("main", {
                    className: "",
                    children: (0,
                    l.jsxs)("section", {
                        className: "relative inset-0 w-full space-y-4",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "absolute inset-0",
                                children: [(0,
                                l.jsx)("video", {
                                    id: "overlay-video-1",
                                    className: "video",
                                    src: "/video/miamor.mp4",
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    loop: !1,
                                    onContextMenu: () => {}
                                    ,
                                    onEnded: e => {
                                        let a = document.getElementById("overlay-video-1")
                                          , s = document.getElementById("overlay-video-2");
                                        s && s.play(),
                                        a && (a.style.display = "none")
                                    }
                                }), (0,
                                l.jsx)("video", {
                                    id: "overlay-video-2",
                                    className: "video",
                                    src: "/video/miamor.mp4",
                                    autoPlay: !1,
                                    muted: !0,
                                    playsInline: !0,
                                    onContextMenu: () => {}
                                    ,
                                    loop: !0,
                                    style: {
                                        display: "none"
                                    },
                                    onPlay: e => e.currentTarget.style.display = "block",
                                    onEnded: e => {
                                        e.currentTarget.currentTime = 0,
                                        e.currentTarget.play()
                                    }
                                }), (0,
                                l.jsx)("script", {
                                    dangerouslySetInnerHTML: {
                                        __html: `
              (function() {
                var v1 = document.querySelector('video[src="/video/overlay_a.mp4"]');
                var v2 = document.getElementById('overlay-video-2');
                if (v2) {
                  v2.style.display = "none";
                  v2.onplay = function() { v2.style.display = "block"; };
                  v2.onended = function() { v2.currentTime = 0; v2.play(); };
                }
                if (v1 && v2) {
                  v1.onended = function() { v2.play(); };
                }
              })();
            `
                                    }
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "max-h-auto relative flex min-h-screen flex-col items-center justify-center bg-gray-950/45 pt-36 pb-12 md:items-start md:pt-48",
                                children: (0,
                                l.jsxs)("div", {
                                    className: "w-full max-w-2xl space-y-5 px-4 text-center md:space-y-8 md:px-12 md:text-left",
                                    children: [(0,
                                    l.jsxs)("div", {
                                        className: (0,
                                        t.default)(i.default.className, "space-y-2 text-3xl font-black md:space-y-3 md:text-5xl"),
                                        children: [(0,
                                        l.jsx)("h1", {
                                            className: "",
                                            children: "PRESENT IS PAST."
                                        }), (0,
                                        l.jsx)("h1", {
                                            className: "",
                                            children: "THE FUTURE IS LOVE!"
                                        })]
                                    }), (0,
                                    l.jsx)("p", {
                                        children: (0,
                                        l.jsx)("strong", {
                                            className: "text-base font-normal",
                                            children: "Miamor is an all-in-one digital platform that allows users to earn money, gain skills, and own shares in the company simply by participating. It combines play-to-earn gaming, skill-building through creative content and courses, and a unique ownership model where users can earn fractional company shares."
                                        })
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "flex w-full items-center justify-between",
                                        children: [{
                                            title: "Name",
                                            value: "Miamor"
                                        }, {
                                            title: "Country",
                                            value: "Nigeria"
                                        }, {
                                            title: "Currency",
                                            value: "USD"
                                        }].map( (e, a) => (0,
                                        l.jsxs)("div", {
                                            className: "",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "text-sm text-white/75",
                                                children: e.title
                                            }), (0,
                                            l.jsx)("p", {
                                                className: "text-lg font-bold",
                                                children: e.value
                                            })]
                                        }, a))
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col items-center gap-x-4 gap-y-5 md:flex-row md:items-stretch",
                                        children: [(0,
                                        l.jsx)(d.default, {
                                            href: "/register.html",
                                            className: "btn !px-8 md:!text-lg",
                                            children: "Join Us"
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "flex items-center gap-x-4 gap-y-3",
                                            children: [(0,
                                            l.jsx)(o.default, {
    target: "_blank",
    href: "https://google.com",
    children: (0,
    l.jsx)(n.default, {
        src: "/img/google_play.png",
        alt: "Download Miamor app on apple store",
        className: "w-32 rounded-lg border border-white",
        loading: "lazy",
        decoding: "async",
        width: 413,
        height: 122
    })
})
, (0,
                                            l.jsx)(o.default, {
                                                target: "_blank",
                                                children: (0,
                                                l.jsx)(n.default, {
                                                    src: "/img/apple_store.png",
                                                    alt: "Download Miamor app on apple store",
                                                    className: "w-32 rounded-lg border border-white",
                                                    loading: "lazy",
                                                    decoding: "async",
                                                    width: 413,
                                                    height: 122
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        l.jsxs)("main", {
                            className: "main space-y-16",
                            children: [(0,
                            l.jsxs)("section", {
                                className: "space-y-6",
                                children: [(0,
                                l.jsx)(c.default, {
                                    title: "Miamor: The Future is here!"
                                }), (0,
                                l.jsxs)("section", {
                                    className: "grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2",
                                    children: [(0,
                                    l.jsx)(p, {
                                        title: "Be part of the process",
                                        description: (0,
                                        l.jsxs)("div", {
                                            children: [(0,
                                            l.jsx)("p", {
                                                children: "Receive Bits & Shares of Miamor"
                                            }), (0,
                                            l.jsx)("p", {
                                                children: "As a user, you're more than just a member—you're a shareholder."
                                            }), (0,
                                            l.jsxs)("ul", {
                                                children: [(0,
                                                l.jsx)("li", {
                                                    children: "🎯 MiAmor is a dynamic platform operating across multiple African and foreign countries, designed to help users find love, earn income through networking, and gain valuable skills"
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "💹 As we grow, your shares grow in value."
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "💸 Sell your shares anytime, at your convenience."
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "👉 Become a part of something bigger—Join us now!"
                                                })]
                                            })]
                                        }),
                                        image: "/img/miamor_c.jpg"
                                    }), (0,
                                    l.jsx)(p, {
                                        title: "👩‍❤‍👨 Convert your feelings into cash with Miamor",
                                        description: (0,
                                        l.jsxs)("div", {
                                            children: [(0,
                                            l.jsx)("p", {
                                                children: "🤌Miamor isn’t just another regular platform— it’s where real emotions meet real rewards"
                                            }), (0,
                                            l.jsxs)("ul", {
                                                children: [(0,
                                                l.jsx)("li", {
                                                    children: "✨ Here, every connection, every conversation, and every spark of love has the power to earn you real cash"
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "🎁 Get rewarded with up to $50"
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "✅ Consistency pays off!"
                                                }), (0,
                                                l.jsx)("li", {
                                                    children: "👉 Follow the steps and join us now!"
                                                })]
                                            })]
                                        }),
                                        image: "/img/miamor_f.jpg"
                                    })]
                                })]
                            }), (0,
                            l.jsxs)("section", {
                                className: "space-y-6",
                                children: [(0,
                                l.jsx)(c.default, {
                                    title: "Join the movement"
                                }), (0,
                                l.jsxs)("section", {
                                    className: "space-y-3",
                                    children: [(0,
                                    l.jsx)("h2", {
                                        className: "text-3xl font-bold underline decoration-dotted underline-offset-4",
                                        children: "Miamor Game Feature"
                                    }), (0,
                                    l.jsx)(p, {
                                        title: "",
                                        description: (0,
                                        l.jsxs)("div", {
                                            className: "space-y-6",
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [(0,
                                                l.jsx)("h2", {
                                                    className: "text-2xl font-semibold",
                                                    children: "Play & Earn Real Cash"
                                                }), (0,
                                                l.jsxs)("div", {
                                                    className: "text-lg",
                                                    children: [(0,
                                                    l.jsx)("p", {
                                                        children: "Turn your favorite games into daily rewards!"
                                                    }), (0,
                                                    l.jsx)("p", {
                                                        children: "💰 Earn up to $20 per day just by playing games like:"
                                                    })]
                                                })]
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-2",
                                                children: [(0,
                                                l.jsxs)("div", {
                                                    className: "grid grid-rows-2 gap-0",
                                                    children: [(0,
                                                    l.jsx)(s, {
                                                        title: "Subway Surfers",
                                                        img: "/img/game/subway_surfers.jpg"
                                                    }), (0,
                                                    l.jsx)(s, {
                                                        title: "Chess",
                                                        type: "bottom",
                                                        img: "/img/game/chess.jpg"
                                                    })]
                                                }), (0,
                                                l.jsx)(s, {
                                                    title: "Temple Run",
                                                    type: "full",
                                                    img: "/img/game/temple_run.jpg"
                                                }), (0,
                                                l.jsxs)("div", {
                                                    className: "col-span-2 grid grid-cols-2 gap-0 sm:col-span-1 sm:grid-cols-1 sm:grid-rows-2",
                                                    children: [(0,
                                                    l.jsx)(s, {
                                                        title: "Ludo",
                                                        img: "/img/game/ludo.jpg"
                                                    }), (0,
                                                    l.jsx)(s, {
                                                        title: "Candy Crush",
                                                        type: "bottom",
                                                        img: "/img/game/candy_crush.jpg"
                                                    })]
                                                })]
                                            })]
                                        }),
                                        image: "/img/miamor_games.jpg"
                                    })]
                                })]
                            }), (0,
                            l.jsxs)("section", {
                                className: "space-y-6",
                                children: [(0,
                                l.jsx)(c.default, {
                                    title: "MiAmor Love Hamper – Where Love Comes with Surprises"
                                }), (0,
                                l.jsx)("div", {
                                    className: "relative",
                                    children: (0,
                                    l.jsx)(h.default, {
                                        infinite: !0,
                                        dots: !0,
                                        pauseOnHover: !0,
                                        autoplay: !0,
                                        autoplaySpeed: 4500,
                                        customPaging: () => (0,
                                        l.jsx)("div", {}),
                                        dotsClass: "py-2",
                                        appendDots: e => (0,
                                        l.jsx)("div", {
                                            children: (0,
                                            l.jsx)("ul", {
                                                className: "custom-slick-dot",
                                                children: e
                                            })
                                        }),
                                        children: a.map( (e, a) => (0,
                                        l.jsx)(m.default, {
                                            description: e.description,
                                            image: e.image,
                                            title: e.title
                                        }, a))
                                    })
                                }), (0,
                                l.jsxs)("section", {
                                    className: "flex flex-col items-center justify-center gap-x-4 gap-y-4 md:flex-row",
                                    children: [(0,
                                    l.jsxs)(d.default, {
                                        href: "/register.html",
                                        className: "btn w-full md:w-auto",
                                        children: [(0,
                                        l.jsx)("i", {
                                            className: "fa-solid fa-user-plus"
                                        }), (0,
                                        l.jsx)("span", {
                                            children: "Register"
                                        })]
                                    }), (0,
                                    l.jsxs)(d.default, {
                                        href: "/downloads.html",
                                        className: "btn w-full !bg-gray-200 md:w-auto",
                                        children: [(0,
                                        l.jsx)("i", {
                                            className: "fa-solid fa-download"
                                        }), (0,
                                        l.jsx)("span", {
                                            children: "Download app"
                                        })]
                                    })]
                                }), (0,
                                l.jsxs)("section", {
                                    className: "glass space-y-8 py-12",
                                    children: [(0,
                                    l.jsx)("h2", {
                                        className: "text-main-500 text-center text-2xl font-black underline decoration-dotted underline-offset-4 md:text-3xl",
                                        children: "Download Mobile App"
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-x-2 gap-y-5 md:flex-row md:gap-10",
                                        children: [(0,
                                        l.jsx)(o.default, {
    target: "_blank",
    href: "https://google.com",
    children: (0,
    l.jsx)(n.default, {
        src: "/img/google_play.png",
        alt: "Download Miamor app on google play store",
        className: "w-full rounded-lg border border-white md:w-56",
        width: 400,
        height: 400
    })
})
, (0,
                                        l.jsx)(o.default, {
                                            target: "_blank",
                                            children: (0,
                                            l.jsx)(n.default, {
                                                src: "/img/apple_store.png",
                                                alt: "Download Miamor app on apple store",
                                                className: "w-full rounded-lg border border-white md:w-56",
                                                width: 400,
                                                height: 400
                                            })
                                        })]
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    className: "hidden",
                                    children: (0,
                                    l.jsx)(p, {
                                        title: "Turn Social Shares into Daily Earnings on MiAmor",
                                        blur: !1,
                                        description: (0,
                                        l.jsx)(l.Fragment, {
                                            children: "🔵Love creating content on TikTok and Facebook? With MiAmor, every share is a money-making opportunity. 🔵 Earn up to $2.5 daily just for sharing your videos to TikTok or Facebook directly from MiAmor"
                                        }),
                                        image: "/img/logo_t.png"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            let s = ({title: e, img: a, type: s="top"}) => {
                let {data: i} = (0,
                x.useAgentInfo)();
                return (0,
                l.jsxs)("div", {
                    className: (0,
                    t.default)("group border-main-100 relative flex cursor-pointer flex-col overflow-hidden shadow-none shadow-gray-800 hover:shadow-lg md:border-2", {
                        "md:!rounded-t-xl md:!rounded-b-none": "top" == s,
                        "md:!rounded-t-none md:!rounded-b-xl": "bottom" == s,
                        "md:!rounded-xl": "full" == s
                    }),
                    onClick: e => {
                        setTimeout( () => {
                            i?.whatsapp_link && (window.open("i.whatsapp_link", ""),
                            gtag_report_conversion())
                        }
                        , 1500)
                    }
                    ,
                    children: [(0,
                    l.jsx)(n.default, {
                        alt: `${e} Image - Miamor`,
                        src: a,
                        className: (0,
                        t.default)("h-full w-full rounded-t-xl object-cover shadow-md shadow-gray-800", {
                            "max-h-48": "full" != s,
                            "!rounded-none": "bottom" == s
                        }),
                        width: 1024,
                        height: 1080
                    }), (0,
                    l.jsxs)("div", {
                        className: "bg-main-950/75 absolute inset-0 flex flex-col items-center justify-center gap-1.5 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100",
                        children: [(0,
                        l.jsx)("i", {
                            className: "fa-solid fa-gamepad fa-2x tex`t-gray-300"
                        }), (0,
                        l.jsxs)("span", {
                            className: "text-sm",
                            children: ["Play", " ", (0,
                            l.jsxs)("span", {
                                className: "underline decoration-dotted underline-offset-4",
                                children: [e, "!"]
                            })]
                        })]
                    })]
                })
            }
              , p = ({title: e, description: a, image: s, blur: i=!0}) => (0,
            l.jsxs)("section", {
                className: "glass section",
                children: [(0,
                l.jsx)("h2", {
                    className: "title",
                    children: e
                }), (0,
                l.jsxs)("div", {
                    className: "section-grid",
                    children: [(0,
                    l.jsx)("div", {
                        className: (0,
                        t.default)(r.default.className, "section-title"),
                        children: a
                    }), (0,
                    l.jsx)(o.default, {
                        target: "_blank",
                        children: (0,
                        l.jsx)(u.default, {
                            blur: i,
                            children: (0,
                            l.jsx)(n.default, {
                                src: s,
                                alt: "Miamor Main Image",
                                className: "bg-background mx-auto w-full rounded-lg",
                                width: 1024,
                                height: 1280
                            })
                        })
                    })]
                })]
            })
        }
    }
}]);
