
 


const element = document.getElementById("a5");
const elementOne = document.querySelector(".a12");


element.addEventListener("click", () => {

  document.querySelector(".a").classList.add("blur");
  
  const elementTwo = document.createElement("div");
  elementTwo.className = "popup-box";

  const elementThree = document.createElement("p");
  elementThree.innerText = "add new List";
  elementThree.style.fontSize = "2vw";

  const elementFour = document.createElement("input");
  elementFour.type = "text";
  elementFour.placeholder = "add New List";
  elementFour.style.textAlign= 'center';


  const elementFive = document.createElement("div");
  elementFive.className = "popup-box-button";
  elementFive.innerText = "Add";

  const elementSix = document.createElement("div");
  elementSix.className = "popup-box-button";
  elementSix.innerText = "Close";
  
  
  elementOne.appendChild(elementTwo);
  elementTwo.appendChild(elementThree);
  elementTwo.appendChild(elementFour);
  elementTwo.appendChild(elementFive);
  elementTwo.appendChild(elementSix);
  

  
  
  const elementSeven=document.createElement("p");
  elementSeven.innerText="Enter List Name To add!!";
  elementSeven.style.display="none";
  elementTwo.appendChild(elementSeven);
  
  



  elementFive.addEventListener("click", () => {
    if (elementFour.value=== "") {
        elementSeven.style.fontSize="0.7vw"
        elementSeven.style.display="block";
    }
    else{
      document.getElementById("a7").style.display="none";
      
      const elementEight = document.createElement("div");
      elementEight.className = "box";

      const elementNine = document.createElement("span");
      elementNine.innerText = elementFour.value;
      elementNine.id="box-heading";

      const elementTen = document.createElement("i");
      elementTen.className = "fa-solid fa-circle-plus";

      const elementEleven = document.createElement("i");
      elementEleven.className = "fa-solid fa-trash-can";


      const elementTwelve = document.createElement("div");
      elementTwelve.className = "button-container";
      
      
      const container2=document.querySelector(".a2");


      
      container2.appendChild(elementEight);
      elementEight.appendChild(elementNine);
      elementEight.appendChild(elementTwelve);
      elementTwelve.appendChild(elementTen);
      elementTwelve.appendChild(elementEleven);
      



      
      elementNine.addEventListener('click',()=>{


        const heading=document.getElementById("a9");
        heading.innerText=elementNine.innerText;


        const container=document.querySelector(".a");
        container.style.visibility="hidden";


        const container3=document.querySelector(".a8");
        container3.style.visibility="visible";
        container3.appendChild(elementEight);


        const backBtn=document.getElementById("a11");
        
        
        elementEleven.addEventListener('click',()=>{


          document.querySelector(".a8").removeChild(elementEight);
          document.querySelector(".a").style.visibility="visible";
          document.querySelector(".a8").style.visibility="hidden";
        })


        backBtn.addEventListener('click',()=>{

          container3.removeChild(elementEight);
          container2.appendChild(elementEight);
          document.querySelector(".a").style.visibility="visible";
          document.querySelector(".a8").style.visibility="hidden";
        })


      })
      
      elementNine.style.borderBottom = "1px solid black";
      elementOne.removeChild(elementTwo);
      document.querySelector(".a").classList.remove("blur");


      elementEleven.addEventListener("click", () =>{

        document.querySelector(".a2").removeChild(elementEight);
        if(document.querySelector(".a2").innerText===""){
          document.querySelector("#a7").style.display="block";
        }
      });

      
      elementTen.addEventListener("click", () => {
        const elementTwo = document.createElement("div");
        elementTwo.className = "popup-box";
        elementOne.appendChild(elementTwo);
      

        const elementThree = document.createElement("p");
        elementThree.innerText = "add new Items";


        const elementFour = document.createElement("input");
        elementFour.type = "text";
        elementFour.style.textAlign = "center";
        elementFour.placeholder = "add New Items Here";


        const elementFive = document.createElement("div");
        elementFive.className = "popup-box-button";
        elementFive.innerText = "add";


        const elementSix = document.createElement("div");
        elementSix.className = "popup-box-button";
        elementSix.innerText = "Close";


        document.querySelector(".a").classList.add("blur");

        elementTwo.appendChild(elementThree);
        elementTwo.appendChild(elementFour);
        elementTwo.appendChild(elementFive);
        elementTwo.appendChild(elementSix);





        elementFive.addEventListener("click", () => {

        
          if (elementFour.value !== "") {
        
            const task = document.createElement("div");
            task.className = "task";

            const taskText = document.createElement("span");
            taskText.innerText = elementFour.value;
            taskText.className = "task-text";


            const doneButton = document.createElement("button");
            doneButton.className = "done-button";
            doneButton.innerText = "mark done";

            document.querySelector(".a").classList.remove("blur");
            elementEight.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            elementOne.removeChild(elementTwo);



            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });


        
        elementSix.addEventListener("click", () => {
          elementOne.removeChild(elementTwo);
          document.querySelector(".a").classList.remove("blur");
        });
      });
    }
  });


  
  elementSix.addEventListener("click", () => {
    elementOne.removeChild(elementTwo);
    document.querySelector(".a").classList.remove("blur");
  });
});
