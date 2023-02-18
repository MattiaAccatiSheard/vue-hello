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