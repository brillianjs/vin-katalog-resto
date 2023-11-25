/*! For license information please see sw.bundle.js.LICENSE.txt */
;(() => {
  var e = {
      666: (e) => {
        var t = (function (e) {
          'use strict'
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, r) {
                e[t] = r.value
              },
            s = 'function' == typeof Symbol ? Symbol : {},
            i = s.iterator || '@@iterator',
            o = s.asyncIterator || '@@asyncIterator',
            c = s.toStringTag || '@@toStringTag'
          function h(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }),
              e[t]
            )
          }
          try {
            h({}, '')
          } catch (e) {
            h = function (e, t, r) {
              return (e[t] = r)
            }
          }
          function u(e, t, r, n) {
            var s = t && t.prototype instanceof m ? t : m,
              i = Object.create(s.prototype),
              o = new q(n || [])
            return a(i, '_invoke', { value: C(e, r, o) }), i
          }
          function l(e, t, r) {
            try {
              return { type: 'normal', arg: e.call(t, r) }
            } catch (e) {
              return { type: 'throw', arg: e }
            }
          }
          e.wrap = u
          var f = 'suspendedStart',
            d = 'suspendedYield',
            p = 'executing',
            y = 'completed',
            g = {}
          function m() {}
          function w() {}
          function v() {}
          var _ = {}
          h(_, i, function () {
            return this
          })
          var b = Object.getPrototypeOf,
            x = b && b(b(O([])))
          x && x !== r && n.call(x, i) && (_ = x)
          var L = (v.prototype = m.prototype = Object.create(_))
          function E(e) {
            ;['next', 'throw', 'return'].forEach(function (t) {
              h(e, t, function (e) {
                return this._invoke(t, e)
              })
            })
          }
          function R(e, t) {
            function r(a, s, i, o) {
              var c = l(e[a], e, s)
              if ('throw' !== c.type) {
                var h = c.arg,
                  u = h.value
                return u && 'object' == typeof u && n.call(u, '__await')
                  ? t.resolve(u.__await).then(
                      function (e) {
                        r('next', e, i, o)
                      },
                      function (e) {
                        r('throw', e, i, o)
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        ;(h.value = e), i(h)
                      },
                      function (e) {
                        return r('throw', e, i, o)
                      }
                    )
              }
              o(c.arg)
            }
            var s
            a(this, '_invoke', {
              value: function (e, n) {
                function a() {
                  return new t(function (t, a) {
                    r(e, n, t, a)
                  })
                }
                return (s = s ? s.then(a, a) : a())
              }
            })
          }
          function C(e, r, n) {
            var a = f
            return function (s, i) {
              if (a === p) throw new Error('Generator is already running')
              if (a === y) {
                if ('throw' === s) throw i
                return { value: t, done: !0 }
              }
              for (n.method = s, n.arg = i; ; ) {
                var o = n.delegate
                if (o) {
                  var c = k(o, n)
                  if (c) {
                    if (c === g) continue
                    return c
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg
                else if ('throw' === n.method) {
                  if (a === f) throw ((a = y), n.arg)
                  n.dispatchException(n.arg)
                } else 'return' === n.method && n.abrupt('return', n.arg)
                a = p
                var h = l(e, r, n)
                if ('normal' === h.type) {
                  if (((a = n.done ? y : d), h.arg === g)) continue
                  return { value: h.arg, done: n.done }
                }
                'throw' === h.type &&
                  ((a = y), (n.method = 'throw'), (n.arg = h.arg))
              }
            }
          }
          function k(e, r) {
            var n = r.method,
              a = e.iterator[n]
            if (a === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator.return &&
                  ((r.method = 'return'),
                  (r.arg = t),
                  k(e, r),
                  'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                g
              )
            var s = l(a, e.iterator, r.arg)
            if ('throw' === s.type)
              return (
                (r.method = 'throw'), (r.arg = s.arg), (r.delegate = null), g
              )
            var i = s.arg
            return i
              ? i.done
                ? ((r[e.resultName] = i.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : i
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                g)
          }
          function N(e) {
            var t = { tryLoc: e[0] }
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t)
          }
          function T(e) {
            var t = e.completion || {}
            ;(t.type = 'normal'), delete t.arg, (e.completion = t)
          }
          function q(e) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]),
              e.forEach(N, this),
              this.reset(!0)
          }
          function O(e) {
            if (e || '' === e) {
              var r = e[i]
              if (r) return r.call(e)
              if ('function' == typeof e.next) return e
              if (!isNaN(e.length)) {
                var a = -1,
                  s = function r() {
                    for (; ++a < e.length; )
                      if (n.call(e, a))
                        return (r.value = e[a]), (r.done = !1), r
                    return (r.value = t), (r.done = !0), r
                  }
                return (s.next = s)
              }
            }
            throw new TypeError(typeof e + ' is not iterable')
          }
          return (
            (w.prototype = v),
            a(L, 'constructor', { value: v, configurable: !0 }),
            a(v, 'constructor', { value: w, configurable: !0 }),
            (w.displayName = h(v, c, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (e) {
              var t = 'function' == typeof e && e.constructor
              return (
                !!t &&
                (t === w || 'GeneratorFunction' === (t.displayName || t.name))
              )
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, v)
                  : ((e.__proto__ = v), h(e, c, 'GeneratorFunction')),
                (e.prototype = Object.create(L)),
                e
              )
            }),
            (e.awrap = function (e) {
              return { __await: e }
            }),
            E(R.prototype),
            h(R.prototype, o, function () {
              return this
            }),
            (e.AsyncIterator = R),
            (e.async = function (t, r, n, a, s) {
              void 0 === s && (s = Promise)
              var i = new R(u(t, r, n, a), s)
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next()
                  })
            }),
            E(L),
            h(L, c, 'Generator'),
            h(L, i, function () {
              return this
            }),
            h(L, 'toString', function () {
              return '[object Generator]'
            }),
            (e.keys = function (e) {
              var t = Object(e),
                r = []
              for (var n in t) r.push(n)
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop()
                    if (n in t) return (e.value = n), (e.done = !1), e
                  }
                  return (e.done = !0), e
                }
              )
            }),
            (e.values = O),
            (q.prototype = {
              constructor: q,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(T),
                  !e)
                )
                  for (var r in this)
                    't' === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t)
              },
              stop: function () {
                this.done = !0
                var e = this.tryEntries[0].completion
                if ('throw' === e.type) throw e.arg
                return this.rval
              },
              dispatchException: function (e) {
                if (this.done) throw e
                var r = this
                function a(n, a) {
                  return (
                    (o.type = 'throw'),
                    (o.arg = e),
                    (r.next = n),
                    a && ((r.method = 'next'), (r.arg = t)),
                    !!a
                  )
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                  var i = this.tryEntries[s],
                    o = i.completion
                  if ('root' === i.tryLoc) return a('end')
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      h = n.call(i, 'finallyLoc')
                    if (c && h) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                    } else if (c) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                    } else {
                      if (!h)
                        throw new Error(
                          'try statement without catch or finally'
                        )
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r]
                  if (
                    a.tryLoc <= this.prev &&
                    n.call(a, 'finallyLoc') &&
                    this.prev < a.finallyLoc
                  ) {
                    var s = a
                    break
                  }
                }
                s &&
                  ('break' === e || 'continue' === e) &&
                  s.tryLoc <= t &&
                  t <= s.finallyLoc &&
                  (s = null)
                var i = s ? s.completion : {}
                return (
                  (i.type = e),
                  (i.arg = t),
                  s
                    ? ((this.method = 'next'), (this.next = s.finallyLoc), g)
                    : this.complete(i)
                )
              },
              complete: function (e, t) {
                if ('throw' === e.type) throw e.arg
                return (
                  'break' === e.type || 'continue' === e.type
                    ? (this.next = e.arg)
                    : 'return' === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === e.type && t && (this.next = t),
                  g
                )
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t]
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), T(r), g
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t]
                  if (r.tryLoc === e) {
                    var n = r.completion
                    if ('throw' === n.type) {
                      var a = n.arg
                      T(r)
                    }
                    return a
                  }
                }
                throw new Error('illegal catch attempt')
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: r,
                    nextLoc: n
                  }),
                  'next' === this.method && (this.arg = t),
                  g
                )
              }
            }),
            e
          )
        })(e.exports)
        try {
          regeneratorRuntime = t
        } catch (e) {
          'object' == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function('r', 'regeneratorRuntime = r')(t)
        }
      },
      913: () => {
        'use strict'
        try {
          self['workbox:core:7.0.0'] && _()
        } catch (e) {}
      },
      550: () => {
        'use strict'
        try {
          self['workbox:expiration:7.0.0'] && _()
        } catch (e) {}
      },
      977: () => {
        'use strict'
        try {
          self['workbox:precaching:7.0.0'] && _()
        } catch (e) {}
      },
      80: () => {
        'use strict'
        try {
          self['workbox:routing:7.0.0'] && _()
        } catch (e) {}
      },
      873: () => {
        'use strict'
        try {
          self['workbox:strategies:7.0.0'] && _()
        } catch (e) {}
      }
    },
    t = {}
  function r(n) {
    var a = t[n]
    if (void 0 !== a) return a.exports
    var s = (t[n] = { exports: {} })
    return e[n](s, s.exports, r), s.exports
  }
  ;(() => {
    'use strict'
    r(666), r(913)
    class e extends Error {
      constructor(e, t) {
        super(
          ((e, ...t) => {
            let r = e
            return t.length > 0 && (r += ` :: ${JSON.stringify(t)}`), r
          })(e, t)
        ),
          (this.name = e),
          (this.details = t)
      }
    }
    const t = new Set(),
      n = {
        googleAnalytics: 'googleAnalytics',
        precache: 'precache-v2',
        prefix: 'workbox',
        runtime: 'runtime',
        suffix: 'undefined' != typeof registration ? registration.scope : ''
      },
      a = (e) =>
        [n.prefix, e, n.suffix].filter((e) => e && e.length > 0).join('-'),
      s = (e) => e || a(n.precache),
      i = (e) => e || a(n.runtime)
    function o(e, t) {
      const r = new URL(e)
      for (const e of t) r.searchParams.delete(e)
      return r.href
    }
    let c
    function h(e) {
      e.then(() => {})
    }
    class u {
      constructor() {
        this.promise = new Promise((e, t) => {
          ;(this.resolve = e), (this.reject = t)
        })
      }
    }
    function l(e, t) {
      const r = t()
      return e.waitUntil(r), r
    }
    function f(t) {
      if (!t) throw new e('add-to-cache-list-unexpected-type', { entry: t })
      if ('string' == typeof t) {
        const e = new URL(t, location.href)
        return { cacheKey: e.href, url: e.href }
      }
      const { revision: r, url: n } = t
      if (!n) throw new e('add-to-cache-list-unexpected-type', { entry: t })
      if (!r) {
        const e = new URL(n, location.href)
        return { cacheKey: e.href, url: e.href }
      }
      const a = new URL(n, location.href),
        s = new URL(n, location.href)
      return (
        a.searchParams.set('__WB_REVISION__', r),
        { cacheKey: a.href, url: s.href }
      )
    }
    r(977)
    class d {
      constructor() {
        ;(this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = async ({ request: e, state: t }) => {
            t && (t.originalRequest = e)
          }),
          (this.cachedResponseWillBeUsed = async ({
            event: e,
            state: t,
            cachedResponse: r
          }) => {
            if (
              'install' === e.type &&
              t &&
              t.originalRequest &&
              t.originalRequest instanceof Request
            ) {
              const e = t.originalRequest.url
              r ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
            }
            return r
          })
      }
    }
    class p {
      constructor({ precacheController: e }) {
        ;(this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
          const r =
            (null == t ? void 0 : t.cacheKey) ||
            this._precacheController.getCacheKeyForURL(e.url)
          return r ? new Request(r, { headers: e.headers }) : e
        }),
          (this._precacheController = e)
      }
    }
    function y(e) {
      return 'string' == typeof e ? new Request(e) : e
    }
    r(873)
    class g {
      constructor(e, t) {
        ;(this._cacheKeys = {}),
          Object.assign(this, t),
          (this.event = t.event),
          (this._strategy = e),
          (this._handlerDeferred = new u()),
          (this._extendLifetimePromises = []),
          (this._plugins = [...e.plugins]),
          (this._pluginStateMap = new Map())
        for (const e of this._plugins) this._pluginStateMap.set(e, {})
        this.event.waitUntil(this._handlerDeferred.promise)
      }
      async fetch(t) {
        const { event: r } = this
        let n = y(t)
        if (
          'navigate' === n.mode &&
          r instanceof FetchEvent &&
          r.preloadResponse
        ) {
          const e = await r.preloadResponse
          if (e) return e
        }
        const a = this.hasCallback('fetchDidFail') ? n.clone() : null
        try {
          for (const e of this.iterateCallbacks('requestWillFetch'))
            n = await e({ request: n.clone(), event: r })
        } catch (t) {
          if (t instanceof Error)
            throw new e('plugin-error-request-will-fetch', {
              thrownErrorMessage: t.message
            })
        }
        const s = n.clone()
        try {
          let e
          e = await fetch(
            n,
            'navigate' === n.mode ? void 0 : this._strategy.fetchOptions
          )
          for (const t of this.iterateCallbacks('fetchDidSucceed'))
            e = await t({ event: r, request: s, response: e })
          return e
        } catch (e) {
          throw (
            (a &&
              (await this.runCallbacks('fetchDidFail', {
                error: e,
                event: r,
                originalRequest: a.clone(),
                request: s.clone()
              })),
            e)
          )
        }
      }
      async fetchAndCachePut(e) {
        const t = await this.fetch(e),
          r = t.clone()
        return this.waitUntil(this.cachePut(e, r)), t
      }
      async cacheMatch(e) {
        const t = y(e)
        let r
        const { cacheName: n, matchOptions: a } = this._strategy,
          s = await this.getCacheKey(t, 'read'),
          i = Object.assign(Object.assign({}, a), { cacheName: n })
        r = await caches.match(s, i)
        for (const e of this.iterateCallbacks('cachedResponseWillBeUsed'))
          r =
            (await e({
              cacheName: n,
              matchOptions: a,
              cachedResponse: r,
              request: s,
              event: this.event
            })) || void 0
        return r
      }
      async cachePut(r, n) {
        const a = y(r)
        await (0, new Promise((e) => setTimeout(e, 0)))
        const s = await this.getCacheKey(a, 'write')
        if (!n)
          throw new e('cache-put-with-no-response', {
            url:
              ((i = s.url),
              new URL(String(i), location.href).href.replace(
                new RegExp(`^${location.origin}`),
                ''
              ))
          })
        var i
        const c = await this._ensureResponseSafeToCache(n)
        if (!c) return !1
        const { cacheName: h, matchOptions: u } = this._strategy,
          l = await self.caches.open(h),
          f = this.hasCallback('cacheDidUpdate'),
          d = f
            ? await (async function (e, t, r, n) {
                const a = o(t.url, r)
                if (t.url === a) return e.match(t, n)
                const s = Object.assign(Object.assign({}, n), {
                    ignoreSearch: !0
                  }),
                  i = await e.keys(t, s)
                for (const t of i) if (a === o(t.url, r)) return e.match(t, n)
              })(l, s.clone(), ['__WB_REVISION__'], u)
            : null
        try {
          await l.put(s, f ? c.clone() : c)
        } catch (e) {
          if (e instanceof Error)
            throw (
              ('QuotaExceededError' === e.name &&
                (await (async function () {
                  for (const e of t) await e()
                })()),
              e)
            )
        }
        for (const e of this.iterateCallbacks('cacheDidUpdate'))
          await e({
            cacheName: h,
            oldResponse: d,
            newResponse: c.clone(),
            request: s,
            event: this.event
          })
        return !0
      }
      async getCacheKey(e, t) {
        const r = `${e.url} | ${t}`
        if (!this._cacheKeys[r]) {
          let n = e
          for (const e of this.iterateCallbacks('cacheKeyWillBeUsed'))
            n = y(
              await e({
                mode: t,
                request: n,
                event: this.event,
                params: this.params
              })
            )
          this._cacheKeys[r] = n
        }
        return this._cacheKeys[r]
      }
      hasCallback(e) {
        for (const t of this._strategy.plugins) if (e in t) return !0
        return !1
      }
      async runCallbacks(e, t) {
        for (const r of this.iterateCallbacks(e)) await r(t)
      }
      *iterateCallbacks(e) {
        for (const t of this._strategy.plugins)
          if ('function' == typeof t[e]) {
            const r = this._pluginStateMap.get(t),
              n = (n) => {
                const a = Object.assign(Object.assign({}, n), { state: r })
                return t[e](a)
              }
            yield n
          }
      }
      waitUntil(e) {
        return this._extendLifetimePromises.push(e), e
      }
      async doneWaiting() {
        let e
        for (; (e = this._extendLifetimePromises.shift()); ) await e
      }
      destroy() {
        this._handlerDeferred.resolve(null)
      }
      async _ensureResponseSafeToCache(e) {
        let t = e,
          r = !1
        for (const e of this.iterateCallbacks('cacheWillUpdate'))
          if (
            ((t =
              (await e({
                request: this.request,
                response: t,
                event: this.event
              })) || void 0),
            (r = !0),
            !t)
          )
            break
        return r || (t && 200 !== t.status && (t = void 0)), t
      }
    }
    class m {
      constructor(e = {}) {
        ;(this.cacheName = i(e.cacheName)),
          (this.plugins = e.plugins || []),
          (this.fetchOptions = e.fetchOptions),
          (this.matchOptions = e.matchOptions)
      }
      handle(e) {
        const [t] = this.handleAll(e)
        return t
      }
      handleAll(e) {
        e instanceof FetchEvent && (e = { event: e, request: e.request })
        const t = e.event,
          r = 'string' == typeof e.request ? new Request(e.request) : e.request,
          n = 'params' in e ? e.params : void 0,
          a = new g(this, { event: t, request: r, params: n }),
          s = this._getResponse(a, r, t)
        return [s, this._awaitComplete(s, a, r, t)]
      }
      async _getResponse(t, r, n) {
        let a
        await t.runCallbacks('handlerWillStart', { event: n, request: r })
        try {
          if (((a = await this._handle(r, t)), !a || 'error' === a.type))
            throw new e('no-response', { url: r.url })
        } catch (e) {
          if (e instanceof Error)
            for (const s of t.iterateCallbacks('handlerDidError'))
              if (((a = await s({ error: e, event: n, request: r })), a)) break
          if (!a) throw e
        }
        for (const e of t.iterateCallbacks('handlerWillRespond'))
          a = await e({ event: n, request: r, response: a })
        return a
      }
      async _awaitComplete(e, t, r, n) {
        let a, s
        try {
          a = await e
        } catch (s) {}
        try {
          await t.runCallbacks('handlerDidRespond', {
            event: n,
            request: r,
            response: a
          }),
            await t.doneWaiting()
        } catch (e) {
          e instanceof Error && (s = e)
        }
        if (
          (await t.runCallbacks('handlerDidComplete', {
            event: n,
            request: r,
            response: a,
            error: s
          }),
          t.destroy(),
          s)
        )
          throw s
      }
    }
    class w extends m {
      constructor(e = {}) {
        ;(e.cacheName = s(e.cacheName)),
          super(e),
          (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
          this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)
      }
      async _handle(e, t) {
        return (
          (await t.cacheMatch(e)) ||
          (t.event && 'install' === t.event.type
            ? await this._handleInstall(e, t)
            : await this._handleFetch(e, t))
        )
      }
      async _handleFetch(t, r) {
        let n
        const a = r.params || {}
        if (!this._fallbackToNetwork)
          throw new e('missing-precache-entry', {
            cacheName: this.cacheName,
            url: t.url
          })
        {
          const e = a.integrity,
            s = t.integrity,
            i = !s || s === e
          ;(n = await r.fetch(
            new Request(t, {
              integrity: 'no-cors' !== t.mode ? s || e : void 0
            })
          )),
            e &&
              i &&
              'no-cors' !== t.mode &&
              (this._useDefaultCacheabilityPluginIfNeeded(),
              await r.cachePut(t, n.clone()))
        }
        return n
      }
      async _handleInstall(t, r) {
        this._useDefaultCacheabilityPluginIfNeeded()
        const n = await r.fetch(t)
        if (!(await r.cachePut(t, n.clone())))
          throw new e('bad-precaching-response', {
            url: t.url,
            status: n.status
          })
        return n
      }
      _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
          t = 0
        for (const [r, n] of this.plugins.entries())
          n !== w.copyRedirectedCacheableResponsesPlugin &&
            (n === w.defaultPrecacheCacheabilityPlugin && (e = r),
            n.cacheWillUpdate && t++)
        0 === t
          ? this.plugins.push(w.defaultPrecacheCacheabilityPlugin)
          : t > 1 && null !== e && this.plugins.splice(e, 1)
      }
    }
    ;(w.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: async ({ response: e }) =>
        !e || e.status >= 400 ? null : e
    }),
      (w.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: async ({ response: t }) =>
          t.redirected
            ? await (async function (t, r) {
                let n = null
                if (
                  (t.url && (n = new URL(t.url).origin),
                  n !== self.location.origin)
                )
                  throw new e('cross-origin-copy-response', { origin: n })
                const a = t.clone(),
                  s = {
                    headers: new Headers(a.headers),
                    status: a.status,
                    statusText: a.statusText
                  },
                  i = r ? r(s) : s,
                  o = (function () {
                    if (void 0 === c) {
                      const e = new Response('')
                      if ('body' in e)
                        try {
                          new Response(e.body), (c = !0)
                        } catch (e) {
                          c = !1
                        }
                      c = !1
                    }
                    return c
                  })()
                    ? a.body
                    : await a.blob()
                return new Response(o, i)
              })(t)
            : t
      })
    class v {
      constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: r = !0
      } = {}) {
        ;(this._urlsToCacheKeys = new Map()),
          (this._urlsToCacheModes = new Map()),
          (this._cacheKeysToIntegrities = new Map()),
          (this._strategy = new w({
            cacheName: s(e),
            plugins: [...t, new p({ precacheController: this })],
            fallbackToNetwork: r
          })),
          (this.install = this.install.bind(this)),
          (this.activate = this.activate.bind(this))
      }
      get strategy() {
        return this._strategy
      }
      precache(e) {
        this.addToCacheList(e),
          this._installAndActiveListenersAdded ||
            (self.addEventListener('install', this.install),
            self.addEventListener('activate', this.activate),
            (this._installAndActiveListenersAdded = !0))
      }
      addToCacheList(t) {
        const r = []
        for (const n of t) {
          'string' == typeof n
            ? r.push(n)
            : n && void 0 === n.revision && r.push(n.url)
          const { cacheKey: t, url: a } = f(n),
            s = 'string' != typeof n && n.revision ? 'reload' : 'default'
          if (
            this._urlsToCacheKeys.has(a) &&
            this._urlsToCacheKeys.get(a) !== t
          )
            throw new e('add-to-cache-list-conflicting-entries', {
              firstEntry: this._urlsToCacheKeys.get(a),
              secondEntry: t
            })
          if ('string' != typeof n && n.integrity) {
            if (
              this._cacheKeysToIntegrities.has(t) &&
              this._cacheKeysToIntegrities.get(t) !== n.integrity
            )
              throw new e('add-to-cache-list-conflicting-integrities', {
                url: a
              })
            this._cacheKeysToIntegrities.set(t, n.integrity)
          }
          if (
            (this._urlsToCacheKeys.set(a, t),
            this._urlsToCacheModes.set(a, s),
            r.length > 0)
          ) {
            const e = `Workbox is precaching URLs without revision info: ${r.join(
              ', '
            )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`
            console.warn(e)
          }
        }
      }
      install(e) {
        return l(e, async () => {
          const t = new d()
          this.strategy.plugins.push(t)
          for (const [t, r] of this._urlsToCacheKeys) {
            const n = this._cacheKeysToIntegrities.get(r),
              a = this._urlsToCacheModes.get(t),
              s = new Request(t, {
                integrity: n,
                cache: a,
                credentials: 'same-origin'
              })
            await Promise.all(
              this.strategy.handleAll({
                params: { cacheKey: r },
                request: s,
                event: e
              })
            )
          }
          const { updatedURLs: r, notUpdatedURLs: n } = t
          return { updatedURLs: r, notUpdatedURLs: n }
        })
      }
      activate(e) {
        return l(e, async () => {
          const e = await self.caches.open(this.strategy.cacheName),
            t = await e.keys(),
            r = new Set(this._urlsToCacheKeys.values()),
            n = []
          for (const a of t) r.has(a.url) || (await e.delete(a), n.push(a.url))
          return { deletedURLs: n }
        })
      }
      getURLsToCacheKeys() {
        return this._urlsToCacheKeys
      }
      getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()]
      }
      getCacheKeyForURL(e) {
        const t = new URL(e, location.href)
        return this._urlsToCacheKeys.get(t.href)
      }
      getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e)
      }
      async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
          r = this.getCacheKeyForURL(t)
        if (r) return (await self.caches.open(this.strategy.cacheName)).match(r)
      }
      createHandlerBoundToURL(t) {
        const r = this.getCacheKeyForURL(t)
        if (!r) throw new e('non-precached-url', { url: t })
        return (e) => (
          (e.request = new Request(t)),
          (e.params = Object.assign({ cacheKey: r }, e.params)),
          this.strategy.handle(e)
        )
      }
    }
    let _
    const b = () => (_ || (_ = new v()), _)
    r(80)
    const x = (e) => (e && 'object' == typeof e ? e : { handle: e })
    class L {
      constructor(e, t, r = 'GET') {
        ;(this.handler = x(t)), (this.match = e), (this.method = r)
      }
      setCatchHandler(e) {
        this.catchHandler = x(e)
      }
    }
    class E extends L {
      constructor(e, t, r) {
        super(
          ({ url: t }) => {
            const r = e.exec(t.href)
            if (r && (t.origin === location.origin || 0 === r.index))
              return r.slice(1)
          },
          t,
          r
        )
      }
    }
    class R {
      constructor() {
        ;(this._routes = new Map()), (this._defaultHandlerMap = new Map())
      }
      get routes() {
        return this._routes
      }
      addFetchListener() {
        self.addEventListener('fetch', (e) => {
          const { request: t } = e,
            r = this.handleRequest({ request: t, event: e })
          r && e.respondWith(r)
        })
      }
      addCacheListener() {
        self.addEventListener('message', (e) => {
          if (e.data && 'CACHE_URLS' === e.data.type) {
            const { payload: t } = e.data,
              r = Promise.all(
                t.urlsToCache.map((t) => {
                  'string' == typeof t && (t = [t])
                  const r = new Request(...t)
                  return this.handleRequest({ request: r, event: e })
                })
              )
            e.waitUntil(r),
              e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0))
          }
        })
      }
      handleRequest({ request: e, event: t }) {
        const r = new URL(e.url, location.href)
        if (!r.protocol.startsWith('http')) return
        const n = r.origin === location.origin,
          { params: a, route: s } = this.findMatchingRoute({
            event: t,
            request: e,
            sameOrigin: n,
            url: r
          })
        let i = s && s.handler
        const o = e.method
        if (
          (!i &&
            this._defaultHandlerMap.has(o) &&
            (i = this._defaultHandlerMap.get(o)),
          !i)
        )
          return
        let c
        try {
          c = i.handle({ url: r, request: e, event: t, params: a })
        } catch (e) {
          c = Promise.reject(e)
        }
        const h = s && s.catchHandler
        return (
          c instanceof Promise &&
            (this._catchHandler || h) &&
            (c = c.catch(async (n) => {
              if (h)
                try {
                  return await h.handle({
                    url: r,
                    request: e,
                    event: t,
                    params: a
                  })
                } catch (e) {
                  e instanceof Error && (n = e)
                }
              if (this._catchHandler)
                return this._catchHandler.handle({
                  url: r,
                  request: e,
                  event: t
                })
              throw n
            })),
          c
        )
      }
      findMatchingRoute({ url: e, sameOrigin: t, request: r, event: n }) {
        const a = this._routes.get(r.method) || []
        for (const s of a) {
          let a
          const i = s.match({ url: e, sameOrigin: t, request: r, event: n })
          if (i)
            return (
              (a = i),
              ((Array.isArray(a) && 0 === a.length) ||
                (i.constructor === Object && 0 === Object.keys(i).length) ||
                'boolean' == typeof i) &&
                (a = void 0),
              { route: s, params: a }
            )
        }
        return {}
      }
      setDefaultHandler(e, t = 'GET') {
        this._defaultHandlerMap.set(t, x(e))
      }
      setCatchHandler(e) {
        this._catchHandler = x(e)
      }
      registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []),
          this._routes.get(e.method).push(e)
      }
      unregisterRoute(t) {
        if (!this._routes.has(t.method))
          throw new e('unregister-route-but-not-found-with-method', {
            method: t.method
          })
        const r = this._routes.get(t.method).indexOf(t)
        if (!(r > -1)) throw new e('unregister-route-route-not-registered')
        this._routes.get(t.method).splice(r, 1)
      }
    }
    let C
    function k(t, r, n) {
      let a
      if ('string' == typeof t) {
        const e = new URL(t, location.href)
        a = new L(({ url: t }) => t.href === e.href, r, n)
      } else if (t instanceof RegExp) a = new E(t, r, n)
      else if ('function' == typeof t) a = new L(t, r, n)
      else {
        if (!(t instanceof L))
          throw new e('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture'
          })
        a = t
      }
      return (
        (C || ((C = new R()), C.addFetchListener(), C.addCacheListener()),
        C).registerRoute(a),
        a
      )
    }
    class N extends L {
      constructor(e, t) {
        super(({ request: r }) => {
          const n = e.getURLsToCacheKeys()
          for (const a of (function* (
            e,
            {
              ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
              directoryIndex: r = 'index.html',
              cleanURLs: n = !0,
              urlManipulation: a
            } = {}
          ) {
            const s = new URL(e, location.href)
            ;(s.hash = ''), yield s.href
            const i = (function (e, t = []) {
              for (const r of [...e.searchParams.keys()])
                t.some((e) => e.test(r)) && e.searchParams.delete(r)
              return e
            })(s, t)
            if ((yield i.href, r && i.pathname.endsWith('/'))) {
              const e = new URL(i.href)
              ;(e.pathname += r), yield e.href
            }
            if (n) {
              const e = new URL(i.href)
              ;(e.pathname += '.html'), yield e.href
            }
            if (a) {
              const e = a({ url: s })
              for (const t of e) yield t.href
            }
          })(r.url, t)) {
            const t = n.get(a)
            if (t)
              return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) }
          }
        }, e.strategy)
      }
    }
    class T extends m {
      async _handle(t, r) {
        let n,
          a = await r.cacheMatch(t)
        if (a);
        else
          try {
            a = await r.fetchAndCachePut(t)
          } catch (e) {
            e instanceof Error && (n = e)
          }
        if (!a) throw new e('no-response', { url: t.url, error: n })
        return a
      }
    }
    const q = {
      cacheWillUpdate: async ({ response: e }) =>
        200 === e.status || 0 === e.status ? e : null
    }
    class O extends m {
      constructor(e = {}) {
        super(e),
          this.plugins.some((e) => 'cacheWillUpdate' in e) ||
            this.plugins.unshift(q),
          (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0)
      }
      async _handle(t, r) {
        const n = [],
          a = []
        let s
        if (this._networkTimeoutSeconds) {
          const { id: e, promise: i } = this._getTimeoutPromise({
            request: t,
            logs: n,
            handler: r
          })
          ;(s = e), a.push(i)
        }
        const i = this._getNetworkPromise({
          timeoutId: s,
          request: t,
          logs: n,
          handler: r
        })
        a.push(i)
        const o = await r.waitUntil(
          (async () => (await r.waitUntil(Promise.race(a))) || (await i))()
        )
        if (!o) throw new e('no-response', { url: t.url })
        return o
      }
      _getTimeoutPromise({ request: e, logs: t, handler: r }) {
        let n
        return {
          promise: new Promise((t) => {
            n = setTimeout(async () => {
              t(await r.cacheMatch(e))
            }, 1e3 * this._networkTimeoutSeconds)
          }),
          id: n
        }
      }
      async _getNetworkPromise({
        timeoutId: e,
        request: t,
        logs: r,
        handler: n
      }) {
        let a, s
        try {
          s = await n.fetchAndCachePut(t)
        } catch (e) {
          e instanceof Error && (a = e)
        }
        return e && clearTimeout(e), (!a && s) || (s = await n.cacheMatch(t)), s
      }
    }
    class P extends m {
      constructor(e = {}) {
        super(e),
          this.plugins.some((e) => 'cacheWillUpdate' in e) ||
            this.plugins.unshift(q)
      }
      async _handle(t, r) {
        const n = r.fetchAndCachePut(t).catch(() => {})
        r.waitUntil(n)
        let a,
          s = await r.cacheMatch(t)
        if (s);
        else
          try {
            s = await n
          } catch (e) {
            e instanceof Error && (a = e)
          }
        if (!s) throw new e('no-response', { url: t.url, error: a })
        return s
      }
    }
    const U = (e, t) => t.some((t) => e instanceof t)
    let D, S
    const I = new WeakMap(),
      j = new WeakMap(),
      M = new WeakMap(),
      A = new WeakMap(),
      K = new WeakMap()
    let W = {
      get(e, t, r) {
        if (e instanceof IDBTransaction) {
          if ('done' === t) return j.get(e)
          if ('objectStoreNames' === t) return e.objectStoreNames || M.get(e)
          if ('store' === t)
            return r.objectStoreNames[1]
              ? void 0
              : r.objectStore(r.objectStoreNames[0])
        }
        return F(e[t])
      },
      set: (e, t, r) => ((e[t] = r), !0),
      has: (e, t) =>
        (e instanceof IDBTransaction && ('done' === t || 'store' === t)) ||
        t in e
    }
    function B(e) {
      return 'function' == typeof e
        ? (t = e) !== IDBDatabase.prototype.transaction ||
          'objectStoreNames' in IDBTransaction.prototype
          ? (
              S ||
              (S = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey
              ])
            ).includes(t)
            ? function (...e) {
                return t.apply(G(this), e), F(I.get(this))
              }
            : function (...e) {
                return F(t.apply(G(this), e))
              }
          : function (e, ...r) {
              const n = t.call(G(this), e, ...r)
              return M.set(n, e.sort ? e.sort() : [e]), F(n)
            }
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (j.has(e)) return
              const t = new Promise((t, r) => {
                const n = () => {
                    e.removeEventListener('complete', a),
                      e.removeEventListener('error', s),
                      e.removeEventListener('abort', s)
                  },
                  a = () => {
                    t(), n()
                  },
                  s = () => {
                    r(e.error || new DOMException('AbortError', 'AbortError')),
                      n()
                  }
                e.addEventListener('complete', a),
                  e.addEventListener('error', s),
                  e.addEventListener('abort', s)
              })
              j.set(e, t)
            })(e),
          U(
            e,
            D ||
              (D = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction
              ])
          )
            ? new Proxy(e, W)
            : e)
      var t
    }
    function F(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          const t = new Promise((t, r) => {
            const n = () => {
                e.removeEventListener('success', a),
                  e.removeEventListener('error', s)
              },
              a = () => {
                t(F(e.result)), n()
              },
              s = () => {
                r(e.error), n()
              }
            e.addEventListener('success', a), e.addEventListener('error', s)
          })
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && I.set(t, e)
              })
              .catch(() => {}),
            K.set(t, e),
            t
          )
        })(e)
      if (A.has(e)) return A.get(e)
      const t = B(e)
      return t !== e && (A.set(e, t), K.set(t, e)), t
    }
    const G = (e) => K.get(e),
      H = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
      V = ['put', 'add', 'delete', 'clear'],
      $ = new Map()
    function Y(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || 'string' != typeof t) return
      if ($.get(t)) return $.get(t)
      const r = t.replace(/FromIndex$/, ''),
        n = t !== r,
        a = V.includes(r)
      if (
        !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
        (!a && !H.includes(r))
      )
        return
      const s = async function (e, ...t) {
        const s = this.transaction(e, a ? 'readwrite' : 'readonly')
        let i = s.store
        return (
          n && (i = i.index(t.shift())),
          (await Promise.all([i[r](...t), a && s.done]))[0]
        )
      }
      return $.set(t, s), s
    }
    var Q
    ;(Q = W),
      (W = {
        ...Q,
        get: (e, t, r) => Y(e, t) || Q.get(e, t, r),
        has: (e, t) => !!Y(e, t) || Q.has(e, t)
      }),
      r(550)
    const J = 'cache-entries',
      z = (e) => {
        const t = new URL(e, location.href)
        return (t.hash = ''), t.href
      }
    class X {
      constructor(e) {
        ;(this._db = null), (this._cacheName = e)
      }
      _upgradeDb(e) {
        const t = e.createObjectStore(J, { keyPath: 'id' })
        t.createIndex('cacheName', 'cacheName', { unique: !1 }),
          t.createIndex('timestamp', 'timestamp', { unique: !1 })
      }
      _upgradeDbAndDeleteOldDbs(e) {
        this._upgradeDb(e),
          this._cacheName &&
            (function (e, { blocked: t } = {}) {
              const r = indexedDB.deleteDatabase(e)
              t && r.addEventListener('blocked', (e) => t(e.oldVersion, e)),
                F(r).then(() => {})
            })(this._cacheName)
      }
      async setTimestamp(e, t) {
        const r = {
            url: (e = z(e)),
            timestamp: t,
            cacheName: this._cacheName,
            id: this._getId(e)
          },
          n = (await this.getDb()).transaction(J, 'readwrite', {
            durability: 'relaxed'
          })
        await n.store.put(r), await n.done
      }
      async getTimestamp(e) {
        const t = await this.getDb(),
          r = await t.get(J, this._getId(e))
        return null == r ? void 0 : r.timestamp
      }
      async expireEntries(e, t) {
        const r = await this.getDb()
        let n = await r
          .transaction(J)
          .store.index('timestamp')
          .openCursor(null, 'prev')
        const a = []
        let s = 0
        for (; n; ) {
          const r = n.value
          r.cacheName === this._cacheName &&
            ((e && r.timestamp < e) || (t && s >= t) ? a.push(n.value) : s++),
            (n = await n.continue())
        }
        const i = []
        for (const e of a) await r.delete(J, e.id), i.push(e.url)
        return i
      }
      _getId(e) {
        return this._cacheName + '|' + z(e)
      }
      async getDb() {
        return (
          this._db ||
            (this._db = await (function (
              e,
              t,
              { blocked: r, upgrade: n, blocking: a, terminated: s } = {}
            ) {
              const i = indexedDB.open(e, t),
                o = F(i)
              return (
                n &&
                  i.addEventListener('upgradeneeded', (e) => {
                    n(
                      F(i.result),
                      e.oldVersion,
                      e.newVersion,
                      F(i.transaction),
                      e
                    )
                  }),
                r &&
                  i.addEventListener('blocked', (e) =>
                    r(e.oldVersion, e.newVersion, e)
                  ),
                o
                  .then((e) => {
                    s && e.addEventListener('close', () => s()),
                      a &&
                        e.addEventListener('versionchange', (e) =>
                          a(e.oldVersion, e.newVersion, e)
                        )
                  })
                  .catch(() => {}),
                o
              )
            })('workbox-expiration', 1, {
              upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
            })),
          this._db
        )
      }
    }
    class Z {
      constructor(e, t = {}) {
        ;(this._isRunning = !1),
          (this._rerunRequested = !1),
          (this._maxEntries = t.maxEntries),
          (this._maxAgeSeconds = t.maxAgeSeconds),
          (this._matchOptions = t.matchOptions),
          (this._cacheName = e),
          (this._timestampModel = new X(e))
      }
      async expireEntries() {
        if (this._isRunning) return void (this._rerunRequested = !0)
        this._isRunning = !0
        const e = this._maxAgeSeconds
            ? Date.now() - 1e3 * this._maxAgeSeconds
            : 0,
          t = await this._timestampModel.expireEntries(e, this._maxEntries),
          r = await self.caches.open(this._cacheName)
        for (const e of t) await r.delete(e, this._matchOptions)
        ;(this._isRunning = !1),
          this._rerunRequested &&
            ((this._rerunRequested = !1), h(this.expireEntries()))
      }
      async updateTimestamp(e) {
        await this._timestampModel.setTimestamp(e, Date.now())
      }
      async isURLExpired(e) {
        if (this._maxAgeSeconds) {
          const t = await this._timestampModel.getTimestamp(e),
            r = Date.now() - 1e3 * this._maxAgeSeconds
          return void 0 === t || t < r
        }
        return !1
      }
      async delete() {
        ;(this._rerunRequested = !1),
          await this._timestampModel.expireEntries(1 / 0)
      }
    }
    class ee {
      constructor(e = {}) {
        var r
        ;(this.cachedResponseWillBeUsed = async ({
          event: e,
          request: t,
          cacheName: r,
          cachedResponse: n
        }) => {
          if (!n) return null
          const a = this._isResponseDateFresh(n),
            s = this._getCacheExpiration(r)
          h(s.expireEntries())
          const i = s.updateTimestamp(t.url)
          if (e)
            try {
              e.waitUntil(i)
            } catch (e) {}
          return a ? n : null
        }),
          (this.cacheDidUpdate = async ({ cacheName: e, request: t }) => {
            const r = this._getCacheExpiration(e)
            await r.updateTimestamp(t.url), await r.expireEntries()
          }),
          (this._config = e),
          (this._maxAgeSeconds = e.maxAgeSeconds),
          (this._cacheExpirations = new Map()),
          e.purgeOnQuotaError &&
            ((r = () => this.deleteCacheAndMetadata()), t.add(r))
      }
      _getCacheExpiration(t) {
        if (t === i()) throw new e('expire-custom-caches-only')
        let r = this._cacheExpirations.get(t)
        return (
          r || ((r = new Z(t, this._config)), this._cacheExpirations.set(t, r)),
          r
        )
      }
      _isResponseDateFresh(e) {
        if (!this._maxAgeSeconds) return !0
        const t = this._getDateHeaderTimestamp(e)
        return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
      }
      _getDateHeaderTimestamp(e) {
        if (!e.headers.has('date')) return null
        const t = e.headers.get('date'),
          r = new Date(t).getTime()
        return isNaN(r) ? null : r
      }
      async deleteCacheAndMetadata() {
        for (const [e, t] of this._cacheExpirations)
          await self.caches.delete(e), await t.delete()
        this._cacheExpirations = new Map()
      }
    }
    function te(e) {
      return (
        (te =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
        te(e)
      )
    }
    function re() {
      re = function () {
        return t
      }
      var e,
        t = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        a =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value
          },
        s = 'function' == typeof Symbol ? Symbol : {},
        i = s.iterator || '@@iterator',
        o = s.asyncIterator || '@@asyncIterator',
        c = s.toStringTag || '@@toStringTag'
      function h(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          e[t]
        )
      }
      try {
        h({}, '')
      } catch (e) {
        h = function (e, t, r) {
          return (e[t] = r)
        }
      }
      function u(e, t, r, n) {
        var s = t && t.prototype instanceof m ? t : m,
          i = Object.create(s.prototype),
          o = new q(n || [])
        return a(i, '_invoke', { value: C(e, r, o) }), i
      }
      function l(e, t, r) {
        try {
          return { type: 'normal', arg: e.call(t, r) }
        } catch (e) {
          return { type: 'throw', arg: e }
        }
      }
      t.wrap = u
      var f = 'suspendedStart',
        d = 'suspendedYield',
        p = 'executing',
        y = 'completed',
        g = {}
      function m() {}
      function w() {}
      function v() {}
      var _ = {}
      h(_, i, function () {
        return this
      })
      var b = Object.getPrototypeOf,
        x = b && b(b(O([])))
      x && x !== r && n.call(x, i) && (_ = x)
      var L = (v.prototype = m.prototype = Object.create(_))
      function E(e) {
        ;['next', 'throw', 'return'].forEach(function (t) {
          h(e, t, function (e) {
            return this._invoke(t, e)
          })
        })
      }
      function R(e, t) {
        function r(a, s, i, o) {
          var c = l(e[a], e, s)
          if ('throw' !== c.type) {
            var h = c.arg,
              u = h.value
            return u && 'object' == te(u) && n.call(u, '__await')
              ? t.resolve(u.__await).then(
                  function (e) {
                    r('next', e, i, o)
                  },
                  function (e) {
                    r('throw', e, i, o)
                  }
                )
              : t.resolve(u).then(
                  function (e) {
                    ;(h.value = e), i(h)
                  },
                  function (e) {
                    return r('throw', e, i, o)
                  }
                )
          }
          o(c.arg)
        }
        var s
        a(this, '_invoke', {
          value: function (e, n) {
            function a() {
              return new t(function (t, a) {
                r(e, n, t, a)
              })
            }
            return (s = s ? s.then(a, a) : a())
          }
        })
      }
      function C(t, r, n) {
        var a = f
        return function (s, i) {
          if (a === p) throw new Error('Generator is already running')
          if (a === y) {
            if ('throw' === s) throw i
            return { value: e, done: !0 }
          }
          for (n.method = s, n.arg = i; ; ) {
            var o = n.delegate
            if (o) {
              var c = k(o, n)
              if (c) {
                if (c === g) continue
                return c
              }
            }
            if ('next' === n.method) n.sent = n._sent = n.arg
            else if ('throw' === n.method) {
              if (a === f) throw ((a = y), n.arg)
              n.dispatchException(n.arg)
            } else 'return' === n.method && n.abrupt('return', n.arg)
            a = p
            var h = l(t, r, n)
            if ('normal' === h.type) {
              if (((a = n.done ? y : d), h.arg === g)) continue
              return { value: h.arg, done: n.done }
            }
            'throw' === h.type &&
              ((a = y), (n.method = 'throw'), (n.arg = h.arg))
          }
        }
      }
      function k(t, r) {
        var n = r.method,
          a = t.iterator[n]
        if (a === e)
          return (
            (r.delegate = null),
            ('throw' === n &&
              t.iterator.return &&
              ((r.method = 'return'),
              (r.arg = e),
              k(t, r),
              'throw' === r.method)) ||
              ('return' !== n &&
                ((r.method = 'throw'),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            g
          )
        var s = l(a, t.iterator, r.arg)
        if ('throw' === s.type)
          return (r.method = 'throw'), (r.arg = s.arg), (r.delegate = null), g
        var i = s.arg
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
              (r.next = t.nextLoc),
              'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
              (r.delegate = null),
              g)
            : i
          : ((r.method = 'throw'),
            (r.arg = new TypeError('iterator result is not an object')),
            (r.delegate = null),
            g)
      }
      function N(e) {
        var t = { tryLoc: e[0] }
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t)
      }
      function T(e) {
        var t = e.completion || {}
        ;(t.type = 'normal'), delete t.arg, (e.completion = t)
      }
      function q(e) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]),
          e.forEach(N, this),
          this.reset(!0)
      }
      function O(t) {
        if (t || '' === t) {
          var r = t[i]
          if (r) return r.call(t)
          if ('function' == typeof t.next) return t
          if (!isNaN(t.length)) {
            var a = -1,
              s = function r() {
                for (; ++a < t.length; )
                  if (n.call(t, a)) return (r.value = t[a]), (r.done = !1), r
                return (r.value = e), (r.done = !0), r
              }
            return (s.next = s)
          }
        }
        throw new TypeError(te(t) + ' is not iterable')
      }
      return (
        (w.prototype = v),
        a(L, 'constructor', { value: v, configurable: !0 }),
        a(v, 'constructor', { value: w, configurable: !0 }),
        (w.displayName = h(v, c, 'GeneratorFunction')),
        (t.isGeneratorFunction = function (e) {
          var t = 'function' == typeof e && e.constructor
          return (
            !!t &&
            (t === w || 'GeneratorFunction' === (t.displayName || t.name))
          )
        }),
        (t.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, v)
              : ((e.__proto__ = v), h(e, c, 'GeneratorFunction')),
            (e.prototype = Object.create(L)),
            e
          )
        }),
        (t.awrap = function (e) {
          return { __await: e }
        }),
        E(R.prototype),
        h(R.prototype, o, function () {
          return this
        }),
        (t.AsyncIterator = R),
        (t.async = function (e, r, n, a, s) {
          void 0 === s && (s = Promise)
          var i = new R(u(e, r, n, a), s)
          return t.isGeneratorFunction(r)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next()
              })
        }),
        E(L),
        h(L, c, 'Generator'),
        h(L, i, function () {
          return this
        }),
        h(L, 'toString', function () {
          return '[object Generator]'
        }),
        (t.keys = function (e) {
          var t = Object(e),
            r = []
          for (var n in t) r.push(n)
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop()
                if (n in t) return (e.value = n), (e.done = !1), e
              }
              return (e.done = !0), e
            }
          )
        }),
        (t.values = O),
        (q.prototype = {
          constructor: q,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(T),
              !t)
            )
              for (var r in this)
                't' === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = e)
          },
          stop: function () {
            this.done = !0
            var e = this.tryEntries[0].completion
            if ('throw' === e.type) throw e.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            var r = this
            function a(n, a) {
              return (
                (o.type = 'throw'),
                (o.arg = t),
                (r.next = n),
                a && ((r.method = 'next'), (r.arg = e)),
                !!a
              )
            }
            for (var s = this.tryEntries.length - 1; s >= 0; --s) {
              var i = this.tryEntries[s],
                o = i.completion
              if ('root' === i.tryLoc) return a('end')
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, 'catchLoc'),
                  h = n.call(i, 'finallyLoc')
                if (c && h) {
                  if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                  if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                } else if (c) {
                  if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                } else {
                  if (!h)
                    throw new Error('try statement without catch or finally')
                  if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r]
              if (
                a.tryLoc <= this.prev &&
                n.call(a, 'finallyLoc') &&
                this.prev < a.finallyLoc
              ) {
                var s = a
                break
              }
            }
            s &&
              ('break' === e || 'continue' === e) &&
              s.tryLoc <= t &&
              t <= s.finallyLoc &&
              (s = null)
            var i = s ? s.completion : {}
            return (
              (i.type = e),
              (i.arg = t),
              s
                ? ((this.method = 'next'), (this.next = s.finallyLoc), g)
                : this.complete(i)
            )
          },
          complete: function (e, t) {
            if ('throw' === e.type) throw e.arg
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
              g
            )
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t]
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), T(r), g
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t]
              if (r.tryLoc === e) {
                var n = r.completion
                if ('throw' === n.type) {
                  var a = n.arg
                  T(r)
                }
                return a
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, r, n) {
            return (
              (this.delegate = { iterator: O(t), resultName: r, nextLoc: n }),
              'next' === this.method && (this.arg = e),
              g
            )
          }
        }),
        t
      )
    }
    function ne(e, t, r, n, a, s, i) {
      try {
        var o = e[s](i),
          c = o.value
      } catch (e) {
        return void r(e)
      }
      o.done ? t(c) : Promise.resolve(c).then(n, a)
    }
    var ae, se, ie, oe
    ;(oe = {
      prefix: 'resto-app',
      suffix: 'v1',
      precache: 'precache',
      runtime: 'runtime'
    }),
      ((e) => {
        for (const t of Object.keys(n)) e(t)
      })((e) => {
        'string' == typeof oe[e] && (n[e] = oe[e])
      }),
      (ie = [
        {
          revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
          url: './sw.bundle.js.LICENSE.txt'
        },
        { revision: '427353317b16e64e947fc22f8f92444c', url: '.DS_Store' },
        { revision: null, url: '5d982326781d6f8ea98b.jpg' },
        { revision: '7b7ab953ece3a74c43a3b70e8b7df1d9', url: 'app.bundle.js' },
        {
          revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
          url: 'app.bundle.js.LICENSE.txt'
        },
        {
          revision: '590555fd525d7feb05568871c3d251cc',
          url: 'app.webmanifest'
        },
        { revision: '0760fae8cf2d2b172678847987d1d95c', url: 'data/DATA.json' },
        { revision: '3e632b8db0716536339848f25ac01933', url: 'favicon.ico' },
        {
          revision: '083d8b3f3f5300ea6f5ac00dc1b96555',
          url: 'icons/android-launchericon-144-144.png'
        },
        {
          revision: '3c483643862ccecd860ad1ab3bacabb2',
          url: 'icons/android-launchericon-192-192.png'
        },
        {
          revision: 'bf795332846a674affb987b5bc873058',
          url: 'icons/android-launchericon-48-48.png'
        },
        {
          revision: 'b978b41246a74cf9e21320556f670d73',
          url: 'icons/android-launchericon-512-512.png'
        },
        {
          revision: '2189f5490e4fb1e2a12fd2f31c8e0311',
          url: 'icons/android-launchericon-72-72.png'
        },
        {
          revision: '4c8855fc600756dbcc95d6c90c8c6854',
          url: 'icons/android-launchericon-96-96.png'
        },
        {
          revision: '7cfe82738dc5be0cee1b41e6209cfab4',
          url: 'icons/icon-600x600.png'
        },
        {
          revision: 'a761018954c64def389be3c4e0f479c6',
          url: 'images/.DS_Store'
        },
        {
          revision: 'a2f444d9e2e43a5d0373b1a0d8cb2236',
          url: 'images/heros/hero-image_1.jpg'
        },
        {
          revision: '49f78cae81de4f48caf1c2fe0271c828',
          url: 'images/heros/hero-image_2.jpg'
        },
        {
          revision: 'd232e05589056e05f52cf2689f315c6c',
          url: 'images/heros/hero-image_3.jpg'
        },
        {
          revision: '4ea98fe648a0b853ab379c928b5fd0bf',
          url: 'images/heros/hero-image_4.jpg'
        },
        { revision: '8400ab8d984a1a019b0341fb15e55a45', url: 'index.html' }
      ]),
      b().precache(ie),
      (function (e) {
        const t = b()
        k(new N(t, undefined))
      })(),
      k(
        function (e) {
          return 'navigate' === e.request.mode
        },
        new O({ cacheName: 'my-pages-cache' })
      ),
      alert('BABIII'),
      k(
        /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
        new O({
          cacheName: 'dicoding-restaurant-api-caches',
          plugins: [new ee({ maxAgeSeconds: 2592e3, maxEntries: 100 })]
        })
      ),
      k(
        function (e) {
          var t = e.request
          return console.log('kiw', t)
        },
        new T({
          cacheName: 'my-images-cache',
          plugins: [
            new ee({ maxAgeSeconds: 2592e3, maxEntries: 50 }),
            {
              cacheDidNotMatch:
                ((ae = re().mark(function e(t) {
                  var r, n, a
                  return re().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.request),
                            t.url,
                            t.event,
                            (e.next = 3),
                            caches.open('my-images-cache')
                          )
                        case 3:
                          return (n = e.sent), (e.next = 6), fetch(r)
                        case 6:
                          return (a = e.sent), (e.next = 9), n.put(r, a.clone())
                        case 9:
                          return e.abrupt('return', a)
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })),
                (se = function () {
                  var e = this,
                    t = arguments
                  return new Promise(function (r, n) {
                    var a = ae.apply(e, t)
                    function s(e) {
                      ne(a, r, n, s, i, 'next', e)
                    }
                    function i(e) {
                      ne(a, r, n, s, i, 'throw', e)
                    }
                    s(void 0)
                  })
                }),
                function (e) {
                  return se.apply(this, arguments)
                })
            }
          ]
        })
      ),
      k(
        new RegExp(
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css'
        ),
        new T({ cacheName: 'my-font-awesome-css-cache' })
      ),
      k(
        function (e) {
          var t = e.url
          return (
            'https://fonts.googleapis.com' === t.origin ||
            'https://fonts.gstatic.com' === t.origin
          )
        },
        new P({
          cacheName: 'my-google-fonts-cache',
          plugins: [new ee({ maxEntries: 50 })]
        })
      ),
      k(
        function (e) {
          var t = e.request
          return (
            'style' === t.destination ||
            'script' === t.destination ||
            'worker' === t.destination
          )
        },
        new P({ cacheName: 'my-assets-cache' })
      ),
      self.addEventListener('activate', (e) => {
        const t = s()
        e.waitUntil(
          (async (e, t = '-precache-') => {
            const r = (await self.caches.keys()).filter(
              (r) =>
                r.includes(t) && r.includes(self.registration.scope) && r !== e
            )
            return await Promise.all(r.map((e) => self.caches.delete(e))), r
          })(t).then((e) => {})
        )
      }),
      self.addEventListener('message', function (e) {
        e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
      })
  })()
})()
//# sourceMappingURL=sw.bundle.js.map