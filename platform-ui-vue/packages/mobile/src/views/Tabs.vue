<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar>
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="triangle" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="discover" href="/tabs/discover">
                    <ion-icon :icon="ellipse" />
                    <ion-label>Discover</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="me" href="/tabs/me">
                    <ion-icon :icon="square" />
                    <ion-label>Me</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
