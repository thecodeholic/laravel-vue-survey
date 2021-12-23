import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: {
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      token: 123,
    },
    surveys: [
      {
        id: 1,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "draft",
        description: `Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.`,
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
      },
      {
        id: 2,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        description: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: "2021-12-21 17:00:00",
        updated_at: "2021-12-21 17:00:00",
        expire_date: "2021-12-31 00:00:00",
      },
      {
        id: 3,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        description: `A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: "2021-12-21 14:00:00",
        updated_at: "2021-12-21 14:00:00",
        expire_date: "2021-12-31 00:00:00",
      },
    ],
  },
  getters: {},
  actions: {},
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
    },
  },
  modules: {},
});

export default store;
