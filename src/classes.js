import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
// 
function App() {
  const [value,setValue] = useState(0)
  const[items,setItems]=useState(data)
  const getReviews = ()=>{
    const newItems = data.filter((item)=>item.id === value)
    setItems(newItems)
    console.log('rendered')
    
  }

  
    
       
  

  
  
  // useEffect(()=>{getReviews()},[value])
  useEffect(()=>{ let auto= setTimeout(()=> slide(value+1),2000)
    return ()=>clearTimeout(auto)
  })
  

  const slide = (n)=>{
    if (n < 0){
      console.log (n)
      return setValue (3)
    }
    if (n > 3){
      console.log (n)
      return setValue(0)
    }
    console.log (n)
    return setValue(n)

  }
  
 
  const Item = (item)=>{
    
   
      const {id,image,name,title,quote,hola} = item
  
    return <article className  = {hola} key = {id} >
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
        
         let hola = 'nextSlide'
         console.log(index)
        //  if ((index === 0 & value === 3) ){
        //    hola = 'lastSlide'
        //    console.log(index,hola)
        //  }
        //  if ((index === 3 & value ===0)  ){
        //   hola = 'nextSlide'
        //    console.log(index,hola)
        //  }
         if(index == value){
          hola = 'activeSlide'
           console.log(index,hola)
         }
        return <Item {...item} key={index}/>
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
