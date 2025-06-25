import { defineStore} from 'pinia'
import { sidebarMenus } from './sidebarMenu'

export const useMenuStore = defineStore('sidebar',{
 state : () => ({
   menus : sidebarMenus,
   selectedMenuId : null
 }),
   getters: {
     activeMenu(state){
       return state.menus.find(menu => menu.id === state.selectedMenuId)
     }
   },
   actions:{
     selectMenu(id){
       this.selectedMenuId = id
     },
     resetMenu(id){
       this.selectedMenuId = null
     }
   }
})