
function row(content){
    return `<div class="row">${content}</div>`
}

function col(content){
    return `<div class="col-sm">${content}</div>`
}

// export function css(styles){
//     const toString = key => `${key}: ${styles[key]}`
//     return Object.keys(styles).map(toString).join(';')
// }

export {row, col}