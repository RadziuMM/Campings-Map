<template>
  <div id="contact">
    <a href= 'https://www.linkedin.com/in/rados%C5%82aw-mazurczak-944a171a5/' target="_blank"><i class="fab fa-linkedin"></i>linkin</a>
    <br/>
    <a href= 'https://github.com/RadziuMM' target="_blank"><i class="fab fa-github"></i>github</a>
    <br/>
    <a href="mailto: rmazurczak24@gmail.com" target="_blank"><i class="fas fa-envelope">
    </i>email</a>
  </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style lang="scss">
#contact{
  display: none;
  margin-top:10%;
  font-size: 6vw;
  @media (min-width: 768px) {
      font-size: 2vw;
      margin-top:5%;
    }
}
#contact>a{
  transition: ease-in-out 1.5s;
}
#contact>a:hover{
  color: lightgray;
}
</style>
