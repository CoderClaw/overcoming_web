import React from 'react'
import './SideMenu.css'

function SideMenu({menuArray}) {
  return (
    <div className="leftSideMenu">
      <ul className="menuList">
          {
            menuArray.map((el,i)=>(
              <li key={i}>
                <a href={el.url}>{el.name}</a>
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default SideMenu