You're given the task to create an online video game store that allows users to browse games and create orders.

### Task 1. Create `Game`s and their fields

#### 1.1 `Genre`
Create a class `Genre` which has a private property called `name` that gets set during initialization of the class. The class must have a getter which will allow getting the `Genre`'s name outside of the class.

#### 1.2. `Platform`
Create a class `Platform` which has a private property `name` and accepts only the following strings as its value: `PC`, `CONSOLE`, `ANDROID`, `IOS`. Attempts to set the `name` of a `Platform` instance should result in `Error`. `Platform` to have a getter that allows getting `name` outside of the class.

#### 1.3. `Game`
Create a class `Game` which accepts the following arguments in its constructor and sets them in private properties:
- `id` (integer, unique number for the game inside a `Store`)
- `title` (*string*)
- `platforms` (*array of `Platform`*)
- `genre` (*object of type `Genre`*)
- `inventory` (*integer*)

### Task 2. Create  `User`

Create a `User` class that has `name` & `email` private properties that get set during class' initialization. Create getters to get those fields.

### Task 3. Create `Store`

Create a class `Store` which has a private property `games` that gets set during the initialization of the class. `games` must accept only an array of `Game` objects (or an empty array). Attempts to setting `games` to any other data type should result in `Error`.

### Task 4. Create `Order`s

A new class called `Order` will be responsible for holding information for each order made in `Store`. Each order must have a `items` field (array) holding the ordered `Game`s objects & quantity and a property `user` holding the user that created the order.

Example structure of the `items` property:
```
[
	{
		gameId: Game.id,
		quantity: number,
	},
	{
		gameId: Game.id,
		quantity: number,
	},
	...
]
```

### Task 5. `User`'s can create `Order`s

Create a new field in `Store` called `orders` which will hold all current orders made by Users.

Create a new method in `Store`  called `newOrder` that accepts a `User` and an array with the structure mentioned above, which:
- checks if each game exists in the store
- checks if there's sufficient number of copies in stock
- creates an `Order` instance
- pushes that `Order` in `Store.orders`

> When creating an order don't forget to check how many copies were already sold by going through each existing order that is in `Store.orders` and checking what was the initial inventory of each  game during initialization of the `Store`.

```
const items = [{gameId: 1, quantity: 3, gameId: 2, quantity: 4}];

const store = new Store(games);
const user = new User("Ivanka", "ivanka@best-customer.eu");

store.newOrder(user, items);

console.log(store.orders); // must have the new `Order` inserted
```
