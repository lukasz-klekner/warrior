export class Warrior {
    constructor(private name: string, private hitPoints: number, private hp: number){}
  
    setHp(hp:number) {
      this.hp = hp;
    }
  
    getHp() {
      return this.hp;
    }
  
    getHitPoints() {
      return this.hitPoints;
    }
  
    getName() {
      return this.name;
    }
  
    levelUp() {
      this.hitPoints *= 1.1;
      this.hp *= 1.1;
    }
  }




