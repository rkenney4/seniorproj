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
            <div class="card shift column">
                <div class="container">
                <h2><b>Jaylene Frye</b></h2> 
                <h4>Tester</h4> 
                <h4>Last Created: 11/22/21</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Kailey Moses</b></h2> 
                    <h4>Admin</h4> 
                    <h4>Last Created: 10/20/20</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                <h2><b>Lyric Adkins</b></h2> 
                <h4>Admin</h4> 
                <h4>Last Created: 04/17/21</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Atticus Mckay</b></h2> 
                    <h4>Tester</h4> 
                    <h4>Last Created: 04/20/19</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Jairo French</b></h2> 
                    <h4>Admin</h4> 
                    <h4>Last Created: 10/20/15</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Zaniyah Wade</b></h2> 
                    <h4>Unassigned</h4> 
                    <h4>Last Created: 01/17/16</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                <h2><b>Chaya Mason</b></h2> 
                <h4>Unassigned</h4> 
                <h4>Last Created: 11/22/21</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Austin Gilmore</b></h2> 
                    <h4>Unassigned</h4> 
                    <h4>Last Created: 10/20/20</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                <h2><b>Mohamed Rogers</b></h2> 
                <h4>Unassigned</h4> 
                <h4>Last Created: 04/17/21</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Josue Saunders</b></h2> 
                    <h4>Unassigned</h4> 
                    <h4>Last Created: 04/20/19</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Matthew Guerra</b></h2> 
                    <h4>Tester</h4> 
                    <h4>Last Created: 10/20/15</h4> 
                </div>
            </div>
            <div class="card shift column">
                <div class="container">
                    <h2><b>Mollie Calhoun</b></h2> 
                    <h4>Unassigned</h4> 
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


<script>
  export default {
    data() {
      return {
        items: [
          { email: 'email@gmail.com', first_name: 'John', last_name: 'Macdonald', role: 'Admin' },
          { email: 'email1@gmail.com', first_name: 'Mark', last_name: 'Macdonald', role: 'Super Admin' },
          { email: 'email2@gmail.com', first_name: 'Sam', last_name: 'Macdonald', role: 'Tester' },
          { email: 'email3@gmail.com', first_name: 'Eric', last_name: 'Macdonald', role: 'Tester' },
        ]
      }
    }
  }
</script>

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
  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  border-radius: 5px;
  opacity: 0.5;
  margin: 1vh;
  background-color: gold;
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