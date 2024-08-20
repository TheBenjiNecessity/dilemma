# App Flow

## Pages

### Opening screen

-   Title
-   Logo
-   button = Host game
    -   Takes user to create game page
-   button = Join game
    -   Takes user to join game screen

### Create Game "/host"

-   Title
-   Logo
-   label (room code)
    -   auto generated
    -   shows unique value of exactly four letters
-   table
    -   player name list
-   button = start

### Join Game "/join"

-   Title
-   Logo
-   label (room code)
    -   auto generated
    -   shows unique value of exactly four letters
-   textbox (roomcode)
-   textbox (username)
    -   must be unique (just in current room)
    -   cannot enter more than X chars
        -   show counter of remaining chars
    -   cannot enter chars other than letters
-   button (play)
    -   validations:
        -   check if roomcode exists
        -   check if username is unique to room code
        -   check if room is not already started
        -   check if room has space for another player
    -   callback
        -   if validations are good then send information to game and go to game waiting room

### Waiting room "/waiting"

-   Title
-   Logo
-   Label (roomcode)
-   Label (waiting)

### Game "/game"

-   dynamic content

## Flow

### Host a game

Opening page == (Click "Host") => Host Page == (Click start) => Host Game Screen

### Join a game

Opening page == (Click "Join") => Join Form Page == (Click submit) => Wait screen == (socket event host start) => Game Screen

# Game Ideas

### The Vote

### Highest Number

### Majority

### AB Auction

### Two Chests

### The Path (Press your luck)

### Same/Different dual

### Chest Dual
