import React from 'react'
import { ChartComponent, SeriesCollectionDirective, LineSeries, SeriesDirective, DateTime, Inject, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

const LineChart = () => {
  const {currentMode}= useStateContext();
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      // background={currentMode==='Dark' ? '#33373E' : '#fff'}
      // className={currentMode === 'Dark' ? 'text-white' : ' text-gray-400'}

    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>
        <SeriesDirective key={index}{...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart