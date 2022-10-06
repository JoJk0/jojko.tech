<template>
  <img :src="fontUrl" class="font" :alt="font.displayName" :class="{ mobile }">
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { getDownloadURL, getStorage, ref as getStorageRef } from '@firebase/storage'
import type { JJKProject } from '~/Data'
import { useFirebase } from '~/modules/firebase'

const props = defineProps({
  font: {
    type: Object as PropType<JJKProject['typography'] extends Array<infer U> ? U : never>,
    required: true,
  },
})

// const emit = defineEmits({})
const baseUrl = 'fonts'
const extension = 'svg'

const { mobile } = useDisplay()

const firebase = useFirebase()

const storage = getStorage(firebase)

const storageRef = getStorageRef(storage, `${baseUrl}/${props.font.name}.${extension}`)

const fontUrl = ref<string>();

(async () => {
  fontUrl.value = await getDownloadURL(storageRef)
})()
</script>

<style lang="scss" scoped>
    .font {
        filter: invert(1);
        height: 1em;
        font-size: 1.5em;
    }
    .font.mobile {
      font-size: 1em;
    }
</style>
