import '@simonwep/pickr/dist/themes/monolith.min.css'; 
import Pickr from '@simonwep/pickr';
import dragElement from './dragElementFunc';
import store from './stateManager/store';
import  {textsize} from  './stateManager/textStates/textsizeSlice'



import { decrement, increment } from './stateManager/textStates/textsizeSlice'


let name = 'Text';


let hideText = () => {
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


   
        const addButtonAdd = document.createElement('button');
        addButtonAdd.classList.add("button-Add");
        addButtonAdd.innerText = '+';    
        const addButtonNeg = document.createElement('button');
        addButtonNeg.classList.add("button-Neg");
        addButtonNeg.innerText = '-';

        const boldText = document.createElement('button');
        boldText.classList.add("button-boldText");
        boldText.innerText = 'B';

        const italicText = document.createElement('button');
        italicText.classList.add("button-italicText");
        italicText.innerText = 'I';

        const underlineText = document.createElement('button');
        underlineText.classList.add("button-underlineText");
        underlineText.innerText = 'U';

        const fontfamilySelect = document.createElement('select');
        fontfamilySelect.classList.add("select-fontfamilySelect");
        let fontfamilies = ["Times New Roman", "Times", "serif", "Arial", "Helvetica", "sans-serif", "Impact", "Charcoal"];

        for ( let font of fontfamilies){
          const optionFont = document.createElement("option");
          optionFont.innerText = font;
          optionFont.value = font;
          fontfamilySelect.append(optionFont)

        }

        const hideText = document.createElement("button");
        hideText.classList.add("button-hideText");
        hideText.innerText ='Hide';


        const colorPicker = document.createElement("button");
        colorPicker.innerText ='Color';
        colorPicker.classList.add('colorPicker')

        
        

        

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
        textArea.classList.add("tracking-in-expand");
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

        selectionNode.append(minima_textEditor);
        titleBar.append(titleBarcancelButton);
        minima_textEditor.append(titleBar);
        titleBar.insertAdjacentElement("afterend", undercont);

        colorPicker.style.backgroundColor = selectionNode.style.color;
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
        
       

        //selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,minima_textEditor.outerHTML);
       
  //code-block that increases font size within textarea box
      addButtonAdd.addEventListener("click", ()=>{
        store.dispatch(increment())
        let size = textsize(store.getState())
        let newfontnum:string = size+"rem";
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontnum;
        })
     
      addButtonNeg.addEventListener("click", ()=>{
        store.dispatch(decrement())
        let size = textsize(store.getState())
        let newfontnum:string = size+"rem";
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontnum;
        })
  
  


//code-block to decrease font size of text within textarea box
      
      

    //code block that makes text go Bold;
    selectionNode.querySelectorAll(".button-boldText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
      
        console.log("Button Clicked: button-boldText")
        let buttonColor = ((<HTMLTextAreaElement>document.querySelector(".button-boldText")).style.backgroundColor == 'blue')? "gray": "blue";
         (<HTMLTextAreaElement>document.querySelector(".button-boldText")).style.backgroundColor = buttonColor;
        let newfontWeight = ( (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight == "bold") ? "normal" : "bold";
        document.querySelector("textarea").style.fontWeight = newfontWeight;
        console.log( (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight)
       
      });
    })


    //code block that makes text go italic;
    selectionNode.querySelectorAll(".button-italicText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
        console.log("Button Clicked: button-italicText")
        let buttonColor = ((<HTMLTextAreaElement>document.querySelector(".button-italicText")).style.backgroundColor == 'blue')? "gray": "blue";
         (<HTMLTextAreaElement>document.querySelector(".button-italicText")).style.backgroundColor = buttonColor;
        let newfontStyle = ((<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle == "italic") ? "normal" : "italic";
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle = newfontStyle;
        //console.log(document.querySelector("textarea").style.fontStyle)
      });
    })


    //code block that makes text go underline;
    selectionNode.querySelectorAll(".button-underlineText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
         console.log("Button Clicked: button-underlineText");
         let buttonColor = ((<HTMLTextAreaElement>document.querySelector(".button-underlineText")).style.backgroundColor == 'blue')? "gray": "blue";
         (<HTMLTextAreaElement>document.querySelector(".button-underlineText")).style.backgroundColor = buttonColor;
         let newtextDecoration = ((<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.textDecoration == "underline") ? "none" : "underline";
         (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.textDecoration = newtextDecoration;
      });
    })

    //code block that updates the fontfamily within the editor box.
    selectionNode.querySelectorAll(".select-fontfamilySelect").forEach((item:any)=>{
       item.addEventListener("change", ()=>{
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontFamily = (<HTMLInputElement>document.querySelector(".select-fontfamilySelect")).value;
        console.log('fontfamilyselect')

    });
  })
    //document.querySelector("textarea").style.fontFamily = document.querySelector(".select-fontfamilySelect").value;
    
    //code that adds hidden_text class to text.
    let session_text = window.sessionStorage;
    let editbox_text = document.querySelector("textarea");
    selectionNode.querySelectorAll(".button-hideText").forEach((item:any)=>{
      
       item.addEventListener("click", ()=>{
       let hideText = document.querySelector(".button-hideText");
       (<HTMLButtonElement>hideText).innerText  = ((<HTMLButtonElement>hideText).innerText =="Hide")? 'Show': 'Hide';
       console.log("button clicked: hide text");
        sp1.classList.toggle("hidden_text");
        if ( editbox_text.value) {
         session_text.setItem("text",  editbox_text.value);
          editbox_text.value = "";

        } else {
           editbox_text.value = session_text.getItem("text");
        }
       

    });
  })

    //code block that loads the colorPicker
    selectionNode.querySelectorAll(".colorPicker").forEach((item: any)=>{
       item.addEventListener("click", ()=>{
       console.log("clicked on color picker")
       let parent = document.querySelector(".colorPicker");

      /* let parent = document.querySelector(".colorPicker"); 
        
       let picker: Picker = new Picker({parent: (parent), orientation: ( 'center'), x:(-300), y: (-100)});

        
       
       picker.on_done = function(colour: any) {
         
         (<HTMLButtonElement>parent).style.background = colour.rgba().toString();
         (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.color = colour.rgba().toString();
         //console.log(colour.rgba().toString())
         let rgba = colour.rgba();
       }
       
        
        picker.show();
        */
       const pickr = Pickr.create({
       el: '.colorPicker',
       theme: 'monolith',
       useAsButton: true,

       swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
       ],

      components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
           }
       }
     }).on('save', (color:any) => {
      (<HTMLButtonElement>parent).style.background= color.toRGBA().toString(0);
      (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.color = color.toRGBA().toString();
      pickr.hide();
    });
      console.log(pickr.getSelectedColor().toRGBA().toString(0));
      console.log((<HTMLButtonElement>parent).style.background)
    });
  })


    //save button that saves the size of text and removes the box.
    const sp1 = document.createElement('span');
    selectionNode.querySelectorAll(".button-save").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
           let newfontSize= (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize;
           let newfontStyle = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle;
           let newfontWeight = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight;
           let newtextDecoration = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.textDecoration;
           let newfontFamily = (<HTMLInputElement>document.querySelector(".select-fontfamilySelect")).value;
           let newfontColor = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.color;
           let newText_textarea:string = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).value;
           //let newText_textarea = newText_textareaElement.value;

           
           let newText_session  = session_text.getItem("text");

           newText_textarea = (newText_textarea == "") ? newText_session : newText_textarea;
           console.log(newText_session)
           console.log(newText_textarea);

           

           //TODO: rename the sp1 element to something appropriate
           

           //sp1.classList.add("hidden_text");


           //todo -- no need to create new variables, just assign the sp1 property directly from textarea.
           sp1.innerText = newText_textarea;
           sp1.style.fontSize = newfontSize;
           sp1.style.fontStyle = newfontStyle;
           sp1.style.fontWeight = newfontWeight;
           sp1.style.textDecoration = newtextDecoration;
           sp1.style.fontFamily = newfontFamily;
           sp1.style.color = newfontColor;
           

           
           //minima_textEditor.replaceWith(sp1);
           selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,sp1.outerHTML);

           let minima_textEditor = document.querySelector('.minima-text-editor');
           minima_textEditor.remove();


        });
     })

    selectionNode.querySelectorAll(".button-cancel").forEach((item:any)=>{
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

let disableEditor = () => {
  if (document.querySelector(".minima_textEditor")){
    console.log("truthy")
  }
}

let enable = () => {
  document.addEventListener('minima.ctrlDoublePressed', hideText);
}
let disable = () => {
  document.removeEventListener('minima.ctrlDoublePressed', hideText);
}

export default {
  name,
  enable,
  disable
};
