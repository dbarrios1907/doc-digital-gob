<template>
  <transition name="fade" @after-leave="handleAfterLeave">
    <alert v-if="!closed" v-bind="$data" @onDismiss="close" style="offset-position: left top">
      {{ message }}
    </alert>
  </transition>
</template>

<script>
import { idMixin } from '@/shared/mixins/id'
import Alert from './Alert'

export default {
  name: 'DxToast',
  mixins: [idMixin],
  components: {
    Alert,
  },
  data() {
    return {
      closed: false,
      message: '',
      duration: 5000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
    }
  },

  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  },
  methods: {
    handleAfterLeave() {
      console.log('handleAfterLeave')
      this.$destroy(true)
      // this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      console.log('CLOSING')
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close()
        }
      }
    },
  },
}
</script>

<style>
.dx-notification-container {
  position: fixed;
  z-index: 200;
  width: auto;
  top: 0;
  right: 0;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.4s, top 0.4s, left 0.4s, right 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
