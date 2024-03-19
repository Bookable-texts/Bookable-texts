import React from 'react'
import '../../styles/ui/Grid.css'
import { Link } from 'react-router-dom'

function Grid({ direction, img_src, link_to, title, paragraph, button_text}) {
  return (
    <>
        {direction == 'left' ? (
            <div className="grid grid_left">
            <div className="image_container">
              <img src={img_src} />
            </div>
            <div className="content">
              <h3 className="heading heading_medium">{title}</h3>
              <p className="paragraph">
                {paragraph}
              </p>
              <Link to={link_to} className="btn btn_primary">{button_text}</Link>
            </div>
          </div>
        ): (
            <div className="grid grid_right">
          <div className="content">
              <h3 className="heading heading_medium">{title}</h3>
              <p className="paragraph">
                {paragraph}
              </p>
              <Link to={link_to} className="btn btn_primary">{button_text}</Link>
            </div>
            <div className="image_container">
              <img src={img_src}/>
            </div>
          </div>
        )}
    </>
  )
}

export default Grid