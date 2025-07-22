<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="menu in menuStore.menus" :key="menu.id" @click="menuStore.selectMenu(menu.id)">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <baseIcon :name="menu.icon" size="32px" title="User" />
            <span class="ms-3">{{ menu.label }}</span>
          </a>
        </li>
        <div v-if="menuStore.activeSubMenus.length">
          <div v-for="submenu in menuStore.activeSubMenus" :key="submenu.id">
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </a>

            <span>{{ submenu.label }}</span>
          </div>
        </div>
      </ul>
    </div>
  </aside>
</template>
<script setup>
import { useMenuStore } from "@/stores/menuStore";
import baseIcon from "./icons/base-icon.vue";

const menuStore = useMenuStore();
</script>
