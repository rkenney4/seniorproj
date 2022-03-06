<template>
    <h1><u>Project Management</u></h1>
    <body>
        <!--
        <form id="nav">
            <th><b>Project Name:</b> <input type="text" value="Project Name"></th>
            <th><b>Status:</b></th>
            <select>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            <th><b>Date Created:</b> <input type="date" value="Date Created"></th>
            <th><b>Date Accessed:</b> <input type="date" value="Last Accessed"></th>
            <th><b>Members:</b></th>
            <th>
                <select>
                <option>Bob</option>
                <option>John</option>
                <option>Mark</option>
            </select>
            </th>
            <th><b>Description:</b> <input type="textarea" value="Description"></th>
        </form>
        -->
        <div class="row" style="width: 85%">
            <div class="flip-card card shift column">
                <div class="flip-card-inner active">
                    <div class="flip-card-front">
                        <h2><b>Instagram</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner inactive">
                    <div class="flip-card-front">
                        <h2><b>Twitter</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner active">
                    <div class="flip-card-front">
                        <h2><b>Facebook</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner inactive">
                    <div class="flip-card-front">
                        <h2><b>Snapchat</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
           <div class="flip-card card shift column">
                <div class="flip-card-inner inactive">
                    <div class="flip-card-front">
                        <h2><b>Yahoo</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner active">
                    <div class="flip-card-front">
                        <h2><b>Gmail</b></h2> 
                        <p><b>Last Accessed: </b>02/01/22</p> 
                        <p><b>Last Created: </b>11/22/21</p> 
                            <p><b>Admin: </b> Yandel Pugh</p>
                            <p><b>Testers: </b> Oliver Ingram, Ivy Holland, Harper Burgess</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--
        <button type="submit" style="margin:20px"><router-link to="/">Home</router-link></button>
        <button type="submit" style="margin:10px"><router-link to="/login">Log Out</router-link></button>
        -->
    </body>
 </template>

<style scoped>
    th
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 10vh;
    }
  #nav {
    left: 40vh;
    right: 30vh;
    background-color: #bbbec3;
    height: 100vh;
    color: #202125;
  }
  div {
      position: relative;
      color: #202125;
      font-family: 'Courier New', Courier, monospace;
  }
  rect {
      box-shadow: 5px 5px 5px white;
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
    left: 20%;
    right: 30%;
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
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: black;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>