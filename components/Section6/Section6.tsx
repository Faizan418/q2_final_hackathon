import styles from './Section6.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Section6 = () => {
  return (
    <div className={styles.main_containar}>
          <div className={styles.containar}>
            
            <div className={styles.div_right}>
              <div className={styles.details_containar}>
                <h1 className={styles.tital_heading}>20% Discount Of All Products</h1>
                <p className={styles.tital_pera}>Eams Sofa Compact</p>

                <div className={styles._div1}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur atque aspernatur?</p>
                </div>
                <div className={styles._div2}>
                  <div className={styles.info_div}>
                    <span>✔ Material expose likem metals.</span>                        
                    <span>✔ Simple neutral colors.</span>                        
                  </div>
                  <div  className={styles.info_div}>
                    <span>✔ Clear lines and geomatric figures.</span>
                    <span>✔ Material expose likem metals.</span> 

                  </div>
                </div>
                  <Link href={"/login"}>
                <div className={styles.btn_div}>
                    <button className={styles.btn1} type="button">Login</button>
                </div>
                  </Link>
               </div> 
            </div>

            
            <div className={styles.div_left}><Image src={'/images/file-sex/right-img.png'} alt='img' height={100} width={600}/></div>
          </div>
    </div>
  )
}

export default Section6
