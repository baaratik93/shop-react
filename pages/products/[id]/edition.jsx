import ProductForm from "../../../components/ProductForm";
import { product, editProduit,categories } from "../../../helpers/api";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const res = await product(context.params.id);
  const t = await categories()
  return {
    props: {
      produit: res,
      types: t
    },
  };
}
const Edition = ({ produit,types }) => {
  const router = useRouter();
  const editProductHanler = async (p) => {
    const pro = await editProduit({ id: produit.id, ...p });
    pro ? router.replace("/products/" + produit.id) : router.replace("/409");
  };

  return (
    <ProductForm
      isEdit="true"
      productLoad={produit}
      action="Modifier & Terminer"
      product={editProductHanler}
      title="Modification du produit"
      types={types}
    />
  );
};

export default Edition;
