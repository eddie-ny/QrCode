
function List(){

    const fruit=["apple","orange","banana"];

const listItems = fruit.map(fruit => <li>{fruit}</li>)

    return(<ul>{listItems}</ul>);
}

export default List;