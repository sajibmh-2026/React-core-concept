import { Suspense, useState } from 'react'
import './App.css'
import Users from './Users'
import Friends from './Friends'

  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

  const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();

  }  

function App() {
  
  const friendPromise = fetchFriends();
  return (
    <>
    
    <Suspense fallback={<p>Loading.....</p>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<p>Friends are comming.....</p>}>
      <Friends friendPromise={friendPromise}></Friends>

    </Suspense>

    
    
    </>
  )
}

export default App
