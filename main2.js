
Vue.component('modal',{
    template:`
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Participate in the Case Study Challenge, Kartavya 2019</p>
     </header>
    <footer class="modal-card-foot">
      <button class="button is-success"><a href="https://forms.gle/GMSCpLhrGKXEx8Sy7" style="color: #FFFFFF"><span>Register here..</span></a></button>
      <button class="button"  @click="$emit('close')">Cancel</button>
    </footer>
  </div>
</div>
  `
});     
new Vue({
    el: '#root',
    data:{
        showModal:true
    }
    
});