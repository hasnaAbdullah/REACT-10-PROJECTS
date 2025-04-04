import "./App.css";
import Navigation from "./Components/Navigation";
function App() {
  return (
    <div className="main">
      <Navigation />
      {/* hero section */}
      <main>
        {/* content */}
        <div className="hero-content">
          <h1 className="hero-title">YOUR FEET DESERVE THE BEST</h1>
          <p className="hero-desc">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div>
            <button className="hero-btn">Shop Now</button>
            <button className="hero-btn category-btn">Category</button>
          </div>
          <small>Also Available On</small>
          <div className="marketplace">
            <img src="../public/images/flipkart.png" alt="flipkrt image" />
            <img src="../public/images/amazon.png" alt="aamazon image" />
          </div>
        </div>

        {/* hero profile */}
        <div className="hero-profile">
          <img src="../public/images/shoe_image.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
