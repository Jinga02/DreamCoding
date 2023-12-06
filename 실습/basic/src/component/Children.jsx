const Children = () => {
  return (
    <>
      <Card>
        <h1>안녕</h1>
        <p>안녕못해</p>
        <h1>어쩌라고</h1>
      </Card>
      <Card>
        <h1>강남 투룸 전세</h1>
        <p>빨리 가고 싶다</p>
        <h1>넛지헬스케어 합격</h1>
      </Card>
      <Card>
        <h1>넛지헬스케어 합격</h1>
        <p>당연하지</p>
        <h1>합격이지</h1>
      </Card>
    </>
  );
};

export default Children;

const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "black",
        width: "200px",
        height: "200px",
        margin: "1rem",
        padding: "1rem",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};
