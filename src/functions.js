import {col, row, css} from "./utils";

function title(block){
    const {tag = 'h1', styles} = block.options
    return row( col( `<${tag}>${block.value}</${tag}>` ), styles )
}

function text(block){
    const {tag = 'h1', styles} = block.options
    return row( col( `<${tag}>${block.value}</tag>` ), styles )
}

function columns(block){
    const {styles} = block.options;
    const html = block.value.map(col).join('')
    return row(html, styles)
}

function image(block){
    const {styles, styleImg: sI, alt} = block.options
    return row( `<img alt="${alt}" src="${block.value}" style="${css(sI)}"/>`, styles )
}

export const templates = {
    title,
    text,
    columns,
    image
}