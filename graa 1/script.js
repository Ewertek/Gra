const leagues = {
  PremierLeague: [
    { name: "Erling Haaland", overall: 91, attack: 90, defense: 70 },
    { name: "Bukayo Saka", overall: 87, attack: 85, defense: 70 },
    { name: "Declan Rice", overall: 88, attack: 70, defense: 90 },
    { name: "Rodri", overall: 89, attack: 75, defense: 90 },
    { name: "Phil Foden", overall: 89, attack: 90, defense: 70 },
    { name: "Julián Álvarez", overall: 86, attack: 85, defense: 60 },
    { name: "Martin Ødegaard", overall: 87, attack: 85, defense: 70 },
    { name: "Moisés Caicedo", overall: 85, attack: 80, defense: 85 },
    { name: "Bruno Guimarães", overall: 87, attack: 80, defense: 90 },
    { name: "Gabriel Martinelli", overall: 86, attack: 85, defense: 75 },
    { name: "Enzo Fernández", overall: 84, attack: 80, defense: 80 },
    { name: "Bernardo Silva", overall: 88, attack: 85, defense: 80 },
    { name: "Josko Gvardiol", overall: 82, attack: 50, defense: 90 },
    { name: "Rúben Dias", overall: 89, attack: 40, defense: 90 },
    { name: "Dominik Szoboszlai", overall: 86, attack: 85, defense: 75 },
    { name: "Christopher Nkunku", overall: 86, attack: 90, defense: 65 },
    { name: "William Saliba", overall: 82, attack: 40, defense: 90 },
    { name: "Luis Díaz", overall: 88, attack: 85, defense: 70 },
    { name: "Trent Alexander-Arnold", overall: 89, attack: 80, defense: 85 },
    { name: "Gabriel Jesus", overall: 87, attack: 90, defense: 75 },
  ],
  LaLiga: [
    { name: "Jude Bellingham", overall: 88, attack: 85, defense: 75 },
    { name: "Vinicius Junior", overall: 89, attack: 88, defense: 70 },
    { name: "Federico Valverde", overall: 86, attack: 85, defense: 80 },
    { name: "Rodrygo", overall: 86, attack: 87, defense: 65 },
    { name: "Eduardo Camavinga", overall: 85, attack: 80, defense: 85 },
    { name: "Gavi", overall: 82, attack: 75, defense: 85 },
    { name: "Pedri", overall: 88, attack: 85, defense: 90 },
    { name: "Aurélien Tchouaméni", overall: 86, attack: 80, defense: 85 },
    { name: "Frenkie de Jong", overall: 88, attack: 85, defense: 85 },
    { name: "Ronald Araujo", overall: 85, attack: 50, defense: 90 },
    { name: "Éder Militão", overall: 85, attack: 40, defense: 90 },
    { name: "Takefusa Kubo", overall: 82, attack: 85, defense: 60 },
    { name: "Lamine Yamal", overall: 78, attack: 80, defense: 50 },
    { name: "Jules Koundé", overall: 86, attack: 40, defense: 90 },
    { name: "Martín Zubimendi", overall: 82, attack: 75, defense: 80 },
    { name: "Nico Williams", overall: 80, attack: 75, defense: 70 },
    { name: "Mikel Merino", overall: 84, attack: 80, defense: 80 },
    { name: "Alejandro Balde", overall: 78, attack: 70, defense: 75 },
    { name: "Mikel Oyarzabal", overall: 87, attack: 85, defense: 75 },
    { name: "Raphinha", overall: 86, attack: 88, defense: 70 },
  ],
  Bundesliga: [
    { name: "Jamal Musiala", overall: 85, attack: 85, defense: 70 },
    { name: "Harry Kane", overall: 90, attack: 88, defense: 65 },
    { name: "Florian Wirtz", overall: 88, attack: 90, defense: 70 },
    { name: "Leroy Sané", overall: 86, attack: 87, defense: 65 },
    { name: "Joshua Kimmich", overall: 89, attack: 85, defense: 85 },
    { name: "Xavi Simons", overall: 82, attack: 85, defense: 50 },
    { name: "Alphonso Davies", overall: 85, attack: 80, defense: 85 },
    { name: "Kingsley Coman", overall: 86, attack: 85, defense: 70 },
    { name: "Matthijs de Ligt", overall: 88, attack: 60, defense: 90 },
    { name: "Min-jae Kim", overall: 83, attack: 50, defense: 85 },
    { name: "Dayot Upamecano", overall: 85, attack: 50, defense: 90 },
    { name: "Loïs Openda", overall: 82, attack: 85, defense: 65 },
    { name: "Mathys Tel", overall: 78, attack: 80, defense: 60 },
    { name: "Dani Olmo", overall: 85, attack: 85, defense: 75 },
    { name: "Jeremie Frimpong", overall: 80, attack: 75, defense: 75 },
    { name: "Serge Gnabry", overall: 86, attack: 88, defense: 70 },
    { name: "Exequiel Palacios", overall: 84, attack: 85, defense: 75 },
    { name: "Gregor Kobel", overall: 82, attack: 20, defense: 80 },
    { name: "Victor Boniface", overall: 82, attack: 85, defense: 60 },
    { name: "Serhou Guirassy", overall: 80, attack: 80, defense: 70 },
  ],
  SerieA: [
    { name: "Victor Osimhen", overall: 85, attack: 85, defense: 70 },
    { name: "Lautaro Martínez", overall: 88, attack: 86, defense: 70 },
    { name: "Rafael Leão", overall: 83, attack: 85, defense: 68 },
    { name: "Khvicha Kvaratskhelia", overall: 82, attack: 83, defense: 65 },
    { name: "Nicolò Barella", overall: 86, attack: 85, defense: 80 },
    { name: "Dušan Vlahović", overall: 84, attack: 86, defense: 65 },
    { name: "Alessandro Bastoni", overall: 85, attack: 60, defense: 85 },
    { name: "Theo Hernández", overall: 84, attack: 80, defense: 75 },
    { name: "Marcus Thuram", overall: 82, attack: 85, defense: 70 },
    { name: "Federico Dimarco", overall: 79, attack: 75, defense: 75 },
    { name: "Federico Chiesa", overall: 86, attack: 87, defense: 70 },
    { name: "Bremer", overall: 82, attack: 60, defense: 85 },
    { name: "Mike Maignan", overall: 84, attack: 20, defense: 80 },
    { name: "Benjamin Pavard", overall: 83, attack: 70, defense: 80 },
    { name: "Teun Koopmeiners", overall: 83, attack: 75, defense: 80 },
    { name: "Giorgio Scalvini", overall: 76, attack: 40, defense: 80 },
    { name: "Hakan Çalhanoğlu", overall: 86, attack: 85, defense: 75 },
    { name: "Nicolás González", overall: 81, attack: 80, defense: 70 },
    { name: "Adrien Rabiot", overall: 83, attack: 80, defense: 80 },
    { name: "Fikayo Tomori", overall: 82, attack: 55, defense: 85 },
  ],
};

let shopItems = Object.keys(leagues).flatMap((league) =>
  leagues[league].map((player, index) => ({
    id: index + 1,
    ...player,
    cost: player.overall * 8,
  }))
);

let playerDeck = [];
let opponentDeck = [];
let currentPlayerCard;
let currentOpponentCard;
let playerWins = 0;
let opponentWins = 0;
let roundCount = 0; // Śledzenie liczby rozegranych rund
const maxRounds = 9; // Maksymalna liczba rund
let attackBooster = 0; // Dodatkowe punkty ataku
let defenseBooster = 0; // Dodatkowe punkty obrony
let playerCoins = 0; // Zmienna do śledzenia ilości monet gracza
let coins = 0;
let playerName = "";
let username = ""; // Zmienna przechowująca nazwę użytkownika
let userCoins = {};
let isOnDecksPage = false;
let myCards = []; // Kolekcja kupionych kart
let selectedDeck = [];
let isDeckCreationContainerVisible = false;
let userAchievements = [];
var achievements = [];

document.getElementById("loginForm").onsubmit = function (event) {
  event.preventDefault();
  const enteredUsername = document.getElementById("username").value;

  if (enteredUsername ) {
    loginUser(enteredUsername)
  } else {
    userCoins[enteredUsername] = 0;
    coins = 0;
  }

  username = enteredUsername;
  loadUserState(username); // Ładuje stan użytkownika


  // Aktualizuj wyświetlanie monet
  updateCoinsDisplay();

  // Przełącz widoki
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
  displayLeagues();
};

//sklep
function displayShopItems(showAvailableOnly = false) {
  const shopItemsContainer = document.getElementById("shopItems");
  shopItemsContainer.innerHTML = "";

  let itemsToDisplay = shopItems;

  // Filtruj karty, jeśli wymagane
  if (showAvailableOnly) {
    itemsToDisplay = itemsToDisplay.filter(item => !myCards.some(card => card.id === item.id));
  }

  itemsToDisplay.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `<h3>${item.name}</h3><p>Koszt: ${item.cost} monet</p>`;
    const buyButton = document.createElement("button");
    buyButton.textContent = "Kup";
    buyButton.onclick = function() { buyCard(item.id); };
    itemElement.appendChild(buyButton);

    // Dodaj identyfikator do elementu karty
    itemElement.setAttribute("id", `shopItem-${item.id}`);
    shopItemsContainer.appendChild(itemElement);
  });
}

document.getElementById("showAvailableCards").addEventListener("click", function() {
  displayShopItems(true); // Wyświetl tylko dostępne karty
});

function playBuySound() {
  var buySound = document.getElementById("buySound");
  if (buySound) {
    buySound.play();
  }
}



function sellCard(cardIndex) {
  if (cardIndex >= 0 && cardIndex < myCards.length) {
    const soldCard = myCards.splice(cardIndex, 1)[0]; // Usuń kartę z 'Moich kart'
    coins += soldCard.cost; 
    const newId = shopItems.length + 1;
    const cardToAddBack = { ...soldCard, id: newId };

    shopItems.push(cardToAddBack);

    displayPurchasedCards(); // Odśwież listę 'Moich kart'
    displayShopItems(); // Odśwież listę 'Sklepu'
    updateCoinsDisplay(); // Aktualizuj saldo monet

    // Zapisz zmieniony stan
    saveUserState(username, coins, myCards);
    saveShopItemsState(); // Zaktualizuj stan sklepu w localStorage
    alert(`Sprzedano zawodnika: ${soldCard.name} za ${soldCard.cost} monet.`);
  } else {
    alert("Nie można znaleźć wybranej karty.");
  }
}


function saveShopItemsState() {
  localStorage.setItem('shopItems', JSON.stringify(shopItems));
}


function loadShopItemsState() {
  const savedShopItems = JSON.parse(localStorage.getItem('shopItems'));
  if (savedShopItems) {
    // Filtruj `shopItems`, aby usunąć te, które zostały już kupione przez użytkownika
    shopItems = shopItems.filter(item => !myCards.some(card => card.id === item.id));
    displayShopItems(); // Odśwież listę 'Sklepu'
  }
}

function checkAndAwardAchievements() {
  if (!username) return; // Upewnij się, że użytkownik jest zalogowany

  let achievements = userAchievements[username] || [
    { cardsRequired: 5, reward: 500, achieved: false },
    { cardsRequired: 10, reward: 1000, achieved: false },
    { cardsRequired: 20, reward: 3000, achieved: false },
    { cardsRequired: 40, reward: 5000, achieved: false },
  ];

  achievements.forEach(achievement => {
    if (!achievement.achieved && myCards.length >= achievement.cardsRequired) {
      achievement.achieved = true;
      coins += achievement.reward;
      alert(`Odblokowano osiągnięcie: ${achievement.cardsRequired} kart! Nagroda: ${achievement.reward} monet.`);
    }
  });

  userAchievements[username] = achievements; // Aktualizuj osiągnięcia dla użytkownika
  saveUserAchievements(); // Zapisz osiągnięcia w localStorage
  updateCoinsDisplay(); // Aktualizuj wyświetlanie monet
  saveUserState(username, coins, myCards); // Zapisz stan użytkownika
}

function saveUserAchievements() {
  localStorage.setItem('userAchievements', JSON.stringify(userAchievements));
}

function loadUserAchievements(username) {
  const savedUserAchievements = JSON.parse(localStorage.getItem('userAchievements'));
  userAchievements[username] = savedUserAchievements?.[username] || createDefaultAchievements();
  saveUserAchievements(); // Zapisujemy osiągnięcia, jeśli były nowo utworzone
}


function createDefaultAchievements() {
  return [
    { cardsRequired: 5, reward: 500, achieved: false },
    { cardsRequired: 10, reward: 1000, achieved: false },
    { cardsRequired: 20, reward: 3000, achieved: false },
    { cardsRequired: 40, reward: 5000, achieved: false },
  ];
}

function loginUser(username) {
  loadUserState(username); // Załaduj stan użytkownika, np. liczbę monet i kart
  loadUserAchievements(username); // Załaduj osiągnięcia użytkownika
  checkAndAwardAchievements(); // Sprawdź, czy użytkownik osiągnął nowe cele
  
}


// Zakładając, że mamy już zdefiniowaną funkcję do wyświetlania i wybierania kart, możemy teraz wybrać karty do talii.
function addToDeck(cardId) {
  if (selectedDeck.length < 10) {
    selectedDeck.push(cardId);
    displaySelectedDeck(); // Aktualizacja UI z wybranymi kartami
  } else {
    alert("Możesz dodać maksymalnie 10 kart do talii.");
  }
}

function displaySelectedDeck() {
  const selectedCardsContainer = document.getElementById("selectedCards");
  selectedCardsContainer.innerHTML = ""; // Czyszczenie listy kart w UI

  selectedDeck.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
          <h4>${card.name}</h4>
          <p>Overall: ${card.overall}, Atak: ${card.attack}, Obrona: ${card.defense}</p>
          <button onclick="removeCardFromDeck(${card.id})">Usuń z talii</button>
      `;
    selectedCardsContainer.appendChild(cardElement);
  });
}

function removeCardFromDeck(cardId, showAlert = true) {
  const cardIndex = selectedDeck.findIndex((card) => card.id === cardId);
  if (cardIndex > -1) {
    selectedDeck.splice(cardIndex, 1); // Usuń z talii

    if (showAlert) {
      alert("Karta została usunięta z talii.");
    }

    displaySelectedDeck(); // Odśwież listę kart w 'Stwórz własną talię'
  }
}

function removeCardFromMyCards(cardId) {
  // Usuwanie karty z listy 'Moje karty'
  const myCardIndex = myCards.findIndex((card) => card.id === cardId);
  if (myCardIndex > -1) {
    const [removedCard] = myCards.splice(myCardIndex, 1); // Usuń kartę i zapisz usuniętą kartę
    alert(`Karta ${removedCard.name} została usunięta z 'Moich kart'.`);

    // Dodatkowo usuń kartę z talii 'Stwórz własną talię', jeśli tam jest
    removeCardFromSelectedDeck(removedCard.id);

    // Odświeżanie wyświetlanych list
    displayPurchasedCards();
    displaySelectedDeck();
  } else {
    alert("Nie można znaleźć karty w 'Moich kartach'.");
  }
}

function removeCardFromSelectedDeck(cardId) {
  const deckCardIndex = selectedDeck.findIndex((card) => card.id === cardId);
  if (deckCardIndex > -1) {
    selectedDeck.splice(deckCardIndex, 1); // Usuń kartę z talii
    // Nie potrzebujemy tutaj alertu, ponieważ to akcja pochodna
  }
  // Aktualizacja UI nie jest potrzebna, ponieważ będzie wykonana w funkcji, która wywołała tę funkcję
}

function selectCardForDeck(cardId) {
  if (selectedDeck.length < 10) {
    selectedDeck.push(cardId);
    // Aktualizacja UI
  } else {
    alert("Możesz wybrać maksymalnie 10 kart do talii.");
  }
}

function confirmDeckSelection() {
  if (selectedDeck.length === 10) {
    // Logika potwierdzenia wyboru talii
  } else {
    alert("Musisz wybrać dokładnie 10 kart.");
  }
}

function displayPurchasedCards() {
  const myCardsContainer = document.getElementById("myCards");
  myCardsContainer.innerHTML = "";
  myCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
      <h3>${card.name}</h3>
      <p>Overall: ${card.overall}, Atak: ${card.attack}, Obrona: ${card.defense}</p>
      <button onclick="sellCard(${index})">Sprzedaj</button>
    `;
    myCardsContainer.appendChild(cardElement);
    document.getElementById("myCardsContainer").style.display = "block"; // Pokaż moje karty
  });
}

// Funkcja do ukrywania moich kart
function hideMyCards() {
  document.getElementById("myCardsContainer").style.display = "none";
}

function buyCard(cardId) {
  const cardIndex = shopItems.findIndex((item) => item.id === cardId);
  if (cardIndex === -1) {
    alert("Nie można znaleźć tej karty w sklepie.");
    return;
  }
  checkAndAwardAchievements();
  saveAchievements();
  const card = shopItems[cardIndex];
  
  // Sprawdź, czy użytkownik już posiada tę kartę
  const alreadyOwned = myCards.some((ownedCard) => ownedCard.id === card.id);
  if (alreadyOwned) {
    alert("Już posiadasz tę kartę.");
    return;
  }

  if (coins >= card.cost) {
  shopItems.splice(cardIndex, 1); // Usuń kartę ze sklepu
  myCards.push(card); // Dodaj do 'Moich kart'
  coins -= card.cost; // Aktualizacja salda monet
  var buySound = document.getElementById("buySound");
  buySound.play();
  displayPurchasedCards(); // Odśwież listę 'Moich kart'
  displayShopItems(); // Odśwież listę 'Sklepu'
  updateCoinsDisplay();
  saveUserState(username, coins, myCards); // Zapisz zmieniony stan użytkownika
  saveShopItemsState(); // Zaktualizuj stan sklepu w localStorage
  checkAndAwardAchievements();
  saveAchievements();
  alert(`Zakupiono zawodnika: ${card.name}`);
} else {
  alert("Nie masz wystarczająco monet na zakup tej karty.");
}}

document.getElementById("showAchievementsButton").addEventListener("click", function() {
  showAchievements(); 
});

function showAchievements() {
  if (!username) {
    alert("Musisz być zalogowany, aby zobaczyć osiągnięcia.");
    return;
  }

  // Ładuje osiągnięcia użytkownika jeśli nie są już załadowane
  let userAchievementData = userAchievements[username];
  if (!userAchievementData) {
    loadUserAchievements();
    userAchievementData = userAchievements[username];
  }

  // Przygotowanie listy osiągnięć do wyświetlenia
  let achievementsList = userAchievementData.map(achievement => {
    return `${achievement.cardsRequired} kart: ${achievement.achieved ? 'Osiągnięte (' + achievement.reward + ' monet)' : 'Nieosiągnięte'}`;
  }).join('<br>');

  // Wyświetlanie osiągnięć w kontenerze na stronie
  document.getElementById('achievementsContainer').innerHTML = achievementsList;
}
document.getElementById("showAchievementsButton").addEventListener("mouseover", function() {
  showAchievements(); // Wywołaj funkcję, która wyświetla osiągnięcia
  document.getElementById("achievementsContainer").style.display = "block"; // Pokaż kontener osiągnięć
});

// Załóżmy, że masz kontener do wyświetlania osiągnięć o ID 'achievementsContainer'
document.getElementById("achievementsContainer").addEventListener("mouseleave", function() {
  this.style.display = "none"; // Ukryj kontener osiągnięć, gdy użytkownik opuści obszar kontenera
});



function saveAchievements() {
  localStorage.setItem('achievements', JSON.stringify(achievements));
}

function loadAchievements() {
  const savedAchievements = JSON.parse(localStorage.getItem('achievements'));
  if (savedAchievements) {
    achievements = savedAchievements;
  }
  achievements.forEach(achievement => {
    if (myCards.length >= achievement.cardsRequired && !achievement.achieved) {
      achievement.achieved = true;
      coins += achievement.reward; // Dodaj nagrodę do salda monet użytkownika
      alert(`Osiągnięto: ${achievement.cardsRequired} kart! Otrzymujesz ${achievement.reward} monet.`);
      // Zaktualizuj stan osiągnięć w localStorage
      localStorage.setItem('achievements', JSON.stringify(achievements));
    }
  });
}

function addToDeckSelection(card) {
  selectedDeck.push(card); // Dodaj kartę do listy wyboru talii
}

function displayDeckSelection() {
  const selectedDeckContainer = document.getElementById(
    "selectedDeckContainer"
  );
  selectedDeckContainer.innerHTML = "";
  selectedDeck.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `<h4>${card.name}</h4> <p>Overall: ${card.overall}</p> <p>Atak: ${card.attack}</p> <p>Obrona: ${card.defense}</p>`;
    selectedDeckContainer.appendChild(cardElement);
  });
}

function displayMyCards() {
  const myCardsContainer = document.getElementById("myCards");
  myCardsContainer.innerHTML = myCards
    .map(
      (card) => `
    <div>
      <h3>${card.name}</h3>
      <p>Overall: ${card.overall}, Atak: ${card.attack}, Obrona: ${card.defense}</p>
    </div>
  `
    )
    .join("");
}

function closeShop() {
  document.getElementById("shopContainer").style.display = "none";
}

function openShop() {
  document.getElementById("shopContainer").style.display = "block";
  displayShopItems(); 
}

function login() {
  const usernameInput = document.getElementById("usernameInput").value.trim();
  if (usernameInput) {
    username = usernameInput;
    document.getElementById("loginContainer").style.display = "none";
    displayLeagues(); 
  } else {
    alert("Proszę wpisać nazwę użytkownika.");
  }
}

function changeName() {
  // Zapisz obecne saldo monet i karty dla obecnego użytkownika
  saveUserState(username, coins, myCards);

  // Pobierz nową nazwę użytkownika
  const newUsername = prompt("Proszę wpisać nową nazwę użytkownika:");
  if (newUsername && newUsername !== username) {
    // Zapisz nową nazwę użytkownika jako ostatnio zalogowanego użytkownika
    localStorage.setItem('lastLoggedInUser', newUsername);
    
    // Zaktualizuj `username` w pamięci skryptu
    username = newUsername;

    // Załaduj stan dla nowego użytkownika, jeśli istnieje, lub ustaw domyślne wartości
    loadUserState(newUsername);
    loadUserAchievements(newUsername);

    // Aktualizuj wyświetlanie monet dla nowego użytkownika
    updateCoinsDisplay();
  } else if (!newUsername) {
    alert("Nazwa użytkownika nie może być pusta!");
  } else {
    alert("Nowa nazwa użytkownika jest taka sama jak obecna.");
  }

  // Przełącz widoki
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("gameContainer").style.display = "none";
  document.getElementById("leaguesContainer").style.display = "none";
}

window.onload = () => {
  
  const savedUsername = localStorage.getItem('lastLoggedInUser');
  if (savedUsername) {
    loginUser(savedUsername);
  }
  loadShopItemsState();
 
  const savedCoins = localStorage.getItem("userCoins");
  userCoins = savedCoins ? JSON.parse(savedCoins) : {};
  isOnDecksPage = true;
  document.getElementById("openShopButton").addEventListener("click", openShop);
  coins = userCoins[username] || 0; // Ustaw monety dla zalogowanego użytkownika
  updateCoinsDisplay(); // Zaktualizuj wyświetlanie monet
  loadAchievements();
  checkAndAwardAchievements();

  // ... reszta funkcji onload ...
};

function displayLeagues() {
  const leaguesContainer = document.getElementById("leaguesContainer");
  leaguesContainer.innerHTML = "";
  isOnDecksPage = true;
  document.getElementById("openShopButton").style.display = "block";

  Object.keys(leagues).forEach((league) => {
    const button = document.createElement("button");
    button.textContent = league;
    button.classList.add("league-button");
    button.addEventListener("click", function () {
      prepareGame(league);
    });
    leaguesContainer.appendChild(button);
  });
}

function prepareGame(selectedLeague) {
  document.getElementById("statsSelection").style.display = "flex";

  const selectedCards = leagues[selectedLeague];
  playerDeck = [...selectedCards]; 
  opponentDeck = [...selectedCards]; 

  shuffleDeck(playerDeck);
  shuffleDeck(opponentDeck);
  document.getElementById("leaguesTitle").style.display = "none";

  document.getElementById("leaguesContainer").style.display = "none";
  const drawButton = document.getElementById("drawCardButton");
  drawButton.style.display = "block";
  drawButton.onclick = () => playRound();
  isOnDecksPage = true;
  document.getElementById("openShopButton").style.display = "none";
}

function displayCards(league) {
  const cardsDisplay = document.getElementById("cardsDisplay");
  cardsDisplay.innerHTML = ""; // Czyści wyświetlane karty
  leagues[league].forEach((card) => {
    const cardInfo = document.createElement("div");
    cardInfo.textContent = `${card.name} - Overall: ${card.overall}, Attack: ${card.attack}, Defense: ${card.defense}`;
    cardsDisplay.appendChild(cardInfo);
  });
}



function startGame(selectedLeague) {
  isOnDecksPage = false;
  document.getElementById("openShopButton").style.display = "none";
  roundCount = 0;
  playerWins = 0;
  opponentWins = 0;
  prepareGame(selectedLeague);
  displayLeagues();
  document.getElementById('gameContainer').style.display = 'block';
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; 
  }
}
function drawCard(deck) {
  if (deck.length > 0) {
    return deck.shift(); // Usuwa pierwszą kartę z talii i zwraca ją
  } else {
    return null; // Jeśli talia jest pusta, zwraca null
  }
}

function playRound() {
  if (
    playerDeck.length === 0 ||
    opponentDeck.length === 0 ||
    roundCount >= maxRounds
  ) {
    endGame(); 
    return;
  }
  currentPlayerCard = drawCard(playerDeck); 
  currentOpponentCard = drawCard(opponentDeck); 

  document.getElementById("gameStatus").innerHTML = `
  <p>Twoja karta to: ${currentPlayerCard.name}</p>
  `;
  document.getElementById("statsSelection").style.display = "flex";
  document.getElementById("drawCardButton").style.display = "none";
  roundCount++;
}

function playWinSound() {
  var winSound = document.getElementById("winSound");
  winSound.play();
}




function checkRoundWinner() {
  // Logika sprawdzania, kto wygrał rundę

  if (playerWins) {
    playWinSound(); // Odtwórz dźwięk wygranej
    // Pozostała logika dotycząca wygranej
  }
}


function endGame() {
  
  userCoins[username] = coins;
  localStorage.setItem("userCoins", JSON.stringify(userCoins));

  let finalMessage = "Koniec gry. ";
  if (playerWins > opponentWins) {
    finalMessage += `Wygrałeś! Wynik: ${playerWins} do ${opponentWins}.`;
  } else if (playerWins < opponentWins) {
    finalMessage += `Przegrałeś. Wynik: ${opponentWins} do ${playerWins}.`;
  } else {
    finalMessage += `Remis. Wynik: ${playerWins} do ${opponentWins}.`;
  }
  updateRanking(username, playerWins); 

  
  document.getElementById("gameStatus").textContent = finalMessage;
  document.getElementById("drawCardButton").style.display = "none";
  document.getElementById("statsSelection").style.display = "none";
  document.getElementById("endGameOptions").style.display = "block";
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "openShopButton") {
    // Tylko otwórz sklep, jeśli użytkownik znajduje się na odpowiedniej stronie
    if (isOnDecksPage) {
      openShop();
    } else {
      alert("Sklep jest dostępny tylko na stronie wyboru talii.");
    }
  }
});

function playAgain() {
  resetGame(); // Resetuje grę

  // Ponownie wyświetla kontener wyboru ligi
  document.getElementById("leaguesContainer").style.display = "block";
  document.getElementById("leaguesTitle").style.display = "block"; // Upewnij się, że element z tym ID istnieje

  // Ukrywa opcje końca gry
  document.getElementById("endGameOptions").style.display = "none";

  // Aktualizuje wyświetlanie monet
  updateCoinsDisplay();

  // Ustawia odpowiedni stan strony
  isOnDecksPage = true;

  // Pokazuje przycisk sklepu
  document.getElementById("openShopButton").style.display = "block";

  // Odświeża wyświetlanie dostępnych kart
  displayShopItems();
}


//ranking 
document.getElementById("showRankingButton").addEventListener("mouseover", function() {
  showRanking(); // Automatyczna aktualizacja rankingu przy najechaniu
  document.getElementById("rankingContainer").style.display = "block"; // Pokaż ranking
});

document.getElementById("rankingContainer").addEventListener("mouseleave", function() {
  this.style.display = "none"; // Ukryj ranking po opuszczeniu kontenera
});

function saveUserScore(username, score) {
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  ranking.push({ username, score });
  localStorage.setItem("ranking", JSON.stringify(ranking));
  console.log("Ranking zapisany:", ranking);
}


function loadUserState(username) {
  const userState = JSON.parse(localStorage.getItem(`userState_${username}`));
  if (userState) {
    coins = userState.coins;
    myCards = userState.cards || [];
  } else {
    coins = 0; // Ustaw domyślną liczbę monet dla nowego użytkownika
    myCards = []; // Ustaw domyślną pustą listę kart dla nowego użytkownika
  }
  updateCoinsDisplay(); // Aktualizuj wyświetlanie monet
  loadUserAchievements(username); // Załaduj osiągnięcia dla użytkownika
}



function saveUserState(username, coins, cards) {
  const userState = { coins, cards };
  localStorage.setItem(`userState_${username}`, JSON.stringify(userState));
}

function updateRanking(username, roundsWon) {
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  let userRank = ranking.find(rank => rank.username === username);

  if (userRank) {
    userRank.roundsWon += roundsWon; // Dodaj wygrane rundy do istniejącego wpisu
  } else {
    ranking.push({ username, roundsWon }); // Utwórz nowy wpis, jeśli użytkownik nie istnieje
  }

  localStorage.setItem("ranking", JSON.stringify(ranking));
}



function showRanking() {
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  
  if (!Array.isArray(ranking)) {
    console.error("Ranking nie jest tablicą");
    return;
  }

  ranking.sort((a, b) => b.roundsWon - a.roundsWon);

  let rankingHTML = ranking.map((user, index) => {
    return `<div>${index + 1}. ${user.username} - ${user.roundsWon || 0} wygranych rund</div>`; // Dodano || 0, aby uniknąć undefined
  }).join("");

  document.getElementById("rankingContainer").innerHTML = rankingHTML;
}



function resetGame() {
  // Tutaj resetujesz stan gry, np. talie kart, liczniki wygranych itp.
  playerDeck = [];
  opponentDeck = [];
  currentPlayerCard = null;
  currentOpponentCard = null;
  playerWins = 0;
  opponentWins = 0;
  roundCount = 0;
  // Nie resetujemy monet, aby zachować postęp użytkownika
  document.getElementById("gameContainer").style.display = "block";
  document.getElementById("loginContainer").style.display = "none";
  // Ponownie wyświetl odpowiednie elementy UI
  displayLeagues(); // Przygotuj interfejs do wyboru ligi / gry
  showAchievements();
}

function compareStats(stat) {
  let statName = ""; // Nazwa statystyki dla wyświetlenia

  switch (stat) {
    case "overall":
      statName = "Ocena ogólna";
      break;
    case "attack":
      statName = "Atak";
      break;
    case "defense":
      statName = "Obrona";
      break;
  }

  if (!currentPlayerCard || !currentOpponentCard) {
    
    return;
  }

  let playerStatValue =
    currentPlayerCard[stat] +
    (stat === "attack" ? attackBooster : 0) +
    (stat === "defense" ? defenseBooster : 0);
  let opponentStatValue = currentOpponentCard[stat];
  let resultMessage;
  if (playerStatValue > opponentStatValue) {
    resultMessage = `Twoja karta ${currentPlayerCard.name} (Ocena: ${playerStatValue}) wygrywa pojedynek z kartą przeciwnika ${currentOpponentCard.name} (Ocena: ${opponentStatValue}) w kategorii ${statName}.`;
    playerWins++; // Zwiększamy licznik wygranych gracza
    coins += 10;
    playWinSound();
    userCoins[username] = coins; // Zaktualizuj saldo monet użytkownika
    localStorage.setItem("userCoins", JSON.stringify(userCoins)); // Dodajemy monety za wygraną rundę
    updateCoinsDisplay(); // Aktualizujemy wyświetlanie monet
    document.getElementById("attackBoosterButton").style.display = "block";
    document.getElementById("defenseBoosterButton").style.display = "block";

    // Aktywuj booster, jeśli gracz wygrywa
    if (stat === "attack") {
      attackBooster += 5; // Zwiększ atak o 5 jeśli wybrano atak
    } else if (stat === "defense") {
      defenseBooster += 5; // Zwiększ obronę o 5 jeśli wybrano obronę
    }
  } else if (playerStatValue < opponentStatValue) {
    resultMessage = `Twoja karta ${currentPlayerCard.name} (Ocena: ${playerStatValue}) przegrywa pojedynek z kartą przeciwnika ${currentOpponentCard.name} (Ocena: ${opponentStatValue}) w kategorii ${statName}.`;
    opponentWins++;

    // Resetuj boostery, jeśli gracz przegrywa
    attackBooster = 0;
    defenseBooster = 0;
  } else {
    resultMessage = `Pojedynek między twoją kartą ${currentPlayerCard.name} a kartą przeciwnika ${currentOpponentCard.name} zakończył się remisem w kategorii ${statName}.`;
  }
  document.getElementById("gameStatus").innerHTML = resultMessage;

  if (
    roundCount >= maxRounds ||
    playerDeck.length === 0 ||
    opponentDeck.length === 0
  ) {
    displayFinalResult();
    endGame(); // Wyświetlamy wynik końcowy po 9 rundach
  
  } else {
    document.getElementById("statsSelection").style.display = "none";
    document.getElementById("drawCardButton").style.display = "block";
  }
}
document.getElementById("showMyCardsButton").addEventListener("click", displayPurchasedCards);

function updateCoinsDisplay() {
  document.getElementById("coinsCount").textContent = coins.toString();
}


function applyAttackBooster() {
  attackBooster += 5; // Dodajemy 5 punktów do ataku
  updateGameStatus(); // Aktualizujemy status gry
  hideBoosterButtons(); // Ukrywamy przyciski boosterów
}

function applyDefenseBooster() {
  defenseBooster += 5; // Dodajemy 5 punktów do obrony
  updateGameStatus(); // Aktualizujemy status gry
  hideBoosterButtons(); // Ukrywamy przyciski boosterów
}

function hideBoosterButtons() {
  document.getElementById("attackBoosterButton").style.display = "none";
  document.getElementById("defenseBoosterButton").style.display = "none";
}

function updateGameStatus() {
  
}




function displayFinalResult() {
  let finalMessage = `Koniec gry - Liczba wygranych rund: Gracz ${playerWins}, Przeciwnik ${opponentWins}. `;
  if (playerWins > opponentWins) {
    finalMessage += "Wygrałeś!";
  } else if (playerWins < opponentWins) {
    finalMessage += "Przegrałeś.";
  } else {
    finalMessage += "Remis.";
  }

  document.getElementById("gameStatus").innerHTML = finalMessage;
  document.getElementById("statsSelection").style.display = "none"; 
  document.getElementById("drawCardButton").style.display = "none"; 
}

currentPlayerCard = playerDeck.shift(); // Gracz "rzuca" pierwszą kartę
currentOpponentCard = opponentDeck.shift(); // Przeciwnik "rzuca" pierwszą kartę


document.getElementById("statsSelection").style.display = "block";


function displayCards(league) {
  startGame(selectedLeague); 
}
