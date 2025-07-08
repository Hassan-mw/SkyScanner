'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import PlaneFilterFlight from '../FlightComponents/AvalivaleFlights/PlaneFilterFlight';
import FinalPageFilter from '../FlightComponents/AvalivaleFlights/FinalPageFilter';
import SideBarFilter from '../FlightComponents/AvalivaleFlights/SideBarFilter';
import MainplaneFlightBody from './MainplaneFlightBody';
import Filter from './Filter';
import Sort from './Sort';
import Adds from './Adds';

interface planeData {

  fromcountry:string;
  tocountry:string;
  fromlocation:string;
  tolocation:string;

}


interface PlaneFlightsProps {
  planeData: planeData[];
  endCountry: string;
  startingCountry: string;
  startingCity: string;
  endingcity: string;
}

function PlaneFlights({
  planeData,
  endCountry,
  startingCountry,
  startingCity,
  endingcity,
}: PlaneFlightsProps) {
  const [id, setId] = useState('');
  const [totaltime, setTotaltime] = useState('1');
  const [checkStops, setCheckStops] = useState('All');
  const [checkAirline, setCheckAirline] = useState('All');
  const [cabinBag, setCabinBag] = useState(false);
  const [cabinBagChecked, setCabinBagChecked] = useState(false);
  const [checkSort, setCheckSort] = useState('Best');
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarsort, setShowSideBarSort] = useState(false);
  const [showSelectFlight, setShowSelectFlight] = useState(false);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const mainData =
    planeData?.filter(
      (el) =>
        el.fromcountry === startingCountry &&
        el.tocountry === endCountry &&
        el.fromlocation === startingCity &&
        el.tolocation === endingcity
    ) || [];

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    totaltime !== '1' ? params.set('totaltime', totaltime) : params.delete('totaltime');
    checkStops !== 'All' ? params.set('journey', checkStops) : params.delete('journey');
    checkAirline !== 'All' ? params.set('planename', checkAirline) : params.delete('planename');
    cabinBag && params.set('cabinbag', 'true');
    cabinBagChecked && params.set('checkedbag', 'true');

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }, [totaltime, checkStops, checkAirline, cabinBag, cabinBagChecked]);

  const handleClickSelectFlight = (airline: string, flightId: string) => {
    setShowSelectFlight(true);
    setCheckAirline(airline);
    setId(flightId);
  };

  const handleShowSidebar = (type: string) => {
    if (type === 'Filter') {
      setShowSideBar(true);
      setShowSideBarSort(false);
    } else {
      setShowSideBar(false);
      setShowSideBarSort(true);
    }
  };

  const dataLength = mainData.length;

  return (
    <div className="w-full flex min-h-full lg:flex items-center justify-center lg:items-start lg:justify-start lg:space-x-3 bg-[#eff3f8]">
      {/* Sidebar (visible on large screens) */}
      <div className="hidden lg:block min-w-[260px]">
        <SideBarFilter
          cabinBag={cabinBag}
          setCabinBag={setCabinBag}
          cabinBagChecked={cabinBagChecked}
          setCabinBagChecked={setCabinBagChecked}
          checkAirline={checkAirline}
          setCheckAirline={setCheckAirline}
          checkStops={checkStops}
          totaltime={totaltime}
          setTotaltime={setTotaltime}
          setCheckStops={setCheckStops}
        />
      </div>

      {/* Main content */}
      <div className="w-full h-full max-w-[900px] lg:max-w-[650px] flex flex-col items-center justify-center">
        <FinalPageFilter
          dataLength={dataLength}
          handleShowSidebar={handleShowSidebar}
          setShowSideBar={setShowSideBar}
          setShowSideBarSort={setShowSideBarSort}
        />

        {mainData.length > 0 ? (
          <>
            <PlaneFilterFlight />
            <MainplaneFlightBody
              data={mainData}
              handleClickSelectFlight={handleClickSelectFlight}
            />
          </>
        ) : (
          <div className="w-full flex items-center justify-center min-h-[200px]">
            <h1>
              Sorry, there aren't any flights that match your <strong>filters</strong>.
            </h1>
          </div>
        )}

        {/* Mobile filters */}
        <Filter
          showSideBarsort={showSideBarsort}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          cabinBag={cabinBag}
          setCabinBag={setCabinBag}
          cabinBagChecked={cabinBagChecked}
          setCabinBagChecked={setCabinBagChecked}
          checkAirline={checkAirline}
          setCheckAirline={setCheckAirline}
          checkStops={checkStops}
          totaltime={totaltime}
          setTotaltime={setTotaltime}
          setCheckStops={setCheckStops}
        />

        <Sort
          checkSort={checkSort}
          setCheckSort={setCheckSort}
          showSideBarsort={showSideBarsort}
          showSideBar={showSideBar}
          setShowSideBarSort={setShowSideBarSort}
        />
      </div>

      {/* Right-side ads */}
      <Adds />
    </div>
  );
}

export default PlaneFlights;
