import React from 'react'
import styles from './index.module.css'
const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.s1}>
            <h1>About Rita Atronics Innovations</h1>
          </div>

           <div className={styles.container1}> 
           <div className={styles.img}>
            <img height='290px' width='90%' src='images/one.jpeg'/>
           </div> 

          <div className={styles.section2} >
        <h3>Our Vision</h3>
         <p className={styles.pragraph}>
            We constantly explore emerging technologies, staying ahead of the curve to deliver cutting-edge solutions to our clients. Whether it's developing advanced IT products and services, electronic IT or medical IT devices, designing smart technologies in areas of expertise such as Java, Big Data, IoT, Machine Learning, AI, and Natural Languages, or tuning in-house built wearable healthcare electronics, RITAAtronics consistently pioneers transformative technologies that shape the future. Moreover, RITAAtronics is more than just a technology company. We prioritize customer satisfaction and aim to build long-lasting partnerships with our clients.
          </p>
          </div>

        </div>
      </div>
  )
}

export default Vision