import store from '../stateManager/store';
import  {currentFontFamily} from  '../stateManager/textStates/fontFamilySlice'
import  {fontFamilyChange} from  '../stateManager/textStates/fontFamilySlice'

export  const fontfamilySelect = document.createElement('select');
        fontfamilySelect.classList.add("select-fontfamilySelect");
        let fontfamilies = ["Times New Roman", "Times", "serif", "Arial", "Helvetica", "sans-serif", "Impact", "Charcoal"];

        for ( let font of fontfamilies){
          const optionFont = document.createElement("option");
          optionFont.innerText = font;
          optionFont.value = font;
          fontfamilySelect.append(optionFont)

        }
        fontfamilySelect.addEventListener("change", ()=> {
	     store.dispatch(fontFamilyChange(fontfamilySelect.value))
        })

        const unsubscribeFontFamily = store.subscribe(() => {
        (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.fontFamily = currentFontFamily(store.getState());
         })
     