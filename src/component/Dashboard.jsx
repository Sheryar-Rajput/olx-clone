import React from 'react'
import Banner from '../views/Banner';
import Card from './Card';
import Header from '../views/header';
import NewCard from './NewCard';
import AppBar from './navbar';
import Footer from './footer'
function Dashboard() {
 
  return (
    <div>
<AppBar/>
<Banner/>
<NewCard/>
<Footer/>
{/* <Card/> */}
    </div>
  )
}

export default Dashboard