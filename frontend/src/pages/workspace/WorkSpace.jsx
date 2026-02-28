import React from 'react'

function WorkSpace() {
  return (
    <div className='w-screen min-h-screen bg-black flex flex-col items-center justify-center'>
      <h1 className="text-white text-7xl">Make Your prompt alive..</h1>
      <div className="prompt bg-zinc-800 mt-10 w-[50%]  rounded-2xl flex flex-col gap-3">
      <input type="text" name="prompt" id="" className="bg-zinc-700 text-xl text-white w-[100%] focus:outline-none p-2 rounded-2xl" />
      <div className="prompt_tool">
        <button className="send bg-white rounded-xl p-2 float-end mr-3 mb-3">
          Send
        </button>
      </div>

      </div>

        
      
    </div>
  )
}

export default WorkSpace
