import styled, {keyframes} from "styled-components";
import colorList from "../../../assets/colorList";

export function DonutChart({color, percent, size}) {
    return (
        <Chart size={size}>
            <AniSvg viewBox="0 0 200 200">
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="10"
                />
                <AnimatedCircle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke={color}
                    strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 90 * percent} ${
                        2 * Math.PI * 90 * (1 - percent)
                    }`}
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                />
            </AniSvg>
            <Percent color={color}>{percent * 100}%</Percent>
        </Chart>
    );
}

const Chart = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  position: relative;
  top: 13px;
`;

const AniSvg = styled.svg`
  position: relative;
  background-color: ${colorList.grayscale["400"]};
  border: 3px solid ${colorList.grayscale["400"]};
  border-radius: 50%;
`;

const circleFill = keyframes`
  0% {
    stroke-dasharray: 0 ${2 * Math.PI * 90};
  }
`;

const AnimatedCircle = styled.circle`
  animation: ${circleFill} 1s ease;
`;

const Percent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${colorList.grayscale["000"]};
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  letter-spacing: 0.02em;
`;
