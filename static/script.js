async function controllacredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password )
        return alert("Scrivi un nome e una password");
    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
    if (dati.messaggio === 1) {
        document.getElementById('Risultato').innerText = "benvenuto nel sito";
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('btn-registrati').style.display = 'none';
    } else {
        document.getElementById('Risultato').innerText = "password o utente sbagliato";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
}
document.getElementById('btn-registrati').addEventListener('click',controllacredenziali)
//---#aggiungere un bottone, controlla, e cliccando si manda le informazioni con i post---

async function loggati_pandas() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password )
        return alert("Scrivi un nome e una password");
    const res = await fetch(`/pandas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
    if (dati.messaggio === 1) {
        document.getElementById('Risultato').innerText = "benvenuto nel sito";
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('btn-registrati').style.display = 'none';
        document.getElementById('btn-pandas').style.display = 'none';
    } else {
        document.getElementById('Risultato').innerText = "password o utente sbagliato";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
}
document.getElementById('btn-registrati').addEventListener('click',controllacredenziali)
//---#aggiungere un bottone, controlla, e cliccando si manda le informazioni con i post---
