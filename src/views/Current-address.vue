<template>
  <ion-page>
    <ion-content mode="ios">

  <ion-list lines="none">
    <form >
      <ion-item color="tertiary">
        <ion-label>
          <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
          <b>&nbsp;ที่อยู่&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="เช่น หมู่บ้านแสนสุข 144/1 หมู่ 1 ถนนริมบึง" formControlName="i1">
        </ion-input>
      </ion-item>

      <ion-item color="tertiary">
        <ion-label>
          <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
          <b>&nbsp;ตำบล&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="เช่น บางพระ" formControlName="i2"></ion-input>
      </ion-item>

      <ion-item color="tertiary">
        <ion-label>
          <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
          <b>&nbsp;อำเภอ&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="เช่น ศรีราชา" formControlName="i3"></ion-input>
      </ion-item>

      <ion-item color="tertiary">
        <ion-label>
          <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
          <b>&nbsp;จังหวัด&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="เช่น ชลบุรี" formControlName="i4"></ion-input>
      </ion-item>

      <ion-item color="tertiary">
        <ion-label>
          <ion-icon  name="checkmark-circle-outline" style="color: cornflowerblue" />
          <b>&nbsp;รหัสไปรษณีย์&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="เช่น 20110" formControlName="i5"></ion-input>
      </ion-item>

      <ion-item color="tertiary">
        <ion-label>
          <b>&nbsp;หมายเหตุ&nbsp;</b>
          <ion-text color="danger">*</ion-text>
        </ion-label>
      </ion-item>
      <ion-item color="tertiary" lines="full">
        <ion-input type="text" placeholder="ระบุบันทึกเพิ่มเติม (ไม่จำเป็น)" formControlName="i6"></ion-input>
      </ion-item>

    </form>
  </ion-list>

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
  IonLabel,
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
  IonLabel,
  IonInput,
  IonButton,
  },
  
});
</script>
