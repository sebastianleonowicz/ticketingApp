import styled from 'styled-components';
import Span from './Span'

const checkColor = (props) => {
    console.log('props', props);
    if(props !== undefined) {
        const color = props === 'Epic' ? 'pink' : 'orange';
        return color;
    }
}

const ColorTypeSpan = styled(Span)`
    color: ${props => checkColor(props.children)};
`

export default ColorTypeSpan;