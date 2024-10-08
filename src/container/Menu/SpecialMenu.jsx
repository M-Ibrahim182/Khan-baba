import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_traditional  flex__center">
        <p className="app__specialMenu-menu_heading">Traditional</p>
        <div className="app__specialMenu_menu_items">
          {data.traditionals.map((traditional, index) => (
            <MenuItem key={traditional.title + index} title={traditional.title} price={traditional.price} tags={traditional.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_sweets  flex__center">
        <p className="app__specialMenu-menu_heading">Sweets</p>
        <div className="app__specialMenu_menu_items">
          {data.sweets.map((sweet, index) => (
            <MenuItem key={sweet.title + index} title={sweet.title} price={sweet.price} tags={sweet.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;