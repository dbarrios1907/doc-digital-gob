import Notif from './Notification.vue'

const NotificationCenter = {
  install(Vue, options = {}) {
    function createNotification(lConf) {
      var ComponentClass = Vue.extend(Notif)
      const newComponent = new ComponentClass({
        el: document.createElement('div'),
        propsData: {
          ...options,
          ...lConf,
        },
      })
      notifications.push(newComponent)
    }

    function removeNotification(component) {
      notifications = notifications.filter(c => c !== component)
    }

    function removeNotifications() {
      notifications.forEach(c => c.remove())
      notifications = []
    }

    // Expose utilities
    let notifications = []
    Vue.prototype.$notification = {
      new(message, lConf = {}) {
        lConf.type = 'primary'
        lConf.message = message
        return createNotification(lConf)
      },
      success(message, lConf = {}) {
        lConf.type = 'success'
        lConf.message = message
        return createNotification(lConf)
      },
      error(message, lConf = {}) {
        lConf.type = 'error'
        lConf.message = message
        return createNotification(lConf)
      },
      warning(message, lConf = {}) {
        lConf.type = 'warning'
        lConf.message = message
        return createNotification(lConf)
      },
      dark(message, lConf = {}) {
        lConf.type = 'dark'
        lConf.message = message
        return createNotification(lConf)
      },
      remove(comp) {
        return removeNotification(comp)
      },
      removeAll() {
        return removeNotifications()
      },
    }
  },
}

export default NotificationCenter