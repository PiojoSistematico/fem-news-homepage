import imgWeb3Desktop from "./assets/images/image-web-3-desktop.jpg";
import imgWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";
import imgRetroPCs from "./assets/images/image-retro-pcs.jpg";
import imgTopLaptops from "./assets/images/image-top-laptops.jpg";
import imgGrowth from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <main>
      <header>
        <div>
          <img src="./assets/images/logo.svg" alt="Logo" />
        </div>{" "}
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Trending</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <div>
          <img src={imgWeb3Mobile} alt="web-3" />
        </div>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
        <div>
          <h2>New</h2>
          <div>
            <article>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
            <article>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </div>
        </div>
      </section>
      <footer>
        <article>
          <div>
            <img src={imgRetroPCs} alt="retro pc" />
          </div>
          <span>01</span>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </article>
        <article>
          <div>
            <img src={imgTopLaptops} alt="top laptops" />
          </div>
          <span>02</span>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </article>
        <article>
          <div>
            <img src={imgGrowth} alt="gaming growth" />
          </div>
          <span>03</span>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </article>
      </footer>
    </main>
  );
}

export default App;
