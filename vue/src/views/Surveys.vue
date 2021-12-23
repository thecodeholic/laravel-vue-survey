<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <PageComponent title="Surveys">
    <router-link
      v-for="survey in surveys"
      :key="survey.id"
      :to="{ name: 'SurveyView', params: { id: survey.id } }"
      class="
        block
        py-4
        px-6
        shadow-md
        bg-white
        mb-5
        rounded-md
        hover:bg-blue-50
        cursor-pointer
      "
    >
      <h4 class="text-lg font-bold">{{ survey.title }}</h4>
      <div v-html="survey.description"></div>
    </router-link>
  </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import PageComponent from "../components/PageComponent.vue";

const surveys = computed(() => store.state.surveys);
</script>
