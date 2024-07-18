import styles from './solutii.module.css'



export default function Solutii () {


    return (
        <article className={styles.main}>
          <div className={styles.content}>
            <div className={styles.grid}>
              <div className={styles.text}>
                <h2>Provocările tale juridice au acum o soluție rapidă, eficientă și sigură.</h2>
                <p>Soluțiile legale pe care le cauți îți sunt accesibile 24/7, din confortul casei sau al biroului tău, printr-un simplu click pe butonul de mai jos.</p>
                <a
                    href='https://app.avochat.net/?language=ro'
                >
                  <strong>Vorbește cu un avocat</strong>  
                </a>
              </div>
              <div className={styles.image}>
                <img 
                    src='/solutii.png'
                    alt='Chat system'
                />
              </div>
            </div>
          </div>
        </article>
    )
}