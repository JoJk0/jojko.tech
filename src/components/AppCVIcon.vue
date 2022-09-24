<template>
  <div class="cv-icon" :class="{ active }">
    <AppCard class="icon" link>
      <div class="flex">
        <div class="sheet" :class="{ blackAndWhite }">
          <div class="header" />
          <div class="content">
            <div class="side">
              <div class="mock-title" />
              <div class="mock-text" />
            </div>
            <div class="side">
              <div class="mock-title" />
              <div class="mock-text" />
            </div>
          </div>
        </div>
      </div>
    </AppCard>
    <div class="text" :class="{ active }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blackAndWhite: Boolean,
  active: Boolean,
})

// const emit = defineEmits({})
</script>

<style lang="scss" scoped>
.cv-icon {
        display: flex;
        flex-direction: column;
        gap: 1em;
        &.active {
            .icon {
                border: 2px solid white;
            }
        }
    }
.flex {
    display: flex;
    flex-direction: column;
    width: 40em;
    height: 30em;
    justify-content: flex-end;
    align-items: center;
}

.icon {
    width: 100%;
    height: calc(30em + 1em);
    font-size: 0.2rem;
    border-radius: 1.5rem;
    border: 2px solid rgba(255,255,255,0.1);
    transition: 0.2s;

    .sheet {
        background: white;
        border-top-left-radius: 3em;
        border-top-right-radius: 3em;
        width: 80%;
        height: 80%;
        padding: 1em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        &.blackAndWhite{
            .header {
                background: rgba(0,0,0,0.1);
            }
            .mock-title {
                background-color: black !important;
            }
            .mock-text {
                    background-color: rgba(0, 0, 0, 0.3) !important;
            }
        }

        .header {
            background: linear-gradient(150deg, rgba(0, 255, 206, 0.8) 0%, rgba(121, 126, 247, 0.8) 100%);
            height: 10em;

            border-radius: 2em;
        }
        .content {
            display: flex;
            gap: 2em;
            padding: 1em;
            .side {
                display: flex;
                flex-direction: column;
                gap: 1em;
                flex: 1;
                .mock-title{
                    width: 50%;
                    height: 1em;
                    background-color: #002022;
                    border-radius: 1em;
                }
                .mock-text {
                    width: 100%;
                    height: 1em;
                    background-color: rgba(0, 32, 34, 0.3);
                    border-radius: 1em;
                }
            }
        }
    }
}

.text {
    font-size: 1rem;
    padding: 0 0.5em;
    &.active {
      font-weight: 600;
    }
}
</style>
