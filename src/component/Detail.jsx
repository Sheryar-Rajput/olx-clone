import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getAdDetails } from '../config/firebase'
import Avatar from '@mui/material/Avatar';
import avatar from '../images/avatar.png'
import { IconBsFillTelephoneFillName } from "react-icons/bs";
import './detail.css'
import AppBar from './navbar';
import Footer from './footer'
function Detail() {
  const params = useParams()
  console.log('params --->', params.adId)
  const [data, setData] = useState([])
  const newAds = useSelector(state => state.ads)
console.log(data.urls)
  useEffect(async () => {
  const tempdetail = await getAdDetails(params.adId)
  setData(tempdetail)
  }, [])
  if(!data){
    console.log(data)
return <div> loading </div>
  }
  return (
    <div >
<AppBar/>
      <div className='detailMain'   >
        <div className='detailCard  Add shadow p-3 mb-5 bg-white rounded  ' >
           <img  src={data?.urls?.[0]}  className="imgmain" />     
                 <br />
         
        </div>

<div  className='userDetail '  >

<div    className=' Add shadow p-3 mb-5 bg-white rounded '  >    <h3>  Tittle  </h3>
<p>   {data.description}     </p>

<h3> Price</h3>
<p>{data.price}   </p>

<h3>  Description  </h3>
<p>   {data.description}    </p>
    </div>

<div className=' Add shadow p-3 mb-5 bg-white rounded '   >
<h4> Contact Seller  </h4>
<Avatar src={avatar} /> 
   <h3> Name   </h3>
<p>  Sheryar  </p>

<h3> Phone  </h3>
<p>  03461120174  </p>

</div>


</div>


      </div>

<Footer/>
    </div>
  )
}

export default Detail