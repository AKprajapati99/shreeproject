import React from 'react';
import './NewsSlider.css';

const NewsSlider = () => {
  return (
    <div className="roos">
        <h1><center> <hr /> NEWS <hr /></center></h1>
      <div className="example-1 news">
        <div className="wrapper">
          <div className="date">
            <span className="day">12</span>
            <span className="month">Aug</span>
            <span className="year">2016</span>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">Jane Doe</span>
              <h1 className="title"><a href="#">Everything You Need to Know About Gold Medals</a></h1>
              <p className="text">Olympic gold medals contain only about 1.34 percent gold, with the rest composed of sterling silver.</p>
              <label htmlFor="show-menu" className="menu-button"><span></span></label>
            </div>
            <input type="checkbox" id="show-menu" />
            <ul className="menu-content">
              <li>
                <a href="#" className="fa fa-bookmark-o"></a>
              </li>
              <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
              <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      

      <div className="example-2 news">
        <div className="wrapper">
          <div className="header">
            <div className="date">
              <span className="day">12</span>
              <span className="month">Aug</span>
              <span className="year">2016</span>
            </div>
            <ul className="menu-content">
              <li>
                <a href="#" className="fa fa-bookmark-o"></a>
              </li>
              <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
              <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
            </ul>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">Jane Doe</span>
              <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
              <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
              <a href="#" className="button">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
