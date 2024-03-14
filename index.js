console.log('funguju!');

/* Vytvořte si repozitář ze šablony cviceni-minutka pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících úkolů.
Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. 
Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. 
Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit. */


//casovac
let minutes = 0
let seconds = 0
setInterval(() => {
const time = document.querySelector("#time")
time.innerHTML = `${minutes}:${seconds}`
if(seconds === 60) {
    minutes++
    seconds = 0
    }
seconds++
}, 1000) 

//prompt
let kdyzvonit = Number(prompt("Zadej kdy ma zvonit budik ve vterinach: "))
kdyzvonit = kdyzvonit * 1000

//zvoneni budiku za urcity pocet vterin zadany v promptu
setTimeout(() => {
  const budik = document.querySelector('.alarm')
  budik.classList.add('alarm--ring')
  const zvuk = document.querySelector('audio')
  zvuk.play
}, kdyzvonit )



