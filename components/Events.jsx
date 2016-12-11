import React from 'react';
import Radium from 'radium';

import { Modal, Button } from 'react-bootstrap/lib';

import Rules from '../utils/Rules';

@Radium
class Sport extends React.Component {
    constructor(props) {
        super(props) ;
    }

    render() {

        const styles = {
            main: {
                ':hover': {
                    border: '4px solid #D8D8D8',
                    cursor: 'pointer'
                }
            }
        };
        const show_styles = () => {
            if(typeof this.props.show !== 'undefined' && !this.props.show) {
                return {
                    visibility: 'hidden'
                }
            }
            else return styles.main;
        };
        return (
            <li className="grid__item" style={show_styles()}>
                <div className="grid__link" onClick={() => this.props.onClickCB(this.props.name) }>
                    <img className="grid__img layer" src="../img/events/back_1.png" alt="Canvas Dummy" />
                    <img className="grid__img layer" src="../img/events/back_2.png" alt="Dummy" />
                    <img className="grid__img layer" src={this.props.image} alt="01" />
                    <span className="grid__title">{this.props.name}</span>
                </div>
            </li>
        );
    }
}

class SportsDataPanel extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            showModal: true
        };
  }

  close = () => {
    this.setState({ showModal: false });
    this.props.onModalCloseCB(false);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{textTransform: 'uppercase'}}>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const ScrollHelper = (props) => {
    const styles = {
        main: {
            marginRight: 70,
            marginTop: 70,
            padding: 10,
            float: 'right',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderTop: '7px solid white',
        },
        text: {
            fontSize: 55,
            color: '#FFF',
            textTransform: 'uppercase',
            fontFamily: `"Oswald", sans-serif`,
            margin: 20,
            lineHeight: 1,
        },
        arrow: {
            marginTop: -20,
            marginRight: 20,
            marginLeft: -20,
        },
        line: {
            width: '95%',
            height: 3,
            backgroundColor: 'white',
            marginRight: 100
        }
    };
    return(
        <div style={styles.main}>
            <link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet" />
            <img style={styles.arrow} src='../img/events/down_arrow.svg' alt='arrow' />
            <div style={{marginBottom: 20}}>
                <div style={styles.text}>Scroll <br />to <br />view <br /> more</div>
                <div style={styles.line} />
            </div>
        </div>
    );
};

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panel_is_visible: false,
            panel_data: null,
            name: null,
        };
    }

    componentDidMount() {

        const script_paths = [
            '../js/events/modernizr.custom.js',
            '../js/events/imagesloaded.pkgd.min.js',
            '../js/events/masonry.pkgd.min.js',
            '../js/events/dynamics.min.js',
            '../js/events/classie.js',
            '../js/events/animOnScroll.js',
            '../js/events/main.js'
        ];

        script_paths.forEach((script_path) => {
            const script = document.createElement("script");
            script.type  = 'text/javascript';
            script.src = script_path;
            this.scriptDiv.appendChild(script);
        });

        // for inline js
        const inline_js = `(function() {
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
                    new IsoGrid(el, {
                        type : 'scrollable',
                        transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                        stackItemsAnimation : {
                            properties : function(pos) {
                                return {
                                    translateZ: (pos+1) * 50,
                                    rotateZ: getRandomInt(-3, 3)
                                };
                            },
                            options : function(pos, itemstotal) {
                                return {
                                    type: dynamics.bezier,
                                    duration: 500,
                                    points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                                    //delay: (itemstotal-pos-1)*40
                                };
                            }
                        },
                        onGridLoaded : function() {
                        }
                    });
                });
            })();
        `;
        const inline_js_script = document.createElement("script");
        inline_js_script.type = 'text/javascript';
        inline_js_script.text = inline_js;

        let flag = false;
        let counter = 0;
        let isDefined = window.setInterval(() => {
            if(!(typeof IsoGrid === "undefined") && !flag) {
                this.scriptDiv.appendChild(inline_js_script);
                flag = true;
            }
            counter += 100;
        }, 100);

        // automatically stop interval after 3 seconds
        window.setTimeout(() => {
            clearInterval(isDefined);
        }, 3000);
    }

    onSportClick = (sport) => {
        const data = Rules.get(sport);
        this.setState({
            panel_is_visible: true,
            panel_data: data.info,
            name: sport
        });
    }

    onModalCloseCB = (isOpen) => {
        this.setState({
            panel_is_visible: isOpen
        });
    }

    render() {

        const display_sports = [...Rules].map((sport_, index) => {
            return <Sport
                       name={sport_[0]}
                       image={sport_[1].image}
                       key={index}
                       onClickCB={this.onSportClick}
                    />;
        });

        // hack: insert invisible items so that the it scrolls all the way to the end
        let count = 0;
        while(count < 3) {
            display_sports.push(<Sport show={false} key={display_sports.length}/>);
            count++;
        }

        const styles = {
            main: {
                paddingTop: 94,
                backgroundColor: '#E0DEFF',
                backgroundSize: 'cover',
            },
            background: {
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                position: 'absolute',
                top: 0,
                left: 0,

            }
        };

        return(
            <div style={styles.main}>
                <div ref={(input) => this.scriptDiv = input} />
                <div className="include-deps">
                    <link rel="stylesheet" type="text/css" href="../css/events/normalize.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/demo.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/component.css" />
                    <link rel="stylesheet" type="text/css" href="../css/bootstrap/bootstrap.min.css" />
                    {this.state.panel_is_visible && <SportsDataPanel
                                                        data={this.state.panel_data}
                                                        name={this.state.name}
                                                        onModalCloseCB={this.onModalCloseCB}
                                                    />}
                    <ScrollHelper />
                    <div className="isolayer isolayer--scroll1 isolayer--shadow">
                        <ul className="grid grid--effect-flip">
                            {display_sports}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
