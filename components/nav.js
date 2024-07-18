"use client"
import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [display, setDisplay] = React.useState('none')

  const toogleWiew = () => {
    display === 'none' ? setDisplay('flex') : setDisplay('none')
  }

  React.useEffect(()=>{
   if (window.innerWidth > 991) {
    setDisplay('flex')
   }
  },[])

    return (
        <nav className={styles.nav}>
        <section className={styles.logo}>
            <Image 
                src='/logo.png'
                alt='logo'
                width={176}
                height={47}
            />
          <div 
            className={styles.menubtn}
            onClick={()=> toogleWiew()}
          >
            <div className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </section>
        <ul 
          className={styles.links}
          style={{display:display}}
        >
          <li
           onClick={()=>setDisplay('none')}
          ><Link href='/'>Acasa</Link></li>
          <li
           onClick={()=>setDisplay('none')}
          ><Link href='https://app.avochat.net/page/ProviderList?language=ro'>Avocati</Link> </li>
          <li
            onClick={()=>setDisplay('none')}
          ><Link href='/arii-de-practica'>Arii de practica</Link></li>
          <li
            onClick={()=>setDisplay('none')}
          ><Link href='/despre-noi'>Despre noi</Link></li>
          <li
            onClick={()=>setDisplay('none')}
          ><Link href='/intrebari-frecvente'>Intrebari Frecvente</Link></li>
          <li
            onClick={()=>setDisplay('none')}
          ><Link href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    )
}