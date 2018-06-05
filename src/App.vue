<template>
  <div class="app">
    <nav>
      <router-link to="/">List</router-link>
    </nav>
    <div class="app__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex: 1 auto;
  align-items: center;
  flex-direction: column;

  &__wrapper {
    width: 100%;
    max-width: 1000px;
  }
}
</style>
