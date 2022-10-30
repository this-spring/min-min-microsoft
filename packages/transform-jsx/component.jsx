const Button = (props) => {
  return(<div>this is {props.text}, color {props.color}</div>);
};
const Test = () => {
  const text= 'button';
  const color = 'red';
  return (<div>
      <h1>this is h1</h1>
    <div>this is div</div>
    <Button text={text} color={color}/>
  </div>)
};

render(document.getElementById('#app'), <Test />);