import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Home from "./components/Home";

export default function App() {
  /**
   * useState adalah sebuah hook bawaan react (built-in hook)
   * Berguna buat nyimpen data & ngerender ulang datanya
   * */
  const [counter, setCounter] = useState(0);
  // const [users, setUsers] = useState([]);

  function increment() {
    setCounter((counter) => (counter += 1));
  }

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/users`
  //     );

  //     const data = await response.json();
  //     setUsers(data);
  //   }

  //   fetchUsers();
  // }, []);

  return (
    <main>
      <Counter counter={counter} increment={increment} />
      <Home />
    </main>
  );
}
