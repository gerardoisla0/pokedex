import { PokemonRepositoryImpl } from "../../../data/repositories/pokemonRepository";
import { Pokemon } from "../../entities/pokemon.entity";
import { PokemonUseCase } from "../pokemon.usecase";

const {getPokemons} = new PokemonRepositoryImpl();

export class PokemonUseCaseImpl implements PokemonUseCase{

    GetPokemonsUseCase(): Promise<Pokemon[]> {
        return getPokemons();
    }
    GetPokemonByIdUseCase(): Promise<Pokemon> {
        throw new Error("Method not implemented.");
    }
}