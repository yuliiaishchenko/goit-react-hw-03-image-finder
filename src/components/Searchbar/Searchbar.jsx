import React, {Component} from 'react';
import { Header, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';



export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = ({ target: {value} }) => {
        this.setState({ value: value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();
        if ( this.state.value.trim() === '') {
            return toast.info ('Please enter key words for search');
        }
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        const { value }  = this.state;
        return ( 
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>                   
                    <SearchFormInput
                    type = "text"
                    autocomplete = "off"
                    autoFocus
                    placeholder = "Search images and photos"
                    value = {value}
                    onChange ={this.handleChange}
                    />  
                     <SearchFormButton/>       
                </SearchForm>
            </Header>
        );
    }
}

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired
};