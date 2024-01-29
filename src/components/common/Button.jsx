import React from 'react'
import styles from './index.module.css'

const Button = ({isBlack=false}) => {
  return (
    <button style={{background:isBlack?'black':"white", color:isBlack?'white':'black'}} className={styles.button}>
    Learn More
</button>
  )
}

export default Button