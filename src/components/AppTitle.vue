<template>
    <div class="title">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';

// const props = defineProps({});

// const emit = defineEmits({});

// const { t } = useI18n();

</script>

<style lang="scss" scoped>
.title {
    background: $main-gradient;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 5em;
    font-weight: bold;
}
</style>

<i18n locale="en">
{

}
</i18n>

<i18n locale="pl">
{

}
</i18n>

<i18n locale="es">
{

}
</i18n>