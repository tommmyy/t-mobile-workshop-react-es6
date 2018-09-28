# Babel
Po každém z kroků pustíme `yarn build` a podíváme se na výstup v `lib`.

1. Přidáme `@babel/polyfill` do `src/index.js`
2. `@babel/polyfill` nahradíme `babel.config.js` - `useBuiltIns: 'usage'`
3. Do nastavení `babel-preset-env` přidáme `ie: 6`

# ES6

Než začneme:

- Checkoutněme větev `git checkout es6`
- Prohlédněte si `webpack.config.js`
- Pro vývoj následujících úkol§ spusťte `yarn start`

4. Refaktorujte kód v `src/index.js` do ES6+. Kód by měl obsahovat následující:
	- Zkrácenou syntaxy object literálu
	- Objekotovou destrukturalizaci
	- Template literály
	- Spread a rest operátory
5. Rozdělte soubor do více souborů pomocí ES6 modulů.