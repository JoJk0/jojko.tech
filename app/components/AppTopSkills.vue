<template>
  <div class="icons">
    <div v-for="{ name, icon } of skills" :key="name" class="top-skill">
      <AppTopSkillIcon :icon="icon" />
      <AppChip class="chip">
        {{ name }}
      </AppChip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppIcon, AppChip } from 'jjk-ui';

const { data: skills } = useFetch('/api/top-skills')

// const emit = defineEmits({})
</script>

<style scoped>
.icons {
  display: grid;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  align-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--space-m) * 2) calc(var(--space-m) * 6);
  >&:first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  >&:nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
  >&:last-child {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  &:before {
    content: '';
    display: block;
    background: radial-gradient(ellipse at center, white 0%, rgba(0, 0, 0, 0) 50%, transparent 100%);
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    mix-blend-mode: overlay;
    translate: -10% -10%;
    scale: 3;
    width: 100%;
    height: 100%;
  }
}

.top-skill {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  aspect-ratio: 1;
  position: relative;
  rotate: 2deg;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    position: absolute;
    scale: 1.7 1.2;
    translate: 0 -2em;
    aspect-ratio: 1;
    opacity: .5;
  }

  &:nth-of-type(1):before {
    border-radius: 46% 54% 42% 58% / 30% 51% 49% 70%;
  }

  &:nth-of-type(2):before {
    border-radius: 66% 34% 42% 58% / 46% 51% 49% 54%;
  }

  &:nth-of-type(3):before {
    border-radius: 49% 51% 60% 40% / 64% 51% 49% 36%;
  }
}
.chip {
  z-index: 1;
}
</style>
