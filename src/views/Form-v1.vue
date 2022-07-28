<template>
    <ion-page>
        <ion-content mode="ios">
            <form @submit.prevent="onSubmit" novalidate>
                <ion-list lines="none" class="ion-margin-bottom">
                    <ion-item color="tertiary"
                        :style="vv.surname.$model ? correctStyleTop : c_surname ? wongStyleTop : ''">
                        <ion-label v-on:click="vv.surname.$model ? '' : c_surname ? openPopover($event, 'ชื่อ') : ''">
                            <ion-text v-if="vv.surname.$model" slot="end" color="danger"></ion-text>
                            <ion-icon v-else-if="c_surname" color="danger" @click="openPopover($event, 'ชื่อ')" name="alert-circle-outline"></ion-icon>
                            <b>&nbsp;ชื่อ&nbsp;</b>
                            <ion-text color="danger">*</ion-text>
                        </ion-label>
                    </ion-item>
                    <ion-item color="tertiary" lines="full" style="margin-bottom: 0.5rem;"
                        :style="vv.surname.$model ? correctStyleBottom : c_surname ? wongStyleBottom : ''">
                        <ion-input type="text" :class="c_surname ? 'redinput' : ''"
                            :placeholder="c_surname3 ? 'กรุณาใส่ชื่อ' : 'ตัวอย่าง. อานนท์'" v-model="vv.surname.$model">
                        </ion-input>
                    </ion-item>

                    <ion-item color="tertiary">
                        <ion-label>
                            <ion-text v-if="vv.surname2.$model" slot="end" color="danger"></ion-text>
                            <ion-icon v-else-if="c_surname2" color="danger" @click="openPopover($event, 'ชื่อ')" name="alert-circle-outline"></ion-icon>
                            <b>&nbsp;ชื่อ&nbsp;</b>
                            <ion-text color="danger">*</ion-text>
                        </ion-label>
                    </ion-item>
                    <ion-item color="tertiary" lines="full"
                        :style="vv.surname2.$model ? correctunderline : c_surname2 ? wongunderline : ''"
                        style="margin-bottom: 0.5rem;">
                        <ion-input type="text" :class="c_surname2 ? 'redinput' : ''"
                            :placeholder="c_surname2 ? 'กรุณาใส่ชื่อ' : 'ตัวอย่าง. อานนท์'"
                            v-model="vv.surname2.$model">
                        </ion-input>
                    </ion-item>

                    <div :style="vv.surname3.$model ? correctshake : c_surname3 ? wongshake : ''">
                        <ion-item color="tertiary">
                            <ion-label>
                                <ion-text v-if="vv.surname3.$model" slot="end" color="danger"></ion-text>
                                <ion-icon v-else-if="c_surname3" color="danger" @click="openPopover($event, 'ชื่อ')" name="alert-circle-outline"></ion-icon>
                                <b>&nbsp;ชื่อ&nbsp;</b>
                                <ion-text color="danger">*</ion-text>
                            </ion-label>
                        </ion-item>
                        <ion-item color="tertiary" lines="full">
                            <ion-input type="text" :class="c_surname3 ? 'redinput' : ''"
                                :placeholder="c_surname3 ? 'กรุณาใส่ชื่อ' : 'ตัวอย่าง. อานนท์'"
                                v-model="vv.surname3.$model">
                            </ion-input>
                        </ion-item>
                    </div>
                </ion-list>
                <ion-button color="danger" class="ion-no-margin" id="footer" expand="full" type="submit">ตกลง
                </ion-button>
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
    IonInput,
    IonText,
    IonIcon,
    IonButton,
    modalController,
    popoverController,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required} from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import Modal from "../components/Modal.vue";

export default defineComponent({
    name: "HomePage",
    components: {
        IonList,
        IonPage,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonText,
        IonIcon,
        IonButton,
    },
    data() {
        return {
            correctStyleBottom: {
                "border-bottom": "1px solid cornflowerblue",
                "border-left": "1px solid cornflowerblue",
                "border-right": "1px solid cornflowerblue",
                "margin-bottom": "1px ",
            },
            wongStyleBottom: {
                "border-bottom": "1px solid red",
                "border-left": "1px solid red",
                "border-right": "1px solid red",
            },
            correctStyleTop: {
                "border-top": "1px solid cornflowerblue",
                "border-left": "1px solid cornflowerblue",
                "border-right": "1px solid cornflowerblue",
            },
            wongStyleTop: {
                "border-top": "1px solid red",
                "border-left": "1px solid red",
                "border-right": "1px solid red",
            },
            correctunderline: {
                "border-bottom": "2px solid cornflowerblue",
            },
            wongunderline: {
                "border-bottom": "2px solid red",
            },
            wongshake: {
                "animation": "shake 0.5s",
                "animation-iteration-count": "1",
                "border-top": "1px solid red",
                "border-bottom": "1px solid red",
                "border-left": "1px solid red",
                "border-right": "1px solid red",
            },
            correctshake: {
                "border-top": "1px solid cornflowerblue",
                "border-bottom": "1px solid cornflowerblue",
                "border-left": "1px solid cornflowerblue",
                "border-right": "1px solid cornflowerblue",
            }
        }
    },
    setup() {
        const c_prefix = ref(false);
        const c_surname = ref(false);
        const c_surname2 = ref(false);
        const c_surname3 = ref(false);
        const data_form = reactive({
            prefix: "",
            surname: "",
            surname2: "",
            surname3: "",
        });

        const rules = {
            prefix: { required },
            surname: { required },
            surname2: { required },
            surname3: { required },
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
                vv.value.surname2.$invalid
                    ? (c_surname2.value = true)
                    : (c_surname2.value = false);
                vv.value.surname3.$invalid
                    ? (c_surname3.value = true)
                    : (c_surname3.value = false);
                console.log("Jeesse");
            } else {
                console.log("Jeee");
                openModal();
            }
        };
        return {

            c_prefix,
            c_surname,
            c_surname2,
            c_surname3,
            vv,
            onSubmit,
        };
    },
    methods: {

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

.redinput {
    --placeholder-color: red;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }

    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
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