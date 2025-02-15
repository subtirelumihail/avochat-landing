import styles from './contentCF.module.css'


export default function ContentCF () {

  return (
    <section className={styles.main}>
      <div className={styles.titleWrap}>
       <h2>Cum funcționează Avochat</h2>
      </div>
      <div className={styles.grid}>
        <article className={styles.card}>
          <img src='/cf1.jpg'/>
          <div className={styles.content}>
            <h3>Alegi un avocat</h3>
            <p>Puteți selecta un avocat din lista noastră, alegând pe cel care vi se potrivește cel mai bine, sau ne puteți lăsa să alegem unul pentru dumneavoastră și să îi trimiteți un mesaj cu problema dumneavoastră. Aveți posibilitatea de a trimite mesaje unui număr nelimitat de avocați.
            </p>
          </div>  
        </article>
        <div className={styles.lineCol}>
         <div className={styles.line}></div>
        </div>
        <article className={styles.card}>
          <img src='/cf2.jpg'/>
          <div className={styles.content}>
            <h3>Descrie problema</h3>
            <p>Completează formularul cu detaliile problemei juridice cu care te confrunți, pentru a facilita o comunicare eficientă și directă cu avocatul nostru. 
            </p>
          </div>  
        </article>
        <div className={styles.lineCol}>
         <div className={styles.line}></div>
        </div>
        <article className={styles.card}>
          <img src='/cf3.jpg'/>
          <div className={styles.content}>
            <h3>Stai de vorbă cu avocatul ales</h3>
            <p>În următorul pas, se va crea o fereastră de chat unde avocatul va încerca să răspundă la întrebările dumneavoastră și să discute despre problema curentă sau alte probleme viitoare. De asemenea, avocatul poate solicita plăți multiple în funcție de serviciile oferite pe parcursul conversației. Tot aici veți putea să atașați fișiere în cazul în care este nevoie.
            </p>
          </div>  
        </article>
      </div>
    </section>
  )  
}