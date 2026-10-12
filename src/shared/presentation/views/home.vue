<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="p-4" aria-labelledby="home-title">
    <h1 id="home-title">{{ t('home.title') }}</h1>

    <p class="mb-4">{{ t('home.content') }}</p>
  </section>
</template>
