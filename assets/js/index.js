import "../css/overlay.scss";
import "../css/main.scss";
import "../sass/style.scss";

import SwupJsPlugin from "@swup/js-plugin";
import Swup from "swup";
import { TweenLite, TimelineMax, Power3, Power1, Power4 } from "gsap";
import $ from "jquery";
import "./menu";
import AOS from "aos";

window.addEventListener("load", () => {
 console.log("da");
});

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    $(".safari-header").addClass("-scrolled");
  } else {
    $(".safari-header").removeClass("-scrolled");
  };
});
