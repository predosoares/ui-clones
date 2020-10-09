import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background: var(--secundary-color);;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: var(--secundary-color);
      height: 100%;
      display: flex;
      align-items: flex-end;
      position: relative;

      .content {
        position: absolute;
        top: 50%;
        left: 171px;
        transform: translateY(-50%);

        h1 {
          font-size: 64px;
          font-weight: 300;
          width: 635px;
        }

        p {
          font-size: 24px;
          line-height: 1.5;
          font-weight: 300;
          width: 390px;
          margin-bottom: 20px;
        }
      }

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }

      .right-side {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .right-image {
          background: #7dbb91;
          width: 50%;
          height: 50%;
          object-fit: cover;
        }
      }
    }

    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
      background: var(--secundary-color);
  }

  .third {
      background: yellow;
  }

  .fouth {
      background: blue;
  }
`;


export const Section = styled.div`
  position: relative
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
