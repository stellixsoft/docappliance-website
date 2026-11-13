"use client";

import { useState } from "react";
import { HeartIcon } from "../icons";
import styles from "./Product.module.css";

/** Main image with thumbnails, plus the "Share & Print" / "Add to List" overlay buttons. */
type Media = { url: string; label: string };

export function Gallery({ images, videos = [], name, placeholder }: { images: Media[]; videos?: Media[]; name: string; placeholder: string }) {
  const [i, setI] = useState(0);
  const [video, setVideo] = useState<number | null>(null);
  const list = images.length ? images : [{ url: placeholder, label: name }];
  const current = list[Math.min(i, list.length - 1)];
  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <div className={styles.mainImage}>
          {video !== null ? (
            <div className={styles.videoStage}>
              <video key={videos[video].url} src={videos[video].url} controls autoPlay playsInline />
              {videos.length > 1 && (
                <ul className={styles.videoList}>
                  {videos.map((v, n) => (
                    <li key={v.url}>
                      <button type="button" className={n === video ? styles.videoOn : undefined} onClick={() => setVideo(n)}>
                        {v.label || `Video ${n + 1}`}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${current.url}${current.url.includes("?") ? "" : "?w=1000"}`} alt={current.label || name} />
          )}
        </div>
        <div className={styles.overlay}>
          <button type="button" className={styles.share} onClick={() => window.print()}>
            <svg viewBox="0 0 448 512" width="10.5" height="12" aria-hidden fill="currentColor">
              <path d="M352 224c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9.7-7.8.7-11.9s-.2-8-.7-11.9l94.1-47c17.2 16.7 40.7 26.9 66.6 26.9z" />
            </svg>
            <span className={styles.overlayLabel}>Share &amp; Print</span>
          </button>
          <button type="button" className={styles.addToList}>
            <HeartIcon />
            <span className={styles.overlayLabel}>Add to List</span>
          </button>
        </div>
      </div>
      {list.length + (videos.length ? 1 : 0) > 1 && (
        <div className={styles.thumbs}>
          {list.map((img, n) => (
            <button
              key={img.url + n}
              type="button"
              className={n === i && video === null ? `${styles.thumb} ${styles.thumbOn}` : styles.thumb}
              onClick={() => {
                setI(n);
                setVideo(null);
              }}
              aria-label={`Show image ${n + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${img.url}${img.url.includes("?") ? "" : "?w=160"}`} alt="" loading="lazy" />
            </button>
          ))}
          {videos.length > 0 && (
            <button
              type="button"
              className={video !== null ? `${styles.thumb} ${styles.thumbVideo} ${styles.thumbOn}` : `${styles.thumb} ${styles.thumbVideo}`}
              onClick={() => setVideo(0)}
              aria-label="Play product videos"
            >
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden>
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <path d="M9.5 7.5v9l7-4.5z" fill="#616161" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
