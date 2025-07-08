import { defineStore } from 'pinia'
import { sidebarMenus } from './sidebarMenu'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: sidebarMenus,
    selectedMenuId: null
  }),
  getters: {
    activeMenu(state) {
      return state.menus.find(menu => menu.id === state.selectedMenuId)
    },
    activeSubMenus(state) {
      const menu = state.menus.find(menu => menu.id === state.selectedMenuId)
      return menu?.children || []
    }
  },
  actions: {
    selectMenu(id) {
      this.selectedMenuId = id
    },
    resetMenu() {
      this.selectedMenuId = null
    }
  }
})
