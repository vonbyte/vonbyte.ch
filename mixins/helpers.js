export default {
  methods: {
    ucFirst(string) {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    stripTags(string) {
      return string.replace(/(<([^>]+)>)/ig,"");
    },
    debounce (func, wait, immediate) {
      let timeout
      return function () {
        const context = this, args = arguments
        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    isInView (el) {
      const rect = el.getBoundingClientRect()
      const html = document.documentElement
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
      )
    }
  }
}
