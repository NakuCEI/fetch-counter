const NewCard = ({data}) => {
    
    const {id, title, body} = data;

    return (
        <article id={'new-' + id} className='card'>
            <h2 className='card-title p-4 pb-0'>{title}</h2>
            <hr />
            <div className='card-body p-4 pt-0'>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default NewCard
