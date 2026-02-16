import React from 'react';

const Hero = () => {
  return (
    <div className='bg-linear-to-r from-cyan-800 to-cyan-600 min-h-screen flex items-center justify-center px-4 pt-16'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-green-300 mb-1 leading-tight'>
          Build Modern Web Apps 
        </h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-green-300 mb-6 leading-tight'>Faster</h1>
        <p className='text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto'>
          Create stunning web experiences with clean design, powerful components, and modern architecture.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 w-full sm:w-auto'>
            Start Free
          </button>
          <button className='bg-purple-900 text-green-300 px-8 py-3 rounded font-semibold hover:bg-purple-950 w-full sm:w-auto'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;