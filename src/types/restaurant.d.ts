interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
}

interface Category {
  name: string;
}

interface Menu {
  foods: [
    {
      name: 'Paket rosemary';
    },
    {
      name: 'Toastie salmon';
    }
  ];
  drinks: [
    {
      name: 'Es krim';
    },
    {
      name: 'Sirup';
    }
  ];
}

interface CustomerReview {
  name: string;
  review: string;
  date: string;
}
interface RestaurantDetail {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  pictureId: string;
  categories: Array<Category>;
  menus: Menu;
  rating: number;
  customerReviews: Array<CustomerReview>;
}
