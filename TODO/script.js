 let buttonCount = 0;
    function display(){
        document.getElementById("search").style.display="inline-block";
    	document.getElementById("go").style.display="inline-block";
    }

 	function addListAfterClick(){
        var input = document.getElementById("search");
	    if(input.value.length > 0) { 
	        createListElement();
	    }
    function createListElement(){
        buttonCount++;
        var input = document.getElementById("search");
        var item = document.getElementsByTagName("li")
        var ul = document.querySelector(".UL");
     	var li = document.createElement("li");
     	var input1 = document.createElement("input");
     	input1.setAttribute("value", input.value);
     	input1.setAttribute("id", "input"+buttonCount);
     	input1.disabled = true;
     	li.appendChild(input1);
        ul.appendChild(li);
        input.value="";
        function crossOut(){
        	li.classList.add("done");
        }
        li.addEventListener("click",crossOut);
        var btn = document.createElement("button");
        btn.className="edit";
    	btn.setAttribute("id", "edit"+buttonCount);
        btn.appendChild(document.createTextNode("edit")); 
        li.appendChild(btn);
        btn.addEventListener("click", () => editListItem(buttonCount));
        function editListItem(buttonCount){
           input1.disabled=false;
           document.getElementById('edit'+buttonCount).innerHTML="save";
           btn.addEventListener("click",saveListItem);
           function saveListItem(){
           	input1.disabled=true;
           	document.getElementById('edit'+buttonCount).innerHTML="edit";
           	li.classList.add("Save");
           }
       }
        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));
	    li.appendChild(dBtn);
		dBtn.addEventListener("click", deleteListItem);
		function deleteListItem(){
		    li.classList.add("delete");
		}
    }
}