import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faGear,faUser,faCirclePlus,faBook } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return ( 
        <div className='bg-gray-200 h-screen'>
            <h1 className="font-bold text-3xl text-center">
                Dashboard    
            </h1>
            <div className='grid grid-cols-12 h-[calc(100vh-3rem)]'>
                <section id='dashboard' className='bg-gray-400  h-full flex flex-col gap-y-4 p-4 col-span-2'>
                    <div className="flex justify-start items-center gap-2 ">
                        <FontAwesomeIcon icon={faHouse} className='text-white h-6 w-6' />
                        <h4>
                            Home
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center gap-2 ">
                        <FontAwesomeIcon icon={faUser} className='text-white h-6 w-6' />
                        <h4>
                            Profile
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center gap-2 ">
                        <FontAwesomeIcon icon={faGear} className='text-white h-6 w-6' />                    
                        <h4>
                            Settings
                        </h4>
                    </div>         
                    <div className="flex justify-start items-center gap-2 ">
                        <FontAwesomeIcon icon={faBook} className='text-white h-6 w-6' />
                        <h4>
                            Stories
                        </h4>
                    </div>               
                    <div className="flex justify-start items-center gap-2 ">
                        <FontAwesomeIcon icon={faCirclePlus} className='text-white h-6 w-6' />
                        <h4>
                            Stories
                        </h4>
                    </div>               
                </section>
                <section id="show-dashboard-items" className='bg-blue-500 col-span-10 h-full'>
                    <h2 className='font-bold text-3xl'>
                        Items show here
                    </h2>
                </section>
            </div>
        </div>
     );
}

export default Dashboard;