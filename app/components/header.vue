<template>
  <header>
    <button>WORK</button>
    <div />
    <button>ABOUT</button>
    <div />
    <button>EXHIBITIONS</button>
    <div />
    <button>CONTACT</button>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  width: 100%;
  background-color: #EBECED;
  height: 30px;

}

button {
  all: unset;
  font-family: 'Heal The Web', sans-serif;
  font-weight: normal;
  color: #25432F;
  font-size: 1.2em;
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 30px;
  cursor: pointer;

  &:hover {
    color: #0001FE;
  }
}
</style>