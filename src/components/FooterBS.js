import React from "react";
import "./../index.css";

export default function FooterBS() {
  return (
    <React.Fragment>
      <footer className="bg-dark text-center text-white ">
        {/* Grid container */}
        <div className="container p-4 pb-0">
                <img src="../assets/logo/lOGOWHITE.png" className="rounded float-left" width="124" height="68"></img>
                <div className="container p-4 pb-0"/>
          {/* Section: Form */}
          <section className="">
            <form action="">
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}

                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-auto">{/* Submit button */}</div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
          </section>
          {/* Section: Form */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3 style-footer">
          © 2021 Distribuidor Autorizado |
          <h5 className="">interior_forma@hotmail.com</h5>
        </div>
        {/* Copyright */}
      </footer>
    </React.Fragment>
  );
}
