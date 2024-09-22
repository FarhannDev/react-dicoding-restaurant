import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';

export default function RestaurantApiService() {
  async function getAllRestaurants(): Promise<Restaurant[] | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.get('/list');
      const responseData = await response.data;
      const { restaurants } = responseData as Response;

      return restaurants;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async function getRestaurantWithId(
    restaurantId: string
  ): Promise<RestaurantDetail | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        `/detail/${restaurantId}`
      );
      const responseData = await response.data;
      const { restaurant } = responseData as Response;

      return restaurant;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async function searchRestaurantWithQuery(
    query: string
  ): Promise<Restaurant[] | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        `/search?q=${query}`
      );
      const responseData = await response.data;
      const { restaurants } = responseData as Response;

      return restaurants;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async function addCustomerReview(
    newValue: CustomerReview
  ): Promise<CustomerReview[] | undefined> {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        '/review',
        newValue
      );

      const responseData = await response.data;
      const { customerReviews } = responseData as Response;

      return customerReviews;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  return {
    getAllRestaurants,
    getRestaurantWithId,
    searchRestaurantWithQuery,
    addCustomerReview,
  };
}

export const restaurantService = RestaurantApiService();
