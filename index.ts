import { Arena } from "./Arena";
import { Warrior } from "./Warrior";

  const fighter1 = new Warrior('Baba Yaga', 9, 120);
  const fighter2 = new Warrior('Yanosik', 7, 140);
  
  const arena = new Arena(fighter1, fighter2);
  
  let winner: Warrior | number | null;
  do {
    winner = arena.fight();
  } while (winner === null);
  
  if(winner instanceof Warrior){
  winner.levelUp();
  console.log(winner.getName(), 'is a winner!');
}