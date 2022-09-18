import React from 'react'; 
 import cn from 'classnames';

interface Props {
  value: string;    
}
const Paragraph:React.FC<Props> = React.memo(({value}) => {
     return <div className={cn('')}>{value}</div>
})
export default Paragraph