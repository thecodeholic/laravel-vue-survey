<template>
  <PageComponent title="Dashboard">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div v-else class="grid grid-cols-3 gap-5 text-gray-700">
      <!-- <pre>{{data}}</pre> -->
      <div class="row-span-2 bg-white">
        <SurveyListItem :survey="data.latestSurvey" />
      </div>
      <div class="bg-white shadow-md p-3 text-center flex flex-col">
        <h3 class="text-2xl font-semibold">Total Surveys</h3>
        <div class="text-8xl font-semibold flex-1 flex items-center justify-center">{{data.totalSurveys}}</div>
      </div>
      <div class="bg-white shadow-md p-3 row-span-2">
        <h3 class="text-2xl font-semibold mb-3">Latest Answers</h3>
        <a href="#" v-for="answer of data.latestAnswers" :key="answer.id" class="block p-2 hover:bg-gray-100/90 cursor-pointer :bg-gray-200">
          <div class="font-semibold">{{answer.survey.title}}</div>
          <small>Answer Made at: <i class="font-semibold">{{answer.end_date}}</i></small>
        </a>
      </div>
      <div class="bg-white shadow-md p-3 text-center flex flex-col">
        <h3 class="text-2xl font-semibold">Total Answers</h3>
        <div class="text-8xl font-semibold flex-1 flex items-center justify-center">{{data.totalAnswers}}</div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex'
import PageComponent from "../components/PageComponent.vue";
import SurveyListItem from '../components/SurveyListItem.vue';

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch('getDashboardData')

</script>

<style scoped></style>
