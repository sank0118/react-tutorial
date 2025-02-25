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

interface Basic {
  name: string;
  age: number;
}

//!extends 확장
//!extends 문법으로 다른 인터페이스를 가져왔을때 해당 인터페이스 안에 값과 타입이 겹치는 것은 가능하지만 타입이 다르게 지정할 수 없다.
interface Person extends Basic {
  isMale: boolean;
}

type StudentInfo = {
  age: number;
  name: string;
};
type StudentID = {
  id: number;
};

//! type을 쓰려면 객체의 형태로 담은 type만 사용가능

//! & trtpe에서 "그리고"라는 뜻

type student = StudentInfo &
  StudentID & {
    level: string;
  };

type ClassID = {
  id: 1 | 2 | 3 | 4 | 5 | 0;
};
type StudentName = "강산" | "유경환" | "김영화" | "허승이" | "";
//! string,number,boolean,null,[] 등의 직접적인 값을 주지 않고 옵션을 주고 싶을때는
//! 타입 부분에 직접적인 값을 입력하면 된다. 여러 개의 값은 |로 구분하고 빈 문자열이나 0 등을 추가하여
//! 아무런 값이 없을때까지 지정해주면 된다.
//! 주의사항: 옵션을 지정할 때는 string,number, 등의 직접적인 타입을 함께 주지 않는다.
interface ClassStudent extends ClassID {
  name: StudentName;
  mobile: string;
}

const s1: ClassStudent = {
  name: "",
  mobile: "",
  id: 0,
};

const names: StudentName[] = [""];

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
