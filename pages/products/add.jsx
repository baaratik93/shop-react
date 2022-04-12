import ProductForm from "../../components/ProductForm";
import { useRouter } from "next/router";
import { addProduct,categories } from "../../helpers/api";
export const getServerSideProps = async ()=>{
  const res = await categories()
  return {
    props: {
      types: res
    }
  }
}
const AddNewProduct = ({types}) => {
  const router = useRouter();
  const addProductHanler = async p => {
    const m = await addProduct(p);
    router.replace("/products");
     alert('ajouté(e)s avec succès');
  };
  return (
    <ProductForm
      action="Ajouter"
      product={addProductHanler}
      title="Création de produit"
      types={types}
    />
  );
};

export default AddNewProduct;
