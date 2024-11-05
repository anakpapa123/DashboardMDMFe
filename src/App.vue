<template>
	<Login v-if="!isAuthenticated" />
  <div class="app">
    <Sidebar :expandSideBar="expandSideBar" @toggleSidebar="toggleSidebar" />
    <div class="main" :class="{ collapsed: expandSideBar }">
      <Navbar :expandSideBar="expandSideBar" />
      <div class="content">
        <!-- Router view or main content here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Login from './components/Login.vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';


const expandSideBar = ref(false);

const toggleSidebar = () => {
  expandSideBar.value = !expandSideBar.value;
};

const isAuthenticated = computed(() => localStorage.getItem('authenticated') === 'true');
</script>

<style lang="scss" >
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	.main {
		flex: 1;
		transition: margin-left 0.3s ease;
		.main.collapsed {
			margin-left: var(--sidebar-width);
		}
	.content {
		flex: 1;
		padding: 2rem;
		

	}

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>
