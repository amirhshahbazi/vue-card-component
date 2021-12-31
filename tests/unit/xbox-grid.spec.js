import { mount } from '@vue/test-utils'
import XBoxGrid from "../../src/components/XBoxGrid"

describe('Xino Box Grid', () => {
    it('the grid renders the appropriate number of boxes', async () => {
        const wrapper = mount(XBoxGrid, {
            props: {
                boxes: [
                    {id: 'first'},
                    {id: 'second'},
                    {id: 'third'},
                ]
            }
        })

        expect(wrapper.findAll('.box').length).toBe(3)
    })
})
