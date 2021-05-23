<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useClassName } from "../shared";
const prefix = useClassName("button-group");

const className = computed(() => [prefix.name]);
</script>
