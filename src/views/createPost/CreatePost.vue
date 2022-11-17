<template>
  <Navbar />
  <div class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg md:gap-10">
    <form>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text font-bold text-lg">Title</span>
        </label>
        <input
          type="text"
          placeholder="Title Type here"
          class="input input-bordered w-full max-w-xs border-cyan-400 focus:outline-cyan-400"
        />
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-bold text-lg">Type</span>
          </label>
          <select className="select border-cyan-400 focus:outline-cyan-400 w-full max-w-xs z-30">
            <option
              disabled
              selected
            >
              Select Type
            </option>
            <option>Hotel</option>
            <option>Restaunrant</option>
          </select>
        </div>
        <div class="form-controll w-full max-w-xs">
          <label class="label">
            <span class="label-text font-bold text-lg">Tags</span>
          </label>
          <a-select
            mode="tags"
            style="
               {
                padding-left: 1.5rem;
                padding-right: 2.5rem;
                height: 3rem;
                width: 100%;
                border-radius: 5px !important;
              }
            "
            placeholder="Your hash tags"
          />
        </div>
      </div>
      <RichText />
    </form>
  </div>
</template>
<script lang="ts" setup></script>
<style></style>
