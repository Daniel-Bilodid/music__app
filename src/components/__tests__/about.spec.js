import About from '@/views/AppAbout.vue'
import { shallowMount } from '@vue/test-utils'

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toContain('MEEEEEEEEEEEEOOOOOOOOOOW')
  })
})
