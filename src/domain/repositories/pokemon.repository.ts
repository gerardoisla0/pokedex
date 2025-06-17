import { Pokemon } from "../entities/pokemon.entity";

export interface PokemonRepository{
    getPokemons(): Promise<Pokemon[]>;
    getPokemonsbyId(id: number): Promise<Pokemon>;
}