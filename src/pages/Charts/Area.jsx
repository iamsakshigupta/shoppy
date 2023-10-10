import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SplineAreaSeries, SeriesDirective, DateTime, Inject, Legend } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
import { Header } from '../../components'

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category='Chart' title='Inflation Rate in Percentage' />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        
      // background={currentMode==='Dark' ? '#33373E' : '#fff'}
      // className={currentMode === 'Dark' ? 'text-white' : ' text-gray-400'}

      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) =>
            <SeriesDirective key={index}{...item} />
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>

  )
}

export default Area