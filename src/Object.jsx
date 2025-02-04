import { useState } from "react";
import SignupForm from "./SignupForm";

const Object = () => {
  const [signinProps, SetsigninProps] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    SetsigninProps((prev) => ({ ...prev, [name]: value }));

    console.log(signinProps[name]);
  };

  const [array, setArray] = useState(["이형진", "오윤환", "양영탁", "서준성"]);

  const onSubmit = () => {
    if (signinProps.name.length === 0) {
      return alert("이름을 입력해");
    }
    setArray((prev) => {
      let copy = [...prev, signinProps.name];

      console.log(copy);
      return copy;
    });
  };

  const onDelete = () => {
    const { name } = signinProps;
    if (name.length === 0) {
      return alert("이름 입력 ㄱㄱ");
    }
    const index = array.findIndex((person) => person === name);
    if (index < 0) {
      return alert("존재 없음");
    }
    console.log(array[index]);

    // setArray((prev) => {
    //   let copy = [...prev];
    //   copy.splice(index, 1);

    //   console.log(copy);
    //   return prev;
    // });

    setArray((prev) => {
      let copy = prev.filter((person) => person !== name);
      console.log(copy);
      return copy;
    });
  };

  const [users, setUsers] = useState([
    {
      name: "서준성",
      address: "대전 중구",
      mobile: "01022311232",
      password: "12323",
      email: "123@das.com",
    },
    {
      name: "양영탁",
      address: "대전 서구",
      mobile: "01022314232",
      password: "12327",
      email: "123@daa.com",
    },
  ]);

  const addUser = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsers((prev) => [...prev, user]);

        resolve("회원가입되었습니다.");
      }, 1000);
    });

  return (
    <div>
      <h1>Object</h1>
      <input
        type="text"
        value={signinProps.email}
        onChange={onChange}
        name="email"
        // onChange={
        //   (e) => SetsigninProps((prev) => ({ ...prev, email: e.target.value }))
        //   콜백 함수를 사용해서 객체를 return할때 한줄로 작성하고싶다면 return 없애고 ()안에 {}를 사용한뒤 객체 입력.
        // }
      />

      <input
        type="password"
        value={signinProps.password}
        onChange={onChange}
        name="password"
      />

      <input
        type="text"
        value={signinProps.name}
        onChange={onChange}
        name="name"
      />

      <button onClick={onSubmit}>ADD</button>
      <button onClick={onDelete}>Delete</button>

      <SignupForm users={users} setUsers={setUsers} addUser={addUser} />
    </div>
  );
};
export default Object;
