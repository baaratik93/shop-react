import axios from "axios";
const panier = [];
export const product = async (id) => {
  const produit = await axios
    .get("/products/" + id)
    .then( p => p.data)
    .catch((error) => console.error(error));
  return produit;
};

export const addProduct = async(p) => {
 
  const product = await axios
    .post("/products/new", p, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("keyen"),
      },
    })
    .then(article => article)
    .then(d => d &&
      upload(p.fd, d.data)
          .then(f => f)
          .catch(e => console.error(e))
          ) /** Uploader les images du produits */
    .catch(e => console.error(e))
  return product;
};

export const editProduit = async (product) => {
  const produit = await axios
    .put("/products/" + product.id + "/edit", product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("keyen"),
      },
    })
    .then((p) => p.data)
    .catch((error) => console.error(error));
  return produit;
};

export const deleteProduct = async (id) => {
  const res = await axios
    .delete("/products/" + id + "/delete", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("keyen"),
      },
    })
    .then((r) => r)
    .catch((e) => e);
  console.log(res);
  return res.response;
};

export const allProducts = async () => {
  const res = await axios
    .get("/products")
    .then((p) => p.data)
    .catch((e) => console.error(e));
  return res;
};

/** Inscription utilisateur */

export const register = async (user) => {
  /** Constituer l'utilisateur */

  /** authentifier l'utilisateur */
  const u = await axios
    .post("/users/register", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((u) => u.data.token)
    .catch((err) =>
      alert(err.response.status + ": " + err.response.data.erreur)
    );
  localStorage.setItem("keyen", u);
  return u;
};

/**Connexion utilisateur */
export const sign = async (user) => {
  /** Constituer l'utilisateur */

  /** authentifier l'utilisateur */
  const u = await axios
    .post("/users/signin", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((u) => u.data.token)
    .catch((err) =>
      alert(err.response.status + ": " + err.response.data.erreur)
    );
  localStorage.setItem("keyen", u);
  return u;
};

export const isConnected = () => {
  try {
   return localStorage.getItem("keyen") !== null ? true : false;
  } catch (error) {
    console.error(error)
  }
}

const upload = async(fd,produit) => {
  const f = await
  axios
  .post('/uploads', fd)
  .then(files => files.data && saveImages(files.data, produit))
  .catch(err => console.error(err))
  return f;
}

const  saveImages = (files,p) => {
    axios.
    post('/images', {
      files: files,
      id: p.id
    })
    .then(i => i.data)
    .catch(e => console.error(e))
}

export const categories = async() => {
  const c = await
  axios
  .get('/categories')
  .then(c => c.data)
  .catch(e =>console.error(e))
  return c;
}


export const handleQte = e => {
  e.preventDefault()
  parseInt(e.target.value) > 0 ? e.target.parentElement.parentElement.querySelector('button.btn').disabled = false : e.target.parentElement.parentElement.querySelector('button.btn').disabled = true
}



export const getImage = async data => {
          const image = await
            axios
            .get('/allImages/' + data.id, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(i => i.data.data)
            .catch(e => console.error("Erreur"))
          return image
}

export const addCart = cart => {
  panier.push(cart)
  console.log(panier);
}