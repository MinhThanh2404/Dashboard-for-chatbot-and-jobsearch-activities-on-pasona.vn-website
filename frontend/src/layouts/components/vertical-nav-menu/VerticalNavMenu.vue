<template>
  <v-navigation-drawer :value="isDrawerOpen" app floating width="220" class="app-navigation-menu" :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)">
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-img :src="require('@/assets/images/logos/pasonalogo.png')" max-height="440px" max-width="160px" alt="logo"
          contain eager class="app-logo me-3"></v-img>
        <v-slide-x-transition>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list expand shaped class="vertical-nav-menu-items pr-5">
      <nav-menu-group title="Dashboard" :icon="icons.mdiMonitorDashboard">
        <nav-menu-link title="Chatbot" :to="{ name: 'dashboard_chatbot' }"
          :icon="icons.mdiChatProcessingOutline"></nav-menu-link>
        <nav-menu-link title="Job Search" :to="{ name: 'dashboard_jobsearch' }"
          :icon="icons.mdiBriefcaseVariant"></nav-menu-link>
      </nav-menu-group>
      <nav-menu-section-title title="DATA SOURCE"></nav-menu-section-title>
      <nav-menu-link title="Chatbot" :to="{ name: 'chatbot-data' }"
        :icon="icons.mdiChatProcessingOutline"></nav-menu-link>
      <nav-menu-link title="Job Search" :to="{ name: 'jobsearch-data' }"
        :icon="icons.mdiBriefcaseVariant"></nav-menu-link>
      <nav-menu-link title="User Information" :to="{ name: 'user-info' }" :icon="icons.mdiAccount"></nav-menu-link>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiAccount,
  mdiChatProcessingOutline,
  mdiBriefcaseVariant,
  mdiMonitorDashboard,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiAccount,
        mdiChatProcessingOutline,
        mdiBriefcaseVariant,
        mdiMonitorDashboard,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;

  .v-navigation-drawer--mini-variant & {
    transform: translateX(3px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}
</style>
