import { tick } from 'svelte'
import Pokemon from '../routes/index.svelte'
import { describe, expect, it} from "vitest";

let host: HTMLElement

afterEach(() => {
  host.remove()
})

test('mount component', async () => {
  host = document.createElement('div')
  host.setAttribute('id', 'host')
  document.body.appendChild(host)
  const instance = new Pokemon({ target: host, props: { count: 4 } })
  expect(instance).toBeTruthy()
  expect(host.innerHTML).toContain('text-4xl text')
  expect(host.innerHTML).toMatchSnapshot()
  // const btn = host.getElementsByTagName('button')[0]
  // btn.click() // or btn.dispatchEvent(new window.Event('click', { bubbles: true }))
  // await tick()
  // expect(host.innerHTML).toContain('4 x 3 = 12')
  // btn.click()
  // await tick()
  // expect(host.innerHTML).toContain('4 x 4 = 16')
})

/*
//TODO improvements
    - generic way to create svelte components from import ( helper utility or library )
    - generic api for interacting with components
    - alternatives to expect with innerHTML
 */