<template>
    <div>
        <h2 class="text-left text-5xl">{{title}}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'PageTitleDesktop',
});
</script>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
})
</script>