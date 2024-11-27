import './NewsBlog.css';
import { useState } from 'react';

function Modal(props){ // bgcolor:'lightgreen'
  return (
<div className="modal" style={ {backgroundColor:'lightgreen'}}>
  <h3>제목</h3>
  <p>날짜</p>
  <p>상세내용</p>
  <button>제목 변경</button>
</div>
  )
}

export default Modal;