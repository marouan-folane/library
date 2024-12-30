// import React, { Component } from 'react';

// class Minuterie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             secondes: 0,
//         };
//         this.intervalId = null;
//     }

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
//         }, 1000);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.secondes === 10 && prevState.secondes !== 10) {
//             console.log('La minuterie a atteint 10 secondes.');
//             this.stopTimer();
//         }
//     }

//     componentWillUnmount() {
//         this.stopTimer();
//     }

//     stopTimer = () => {
//         clearInterval(this.intervalId);
//     };

//     resetTimer = () => {
//         this.setState({ secondes: 0 });
//         this.stopTimer();

//         this.intervalId = setInterval(() => {
//             this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
//         }, 1000);
//     };

//     render() {
//         return (
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <h1>Minuterie : {this.state.secondes} secondes</h1>
//                 <button onClick={this.componentDidMount}>start</button>
//                 <button onClick={this.resetTimer}>Réinitialiser</button>
//             </div>
//         );
//     }
// }

// export default Minuterie;







// import React, { Component } from 'react';

// class Minuterie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             secondes: 0,
//             isRunning: false, // Suivre si le timer est actif
//         };
//         this.intervalId = null;
//     }

//     startTimer = () => {
//         if (!this.state.isRunning) {
//             this.setState({ isRunning: true });
//             this.intervalId = setInterval(() => {
//                 this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
//             }, 1000);
//         }
//     };

//     stopTimer = () => {
//         if (this.state.isRunning) {
//             clearInterval(this.intervalId);
//             this.setState({ isRunning: false });
//         }
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.secondes === 10 && prevState.secondes !== 10) {
//             console.log('La minuterie a atteint 10 secondes.');
//             this.stopTimer();
//         }
//     }

//     componentWillUnmount() {
//         this.stopTimer();
//     }
//     resetTimer = () => {
//                 this.setState({ secondes: 0 });
//                 this.stopTimer();
        
//                 this.intervalId = setInterval(() => {
//                     this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
//                 }, 1000);
//             };

//     render() {
//         return (
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <h1>Minuterie : {this.state.secondes} secondes</h1>
//                 <button onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>
//                 <button onClick={this.stopTimer} disabled={!this.state.isRunning}>Stop</button>
//                 <button onClick={this.resetTimer} disabled={!this.state.isRunning}>renetialiser</button>
//             </div>
//         );
//     }
// }

// export default Minuterie;




// import React, { Component } from 'react';

// class Minuterie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             secondes: 0,
//             isRunning: false, // Suivre si le timer est actif
//         };
//         this.intervalId = null;
//     }

//     startTimer = () => {
//         if (!this.state.isRunning) {
//             this.setState({ isRunning: true });
//             this.intervalId = setInterval(() => {
//                 this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
//             }, 1000);
//         }
//     };

//     stopTimer = () => {
//         if (this.state.isRunning) {
//             clearInterval(this.intervalId);
//             this.setState({ isRunning: false });
//         }
//     };

//     resetTimer = () => {
//         // Arrêter le timer si actif
//         this.stopTimer();
//         // Réinitialiser les secondes et ne pas redémarrer automatiquement
//         this.setState({ secondes: 0 });
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.secondes === 10 && prevState.secondes !== 10) {
//             console.log('La minuterie a atteint 10 secondes.');
//             this.stopTimer();
//         }
//     }

//     componentWillUnmount() {
//         this.stopTimer();
//     }

//     render() {
//         return (
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <h1>Minuterie : {this.state.secondes} secondes</h1>
//                 <button onClick={this.startTimer} disabled={this.state.isRunning}>
//                     Start
//                 </button>
//                 <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
//                     Stop
//                 </button>
//                 <button onClick={this.resetTimer}>
//                     Réinitialiser
//                 </button>
//             </div>
//         );
//     }
// }

// export default Minuterie;





import React, { Component } from 'react';

class Minuterie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondes: 0,
            isRunning: false, // Suivre si le timer est actif
        };
        this.intervalId = null;
    }

    startTimer = () => {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true });
            this.intervalId = setInterval(() => {
                this.setState((prevState) => ({ secondes: prevState.secondes + 1 }));
            }, 1000);
        }
    };

    stopTimer = () => {
        if (this.state.isRunning) {
            clearInterval(this.intervalId);
            this.setState({ isRunning: false });
        }
    };

    resetTimer = () => {
        this.setState({ secondes: 0 }); // Réinitialiser les secondes uniquement
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.secondes === 10 && prevState.secondes !== 10) {
            console.log('La minuterie a atteint 10 secondes.');
            this.stopTimer();
        }
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Minuterie : {this.state.secondes} secondes</h1>
                <button onClick={this.startTimer} disabled={this.state.isRunning}>
                    Start
                </button>
                <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
                    Stop
                </button>
                <button onClick={this.resetTimer}>
                    Réinitialiser
                </button>
            </div>
        );
    }
}

export default Minuterie;
