import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({ videoo }) => (

    <section className={styles.detail}>
        <iframe className={styles.video}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${videoo.id}`}
            frameBorder="0"
            allowFullscreen
        >
        </iframe>
        <h2>{videoo.snippet.title}</h2>
        <h3>{videoo.snippet.channelTitle}</h3>
        <pre className={styles.description}>{videoo.snippet.description}</pre>
    </section>
);

export default Video_detail;