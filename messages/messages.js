$(function () {
  // load bottom-nav
  $("#bottom-nav").load("../bottom-nav/bottom-nav.html");

  var data = [{ name: "Ana Silva 1", comp: "100", img: "avatar-1.webp" }];

  var items = [];
  $.each(data, function (key, val) {
    items.push();
  });

  $("#pts").append(items);
});
