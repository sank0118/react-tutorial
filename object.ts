import { Widows } from "./node_modules/csstype/index.d";
import { WeightedIdentifierMangler } from "./node_modules/vite/dist/node/index.d";
const person: {
  name: string;
  age: number;
  isMale: boolean;
} = {
  name: "Mario", //string
  age: 30, //number
  isMale: true, //boolean
};

// {안에 각각의 타입을 지정}

// type 타입명에 타입을 저장하고 변수처럼 반복적으로 쓰는 타입 선언 키워드
type S = string; //? Tip: 타입들은 대문자로 시작 2단어 이상일 경우 케멀케이스

const al: S = "a";
const a2: S = "a";
const a3: S = "a";
const a4: S = "a";
const a5: S = "a";

type B = boolean;
const b1: B = true;
const b2: B = false;
const b3: B = true;
const b4: B = false;
const b5: B = true;

type N = number;
const n1: N = 1;
const n2: N = 2;
const n3: N = 3;
const n4: N = 4;
const n5: N = 5;

type Person = {
  name: string;
  age: number;
  isMale: boolean;
};

const p1: Person = {
  age: 20,
  isMale: false,
  name: "말자",
};

const me: Person = {
  name: "KS",
  age: 26,
  isMale: true,
};

type Dog = {
  name: string;
  desexed: boolean;
  weight: number;
  age: number;
};

const dog1: Dog = {
  name: "돌돌이",
  desexed: false,
  weight: 1,
  age: 0.5,
};

const dog2: Dog = {
  name: "바둑이",
  desexed: true,
  weight: 4,
  age: 3,
};

const people: Person[] = [person, p1];

const dogs: Dog[] = [dog1, dog2];
