import { ChangeEvent, FC, useState } from "react";

const NestedStateHook: FC = function () {
  // Separated states.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Nested state object.
  const [profile, setProfile] = useState({ firstName: '', lastName: '' });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  }

  return (
    <div>
      <input
        type="text"
        // value={firstName}
        // onChange={(event) => setFirstName(event.target.value)}
        value={profile.firstName}
        onChange={handleInput}
        name="firstName"
      />
      <input
        type="text"
        // value={lastName}
        // onChange={(event) => setLastName(event.target.value)}
        value={profile.lastName}
        onChange={handleInput}
        name="lastName"
      />
      <h1>First name: {firstName}</h1>
      <h1>Last name: {lastName}</h1>
      {/* {JSON.stringify(firstName) + " : " + JSON.stringify(lastName)} */}
      {JSON.stringify(profile)}
    </div>
  )
}

export default NestedStateHook;