import './table.css'



const Table = (props)=>{
    return(
        <div className="table_wrap">
            {props.children}
        </div>
    )
}

export default Table 