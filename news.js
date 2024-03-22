const greaterbtn=document.querySelector(".greaterthan");
greaterbtn.addEventListener("click",greaterbtnf);
let sum=0;

const array=['1bdb12b6-de17-4bb0-8f82-6e535f9c7e48.webp','5df446b4-cce2-41c7-b8c3-73f261f057fd.webp','823e816d-c757-4106-bc42-161867397396.webp','fdfae1bf-cac9-4eb1-bb6d-090e9661f2f4.webp'];

function greaterbtnf()
{
    sum++;
    if(sum==4)
    {
        sum=0;
    }
    document.querySelector(".imagechange").src=array[sum];

    
    

}
const lessthanbtn=document.querySelector(".lessthan");
lessthanbtn.addEventListener("click",lessthanf);
function lessthanf()
{
    sum--;
    if(sum==-1)
    {
        sum=3;
    }
    document.querySelector(".imagechange").src=array[sum];
  
}




