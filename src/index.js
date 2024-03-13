import express from 'express';
import cors from 'cors';
import employeeRepository from './repository/employeeRepository';

const app = express();

const { PORT = 3001 } = process.env;

app.use(express.json());
app.use(cors());

app.get('/employees/:id', (req, res) => {
  try {
    const employee = employeeRepository.find(req.params.id);
    return res.json(employee);
  } catch (error) {
    const errorMessage = { code: 404, message: error.message };
    return res.status(404).json(errorMessage);
  }
});
app.get('/employees', (req, res) => {
  return res.json(employeeRepository.filter(req.query));
});

app.listen(PORT, () =>
  console.log(`Forum API started.. listening on port ${PORT}`)
);
