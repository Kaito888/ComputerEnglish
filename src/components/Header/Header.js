const Header = ({showComponent}) => {
    const tabs = [
        {
            name: 'Topic1',
            text: 'Topic1'
        } , {
            name: 'Topic2',
            text: 'Topic2'
        }
    ];

    return (<div className='header'>
            {tabs.map((tab, index) => <button
                key={index}
                onClick={() => showComponent(tab.name)}>{tab.text}</button>)}
        </div>)
}

export default Header;