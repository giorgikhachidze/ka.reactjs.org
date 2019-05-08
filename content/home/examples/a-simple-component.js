class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        გამარჯობა {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="ტეილორ" />,
  document.getElementById('hello-example')
);