$(function () {
  // load bottom-nav
  $("#bottom-nav").load("../bottom-nav/bottom-nav.html");

  var data = [
    { name: "Ana Silva 1", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
    { name: "Ana Silva", comp: "100", img: "avatar-1.webp" },
  ];

  var items = [];

  $.each(data, function (key, val) {
    items.push(
      '<a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">' +
        '<img src="../assets/images/' +
        val.img +
        '" alt="profile" class="rounded-circle flex-shrink-0" width="32" height="32"/>' +
        '<div class="d-flex gap-2 w-100 justify-content-between">' +
        '<div><h6 class="mb-0">' +
        val.name +
        "</h6>" +
        '<p class="mb-0 opacity-75">Compatibility ' +
        val.comp +
        "</p></div>" +
        '<small class="opacity-50 text-nowrap">now</small></div></a>'
    );
  });

  $("#pts").append(items);
});

jQuery(document).ready(function ($) {
  // alert("js is working");
});
