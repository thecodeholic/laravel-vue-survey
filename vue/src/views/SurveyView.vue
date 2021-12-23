<template>
  <PageComponent :title="survey.title">
    <pre>{{ survey }}</pre>
  </PageComponent>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import store from "../store";
import PageComponent from "../components/PageComponent.vue";

const router = useRouter();
const route = useRoute();

const survey = computed(() =>
  store.state.surveys.find((s) => s.id === parseInt(route.params.id))
);
</script>

<style></style>
