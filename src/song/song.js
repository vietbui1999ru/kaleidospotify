export class Song {
  constructor(title, artist, albumUrl, duration) {
    this.title = title;
    this.artist = artist;
    this.albumUrl = albumUrl;
    this.duration = duration;
  }

  renderToHtml() {
    const titleElement = document.querySelector(".song-details h2");
    const artistElement = document.querySelector(".song-details p");
    const albumElement = document.querySelector(".album-art img");
    const durationElement = document.getElementById("end-time");

    titleElement.textContent = this.title;
    artistElement.textContent = this.artist;
    albumElement.src = this.albumUrl;
    durationElement.textContent = this.duration;
  }
}
