<template>
  <SvgIcon
    :path="iconPath"
    :size="size"
    :fill="color"
    class="base-icon"
    :style="{ '--icon-size': size + 'px', '--icon-color': color }"
  />

</template>

<script setup>
import { computed } from 'vue'
import { mdiPaths } from '@/components/icons/IconList.js'
import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '24'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const iconPath = computed(() => {
  return mdiPaths[props.icon] || ''
})
console.log('icon name:', props.icon)
console.log('iconPath:', iconPath.value)

</script>

<style lang="scss" scoped>
.base-icon {
  display: inline-block;
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  fill: var(--icon-color, currentColor);
}
</style>
