<template>
  <div>
    <label :for="id" class="sr-only">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="emits('update:modelValue', $event.target.value)"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :class="{ ...computedInputClass, 'border-red-500': errors[name], 'z-10': errors[email] }"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  errors: Object,
  name: String,
  id: String,
  label: String,
  placeholder: String,
  modelValue: String,
  inputClass: [String, Array, Object],
});

const emits = defineEmits(["update:modelValue"]);

const id = computed(
  () => props.id || "id-" + Math.floor(Math.random() * 100000000)
);
const computedInputClass = computed(() => {
  if (typeof props.inputClass === 'string') {
    return {
      [props.inputClass]: true
    }
  } else if (typeof props.inputClass === 'object' && props.inputClass.length !== undefined) {
    return props.inputClass.reduce((accum, val) => {
      accum[val] = true;
      return accum;
    }, {})
  }

  return props.inputClass;
})
</script>

<style></style>
