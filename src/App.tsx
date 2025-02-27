// export {} 또는 export 변수, 함수 이름 이런식으로 내보내기 했을 때 { }

//! default로 내보내기 했을 때는 import할때  기본적으로 그 함수나 변수 이름을 가져옴
// ! 내 마음대로 변경해서 가져올수 있음
import fn from "./lib/fn";
//! as 다른 이름
import { a as A, b as B, c as C, sayLoud as Fn2, VFN } from "./lib";
//! index.ts 파일을 통해 취합한뒤 내보내기 하면 다른 곳에서 무조건 {}를 사용해서 꺼내옴
//! 객체처럼 취급

//! 같은 파일에서 다 꺼내올 수 있음. import 영역을 줄일 수 있음.

const App = () => {
  const { firstLetter, lastLetter, length, sayLoud } = fn("hello");
  return (
    <div>
      <h1>
        {firstLetter} {lastLetter} {length}
      </h1>
      <button onClick={() => Fn2("hello export import")}>click me</button>
    </div>
  );
};

export default App;
