import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faGear,faUser,faCirclePlus,faBook,faFolderOpen } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    const stories = [
  {
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "The Magical Treehouse Adventure That Changed Everything",
    intro: "Join Lily and Tom as they discover a hidden treehouse that whisks them away to incredible lands filled with talking animals and sparkling rivers...",
    readMore: "Read"
  },
  {
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Secrets of the Ancient Library and the Lost Scroll",
    intro: "When a dusty old book reveals a clue to a missing scroll, young scholar Maya embarks on a thrilling quest through forgotten tunnels and cryptic riddles...",
    readMore: "Read"
  },
  {
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "The Day the Stars Fell Down and What Happened Next",
    intro: "Imagine waking up to find the night sky empty! Follow Leo and his brave little dog Luna as they journey to find the missing stars and bring light back to their world...",
    readMore: "Read"
  },
  {
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Adventures in the Land of Talking Vegetables",
    intro: "Barnaby wasn't thrilled about eating his greens until he stumbled into a whimsical world where carrots chatted and broccoli boogied...",
    readMore: "Read"
  },
  {
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "The Mystery of the Missing Toy and the Clever Detective",
    intro: "Someone has taken Timmy's favorite teddy bear! Luckily, his sharp-witted friend Sophie is on the case, ready to uncover every clue...",
    readMore: "Read"
  }
];
          const StoryCard = ({ story }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src={story.image} alt={story.heading} className="w-full h-48 object-cover" />
        <div className="p-4 flex-grow">
          <h3 className="text-xl text-black font-semibold mb-2 line-clamp-2">{story.heading}</h3>
          <p className="text-gray-700 mb-4 line-clamp-3">{story.intro}...</p>
        </div>
        <div className="p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {story.readMore}
          </button>
        </div>
      </div>
    );
  };

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
                        <div id="stories-to-read" className='bg-red-700 p-4'>
      <h2 className="text-2xl font-bold text-white mb-4">
        Stories to read appear here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
      </div>
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


