import { Pokemon } from "../../domain/entities/pokemon.entity";
import { getColorFromImageUrl } from "../helpers/getColor";
import { PokemonAPI } from "../sources/remote/interfaces/pokeAPI.interface";
import { PokemonByID } from "../sources/remote/interfaces/pokemonbyId.interface";

export class PokemonMapper {

    static async pokemonAPItoPokemonEntity(data: PokemonAPI): Promise<Pokemon>{

        const getId = (urlPokemon: string):string => {
            return urlPokemon.split('/').slice(-2,-1)[0];
        }
        const getPhoto = (urlPokemon: string): string => {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(urlPokemon)}.png`;
        }

        const color = await getColorFromImageUrl(getPhoto(data.url));

        return {
            name: data.name,
            avatar: getPhoto(data.url),
            id: +getId(data.url),
            color: color
        }
    }

    static async pokemonByIDtoPokemonEntity(data: PokemonByID) : Promise<Pokemon> {
        
        const color = await getColorFromImageUrl(data.sprites.other?.["official-artwork"].front_default || '');

        const sprites = this.getSprites(data);

        return {
            name: data.name,
            avatar: data.sprites.other?.["official-artwork"].front_default || '',
            id: data.id,
            color: color,
            types: data.types.map(type => type.type.name),
            sprites: sprites,
            abilities: data.abilities.map(ability => ability?.ability?.name ?? ''),
        }
    }

    static getSprites(data: PokemonByID): string[] {
        const sprites: string[] = [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
        ];
  
      if (data.sprites.other?.home.front_default)
        sprites.push(data.sprites.other?.home.front_default);
      if (data.sprites.other?.['official-artwork'].front_default)
        sprites.push(data.sprites.other?.['official-artwork'].front_default);
      if (data.sprites.other?.['official-artwork'].front_shiny)
        sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
      if (data.sprites.other?.showdown.front_default)
        sprites.push(data.sprites.other?.showdown.front_default);
      if (data.sprites.other?.showdown.back_default)
        sprites.push(data.sprites.other?.showdown.back_default);
  
      return sprites;
    }
}