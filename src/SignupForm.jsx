import { useState } from "react";

const SignupForm = ({ users, setUsers, addUser }) => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
    password: "",
  });

  const { name, mobile, address, email, password } = user;

  const onChange = (event) => {
    console.log(event.target.value, event.target.name);
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    //객체[]는 객체 안의 값을 접근하는 방법
    //user['name']= user.name
  };

  const onSubmit = () => {
    //    early return 예외처리

    if (email.length === 0) {
      return alert("이메일 ㄱㄱ");
    }
    if (password.length === 0) {
      return alert("비번 ㄱㄱ");
    }
    if (address.length === 0) {
      return alert("주소 ㄱㄱ");
    }
    if (name.length === 0) {
      return alert("이름 ㄱㄱ");
    }
    if (mobile.length === 0) {
      return alert("전번 ㄱㄱ");
    }

    // const index = user.findIndex(
    //   (person) => person.email === user.email && person.mobile === user.mobile
    // );
    // if (index >= 0) {
    //   return alert("이미 가입됨");
    // }

    const found = user.find(
      (person) => person.email === user.email && person.mobile === user.mobile
    );
    if (found) {
      return alert("이미 가입됨");
    }

    // addUser(user).then((res) => alert(res));

    setUsers((prev) => [...prev, user]);
    alert("유저가 추가되었습니다");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input type="text" value={user.email} onChange={onChange} name="email" />

      <input
        type="password"
        value={user.password}
        onChange={onChange}
        name="password"
      />

      <input
        type="text"
        value={user.mobile}
        onChange={onChange}
        name="mobile"
      />

      <input type="text" value={user.name} onChange={onChange} name="name" />

      <input
        type="text"
        value={user.address}
        onChange={onChange}
        name="address"
      />

      <button onClick={onsubmit}>add</button>
    </form>
  );
};

export default SignupForm;
