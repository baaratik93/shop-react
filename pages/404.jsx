import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

/** userRouter permet de rediriger la page quand il ya une erreur sur le chemin */
/** userEffect s'execute quand la page est montée */

const Error = (req, res) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.back();
      router.push('/')
    }, 3000);
  }, []);
  return (
    <p>
      Oupssss!Cette page n'existe pas
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  );
};

export default Error;
