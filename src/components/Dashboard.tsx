import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return () => (
      <div class="p-5 text-center">
        <h3>Dashboard Shell</h3>
      </div>
    );
  }
});
