const greaterbtn=document.querySelector(".greaterthan");
greaterbtn.addEventListener("click",greaterbtnf);
let sum=0;

const array=['news1.avif','news2.jpeg','news2.webp','news3.webp'];
function bottomimages(sums)
{
    document.querySelector(".imagechange").src=array[sums-1];
    sum=sums-1;
}
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




