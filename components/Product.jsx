/** Ce composant permet d'afficher un article en particulier en fonction de son ID */
import Card from "../components/Card";
import { useEffect,useState } from "react";
import Link from "next/link";
import {handleQte, getImage} from "../helpers/api"

const Product =(props) => {
    const d = props.product
    const [path, setPath] = useState("")
    const handleCart = (e) => {
    e.preventDefault();
    /** Initialisation du produit commandé */
    const art = {
      id: e.target.value,
      quantity: e.target.parentElement.querySelector('input').value,
      pu: e.target.parentElement.querySelector('#pu').value
    }
    /** Ici on passe au variable panier du composant parent l'article commandé */
    props.panier(art)
    e.target.parentElement.querySelector('input').value=''
    e.target.parentElement.querySelector('#pu').value=''
    e.target.parentElement.querySelector('button.btn').disabled=true
  };
  const handleCartLeave = e => {
    e.preventDefault();
    e.target.querySelectorAll('.buy').forEach(i => i.style.display= 'none')
  }
  const handleCartOver = e => {
    e.preventDefault();
    e.target.querySelectorAll('.buy').forEach(i => i.style.display= 'block')
  }
  useEffect(async () => {
    let watch = true 
      setPath(await getImage(d))
    if(watch) {
      document.querySelectorAll('button.btn').forEach(b => b.disabled = true)
      document.querySelectorAll('.buy').forEach(i => i.style.display= 'none' )
      watch = false
    }
  }, [])
  /**Mise en forme du panier et de la carte du produit */
    return <Card>
      <ul onMouseOver={handleCartOver} onMouseLeave={handleCartLeave}>
        <img src={"http://localhost:4000"+path} width={190} height={120}/>
        <li><Link href={ "/products/" + d.id }><a>{ d.category.title } { d.name }</a></Link></li>
        <li>Stock:  { d.quantity } articles</li>
        <li>Avant: <strike>{ d.price + d.price * 45/100 } Fcfa</strike></li>
        <li id="pu" value={ d.price + 3000 }>Unité: { d.price + 3000 } Fcfa</li><hr/>
        <li className="buy"><input type="number" placeholder="Quantité à commander" name="qte" onChange={ handleQte }  /></li>
        <button className="btn buy" value={ d.id } onClick={ handleCart }>Ajouter au panier</button>
      </ul>
  </Card>
  /**Mise en forme du panier et de la carte du produit */
}

export default Product 