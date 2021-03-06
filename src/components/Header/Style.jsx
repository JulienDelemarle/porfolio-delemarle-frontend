import styled from 'styled-components';

const SNavBar = styled.div`
  display: flex;
  width: 100vw;

  .logo {
    width: 10vw;
    background-color: #cdc198;
  }

  nav {
    width: 90vw;
    ul {
      display: flex;
      background-color: #cdc198;

      a {
        text-decoration: inherit;
        color: inherit;
      }
    }

    li {
      border: 2px transparent solid;
      border-radius: 15px;
      width: 150px;
      padding: 10px;
      color: white;
      font-size: 1.5em;
      font-weight: 900;
      text-align: center;
    }

    .pictos {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 25%;

      img {
        border: 4px transparent solid;
        border-radius: 35px;
        width: 50px;
        margin: 10px;
      }

      img:hover {
        border: 4px ${(props) => props.text} solid;
      }
    }

    .actu:hover,
    .contact:hover,
    .join:hover {
      border: 2px ${(props) => props.text} solid;
    }
    @media (max-width: 950px) and (min-width: 780px) {
      .actu-join {
        li {
          margin-left: 5px;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: 0;
      }
      .pictos {
        width: 40%;
      }
    }

    @media (max-width: 770px) and (min-width: 400px) {
      li {
        margin-left: 0px;
        font-size: 1.1em;
      }
      .actu-join {
        li {
          margin-left: 0;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: 0;
      }

      .pictos {
        width: 20%;
        margin-right: 35px;

        img {
          border-radius: 35px;
          width: 30px;
        }
      }
    }

    @media (max-width: 440px) {
      flex-direction: column;

      ul {
        margin-top: 10px;

        li {
          font-size: 1em;
        }
      }

      .accordion {
        border: 2px transparent solid;
        background-color: transparent;
        cursor: pointer;
        border-radius: 15px;
        width: inherit;
        padding: 7px;
        color: ${(props) => props.text};
        font-family: 'Merriweather', serif;
        font-size: 1.08rem;
        font-weight: 700;
      }

      .pictos img:hover {
        border: 4px transparent solid;
      }

      .pictos {
        width: 100%;
      }

      .actu-join {
        flex-direction: column;
        margin-left: 0;

        li {
          margin-left: 0;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        flex-direction: column;
        margin-left: 0;

        li {
          margin-left: 20px;
        }

        .contact {
          padding-left: 0;
          margin-left: 0;
        }

        .accordion {
          display: flex;
        }
      }

      .actu:hover,
      .contact:hover,
      .join:hover {
        border: 2px transparent solid;
      }
    }
  }
`;
export default SNavBar;
