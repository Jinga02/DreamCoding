function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { inputName, changeName } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === inputName) {
            return { ...mentor, name: changeName };
          }
          return mentor;
        }),
      };
    }
    case "add": {
      const { inputName, inputTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: inputName, title: inputTitle }],
      };
    }
    case "deleted": {
      const { selectMentor } = action;
      return {
        ...person,
        mentors: person.mentors.filter(
          (mentor) => mentor.name !== selectMentor,
        ),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입입니다 : ${action.type}`);
    }
  }
}

export default personReducer;
