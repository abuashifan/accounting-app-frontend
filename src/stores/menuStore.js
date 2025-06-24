import { defineStore } from 'pinia';

export const useMenuStore = defineStore ('menu', {
  //sate : Data yang disimpan
  state:()=>({
    items:[
      {title : 'Dashboard'},
      {title : 'Penjualan'},
      {title : 'Pembelian'},
      {title : 'Items'}],
      isSidebarCollapsed:false
  }),
  // Getters : computed properties untuk state
  Getters : {
    visibleItems : (state) => state.Items.filter(item => !item.hidden),
  },
  //Action : untuk memodifikasi state
  actions : {
  },
})