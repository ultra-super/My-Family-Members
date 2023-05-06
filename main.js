var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","KKdas.jpg", "Manju.jpg" , "KSdas.jpg", "Sabita das.jpg", "Arihant.jpg","Tanveer.jpg"];
var names = ["Fmaily Book","Late Kamala Kanta Das   *(Died on 2022)*", "Manju das [77 Years Old]", "Kripal Sindhu Das[48 Years Old]", "Sabita Das  [40 Years Old]", "Arihant Kumar Das  [12 Years Old]","Tanveer Kumar Das  [7 Years old]"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
   
    var updatedImage =images [i];
    
    var updatedName =names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
