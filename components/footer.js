import styles from './footer.module.css'


export default function Footer () {


    return (
        <footer className={styles.main}>
          <div className={styles.content}>
            <div className={styles.grid}>
              <div className={styles.colLogo}>
                <img
                    src='/logo.png'
                    alt='Avochat Logo'
                >
                </img>
                <p>Platformă de asistență juridică în timp real pentru întregul spectru de provocări legale</p>
                <div>Future Legal SRL</div>
              </div>
              <div className={styles.colAvochat}>
                <div className={styles.title}>Avochat</div>
                <a href='/'>Acasa</a>
                <a href='/arii-de-practica'>Avocați</a>
                <a href='/despre-noi'>Despre Noi</a>
                <a href='/intrebari-frecvente'>Întrebări Frecvente</a>
                <a href='/contact'>Contact</a>
              </div>
              <div className={styles.colUtile}>
                <div className={styles.title}>Utile</div>
                <a href='/utile/politica-de-confidentialitate'>Politică de confidențialitate</a>
                <a href='/utile/termeni-si-conditii'>Termeni și condiții</a>
                <a href='/utile/definitii'>Definiții</a>
              </div>
              <div className={styles.colLegal}>
                <a 
                  href='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO'
                >
                  <img src='/legal1.webp'/>
                </a>
                <a 
                  href='https://anpc.ro/ce-este-sal/'
                >
                  <img src='/legal2.webp'/></a>
              </div>
            </div>
            <div className={styles.social}>
              <div className={styles.left}>
                <div className={styles.icons}>
                  <a href='https://www.linkedin.com/company/86776481/admin/'>
                    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="black"/>
                    </svg>
                  </a>
                  <a href='https://www.facebook.com/avochat'>
                    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="black"/>
                    </svg>
                  </a>
                  <a href='https://www.tiktok.com/@avochat.net'>
                    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.059 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z" fill="black"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.tm}>

                </div>
              </div>
              <div></div>
            </div>
          </div>
        </footer>
    )
}