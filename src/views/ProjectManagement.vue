<template>
    <h1><u>Projects</u></h1>
    <form>
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
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"/>
    </svg>
    <button type="submit" style="margin:20px"><router-link to="/">Home</router-link></button>
    <button type="submit" style="margin:10px"><router-link to="/login">Log Out</router-link></button>
</template>

<style scoped>
    th
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 10vh;
    }
</style>>