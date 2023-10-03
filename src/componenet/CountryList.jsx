import styles from './CountryList.module.css'
import CityItem from './CityItem'
import CountryItem from './CountryItem'
import Spinner from './Spinner'

import Message from './Message'

const CountryList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />
    if (!cities.length)
        return (
            <Message message='add your first city' />
        )

    
        const countries = cities.reduce((arr, city) => {
            if (!arr.map((el) => el.country).includes(city.country))
              return [...arr, { country: city.country, emoji: city.emoji }];
            else return arr;
          }, []);
        
    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.id} />
            ))}
        </ul>
    )
}

export default CountryList