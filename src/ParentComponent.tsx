import { useState, useRef, FormEvent, useMemo, useCallback } from "react";

interface LoginProps {
  email: string;
  password: string;
}

const ParentComponent = () => {
  const initialStae: LoginProps = useMemo(
    () => ({ email: "", password: "" }),
    []
  );

  const [LoginProps, setLoginProps] = useState(initialStae);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailMessage = useMemo(() => {
    const email = LoginProps.email;

    //! email 검사 로직
    if (email.length === 0) {
      return "이메일을 입력하세요";
    }

    if (!email.includes("@")) {
      return "@를 포함해주세요.";
    }
    const split1 = email.split("@");

    if (split1[1]?.length === 0) {
      return "이메일 뒷자리를 입력하세요.";
    }

    if (!split1[1].includes(".")) {
      return "이메일 뒷자리를 확인해주세요.";
    }

    const split2 = split1[1].split(".");

    if (split2[split2.length - 1]?.length === 0) {
      return "이메일 접미사를 확인해주세요.";
    }
    return null;
  }, [LoginProps.email]);

  const passwordMessage = useMemo(() => {
    const password = LoginProps.password;

    const pl = password.length;

    if (pl === 0) {
      return "비밀번호를 입력해주세요.";
    }
    if (pl < 6) {
      return "비밀번호가 너무 짧습니다.";
    }
    if (pl > 18) {
      return "비밀번호가 너무 깁니다.";
    }
  }, [LoginProps.password]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //! keyof interface안의 값을 문자열로 뽑아옴
      const focus = (target: keyof LoginProps) =>
        setTimeout(() => {
          if (target === "email") {
            return emailRef.current?.focus();
          }
          return passwordRef.current?.focus();
        }, 100);

      //! email 검사 로직
      if (emailMessage) {
        alert(emailMessage);
        return focus("email");
      }

      //! password 검사
      if (passwordMessage) {
        alert(passwordMessage);
        return focus("password");
      }
      alert(`${LoginProps.email} 님 반갑습니다!`);
      setLoginProps(initialStae);
    },
    [
      LoginProps.email,
      passwordMessage,
      emailMessage,
      emailRef,
      passwordRef,
      initialStae,
    ]
    //! useCallback으로 감싼 함수 안에서 사용한  밖에서 만든 모든 변수, 함수(set함수는 제외)는 []안에 들어가야함
  );

  return (
    <div>
      <form onSubmit={onSubmit} action="" className=" max-w-75 mx-auto">
        <h1 className="text-2xl font-black">Login Form</h1>
        <div className=" flex flex-col gap-y-1 ">
          <label htmlFor="eamil">Email</label>
          <input
            type="email"
            id="email"
            value={LoginProps.email}
            onChange={(e) =>
              setLoginProps((prev) => ({ ...prev, email: e.target.value }))
            }
            ref={emailRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>

        <div className=" flex flex-col gap-y-1 ">
          <label htmlFor="password">Pssword</label>
          <input
            type="password"
            id="password"
            value={LoginProps.password}
            onChange={(e) =>
              setLoginProps((prev) => ({ ...prev, password: e.target.value }))
            }
            ref={passwordRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>
      </form>
    </div>
  );
};

export default ParentComponent;
