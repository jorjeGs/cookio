import { Outlet } from 'react-router-dom'
import { useUser } from '../hooks/UserContext'

const Account = () => {
    const { user } = useUser()
    const username = user.name
    
    return (

        <>
            <div>
                <h1>Account de {username} </h1>
            </div>
            
            <Outlet />
        </>

    )
}

export default Account