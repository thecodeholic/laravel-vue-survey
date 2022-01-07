<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add new Survey
        </router-link>
      </div>
    </template>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <SurveyListItem
        v-for="survey in surveys"
        :key="survey.id"
        :survey="survey"
        @delete="deleteSurvey"
      />
    </div>
  </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import { useRouter } from "vue-router";
import PageComponent from "../components/PageComponent.vue";
import SurveyListItem from "../components/SurveyListItem.vue";

const router = useRouter();

const surveys = computed(() => store.state.surveys);

store.dispatch("getSurveys");

function deleteSurvey(survey) {
  if (
    confirm(
      `Are you sure you want to delete this survey? Operation can't be undone!!`
    )
  ) {
    store.dispatch("deleteSurvey", survey.id);
  }
}
</script>
