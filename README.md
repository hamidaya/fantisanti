**INSTALLATIEHANDLEIDING:**
Mijn applicatie maakt het mogelijk om alle party’s, festivals per stad op te kunnen zoeken en weer te geven op de pagina gesorteerd op datum in de toekomst.
Gebruiker kan inloggen om een event te kunnen aanmaken in de applicatie of zonder inloggen, maar dan kan je alleen maar zoeken van events.

**Software eisen**

1.	Internet toegang voor componenten die geïmporteerd worden.
      o	Fortawesome
      o	form-hook, react-hook-form.
      o	React-scripts start --openssl-legacy-provider dient in package. json bij scripts te worden toegevoegd als het om een MAC is.
2.	Node.js en NPM
3.	Webstorm
4.	API-key van PredictHQ (vraag nieuwe token bij Hamid als de token in de code verlopen is. zoeken van events werkt dan niet meer)


**#STAPPEN INSTALLATIE**
1.	Installeer Node.js
2.	Installeer Webstorm
3.	Open je internetbrowser en navigeer naar URL adres: https://github.com/hamidaya/fantisanti voor de applicatie code.
4.	Kopieer de https-optie de URL om in webstorm te kunnen importeren.
5.	Open WebStorm select File | New | Project from Version Control Git | Clone uit het menu. Plak hier de gekopieerde URL van de https-variant uit GitHub en click op clone.
6.	De applicatie wordt geladen het kan event duren voordat je iets kan op webstorm. Laat webstorm de code laden tot dit klaar is.
7.	Ga naar de Terminal in Webstorm
8.	Typ in Terminal ‘npm start’en druk op enter om de applicatie op te kunnen starten
9.	De applicatie opent in de browser met localhost:port. Het poort nummertje kan verschillen van de range van je netwerk die de laptop gebruikt. Standaard is dit poort 3000.
10.	Je komt op de applicatie home pagina met zoekbalk in het midden. Je bent vrij nu om de applicatie te gebruiken of om in te loggen
