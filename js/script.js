// event pada saat link di klik
$(".page-scroll").on("click", function () {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap elemen
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1000,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// ABOUT
$(window).on("load", function () {
  $(".pkiri").addClass("pMuncul");
  $(".pkanan").addClass("pMuncul");
});
// AKHIR ABOUT

// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // JUMBOTRON
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
  // AKHIR JUMBOTRON

  // PORTFOLIO
  if (wScroll > $(".portfolio").offset().top - 250) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
  // AKHIR PORTFOLIO
});
