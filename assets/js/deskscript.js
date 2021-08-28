let tabPanes = document.getElementsByClassName("tab-header1")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header1")[0].getElementsByClassName("active1")[0].classList.remove("active1");
    tabPanes[i].classList.add("active1");
    
    document.getElementsByClassName("tab-content1")[0].getElementsByClassName("active1")[0].classList.remove("active1");
    document.getElementsByClassName("tab-content1")[0].getElementsByClassName("tab-body1")[i].classList.add("active1");
  });
}