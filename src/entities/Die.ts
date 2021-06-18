export interface DieIF {
    id: number;
    sides: string;
    owner: string;
    rolls: number[];
}

export default class Die implements DieIF {

    public id:number
    public sides: string;
    public owner: string;
    public rolls: number[];

    constructor(sidesOrDie: string | DieIF, owner?: string, rolls?: number[], id?: number) {
        if (typeof sidesOrDie === 'string') {
            this.sides = sidesOrDie
            this.owner = owner || '';
            this.rolls = rolls || [];
            this.id = id || -1;
        } else {
            this.sides = sidesOrDie.sides;
            this.owner = sidesOrDie.owner;
            this.rolls = sidesOrDie.rolls;
            this.id = sidesOrDie.id;
        }
    }
}