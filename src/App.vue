/* eslint-disable eol-last */
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Harry Potter Movies
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router to="/CreateMovie" class="info">Add New Movie</v-btn>
    </v-toolbar>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>\n
