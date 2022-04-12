import Tilt from 'react-tilt'

export const VisionImage = () => {
    return (
        <Tilt options={{ max : 25 }}>
            <img src="/images/vision.svg" width="665" height="500" />
        </Tilt>
    )
}