<!-- =========================================================================================
    File Name: Email.vue
    Description: Email Application (Inbox)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="email-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">

        <vs-sidebar class="items-no-padding" parent="#email-app" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isEmailSidebarActive">
            <email-sidebar :emailTags="emailTags" @closeSidebar="toggleEmailSidebar" :mailFilter="mailFilter" />
        </vs-sidebar>

        <div :class="{'sidebar-spacer': clickNotClose}" class="app-fixed-height border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0">

            <!-- SEARCH BAR -->
            <div class="flex border d-theme-dark-bg items-center">
                <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" @click.stop="toggleEmailSidebar(true)"/>
                <vs-input icon-no-border icon="icon-search" size="large" icon-pack="feather" placeholder="Search Mail" v-model="searchQuery" class="vs-input-no-border vs-input-no-shdow-focus w-full" />
            </div>

            <!-- EMAIL ACTION BAR -->
            <div class="email__actions flex items-center flex-wrap justify-between p-4 border border-r-0 border-l-0 border-solid d-theme-border-grey-light">
                <div class="flex items-center">
                    <vs-checkbox v-model="selectAllCheckBox" icon-pack="feather" :icon="selectAllIcon" class="select-all-chexkbox ml-0">Select All</vs-checkbox>
                </div>
                <div class="flex">

                    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer" v-if="mailFilter != 'sent'">

                        <feather-icon icon="FolderIcon" class="cursor-pointer" svg-classes="h-6 w-6"></feather-icon>

                        <vs-dropdown-menu>
                            <ul class="my-2">
                                <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary" @click="moveTo('inbox')" v-if="mailFilter != 'inbox'">
                                    <feather-icon icon="MailIcon" svg-classes="h-5 w-5" />
                                    <span class="ml-3">Inbox</span>
                                </li>
                                <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary" @click="moveTo('draft')" v-if="mailFilter != 'draft'">
                                    <feather-icon icon="Edit2Icon" svg-classes="h-5 w-5"></feather-icon>
                                    <span class="ml-3">Draft</span>
                                </li>
                                <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary" @click="moveTo('spam')" v-if="mailFilter != 'spam'">
                                    <feather-icon icon="InfoIcon" svg-classes="h-5 w-5"></feather-icon>
                                    <span class="ml-3">Spam</span>
                                </li>
                                <li class="px-4 flex items-start cursor-pointer hover:text-primary" @click="moveTo('trash')" v-if="mailFilter != 'trash'">
                                    <feather-icon icon="TrashIcon" svg-classes="h-5 w-5"></feather-icon>
                                    <span class="ml-3">Trash</span>
                                </li>
                            </ul>
                        </vs-dropdown-menu>
                    </vs-dropdown>

                    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

                        <feather-icon icon="TagIcon" class="cursor-pointer ml-5" svg-classes="h-6 w-6"></feather-icon>

                        <vs-dropdown-menu >
                                <ul>
                                    <li v-for="(label, index) in emailTags" :key="index" class="px-2 py-1 cursor-pointer" @click="updateLabels(label.value)">
                                        <div class="h-3 w-3 inline-block rounded-full mr-3" :class="'bg-' + label.color"></div>
                                        <span>{{ label.text }}</span>
                                    </li>
                                </ul>
                        </vs-dropdown-menu>
                    </vs-dropdown>

                    <feather-icon icon="MailIcon" class="ml-5 cursor-pointer" svg-classes="h-6 w-6" @click="updateMarkUnread" />

                    <feather-icon v-if="mailFilter != 'trash'" icon="TrashIcon" class="cursor-pointer ml-5" svg-classes="h-6 w-6" @click="moveTo('trash')" />
                </div>
            </div>

            <!-- EMAILS LIST -->
            <VuePerfectScrollbar class="email-content-scroll-area" :settings="settings" ref="mailListPS">
                <transition-group name="list-enter-up" class="email__mails" tag="ul" appear>
                    <li class="cursor-pointer email__mail-item" v-for="(mail, index) in mails" :key="String(mailFilter) + String(mail.id)" @click.stop="updateOpenMail(mail.id)" :style="{transitionDelay: (index * 0.1) + 's'}">
                        <mail-item :mail="mail" :isSelected="isMailSelected(mail.id)" @addToSelected="addToSelectedMails" @removeSelected="removeSelectedMail" />
                    </li>
                </transition-group>
            </VuePerfectScrollbar>
        </div>

        <!-- EMAIL VIEW SIDEBAR -->
        <email-view
            :emailTags       = "emailTags"
            :openMailId      = "openMailId"
            :isSidebarActive = "isSidebarActive"
            :mailFilter      = "mailFilter"
            @markUnread      = "updateSingleMarkUnread"
            @removeMail      = "removeOpenMail"
            @previousMail    = "previousMail"
            @nextMail        = "nextMail"
            @moveTo          = "moveCurrentTo"
            @closeSidebar    = "closeMailViewSidebar">
        </email-view>
    </div>
</template>

<script>
import EmailSidebar        from './EmailSidebar.vue'
import MailItem            from './MailItem.vue'
import EmailView           from './EmailView.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import moduleEmail         from '@/store/email/moduleEmail.js'

export default {
  data() {
    return {
      openMailId           : null,
      selectedMails        : [],
      isSidebarActive      : false,
      showThread           : false,
      clickNotClose        : true,
      isEmailSidebarActive : true,
      settings             : {
        maxScrollbarLength : 60,
        wheelSpeed         : 0.30,
      },
    }
  },
  watch: {
    isSidebarActive(value) {
      if (!value) this.showThread = false
    },
    mailFilter() {
      this.selectedMails = []
      this.$refs.mailListPS.$el.scrollTop = 0
      this.$store.commit("email/UPDATE_MAIL_FILTER", this.$route.params.filter)
      this.$store.dispatch("email/fetchEmails", { filter: this.$route.params.filter })
      this.toggleEmailSidebar()
    },
    windowWidth() {
      this.setSidebarWidth()
    }
  },
  computed: {
    mailFilter() {
      return this.$route.params.filter
    },
    emailTags() {
      return this.$store.state.email.mailTags
    },
    searchQuery: {
      get() {
        return this.$store.state.email.mailSearchQuery
      },
      set(val) {
        this.$store.dispatch('email/setEmailSearchQuery', val)
      }
    },
    selectAllCheckBox: {
      get() {
        return this.selectedMails.length
      },
      set(value) {
        value ? this.selectedMails = this.mails.map(mail => mail.id) : this.selectedMails = []
      }
    },
    mails() {
      return this.$store.getters['email/filteredMails']
    },
    selectAllIcon() {
      return this.selectedMails.length == this.mails.length ? 'icon-check' : 'icon-minus'
    },
    isMailSelected() {
      return (mailId) => this.selectedMails.indexOf(mailId) == -1 ? false : true
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    updateOpenMail(mailId) {
      this.openMailId = mailId
      this.isSidebarActive = true
    },
    addToSelectedMails(mailId) {
      if (this.selectedMails.indexOf(mailId) === -1) this.selectedMails.push(mailId)
    },
    removeSelectedMail(mailId) {
      const mailIndex = this.selectedMails.indexOf(mailId)
      if (mailIndex !== -1) this.selectedMails.splice(mailIndex, 1)
    },
    moveTo(to) {
      const payload = { emailIds: this.selectedMails, to: to }
      this.$store.dispatch('email/moveMailsTo', payload)
        .catch((error) => { console.error(error) })
      this.selectedMails = []
    },
    moveCurrentTo(to) {
      this.selectedMails = [this.openMailId]
      this.moveTo(to)
    },
    updateMarkUnread() {
      const payload = { emailIds: this.selectedMails, unreadFlag: true }
      this.$store.dispatch('email/setUnread', payload)
      this.selectedMails = []
    },
    removeOpenMail() {
      this.selectedMails = [this.openMailId]
      this.moveTo('trashed')
      this.isSidebarActive = false
    },
    toggleIsStarred() {
      const payload = { mailId: this.currentMail.id, value: !this.currentMail.isStarred }
      this.$store.dispatch('email/toggleIsMailStarred', payload)
    },
    nextMail() {
      const currentMailIndex = this.mails.findIndex((mail) => mail.id == this.openMailId)
      if (this.mails[currentMailIndex + 1]) this.openMailId = this.mails[currentMailIndex + 1].id
    },
    previousMail() {
      const currentMailIndex = this.mails.findIndex((mail) => mail.id == this.openMailId)
      if (this.mails[currentMailIndex - 1]) this.openMailId = this.mails[currentMailIndex - 1].id
    },
    updateSingleMarkUnread() {
      this.selectedMails = [this.openMailId]
      this.updateMarkUnread()
      this.isSidebarActive = false
    },
    updateLabels(label) {
      this.$store.dispatch('email/updateLabels', { mails: this.selectedMails, label: label })
      this.selectedMails = []
    },
    closeMailViewSidebar() {
      this.isSidebarActive = false
    },
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isEmailSidebarActive = this.clickNotClose = false
      } else {
        this.isEmailSidebarActive = this.clickNotClose = true
      }
    },
    toggleEmailSidebar(value = false) {
      if (!value) {
        this.closeMailViewSidebar()
        if (this.clickNotClose) {
          return
        }
      }
      this.isEmailSidebarActive = value
    },
  },
  components: {
    MailItem,
    EmailSidebar,
    EmailView,
    VuePerfectScrollbar
  },
  created() {
    this.$store.registerModule('email', moduleEmail)
    this.setSidebarWidth()

    this.$store.commit("email/UPDATE_MAIL_FILTER", this.$route.params.filter)        // Update Mail Filter
    this.$store.dispatch("email/fetchEmails", { filter: this.$route.params.filter }) // Fetch Emails From API
    this.$store.dispatch("email/fetchMeta")                                          // Fetch Unread Mails
    this.$store.dispatch("email/fetchTags")                                          // Fetch Mail Tags
  },
  beforeDestroy: function() {
    this.$store.unregisterModule('email')
  },
  mounted() {
    this.$store.dispatch("email/setEmailSearchQuery", "")
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/email.scss";
</style>
