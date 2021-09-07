import store from '../stateManager/store';
import  {hideTextValue} from  '../stateManager/textStates/hideTextSlice'
import  {hideToggle} from  '../stateManager/textStates/hideTextSlice'
import  {editedTextDiv} from '../index'


export  const hideText = document.createElement("button");
        hideText.classList.add("button-hideText");
       	



hideText.addEventListener("click", ()=>{
	   console.log("clicked hide text button")
      
       let editbox_text = (<HTMLTextAreaElement>document.querySelector(".minima-textbox"));
       //store.dispatch(hideToggle(editbox_text.value))
	     hideText.innerText  = (hideText.innerText == 'Hide')? 'Show': 'Hide';
      
       if (editbox_text.value) {
       	  store.dispatch(hideToggle(editbox_text.value))
          editbox_text.value = "";
          console.log(hideTextValue(store.getState()));
 		  
        } else {
           editbox_text.value =hideTextValue(store.getState());
           console.log(hideTextValue(store.getState()))
       }
	
      })
