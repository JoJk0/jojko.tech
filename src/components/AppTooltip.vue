<template>
    <div class="tooltip-container" @mouseenter="set(true)" @mouseleave="set(false)">
        <slot></slot>
        <transition name="slide-right">
            <div class="tooltip" :class="side" v-if="isOpen">{{ text }}</div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core';
import { PropType, ref } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    side: {
        type: String as PropType<"top" | "left" | "bottom" | "right">,
        default: 'right'
    },
});

// const emit = defineEmits({});

const [isOpen, set] = useToggle(false);

</script>

<style lang="scss" scoped>
.tooltip-container {
    position: relative;
    .tooltip {
        background: $color-text;
        border-radius: 2rem;
        color: $color-background;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.5em 1em;
        position: absolute;
        z-index: 10;
        &.top {
            bottom: 100%;
            left: 50%;
            margin-bottom: 1em;
            transform: translateX(-50%);
        }
        &.left {
            right: 100%;
            top: 50%;
            margin-right: 1em;
        }
        &.bottom {
            top: 100%;
            left: 50%;
            margin-top: 1em;
            transform: translateX(-50%);
        }
        &.right {
            left: 100%;
            margin-left: 1em;
            top: 0%;
        }
    }
}
</style>