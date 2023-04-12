const url = 'http://localhost:3000/produto';

// get products on bd
/*async function getAllProduts() {
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();

    console.log(data);

    const div = document.getElementById("lista-candidatos");
    div.innerHTML = data[0].nome;
}
*/
// post product
async function postProduct() {
    let resp = await fetch(url);
    let data = await resp.json();

    let product = {
        id: 5,
        nome: "Zedinaikjk"
    };

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

//getAllProduts();
postProduct();