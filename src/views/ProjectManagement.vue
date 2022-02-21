<template>
    <h1><u>Projects</u></h1>
    <form>
        <th><b>Email:</b> <input type="text" style="margin:3vh" value="Email"></th>
        <th><b>First Name:</b> <input type="text" style="margin:3vh" value="First Name"></th>
        <th><b>Last Name:</b> <input type="text" style="margin:3vh" value="Last Name"></th>
        <th><b>Members:</b> <input type="text" style="margin:3vh" value="Members"></th>
        <th><b>Role:</b> </th>
        <th>
            <select>
              <option>Admin</option>
              <option>Tester</option>
              <option>Unassigned</option>
           </select>
        </th>
        <th><b>Status:</b></th>
        <select>
              <option>Active</option>
              <option>Inactive</option>
        </select>
    </form>
    <br>
    <button type="submit" style="margin:20px"><router-link to="/home">Home</router-link></button>
    <button type="submit" style="margin:10px"><router-link to="/login">Log Out</router-link></button>
</template>

<style scoped>
    th
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 10vh;
    }
</style>>