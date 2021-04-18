<template>
<section class="hero-container">
<div class="nav">
   <header-nav></header-nav>
</div>
    <h1>We Design & Build Cool Apps for the Internet.</h1>
    
    <button>Hire Us</button>
    <button>Learn More</button>
</section>
</template>

<style scoped>
.hero-container {
 
  height: 56.25em;
  max-width: 90em;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71)), url('../assets/background-hero.svg');
}
.nav {
  display: flex;
   flex-direction: row;
   justify-content: space-between;

   margin-left: 12.5em;
   margin-right: 12.5em;
   margin-top: 2.625rem;
   margin-bottom: 13rem;
   
}


h1 {
  display: flex;
  text-align: left;
  width: 49vw;
  height: 15vh;
  font-size: 4rem;
  margin-left: 12.5rem;
  margin-right: 12.5rem;
  line-height: 100%;
  font-weight: bold;

  color: #FFFFFF;
}
button {
  max-height: 1.625em;
  max-width: 10.5em;
  margin-left: 12.5em;
  margin-right: 12.5em;
}
</style>