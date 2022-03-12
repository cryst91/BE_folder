export { default as FloatingButton } from '../..\\components\\FloatingButton.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Title } from '../..\\components\\Title.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as BootstrapCard } from '../..\\components\\bootstrap\\Card.vue'
export { default as CrudClass } from '../..\\components\\crud\\Class.vue'
export { default as InputButton } from '../..\\components\\input\\Button.vue'
export { default as InputText } from '../..\\components\\input\\Text.vue'
export { default as PartialsFooter } from '../..\\components\\partials\\Footer.vue'
export { default as PartialsMain } from '../..\\components\\partials\\Main.vue'
export { default as PartialsNavbar } from '../..\\components\\partials\\Navbar.vue'
export { default as PartialsSidebar } from '../..\\components\\partials\\Sidebar.vue'
export { default as SandboxAdd } from '../..\\components\\sandbox\\add.vue'
export { default as SandboxListItem } from '../..\\components\\sandbox\\listItem.vue'
export { default as SandboxOption } from '../..\\components\\sandbox\\option.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
