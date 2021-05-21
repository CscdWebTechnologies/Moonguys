import "../index.css";

function Portfolio() {
  return (
    <div>
      <div className="container1">
        <div className="text1">
          <h3>
            Earn up to $28 worth <br /> of crypto
          </h3>
          <h4>
            Discover how specific cryptocurrencies work - and <br />
            get a bit of each crypto to try out for yourself.{" "}
          </h4>
          <button className="btn3">Start earning</button>
        </div>
        <div className="text2">
          <div className="flex">
            <div className="flexx">
              <img src="./img/log3.png" alt="" width="40px" height="40px" />
              <h1>SKALE SKL</h1>
            </div>
            <p>Earn $3 SKL</p>
          </div>
          <div className="flex">
            <div className="flexx">
              <img src="./img/log4.png" alt="" width="40px" height="40px" />
              <h1>
                Ampleforth <br /> Governance Token
              </h1>
            </div>
            <p>Earn $3 FORTH</p>
          </div>
          <div className="flex">
            <div className="flexx">
              <img src="./img/log1.png" alt="" width="40px" height="40px" />
              <h1>The Graph GRT</h1>
            </div>
            <p>Earn $3 GRT</p>
          </div>
          <div className="flex">
            <div className="flexx">
              <img src="./img/log2.png" alt="" width="40px" height="40px" />
              <h1>Stellar Lumens XLM</h1>
            </div>
            <p>Earn $10 XLM</p>
          </div>
        </div>
      </div>

      <p className="text3">View more</p>
    </div>
  );
}

export default Portfolio;
