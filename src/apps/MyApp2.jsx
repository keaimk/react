// component
function MyComponent() {
  return <p>안녕</p>;
}

function MyApp2() {
  // react component

  // 만든 component
  // : 함수로 만들어짐
  // , component 명은 대문자로 시작

  // built-in component
  // :  이미 존재하는 html 요소들

  // component 사용시 종료 태그 꼭 작성
  return (
    <div>
      hello
      <br />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent></MyComponent>
    </div>
  );
}
export default MyApp2;
