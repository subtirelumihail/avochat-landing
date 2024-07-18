import styles from './page.module.css'



export default function DespreNoi () {

    return (
      <>
        <div className={styles.wraper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Viziunea & Misiunea AvoChat</h1>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.layout}>
             <div className={styles.text}>
                <p>
                  Într-o societate funcțională, accesul la servicii juridice de înaltă calitate trebuie să fie ușor accesibil și rapid pentru oricine, fie că este vorba despre antreprenori, reprezentanți ai companiilor sau persoane fizice, cu toate provocările legale specifice pe care fiecare dintre ei le întâmpină.
                  <br/>
                  <br/>
                  Cu ajutorul tehnologiei, eficientizăm procesul de comunicare și colaborare între avocați și cei în căutare de sfaturi sau asistență juridică, eliminând astfel barierele legate de limitările temporale, geografice sau de accesibilitate.
                  <br/>
                  <br/>
                  Astfel, oferim tuturor celor care au nevoie, posibilitatea de a descoperi și angaja avocați cu experiență, care deservesc o gamă variată de domenii de practică în cadrul întregului spectru juridic. Asigurăm transparență în ceea ce privește competențele și experiența acestora, alături de un rating calculat pe baza feedback-ului utilizatorilor.
                  <br/>
                  <br/>
                  Prin intermediul unui chat online intuitiv și securizat, poți adresa întrebări și primi răspunsuri de la avocați cu experiență, în timp real, indiferent de locul în care te afli. Rapid și ușor accesibil au fost și continuă să fie caracteristicile esențiale care au ghidat dezvoltarea AvoChat.
                  <br/>
                  <br/>
                  Dacă ești avocat și dorești să te alături echipei noastre de avocați-parteneri, te invităm să ne scrii la {''}
                  <strong>enroll@avochat.net</strong>
                  , iar noi îți vom răspunde rapid, desigur.
                  <br/>
                  <br/>
                  La AvoChat, construim cu ajutorul tehnologiei o platformă unde clienții mulțumiți și avocații calificați colaborează rapid și eficient, obținând rezultate solide.
                </p>
                <a href='https://app.avochat.net/?language=ro' target='_blank'>
                  <strong className={styles.btn}>Vorbește cu un avocat</strong>
                </a>
             </div>
             <div className={styles.image}>
                <img src='/law.png' alt='Lasă nevoile juridice pe seama noastră!'/>
             </div>
            </div>
          </div>
        </div>
      </>
    )
}