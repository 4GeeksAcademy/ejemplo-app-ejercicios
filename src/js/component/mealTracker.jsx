import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const MealTracker = () => {
  const [meals, setMeals] = useState([]);
  const [mealInput, setMealInput] = useState('');

  const handleAddMeal = () => {
    if (mealInput !== '') {
      setMeals([...meals, mealInput]);
      setMealInput('');
    }
  };

  return (
    <div className="meal-tracker">
      <h2 className="mb-4">Registro de Comidas</h2>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            value={mealInput}
            onChange={(e) => setMealInput(e.target.value)}
            placeholder="Escribe la comida"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddMeal} className="mt-2">
          Agregar Comida
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {meals.length === 0 ? (
          <p>No se han registrado comidas aún.</p>
        ) : (
          meals.map((meal, index) => (
            <ListGroup.Item key={index}>{meal}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
};

export default MealTracker;
