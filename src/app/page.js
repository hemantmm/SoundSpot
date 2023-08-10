import Image from 'next/image'
import logo from '../app/images/musiclogo.jpg'
import {MdOutlineEvent, MdSubscriptions} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section>
<div className='tagline'>"Own a piece of music history with our exclusive NFTs. <br/>Elevate your music collection with our exclusive NFTs, showcasing the beauty and creativity of your favorite artists."</div>
</section>
    {/* <div className='navbar'></div> */}
    {/* <nav class="layout">
  <div class="logo">
  <ul className='navbarul'>
        <li className=''>
          <Image src={logo} />
        </li>
      </ul>
  </div>
  <div class="home-event" style={{gridColumn: 2/3}}>
  <ul className='ulNavbar'>
    <Link href="/event">
        <li>
          <MdOutlineEvent size={25} />
          </li>
    </Link>

        <li>
    <Link href="artist">
          <img style={{color:'rgba(151, 71, 255, 1)'}} width="29" height="10" src="https://img.icons8.com/avantgarde/100/dj.png" alt="dj"/>
    </Link>
          </li>

        <li>
          <Link href="/subscri">
          <MdSubscriptions size={25} />
          </Link>
          </li>
      </ul>
  </div>
  <div class="login-button">
  <ul>
        <li><BiLogIn size={25} /></li>
      </ul>
  </div>
</nav>

<section>
<div className='tagline'>"Own a piece of music history with our exclusive NFTs. <br/>Elevate your music collection with our exclusive NFTs, showcasing the beauty and creativity of your favorite artists."</div>
</section> */}

    </>
  )
}
