export class Warrior {
    constructor(private _name: string, private _hitPoints: number, private _hp: number){}

    get name() {
         return this._name; 
    }

    get hp() {
        return this._hp;
    }
  
    set hp(hp:number) {
      this._hp = hp;
    }
  
    get hitPoints() {
      return this._hitPoints;
    }
  
    levelUp() {
      this._hitPoints *= 1.1;
      this._hp *= 1.1;
    }
  }




