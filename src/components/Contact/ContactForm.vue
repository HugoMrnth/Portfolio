<template>
  <div class=" w-11/12 my-10 md:my-2 md:w-6/12 m-auto border-2 border-black rounded bg-slate-900">
    <form class="p-2 m-auto flex flex-col" @submit="sendEmail">
        <input type="hidden" name="apikey" value="d723d0c8-1c56-47cb-8f7b-6dee329dfc0f">
        <div class="flex justify-between">
            <InputText type="text" placeholder="Your name" name="name" v-model="formValues.name"/>
            <InputText type="email" placeholder="Your email" name="email" v-model="formValues.email" />
        </div>
        <InputText type="text" placeholder="Subject" name="subject" v-model="formValues.subject" />
        <TextArea rows='10' v-model="formValues.message"/>
        <div class=" flex justify-end">
            <SubmitBtn message="Submit" />
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputText from './InputText.vue';
import TextArea from './TextArea.vue';
import SubmitBtn from './SubmitBtn.vue';

export default defineComponent({
  name: 'ContactForm',
  components: {
    InputText,
    TextArea,
    SubmitBtn
  }
});
</script>

<script setup lang="ts">
    const formValues= ref({
      apikey: "d723d0c8-1c56-47cb-8f7b-6dee329dfc0f",
      name: "",
      email: "",
      subject: "",
      message:""
    })

 function sendEmail(e: any) {
    e.preventDefault();
    // console.log(formValues.value)
    
    fetch('https://api.web3forms.com/submit',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formValues.value)
      }).then( reponse => {
        return reponse.json()
      }).then(json => {
        console.log(json)
    })
}

</script>


<!-- https://api.web3forms.com/submit -->