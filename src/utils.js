function row(content, styles=''){
    return `<div class="row" style="${css(styles)}">${content}</div>`
}

function col(content, styles=''){
    return `<div class="col-sm" style="${css(styles)}">${content}</div>`
}

function css(styles){                               // styles object unpacking function
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export {row, col, css}