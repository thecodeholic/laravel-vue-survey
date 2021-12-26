<template>
  <PageComponent :title="surveyData.title">
    <div>
      <div>
        <div>
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <!-- Survey Fields -->
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <!-- Image -->
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="
                        flex
                        items-center
                        justify-center
                        h-12
                        w-12
                        rounded-full
                        overflow-hidden
                        bg-gray-100
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[80%] w-[80%] text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      class="
                        relative
                        overflow-hidden
                        ml-5
                        bg-white
                        py-2
                        px-3
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        text-sm
                        leading-4
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                      <input
                        type="file"
                        class="
                          absolute
                          left-0
                          top-0
                          right-0
                          bottom-0
                          opacity-0
                          cursor-pointer
                        "
                      />
                      Change
                    </button>
                  </div>
                </div>
                <!--/ Image -->

                <!-- Title -->
                <div>
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                    >Title</label
                  >
                  <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="surveyData.title"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <!--/ Title -->

                <!-- Description -->
                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      v-model="surveyData.description"
                      class="
                        shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500
                        mt-1
                        block
                        w-full
                        sm:text-sm
                        border border-gray-300
                        rounded-md
                      "
                      placeholder="Describe your survey"
                    />
                  </div>
                </div>
                <!-- Description -->

                <!-- Expire Date -->
                <div>
                  <label
                    for="expire_date"
                    class="block text-sm font-medium text-gray-700"
                    >Expire Date</label
                  >
                  <input
                    type="date"
                    name="expire_date"
                    id="expire_date"
                    v-model="surveyData.expire_date"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <!--/ Expire Date -->

                <!-- Status -->
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="status"
                      name="status"
                      type="checkbox"
                      v-model="surveyData.status"
                      class="
                        focus:ring-indigo-500
                        h-4
                        w-4
                        text-indigo-600
                        border-gray-300
                        rounded
                      "
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="status" class="font-medium text-gray-700"
                      >Active</label
                    >
                    <p class="text-gray-500">
                      Active survey and make it public
                    </p>
                  </div>
                </div>
                <!--/ Status -->
              </div>
              <!--/ Survey Fields -->

              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <h3
                  class="
                    text-2xl
                    font-semibold
                    flex
                    items-center
                    justify-between
                  "
                >
                  Questions

                  <!-- Add new question -->
                  <button
                    type="button"
                    @click="addQuestion()"
                    class="
                      flex
                      items-center
                      text-sm
                      py-1
                      px-4
                      rounded-sm
                      text-white
                      bg-gray-600
                      hover:bg-gray-700
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Add Question
                  </button>
                  <!--/ Add new question -->
                </h3>
                <div
                  v-if="!surveyData.questions.length"
                  class="text-center text-gray-600"
                >
                  You don't have any questions created
                </div>
                <div
                  v-for="(question, index) in surveyData.questions"
                  :key="question.id"
                >
                  <QuestionEditor
                    :question="question"
                    :index="index"
                    @addQuestion="addQuestion"
                    @deleteQuestion="deleteQuestion"
                  />
                </div>
              </div>

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import PageComponent from "../components/PageComponent.vue";
import QuestionEditor from "../components/editor/QuestionEditor.vue";

const route = useRoute();

const survey = computed(() =>
  store.state.surveys.find((s) => s.id === parseInt(route.params.id))
);

const surveyData = ref({
  ...survey.value,
  status: survey.value.status !== 'draft'
});


function addQuestion(index) {
  const newQuestion = {
    type: "text",
    question: "",
    description: null,
    data: {},
  };

  surveyData.value.questions.splice(index, 0, newQuestion);
}

function deleteQuestion(question) {
  surveyData.value.questions = surveyData.value.questions.filter(
    (q) => q !== question
  );
}
</script>

<style></style>
