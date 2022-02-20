<template>
    <h1><u>Users</u></h1>
    <form>
        <th><b>User 1:</b></th>
        <th>Email</th>
        <th>|</th>
        <th>First Name</th>
        <th>|</th>
        <th>Last Name</th>
        <th>|</th>

        <th>Role</th>
        <th>
            <select>
              <option>Admin</option>
              <option>Tester</option>
              <option>Unassigned</option>
           </select>
        </th>
        <th>|</th>
        <th>Active</th>
    </form>
    <br>
    <form>
        <th><b>User 2:</b></th>
        <th>Email</th>
        <th>|</th>
        <th>First Name</th>
        <th>|</th>
        <th>Last Name</th>
        <th>|</th>
        <th>Role</th>
        <th>
            <select>
              <option>Admin</option>
              <option>Tester</option>
              <option>Unassigned</option>
           </select>
        </th>
        <th>|</th>
        <th>Active</th>
    </form>
    <br>
    <form>
        <th><b>User 3:</b></th>
        <th>Email</th>
        <th>|</th>
        <th>First Name</th>
        <th>|</th>
        <th>Last Name</th>
        <th>|</th>
        <th>Role</th>
        <th>
            <select>
              <option>Admin</option>
              <option>Tester</option>
              <option>Unassigned</option>
           </select>
        </th>
        <th>|</th>
        <th>Active</th>
    </form>
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