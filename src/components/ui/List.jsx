import {useEffect, useState} from 'react';
import axios from 'axios';

export default function List() {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState('');
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            }
            catch (error) {
                console.error('Error fetching users:', error);
                setError('Unable to load users.');
            }
        };
        fetchUsers();   
   },[]);
   if (users === null && !error) return <p>Loading...</p>;
   if (error) return <p role="alert">{error}</p>;

   return (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
   );
}