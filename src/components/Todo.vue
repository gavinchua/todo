<template>
  <div class="flex todo">
    <div class="w-1/2 px-4 py-2 mx-1 border border-white border-solid">
      <h3 class="text-base md:text-lg">
        Todo
      </h3>
      <draggable
        class="text-xs list-group md:text-base"
        :list="list1"
        group="people"
        @change="commitMyListTodo"
      >
        <div
          v-for="(element, index) in list1"
          :key="element.name"
          class="cursor-move list-group-item"
        >
          {{ index + 1 }}. {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="w-1/2 px-4 py-2 mx-1 border border-white border-solid">
      <h3 class="text-base md:text-lg">
        Done
      </h3>
      <draggable
        class="text-xs list-group md:text-base"
        :list="list2"
        group="people"
      >
        <div
          v-for="(element, index) in list2"
          :key="element.name"
          class="cursor-move list-group-item"
        >
          {{ index + 1 }}. {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'Todo',
  components: {
    draggable
  },
  computed: {
    ...mapGetters({
      list1: 'appData/getMyListTodo',
      list2: 'appData/getMyListDone'
    })
  },
  methods: {
    commitMyListTodo(evt) {
      if (evt) {
        this.$store.dispatch('appData/updateListItem');
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.todo .list-group
  min-height 10rem
</style>
