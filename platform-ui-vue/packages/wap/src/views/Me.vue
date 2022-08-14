<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Me</ion-title>
                </ion-toolbar>
            </ion-header>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
