import store from '../stateManager/store';
import  {textsizeSelector} from  '../stateManager/textStates/textsizeSlice'
import { decrement, increment } from '../stateManager/textStates/textsizeSlice'

export const addButtonAdd = document.createElement('button');
       addButtonAdd.classList.add("button-Add");
       addButtonAdd.innerText = '+';    
export const addButtonNeg = document.createElement('button');
       addButtonNeg.classList.add("button-Neg");
       addButtonNeg.innerText = '-';

addButtonAdd.addEventListener("click", ()=>{
    store.dispatch(increment());
    let size = textsizeSelector(store.getState())
    let newfontnum:string = size+"rem";
    (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontnum;
    })
      //code-block to decrease font size of text within textarea box
addButtonNeg.addEventListener("click", ()=>{
    store.dispatch(decrement());
    let size = textsizeSelector(store.getState())
    let newfontnum:string = size+"rem";
    (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontnum;
    })

     