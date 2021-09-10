app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
    {{ detail }}
</li>
</ul>`,
  data() {
    return {};
  },
  methods: {},
  computed: {
    productDetails() {
      if (this.details) {
        return this.details;
      }
      return "No details provided.";
    },
  },
});
{
  /* <li v-for="detail in details"> */
}
