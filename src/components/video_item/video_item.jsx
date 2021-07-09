import React, { memo } from 'react';
import styles from './video_item.module.css';
const Video_item = memo(
    ({ videoo, videoo: { snippet }, onVideoClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;

        return (
            <li className={`${styles.container} ${displayType}`} onClick=
                {() => onVideoClick(videoo)}>
                <div className={styles.video}>
                    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}
                        art="Video thumbnail"
                    />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>

            </li >
        )
    }
);

export default Video_item;

// detail의 이동 : app -> list -> item -> 