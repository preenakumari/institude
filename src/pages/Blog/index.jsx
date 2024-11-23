
import AI from "../media/all.png"
import  js from "../media/js.png"
import computing from "../media/computing.png"
import htmlcss from "../media/html.png"
import web from "../media/web.png"
import php from "../media/php.png"
import wordpress from "../media/wordpress.png"
import mobile from "../media/phone.png"
import programing from "../media/programing.png"
import python from "../media/python.png"
import cloud from "../media/img1.png"
import advanced from "../media/img2.png"
import building from "../media/img3.png"
import Error from "../media/error.png"

const blog = () => {
  return (
    <>
    <body>
    <div className="header">
      <p>Blog</p>
      <h1>Keep up to date on current trends and technologies</h1>
      <div className="boxes">
        <button>Show All</button>
        <button className="ai"><img src={AI}/>AI</button>
        <button className="jas"><img src={js}/>JavaScript</button>
        <button className="jas"><img src={computing}/>Computing</button>
        <button className="jas"><img src={htmlcss}/>HTML&CSS</button>
        <button className="jas"><img src={web}/>Web</button>
        <button className="jas"><img src={php}/>PHP</button>
        <button className="jas"><img src={wordpress}/>WordPress</button>
        </div>
        <div className="boxes">
        <button className="jas"><img src={mobile}/>Mobile</button>
        <button className="jas"><img src={programing}/>Programing</button>
        <button className="jas"><img src={python}/>Python</button>
        <button className="jas"><img src={Error}/>Error</button>
      </div>
    </div>
    </body>
    <main>

      <div className="allcards">
      <div className="cards">
        <img src={cloud}/>
        <h4>Automating Vultr Cloud<br/> 
          Infrastructure with Terraform</h4>
      </div>
      <div className="cards">
        <img src={advanced}/>
        <h4>Advanced Web Deployment <br/> With Plesk on Vultr</h4>
      </div>
      <div className="cards">
        <img src={building}/>
        <h4>Advanced Web Deployment <br/> With Plesk on Vultr</h4>
      </div>

      </div> 
  
    
  
      
    </main>
    </>
  )
}

export default blog