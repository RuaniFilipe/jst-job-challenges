/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Context } from '../../Provider/Context';
import axiosData from '../../Services/requestAPI';

function Input() {
    const { pokemons, setPokemons, filter, setFilter, setFilterData } = useContext(Context)
    useEffect(async () => {
    const { data: {results} } = await axiosData('?limit=151');
    setPokemons(results)
  }, []);

  useEffect(async() => {
    const filterSelected = await axiosData(filter)
    setFilterData(filterSelected)
  }, [filter]);
  
  return (
    <>
    <select onChange={ (event) => setFilter(event.target.value)}>
      <option>Escolha seu pokemon abaixo</option>
      {pokemons.map((pokemon) => 
      <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>)}
    </select>
    </>
    )
}

export default Input;