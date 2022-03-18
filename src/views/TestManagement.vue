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
            <button class="open-button" onclick="openLoginForm()"><b>Login</b></button>
            <div class="form-popup" id="login">
            <form action="/action_page.php" class="form-container">
                <h2>Instagram: Login</h2>

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
                <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>
            </form>
            </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLogoutForm()"><b>Logout</b></button>
                <div class="form-popup" id="logout">
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
                    <button type="button" class="btn cancel" onclick="closeLogoutForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLikePostForm()"><b>Liking a post</b></button>
                <div class="form-popup" id="likePost">
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
                    <button type="button" class="btn cancel" onclick="closeLikePostForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openSendDMForm()"><b>Sending yourself a DM</b></button>
                <div class="form-popup" id="sendDM">
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
                    <button type="button" class="btn cancel" onclick="closeSendDMForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>
         <div class="media-instagram shift"> <!--Facebook div-->
        
            <h2> Instagram: </h2>
            <div class="container" >
            <button class="open-button" onclick="openLoginForm()"><b>Login</b></button>
            <div class="form-popup" id="login">
            <form action="/action_page.php" class="form-container">
                <h2>Instagram: Login</h2>

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
                <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>
            </form>
            </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLogoutForm()"><b>Logout</b></button>
                <div class="form-popup" id="logout">
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
                    <button type="button" class="btn cancel" onclick="closeLogoutForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLikePostForm()"><b>Liking a post</b></button>
                <div class="form-popup" id="likePost">
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
                    <button type="button" class="btn cancel" onclick="closeLikePostForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openSendDMForm()"><b>Sending yourself a DM</b></button>
                <div class="form-popup" id="sendDM">
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
                    <button type="button" class="btn cancel" onclick="closeSendDMForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>
<br>
        


        <component :is="'script'">
            <!--Login-->
            function openLoginForm() {
            document.getElementById("login").style.display = "block";
            }
            function closeLoginForm() {
            document.getElementById("login").style.display = "none";
            }

            <!--Logout-->
            function openLogoutForm() {
            document.getElementById("logout").style.display = "block";
            }
            function closeLogoutForm() {
            document.getElementById("logout").style.display = "none";
            }

            <!--Like post-->
            function openLikePostForm() {
            document.getElementById("likePost").style.display = "block";
            }
            function closeLikePostForm() {
            document.getElementById("likePost").style.display = "none";
            }

            <!--Sending yourself a DM-->
            function openSendDMForm() {
            document.getElementById("sendDM").style.display = "block";
            }
            function closeSendDMForm() {
            document.getElementById("sendDM").style.display = "none";
            }
            
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
  max-width: 300px;
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
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
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

