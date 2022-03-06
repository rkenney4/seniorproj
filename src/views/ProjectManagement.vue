<template>
    <h1><u>Projects</u></h1>
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
        <br>
        <div class="row">
            <div class="card active shift column">
                <div class="container">
                <h2><b>Instagram</b></h2> 
                <h4>Last Accessed: 03/01/22</h4> 
                <h4>Last Created: 11/22/21</h4> 
                </div>
            </div>
            <div class="card inactive shift column">
                <div class="container">
                    <h2><b>Twitter</b></h2> 
                    <h4>Last Accessed: 01/01/22</h4> 
                    <h4>Last Created: 10/20/20</h4> 
                </div>
            </div>
            <div class="card active shift column">
                <div class="container">
                <h2><b>Facebook</b></h2> 
                <h4>Last Accessed: 11/01/21</h4> 
                <h4>Last Created: 04/17/21</h4> 
                </div>
            </div>
            <div class="card inactive shift column">
                <div class="container">
                    <h2><b>Snapchat</b></h2> 
                    <h4>Last Accessed: 07/09/20</h4> 
                    <h4>Last Created: 04/20/19</h4> 
                </div>
            </div>
            <div class="card inactive shift column">
                <div class="container">
                    <h2><b>Yahoo</b></h2> 
                    <h4>Last Accessed: 01/19/17</h4> 
                    <h4>Last Created: 10/20/15</h4> 
                </div>
            </div>
            <div class="card inactive shift column">
                <div class="container">
                    <h2><b>Gmail</b></h2> 
                    <h4>Last Accessed: 02/18/19</h4> 
                    <h4>Last Created: 01/17/16</h4> 
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
      color: #bbbec3;
      font-family: 'Courier New', Courier, monospace;
  }
  rect {
      box-shadow: 5px 5px 5px white;
  }
  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  border-radius: 5px;
  opacity: 0.5;
  margin: 1vh;
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
  padding: 0 10px;
}
</style>