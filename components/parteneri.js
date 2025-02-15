import styles from './parteneri.module.css'


export default function Parteneri() {

  return (
    <section className={styles.main}>
     <div className={styles.content}>
      <h2>Parteneri &amp; Beneficii</h2>
      <p>Prin platforma Avochat beneficiezi și de coduri de reducere pe care partenerii noștri le pun la dispoziția utilizatorilor. Construim o comunitate în care ne ajutăm și ne sprijinim reciproc nu doar în ceea ce privește siguranța juridică.
      </p>
      <div className={styles.list}>
        <div className={styles.card}>
         <div className={styles.block}>
          <div className={styles.logo}>
            <a href='https://lensa.ro/' target='_blank'>
              <img src='/lensa.png'/>  
            </a>
          </div>  
          <div className={styles.info}>
            <a href="https://lensa.ro/" target='_blank'>
             <h3>Lensa</h3>
            </a>
            <p>Folosește codul 
              <strong> AVOCHAT15 </strong> 
              și ai 15% reducere la comenzile tale pe {' '}
              <a 
                href="https://lensa.ro/"
                style={{color:'#4348ea', textDecoration:'underline'}}
              >
               <strong> Lensa.ro</strong>
              </a>
            </p>
          </div>
         </div>
        </div>
        <div className={styles.card}>
         <div className={styles.block}>
          <div className={styles.logo}>
            <a href='https://medicaepv.ro' target='_blank'>
              <img src='/medicaepv.png'/>  
            </a>
          </div>  
          <div className={styles.info}>
            <a href="https://medicaepv.ro" target='_blank'>
             <h3>Medica Endoprovision</h3>
            </a>
            <p>Folosește codul 
              <strong> MED-ENDO-AVO </strong> 
              si beneficiezi de 10% reducere la analize.
              <strong> </strong>              
            </p>
          </div>
         </div>
        </div>
        <div className={styles.card}>
         <div className={styles.block}>
          <div className={styles.logo}>
            <a href='https://www.cd-tradings.com/' target='_blank'>
              <img src='/cdtradeings.png'/>  
            </a>
          </div>  
          <div className={styles.info}>
            <a href="https://www.cd-tradings.com/" target='_blank'>
             <h3>CD Tradeings</h3>
            </a>
            <p>Folosește codul 
              <strong> AVOCHAT10 </strong> 
              și beneficiezi de 10% reducere la comisioane.
            </p>
          </div>
         </div>
        </div>
        <div className={styles.card}>
         <div className={styles.block}>
          <div className={styles.logo}>
            <a href='https://nextcarlease.ro/' target='_blank'>
              <img src='/nextcarlease.webp'/>  
            </a>
          </div>  
          <div className={styles.info}>
            <a href="https://nextcarlease.ro/" target='_blank'>
             <h3>NextCar Lease</h3>
            </a>
            <p>Folosește codul 
              <strong>{' '}NEXTCAR AVO{' '}</strong> 
              și te bucuri de consultanță gratuită la achiziția unui autoturism.
            </p>
          </div>
         </div>
        </div>
      </div>
     </div>
    </section>
  )  
}