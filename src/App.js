import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
// 
function App() {
  const [value,setValue] = useState(1)
  const[items,setItems]=useState(data)
  const getReviews = ()=>{
    const newItems = data.filter((item)=>item.id === value)
    setItems(newItems)
    console.log('rendered')
    
  }

  
    
       
  

  
  
  useEffect(()=>{getReviews()},[value])
  useEffect(()=>{ let auto= setTimeout(()=> slide(value+1),2000)
    return ()=>clearTimeout(auto)
  })
  

  const slide = (n)=>{
    if (n < 1){
      console.log (n)
      return setValue (4)
    }
    if (n > 4){
      console.log (n)
      return setValue(1)
    }
    console.log (n)
    return setValue(n)

  }
  
  const Item = (item)=>{
    
   
      const {id,image,name,title,quote} = item

    return <article key={id}>
      <img src = {image} alt = {name}className='person-img'></img>

      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon'/>

    </article>
    }

  
  

  return <section className='section'>
    <div className='title'><h2>
      <span>/</span>reviews
    </h2>

    </div>
    <div className='section-center'>
      {items.map((item,index)=>{
        return <Item {...item} />
      })}
      <button className='prev' onClick={()=>{slide(value-1)}}>
        <FiChevronLeft/>
      </button>
      <button className='next' onClick={()=>{slide(value+1)}}>
        <FiChevronRight/>
      </button>

    </div>
    

    
    

  </section>;
}

export default App;
