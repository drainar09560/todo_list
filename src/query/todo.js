import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
	query getAllTodos {
        missions {
            name
            id
        }
    }	
`;
