import "./script.js";
import "../auth/codeGenerator.js";
import { authenticate } from "./script.js";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  fetchProfile,
} from "../auth/codeGenerator.js";
const pausePlayButton = document.getElementById("pausePlay");
const clientId = "3a3e753a6a6a4b10828015b2ce33272a"; // Replace with your client ID
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

pausePlayButton.addEventListener("click", () => {
  const icon = pausePlayButton.querySelector("i");

  // Toggle play/pause icons
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
});

authenticate(clientId, code);
