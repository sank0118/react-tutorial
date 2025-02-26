// void

//! return 결과값 위치 ():오른쪽=>{}
//! return 값이 없을 때는 void 혹은 안적어도 된다
const fn = (m: string): void => {
  //! 인자값들의 전부 타입을 지정해야함
  //! 인자값 오른쪽에 : 타입을 주면 됨
  console.log(m);

  // return
};

fn("hello");

const makeSentence = (w1: string, w2: string, w3: number): string => {
  return w1 + "" + w2 + "" + w3;
};
type MakeFn = (w1: string, w2: string, w3: number) => string;

const p = makeSentence("안녕하세요,", "저는 사람입니다.", 33);

type Fn = (m1: string) => void; //! return type

// type Componenting
