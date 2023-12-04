import { useImmer } from "use-immer";

const MentorsImmer = () => {
  const [person, updatePerson] = useImmer(initialPerson);

  // 멘토 이름 변경
  const updatedMentorName = () => {
    const inputName = prompt("어떤 멘토의 이름을 변경하시겠습니까?.");
    const changeName = prompt("변경 할 멘토의 이름을 입력해주세요");
    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name === inputName);
      mentor.name = changeName;
    });
  };

  // 멘토 삭제
  const deletedMentor = () => {
    const inputName = prompt("삭제 할 멘토의 이름을 입력해주세요.");
    updatePerson((person) => {
      const index = person.mentors.findIndex(
        (mentor) => mentor.name === inputName,
      );
      person.mentors.splice(index, 1);
    });
  };

  // 멘토 추가
  const createdMentor = () => {
    const name = prompt("추가 할 멘토의 이름을 입력해주세요.");
    const title = prompt("추가 할 멘토의 타이틀을 입력해주세요.");
    updatePerson((person) => person.mentors.push({ name, title }));
  };

  return (
    <div>
      <h1>
        {person.name}이는 {person.title}
      </h1>
      {person.mentors.map((mentor, index) => (
        <ul>
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        </ul>
      ))}
      <div>
        <button onClick={updatedMentorName}>멘토 이름 변경</button>
        <button onClick={createdMentor}>멘토 추가</button>
        <button onClick={deletedMentor}>멘토 삭제</button>
      </div>
    </div>
  );
};
const initialPerson = {
  name: "재환",
  title: "개발자",
  mentors: [
    { name: "앨리", title: "시니어 개발자" },
    {
      name: "제임스",
      title: "시니어 개발자",
    },
  ],
};
export default MentorsImmer;
