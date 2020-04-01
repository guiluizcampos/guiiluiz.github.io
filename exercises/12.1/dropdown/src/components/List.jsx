import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      item: {
        id: 0,
        name: ''
      }
    }
  }

  showList = () => {
    this.setState((state) => ({id: !state.show}))
  }

  itemList = () => {
    return (
      <ul>
        {this.props.items.map(item => this.itemsLi(item))}
      </ul>
    );
  }

  itemsLi = (item) => {
    return (
      <li>
        {item.name}
      </li>
    );
  }

  render() {
    return(
      <section>
        <h3>{this.props.children}</h3>
        <div className="caixa-base" onClick={() => this.showList()}>
          {this.state.item.name}
        </div>
        {this.state.show && this.itemList()}
      </section>
    );
  }
}

export default List;
