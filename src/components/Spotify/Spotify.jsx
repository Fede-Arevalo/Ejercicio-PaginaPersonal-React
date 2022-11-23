import React from "react";
import "./Spotify.css";

const Spotify = () => {
  return (
    <div className="spotify">
      <div className="wrap">
        <h1>Spotify</h1>
        <p>Disfruta de mis Playlists para "Codear"</p>

        <div className="playlists">
          <iframe
            title="Playlist"
            style={{ test: "border-radius:12px" }}
            src="https://open.spotify.com/embed/playlist/1Ly2fZ9npFuGzv8OzXSuBi?utm_source=generator"
            width="70%"
            height="380"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            title="Playlist"
            style={{ test: "border-radius:12px" }}
            src="https://open.spotify.com/embed/playlist/6CQBFqnbvQ1ApVfJ7EJd8n?utm_source=generator"
            width="70%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            title="Playlist"
            style={{ test: "border-radius:12px" }}
            src="https://open.spotify.com/embed/playlist/158sf1NnKu9fNiQv3xLz91?utm_source=generator"
            width="70%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
