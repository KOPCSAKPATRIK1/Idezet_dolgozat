import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Loaded')
    let eredmeny;

    async function Beolvas()
    {
        let response = await fetch('/quotes.json');
        eredmeny = await response.json();
    }
    Beolvas();

    function Betolt(quotesLista){
        let szulo = document.getElementById("idezetek");
        quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));

        for(let e of quotesLista)
        {
            let li = document.createElement("li");
            li.innerHTML = e.author + ": " + e.quote;
            szulo.appendChild(li);
        }
    }

    document.getElementById("betolt").addEventListener("click", ()=>{
        Betolt(eredmeny.quotes);
    })

})