var fname = document.getElementById("fname"),
	lname = document.getElementById("lname"),
	company = document.getElementById("company"),
	pnum = document.getElementById("pnum"),
	email = document.getElementById("email"),
	addy = document.getElementById("addy"),
	bday = document.getElementById("bday"),
	soa = document.getElementById("soa"),
	soanum = document.getElementById("soanum"),
	quotes = document.getElementById("quotes"),
	cat = document.getElementById("cat"),
	notes = document.getElementById("notes"),
	clearData = document.getElementById("cleardata"),
	displayData = document.getElementById("displayData"),
	rock = document.getElementById("rock"),
	paper = document.getElementById("paper"),
	scissor = document.getElementById("scissor"),
	box1,
	box2,
	box3,
	errors = document.getElementById("errors"),
	mopeeps = document.getElementById("mopeeps"),
	cats = document.getElementById("cats"),
	catsGo = document.getElementById("catsGo"),
	searchNavBtn = document.getElementById("searchNavBtn"),
	famPagebtn = document.getElementById("famPagebtn")
	cowoPagebtn = document.getElementById("cowoPagebtn"),
	friendPagebtn = document.getElementById("friendPagebtn"),
	frienemyPagebtn = document.getElementById("frienemyPagebtn"),
	aquetPagebtn = document.getElementById("aquetPagebtn"),
	searchContentsJq= $("#searchContents"),
	familyContents=document.getElementById("familyContents"),
	searchContentsJs=document.getElementById("searchContents"),
	friendContents=document.getElementById("friendContents"),
	cowoContents=document.getElementById("cowoContents"),
	frienemyContents=document.getElementById("frienemyContents"),
	aquentencesContents=document.getElementById("aquentencesContents"),
	addPeep = document.getElementById("addPeep");


var say = function(message){
	console.log(message);
};


var parsePeepForm = function(peepData,key){
	if(!key){
		var keyID = Math.floor(Math.random()*19876);
	}else{
		keyID = key;
	}

	var data = {};
		data.fname = ["First Name: "];
		data.lname = ["Last Name: "];
		data.company = ["Company: "];
		data.pnum = ["Phone Number: "];
		data.email = ["E-Mail: "];
		data.addy = ["Address: "];
		data.bday = ["Birthday: "];
		data.rock = ["Rock: ","No"];
		data.paper = ["Paper: ","No"];
		data.scissor = ["Scissor: ","No"];
		data.donor = ["Organ Donor: "];
		data.soa = ["Awesomeness: "];
		data.cat = ["Category: "];
		data.quotes = ["Best Quotes: "];
		data.notes = ["Notes: "];

	for(i=0; i < peepData.length; i++){
		var peepObj = peepData[i]
		var name = peepObj.name;
		var value = peepObj.value;

		if(name === "fname"){
			data.fname.push(value);
		}
		if(name === "lname"){
			data.lname.push(value);
		}
		if(name === "company "){
			data.company.push(value);
		}
		if(name === "pnum"){
			data.pnum.push(value);
		}
		if(name === "email"){
			data.email.push(value);
		}
		if(name === "addy"){
			data.addy.push(value);
		}
		if(name === "bday"){
			data.bday.push(value);
		}
		if(name === "rps" & value ==="Rock"){
			data.rock[1] = "yes";
		}
		if(name === "rps" & value ==="Paper"){
			data.paper[1] = "yes";
		}
		if(name === "rps" & value ==="Scissor"){
			data.scissor[1] = "yes";
		}
		if(name === "donor" & value ==="on"){
			data.donor.push("yes");
		}else if(name === "donor" & value ==="off"){
			data.donor.push("no");
		}
		if(name === "soa"){
			data.soa.push(value);
		}
		if(name === "cat"){
			data.cat.push(value);
		}
		if(name === "quotes"){
			data.quotes.push(value);
		}
		if(name === "notes"){
			data.notes.push(value);
		}
	}

	localStorage.setItem(keyID, JSON.stringify(data));
	fname.value = "";
	lname.value = "";
	company.value = "";
	pnum.value = "";
	email.value = "";
	addy.value = "";
	bday.value = "";
	quotes.value = "";
	notes.value = "";
	document.location.href = "index.html#homePage";
	//document.location.reload(true);
	alert("Peep Saved!");

}

var deleteItem = function(){
	var deleteComf = confirm("Are you sure you want to delete this Peep?")
		if(deleteComf){
			localStorage.removeItem(this.key);
			window.location.reload(true);
		}else{
			alert("Peep Not Deleted")
		}
}

var editItem = function(){
	var itemValue = localStorage.getItem(this.key);
	var data = JSON.parse(itemValue);

	//Show form again
	document.location.href = "index.html#addPeepPage";
	//document.reload(true);
	//repopulate form
	fname.value = data.fname[1];
	lname.value = data.lname[1];
	company.value = data.company[1];
	pnum.value = data.pnum[1];
	email.value = data.email[1];
	addy.value = data.addy[1];
	bday.value = data.bday[1];
	rock.value = data.rock[1];
	paper.value = data.paper[1];
	scissor.value = data.scissor[1];
	var radio  = document.getElementsByTagName("input");
	var radio1 = radio[10];
	var radio2 = radio[11];
		if(radio1.value == "Yes" && data.donor[1] == "Yes"){
			radio1.setAttribute("checked","checked")
		}else if(radio2 == "Yes" && data.donor[1] == "Yes"){
			radio1.setAttribute("checked","checked")
		}
	if(data.rock[1] == "Yes"){
		rock.setAttribute("Checked", "Checked");
	}
	if(data.paper[1] == "Yes"){
		paper.setAttribute("Checked", "Checked");
	}
	if(data.scissor[1] == "Yes"){
		scissor.setAttribute("Checked", "Checked");
	}

	soa.value = data.soa[1];
	cat.value = data.cat[1];
	quotes.value = data.quotes[1];
	notes.value = data.notes[1];

	addPeep.removeEventListener("Click", parsePeepForm);
	addPeep.value = "Edit Contact";
	var editPeep = addPeep;
	editPeep.key = this.key;

	say(key);

	var addPeepForm = $("#addPeepForm");
	addPeepForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler:function(){
			var peepData = addPeepForm.serializeArray();
			var key = editPeep.key;
			parsePeepForm(peepData,key);
			document.location.href = "index.html#searchPage"
			//showAllPeeps();
		}
	});
}

var showAllPeeps = function(){

	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}
	
	var count = searchContentsJs.childNodes.length;
	if(count >= 1){
		while(searchContentsJs.firstChild){
			searchContentsJs.removeChild(searchContentsJs.firstChild);
		}
	}

	var addUl = document.createElement("ul")
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allPeeps");


	for(i=0; i < localStorage.length; i++){
		searchContentsJq.append(addUl);
		var addLi = document.createElement("li");
		//var allPeeps=document.getElementById("allPeeps");
		var allPeeps = $("#allPeeps");
		allPeeps.append(addLi);

		var editDeleteLks = document.createElement("li");

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		var addSubUl = document.createElement("ul");
		addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
		addLi.appendChild(addSubUl);

		getCatImage(peepItem.cat[1],addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
			addSubUl.appendChild(editDeleteLks);
		}

		

		createEditDeleteLks(storeKey,addSubUl);
	}

}
var createEditDeleteLks = function(storeKey,editDeleteLks){
	var editLink = document.createElement("a");
	editLink.href = "#";
	editLink.key = storeKey;
	var editLinkText = "Edit Peep";
	editLink.addEventListener("click", editItem);
	editLink.innerHTML = editLinkText;
	editDeleteLks.appendChild(editLink);

	var breakTag = document.createElement("br");
	editDeleteLks.appendChild(breakTag);

	var deleteLink = document.createElement("a");
	deleteLink.href = "#";
	deleteLink.key = storeKey;
	var deleteLinkText = "Delete Peep";
	deleteLink.addEventListener("click", deleteItem);
	deleteLink.innerHTML = deleteLinkText;
	editDeleteLks.appendChild(deleteLink);
}

var getCatImage = function(peepCat,addSubUl){
	var catImageLi = document.createElement("li");
	addSubUl.appendChild(catImageLi);
	var catImage = document.createElement("img");
	var imageSrc = catImage.setAttribute("src","images/" + peepCat +".png");
	catImageLi.appendChild(catImage);
}

var clearLocal = function(){
	localStorage.clear();
	document.location.href = "index.html#homePage";
	document.location.reload(true);
	alert("All data cleared.")

}

var addDefaultPeeps = function(){
	for(var n in json){
		var keyID = Math.floor(Math.random()*19876);
		localStorage.setItem(keyID, JSON.stringify(json[n]));
	}
}

var showFamPeeps = function(){

	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}

	var count = familyContents.childNodes.length;
	if(count >= 1){
		while(familyContents.firstChild){
			familyContents.removeChild(familyContents.firstChild);
		}
	}

	var addUl = document.createElement("ul");
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allFamily");

	for(i=0; i < localStorage.length; i++){
		familyContents.appendChild(addUl);
		var allFamily=document.getElementById("allFamily");
		var addLi = document.createElement("li");

		var editDeleteLks = document.createElement("li");

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		if(peepItem.cat[1] === "Family"){
		var addSubUl = document.createElement("ul");
		addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
		addLi.appendChild(addSubUl);


		getCatImage(peepItem.cat[1],addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
			addSubUl.appendChild(editDeleteLks);
		}
		allfriends=document.getElementById("allfriends");
		createEditDeleteLks(storeKey,addSubUl);
		allFamily.appendChild(addLi);
		}
	}
}

var showCowoPeeps = function(){

	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}

	var count = cowoContents.childNodes.length;
	if(count >= 1){
		while(cowoContents.firstChild){
			cowoContents.removeChild(cowoContents.firstChild);
		}
	}

	var addUl = document.createElement("ul")
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allcoWo");

	for(i=0; i < localStorage.length; i++){
		cowoContents.appendChild(addUl);
		var allcoWo=document.getElementById("allcoWo");
		var addLi = document.createElement("li");

		var editDeleteLks = document.createElement("li");

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		if(peepItem.cat[1] === "Co-Worker"){
		var addSubUl = document.createElement("ul");
		addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
		addLi.appendChild(addSubUl);

		getCatImage(peepItem.cat[1],addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
			addSubUl.appendChild(editDeleteLks);
		}
		allcoWo= document.getElementById("allcoWo");
		createEditDeleteLks(storeKey,addSubUl);
		allcoWo.appendChild(addLi);
		}
	}
}

var showFriendPeeps = function(){

	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}

	var count = friendContents.childNodes.length;
	if(count >= 1){
		while(friendContents.firstChild){
			friendContents.removeChild(friendContents.firstChild);
		}
	}

	var addUl = document.createElement("ul")
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allfriends");

	for(i=0; i < localStorage.length; i++){
		friendContents.appendChild(addUl);
		var allfriends=document.getElementById("allfriends");
		var addLi = document.createElement("li");

		var editDeleteLks = document.createElement("li");

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		if(peepItem.cat[1] === "Friend"){
		var addSubUl = document.createElement("ul");
		addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
		addLi.appendChild(addSubUl);


		getCatImage(peepItem.cat[1],addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
			addSubUl.appendChild(editDeleteLks);
		}
		allfriends=document.getElementById("allfriends");
		createEditDeleteLks(storeKey,addSubUl);
		allfriends.appendChild(addLi);
		}
	}
}

var showFrienemyPeeps = function(){
	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}

	var count = frienemyContents.childNodes.length;
	if(count >= 1){
		while(frienemyContents.firstChild){
			frienemyContents.removeChild(frienemyContents.firstChild);
		}
	}

	var addUl = document.createElement("ul")
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allfrienemies");

	for(i=0; i < localStorage.length; i++){
		frienemyContents.appendChild(addUl);
		var addLi = document.createElement("li");
		var editDeleteLks = document.createElement("li");
		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		if(peepItem.cat[1] === "Frienemy"){
		var addSubUl = document.createElement("ul");
		addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
		addLi.appendChild(addSubUl);


		getCatImage(peepItem.cat[1],addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
			addSubUl.appendChild(editDeleteLks);
		}
		createEditDeleteLks(storeKey,addSubUl);
		allfrienemies=document.getElementById("allfrienemies");
		allfrienemies.appendChild(addLi);
		}
	}
}
var showAquetPeeps = function(){
	if(localStorage.length === 0){
		var noPeepAddPeep = confirm("There are no Peeps in storage, add Default Peeps?");
		if(noPeepAddPeep){
			addDefaultPeeps();
		}else{
			window.location.reload(true);
		}
	}

	var count = aquentencesContents.childNodes.length;
	if(count >= 1){
		while(aquentencesContents.firstChild){
			aquentencesContents.removeChild(aquentencesContents.firstChild);
		}
	}

	var addUl = document.createElement("ul")
	addUl.setAttribute("data-role","listview");
	addUl.setAttribute("data-filter","true");
	addUl.setAttribute("id","allaquentences");

	for(i=0; i < localStorage.length; i++){
		aquentencesContents.appendChild(addUl);
		var addLi = document.createElement("li");

		var editDeleteLks = document.createElement("li");

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		if(peepItem.cat[1] === "Aquentence"){
			var addSubUl = document.createElement("ul");
			addLi.innerHTML = peepItem.fname[1] + " " + peepItem.lname[1];
			addLi.appendChild(addSubUl);

			getCatImage(peepItem.cat[1],addSubUl);

			for(var n in peepItem){
				var addSubLi = document.createElement("li");
				addSubUl.appendChild(addSubLi);
				var peepData = peepItem[n][0]+" "+peepItem[n][1];
				addSubLi.innerHTML = peepData;
				addSubUl.appendChild(editDeleteLks);
			}
			allaquentences=document.getElementById("allaquentences");
			createEditDeleteLks(storeKey,addSubUl);
			allaquentences.appendChild(addLi);
		}
	}
}

$(document).ready(function(){

	var addPeepForm = $("#addPeepForm");
	addPeepForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler:function(){
			var peepData = addPeepForm.serializeArray();
			parsePeepForm(peepData);
			document.location.href = "index.html#searchPage"
			showAllPeeps();
		}

	});


	
	
});

/*$("#homePage").live('pageinit',function(){
	$("#addPeep").listview("refresh");
    });*/

//Event Listeners
displayData.addEventListener("click", showAllPeeps);
cleardata.addEventListener("click", clearLocal);
searchNavBtn.addEventListener("click", showAllPeeps);
aquetPagebtn.addEventListener("click", showAquetPeeps);
frienemyPagebtn.addEventListener("click", showFrienemyPeeps);
friendPagebtn.addEventListener("click", showFriendPeeps);
cowoPagebtn.addEventListener("click", showCowoPeeps);
famPagebtn.addEventListener("click", showFamPeeps);
//




