import { Pokemon } from "../../domain/entities/pokemon.entity";
import { PokemonRepository } from "../../domain/repositories/pokemon.repository";
import { PokemonMapper } from "../mapper/pokemon.mapper";
import { pokeApi } from "../sources/remote/apiPokemon";
import { PokemonAPI, PokemonResults } from "../sources/remote/interfaces/pokeAPI.interface";
import { PokemonByID } from "../sources/remote/interfaces/pokemonbyId.interface";

export class PokemonRepositoryImpl implements PokemonRepository{
     getPokemons = async (): Promise<Pokemon[]> => {
        try{
            const url = '/pokemon';
            const {data} = await pokeApi.get<PokemonResults>(url);

            const pokemons = data.results.map( item =>
                PokemonMapper.pokemonAPItoPokemonEntity(item)
            );
            
            return await Promise.all(pokemons);
            
        }catch(error){
            console.log(error);
            throw new Error("Error obteniendo pokemons");
        }
    }
    getPokemonsbyId = async (id: number): Promise<Pokemon> => {
        try{
            const url = '/pokemon/'+id;
            const {data} = await pokeApi.get<PokemonByID>(url);

            const pokemon = PokemonMapper.pokemonByIDtoPokemonEntity(data); 
            return pokemon;
            
        }catch(error){
            console.log(error);
            throw new Error("Error obteniendo pokemons");
        }
    }
}
