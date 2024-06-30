import './FoodItem.css'
import edit from "../../assets/edit.png";
import Addfoto from "../../assets/Addfoto.png";


const FoodItemVacio = () => {

  return (
    <div className='food-item'> 
        <div className="food-item-img-container">
            <img className='food-item-image' src={Addfoto} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>
                +____</p>
            </div>
            <p className='food-item-description'>+_____ <h1><img src={edit} alt="Edit Icon" className="descrip-image" /></h1></p>
            <p className='food-item-price'>+_____ <h1> <img src={edit} alt="Edit Icon" className="price-image" /></h1></p>
        </div>
    </div>
  )
}


export default FoodItemVacio