import React from 'react';

interface IAuth {
  name: string;
  age: number | null;
  email: string;
}

const initialState: IAuth = {
  name: 'Prince',
  email: 'prince@gmail.com',
  age: 25,
}

// This createContext function also accepts a default value when nothing passed by the Provider component. Although in Typescript it's necessary to pass a default argument.
const userProfile = React.createContext<IAuth>(initialState);
userProfile.displayName = 'authSlice'; // This is very useful for assigning name to the context like we do assign in Redux store.

export const { Provider, Consumer } = userProfile;

export default userProfile;