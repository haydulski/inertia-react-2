import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'



require('./bootstrap.js')
InertiaProgress.init({
    color: '#F23D3D',
})

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})
