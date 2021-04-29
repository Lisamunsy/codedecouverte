$(document).ready((evt) => {
  //   $("nav h2").css("color", "#0d4989");
  $(".about").show();
  console.log("Ready to go !");
});
// click sur LisaM
$("nav a:eq(0)").on("click", () => {
  $(".about").show();
  $(".skills").hide();
  $(".timeline").hide();
  $(".trans").hide();
  $(".contact").hide();
  $("nav li a")
    .css("color", "white")
    .css("font-weight", 400)
    .css("font-size", "1.7vw")
    .css("align-self", "center");
});
// //  click sur timeline
// $("nav li a:eq(0)").on("click", () => {
//   $(".about").hide();
//   $(".skills").hide();
//   $(".timeline").show();

//   $("nav li a:eq(0)")
//     .css("color", "#0d4989")
//     .css("font-weight", 600)
//     .css("font-size", "2vw");

//   $("nav li a:eq(1)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");

//   $("nav li a:eq(2)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");
// });
// // click sur skills
// $("nav li a:eq(1)").on("click", () => {
//   $(".about").hide();
//   $(".timeline").hide();
//   $(".skills").show();

//   $("nav li a:eq(1)")
//     .css("color", "#0d4989")
//     .css("font-weight", 600)
//     .css("font-size", "2vw");

//   $("nav li a:eq(0)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");
//   $("nav li a:eq(2)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");
// });

// $("nav li a:eq(2)").on("click", () => {
//   $(".about").hide();
//   $(".timeline").hide();
//   $(".skills").hide();

//   $("nav li a:eq(2)")
//     .css("color", "#0d4989")
//     .css("font-weight", 600)
//     .css("font-size", "2vw");

//   $("nav li a:eq(0)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");

//   $("nav li a:eq(1)")
//     .css("color", "white")
//     .css("font-weight", 400)
//     .css("font-size", "1.7vw")
//     .css("align-self", "center");
// });

for (let i = 0; i < $("nav a").length; i++) {
  $("nav a")
    .eq(i)
    .on("click", () => {
      $("section").hide();
      $("section").eq(i).show();
      $("nav  li a")
        .css("color", "white")
        .css("font-weight", 400)
        .css("font-size", "1.7vw")
        .css("align-self", "center");
      if (i > 0) {
        $("nav  a")
          .eq(i)
          .css("color", "#0d4989")
          .css("font-weight", 600)
          .css("font-size", "2vw");
      }
    });
}
