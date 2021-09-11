import image from './assets/brain.gif'
export const model = [
    {type: 'title',
    value: 'Dynamic website builder with js',
    options: {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #05f44d, #0000ff)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5 rem'
        }
    }
    },
    {type: 'text',
    value: 'Some text about this file and my work on it',
    options: {
        tag: 'h5'
    }
    },
    {type: 'columns',
    value: [
        'First column  if I am not mistaken. What can I tell you about London? You don\'t have to trust me before you see!',
        'Second column on how it works in my browsers',
        'Third column is about how my mind was broken',
        'The fourth column contains information about me'
    ]
    },
    {type: 'image',
    value: image
    }
]