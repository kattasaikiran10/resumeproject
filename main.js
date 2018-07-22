//function Loadjson(file,callback) {
  //  var x= new XMLHttpRequest();-->
  //x.overrideMimeType("application/json");
//  x.open("GET",file,true);
  //x.onreadystatechange=function(){
    //if(x.readyState === 4 && x.status == "200"){
      // callback(x.responseText);
  //  }
  //};
  //x.send(null);

//}
//Loadjson("data.json",function(text){
//var data=JSON.parse(text);
//console.log(data);
// basics(data.details);
// careerinfo(data.career);
// education(data.education);
// keyskills(data.keyskills);
// achievements(data.achievements);
// })
//
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok) {
        resolve(response.json());
      }
      else{
        reject(new Error('Error'));
      }
    })
  })
  }
  var file = loadjson("data.json");
    file.then(data=>{
      console.log(data);
      basics(data.details);
      careerinfo(data.career);
      education(data.education);
      keyskills(data.keyskills);
      achievements(data.achievements);
      })

var child1 = document.querySelector(".child1");


function basics(det) {
  var image = document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

var name = document.createElement("h1");
name.textContent = det.name;
child1.appendChild(name);

var phoneno= document.createElement("h3");
phoneno.textContent = det.phoneno;
child1.appendChild(phoneno);

var email=document.createElement("a");
email.href="mailto:saikirankatta10@gmail.com";
email.textContent = det.email;
child1.appendChild(email);

var add=document.createElement("h2");
add.textContent ="Address";
child1.appendChild(add);

child1.appendChild(document.createElement("hr"));


var Address=document.createElement("h3");
Address.textContent = det.Address;
child1.appendChild(Address);
}

var child2=document.querySelector(".child2");

function careerinfo(act){
  var first=document.createElement("h2");
  first.textContent =act.info;
  child2.appendChild(first);

  child2.appendChild(document.createElement("hr"));

var sec= document.createElement("h3");
sec.textContent =act.des;
child2.appendChild(sec);

}
function education(edu)
{
  var ed=document.createElement("h2");
  ed.textContent="EDUCATION DETAILS";
  child2.appendChild(ed);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

for(i=0;i<edu.length;i++)
{

  var degree=document.createElement("h4");
  degree.textContent =edu[i].degree;
  child2.appendChild(degree);

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.textContent=edu[i].institute;
  ul.appendChild(li);
  child2.appendChild(ul);

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.textContent=edu[i].date;
  ul.appendChild(li);
  child2.appendChild(ul);

}
}
function keyskills(sil)
{
  var skill = document.createElement("h3");
  skill.textContent="Technical Skills";
  child2.appendChild(skill);

  child2.appendChild(document.createElement("hr"));

  var skilldata = document.createElement("table");
  skilldata.border = "1";
  child2.appendChild(skilldata);

  tabledata="";
  for (i=0;i<sil.length;i++){
    tabledata=tabledata+"<tr><td>"+sil[i].title+"</td><td>"+sil[i].info+"</td></tr>";
  }
  skilldata.innerHTML=tabledata;
}
function achievements(ach)
{
  var pe = document.createElement("h3");
  pe.textContent="Achievements";
  child2.appendChild(pe);

  child2.appendChild(document.createElement("hr"));

for (var i = 0; i < ach.length; i++) {
  var ul=document.createElement("ul");
  var li=document.createElement("li");
  li.textContent = ach[i].achieve;
  ul.appendChild(li);
  child2.appendChild(ul);
}
}
function openpage(){
  window.open("resume.html","_self","true");
}
