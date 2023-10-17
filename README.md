# Εισαγωγή στo Angular Framework

## 8. Reactive Forms

## 7.Template driven forms

## 6. Component Output

## 5. Event Binding (template -> controller)

- Click handlers
- Input handler
- Two way binding

## 4. \*ngFor Directive

-

## 3. Alternate component input

- input | undefined
- \*ngIf για εμφάνιση υπό συνθήκη στο template
- ng-container & ng-template

## 2. Component input

Δημιουργία interface για τα δεδομένα **τύπου Person**:


ng generate interface interfaces/person --dry-run
CREATE src/app/interfaces/person.ts (28 bytes)

NOTE: The "--dry-run" option means no changes were made.


- Χρήση του decorator `@Input()` στο χαρακτηριστικό `person`, τύπου `Person`, στην κλάση `PersonComponent`.
- Ανάγκη αρχικοποίησης του χαρακτηριστικού με μια αρχική τιμή για τα δεδομένα.
- Έλεγχος εμφάνισης της αρχικής τιμής δεδομένων στην περίπτωση που δεν περνά είσοδος στο component.
- Μεταφορά δεδομένων του χαρακτηριστικού person πίσω στην κλάση `AppComponent`.
- Δέσμευση του χαρακτηριστικού εισόδου `person` της κλάσης `PersonComponent` με το χαρακτηριστικό `person` της κλάσης `AppComponent`: Στο `app.component.html` χρησιμοποιούμε τα brackets `[...]`:

 

## 1. Δημιουργία νέου component


ng generate component person --dry-run

Μας δείχνει τι ακριβώς θα παραχθεί χωρίς όμως να δημιουργεί πραγματικά τα αρχεία


CREATE src/app/person/person.component.css (0 bytes)
CREATE src/app/person/person.component.html (21 bytes)
CREATE src/app/person/person.component.spec.ts (554 bytes)
CREATE src/app/person/person.component.ts (297 bytes)

NOTE: The "--dry-run" option means no changes were made.


- Μεταφορά του χαρακτηριστικού `person` από την κλάση `AppComponent` στην κλάση `PersonComponent`.
- Διαπίστωση πως το css χρειάζεται επίσης να μεταφερθεί στο `person.component.css`.

## 0. Απλή δέσμευση χαρακτηριστικού

- Απλή δέσμευση (simple binding) χαρακτηριστικού της κλάσης του component στο template του component.
- Χρήση του placholder `{{<attribute_name>}}`.
- Αντικείμενο person και δέσμευση αντικειμένου στο template.
- Χαρακτηριστικά του person σε ιδιαίτερα κελιά στον πίνακα του template.