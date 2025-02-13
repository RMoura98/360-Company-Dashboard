function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery);
}(this, function (t, e) {
  "use strict";

  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  for (var o, s, a, l, c, h, f, u, d, p, g, m, _, v, E, y, b, T, C, w, I, A, D, S, O, N, k, L, P, x, R, j, H, M, W, U, F, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ft, ut, dt, pt, gt = function (t) {
    var e = !1;

    function n(e) {
      var n = this,
          r = !1;
      return t(this).one(i.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || i.triggerTransitionEnd(n);
      }, e), this;
    }

    var i = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var n = e.getAttribute("data-target");
        n && "#" !== n || (n = e.getAttribute("href") || "");

        try {
          return t(document).find(n).length > 0 ? n : null;
        } catch (t) {
          return null;
        }
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            var o = n[r],
                s = e[r],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }

        var l;
      }
    };
    return e = ("undefined" == typeof window || !window.QUnit) && {
      end: "transitionend"
    }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
      bindType: e.end,
      delegateType: e.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }), i;
  }(e = e && e.hasOwnProperty("default") ? e["default"] : e), mt = (s = "alert", l = "." + (a = "bs.alert"), c = (o = e).fn[s], h = {
    CLOSE: "close" + l,
    CLOSED: "closed" + l,
    CLICK_DATA_API: "click" + l + ".data-api"
  }, f = "alert", u = "fade", d = "show", p = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      t = t || this._element;

      var e = this._getRootElement(t);

      this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      o.removeData(this._element, a), this._element = null;
    }, e._getRootElement = function (t) {
      var e = gt.getSelectorFromElement(t),
          n = !1;
      return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = o.Event(h.CLOSE);
      return o(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;
      o(t).removeClass(d), gt.supportsTransitionEnd() && o(t).hasClass(u) ? o(t).one(gt.TRANSITION_END, function (n) {
        return e._destroyElement(t, n);
      }).emulateTransitionEnd(150) : this._destroyElement(t);
    }, e._destroyElement = function (t) {
      o(t).detach().trigger(h.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = o(this),
            i = n.data(a);
        i || (i = new t(this), n.data(a, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), o(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), o.fn[s] = p._jQueryInterface, o.fn[s].Constructor = p, o.fn[s].noConflict = function () {
    return o.fn[s] = c, p._jQueryInterface;
  }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", C = "focus", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', A = "input", D = ".active", S = ".btn", O = {
    CLICK_DATA_API: "click" + v + E,
    FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E
  }, N = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(I)[0];

      if (n) {
        var i = g(this._element).find(A)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1;else {
            var r = g(n).find(D)[0];
            r && g(r).removeClass(b);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
    }, e.dispose = function () {
      g.removeData(this._element, _), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = g(this).data(_);
        n || (n = new t(this), g(this).data(_, n)), "toggle" === e && n[e]();
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(S)[0];
    g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
  }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
    return g.fn[m] = y, N._jQueryInterface;
  }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), R = ".data-api", j = (k = e).fn[L], H = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, M = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, W = "next", U = "prev", F = "left", B = "right", K = {
    SLIDE: "slide" + x,
    SLID: "slid" + x,
    KEYDOWN: "keydown" + x,
    MOUSEENTER: "mouseenter" + x,
    MOUSELEAVE: "mouseleave" + x,
    TOUCHEND: "touchend" + x,
    LOAD_DATA_API: "load" + x + R,
    CLICK_DATA_API: "click" + x + R
  }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  }, Z = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._transitionDuration = this._getTransitionDuration(), this._addEventListeners();
    }

    var e = t.prototype;
    return e.next = function () {
      this._isSliding || this._slide(W);
    }, e.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(U);
    }, e.pause = function (t) {
      t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && gt.supportsTransitionEnd() && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (t) {
      var e = this;
      this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = t > n ? W : U;

        this._slide(i, this._items[t]);
      }
    }, e.dispose = function () {
      k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (t) {
      return t = r({}, H, t), gt.typeCheckConfig(L, t, M), t;
    }, e._getTransitionDuration = function () {
      var t = k(this._element).find(J.ITEM).css("transition-duration");
      return t ? (t = t.split(",")[0]).indexOf("ms") > -1 ? parseFloat(t) : 1e3 * parseFloat(t) : 0;
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && k(this._element).on(K.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(K.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), ("ontouchstart" in document.documentElement) && k(this._element).on(K.TOUCHEND, function () {
        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval);
      }));
    }, e._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (t) {
      return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t);
    }, e._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === U,
          r = this._getItemIndex(e),
          o = this._items.length - 1;

      if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
      var s = (r + (t === U ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),
          r = k.Event(K.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return k(this._element).trigger(r), r;
    }, e._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);

        var e = this._indicatorsElement.children[this._getItemIndex(t)];

        e && k(e).addClass(Q);
      }
    }, e._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = k(this._element).find(J.ACTIVE_ITEM)[0],
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (t === W ? (n = q, i = z, r = F) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var f = k.Event(K.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: c
        });
        gt.supportsTransitionEnd() && k(this._element).hasClass(Y) ? (k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n), k(s).one(gt.TRANSITION_END, function () {
          k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
            return k(o._element).trigger(f);
          }, 0);
        }).emulateTransitionEnd(this._transitionDuration)) : (k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f)), h && this.cycle();
      }
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this).data(P),
            i = r({}, H, k(this).data());
        "object" == _typeof(e) && (i = r({}, i, e));
        var o = "string" == typeof e ? e : i.slide;
        if (n || (n = new t(this, i), k(this).data(P, n)), "number" == typeof e) n.to(e);else if ("string" == typeof o) {
          if ("undefined" == typeof n[o]) throw new TypeError('No method named "' + o + '"');
          n[o]();
        } else i.interval && (n.pause(), n.cycle());
      });
    }, t._dataApiClickHandler = function (e) {
      var n = gt.getSelectorFromElement(this);

      if (n) {
        var i = k(n)[0];

        if (i && k(i).hasClass(V)) {
          var o = r({}, k(i).data(), k(this).data()),
              s = this.getAttribute("data-slide-to");
          s && (o.interval = !1), t._jQueryInterface.call(k(i), o), s && k(i).data(P).to(s), e.preventDefault();
        }
      }
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return H;
      }
    }]), t;
  }(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
    k(J.DATA_RIDE).each(function () {
      var t = k(this);

      Z._jQueryInterface.call(t, t.data());
    });
  }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
    return k.fn[L] = j, Z._jQueryInterface;
  }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = {
    toggle: !0,
    parent: ""
  }, ot = {
    toggle: "boolean",
    parent: "(string|element)"
  }, st = {
    SHOW: "show" + nt,
    SHOWN: "shown" + nt,
    HIDE: "hide" + nt,
    HIDDEN: "hidden" + nt,
    CLICK_DATA_API: "click" + nt + ".data-api"
  }, at = "show", lt = "collapse", ct = "collapsing", ht = "collapsed", ft = "width", ut = "height", dt = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }, pt = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            o = gt.getSelectorFromElement(r);
        null !== o && $(o).filter(t).length > 0 && (this._selector = o, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = t.prototype;
    return e.toggle = function () {
      $(this._element).hasClass(at) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          n,
          i = this;

      if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (e = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (n = $(e).not(this._selector).data(et)) && n._isTransitioning))) {
        var r = $.Event(st.SHOW);

        if ($(this._element).trigger(r), !r.isDefaultPrevented()) {
          e && (t._jQueryInterface.call($(e).not(this._selector), "hide"), n || $(e).data(et, null));

          var o = this._getDimension();

          $(this._element).removeClass(lt).addClass(ct), this._element.style[o] = 0, this._triggerArray.length > 0 && $(this._triggerArray).removeClass(ht).attr("aria-expanded", !0), this.setTransitioning(!0);

          var s = function s() {
            $(i._element).removeClass(ct).addClass(lt).addClass(at), i._element.style[o] = "", i.setTransitioning(!1), $(i._element).trigger(st.SHOWN);
          };

          if (gt.supportsTransitionEnd()) {
            var a = "scroll" + (o[0].toUpperCase() + o.slice(1));
            $(this._element).one(gt.TRANSITION_END, s).emulateTransitionEnd(600), this._element.style[o] = this._element[a] + "px";
          } else s();
        }
      }
    }, e.hide = function () {
      var t = this;

      if (!this._isTransitioning && $(this._element).hasClass(at)) {
        var e = $.Event(st.HIDE);

        if ($(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), this._triggerArray.length > 0) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                o = gt.getSelectorFromElement(r);
            if (null !== o) $(o).hasClass(at) || $(r).addClass(ht).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);

          var s = function s() {
            t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN);
          };

          this._element.style[n] = "", gt.supportsTransitionEnd() ? $(this._element).one(gt.TRANSITION_END, s).emulateTransitionEnd(600) : s();
        }
      }
    }, e.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, e.dispose = function () {
      $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (t) {
      return (t = r({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t;
    }, e._getDimension = function () {
      return $(this._element).hasClass(ft) ? ft : ut;
    }, e._getParent = function () {
      var e = this,
          n = null;
      gt.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = $(this._config.parent)[0];
      var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return $(n).find(i).each(function (n, i) {
        e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
      }), n;
    }, e._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = $(t).hasClass(at);
        e.length > 0 && $(e).toggleClass(ht, !n).attr("aria-expanded", n);
      }
    }, t._getTargetFromElement = function (t) {
      var e = gt.getSelectorFromElement(t);
      return e ? $(e)[0] : null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = $(this),
            i = n.data(et),
            o = r({}, rt, n.data(), "object" == _typeof(e) && e);

        if (!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || (i = new t(this, o), n.data(et, i)), "string" == typeof e) {
          if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
          i[e]();
        }
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return rt;
      }
    }]), t;
  }(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var e = $(this),
        n = gt.getSelectorFromElement(this);
    $(n).each(function () {
      var t = $(this),
          n = t.data(et) ? "toggle" : e.data();

      pt._jQueryInterface.call(t, n);
    });
  }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
    return $.fn[tt] = it, pt._jQueryInterface;
  }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1) {
    if (yt && navigator.userAgent.indexOf(bt[Ct]) >= 0) {
      Tt = 1;
      break;
    }
  }

  var wt = yt && window.Promise ? function (t) {
    var e = !1;
    return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;
    return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Tt));
    };
  };

  function It(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }

  function At(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }

  function Dt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }

  function St(t) {
    if (!t) return document.body;

    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;

      case "#document":
        return t.body;
    }

    var e = At(t),
        n = e.overflow,
        i = e.overflowX,
        r = e.overflowY;
    return /(auto|scroll)/.test(n + r + i) ? t : St(Dt(t));
  }

  function Ot(t) {
    var e = t && t.offsetParent,
        n = e && e.nodeName;
    return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === At(e, "position") ? Ot(e) : e : t ? t.ownerDocument.documentElement : document.documentElement;
  }

  function Nt(t) {
    return null !== t.parentNode ? Nt(t.parentNode) : t;
  }

  function kt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        r = n ? e : t,
        o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
        a,
        l = o.commonAncestorContainer;
    if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Ot(s.firstElementChild) !== s ? Ot(l) : l;
    var c = Nt(t);
    return c.host ? kt(c.host, e) : kt(t, Nt(e).host);
  }

  function Lt(t) {
    var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || i)[e];
    }

    return t[e];
  }

  function Pt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }

  var xt = void 0,
      Rt = function Rt() {
    return void 0 === xt && (xt = -1 !== navigator.appVersion.indexOf("MSIE 10")), xt;
  };

  function jt(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Rt() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
  }

  function Ht() {
    var t = document.body,
        e = document.documentElement,
        n = Rt() && getComputedStyle(e);
    return {
      height: jt("Height", t, e, n),
      width: jt("Width", t, e, n)
    };
  }

  var Mt = function Mt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      Wt = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      Ut = function Ut(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  },
      Ft = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function Bt(t) {
    return Ft({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }

  function Kt(t) {
    var e = {};
    if (Rt()) try {
      e = t.getBoundingClientRect();
      var n = Lt(t, "top"),
          i = Lt(t, "left");
      e.top += n, e.left += i, e.bottom += n, e.right += i;
    } catch (t) {} else e = t.getBoundingClientRect();
    var r = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    },
        o = "HTML" === t.nodeName ? Ht() : {},
        s = o.width || t.clientWidth || r.right - r.left,
        a = o.height || t.clientHeight || r.bottom - r.top,
        l = t.offsetWidth - s,
        c = t.offsetHeight - a;

    if (l || c) {
      var h = At(t);
      l -= Pt(h, "x"), c -= Pt(h, "y"), r.width -= l, r.height -= c;
    }

    return Bt(r);
  }

  function Vt(t, e) {
    var n = Rt(),
        i = "HTML" === e.nodeName,
        r = Kt(t),
        o = Kt(e),
        s = St(t),
        a = At(e),
        l = parseFloat(a.borderTopWidth, 10),
        c = parseFloat(a.borderLeftWidth, 10),
        h = Bt({
      top: r.top - o.top - l,
      left: r.left - o.left - c,
      width: r.width,
      height: r.height
    });

    if (h.marginTop = 0, h.marginLeft = 0, !n && i) {
      var f = parseFloat(a.marginTop, 10),
          u = parseFloat(a.marginLeft, 10);
      h.top -= l - f, h.bottom -= l - f, h.left -= c - u, h.right -= c - u, h.marginTop = f, h.marginLeft = u;
    }

    return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (h = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = Lt(e, "top"),
          r = Lt(e, "left"),
          o = n ? -1 : 1;
      return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
    }(h, e)), h;
  }

  function Qt(t, e, n, i) {
    var r,
        o,
        s,
        a,
        l,
        c,
        h,
        f = {
      top: 0,
      left: 0
    },
        u = kt(t, e);
    if ("viewport" === i) o = (r = u).ownerDocument.documentElement, s = Vt(r, o), a = Math.max(o.clientWidth, window.innerWidth || 0), l = Math.max(o.clientHeight, window.innerHeight || 0), c = Lt(o), h = Lt(o, "left"), f = Bt({
      top: c - s.top + s.marginTop,
      left: h - s.left + s.marginLeft,
      width: a,
      height: l
    });else {
      var d = void 0;
      "scrollParent" === i ? "BODY" === (d = St(Dt(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;
      var p = Vt(d, u);
      if ("HTML" !== d.nodeName || function t(e) {
        var n = e.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === At(e, "position") || t(Dt(e)));
      }(u)) f = p;else {
        var g = Ht(),
            m = g.height,
            _ = g.width;
        f.top += p.top - p.marginTop, f.bottom = m + p.top, f.left += p.left - p.marginLeft, f.right = _ + p.left;
      }
    }
    return f.left += n, f.top += n, f.right -= n, f.bottom -= n, f;
  }

  function Yt(t, e, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Qt(n, i, o, r),
        a = {
      top: {
        width: s.width,
        height: e.top - s.top
      },
      right: {
        width: s.right - e.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - e.bottom
      },
      left: {
        width: e.left - s.left,
        height: s.height
      }
    },
        l = Object.keys(a).map(function (t) {
      return Ft({
        key: t
      }, a[t], {
        area: (e = a[t], e.width * e.height)
      });
      var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          i = t.height;
      return e >= n.clientWidth && i >= n.clientHeight;
    }),
        h = c.length > 0 ? c[0].key : l[0].key,
        f = t.split("-")[1];
    return h + (f ? "-" + f : "");
  }

  function Gt(t, e, n) {
    return Vt(n, kt(e, n));
  }

  function qt(t) {
    var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n
    };
  }

  function zt(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }

  function Xt(t, e, n) {
    n = n.split("-")[0];
    var i = qt(t),
        r = {
      width: i.width,
      height: i.height
    },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[zt(a)], r;
  }

  function Jt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }

  function Zt(t, e, n) {
    return (void 0 === n ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });
      var i = Jt(t, function (t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }(t, "name", n))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var n = t["function"] || t.fn;
      t.enabled && It(n) && (e.offsets.popper = Bt(e.offsets.popper), e.offsets.reference = Bt(e.offsets.reference), e = n(e, t));
    }), e;
  }

  function $t(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }

  function te(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
      var r = e[i],
          o = r ? "" + r + n : t;
      if ("undefined" != typeof document.body.style[o]) return o;
    }

    return null;
  }

  function ee(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }

  function ne(t, e, n, i) {
    n.updateBound = i, ee(t).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var r = St(t);
    return function t(e, n, i, r) {
      var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;
      s.addEventListener(n, i, {
        passive: !0
      }), o || t(St(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }

  function ie() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ee(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }

  function re(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }

  function oe(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && re(e[n]) && (i = "px"), t.style[n] = e[n] + i;
    });
  }

  function se(t, e, n) {
    var i = Jt(t, function (t) {
      return t.name === e;
    }),
        r = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });

    if (!r) {
      var o = "`" + e + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }

    return r;
  }

  var ae = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      le = ae.slice(3);

  function ce(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = le.indexOf(t),
        i = le.slice(n + 1).concat(le.slice(0, n));
    return e ? i.reverse() : i;
  }

  var he = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
  };

  function fe(t, e, n, i) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        s = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        a = s.indexOf(Jt(s, function (t) {
      return -1 !== t.search(/,|\s/);
    }));
    s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
    return (c = c.map(function (t, i) {
      var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;
      return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];
          if (!o) return t;

          if (0 === s.indexOf("%")) {
            var a = void 0;

            switch (s) {
              case "%p":
                a = n;
                break;

              case "%":
              case "%r":
              default:
                a = i;
            }

            return Bt(a)[e] / 100 * o;
          }

          if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          return o;
        }(t, r, e, n);
      });
    })).forEach(function (t, e) {
      t.forEach(function (n, i) {
        re(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
      });
    }), r;
  }

  var ue = {
    placement: "bottom",
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];

          if (i) {
            var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
              start: Ut({}, l, o[l]),
              end: Ut({}, l, o[l] + o[c] - s[c])
            };
            t.offsets.popper = Ft({}, s, h[i]);
          }

          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = re(+n) ? [+n, 0] : fe(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.boundariesElement || Ot(t.instance.popper);
          t.instance.reference === n && (n = Ot(n));
          var i = Qt(t.instance.popper, t.instance.reference, e.padding, n);
          e.boundaries = i;
          var r = e.priority,
              o = t.offsets.popper,
              s = {
            primary: function primary(t) {
              var n = o[t];
              return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), Ut({}, t, n);
            },
            secondary: function secondary(t) {
              var n = "right" === t ? "left" : "top",
                  r = o[n];
              return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), Ut({}, n, r);
            }
          };
          return r.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            o = Ft({}, o, s[e](t));
          }), t.offsets.popper = o, t;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(t, e) {
          var n;
          if (!se(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;

          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

          var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              f = h.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = qt(i)[c];
          a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = Bt(t.offsets.popper);

          var g = a[f] + a[c] / 2 - p / 2,
              m = At(t.instance.popper),
              _ = parseFloat(m["margin" + h], 10),
              v = parseFloat(m["border" + h + "Width"], 10),
              E = g - t.offsets.popper[f] - _ - v;

          return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ut(n = {}, f, Math.round(E)), Ut(n, u, ""), n), t;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(t, e) {
          if ($t(t.instance.modifiers, "inner")) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          var n = Qt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
              i = t.placement.split("-")[0],
              r = zt(i),
              o = t.placement.split("-")[1] || "",
              s = [];

          switch (e.behavior) {
            case he.FLIP:
              s = [i, r];
              break;

            case he.CLOCKWISE:
              s = ce(i);
              break;

            case he.COUNTERCLOCKWISE:
              s = ce(i, !0);
              break;

            default:
              s = e.behavior;
          }

          return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return t;
            i = t.placement.split("-")[0], r = zt(i);

            var c,
                h = t.offsets.popper,
                f = t.offsets.reference,
                u = Math.floor,
                d = "left" === i && u(h.right) > u(f.left) || "right" === i && u(h.left) < u(f.right) || "top" === i && u(h.bottom) > u(f.top) || "bottom" === i && u(h.top) < u(f.bottom),
                p = u(h.left) < u(n.left),
                g = u(h.right) > u(n.right),
                m = u(h.top) < u(n.top),
                _ = u(h.bottom) > u(n.bottom),
                v = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && _,
                E = -1 !== ["top", "bottom"].indexOf(i),
                y = !!e.flipVariations && (E && "start" === o && p || E && "end" === o && g || !E && "start" === o && m || !E && "end" === o && _);

            (d || v || y) && (t.flipped = !0, (d || v) && (i = s[l + 1]), y && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = Ft({}, t.offsets.popper, Xt(t.instance.popper, t.offsets.reference, t.placement)), t = Zt(t.instance.modifiers, t, "flip"));
          }), t;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = zt(e), t.offsets.popper = Bt(r), t;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(t) {
          if (!se(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
              n = Jt(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;

          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }

          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = Jt(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== o ? o : e.gpuAcceleration,
              a = Kt(Ot(t.instance.popper)),
              l = {
            position: r.position
          },
              c = {
            left: Math.floor(r.left),
            top: Math.floor(r.top),
            bottom: Math.floor(r.bottom),
            right: Math.floor(r.right)
          },
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              u = te("transform"),
              d = void 0,
              p = void 0;
          if (p = "bottom" === h ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[h] = 0, l[f] = 0, l.willChange = "transform";else {
            var g = "bottom" === h ? -1 : 1,
                m = "right" === f ? -1 : 1;
            l[h] = p * g, l[f] = d * m, l.willChange = h + ", " + f;
          }
          var _ = {
            "x-placement": t.placement
          };
          return t.attributes = Ft({}, _, t.attributes), t.styles = Ft({}, l, t.styles), t.arrowStyles = Ft({}, t.offsets.arrow, t.arrowStyles), t;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(t) {
          var e, n;
          return oe(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && oe(t.arrowElement, t.arrowStyles), t;
        },
        onLoad: function onLoad(t, e, n, i, r) {
          var o = Gt(0, e, t),
              s = Yt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", s), oe(e, {
            position: "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      de = function () {
    function t(e, n) {
      var i = this,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      Mt(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = wt(this.update.bind(this)), this.options = Ft({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Ft({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = Ft({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Ft({
          name: t
        }, i.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && It(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var o = this.options.eventsEnabled;
      o && this.enableEventListeners(), this.state.eventsEnabled = o;
    }

    return Wt(t, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            t.offsets.reference = Gt(this.state, this.popper, this.reference), t.placement = Yt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = Xt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = Zt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, $t(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[te("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = ne(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return ie.call(this);
      }
    }]), t;
  }();

  de.Utils = ("undefined" != typeof window ? window : global).PopperUtils, de.placements = ae, de.Defaults = ue;

  var pe,
      ge,
      me,
      _e,
      ve,
      Ee,
      ye,
      be,
      Te,
      Ce,
      we,
      Ie,
      Ae,
      De,
      Se,
      Oe,
      Ne,
      ke,
      Le,
      Pe,
      xe,
      Re,
      je,
      He,
      Me,
      We,
      Ue,
      Fe,
      Be,
      Ke,
      Ve,
      Qe,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      hn,
      fn,
      un,
      dn,
      pn,
      gn,
      mn,
      _n,
      vn,
      En,
      yn,
      bn,
      Tn,
      Cn,
      wn,
      In,
      An,
      Dn,
      Sn,
      On,
      Nn,
      kn,
      Ln,
      Pn,
      xn,
      Rn,
      jn,
      Hn,
      Mn,
      Wn,
      Un,
      Fn,
      Bn,
      Kn,
      Vn,
      Qn,
      Yn,
      Gn,
      qn,
      zn,
      Xn,
      Jn,
      Zn,
      $n,
      ti,
      ei,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      hi,
      fi,
      ui,
      di,
      pi,
      gi,
      mi,
      _i,
      vi,
      Ei,
      yi = (ge = "dropdown", _e = "." + (me = "bs.dropdown"), ve = ".data-api", Ee = (pe = e).fn[ge], ye = new RegExp("38|40|27"), be = {
    HIDE: "hide" + _e,
    HIDDEN: "hidden" + _e,
    SHOW: "show" + _e,
    SHOWN: "shown" + _e,
    CLICK: "click" + _e,
    CLICK_DATA_API: "click" + _e + ve,
    KEYDOWN_DATA_API: "keydown" + _e + ve,
    KEYUP_DATA_API: "keyup" + _e + ve
  }, Te = "disabled", Ce = "show", we = "dropup", Ie = "dropright", Ae = "dropleft", De = "dropdown-menu-right", Se = "position-static", Oe = '[data-toggle="dropdown"]', Ne = ".dropdown form", ke = ".dropdown-menu", Le = ".navbar-nav", Pe = ".dropdown-menu .dropdown-item:not(.disabled)", xe = "top-start", Re = "top-end", je = "bottom-start", He = "bottom-end", Me = "right-start", We = "left-start", Ue = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Fe = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Be = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = t.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !pe(this._element).hasClass(Te)) {
        var e = t._getParentFromElement(this._element),
            n = pe(this._menu).hasClass(Ce);

        if (t._clearMenus(), !n) {
          var i = {
            relatedTarget: this._element
          },
              r = pe.Event(be.SHOW, i);

          if (pe(e).trigger(r), !r.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof de) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var o = this._element;
              "parent" === this._config.reference ? o = e : gt.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && pe(e).addClass(Se), this._popper = new de(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === pe(e).closest(Le).length && pe(document.body).children().on("mouseover", null, pe.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), pe(this._menu).toggleClass(Ce), pe(e).toggleClass(Ce).trigger(pe.Event(be.SHOWN, i));
          }
        }
      }
    }, e.dispose = function () {
      pe.removeData(this._element, me), pe(this._element).off(_e), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      pe(this._element).on(be.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (t) {
      return t = r({}, this.constructor.Default, pe(this._element).data(), t), gt.typeCheckConfig(ge, t, this.constructor.DefaultType), t;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = t._getParentFromElement(this._element);

        this._menu = pe(e).find(ke)[0];
      }

      return this._menu;
    }, e._getPlacement = function () {
      var t = pe(this._element).parent(),
          e = je;
      return t.hasClass(we) ? (e = xe, pe(this._menu).hasClass(De) && (e = Re)) : t.hasClass(Ie) ? e = Me : t.hasClass(Ae) ? e = We : pe(this._menu).hasClass(De) && (e = He), e;
    }, e._detectNavbar = function () {
      return pe(this._element).closest(".navbar").length > 0;
    }, e._getPopperConfig = function () {
      var t = this,
          e = {};
      "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
      } : e.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: e,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = pe(this).data(me);

        if (n || (n = new t(this, "object" == _typeof(e) ? e : null), pe(this).data(me, n)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = pe.makeArray(pe(Oe)), i = 0; i < n.length; i++) {
        var r = t._getParentFromElement(n[i]),
            o = pe(n[i]).data(me),
            s = {
          relatedTarget: n[i]
        };

        if (o) {
          var a = o._menu;

          if (pe(r).hasClass(Ce) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && pe.contains(r, e.target))) {
            var l = pe.Event(be.HIDE, s);
            pe(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), n[i].setAttribute("aria-expanded", "false"), pe(a).removeClass(Ce), pe(r).removeClass(Ce).trigger(pe.Event(be.HIDDEN, s)));
          }
        }
      }
    }, t._getParentFromElement = function (t) {
      var e,
          n = gt.getSelectorFromElement(t);
      return n && (e = pe(n)[0]), e || t.parentNode;
    }, t._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || pe(e.target).closest(ke).length)) : ye.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !pe(this).hasClass(Te))) {
        var n = t._getParentFromElement(this),
            i = pe(n).hasClass(Ce);

        if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
          var r = pe(n).find(Pe).get();

          if (0 !== r.length) {
            var o = r.indexOf(e.target);
            38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
          }
        } else {
          if (27 === e.which) {
            var s = pe(n).find(Oe)[0];
            pe(s).trigger("focus");
          }

          pe(this).trigger("click");
        }
      }
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ue;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Fe;
      }
    }]), t;
  }(), pe(document).on(be.KEYDOWN_DATA_API, Oe, Be._dataApiKeydownHandler).on(be.KEYDOWN_DATA_API, ke, Be._dataApiKeydownHandler).on(be.CLICK_DATA_API + " " + be.KEYUP_DATA_API, Be._clearMenus).on(be.CLICK_DATA_API, Oe, function (t) {
    t.preventDefault(), t.stopPropagation(), Be._jQueryInterface.call(pe(this), "toggle");
  }).on(be.CLICK_DATA_API, Ne, function (t) {
    t.stopPropagation();
  }), pe.fn[ge] = Be._jQueryInterface, pe.fn[ge].Constructor = Be, pe.fn[ge].noConflict = function () {
    return pe.fn[ge] = Ee, Be._jQueryInterface;
  }, Be),
      bi = (Ve = "modal", Ye = "." + (Qe = "bs.modal"), Ge = (Ke = e).fn[Ve], qe = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, ze = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, Xe = {
    HIDE: "hide" + Ye,
    HIDDEN: "hidden" + Ye,
    SHOW: "show" + Ye,
    SHOWN: "shown" + Ye,
    FOCUSIN: "focusin" + Ye,
    RESIZE: "resize" + Ye,
    CLICK_DISMISS: "click.dismiss" + Ye,
    KEYDOWN_DISMISS: "keydown.dismiss" + Ye,
    MOUSEUP_DISMISS: "mouseup.dismiss" + Ye,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ye,
    CLICK_DATA_API: "click" + Ye + ".data-api"
  }, Je = "modal-scrollbar-measure", Ze = "modal-backdrop", $e = "modal-open", tn = "fade", en = "show", nn = {
    DIALOG: ".modal-dialog",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
  }, rn = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Ke(t).find(nn.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
    }

    var e = t.prototype;
    return e.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, e.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        gt.supportsTransitionEnd() && Ke(this._element).hasClass(tn) && (this._isTransitioning = !0);
        var n = Ke.Event(Xe.SHOW, {
          relatedTarget: t
        });
        Ke(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ke(document.body).addClass($e), this._setEscapeEvent(), this._setResizeEvent(), Ke(this._element).on(Xe.CLICK_DISMISS, nn.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Ke(this._dialog).on(Xe.MOUSEDOWN_DISMISS, function () {
          Ke(e._element).one(Xe.MOUSEUP_DISMISS, function (t) {
            Ke(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, e.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Ke.Event(Xe.HIDE);

        if (Ke(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = gt.supportsTransitionEnd() && Ke(this._element).hasClass(tn);
          i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ke(document).off(Xe.FOCUSIN), Ke(this._element).removeClass(en), Ke(this._element).off(Xe.CLICK_DISMISS), Ke(this._dialog).off(Xe.MOUSEDOWN_DISMISS), i ? Ke(this._element).one(gt.TRANSITION_END, function (t) {
            return e._hideModal(t);
          }).emulateTransitionEnd(300) : this._hideModal();
        }
      }
    }, e.dispose = function () {
      Ke.removeData(this._element, Qe), Ke(window, document, this._element, this._backdrop).off(Ye), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (t) {
      return t = r({}, qe, t), gt.typeCheckConfig(Ve, t, ze), t;
    }, e._showElement = function (t) {
      var e = this,
          n = gt.supportsTransitionEnd() && Ke(this._element).hasClass(tn);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Ke(this._element).addClass(en), this._config.focus && this._enforceFocus();

      var i = Ke.Event(Xe.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Ke(e._element).trigger(i);
      };

      n ? Ke(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(300) : r();
    }, e._enforceFocus = function () {
      var t = this;
      Ke(document).off(Xe.FOCUSIN).on(Xe.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === Ke(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? Ke(this._element).on(Xe.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || Ke(this._element).off(Xe.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? Ke(window).on(Xe.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : Ke(window).off(Xe.RESIZE);
    }, e._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Ke(document.body).removeClass($e), t._resetAdjustments(), t._resetScrollbar(), Ke(t._element).trigger(Xe.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && (Ke(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (t) {
      var e = this,
          n = Ke(this._element).hasClass(tn) ? tn : "";

      if (this._isShown && this._config.backdrop) {
        var i = gt.supportsTransitionEnd() && n;
        if (this._backdrop = document.createElement("div"), this._backdrop.className = Ze, n && Ke(this._backdrop).addClass(n), Ke(this._backdrop).appendTo(document.body), Ke(this._element).on(Xe.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), i && gt.reflow(this._backdrop), Ke(this._backdrop).addClass(en), !t) return;
        if (!i) return void t();
        Ke(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(150);
      } else if (!this._isShown && this._backdrop) {
        Ke(this._backdrop).removeClass(en);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        gt.supportsTransitionEnd() && Ke(this._element).hasClass(tn) ? Ke(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(150) : r();
      } else t && t();
    }, e._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        Ke(nn.FIXED_CONTENT).each(function (e, n) {
          var i = Ke(n)[0].style.paddingRight,
              r = Ke(n).css("padding-right");
          Ke(n).data("padding-right", i).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
        }), Ke(nn.STICKY_CONTENT).each(function (e, n) {
          var i = Ke(n)[0].style.marginRight,
              r = Ke(n).css("margin-right");
          Ke(n).data("margin-right", i).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
        }), Ke(nn.NAVBAR_TOGGLER).each(function (e, n) {
          var i = Ke(n)[0].style.marginRight,
              r = Ke(n).css("margin-right");
          Ke(n).data("margin-right", i).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px");
        });
        var e = document.body.style.paddingRight,
            n = Ke(document.body).css("padding-right");
        Ke(document.body).data("padding-right", e).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px");
      }
    }, e._resetScrollbar = function () {
      Ke(nn.FIXED_CONTENT).each(function (t, e) {
        var n = Ke(e).data("padding-right");
        "undefined" != typeof n && Ke(e).css("padding-right", n).removeData("padding-right");
      }), Ke(nn.STICKY_CONTENT + ", " + nn.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Ke(e).data("margin-right");
        "undefined" != typeof n && Ke(e).css("margin-right", n).removeData("margin-right");
      });
      var t = Ke(document.body).data("padding-right");
      "undefined" != typeof t && Ke(document.body).css("padding-right", t).removeData("padding-right");
    }, e._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = Je, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t._jQueryInterface = function (e, n) {
      return this.each(function () {
        var i = Ke(this).data(Qe),
            o = r({}, t.Default, Ke(this).data(), "object" == _typeof(e) && e);

        if (i || (i = new t(this, o), Ke(this).data(Qe, i)), "string" == typeof e) {
          if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
          i[e](n);
        } else o.show && i.show(n);
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return qe;
      }
    }]), t;
  }(), Ke(document).on(Xe.CLICK_DATA_API, nn.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = gt.getSelectorFromElement(this);
    i && (e = Ke(i)[0]);
    var o = Ke(e).data(Qe) ? "toggle" : r({}, Ke(e).data(), Ke(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = Ke(e).one(Xe.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Xe.HIDDEN, function () {
        Ke(n).is(":visible") && n.focus();
      });
    });

    rn._jQueryInterface.call(Ke(e), o, this);
  }), Ke.fn[Ve] = rn._jQueryInterface, Ke.fn[Ve].Constructor = rn, Ke.fn[Ve].noConflict = function () {
    return Ke.fn[Ve] = Ge, rn._jQueryInterface;
  }, rn),
      Ti = (sn = "tooltip", ln = "." + (an = "bs.tooltip"), cn = (on = e).fn[sn], hn = "bs-tooltip", fn = new RegExp("(^|\\s)" + hn + "\\S+", "g"), un = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)"
  }, dn = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  }, pn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, gn = "show", mn = "out", _n = {
    HIDE: "hide" + ln,
    HIDDEN: "hidden" + ln,
    SHOW: "show" + ln,
    SHOWN: "shown" + ln,
    INSERTED: "inserted" + ln,
    CLICK: "click" + ln,
    FOCUSIN: "focusin" + ln,
    FOCUSOUT: "focusout" + ln,
    MOUSEENTER: "mouseenter" + ln,
    MOUSELEAVE: "mouseleave" + ln
  }, vn = "fade", En = "show", yn = ".tooltip-inner", bn = ".arrow", Tn = "hover", Cn = "focus", wn = "click", In = "manual", An = function () {
    function t(t, e) {
      if ("undefined" == typeof de) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var e = t.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = on(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), on(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (on(this.getTipElement()).hasClass(En)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), on.removeData(this.element, this.constructor.DATA_KEY), on(this.element).off(this.constructor.EVENT_KEY), on(this.element).closest(".modal").off("hide.bs.modal"), this.tip && on(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var e = this;
      if ("none" === on(this.element).css("display")) throw new Error("Please use show on visible elements");
      var n = on.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        on(this.element).trigger(n);
        var i = on.contains(this.element.ownerDocument.documentElement, this.element);
        if (n.isDefaultPrevented() || !i) return;
        var r = this.getTipElement(),
            o = gt.getUID(this.constructor.NAME);
        r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && on(r).addClass(vn);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);
        var l = !1 === this.config.container ? document.body : on(this.config.container);
        on(r).data(this.constructor.DATA_KEY, this), on.contains(this.element.ownerDocument.documentElement, this.tip) || on(r).appendTo(l), on(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new de(this.element, r, {
          placement: a,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: bn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          }
        }), on(r).addClass(En), "ontouchstart" in document.documentElement && on(document.body).children().on("mouseover", null, on.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, on(e.element).trigger(e.constructor.Event.SHOWN), t === mn && e._leave(null, e);
        };

        gt.supportsTransitionEnd() && on(this.tip).hasClass(vn) ? on(this.tip).one(gt.TRANSITION_END, c).emulateTransitionEnd(t._TRANSITION_DURATION) : c();
      }
    }, e.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = on.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== gn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), on(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      on(this.element).trigger(i), i.isDefaultPrevented() || (on(n).removeClass(En), "ontouchstart" in document.documentElement && on(document.body).children().off("mouseover", null, on.noop), this._activeTrigger[wn] = !1, this._activeTrigger[Cn] = !1, this._activeTrigger[Tn] = !1, gt.supportsTransitionEnd() && on(this.tip).hasClass(vn) ? on(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (t) {
      on(this.getTipElement()).addClass(hn + "-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || on(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = on(this.getTipElement());
      this.setElementContent(t.find(yn), this.getTitle()), t.removeClass(vn + " " + En);
    }, e.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? on(e).parent().is(t) || t.empty().append(e) : t.text(on(e).text()) : t[n ? "html" : "text"](e);
    }, e.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, e._getAttachment = function (t) {
      return dn[t.toUpperCase()];
    }, e._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) on(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if (e !== In) {
          var n = e === Tn ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = e === Tn ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          on(t.element).on(n, t.config.selector, function (e) {
            return t._enter(e);
          }).on(i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
        on(t.element).closest(".modal").on("hide.bs.modal", function () {
          return t.hide();
        });
      }), this.config.selector ? this.config = r({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || on(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), on(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Cn : Tn] = !0), on(e.getTipElement()).hasClass(En) || e._hoverState === gn ? e._hoverState = gn : (clearTimeout(e._timeout), e._hoverState = gn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === gn && e.show();
      }, e.config.delay.show) : e.show());
    }, e._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || on(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), on(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Cn : Tn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = mn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === mn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, e._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, e._getConfig = function (t) {
      return "number" == typeof (t = r({}, this.constructor.Default, on(this.element).data(), t)).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(sn, t, this.constructor.DefaultType), t;
    }, e._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, e._cleanTipClass = function () {
      var t = on(this.getTipElement()),
          e = t.attr("class").match(fn);
      null !== e && e.length > 0 && t.removeClass(e.join(""));
    }, e._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, e._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (on(t).removeClass(vn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = on(this).data(an),
            i = "object" == _typeof(e) && e;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), on(this).data(an, n)), "string" == typeof e)) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return pn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return sn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return an;
      }
    }, {
      key: "Event",
      get: function get() {
        return _n;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ln;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return un;
      }
    }]), t;
  }(), on.fn[sn] = An._jQueryInterface, on.fn[sn].Constructor = An, on.fn[sn].noConflict = function () {
    return on.fn[sn] = cn, An._jQueryInterface;
  }, An),
      Ci = (Sn = "popover", Nn = "." + (On = "bs.popover"), kn = (Dn = e).fn[Sn], Ln = "bs-popover", Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"), xn = r({}, Ti.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), Rn = r({}, Ti.DefaultType, {
    content: "(string|element|function)"
  }), jn = "fade", Hn = "show", Mn = ".popover-header", Wn = ".popover-body", Un = {
    HIDE: "hide" + Nn,
    HIDDEN: "hidden" + Nn,
    SHOW: "show" + Nn,
    SHOWN: "shown" + Nn,
    INSERTED: "inserted" + Nn,
    CLICK: "click" + Nn,
    FOCUSIN: "focusin" + Nn,
    FOCUSOUT: "focusout" + Nn,
    MOUSEENTER: "mouseenter" + Nn,
    MOUSELEAVE: "mouseleave" + Nn
  }, Fn = function (t) {
    var e, n;

    function r() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
    var o = r.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      Dn(this.getTipElement()).addClass(Ln + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || Dn(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = Dn(this.getTipElement());
      this.setElementContent(t.find(Mn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Wn), e), t.removeClass(jn + " " + Hn);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = Dn(this.getTipElement()),
          e = t.attr("class").match(Pn);
      null !== e && e.length > 0 && t.removeClass(e.join(""));
    }, r._jQueryInterface = function (t) {
      return this.each(function () {
        var e = Dn(this).data(On),
            n = "object" == _typeof(t) ? t : null;

        if ((e || !/destroy|hide/.test(t)) && (e || (e = new r(this, n), Dn(this).data(On, e)), "string" == typeof t)) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, i(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return xn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Sn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return On;
      }
    }, {
      key: "Event",
      get: function get() {
        return Un;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Nn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }]), r;
  }(Ti), Dn.fn[Sn] = Fn._jQueryInterface, Dn.fn[Sn].Constructor = Fn, Dn.fn[Sn].noConflict = function () {
    return Dn.fn[Sn] = kn, Fn._jQueryInterface;
  }, Fn),
      wi = (Kn = "scrollspy", Qn = "." + (Vn = "bs.scrollspy"), Yn = (Bn = e).fn[Kn], Gn = {
    offset: 10,
    method: "auto",
    target: ""
  }, qn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, zn = {
    ACTIVATE: "activate" + Qn,
    SCROLL: "scroll" + Qn,
    LOAD_DATA_API: "load" + Qn + ".data-api"
  }, Xn = "dropdown-item", Jn = "active", Zn = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  }, $n = "offset", ti = "position", ei = function () {
    function t(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Zn.NAV_LINKS + "," + this._config.target + " " + Zn.LIST_ITEMS + "," + this._config.target + " " + Zn.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Bn(this._scrollElement).on(zn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var e = t.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? $n : ti,
          n = "auto" === this._config.method ? e : this._config.method,
          i = n === ti ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Bn.makeArray(Bn(this._selector)).map(function (t) {
        var e,
            r = gt.getSelectorFromElement(t);

        if (r && (e = Bn(r)[0]), e) {
          var o = e.getBoundingClientRect();
          if (o.width || o.height) return [Bn(e)[n]().top + i, r];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      Bn.removeData(this._element, Vn), Bn(this._scrollElement).off(Qn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (t) {
      if ("string" != typeof (t = r({}, Gn, t)).target) {
        var e = Bn(t.target).attr("id");
        e || (e = gt.getUID(Kn), Bn(t.target).attr("id", e)), t.target = "#" + e;
      }

      return gt.typeCheckConfig(Kn, t, qn), t;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",");

      e = e.map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var n = Bn(e.join(","));
      n.hasClass(Xn) ? (n.closest(Zn.DROPDOWN).find(Zn.DROPDOWN_TOGGLE).addClass(Jn), n.addClass(Jn)) : (n.addClass(Jn), n.parents(Zn.NAV_LIST_GROUP).prev(Zn.NAV_LINKS + ", " + Zn.LIST_ITEMS).addClass(Jn), n.parents(Zn.NAV_LIST_GROUP).prev(Zn.NAV_ITEMS).children(Zn.NAV_LINKS).addClass(Jn)), Bn(this._scrollElement).trigger(zn.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      Bn(this._selector).filter(Zn.ACTIVE).removeClass(Jn);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = Bn(this).data(Vn);

        if (n || (n = new t(this, "object" == _typeof(e) && e), Bn(this).data(Vn, n)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return Gn;
      }
    }]), t;
  }(), Bn(window).on(zn.LOAD_DATA_API, function () {
    for (var t = Bn.makeArray(Bn(Zn.DATA_SPY)), e = t.length; e--;) {
      var n = Bn(t[e]);

      ei._jQueryInterface.call(n, n.data());
    }
  }), Bn.fn[Kn] = ei._jQueryInterface, Bn.fn[Kn].Constructor = ei, Bn.fn[Kn].noConflict = function () {
    return Bn.fn[Kn] = Yn, ei._jQueryInterface;
  }, ei),
      Ii = (ri = "." + (ii = "bs.tab"), oi = (ni = e).fn.tab, si = {
    HIDE: "hide" + ri,
    HIDDEN: "hidden" + ri,
    SHOW: "show" + ri,
    SHOWN: "shown" + ri,
    CLICK_DATA_API: "click" + ri + ".data-api"
  }, ai = "dropdown-menu", li = "active", ci = "disabled", hi = "fade", fi = "show", ui = ".dropdown", di = ".nav, .list-group", pi = ".active", gi = "> li > .active", mi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', _i = ".dropdown-toggle", vi = "> .dropdown-menu .active", Ei = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ni(this._element).hasClass(li) || ni(this._element).hasClass(ci))) {
        var e,
            n,
            i = ni(this._element).closest(di)[0],
            r = gt.getSelectorFromElement(this._element);

        if (i) {
          var o = "UL" === i.nodeName ? gi : pi;
          n = (n = ni.makeArray(ni(i).find(o)))[n.length - 1];
        }

        var s = ni.Event(si.HIDE, {
          relatedTarget: this._element
        }),
            a = ni.Event(si.SHOW, {
          relatedTarget: n
        });

        if (n && ni(n).trigger(s), ni(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (e = ni(r)[0]), this._activate(this._element, i);

          var l = function l() {
            var e = ni.Event(si.HIDDEN, {
              relatedTarget: t._element
            }),
                i = ni.Event(si.SHOWN, {
              relatedTarget: n
            });
            ni(n).trigger(e), ni(t._element).trigger(i);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      ni.removeData(this._element, ii), this._element = null;
    }, e._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? ni(e).find(gi) : ni(e).children(pi))[0],
          o = n && gt.supportsTransitionEnd() && r && ni(r).hasClass(hi),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };

      r && o ? ni(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(150) : s();
    }, e._transitionComplete = function (t, e, n) {
      if (e) {
        ni(e).removeClass(fi + " " + li);
        var i = ni(e.parentNode).find(vi)[0];
        i && ni(i).removeClass(li), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (ni(t).addClass(li), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ni(t).addClass(fi), t.parentNode && ni(t.parentNode).hasClass(ai)) {
        var r = ni(t).closest(ui)[0];
        r && ni(r).find(_i).addClass(li), t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = ni(this),
            i = n.data(ii);

        if (i || (i = new t(this), n.data(ii, i)), "string" == typeof e) {
          if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
          i[e]();
        }
      });
    }, i(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), ni(document).on(si.CLICK_DATA_API, mi, function (t) {
    t.preventDefault(), Ei._jQueryInterface.call(ni(this), "show");
  }), ni.fn.tab = Ei._jQueryInterface, ni.fn.tab.Constructor = Ei, ni.fn.tab.noConflict = function () {
    return ni.fn.tab = oi, Ei._jQueryInterface;
  }, Ei);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = yi, t.Modal = bi, t.Popover = Ci, t.Scrollspy = wi, t.Tab = Ii, t.Tooltip = Ti, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/**
 *
 */

var hexToRgba = function hexToRgba(hex, opacity) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var rgb = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + opacity + ')';
};
/**
 *
 */


$(document).ready(function () {
  /** Constant div card */
  var DIV_CARD = 'div.card';
  /** Initialize tooltips */

  $('[data-toggle="tooltip"]').tooltip();
  /** Initialize popovers */

  $('[data-toggle="popover"]').popover({
    html: true
  });
  /** Function for remove card */

  $('[data-toggle="card-remove"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.remove();
    e.preventDefault();
    return false;
  });
  /** Function for collapse card */

  $('[data-toggle="card-collapse"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-collapsed');
    e.preventDefault();
    return false;
  });
  /** Function for fullscreen card */

  $('[data-toggle="card-fullscreen"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-fullscreen').removeClass('card-collapsed');
    e.preventDefault();
    return false;
  });
  /**  */

  if ($('[data-sparkline]').length) {
    var generateSparkline = function generateSparkline($elem, data, params) {
      $elem.sparkline(data, {
        type: $elem.attr('data-sparkline-type'),
        height: '100%',
        barColor: params.color,
        lineColor: params.color,
        fillColor: 'transparent',
        spotColor: params.color,
        spotRadius: 0,
        lineWidth: 2,
        highlightColor: hexToRgba(params.color, .6),
        highlightLineColor: '#666',
        defaultPixelsPerValue: 5
      });
    };

    require(['sparkline'], function () {
      $('[data-sparkline]').each(function () {
        var $chart = $(this);
        generateSparkline($chart, JSON.parse($chart.attr('data-sparkline')), {
          color: $chart.attr('data-sparkline-color')
        });
      });
    });
  }
  /**  */


  if ($('.chart-circle').length) {
    require(['circle-progress'], function () {
      $('.chart-circle').each(function () {
        var $this = $(this);
        $this.circleProgress({
          fill: {
            color: tabler.colors[$this.attr('data-color')] || tabler.colors.blue
          },
          size: $this.height(),
          startAngle: -Math.PI / 4 * 2,
          emptyFill: '#F4F4F4',
          lineCap: 'round'
        });
      });
    });
  }
});
