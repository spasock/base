import $ from 'jquery'
import { compile } from 'handlebars'
import home from './html/home.handlebars'
import navbar from './html/navbar.handlebars'
import _ from 'lodash'

export default () => {
    $('#navbar').html(compile(navbar)({
        
    }))
    $('#app').html(compile(home)({

    }))
}
