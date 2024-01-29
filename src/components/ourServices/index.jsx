import React from 'react'
import styles from './index.module.css'
import Button from '../common/Button'

const Service = () => {
  return (
    <div className={styles.container}>

        <div className={styles.oneSection}>
            <h2>
            Welcome to RitaAtronics Innovations
            </h2>
            <p>
            RITAAtronics Innovations is a leading-edge technology company that specializes in developing state-of-the-art electronic solutions, revolutionizing various industries. The company's commitment to innovation is reflected in its wide range of products, from consumer electronics to industrial applications. A team of talented engineers, designers, and visionaries at RITAAtronics collaborates to create products that challenge the limits of what's possible, ensuring each product is synonymous with quality, reliability, and superior performance. Our rigorous research and development process, coupled with stringent testing and quality control, ensures that their products not only meet but exceed industry standards.
            </p>
        </div>
        
        <div className={styles.twoSection}>
            <h2>
            Our Services
            </h2>
            <p>
            RITAAtronics offers a diverse range of services, focusing on delivering competitive advantages in various industries through groundbreaking electronic solutions. Their expertise spans several areas:
            </p>
            <Button isBlack={true}/>
        </div>
        
    </div>
  )
}

export default Service