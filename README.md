# full-stack-open-exercises
My solutions to the exercises of the course "Full Stack open"

## Course exercises
This repository's subfolders contain my solutions to the exercises of the [Full Stack open](https://fullstackopen.com/) online course.
The React apps have been created and developed as per [instructions](https://fullstackopen.com/osa1/reactin_alkeet) from templates.
[Node.js](https://nodejs.org/) is required, and the command used to create a React template is <kbd>npm create vite@latest folder_name -- --template react</kbd>.
- The commands for the installation of dependencies and running an app are <kbd>npm install</kbd> and <kbd>npm run dev</kbd>.
- The apps run at http://localhost:5173/.
- The app _puhelinluettelo_ in part 2 (osa 2) requires the starting of [JSON Server](https://github.com/typicode/json-server): <kbd> npm run server</kbd>.
In part 3 (osa 3) JSON Server is not used.
- The app _maiden tiedot_ optionally shows current weather if a functional API key to [OpenWeather](https://openweathermap.org/) is provided. The key is given as environment variable "VITE_SOME_KEY". For example, if the key is 54l41n3n4v41m34rv0:
    - <kbd>export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev</kbd> // Linux/macOS Bash
    - <kbd>($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev)</kbd> // Windows PowerShell
    - <kbd>set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev</kbd> // Windows cmd.exe


## Kurssin harjoitustehtäviä
Tämän tietovaraston alihakemistoissa on ratkaisujani [Full Stack open](https://fullstackopen.com/) -kurssin tehtäviin.
Yllä on ohjeita sovellusten suorittamiseen.
Alla on lyhyet kuvaukset tehdyistä sovelluksista ja linkit kurssimateriaalin osien tehtävänantoihin.

### Osa 1: Reactin perusteet
- _Kurssitiedot_-sovellus, joka kertoo kurssin osien tehtävämäärät.
Tehtävät [1.1. - 1.2.](https://fullstackopen.com/osa1/reactin_alkeet#tehtavat-1-1-1-2) ja
[1.3. - 1.5](https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5).
- _Unicafe_-palautteenantosovellus, joka näyttää tilastot arvosanojen klikkauksista.
Tehtävät [1.6. - 1.11.](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus#tehtavat-1-6-1-14)
- _Anekdootit_-sovellus, jossa voi arpoa näytettävän anekdootin ja antaa sille äänen. Myös eniten äänestetty juttu näytetään.
Tehtävät [1.12. - 1.14.](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus#tehtavat-1-6-1-14)

### Osa 2: Palvelimen kanssa tapahtuva kommunikointi
- _Kurssitiedot_-sovellus, joka kertoo usean kurssin osat ja tehtävämäärät.
Tehtävät [2.1. - 2.5.](https://fullstackopen.com/osa2/kokoelmien_renderointi_ja_moduulit#tehtavat-2-1-2-5)
- _Puhelinluettelo_-sovellus, jolla voi tallentaa henkilön nimen ja numeron palvelimelle.
 Nimiä voi poistaa ja numeron voi muuttaa lisäämällä nimi uudestaan.
 Filter-kentällä määrätään sivulla näkyvät nimet.
 Onnistunut operaatio näyttää vihreän ilmoituksen ja virhetilanne punaisen.
 Tehtävät [2.6. - 2.10.](https://fullstackopen.com/osa2/lomakkeiden_kasittely#tehtavat-2-6-2-10),
[2.11.](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen#tehtava-2-11),
[2.12. - 2.15.](https://fullstackopen.com/osa2/palvelimella_olevan_datan_muokkaaminen#tehtavat-2-12-2-15)
ja [2.16. - 2.17.](https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen#tehtavat-2-16-2-17)
- _Maiden tiedot_ -sovellus, jossa hakukenttään kirjoittamalla saadaan lista maiden nimiä tai yhden maan tiedot osoitteesta https://studies.cs.helsinki.fi/restcountries/.
Maan pääkaupungin sää näytetään, jos sovellukselle on annettu [OpenWeatherin](https://openweathermap.org/) API-avain ympäristömuuttujana.
Tehtävät [2.18. - 2.20.](https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen#tehtavat-2-18-2-20)

### Osa 3: Palvelimen ohjelmointi NodeJS:n Express-kirjastolla
_Puhelinluettelo_-sovellus, sovitettuna uuteen [backendiin](https://github.com/Karmar2323/fullstackopen-phonebook-backend). Tehtävä [3.9.](https://fullstackopen.com/osa3/sovellus_internetiin#tehtavat-3-9-3-11)

