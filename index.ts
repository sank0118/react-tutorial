const n = null;
console.log(n);

const array = ["a", "b", "c", "d"];
console.log(array);

//type[]
const array2: number[] = [1, 2, 3, 4];

//Array<type>
const array3: Array<number> = [1, 2, 3, 4];
const array4: string[] = [...array];
const array5: Array<string> = [...array];
const array6: boolean[] = [true, false, true, false];
const array7: Array<boolean> = [...array6];

//a1-a6 각각 문자열, 숫자, boolean 배열 2개씩 만들기

const a1: Array<string> = ["a", "b"];

const a2: string[] = [...a1];

const a3: Array<number> = [1, 2];

const a4: number[] = [...a3];

const a5: Array<boolean> = [true, false];

const a6: boolean[] = [...a5];

const a: string[] = ["12"];
const b: Array<string> = ["12"];

// Generic 타입을 전달하는 것
// useState<string>()

console.log("compiled");
