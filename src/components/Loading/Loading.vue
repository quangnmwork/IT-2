<template>
  <div class="container">
    <span class="cube"></span>
    <div class="text-container">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  --cube-bg: #9b9b9b;
  --cube-bg-hover1: #0792bd;
  --cube-bg-hover2: #3b9bb8;
  --cube-bg-hover3: #00b1e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cube {
    position: relative;

    transform: skewY(-20deg);
    translate: 1rem;

    // display: inline-block;
    width: 3rem;
    height: 3rem;
    background: var(--cube-bg-hover1);
    filter: drop-shadow(0 0 2rem var(--cube-bg-hover1));
    &::before {
      content: '';
      position: absolute;
      left: -3rem;
      width: 3rem;
      height: 100%;
      background: var(--cube-bg-hover2);
      transform-origin: right;
      transform: skewY(45deg);
    }
    &::after {
      content: '';
      position: absolute;
      top: -3rem;
      width: 100%;
      height: 3rem;
      background: var(--cube-bg-hover3);
      transform-origin: bottom;
      transform: skewX(45deg);
    }
  }
  .text-container {
    margin: 2rem 0;
    font-weight: 700;
    color: #0792bd;
    span {
      display: inline-block;
      margin-right: 0.2rem;
      animation: jump infinite 1s ease-out;
      &:nth-child(2),
      &:nth-child(3) {
        animation-delay: 0.1s;
      }
      &:nth-child(4),
      &:nth-child(5) {
        animation-delay: 0.2s;
      }
      &:nth-child(6),
      &:nth-child(7) {
        animation-delay: 0.3s;
      }
      &:nth-child(8),
      &:nth-child(9) {
        animation-delay: 0.4s;
      }
      &:nth-child(10),
      &:nth-child(11) {
        animation-delay: 0.5s;
      }
      &:last-of-type {
        margin: 0;
      }
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
