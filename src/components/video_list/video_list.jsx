import React from 'react';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const Video_list = (props) => (
            <ul className={styles.videos}>
                {props.videos.map(videoo => <Video_item key ={videoo.id} videoo ={videoo}/>)}
            </ul>
    );

export default Video_list;