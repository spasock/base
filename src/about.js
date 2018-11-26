import $ from 'jquery'
import { compile } from 'handlebars'
import navbar from './html/navbar.handlebars'
import about from '~html/about.handlebars'
import test from './md/test-md.md'
import moment from 'moment'

import Remarkable from 'remarkable'
const md = new Remarkable()

export default () => {
    $('#navbar').html(compile(navbar)({

    }))
    let contents = md.render(test)
    $('#app').html(compile(about)({
        contents
    }))
}
