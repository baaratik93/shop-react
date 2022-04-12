import Head from "next/head";
import Product from "./Product";
import Link from "next/link";
import {addCart} from '../helpers/api'


const Products = (props) => {
  // const [carte, setCart] = useState([])
  const handlePanier = cart => addCart(cart)
  
  return (
    <>
      <Head>
        <title>Mburu | Produits</title>
        <meta name="keywords" content="mburu" />
      </Head>
      <Link href="/products/add"><a>Nouvel article</a></Link>
      <div className="container">
        { props.produits.map ( d =>
        <Product 
        key={ d.id + Date.now().toString() }
        product={ d }
        panier={handlePanier}
        /> )}
      </div>
    </>
  )
}

export default Products
