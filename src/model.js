import image from './assets/brain.gif'

export const model = [
    {type: 'title', value: 'Dynamic website in pure JS', options: {
        tag: 'h1',
        styles:{
            background: 'linear-gradient(to right, #05f1e6, #023033)',
            color: '#fff',
            // color: '#05f1e6',
            // color: '#023033',
            'text-align': 'center',
            padding: '1.5rem'
        }
        }
    },
    {type: 'text', value: 'Some text about this file and my work on it', options: {
        tag: 'h5'
        }},
    {type: 'columns', value: [
            'first column about my attempt am not mistaken',
            'second column on how it works in my browsers',
            'third column is about how my mind was broken',
        ]
    },
    {type: 'image', value: image}
]