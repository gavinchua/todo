<template>
  <div class="home">
    <Todo />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  name: 'Home',
  components: {
    Todo
  }
};
</script>
