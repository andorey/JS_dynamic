import image from './assets/brain.gif'

export const model = [
    {type: 'title', value: 'Dynamic website in pure JS', options: {
        tag: 'h1',
        styles:{
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
        }
    },
    {type: 'text', value: 'Some text about this file and my work on it'},
    {type: 'columns', value: [
            'first column about my attempt am not mistaken',
            'second column on how it works in my browsers',
            'third column is about how my mind was broken',
            'fourth column is added how a test column '
        ]
    },
    {type: 'image', value: image}
]