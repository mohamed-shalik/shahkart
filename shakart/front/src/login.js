import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/home";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className='flex justify-center py-20 px-10 bg-cover bg-no-repeat h-screen'>
			<div className='w-[95%] lg:w-[35%] h-[95%] px-2 py-1 flex flex-col gap-7 rounded-3xl shadow-2xl shadow-red z-10 opacity-100' >
				<form onSubmit={handleSubmit}>
				<div className='Header flex flex-col gap-2'>
					<p className='text-black text-2xl text-center font-bold py-2'>Login</p>
					<p className='text-black text-1xl text-center font-bold'>Enter details to Login...!</p>
				</div>
				<div className='Input flex flex-col gap-6 pt-5 '>
					<p className='text-center'><input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
					<p className='text-center'><input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
	
					<div className='flex gap-5 justify-center'>
						<div>
						<button type="submit" className="py-3 px-2 w-40 bg-blue-500 text-white font-bold rounded-3xl hover:text-black hover:bg-white">Login</button>
						</div>
					</div>
					<p className="text-black text-center text-xs hover:text-gray-400">Not registered? <Link to="/signup">SignUp</Link></p>
				</div>
				</form>
			</div>
		</div>

	);
};

export default Login;
