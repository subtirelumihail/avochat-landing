"use client"
import React from 'react'
import styles from './page.module.css'


export default function IntrebariFrecvente () {
  const [ display, setDisplay ] = React.useState('none')
  const [ display2, setDisplay2 ] = React.useState('none')
  const [ display3, setDisplay3 ] = React.useState('none')
  const [ display4, setDisplay4 ] = React.useState('none')

  const toogleDisplay = (nr) => {

    switch (nr) {
        case 1:
            display === 'none' ? setDisplay('block') : setDisplay('none')
            break
        case 2:
            display2 === 'none' ? setDisplay2('block') : setDisplay2('none')
            break
        case 3:
            display3 === 'none' ? setDisplay3('block') : setDisplay3('none')
            break
        case 4:
            display4 === 'none' ? setDisplay4('block') : setDisplay4('none')
            break
        default :
            break
    }
  }

    return (
       <>
        <div className={styles.wraper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Întrebări Frecvente</h1>
          </div>
        </div>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.list}>
                        <div className={styles.tab}>
                            <div 
                              className={styles.queWrap}
                              onClick={()=>toogleDisplay(1)}
                            >
                                <div className={styles.que}>
                                  Cât costă să vorbesc cu un avocat?
                                </div>
                                <div className={styles.img}>

                                </div>
                            </div>
                            <div 
                                className={styles.ansWrap}
                                style={{display:display }}
                            >
                                <p className={styles.ans}>
                                  Inițierea unei cereri pe platforma noastră este gratuita. Costul final va fi stabilit de fiecare avocat în parte, bazându-se pe complexitatea problemei clientului, prin intermediul sistemului nostru de plată dinamică a serviciilor.
                                </p>
                            </div>
                        </div>
                        <div className={styles.tab}>
                            <div 
                              className={styles.queWrap}
                              onClick={()=>toogleDisplay(2)}
                            >
                                <div className={styles.que}>
                                  În cât timp primesc un răspuns?
                                </div>
                                <div className={styles.img}>

                                </div>
                            </div>
                            <div 
                                className={styles.ansWrap}
                                style={{display:display2 }}
                            >
                                <p className={styles.ans}>
                                  Ne străduim să răspundem la cererile dumneavoastră în maximum 24 de ore. Totuși, pentru unii avocați, datorită numărului mare de solicitări, procesul de răspuns poate dura puțin mai mult
                                </p>
                            </div>
                        </div>
                        <div className={styles.tab}>
                            <div 
                              className={styles.queWrap}
                              onClick={()=>toogleDisplay(3)}
                            >
                                <div className={styles.que}>
                                  Pot cere o consultație fizică?
                                </div>
                                <div className={styles.img}>

                                </div>
                            </div>
                            <div 
                                className={styles.ansWrap}
                                style={{display:display3 }}
                            >
                                <p className={styles.ans}>
                                  Da, acest lucru poate fi solicitat prin butonul de "Programare" sau direct din chat-ul cu avocatul ales.
                                </p>
                            </div>
                        </div>
                        <div className={styles.tab}>
                            <div 
                              className={styles.queWrap}
                              onClick={()=>toogleDisplay(4)}
                            >
                                <div className={styles.que}>
                                  Pot alege avocatul cu care colaborez?
                                </div>
                                <div className={styles.img}>

                                </div>
                            </div>
                            <div 
                                className={styles.ansWrap}
                                style={{display:display4 }}
                            >
                                <p className={styles.ans}>
                                  Da, este indicat să alegeți un avocat care să fie expert în soluționarea problemelor similare.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}