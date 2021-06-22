export interface UserIF {
    id: number;
    name: string;
    email: string;
}

export default class User implements UserIF {

    public id: number
    public name: string;
    public email: string;

    constructor(nameOrUser: UserIF | string, email?: string, id?: number) {
        if (typeof nameOrUser  === 'string') {
            this.name = nameOrUser;
            this.email = email || '';
            this.id = id || -1;
        } else {
            this.name = nameOrUser.name;
            this.email = nameOrUser.email;
            this.id = nameOrUser.id;
        }
    }
}