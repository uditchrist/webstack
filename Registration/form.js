// function formValidation()
// {
//       var phoneno = /^\d{10}$/;

//         var x=document.getElementById("num").value;
        
//         if((x.match(phoneno)))
//               {
//                 document.getElementById("error6").innerHTML="";
//                 return true;
//               }
//             else
//               {
//                 document.getElementById("error6").innerHTML="invalid Mobile Number";
//                 return false;
//               }           
// }

function formValidation()
{
      var phoneno = /^\d{10}$/;

        var x=document.getElementById("num").value;
        var e=document.getElementById("e").value;
        var atpos=e.indexOf("@");
        var dotpos=e.lastIndexOf(".");
        
        if((!x.match(phoneno)))
        {
            return false;
        }   
        if(atpos<4 || dotpos<atpos+3)
        {
            return false;
        }
        // return true;
}
    
    
    
    function chkblnk(eid,errid) {
        var x=document.getElementById(eid).value;
        if(x=="")
        {
            document.getElementById(errid).innerHTML="Please fill this field";
            return false;
        }
        else
        {
            document.getElementById(errid).innerHTML="";
            return false;
        }
    }
    
    function chkAplha(event,err)   {
        if(!((event.which>=65 && event.which<=90) || (event.which>=97 && event.which<=122) || event.which==0 || event.which==8))
        {
            document.getElementById(err).innerHTML="invalid name format";
            return false;
        }
        else
        {
            return true;
        }
    }
    function chkNum(event,err)   {
        if(!((event.which>=48 && event.which<=57 || event.which==43 || event.which==8) ))
        {
            document.getElementById(err).innerHTML="invalid ID format";
            return false;
        }
        else
        {
            return true;
        }
    }
    
    function chkeid(){
        var e=document.getElementById("e").value;
        var atpos=e.indexOf("@");
        var dotpos=e.lastIndexOf(".");
        if(atpos<4 || dotpos<atpos+3)
        {
            document.getElementById("error5").innerHTML="invalid email";
            return false;
        }
        else
        {
            document.getElementById("error5").innerHTML="";
            return true;
        }

    }
    
   function phonenumber(){
        var phoneno = /^\d{10}$/;

        var x=document.getElementById("num").value;
        
        if((x.match(phoneno)))
              {
                document.getElementById("error6").innerHTML="";
                return true;
              }
            else
              {
                document.getElementById("error6").innerHTML="invalid Mobile Number";
                return false;
              }
      }

