import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/items?populate=*')  // Ensure the image field is populated
      .then((response) => {
              
        setItems(response.data.data); 
        console.log(response.data.data)
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
      });
  }, []);

  return (
    <>
   <h1>Items</h1>
      <div className='container'>
        {items.length > 0 ? (
          items.map((item) => (
            <div className='itemcard' key={item.id}>
                <img 
                className='card-img'
                  src={`http://localhost:1337${item.Pictures.url}`} 
                  alt={item.Pictures.alternativeText}
                />
             
             
             <div className="card-content">
              <h2>{item.titles}</h2>
              {item.Description && item.Description.map((desc, idx) => (
                <div className='card-description' key={idx}>
                  {desc.children && desc.children.map((child, idx) => (
                    <p key={idx}>{child.text}</p>
                  ))}
                </div>
              ))}
              
              </div>

            
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </>
  )
}
