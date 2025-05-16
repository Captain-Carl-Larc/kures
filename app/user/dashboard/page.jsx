import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faGear,faUser,faCirclePlus,faBook,faFolderOpen } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return ( 
        <div className='bg-gray-200 h-screen'>
            <h1 className="font-bold text-3xl text-black text-center">
                Dashboard    
            </h1>
            <div className='grid grid-cols-12 h-[calc(100vh-3rem)]'>
                <section id='dashboard' className='bg-gray-400  h-full flex flex-col gap-y-4 p-4 col-span-2'>
                    <div className="flex justify-start items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faHouse} className='text-white h-6 w-6' />
                        <h4>
                            Home
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center cursor-pointer gap-2 ">
                        <FontAwesomeIcon icon={faUser} className='text-white h-6 w-6' />
                        <h4>
                            Profile
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center cursor-pointer gap-2 ">
                        <FontAwesomeIcon icon={faGear} className='text-white h-6 w-6' />                    
                        <h4>
                            Settings
                        </h4>
                    </div>         
                    <div className="flex justify-start items-center cursor-pointer gap-2 ">
                        <FontAwesomeIcon icon={faBook} className='text-white h-6 w-6' />
                        <h4>
                            Stories
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center cursor-pointer gap-2 ">
                        <FontAwesomeIcon icon={faCirclePlus} className='text-white h-6 w-6' />
                        <h4>
                            Stories
                        </h4>
                    </div>               
                </section>
                <section id="show-dashboard-items" className='bg-blue-500 col-span-10  h-full'>
                    <div className='flex flex-col h-screen'>
                        <div id="stories-to-read" className='h-1/2 bg-red-700'>
                            <h2>
                                Stories to read appear here
                            </h2>
                        </div>
                        <div id="you-stories" className='h-1/2 bg-green-700 flex flex-col justify-center items-center'>
                            <h2>
                                <FontAwesomeIcon icon={faFolderOpen} className='text-white h-8 w-8' />
                            </h2>
                            <p className="text-2xl font-semibold">
                                Opps! You don't have any stories yet.
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                                Create
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}

export default Dashboard;