    // Vue.component('message',{
    //     props:['title','body'],
    //     data(){
    //         return {
    //             isvisible:true
    //         };
    //     },
    //     template:`
    //     <article class="message"v-show="isvisible">
    //         <div class="message-header">
    //         {{title}}
    //         <button class="button" @click="hidemessage" >x</button>
    //         </div>

    //         <div class="message-body">
    //         {{body}}
    //         </div>
    //     </article>`,
    //     methods:{
    //         hidemessage:function(){
    //             this.isvisible=false;
    //         }
    //     }
    // });
Vue.component('modal',{
    template:`
    <div class="modal is-active" >
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box"> <div id="conclave.register">
            <p style="text-align:center; justify-content: center">Participate in the Case Study Challenge, Kartavya 2019
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button></p>
        <button class="button-reg"><a href="https://forms.gle/GMSCpLhrGKXEx8Sy7" style="color: #FFFFFF"><span>Register here..</span></a></button>
        </div></div>
           
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
