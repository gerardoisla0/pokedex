import { Pokemon } from "../entities/pokemon.entity";

export interface PokemonUseCase {
    GetPokemonsUseCase(): Promise<Pokemon[]>;
    GetPokemonByIdUseCase(id : number): Promise<Pokemon>;
}