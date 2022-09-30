import { Navigate, Outlet } from 'react-router-dom' 
import { useSelector } from 'react-redux'
export default function PrivateRoutes(){
  const user = useSelector((state)=>state)  
  console.log(user)
return (
    user ? <Outlet/> : <Navigate to='/SignIn'/>
  )
}