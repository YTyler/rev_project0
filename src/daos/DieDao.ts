import { DieIF } from '../entities/Die';

export interface DieDaoIF {
    getAll: () => Promise<DieIF[]>;
    getOne: (id: number) => Promise<DieIF | null>;
}

export default class DieDao implements DieDaoIF {

    public getAll(): Promise<DieIF[]> {
        
        return Promise.resolve([])
    }

    public getOne(id: number): Promise<DieIF> | null {
        
        return Promise.resolve(null);
    }
}