import Tilt from 'react-tilt'

export const HeroImage = () => {
    return (
        <Tilt options={{ max : 25 }}>
            <img src="/images/hero.svg" width="495" height="352" />
        </Tilt>
    )
}