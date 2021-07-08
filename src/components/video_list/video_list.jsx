import React from 'react';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const Video_list = ({videos, onVideoClick}) => (
            <ul className={styles.videos}>
                {videos.map(videoo => <Video_item key ={videoo.id} videoo ={videoo} onVideoClick={onVideoClick}/>)}
            </ul>
    );

export default Video_list;


//control + b = 리스트창 여닫기. 