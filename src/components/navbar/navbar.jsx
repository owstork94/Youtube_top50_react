import React, { memo } from 'react';
import styles from './navbar.module.css'
const Navbar = memo((props) => (
    <div className={styles.navbarwrap}>
        <section className={styles.contwrap}>
            <div className={styles.navcont}>
                <i className="fas fa-home"></i>
                <p className={styles.navtext}>홈</p>
            </div>


            <div className={styles.navcont}><i className="fas fa-compass"></i>
                <p className={styles.navtext}>탐색</p>
            </div>


            <div className={styles.navcont}><i className="far fa-address-card"></i>
                <p className={styles.navtext}>구독</p>
            </div>


            <div className={styles.navcont}><i className="fab fa-youtube"></i>
                <p className={styles.navtext}>Original</p>
            </div>


            <div className={styles.navcont}><i className="fas fa-compact-disc"></i>
                <p className={styles.navtext}>Youtube Music</p>
            </div>
        </section>



    </div>
)
);

export default Navbar;