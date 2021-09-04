import store from '../stateManager/store';
import {textBoldBoolean, textItalicBoolean, textUnderLineBoolean} from '../stateManager/textStates/textSyleSlice'
import { boldToggle, italicToggle, underlineToggle } from '../stateManager/textStates/textSyleSlice'


export  const boldText = document.createElement('button');
        boldText.classList.add("button-boldText");
        boldText.innerText = 'B';


       boldText.addEventListener("click", ()=>{
       store.dispatch(boldToggle())
       })
export  const italicText = document.createElement('button');
        italicText.classList.add("button-italicText");
        italicText.innerText = 'I';
        italicText.addEventListener("click", ()=>{
        	store.dispatch(italicToggle())
        })
export  const underlineText = document.createElement('button');
        underlineText.classList.add("button-underlineText");
        underlineText.innerText = 'U';
        underlineText.addEventListener("click", ()=>{
        	store.dispatch(underlineToggle())
        })

const unsubscribeBold = store.subscribe(() => {
    let boldBoolean = textBoldBoolean(store.getState())
    let  bold = (boldBoolean)? "bold": "normal";
    (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight = bold;
     })


const unsubscribeItalic = store.subscribe(() => {
    let italicBoolean = textItalicBoolean(store.getState())
    let  italic = (italicBoolean)? "italic": "normal";
    (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle = italic;
    
    })

const unsubscribeUnderline = store.subscribe(() => {
    let underlineBoolean = textUnderLineBoolean(store.getState())
    let  underline = (underlineBoolean)? "underline": "none";
    (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.textDecoration = underline;
    
    })