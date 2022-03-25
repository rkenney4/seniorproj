<template>
    <h1><u>Test Management</u></h1>

    <body>
      <!--
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

      <ul id="myUL">
        <a href="#" class="filter_link" data-filter="All">All</a> 
        <a href="#" class="filter_link" data-filter="Instagram">Instagram</a> 
        <a href="#" class="filter_link" data-filter="Facebook">Facebook</a>
      </ul>
-->
      <!--This is the code for the search bar -->
      <div class="search">
        <form action="#">
          <input type="text"
            placeholder="Search Project ..."
            name="search"
          >
            <button type="submit" style="margin:10px">Search</button>
        </form>
      </div>
      <!-- This is the card element for Instagram (First card in the row of cards) -->
      <div class="row">
        <div class="media-instagram shift"> <!--Instagram div-->
        
            <h2> Instagram: </h2>
            <div class="container" >
            <button class="open-button" onclick="openLoginInstagramForm()"><b>Login</b></button>
            <div class="form-popup" id="loginInstagram">
            <form action="/action_page.php" class="form-container">
                <h2>Instagram: Login</h2>

                <label for="email"><b>Steps:</b></label>
                <p>1.	Go to website: </p>
                <form action="https://www.instagram.com/" target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Enter your email in the ‘phone number, username, or email’ field <b>smdsouza@oakland.edu</b></p>
                <p>3.	Enter your password in the ‘Password’ field <b>CSI4999Capstone</b></p>
                <p>4.	If you are logging in for the first time, after step 3, choose whether you would like to save your login information.</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <input type="radio" id="instagramLoginResult" name="result" value="1" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginResult" name="result" value="0">
                <label for="html">Failed</label>
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <textarea id="comment" name="comment" rows="4" cols="50">
                </textarea>
                <br>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLoginInstagramForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLoginInstagramForm()">Close</button>
                </div>
            </form>
            </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLogoutInstagramForm()"><b>Logout</b></button>
                <div class="form-popup" id="logoutInstagram">
                <form action="/action_page.php" class="form-container">
                    <h2>Instagram: Logout</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeLogoutInstagramForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLikePostInstagramForm()"><b>Liking a post</b></button>
                <div class="form-popup" id="likePostInstagram">
                <form action="/action_page.php" class="form-container">
                    <h2>Instagram: Liking a Post</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeLikePostInstagramForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openSendDMInstagramForm()"><b>Sending yourself a DM</b></button>
                <div class="form-popup" id="sendDMInstagram">
                <form action="/action_page.php" class="form-container">
                    <h2>Instagram: Sending Yourself a DM</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeSendDMInstagramForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>
         <div class="media-instagram shift"> <!--Facebook div-->
        
            <h2> Facebook: </h2>
            <div class="container" >
            <button class="open-button" onclick="openLoginFacebookForm()"><b>Login</b></button>
            <div class="form-popup" id="loginFacebook">
            <form action="/action_page.php" class="form-container">
                <h2>Facebook: Login</h2>

                <label for="email"><b>Test ID: </b></label>
                <br>
                <br>
                <label for="psw"><b>Passed: </b></label>
                <br>
                <br>
                <label for="email"><b>Date: </b></label>
                <br>
                <br>
                <label for="psw"><b>Time: </b></label>
                <br>
                <br>
                <button type="button" class="btn cancel" onclick="closeLoginFacebookForm()">Close</button>
            </form>
            </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLogoutFacebookForm()"><b>Logout</b></button>
                <div class="form-popup" id="logoutFacebook">
                <form action="/action_page.php" class="form-container">
                    <h2>Facebook: Logout</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeLogoutFacebookForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLikePostFacebookForm()"><b>Liking a post</b></button>
                <div class="form-popup" id="likePostFacebook">
                <form action="/action_page.php" class="form-container">
                    <h2>Facebook: Liking a Post</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeLikePostFacebookForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openSendDMFacebookForm()"><b>Sending yourself a DM</b></button>
                <div class="form-popup" id="sendDMFacebook">
                <form action="/action_page.php" class="form-container">
                    <h2>Facebook: Sending Yourself a DM</h2>

                    <label for="email"><b>Test ID: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Passed: </b></label>
                    <br>
                    <br>
                    <label for="email"><b>Date: </b></label>
                    <br>
                    <br>
                    <label for="psw"><b>Time: </b></label>
                    <br>
                    <br>
                    <button type="button" class="btn cancel" onclick="closeSendDMFacebookForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>
<br>
        


        <component :is="'script'">
            <!--Login Instagram-->
            function openLoginInstagramForm() {
              document.getElementById("loginInstagram").style.display = "block";
            }
            function closeLoginInstagramForm() {
              document.getElementById("loginInstagram").style.display = "none";
              document.getElementById("loginInstagram").reset();
            }
            function submitLoginInstagramForm() {
              document.getElementById("loginInstagram").submit();
              document.getElementById("loginInstagram").reset();
            }

            <!--Logout Instagram-->
            function openLogoutInstagramForm() {
            document.getElementById("logoutInstagram").style.display = "block";
            }
            function closeLogoutInstagramForm() {
            document.getElementById("logoutInstagram").style.display = "none";
            }

            <!--Like post Instagram-->
            function openLikePostInstagramForm() {
            document.getElementById("likePostInstagram").style.display = "block";
            }
            function closeLikePostInstagramForm() {
            document.getElementById("likePostInstagram").style.display = "none";
            }

            <!--Sending yourself a DM Instagram-->
            function openSendDMInstagramForm() {
            document.getElementById("sendDMInstagram").style.display = "block";
            }
            function closeSendDMInstagramForm() {
            document.getElementById("sendDMInstagram").style.display = "none";
            }

            <!--Login Facebook-->
            function openLoginFacebookForm() {
            document.getElementById("loginFacebook").style.display = "block";
            }
            function closeLoginFacebookForm() {
            document.getElementById("loginFacebook").style.display = "none";
            }

            <!--Logout Facebook-->
            function openLogoutFacebookForm() {
            document.getElementById("logoutFacebook").style.display = "block";
            }
            function closeLogoutFacebookForm() {
            document.getElementById("logoutFacebook").style.display = "none";
            }

            <!--Like post Facebook-->
            function openLikePostFacebookForm() {
            document.getElementById("likePostFacebook").style.display = "block";
            }
            function closeLikePostFacebookForm() {
            document.getElementById("likePostFacebook").style.display = "none";
            }

            <!--Sending yourself a DM Facebook-->
            function openSendDMFacebookForm() {
            document.getElementById("sendDMFacebook").style.display = "block";
            }
            function closeSendDMFacebookForm() {
            document.getElementById("sendDMFacebook").style.display = "none";
            }
            <!--
            boolean result;
            var message;

            function choose(choice){
              result = choice;
            }
            function message(choice){
              message = choice;
            }
            -->
        </component>
      </div>
    </body>
 </template>
 <!--
 <script>
 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var $mediaElements = $('.media');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});
 </script>
 -->

 <style scoped>
   
    th
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 10vh;
    }
  div {
      position: relative;
      color: #202125;
      font-family: 'Courier New', Courier, monospace;
  }

.media-instagram{
  background-color: green;
  transition: 0.3s;
  width: 50vh;
  height: 50vh;
  display:inline-block;
  margin:5vh;
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 white;
}

.shift {
    left: 15vh;
    right: 60vh;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 25%;
  padding: 1vh 1vh;
}

body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Button used to open the contact form - fixed at the bottom of the page */
.open-button {
  background-color: gold;
  opacity: 0.1;
  color: #202125;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;

  width: 280px;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  width: 70vh;
  height: 100vh;
  padding: 10px;
  background-color: white;
}

/* Full-width input fields */
.form-container input[type=text], .form-container input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: 2px solid white;
  cursor: pointer;
  width: 45%;
  margin-bottom:10px;
  opacity: 0.8;
  font-weight: bold;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}
.form-container .submit {
  background-color: #04AA6D;
}

.form-container .link {
  background-color: gold;
  color: #202125;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}

* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 20%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  left: 40vh;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}

</style>

