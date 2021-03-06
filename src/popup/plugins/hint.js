import { createEnhancedArray } from 'shared/lib/enhancedArray'

const hints = createEnhancedArray()

// hints.add({ id: 999, text: 'Default hint' })

const HintPlugin = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$hints = hints
  },
}

export default HintPlugin
