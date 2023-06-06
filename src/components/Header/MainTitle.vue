<template>
      <h1 class="animated-heading">Memory Game</h1>
  </template>
  
  <style>
  .animated-heading {
    animation: neonEffect 1s ease-in-out infinite alternate;
  }
  
  @keyframes neonEffect {
    0% {
      text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #b6eb93, 0 0 40px #9fd3c7, 0 0 70px #9fd3c7, 0 0 80px #9fd3c7, 0 0 100px #9fd3c7, 0 0 120px #9fd3c7;
    }
    100% {
      text-shadow: 0 0 5px #ffffff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4d4d, 0 0 70px #ff4d4d, 0 0 80px #ff4d4d, 0 0 100px #ff4d4d, 0 0 120px #ff4d4d;
    }
  }
  
  h1 {
    margin-top: 50px;
  }

  </style>