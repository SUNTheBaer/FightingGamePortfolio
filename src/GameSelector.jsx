import Select from 'react-select';

function GameSelector() {

    const options = [
        { value: 'guilty-gear-strive', label: 'Guilty Gear -Strive-'},
        { value: 'tekken-8', label: 'Tekken 8'},
        { value: 'street-fighter-6', label: 'Street Fighter 6'},
        { value: 'fatal-fury-city-of-the-wolves', label: 'Fatal Fury: City of the Wolves'},
        { value: 'under-night-in-birth-ii-sys-celes', label: 'Under Night In-Birth II Sys:Celes'},
        { value: 'granblue-fantasy-versus-rising', label: 'Granblue Fantasy Versus: Rising'},
        { value: 'mortal-kombat-1', label: 'Mortal Kombat 1'},
        { value: 'marvel-vs-capcom-2', label: 'Marvel vs. Capcom 2'},
        { value: 'rivals-of-aether-ii', label: 'Rivals of Aether II'},
        { value: 'virtua-fighter-5-revo', label: 'Virtua Fighter 5 R.E.V.O'},
        { value: 'the-king-of-fighers-xv', label: 'The King of Fighters XV'},
        { value: 'blazblue-central-fiction', label: 'Blazblue Central Fiction'},
        { value: 'killer-instinct', label: 'Killer Instinct'},
        { value: 'capcom-vs-snk-2', label: 'Capcom vs. SNK 2'},
        { value: 'samurai-shodown', label: 'Samurai Shodown'},
        { value: 'guilty-gear-xrd-rev-2', label: 'Guilty Gear Xrd Rev 2'}
    ]

    const customStyles = {
        singleValue: provided => ({
            ...provided,
            color: '#000000'
        }),
        control: provided => ({
            ...provided,
            color: '#000000'
        }),
        option: provided => ({
            ...provided,
            color: '#000000'
        })
    }

    return(
        <Select styles={customStyles} options={options} />
    );
}

export default GameSelector;