<template>
  <ion-page>
    <ion-content mode="ios">
      <form @submit.prevent="onSubmit" novalidate>
        <ion-list lines="none" class="ion-margin-bottom">
          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.prefix.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />

              <ion-icon v-else-if="c_prefix" @click="openPopover($event, 'คำนำหน้าชื่อ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;คำนำหน้าชื่อ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" cancelText="ยกเลิก"
              interface="action-sheet" placeholder="กรุณาระบุคำนำหน้าชื่อ" v-model="vv.prefix.$model">
              <ion-select-option value="mr">นาย</ion-select-option>
              <ion-select-option value="mrs">นาง</ion-select-option>
              <ion-select-option value="miss">นางสาว</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.surname.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_surname" @click="errorAlert('กรุณาระบุชื่อ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;ชื่อ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="ตัวอย่าง. อานนท์" v-model="vv.surname.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.lastname.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_lastname" @click="openPopover($event, 'นามสกุล')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;นามสกุล&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="ตัวอย่าง. บางสาน" v-model="vv.lastname.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.lastname.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_lastname" @click="openPopover($event, 'เพศ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เพศ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-radio-group mode="md" color="tertiary">
            <ion-row>
              <ion-col class="ion-no-padding">
                <ion-item lines="full" color="tertiary">
                  <ion-label>
                    <h3><b>ชาย</b></h3>
                  </ion-label>
                  <ion-radio slot="start" value="true"></ion-radio>
                </ion-item>
              </ion-col>
              <ion-col class="ion-no-padding">
                <ion-item lines="full" color="tertiary">
                  <ion-label>
                    <h3><b>หญิง</b></h3>
                  </ion-label>
                  <ion-radio slot="start" value="false"></ion-radio>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-radio-group>
          <ion-accordion-group color="tertiary" mode="ios">
            <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0" color="tertiary">
              <ion-item slot="header" color="tertiary" lines="full">
                <ion-label style="font-size: 16px">
                  <ion-icon v-if="vv.dob.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
                  <ion-icon v-else-if="c_dob" @click="openPopover($event, 'วันเกิด')" name="alert-circle-outline"
                    style="color: red" />
                  <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
                  วันเกิด&nbsp;<ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-note v-if="!vv.dob.$model" slot="end">วัน/เดือน/ปี</ion-note>
                <ion-note v-else slot="end">{{ vv.dob.$model }}</ion-note>
              </ion-item>
              <ion-datetime style="background: white" id="datetime" slot="content" locale="th-TH"
                @ionChange="formatDate1($event)" display-format="YYYY-MM-DD"></ion-datetime>
            </ion-accordion>
          </ion-accordion-group>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.peopleId.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_peopleId" @click="openPopover($event, 'หมายเลขบัตรประชาชน')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เลขบัตร ปชช.&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="1349900000000" v-model="vv.peopleId.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.peopleIdBack.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_peopleIdBack" @click="openPopover($event, 'หมายเลขหลังบัตรประชาชน')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เลขหลังบัตร ปชช.&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="AB1234567890" v-model="vv.peopleIdBack.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary" lines="full" button routerLink="/form-input">
            <ion-label>
              <ion-icon v-if="c_error" @click="openPopover($event, 'ข้อมูลที่อยู่')" name="alert-circle-outline"
                style="color: red"></ion-icon>
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue"></ion-icon>
              <b>&nbsp;ที่อยู่ตามบัตรประชาชน&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text color="medium">
                <ion-label class="ion-padding-top input"></ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary" lines="full" button routerLink="/current-address">
            <ion-label>
              <ion-icon v-if="c_error" @click="openPopover($event, 'ข้อมูลที่อยู่')" name="alert-circle-outline"
                style="color: red"></ion-icon>
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue"></ion-icon>
              <b>&nbsp;ที่อยู่ปัจจุบัน&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text color="medium">
                <ion-label class="ion-padding-top input"></ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.job.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_job" @click="openPopover($event, 'อาชีพ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;อาชีพ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" cancelText="ยกเลิก"
              interface="action-sheet" placeholder="กรุณาระบุอาชีพ" v-model="vv.job.$model">
              <ion-select-option value="a">รับราชการ</ion-select-option>
              <ion-select-option value="b">รับจ้างทั่วไป</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item color="tertiary" lines="full" button routerLink="/form-input-tel">
            <ion-label>
              <ion-icon v-if="c_error" @click="openPopover($event, 'เบอร์โทรศัพท์')" name="alert-circle-outline"
                style="color: red"></ion-icon>
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue"></ion-icon>
              <b>&nbsp;เบอร์โทรศัพท์&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text color="medium">
                <ion-label class="ion-padding-top input"></ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary" lines="full">
            <ion-label>
              <b>อายุผู้กรอก:</b>
            </ion-label>
            <br>
            <ion-range min="18" max="60" value="18" pin="true" ticks="true" snaps="true"></ion-range>
          </ion-item>

          <ion-item color="tertiary" lines="full">
            <ion-checkbox mode="md" color="primary" slot="start"></ion-checkbox>
            <ion-label>
              <b>ฉันได้อ่านและยอมรับ</b>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary" lines="full">
            <ion-checkbox mode="md" color="primary" slot="start"></ion-checkbox>
            <ion-label>
              <b>ฉันยอมรับโปรโมชั่น</b>
            </ion-label>
          </ion-item>

        </ion-list>
        <ion-button color="danger" class="ion-no-margin" id="footer" expand="full" type="submit"
          >ตกลง</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonList,
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  popoverController,
  alertController,
  toastController,
  IonDatetime,
  IonAccordionGroup,
  IonAccordion,
  IonNote,
  IonButton,
  IonText,
  IonIcon,
  IonRange
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import moment from "moment";

export default defineComponent({
  name: "HomePage",
  components: {
    IonList,
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonAccordionGroup,
    IonAccordion,
    IonNote,
    IonButton,
    IonText,
    IonIcon,
    IonRange
  },
  setup() {
    const c_prefix = ref(false);
    const c_surname = ref(false);
    const c_lastname = ref(false);
    const c_dob = ref(false);
    const c_peopleId = ref(false);
    const c_peopleIdBack = ref(false);
    const c_job = ref(false);
    const c_error = ref(false);

    const data_form = reactive({
      prefix: "",
      surname: "",
      lastname: "",
      dob: "",
      peopleId: "",
      peopleIdBack: "",
      job: "",
    });

    const rules = {
      prefix: { required },
      surname: { required },
      lastname: { required },
      dob: { required },
      peopleId: { required },
      peopleIdBack: { required },
      job: { required },
    };

    const vv = useVuelidate(rules, data_form);

    const successToast = async () => {
      const toast = await toastController.create({
        icon: require("../assets/icon/checkmark-circle-outline.svg"),
        message: "ข้อมูลถูกต้อง",
        duration: 1500,
        position: "top",
        mode: "ios",
      });
      return toast.present();
    };

    const onSubmit = () => {
      vv.value.$touch();
      if (vv.value.$invalid) {
        vv.value.prefix.$invalid
          ? (c_prefix.value = true)
          : (c_prefix.value = false);
        vv.value.surname.$invalid
          ? (c_surname.value = true)
          : (c_surname.value = false);
        vv.value.lastname.$invalid
          ? (c_lastname.value = true)
          : (c_lastname.value = false);
        vv.value.dob.$invalid
          ? (c_dob.value = true)
          : (c_dob.value = false);
        vv.value.peopleId.$invalid
          ? (c_peopleId.value = true)
          : (c_peopleId.value = false);
        vv.value.peopleIdBack.$invalid
          ? (c_peopleIdBack.value = true)
          : (c_peopleIdBack.value = false);
        vv.value.job.$invalid
          ? (c_job.value = true)
          : (c_job.value = false);
        c_error.value = true;
      } else {
        successToast();
      }
    };
    return {
      c_error,
      c_prefix,
      c_surname,
      c_lastname,
      c_dob,
      c_peopleId,
      c_peopleIdBack,
      c_job,
      vv,
      onSubmit,
    };
  },
  methods: {
    formatDate1(event: any) {
      this.vv.dob.$model = moment(event.target.value).format("DD/MM/YYYY");
    },
    async openPopover(ev: any, message: string) {
      const popover = await popoverController.create({
        component: Popover,
        componentProps: { text: message },
        event: ev,
        cssClass: "popover-popover",
        mode: "ios",
      });
      await popover.present();
    },
    async errorAlert(text: string) {
      const alert = await alertController.create({
        cssClass: "error-alert",
        header: "เกิดข้อผิดพลาด",
        message: text,
        buttons: ["ตกลง"],
        mode: "ios",
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
  },
});
</script>

<style>
ion-range::part(tick) {
  background: #a2d2ff;
}

ion-range::part(tick-active) {
  background: #bde0fe;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #FF0000;
  color: #fff;

  border-radius: 50%;
  transform: scale(1.01);

  top: -20px;

  min-width: 28px;
  height: 28px;
  transition: transform 120ms ease, background 120ms ease;
}

ion-range::part(pin)::before {
  content: none;
}

ion-range::part(knob) {
  background: #FF0000;
}

ion-range::part(bar) {
  background: #a2d2ff;
}

ion-range::par(bar-active) {
  background: #bde0fe;
}
.popover-popover{
  background-color:#00000080 ;
}
</style>