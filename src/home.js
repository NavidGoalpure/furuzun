import { RiInstagramLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import logo from "./fruzan-logo.png";
import "./App.css";
import CoverLogo from "./cover-logo.png";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <section class="App-sec">
          <div class="border1"></div>
          <img src={logo} class="App-logo" alt="logo" />
          <div class="border2"></div>
          <img src={CoverLogo} class="BeautyLogo" alt="beauty logo"></img>
          <a
            className="App-link"
            href="https://www.instagram.com/furuzun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Order</div>
            <div> Now</div>
          </a>
          <div class="contact-us">
            <div className="row">
              <RiInstagramLine class="icons" />
              <a
                style={{ fontWeight: "bold", fontSize: "larger" }}
                className="contact-item"
                href="https://www.instagram.com/furuzun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                furuzun
              </a>
            </div>
            <div className="row" style={{ marginTop: "0.5rem" }}>
              <AiOutlinePhone class="icons" />
              <h3 className="contact-item"> {`09335693119`}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
