import { useState, useEffect } from "react";

type Person = {
  name: string;
  age: number;
};

type Pet = {
  name: string;
  age: number;
  weight: number;
  desexed: boolean;
};

const App = () => {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<number>(0);

  const [pet1, setPet1] = useState<Pet>({
    name: "바둑이",
    age: 3,
    weight: 4,
    desexed: true,
  });
  const [p1, setP1] = useState<Person>({
    name: "KS",
    age: 26,
  });

  const [pets, setPets] = useState<Pet[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    return () => {
      setPets((prev) => [...prev, pet1]);
      setPeople((prev) => [...prev, p1]);
    };
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
