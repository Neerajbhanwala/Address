import React from 'react'
import '../Style/Home.css'
function Home() {
  function chk() {
    if (document.getElementById(
    "same").checked) {
        document.getElementById(
        "secondAdd").value =
        document.getElementById(
        "firstAdd").value;
         
        document.getElementById(
        "secondPin").value =
        document.getElementById(
        "firstPin").value;
    } else {
        document.getElementById(
        "secondAdd").value = "";
        document.getElementById(
        "secondPin").value = "";
    }
}
function clk(){
  var x = document.getElementById("firstAdd");
  var y = document.getElementById("war");
  if (x.value === "")
  {
    x.style.border ="1px solid red";
    y.style.display ="inline";
  }
 
  else{
    x.style.border ="1px solid rgb(211, 208, 208)";
    y.style.display ="none";
  }
}
  return (
    <>
    <div className='main'>
<fieldset>
  <legend>Permanent address</legend>
  <label>Address <sup>*</sup></label> <br />
  <input type="text" id="firstAdd" placeholder="Enter Address..." />
  <label id="war" style={{color:"red", display:"none", fontSize:"17px"}}> Enter this field</label>
  <br />
  <label>Pin code <sup>*</sup></label> <br />
  <input type="text" id="firstPin" placeholder="Enter Pin Code..." />
  <label id="war2" style={{color:"red", display:"none", fontSize:"17px"}}> Enter this field</label>
</fieldset>
<br />
<input type="checkbox" onChange={chk} id="same" />  <label className='ft'>Check, If both address are same.</label>
<br />
<br />
<fieldset>
  <legend>Temporary address</legend>
  <label>Address <sup>*</sup></label> <br />
  <input type="text" id="secondAdd" placeholder="Enter Address..." /><br />
  <label>Pin code <sup>*</sup></label> <br />
  <input type="text" id="secondPin" placeholder="Enter Pin Code..." />
</fieldset>
<br />
<button onClick={clk}>Submit</button>
</div>
    </>
  )
}

export default Home

