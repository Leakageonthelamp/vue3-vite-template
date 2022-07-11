import { generateFakeData, Item } from '@/models/item.model'
import { defineStore } from 'pinia'

export type RootState = {
  items: Item[]
}

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    items: [],
  } as RootState),

  actions: {
    setNewItems(item: Item) {
      if(!item) return
      this.items.push(item)
    },

    updateItem(id: string, payload: Item) {
      if(!id || !payload) return
      const index = this.items.findIndex(item => item.id === id)

      if (index !== -1){
        this.items[index] = generateFakeData()
      }
    },

    deleteItem(id: string) {
      const index = this.items.findIndex(item => item.id === id)
      if(index !== -1) {
        this.items.splice(index, 1)
      }
    }
  }
})
