function luasPersegi() {
  const sisi = document.getElementById("sisi").value;
  const luas = sisi * sisi;

  document.getElementById("hasil").innerHTML = `
    <p>L = S x S</p>
    <p>L = ${sisi} x ${sisi}</p>
    <p>L = ${luas}</p>`;
}

function kelilingPersegi() {
  const sisi = document.getElementById("sisi").value;
  const keliling = 4 * sisi;

  document.getElementById("hasil").innerHTML = `
    <p>K = 4 x S</p>
    <p>K = 4 x ${sisi}</p>
    <p>K = ${keliling}</p>`;
}

function ulang() {
  const element = document.getElementById("hasil");
  element.innerHTML = "";
}
