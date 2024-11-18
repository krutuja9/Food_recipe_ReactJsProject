import { useState } from "react"
import { useEffect } from "react"
import './meal.css'

const Meal = () => {

  const [mealData, setMealData]=useState([])
  const [area, setArea]=useState('indian')
  const [inputData, setInputData]=useState('')

  useEffect (()=>{ 

    const fetchDataFramAPI =  async () =>{
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      const data = await api.json()

      console.log(data.meals)
      setMealData(data.meals)

    }
    fetchDataFramAPI()
  },[area]) 

  const submitHander = async (e) =>{
    e.preventDefault();
    const api = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
    const data  = await api.json()
    console.log('search data = ', data.meals)
    setMealData(data.meals)

  }

  return (
   <>
    <div className='mx-auto text-center'>
          <button 
           onClick={() => setArea('Indian')} 
          
          type="button" className="btn btn-outline-primary mx-3">Indian</button>
          <button 
           onClick={() => setArea('Canadian')} 
          
          type="button" className="btn btn-outline-warning mx-3">Canadian</button>
          <button 
          onClick={() => setArea('american')} 
          
          type="button" className="btn btn-outline-light mx-3">American</button>
          <button 
           onClick={() => setArea('thai')} 
          
          type="button" className="btn btn-outline-info mx-3">Thai</button>
          <button 
         onClick={() => setArea('british')} 
          
          type="button" className="btn btn-outline-warning mx-3">British</button>
          <button 
          onClick={() => setArea('russian')}  
          
          type="button" className="btn btn-outline-info mx-3">Russian</button>
        

    </div>

    <form onSubmit={submitHander} className="mx-auto text-center my-3">
      <input onChange={(e) =>setInputData(e.target.value)} type="text" />
    </form>
    <div 
    style={{
      display:'flex' , 
      justifyContent:'center', 
      alignItems:'center',
      flexWrap:'wrap',
      gap: '10px'}}>
      {mealData.map((data) => 
      <div key={data.idMeal}
      style={{textAlign:'center'}}
      >
       <div>
       <img src={data.strMealThumb} 
       style={{width:'220px', borderRadius:'10px' , border:'2px solid blue'}}
       alt="" />
       </div>
       <h5>{data.strMeal}</h5>

      </div>)}
    </div>
   </>
  )
}

export default Meal
