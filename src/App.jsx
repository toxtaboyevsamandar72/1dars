import Card from './components/Card'
import data from './assets/data.json'




function App() {


  return (
    <div>
      {
        data.length && data.map((el,index) => {
          return <Card key={index} data = {el}/>
        })
      }
    </div>
  )
}

export default App