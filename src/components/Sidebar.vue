<template>
    <aside :class="{ isExpand: expandSideBar }">
        <div class="logo">
            <img src="../assets/vue.svg" alt="Vue Logo">
        </div>
        <div class="menuToggleWrap">
            <button class="menuToggle" @click="$emit('toggleSidebar')">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="sidebarMenu">
            <router-link class="button" to="/" exact-active-class="active" active-class="active">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/report" exact-active-class="active" active-class="active">
                <span class="material-icons">assignment</span>
                <span class="text">Report</span>
            </router-link>
            <router-link class="button" to="/purchase" exact-active-class="active" active-class="active">
                <span class="material-icons">request_quote</span>
                <span class="text">Purchase</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  expandSideBar: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    padding: 1rem;
    min-height: 100vh;
    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {

            width: 2rem;
            height: 2rem;
        }
    }

    .menuToggleWrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2 ease-out;

        .menuToggle {
            transition: 0.2 ease-out;
        }

        .material-icons {
            font-size: 2rem;
            color: var(--light);

        }

        &:hover {
            .material-icons {
                color: var(--primary);
                transform: translateX(0.2rem);
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .sidebarMenu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }

            &.active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }




        }

        .material-icons {
            font-size: 2rem;
            color: var(--light);
            margin-right: 1rem;
            transition: 0.2s ease-out;
        }

        .text {
            color: var(--light);
            transition: 0.2s ease-out;
        }

    }

    &.isExpand {
        width: var(--sidebar-width);

        .menuToggleWrap {
            top: -3rem;

            .menuToggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }
    }


    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>
