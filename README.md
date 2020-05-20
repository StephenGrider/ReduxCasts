# ReduxCasts

Completed code examples from [Modern React with Redux](https://udemy.com/react-redux)

Each example from the course can be found within this repo. You can either look at the files in a completed state, or check out the changes that were made in a particular section by clicking on one of the links below.

1.  COMPONENTS
    Component Nesting
    Component Reusability
    Component Configuration

2.  Rule of states
    Only usble with class components
    You will confuse props with state
    'State' is a JS object that contains data relevant to a component
    Updating 'State' on a component causes the component to (almost) instantly rerender
    State must be initialized when a component is created
    State can only be updated using the function 'setState'

    class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: ""};

    window.navigator.geolocation.getCurrentPosition(
    position => {
    this.setState({lat: position.coords.latitude});

        },
        err => {
            this.setState({errorMessage: err.message})
        }

    )
    }


        render() {
            return (
                <div> hi there </div>
            )
        }

    }

3. Check on the use of UseRef
