export interface DieIF {
    id: number;
    owned_by: string;
    sides: string;
    rolls: number[];
}

export default class Die implements DieIF {

    public id:number
    public owned_by: string;
    public sides: string;
    public rolls: number[];

    constructor(sidesOrDie: DieIF | string, owned_by?: string, rolls?: number[], id?: number) {
        if (typeof sidesOrDie === 'string') {
            this.sides = sidesOrDie
            this.owned_by = owned_by || '';
            this.rolls = rolls || [];
            this.id = id || -1;
        } else {
            this.sides = sidesOrDie.sides;
            this.owned_by = sidesOrDie.owned_by;
            this.rolls = sidesOrDie.rolls;
            this.id = sidesOrDie.id;
        }
    }
}