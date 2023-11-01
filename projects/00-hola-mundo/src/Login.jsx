import './Login.css'
import RegisterPopUp from './RegisterPopUp';
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    //states and hooks for login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    //states and hooks for register
    const [show, setShow] = useState(false);

    //handle login
    const handleLogin = async () => {
        event.preventDefault();

        if (!email || !password) {
            setMessage('Please fill all the fields')
            return
        }
        try {
            //fix axios response 
            await axios.post('https://cookioapi.onrender.com/api/login', { email, password }).then((res) => {
                console.log(res)
                console.log(res.status)
                setMessage(res.data.message)
                if (res.status === 200) {
                    setEmail('')
                    setPassword('')
                    setMessage('user logged in')
                    //localStorage.setItem('token', resJson.token)
                    //history.push('/home')
                }
                else if (res.data.status === 400) {
                    setEmail('')
                    setPassword('')
                    setMessage('invalid credentials' + res.data.error)
                }
                else {
                    setEmail('')
                    setPassword('')
                    setMessage('something went wrong')
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="flex justify-between items-center h-screen">
            <div className='w-1/2'>
                <h1 className='text-9xl text-amber-400 font-bold text-center'>Cookio</h1>
                <h2 className='text-2xl text-white font-bold text-center mt-4'>Discover, share and prepare delicious recipes on your own way</h2>
            </div>
            <div className="form-login p-8 rounded shadow-md w-96">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className=" bg-amber-400 w-60 hover:bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 border-amber-400 hover:border-2 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <p className="block text-white font-bold text-center">{message}</p>
                    </div>
                </form>
                <hr className=' w-auto  bg-white m-6'></hr>
                <p className="block text-white font-bold text-center">A new world of cooking made by you</p>
                <div className="flex items-center justify-center mt-2">
                    <button
                        className=" bg-white w-60 hover:bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 border-white hover:border-2 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => setShow(true)}
                    >
                        Register
                    </button>
                    {show && <RegisterPopUp show={show} setShow={setShow} />}
                </div>

            </div>
        </div>
    );
};

export default Login;
