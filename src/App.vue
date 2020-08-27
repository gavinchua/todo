<template>
  <div id="app">
    <div
      id="nav"
      class="mb-10 text-center"
    >
      <div class="container">
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/about">
          About
        </router-link>
      </div>
    </div>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="stylus">
body
  @apply antialiased bg-black font-sans font-normal text-base text-white leading-normal relative
  .container
    @apply m-auto py-5
</style>
