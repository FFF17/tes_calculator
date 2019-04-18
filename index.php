<!DOCTYPE html>
<html>
<head>
  <title></title>
      <script src="index.js" charset="utf-8"></script>
</head>
<body>
<form name="formx"> 
<h3 style="text-align: center;">Kalkulator</h3>
<table style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000;  font-size:12px" cellpadding="10" cellspacing="4" align="center">
  <tr>
    <td height="30">Angka Pertama</td>
    <td>:</td>
    <td><input type=number size=4 value=12 name="a"></td>
    <td> <input type="checkbox" id="myCheck1" >
</td>
  </tr>
  <tr>
    <td height="30">Angka Kedua</td>
    <td>:</td>
    <td><input type="number" size=4 value=3 name="b"></td>
        <td> <input type="checkbox" id="myCheck2" >

  </tr>
  <tr>
    <td height="30">Angka Ketiga</td>
    <td>:</td>
    <td><input type="number" size=4 value=3 name="c"></td>
        <td> <input type="checkbox" id="myCheck3"  >

  </tr>
  <tr>
    <td colspan="3" height="30"><input type="button" value="  +  " onClick="tambah(this.form)">  
<input type="button" value="  -  " onClick="kurang(this.form)">  
<input type="button" value="  x  " onClick="kali(this.form)">  
<input type="button" value="  /  " onClick="bagi(this.form)">  
</td>  </tr>
   <tr>
    <td height="30">Hasil</td>
    <td>:</td>
    <td><input type "number" value=0 name="hasil" size=9></td>
  </tr>
</table>
</form>
</body>
</html>

