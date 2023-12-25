import React, { useState } from 'react';
 import "./Offcanvash.css" 
 import offCont from './offCont';
const OffCanvas= () => {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div className='container-fluid p-0 bg-dark'>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
  <i class="ri-user-3-line"></i>
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Hello Sign in</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
     <offCont></offCont> 
    <p> Digital Content And Devices</p>
     <p>Amazon mini Tv-free</p>
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
   Eco & Alexa
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

<a class=" ml-4  " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

<button type="button" class="btn btn-outline-dark m-1 text-white"> <i class="ri-menu-line text-white m-1" ></i>All</button>
</a>
<button type="button" class="btn btn-outline-dark m-1 text-white btn-outline-dark:hover ">amazon Mini Tv</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Sell</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Best Seller</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Today's Deal</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Mobile</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Coustmer Service</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Electronis </button>
<button type="button" class="btn btn-outline-dark m-1 text-white">New Realese</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">Prime</button>
<button type="button" class="btn btn-outline-dark m-1 text-white">The Great Indian Family</button>
   
</div>
  );
};

export default OffCanvas;
