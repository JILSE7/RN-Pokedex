export interface IPokemonResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  IResultItem[];
}


export interface IResultItem {
    name: string;
    url:  string;
}
export interface IPokemonItem {
    id: string;
    color?: string
    name: string;
    picture:  string;
}
