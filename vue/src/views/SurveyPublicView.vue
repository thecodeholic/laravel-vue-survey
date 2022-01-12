<template>
  <div class="py-5 px-8">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <form @submit.prevent="submitSurvey" v-else>
      <div class="grid grid-cols-4">
        <div class="mr-4">
          <img :src="survey.image_url" alt="" />
        </div>
        <div class="col-span-3">
          <h1 class="text-3xl">{{ survey.title }}</h1>
        </div>
      </div>
      <div v-for="(question, ind) of survey.questions" :key="question.id">
        <QuestionViewer v-model="questions[question.id]" :question="question" :index="ind" />
      </div>

      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import QuestionViewer from "../components/viewer/QuestionViewer.vue";
const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.currentSurvey.loading);
const survey = computed(() => store.state.currentSurvey.data);

const questions = ref({});

store.dispatch("getSurveyBySlug", route.params.slug);

function submitSurvey() {
  console.log(JSON.stringify(questions.value, undefined, 2));
}
</script>

<style></style>
