import MyPic from "../../public/images/My_Pic.jpg";

export default function About() {
  return (
    <main className="container" style={{ textAlign: "center" }}>
      <h1
        className="display-5 fw-medium"
        style={{ marginTop: "1rem", marginBottom: "3rem", color: "#f04343" }}
      >
        About Me
      </h1>

      <div className="row">
        <div className="col-md-5 col-lg-5 text-center">
          <img src={MyPic} alt="My Picture" style={{ width: "300px" }} />
        </div>

        <div className="col-md-7 col-lg-7">
          <h3 className="display-6" style={{ fontSize: "25px" }}>
            An energetic, team-oriented Senior Software Test Engineer with 5.7
            years of experience in Software Testing, having experience in
            automation using Selenium web-driver with Java on TestNG and Junit
            library. I've Designed and implemented automation frameworks from
            scratch like Page and I've exposure to Page Object Model and Data
            Driven framework.
          </h3>

          <a
            href="IndrajithRamLoganathan_Resume.pdf"
            download="IndrajithRamLoganathan_Resume.pdf"
            style={{ width: "200px", marginTop: "2rem", marginBottom: "2rem" }}
            className="btn btn-light"
          >
            {" "}
            Download Resume{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
