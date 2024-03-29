const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
};

const Content = (props) => {
  return(
    <div>
      <Content part={props.part1} exercises={props.exercises1}/>
      <Content part={props.part2} exercises={props.exercises2}/>
      <Content part={props.part2} exercises={props.exercises3}/>
    </div>
  )
  }
const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
);


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 4

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App;
