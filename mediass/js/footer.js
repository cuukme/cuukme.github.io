/**
 * Created by truongsinh on 22/02/15.
 */
!function (e) {
  "use strict";
  var t = function (t, n) {
    this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
  };
  t.prototype = {constructor: t, dimension: function () {
    var e = this.$element.hasClass("width");
    return e ? "width" : "height"
  }, show: function () {
    var t, n, r, i;
    if (this.$element.hasClass("in"))return;
    t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
    if (r && r.length) {
      i = r.data("collapse");
      r.collapse("hide"), i || r.data("collapse", null)
    }
    this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
  }, hide: function () {
    var t;
    if (!this.$element.hasClass("in"))return;
    t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
  }, reset: function (e) {
    var t = this.dimension();
    return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
  }, transition: function (t, n, r) {
    var i = this, s = function () {
      n.type == "show" && i.reset(), i.$element.trigger(r)
    };
    this.$element.trigger(n);
    if (n.isDefaultPrevented())return;
    this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
  }, toggle: function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }};
  var n = e.fn.collapse;
  e.fn.collapse = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data("collapse"), s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
      i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
    })
  }, e.fn.collapse.defaults = {toggle: !0}, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
    return e.fn.collapse = n, this
  }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
    var n = e(this), r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = e(i).data("collapse") ? "toggle" : n.data();
    n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
  })
}(window.jQuery);
!function(){
  var s = skrollr.init({
    smoothScrolling: false,
    forceHeight: false,
  });
}();
