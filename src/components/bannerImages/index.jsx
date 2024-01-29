import React from 'react'
import styles from './index.module.css'
import Button from '../common/Button'

const BannerImages = () => {
  return (
    <div>
        <div className={styles.banner}>
            <img height='700px' width='100%' src='images/one1.jpeg'/>

            <div className={styles.centerBox}> 
            <h1 className={styles.text}>
            Innovative Research for Better Health
            </h1>
            <h2 className={styles.texth2}>
            We are committed to advancing medical knowledge through groundbreaking research
            </h2>

            <div>
                <Button/>
              
            </div>
        </div>
        </div>
   
    </div>
  )
}

export default BannerImages