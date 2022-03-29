document.getElementById("btn_So").onclick = function(){
    var number =document.getElementById("txtSo").value;
    var content="";
    for(var i=1; i<=number; i++)
    {
            var check =true;
            if (i == 1) {
                check = false;
            } else {
                for(var j=2; j<=i;j++)
                { 
                    
                    if(i%j==0 && i != j){
                        check = false;
                        break;
                    }
                }
            }
            
            if(check==true)
            {
                content += i + ',';
            }
    }
   document.getElementById("kq").innerHTML = content;
}
