var txt = document.getElementById('display');
var val1,val2, ans;
var flag=false;
var op = null;
var finish = false;
var f = false;

document.getElementById('btn0').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="0";
        }
        else{
            txt.innerHTML+="0";
        }
    }     
    }
});

document.getElementById('btn1').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="1";
        }
        else{
            txt.innerHTML+="1";
        }
    }     
    }
});

document.getElementById('btn2').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="2";
        }
        else{
            txt.innerHTML+="2";
        }
    }     
    }
});

document.getElementById('btn3').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="3";
        }
        else{
            txt.innerHTML+="3";
        }
    }     
    }
});

document.getElementById('btn4').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="4";
        }
        else{
            txt.innerHTML+="4";
        }
    }     
    }
});

document.getElementById('btn5').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="5";
        }
        else{
            txt.innerHTML+="5";
        }
    }     
    }
});

document.getElementById('btn6').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="6";
        }
        else{
            txt.innerHTML+="6";
        }
    }     
    }
});

document.getElementById('btn7').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="7";
        }
        else{
            txt.innerHTML+="7";
        }
    }     
    }
});

document.getElementById('btn8').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="8";
        }
        else{
            txt.innerHTML+="8";
        }
    }     
    }
});

document.getElementById('btn9').addEventListener('click',()=>{
    if(finish==false){
    if(txt.innerHTML.length<=8)
    {
    if(txt.innerHTML=="0"){
        txt.innerHTML="9";
        }
        else{
            txt.innerHTML+="9";
        }
    }     
    }
});

document.getElementById('btndot').addEventListener('click',()=>{
    if(finish==false){
    if(f == false){
            txt.innerHTML+=".";
            f=true;
        }
    }
});

document.getElementById('btnsum').addEventListener('click',()=>{
    if(finish==false){
    if(flag==false){
        document.getElementById('btnsum').classList.add("fontcolor");
        var1 = txt.innerHTML;
        op = "sum";
        txt.innerHTML = "0";
        f=false;

    }
    }
});

document.getElementById('btnsub').addEventListener('click',()=>{
    if(finish==false){
    if(flag==false){
        document.getElementById('btnsub').classList.add("fontcolor");
        var1 = txt.innerHTML;
        op = "sub";
        txt.innerHTML = "0";
        f=false;

    }
    }
});

document.getElementById('btnmul').addEventListener('click',()=>{
    if(finish==false){
    if(flag==false){
        document.getElementById('btnmul').classList.add("fontcolor");
        var1 = txt.innerHTML;
        op = "mul";
        txt.innerHTML = "0";
        f=false;

    }
    }
});

document.getElementById('btndiv').addEventListener('click',()=>{
    if(finish==false){
    if(flag==false){
        document.getElementById('btndiv').classList.add("fontcolor");
        var1 = txt.innerHTML;
        op = "div";
        txt.innerHTML = "0";
            f=false;

    }
    }
});


document.getElementById('btnans').addEventListener('click',()=>{
if(finish==false){
    if(op=="sum"){
        document.getElementById('display').style.color="rgb(187, 128, 0)";
        document.getElementById('display').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.color="rgb(187, 128, 0)";
        document.getElementById('btncls').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.boxShadow="0 0 10px rgb(187, 128, 0, 0.8)";
        finish = true;
        var2 = txt.innerHTML;
        ans = parseFloat(var1)+parseFloat(var2);
        if(ans.toString().length<=14)
        {
            txt.innerHTML = ans.toFixed(2);
        }
        else{
            txt.innerHTML = "SORRY LARGE ANS";
        }
    }
    else if(op=="sub"){
        document.getElementById('display').style.color="rgb(187, 128, 0)";
        document.getElementById('display').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.color="rgb(187, 128, 0)";
        document.getElementById('btncls').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.boxShadow="0 0 10px rgb(187, 128, 0, 0.8)";
        finish = true;
        var2 = txt.innerHTML;
        ans = parseFloat(var1)-parseFloat(var2);
        if(ans.toString().length<=14)
        {
            txt.innerHTML = ans.toFixed(2);
        }
        else{
            txt.innerHTML = "SORRY LARGE ANS";
        }
    }
    else if(op=="mul"){
        document.getElementById('display').style.color="rgb(187, 128, 0)";
        document.getElementById('display').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.color="rgb(187, 128, 0)";
        document.getElementById('btncls').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.boxShadow="0 0 10px rgb(187, 128, 0, 0.8)";
        finish = true;
        var2 = txt.innerHTML;
        ans = parseFloat(var1)*parseFloat(var2);
        if(ans.toString().length<=14)
        {
            txt.innerHTML = ans.toFixed(2);
        }
        else{
            txt.innerHTML = "SORRY LARGE ANS";
        }
    }
    else if(op=="div"){
        document.getElementById('display').style.color="rgb(187, 128, 0)";
        document.getElementById('display').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.color="rgb(187, 128, 0)";
        document.getElementById('btncls').style.textShadow="0 0 20px rgb(187, 128, 0, 0.8)";
        document.getElementById('btncls').style.boxShadow="0 0 10px rgb(187, 128, 0, 0.8)";
        finish = true;
        var2 = txt.innerHTML;
        ans = parseFloat(var1)/parseFloat(var2);
        if(ans.toString().length<=14)
        {
            txt.innerHTML = ans.toFixed(2);
        }
        else{
            txt.innerHTML = "SORRY LARGE ANS";
        }
    }
}


});

document.getElementById('btnback').addEventListener('click',()=>{
    // var temp1 = parseFloat(txt.innerHTML);
    // var temp2 = txt.innerHTML.length;
    // var temp3 = temp2 - 1;
    // var temp4 = txt.innerHTML.toFixed(temp3);
    // txt.innerHTML = temp4; 

    var temp1 = parseFloat(txt.innerHTML);
    var temp2 = (temp1-(temp1%10))/10;
    txt.innerHTML = temp2;
    f = false;

});

document.getElementById('btncls').addEventListener('click',()=>{
    document.getElementById('btncls').style.color="rgb(134, 112, 255)"
    document.getElementById('btncls').style.textShadow="none"
    document.getElementById('btncls').style.boxShadow="none"
    document.getElementById('display').style.color="rgb(134, 112, 255)"
    document.getElementById('display').style.textShadow="0 0 20px rgb(134, 112, 255)"
    finish = false;
    op = null;
    txt.innerHTML="0"
    document.getElementById('btnsum').classList.remove("fontcolor");
    document.getElementById('btnsub').classList.remove("fontcolor");
    document.getElementById('btnmul').classList.remove("fontcolor");
    document.getElementById('btndiv').classList.remove("fontcolor");
    val1 = undefined;
    val2 = undefined;
    f=false;
});

