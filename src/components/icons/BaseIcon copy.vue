<template>
  <SvgIcon
    v-if="iconPath"
    type="mdi"
    :path="iconPath"
    :style="{ width: size, height: size, color }"
    :title="title"
  />
</template>

<script setup>
import { inject, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: '24px' },
  color: { type: String, default: 'inherit' },
  title: { type: String, default: '' }
});

const mdiPaths = inject('mdiPaths');

const iconPath = computed(() => mdiPaths?.[props.name]);
</script>
