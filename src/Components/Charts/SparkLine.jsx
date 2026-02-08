import React from 'react'
import { SparklineComponent , Inject , Sparkline} from '@syncfusion/ej2-react-charts';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function SparkLine({id , height , color , width , data , type , currentColor}) {
  return (
    <Sparklines data={[10, 15, 12, 20, 18]} width={90} height={50} margin={1}>
      <SparklinesLine color="#22c55e"/>
    </Sparklines>
  )
}

