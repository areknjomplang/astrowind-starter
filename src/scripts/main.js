import './app-jquery'
import './app-alpine'
import AOS from "aos";

AOS.init({
  once: true,
});

AOS.refresh();

console.log("Main.js loaded");