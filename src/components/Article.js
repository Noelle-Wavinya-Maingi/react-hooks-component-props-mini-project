function Article ({title, date="January 1, 1970", preview, minutes}){
    let readtime = '';
    if(minutes<30){
        const coffeeCups = Math.ceil(minutes / 5);
        readtime = '☕️'.repeat(coffeeCups);
    }else if (minutes >=30){
        const coffeeCups = Math.ceil(minutes / 10);
        readtime = "🍱".repeat(coffeeCups);
    }
    return(
        <div>
            <article>
            <h3>{title}</h3>
            <small>{date} <span>{minutes} {readtime} minutes read</span></small>
            <p>{preview}</p>
            </article>
        </div>
    )
}

export default Article