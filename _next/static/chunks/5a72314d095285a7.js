(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["object" == typeof document ? document.currentScript : void 0, {
    78461: e => {
        "use strict";
        var {g: t, __dirname: s} = e;
        e.s({
            default: () => i
        });
        var l = e.i(31636)
          , d = e.i(21042);
        function i(e) {
            let {type: t, arrowClassName: s, className: i, onClick: a, iconClassName: r} = e;
            return (0,
            l.jsx)("button", {
                type: "button",
                className: (0,
                d.default)("bg-main-600/60 shadow-main-400 absolute top-[50%] z-40 flex cursor-pointer items-center justify-center rounded-md p-1 text-3xl shadow-sm transition-all duration-100 ease-in-out", {
                    "right-2": "next" == t,
                    "left-2": "prev" == t,
                    hidden: !!i?.includes("slick-disabled"),
                    block: !i?.includes("slick-disabled")
                }, s),
                onClick: a,
                children: "prev" == t && (0,
                l.jsx)("svg", {
                    className: (0,
                    d.default)("h-7 w-7 text-white", r),
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0,
                    l.jsx)("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        d: "m15 19-7-7 7-7"
                    })
                }) || (0,
                l.jsx)("svg", {
                    className: (0,
                    d.default)("h-7 w-7 text-white", r),
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0,
                    l.jsx)("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        d: "m9 5 7 7-7 7"
                    })
                })
            })
        }
    }
    ,
    29294: e => {
        "use strict";
        var {g: t, __dirname: s} = e;
        {
            e.s({
                BlogKeyword: () => t,
                default: () => g
            });
            var l = e.i(31636)
              , d = e.i(97434)
              , i = e.i(78461)
              , a = e.i(76487)
              , r = e.i(59808)
              , n = e.i(888)
              , o = e.i(21042)
              , c = e.i(6522)
              , u = e.i(19948)
              , m = e.i(86240)
              , x = e.i(38653)
              , h = e.i(73650);
            let t = ({text: e}) => (0,
            l.jsx)("span", {
                className: "bg-main-200 rounded-md px-2 text-xs text-gray-700",
                children: (0,
                l.jsx)("strong", {
                    children: c.default.trim(e)
                })
            })
              , s = ({align: e="col", title: s, content: i, keywords: a=d.default.keywords.join(", "), slug: r, createdAt: h, updatedAt: g, images: f}) => {
                let[p,w] = (0,
                x.useState)(!1)
                  , j = c.default.find(f?.srcset, e => 3e3 == Number(e?.width))?.path?.replace("assets/", "");
                return (0,
                l.jsxs)(m.default, {
                    href: `/blog/${r}`,
                    rel: "follow",
                    className: (0,
                    o.default)("mx-2 grid rounded-xl p-0 shadow-xs shadow-gray-400", {
                        "my-2 grid-cols-1 items-stretch": "col" == e,
                        "grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:border md:border-gray-400": "row" == e
                    }),
                    onMouseEnter: () => {
                        w(!0)
                    }
                    ,
                    onMouseLeave: () => {
                        w(!1)
                    }
                    ,
                    children: [(0,
                    l.jsx)("div", {
                        className: (0,
                        o.default)("relative bg-white", {
                            "rounded-t-xl": "col" == e,
                            "rounded-tl-xl rounded-tr-xl rounded-bl-none md:rounded-tr-none md:rounded-bl-xl": "row" == e
                        }),
                        children: (0,
                        l.jsx)("div", {
                            className: (0,
                            o.default)("bg-main-400/75 w-full bg-center bg-no-repeat", {
                                "h-72 rounded-t-xl": "col" == e,
                                "h-full min-h-72 rounded-tl-xl rounded-tr-xl rounded-bl-none md:min-h-auto md:rounded-tr-none md:rounded-bl-xl": "row" == e,
                                "bg-cover": j,
                                "bg-[50%,50%]": !j
                            }),
                            style: {
                                backgroundImage: `url(${j ? `${d.default.backend_media_url}/${j}` : "/img/logo_h_t.png"})`
                            }
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: "space-y-2 px-3 py-3 text-gray-100",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "text-2xl font-extrabold transition-all duration-150 ease-linear",
                            children: "col" != e || p ? s : c.default.truncate(s, {
                                length: 30,
                                omission: "...",
                                separator: ","
                            })
                        }), (0,
                        l.jsx)("div", {
                            children: c.default.truncate((0,
                            n.stripHtml)(i), {
                                length: "col" == e ? 100 : 250,
                                omission: "..."
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "bg-main-500 shadow-main-300 inline-block self-end rounded-md px-2 text-sm text-gray-700 shadow-sm",
                            children: (0,
                            l.jsx)("strong", {
                                children: (0,
                                u.default)((0,
                                n.fm)(h)).format("Do MMMM YYYY h:mma")
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-wrap gap-x-0.5 gap-y-2",
                            children: a && c.default.take(c.default.split(a, ","), 5).map( (e, s) => (0,
                            l.jsx)(t, {
                                text: e
                            }, s))
                        }), (0,
                        l.jsxs)("div", {
                            className: "hidden",
                            children: [(0,
                            l.jsx)("h1", {
                                children: "Important Keywords"
                            }), (0,
                            l.jsx)("p", {
                                children: a
                            })]
                        })]
                    })]
                })
            }
            ;
            function g() {
                let {data: e, isFetching: t} = (0,
                r.useBlogs)(r.featureBlogInt)
                  , {data: d, hasNextPage: n, fetchNextPage: c} = (0,
                r.useInfiniteBlog)();
                return (0,
                l.jsx)("section", {
                    className: (0,
                    o.default)("main", {
                        "flex min-h-[50vh] w-full items-center justify-center": t
                    }),
                    children: t && (0,
                    l.jsx)(a.default, {}) || (0,
                    l.jsxs)("main", {
                        className: "space-y-8",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "space-y-1.5",
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-main-500 text-3xl font-extrabold underline decoration-dotted underline-offset-4",
                                children: "Featured Blogs"
                            }), (0,
                            l.jsx)("p", {
                                className: "text-base font-medium text-white",
                                children: "Learn more about Miamor and how to make effective use of it."
                            }), e && e.length > 0 && (0,
                            l.jsx)("div", {
                                className: "group relative mt-6 w-full text-white",
                                children: (0,
                                l.jsx)(h.default, {
                                    cssEase: "linear",
                                    infinite: !1,
                                    arrows: !0,
                                    dots: !1,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    responsive: [{
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 3,
                                            infinite: !0,
                                            dots: !0
                                        }
                                    }, {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2
                                        }
                                    }, {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    }],
                                    nextArrow: (0,
                                    l.jsx)(i.default, {
                                        type: "next",
                                        arrowClassName: "block animate-slideright md:!-right-9"
                                    }),
                                    prevArrow: (0,
                                    l.jsx)(i.default, {
                                        type: "prev",
                                        arrowClassName: "block animate-slideleft md:!-left-9"
                                    }),
                                    customPaging: () => (0,
                                    l.jsx)(l.Fragment, {}),
                                    appendDots: e => (0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsx)("ul", {
                                            className: "custom-slick-dot",
                                            children: e
                                        })
                                    }),
                                    children: e.map( (e, t) => (0,
                                    l.jsx)(s, {
                                        ...e
                                    }, t))
                                })
                            }) || (0,
                            l.jsx)("div", {
                                className: "mt-5 rounded-lg bg-gray-700 px-4 py-3 text-center text-lg font-bold",
                                children: (0,
                                l.jsx)("p", {
                                    children: "No Blog Found"
                                })
                            })]
                        }), d && d?.pages?.length > 0 && (0,
                        l.jsxs)("div", {
                            className: "space-y-1.5",
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-main-500 text-3xl font-extrabold underline decoration-dotted underline-offset-4",
                                children: "Editor's List"
                            }), (0,
                            l.jsxs)("div", {
                                className: "space-y-4 py-3 transition-all duration-500 ease-in-out",
                                children: [d.pages.map(e => e.map( (e, t) => (0,
                                l.jsx)(s, {
                                    align: "row",
                                    ...e
                                }, t))), n && (0,
                                l.jsx)("button", {
                                    type: "button",
                                    className: "btn mx-auto mt-6",
                                    onClick: () => c(),
                                    children: "Load More"
                                })]
                            })]
                        })]
                    })
                })
            }
        }
    }
}]);
