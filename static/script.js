async function controllacredenziali() {
    const username = document.getElementById('username').value;
    const pasword = document.getElementById('pasword').value;
    if (!username || !pasword ) return alert("Scrivi un nome! e pasword");
    const res = await fetch(`/login?username=${username}&pasword=${pasword}`);
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
}
document.getElementById('btn-registrati').addEventListener('click',controllacredenziali)