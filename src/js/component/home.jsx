import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import ExerciseList from './exerciseList';
import ProgressTracker from './progressTracker';
import MealTracker from './mealTracker';

function App() {
  const [view, setView] = useState('exercise');

  return (
    <div className="App">
      <header className="App-header bg-dark text-white">
        <h1>Fitness App</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className={`nav-link btn ${view === 'exercise' ? 'active' : ''}`}
                onClick={() => setView('exercise')}
              >
                Ejercicios
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${view === 'meals' ? 'active' : ''}`}
                onClick={() => setView('meals')}
              >
                Comidas
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${view === 'progress' ? 'active' : ''}`}
                onClick={() => setView('progress')}
              >
                Progreso
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mt-4">
        {view === 'exercise' && <ExerciseList />}
        {view === 'meals' && <MealTracker />}
        {view === 'progress' && <ProgressTracker />}
      </main>
    </div>
  );
}

export default App;
