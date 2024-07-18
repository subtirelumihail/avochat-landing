import React from "react";
import styles from "./main.module.css";
import Image from "next/image";



export default function Main () {

 return (
    <main className={styles.main}>
    <section className={styles.container}>
      <article className={styles.description}>
        <h1>Avocatul tău online</h1>
        <p>
          Îți punem la dispoziție avocați experimentați din diverse arii juridice, 
          24/7, cu ajutorul tehnologiei CHAT, pe care o poți accesa pe telefonul tău mobil sau calculator.
        <br/>
        <br/>
          Înregistrează-te acum și primești sfaturi legale personalizate, 
          fără să te mai deplasezi sau să aștepți după ziua și ora unei programări clasice.
        </p>
        <div className={styles.btn}>
          <a 
            href='https://app.avochat.net/?language=ro' 
            target="_blank">
              <strong>Vorbește cu un avocat</strong>
          </a>
        </div>
        <div className={styles.btns}>
          <div className={styles.btnsWraper}>
            <a
              href="https://apps.apple.com/ro/app/avochat/id6444870487"
            >
              <img 
                src='/appStore.png'
                style={{width:'154px'}}
             />
            </a>
          </div>
          <div className={styles.btnsWraper}>
            <a
              href="https://play.google.com/store/apps/details?id=com.avochat&hl=en&gl=US"
            >
              <img 
                src='/googlePlay.png'
                style={{width:'180px'}}
             />
            </a>
          </div>
        </div>
      </article>
      <div className={styles.imgWrap}>
        <Image 
          src='/hero.png'
          width={456}
          height={400}
          alt='blabla'
          />
        </div>
    </section>
  </main>     
 )
}