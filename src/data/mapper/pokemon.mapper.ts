import { Pokemon } from "../../domain/entities/pokemon.entity";
import { PokemonAPI } from "../sources/remote/interfaces/pokeAPI.interface";
import { PokemonByID } from "../sources/remote/interfaces/pokemonbyId.interface";

export class PokemonMapper {

    static pokemonAPItoPokemonEntity(data: PokemonAPI): Pokemon{

        const getId = (urlPokemon: string):string => {
            return urlPokemon.split('/').slice(-2,-1)[0];
        }
        const getPhoto = (urlPokemon: string): string => {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(urlPokemon)}.png`;
        }

        return {
            name: data.name,
            avatar: getPhoto(data.url),
            id: +getId(data.url)
        }
    }

    static pokemonByIDtoPokemonEntity(data: PokemonByID) : Pokemon {
        
        return {
            name: data.name,
            avatar: data.sprites.other?.["official-artwork"].front_default || '',
            id: data.id
        }
    }
}