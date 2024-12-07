import React, { useEffect, useState } from 'react'

export const Datafetching = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const userData = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Eve' }
      ];
      useEffect(() => {
       
        const timer = setTimeout(() => {
          setUsers(userData); 
          setLoading(false);  
        }, 1000);  
        return () => clearTimeout(timer);
    }, []);  

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  )
}
