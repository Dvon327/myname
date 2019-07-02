import React from 'react'

const HomeCard = () => (
<div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <h1>Sunlight and Tech</h1>
  <div class="carousel-inner opacity">
    <div class="carousel-item active">
      <img src="images/slide_2.jpg" class="d-block w-100 opacity" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/3dprinthome.jpg" class="d-block w-100 opacity" alt="..."/>
    </div>
    <div class="carousel-item">

      <img src="images/big-bang-shutterstock_1012822042-tomertu.jpg" class="d-block w-100 opacity" alt="..."/>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
<div class="card opacity">
  <img className="opacity" src="images/2pac.jpg"/>
  <div class="card-body opacity">
    <h5 class="card-title">I Wonder</h5>
    <p class="card-text">Some People want to see real changes in their life before they die.</p>
    <a target="_blank" rel="" href="https://youtu.be/IRJTQ7FHx0o" class="btn btn-primary">Go to video</a>

    </div>
    </div>
</div>
<audio controls="controls">
<p>Kehliani - "Peace of Mind"</p>
<source src="/audio/peaceofmind.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
<audio controls="auto play controls">
<source src="/audio/throughthewire.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
</div>


)

export default HomeCard
