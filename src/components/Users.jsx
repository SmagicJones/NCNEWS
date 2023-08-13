import { useEffect, useState, useContext } from 'react';

import { fetchUsers } from '../utils/api';

import { UserContext } from '../contexts/UserContext';

import { Link } from 'react-router-dom';

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setAllUsers(users);
    });
  }, []);
  return (
    <ul className="flex flex-wrap mt-4 gap-4 p-4 rounded-xl justify-center bg-yellow-300">
      {allUsers.map((person) => {
        return (
          <li
            className="flex-1 max-w-sm bg-cyan-500 hover:bg-cyan-400 rounded-xl pb-4"
            onClick={() => {
              setUser(person.username);
            }}
          >
            <p>{person.username}</p>
            <Link to={'/articles'}>
              <img src={person.avatar_url} alt={person.username} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
