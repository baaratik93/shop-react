import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

/** userRouter permet de rediriger la page quand il ya une erreur sur le chemin */
/** userEffect s'execute quand la page est montée */

const Error = (req, res) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/products')
    }, 3000);
  }, []);
  return (
    <p>
      Oupssss!Vous n'êtes pas habilité à exploiter cette ressource ou cette action.
      Veuillez vous connecter avec des privilèges supérieurs
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  );
};

export default Error;
