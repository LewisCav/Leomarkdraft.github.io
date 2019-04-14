function selectPage(selectedlink)
{
  var pages = [document.getElementById("homecontainer"), document.getElementById("aboutcontainer"), document.getElementById("contactcontainer"), document.getElementById("previouscontainer")];
  for ( i = 0; i < pages.length; i++) 
  {
    pages[i].style.display = "none";
  }

  document.getElementById(selectedlink).style.display = "block";
}