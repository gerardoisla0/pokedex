import { Pokemon } from "../../domain/entities/pokemon.entity";
import { PokemonRepository } from "../../domain/repositories/pokemon.repository";
import { PokemonMapper } from "../mapper/pokemon.mapper";
import { pokeApi } from "../sources/remote/apiPokemon";
import { PokemonAPI, PokemonResults } from "../sources/remote/interfaces/pokeAPI.interface";

export class PokemonRepositoryImpl implements PokemonRepository{
     getPokemons = async (): Promise<Pokemon[]> => {
        try{
            const url = '/pokemon';
            const {data} = await pokeApi.get<PokemonResults>(url);

            const pokemons = data.results.map( item =>
                PokemonMapper.pokemonAPItoPokemonEntity(item)
            );
            return pokemons;
            
        }catch(error){
            console.log(error);
            throw new Error("Error obteniendo pokemons");
        }
    }
    getPokemonsbyId(id: number): Pokemon {
        throw new Error("Method not implemented.");
    }
}
