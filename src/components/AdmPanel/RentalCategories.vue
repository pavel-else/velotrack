<template>
    <div class="rental-categories">
        <ul class="rental-categories__list">
            <li 
                class="rental-categories__item"
                v-for="category in categories"
                :key="category.id_rent"
                @click="click(category)"
            >
                {{ category.name }}
            </li>
            <!-- <li>afsd</li> -->
        </ul>
    </div>
</template>
<script>
    export default {
        methods: {
            // Отмечаем категорию
            click(category) {
                this.$store.commit('activeCategory', category);
                this.$router.push('/');
            },
        },
        computed: {
            categories() {
                return this.$store.getters.categories;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .rental-categories {
        &__list {
            display: flex;
            flex-direction: column;
            min-width: 100px;
        }
        &__item {
            padding: 5px 10px;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>