new Vue({
 el: '#one',
 data(){
   return{
     game: null
   }
 },
mounted(){
  axios
  .get('data/data.json')
  .then(response=>(this.game = response))
}
})
