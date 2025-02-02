<template>
  <main class="main-content">
    <router-view />
  </main>
</template>

<style scoped>
.main-content {
  padding: var(--page-gutter);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
}
</style>
