const model = [
    {type: 'title', value: 'Bye Earth! I went to learn JS'},
    {type: 'text', value: 'Some text...'},
    {type: 'columns', value: [
            '1111111111',
            '2222222222',
            '3333333333'
        ]}
]

const $site = document.querySelector('#site')

model.forEach(block =>{
    let html = ''

    if (block.type === 'title'){
        html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
    }else if(block.type === 'text'){

    }

})