import UserForm from "../../components/UserForm";
import { register } from "../../helpers/api";
import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter()
  const RegisterHandler = async(user) => {
    const jwt = await register(user)
    jwt && router.replace('/products')
  };

  return (
    <UserForm
      isRegister="true"
      submitRegister={RegisterHandler}
      head="Inscription utilisateur"
      title="Inscription"
    />
  );
};

export default Register;
