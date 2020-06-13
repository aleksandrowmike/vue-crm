<template>
  <div>
  <div class="page-title">
    <h3>Категории</h3>
  </div>
  <section>
    <div class="row">
      <CategoryCreate @created="addNewCategory" />

      <CategoryEdit />
    </div>
  </section>
</div>
</template>
<script>
import CategoryCreate from '@/components/CategoryCreate.vue';
import CategoryEdit from '@/components/CategoryEdit.vue';
export default {
  name: 'categories',
  data: () => ({
    categories: []
  }),
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);

    }
  }
};
</script>
