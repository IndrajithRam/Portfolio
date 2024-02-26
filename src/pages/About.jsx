export default function About() {
  return (
    <main className="container">
      <div className="jumbotron">
        <h1 className="display-4 aboutmeheading">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="/images/My_Pic.jpg"
                alt="Photo"
                className="photo-image"
              />

              <p>
                <i>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indrajith Ram Loganathan</b>
                </i>
              </p>
            </div>
            <div className="col-8 about me text-start">
              <p>
                &#x2022; An energetic, team-oriented Senior Software Test
                Engineer with 5.7 years of experience in Software Testing,
                having experience in automation using Selenium web-driver with
                Java on TestNG and Junit library. I've Designed and implemented
                automation frameworks from scratch like Page and I've exposure
                to Page Object Model and Data Driven framework.
              </p>

              <a
                href="Assets/pdf/Indrajith Ram.pdf"
                download="Indrajith Ram.pdf"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
