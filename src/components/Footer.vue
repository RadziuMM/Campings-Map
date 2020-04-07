<template>
  <div class="footer">
    <div>&copy;Radosław "Boruta" Mazurczak</div>
    <a href="mailto: rmazurczak24@gmail.com" ><div class="mail"><i class="fas fa-envelope">
      </i> rmazurczak24@gmail.com</div></a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');
a{
  text-decoration: none;
  color:black;

}
  .footer{
    font-family: 'Gotu', sans-serif;
    color:gray;
    position: absolute;
    bottom:0;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vw;
    @media (min-width: 768px) {
      font-size: 1vw;
    }
  }
  .footer>div{
    float: left;
    margin: 2px;
  }
  .mail{
    transition: ease-in-out 1s;
    color:gray;
  }
  .mail:hover{
    color:black;
    cursor: pointer;
  }
</style>
