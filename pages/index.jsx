import Image from 'next/image'

import { FormNf } from '../components/forms/formNf'
import { Header } from '../components/Header/Head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <FormNf />
      </main>

      <footer className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/jotta_iphone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obrigado pela preferencia
            <span className={styles.logo}>
              <Image src="/logo.png" alt="Vercel Logo" width={80} height={50} />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}
