app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="recommended">Would you recommend this product to other users?</label>
    <select id="recommended" v-model="recommended">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit"
    >
  </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: null,
    };
  },
  methods: {
    onSubmit() {
      // Error handling, if values are equal to default, display error message
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.recommended === null
      ) {
        alert("Review is incomplete, please fill out every field.");
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommended: this.recommended,
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommended = null;
    },
  },
});
