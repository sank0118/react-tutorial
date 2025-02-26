type MakeArray<T> = T[];

const items: MakeArray<string> = ["a", "b"];

const i2: MakeArray<number> = [1, 2, 3];

type MakePerson<N, A> = { name: N; age: A }[];

const p1: MakePerson<string, number> = [{ age: 12, name: "qwe" }];

const p2: MakePerson<string, number> = [{ name: "", age: "" }];

type MakeObj<T> = T;

const per: MakeObj<{ name: string; age: number }> = {
  age: 12,
  name: "12",
};
