import { Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

const Account = () => {
    
    const { user } = useUser()

    return (

        <>
            <div>
                <h1>Account de {user.name} </h1>
            </div>
            
            <Outlet />
        </>

    )
}

export default Account