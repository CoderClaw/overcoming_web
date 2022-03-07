import React from 'react'
import './SwitchLanguage.css'

function SwitchLanguage({leftLanguage,rightLanguage, language,toggleLanguage}) {

  return (
    <div className="languageSwitcher" onClick={()=>toggleLanguage(language)}>
        <p className="leftLanguage">{leftLanguage}</p>
        <div className="switcherBody">
            <div className={language!=='SPA' ? "switcherIndicator active" : "switcherIndicator"}> </div>
        </div>
        <p className="rightLanguage">{rightLanguage}</p>    
    </div>
  )
}

export default SwitchLanguage