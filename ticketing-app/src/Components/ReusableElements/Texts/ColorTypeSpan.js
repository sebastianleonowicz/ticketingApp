import styled from 'styled-components';
import Span from './Span'

const ColorTypeSpan = styled(Span)`
    color: ${props => props.ticketType === 'Epic' ? 'red' : 'yellow'};
`

export default ColorTypeSpan;