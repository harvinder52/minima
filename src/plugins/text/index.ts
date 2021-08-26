let name = 'Text';


let hideText = () => {
  let selection = window.getSelection();
  console.log(selection.toString())
  
  if (selection.toString() === "") {
    console.log("Selection Error");
  }else {
     textresize(selection);
     function textresize(selection){
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


        const colorPicker = document.createElement("div")
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

        



        const selectionDiv = document.createElement('div');
        selectionDiv.classList.add("minima-text-editor")

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
        
        selectionDiv.append(textArea,addButtonAdd, addButtonNeg, boldText, italicText, underlineText, fontfamilySelect, hideText, colorPicker, saveButton, cancelButton);
       

        //selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,selectionDiv.outerHTML);
        selectionNode.append(selectionDiv)

  //code-block that increases font size within textarea box
      selectionNode.querySelectorAll(".button-Add").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
          let newfontSize:string = document.querySelector(".minima-textbox").style.fontSize;
          if (newfontSize == ""){
             let newfontnum:number = 1;
             newfontSize = (newfontnum+=0.5)+"em";
             document.querySelector(".minima-textbox").style.fontSize=newfontSize;
          }else{
             let newfontnum:number =parseFloat(newfontSize);
             newfontSize = (newfontnum+=0.5)+"em";
            document.querySelector(".minima-textbox").style.fontSize=newfontSize;
          }
      });
    })

//code-block to decrease font size of text within textarea box
      selectionNode.querySelectorAll(".button-Neg").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
          let newfontSize = document.querySelector(".minima-textbox").style.fontSize;
          if (newfontSize == "")
           {
             let newfontnum = 1;
             newfontSize = (newfontnum-=0.5)+"em";
             document.querySelector(".minima-textbox").style.fontSize=newfontSize;
          }else{
            let newfontnum=parseFloat(newfontSize);
            newfontSize = (newfontnum-=0.5)+"em";
            document.querySelector(".minima-textbox").style.fontSize=newfontSize;
          }
      });
    })

    //code block that makes text go Bold;
    selectionNode.querySelectorAll(".button-boldText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
      
        console.log("Button Clicked: button-boldText")
        let newfontWeight = ( document.querySelector(".minima-textbox").style.fontWeight == "bold") ? "normal" : "bold";
        document.querySelector("textarea").style.fontWeight = newfontWeight;
        console.log( document.querySelector(".minima-textbox").style.fontWeight)
       
      });
    })


    //code block that makes text go italic;
    selectionNode.querySelectorAll(".button-italicText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
        console.log("Button Clicked: button-italicText")
        let newfontStyle = (document.querySelector(".minima-textbox").style.fontStyle == "italic") ? "normal" : "italic";
        document.querySelector(".minima-textbox").style.fontStyle = newfontStyle;
        //console.log(document.querySelector("textarea").style.fontStyle)
      });
    })


    //code block that makes text go underline;
    selectionNode.querySelectorAll(".button-underlineText").forEach((item:any)=>{
       item.addEventListener("click", ()=>{
         console.log("Button Clicked: button-underlineText")
         let newtextDecoration = (document.querySelector(".minima-textbox").style.textDecoration == "underline") ? "none" : "underline";
        document.querySelector(".minima-textbox").style.textDecoration = newtextDecoration;
      });
    })

    //code block that updates the fontfamily within the editor box.
    selectionNode.querySelectorAll(".select-fontfamilySelect").forEach((item:any)=>{
       item.addEventListener("change", ()=>{
      document.querySelector(".minima-textbox").style.fontFamily = (<HTMLInputElement>document.querySelector(".select-fontfamilySelect")).value;
      console.log('fontfamilyselect')

    });
  })
    //document.querySelector("textarea").style.fontFamily = document.querySelector(".select-fontfamilySelect").value;
    
    //code that adds hidden_text class to text.
    let s = window.sessionStorage;
    let editbox_text = document.querySelector("textarea");
    selectionNode.querySelectorAll(".button-hideText").forEach((item:any)=>{
      
       item.addEventListener("click", ()=>{
       let hideText = document.querySelector(".button-hideText");
       hideText.innerText  = (hideText.innerText =="Hide")? 'Show': 'Hide';
       console.log("button clicked: hide text");
        sp1.classList.toggle("hidden_text");
        if ( editbox_text.value) {
         s.setItem("text",  editbox_text.value);
          editbox_text.value = "";

        } else {
           editbox_text.value = s.getItem("text");
        }
       

    });
  })

    //code block that loads the colorPicker
    selectionNode.querySelectorAll(".colorPicker").forEach((item: any)=>{
       item.addEventListener("click", ()=>{
       console.log("clicked on color picker")

       let parent = document.querySelector(".colorPicker"); 
        
       let picker = new Picker(parent);
     
       picker.on_done = function(colour) {
  
         parent.style.background = colour.rgba().toString();
         document.querySelector(".minima-textbox").style.color = colour.rgba().toString();
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
           let newfontSize= document.querySelector(".minima-textbox").style.fontSize;
           let newfontStyle = document.querySelector(".minima-textbox").style.fontStyle;
           let newfontWeight = document.querySelector(".minima-textbox").style.fontWeight;
           let newtextDecoration = document.querySelector(".minima-textbox").style.textDecoration;
           let newfontFamily = (<HTMLInputElement>document.querySelector(".select-fontfamilySelect")).value;
           let newfontColor = document.querySelector(".minima-textbox").style.color;
           let newText_textarea:string = (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).value;
           //let newText_textarea = newText_textareaElement.value;

           console.log(newText_textarea)
           let newText_s  = s.getItem("text");

           let newText = (newText_s == "") ? newText_textarea : newText_s;
           console.log(newText)
           

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
           

           
           //selectionDiv.replaceWith(sp1);
           selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,sp1.outerHTML);

           let selectionDiv = document.querySelector('.minima-text-editor');
           selectionDiv.remove();


        });
     })

    selectionNode.querySelectorAll(".button-cancel").forEach((item:any)=>{
        item.addEventListener("click", ()=>{
           let selectionDiv = document.querySelector('.minima-text-editor');
          
           const sp2 = document.createElement('span');
           sp2.innerText = selectionText
           //selectionDiv.replaceWith(sp2)
           selectionDiv.remove();
           console.log("clicked: cancelButton")
        });
     })
  }
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
