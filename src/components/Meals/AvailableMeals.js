import { useContext } from 'react';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'A spicy rice dish with meat',
    price: 220,
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/28/ab/76/28ab76b165957bd3815c2debcb7fc1ad.jpg'
  },
  {
    id: 'm2',
    name: 'Dosa',
    description: 'A South Indian delicacy',
    price: 40,
    rating: 4.2,
    image: 'https://i.pinimg.com/736x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg'
  },
  {
    id: 'm3',
    name: 'Idly Sambar',
    description: 'Soft and fluffy rice cakes with spicy sambar',
    price: 40,
    rating: 4.0,
    image: 'https://i.pinimg.com/736x/86/ad/17/86ad170566cb83cf0c277cbc6f0d6b97.jpg'
  },
  {
    id: 'm4',
    name: 'Veg Thali',
    description: 'A platter of assorted vegetarian dishes',
    price: 150,
    rating: 4.4,
    image: 'https://i.pinimg.com/736x/1d/f6/36/1df6362c66dd293cc90ef0ede65b3818.jpg'
  },
  {
    id: 'm5',
    name: 'Paneer Butter Masala',
    description: 'Creamy tomato gravy with soft paneer cubes',
    price: 180,
    rating: 4.6,
    image: 'https://i.pinimg.com/736x/36/59/11/3659119867ffccd70f9f5b221d9cd5a1.jpg'
  },
  {
    id: 'm6',
    name: 'Masala Chai',
    description: 'Spiced tea blend with milk',
    price: 25,
    rating: 4.3,
    image: 'https://i.pinimg.com/736x/21/5a/d3/215ad3108888619f42eeb5dfad483aa4.jpg'
  },
  {
    id: 'm7',
    name: 'Pav Bhaji',
    description: 'Spicy mashed veggies with soft pav buns',
    price: 80,
    rating: 4.4,
    image: 'https://i.pinimg.com/736x/56/63/ab/5663abdbb83e0c66b7088f04c8b9c64b.jpg'
  },
  {
    id: 'm8',
    name: 'Butter Naan',
    description: 'Soft Indian flatbread topped with butter',
    price: 30,
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/d7/ca/96/d7ca962873b1df1f6c8f0f61b0579476.jpg'
  },
  {
    id: 'm9',
    name: 'Chicken Tikka',
    description: 'Grilled marinated chicken pieces',
    price: 200,
    rating: 4.7,
    image: 'https://i.pinimg.com/736x/96/9c/dc/969cdc9511c9feadce783434a666b92b.jpg'
  },
  {
    id: 'm10',
    name: 'Rajma Chawal',
    description: 'Red kidney beans curry served with rice',
    price: 90,
    rating: 4.2,
    image: 'https://i.pinimg.com/736x/51/f2/04/51f20410f204e60c38c4285b5010e98a.jpg'
  },
  {
    id: 'm11',
    name: 'Chole Bhature',
    description: 'Spicy chickpeas with deep-fried bread',
    price: 100,
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/9f/ff/3b/9fff3bd32e96a61df5e82789bbbe365d.jpg'
  },
  {
    id: 'm12',
    name: 'Gulab Jamun',
    description: 'Soft round sweets soaked in sugar syrup',
    price: 60,
    rating: 4.8,
    image: 'https://i.pinimg.com/736x/82/44/3d/82443dd677e13f1aa6a2654b84ea0dbf.jpg'
  },
];

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (meal) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: 1,
      price: meal.price,
    });
  };

  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id} className={classes.meal}>
      <img src={meal.image} alt={meal.name} className={classes.image} />
      <div className={classes.details}>
        <h3>{meal.name}</h3>
        <div className={classes.rating}>⭐ {meal.rating}</div>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>₹{meal.price}</div>
        <button className={classes.button} onClick={() => addToCartHandler(meal)}>
          Order Now
        </button>
      </div>
    </li>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.mealList}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

