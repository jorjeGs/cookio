import './Login.css'

const Login = () => {
    return (
        <div className="flex justify-between items-center h-screen">
            <div className='w-1/2'>
                <h1 className='text-9xl text-amber-400 font-bold text-center'>Cookio</h1>
                <h2 className='text-2xl text-white font-bold text-center mt-4'>Discover, share and prepare delicious recipes on your own way</h2>
            </div>
            <div className="form-login p-8 rounded shadow-md w-96">
                <form>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
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
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className=" bg-amber-400 w-60 hover:bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 border-amber-400 hover:border-2 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <hr className=' w-auto  bg-white m-6'></hr>
                <p className="block text-white font-bold text-center">A new world of cooking made by you</p>
                <div className="flex items-center justify-center mt-2">
                    <button
                        className=" bg-white w-60 hover:bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 border-white hover:border-2 focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
