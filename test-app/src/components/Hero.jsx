import React, { useState } from 'react';
import { hero } from '../assets';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        setSearchTerm('');
        // Implement your search logic or redirection here
    };

    return (
        <section className="relative flex w-full h-screen mx-auto">
            <img
                src={hero}
                alt="hero"
                className="absolute w-full h-screen object-cover z-0 inset-0 brightness-50"
            />
            <h1 className="absolute my-[9%] flex justify-center font-bold text-white text-[72px] w-screen">Find Your New Home</h1>
            <p className="absolute flex my-[15%] justify-center font-bold text-white text-[32px] w-screen">Designed specifically for UVA students</p>
            <div className="relative flex mt-[20%] items-center p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl max-w-4xl mx-auto h-[5vh]">
                <form onSubmit={handleSearch} className="relative flex w-[700px] h-[50px]">
                    <input
                        type="text"
                        placeholder="Search for apartments, neighborhoods..."
                        className="flex-grow p-3 text-lg sm:text-xl md:text-2xl border-2 border-gray-300 focus:border-[#EB9657] rounded-l-xl focus:outline-none transition-colors w-[700px] h-[50px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#EB9657] text-white font-bold text-[16px] px-8 rounded-r-lg hover:bg-[#B46F29] focus:outline-none"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;