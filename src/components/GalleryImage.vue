<template>
  <v-dialog v-model="isOpen">
    <template #activator="{ props }">
      <div class="photo-cnt">
        <img :src="src" class="photo" :alt="alt" v-bind="props">
      </div>
    </template>
    <v-card class="content rounded-xl">
      <v-img :src="src" class="photo-full" :lazy-src="lazySrc" :alt="alt" @click="setOpen(false)">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular indeterminate color="grey-lighten-4" />
          </div>
        </template>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  lazySrc: {
    type: String,
  },
  alt: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const [isOpen, setOpen] = useToggle(false)
</script>

<style lang="scss" scoped>
.photo {
    max-height: 25rem;
    cursor: pointer;
    transition: 0.2s;
    scale: 1;
    &:hover {
        opacity: 0.8;
        scale: 1.05;
    }
}
.photo-cnt {
    overflow: hidden;
    border-radius: 2em;
}
.photo-full {
    object-fit: contain;
    width: 100%;
    max-height: calc(100vh - 4rem);
    cursor: pointer;
    min-width: 5rem;
    min-height: 5rem;
    max-width: 100%;
}

.content {
    border-top: 1px solid rgba($color-text, 0.075);
    border-left: 1px solid rgba($color-text, 0.075);
    .window-state {
        gap: 3em;
        display: flex;
        flex-direction: column;
        padding: 3vw;
    }

    .actions {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
        gap: 1em;
        margin: 0.5rem;

        >* {
            margin: 0 !important;
        }
    }
}
</style>

<i18n locale="en">
{
  "HI": "Hello World"
}
</i18n>

<i18n locale="pl">
{
  "HI": "Witaj świecie"
}
</i18n>

<i18n locale="es">
{
  "HI": "Hola Mundo"
}
</i18n>
