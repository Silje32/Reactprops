export default function Greeting(props) {
  console.log(props);

  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.age}</h3>
    </>
  );
}
