let addtaskinput = document.getElementById("text1");
let addtaskbtn = document.getElementById("btn");
addtaskbtn.addEventListener("click",function(){
	
	inputval = addtaskinput.value;
	let webtask = localStorage.getItem("localtask");
	if(webtask == null)
	{
		taskobj = [];
	}
	
	else
	{
		taskobj= Json.parse("webtask");
	}
	
	taskobj.push("inputval");
	
	localStorage.setItem("localtask",Json.stringfy(taskobj))
	
})
	
	


