import Link from "next/link";
import Card from "../../../components/Card";
import {product,deleteProduct,addCart } from "../../../helpers/api";
import Head from "next/head";
import Product from "../../../components/Product";
/** Le Hook getServerSideProps permet d'initilaiser
 * une requête vers le serveur en se passant de la
 * combinaison getStaticPaths & getStaticProps
 */
export async function getServerSideProps(context) {
  const res = await product(context.params.id)
  return {
      props: {
          produit: res
      }
  }
}
/** Ici c'est la fonction principale de la page
 * unitaire des produits. Elle permet d'afficher
 * un produit en particulier
 */
const SingleProduct = ({produit}) => {
  const handlePanier = cart => addCart(cart)
  const deleteHandler = async(e) => {
    e.preventDefault()
    const response = await deleteProduct(produit.id)
    response && response.status === 409 ||response && response.status === 404 ? alert(response.data.erreur) : router.replace("/409")
  }

  return (
    <>
      <Head>
        <title>Mburu | {produit.name}</title>
        <meta name="keywords" content="mburu" />
      </Head>
      <Product
      product={produit}
      panier={handlePanier}
      />
      <Link href="/products">
        <a>Produits</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <button onClick={deleteHandler}>Supprimer</button>
      </Link>
      <Link href={"/products/" + produit.id + "/edition"}>
        <a>Modifier</a>
      </Link>
    </>
  );
};
export default SingleProduct;
