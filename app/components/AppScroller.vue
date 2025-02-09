<template>
  <div class="app-scroller">
    <div class="start">
      <slot name="start" />
    </div>
    <slot />
    <div class="end">
      <slot name="end" />
    </div>
  </div>
</template>

<style scoped>
.app-scroller {
  --default-app-scroller-padding: 1em;
  --default-app-scroller-height: 33em;

  min-height: 1em;
  height: var(--app-scroller-height, var(--default-app-scroller-height));
  width: 100%;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  color-scheme: dark;
  gap: 1em;
  padding: var(--app-scroller-padding, var(--default-app-scroller-padding));

  .start {
    position: sticky;
    inset-block-start: calc(var(--app-scroller-padding, var(--default-app-scroller-padding)) * -1);
    z-index: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, var(--app-color-background) 100%);
    margin: calc(var(--app-scroller-padding, var(--default-app-scroller-padding)) * -1);
    padding: var(--app-scroller-padding, var(--default-app-scroller-padding));
  }

  .end {
    position: sticky;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--app-color-background) 100%);
    inset-block-end: calc(var(--app-scroller-padding, var(--default-app-scroller-padding)) * -1 - 1px);
    min-height: var(--app-scroller-padding, var(--default-app-scroller-padding));
    z-index: 1;
  }
}
</style>
