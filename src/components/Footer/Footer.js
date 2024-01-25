import React from "react";

function Footer() {
  return (
    <footer
      className="bg-body-tertiary text-center border "
    
    >
      <div className="container p-4 pb-0 "  style={{ background: '#2c3e50' }}>
        <section   style={{ background: '#2c3e50' }}>
          <form action="">
            <div className="row d-flex justify-content-center"   style={{ background: '#2c3e50' }}>
              <div className="col-auto">
                <p className="pt-2">
                  <strong
                    className="text-white"
                    style={{ fontFamily: "sanserif" }}
                  >
                    Sign up for our newsletter
                  </strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                 
                    className="form-control"
                  />
                  <label
                    className="form-label text-white"
                 
                  >
                    Email address
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button
                  data-mdb-ripple-init
                  type="submit"
                  className="btn btn-primary  text-white mb-4"
                  style={{ fontFamily: "sanserif",  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center p-3 text-white"
        style={{ fontFamily: "sanserif" , background: '#2c3e50' }}
      >
        © 2020 Copyright - Expense Tracker
      </div>
    </footer>
  );
}

export default Footer;
