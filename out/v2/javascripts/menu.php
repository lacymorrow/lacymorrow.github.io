<?php session_start(); if(isset($_SESSION['page'])){ $P = $_SESSION['page']; } ?>
  <!-- Header and Nav -->
  <div class="contain-to-grid" style="border-bottom: 4px solid #83C441;">
  <nav class="top-bar">
    <ul>
      <!-- Title Area -->
      <li class="name">
        <h1>
          <a href="http://www.lacymorrow.com/">
            Lacy Morrow
          </a>
        </h1>
      </li>
      <li class="toggle-topbar"><a href="#"></a></li>
    </ul>

    <section>
      <!-- Left Nav Section -->
      <ul class="left">
        <li class="divider"></li>
        <li <?php if($P==1){echo 'class="active" ';} ?>><a href="http://www.lacymorrow.com/">Home</a></li>
        <li class="divider"></li>
        <li <?php if($P==2){echo 'class="active" ';} ?>><a href="http://www.lacymorrow.com/projects/xspf/">XSPF Jukebox</a></li>
        <li class="divider"></li>
        <li <?php if($P==3){echo 'class="active" ';} ?>><a href="http://xplayjs.com">xPlay.js</a></li>
        <li class="divider"></li>
        <li <?php if($P==4){echo 'class="active" ';} ?>><a href="http://www.lacymorrow.com/projects/">Projects</a></li>
        <li class="divider"></li>
      </ul>

      <!-- Right Nav Section -->
      <ul class="right">
      <?php if($P==2){ ?>
		<li class="divider"></li>
        <li ><a href="https://github.com/lacymorrow/xspf-jukebox">View on Github</a></li>
      <?php } else if($P==3){ ?>
		<li class="divider"></li>
        <li ><a href="https://github.com/lacymorrow/xplay-js">View on Github</a></li>
      <?php } ?>
        <li class="divider"></li>
        <li <?php if($P==5){echo 'class="active" ';} ?>><a href="http://www.lacymorrow.com/vcard/">Contact</a></li>
        <li class="divider"></li>
      </ul>
    </section>
  </nav>
  </div>