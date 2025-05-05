To progress in this project, remember:

-   The rule of 3.
-   If you have no inspiration => go to a new page.

-   Lighthouse in DevTool is kinda incredible for page analytics.
-   Colorblindly is kinda incredible to test colorblind problem easily.

-   RUG over DRY
    // RUG: Repeat until Good => Write code and refactor it only when it become too painful.
    // => Don't try to make it perfect or use any "best practice" from the get go.

-   MMM => Make it Work ; Make it Right ; Make it Fast.

-   Folder Structure => Fuck arount til it feel right.

-   There are two type of problem I face daily, the "Shotgun Smell" and the "Bloated Smell"

-   High Cohesion / Low Coupling

    -   Coupling: Outside thing can be changed without too much of a consequence ?

    -   Couplign Example : Can I easily remove this part without having to change dozen of external ?

-   Great Master don't have the capability to comprehend compex thing, but to simplify them greatly

-   Simplicity > All

    -   Simplicity applied to code: Each part should only know what enter and what exit from it, not who or what is at the edge of both case.
        => You can have anything before and after as long as it respect the entry/exit format
        => In short: One good way to measure complexity is to ask yourself "can I change this module independantly from the others" ? / "Is it more pure or impure in general" => Independant + Predicable ? Immutability ?
        => "Do this part rely on what is before or after him ?"

-   Law of Locality

25/04/2025 - Frontend is simple:

1. Build your page with html using fake static data
2. Style it with css
3. Put reccurrent thing as a single component
4. Add logic to it with "semi-dynamic aka json" dummy data

### Example of Simplicity over Everything

#### Relying on other to do the work

Do these part rely on what is before or after them ?

No, the <"form"> doesn't rely on the <"section">, the <"section"> doesn't rely on the <"form"> and <"p">, and the <"p"> doesn't rely on the <"section">.

```html
<form>
    <section>
        <p>My superbe form !</p>
    </section>
</form>
```

Do these part rely on what is before or after them ?

No, because the button depend only on it's entry interface (onClick in this example) and not on what is passed through it's interface.

```html
<button onClick="{something}">My Button</button>
```

**Conclusion: Make Things...**

Too much decoupling is bad, but too little is as bad.

### Rule.1 - Write once to make it work. Write twice to make it good. Write thrice to make it fast.

---

My best practice in React for component:

-   Make a component per html markup used. Don't mix many distinct html markup in one component.
    For example, one "FormInput" containing many input attributes "input=text", "input=password" is fine.
    But "CustomSection" which regroup "article" and "section" is bad.

-   Have one CSS file per component category. And use BEM if necessary.

-   Dont Reinvent the Wheel: Each React component should encapsulate only one specific HTML markup.
    But It definitely, at the moment, can represent multiple logic or style associated with it.

    Je pense également que chaque balise HTML ne doit être représenter que par un seul composant de React.

-   Page should be "BrowseUsersPage" and the logic "BrowseUsersLogic" ?

---

First create multiple page with simple TSX.
Style them.
Then, after having 3 to 5 example of simple TSX, abstract them with your own component.

## If I fail this project:

If I fail this project it will be:

-   Because I overestimated my skills.
-   Because I overestimated it's size.
-   Because I wasn't methodic enough (having a development process I can follow).

### The method to save time

Quand je créer une page, la première chose à faire est de coder la partie static en HTML (voir JSX ou TSX).
Ensuite, c'est de créer d'autre page de la même manière, toujours sans style.
Enfin, c'est de les styliser.
Leur ajouter une logique comme Javascript le ferai, toujours sans composants.
Puis d'abstraire en composant ce qui ce répète très très souvent (3 à 4 fois, voir plus).

En d'autre terme:

1. Faire 70% à 80% du squelette du site.
2. Faire 70% à 80%, quitte à regrouper ensemble, du style du site.
3. Faire 70% à 80%, de la logique débutante voir intermédiaire, du site.
4. Abstraire en composants.

Aussie, je tie à rajouter qu'il vaut mieux faire du brute force plutôt que de l'abstraction.
C'est pourquoi, parfois la "Règle de 3" devrait être la "Règle de 5".

D'ailleurs, faire un carnet de progression ou je rajoute et barre, au fur et à mesure, les tâches à faire est très utile.
Chaque tâche peut être le sujet d'un commit.

Quand au commit, commentaires... avoir un format consistent et bien, mais il doit aussi être flexible.

Mes erreurs durant ce projet auront était:

1. Trop abstracter avant même d'avoir assez d'échantillon, de squelettes et de styles.
2. Passer trop de temps à réfactorer ce que j'avais abstrait.
3. Regrouper ensemble des choses qu'ils ne fallait pas (voir ce fichier ainsi que l'autre en entier).
4. Etre excessif dans mon implementation pour éliminer soit le "Shotgun" ou "Bloat" smell, au lieu de trouver un milieu.
5. Ne pas séparer distinctement les "modules" qui dépendent de ce qui est avant et après eux, de ceux indépendant.
6. Avoir une structure de fichier trop distincte les un des autres (ex: page visuel et logic d'une même fonctionnalité).
7. Avoir trop de fichier, temporaire ou non, alors que je pourrais regrouper beaucoup de chose sans perdre trop de modularité.
8. Essayer d'être trop modulaire.
9. Choisir "Simplicité > Facilité" au lieu de "Modularité > Fléxibilité"
10. Verticalité de code
11. Un code maintenable est un code où on peut facilement trouver et corriger un bug quand il apparait

---

Video: https://www.youtube.com/watch?v=G6D9cBaLViA

-   Component are about feature, not abstraction => most are just logic on top of tsx HTML => Excessive Abstraction is a sin just like any useless, or too granular, abstraction.
-   className are intertwined with HTML, not defined like variant
-   {{object}} are one of the best way to pass data
-   home page is named "Home" idiot
-   local [array] are one of the best way to create fake data
-   you should not hesitate to make your rendering dynamic from the get go (with fake data) => map() and key={}
-   export default is useful ?
-   controlled component are great
-   eventFunction responding can start by "handle" (e.g: onSubmit={handleSearchMovie})
-   generally one CSS style sheet per component ?
-   "services" folder and "api" (or name of a specific one you're using) to regroup them is generally good
-   you don't need "useEffect" to run a function, BUT, it's good practice to use it to specify when it should run instead of rerunning each time the component is rerendered, causing performance issue. => Tell your function when to run and rerun independantly from the, partially, component rerundering
-   have one state for "error" and "loading" seem to be a good idea
-   if "loading ? <p>loading</p> : <MovieCard>..."
-   if "error ? <p>error</p> : null"
-   create "context" folder for context is good advice
-   we can cumulate "useEffect" in the same component
-   an example of custom hook "useMovieContext" allow to pass value and function

I'm surprised at how much most of it's code is only HTML with the classic "className" attribute

Remember your job is to solve problem, not pass most of your time on visual and style issue.

---

Video: https://www.youtube.com/watch?v=dCLhUialKPQ

-   index.tsx => entry point of my app
-   app.tsx => main ui of my app
-   the props are not "props: SomethingProps" but mainly ({title, password})
-   useEffect[] and useEffect[something], the first one is to mount, the second is for update
-   export default

---

Video: https://www.youtube.com/watch?v=LOH1l-MP_9k

-   every hook:
    -   useState => simple state
    -   useReducer => switch case for normal state
    -   useEffect => inside component but trigger and run independantly / rerun based on specific circonstance
    -   useRef => same as useState, to remember, but without the rerender
    -   useContext => similar to "utils"

---

Video: https://www.youtube.com/watch?v=99qVIswb0uA&list=PLMlBXN-0cmRXeZnHL-QadjJAx112W06ad&index=26

-   Simple medium project to master fullstack
-   Breath to deapth
-   check what is reactQuery
