import React, { useState } from 'react';

export const Context = React.createContext(undefined);

//Types
type Props = {
  children: any[];
};
const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState] as any}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
