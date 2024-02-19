const name = prompt('Come ti chiami?');


const surname = prompt("Qual'è il tuo cognome?");


const color = prompt("Qual'è il tuo colore preferito?");

const nameSurname = name + ' ' + surname;

document.getElementById('user').innerHTML = 
`
<p>
 Mi chiamo <strong>${nameSurname}</strong> e il mio colore preferito è il <strong>${color}</strong>
</p>
`;