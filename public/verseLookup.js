document.querySelector(".submit").addEventListener("click", getFetch);
document.querySelector(".reset").addEventListener("click", resetPage);

async function getFetch() {
  try {
    let verse = document.querySelector(".form-control").value;
    console.log(verse);
    let bible = await fetch(`https://bible-api.com/${verse}`);
    let data = await bible.json();
    let book = document.createElement("div");
    book.innerText = data.verses[0].book_name;
    document.body.appendChild(book);
    let displas = document.createElement("div");
    displas.innerText = `Chapter ${data.verses[0].chapter}`;
    document.body.appendChild(displas);

    for (let i = 0; i < data.verses.length; i++) {
      let displaText = document.createElement("div");
      displaText.innerText += `${data.verses[i].verse} ${data.verses[i].text}`;
      document.body.appendChild(displaText);
    }
  } catch (err) {
    console.log(`error ${err}`);
  }
}
function resetPage() {
  location.reload();
}
