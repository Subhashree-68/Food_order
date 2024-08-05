import React, { useEffect, useState } from 'react'
import "./FoodDisplay.css";
import axios from 'axios';
// import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  // const { food_list } = useContext(StoreContext);
  const URL = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {

    const response = await axios.get(`${URL}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {list.map((item, index) => {
          if (category === "All" || category === item.name) {
            return <FoodItem key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={`${URL}/images/` +item.image}
            />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
