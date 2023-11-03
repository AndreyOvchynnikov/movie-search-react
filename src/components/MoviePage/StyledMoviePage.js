import styled from "styled-components";
import background from '../images/background.06d90fc350f35e59c55d.jpeg'


export const StyledSection = styled.section`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 20px;

        &::after {
        content: '';
        position: fixed;
        top: 0px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100vh + 10px);
        background-image: ${props =>
        props.backdrop
            ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
            : `url(${background})`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: blur(5px);
        z-index: -1;
        opacity: 0.35;
  }
  `;