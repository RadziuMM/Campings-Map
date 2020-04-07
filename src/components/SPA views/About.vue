<template>
 <div id="about">
    <div>
      This site was created for survivors, bushcraft lovers
      and the whole host of outdoor enthusiasts.
      As one of them, I have always thought that despite many groups associating us,
      there was no place to share our places. Therefore,
      from forest man for forest people here, it is.
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
<style lang="scss">
#about{
  display: none;
  align-items: center;
  justify-content: center
}
#about>div{
  margin-top: 4%;
  width: 60%;
  font-size: 3vw;
  @media (min-width: 768px) {
   font-size: 1.5vw;
  }
}
</style>
