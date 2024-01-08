//////////////////////////////////////////////////////////////////
//////////////////choices section////////////////////////////////////////////////

jQuery(document).ready(function () {
  if (jQuery("main").hasClass("home-page")) {
    var controller = new ScrollMagic.Controller();

    // container
    new ScrollMagic.Scene({
      triggerElement: ".areas",
      triggerHook: 0,
      duration: "1500px",
      offset: 0,
    })
      .setPin(".areas", { pushFollowers: true })

      .addTo(controller);

    // choice__1 scene
    window.choice__1Scene = new ScrollMagic.Scene({
      triggerElement: ".areas",
      triggerHook: 0,
      duration: "500px",
      offset: 0,
    })
      .on("enter", function () {
        $(".point__choice__1").addClass("visible");
      })
      .on("leave", function () {
        $(".point__choice__1").removeClass("visible");
      })
      .addTo(controller);

    // choice__2 scene
    window.choice__2Scene = new ScrollMagic.Scene({
      triggerElement: ".areas",
      triggerHook: 0,
      duration: "500px",
      offset: "500px",
    })
      .setClassToggle("#choice__1", "invisible")
      .on("enter", function () {
        $(".point__choice__2").addClass("visible");
        $("#choice__2").addClass("visible");
        $(".left-panel__conteiner").addClass("choice__2");
      })
      .on("leave", function () {
        $(".left-panel__conteiner").removeClass("choice__2");
        $("#choice__2").removeClass("visible");

        $(".point__choice__2").removeClass("visible");
      })
      .addTo(controller);

    // choice__3 scene
    window.choice__3Scene = new ScrollMagic.Scene({
      triggerElement: ".areas",
      triggerHook: 0,
      duration: "0px",
      offset: "1000px",
    })
      .setClassToggle("#choice__1", "invisible")
      .on("enter", function () {
        $("#choice__3").addClass("visible");
        $(".point__choice__3").addClass("visible");
        $(".left-panel__conteiner").addClass("choice__3");
      })
      .on("leave", function () {
        $(".left-panel__conteiner").removeClass("choice__3");
        $("#choice__3").removeClass("visible");
        $(".point__choice__3").removeClass("visible");
      })
      .addTo(controller);
  }
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
