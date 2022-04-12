import Tilt from 'react-tilt'

export const AboutImage = () => {
    return (
        <Tilt options={{ max : 25 }}>
            <img src="/images/about.svg" width="702" height="385" style={{"zIndex": "1"}} />
        </Tilt>
    )
}