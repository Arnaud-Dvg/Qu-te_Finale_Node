import 'dotenv/config';
import cowsay from 'cowsay';

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
  cowsay.say({
    text: `I am ${name} from ${campus} campus.`,
    e: "oO", // Yeux de la vache
    T: "U ", // Langue de la vache
  })
);
