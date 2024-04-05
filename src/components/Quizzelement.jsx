import React from 'react';

function Quizzelement({ index, active, handleOptionClick,text }) {
    return (
        <div
            onClick={() => handleOptionClick(index)}
            className={`cursor-pointer h-16 w-full border-[1px] border-[#2E2E2E] rounded-xl ${active ? 'bg-[#ffd54d33] border-[#F7C213] text-[#F7C213] duration-50' : 'bg-[#0c0c0c0c]'}`}
        >
            <p className='text-center text-lg my-[17px] font-medium'> {text} </p>
        </div>
    )
}

export default Quizzelement;
