import styles from './page.module.css'


export default function Contact (){
    return (
      <>
        <div className={styles.wraper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact</h1>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.det}>
                        <p>
                            <strong>Adresa: {''}</strong>
                            Piața Națiunilor Unite, nr. 3-5
                        </p>
                        <p>
                            <strong>Email: {''}</strong>
                            <a href="mailto:office@avochat.net?subject=Hello">
                                office@avochat.net
                            </a>
                        </p>
                        <a 
                          className={styles.btn}
                          href='https://app.avochat.net/?language=ro'
                          target='_blank'
                        >
                          <strong>Vorbește cu un avocat</strong>
                        </a>
                    </div>
                    <div className={styles.img}>
                        <img 
                            src='/cntc.jpg'
                            width='300px'
                            alt='Contact'
                        />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}