import { Link } from "react-router-dom";

export default function Home() {

  return (

    <main className="container" style={{ textAlign: 'center' }}>

        <div className="row">

          <div className="col-md-12 col-lg-12" style={{marginTop: "3rem"}}>

            <h1 className="display-6" style={{fontSize: "30px"}}>Hey There!</h1>

            <h3 className="display-5 mt-5 fw-bold" style={{color: "#f04343"}}>I'm Indrajith Ram</h3>

            <h3 className="display-6" style={{fontSize: "1.5rem"}}>You can call me Ram</h3>

            <h3 className="display-6 mt-5" style={{fontSize: "30px"}}>An energitic and passionate programmer. Having experience for about 6 years in different technologies in testing domain!</h3>

            <h4 className="display-6 mt-5" style={{fontSize: "20px"}}>

              <i>Please click on the below links to know more</i>

            </h4>
            
            <div className='row align-items-center justify-content-center text-content' style={{marginTop: "2rem"}}>

              <div className='col-md-auto'  style={{padding: "10px",  textAlign: "center" }} >

                <Link to="/about" >

                  <button type="button" className="btn btn-light" style={{ width: "200px"}}>About Me</button>

                </Link>

              </div>

              <div className='col-md-auto' style={{padding: "10px",  textAlign: "center" }} >

                <Link to="/projects" >

                  <button type="button" className="btn btn-light" style={{ width: "200px"}}>Projects</button>

                </Link>

              </div>

            </div>

          </div>

        </div>
        
      </main>


    // <main className="container">
    //   <div className="jumbotron">
    //     <div className="d-flex flex-md-row flex-column mt-5 justify-content-center">
    //       <div className="flex-grow-1 w-md-100" style={{ "max-width": 560 }}>
    //         <div className="weltxtframe">
    //           <h1 className="display-10 text-center welcometext">
    //             Hi! I'm Indrajith Ram!
    //           </h1>
    //         </div>
    //         <div className="project-style hometxtbg">
    //           <p className="hometxt display-8 ">
    //             An energitic and passionate programmer. Having experience for
    //             about 6 years in different technologies in testing domain.Please
    //             click on the below links to know more
    //           </p>
    //         </div>

    //         <div>
    //           <a className="link" href="/about">
    //             To know about me
    //           </a>
    //         </div>
    //         <div>
    //           <a className="link" href="/projects">
    //             To know more about the projects
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
