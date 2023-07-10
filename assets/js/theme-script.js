(function ($) {
  "use strict";

  $(".btn-product-up").on("click", function (e) {
    e.preventDefault();
    var numProduct = Number($(this).next().val());
    if (numProduct > 1)
      $(this)
        .next()
        .val(numProduct - 1);
  });
  $(".btn-product-down").on("click", function (e) {
    e.preventDefault();
    var numProduct = Number($(this).prev().val());
    $(this)
      .prev()
      .val(numProduct + 1);
  });
})(jQuery);
