(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["object" == typeof document ? document.currentScript : void 0, {
    97578: e => {
        "use strict";
        var {g: a, __dirname: r} = e;
        {
            e.s({
                default: () => i
            });
            var t = e.i(31636)
              , o = e.i(21042)
              , s = e.i(38653)
              , n = e.i(888);
            let a = [{
            question: "What is Miamor?",
            answer: "Miamor is a next-generation digital platform where users can play games, publish articles, share content, and grow their social influence — all while earning real rewards like cash, data, and ownership shares."
        }, {
            question: "How do I start earning on Miamor?",
            answer: "You can earn on Miamor by playing supported games, writing articles, completing social streak challenges, referring others, and participating in creator programs like TikTok monetization."
        }, {
            question: "Is there a joining bonus?",
            answer: "Yes! All new users get 5GB of free data on their preferred network as a welcome gift. This helps you get started without spending a dime."
        }, {
            question: "How does 'Play & Earn' work?",
            answer: "Simply log in daily and play games listed on the platform. You'll earn cash rewards — up to $20 per day — based on your activity and performance."
        }, {
            question: "Can I earn money by writing articles?",
            answer: "Yes. Every article you publish earns you money for every view it receives. The more engagement your content generates, the more you earn."
        }, {
            question: "What is the 25-Day Streak Challenge?",
            answer: "This is a social media challenge where you post Miamor-themed videos daily for 25 days. Completing the challenge earns you up to $50 and increases your visibility and followers."
        }, {
            question: "How do I earn from referrals or team activity?",
            answer: "Miamor has a dual-direction referral reward system. You earn passively from both your uplines' (superior's) success and your downline team's activities, creating a circular income loop."
        }, {
            question: "What are Miamor Shares?",
            answer: "As an active user, you receive fractional shares of the Miamor company. These shares grow in value over time and can be sold whenever you choose."
        }, {
            question: "How do I boost my content visibility?",
            answer: "Use the Miamor Social Boast tool to amplify your content reach. It helps you attract more views, clicks, and followers organically or through challenges."
        }, {
            question: "What is the Miamor Reward Blueprint?",
            answer: "It's our structured system of daily, weekly, and milestone rewards — based on actions like writing, sharing, playing, inviting, and more. You earn tokens, data, badges, and cash."
        }, {
            question: "Is Miamor available in all countries?",
            answer: "Currently, Miamor is optimized for users in Nigeria and select regions. However, we're expanding rapidly, and international users can join and benefit where supported."
        }, {
            question: "How do I withdraw my earnings?",
            answer: "Withdrawals can be made via bank transfer, airtime top-up, or other supported payout options. Just head to your wallet and request a payout when your balance meets the minimum threshold."
        }, {
            question: "Is there a mobile app for Miamor?",
            answer: "Yes, the Miamor app will be available for Android and iOS. You can also access the platform from any browser on mobile or desktop."
        }, {
            question: "Can I sell my Miamor shares?",
            answer: "Yes. You can sell your fractional shares on our platform-based marketplace or through periodic buyback programs, depending on current policies."
        }, {
            question: "How do I join Miamor?",
            answer: "To join the Miamor platform, like the post, comment 'I want to register on Miamor', and chat the WhatsApp number on the bio to begin your registration."
        }, {
            question: "Do I need referrals to earn on Miamor?",
            answer: "No, you can earn without referrals. But referring others increases your rewards and builds your passive income over time."
        }, {
            question: "What makes Miamor different from other platforms?",
            answer: "Miamor combines social media, e-learning, gaming, and profit-sharing in one platform — giving you multiple income streams in one place."
        }];

            function i() {
                let e = (0,
                s.useRef)(null)
                  , [r,i] = (0,
                s.useState)(null)
                  , l = a => {
                    let r = e.current;
                    if (r) {
                        if (!a)
                            return void r.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        let e = document.getElementById(a);
                        if (e) {
                            let t = e.offsetTop - (e.offsetHeight + 20);
                            console.log(t),
                            r.scrollTo({
                                top: t,
                                behavior: "smooth"
                            }),
                            i(a)
                        }
                    }
                }
                ;
                return (0,
                s.useEffect)( () => {
                    let a = e.current;
                    if (!a)
                        return;
                    let t = () => {
                        let e = Array.from(a.children)
                          , t = a.scrollTop
                          , o = null;
                        for (let a of e) {
                            let e = a.offsetTop
                              , r = a.offsetHeight;
                            if ("can-i-earn-money-by-writing-articles" == a.id && console.log(t >= e ? "<<<< section >>>>" : "section", a.id, t, e - (r + 50), e + r - 50, t >= e - (r + 50), t < e + r - 120),
                            t >= e - (r + 50) && t < e + r - 120) {
                                o = a.id;
                                break
                            }
                        }
                        o && o !== r && i(o)
                    }
                    ;
                    return a.addEventListener("scroll", t),
                    () => a.removeEventListener("scroll", t)
                }
                , [r]),
                (0,
                t.jsxs)("main", {
                    className: "main relative",
                    children: [(0,
                    t.jsx)("h1", {
                        className: "text-center text-3xl font-bold underline decoration-dotted underline-offset-4",
                        children: "Frequently Asked Questions"
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 py-5 md:grid-cols-3",
                        children: [(0,
                        t.jsx)("div", {
                            className: "top-0 overflow-y-auto px-4 py-1.5 md:sticky",
                            children: a.map( (e, a) => {
                                let s = (0,
                                n.createSlug)(e.question);
                                return (0,
                                t.jsx)("div", {
                                    className: (0,
                                    o.default)("cursor-pointer py-2 text-sm", {
                                        "text-main-600 font-extrabold": s === r
                                    }),
                                    onClick: () => l(s),
                                    children: e.question
                                }, a)
                            }
                            )
                        }), (0,
                        t.jsx)("div", {
                            className: "col-span-2 h-screen overflow-y-auto px-4 md:px-10",
                            ref: e,
                            children: a.map( (e, a) => (0,
                            t.jsxs)("div", {
                                id: (0,
                                n.createSlug)(e.question),
                                className: "my-10",
                                children: [(0,
                                t.jsx)("h2", {
                                    className: "mb-2 text-xl font-bold",
                                    children: e.question
                                }), (0,
                                t.jsx)("p", {
                                    children: e.answer
                                })]
                            }, a))
                        })]
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        onClick: () => {
                            l()
                        }
                        ,
                        className: "bg-main-500 fixed right-5 bottom-8 cursor-pointer rounded-md px-4 py-2 text-white",
                        children: (0,
                        t.jsx)("i", {
                            className: "fa-solid fa-arrow-up"
                        })
                    })]
                })
            }
        }
    }
}]);

//# sourceMappingURL=002ecadf2e582f0a.js.map