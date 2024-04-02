import { Container } from "./styles";
import { FiPlus, FiX} from 'react-icons/fi'

export function NoteItem( { isNew, value, OnClick, ...rest }) {
    return(
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew} //apenas leitura, não permite o usuáriop de alterar.
            {...rest}
            />

            <button 
            type="button" 
            onClick={OnClick} 
            className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    )
}