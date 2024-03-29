export default function Projects() {
  return (
    <main className="container" style={{ textAlign: "center" }}>
      <h1
        className="display-5 fw-medium"
        style={{ marginTop: "1rem", marginBottom: "3rem", color: "#f04343" }}
      >
        Projects
      </h1>

      <div className="jumbotron">
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card" style={{ maxWidth: "100%" }}>
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "30px", color: "#f04343", marginBottom: "1rem" }}>Alpha Global IT</h5>
                <p className="card-text">
                Alpha's Globemed EMR solution aim to streamline healthcare workflows, improve the accuracy and accessibility of patient information, enhance communication among healthcare providers, and ultimately contribute to more efficient and effective patient care.
                </p>
                <p className="card-text mt-1">
                  I took charge of Automation testing for Alpha's EMR solution. I developed a robust Hybrid framework using Selenium and Cucumber, integrating these tools seamlessly to enhance the efficiency of the testing process. I collaborated with the Chief Software Officer (CSO), providing regular updates and reports.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3 mt-md-0">
            <div class="card" style={{ maxWidth: "100%" }}>
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "30px", color: "#f04343", marginBottom: "1rem" }}>Synchrony Financial</h5>
                <p class="card-text">
                  IHS (Integrated Hosted Solution) is a new application which
                  was developed and tested to take care of the
                  transactions/payments happening in CCD (Care Credit Direct)
                  internally, the previous application. IHS takes care of
                  completing the transactions which were initiated through
                  CCD(Care Credit Direct),basically a merchant-oriented
                  application.
                </p>
                <p className="card-text mt-1">
                  I worked as a single resource in the testing and reporting for
                  this project. It was completed in a 1 year duration and
                  launched to the customers bug free.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mt-md-4">
          <div class="col-md-6">
            <div class="card" style={{ maxWidth: "100%" }}>
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "30px", color: "#f04343", marginBottom: "1rem" }}>Concardis</h5>

                <p className="card-text">
                  The T-Net application is a platform for the customers to buy
                  new devices, services, accessories, etc,. Customers can place
                  their orders online through the web app and track their order
                  statuses with the reference ID.
                </p>

                <p className="card-text mt-1">
                  New devices were added to the application for sale, carried
                  out testing for these changes in a short period of time and
                  launched it live successfully.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mt-2 mt-md-0" style={{ maxWidth: "100%" }}>
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "30px", color: "#f04343", marginBottom: "1rem" }}>T-Net</h5>
                <p className="card-text">
                  The T-Net application is a platform for the customers to buy
                  new devices, services, accessories, etc,. Customers can place
                  their orders online through the web app and track their order
                  statuses with the reference ID.
                </p>

                <p className="card-text mt-1">
                  New devices were added to the application for sale, carried
                  out testing for these changes in a short period of time and
                  launched it live successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
