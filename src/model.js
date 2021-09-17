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
            padding: '1.5rem'
        }
    }
    },
    {type: 'image',
        value: image,
        options: {
            styles: {
                padding: '1.5rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            styleImg: {
                'border-radius': '5em',
                width: '90%',
                height: 'auto'
            },
            alt: 'image'
        }
    },
    {type: 'columns',
        value: [
            'First column  if I am not mistaken. What can I tell you about London? You don\'t have to trust me before you see!',
            'Second column on how it works in my browsers',
            'Third column is about how my mind was broken',
            'The fourth column contains information about me'
        ],
        options: {
            styles: {
                background: 'linear-gradient(to top, #05d2f4, #0d073c)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    },
    {type: 'text',
    value: '&nbsp;&nbsp;&nbsp;I really want to become a programmer and work with augmented reality. My dream is to start working for a famous company with a salary of about $ 20,000 for month.',
    options: {
        tag: 'p',
        styles:{
            background: 'linear-gradient(to left, #05f44d, #0000ff)',
            color: '#fafb01',
            padding: '1.5rem',
            'font-weight': 'bold'
        }
    }
    }
]