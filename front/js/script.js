const catalogue = "http://localhost:3000/api/products";

// Ensemble des articles disponibles

fetch(catalogue)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    let blockDomElement = creationElementDom(value);
    let insertDomElement = document.getElementById("items");
    insertDomElement.innerHTML = blockDomElement;
  })
  .catch(function (err) {
    console.log(err);
  });

// fonction liste des produits
function creationElementDom(produits) {
  console.log("ici je rentre dans ma fonction creationElementDom");
  let blockDomElement = "";
  for (let index = 0; index < produits.length; index++) {
    const element = produits[index];
    blockDomElement += constructionElementDom(element);
  }
  return blockDomElement;
  console.log("ici je quitte ma fonction creationElementDom");
}
// Elements Dom à injecter dans la carte (Construction Elements Dom)
function constructionElementDom(produit) {
  console.log("Ici je rentre dans ma fonction constructionElementDom");
  let element = `<a href="./product.html?id=${produit._id}">\n
    <article>\n
      <img
        src="${produit.imageUrl}"
        alt="${produit.altTxt}, ${produit.name}"
      />\n
      <h3 class="productName">${produit.name}</h3>\n
      <p class="productDescription">
        ${produit.description}
      </p>\n
    </article>
  </a>\n`;
  return element;
  console.log("Ici je quitte ma focntion constructionElementDom");
}
