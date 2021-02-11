import { RiInstagramLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import logo from './fruzan-logo.png';
import './App.css';
import BeautyLogo from './beautylogo.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <section class="App-sec">
        <div class="border1"></div>
        <img src={logo} class="App-logo" alt="logo" />
        <div class="border2"></div>
        <img src={BeautyLogo} class="BeautyLogo" alt="beauty logo"></img>
        <a
          className="App-link"
          href="https://www.instagram.com/furuzun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          order
        </a>
        <div class="contact-us">
        <AiOutlinePhone class="icons"/>
        <SiGmail class="icons"/>
        <RiInstagramLine class="icons"/>
        </div>
        </section>
      </header>
    </div>
  );
}

export default Home;
