var bigInt = (function (e) {
	'use strict';

	function o(e, t) {
		this.value = e,
			this.sign = t,
			this.isSmall = !1;
	}

	function u(e) {
		this.value = e,
			this.sign = e < 0,
			this.isSmall = !0;
	}

	function a(e) {
		return -r < e && e < r;
	}

	function f(e) {
		return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
	}

	function l(e) {
		c(e);
		var n = e.length;
		if (n < 4 && A(e, i) < 0) switch (n) {
			case 0:
				return 0;
			case 1:
				return e[0];
			case 2:
				return e[0] + e[1] * t;
			default:
				return e[0] + (e[1] + e[2] * t) * t;
		}
		return e;
	}

	function c(e) {
		var t = e.length;
		while (e[--t] === 0);
		e.length = t + 1;
	}

	function h(e) {
		var t = new Array(e),
			n = -1;
		while (++n < e) t[n] = 0;
		return t;
	}

	function p(e) {
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}

	function d(e, n) {
		var r = e.length,
			i = n.length,
			s = new Array(r),
			o = 0,
			u = t,
			a, f;
		for (f = 0; f < i; f++) a = e[f] + n[f] + o, o = a >= u ? 1 : 0, s[f] = a - o * u;
		while (f < r) a = e[f] + o, o = a === u ? 1 : 0, s[f++] = a - o * u;
		return o > 0 && s.push(o), s;
	}

	function v(e, t) {
		return e.length >= t.length ? d(e, t) : d(t, e);
	}

	function m(e, n) {
		var r = e.length,
			i = new Array(r),
			s = t,
			o, u;
		for (u = 0; u < r; u++) o = e[u] - s + n, n = Math.floor(o / s), i[u] = o - n * s, n += 1;
		while (n > 0) i[u++] = n % s, n = Math.floor(n / s);
		return i;
	}

	function g(e, n) {
		var r = e.length,
			i = n.length,
			s = new Array(r),
			o = 0,
			u = t,
			a, f;
		for (a = 0; a < i; a++) f = e[a] - o - n[a], f < 0 ? (f += u, o = 1) : o = 0, s[a] = f;
		for (a = i; a < r; a++) {
			f = e[a] - o;
			if (!(f < 0)) {
				s[a++] = f;
				break;
			}
			f += u, s[a] = f;
		}
		for (; a < r; a++) s[a] = e[a];
		return c(s), s;
	}

	function y(e, t, n) {
		var r, i;
		return A(e, t) >= 0 ? r = g(e, t) : (r = g(t, e), n = !n), r = l(r), typeof r === 'number' ? (n && (r = -r), new u(r)) : new o(r, n);
	}

	function b(e, n, r) {
		var i = e.length,
			s = new Array(i),
			a = -n,
			f = t,
			c, h;
		for (c = 0; c < i; c++) h = e[c] + a, a = Math.floor(h / f), s[c] = h < 0 ? h % f + f : h;
		return s = l(s), typeof s === 'number' ? (r && (s = -s), new u(s)) : new o(s, r);
	}

	function w(e, n) {
		var r = e.length,
			i = n.length,
			s = r + i,
			o = h(s),
			u = t,
			a, f, l, p, d;
		for (l = 0; l < r; ++l) {
			p = e[l];
			for (var v = 0; v < i; ++v) d = n[v], a = p * d + o[l + v], f = Math.floor(a / u), o[l + v] = a - f * u, o[l + v + 1] += f;
		}
		return c(o), o;
	}

	function E(e, n) {
		var r = e.length,
			i = new Array(r),
			s = t,
			o = 0,
			u, a;
		for (a = 0; a < r; a++) u = e[a] * n + o, o = Math.floor(u / s), i[a] = u - o * s;
		while (o > 0) i[a++] = o % s, o = Math.floor(o / s);
		return i;
	}

	function S(e, t) {
		var n = [];
		while (t-- > 0) n.push(0);
		return n.concat(e);
	}

	function x(e, t) {
		var n = Math.max(e.length, t.length);
		if (n <= 400) return w(e, t);
		n = Math.ceil(n / 2);
		var r = e.slice(n),
			i = e.slice(0, n),
			s = t.slice(n),
			o = t.slice(0, n),
			u = x(i, o),
			a = x(r, s),
			f = x(v(i, r), v(o, s));
		return v(v(u, S(g(g(f, u), a), n)), S(a, 2 * n));
	}

	function T(e) {
		var n = e.length,
			r = h(n + n),
			i = t,
			s, o, u, a, f;
		for (u = 0; u < n; u++) {
			a = e[u];
			for (var l = 0; l < n; l++) f = e[l], s = a * f + r[u + l], o = Math.floor(s / i), r[u + l] = s - o * i, r[u + l + 1] += o;
		}
		return c(r), r;
	}

	function N(e, n) {
		var r = e.length,
			i = n.length,
			s = t,
			o = h(n.length),
			u = n[i - 1],
			a = Math.ceil(s / (2 * u)),
			f = E(e, a),
			c = E(n, a),
			p, d, v, m, g, y, b;
		f.length <= r && f.push(0), c.push(0), u = c[i - 1];
		for (d = r - i; d >= 0; d--) {
			p = s - 1, p = Math.floor((f[d + i] * s + f[d + i - 1]) / u), v = 0, m = 0, y = c.length;
			for (g = 0; g < y; g++) v += p * c[g], b = Math.floor(v / s), m += f[d + g] - (v - b * s), v = b, m < 0 ? (f[d + g] = m + s, m = -1) : (f[d + g] = m, m = 0);
			while (m !== 0) {
				p -= 1, v = 0;
				for (g = 0; g < y; g++) v += f[d + g] - s + c[g], v < 0 ? (f[d + g] = v + s, v = 0) : (f[d + g] = v, v = 1);
				m += v;
			}
			o[d] = p;
		}
		return f = k(f, a)[0], [l(o), l(f)];
	}

	function C(e, n) {
		var r = e.length,
			i = n.length,
			s = [],
			o = [],
			u = t,
			a, f, c, h, p;
		while (r) {
			o.unshift(e[--r]);
			if (A(o, n) < 0) {
				s.push(0);
				continue;
			}
			f = o.length, c = o[f - 1] * u + o[f - 2], h = n[i - 1] * u + n[i - 2], f > i && (c = (c + 1) * u), a = Math.ceil(c / h);
			do {
				p = E(n, a);
				if (A(p, o) <= 0) break;
				a--;
			} while (a);
			s.push(a), o = g(o, p);
		}
		return s.reverse(), [l(s), l(o)];
	}

	function k(e, n) {
		var r = e.length,
			i = h(r),
			s = t,
			o, u, a, f;
		a = 0;
		for (o = r - 1; o >= 0; --o) f = a * s + e[o], u = p(f / n), a = f - u * n, i[o] = u | 0;
		return [i, a | 0];
	}

	function L(e, n) {
		var r, i = z(n),
			s = e.value,
			a = i.value,
			c;
		if (a === 0) throw new Error('Cannot divide by zero');
		if (e.isSmall) return i.isSmall ? [new u(p(s / a)), new u(s % a)] : [W[0], e];
		if (i.isSmall) {
			if (a === 1) return [e, W[0]];
			if (a == -1) return [e.negate(), W[0]];
			var h = Math.abs(a);
			if (h < t) {
				r = k(s, h), c = l(r[0]);
				var d = r[1];
				return e.sign && (d = -d), typeof c === 'number' ? (e.sign !== i.sign && (c = -c), [new u(c), new u(d)]) : [new o(c, e.sign !== i.sign), new u(d)];
			}
			a = f(h);
		}
		var v = A(s, a);
		if (v === -1) return [W[0], e];
		if (v === 0) return [W[e.sign === i.sign ? 1 : -1], W[0]];
		s.length + a.length <= 200 ? r = N(s, a) : r = C(s, a), c = r[0];
		var m = e.sign !== i.sign,
			g = r[1],
			y = e.sign;
		return typeof c === 'number' ? (m && (c = -c), c = new u(c)) : c = new o(c, m), typeof g === 'number' ? (y && (g = -g), g = new u(g)) : g = new o(g, y), [c, g];
	}

	function A(e, t) {
		if (e.length !== t.length) return e.length > t.length ? 1 : -1;
		for (var n = e.length - 1; n >= 0; n--)
			if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
		return 0;
	}

	function D(e) {
		return (typeof e === 'number' || typeof e === 'string') && +Math.abs(e) <= t || e instanceof o && e.value.length <= 1;
	}

	function P(e, t, n) {
		t = z(t);
		var r = e.isNegative(),
			i = t.isNegative(),
			s = r ? e.not() : e,
			o = i ? t.not() : t,
			u = [],
			a = [],
			f = !1,
			l = !1;
		while (!f || !l) s.isZero() ? (f = !0, u.push(r ? 1 : 0)) : r ? u.push(s.isEven() ? 1 : 0) : u.push(s.isEven() ? 0 : 1), o.isZero() ? (l = !0, a.push(i ? 1 : 0)) : i ? a.push(o.isEven() ? 1 : 0) : a.push(o.isEven() ? 0 : 1), s = s.over(2), o = o.over(2);
		var c = [];
		for (var h = 0; h < u.length; h++) c.push(n(u[h], a[h]));
		var p = bigInt(c.pop()).negate().times(bigInt(2).pow(c.length));
		while (c.length) p = p.add(bigInt(c.pop()).times(bigInt(2).pow(c.length)));
		return p;
	}

	function H(e, t) {
		return e = z(e), t = z(t), e.greater(t) ? e : t;
	}

	function B(e, t) {
		return e = z(e), t = z(t), e.lesser(t) ? e : t;
	}

	function j(e, t) {
		return e = z(e).abs(), t = z(t).abs(), e.equals(t) ? e : e.isZero() ? t : t.isZero() ? e : e.isEven() ? t.isOdd() ? j(e.divide(2), t) : j(e.divide(2), t.divide(2)).multiply(2) : t.isEven() ? j(e, t.divide(2)) : e.greater(t) ? j(e.subtract(t).divide(2), t) : j(t.subtract(e).divide(2), e);
	}

	function F(e, t) {
		return e = z(e).abs(), t = z(t).abs(), e.multiply(t).divide(j(e, t));
	}

	function I(e, n) {
		e = z(e), n = z(n);
		var r = B(e, n),
			i = H(e, n),
			s = i.subtract(r);
		if (s.isSmall) return r.add(Math.random() * s);
		var u = s.value.length - 1,
			a = [],
			f = !0;
		for (var c = u; c >= 0; c--) {
			var h = f ? s.value[c] : t,
				d = p(Math.random() * h);
			a.unshift(d), d < h && (f = !1);
		}
		return a = l(a), r.add(new o(a, !1, typeof a === 'number'));
	}

	function R(e) {
		var t = e.value;
		return typeof t === 'number' && (t = [t]), t.length === 1 && t[0] <= 36 ? '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(t[0]) : '<' + t + '>';
	}

	function U(e, t) {
		t = bigInt(t);
		if (t.isZero()) {
			if (e.isZero()) return '0';
			throw new Error('Cannot convert nonzero numbers to base 0.');
		}
		if (t.equals(-1)) return e.isZero() ? '0' : e.isNegative() ? (new Array(1 - e)).join('10') : '1' + (new Array(+e)).join('01');
		var n = '';
		e.isNegative() && t.isPositive() && (n = '-', e = e.abs());
		if (t.equals(1)) return e.isZero() ? '0' : n + (new Array(+e + 1)).join(1);
		var r = [],
			i = e,
			s;
		while (i.isNegative() || i.compareAbs(t) >= 0) {
			s = i.divmod(t), i = s.quotient;
			var o = s.remainder;
			o.isNegative() && (o = t.minus(o).abs(), i = i.next()), r.push(R(o));
		}
		return r.push(R(i)), n + r.reverse().join('');
	}

	function z(e) {
		if (e instanceof o || e instanceof u) return e;
		if (typeof e === 'number') {
			if (a(e)) return new u(e);
			e = String(e);
		}
		if (typeof e === 'string') {
			if (a(+e)) {
				var t = +e;
				if (t === p(t)) return new u(t);
				throw 'Invalid integer: ' + e;
			}
			var r = e[0] === '-';
			r && (e = e.slice(1));
			var i = e.split(/e/i);
			if (i.length > 2) throw new Error('Invalid integer: ' + f.join('e'));
			if (i.length === 2) {
				var s = i[1];
				s[0] === '+' && (s = s.slice(1)), s = +s;
				if (s !== p(s) || !a(s)) throw new Error('Invalid integer: ' + s + ' is not a valid exponent.');
				var f = i[0],
					l = f.indexOf('.');
				l >= 0 && (s -= f.length - l, f = f.slice(0, l) + f.slice(l + 1));
				if (s < 0) throw new Error('Cannot include negative exponent part for integers');
				f += (new Array(s + 1)).join('0'), e = f;
			}
			var h = /^([0-9][0-9]*)$/.test(e);
			if (!h) throw new Error('Invalid integer: ' + e);
			var d = [],
				v = e.length,
				m = n,
				g = v - m;
			while (v > 0) d.push(+e.slice(g, v)), g -= m, g < 0 && (g = 0), v -= m;
			return c(d), new o(d, r);
		}
	}
	var t = 1e7,
		n = 7,
		r = 9007199254740992,
		i = f(r),
		s = Math.log(r);
	o.prototype.add = function (e) {
		var t, n = z(e);
		if (this.sign !== n.sign) return this.subtract(n.negate());
		var r = this.value,
			i = n.value;
		return n.isSmall ? new o(m(r, Math.abs(i)), this.sign) : new o(v(r, i), this.sign);
	}, o.prototype.plus = o.prototype.add, u.prototype.add = function (e) {
		var t = z(e),
			n = this.value;
		if (n < 0 !== t.sign) return this.subtract(t.negate());
		var r = t.value;
		if (t.isSmall) {
			if (a(n + r)) return new u(n + r);
			r = f(Math.abs(r));
		}
		return new o(m(r, Math.abs(n)), n < 0);
	}, u.prototype.plus = u.prototype.add, o.prototype.subtract = function (e) {
		var t = z(e);
		if (this.sign !== t.sign) return this.add(t.negate());
		var n = this.value,
			r = t.value;
		return t.isSmall ? b(n, Math.abs(r), this.sign) : y(n, r, this.sign);
	}, o.prototype.minus = o.prototype.subtract, u.prototype.subtract = function (e) {
		var t = z(e),
			n = this.value;
		if (n < 0 !== t.sign) return this.add(t.negate());
		var r = t.value;
		return t.isSmall ? new u(n - r) : b(r, Math.abs(n), n >= 0);
	}, u.prototype.minus = u.prototype.subtract, o.prototype.negate = function () {
		return new o(this.value, !this.sign);
	}, u.prototype.negate = function () {
		var e = this.sign,
			t = new u(-this.value);
		return t.sign = !e, t;
	}, o.prototype.abs = function () {
		return new o(this.value, !1);
	}, u.prototype.abs = function () {
		return new u(Math.abs(this.value));
	}, o.prototype.multiply = function (e) {
		var n, r = z(e),
			i = this.value,
			s = r.value,
			u = this.sign !== r.sign,
			a;
		if (r.isSmall) {
			if (s === 0) return W[0];
			if (s === 1) return this;
			if (s === -1) return this.negate();
			a = Math.abs(s);
			if (a < t) return new o(E(i, a), u);
			s = f(a);
		}
		return i.length + s.length > 4e3 ? new o(x(i, s), u) : new o(w(i, s), u);
	}, o.prototype.times = o.prototype.multiply, u.prototype.multiply = function (e) {
		var n = z(e),
			r = this.value,
			i = n.value;
		if (r === 0) return W[0];
		if (r === 1) return n;
		if (r === -1) return n.negate();
		if (n.isSmall) {
			if (a(r * i)) return new u(r * i);
			i = f(Math.abs(i));
		}
		var s = Math.abs(r);
		return s < t ? new o(E(i, s), this.sign !== n.sign) : new o(w(i, f(s)), this.sign !== n.sign);
	}, u.prototype.times = u.prototype.multiply, o.prototype.square = function () {
		return new o(T(this.value), !1);
	}, u.prototype.square = function () {
		var e = this.value * this.value;
		return a(e) ? new u(e) : new o(T(f(Math.abs(this.value))), !1);
	}, o.prototype.divmod = function (e) {
		var t = L(this, e);
		return {
			quotient: t[0],
			remainder: t[1]
		};
	}, u.prototype.divmod = o.prototype.divmod, o.prototype.divide = function (e) {
		return L(this, e)[0];
	}, u.prototype.over = u.prototype.divide = o.prototype.over = o.prototype.divide, o.prototype.mod = function (e) {
		return L(this, e)[1];
	}, u.prototype.remainder = u.prototype.mod = o.prototype.remainder = o.prototype.mod, o.prototype.pow = function (e) {
		var t = z(e),
			n = this.value,
			r = t.value,
			i, s, o;
		if (r === 0) return W[1];
		if (n === 0) return W[0];
		if (n === 1) return W[1];
		if (n === -1) return t.isEven() ? W[1] : W[-1];
		if (t.sign) return W[0];
		if (!t.isSmall) throw new Error('The exponent ' + t.toString() + ' is too large.');
		if (this.isSmall && a(i = Math.pow(n, r))) return new u(p(i));
		s = this, o = W[1];
		for (;;) {
			r & !0 && (o = o.times(s), --r);
			if (r === 0) break;
			r /= 2, s = s.square();
		}
		return o;
	}, u.prototype.pow = o.prototype.pow, o.prototype.modPow = function (e, t) {
		e = z(e), t = z(t);
		if (t.isZero()) throw new Error('Cannot take modPow with modulus 0');
		var n = W[1],
			r = this.mod(t);
		if (r.isZero()) return W[0];
		while (e.isPositive()) e.isOdd() && (n = n.multiply(r).mod(t)), e = e.divide(2), r = r.square().mod(t);
		return n;
	}, u.prototype.modPow = o.prototype.modPow, o.prototype.compareAbs = function (e) {
		var t = z(e),
			n = this.value,
			r = t.value;
		return t.isSmall ? 1 : A(n, r);
	}, u.prototype.compareAbs = function (e) {
		var t = z(e),
			n = Math.abs(this.value),
			r = t.value;
		return t.isSmall ? (r = Math.abs(r), n === r ? 0 : n > r ? 1 : -1) : -1;
	}, o.prototype.compare = function (e) {
		var t = z(e),
			n = this.value,
			r = t.value;
		return this.sign !== t.sign ? t.sign ? 1 : -1 : t.isSmall ? this.sign ? -1 : 1 : A(n, r) * (this.sign ? -1 : 1);
	}, o.prototype.compareTo = o.prototype.compare, u.prototype.compare = function (e) {
		var t = z(e),
			n = this.value,
			r = t.value;
		return t.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== t.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1;
	}, u.prototype.compareTo = u.prototype.compare, o.prototype.equals = function (e) {
		return this.compare(e) === 0;
	}, u.prototype.eq = u.prototype.equals = o.prototype.eq = o.prototype.equals, o.prototype.notEquals = function (e) {
		return this.compare(e) !== 0;
	}, u.prototype.neq = u.prototype.notEquals = o.prototype.neq = o.prototype.notEquals, o.prototype.greater = function (e) {
		return this.compare(e) > 0;
	}, u.prototype.gt = u.prototype.greater = o.prototype.gt = o.prototype.greater, o.prototype.lesser = function (e) {
		return this.compare(e) < 0;
	}, u.prototype.lt = u.prototype.lesser = o.prototype.lt = o.prototype.lesser, o.prototype.greaterOrEquals = function (e) {
		return this.compare(e) >= 0;
	}, u.prototype.geq = u.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals, o.prototype.lesserOrEquals = function (e) {
		return this.compare(e) <= 0;
	}, u.prototype.leq = u.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals, o.prototype.isEven = function () {
		return (this.value[0] & 1) === 0;
	}, u.prototype.isEven = function () {
		return (this.value & 1) === 0;
	}, o.prototype.isOdd = function () {
		return (this.value[0] & 1) === 1;
	}, u.prototype.isOdd = function () {
		return (this.value & 1) === 1;
	}, o.prototype.isPositive = function () {
		return !this.sign;
	}, u.prototype.isPositive = function () {
		return this.value > 0;
	}, o.prototype.isNegative = function () {
		return this.sign;
	}, u.prototype.isNegative = function () {
		return this.value < 0;
	}, o.prototype.isUnit = function () {
		return !1;
	}, u.prototype.isUnit = function () {
		return Math.abs(this.value) === 1;
	}, o.prototype.isZero = function () {
		return !1;
	}, u.prototype.isZero = function () {
		return this.value === 0;
	}, o.prototype.isDivisibleBy = function (e) {
		var t = z(e),
			n = t.value;
		return n === 0 ? !1 : n === 1 ? !0 : n === 2 ? this.isEven() : this.mod(t).equals(W[0]);
	}, u.prototype.isDivisibleBy = o.prototype.isDivisibleBy, o.prototype.isPrime = function () {
		var e = this.abs(),
			t = e.prev();
		if (e.isUnit()) return !1;
		if (e.equals(2) || e.equals(3) || e.equals(5)) return !0;
		if (e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) return !1;
		if (e.lesser(25)) return !0;
		var n = [2, 3, 5, 7, 11, 13, 17, 19],
			r = t,
			i, s, o, u;
		while (r.isEven()) r = r.divide(2);
		for (o = 0; o < n.length; o++) {
			u = bigInt(n[o]).modPow(r, e);
			if (u.equals(W[1]) || u.equals(t)) continue;
			for (s = !0, i = r; s && i.lesser(t); i = i.multiply(2)) u = u.square().mod(e), u.equals(t) && (s = !1);
			if (s) return !1;
		}
		return !0;
	}, u.prototype.isPrime = o.prototype.isPrime, o.prototype.next = function () {
		var e = this.value;
		return this.sign ? b(e, 1, this.sign) : new o(m(e, 1), this.sign);
	}, u.prototype.next = function () {
		var e = this.value;
		return e + 1 < r ? new u(e + 1) : new o(i, !1);
	}, o.prototype.prev = function () {
		var e = this.value;
		return this.sign ? new o(m(e, 1), !0) : b(e, 1, this.sign);
	}, u.prototype.prev = function () {
		var e = this.value;
		return e - 1 > -r ? new u(e - 1) : new o(i, !0);
	};
	var O = [1];
	while (O[O.length - 1] <= t) O.push(2 * O[O.length - 1]);
	var M = O.length,
		_ = O[M - 1];
	o.prototype.shiftLeft = function (e) {
		if (!D(e)) return e.isNegative() ? this.shiftRight(e.abs()) : this.times(W[2].pow(e));
		e = +e;
		if (e < 0) return this.shiftRight(-e);
		var t = this;
		while (e >= M) t = t.multiply(_), e -= M - 1;
		return t.multiply(O[e]);
	}, u.prototype.shiftLeft = o.prototype.shiftLeft, o.prototype.shiftRight = function (e) {
		var t;
		if (!D(e)) return e.isNegative() ? this.shiftLeft(e.abs()) : (t = this.divmod(W[2].pow(e)), t.remainder.isNegative() ? t.quotient.prev() : t.quotient);
		e = +e;
		if (e < 0) return this.shiftLeft(-e);
		var n = this;
		while (e >= M) {
			if (n.isZero()) return n;
			t = L(n, _), n = t[1].isNegative() ? t[0].prev() : t[0], e -= M - 1;
		}
		return t = L(n, O[e]), t[1].isNegative() ? t[0].prev() : t[0];
	}, u.prototype.shiftRight = o.prototype.shiftRight, o.prototype.not = function () {
		return this.negate().prev();
	}, u.prototype.not = o.prototype.not, o.prototype.and = function (e) {
		return P(this, e, function (e, t) {
			return e & t;
		});
	}, u.prototype.and = o.prototype.and, o.prototype.or = function (e) {
		return P(this, e, function (e, t) {
			return e | t;
		});
	}, u.prototype.or = o.prototype.or, o.prototype.xor = function (e) {
		return P(this, e, function (e, t) {
			return e ^ t;
		});
	}, u.prototype.xor = o.prototype.xor;
	var q = function (e, t) {
		var n = W[0],
			r = W[1],
			i = e.length;
		if (t >= 2 && t <= 36 && i <= s / Math.log(t)) return new u(parseInt(e, t));
		t = z(t);
		var o = [],
			a, f = e[0] === '-';
		for (a = f ? 1 : 0; a < e.length; a++) {
			var l = e[a].toLowerCase(),
				c = l.charCodeAt(0);
			if (c >= 48 && c <= 57) o.push(z(l));
			else if (c >= 97 && c <= 122) o.push(z(l.charCodeAt(0) - 87));
			else {
				if (l !== '<') throw new Error(l + ' is not a valid character');
				var h = a;
				do a++; while (e[a] !== '>');
				o.push(z(e.slice(h + 1, a)));
			}
		}
		o.reverse();
		for (a = 0; a < o.length; a++) n = n.add(o[a].times(r)), r = r.times(t);
		return f ? n.negate() : n;
	};
	o.prototype.toString = function (t) {
		t === e && (t = 10);
		if (t !== 10) return U(this, t);
		var n = this.value,
			r = n.length,
			i = String(n[--r]),
			s = '0000000',
			o;
		while (--r >= 0) o = String(n[r]), i += s.slice(o.length) + o;
		var u = this.sign ? '-' : '';
		return u + i;
	}, u.prototype.toString = function (t) {
		return t === e && (t = 10), t != 10 ? U(this, t) : String(this.value);
	}, o.prototype.valueOf = function () {
		return +this.toString();
	}, o.prototype.toJSNumber = o.prototype.valueOf, u.prototype.valueOf = function () {
		return this.value;
	}, u.prototype.toJSNumber = u.prototype.valueOf;
	var W = function (e, t) {
		return typeof e === 'undefined' ? W[0] : typeof t !== 'undefined' ? +t === 10 ? z(e) : q(e, t) : z(e);
	};
	for (var X = 0; X < 1e3; X++) W[X] = new u(X), X > 0 && (W[-X] = new u(-X));
	return W.one = W[1], W.zero = W[0], W.minusOne = W[-1], W.max = H, W.min = B, W.gcd = j, W.lcm = F, W.isInstance = function (e) {
		return e instanceof o || e instanceof u;
	}, W.randBetween = I, W;
}());
typeof module !== 'undefined' && module.hasOwnProperty('exports') && (module.exports = bigInt);