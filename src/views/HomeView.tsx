import { useEffect, useState } from 'react';
import { restaurantService } from '../services/restaurantApiService';

export default function HomeView() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | undefined>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurants = await restaurantService.getAllRestaurants();
      setRestaurants(restaurants);
    };

    (async () => {
      await fetchRestaurants();
    })();
  }, []);

  return JSON.stringify(restaurants);
}
