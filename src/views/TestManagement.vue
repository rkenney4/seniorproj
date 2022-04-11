<template>
    <h1><u>Test Management</u></h1>

    <body>
      <!--
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

      <ul id="myUL">
        <a href="#" class="filter_link" data-filter="All">All</a> 
        <a href="#" class="filter_link" data-filter="Instagram">Instagram</a> 
        <a href="#" class="filter_link" data-filter="Twitter">Twitter</a>
      </ul>
-->
      
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
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <!--
                <input type="radio" id="instagramLoginDiv" name="result" value="true" onClick="chooseLoginInstagram('Passed')" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginDiv" name="result" value="false" onClick="chooseLoginInstagram('Failed')">
                <label for="html">Failed</label>
                <br>
                <br>
                -->
                <input type="text" value="" id="loginInstagramTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="loginInstagramComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="loginInstagramResult" name="comment" rows="10" cols="50">
                </textarea>
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

                    <p>1.	Go to website: </p>
                <form action="https://www.instagram.com/" target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2. Click on your display profile in the upper right hand corner.</p>
                <p>3.	Click the ‘Log out’ button</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>

                <label for="psw"><b>Result: </b></label>

                <input type="text" value="" id="logoutInstagramTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="logoutInstagramComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="logoutInstagramResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLogoutInstagramForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLogoutInstagramForm()">Close</button>
                </div>
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

                    <p>1.	Go to website: </p>
                <form action="https://www.instagram.com/" target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2. Go to a photo or video that you want to like</p>
                <p>3.	Double click on the photo or video</p>
                <p>4.	After performing step 2, a heart will display on the photo or video that you double clicked on</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>

                <label for="psw"><b>Result: </b></label>
                <br>
                <input type="text" value="" id="likePostInstagramTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="likePostInstagramComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="likePostInstagramResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLikePostInstagramForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLikePostInstagramForm()">Close</button>
                </div>
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

                    <p>1.	Go to website: </p>
                <form action="https://www.instagram.com/" target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Click on the message bubble in the upper right hand corner</p>
                <p>3.	Click on the paper and pencil icon next to your username</p>
                <p>4.	Type “smdsouza123” in the ‘To’ field</p>
                <p>5.	Click the circle next to “smdsouza123”</p>
                <p>6.	Click the ‘next’ button in the top right corner</p>
                <p>7.	Type your message in the ‘Message’ field</p>
                <p>8.	Click the send button on the right of the ‘Message’ field</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <input type="text" value="" id="sendDMInstagramTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="sendDMInstagramComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="sendDMInstagramResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitSendDMInstagramForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeSendDMInstagramForm()">Close</button>
                </div>
                </form>
                </div>
                </div>
            </div>
        </div>
         <div class="media-instagram shift"> <!--Twitter div-->
        
            <h2> Twitter: </h2>
            <div class="container" >
            <button class="open-button" onclick="openLoginTwitterForm()"><b>Login</b></button>
            <div class="form-popup" id="loginTwitter">
            <form action="/action_page.php" class="form-container">
                <h2>Twitter: Login</h2>

                <label for="email"><b>Steps:</b></label>
                <p>1.	Go to website: </p>
                <form action="https://www.twitter.com/" target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Click on the ‘Sign in’ button below the text that says “Already Have An Account”</p>
                <p>3.	Type your email in the text field that says ‘Phone, email, or username’ (smdsouza@oakland.edu)</p>
                <p>4.	Click on the ‘Next’ button below the text field</p>
                <p>5.	Enter your password in the ‘Password’ text field (CSI4999Capstone)</p>
                <p>6.	Click on the ‘Log in’ button</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <!--
                <input type="radio" id="instagramLoginDiv" name="result" value="true" onClick="chooseLoginInstagram('Passed')" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginDiv" name="result" value="false" onClick="chooseLoginInstagram('Failed')">
                <label for="html">Failed</label>
                <br>
                <br>
                -->
                <input type="text" value="" id="loginTwitterTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="loginTwitterComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="loginTwitterResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLoginTwitterForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLoginTwitterForm()">Close</button>
                </div>
            </form>
            </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLogoutTwitterForm()"><b>Logout</b></button>
                <div class="form-popup" id="logoutTwitter">
                <form action="/action_page.php" class="form-container">
                    <h2>Twitter: Logout</h2>

                    <p>1.	Go to website: </p>
                <form action="https://twitter.com/home " target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Click on the ‘…’ next to your username at the bottom left of the screen</p>
                <p>3.	Click on the ‘Log out’ button below the ‘Add an Existing account’ button</p>
                <p>4.	Click on the ‘Log out’ button again to confirm that you would like to log out</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <!--
                <input type="radio" id="instagramLoginDiv" name="result" value="true" onClick="chooseLoginInstagram('Passed')" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginDiv" name="result" value="false" onClick="chooseLoginInstagram('Failed')">
                <label for="html">Failed</label>
                <br>
                <br>
                -->
                <input type="text" value="" id="logoutTwitterTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="logoutTwitterComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="logoutTwitterResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLogoutTwitterForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLogoutTwitterForm()">Close</button>
                </div>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openLikePostTwitterForm()"><b>Liking a post</b></button>
                <div class="form-popup" id="likePostTwitter">
                <form action="/action_page.php" class="form-container">
                    <h2>Twitter: Liking a Post</h2>

                    <p>1.	Go to website: </p>
                <form action="https://twitter.com/home " target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Go to a post that you want to like</p>
                <p>3.	Below the post you will see a heart symbol</p>
                <p>4.	Click on the heart symbol to like the post</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <!--
                <input type="radio" id="instagramLoginDiv" name="result" value="true" onClick="chooseLoginInstagram('Passed')" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginDiv" name="result" value="false" onClick="chooseLoginInstagram('Failed')">
                <label for="html">Failed</label>
                <br>
                <br>
                -->
                <input type="text" value="" id="likePostTwitterTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="likePostTwitterComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="likePostTwitterResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitLikePostTwitterForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeLikePostTwitterForm()">Close</button>
                </div>
                </form>
                </div>
                </div>
            </div>
            <br><br>
            <div>
                <div class="container" >
                <button class="open-button" onclick="openSendDMTwitterForm()"><b>Sending yourself a DM</b></button>
                <div class="form-popup" id="sendDMTwitter">
                <form action="/action_page.php" class="form-container">
                    <h2>Twitter: Sending Yourself a DM</h2>

                    <p>1.	Go to website: </p>
                <form action="https://twitter.com/home " target="_blank">
                  <input type="submit" value="Website" class="btn link">
                </form>
                <p>2.	Click on the ‘Messages’ button on the left of the screen</p>
                <p>3.	In the ‘search people’ text field, type your username (@d_saliel)</p>
                <p>4.	Click on the row that has your username in the list</p>
                <p>5.	Click on the ‘Next’ button on the upper right-hand corner of the screen</p>
                <p>6.	Type your message in the ‘Start a new message’ text field below</p>
                <p>7.	Click on the flying envelope button next to the smiley face emoji, or press the enter button on your keyboard</p>
                <p>8.	You will see the message that you sent to yourself under your Messages inbox</p>
                <br>
                <p>---------------------------</p>
                <h4>Legend:</h4>
                <p>"Passed" = Successful output</p>
                <p>"Failed" = Failed output</p>
                <p>"Clear" = Refresh history</p>
                <p>Other inputs are ignored</p>
                <p>---------------------------</p>
                <br>
                <label for="psw"><b>Result: </b></label>
                <br>
                <!--
                <input type="radio" id="instagramLoginDiv" name="result" value="true" onClick="chooseLoginInstagram('Passed')" required>
                <label for="html">Passed</label>
                <br>
                <input type="radio" id="instagramLoginDiv" name="result" value="false" onClick="chooseLoginInstagram('Failed')">
                <label for="html">Failed</label>
                <br>
                <br>
                -->
                <input type="text" value="" id="SendDMTwitterTextField" name="result">
                <br>
                <br>
                <label for="email"><b>Comments: </b></label>
                <input type="text" value="" id="SendDMTwitterComment" name="comment" rows="4" cols="50">
                <br>
                <br>
                <label for="email"><b>Test History: </b></label>
                <textarea id="SendDMTwitterResult" name="comment" rows="10" cols="50">
                </textarea>
                <br>
                <div>
                  <button type="button" value="Submit" class="btn submit" onclick="submitSendDMTwitterForm()">Submit</button>
                  <button type="button" class="btn cancel" onclick="closeSendDMTwitterForm()">Close</button>
                </div>
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
              var loginInstagramResult = document.getElementById("loginInstagramTextField").value;
              var loginInstagramComment = document.getElementById("loginInstagramComment").value;
              const d = new Date();
              if (loginInstagramResult == 'Passed' || loginInstagramResult == 'Failed') {
                loginInstagramHistory = "Date: " + d + "\n" + "Result: " + loginInstagramResult + "\n" + "Comment: " + loginInstagramComment + "\n"  + "--------------------" + "\n" + loginInstagramHistory;
                document.getElementById("loginInstagramResult").innerHTML = loginInstagramHistory;
                <!--localStorage.setItem("loginInstagramResult", loginInstagramHistory);-->
                window.localStorage.setItem('loginInstagramHistory', loginInstagramHistory);
              }
              else if (loginInstagramResult == 'Clear') {
                window.localStorage.removeItem('loginInstagramHistory');
              }
            }
            <!--var loginInstagramHistory = localStorage.loginInstagramHistory;-->
            var loginInstagramHistory = window.localStorage.getItem('loginInstagramHistory');
            <!--
              Unused function
            function chooseLoginInstagram(choice){
              loginInstagramResult = choice;
              return loginInstagramResult
            }
            -->
            


            <!--Logout Instagram-->
            function openLogoutInstagramForm() {
            document.getElementById("logoutInstagram").style.display = "block";
            }
            function closeLogoutInstagramForm() {
            document.getElementById("logoutInstagram").style.display = "none";
            document.getElementById("logoutInstagram").reset();
            }

            function submitLogoutInstagramForm() {
              var logoutInstagramResult = document.getElementById("logoutInstagramTextField").value;
              var logoutInstagramComment = document.getElementById("logoutInstagramComment").value;
              const d = new Date();
              if (logoutInstagramResult == 'Passed' || logoutInstagramResult == 'Failed') {
                logoutInstagramHistory = "Date: " + d + "\n" + "Result: " + logoutInstagramResult + "\n" + "Comment: " + logoutInstagramComment + "\n"  + "--------------------" + "\n" + logoutInstagramHistory;
                document.getElementById("logoutInstagramResult").innerHTML = logoutInstagramHistory;
                window.localStorage.setItem('logoutInstagramHistory', logoutInstagramHistory);
              }
              else if (logoutInstagramResult == 'Clear') {
                window.localStorage.removeItem('logoutInstagramHistory');
              }
            }
            
            var logoutInstagramHistory = window.localStorage.getItem('logoutInstagramHistory');

            <!--Like post Instagram-->
            function openLikePostInstagramForm() {
            document.getElementById("likePostInstagram").style.display = "block";
            }
            function closeLikePostInstagramForm() {
            document.getElementById("likePostInstagram").style.display = "none";
            }

            function submitLikePostInstagramForm() {
              var likePostInstagramResult = document.getElementById("likePostInstagramTextField").value;
              var likePostInstagramComment = document.getElementById("likePostInstagramComment").value;
              const d = new Date();
              if (likePostInstagramResult == 'Passed' || likePostInstagramResult == 'Failed') {
                likePostInstagramHistory = "Date: " + d + "\n" + "Result: " + likePostInstagramResult + "\n" + "Comment: " + likePostInstagramComment + "\n"  + "--------------------" + "\n" + likePostInstagramHistory;
                document.getElementById("likePostInstagramResult").innerHTML = likePostInstagramHistory;
                window.localStorage.setItem('likePostInstagramHistory', likePostInstagramHistory);
              }
              else if (likePostInstagramResult == 'Clear') {
                window.localStorage.removeItem('likePostInstagramHistory');
              }
            }
            
            var likePostInstagramHistory = window.localStorage.getItem('likePostInstagramHistory');


            <!--Sending yourself a DM Instagram-->
            function openSendDMInstagramForm() {
            document.getElementById("sendDMInstagram").style.display = "block";
            }
            function closeSendDMInstagramForm() {
            document.getElementById("sendDMInstagram").style.display = "none";
            }

            function submitSendDMInstagramForm() {
              var sendDMInstagramResult = document.getElementById("sendDMInstagramTextField").value;
              var sendDMInstagramComment = document.getElementById("sendDMInstagramComment").value;
              const d = new Date();
              if (sendDMInstagramResult == 'Passed' || sendDMInstagramResult == 'Failed') {
                sendDMInstagramHistory = "Date: " + d + "\n" + "Result: " + sendDMInstagramResult + "\n" + "Comment: " + sendDMInstagramComment + "\n"  + "--------------------" + "\n" + sendDMInstagramHistory;
                document.getElementById("sendDMInstagramResult").innerHTML = sendDMInstagramHistory;
                window.localStorage.setItem('sendDMInstagramHistory', sendDMInstagramHistory);
              }
              else if (sendDMInstagramResult == 'Clear') {
                window.localStorage.removeItem('sendDMInstagramHistory');
              }
            }
            
            var sendDMInstagramHistory = window.localStorage.getItem('sendDMInstagramHistory');

            <!--Login Twitter-->
            function openLoginTwitterForm() {
            document.getElementById("loginTwitter").style.display = "block";
            }
            function closeLoginTwitterForm() {
            document.getElementById("loginTwitter").style.display = "none";
            document.getElementById("loginTwitter").reset();
            }

            function submitLoginTwitterForm() {
              var loginTwitterResult = document.getElementById("loginTwitterTextField").value;
              var loginTwitterComment = document.getElementById("loginTwitterComment").value;
              const d = new Date();
              if (loginTwitterResult == 'Passed' || loginTwitterResult == 'Failed') {
                loginTwitterHistory = "Date: " + d + "\n" + "Result: " + loginTwitterResult + "\n" + "Comment: " + loginTwitterComment + "\n"  + "--------------------" + "\n" + loginTwitterHistory;
                document.getElementById("loginTwitterResult").innerHTML = loginTwitterHistory;
                <!--localStorage.setItem("loginInstagramResult", loginInstagramHistory);-->
                window.localStorage.setItem('loginTwitterHistory', loginInstagramHistory);
              }
              else if (loginTwitterResult == 'Clear') {
                window.localStorage.removeItem('loginTwitterHistory');
              }
            }
            <!--var loginInstagramHistory = localStorage.loginInstagramHistory;-->
            var loginTwitterHistory = window.localStorage.getItem('loginTwitterHistory');
            <!--
              Unused function
            function chooseLoginInstagram(choice){
              loginInstagramResult = choice;
              return loginInstagramResult
            }
            -->

            <!--Logout Twitter-->
            function openLogoutTwitterForm() {
            document.getElementById("logoutTwitter").style.display = "block";
            }
            function closeLogoutTwitterForm() {
            document.getElementById("logoutTwitter").style.display = "none";
            document.getElementById("logoutTwitter").reset();
            }

            function submitLogoutTwitterForm() {
              var logoutTwitterResult = document.getElementById("logoutTwitterTextField").value;
              var logoutTwitterComment = document.getElementById("logoutTwitterComment").value;
              const d = new Date();
              if (logoutTwitterResult == 'Passed' || logoutTwitterResult == 'Failed') {
                logoutTwitterHistory = "Date: " + d + "\n" + "Result: " + logoutTwitterResult + "\n" + "Comment: " + logoutTwitterComment + "\n"  + "--------------------" + "\n" + logoutTwitterHistory;
                document.getElementById("logoutTwitterResult").innerHTML = logoutTwitterHistory;
                <!--localStorage.setItem("loginInstagramResult", loginInstagramHistory);-->
                window.localStorage.setItem('logoutTwitterHistory', logoutTwitterHistory);
              }
              else if (logoutTwitterResult == 'Clear') {
                window.localStorage.removeItem('logoutTwitterHistory');
              }
            }
            <!--var loginInstagramHistory = localStorage.loginInstagramHistory;-->
            var logoutTwitterHistory = window.localStorage.getItem('logoutTwitterHistory');
            <!--
              Unused function
            function chooseLoginInstagram(choice){
              loginInstagramResult = choice;
              return loginInstagramResult
            }
            -->

           


            <!--Like post Twitter-->
            function openLikePostTwitterForm() {
            document.getElementById("likePostTwitter").style.display = "block";
            }
            function closeLikePostTwitterForm() {
            document.getElementById("likePostTwitter").style.display = "none";
            document.getElementById("likePostTwitter").reset();
            }

            function submitLikePostTwitterForm() {
              var likePostTwitterResult = document.getElementById("likePostTwitterTextField").value;
              var likePostTwitterComment = document.getElementById("likePostTwitterComment").value;
              const d = new Date();
              if (likePostTwitterResult == 'Passed' || likePostTwitterResult == 'Failed') {
                likePostTwitterHistory = "Date: " + d + "\n" + "Result: " + likePostTwitterResult + "\n" + "Comment: " + likePostTwitterComment + "\n"  + "--------------------" + "\n" + likePostTwitterHistory;
                document.getElementById("likePostTwitterResult").innerHTML = likePostTwitterHistory;
                <!--localStorage.setItem("loginInstagramResult", loginInstagramHistory);-->
                window.localStorage.setItem('likePostTwitterHistory', likePostTwitterHistory);
              }
              else if (likePostTwitterResult == 'Clear') {
                window.localStorage.removeItem('likePostTwitterHistory');
              }
            }
            <!--var loginInstagramHistory = localStorage.loginInstagramHistory;-->
            var likePostTwitterHistory = window.localStorage.getItem('likePostTwitterHistory');
            <!--
              Unused function
            function chooseLoginInstagram(choice){
              loginInstagramResult = choice;
              return loginInstagramResult
            }
            -->

            

            <!--Sending yourself a DM Twitter-->
            function openSendDMTwitterForm() {
            document.getElementById("sendDMTwitter").style.display = "block";
            }
            function closeSendDMTwitterForm() {
            document.getElementById("sendDMTwitter").style.display = "none";
            document.getElementById("SendDMTwitter").reset();
            }

            function submitSendDMTwitterForm() {
              var SendDMTwitterResult = document.getElementById("SendDMTwitterTextField").value;
              var SendDMTwitterComment = document.getElementById("SendDMTwitterComment").value;
              const d = new Date();
              if (SendDMTwitterResult == 'Passed' || SendDMTwitterResult == 'Failed') {
                SendDMTwitterHistory = "Date: " + d + "\n" + "Result: " + SendDMTwitterResult + "\n" + "Comment: " + SendDMTwitterComment + "\n"  + "--------------------" + "\n" + SendDMTwitterHistory;
                document.getElementById("SendDMTwitterResult").innerHTML = SendDMTwitterHistory;
                <!--localStorage.setItem("loginInstagramResult", loginInstagramHistory);-->
                window.localStorage.setItem('SendDMTwitterHistory', SendDMTwitterHistory);
              }
              else if (SendDMTwitterResult == 'Clear') {
                window.localStorage.removeItem('SendDMTwitterHistory');
              }
            }
            <!--var loginInstagramHistory = localStorage.loginInstagramHistory;-->
            var SendDMTwitterHistory = window.localStorage.getItem('SendDMTwitterHistory');
            <!--
              Unused function
            function chooseLoginInstagram(choice){
              loginInstagramResult = choice;
              return loginInstagramResult
            }
            -->


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
  width: 25%;
  height: 100%;
  display:inline-block;
  margin:5vh;
  padding: 2vh;
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

  width: 90%;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  overflow: scroll;
  background-color: white;
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

