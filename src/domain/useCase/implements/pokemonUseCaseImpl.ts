import { PokemonRepositoryImpl } from "../../../data/repositories/pokemonRepository";
import { Pokemon } from "../../entities/pokemon.entity";
import { PokemonUseCase } from "../pokemon.usecase";

const {getPokemons, getPokemonsbyId} = new PokemonRepositoryImpl();

export class PokemonUseCaseImpl implements PokemonUseCase{

    GetPokemonsUseCase(): Promise<Pokemon[]> {
        return getPokemons();
    }
    GetPokemonByIdUseCase(id: number): Promise<Pokemon> {
        return getPokemonsbyId(id);
    }
}