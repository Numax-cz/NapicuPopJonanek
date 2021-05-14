
# NapicuPopJonanek

## Instalace
### instalace balíčku 
```
npm i
```
### .env 
```
PORT=8080
DB_HOST=
DB_USER=
DB_DB=
DB_PASS=
```
***
## Doporučená Databáze
```sql
CREATE TABLE `popjonanek` (
  `id` int(11) NOT NULL,
  `counter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```
***

## Použité balíčky
* dotenv@8.2.0
* ejs@3.1.6
* express@4.17.1
* mysql@2.18.1
* nodemon@2.0.7