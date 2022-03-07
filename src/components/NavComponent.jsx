import React, { useEffect, useState } from 'react'
import SideMenu from './elements/SideMenu'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SwitchLanguage from './elements/SwitchLanguage';

function NavComponent({language, toggleLanguage}) {

  const [menuIsActive, setMenuIsActive] = useState(false)

  const handleMenuClick = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <nav className="navBar">
      <div className="menuBox" onClick={handleMenuClick}>
        <MenuRoundedIcon/>  
      </div>
      {
        menuIsActive &&
        <div className="sideMenuBox">
          <SideMenu menuArray={[
            {
              name: 'Home',
              url: '#'
            },
            {
              name: 'Banda',
              url: '#'
            },
            {
              name: 'Media',
              url: '#'
            },
            {
              name: 'Discografía',
              url: '#'
            },
            {
              name: 'Fecha',
              url: '#'
            },
            {
              name: 'Contacto',
              url: '#'
            },
          ]} />
        </div>
      }
      
      <div className="language">
        <SwitchLanguage 
          leftLanguage={'SPA'} 
          rightLanguage={'ENG'} 
          language={language}
          toggleLanguage={toggleLanguage}/>
      </div>
    </nav>
  )
}

export default NavComponent