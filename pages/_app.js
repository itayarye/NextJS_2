import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <h1>My Menu</h1>
    {/*<p><a href="/about">About - Deep Link</a></p>
    <p><a href="/">Home - Deep Link</a></p>*/}
    <p><Link href="/about">About - NextJS Link</Link></p>
    <p><Link href="/">Home - NextJS Link</Link></p>
    <div style={{ backgroundColor: "gray" }}>
      <Component {...pageProps} /></div>
    <div>Footer</div>
  </div>

}
export default MyApp
