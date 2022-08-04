<template>
  <ion-page>
    <ion-content mode="ios">
      <form @submit.prevent="onSubmit" novalidate>
        <ion-list lines="none" class="ion-margin-bottom">
          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.prefix.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_prefix" @click="errorAlert('กรุณาระบุคำนำหน้าชื่อ', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
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
              <ion-icon v-else-if="c_surname" @click="errorAlert('กรุณาระบุชื่อให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
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
              <ion-icon v-else-if="c_lastname" @click="errorAlert('กรุณาระบุนามสกุลให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
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
              <ion-icon v-if="vv.gender.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_gender" @click="errorAlert('กรุณาระบุเพศให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เพศ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-radio-group mode="ios" color="tertiary" v-model="vv.gender.$model">
            <ion-row>
              <ion-col class="ion-no-padding">
                <ion-item lines="full" color="tertiary">
                  <ion-label>
                    <h3><b>ชาย</b></h3>
                  </ion-label>
                  <ion-radio slot="start" value="ชาย"></ion-radio>
                </ion-item>
              </ion-col>
              <ion-col class="ion-no-padding">
                <ion-item lines="full" color="tertiary">
                  <ion-label>
                    <h3><b>หญิง</b></h3>
                  </ion-label>
                  <ion-radio slot="start" value="หญิง"></ion-radio>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-radio-group>

          <ion-item button color="tertiary" id="open-date-input" lines="full">
            <ion-label style="font-size: 16px">
              <ion-icon v-if="vv.dob.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_dob" @click="errorAlert('กรุณาระบุวันเกิดให้ถูกต้อง', 'ตกลง')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              วันเกิด&nbsp;<ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-note v-if="!vv.dob.$model" slot="end">วัน/เดือน/ปี</ion-note>
            <ion-note v-else slot="end">{{ vv.dob.$model }}</ion-note>
          </ion-item>

          <ion-popover trigger="open-date-input" mode="ios" size="cover" :arrow="false" id="popover-bottom"
            :show-backdrop="true">
            <ion-datetime style="background: white" locale="th-TH" @ionChange="formatDate1($event)"
              display-format="YYYY-MM-DD"></ion-datetime>
          </ion-popover>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.peopleId.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_peopleId" @click="errorAlert('กรุณาระบุเลขบัตร ปชช.ให้ถูกต้อง', 'ตกลง')"
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
              <ion-icon v-else-if="c_peopleIdBack" @click="errorAlert('กรุณาระบุเลขหลังบัตร ปชช.ให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เลขหลังบัตร ปชช.&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="AB1234567890" v-model="vv.peopleIdBack.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary" lines="full" button @click="errorToGo('fix-address')">
            <ion-label>
              <ion-icon v-if="vv.fixAddress.$model && !c_fix" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_fix" name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;ที่อยู่ตามบัตรประชาชน&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text v-if="vv.fixAddress.$model" color="medium">
                <ion-label class="input fixedLabel">{{ vv.fixAddress.$model }}
                </ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary" lines="full" button @click="errorToGo('current-address')">
            <ion-label>
              <ion-icon v-if="vv.currentAddress.$model && !c_current" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_current" name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;ที่อยู่ปัจจุบัน&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text v-if="vv.currentAddress.$model" color="medium">
                <ion-label class="input fixedLabel">{{ vv.currentAddress.$model }}
                </ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.job.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_job" @click="errorAlert('กรุณาระบุอาชีพให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;อาชีพ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" cancelText="ยกเลิก"
              interface="action-sheet" placeholder="กรุณาระบุคำนำหน้าชื่อ" v-model="vv.job.$model">
              <ion-select-option value="รับราชการ">รับราชการ</ion-select-option>
              <ion-select-option value="รับจ้างทั่วไป">รับจ้างทั่วไป</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item color="tertiary" lines="full" button @click="errorToGo('phone')">
            <ion-label>
              <ion-icon v-if="vv.phoneState.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_phone" name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เบอร์โทรศัพท์&nbsp;</b>
              <ion-text color="danger">*</ion-text>
              <ion-text v-if="vv.phoneState.$model" color="medium">
                <ion-label class="input fixedLabel">{{ vv.phoneState.$model }}
                </ion-label>
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.age.$model >= 18" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_age" @click="errorAlert('กรุณาระบุอายุให้ถูกต้อง', 'ตกลง')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;อายุผู้กรอก&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-range mode="md" :min="0" :max="60" :pin="true" :ticks="true" :snaps="true"
              v-model.number="vv.age.$model">
            </ion-range>
          </ion-item>

          <ion-item color="tertiary" lines="full">
            <ion-checkbox mode="md" color="primary" slot="start" v-model="vv.checkPolicy.$model"></ion-checkbox>
            <ion-label>
              <b>ฉันได้อ่านและยอมรับ</b>
            </ion-label>
          </ion-item>

          <ion-item color="tertiary" lines="full">
            <ion-checkbox mode="md" color="primary" slot="start" v-model="vv.checkPromo.$model"></ion-checkbox>
            <ion-label>
              <b>ฉันยอมรับโปรโมชั่น</b>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-button color="danger" class="ion-no-margin" id="footer" expand="full" type="submit">ตกลง</ion-button>
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
  alertController,
  IonDatetime,
  IonPopover,
  IonNote,
  IonButton,
  IonText,
  IonIcon,
  IonRange,
  IonRow,
  IonCol,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  modalController,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minValue, sameAs } from "@vuelidate/validators";
import Modal from "@/components/Modal.vue";
import moment from "moment";
import { currentAddressState, fixAddressState, phoneState } from "@/store";
import { useRouter } from "vue-router";
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
    IonNote,
    IonButton,
    IonText,
    IonIcon,
    IonRange,
    IonRow,
    IonCol,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
    IonPopover,
  },
  setup() {
    const c_prefix = ref(false);
    const c_surname = ref(false);
    const c_lastname = ref(false);
    const c_gender = ref(false);
    const c_dob = ref(false);
    const c_peopleId = ref(false);
    const c_peopleIdBack = ref(false);
    const c_job = ref(false);
    const c_age = ref(false);
    const c_fix = ref(false);
    const c_current = ref(false);
    const c_phone = ref(false);
    const c_error = ref(false);

    const hideDialog = ref(false);

    const { currentAddress } = currentAddressState();
    const { fixAddress } = fixAddressState();
    const { phone } = phoneState();
    const router = useRouter();

    const data_form = reactive({
      prefix: "",
      surname: "",
      lastname: "",
      gender: "",
      dob: "",
      peopleId: "",
      peopleIdBack: "",
      job: "",
      age: 0,
      checkPromo: false,
      checkPolicy: false,
      currentAddress: currentAddress,
      fixAddress: fixAddress,
      phoneState: phone,
    });

    const rules = {
      prefix: { required },
      surname: { required },
      lastname: { required },
      gender: { required },
      dob: { required },
      peopleId: { required },
      peopleIdBack: { required },
      job: { required },
      age: { minValue: minValue(18) },
      checkPromo: { sameAs: sameAs(true) },
      checkPolicy: { sameAs: sameAs(true) },
      currentAddress: { required },
      fixAddress: { required },
      phoneState: { required },
    };

    const vv = useVuelidate(rules, data_form);

    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal,
        componentProps: { payload: vv.value },
        mode: "ios",
      });
      modal.present();
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
        vv.value.gender.$invalid
          ? (c_gender.value = true)
          : (c_gender.value = false);
        vv.value.dob.$invalid ? (c_dob.value = true) : (c_dob.value = false);
        vv.value.peopleId.$invalid
          ? (c_peopleId.value = true)
          : (c_peopleId.value = false);
        vv.value.peopleIdBack.$invalid
          ? (c_peopleIdBack.value = true)
          : (c_peopleIdBack.value = false);
        vv.value.job.$invalid ? (c_job.value = true) : (c_job.value = false);
        vv.value.age.$invalid ? (c_age.value = true) : (c_age.value = false);
        vv.value.currentAddress.$invalid 
          ? (c_current.value = true)
          : vv.value.currentAddress.$model.split(" ")[3] === "ขอนแก่น"? (c_current.value = false) : (c_current.value = true);
        vv.value.fixAddress.$invalid 
          ? (c_fix.value = true)
          :  vv.value.fixAddress.$model.split(" ")[3] === "ขอนแก่น"? (c_fix.value = false) : (c_fix.value = true);
        vv.value.phoneState.$invalid
          ? (c_phone.value = true)
          : (c_phone.value = false);
        c_error.value = true;
        hideDialog.value = false;
      } else {
        openModal();
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
      c_gender,
      c_age,
      c_fix,
      c_current,
      c_phone,
      vv,
      router,
      onSubmit,
      currentAddress,
      fixAddress,
      hideDialog
    };
  },
  updated(){
    let province = this.currentAddress.split(" ")[3];
    let fixProvince = this.fixAddress.split(" ")[3];

    fixProvince !== "ขอนแก่น" && this.fixAddress !== "" ? this.c_fix = true : this.c_fix = false;
    province !== "ขอนแก่น" && this.currentAddress !== "" ? this.c_current = true : this.c_current = false
  },
  methods: {
    formatDate1(event: any) {
      this.vv.dob.$model = moment(event.target.value).format("DD/MM/YYYY");
    },
    errorToGo(label: string) {
      if (label == "current-address") {
        let province = this.currentAddress.split(" ")[3];
        if (this.vv.currentAddress.$model !== "" && province !== "ขอนแก่น") {
          this.errorAlert('อยู่นอกพื่นที่ให้บริการ', "ไปยังหน้ากรอกข้อมูล").then(() => {
            this.router.push("/current-address-dialog");
          })
        }
        else if (this.c_current && this.vv.currentAddress.$model === "") {
          this.errorAlert('กรุณากรอกที่อยู่ปัจจุบัน', "ไปยังหน้ากรอกข้อมูล").then(() => {
            this.router.push("/current-address-dialog");
          })
        } else {
          this.router.push("/current-address-dialog");
        }
      } else if (label == "fix-address") {
        let fixProvince = this.fixAddress.split(" ")[3];
        if (this.vv.fixAddress.$model !== "" && fixProvince !== "ขอนแก่น") {
            this.router.push("/fix-address-dialog");
        }
        else if (this.c_fix && this.vv.fixAddress.$model === "") {
          this.errorAlert('กรุณากรอกที่อยู่ตามบัตรประชาชน', "ไปยังหน้ากรอกข้อมูล").then(() => {
            this.router.push("/fix-address-dialog");
          })
        } else {
          this.router.push("/fix-address-dialog");
        }
      } else if (label == "phone") {
        if (this.c_fix && this.vv.fixAddress.$model === "") {
          this.errorAlert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง', "ไปยังหน้ากรอกข้อมูล").then(() => {
            this.router.push("/telephone-dialog");
          })
        } else {
          this.router.push("/telephone-dialog");
        }
      } else {
        this.router.push("/error");
      }


    },
    async errorAlert(text: string, btn: string) {
      if (this.hideDialog == false) {
        const alert = await alertController.create({
          cssClass: "error-alert",
          header: "เกิดข้อผิดพลาด",
          message: text,
          buttons: [btn],
          mode: "ios",
          inputs: [
            {
              label: 'ไม้ต้องแสดงอีก',
              type: 'checkbox',
              value: true
            },
          ]
        });
        await alert.present();
        const data = await alert.onDidDismiss();
        data.data.values[0] ? this.hideDialog = true : this.hideDialog = false;
      }

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

  background: #ff0000;
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
  background: #ff0000;
}

ion-range::part(bar) {
  background: #a2d2ff;
}

ion-range::par(bar-active) {
  background: #bde0fe;
}

.popover-popover {
  background-color: #00000080;
}

ion-popover#popover-bottom::part(content) {
  top: unset !important;
  align-items: center;
  left: 0 !important;
  bottom: 0;
  width: 100vw;
  border-radius: 0;
  --background: white;
}

ion-popover.popover-bottom ion-datetime {
  margin-left: auto;
  margin-right: auto;
  --background: white;
}

.sc-ion-label-ios-h sc-ion-label-ios-s ios in-item-color {
  padding-right: 0;
}

.div-item-inner {
  --inner-padding-end: 0;
}

ion-col.my-thin-col {
  flex: 0 0 4px;
  padding: 0;
  margin-right: 9px;
}
</style>