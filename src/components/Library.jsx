import { useState} from 'react';
import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';

function Library() {
  const {isLoggedIn, login, logout} = useContext(AuthContext);

  return (
    <div>
      <h1>Library</h1>
      <p>
        This is the Library page.
      </p>
      {isLoggedIn &&
       <div>
        <p>I am logged in</p>
        </div>
      }
    </div>
  );
}

export default Library;