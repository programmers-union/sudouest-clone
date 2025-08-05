
interface NumberedTextBlockProps{
    index?:string,
    title:string,
    date:string,
    className?:string
}


 const  NumberedTextBlock:React.FC<NumberedTextBlockProps>=({
       index,
       title,
       date,
       className
 })=> {
  return (
    <div className="d-flex flex-column flex-md-row align-items-start gap-2 my-3">
      {/* Number */}
      <div className="fs-1 fw-bold text-danger">{index}</div>

      {/* Text Content */}
      <div>
         <p className={`mb-1 fw-semibold text-dark ${className}`}>
          
            {title}
          
          ...
        </p>
        <small className="text-muted">{date}</small>
      </div>
    </div>
  )
}

export default NumberedTextBlock;
