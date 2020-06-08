<template>
<div class="homeFrame">
  <div id="Home">
    <div>How to find coordinates:</div> <br/>
    1. Go to Google Maps. <br/>
    2. Find your place. <br/>
    3. Tap on the map. <br/>
    4. On the bottom, you will find <br/>two gray numbers(lat,lng). <br/>
    5. Copy them to the "Add Location" tab. <br/>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.homeFrame{
  align-items: center;
  justify-content: center;
}
#Home{
  display: none;
  width: 40%;
  text-align: left;
  font-size: 3vw;
  margin-top: 5%;
  border: 1px black double;
  padding: 5px;
  @media (min-width: 768px) {
  font-size: 1vw;
  width: 20%;
  margin-top: 2%;
  }
}
#Home>div{
  text-align: center;
}
</style>
