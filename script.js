function getFormvalue() {
    //Write your code here
	var fname=document.getElementbyName(fname);
	var lname=document.getElementbyName(lname);

	var firname=fname.value;
	var lasname=lname.value;

	alert(firname + lasname);
}
}
