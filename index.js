function tambah(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)


 var chk1 = document.getElementById("myCheck1")
 var chk2 = document.getElementById("myCheck2")
 var chk3 = document.getElementById("myCheck3")

 var d = 0
 var count = 0
 
 if(chk1.checked == true) {
  d += a
  count++
 }

 if(chk2.checked == true) {
  d += b
  count++
 }

 if(chk3.checked == true) {
  d += c
  count++
 }

 if (count <= 1) {
 	window.alert("Error")
 }

 form.hasil.value = d
}

function kurang(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)

 var chk1 = document.getElementById("myCheck1")
 var chk2 = document.getElementById("myCheck2")
 var chk3 = document.getElementById("myCheck3")

 var d = 0
 var count = 0
 
 if(chk1.checked == true) {
  if (d <= 0) {
  	d += a
  } else {
  	d -= a
  }

  count++
 }

 if(chk2.checked == true) {
  if (d <= 0) {
  	d += b
  } else {
  	d -= b
  }
  count++
 }

 if(chk3.checked == true) {
  if (d <= 0) {
  	d += c
  } else {
  	d -= c
  }
  count++
 }

 if (count <= 1) {
 	window.alert("Error")
 }

 form.hasil.value = d
}
function kali(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 
var chk1 = document.getElementById("myCheck1")
 var chk2 = document.getElementById("myCheck2")
 var chk3 = document.getElementById("myCheck3")

 var d = 0
 var count = 0
 
 if(chk1.checked == true) {
  if (d <= 0) {
  	d += a
  } else {
  	d *= a
  }

  count++
 }

 if(chk2.checked == true) {
  if (d <= 0) {
  	d += b
  } else {
  	d *= b
  }
  count++
 }

 if(chk3.checked == true) {
  if (d <= 0) {
  	d += c
  } else {
  	d *= c
  }
  count++
 }

 if (count <= 1) {
 	window.alert("Error")
 }

 form.hasil.value = d
}

function bagi(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 var chk1 = document.getElementById("myCheck1")
 var chk2 = document.getElementById("myCheck2")
 var chk3 = document.getElementById("myCheck3")

 var d = 0
 var count = 0
 
 if(chk1.checked == true) {
  if (d <= 0) {
  	d += a
  } else {
  	d /= a
  }

  count++
 }

 if(chk2.checked == true) {
  if (d <= 0) {
  	d += b
  } else {
  	d /= b
  }
  count++
 }

 if(chk3.checked == true) {
  if (d <= 0) {
  	d += c
  } else {
  	d /= c
  }
  count++
 }

 if (count <= 1) {
 	window.alert("error ")
 }

 form.hasil.value = d
}
