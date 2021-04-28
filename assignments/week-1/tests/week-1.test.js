import { fireEvent, getByText } from '@testing-library/dom'
import { JSDOM } from 'jsdom'

import fs from 'fs'
import path from 'path'
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

let dom
let container

describe('Week 1 assignment', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
    })
})
