import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
