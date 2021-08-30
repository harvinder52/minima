let name = 'Text';


let hideText = () => {
  let selection = window.getSelection();
  console.log(selection.toString())
  
  if (selection.toString() === "") {
    console.log("Selection Error");
  }else {
     textEditor(selection);
  }
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
        colorPicker.innerText ='C:';
        colorPicker.classList.add('colorPicker')
        let colorPickerscript = document.createElement('script');
        colorPickerscript.src = 'https://rawgithub.com/suffick/Picker/master/dist/picker.min.js';
        document.head.appendChild(colorPickerscript);

        

        

        const saveButton = document.createElement('button');
        saveButton.classList.add("button-save");
        saveButton.innerText = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.classList.add("button-cancel");
        cancelButton.innerText ='Cancel';

        



        
        let minima_textEditor = document.createElement("div");
        minima_textEditor.classList.add("minima-text-editor");


        let titleBar = document.createElement('div');
        titleBar.classList.add("titleBar")
        titleBar.innerText ="Minima - Text Editor v1.0.1"

        let undercont = document.createElement("div");
        undercont.classList.add("undercont");



        const textArea = document.createElement('textarea');
        textArea.classList.add("minima-textbox")
        const setText = (text:string) => {
        textArea.innerText = text;
        } 


        console.assert(selection.focusNode == selection.anchorNode);
        let selectionNode = selection.anchorNode.parentElement;
        console.log(selection.anchorNode.parentElement);
        let selectionText = selection.toString();
        setText(selectionText);

        selectionNode.append(minima_textEditor);
        minima_textEditor.append(titleBar);
        titleBar.insertAdjacentElement("afterend", undercont);

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
      selectionNode.querySelectorAll(".button-Add").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
          let newfontSize:string = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize;
          if (newfontSize == ""){
             let newfontnum:number = 1;
             newfontSize = (newfontnum+=0.5)+"em";
             (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontSize;
          }else{
             let newfontnum:number =parseFloat(newfontSize);
             newfontSize = (newfontnum+=0.5)+"em";
            (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontSize;
          }
      });
    })

//code-block to decrease font size of text within textarea box
      selectionNode.querySelectorAll(".button-Neg").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
          let newfontSize = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize;
          if (newfontSize == "")
           {
             let newfontnum = 1;
             newfontSize = (newfontnum-=0.5)+"em";
             (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontSize;
          }else{
            let newfontnum=parseFloat(newfontSize);
            newfontSize = (newfontnum-=0.5)+"em";
            (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontSize=newfontSize;
          }
      });
    })

    //code block that makes text go Bold;
    selectionNode.querySelectorAll(".button-boldText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
      
        console.log("Button Clicked: button-boldText")
        let newfontWeight = ( (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight == "bold") ? "normal" : "bold";
        document.querySelector("textarea").style.fontWeight = newfontWeight;
        console.log( (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontWeight)
       
      });
    })


    //code block that makes text go italic;
    selectionNode.querySelectorAll(".button-italicText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
        console.log("Button Clicked: button-italicText")
        let newfontStyle = ((<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle == "italic") ? "normal" : "italic";
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontStyle = newfontStyle;
        //console.log(document.querySelector("textarea").style.fontStyle)
      });
    })


    //code block that makes text go underline;
    selectionNode.querySelectorAll(".button-underlineText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
         console.log("Button Clicked: button-underlineText")
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
        
       let picker = new Picker({parent: (parent), orientation: ( 'center'), x:(-300), y: (-100)});

        
       
       picker.on_done = function(colour: any) {
         
         (<HTMLButtonElement>parent).style.background = colour.rgba().toString();
         (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.color = colour.rgba().toString();
         //console.log(colour.rgba().toString())
         let rgba = colour.rgba();
       }
       
        
        picker.show();
  
       
       

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
