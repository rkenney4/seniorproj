<template>
    <h1><u>Test Management</u></h1>

    <body>
        <div> <!--Instagram div-->
            <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLoginForm()">Login</button>
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
                    <button class="btn" onclick="openLogoutForm()">Next Test</button>
                </form>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLogoutForm()">Logout</button>
                <div class="form-popup" id="logout">
                <form action="/action_page.php" class="form-container">
                    <h1>Logout</h1>

                    <label for="email"><b>Joey</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>Pio</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeLogoutForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLikePostForm()">Liking a post</button>
                <div class="form-popup" id="likePost">
                <form action="/action_page.php" class="form-container">
                    <h1>Liking a post</h1>

                    <label for="email"><b>post</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>post</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeLikePostForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openSendDMForm()">Sending yourself a DM</button>
                <div class="form-popup" id="sendDM">
                <form action="/action_page.php" class="form-container">
                    <h1>send DM</h1>

                    <label for="email"><b>Send</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>DM</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeSendDMForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>
<br><br><br>
        <div> <!--Instagram div-->
          <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLoginForm()">Login</button>
                <div class="form-popup" id="login">
                <form action="/action_page.php" class="form-container">
                    <h1>Login</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>
                </form>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLogoutForm()">Logout</button>
                <div class="form-popup" id="logout">
                <form action="/action_page.php" class="form-container">
                    <h1>Logout</h1>

                    <label for="email"><b>Joey</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>Pio</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeLogoutForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openLikePostForm()">Liking a post</button>
                <div class="form-popup" id="likePost">
                <form action="/action_page.php" class="form-container">
                    <h1>Liking a post</h1>

                    <label for="email"><b>post</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>post</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeLikePostForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" style="width: 85%">
                <button class="open-button" onclick="openSendDMForm()">Sending yourself a DM</button>
                <div class="form-popup" id="sendDM">
                <form action="/action_page.php" class="form-container">
                    <h1>send DM</h1>

                    <label for="email"><b>Send</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>DM</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeSendDMForm()">Close</button>
                </form>
                </div>
                </div>
            </div>
        </div>


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
    </body>
 </template>

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

.active {
    background-color: green;
}
.inactive {
    background-color: red;
}

.card:hover {
  box-shadow: 0 8px 16px 0 white;
}

.container {
  padding: 2vh 2vh;
}
.shift {
    left: 50vh;
    right: 40vh;
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
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
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
</style>