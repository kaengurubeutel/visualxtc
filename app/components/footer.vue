<template>
  <footer>
    <button>PRIVACY POLICY</button>
    <div id="logo"></div>
    <button id="left">LEGAL NOTICE</button>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  padding: 0 10px;
  background-color: #EBECED;
}

#logo {
  height: 30px;
  width: 30px;
  background-color: black;
}

button {
  all: unset;
  font-family: 'Heal The Web', sans-serif;
  font-weight: normal;
  color: #25432F;
  font-size: 1.2em;
  display: flex;
  align-items: end;
  height: 30px;
  width: 12em;
  cursor: pointer;

  &:hover {
    color: #0001FE;
  }
}

#left {
  display: flex;
  justify-content: right;
}
</style>