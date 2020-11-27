function MyXML()
        {
            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function()
            {
                if(this.readyState==4 && this.status==200)
                {
                    student(this);
                }
            };
            xhttp.open("GET","techovid.xml",true);
            xhttp.send();
        }

        function student(xml)
        {
            var i;
            var xmlDoc=xml.responseXML;
            var t="<tr><th>Name</th><th>Branch</th><th>College</th><th>Email</th></tr>";
            var x=xmlDoc.getElementsByTagName("CS");
            for(i=0;i<x.length;i++)
            {
                t +="<tr><td>" +
                x[i].getElementsByTagName("STU-NAME")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("STU-BRANCH")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("STU-COLLEGE")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("STU-EMAIL")[0].childNodes[0].nodeValue +
                "</td></tr>";
            }
            document.getElementById("details").innerHTML=t;
        }

        function XML()
        {
            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function()
            {
                if(this.readyState==4 && this.status==200)
                {
                    student2(this);
                }
            };
            xhttp.open("GET","techovid.xml",true);
            xhttp.send();
        }
        
        function student2(xml)
        {
            var i;
            var xmlDoc=xml.responseXML;
            var t="<tr><th>Name</th><th>College</th></tr>";
            var x=xmlDoc.getElementsByTagName("CS");
            for(i=0;i<x.length;i++)
            {
                t +="<tr><td>" +
                x[i].getElementsByTagName("STU-NAME")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("STU-COLLEGE")[0].childNodes[0].nodeValue +
                "</td></tr>";
            }
            document.getElementById("details2").innerHTML=t;
        }