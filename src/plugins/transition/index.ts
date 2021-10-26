		


let name = 'Transition';


let targetElement:any = null;

		//transition UI starts with some events function defined for some buttons
		//these UI elements can be written in pure HTML but i decided to just use only javasccript, 
		//was trying to seperate these element out from this main code here, but for event fucntion i need to import functions, which 
		//defeated the whole modular process.
		 let easeInSlider:any = document.createElement("input")
		 easeInSlider.id = "easeInSlider"
		 easeInSlider.type= "range"
		 easeInSlider.min = "0"
		 easeInSlider.max = "100"
		 easeInSlider.value = "25"
		 easeInSlider.setAttribute('style', 'position:absolute;top:71%; left:42%')

		 easeInSlider.oninput = function(){
		 spanX1.style.left = `${easeInSlider.value*3}px`
		 context.canvas.width=context.canvas.width;

         drawCubicCurve()
         x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
         y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
         cubicBezierValue((parseInt(spanX1.style.left)/300), (300-(parseInt(spanX1.style.top)))/300,  (parseInt(spanY1.style.left)/300), (300-(parseInt(spanY1.style.top)))/300 )}


		 let easeOutSlider:any = document.createElement("input")
		 easeOutSlider.id = "easeOutSlider"
		 easeOutSlider.type= "range"
		 easeOutSlider.min = "0"
		 easeOutSlider.max = "100"
		 easeOutSlider.value = "25"
		 easeOutSlider.setAttribute('style', 'position:absolute;top:80%; left:42%')

		 easeOutSlider.oninput = function(){
		 	spanY1.style.left = `${(100-easeOutSlider.value)*3}px`
		 		context.canvas.width=context.canvas.width;
    
     	drawCubicCurve()
    	x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
    	y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
		cubicBezierValue( (parseInt(spanX1.style.left)/300), (300-(parseInt(spanX1.style.top)))/300,  (parseInt(spanY1.style.left)/300), (300-(parseInt(spanY1.style.top)))/300 )}

		

    	//these two button are just for testing purposes, need to remove them in final build
		let buttonCube:any = document.createElement("button")
		buttonCube.setAttribute('style', 
		'width:50px;background-Color:orange;height:50px;left:185px; top:55px; position:absolute; transition-Timing-Function:linear;transition-duration:2s;color:white;')
		buttonCube.id ="buttonCube"
		buttonCube.innerText = "LIFE"
		


		let buttonCube2:any = document.createElement("button")
		buttonCube2.id ="buttonCube2"
		buttonCube2.innerText = "linear"
		buttonCube2.setAttribute('style', 
		'width:50px;background-Color:teal;height:50px;left:185px; top:100px; position:absolute; transition-Timing-Function:linear;transition-duration:2s;color:white;')


		
		

		let closeButton:any = document.createElement("button")
		closeButton.style.position = "absolute"
		closeButton.style.backgroundColor ="red";
		closeButton.style.color= "white"
		closeButton.style.top = "85%"
		closeButton.style.left = "85%"
		closeButton.style.width = "50px"
		closeButton.style.height = "50px"
		closeButton.innerText = "Close"

		closeButton.addEventListener("click", ()=> {
			document.querySelector('#mainContainerMinima').remove()
		})


		let changePosition = ()=>{
		let left2 =buttonCube2.style.left	
		   	left2 = (left2=="700px")? "185px": "700px";
		   	
		  	buttonCube2.style.left = left2
		  	let left =buttonCube.style.left	
		   	left = (left=="700px")? "185px": "700px";
		  	buttonCube.style.left = left
		  }

		setInterval(changePosition, 4000);
		

		let easeinButton = document.createElement("button")
		easeinButton.innerText = "ease in";
		easeinButton.style.position = "absolute"
		easeinButton.style.color ="black";
		easeinButton.style.top = "70%"
		easeinButton.style.left = "5%"
		easeinButton.style.width = "100px"
		easeinButton.style.height = "30px"


		easeinButton.addEventListener("click", ()=>{
			
			context.canvas.width=context.canvas.width;
			spanY1.style.top  ="0px"
			spanY1.style.left = "300px"
			spanX1.style.top ="300px"
			spanX1.style.left ="125px"
			easeInSlider.value = "42"
			drawCubicCurve()
			y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
			x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
			cubicBezierValue( (parseInt(spanX1.style.left)/300), (300-(parseInt(spanX1.style.top)))/300,  (parseInt(spanY1.style.left)/300), (300-(parseInt(spanY1.style.top)))/300 )

			
		});


		let easeoutButton = document.createElement("button")
		easeoutButton.innerText = "ease out";
		easeoutButton.style.position = "absolute"
		easeoutButton.style.color ="black";
		easeoutButton.style.top = "80%"
		easeoutButton.style.left = "5%"
		easeoutButton.style.width = "100px"
		easeoutButton.style.height = "30px"

		easeoutButton.addEventListener("click", ()=>{
			
			context.canvas.width=context.canvas.width;
			spanY1.style.top  ="0px"
			spanY1.style.left = "175px"
			spanX1.style.top ="300px"
			spanX1.style.left ="0px"
			easeOutSlider.value ="58"
			drawCubicCurve()
			y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
			x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
			cubicBezierValue( (parseInt(spanX1.style.left)/300), (300-(parseInt(spanX1.style.top)))/300,  (parseInt(spanY1.style.left)/300), (300-(parseInt(spanY1.style.top)))/300 )
			
		});




		let canvasDiv = document.createElement("div")
		canvasDiv.style.position = "absolute"
		canvasDiv.style.width = "300px"
		canvasDiv.style.height = "300px"
		canvasDiv.style.top = "5%"
		canvasDiv.style.left =" 4%";
		canvasDiv.style.backgroundColor = "blue"

		let spanX1= document.createElement("button")
		spanX1.innerText = "(x1)"
		spanX1.style.position = "absolute"
		spanX1.style.color ="red";
		spanX1.style.top = "30px"
		spanX1.style.left = "30px"
		spanX1.style.zIndex = "1"


		let spanX2= document.createElement("button")
		spanX2.innerText = "(x2)"
		spanX2.style.position = "absolute"
		spanX2.style.color ="blue";
		spanX2.style.top = "300px"
		spanX2.style.left = "0px"


		let spanY1= document.createElement("button")
		spanY1.innerText = "(y1)"
		spanY1.style.position = "absolute"
		spanY1.style.color ="green";
		spanY1.style.top = "90px"
		spanY1.style.left = "90px"
		spanY1.style.zIndex = "1"


		let spanY2= document.createElement("button")
		spanY2.innerText = "(y2)"
		spanY2.style.position = "absolute"
		spanY2.style.color ="purple";
		spanY2.style.top = "0px"
		spanY2.style.left = "300px"

		let cubicSpan = document.createElement("span")
		cubicSpan.innerText = "cubic-bezier(0.10,0.90,0.30,0.66)"
		cubicSpan.style.position = "absolute"
		cubicSpan.style.color ="purple";
		cubicSpan.style.top = "138%"
		cubicSpan.style.left = "10%"
		cubicSpan.style.width = "10"


		//transition UI ends.

		




		let canvas = document.createElement("canvas")
		canvas.style.position = "absolute"
		canvas.width = 300;
		canvas.height = 300;
		
		
		canvas.style.border = "2px solid red";

		let  context = canvas.getContext("2d");
  
       


       
      


       
       console.log (parseInt(spanX1.style.top))
       //these two similar function draw the dynamic lines that spawn off from pointers.
function x1Line(top:any, left:any){
       	if (canvas.getContext) 
       {
       let context = canvas.getContext('2d');
        
       context.beginPath(); 
       context.moveTo(parseInt(spanX2.style.left), parseInt(spanX2.style.top));
       context.lineTo(left, top);
      
       context.strokeStyle = "green"
       context.lineWidth = 2;
   	   context.stroke();
   		}
       }




function y1Line(top:any, left:any){
       	if (canvas.getContext) 
       {
       let context = canvas.getContext('2d');
        
       context.beginPath(); 
       context.moveTo(parseInt(spanY2.style.left), parseInt(spanY2.style.top));
       context.lineTo(left, top);
       
       context.strokeStyle = "brown"
       context.lineWidth = 2;
   	   context.stroke();
   		}
       }

       

      spanX1.addEventListener("onmousemove", ()=>{
       x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
       })
      spanY1.addEventListener("onmousemove", ()=>{
      	
       y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
        
       })




      	//need to drag pointers to get custom value.
		dragElement(spanX1)
		
		dragElement(spanY1)
		




      canvasDiv.append(canvas) 

       
      canvasDiv.appendChild(spanX1)
      canvasDiv.appendChild(spanX2)
      canvasDiv.appendChild(spanY1)
      canvasDiv.appendChild(spanY2)
      canvasDiv.appendChild(cubicSpan)

function createEditor(event:any){  
     let mainContainer = document.createElement("div")
    
     targetElement = event.target;
		mainContainer.id = "mainContainerMinima"
		mainContainer.setAttribute(`style`, 'position:absolute; ')
		mainContainer.style.top = `${event.clientY+50}px`
		mainContainer.style.left = `${event.clientX}px`
        console.log(targetElement)

    mainContainer.append(canvasDiv, easeinButton, easeoutButton, easeInSlider, easeOutSlider, closeButton)
	
    return mainContainer
    }
//need to remove below line in final build.
 document.body.append(buttonCube,buttonCube2)

//gets the cubicBezierValue and then displays in digits, also sets the value at target element

function cubicBezierValue( p1:any, p2:any, q1:any ,q2:any){
         
   	cubicSpan.innerText= `cubic-bezier(${p1.toFixed(2)},${p2.toFixed(2)},${q1.toFixed(2)},${q2.toFixed(2)})`

   			
   	targetElement.style.transitionTimingFunction = `cubic-bezier(${p1.toFixed(2)},${p2.toFixed(2)},${q1.toFixed(2)},${q2.toFixed(2)})`

   			console.log(targetElement)

   			
   			

   }

   //draws the curve you see on canvas.
function drawCubicCurve(){
   		
    

       context.lineWidth = 4;
       context.strokeStyle = "violet";
       context.moveTo( 300, 0)
       context.bezierCurveTo( parseInt(spanY1.style.left),  parseInt(spanY1.style.top),  parseInt(spanX1.style.left), parseInt(spanX1.style.top),  0 ,  300);
       
       context.stroke();
   }
	
// when pointers are dragged, this function runs, also sets the transitionTimingFunction in real time.
function dragElement(elmnt:any) {
  let pos1:any = 0, pos2:any = 0, pos3:any = 0, pos4:any = 0;
  
   
    elmnt.onmousedown = dragMouseDown;
   
  

  function dragMouseDown(e:any) {
    e = e || window.event;
    e.preventDefault();
   
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e:any) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    if (elmnt.offsetTop - pos2<=300 && elmnt.offsetTop - pos2>=0){
    	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

    	 
   	}

   	//when pointers are being dragged, these functions get called and set values real time 
   	context.canvas.width=context.canvas.width;
    
    drawCubicCurve()
    x1Line(parseInt(spanX1.style.top), parseInt(spanX1.style.left))
    y1Line(parseInt(spanY1.style.top), parseInt(spanY1.style.left))
	cubicBezierValue((parseInt(spanX1.style.left)/300), (300-(parseInt(spanX1.style.top)))/300,  (parseInt(spanY1.style.left)/300), (300-(parseInt(spanY1.style.top)))/300 )

    if (elmnt.offsetLeft - pos1 <=300 && elmnt.offsetLeft - pos1 >=0 ){
    	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    
  }

  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




let startTransitionEditor = (event: MouseEvent) => {
	
	 if(event.altKey) {

	 	if (document.querySelector("#mainContainerMinima"))

     {
       document.querySelector("#mainContainerMinima").remove();
     }else{ 
		document.body.append(createEditor(event))
		console.log("minima transition editor loaded")

	};

	  console.log(event.altKey)
	  return true; 

	}}
	
		
	
    
	

  

//hold alt key and then click on any html element you want  to modify.

let enable = () => {
  document.addEventListener('click', startTransitionEditor );
}
let disable = () => {
  document.removeEventListener('click', startTransitionEditor  );
}

export default {
  name,
  enable,
  disable, 
  cubicBezierValue,
  y1Line,
  x1Line,
  drawCubicCurve
};
