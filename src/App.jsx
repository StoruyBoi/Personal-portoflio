import About from "../Components/About"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import LandingDoaminpart from "../Components/LandingDoaminpart"
import Skill from "../Components/Skill"
import Work from "../Components/Work"
import "../Css/Responcsive.css"
import  "./Header.css"


function App() {

  return (
    <>

  <Header/>
  <section className='doamin'>
<LandingDoaminpart/>
<Skill/>
<About/>

<Work/>
<Footer/>
</section>
    </>
  )
}

export default App
