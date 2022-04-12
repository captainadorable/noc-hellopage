import Tilt from 'react-tilt'

export const MissionImage = () => {
    return (
        <Tilt options={{ max : 25 }}>
            <img src="/images/mission.svg" width="420" height="496" />
        </Tilt>
    )
}