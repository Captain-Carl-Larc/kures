"use client"
import { useState } from 'react';
import supabase from '../../config/supabaseClient';

function createPost() {
    
    //states
    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async () =>{
        console.log("submitted")
    }

    return ( 
        <form onSubmit={handleSubmit} className="bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-md p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                Create Post
            </h2>
            <div className="mb-4">
                <label htmlFor="post-title" className="block text-gray-300 mb-1">Title</label>
                <input
                    id="post-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title"
                    className="w-full bg-black/20 text-white border border-gray-700 rounded-md py-2 px-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="post-content" className="block text-gray-300 mb-1">Content</label>
                <textarea
                    id="post-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your post content here..."
                    className="w-full bg-black/20 text-white border border-gray-700 rounded-md py-2 px-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] resize-y"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 rounded-md py-2 px-4 transition-colors duration-200"
            >
                Post
            </button>
        </form>
     );
}

export default createPost;