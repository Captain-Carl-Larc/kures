"use client"
import { useEffect, useState } from 'react';
import supabase from './config/supabaseClient';

// Define a type for the user data
interface User {
  id: number;
  name: string;
  age:number
  // Add other properties as needed, based on your database schema
}

const Home = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select();

      if (error) {
        setFetchError('Could not fetch the users');
        setUsers(null);
      }
      if (data) {
        setUsers(data);
        setFetchError(null);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}<span className='px-4'>{user.age}</span></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
