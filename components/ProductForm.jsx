import s from "../styles/form.module.css";
import Card from "./Card";
import Head from "next/head";
import { useRef,useState,useEffect } from "react";
const ProductForm = (props) => {
  const [image, setImage] = useState([])
  const refName = useRef();
  const refType = useRef();
  const refPrice = useRef();
  const refQuantity = useRef();
  useEffect(()=>{
      let watch = true
          if(watch && props.isEdit) {
            refName.current.value = props.productLoad.name,
            refType.current.value = props.productLoad.type,
            refPrice.current.value = props.productLoad.price,
            refQuantity.current.value = props.productLoad.quantity
          }
          watch=false
      
  },[])

  const onSubmited = e =>{
    e.preventDefault();
    props.product({
        name: refName.current.value,
        type: refType.current.value,
        price: refPrice.current.value,
        quantity: refQuantity.current.value,
        fd: image
      })
  }

  const changeHandler = e => {
    const fd = new FormData();
    fd.append("name",refName.current.value);
      for (const f of e.target.files) fd.append("files", f)
      setImage(fd);
      e.preventDefault()
  }
  
  return (
    <>
      <Card>
        <Head>
          <title>Mburu | {props.title} {props.isEdit && props.productLoad.type} {props.isEdit && props.productLoad.name}</title>
          <meta name="keywords" content="mburu"/>
        </Head>
        <form className={s.form} onSubmit={onSubmited}>
          <div className={s.input}>
            <label htmlFor="type">Catégory</label>
            <select ref={refType}>
              { 
                props.types.map(type => (
                  <option 
                  key={type.id + Date.now().toString()} 
                  value={type.id}>
                    {type.title}
                  </option>
                ))
              }
            </select>
          </div>

          <div className={s.input}>
            <label htmlFor="">Nom du produit</label>
            <input type="text" ref={refName} />
          </div>

          <div className={s.input}>
            <label htmlFor="Quantité">Quantité</label>
            <input type="number" ref={refQuantity} />
          </div>
          <div className={s.input}>
            <label htmlFor="Prix">Prix</label>
            <input type="number" ref={refPrice} />
          </div>
          <div className={s.input}>
            <label htmlFor="images">Choisir une image</label>
            <input type="file" onChange={changeHandler} multiple required/>
          </div>
          <div className={s.input}>
            <input type="submit" value={props.action} />
          </div>
        </form>
      </Card>
      <Card>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione modi fugit nulla voluptas, doloremque delectus consectetur dolorum nesciunt sequi tenetur. Ipsam non autem saepe illum rem architecto soluta quisquam eum?
      </div>
      </Card>
    </>
  );
};

export default ProductForm;
