import $ from 'jquery'
import { compile } from 'handlebars'
import navbar from './html/navbar.handlebars'
import template from './html/code.handlebars'
import hljs from 'highlight.js'
import 'highlight.js/styles/darkula.css'

import code from 'raw-loader!../build/base.config.js'
hljs.initHighlightingOnLoad()

export default () => {
    $('#navbar').html(compile(navbar)({

    }))
    $('#app').html(compile(template)({
        code
    }))
}
