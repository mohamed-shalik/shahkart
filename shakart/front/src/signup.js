import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div className='flex justify-center py-7 px-10 bg-cover bg-no-repeat h-screen'>
			<div className='w-[95%] lg:w-[35%] h-[100%] px-2 py-1 flex flex-col gap-7 rounded-3xl shadow-2xl shadow-red z-10 opacity-100' >
				<form onSubmit={handleSubmit}>
				<div className='Header flex flex-col gap-2 pt-10'>
					<p className='text-black text-2xl text-center font-bold py-2'>SignUp</p>
					<p className='text-black text-1xl text-center font-bold'>Just some details to get you in..!</p>
				</div>
				<div className='Input flex flex-col gap-5 pt-10'>
					<p className='text-center'><input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
					<p className='text-center'><input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
					<p className='text-center'><input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
					<p className='text-center'><input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className='text-black rounded-2xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
					<div className='Button flex flex-col gap-5'>
						<p className="text-center"><button type="submit" className='className="py-8 px-8 w-32 bg-blue-500 text-white font-bold rounded-3xl hover:text-black hover:bg-white'>SignUp</button></p>


					</div>
					<p className="text-black text-center text-xs hover:text-gray-400">Already registered? <Link to="/login">Log in</Link></p>

				</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
