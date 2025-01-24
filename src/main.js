import "./script.js";
import "../src/auth/codeGenerator.js";
import { authenticate } from "./script.js";
import "./css/style.css";
const pausePlayButton = document.getElementById("pausePlay");
const clientId = "3a3e753a6a6a4b10828015b2ce33272a"; // my app's client ID
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

pausePlayButton.addEventListener("click", () => {
  const icon = pausePlayButton.querySelector("i");

  // Toggle play/pause icons
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
});

authenticate(clientId, code);
