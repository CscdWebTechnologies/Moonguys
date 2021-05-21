import '../index.css';

function Header() {
    return (
        <header>
            <h1 className="now">coinbase</h1>
            <nav>
                <ul className="navlinks">
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Individual</a></li>
                    <li><a href="#">Businesses</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Company</a></li>
                    <i className="fa fa-search" ></i>
                    <i className="fa fa-shopping-bag"></i>
                </ul>
            </nav>
            <div className="contain">
                <a href="#">Sign in</a>
                <button className="btn">Get started</button>
            </div>
        </header>

    )
}

export default Header
