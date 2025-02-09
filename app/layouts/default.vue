<template>
  <main class="main-content">
    <NuxtPage />
  </main>
</template>

<style scoped>
.main-content {
  padding: var(--page-gutter);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: var(--space-xl);
}
</style>
