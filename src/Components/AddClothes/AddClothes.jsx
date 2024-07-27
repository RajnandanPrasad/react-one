import React from 'react'
import './AddClothes.css'
import shirt from '../Assets/shirt.png'
import pant from '../Assets/pant3.png'
import tshirt from '../Assets/tshirt.png'
import blazer from '../Assets/blazer.png'
import jeans from '../Assets/jeans.png'
import kurta from '../Assets/kurta2.png'
import saree from '../Assets/saree3.png'
const AddClothes = () => {
  return (

    <div>


      <div className="Add-cloth">

        <h1>Add Cloth</h1>
        <div className="cloth-container">


          <div className="shirt">
            <p>Shirt</p>
            <img src={shirt} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button></div>
            </div>



          <div className="pant">
            <p>Pant</p>
            <img src={pant} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button></div>
          </div>
 

          <div className="blazer">
            <p>Blazer</p>
            <img src={blazer} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button> </div>
          </div>


          <div className="jeans">
            <p>Jeans</p>
            <img src={jeans} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button></div>
          </div>


          <div className="kurta">
            <p>Kurta</p>
            <img src={kurta} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button> </div>
          </div>


          <div className="saree">
            <p>Saree</p>
            <img src={saree} alt="" />
            <p>Quantity</p>
            <input type="button" value="-" className="minus"></input>
            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""></input>
            <input type="button" value="+" className="plus"></input>
            <p>Rs 10</p>
            <div className="shirt-btn"><button>Add now</button> </div>
          </div>

        </div>

      </div>

    </div>

  )

}

export default AddClothes;


