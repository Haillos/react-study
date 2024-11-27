import TextItem  from '../TextItem';
import { useState } from 'react';

function quiz02() {

  let title = ['하나','둘','셋','넷','다섯'];

  return (
    <div className="App">
      {
        title.map((item, index)=>{
          return <TextItem title={title[index]}/>
        })
      }

    </div>
  );
}

export default quiz02;
