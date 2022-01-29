import React from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom' 
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./Context/FeedbackContext"
import AboutIconLink from "./Components/AboutIconLink"
import Post from "./Components/Post"


 function App(){
    

    // return React.createElement('div', { className:'container'},React.createElement('h1',{}, 'My app'))

    //  const name="Rojin"
 
    //   const comments = [

    //       { id: 1, name: 'Rojin',Age:20 },
    //       { id: 2, name: 'Rony',Age:21 },
    //       { id: 3, name: 'Rohith',Age:20 },
    //       { id: 4, name: 'Romeo',Age:21 }

  //       ]
  
  //  const loading=false
  //  const showComments=true
  // const output=(<div className="comments">

  //     <h2 style={{color:'red'}}>This is the array list using mapping</h2>

  //    <ul>

  //         { comments.map((ouput,index) => (

  //           <li key={index}>{ouput.name}</li>
 
  //       ))}

  //    </ul>

  //   </div> )
 
   


    


  //  if(loading) return <h1>Loading..............</h1>

    return(
     
      <FeedbackProvider>
      
     <Router>

         <Header />
         <div className="container"> 
 
            
            <Routes>

                 <Route exact path="/"
                  
                    element={

                          <>
                    
                          <FeedbackForm />
   
                          <FeedbackStats/>

                          <FeedbackList />
                    
                         </>

                    } 

                  ></Route>
          
       


             <Route path='/about' element={<AboutPage />} />
             <Route path='/post/*' element={<Post />} />

            </Routes>

           



           <AboutIconLink />
   
          </div>
   
     </Router>

     </FeedbackProvider>
         
    )

}

export default App