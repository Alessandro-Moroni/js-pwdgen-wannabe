const name = prompt('Come ti chiami?');


const username = prompt("Qual'è il tuo cognome?");


const color = prompt("Qual'è il tuo colore preferito?");
console.log(name, surname, color);

document.getElementById('user').innerHTML `
<p>
 Mi chiamo ${name, '',surname} e il mio colore preferito è il ${color} 
</p>
`