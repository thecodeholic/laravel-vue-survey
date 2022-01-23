<template>
  <a v-if="href" :href="href" :class="classes">
    <slot></slot>
  </a>
  <router-link v-else-if="props.to" :to="props.to" :class="classes">
    <slot></slot>
  </router-link>
  <button v-else :class="classes">
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  // indigo, 'red'
  color: {
    type: String,
    default: "indigo",
  },
  to: [Object, String],
  href: String,
  link: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
});

let classes = ref([
  "flex",
  "text-sm",
  "border",
  "border-2",
  "border-transparent",
]);

if (props.link) {
  classes.value = [
    ...classes.value,
    "transition-colors",
  ];

  switch (props.color) {
    case "indigo":
      classes.value = [
        ...classes.value,
        "text-indigo-500",
        "focus:border-indigo-500",
      ];
      break;
    case "red":
      classes.value = [...classes.value, "text-red-500", "focus:border-red-500"];
  }

} else {
  classes.value = [
    ...classes.value,
    "text-white",
    "focus:ring-2",
    "focus:ring-offset-2",
  ];

  switch (props.color) {
    case "indigo":
      classes.value = [
        ...classes.value,
        "bg-indigo-600",
        "hover:bg-indigo-700",
        "focus:ring-indigo-500",
      ];
      break;
    case "red":
      classes.value = [
        ...classes.value,
        "bg-red-600",
        "hover:bg-red-700",
        "focus:ring-red-500",
      ];
      break;
    case "green":
      classes.value = [
        ...classes.value,
        "bg-emerald-500",
        "hover:bg-emerald-600",
        "focus:ring-emerald-400",
      ];
      break;

  }
}

if (props.circle) {
  classes.value = [
    ...classes.value,
    "h-8",
    "w-8",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-sm",
  ];
} else {
  classes.value = [
    ...classes.value,
    "p-0",
    "py-2",
    "px-4",
    "rounded-md"
  ];
}
</script>

<style></style>
