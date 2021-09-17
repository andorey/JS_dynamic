import {model} from "./model";
import {templates} from "./functions";
import './styles/main.css'

const $site = document.querySelector('#site')

model.map( block => {
    const toHTML = templates[block.type];
    console.log(block)
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})