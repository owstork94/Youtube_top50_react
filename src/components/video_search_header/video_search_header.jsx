import React, { memo, useRef } from 'react';
import styles from './video_search_header.module.css'
const Video_search = memo(
    ({ onSearch }) => {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        };
        const onClick = () => {
            handleSearch();
        }
        const onKeyPress = (event) => {
            if (event.key === "Enter") {
                handleSearch()
            }
        };
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}> Youtube</h1>
                </div>
                <input className={styles.input} type="search" placeholder="검색" onKeyPress={onKeyPress} ref={inputRef} />
                <button className={styles.button} type="submit" onClick={onClick} >
                    <img className={styles.buttonimg} src="images/search.png" alt="search" />
                </button>
            </header>


        );
    }
);

export default Video_search;

//search 데이터가 담겨있는 onSearch props를 가져와서 현재값(value) 을 넣어서 실행.