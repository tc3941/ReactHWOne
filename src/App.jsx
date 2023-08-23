import './App.css';
import UserProfile from './UserProfile.JSX';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="container board mt-3">
        <div className="row justify-center text-center">
          <h1>User List</h1>
        </div>
        <div className="row justify-center text-center">
          {users.map((props, index) => {
            return (
              <UserProfile
                key={index}
                name={props.name}
                email={props.email}
                imgUrl={props.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'Michael Johnson',
    email: 'michael@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Emily Brown',
    email: 'emily@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'David Wilson',
    email: 'david@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Sarah Davis',
    email: 'sarah@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'Daniel Thompson',
    email: 'daniel@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
];

export default App;
