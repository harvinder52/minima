
import dragElement from './dragElementFunc';
import store from './stateManager/store';
import {addButtonAdd, addButtonNeg} from './editorModules/textSizeModule'
import {boldText, italicText, underlineText} from './editorModules/textStyleModule'
import  {fontfamilySelect} from './editorModules/fontFamilyModule'
import {hideTextValue} from './stateManager/textStates/hideTextSlice'
import  {hideText} from './editorModules/hideTextModule'
import  {colorPicker} from './editorModules/colorPickerModule'




let name = 'Text';
export const editedTextDiv = document.createElement('span');


let textEditor = () => {
  let selection = window.getSelection();
  
  console.log(selection.toString())
  
  
  if (selection.toString() === "") {
    console.log("Selection Error");
  }else {
     console.assert(selection.focusNode == selection.anchorNode);
     if (document.querySelector(".minima-text-editor"))
     {
       console.log("truthy");
       document.querySelector(".minima-text-editor").remove();
     }else{
     textEditor(selection);
  }
}
dragElement(document.querySelector(".minima-text-editor"));

  function textEditor(selection: any){
        console.log(selection.toString())


   
       

       

        

      

        
        

        

        const saveButton = document.createElement('button');
        saveButton.classList.add("button-save");
        saveButton.innerText = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.id = "button-cancel";
        cancelButton.classList.add("button-cancel");
        cancelButton.innerText ='Cancel';

        const titleBarcancelButton = document.createElement('button');
        titleBarcancelButton.id = "titleBarcancelButton";
        titleBarcancelButton.classList.add("button-cancel");
        titleBarcancelButton.innerText ='x';

        const threedTextButton = document.createElement('button');
        threedTextButton.id = "threedTextButton";
        threedTextButton.innerText = "3D text";
        threedTextButton.setAttribute('style', 'position: absolute; top: 55%; left: 85%; z-index: 2;')

        threedTextButton.addEventListener("click", ()=>{
            // textArea.setAttribute('style',
            //  'text-shadow:    0 0 5px rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.2), 0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.3);' )


        })



        
        let minima_textEditor = document.createElement("div");
        minima_textEditor.classList.add("minima-text-editor");
        minima_textEditor.id = "minima-text-editor";
        

        let titleBar = document.createElement('div');
        titleBar.classList.add("titleBar")
        titleBar.innerText ="Minima - Text Editor v1.0.1 (DEMO UI)"
        titleBar.classList.add("tracking-in-contract-bck");


        let undercont = document.createElement("div");
        undercont.classList.add("undercont");



        const textArea = document.createElement('textarea');
        textArea.classList.add("minima-textbox")
       
        const setText = (text:string) => {
          textArea.innerText = text;
          textArea.style.color = selectionNode.style.color;
          textArea.style.fontSize = selectionNode.style.fontSize;
          textArea.style.fontStyle = selectionNode.style.fontStyle;
          textArea.style.fontWeight = selectionNode.style.fontWeight;
          textArea.style.textDecoration = selectionNode.style.textDecoration;
          textArea.style.fontFamily = selectionNode.style.fontFamily
        } 

        
        console.assert(selection.focusNode == selection.anchorNode);
        let selectionNode = selection.anchorNode.parentElement;
        console.log(selection.anchorNode.parentElement);
        let selectionText = selection.toString();
        setText(selectionText);
        hideText.innerText  = (selectionNode.className == "hidden_text")? 'Show': 'Hide';

        document.body.append(minima_textEditor);
        titleBar.append(titleBarcancelButton);
        minima_textEditor.append(titleBar);
        titleBar.insertAdjacentElement("afterend", undercont);

        colorPicker.style.backgroundColor = selectionNode.style.color;
        boldText.style.background = (selectionNode.style.fontWeight =="bold")? "blue": "gray";
        italicText.style.background = (selectionNode.style.fontStyle =="italic")? "blue": "gray";
        underlineText.style.background = (selectionNode.style.textDecoration =="underline")? "blue": "gray";
       

        //undercont.append( fontfamilySelect, hideText, colorPicker, saveButton, cancelButton);
        undercont.appendChild(textArea);
        undercont.appendChild(addButtonAdd);
        undercont.appendChild(addButtonNeg);
        undercont.appendChild(boldText);
        undercont.appendChild(italicText);
        undercont.appendChild(underlineText);
        undercont.appendChild(fontfamilySelect);
        undercont.appendChild(hideText);
        undercont.appendChild(colorPicker);
        undercont.appendChild(saveButton);
        undercont.appendChild(cancelButton);
        undercont.appendChild(threedTextButton)
        
       

     
       
   
      

 
  
   

    //code block that loads the colorPicker
    

    //save button that saves the size of text and removes the box.
   
    document.body.querySelectorAll(".button-save").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
           //let newfontSize= (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize;
          
           let newText_textarea:string = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).value;
           //let newText_textarea = newText_textareaElement.value;

           
           let newText_session  =  hideTextValue(store.getState());
           //console.log(hideTextValue(store.getState()))

           newText_textarea = (newText_textarea == "") ? newText_session : newText_textarea;
           console.log(newText_session)

           editedTextDiv.className = (hideText.innerText == "Show")? "hidden_text": "";
           //console.log(newText_textarea);

           

           //TODO: rename the sp1 element to something appropriate
           

           //sp1.classList.add("hidden_text");


           //todo -- no need to create new variables, just assign the sp1 property directly from textarea.
           editedTextDiv.innerText = newText_textarea;
           editedTextDiv.style.fontSize = textArea.style.fontSize;
           editedTextDiv.style.fontStyle = textArea.style.fontStyle;
           editedTextDiv.style.fontWeight = textArea.style.fontWeight;
           editedTextDiv.style.textDecoration = textArea.style.textDecoration;
           editedTextDiv.style.fontFamily = textArea.style.fontFamily;
           editedTextDiv.style.color = textArea.style.color;
           

           
           //minima_textEditor.replaceWith(sp1);
           selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,editedTextDiv.outerHTML);

           let minima_textEditor = document.querySelector('.minima-text-editor');
           minima_textEditor.remove();


        });
     })

    document.body.querySelectorAll(".button-cancel").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
           let minima_textEditor = document.querySelector('.minima-text-editor');
          
           const sp2 = document.createElement('span');
           sp2.innerText = selectionText
           //minima_textEditor.replaceWith(sp2)
           minima_textEditor.remove();
           console.log("clicked: cancelButton")
        });
     })
  
  }
};


let enable = () => {
  document.addEventListener('minima.ctrlDoublePressed', textEditor);
}
let disable = () => {
  document.removeEventListener('minima.ctrlDoublePressed', textEditor);
}

export default {
  name,
  enable,
  disable
};
