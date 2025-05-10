"use client"
import {useState, useEffect} from 'react'
import supabase from '@/app/config/supabaseClient';

function readPost() {
  //console.log(supabase)

  //states
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fetchingError, setFetchingError] = useState(null)

  useEffect(()=>{
    const fetchPosts  = async ()=>{
      setLoading(true)
      const {data, error} = await supabase
      .from('stories')
      .select()

      if(error){
        setFetchingError('Could not fetch posts')
        setPosts(null)
        setLoading(false)
      }

      if(data){
        setPosts(data)
        setFetchingError(null)
        setLoading(false)
        console.log('data',data)
        console.log('posts',posts)
    }
    console.log("fetching function triggrered")    
  }
  fetchPosts()
},[])
    return ( 
        <div>
          <h1 className="font-bold text-3xl">Read posts page</h1>

          {loading && (
            <p>Loading. ...</p>
          )}
          {fetchingError && (
            <p>{fetchingError}</p>
          )}
          {posts && (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
     );
}

export default readPost;