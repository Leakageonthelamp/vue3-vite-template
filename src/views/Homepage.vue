<template>
  <section class="homepage-view">
    <button @click="addMockItems">Add Items</button>
    <div class="store-section">
      <div v-for="(item, index) in items" :key="index" class="item">
        <div>{{ item.id }} | {{ item.name }} | {{ item.description }}</div>
        <button @click="deleteItem(item.id)">Remove</button>
        <button class="ml-2" @click="updateItem(item.id)">Update</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { generateFakeData, Item } from '@/models/item.model'
import { useMainStore } from '@/store'

export default defineComponent({
  setup() {
    const items = ref<Item[]>([])
    const mainStore = useMainStore()

    onMounted(() => {
      items.value = mainStore.items
    })

    const addMockItems = () => {
      mainStore.setNewItems(generateFakeData())
    }
    const deleteItem = (id: string) => {
      mainStore.deleteItem(id)
    }
    const updateItem = (id: string) => {
      mainStore.updateItem(id, generateFakeData())
    }

    return { items, addMockItems, deleteItem, updateItem }
  },
})
</script>

<style lang="scss" scoped>
.homepage-view {
  @apply container mx-auto px-4 mt-10;
  .store-section {
    @apply my-6 flex flex-col gap-4;
    .item {
      @apply bg-gray-300 p-2 rounded-lg w-fit;
    }
  }
}

button {
  @apply p-2 text-white rounded-lg bg-slate-500;
}
</style>
