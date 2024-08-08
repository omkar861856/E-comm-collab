/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Layout = ({children}) => {
  return (
    <div className="layoutParent">

        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/products">Products</Link>

            <hr />
        </header>
        <main>
            {children}
        </main>
        <footer>footer</footer>

    </div>
  )
}

export default Layout