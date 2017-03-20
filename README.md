This is a minimal boilerplate I've put together to easily get started with [HyperApp](https://github.com/hyperapp/hyperapp). It uses [webpack](https://github.com/webpack/webpack) for building, and [Flow](https://github.com/facebook/flow) for type checking.

## Usage

1. Clone the repository to a folder of your choosing
2. Install dependencies: `npm install` or `yarn`
3. Run the dev server: `npm start` or `yarn start`
4. Build for production: `npm run build` or `yarn build`

## Why?

I'm a big fan of the [Elm architecture](https://guide.elm-lang.org/architecture/) and how well it's suited to structure applications. HyperApp is a fantastic library which enables you to work with this application structure in a simple, easy-to-learn way, using the language everyone knows and (sometimes) loves. The addition of Flow gives all of the benefits of static typing with a flexible but rigid type checker.

## Considerations

### Linting

My preferred linter is Standard, however the majority of JavaScript users seem to favor AirBnB and Google styles instead. To prevent any discrepancies, I've decided to let the user install whichever linting solution they please.

## Contributing

If you have any questions or suggestions to make this template a little better, feel free to make an issue or a pull request!
