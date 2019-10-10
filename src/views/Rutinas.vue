<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Hombro y Pectoral</v-list-item-title>
        <v-list-item-subtitle>Instructor: Mosco</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      Semana: 1 - Día: 1 | Entrenamiento de Fuerza
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Iniciar
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Eliminar
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>