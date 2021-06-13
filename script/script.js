const app = Vue.createApp({
    data(){
        return{
           countries:[],
           confirmed:[],
           deaths:[],
        };
    },
    methods:{
        async getCountryData(){
            const res = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
            const result = await res.json();
            this.countries = [];
            for (const c in result) {
                this.countries.push(result[c].All);
            }
        },
        async confirmedData(){
            const res = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
            const result = await res.json();
            this.confirmed = [];
            for(const confirm in result){
                this.confirmed.push(result[confirm].All);
            }
        },
        async deathData(){
            const res = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
            const result = await res.json();
            this.deaths = [];
            for(const death in result){
                this.deaths.push(result[death].All);
            }
        },
    },
    //mounted(){
      //  this.capitalData();
      //  this.confirmedData();
      //  this.deathData();
   // }
});
app.mount('#app');