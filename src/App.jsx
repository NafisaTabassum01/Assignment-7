import { Suspense } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Friends from './Friends/Friends'
import Navbar from './Navbar/Navbar'


const fetchFriends = async ()=> {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>     
     <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
      </>
  )
}

export default App
