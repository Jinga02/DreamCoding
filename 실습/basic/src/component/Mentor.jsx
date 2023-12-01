import { useState } from "react";

const Mentor = () => {
  const [info, setInfo] = useState({
    userName: "재환",
    useTitle: "개발자",
    mentorName: "엘리",
    mentorTitle: "시니어 개발자",
  });
  const changeMentorName = () => {
    const inputName = prompt("변경 할 멘토의 이름을 입력하세요");
    setInfo((prev) => ({
      ...prev,
      mentorName: inputName,
    }));
  };
  const changeMentorTitle = () => {
    const inputTitle = prompt("변경 할 멘토의 타이틀을 입력하세요");
    setInfo((prev) => ({
      ...prev,
      mentorTitle: inputTitle,
    }));
  };
  return (
    <div>
      <h1>{info.userName}이는 개발자</h1>
      <p>
        {info.userName}의 멘토는 {info.mentorName}({info.mentorTitle})
      </p>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기 바꾸기</button>
    </div>
  );
};

export default Mentor;
