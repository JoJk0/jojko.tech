<script setup lang="ts">
const { data } = await useFetch("/api/onload");
</script>

<template>
  <SectionHi />
  <SectionSkills />
  <SectionProjects />
  <SectionBento />
  <SectionContact />
  <SectionFooter />
  <!-- <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense> -->
  <!-- <InputEntry /> -->
</template>
