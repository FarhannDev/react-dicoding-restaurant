type ResponseError = false | true;

interface Response {
  error?: ResponseError;
  message?: string;
  restaurants?: Array<Restaurant>;
  restaurant?: RestaurantDetail;
  customerReviews?: Array<CustomerReview>;
}
