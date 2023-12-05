import { useState } from "react";
// react는 기본적으로 불변성이기 때문에 map을 통해 새로운 배열, 새로운 객체를 반환해줘야 한다.
// 배열에 바로 접근해서 변경 => 불가능
// react에서는 object에 직접 접근해서 변경해도 불변성때문에 변경이 안됨
// 참조값을 직접 바꾸면 안되고 참조값을 통해 새로운 상태를 만들어줘야 한다.

const Mentor = () => {
  const [person, setPerson] = useState({
    userName: "재환",
    useTitle: "개발자",
    mentors: [
      { name: "앨리", title: "시니어 개발자" },
      {
        name: "제임스",
        title: "시니어 개발자",
      },
    ],
  });

  // 멘토 이름 변경하기
  const changeMentorName = () => {
    const inputName = prompt("변경 할 멘토의 이름을 입력하세요");
    const changeName = prompt("멘토의 이름을 무엇으로 변경하시겠습니까?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === inputName) {
          return { ...mentor, name: changeName };
        }
        return mentor;
      }),
    }));
  };

  // 멘토 타이틀 변경하기
  const changeMentorTitle = () => {
    const inputName = prompt("변경 할 멘토의 이름을 입력하세요");
    const changeTitle = prompt("멘토의 타이틀을 무엇으로 변경하시겠습니가?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === inputName) {
          return { ...mentor, title: changeTitle };
        }
        return mentor;
      }),
    }));
  };

  // 멘토 추가하기
  const createMentor = () => {
    const inputName = prompt("추가 할 멘토의 이름을 입력하세요.");
    const inputTitle = prompt("추가 할 멘토의 타이틀을 입력하세요.");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: inputName, title: inputTitle }],
    }));
  };

  // 멘토 삭제하기
  const deleteMentor = () => {
    const selectMentor = prompt("삭제 할 멘토의 이름을 입력해주세요.");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== selectMentor),
    }));
  };
  return (
    <div>
      <h1>{person.userName}이는 개발자</h1>
      <p>{person.userName}의 멘토는 : </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기 바꾸기</button>
      <button onClick={createMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
};

export default Mentor;
