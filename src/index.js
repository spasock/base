import './styles/theme.scss'
import $ from 'jquery'
import 'bootstrap'
import navigo from 'navigo'

if (process.env.NODE_ENV === 'production') {
    console.log('Production ready!')
}

const router = new navigo()

const HomePage = () => System.import('./home').then(module => module.default())
const AboutPage = () => System.import('./about').then(module => module.default())
const CodePage = () => System.import('./code').then(module => module.default())

router
    .on('/', HomePage)
    .on('/about', AboutPage)
    .on('/code', CodePage)
    .resolve()



$(window).on('load', () => {

    $(document).on('click', '[data-path]', (e) => {
        e.preventDefault()

        const href = $(e.target).attr('href')

        if (process.env.DEBUG) {
            console.log(`Navigating to ${href}`)
        }

        router.navigate(href)
    })
})