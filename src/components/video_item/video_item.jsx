import React, { memo } from 'react';
import styles from './video_item.module.css';
const Video_item = memo(
    ({ videoo, videoo: { snippet }, onVideoClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;

        return (
            <li className={`${styles.container} ${displayType}`} onClick=
                {() => onVideoClick(videoo)}>
                <div className={`${styles.video} ${displayType}`}>
                    <img className={`${styles.thumbnail} ${displayType}`} src={snippet.thumbnails.medium.url}
                        art="Video thumbnail"
                    />
                    <div className={`${styles.metadata} ${displayType}`}>
                        <p className={`${styles.title} ${displayType}`}>{snippet.title}</p>
                        <p className={`${styles.channel} ${displayType}`}>{snippet.channelTitle}</p>
                    </div>
                </div>

            </li >
        )
    }
);

export default Video_item;

// detail의 이동 : app -> list -> item -> 