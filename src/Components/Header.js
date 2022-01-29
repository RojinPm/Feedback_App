import React from 'react'

function Header({text,bgColor,textColor}) {

  const headerStyles = {

    backgroundColor: bgColor,
    color: textColor,


  }




    return (

        <header style={headerStyles}>

          <div className="container">
 
           <h2 style={{textAlign: 'center'}}>Feedback UI</h2>
           {/* <p>This is the text come from APP using props {text}</p> */}

          </div>
            
        </header>
    )
}


Header.defaultProps = {

 text: "Hello Rojin ",
 

}


export default Header

