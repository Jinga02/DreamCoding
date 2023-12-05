import { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // 위 방법 구리다!

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">NAME : </label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">EMAIL : </label>
      <input
        type="text"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
/**
 * 통제되지 않은 컴포넌트 form
 * form에 있는 input 데이터는 사용자가 바로 확인하고 수정 가능 하기 때문에 언컨트롤 컴포넌트라고 한다.
 * 그래서 React에서 추구하는 원칙과 어긋난다. 항상 UI 업데이트는 React의 상태로부터 발생되어야 하기 때문이다.
 * 그래서 form을 사용할 때는, 항상 상태를 이용해서 value는 그 상태의 값을 출력하고 onChange를 발생할때마다 상태를 업데이트 해줘야한다.
 * 상태는 개별적으로 관리해도 되지만 연관된 데이터라면 객체로 관리하는것이 좋다.
 */
