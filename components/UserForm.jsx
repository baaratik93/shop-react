import Head from "next/head";
import { useRef } from "react";
import style from "../styles/form.module.css";

const UserForm = (props) => {
  const loginRef = useRef();
  const pwRef = useRef();
  const cpwRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    if (props.isRegister) {
      const watch = cpwRef.current.value === pwRef.current.value && props.isRegister;
      if(watch) {
        props.submitRegister({
            nom: nameRef.current.value,
            username: loginRef.current.value,
            password: pwRef.current.value,
            email: emailRef.current.value,
          })
      } else {
          alert("Les mots de passe ne correspondent pas")
      }
    }

    !props.isRegister &&
      props.submitRegister({
        username: loginRef.current.value,
        password: pwRef.current.value,
      });
  }
  return (
    <>
      <Head>
        <title>Mburu | {props.head}</title>
        <meta name="keywords" content="mburu" />
      </Head>
      <form
        onSubmit={handleSubmit}
        action=""
        method="post"
        className={style.form}
      >
        <div className={style.input}>
          <label htmlFor="">Pseudo</label>
          <input type="text" name="login" ref={loginRef} />
        </div>
        {props.isRegister && (
          <div className={style.input}>
            <label htmlFor="">Nom complet</label>
            <input type="text" name="nom" ref={nameRef} />
          </div>
        )}
        {props.isRegister && (
          <div className={style.input}>
            <label htmlFor="">Email</label>
            <input type="email" name="email" ref={emailRef} />
          </div>
        )}
        <div className={style.input}>
          <label>Password</label>
          <input type="password" name="password" id="" ref={pwRef} />
        </div>
        {props.isRegister && (
          <div className={style.input}>
            <label>Confirmez votre mot de passe</label>
            <input type="password" name="cpassword" id="" ref={cpwRef} />
          </div>
        )}
        <div className={style.action}>
          {props.isRegister && (
            <a className={style.session} href="">
              <input type="checkbox" />
              <span>Garder ma session active</span>
            </a>
          )}
          <input type="submit" value={props.title} />
          {props.isRegister && <a href="">Mot de passe oublié</a>}
        </div>
      </form>
    </>
  );
};

export default UserForm;
