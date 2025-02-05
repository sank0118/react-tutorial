import { useEffect, useState } from "react";

const Verify = () => {
  const [moblie, setMoblie] = useState("010"); //useState => 상태관리 끝
  const [verificationCode, setVerificationCode] = useState(null);
  const [code, setCode] = useState("");
  const [time, setTime] = useState(180);

  const onSend = () => {
    if (moblie.length !== 11) {
      return alert("연락처를 입력하새요.");
    }

    let number = 0;
    while (number.toString().length <= 5) {
      console.log("generating...");
      number = Math.floor(Math.random() * 1000000);
    }
    setVerificationCode(number.toString());
  };

  const onVerify = () => {
    console.log({ code, verificationCode }, "verifying...");

    if (time === 0) {
      setVerificationCode(null);
      setTime(180);
      return alert("인증시간이 종료되었습니다. 다시 한번 발급해주세요.");
    }

    if (code.length !== 6) {
      return alert("인증번호는 6자리입니다.");
    }
    if (verificationCode && verificationCode !== code) {
      return alert("다시한번 확인");
    }
    alert("인증되었습니다.");
  };

  useEffect(() => {
    console.log({ verificationCode });

    if (
      verificationCode &&
      verificationCode.length === 6 &&
      code.length === 6
    ) {
      onVerify();

      return () => {
        onVerify();
      };
    }
  }, [verificationCode, code]);

  useEffect(() => {
    if (verificationCode) {
      const countId = setInterval(() => {
        setTime((prev) => (prev === 0 ? 0 : prev - 1));
      }, 1000);

      return () => {
        clearInterval(countId);
      };
    }
  }, [verificationCode]);

  return (
    <div>
      <h1>본인인증</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            verificationCode ? onVerify() : onSend();
          }}
        >
          <input
            type="text"
            value={verificationCode ? code : moblie}
            onChange={(e) =>
              verificationCode
                ? setCode(e.target.value)
                : setMoblie(e.target.value)
            }
            placeholder={verificationCode ? "인증번호 입력" : "01012341234"}
          />
          <button>{verificationCode ? "인증하기" : "인증번호 전송"}</button>
        </form>

        {verificationCode && <h2>{getTime(time)}</h2>}
      </div>
    </div>
  );
};

export default Verify;

const getTime = (time) => {
  const min = Math.floor(time / 60);

  const sec = time - min * 60;

  return `${min}:${sec.toString().length === 1 ? `0${sec}` : sec}`;
};

//조건 ? A : B
//조건에 부합하면 ?옆의 A 아니면 : 앞의 B 실행

//조건 && A
//조건에 부합할 때만
