# mtabd
Rebandel, Skrobich, Sowa

## Test services
[Frontend](http://vps331205.ovh.net:3000/)
[Database]()
[Backend API]()
[Jenkins]()

## Todos
2) Minimalna liczba tabel w bazie: *11*. Powinny być zaimplementowane w bazie 3 typy relacji 1-*, *-* i 1-1. Użycie check, unique, primary Key, index, constraints 

3. Aplikacja wykorzystuje do łączenia się z bazą ~~przede wszystkim system ORM a także~~ surowy SQL, Użycie procedur wbudowanych 

4. Aplikacja jest zaimplementowana zgodnie z następującą architekturą (walidacja JS, komunikacja przez serwisy, wielowarstwowość logiki biznesowej (moduł walidacji biznesowej, operacji biznesowych i repozytorium dostępu do bazy danych), wykorzystanie obiektów transportowych. Rozszerzony wzorzec mvc 

5. Logowanie błędów aplikacji do pliku i do bazy danych. 

9. Implementacja testów jednostkowych. Testy bazy na mockach. Postawienie i zresetowanie bazy ze skryptu. 

10. Baza danych zoptymalizowana zgodnie z następującymi regułami (tabele słownikowe, klucze obce, główne, ograniczenia na typach danych)

11. Aplikacja powinna być bezpieczna, wygodna w obsłudze i estetyczna. Zastosowanie podstawowych mechanizmów bezpieczeństwa np membership. 

*6. ~~aplikacja może być oparta o dowolny framework ale framefork nie może wymuszać na aplikacji architektury niespójnej , wykluczającej się z architekturą z punktu 4.~~
7. ~~Możliwość użycia C#/.NET, Java, Python. Klient powinien być napisany w HTML5 i Javascript. Konieczne użycie bibliotek i frameworków (np.: Kendo, Angular, JQuery, Backbone,  Underscore,Mustahe ) css w osobnych plikach. ~~
8. ~~Wykorzystanie repozytorium: SVM, TFS lub GitHub~~
1. ~~aplikacja bazodanowa: baza danych relacyjna (ms sql, Oracle, postgres, mysql)*

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



