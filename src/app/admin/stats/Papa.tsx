import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../../components";
import usePapa, { ReadFileProps } from "../../../lib/papa";

const Papa = ({ data }: { data: SurveyCsv[] }) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const { downlaodFile, readFile } = usePapa();

  const onPapa = () => {
    downlaodFile(data, "설문지 응답 결과").download();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];

      setFile(uploadedFile);

      readFile(
        uploadedFile,
        (
          results: ReadFileProps<{ 이름: string; 나이: string; 지역: string }>
        ) => {
          const newData = results.data.map((item) => ({
            name: item.이름,
            age: item.나이,
            city: item.지역,
          }));

          console.log(newData);
        }
      );
    }
  };

  return (
    <div>
      <h1>{file ? file.name : "파일을 업로드 하세요."}</h1>
      <div>
        <label htmlFor="file">csv 파일 업로드</label>
        <input type="file" id="file" onChange={onChange} />
      </div>
      <Button.Opacity onClick={onPapa}>Papa로 확인하기</Button.Opacity>
    </div>
  );
};

export default Papa;

export interface SurveyCsv {
  질문: string;
  중복선택: "가능" | "";
  응답자아이디: string;
  답변: string[];
}
