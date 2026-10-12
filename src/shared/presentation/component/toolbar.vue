<script setup>

import { useI18n } from 'vue-i18n';
import PvToolbar from 'primevue/toolbar';
import LanguageSwitcher from '../component/language-switcher.vue';
const { t } = useI18n();

</script>

<template>
  <header>
    <pv-toolbar>
      <template #start>
        <div class="flex align-items-center gap-2">
          <img src="https://img.logo.dev/geomine.fr?token=pk_H-D5rqJGRtCnUq76HmOlCg&format=webp&retina=true" :alt="t('toolbar.logo-alt')" class="company-logo"/>
          <span class="font-bold">{{ t('toolbar.company-name') }}</span>
        </div>
      </template>

      <template #center>
        <nav :aria-label="t('toolbar.navigation')" class="flex gap-3 flex-wrap">
          <router-link to="/home">
            {{ t('option.home') }}
          </router-link>
          <router-link to="/assets/equipment/assignments/new">
            {{ t('option.new-telemetry') }}
          </router-link>
        </nav>
      </template>

      <template #end>
        <language-switcher />
      </template>
    </pv-toolbar>
  </header>
</template>

<style>

.company-logo {
  width: 90px;
  height: 45px;
  object-fit: contain;
}

</style>