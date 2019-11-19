import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon-card">
                <div>
                    <p><strong>Nome:</strong> {name} </p>
                    <p><strong>Tipo:</strong> {type} </p>
                    <p><strong>Peso Médio:</strong> {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <img src={image} alt={`${name} dancing`} />
            </div>
        );
    }
}

export default Pokemon;