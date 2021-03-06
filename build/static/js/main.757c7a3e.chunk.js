(this["webpackJsonpportfolio-site"] = this["webpackJsonpportfolio-site"] || []).push([
    [0], {
        43: function(e, t, a) {
            e.exports = a.p + "static/media/website.07105d67.jpg"
        },
        44: function(e, t, a) {
            e.exports = a.p + "static/media/django.d362eab3.jpg"
        },
        45: function(e, t, a) {
            e.exports = a.p + "static/media/racket.bea696ce.jpg"
        },
        50: function(e, t, a) {
            e.exports = a(64)
        },
        55: function(e, t, a) {},
        56: function(e, t, a) {},
        64: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                i = a(27),
                r = a.n(i),
                c = (a(55), a(6)),
                s = a(10),
                m = a(8),
                o = a(7),
                u = a(9),
                d = a(25),
                h = a(20),
                b = (a(56), a(14)),
                E = a(26),
                p = a(49),
                f = a(18),
                g = a(15);
            var k = function() {
                    return l.a.createElement("footer", {
                        className: "mt-5"
                    }, l.a.createElement(b.a, {
                        fluid: !0
                    }, l.a.createElement(f.a, {
                        className: "border-top justify-content-between p-3"
                    }, l.a.createElement(g.a, {
                        className: "p-0",
                        md: 3,
                        sm: 12
                    }), l.a.createElement(g.a, {
                        className: "p-0 d-flex justify-content-end",
                        md: 3
                    }, "This site was made by Kyle Seto."))))
                },
                v = a(42);
            var y = function(e) {
                    return l.a.createElement(v.a, {
                        className: "bg-transparent jumbotron-fluid p-0"
                    }, l.a.createElement(b.a, {
                        fluid: !0
                    }, l.a.createElement(f.a, {
                        className: "justify-content-center py-5"
                    }, l.a.createElement(g.a, {
                        md: 8,
                        sm: 12
                    }, e.title && l.a.createElement("h1", {
                        className: "display-1 font-weight-bolder"
                    }, e.title), e.subTitle && l.a.createElement("h3", {
                        className: "display-4 font-weight-light"
                    }, e.subTitle), e.text && l.a.createElement("h3", {
                        className: "lead font-weight-light"
                    }, e.text)))))
                },
                j = a(24),
                N = a(34);
            var S = function(e) {
                var t = Object(N.b)({
                    opacity: 1,
                    from: {
                        opacity: 0
                    }
                });
                return l.a.createElement(N.a.div, {
                    className: "k-card-info",
                    style: t
                }, l.a.createElement("p", {
                    className: "k-card-title"
                }, e.title), l.a.createElement("p", {
                    className: "k-card-sub-title"
                }, e.subTitle), l.a.createElement("a", {
                    href: e.link,
                    target: " blank",
                    rel: "noopener noreferrer"
                }, "See More"))
            };
            var w = function(e) {
                    return l.a.createElement("div", {
                        className: "d-inline-block k-card",
                        onClick: function() {
                            return e.click(e.item)
                        }
                    }, l.a.createElement("img", {
                        className: "k-card-image",
                        src: e.item.imgSrc,
                        alt: e.item.imgSrc
                    }), e.item.selected && l.a.createElement(S, {
                        title: e.item.title,
                        subTitle: e.item.subTitle,
                        link: e.item.link
                    }))
                },
                C = a(43),
                x = a.n(C),
                O = a(44),
                T = a.n(O),
                I = a(45),
                A = a.n(I),
                F = function(e) {
                    function t(e) {
                        var a;
                        return Object(c.a)(this, t), (a = Object(m.a)(this, Object(o.a)(t).call(this, e))).handleCardClick = function(e, t) {
                            var n = Object(j.a)(a.state.items);
                            n[e].selected = !n[e].selected, n.forEach((function(t) {
                                t.id !== e && (t.selected = !1)
                            })), a.setState({
                                items: n
                            })
                        }, a.makeItems = function(e) {
                            return e.map((function(e) {
                                return l.a.createElement(w, {
                                    item: e,
                                    click: function(t) {
                                        return a.handleCardClick(e.id, t)
                                    },
                                    key: e.id
                                })
                            }))
                        }, a.state = {
                            items: [{
                                id: 0,
                                title: "Kyle Seto",
                                subTitle: "Personal Portfolio Website",
                                imgSrc: x.a,
                                link: "https://kyleseto2.github.io",
                                selected: !1
                            }, {
                                id: 1,
                                title: "Django Polls App",
                                subTitle: "My First WebApp",
                                imgSrc: T.a,
                                link: "https://www.github.com",
                                selected: !1
                            }, {
                                id: 2,
                                title: "Racket Assignments",
                                subTitle: "RPS bot",
                                imgSrc: A.a,
                                link: "https://kyleseto2.github.io",
                                selected: !1
                            }]
                        }, a
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement(b.a, {
                                fluid: !0
                            }, l.a.createElement(f.a, {
                                className: "justify-content-around"
                            }, this.makeItems(this.state.items)))
                        }
                    }]), t
                }(l.a.Component);
            var K = function(e) {
                return l.a.createElement("div", null, l.a.createElement(y, {
                    title: e.title,
                    subTitle: e.subTitle,
                    text: e.text
                }), l.a.createElement(F, null))
            };
            var L = function(e) {
                return l.a.createElement(b.a, {
                    fluid: !0
                }, l.a.createElement(f.a, {
                    className: "justify-content-center"
                }, l.a.createElement(g.a, {
                    md: 8
                }, e.children)))
            };
            var M = function(e) {
                    return l.a.createElement("div", null, l.a.createElement(y, {
                        title: e.title
                    }), l.a.createElement(L, null, l.a.createElement("p", null, "Hi, I'm Kyle. I'm a second year mathematics student at the University of Waterloo. "), l.a.createElement("p", null, "My hobbies are mountain biking, skiing, and travelling."), l.a.createElement("p", null, "I am constantly learning new things. Currently starting out with learning Node JS, React."), l.a.createElement("p", null, "I am currently working on creating widgets.")))
                },
                P = a(23),
                W = a(13),
                B = a(46),
                G = function(e) {
                    function t(e) {
                        var a;
                        return Object(c.a)(this, t), (a = Object(m.a)(this, Object(o.a)(t).call(this, e))).handleChange = function(e) {
                            var t = e.target,
                                n = "checkbox" === t.type ? t.checked : t.value,
                                l = t.name;
                            a.setState(Object(P.a)({}, l, n))
                        }, a.handleSubmit = function(e) {
                            e.preventDefault(), a.setState({
                                disabled: !0,
                                emailSent: !0
                            })
                        }, a.state = {
                            name: "",
                            email: "",
                            message: "",
                            disabled: !1,
                            emailSent: null
                        }, a
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", null, l.a.createElement(y, {
                                title: this.props.title
                            }), l.a.createElement(L, null, l.a.createElement(W.a, {
                                onSubmit: this.handleSubmit
                            }, l.a.createElement(W.a.Group, null, l.a.createElement(W.a.Label, {
                                htmlFor: "full-name"
                            }, "Full Name"), l.a.createElement(W.a.Control, {
                                id: "full-name",
                                name: "name",
                                type: "text",
                                value: this.state.name,
                                onChange: this.handleChange
                            })), l.a.createElement(W.a.Group, null, l.a.createElement(W.a.Label, {
                                htmlFor: "email"
                            }, "Email"), l.a.createElement(W.a.Control, {
                                id: "email",
                                name: "email",
                                type: "text",
                                value: this.state.email,
                                onChange: this.handleChange
                            })), l.a.createElement(W.a.Group, null, l.a.createElement(W.a.Label, {
                                htmlFor: "message"
                            }, "Message"), l.a.createElement(W.a.Control, {
                                id: "message",
                                name: "message",
                                as: "textarea",
                                rows: "3",
                                value: this.state.message,
                                onChange: this.handleChange
                            })), l.a.createElement(B.a, {
                                className: "d-inline-block",
                                variant: "primary",
                                type: "submit",
                                disabled: this.state.disabled
                            }, "Send"), !0 === this.state.emailSent && l.a.createElement("p", {
                                className: "d-inline success-msg"
                            }, "Email Sent"), !1 === this.state.emailSent && l.a.createElement("p", {
                                className: "d-inline err-msg"
                            }, "Email Not Sent"))))
                        }
                    }]), t
                }(l.a.Component),
                H = function(e) {
                    function t(e) {
                        var a;
                        return Object(c.a)(this, t), (a = Object(m.a)(this, Object(o.a)(t).call(this, e))).state = {
                            title: "Kyle Seto",
                            headerLinks: [{
                                title: "Home",
                                path: "/"
                            }, {
                                title: "About",
                                path: "/about"
                            }, {
                                title: "Contact",
                                path: "/contact"
                            }],
                            home: {
                                title: "Hello",
                                subTitle: "Check out some of my projects",
                                text: "click to preview"
                            },
                            about: {
                                title: "About Me"
                            },
                            contact: {
                                title: "Let's Talk"
                            }
                        }, a
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return l.a.createElement(d.a, null, l.a.createElement(b.a, {
                                className: "p-0",
                                fluid: !0
                            }, l.a.createElement(E.a, {
                                className: "border-bottom",
                                bg: "transparent",
                                expand: "lg"
                            }, l.a.createElement(E.a.Brand, null, "Kyle Seto"), l.a.createElement(E.a.Toggle, {
                                className: "border-0",
                                "aria-controls": "navbar-toggle"
                            }), l.a.createElement(E.a.Collapse, {
                                id: "navbar-toggle"
                            }, l.a.createElement(p.a, {
                                className: "ml-auto"
                            }, l.a.createElement(d.b, {
                                className: "nav-link",
                                to: "/"
                            }, "Home"), l.a.createElement(d.b, {
                                className: "nav-link",
                                to: "/about"
                            }, "About"), l.a.createElement(d.b, {
                                className: "nav-link",
                                to: "/contact"
                            }, "Contact")))), l.a.createElement(h.a, {
                                path: "/",
                                exact: !0,
                                render: function() {
                                    return l.a.createElement(K, {
                                        title: e.state.home.title,
                                        subTitle: e.state.home.subTitle,
                                        text: e.state.home.text
                                    })
                                }
                            }), l.a.createElement(h.a, {
                                path: "/about",
                                render: function() {
                                    return l.a.createElement(M, {
                                        title: e.state.about.title
                                    })
                                }
                            }), l.a.createElement(h.a, {
                                path: "/contact",
                                render: function() {
                                    return l.a.createElement(G, {
                                        title: e.state.contact.title
                                    })
                                }
                            }), l.a.createElement(k, null)))
                        }
                    }]), t
                }(l.a.Component);

            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            a(63);
            r.a.render(l.a.createElement(H, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [50, 1, 2]
    ]
]);
//# sourceMappingURL=main.757c7a3e.chunk.js.map