import Menu from "./Components/Menu";

import imgWeb3Desktop from "./assets/images/image-web-3-desktop.jpg";
import imgWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";
import imgRetroPCs from "./assets/images/image-retro-pcs.jpg";
import imgTopLaptops from "./assets/images/image-top-laptops.jpg";
import imgGrowth from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <div className="app-container">
      <Menu></Menu>

      <main>
        <section title="main-section" className="main-section">
          <div className="img-container">
            <img src={imgWeb3Mobile} alt="web-3" className="mobile" />
            <img src={imgWeb3Desktop} alt="web-3" className="desktop" />
          </div>
          <div className="two-columns">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="two-rows">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </section>

        <aside>
          <h2>New</h2>
          <div className="aside-section">
            <article className="aside-article">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article className="aside-article">
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
            <article className="aside-article">
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </div>
        </aside>

        <section className="footer-section">
          <article className="footer-article">
            <div className="img-container">
              <img src={imgRetroPCs} alt="retro pc" />
            </div>
            <div className="footer-div">
              <span>01</span>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
          <article className="footer-article">
            <div className="img-container">
              <img src={imgTopLaptops} alt="top laptops" />
            </div>
            <div className="footer-div">
              <span>02</span>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>
          <article className="footer-article">
            <div className="img-container">
              <img src={imgGrowth} alt="gaming growth" />
            </div>
            <div className="footer-div">
              <span>03</span>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
