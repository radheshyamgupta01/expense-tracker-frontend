import React from 'react'

function Carosal() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel " style={{height:"200px"}}>
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/3000X1200._CB574360222_.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/November/Unrec/PC._CB572931684_.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/nov23atf/mfd/unrec/KA_Unrec3000._CB572785091_.jpg "class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
  )
}

export default Carosal