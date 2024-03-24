const { createApp } = Vue

createApp({
    data() {
        return {
            email: null,
            emailList: [],
            emailStorage: [],
        }
    },

    methods: {
        generateEmailList(){
            for (let i = 0; i < 10; i++) {                
                this.getEmail()
            }            
            this.$nextTick(() => {
                this.emailList = this.emailStorage;
            })
        },
        
        getEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                this.email = response.data.response;
                this.emailStorage.push(this.email);
                this.email = null
            })
        },

    },
}).mount('#app')