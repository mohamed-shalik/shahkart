import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{backgroundImage:"url:('/bg.jpg')"}} className='bg-cover bg-no-repeat z-0 h-screen' >
    <div className='flex justify-center py-32 z-20 ' >
      <div className='bg-gradient-to-b from-gray-400 to-gray-200 px-36 py-12 rounded-2xl'>
        <div className='flex justify-center flex-col gap-2'>
          <h1 className='font-bold text-2xl text-center'>WELCOME</h1>
          <p className='text-center'>some details to let you in...</p>
        </div>

        <div className='flex flex-col gap-5 pt-6'>
          <Link to="/login"><p className="text-center"><button className='text-lg font-bold rounded-xl bg-white hover:bg-[#0897ED] w-56'>login</button></p></Link>
          <Link to="/signup"><p className="text-center"><button className='text-lg font-bold rounded-xl bg-white hover:bg-[#0897ED] w-56'>Signup</button></p></Link>
        </div>

      </div>
    </div>
    </div>
  );
}
export default App;
