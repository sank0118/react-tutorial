import { useEffect, useState } from "react";

const verificationCode = "123123";

const Code = () => {
  const [code, setCode] = useState("");

  const onCheck = () => {
    if (code.length === 6 && code === verificationCode) {
      return alert("ㅊㅋㅊㅋ");
    }
    alert("인증번호 6자리를 제대로 입력하세요");
  };

  useEffect(() => {
    if (code.length === 6) {
      onCheck();
    }
  }, [code]);

  return (
    <div>
      <h1>Code</h1>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={onCheck}>인증</button>
    </div>
  );
};

export default Code;
