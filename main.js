// Ciao ragazzi,
//     Esercizio di oggi: Vue Hello
// nome repo: vue - hello
// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

console.log('ciao vue', Vue);

const app = Vue.createApp({

    data() { //metodo data

        return {
            message: 'hello!'
        }
    }
});

app.mount("#h1");

//bonus
const image = Vue.createApp({

    data() { //metodo data

        return {
            message: '<img src="https://static.macupdate.com/products/54025/l/visual-studio-code-logo.png?v=1671090395" alt="">'
        }
    }
});

image.mount("#img");