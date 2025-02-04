'use client'
import styles from './page.module.css'

export default function Home() {
  const dlImg = async () => {
    try {
      const r = await fetch('/api/og/post', {
        method: 'POST',
      })

      if (!r.ok) {
        throw new Error('Failed to fetch')
      }

      const blob = await r.blob()
      const objUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objUrl
      link.download = 'post.png'
      link.click()
    } catch (e) {
      console.log('ERROR : ', e)
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.disp}>
          <div className={styles.img}>
            api
            <img src='/api/og/get' />
          </div>
          <div className={styles.img}>
            local
            <img src='get.png' />
          </div>
        </div>
        <a href='/api/og/get' download='get.png'>
          Download(GET)
        </a>
        <div onClick={() => dlImg()}>Download(POST)</div>
      </main>
    </div>
  )
}
