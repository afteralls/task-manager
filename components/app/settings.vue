<template>
  <USpace mode="center" class="settings">
    <UIcon v-if="$pwa.needRefresh" size="sm" name="fluent-emoji-flat:red-circle" class="notf" />
    <UButton
      :title="$t('app.settings.title')"
      mode="icon"
      icon="solar:settings-outline"
      @trigger="showSettings = !showSettings"
    />
    <UModal v-model="showSettings" :title="$t('app.settings.title')">
      <USpace v-auto-animate display="col">
        <USpace display="row">
          <USpace mode="center" block="def" class="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/106645309?v=4"
              :alt="$t('app.author')"
            />
          </USpace>
          <USpace display="col" class="info">
            <USpace display="col" gap="bit">
              <UText type="span" :text="$t('app.authorName')" />
              <UText gray :text="$t('app.author')" />
            </USpace>
            <USpace display="row">
              <ULink
                v-for="(link, idx) in links"
                :key="idx"
                :to="link.to"
                :title="link.title"
                global
                :icon="link.icon"
                mode="icon"
              />
            </USpace>
          </USpace>
        </USpace>
        <ULine mode="dashed" />
        <USpace display="col">
          <USpace display="row" gap="sm">
            <UIcon name="lucide:languages" />
            <UText type="span" :text="$t('app.settings.lang')" />
          </USpace>
          <USpace display="grid" gap="sm" class="locales">
            <UButton
              v-for="(localeItem, idx) in locales"
              :key="idx"
              :title="localeItem.name!"
              :icon="localeConfig[idx].icon"
              :active="localeItem.code === locale"
              @trigger="setLocale(localeItem.code)"
            />
          </USpace>
        </USpace>
        <USpace v-if="isMobile" display="col">
          <ULine mode="dashed" />
          <UToggle
            v-model="store.vibroIsActive"
            :label="$t('app.settings.vibro')"
            :desc="$t('app.settings.vibroDesc')"
            name="vibro"
          />
        </USpace>
        <ULine mode="dashed" />
        <USpace v-if="$pwa.showInstallPrompt" display="col">
          <USpace display="col" gap="sm">
            <USpace display="row" pos="between">
              <UText type="span" :text="$t('app.pwa.insTitle')" />
              <UButton
                :title="$t('app.pwa.cancel')"
                icon="icon-park-outline:minus"
                mode="icon"
                class="cancel"
                @trigger="$pwa.cancelInstall()"
              />
            </USpace>
            <USpace display="row" gap="sm">
              <UIcon size="lg" :name="ICON_TASK" style="transform: scale(1.2)" />
              <USpace display="col" pos="left" gap="sm">
                <UText :gray="true" :text="$t('app.pwa.insDesc')" />
                <UButton
                  :title="$t('app.pwa.install')"
                  icon="icon-park-solid:install"
                  mode="min"
                  @trigger="$pwa.install()"
                />
              </USpace>
            </USpace>
          </USpace>
          <ULine mode="dashed" />
        </USpace>
        <USpace v-if="$pwa.needRefresh" display="col">
          <USpace display="col" gap="sm">
            <USpace display="row" pos="between">
              <UText type="span" :text="$t('app.pwa.updTitle')" />
              <UButton
                :title="$t('app.pwa.cancel')"
                icon="icon-park-outline:minus"
                mode="icon"
                class="cancel"
                @trigger="$pwa.cancelPrompt()"
              />
            </USpace>
            <USpace display="row" gap="sm">
              <UIcon size="lg" :name="ICON_TASK" style="transform: scale(1.2)" />
              <USpace display="col" pos="left" gap="sm">
                <UText :gray="true" :text="$t('app.pwa.updDesc')" />
                <UButton
                  :title="$t('app.pwa.update')"
                  icon="clarity:update-line"
                  mode="min"
                  @trigger="$pwa.updateServiceWorker()"
                />
              </USpace>
            </USpace>
          </USpace>
          <ULine mode="dashed" />
        </USpace>
        <USpace display="col">
          <USpace display="row" gap="sm">
            <UIcon name="gridicons:themes" />
            <UText type="span" :text="$t('app.settings.theme.title')" />
          </USpace>
          <USpace display="grid" gap="sm" class="themes">
            <UButton
              v-for="(themeItem, idx) in themeConfig"
              :key="idx"
              :title="$t(`app.settings.theme.${themeItem.code}`)"
              :icon="themeItem.icon"
              :style="`grid-area: ${themeItem.code}`"
              :active="themeItem.code === $colorMode.preference"
              @trigger="$colorMode.preference = themeItem.code"
            />
          </USpace>
        </USpace>
      </USpace>
    </UModal>
  </USpace>
</template>

<script setup lang="ts">
const showSettings = ref(false)
const store = useNotfStore()
const { locale, locales, setLocale } = useI18n()
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

type Link = { to: string; icon: string; title: string }

const links: Link[] = [
  { to: 'https://afteralls.netlify.app', icon: ICON_SITE, title: 'Website' },
  { to: 'https://github.com/afteralls', icon: ICON_GITHUB, title: 'Github' },
  { to: 'https://t.me/afterallspace', icon: ICON_TELEGRAM, title: 'Telegram' },
  { to: 'mailto:afterallspace@gmail.com', icon: ICON_EMAIL, title: 'E-Mail' }
]

const localeConfig = [
  { code: 'en', icon: 'twemoji:flag-us-outlying-islands' },
  { code: 'ru', icon: 'twemoji:flag-russia' }
]

const themeConfig = [
  { code: 'system', icon: 'material-symbols:hdr-auto-rounded' },
  { code: 'dark', icon: 'iconamoon:mode-dark-fill' },
  { code: 'light', icon: 'tabler:sun-filled' }
]
</script>

<style scoped lang="scss">
.settings {
  position: relative;
  z-index: 5;
}

.notf {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  filter: drop-shadow(0 0 toRem(5) var(--red));
  pointer-events: none;
}

.locales {
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: $zf) {
    grid-template-columns: 1fr;
  }
}

.themes {
  grid-template-areas:
    'system system'
    'dark light';

  @media (max-width: $zf) {
    grid-template-areas:
      'system'
      'dark'
      'light';
  }
}

.avatar {
  position: relative;
  min-width: toRem(100);
  width: toRem(100);
  padding: 0;
  height: toRem(100);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--br-rad);
  }

  @media (max-width: $zf) {
    display: none;
  }
}

.info {
  justify-content: space-around;
}
</style>
