const model = [
    {type: 'title', value: 'Bye Earth! I went to learn JS'},
    {type: 'text', value: 'Some text about this file and my work on it'},
    {type: 'columns', value: [
            'first column about my attempt am not mistaken',
            'second column on how it works in my browsers',
            'third column is about how my mind was broken',
            'fourth column is added how a test column '
        ]
    },
    {type: 'image', value: './assets/brain.gif'}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    } else if (block.type === 'image'){
        html = image(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})

function title(block){
    return `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
}

function text(block){
    return `
            <div class="row">
                <div class="col-sm">
                    <p>${block.value}</p> <!-- lorem10 -->
                </div>
            </div>
        `
}

function columns(block){
    return `
            <div class="row">
                ${block.value.map(item => `<div class="col-sm">${item}</div>`).join(' ') }
            </div>
        `
}

function image(block){
    return `
        <div class="row">
            <img src="${block.value}" alt="">   
        </div>
    `
}