import styles from './societatiP.module.css'



export default function SocietatiP () {

    return (
        <section className={styles.main}>
            <div className={styles.title}>
              <h2>Societăți profesionale</h2>
            </div>
            <div className={styles.logos}>
              <div className={styles.wraper}>
                <img
                  src='/vta.png'
                  alt='AriseHealth logo'
                 />
                <img
                  src='/csa.png'
                  alt='2020INC logo'
                 />
                <img
                  src='dobre.png'
                  alt='OE logo'
                 />
              </div>
            </div>
        </section>
    )
        
    
}