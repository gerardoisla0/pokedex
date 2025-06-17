export interface PokemonResults {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonAPI[];
}

export interface PokemonAPI {
    name: string;
    url:  string;
}