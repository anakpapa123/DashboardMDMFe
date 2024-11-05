<template>
    <nav :class="['navbar', { 'navbar-collapsed': !expandSideBar }]">
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <span class="material-icons">search</span>
        </button>
      </div>
      <div class="navbar-right">
        <button class="icon-button">
          <span class="material-icons">notifications</span>
        </button>
        <div class="profile">
          <img src="../assets/vue.svg" alt="Vue Logo" />
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';


  const props = defineProps({
  expandSideBar: Boolean,
});
  </script>
  
  <style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--dark);
    color: var(--light);
    padding: 0 1rem;
    z-index: 100;
    transition: left 0.2s ease-out, width 0.2s ease-out;
  
    &.navbar-collapsed {
    left: 4rem; /* Adjust this to match collapsed sidebar width */
    width: calc(100% - 4rem);
  }

  &:not(.navbar-collapsed) {
    left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
  }
}
  
  
  .search-bar {
    display: flex;
    align-items: center;
    background-color: var(--light);
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    width: 20%;
    input {
      border: none;
      outline: none;
      padding: 0.3rem;
      font-size: 1rem;
      width: 100%;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      .material-icons {
        font-size: 1.5rem;
        color: var(--dark);
      }
    }
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  
    .icon-button {
      background: none;
      border: none;
      cursor: pointer;
      .material-icons {
        font-size: 1.5rem;
        color: var(--light);
      }
    }
  
    .profile {
      margin:0.5rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
        
      }
    }
    
    @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
  }
  </style>
  