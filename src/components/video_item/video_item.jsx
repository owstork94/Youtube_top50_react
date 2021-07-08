import React from 'react';
import styles from './video_item.module.css';
const Video_item = ({videoo, videoo : {snippet}, onVideoClick}) => (
            <li className={styles.container} onClick={()=>onVideoClick(videoo)}>
                <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} 
                     art="Video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
                </div>
                
            </li>
    );

export default Video_item;