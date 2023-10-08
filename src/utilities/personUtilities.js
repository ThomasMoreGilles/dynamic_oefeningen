export function citiesFromPersons(persons) {
    const cities = [...new Set(persons.map(p => p.city))];
    return cities.map(c => ({ name: c, numberOfPersons: persons.reduce((n, p) => (p.city===c ? n+1 : n), 0)}));
}