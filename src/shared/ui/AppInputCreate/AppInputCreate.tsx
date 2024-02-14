import { Dispatch, SetStateAction } from 'react';

interface IAppInputCreate {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export function AppInputCreate({ state, setState }: IAppInputCreate) {
  return (
    <input
      onChange={(e) => setState(e.target.value)}
      value={state}
      className="w-full h-5 p-5 rounded-lg  text-black outline-none bg-purple-500"
      type="text"
    />
  );
}
