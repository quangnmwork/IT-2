<template>
  <nav className=" container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg flex flex-wrap justify-between md:gap-10 md:flex-nowrap border-b-2 border-b-cyan-300">
    <span class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Pieceloka</span>
    <div class="flex items-center gap-3">
      <form class="flex items-center">
        <label
          for="simple-search"
          class="sr-only"
        >
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-cyan-600 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            id="simple-search"
            type="text"
            class="bg-gray-50 border text-cyan-700 text-sm rounded-lg border-cyan-400 focus:outline-cyan-400 block w-full pl-10 p-2.5"
          />
        </div>
      </form>
      <button class="btn bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 border-none font-bold background-animate"><span>Get started</span></button>
    </div>
  </nav>
</template>
<style scoped>
.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.search-box {
  height: 32px;

  display: flex;
  background-color: #2c3a47;
  border-radius: 18px;
}

.search-box button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: #2c3a47;
}

.search-box input {
  border: none;
  outline: 0px;
  padding: 0px 0px;
  background-color: transparent;
  border-radius: 18px;
  color: red;
  font-size: 20px;
  width: 0px;
  box-sizing: border-box;
  transition: 0.3s;
}

.search-box button:hover {
  cursor: pointer;
}

.search-box:hover .text {
  width: 240px;
  padding: 10px 20px;
}
</style>
