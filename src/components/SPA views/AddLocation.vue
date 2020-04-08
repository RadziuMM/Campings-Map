<template>
    <div id="add">
      <form action="https://servermongomarkers.herokuapp.com/add" method="POST">
          <div>If you want to see how to find corridates go to the home tab.</div>
          <input id="input__place" placeholder="Name of ur place"  name="place" required/><br/>
          <input id="input__lat" type="number" step="0.000001"
          placeholder="lat" name="lat" required/>
          <textarea id="input__description"
           placeholder="description" name="description" required/><br/>
          <input id="input__lng" type="number" step="0.000001"
          placeholder="lng" name="lng" required/><br/>
          <input id="input__email" placeholder="example@gmail.com"
           type="email" name="email" required/><br/>
          <button class="submit" type="submit">SEND</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'AddLocation',
};
</script>

<style lang="scss">
#add{
  display: none;
  align-items: center;
  justify-content: center;
}
form{
  width: 60%;
  @media (min-width: 768px) {
    width: 40%;
  }
}
input{
  text-align: center;
  border:none;
  border: 1px black solid;
  height: 30px;
}
form>div{
  font-size: 1.5vh;
  margin-top: 15%;
  margin-bottom: 2%;
  color: grey;
  @media (min-width: 768px) {
    margin-top: 6%;
    font-size:2vh;
  }
}
#input__place{
  margin-bottom: 2%;
  width: 98.7%;
  float: left;
}
#input__lat{
  width: 20%;
  float: left;
  margin-bottom: 5px;
}
#input__lng{
  width: 20%;
  float: left;
}
#input__description{
  float: right;
  margin-right: 1%;
  margin-bottom: 2%;
  border-color: black;
}
textarea {
    max-width: 73% ;
    min-width: 73% ;
    max-height: 100px;
    min-height: 100px;
}
#input__email{
  width: 98.7%;
  float: left;
  margin-bottom: 2%;
}
button{
  clear: both;
  width: 40%;
}

</style>
