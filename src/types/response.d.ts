type ResponseError = false | true;

interface Response {
  error?: ResponseError;
  message?: string;
  restaurant: Restaurant;
}
