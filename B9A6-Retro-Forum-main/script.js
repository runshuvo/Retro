const loadAllPost=async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data =await res.json();
   const posts =data.posts;
  
   console.log(posts);
   console.log();
   showPosts(posts);
}

loadAllPost();
const showPosts=(posts)=>{
    posts.forEach(post => {
        if(post.isActive){
              const allPostContainer=document.getElementById('allPostContainer');
      const postContainer=document.createElement('div');
      postContainer.classList=`m-[1px] lg:m-15 p-4 flex flex-row justify-around`
postContainer.innerHTML= `
 <!-- image section -->
            <div class=" flex flex-row justify-around  rounded-lg bg-slate-200  lg:space-x-3 lg:space-y-8">
              <div>
                <div class=" m-3 w-2 h-2 lg:w-4 lg:h-4 rounded-[50%] bg-[#10B981]"></div>
                
                <img class="" src="https://img.icons8.com/?size=100&id=111402&format=png&color=000000" alt="" srcset="">
                
              </div>
              <!-- icons and text -->
              <div>
                <div class="flex flex-row space-x-2 lg:space-x-4 text-[#12132DCC] font-medium text-xs lg:text-[14px]">
                  <p># ${post.category}</p>
                  <p>Author:${post.author.name}</p>
                </div>
                <h1 class="text-[#12132D] font-bold text-xs text-wrap lg:text-xl">${post.title}</h1>
                <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>

                <!-- icon section -->
               <div class="flex justify-around">
                 <div class="flex flex-row space-x-4">
                   <div>
                <div class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=8HTa4knTIFEw&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                     ${post.comment_count}
                  </p>
                </div>
               
              </div>
                  <div>
                <div class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                  ${post.view_count}
                  </p>
                </div>
              

                </div>
              </div>
                  <div>
                <div onclick="" class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=34&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                    ${post.posted_time}
                  </p>
                </div>
               
                <!-- read button -->
                 <div onclick="markedBtn(${post.view_count},'${post.title}')" class="">
                    <div class="w-5 h-5 my-3 flex-none hover:bg-red-500 bg-red-500 rounded-[50%] ">
                <img src="https://img.icons8.com/?size=100&id=124383&format=png&color=000000" alt="" srcset="">
              </div> 
                 </div>
               </div>
               
              </div>
             
            </div>
          
              </div>
             </div>
` 
 allPostContainer.appendChild(postContainer)
        }
        else{
              const allPostContainer=document.getElementById('allPostContainer');
      const postContainer=document.createElement('div');
      postContainer.classList=`m-[1px] lg:m-15 p-4 flex flex-row justify-around`
postContainer.innerHTML= `
 <!-- image section -->
            <div class=" flex flex-row justify-around  rounded-lg bg-slate-200  lg:space-x-3 lg:space-y-8">
              <div>
                <div class=" m-3 w-2 h-2 lg:w-4 lg:h-4 rounded-[50%] bg-[#0f100f]"></div>
               
                <img class="" src="https://img.icons8.com/?size=100&id=111402&format=png&color=000000" alt="" srcset="">
                
              </div>
              <!-- icons and text -->
              <div>
                <div class="flex flex-row space-x-2 lg:space-x-4 text-[#12132DCC] font-medium text-xs lg:text-[14px]">
                  <p># ${post.category}</p>
                  <p>Author:${post.author.name}</p>
                </div>
                <h1 class="text-[#12132D] font-bold text-xs text-wrap lg:text-xl">${post.title}</h1>
                <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>

                <!-- icon section -->
               <div class="flex justify-around">
                 <div class="flex flex-row space-x-4">
                   <div>
                <div class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=8HTa4knTIFEw&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                     ${post.comment_count}
                  </p>
                </div>
               
              </div>
                  <div>
                <div class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                  ${post.view_count}
                  </p>
                </div>
              

                </div>
              </div>
                  <div>
                <div onclick="" class="flex space-x-2 my-3 ">
                  <div class="w-5 h-5" >
                    <img src="https://img.icons8.com/?size=100&id=34&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-[15px] font-normal">
                    ${post.posted_time}
                  </p>
                </div>
               
                <!-- read button -->
                 <div onclick="markedBtn(${post.view_count},'${post.title}')" class="">
                    <div class="w-5 h-5 my-3 flex-none hover:bg-red-500 bg-red-500 rounded-[50%] ">
                <img src="https://img.icons8.com/?size=100&id=124383&format=png&color=000000" alt="" srcset="">
              </div> 
                 </div>
               </div>
               
              </div>
             
            </div>
          
              </div>
             </div>
` 
 allPostContainer.appendChild(postContainer)
        }
    
    });


}
const markedBtn=(view_count,comment_count)=>{

const markedListContainer=document.getElementById('markedListContainer');
const div=document.createElement('div');
div.innerHTML=`
<div class="flex justify-between">
                <p class="text-[#12132D] text-xs text-wrap font-bold">
                  ${comment_count}
                </p>
                 <div class="flex space-x-2 my-3 ">
                  <div class="w-4 h-4" >
                    <img src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="" srcset="">
                  </div>
                  <p class="text-[#12132D99] text-xs lg:text-[15px] font-normal">
                    ${view_count}
                  </p>
                </div>

              </div>
`
markedListContainer.appendChild(div);
const markCountContainer=document.getElementById('markCount');
let count = 0;
count =count+1;

markCountContainer.innerText=count;
console.log('ok');
}
const activeIcon=(active)=>{
console.log(active.isActive);
}