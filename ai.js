


 const getApi=async()=>{

   const res=await fetch('https://openapi.programming-hero.com/api/ai/tools');
   const data= await res.json()
   const apis=data.data.tools;
  

 getTools(apis)


 


 }

 
       const getTools=(apis)=>{
       const fatherDiv=document.getElementById("father-div");
         fatherDiv.textContent='';

      
       



     apis.forEach(api=>{
      
      

      








    const hubdiv=document.createElement("div");
   



    hubdiv.innerHTML=`
    <div class="card  bg-base-300 shadow-xl">
                        <figure><img src="${api?.image || 'no image' }" alt="Shoes" /></figure>
                        <div class="card-body">
                          <h2 class="card-title">${api.name}</h2>
                          <div>
                            <p class="text-xl font-bold">Features</p>

                            <p>${api.features[0]}</p>
                            <p>${api.features[1]}</p>
                            <p>${api.features[2]}</p>


                          </div>
                          
                          <div class="card-actions justify-center">
                            <button  onclick="showAllDetail('${api.id}')
                            show_modal_5.showModal()"  class="btn btn-primary">Details</button>
                          </div>
                        </div>
                      </div>`




     fatherDiv.appendChild(hubdiv);

console.log(api);


  })
       
 

 



    };

   
       const showAllDetail=async(id)=>{

    const res=await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data=await res.json()
   
   


        getTheData(data);


        show_modal_5.showModal()

    };
     
      



 const getTheData=(data)=>{


 const modelFather=document.getElementById("model-father");

 modelFather.textContent='';
 

 const div1=document.createElement("div");
 div1.innerHTML=`
     <p class="text-2xl font-bold text-center">${data.data.description}</p>

     <div class="text-center space-y-4">

      <p>Plan: <span class="text-xl text-green-600">${data.data.pricing[0].plan}</span>,Price <span class="text-xl text-green-600">${data.data.pricing[0].price}</span></p>
     
     
      <p>Plan: <span class="text-xl text-green-600">${data.data.pricing[1].plan}</span>,Price <span class="text-xl text-green-600">${data.data.pricing[1].price}</span></p>

      
      <p>Plan: <span class="text-xl text-green-600">${data.data.pricing[2].plan}</span>,Price <span class="text-xl text-green-600">${data.data.pricing[2].price}</span></p>
     </div>

     <div class="text-center space-y-3">
   <p class="text-xl font-bold">Integrations</p>
   <p>${data.data.integrations}</p>

   </div>

   `;

 const div2=document.createElement("div")
 div2.innerHTML=`
 
 <img src="${data.data.image_link[0]}"/>
 <p>Input:<span>${data.data.input_output_examples[0].input}</span></p>
 <p>OutPut:<span>${data.data.input_output_examples[1].input}</span></p>
 `;
modelFather.appendChild(div1);
modelFather.appendChild(div2);
 
console.log(data.data);



 };




 


 

   
 getApi();
 












  

















