import React from 'react';

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center " style={{backgroundColor:"#333333"}}>
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Form */}
        <section>
          <form action="">
            {/* Grid row */}
            <div className="row d-flex justify-content-center">
              {/* Grid column */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong className='text-white'>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form5Example26" className="form-control" />
                  <label className="form-label text-white" htmlFor="form5Example26">Email address</label>
                </div>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-auto">
                {/* Submit button */}
                <button data-mdb-ripple-init type="submit" className="btn btn-primary  text-white mb-4">
                  Subscribe
                </button>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </form>
        </section>
        {/* Section: Form */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3 text-white">
        © 2020 Copyright  -  Expense Tracker
      
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
