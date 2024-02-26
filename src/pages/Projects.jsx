export default function Projects() {
  return (
    <main className="container" style={{ textAlign: 'center' }}>

      <h1 className="display-5 fw-medium" style={{marginTop: "1rem", marginBottom: "3rem", color: "#f04343"}}>Projects</h1>

      <div className="jumbotron">

        <div className="container project-style">
          <div className="row">
            <div className="col-4">
              <h1>Synchrony Financial</h1>
              <p className="synchtext">
                IHS (Integrated Hosted Solution) is a new application which was
                developed and tested to take care of the transactions/payments
                happening in CCD (Care Credit Direct) internally, the previous
                application. IHS takes care of completing the transactions which
                were initiated through CCD(Care Credit Direct),basically a
                merchant-oriented application.
              </p>

              <p className="synchtext">
                I worked as a single resource in the testing and reporting for
                this project. It was completed in a 1 year duration and launched
                to the customers bug free.
              </p>
            </div>

            <div className="col-4">
              <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concardis</h1>
              <p className="Concardtext">
                Smart-pay is a tool which allows Merchants to accept payments
                from their customers using a POS. It also includes an Web and
                Mobile application which facilitates the Merchant to track their
                transactions happening through the Smart Pay POS.
              </p>

              <p className="Concardtext">
                Tested the client application with new features in POS payment
                for specific customers.{" "}
              </p>
            </div>

            <div className="col-4">
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T-Net
              </h1>
              <p className="Tmobtext">
                The T-Net application is a platform for the customers to buy new
                devices, services, accessories, etc,. Customers can place their
                orders online through the web app and track their order statuses
                with the reference ID.
              </p>

              <p className="Tmobtext">
                New devices were added to the application for sale, carried out
                testing for these changes in a short period of time and launched
                it live successfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
