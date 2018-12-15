## To Run Project

```shell
 npm i && npm start
```

## Future Improvements

1. More tests: unit + integration (`Jest` + `Cypress`)
2. Can introduce Redux or Context API for cleaner implementation and less coupling in `<App>` component, for now `<Auth />` as a render props was used.
3. More general styling: seperate common padding / colors to a `<Theme />` in `styled-components`
4. Depending on the future scaling, put components like `<Button />` to shared folders - currently there is no need. Also, depending on the reusability of components, expose more props - more Render Props & HOC's.
5. Would like to use TS, but currently I'm more comfortable with plain `PropTypes` / `Flow`, thus `PropTypes` were used.
6. Depending on the need, convert this to a PWA
7. Drop Reactstrap and classes on top - only `styled-components`
8. Add loaders - better UX

404 was the most fun :)

## Possible Questions

1. Reactstrap + Bootstrap, because I wanted a fast responsive layout - didn't want to write all grids by hand today :)
2. Regarding structure - Fractal pattern,
   https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af?gi=3115137e263b , used in production - still happy about it :)
3. If you change the token in localStorage - you won't get a server list, you won't be kicked out. This can be debated, but for now, there isn't other functionality to see, in more strict situations you should be kicked out.
