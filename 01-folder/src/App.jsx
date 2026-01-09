import Card from "./component/card"

const App = () => {
  return (
    <>

        <h1>Hello, World!</h1>
      <div className="large">
      <Card user="Yash" />
      <Card user="Rahul" />
      <Card user="Kaku" />
      <Card user="Chetan" />
      
      </div>
      
    </>
  )
}

export default App