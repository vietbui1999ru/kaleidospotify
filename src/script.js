import {
  redirectToAuthCodeFlow,
  getAccessToken,
  fetchProfile,
  fetchMusic,
} from "../auth/codeGenerator.js";

export async function authenticate(clientId, code) {
  if (!code) {
    redirectToAuthCodeFlow(clientId);
  } else {
    const accessToken = await getAccessToken(clientId, code);
    // const profile = await fetchProfile(accessToken);
    // console.log(profile);
    // populateUI(profile);
    const song = await fetchMusic(accessToken);
    console.log(song);
    populateMusicPlayer(song);
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

function populateMusicPlayer(song) {
  const songTitle = song.name;
  const songArtist = song.artists[0].name;
  const albumImg = song.album.images[0].url;
  console.log("Title: ", songTitle, "\nArtist: ", songArtist, "\nImageUrl: ", albumImg)
}
