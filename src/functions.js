import {row, col, css} from "./utils";

function title(block){
    const {tag='h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block){
    const {tag='p'} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`))
}

function columns(block){
    return row(block.value.map(col).join(' '))
}

function image(block){
    return row(`<img src="${block.value}" alt="">`)
}

export const templates = {
    title,
    text,
    columns,
    image
}