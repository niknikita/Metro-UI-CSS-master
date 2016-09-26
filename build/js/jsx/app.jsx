class Header extends React.Component {
    render() {
        return (
            <div className ="header">
                <div className="caption">
                    <span className="glyphicon glyphicon-home"></span>
                    <a className="">ОБД</a>
                </div>
            </div>);
    }
}



ReactDOM.render(
    <Header  />,
    document.getElementById('root')
);