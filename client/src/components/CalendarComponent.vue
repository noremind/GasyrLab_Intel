<template>
    <VDatePicker
      class="myCalendar"
      color="purple"
      title-position="left"
      :attributes="combinedAttributes"
    />
</template>

<script setup>
import { ref, computed } from 'vue'

const dateNow = ref([
  {
    dates: new Date(),
    highlight: {
      color: 'purple',
      fillMode: 'light'
    }
  }
])

const todos = ref([
  {
    description: 'Занятие по Python. Тема: Циклы и условия',
    isComplete: false,
    dates: [new Date(2024, 3, 1), new Date(2024, 3, 10), new Date(2024, 3, 22)],
    color: 'red'
  },
  {
    description: 'Занятие по Python. Тема: Классы',
    isComplete: false,
    dates: [new Date(2024, 3, 12), new Date(2024, 3, 27)],
    color: 'green'
  },
  {
    description: 'Занятие по English. Тема: Irregular Vergs',
    isComplete: false,
    dates: [new Date(2024, 3, 4), new Date(2024, 3, 25)],
    color: 'blue'
  }
])

const attributes = computed(() => [
  ...todos.value.map((todo) => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      ...(todo.isComplete && { class: 'opacity-75' })
    },
    popover: {
      label: todo.description
    }
  }))
])

const combinedAttributes = computed(() => {
  return [...attributes.value, ...dateNow.value]
})
</script>

<style lang="scss" scoped>

</style>
