import React from 'react';
import Navbar from '../navbar/navbar';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const Video_list = ({ videos, onVideoClick, display }) => (
    <ul className={styles.videos}>

        {videos.map(videoo =>
            <Video_item
                key={videoo.id}
                videoo={videoo}
                onVideoClick={onVideoClick}
                display={display} />)}
    </ul>
);

export default Video_list;


//control + b = 파일리스트 여닫기. 