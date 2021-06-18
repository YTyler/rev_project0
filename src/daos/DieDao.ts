import { DieIF } from '../entities/Die';

export interface DieDaoIF {

}

export default class DieDao implements DieDaoIF {

    public async  getAll(): Promise<DieIF[]> {
        return Promise.resolve([])
    }
}