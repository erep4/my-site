import React from 'react';

class form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.coviddata}>
                <input type="text" name="countriesAndTerritories" placeholder="страна" lable="input" />
                <button lable="button">Получить данные</button>
                <h1 lable="h1">Форма</h1>
                <p lable="p">whaat?</p>
            </form>
            
        )
    }
}

export default form;