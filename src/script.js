import {
  redirectToAuthCodeFlow,
  getAccessToken,
  fetchProfile,
} from "../auth/codeGenerator.js";

export async function authenticate(clientId, code) {
  if (!code) {
    redirectToAuthCodeFlow(clientId);
  } else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    console.log(profile);
    populateUI(profile);
  }
}

function populateUI(profile) {
  // TODO: Update UI with profile data
  document.getElementById("displayName").innerText = profile.display_name;
  if (profile.images[0]) {
    const profileImage = new Image(200, 200);
    profileImage.src = profile.images[0].url;
    document.getElementById("avatar").appendChild(profileImage);
    document.getElementById("imgUrl").innerText = profile.images[0].url;
  }
  document.getElementById("id").innerText = profile.id;
  document.getElementById("email").innerText = profile.email;
  document.getElementById("uri").innerText = profile.uri;
  document
    .getElementById("uri")
    .setAttribute("href", profile.external_urls.spotify);
  document.getElementById("url").innerText = profile.href;
  document.getElementById("url").setAttribute("href", profile.href);
}

function populateMusicPlayer(profile) {
  const track = "https://api.spotify.com/v1/tracks/";
}
