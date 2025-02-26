//! fileName.d.ts // d=> dev. 개발할 때만 쓰는 파일 전역관리 기능

type StudentName = "유경환" | "강산" | "김영화" | "허승이" | "강찬희";

interface Student {
  name: StudentName | "";
  mobile: string;
}
//! d.ts 파일에서 상단에 뭔가를 불러오면 전역으로 사용할 때 import해서 써야 함
