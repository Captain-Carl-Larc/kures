import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return ( 
        <div>
            <h1>
                <span className="font-bold text-3xl">Dashboard</span>                
            </h1>
            <section>
                <div className='flex justify-center items-center' >
                    <FontAwesomeIcon icon={faCoffee} className='text-white h-12 w-12'/>
                    <h2>
                        Home
                    </h2>
                </div>
            </section>
        </div>
     );
}

export default Dashboard;