import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
query first($name:String){
  pokemon(name:$name){
    id
    name
    image
    resistant
    maxHP
    maxCP
    attacks{
      fast{
        name
        type
        damage
      }
    }
    types
  }}`

export const GET_ALL_POKEMONS = gql`
query AllPokemons($first:Int!){
  pokemons(first:$first){
    name
    id
    image
    classification
    maxCP
  }
}
`
