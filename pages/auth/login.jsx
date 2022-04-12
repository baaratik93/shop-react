import UserForm from "../../components/UserForm";
import {sign} from "../../helpers/api"
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()
  const ConnexionHandler = async(user) => {
    const jwt = await sign(user)
    jwt && router.replace('/products')
  };

  return (
    <UserForm
      submitRegister={ConnexionHandler}
      head="Connexion utilisateur"
      title="connexion"
    />
  );
};

export default Login;
