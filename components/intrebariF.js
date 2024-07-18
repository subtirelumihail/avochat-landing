import styles from './intrebariF.module.css'


export default function IntrebariF () {

    return (
        <section className={styles.main}>
          <div className={styles.content}>
            <div className={styles.grid}>
              <div className={styles.img}>
                <img 
                    src='/intF.jpg'
                    alt='Intebari frecvebte.'
                />
              </div>
              <article className={styles.text}>
                <h2>Întrebări frecvente</h2>
                <p>
                    Îți oferim răspunsuri rapide și complete la cele mai comune întrebări legate de serviciile noastre. 
                    <br />
                    <br />
                    Ne asigurăm astfel că ai acces rapid la toate informațiile de care ai nevoie pentru a lua decizia potrivită nevoilor tale.
                </p>
                <a href='/intrebari-frecvente'>
                  <strong>Vezi întrebări frecvente</strong>
                </a>
              </article>
            </div>
          </div>
        </section>
    )
}