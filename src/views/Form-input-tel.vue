<template>
  <ion-page>
    <ion-content mode="ios">

  <ion-content mode="ios">

  <ion-list lines="none">
    <form >

      <ion-card color="tertiary">
        <ion-card-content class="ion-text-center">
          <h1><b>083224XXXX</b></h1>
        </ion-card-content>
      </ion-card>

      <ng-container>
        <ion-item color="tertiary">
          <p class="ion-no-margin">
            <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
            <b>&nbsp;เบอร์โทรศัพท์ที่ผูกกับบัญชี mana&nbsp;</b>
            <ion-text color="danger">*</ion-text>
          </p>
        </ion-item>
        <ion-item color="tertiary" lines="full">
          <ion-input type="tel" placeholder="กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง" formControlName="i1"></ion-input>
        </ion-item>
      </ng-container>

    </form>
  </ion-list>

</ion-content>
<ion-footer class="ion-no-border">
  <ion-button color="danger" class="ion-no-margin" expand="full" type="submit" >ยืนยัน</ion-button>
</ion-footer>

</ion-content>
<ion-footer class="ion-no-border">
  <ion-button color="danger" class="ion-no-margin" expand="full" type="submit" >ยืนยัน</ion-button>
</ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonList,
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import moment from "moment";

export default defineComponent({
  name: "CurrentAddress",
  components: {
    IonList,
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  },
  
});
</script>
