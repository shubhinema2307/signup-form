function form_validation(){
   // alert('hello');
    
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (fname === ""){
      document.getElementById('error-fname').style.display = 'block';
    }
    if (lname === ""){
      document.getElementById('error-lname').style.display = 'block';
    }
    if (email === "" || !filter.test(email)){
      document.getElementById('error-email').style.display = 'block';
    }
    if (password === ""){
      document.getElementById('error-pass').style.display = 'block';
    }
    
    }