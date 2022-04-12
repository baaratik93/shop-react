import Products from "../../components/Products";
import { allProducts } from "../../helpers/api";
export const getServerSideProps = async ()=>{
  const res = await allProducts()
  return {
    props: {
      produits: res
    }
  }
}
const Index = ({produits}) => <Products produits={produits}/>

export default Index;
