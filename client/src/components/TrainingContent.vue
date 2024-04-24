<template>
  <div class="content">
    <div class="table">
      <Calendar />
      <Schedule />
    </div>
    <Education></Education>
  </div>
</template>

<script setup>
import Calendar from '@/components/CalendarComponent.vue'
import Schedule from '@/components/ScheduleComponent.vue'
import Education from '@/components/EducationComponent.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;
.content {
  background-color: rgb(237, 237, 237);
  padding: 30px;
  border-radius: 30px;

  .dark & {
    background-color: abs.$almost-black;
  }

  .table {
    display: flex;
    gap: 20px;
    justify-content: space-between;

    @include abs.breakpoint('tablet') {
      flex-direction: column;
      align-items: center;
    }

    @include abs.breakpoint('tablet-sm') {
      align-items: start;
      flex-direction: row;
    }

    @include abs.breakpoint('tablet-xs') {
      align-items: center;
      flex-direction: column;
    }

    @include abs.breakpoint('tablet-md') {
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
