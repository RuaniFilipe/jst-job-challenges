/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Context } from '../../Provider/Context';
import axiosData from '../../Services/requestAPI';

function CardDetails() {
    const { filterData, setFilterData, filter } = useContext(Context)

    useEffect(async() => {
      const filterSelected = await axiosData(filter)
      setFilterData(filterSelected)
    }, [filter]);
  
  return (
    <>
    <img src={filterData.data.sprites['front_default']} alt={filterData.data.name} />
    {console.log(filterData)}
    </>
    )
}

export default CardDetails;