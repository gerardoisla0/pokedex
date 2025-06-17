import { Pokemon } from "../../domain/entities/pokemon.entity";
import { PokemonAPI } from "../sources/remote/interfaces/pokeAPI.interface";

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
            avatar: getPhoto(data.url)
        }
    }
}