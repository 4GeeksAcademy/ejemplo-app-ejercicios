import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const ExerciseList = () => {
  const exercises = [
    { name: 'Prensa de Piernas', sets: 3, reps: 12, type: 'strength' },
    { name: 'Remo en Máquina', sets: 3, reps: 12, type: 'strength' },
    { name: 'Puente (Bridge)', sets: 3, reps: 12, type: 'strength' },
    { name: 'Elevaciones de talones', sets: 3, reps: 12, type: 'strength' },
    { name: 'Plancha Modificada', sets: 3, time: 30, type: 'time' }
  ];

  const [completedExercises, setCompletedExercises] = useState([]);
  const [timer, setTimer] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleComplete = (exerciseName) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseName)
        ? prev.filter((name) => name !== exerciseName)
        : [...prev, exerciseName]
    );
  };

  const startTimer = (duration) => {
    if (!timerActive) {
      setTimeLeft(duration);
      setTimerActive(true);
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setTimerActive(false);
            setTimer(null);
          }
          return prev - 1;
        });
      }, 1000);
      setTimer(interval);
    }
  };

  return (
    <div className="exercise-list">
      <h2 className="mb-4">Ejercicios del Día</h2>
      {exercises.map((exercise) => (
        <div
          key={exercise.name}
          className={`card mb-3 shadow-sm ${completedExercises.includes(exercise.name) ? 'border-success' : ''}`}
        >
          <div className="card-body">
            <h5 className="card-title">{exercise.name}</h5>
            <p className="card-text">
              {exercise.type === 'strength'
                ? `${exercise.sets} sets de ${exercise.reps} repeticiones`
                : `${exercise.time} segundos de duración`}
            </p>
            {exercise.type === 'strength' ? (
              <Button
                variant={completedExercises.includes(exercise.name) ? 'success' : 'outline-success'}
                onClick={() => handleComplete(exercise.name)}
              >
                {completedExercises.includes(exercise.name) ? 'Hecho' : 'Marcar Hecho'}
              </Button>
            ) : (
              <>
                <Button
                  variant="info"
                  onClick={() => startTimer(exercise.time)}
                  disabled={timerActive}
                >
                  {timerActive ? `Cronómetro: ${timeLeft}s` : 'Iniciar Cronómetro'}
                </Button>
                {timerActive && (
                  <ProgressBar
                    now={(timeLeft / exercise.time) * 100}
                    label={`${timeLeft}s`}
                    className="mt-2"
                  />
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
