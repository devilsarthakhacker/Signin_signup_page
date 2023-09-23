let signupbtn = document.getElementById("signupbtn");
        let signinbtn = document.getElementById("signinbtn");
        let name = document.getElementById("name");
        let title = document.getElementById("title");
        let forgotpass = document.getElementById("forgotpass");
        let terms = document.getElementById("terms") 

        // signinbtn.onclick = function(){
        //     name.style.maxHeight = "0px";
        //     title.innerHTML = "Sign In";
        //     signupbtn.classList.add("disable");
        //     signinbtn.classList.remove("disable");
        //     forgotpass.style.display ="block";
        //     terms.style.display ="none";
        // }
        
        signupbtn.onclick = function(){
            if(title.innerHTML === "Sign Up"){
                document.getElementById('formbox').addEventListener('submit', function(e){
                    e.preventDefault(); // Prevent the for actually submitting

                    document.getElementById('formbox').reset(); // Reset the form to clr input values
                })
            }
            else{
            name.style.maxHeight = "60px";
            title.innerHTML = "Sign Up";
            signupbtn.classList.remove("disable");
            signinbtn.classList.add("disable");
            forgotpass.style.display ="none";
            terms.style.display ="block";
            }
        }

        signinbtn.onclick = function(){
            if(title.innerHTML === "Sign In"){
                document.getElementById('formbox').addEventListener('submit', function(e){
                    e.preventDefault(); // Prevent the for actually submitting

                    document.getElementById('formbox').reset(); // Reset the form to clr input values
                })
            } 

            
            else{
                name.style.maxHeight = "0px";
            title.innerHTML = "Sign In";
            signupbtn.classList.add("disable");
            signinbtn.classList.remove("disable");
            forgotpass.style.display ="block";
            terms.style.display ="none";
            }
        }