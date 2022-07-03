<template>
  <v-card class="card">
    <div v-if="supertitle || slots.supertitle" class="supertitle">
      <slot name="supertitle" />
      {{ supertitle }}
    </div>
    <div v-if="title || slots.title" class="title">
      <slot name="title" />
      {{ title }}
    </div>
    <div v-if="subtitle || slots.subtitle" class="subtitle">
      <slot name="subtitle" />
      {{ subtitle }}
    </div>
    <div v-if="slots.default" class="content">
      <slot />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  supertitle: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
})

const slots = useSlots()

// const emit = defineEmits({});
</script>

<style lang="scss" scoped>
.card {
    background: color.adjust($color-secondary, $alpha: -0.95);
    box-shadow: unset;
    border-radius: $border-radius-root;
    padding: 1em 1.5em;
    min-height: unset;
    color: $color-text;
    .supertitle {
        font-size: 0.9em;
        opacity: 0.6;
    }
    .title {
        font-size: 1.5em;
        font-weight: 500;
    }
    .subtitle {
        font-size: 1em;
            font-weight: 400;
    }
    .content {

    }
}
</style>
