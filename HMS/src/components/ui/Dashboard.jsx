import React from 'react'

function Dashboard() {
        const data = ['HOME', 'DATA', 'APPOINTMENTS', 'CARDS']
      
        return (
          <div className="bg-[#ffffff]">
            <nav className="flex justify-between z-10 items-center px-5 py-5 w-full ">
              <div className="text-4xl font-IBMPlexBold">HMS</div>
              <div className="flex font-IBMPlexBold">
                {data.map((item, index) => {
                  return (
                    <h1 className="px-3" key={index}>
                      {item}
                    </h1>
                  )
                })}
              </div>
            </nav>
            <div className=" items-center min-h-screen flex justify-around relative flex-wrap pb-20">
              <>
                <div className="bg-[#1619f2] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[10px]  -left-20 opacity-75"></div>
              </>
              <div className="max-w-xl relative">
                <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase pb-10">
                  Hello,<span className="text-[#1619f2]">Welcome</span>
                </h1>
                <p className="font-IBMPlexRegular text-left">
                Welcome, Dr. [Name]! Your expertise drives better patient care, and 
                we're here to enhance your journey with smart, seamless healthcare management solutions. 
                Let’s revolutionize healthcare together!
                </p>
              </div>
              <div>
                <img
                  width="500"
                  height="500"
                  alt="bg-image"
                  border-radius="rounded"
                  src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
          </div>
        )
}

export default Dashboard