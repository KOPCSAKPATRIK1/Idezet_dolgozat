import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");
  let eredmeny;
  let substr = "the";

  async function Beolvas() {
    let response = await fetch("/quotes.json");
    eredmeny = await response.json();
  }
  Beolvas();

  function Betolt(quotesLista) {
    let szulo = document.getElementById("idezetek");
    quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));

    for (let e of quotesLista) {
      let li = document.createElement("li");
      li.innerHTML = e.author + ": " + e.quote;
      szulo.appendChild(li);
    }
  }

  function koverites(idezetekList) {
    for (let e of idezetekList) {
      let li = document.createElement("li");
      let szulo = document.getElementById("boldIdezetek");
      let quotes = e.quote.split(" ");

      for (let i = 0; i < quotes.length; i++) {
        if (quotes[i] == "the" || quotes[i] == "The") {
          quotes[i] = quotes[i].bold();
        }

        li.innerHTML += quotes[i] + " ";
      }
      szulo.appendChild(li);

    }
  }

  document.getElementById("betolt").addEventListener("click", () => {
    Betolt(eredmeny.quotes);
  });
  document.getElementById("koverites").addEventListener("click", () => {
    koverites(eredmeny.quotes);
  });



});
