import { shallowMount } from '@vue/test-utils'
import XBox from "../../src/components/XBox"

describe('Xino Box', () => {
    it('clicking on the box behind will toggle state', async () => {
        const wrapper = shallowMount(XBox)

        // initial state is closed
        await wrapper.find('.box__behind').trigger('click')
        expect(wrapper.vm.opened).toBe(true)

        // current state is open
        await wrapper.find('.box__behind').trigger('click')
        expect(wrapper.vm.opened).toBe(false)
    })
})
