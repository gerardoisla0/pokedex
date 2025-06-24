export interface Pokemon{
    id: number;
    name: string;
    types?: string[];
    avatar: string;
    sprites?: string[];
    evolution?: number;
    abilities?: string[];
    //TODO
    color: string; 
}