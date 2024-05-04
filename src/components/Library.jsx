import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';
import BookForm from './BookForm';

function Library() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <div>
      <h1>Library</h1>
      <p>
        This is the Library page.
      </p>
      {isLoggedIn &&
       <div>
        <BookForm/>
        </div>
      }
    </div>
  );
}

export default Library;