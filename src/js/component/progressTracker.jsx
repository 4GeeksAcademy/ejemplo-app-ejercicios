import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const ProgressTracker = () => {
  const [weight, setWeight] = useState('');
  const [progress, setProgress] = useState([]);

  const handleAddWeight = () => {
    if (weight) {
      setProgress([...progress, { date: new Date().toLocaleDateString(), weight }]);
      setWeight('');
    }
  };

  return (
    <div className="progress-tracker">
      <h2 className="mb-4">Seguimiento de Progreso</h2>
      <Form>
        <Form.Group>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ingresa tu peso"
          />
        </Form.Group>
        <Button variant="success" onClick={handleAddWeight} className="mt-2">
          Registrar Peso
        </Button>
      </Form>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Peso (kg)</th>
          </tr>
        </thead>
        <tbody>
          {progress.length === 0 ? (
            <tr>
              <td colSpan="2">No se ha registrado peso aún.</td>
            </tr>
          ) : (
            progress.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.weight}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProgressTracker;
