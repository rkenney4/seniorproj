<template>
    <h1><u>Projects</u></h1>
    <body>
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
        <br>
        <svg width="400" height="110">
            <rect width="1000" height="1000" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>
        <button type="submit" style="margin:20px"><router-link to="/">Home</router-link></button>
        <button type="submit" style="margin:10px"><router-link to="/login">Log Out</router-link></button>
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
    z-index: 0;
  }
  rect {
      z-index: 1
  }
</style>