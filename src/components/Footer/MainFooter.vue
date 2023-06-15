<template>
    <footer>Coded by <a href="https://www.lunasmithart.com/" target="_blank">Luna Smith</a>, open-sourced on 
    <a href="https://github.com/Lu-Smith/memory_game_vue" target="_blank">GitHub</a>.</footer>
</template>

<style>
  footer {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      text-align: center;
      padding: 20px;
      color: rgb(250, 250, 250);
      background: black;
  }
  
  footer a {
    color: rgb(215, 241, 223);
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  
  footer a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #57746d;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  
  footer a:hover {
    color: #57746d;
  }
  
  footer a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media screen and (max-width: 900px) {
    footer {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    footer {
      padding: 10px;
      font-size: 12px;
    }
  }
</style>