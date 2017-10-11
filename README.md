# mtabd
Rebandel, Skrobich, Sowa

## Test services
[Frontend](http://vps331205.ovh.net:3000/)
[Database]()
[Backend API]()
[Jenkins]()

## Todos
### Backend
* create app
* configure unit tests
* configure sql connection
* create users REST API endpoint
* create message REST API endpoint
* configure SSL, H/2, SSE, no-auth
* create chat SSE endpoint to push new messages

### Frontend
* fix closing modal after adding user
* add user required validation
* add toast information

**DONE** *app logo, remove obsolete pages*

### Database
**DONE** *refactor field names, create additional relations*

### Tools
* automate build, configure jenkins build server

### Testing
* add e2e test

## Description
### Wstęp
Celem projektu jest stworzenie bazodanowej aplikacji przeglądarkowej do obsługi komunikacji i zleceń między klientami a obiektem handlowo - usługowym. Chcemy, modelując i planując kod na jak najwyższym poziomie abstrakcji doprowadzić do zaimplementowania POC systemu do obsługi lokali usługowo-handlowych, w których istnieje możliwość umawiania przez klientów wizyt u wybranego wykonawcy oraz jak również kupowania online produktów znajdujących się w katalogu danego lokalu. Dodatkowo każdy klient będzie miał możliwość odbycia chatu na żywo wraz z konsultantami w celu ustalenia szczegółów usługi/kupowanych produktów/terminu wizyty itp. 
### Wymagania funkcjonalne	
System umożliwia 
katalogowanie klientów wraz z podstawowymi informacjami o nich
zlecanie przez klientów dowolnych zadań dla systemu 
zlecanie przez klientów zadań polegających na zamówieniu określonej liczby produktów
wybieranie przez klientów wykonawców zadania
konwersację livechat z systemem, prowadzoną przez jednego z konsultantów, wykonawców

Zadanie ma określony czas wykonania, datę początkową i końcową (w szczególności mogą być takie same).
### POC
W związku z ograniczonym czasem trwania projektu, wiele aspektów budowy produkcyjnego systemu informatycznego zostało pominiętych lub zaimplementowanych w sposób wymagający dalszej uwagi. W szczególności jest to temat autoryzacji użytkowników, nadawania uprawnień do wyizolowanych części systemu, pokrycie kodu testami jednostkowymi. Projekt ma na celu przedstawienie sposobu budowy użytecznej aplikacji opartej o relacyjną bazę danych SQL co do wykorzystanych narzędzi, sposobu wymiany danych, przebiegu oraz planowania prac, modelowania zależności wewnątrz bazy danych, nie zaś dostarczenie w pełni użytecznego produktu.



