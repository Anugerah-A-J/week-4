import icon from '../asset/arrow-upright.png';
import React from 'react'

const Menu = () => {
  return (
    <div>
      <div className="menu-wrapper">
        <div className="row">
          <div className="col-4 menu-image">
            <img
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="col-4 menu-image">
            <img
              src="https://images.pexels.com/photos/3277468/pexels-photo-3277468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="col-4">
            <a
              href="./form-page.html"
              className="menu-item d-flex justify-content-between"
            >
              <div className="text align-self-center">Add new placeeee</div>
              <div className="icon">
                <img src={icon} alt="arrow" />
              </div>
            </a>
            <a
              href="./post-page.html"
              className="menu-item d-flex justify-content-between"
            >
              <div className="text align-self-center">See all places</div>
              <div className="icon">
                <img src={icon} alt="arrow" />
              </div>
            </a>
            <a
              href="./removed-page.html"
              className="menu-item d-flex justify-content-between"
            >
              <div className="text align-self-center">Removed Item</div>
              <div className="icon">
                <img src={icon} alt="arrow" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu