import '../index.css';

function Hero() {
    return (
        <div>
            <div className="container">
                <img className="image" src="./img/background.png" width="100%" height="700px" />
                <div className="class">
                    <div className="sub">
                        <img src="./img/logo2.jpeg" alt="" width="25px" height="35px" />
                        <p>Jump start your portfolio</p>
                    </div>
                    <div className="text1">
                        <h1>Jump start <br /> your crypto <br /> portfolio</h1>
                        <h4>Coinbase is the easiest place to buy and sell <br />
                            cryptocurrency. Sign up and get started today. </h4>
                    </div>
                    
                    <input type="search" placeholder="Email address" style={{marginTop:38, padding: 20 }} />
                    <button className="btn1">Get started</button>

                    
                </div>
            </div>
        </div>

    )
}

export default Hero
