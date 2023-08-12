import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
      </div>
    </>
  );
}

export default App;
