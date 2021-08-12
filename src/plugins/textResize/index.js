let name = 'textResize';


let hideText = () => {
  
  const addButtonAdd = document.createElement('button');
  addButtonAdd.classList.add("button-Add");
  addButtonAdd.innerText = '+';
  const addButtonNeg = document.createElement('button');
  addButtonNeg.classList.add("button-Neg");
  addButtonNeg.innerText = '-';
  let selection = window.getSelection();
  console.log(selection.toString())
  if (selection.toString() === "") {
    console.log("Selection Error");
  } else {
    console.assert(selection.focusNode == selection.anchorNode);
    textresize(selection);
     function textresize(selection){
  console.log(selection.toString())
  const addButtonAdd = document.createElement('button');
  addButtonAdd.classList.add("button-Add");
  addButtonAdd.innerText = '+';    
  const addButtonNeg = document.createElement('button');
  addButtonNeg.classList.add("button-Neg");
  addButtonNeg.innerText = '-';

  const selectionDiv = document.createElement('span');
  const textArea = document.createElement('textarea');
  const setText = (text) => {
  textArea.innerText = text;
} 
  let selectionNode = selection.anchorNode.parentElement;
  let selectionText = selection.toString();
  setText(selectionText);
  selectionDiv.append(textArea, addButtonAdd, addButtonNeg);

  selectionNode.innerHTML = selectionNode.innerHTML.replace(selectionText,
    selectionDiv.outerHTML);
    selectionNode.querySelectorAll(".button-Add").forEach((item)=>{
        item.addEventListener("click", ()=>{
          let fontsz = document.querySelector("textarea").style.fontSize;
  if (fontsz == "")
 {
  fontsz = 1;
  console.log(fontsz)
  fontsz = (fontsz+=0.5)+"em";
  console.log(fontsz);
  document.querySelector("textarea").style.fontSize=fontsz;
}else{
   fontsz=parseFloat(fontsz);
   console.log(fontsz)
   fontsz = (fontsz+=0.5)+"em";
   console.log(fontsz);
   document.querySelector("textarea").style.fontSize=fontsz;

}
      });
    })
    selectionNode.querySelectorAll(".button-Neg").forEach((item)=>{
        item.addEventListener("click", ()=>{
          let fontsz = document.querySelector("textarea").style.fontSize;
  if (fontsz == "")
 {
  fontsz = 1;
  console.log(fontsz)
  fontsz = (fontsz-=0.5)+"em";
  console.log(fontsz);
  document.querySelector("textarea").style.fontSize=fontsz;
}else{
   fontsz=parseFloat(fontsz);
   console.log(fontsz)
   fontsz = (fontsz-=0.5)+"em";
   console.log(fontsz);
   document.querySelector("textarea").style.fontSize=fontsz;

}
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
