
function TextItem( {title, content} ) { // title : ''
return (
    <div className='textItem'>
        <p className='title'>제목 : {title} </p>
        <p> 내용 : {content} </p>
    </div>
)
}

export default TextItem;