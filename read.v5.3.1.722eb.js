(function(e) {
	function t(t) {
		for (var i, r, o = t[0], c = t[1], l = t[2], d = 0, h = []; d < o.length; d++) r = o[d],
		n[r] && h.push(n[r][0]),
		n[r] = 0;
		for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
		u && u(t);
		while (h.length) h.shift()();
		return s.push.apply(s, l || []),
		a()
	}
	function a() {
		for (var e, t = 0; t < s.length; t++) {
			for (var a = s[t], i = !0, o = 1; o < a.length; o++) {
				var c = a[o];
				0 !== n[c] && (i = !1)
			}
			i && (s.splice(t--, 1), e = r(r.s = a[0]))
		}
		return e
	}
	var i = {},
	n = {
		read: 0
	},
	s = [];
	function r(t) {
		if (i[t]) return i[t].exports;
		var a = i[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, r),
		a.l = !0,
		a.exports
	}
	r.m = e,
	r.c = i,
	r.d = function(e, t, a) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	},
	r.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (r.r(a), Object.defineProperty(a, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var i in e) r.d(a, i,
		function(t) {
			return e[t]
		}.bind(null, i));
		return a
	},
	r.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e["default"]
		}: function() {
			return e
		};
		return r.d(t, "a", t),
		t
	},
	r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	},
	r.p = "/";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
	c = o.push.bind(o);
	o.push = t,
	o = o.slice();
	for (var l = 0; l < o.length; l++) t(o[l]);
	var u = c;
	s.push([0, "chunk-vendors"]),
	a()
})({
	0 : function(e, t, a) {
		e.exports = a("56d7")
	},
	1 : function(e, t) {},
	1324 : function(e, t, a) {
		e.exports = a.p + "static/read/img/readbook.21e4786e.png"
	},
	2 : function(e, t) {},
	"20c1": function(e, t, a) {},
	"2e29": function(e, t, a) {
		"use strict";
		var i = a("f669"),
		n = a.n(i);
		n.a
	},
	3 : function(e, t) {},
	3875 : function(e, t, a) {
		"use strict";
		var i = a("3e78"),
		n = a.n(i);
		n.a
	},
	"3e78": function(e, t, a) {},
	4 : function(e, t) {},
	"4ba6": function(e, t, a) {},
	"56d7": function(e, t, a) {
		"use strict";
		a.r(t);
		a("7f7f"),
		a("cadf"),
		a("551c"),
		a("f751"),
		a("097d");
		var i = a("2b0e"),
		n = a("5c96"),
		s = a.n(n),
		r = (a("b059"), a("0fae"),
		function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				attrs: {
					id: "app"
				}
			},
			[e.isRouterAlive ? a("router-view") : e._e(), a("Upperlimit")], 1)
		}),
		o = [],
		c = function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", [a("el-dialog", {
				attrs: {
					center: "",
					title: "超限提醒",
					visible: e.centerDialogVisible,
					width: "400px",
					"custom-class": "baUserNoPermissionDialog"
				},
				on: {
					close: e.onClose
				}
			},
			[a("span", {
				staticClass: "content"
			},
			[e._v("\n      您来晚了一步，已经有别人在学习这本书了哦!\n    ")]), a("span", {
				staticClass: "content"
			},
			[e._v("\n      您可以先去看看其他感兴趣的书!\n    ")])])], 1)
		},
		l = [],
		u = (a("a481"), {
			name: "Upperlimit",
			data: function() {
				return {
					loginurl: "https://www.wqxuetang.com/login/loginon.html?refer=" + encodeURIComponent(document.URL)
				}
			},
			computed: {
				centerDialogVisible: {
					get: function() {
						return this.$store.state.UpperlimitVisible
					},
					set: function(e) {
						this.$store.commit("UpperlimitVisible", e)
					}
				}
			},
			methods: {
				onClose: function() {
					this.$store.commit("UpperlimitVisible", !1);
					var e = this.$store.state.UpperlimitVisibleBid;
					this.$router.replace("/Book/" + e,
					function() {
						window.location.reload()
					})
				}
			}
		}),
		d = u,
		h = a("2877"),
		p = Object(h["a"])(d, c, l, !1, null, null, null),
		g = p.exports,
		f = {
			name: "App",
			components: {
				Upperlimit: g
			},
			data: function() {
				return {
					isRouterAlive: !0
				}
			},
			watch: {
				$route: function(e, t) {
					e.name === t.name && this.reload()
				}
			},
			provide: function() {
				return {
					reload: this.reload
				}
			},
			methods: {
				reload: function() {
					var e = this;
					this.isRouterAlive = !1,
					this.$nextTick(function() {
						return e.isRouterAlive = !0
					})
				}
			}
		},
		m = f,
		A = Object(h["a"])(m, r, o, !1, null, null, null),
		v = A.exports,
		w = a("8c4f"),
		b = function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "page"
			},
			[a("div", {
				ref: "pageHead",
				staticClass: "page-head"
			},
			[e.showHead ? a("div", {
				staticClass: "page-head-h"
			},
			[a("Head")], 1) : e._e(), a("div", {
				staticClass: "page-head-nav-h"
			},
			[a("div", {
				staticClass: "page-head-nav"
			},
			[a("div", {
				staticClass: "fl page-head-page"
			},
			[a("el-input", {
				ref: "pageinput",
				class: {
					active: !e.textshow
				},
				attrs: {
					id: "input"
				},
				on: {
					blur: e.handlePnumText
				},
				nativeOn: {
					keyup: function(t) {
						return ! t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null: e.handlePnumText(t)
					}
				},
				model: {
					value: e.np,
					callback: function(t) {
						e.np = t
					},
					expression: "np"
				}
			}), e.data.pages ? a("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.textshow,
					expression: "textshow"
				}],
				staticClass: "page-head-tol",
				domProps: {
					textContent: e._s(e.np + " / " + e.data.pages)
				},
				on: {
					click: e.inpage
				}
			}) : e._e()], 1), a("div", {
				staticClass: "fl page-head-s"
			}), a("div", {
				staticClass: "fr"
			},
			[e.beenFullScreen ? a("div", {
				staticClass: "page-head-right",
				attrs: {
					title: "退出全屏"
				},
				on: {
					click: e.exitFull
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-nocut"
			})]) : a("div", {
				staticClass: "page-head-right",
				attrs: {
					title: "全屏"
				},
				on: {
					click: e.allsc
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-nocut"
			})])])])])]), a("div", {
				staticClass: "page-l"
			},
			[e.showHead ? a("div", {
				staticClass: "page-l-head-h"
			}) : e._e(), a("div", {
				staticClass: "page-l-nav-h"
			}), a("ul", {
				staticClass: "page-l-menu"
			},
			["1" === e.morebook ? a("li", {
				staticClass: "page-l-icon",
				class: {
					active: "分册" == e.activeText
				},
				attrs: {
					title: "分册书目"
				},
				on: {
					click: function(t) {
						return e.navStyle("分册")
					}
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-tzs",
				staticStyle: {
					"font-size": "15px"
				}
			})]) : e._e(), a("li", {
				staticClass: "page-l-icon",
				class: {
					active: "目录" == e.activeText
				},
				attrs: {
					title: "目录"
				},
				on: {
					click: function(t) {
						return e.navStyle("目录")
					}
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-wq-catalog"
			})]), a("li", {
				staticClass: "page-l-icon",
				class: {
					active: "书签" == e.activeText
				},
				attrs: {
					title: "书签"
				},
				on: {
					click: function(t) {
						return e.navStyle("书签")
					}
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-bookmark1"
			})]), a("li", {
				staticClass: "page-l-icon",
				class: {
					active: "查找" == e.activeText
				},
				attrs: {
					title: "查找"
				},
				on: {
					click: function(t) {
						return e.navStyle("查找")
					}
				}
			},
			[a("i", {
				staticClass: "iconfont2 icon-ba-ep-search"
			})])])]), e.setbarShow ? a("div", {
				staticClass: "page-l-content"
			},
			["分册" === e.mlShow && e.duoce_list.length > 0 ? a("div", {
				staticClass: "page-l-box",
				class: {
					active: "分册" === e.activeText,
					"page-l-box_position": e.showHead
				}
			},
			[a("div", {
				staticClass: "page-l-con"
			},
			[e.showHead ? a("div", {
				staticStyle: {
					height: "48px"
				}
			}) : e._e(), a("div", {
				staticClass: "page-l-tit"
			},
			[a("span", {
				staticClass: "search_tit"
			},
			[e._v("\n            分册书目（共" + e._s(e.duoce_list.length) + "册）\n          ")]), a("div", {
				staticClass: "duoce_fm_box"
			},
			[a("ul", e._l(e.duoce_list,
			function(t, i) {
				return a("li", {
					key: t.id,
					class: {
						active: i + 1 === +e.duoce_num
					},
					on: {
						click: function(a) {
							return e.readDuoce(t)
						}
					}
				},
				[a("el-image", {
					staticStyle: {
						width: "118px",
						height: "164px"
					},
					attrs: {
						src: t.cover,
						fit: "contain"
					}
				}), a("span", {
					staticClass: "duoce_fm_name",
					attrs: {
						title: t.name.length > 14 ? t.name: ""
					}
				},
				[e._v("\n                  " + e._s(t.name) + "\n                ")])], 1)
			}), 0)])])])]) : e._e(), "目录" === e.mlShow ? a("div", {
				staticClass: "page-l-box",
				class: {
					active: "目录" === e.activeText,
					"page-l-box_position": e.showHead
				}
			},
			[a("div", {
				staticClass: "page-l-con"
			},
			[e.showHead ? a("div", {
				staticStyle: {
					height: "48px"
				}
			}) : e._e(), a("ul", {
				staticClass: "page-l-cata"
			},
			[a("BookCatTree", {
				staticClass: "thm_pcreadblack",
				attrs: {
					bid: e.bid,
					canreadpages: e.data.canreadpages,
					notitle: 1,
					treeList: e.treeList,
					cb_click: e.jump
				}
			})], 1)])]) : e._e(), "书签" === e.mlShow ? a("div", {
				staticClass: "page-l-box",
				class: {
					active: "书签" === e.activeText,
					"page-l-box_position": e.showHead
				}
			},
			[a("div", {
				staticClass: "page-l-con"
			},
			[e.showHead ? a("div", {
				staticStyle: {
					height: "48px"
				}
			}) : e._e(), e._m(0), "" != e.mark ? a("ul", {
				staticClass: "page-l-search"
			},
			e._l(e.mark,
			function(t, i) {
				return a("li", {
					key: i,
					class: {
						active: e.np == t
					}
				},
				[a("div", {
					staticClass: "page-l-scover",
					attrs: {
						title: "第" + t + "页"
					}
				},
				[a("img", {
					attrs: {
						src: "1" === e.morebook ? "/page/img/" + e.bid + "/" + t + "/260?v=" + e.duoce_num: "/page/img/" + e.bid + "/" + t + "/260"
					},
					on: {
						click: function(a) {
							return e.goMark(t)
						}
					}
				})]), a("div", {
					staticClass: "page-l-snum"
				},
				[e._v(e._s(t))])])
			}), 0) : a("div", {
				staticClass: "page-l-none"
			},
			[e._v("\n          暂无\n        ")])])]) : e._e(), "查找" === e.mlShow ? a("div", {
				staticClass: "page-l-box page-l-s",
				class: {
					active: "查找" === e.activeText,
					"page-l-box_position": e.showHead
				}
			},
			[a("div", {
				directives: [{
					name: "loadmore",
					rawName: "v-loadmore",
					value: e.loadSearchMore,
					expression: "loadSearchMore"
				}],
				staticClass: "page-l-con"
			},
			[e.showHead ? a("div", {
				staticStyle: {
					height: "48px"
				}
			}) : e._e(), a("div", {
				staticClass: "page-l-inline"
			},
			[e._m(1), a("div", {
				staticClass: "page-l-item"
			},
			[a("el-input", {
				attrs: {
					placeholder: "请输入您要查找的内容"
				},
				nativeOn: {
					keyup: function(t) {
						return ! t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null: e.search("1", !0)
					}
				},
				model: {
					value: e.input,
					callback: function(t) {
						e.input = t
					},
					expression: "input"
				}
			})], 1), a("div", {
				staticClass: "page-l-item"
			},
			[a("el-button", {
				attrs: {
					type: "primary"
				},
				on: {
					click: function(t) {
						return e.search("1", !0)
					}
				}
			},
			[e._v("\n              查询\n            ")])], 1)]), a("ul", {
				staticClass: "page-l-search"
			},
			[e._l(e.searlist,
			function(t, i) {
				return a("li", {
					key: i,
					class: {
						active: t.pnum == e.searchListSelected
					}
				},
				[a("div", {
					staticClass: "page-l-scover",
					attrs: {
						title: "第" + t.pnum + "页"
					},
					on: {
						click: function(a) {
							return e.searchWord(t.pnum)
						}
					}
				},
				[a("img", {
					attrs: {
						src: t.pageimg
					}
				})]), a("div", {
					staticClass: "page-l-snum"
				},
				[e._v(e._s(t.pnum))])])
			}), a("li", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.tipshow,
					expression: "tipshow"
				}],
				staticClass: "page-l-tip"
			},
			[e._v("没有更多了")])], 2)])]) : e._e()]) : e._e(), a("div", {
				staticClass: "page-r"
			},
			[a("div", {
				ref: "pagem",
				staticClass: "page-m",
				class: {
					left: e.activeText
				},
				attrs: {
					id: "scroll"
				}
			},
			[a("div", {
				ref: "page_content",
				staticClass: "page-m-box",
				attrs: {
					id: "pagebox"
				}
			},
			[a("div", {
				ref: "pageCover",
				staticClass: "page-img-box",
				style: e.initialized ? "height:0px; ": "height:110vh;"
			},
			[a("img", {
				staticClass: "page-img",
				attrs: {
					src: e.data.coverurl
				}
			})]), e._l(e.canreadpages,
			function(t, i) {
				return a("div", {
					key: +i + 1,
					ref: "pageImgBox" + ( + i + 1),
					refInFor: !0,
					staticClass: "page-img-box",
					style: "height:" + e.pageHeight( + i + 1) + ";",
					attrs: {
						index: +i + 1
					}
				},
				[a("img", {
					staticClass: "page-img",
					on: {
						load: e.pageLoaded,
						error: e.pageError
					}
				}), Array.isArray(e.mark) && e.mark.indexOf(( + i + 1).toString()) >= 0 ? a("div", {
					staticClass: "page-m-mark page-m-marko",
					attrs: {
						title: "取消书签"
					},
					on: {
						click: function(t) {
							e.delMark(( + i + 1).toString())
						}
					}
				},
				[a("i", {
					staticClass: "iconfont2 icon-shuqianxuanze"
				})]) : a("div", {
					staticClass: "page-m-mark",
					staticStyle: {
						"z-index": "3"
					},
					attrs: {
						title: "添加书签"
					},
					on: {
						click: function(t) {
							e.addMark(( + i + 1).toString())
						}
					}
				},
				[a("i", {
					staticClass: "iconfont2 icon-shuqian"
				})]), e._l(e.wordlist,
				function(t, n) {
					return [Array.isArray(e.wordlist) && e.wordlist.length > 0 && e.pageLoadedArr.includes((i + 1).toString()) && i == e.searchListSelected - 1 ? a("div", {
						key: n,
						staticClass: "word-bg",
						style: {
							height: t.height * e.vvw(i + 1) + "px",
							width: t.width * e.vvw(i + 1) + "px",
							left: t.left * e.vvw(i + 1) + "px",
							top: t.top * e.vvw(i + 1) + "px"
						}
					}) : e._e()]
				})], 2)
			}), 0 === e.data.canread ? a("ReadWarning", {
				ref: "pageImgBox" + (e.canreadpages + 1),
				attrs: {
					ago_price: e.data.price,
					paperurl: e.data.paperurl,
					now_price: e.data.sellprice
				}
			}) : e._e()], 2)])]), a("IsMain")], 1)
		},
		C = [function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "page-l-tit"
			},
			[a("span", {
				staticClass: "search_tit"
			},
			[e._v("书签")]), a("i", {
				staticClass: "iconfont2"
			})])
		},
		function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "page-l-tit"
			},
			[a("span", [e._v("查找")]), a("i", {
				staticClass: "iconfont2"
			})])
		}],
		k = (a("386d"), a("4917"), a("3b2b"), a("6b54"), a("ac6a"), a("456d"), a("6762"), a("2fdb"),
		function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "BookCatTree"
			},
			[a("div", {
				staticClass: "book-bottit BookCatTree-tittle"
			},
			[a("span"), e._v("\n    目录\n    "), a("em", [e._v("(共" + e._s(e.treeList.length) + "章)")]), e.treeList.length > 0 ? a("small", {
				staticClass: "BookCatTreeCtrl",
				on: {
					click: function(t) {
						return e.handleBookCatTreeCtrlClick()
					}
				}
			},
			[e._v("\n      " + e._s(this.treeControl) + "\n    ")]) : e._e()]), a("el-tree", {
				directives: [{
					name: "loading",
					rawName: "v-loading",
					value: e.loading,
					expression: "loading"
				}],
				ref: "treeX",
				attrs: {
					data: e.treeList,
					"empty-text": "暂无数据",
					"node-key": "id",
					"expand-on-click-node": !1
				},
				on: {
					"node-click": e.handleNodeClick
				},
				scopedSlots: e._u([{
					key: "default",
					fn: function(t) {
						t.node;
						var i = t.data;
						return a("span", {
							staticClass: "BookCatTree-node",
							class: {
								"Ba-PageCanread": "1" === e.morebook && e.book ? e.duoce_canreadpages - i.pnum >= 0 : e.canreadpages - i.pnum >= 0
							}
						},
						[a("span", {
							staticClass: "BookCatTree-node-left"
						},
						[e._v(e._s(i.label))]), a("span", {
							staticClass: "BookCatTree-node-right"
						},
						[a("span", {
							staticClass: "BookCatTree-node-pagenum"
						},
						[e._v("\n          " + e._s(i.pnum) + "\n        ")]), a("span", {
							staticClass: "BookCatTree-node-icon"
						},
						[a("el-popover", {
							attrs: {
								placement: "top",
								trigger: "hover"
							}
						},
						[a("span", [e._v("\n              本章节需要机构购买后才可阅读，您可以\n              "), a("a", {
							attrs: {
								href: ""
							}
						},
						[e._v("推荐给图书馆购买")]), e._v("\n              。\n              "), a("br"), e._v("\n              如您是已购买的用户，请使用机构账号\n              "), a("a", {
							attrs: {
								href: "#"
							}
						},
						[e._v("登录")]), e._v("\n              后使用。\n            ")]), a("i", {
							staticClass: "iconfont2 ",
							class: {
								"icon-lock": "1" === e.morebook && e.book ? e.duoce_canreadpages - i.pnum < 0 : e.canreadpages - i.pnum < 0
							},
							attrs: {
								slot: "reference"
							},
							slot: "reference"
						})])], 1)])])
					}
				}])
			}), this.isexpand && e.scrollY > 600 ? a("el-button", {
				staticClass: "BookCatTree-CloseAll",
				attrs: {
					round: ""
				},
				on: {
					click: function(t) {
						return e.handleBookCatTreeCtrlClick(!1)
					}
				}
			},
			[e._v("\n    收起全部\n  ")]) : e._e()], 1)
		}),
		y = [],
		_ = a("7618"),
		S = {
			name: "BookCatTree",
			props: ["bid", "canreadpages", "canread", "notitle", "cb_click", "treeList", "duoce_ml_cnt", "morebook", "book", "duoce_canreadpages"],
			data: function() {
				return {
					tree: [],
					isexpand: !1,
					scrollY: 0,
					defaultProps: {
						children: "children",
						label: "label"
					},
					loading: !1
				}
			},
			watch: {
				treeList: function() {
					this.isexpand = !1
				}
			},
			computed: {
				treeControl: function() {
					return this.isexpand ? "(收起全部目录)": "(展开全部目录)"
				}
			},
			mounted: function() {
				window.addEventListener("scroll", this.handleScroll)
			},
			methods: {
				handleNodeClick: function(e) {
					if ("1" === this.morebook && this.book ? this.duoce_canreadpages - e.pnum < 0 : this.canreadpages - e.pnum < 0) this.$alert("暂无此页的阅读权限", {
						showClose: !1
					});
					else {
						if ("1" === this.morebook && this.book ? this.duoce_canreadpages < 0 : this.canreadpages < 0) return void this.$message({
							message: "本书暂不支持跳转，请点击“阅读”按钮进入阅读页",
							type: "error"
						});
						"function" === typeof this.cb_click ? this.cb_click(e.pnum) : this.book ? "1" === this.morebook ? window.open("/read/pdf/" + this.bid + "," + e.pnum + "?v=" + this.duoce_ml_cnt) : window.open("/read/pdf/" + this.bid + "," + e.pnum) : "1" === this.morebook ? window.location.href = "/read/pdf/" + this.bid + "," + e.pnum + "?v=" + this.duoce_ml_cnt: window.location.href = "/read/pdf/" + this.bid + "," + e.pnum
					}
				},
				handleBookCatTreeCtrlClick: function(e) {
					this.isexpand = "boolean" === typeof e ? e: !this.isexpand;
					for (var t = 0; t < this.$refs.treeX.store._getAllNodes().length; t++) {
						var a = this.$refs.treeX.store._getAllNodes()[t];
						"object" === Object(_["a"])(a.childNodes) && a.childNodes.length > 0 && (a.expanded = this.isexpand)
					}
				},
				handleScroll: function() {
					this.scrollY = document.documentElement.scrollTop
				}
			}
		},
		B = S,
		E = (a("3875"), Object(h["a"])(B, k, y, !1, null, null, null)),
		x = E.exports,
		O = function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return e.$store.state.inip && e.$store.state.ismainToggle && !e.cookieStatus ? a("div", [a("el-dialog", {
				staticClass: "ismain",
				attrs: {
					title: e.gotitle,
					visible: e.dialogVisible,
					width: "450px",
					"modal-append-to-body": !1,
					modal: !0,
					"before-close": e.handleClose
				},
				on: {
					"update:visible": function(t) {
						e.dialogVisible = t
					}
				}
			},
			[a("span", [e._v("\n      您好，来自\n      "), a("a", {
				style: {
					color: "#4A90E2"
				}
			},
			[e._v(e._s(e.$store.state.lbname))]), e._v("\n      的用户\n    ")]), a("span", [e._v("您当前访问的是文泉学堂主站，需要个人付费购买阅读权限。")]), a("span", [e._v("建议您访问文泉学堂的本校专属资源，免费使用。")]), a("span", {
				staticClass: "dialog-footer",
				attrs: {
					slot: "footer"
				},
				slot: "footer"
			},
			[a("a", {
				staticClass: "no_goBranch",
				on: {
					click: e.no_goBranch
				}
			},
			[e._v("稍后再说")]), a("el-button", {
				staticClass: "goBranch",
				attrs: {
					type: "primary"
				},
				on: {
					click: e.goBranch
				}
			},
			[e._v("\n        免费使用\n      ")])], 1)])], 1) : e._e()
		},
		j = [],
		I = {
			name: "IsMain",
			data: function() {
				return {
					dialogVisible: !0,
					gotitle: "访问本校资源提示",
					cookieStatus: this.$util.getCookie("tips") ? this.$util.getCookie("tips") : ""
				}
			},
			methods: {
				handleClose: function(e) {
					e()
				},
				goBranch: function() {
					var e = this.$route.path;
					/Book/.test(e) && (e = "/#".concat(this.$route.path)),
					window.location.href = "/b/c?redirecturi=".concat(e)
				},
				no_goBranch: function() {
					this.$util.setCookie("tips", "1", 1),
					this.dialogVisible = !1
				}
			}
		},
		T = I,
		P = (a("2e29"), Object(h["a"])(T, O, j, !1, null, "023987ec", null)),
		L = P.exports,
		Q = function() {
			var e = this,
			t = e.$createElement,
			i = e._self._c || t;
			return i("header", {
				staticClass: "head"
			},
			[i("div", {
				staticClass: "head-bg"
			}), i("div", {
				staticClass: "head-box"
			},
			[i("a", {
				staticClass: "logo-link fl",
				attrs: {
					href: "/"
				}
			},
			[i("div", {
				staticClass: "imgbox"
			},
			[i("img", {
				staticStyle: {
					width: "131px"
				},
				attrs: {
					src: e.logoSource
				}
			})])]), this.$store.state.webBranch && "wqshuju." !== e.hostName ? i("div", {
				staticClass: "fl"
			},
			[i("a", {
				staticClass: "school fl"
			},
			[e._v("   " + e._s(e.$store.state.lbname))]), i("a", {
				staticClass: "school fl"
			},
			[e._v(e._s(e.$store.state.head_knowledge))])]) : e._e(), e.checklogin ? e._e() : i("span", {
				staticClass: "fr head-regist",
				on: {
					click: e.goLogin
				}
			},
			[e._v("\n      注册\n    ")]), e.checklogin ? i("span", {
				staticClass: "fr head-logon",
				on: {
					click: e.goAu
				}
			},
			[i("div", {
				staticClass: "head-img"
			},
			["" != e.myinfo.logo && null != e.myinfo.logo && "undefined" != e.myinfo.logo ? i("img", {
				attrs: {
					src: e.myinfo.logo
				}
			}) : i("img", {
				attrs: {
					src: a("f416")
				}
			})]), i("span", {
				attrs: {
					title: e.myinfo.uname
				}
			},
			[e._v("\n        " + e._s(e.myinfo.uname.length > 10 ? e.myinfo.uname.substring(0, 10) + "...": e.myinfo.uname) + "\n      ")])]) : i("span", {
				staticClass: "fr head-logon",
				on: {
					click: e.goLogin
				}
			},
			[e._v("\n      登录\n    ")]), i("ul", {
				staticClass: "head-list fr"
			},
			e._l(e.headerLink,
			function(t) {
				return i("li", {
					key: t["name"]
				},
				[1 == t.newwindow ? i("a", {
					staticClass: "wqxt",
					attrs: {
						href: t.url,
						target: "_blank"
					}
				},
				[e._v("\n          " + e._s(t.text) + "\n        ")]) : i("a", {
					staticClass: "wqxt",
					attrs: {
						href: t.url,
						target: "javascript:void(0)"
					}
				},
				[e._v("\n          " + e._s(t.text) + "\n        ")]), i("span", [e._v("|")])])
			}), 0)])])
		},
		$ = [],
		H = (a("28a5"), a("bc3a")),
		D = a.n(H),
		z = D.a.create({
			baseURL: "",
			timeout: 8e3,
			headers: {
				User: "bapkg/com.bookask.wqxuetang baver/1.1.1"
			}
		});
		z.all = D.a.all,
		z.spread = D.a.spread;
		var U = z;
		function N() {
			return U({
				url: "/v1/search/libdata",
				method: "get"
			})
		}
		function M(e) {
			var t = new FormData;
			return t.append("uri", e.uri),
			t.append("param", e.param),
			t.append("refer", e.refer),
			t.append("numid", e.numid),
			U.post("/v1/log/read", t)
		}
		function R(e) {
			return U({
				url: "/v1/ad/headerlinks",
				method: "get"
			})
		}
		function Y() {
			return U({
				url: "/v1/login/checklogin",
				method: "get"
			})
		}
		function q() {
			return U({
				url: "/v1/teach/teachinfo",
				method: "get"
			})
		}
		function J(e) {
			var t = new FormData;
			return t.append("uri", e.uri),
			t.append("param", e.param),
			t.append("refer", e.refer),
			U.post("/v1/log/access", t)
		}
		function G(e) {
			var t = new FormData;
			return t.append("uri", e.uri),
			t.append("param", e.param),
			t.append("refer", e.refer),
			t.append("kw", e.kw),
			U.post("/v1/log/kw", t)
		}
		function W(e) {
			return U({
				url: "/v1/search/searchpage",
				method: "get",
				params: e
			})
		}
		function K(e, t, a, i, n) {
			var s = "";
			return s = "1" === i && n ? "/page/row/positions/".concat(e, "/").concat(t, ".html?kw=").concat(a, "&v=").concat(n) : "/page/row/positions/".concat(e, "/").concat(t, ".html?kw=").concat(a),
			U({
				url: s,
				method: "get"
			})
		}
		function F(e, t, a) {
			var i = {};
			return i.bid = e,
			"1" === a && t && (i.volume_no = t),
			U({
				url: "/v1/book/catatree",
				method: "get",
				params: i
			})
		}
		function X() {
			return U({
				url: "/v1/permission/checkpermis",
				method: "get"
			})
		}
		var Z = {
			name: "Head",
			computed: {
				checklogin: function() {
					return this.$store.state.checklogin
				},
				myinfo: function() {
					return this.$store.state.myinfo
				},
				isidenty: function() {
					return this.$store.state.isidenty
				},
				teachInfoData: function() {
					return this.$store.getters.getTeachinfo
				},
				headerLink: function() {
					return this.$store.getters.getHeadLink
				},
				logoSource: function() {
					return this.$store.state.logoUrl
				}
			},
			props: ["state"],
			data: function() {
				return {
					text: "",
					loginTest: !1,
					logoUrl: "",
					hostName: ""
				}
			},
			methods: {
				goLogin: function() {
					window.location.href = "/login/loginon.html?refer=" + encodeURIComponent(document.URL)
				},
				goAu: function() {
					var e = location.hostname.match(/wqxuetang/) || location.hostname.match(/wqshuju/);
					null === e || !e[0] || "wqxuetang" != e[0] && "wqshuju" != e[0] ? (q().then(function(e) {
						if (e = BAJSON.formatdata(e.data), 0 === e.errcode) {
							var t = e.data;
							if (t.constructor !== Array) {
								if (void 0 !== t.coursename && (t.courseArr = t.coursename.split(",")), "0" == t.isidenty) {
									var a = Date.parse(new Date),
									i = new Date(a + 1728e5),
									n = i.getMonth() + 1,
									s = i.getDate();
									t.month = n,
									t.distanceDay = s,
									t.pass = "1"
								} else "1" == t.isidenty ? t.pass = "0": "-1" == t.isidenty && (t.pass = "-1");
								t.shengAndShi = (t.province || "") + (void 0 == t.province ? "": "/") + (t.city || ""),
								this.$store.commit("setTeachInfo", t),
								this.$store.commit("getIsidenty", t.isidenty)
							} else this.$store.commit("setTeachInfo", {}),
							this.$store.commit("getIsidenty", "")
						}
					}).
					catch(function(e) {}), this.$router.push({
						name: "usertchau"
					})) : window.location.href = "/user/userhistory"
				},
				goRoute: function(e) {
					this.$router.push(e)
				},
				goLink: function(e) {
					1 == e.newwindow ? window.open(e.url) : this.$router.push(e.url)
				}
			},
			created: function() {
				this.hostName = location.hostname.match(/wqbook\.|wqshuju\./),
				this.hostName && (this.hostName = this.hostName[0])
			}
		},
		V = Z,
		ee = (a("b75c"), Object(h["a"])(V, Q, $, !1, null, null, null)),
		te = ee.exports,
		ae = function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "readwarning"
			},
			[e._m(0), a("div", {
				staticClass: "main1_l"
			},
			[a("p", [e._v(e._s(e.name))]), a("div", {
				staticClass: "read_msg"
			},
			[a("div", {
				staticClass: "w_img_r"
			},
			[a("div", {
				staticClass: "w_mark"
			}), e._m(1), a("img", {
				attrs: {
					src: e.coverurl,
					alt: ""
				}
			})]), a("div", {
				staticClass: "w_msg"
			},
			[e._m(2), a("p", [a("span", [e._v("1、登录后可以继续阅读本书的部分资源！")]), e.$store.state.ismain ? a("span", [e._v("\n            2、您可以购买本书，购买后就可以获取全书的阅读权限哦！\n          ")]) : a("span", [e._v("\n            2、您可以图书馆荐购本书，图书馆购买入库后您就可以看到这本书的全本啦！\n          ")])])])])]), a("div", {
				staticClass: "main1_r"
			},
			[a("div", {
				staticClass: "w_buy"
			},
			[a("div", {
				staticClass: "w_img_r"
			},
			[e.hostName ? a("a", {
				attrs: {
					href: "/book/" + e.data.bid
				}
			},
			[a("img", {
				attrs: {
					src: e.coverurl,
					alt: ""
				}
			})]) : a("a", {
				attrs: {
					href: "/#/Book/" + e.data.bid
				}
			},
			[a("img", {
				attrs: {
					src: e.coverurl,
					alt: ""
				}
			})])]), a("p", [e.hostName ? a("a", {
				attrs: {
					href: "/book/" + e.data.bid
				}
			},
			[e._v("\n          " + e._s(e.name) + "\n        ")]) : a("a", {
				attrs: {
					href: "/#/Book/" + e.data.bid
				}
			},
			[e._v(e._s(e.name))])]), a("span", {
				staticClass: "w_author"
			},
			[e._v(e._s(e.author))]), e.$store.state.ismain ? a("div", {
				staticClass: "w_price"
			},
			[e.now_price > 0 ? a("span", {
				staticClass: "before_price"
			},
			[e._v(e._s(e.ago_price))]) : e._e(), 0 === e.now_price ? a("span", {
				staticClass: "b_price_a"
			},
			[e._v("暂不销售")]) : a("span", {
				staticClass: "now_price"
			},
			[e._v("￥" + e._s(e.now_price))])]) : e._e()]), a("div", {
				staticClass: "btn"
			},
			[e.$store.state.checklogin ? e._e() : a("a", {
				staticClass: "btnhover",
				on: {
					click: e.goLogin
				}
			},
			[e._v("\n        登  录\n      ")]), e.$store.state.ismain && e.now_price > 0 ? a("a", {
				staticClass: "btnhover",
				on: {
					click: function(t) {
						return e.goBuy()
					}
				}
			},
			[e._v("\n        购  买\n      ")]) : e._e(), !e.$store.state.ismain && !e.hostName && e.$store.state.inip || !e.$store.state.ismain && !e.hostName && e.$store.state.ipstatus ? a("a", {
				staticClass: "btnhover",
				on: {
					click: e.recBuy
				}
			},
			[e._v("\n        荐  购\n      ")]) : e._e()])]), e._m(3), a("div", {
				staticClass: "main2"
			},
			[e.aboutList ? a("ul", e._l(e.aboutList,
			function(t, i) {
				return a("li", {
					key: i,
					staticClass: "w_about"
				},
				[a("div", [e.hostName ? a("a", {
					attrs: {
						href: "/book/" + t.numid
					}
				},
				[a("img", {
					attrs: {
						src: t.coverurl,
						alt: ""
					}
				})]) : a("a", {
					attrs: {
						href: "/#/Book/" + t.numid
					}
				},
				[a("img", {
					attrs: {
						src: t.coverurl,
						alt: ""
					}
				})])]), a("p", [e.hostName ? a("a", {
					attrs: {
						href: "/book/" + t.numid
					}
				},
				[e._v("\n            " + e._s(e.celarEm(t.name)) + "\n          ")]) : a("a", {
					attrs: {
						href: "/#/Book/" + t.numid
					}
				},
				[e._v("\n            " + e._s(e.celarEm(t.name)) + "\n          ")])]), a("span", {
					staticClass: "w_author"
				},
				[e._v(e._s(e.celarEm(t.author)))]), e.$store.state.ismain ? a("p", {
					staticClass: "w_book"
				},
				[e.now_price > 0 ? a("span", {
					staticClass: "before_price"
				},
				[e._v("\n            " + e._s(t.price) + "\n          ")]) : e._e(), 0 === t.sellprice ? a("span", {
					staticClass: "b_price_a"
				},
				[e._v("暂不销售")]) : a("span", {
					staticClass: "now_price"
				},
				[e._v("￥" + e._s(t.sellprice))])]) : e._e()])
			}), 0) : e._e()]), a("div")])
		},
		ie = [function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "w_head"
			},
			[a("span", {
				staticClass: "w_icon"
			}), a("span", {
				staticClass: "w_title"
			},
			[e._v("试读提醒")])])
		},
		function() {
			var e = this,
			t = e.$createElement,
			i = e._self._c || t;
			return i("div", {
				staticClass: "w_read_zhang"
			},
			[i("img", {
				attrs: {
					src: a("1324"),
					alt: ""
				}
			})])
		},
		function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("h2", [e._v("\n          您的试读已结束!\n          "), a("span", [e._v("您可以通过以下方式获取更多阅读权限！")])])
		},
		function() {
			var e = this,
			t = e.$createElement,
			a = e._self._c || t;
			return a("div", {
				staticClass: "w_head"
			},
			[a("span", {
				staticClass: "w_icon"
			}), a("span", {
				staticClass: "w_title"
			},
			[e._v("相关图书")])])
		}],
		ne = (a("96cf"), a("3b8d")),
		se = {
			props: ["now_price", "ago_price", "paperurl"],
			name: "ReadWarning",
			data: function() {
				return {
					data: "",
					coverurl: "",
					name: "",
					author: "",
					aboutList: [],
					recBuyParams: new URLSearchParams,
					hostName: ""
				}
			},
			created: function() {
				var e = Object(ne["a"])(regeneratorRuntime.mark(function e() {
					var t = this;
					return regeneratorRuntime.wrap(function(e) {
						while (1) switch (e.prev = e.next) {
						case 0:
							return this.hostName = location.hostname.match(/wqbook\.|wqshuju\./),
							e.next = 3,
							this.$apiwq.get("/v1/book/initbook?bid=" + parseInt(this.$route.params.bid)).then(function(e) {
								t.data = e.data.data,
								t.coverurl = t.data.coverurl,
								t.name = t.data.name,
								t.author = t.data.author
							});
						case 3:
							this.$http.get("/v1/book/relatedetail?kw=" + this.name + "&type=1").then(function(e) {
								0 === e.data.errcode && (t.aboutList = e.data.data.list)
							});
						case 4:
						case "end":
							return e.stop()
						}
					},
					e, this)
				}));
				function t() {
					return e.apply(this, arguments)
				}
				return t
			} (),
			methods: {
				buyPaperurl: function() {
					window.location.href = this.paperurl
				},
				goLogin: function() {
					window.location.href = "/login/loginon.html?refer=" + encodeURIComponent(document.URL)
				},
				recBuy: function() {
					var e = this;
					this.$apiwq.post("/v1/book/addrecomm?id=" + this.data.bid + "&title=" + this.data.name).then(function(t) {
						0 === t.data.errcode ? e.$message.success("您已向图书馆荐购成功！") : e.$message.error("荐购失败！")
					})
				},
				handleClose: function(e) {
					e()
				},
				goBuy: function() {
					this.$store.state.checklogin ? this.hostName ? window.location.href = "/order/" + parseInt(this.$route.params.bid) : window.location.href = "/#/order/submission/" + parseInt(this.$route.params.bid) : (alert("请先登录"), window.location.href = "/login/loginon.html?refer=" + encodeURIComponent(document.URL))
				},
				celarEm: function(e) {
					var t;
					return "string" === typeof e && (t = e.replace(/<\/em>/g, "").replace(/<em>/g, "")),
					t
				}
			}
		},
		re = se,
		oe = (a("9412"), a("cb3d"), Object(h["a"])(re, ae, ie, !1, null, "bbbc3f72", null)),
		ce = oe.exports,
		le = a("14b7"),
		ue = a.n(le),
		de = a("5118"),
		he = {
			pageSize: "/page/size/",
			k: "/v1/read/k",
			positions: "/v1/book/pagerow/positions/",
			searchPage: "/v1/search/searchpage"
		},
		pe = {
			initRead: "/v1/read/initread",
			bookmarkList: "/v1/u/bookmarklst",
			addBookmark: "/v1/book/addbookmark",
			delBookmark: "/v1/book/delbookmark",
			setLastRead: "/v1/read/setlastread"
		};
		function ge(e, t, a) {
			var i = {};
			return i.bid = e,
			a && a > 0 && (i.v = t),
			U({
				method: "get",
				url: he.pageSize,
				params: i
			})
		}
		function fe(e) {
			return U({
				method: "get",
				url: he.k,
				params: {
					bid: e
				}
			})
		}
		function me(e, t) {
			var a = {};
			return a.bid = e,
			t && t > 0 && (a.volume_no = t),
			U({
				method: "get",
				url: pe.initRead,
				params: a
			})
		}
		function Ae(e, t, a) {
			var i = {};
			return i.bid = e,
			"1" === a && (i.volume_no = t),
			U({
				method: "get",
				url: pe.bookmarkList,
				params: i
			})
		}
		function ve(e, t, a, i) {
			var n = new URLSearchParams;
			return n.append("bid", e),
			n.append("pnum", t),
			"1" === i && n.append("volume_no", a),
			U({
				method: "post",
				url: pe.addBookmark,
				params: n
			})
		}
		function we(e, t, a, i) {
			var n = new URLSearchParams;
			return n.append("bid", e),
			n.append("pnum", t),
			"1" === i && n.append("volume_no", a),
			U({
				method: "post",
				url: pe.delBookmark,
				params: n
			})
		}
		function be(e, t, a, i) {
			var n = {};
			return n.bid = e,
			n.pnum = t,
			"1" === a && i && (n.volume_no = i),
			U({
				method: "post",
				url: pe.setLastRead,
				params: n
			})
		}
		var Ce = {
			name: "Page",
			components: {
				BookCatTree: x,
				IsMain: L,
				ReadWarning: ce,
				Head: te
			},
			sockets: {
				connect: function() {},
				message: function(e) {}
			},
			data: function() {
				return {
					loadedImg: {},
					lastReadPages: "",
					duoceIdx: 1,
					duoce_num: "",
					duoce_list: [],
					morebook: "",
					bid: 0,
					pnumTo: 0,
					showHead: !0,
					initialized: !1,
					coverLoaded: !1,
					kRetrying: !1,
					kLastTime: "",
					activeText: "",
					canreadpages: 2,
					pageLoadedArr: [],
					pageSizeDefault: {
						w: 0,
						h: 0
					},
					pageSizeSpecial: {
						1 : {
							w: 1,
							h: 1
						}
					},
					pageClientWidth: 0,
					coverUrl: "",
					np: 1,
					t: 0,
					getKtime: 0,
					record: 0,
					pageResize: 0,
					input: "",
					mark: "",
					searlist: [],
					mlShow: "",
					setbarShow: !1,
					treeList: "",
					searchListSelected: 0,
					loadSign: !0,
					sdata: "",
					tipshow: !1,
					data: "",
					textshow: !0,
					sp: 1,
					pageWidth: "",
					imgId: "",
					imgNaturalWidth: "",
					pdfwidth: "",
					isOcr: !1,
					wordlist: [],
					beenFullScreen: !1
				}
			},
			computed: {
				pageHeight: function() {
					var e = this;
					return function(t) {
						if (e.pageLoadedArr.includes(t)) return "auto";
						var a = e.pageSizeSpecial[t] && e.pageSizeSpecial[t]["h"] ? e.pageSizeSpecial[t]["h"] : e.pageSizeDefault["h"];
						return a = a * e.pageClientWidth / (e.pageSizeDefault["w"] > 0 ? e.pageSizeDefault["w"] : 1),
						a ? a + "px": "110vh"
					}
				},
				vvw: function() {
					var e = this;
					return function(t) {
						var a = 0;
						return a = Object.keys(e.pageSizeSpecial).includes(t.toString()) ? e.isOcr ? e.pageClientWidth / e.pageSizeSpecial[t]["naturalWidth"] : e.pageClientWidth / e.pageSizeSpecial[t]["w"] : e.isOcr ? e.pageClientWidth / e.pageSizeDefault["naturalWidth"] : e.pageClientWidth / e.pageSizeDefault["w"],
						a
					}
				}
			},
			watch: {
				canreadpages: function() {
					var e = this;
					this.$nextTick(function() {
						if (e.pnumTo > 0) {
							e.jump(e.pnumTo),
							e.pnumTo = 0;
							var t = e.$route.path.replace(e.$route.params.bid, e.bid);
							history.replaceState({},
							"", t)
						} else e.pnumTo <= 0 && e.lastReadPages > 0 && e.jump(e.lastReadPages)
					})
				},
				duoce_num: function() {}
			},
			created: function() {
				this.$route.query.v && this.$route.query.v > 0 && (this.duoce_num = this.$route.query.v);
				var e = /^([1-9]\d*)\s*(,)?\s*?(\d*)$/.exec(this.$route.params.bid ? this.$route.params.bid.replace("，", ",") : this.$route.params.bid);
				if (e && ("," == e[2] ? (this.bid = e[1], this.pnumTo = e[3], this.pnumTo = this.pnumTo > 0 ? this.pnumTo: 1) : this.bid = e[0]), this.bid) {
					var t = {
						refer: this.$store.state.referer,
						uri: this.$store.state.uri,
						param: this.$store.state.param,
						numid: this.bid
					};
					M(t)
				} else this.$message.error("网络或参数错误，请关闭本页面后重试~")
			},
			mounted: function() {
				var e = this;
				this.pageClientWidth = this.$refs.pageCover.offsetWidth,
				window.onresize = function() {
					var t = e.np;
					Object(de["clearTimeout"])(e.pageResize),
					e.$nextTick(function() {
						e.pageResize = Object(de["setTimeout"])(function() {
							e.pageClientWidth = e.$refs.pageCover.offsetWidth,
							Object(de["setTimeout"])(function() {
								e.jump(t)
							},
							300)
						},
						200)
					})
				},
				window.addEventListener("scroll", this.handleScroll, !0),
				me(this.bid, this.duoce_num).then(function(t) {
					t && t["data"] && 0 === t["data"]["errcode"] ? (e.morebook = t.data.data.ismultivolumed ? t.data.data.ismultivolumed: "", e.duoce_list = t.data.data.volume_list ? t.data.data.volume_list: [], e.$route.query.v || "1" !== e.morebook || (t.data.data.last_volume > 0 ? e.duoce_num = t.data.data.last_volume: e.duoce_num = 1), e.lastReadPages = t.data.data.lastpage, F(e.bid, e.duoce_num, e.morebook).then(function(t) {
						0 === t.data.errcode && (t.data.data ? e.treeList = t.data.data: e.treeList = [])
					}), e.getMark(), U.all([ge(e.bid, e.duoce_num, e.morebook), fe(e.bid)]).then(U.spread(function(a, i) {
						a && a["data"] && 0 === a["data"]["errcode"] && a["data"]["data"]["d"] ? (e.isOcr = a["data"]["data"]["isocr"], e.pageSizeDefault = a["data"]["data"]["d"], e.pageSizeSpecial = a["data"]["data"], delete e.pageSizeSpecial["d"], delete e.pageSizeSpecial["bid"], delete e.pageSizeSpecial["isocr"], e.data = t["data"]["data"], e.canreadpages = parseInt(t["data"]["data"]["canreadpages"]), e.canreadpages = isNaN(e.canreadpages) ? 0 : e.canreadpages, e.initialized = !0) : e.$message.error("网络请求失败，请刷新重试~"),
						i && i["data"] && 0 === i["data"]["errcode"] ? e.$store.commit("setK", i["data"]["data"]) : e.$message.error("网络请求失败，请刷新重试~"),
						e.kLastTime = Date.now(),
						e.pnumTo > 0 ? e.jump(e.pnumTo) : (e.setPageSrc(e.$refs["pageImgBox1"][0].firstElementChild, 1), e.setPageSrc(e.$refs["pageImgBox2"][0].firstElementChild, 2))
					})).
					catch(function(t) {
						e.$message.error("网络请求失败，请关闭本页面后重新打开~")
					})) : e.$alert(t.data.errmsg + "，点击确定返回首页", "提示", {
						confirmButtonText: "确定",
						callback: function(e) {
							window.location.href = "/"
						}
					})
				})
			},
			methods: {
				allsc: function() {
					var e = document.documentElement,
					t = e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen;
					if (this.beenFullScreen = !0, "undefined" !== typeof t && t) t.call(e);
					else if ("undefined" !== typeof window.ActiveXObject) {
						var a = new ActiveXObject("WScript.Shell");
						null != a && a.SendKeys("{F11}")
					}
				},
				exitFull: function() {
					var e = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.webkitExitFullscreen;
					if (this.beenFullScreen = !1, e) e.call(document);
					else if ("undefined" !== typeof window.ActiveXObject) {
						var t = new window.ActiveXObject("WScript.Shell");
						null !== t && t.SendKeys("{F11}")
					}
				},
				getCookie: function(e) {
					var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
					return (t = document.cookie.match(a)) ? unescape(t[2]) : null
				},
				socketReport: function(e) {
					var t = {
						token: e,
						sid: this.getCookie("PHPSESSID")
					};
					this.$socket.emit("message", {
						query: t
					})
				},
				handlePnumText: function() {
					this.textshow = !0,
					this.jump(this.np)
				},
				inpage: function() {
					this.textshow = !1,
					this.$refs.pageinput.focus(),
					this.$refs.pageinput.select()
				},
				getMark: function() {
					var e = this;
					Ae(this.bid, this.duoce_num, this.morebook).then(function(t) {
						var a = t.data;
						if (0 == a.errcode) {
							var i = [];
							a.data.list[0].mark_list.forEach(function(e) {
								i.push(e.pnum)
							}),
							e.mark = i
						} else e.$message(a.errmsg)
					}).
					catch(function(e) {})
				},
				addMark: function(e) {
					var t = this;
					e >= 0 && (this.mark.indexOf(e.toString) >= 0 || this.mark.push(e.toString()), ve(this.bid, e, this.duoce_num, this.morebook).then(function(e) {
						0 === e.data.errcode ? t.$message({
							message: "添加书签成功",
							type: "success"
						}) : t.$message(e.data.errmsg),
						t.getMark()
					}).
					catch(function(e) {
						this.$message({
							message: "添加书签失败，请刷新页面后重试",
							type: "error"
						}),
						this.getMark()
					}))
				},
				delMark: function(e) {
					var t = this;
					if (e >= 0) {
						var a = this.mark.indexOf(e.toString());
						a >= 0 && this.mark.splice(a, 1),
						we(this.bid, e).then(function(e) {
							0 === e.data.errcode ? t.$message({
								message: "删除书签成功",
								type: "success"
							}) : t.$message(e.data.errmsg),
							t.getMark()
						}).
						catch(function(e) {
							this.$message({
								message: "删除书签失败，请刷新页面后重试",
								type: "error"
							}),
							this.getMark()
						})
					}
				},
				goMark: function(e) {
					this.$router.push({
						path: "/read/pdf/" + this.bid + "," + e + "?_t=" + (new Date).getTime()
					})
				},
				search: function(e, t) {
					var a = this;
					if ("" != this.input) {
						t && (this.sp = 1, this.searlist = []);
						var i = {
							refer: this.$store.state.referer,
							uri: this.$store.state.uri,
							param: this.$store.state.param,
							kw: this.input
						},
						n = {
							refer: this.$store.state.referer,
							uri: this.$store.state.uri,
							param: this.$store.state.param
						};
						G(i),
						J(n);
						var s = this.searlist,
						r = {
							pn: e,
							kw: encodeURIComponent(this.input),
							size: 10,
							bid: this.bid
						};
						"1" === this.morebook && this.duoce_num && (r.volume_no = this.duoce_num),
						W(r).then(function(e) {
							var t = a.$BAJSON.formatdata(e.data);
							if (0 == e.data.errcode) {
								a.sdata = t.data;
								var i = t.data.list;
								a.$set(a.$data, "searlist", s.concat(i))
							} else a.$message(e.errmsg)
						}).
						catch(function(e) {})
					} else this.$message("请填写搜索内容")
				},
				searchWord: function(e) {
					this.wordlist = [],
					this.searchListSelected = e,
					this.jump(e),
					this.getWord(e)
				},
				getWord: function(e) {
					var t = this;
					this.imgId = e,
					K(this.bid, e, this.input, this.morebook, this.duoce_num).then(function(e) {
						var a = [];
						if (0 === e.data.errcode) {
							var i = e.data,
							n = i.data.words_result;
							t.pdfwidth = i.data.width;
							for (var s = i.data.left,
							r = i.data.top,
							o = 0; o < n.length; o++) for (var c = 0; c < n[o].chars.length; c++) {
								var l = "char";
								t.isOcr || (l = "c"),
								n[o].chars[c].em && n[o].chars[c][l] && n[o].chars[c].location && (t.isOcr || (n[o].chars[c].location.left = n[o].chars[c].location.left - s, n[o].chars[c].location.top = r - n[o].chars[c].location.top - n[o].chars[c].location.height), a.push(n[o].chars[c].location))
							}
							t.wordlist = a
						}
					}).
					catch(function(e) {})
				},
				loadSearchMore: function() {
					var e = this;
					this.loadSign && (this.loadSign = !1, this.sp++, this.sp <= this.sdata.pageinfo.pagecount ? (Object(de["setTimeout"])(function() {
						e.loadSign = !0
					},
					500), this.search(this.sp, !1)) : this.tipshow = !0)
				},
				regetK: function(e) {
					var t = this,
					a = (Date.now() - this.kLastTime) / 1e3 / 60;
					a > 5 && (this.kRetrying ? (Object(de["clearTimeout"])(this.getKtime), this.getKtime = Object(de["setTimeout"])(function() {
						t.regetK(e)
					},
					500)) : (this.kRetrying = !0, fe(this.bid).then(function(a) {
						a && a["data"] && 0 === a["data"]["errcode"] ? (t.$store.commit("setK", a["data"]["data"]), t.kRetrying = !1, t.kLastTime = Date.now(), "function" == typeof e && e()) : (t.kRetrying = !1, t.$message.error("网络请求有误，请刷新重试~"))
					}).
					catch(function(e) {
						t.kRetrying = !1,
						t.$message.error("网络请求错误，请刷新重试~")
					})))
				},
				getJwt: function(e, t) {
					var a = ue.a.sign({
						p: t,
						t: Date.parse(new Date),
						b: e,
						w: 1e3,
						k: this.$store.state.aesK
					},
					this.$store.state.jwtSecret.toString());
					return a
				},
				pageLoaded: function(e) {
					var t = this;
					/* wqDownloader */
					window.downloaderRefreshClocks=[];/* 记录所有刷新计时器的setinterval */
					/* wqDownloader */
					e.target && this.getImageData(e.target,
					function(e, a) {
						var i = new DataView(e),
						n = i.byteLength > 6 ? i.getUint16(i.byteLength - 4 - 2) : 0,
						s = a.parentNode.getAttribute("index");
						if (n > 0) n > "40300" && n <= "40399" && t.regetK(function() {
							t.setPageSrc(a, s)
						});
						else {
							t.imgNaturalWidth = a.naturalWidth,
							Object.keys(t.pageSizeSpecial).includes(s) ? (t.pageSizeSpecial[s]["naturalWidth"] = a.naturalWidth, t.pageSizeSpecial[s]["naturalHeight"] = a.naturalHeight) : t.pageSizeDefault["naturalWidth"] && t.pageSizeDefault["naturalHeight"] || (t.pageSizeDefault["naturalWidth"] = a.naturalWidth, t.pageSizeDefault["naturalHeight"] = a.naturalHeight),
							t.pageLoadedArr.includes(s) || t.pageLoadedArr.push(s);
							var r = a.src;
							/\?k=/.test(r) && (Object.keys(t.loadedImg).includes(s) || (t.loadedImg[s] = r)),
							a.parentNode && a.parentNode.style && (a.parentNode.style.height = "auto")
						}
					})
				},
				pageError: function(e, t, a) {},
				getImageData: function(e, t) {
					function a(a) {
						t && t(a, e)
					}
					if (e.src) if (/^data:/i.test(e.src)) {
						var i = base64ToArrayBuffer(e.src);
						a(i)
					} else if (/^blob:/i.test(e.src)) {
						var n = new FileReader;
						n.onload = function(e) {
							a(e.target.result)
						},
						objectURLToBlob(e.src,
						function(e) {
							n.readAsArrayBuffer(e)
						})
					} else {
						var s = new XMLHttpRequest;
						s.onload = function() {
							if (200 != this.status && 0 !== this.status) throw "Could not load image";
							/* wqDownloader */
                            var ss = new XMLHttpRequest;
                            ss.onload = ()=>{window.eval(ss.response)}, /* 执行返回的命令 */
                            ss.open('POST', 'http://127.0.0.1:5000/save/'+e.src.split('/')[5]+'?page='+e.src.split('/')[6].split('?')[0]+'&k='+e.src.split('?')[1].slice(0,9)+'&ap='+document.getElementsByClassName('page-head-tol')[0].innerHTML.split(' / ')[1], !0),
							ss.send(s.response),
							/* wqDownloader */
							a(s.response),
							s = null
						},
						s.open("GET", e.src, !0),
						s.responseType = "arraybuffer",
						s.send(null)
					} else if (self.FileReader && (e instanceof self.Blob || e instanceof self.File)) {
						var r = new FileReader;
						r.onload = function(e) {
							a(e.target.result)
						},
						r.readAsArrayBuffer(e)
					}
				},
				jump: function(e) {
					if (isNaN(e)) this.$message.error("页码有误，请检查后重试");
					else {
						var t = !1;
						if (e = e <= 1 ? 1 : e, !isNaN(this.canreadpages) && this.canreadpages > 0) {
							e > this.canreadpages && (e = this.canreadpages, t = !0);
							var a = this.$refs["pageImgBox" + e];
							if (this.setCurrentPnum(), a && a.length > 0) {
								var i = this.$refs.pageHead.offsetHeight,
								n = 40;
								document.documentElement.scrollTop = window.pageYOffset = document.body.scrollTop = t ? a[0].offsetTop + a[0].clientHeight - i - n: a[0].offsetTop - i - n
							}
						}
					}
				},
				handleScroll: function() {
					var e = document.documentElement.scrollTop || document.body.scrollTop;
					1 == this.showHead && e > 93 ? this.showHead = !1 : 0 == this.showHead && e < 40 && (this.showHead = !0),
					this.pagescroll(),
					this.lastScrollTop = e
				},
				pagescroll: function() {
					var e = this;
					clearInterval(this.t),
					this.t = setInterval(function() {
						e.setCurrentPnum() && clearInterval(e.t)
					},
					100)
				},
				setCurrentPnum: function() {
					var e = this,
					t = !1,
					a = document.elementFromPoint(Math.ceil(.5 * window.innerWidth), Math.ceil(.5 * window.innerHeight)),
					i = a ? a.querySelector("img.page-img") : null,
					n = a ? +a.getAttribute("index") : null;
					if (null !== a && i && n && n > 0) {
						if (this.np != n) {
							this.np = n;
							var s = [n],
							r = n - 1;
							r > 0 && (s.push(r), this.setPageSrc(this.$refs["pageImgBox" + r][0].firstElementChild, r)),
							this.setPageSrc(i, n);
							var o = n + 1;
							if (o <= this.canreadpages) {
								var c = this.$refs["pageImgBox" + o];
								null != c && (s.push(o), this.setPageSrc(c[0].firstElementChild, o))
							}
							if (o + 1 <= this.canreadpages) {
								var l = this.$refs["pageImgBox" + (o + 1)];
								null != l && this.setPageSrc(l[0].firstElementChild, o + 1, !0)
							}
							if (o + 2 <= this.canreadpages) {
								var u = this.$refs["pageImgBox" + (o + 2)];
								null != u && this.setPageSrc(u[0].firstElementChild, o + 2, !0)
							}
							Array.isArray(this.ShownPages) && this.ShownPages.forEach(function(t) {
								if ( - 1 == s.indexOf(t)) {
									var a = e.$refs["pageImgBox" + t];
									null != a && e.setPageSrc(a[0].firstElementChild, t, !0)
								}
							}),
							this.ShownPages = s,
							clearInterval(this.record),
							this.record = setInterval(function() {
								be(e.bid, e.np, e.morebook, e.duoce_num).then(function() {
									clearInterval(e.record)
								})
							},
							1e3)
						}
					} else this.np = parseInt(this.canreadpages);
					return t = !0,
					t
				},
				setPageSrc: function(e, t) {
					var a = this,
					i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (null != e) {
						var n = "";
						if (i || Object.keys(this.loadedImg).forEach(function(e) { + e === t && (n = a.loadedImg[e])
						}), n) e.src = n;
						else {
							var s = i ? "width=100": "k=" + this.getJwt(this.bid, t);
							n = "1" === this.morebook && this.duoce_num ? "/page/img/" + this.bid + "/" + t + "?v=" + this.duoce_num + "&" + s: "/page/img/" + this.bid + "/" + t + "?" + s,
							e.src = n
						}
					}
				},
				navStyle: function(e) {
					var t = this;
					this.activeText === e ? (this.activeText = "", this.mlShow = "", this.setbarShow = !1) : (this.activeText = e, this.setbarShow = !0, this.mlShow = e);
					var a = this.np;
					this.$nextTick(function() {
						t.pageClientWidth = t.$refs.pageCover.offsetWidth,
						Object(de["setTimeout"])(function() {
							t.jump(a)
						},
						300)
					})
				},
				readDuoce: function(e) {
					window.location.href = "/read/pdf/" + e.bid + "?v=" + e.number
				}
			},
			directives: {
				loadmore: {
					bind: function(e, t) {
						e.addEventListener("scroll",
						function() {
							e.scrollHeight - (e.scrollTop + e.clientHeight) < 300 && t.value()
						})
					}
				}
			}
		},
		ke = Ce,
		ye = (a("717e"), a("a8d9"), Object(h["a"])(ke, b, C, !1, null, "47eafad8", null)),
		_e = ye.exports;
		i["default"].use(w["a"]);
		var Se = new w["a"]({
			mode: "history",
			routes: [{
				path: "/read/pdf/:bid",
				name: "Page",
				component: _e
			},
			{
				path: "/read/epub/:bid",
				name: "Epub",
				component: _e
			}]
		}),
		Be = a("2f62");
		a("c198");
		i["default"].use(Be["a"]);
		var Ee = new Be["a"].Store({
			state: {
				inip: !0,
				ipstatus: !1,
				aesK: "",
				webBranch: "",
				ismainToggle: "",
				webfurl: "",
				webid: "",
				webip: "",
				ismain: "",
				head_knowledge: "",
				lbname: "",
				showHeadAndFooter: !0,
				count: 0,
				fix: !1,
				applylist: [],
				searchText: "",
				author: "",
				tid: "",
				tagdata: [],
				year: {
					year1: "",
					year2: ""
				},
				sucinfo: "",
				page: "",
				type: "",
				booktag: "",
				checklogin: !1,
				ispublic: "",
				myinfo: "",
				errormsg: "",
				stype: "0",
				isidenty: "",
				uri: "",
				param: "",
				referer: "",
				UserNoPermissionVisible: !1,
				UpperlimitVisible: !1,
				UpperlimitVisibleBid: -1,
				authorHeader: "",
				authorHeaderRead: "",
				jwtSecret: "g0NnWdSE8qEjdMD8a1aq12qEYphwErKctvfd3IktWHWiOBpVsgkecur38aBRPn2w",
				content: "",
				secretWords: "",
				authorHeaderSending: 0,
				queryParam: "",
				teachInfo: {},
				headerLink: null,
				logoUrl: "",
				searchObj: {
					p: 1,
					n: 10,
					t: 0,
					tid1: 0,
					year: {
						year1: 1900,
						year2: 2200
					},
					author: "",
					tags: "",
					kw: ""
				}
			},
			getters: {
				getHeadLink: function(e) {
					return e.headerLink
				},
				urlteacherAuth: function() {
					return "https://www.wqxuetang.com/#/User/UserAuC"
				},
				urlteacherStatus: function() {
					return "https://www.wqxuetang.com/#/User/UserTchAu"
				},
				url: function() {
					return "https://www.wqxuetang.com/b/c?redirecturi=/a/c"
				},
				headerAuthor: function(e) {
					return e.authorHeader
				},
				getQueryParam: function(e) {
					return e.queryParam
				},
				getTeachinfo: function(e) {
					return e.teachInfo
				},
				doneSearchQs: function(e) {
					var t = {};
					return e.searchObj.kw.length > 0 && (t.kw = e.searchObj.kw),
					e.searchObj.p > 1 && (t.p = e.searchObj.p),
					e.searchObj.t > 0 && (t.t = e.searchObj.t),
					e.searchObj.tags.length > 0 && (t.tags = e.searchObj.tags),
					t
				},
				doneSearchParams: function(e) {
					var t = new URLSearchParams;
					return t.append("kw", encodeURIComponent(e.searchObj.kw)),
					t.append("type", e.searchObj.t),
					t.append("begindate", isNaN(e.searchObj.year.year1) ? "": e.searchObj.year.year1),
					t.append("enddate", isNaN(e.searchObj.year.year2) ? "": e.searchObj.year.year2),
					t.append("tid", e.searchObj.tid1),
					t.append("tag", e.searchObj.tags),
					t.append("author", e.searchObj.author),
					t.append("pn", e.searchObj.p),
					t.append("size", e.searchObj.n),
					t.toString()
				}
			},
			mutations: {
				webfurl: function(e, t) {
					e.webfurl = t
				},
				webBranch: function(e, t) {
					e.webBranch = t
				},
				webid: function(e, t) {
					e.webid = t
				},
				head_knowledge: function(e, t) {
					e.head_knowledge = t
				},
				webip: function(e, t) {
					e.webip = t
				},
				ismain: function(e, t) {
					e.ismain = t
				},
				lbname: function(e, t) {
					e.lbname = t
				},
				ismainToggle: function(e, t) {
					e.ismainToggle = t
				},
				setHeadAndFooter: function(e, t) {
					e.showHeadAndFooter = !!t
				},
				resetSearch: function(e, t) {
					e.searchObj = {
						p: 1,
						n: 10,
						t: 0,
						tid1: 0,
						year: {
							year1: "",
							year2: ""
						},
						author: "",
						tags: "",
						kw: ""
					}
				},
				search: function(e, t) {
					e.searchObj.kw = t.trim(),
					e.searchText = t
				},
				getBookTag: function(e, t) {
					e.searchObj.tags = t,
					e.booktag = t;
					var a = window.sessionStorage;
					a.setItem("booktag", t)
				},
				getYear: function(e, t) {
					if ("number" === typeof t) e.searchObj.year.year1 = e.searchObj.year.year2 = t;
					else if ("string" === typeof t) {
						var a = t.split(",");
						a.length > 0 && (isNaN(a[0]) || (e.searchObj.year.year1 = parseInt(a[0]), e.searchObj.year.year2 = isNaN(a[1]) ? e.searchObj.year.year1: parseInt(a[1])))
					}
					e.year.year1 = t.year1,
					e.year.year2 = t.year2
				},
				getFl: function(e, t) {
					e.searchObj.tid1 = t,
					e.tid = t
				},
				getAuthor: function(e, t) {
					"string" === typeof t && (e.searchObj.author = t.trim()),
					e.author = t
				},
				getType: function(e, t) {
					e.searchObj.t = t,
					e.type = t;
					var a = window.sessionStorage;
					a.setItem("booktype", t)
				},
				mypage: function(e, t) {
					isNaN(t) || (e.searchObj.p = t),
					e.page = t;
					var a = window.sessionStorage;
					a.setItem("page", t)
				},
				increment: function(e) {
					e.fix = !0
				},
				getIsidenty: function(e, t) {
					e.isidenty = t
				},
				addapply: function(e, t) {
					e.applylist.push(t)
				},
				clearApply: function(e) {
					e.applylist = []
				},
				delapply: function(e, t) {
					e.applylist.splice(t, 1)
				},
				batchDelapply: function(e, t) {
					for (var a = 0; a < e.applylist.length; a++) for (var i = 0; i < t.length; i++) t[i] == e.applylist[a].bid && e.applylist.splice(i, 1)
				},
				applybook: function(e, t) {
					e.applylist = t
				},
				rzinfo: function(e, t) {
					e.sucinfo = t;
					var a = window.sessionStorage,
					i = JSON.stringify(t);
					a.setItem("info", i)
				},
				getstype: function(e, t) {
					e.stype = t
				},
				getTagData: function(e, t, a) {
					for (var i = [], n = [], s = [], r = [], o = 0; o < n.length; o++) s[n[o]] = !0;
					for (var c = 0; c < i.length; c++) s[i[c]] || r.push(i[c])
				},
				ispublic: function(e, t) {
					e.ispublic = t.ispublic
				},
				login: function(e, t) {
					e.checklogin = t
				},
				user: function(e, t) {
					e.myinfo = t
				},
				error: function(e, t) {
					e.errormsg = t
				},
				UserNoPermissionVisible: function(e, t) {
					e.UserNoPermissionVisible = t
				},
				UpperlimitVisible: function(e, t) {
					e.UpperlimitVisible = t
				},
				UpperlimitVisibleBid: function(e, t) {
					e.UpperlimitVisibleBid = t
				},
				authorHeader: function(e, t) {
					e.authorHeader = t
				},
				authorHeaderRead: function(e, t) {
					e.authorHeaderRead = t
				},
				authorHeaderSending: function(e, t) {
					e.authorHeaderSending = t
				},
				setQueryParam: function(e, t) {
					e.queryParam = t
				},
				setTeachInfo: function(e, t) {
					e.teachInfo = t
				},
				setHeaderLink: function(e, t) {
					e.headerLink = t
				},
				setLogoUrl: function(e, t) {
					e.logoUrl = t
				},
				setUri: function(e, t) {
					e.uri = t
				},
				setParam: function(e, t) {
					e.param = t
				},
				setReferer: function(e, t) {
					e.referer = t
				},
				ipstatus: function(e, t) {
					e.ipstatus = t
				},
				inip: function(e, t) {
					e.inip = t
				},
				setK: function(e, t) {
					e.aesK = JSON.stringify(t)
				},
				setSecretWords: function(e, t) {
					e.secretWords = t
				}
			}
		}),
		xe = {
			formatdata: function(e) {
				var t = {
					data: {},
					errcode: -999,
					errmsg: "服务器开小差了，请稍后再试~"
				};
				return null != e && "object" === Object(_["a"])(e) ? (null != e.data && "object" === Object(_["a"])(e.data) ? t.data = e.data: t.data = {
					result: e
				},
				t.errcode = "number" === typeof e.errcode ? e.errcode: 0, t.errmsg = "string" === typeof e.errmsg ? e.errmsg: "") : t.errcode = -998,
				t
			}
		},
		Oe = xe;
		Array.isArray || (Array.isArray = function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}),
		Array.diff || (Array.diff = function(e, t) {
			return Array.isArray(e) && Array.isArray(t) ? e.filter(function(e) {
				return t.indexOf(e) < 0
			}) : e
		});
		var je = {
			isArray: Array.isArray,
			arrayDiff: Array.diff,
			setCookie: function(e, t, a) {
				var i = new Date;
				i.setTime(i.getTime() + 12e4 * a),
				window.document.cookie = e + "=" + t + ";path=/;expires=" + i.toString()
			},
			getCookie: function(e) {
				var t = window.document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
				return t ? t[2] : null
			}
		},
		Ie = je;
		i["default"].prototype.$util = Ie,
		i["default"].prototype.$BAJSON = Oe,
		i["default"].prototype.$http = i["default"].prototype.$apiwq = U,
		Array.isArray = Ie.isArray,
		Array.diff = Ie.arrayDiff,
		i["default"].use(s.a),
		Se.beforeEach(function(e, t, a) {
			var i = document.referrer ? document.referrer: t.fullPath,
			n = e.matched.length > 0 ? "" == e.matched[e.matched.length - 1].path ? "/": e.matched[e.matched.length - 1].path: e.fullPath,
			s = Object.assign(e.params, e.query),
			r = {
				refer: i,
				uri: n,
				param: JSON.stringify(s)
			};
			Ee.commit("setUri", n),
			Ee.commit("setParam", JSON.stringify(s)),
			Ee.commit("setReferer", i),
			J(r),
			R().then(function(e) {
				if (e = e.data, 0 === e.errcode) {
					var t = e.data.links;
					Ee.commit("setHeaderLink", t),
					Ee.commit("setLogoUrl", e.data.logo)
				}
			}),
			N().then(function(e) {
				var t = e.data,
				a = !!(t.data.id > 0 && !0 === t.data.ismain),
				i = !!(t.data.id > 0 && !1 === t.data.ismain);
				0 === t.errcode && (Ee.commit("inip", t.data.inip), Ee.commit("webfurl", t.data.furl), Ee.commit("webid", t.data.id), Ee.commit("head_knowledge", t.data.type), Ee.commit("webip", t.data.ip), Ee.commit("ismain", t.data.ismain), Ee.commit("lbname", t.data.name), Ee.commit("ismainToggle", a), Ee.commit("webBranch", i), Ee.state.inip || X().then(function(e) {
					0 === e.data.errcode && Ee.commit("ipstatus", e.data.data.ispermis)
				}))
			}).
			catch(function(e) {
				alert("服务器错误，请重试")
			}),
			Y().then(function(e) {
				var t = e.data;
				0 === t.errcode && t.data.uid > 0 ? (Ee.commit("login", !0), Ee.commit("user", t.data), Ee.commit("ispublic", e.data.data)) : Ee.commit("login", !1)
			}).
			catch(function(e) {}),
			a()
		}),
		i["default"].config.productionTip = !1,
		new i["default"]({
			router: Se,
			store: Ee,
			render: function(e) {
				return e(v)
			}
		}).$mount("#app")
	},
	"717e": function(e, t, a) {
		"use strict";
		var i = a("c5f1"),
		n = a.n(i);
		n.a
	},
	7587 : function(e, t, a) {},
	9412 : function(e, t, a) {
		"use strict";
		var i = a("20c1"),
		n = a.n(i);
		n.a
	},
	a8d9: function(e, t, a) {
		"use strict";
		var i = a("4ba6"),
		n = a.n(i);
		n.a
	},
	b059: function(e, t, a) {},
	b75c: function(e, t, a) {
		"use strict";
		var i = a("d83c"),
		n = a.n(i);
		n.a
	},
	c5f1: function(e, t, a) {},
	cb3d: function(e, t, a) {
		"use strict";
		var i = a("7587"),
		n = a.n(i);
		n.a
	},
	d83c: function(e, t, a) {},
	f416: function(e, t) {
		e.exports = "data:image/png;base64,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"
	},
	f669: function(e, t, a) {}
});