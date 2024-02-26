export default function Home() {
  return (
    <main className="container">
      <div className="jumbotron">
        <div className="d-flex flex-md-row flex-column mt-5 justify-content-center">
          <div className="flex-grow-1 w-md-100" style={{ "max-width": 560 }}>
            <div className="weltxtframe">
              <h1 className="display-10 text-center welcometext">
                Hi! I'm Indrajith Ram!
              </h1>
            </div>
            <div className="project-style hometxtbg">
              <p className="hometxt display-8 ">
                An energitic and passionate programmer. Having experience for
                about 6 years in different technologies in testing domain.Please
                click on the below links to know more
              </p>
            </div>

            <div>
              <a className="link" href="/about">
                To know about me
              </a>
            </div>
            <div>
              <a className="link" href="/projects">
                To know more about the projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
