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
                        <p><b>Last Accessed: </b>03/06/22</p> 
                        <p><b>Last Created: </b>12/14/21</p> 
                            <p><b>Admin: </b> Oinone Jayda</p>
                            <p><b>Testers: </b> Timoteo Kris, Aristarkh Djehutimose, Feride Bruna</p>
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
                        <p><b>Last Accessed: </b>03/05/22</p> 
                        <p><b>Last Created: </b>10/22/21</p> 
                            <p><b>Admin: </b> Mitzi Tye</p>
                            <p><b>Testers: </b> Liisi Eadwine, Felicia Quasimodo, Jibril Netsai</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Twitter is a free social networking microblogging service that allows registered members to broadcast short posts called tweets. Twitter members can broadcast tweets and follow other users' tweets by using multiple platforms and devices.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner active">
                    <div class="flip-card-front">
                        <h2><b>Facebook</b></h2> 
                        <p><b>Last Accessed: </b>01/25/22</p> 
                        <p><b>Last Created: </b>09/20/21</p> 
                            <p><b>Admin: </b> Gessica Nnenna</p>
                            <p><b>Testers: </b> Azeneth Attikos, Vladěna Keith, Frano Lakshman</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner inactive">
                    <div class="flip-card-front">
                        <h2><b>Snapchat</b></h2> 
                        <p><b>Last Accessed: </b>01/10/22</p> 
                        <p><b>Last Created: </b>08/22/21</p> 
                            <p><b>Admin: </b> Liesbeth Evelina</p>
                            <p><b>Testers: </b> Nani Fàtima, Shyam Azrael, Harald Yoann</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Snapchat is an American multimedia instant messaging app and service developed by Snap Inc., originally Snapchat Inc. One of the principal features of Snapchat is that pictures and messages are usually only available for a short time before they become inaccessible to their recipients.</p>
                    </div>
                </div>
            </div>
           <div class="flip-card card shift column">
                <div class="flip-card-inner inactive">
                    <div class="flip-card-front">
                        <h2><b>Yahoo</b></h2> 
                        <p><b>Last Accessed: </b>02/05/22</p> 
                        <p><b>Last Created: </b>07/30/21</p> 
                            <p><b>Admin: </b> Hektor Ferdinand</p>
                            <p><b>Testers: </b> Vasuda Bencivenni, Judas Lumír, Ultán Baruch</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Yahoo! is an Internet portal that incorporates a search engine and a directory of World Wide Web sites organized in a hierarchy of topic categories. As a directory, it provides both new and seasoned Web users the reassurance of a structured view of hundreds of thousands of Web sites and millions of Web pages.</p>
                    </div>
                </div>
            </div>
            <div class="flip-card card shift column">
                <div class="flip-card-inner active">
                    <div class="flip-card-front">
                        <h2><b>Gmail</b></h2> 
                        <p><b>Last Accessed: </b>03/03/22</p> 
                        <p><b>Last Created: </b>05/25/21</p> 
                            <p><b>Admin: </b> Mickaël Filip</p>
                            <p><b>Testers: </b>Kandi Libbie, Gavri'el Epiktetos, Art Uduakobong</p>
                    </div>
                    <div class="flip-card-back">
                        <h4>Description: </h4>
                        <p>Gmail (pronounced Gee-mail) is a free Web-based e-mail service that provides users with a gigabyte of storage for messages and provides the ability to search for specific messages. The Gmail program also automatically organizes successively related messages into a conversational thread.</p>
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
    left: 30vh;
    right: 40vh;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 50%;
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