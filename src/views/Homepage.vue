<template>
  <section class="homepage-view">
    <div class="header-title">hooks | store | api</div>
    <button class="btn" @click="addMockItems">Add Items</button>
    <div class="hook-section">
      {{ isLoading }} |
      <button class="btn" @click="toggleIsLoading">Toggle</button>
    </div>
    <div class="store-section">
      <div v-for="(item, index) in items" :key="index" class="item">
        <div>{{ item.id }} | {{ item.name }} | {{ item.description }}</div>
        <button class="btn" @click="deleteItem(item.id)">Remove</button>
        <button class="ml-2 btn" @click="updateItem(item.id)">Update</button>
      </div>
    </div>
    <div class="api-section">
      <div v-for="(data, index) in dataArray" :key="index">
        <code>{{ data }}</code>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { generateFakeData, Item } from '@/models/item.model'
import { useMainStore } from '@/store'
import useIsLoading from '@/hooks/use-isloading'
import testService from '@/api/test.service'

export default defineComponent({
  setup() {
    const items = ref<Item[]>([])
    const mainStore = useMainStore()

    const dataArray = ref([])

    onMounted(() => {
      items.value = mainStore.items
      fetchMockData()
    })

    // Api Call
    const fetchMockData = async () => {
      const result = await testService.getMockData()
      dataArray.value = result.data
    }

    // Store Call
    const addMockItems = () => {
      mainStore.setNewItems(generateFakeData())
    }
    const deleteItem = (id: string) => {
      mainStore.deleteItem(id)
    }
    const updateItem = (id: string) => {
      mainStore.updateItem(id, generateFakeData())
    }

    const { isLoading, toggleIsLoading } = useIsLoading()

    return {
      items,
      addMockItems,
      deleteItem,
      updateItem,
      dataArray,
      isLoading,
      toggleIsLoading,
    }
  },
})
</script>

<style lang="scss" scoped>
.homepage-view {
  @apply container mx-auto px-4 mt-10;

  .hook-section {
    @apply my-4;
  }

  .store-section {
    @apply my-6 flex flex-col gap-4;
    .item {
      @apply bg-gray-300 p-2 rounded-lg w-fit;
    }
  }

  .api-section {
    code {
      @apply bg-gray-300 p-1.5 text-xs rounded-lg;
    }
  }
}
</style>
