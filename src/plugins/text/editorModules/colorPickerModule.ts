import '@simonwep/pickr/dist/themes/monolith.min.css'; 
import Pickr from '@simonwep/pickr';
import store from '../stateManager/store';
import  {currentTextColor} from  '../stateManager/textStates/textColorSlice'
import  {textColorChange} from  '../stateManager/textStates/textColorSlice'


export  const colorPicker = document.createElement("button");
        colorPicker.innerText ='Color';
        colorPicker.classList.add('colorPicker')
    

    colorPicker.addEventListener("click", ()=> { 


    	let parent = document.querySelector(".colorPicker");

      const pickr = Pickr.create({
       el: '.colorPicker',
       theme: 'monolith',
       useAsButton: true,

       swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(0, 21, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(10, 255, 0, 1)',
        'rgba(246, 0, 0, 1),'
       
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
      store.dispatch(textColorChange(color.toRGBA().toString(0))),
      (<HTMLButtonElement>parent).style.background= currentTextColor(store.getState());
      (<HTMLTextAreaElement>document.querySelector(".minima-textbox")).style.color = currentTextColor(store.getState());

      pickr.hide();
      document.querySelector(".pcr-app").remove();
    });
       //enable
        pickr.show();
       
          });
