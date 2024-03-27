This Project Is built To understand the concepts of react and this is a revision of react concepts on daily basis

# Day-1

1. What is React :- React is a free and open source front-end js Library for building user interfaces based on components.

2. library vs frameWork :- library is a collection of packages that performs specific operations whereas framework contains the basic flow 
                           and architecture of an Application.

3. emmet

4. what  is CDN ?

5. React Element

6. Cors : cross origin resourse sharing .

7. Root Element

8. Why React is Known As React ? 

9. React vs ReactDOM 

10. diffrence b/w Async and differ

11. why should css be injected inside head and js in the bottom of the body ?

# Day 2

1. Bundlers:- it is a development tool that combines many j.s code files into a single one that is production ready loadable in the browser.

2. bundlers /parcel can do provide

-> Created a server.
-> HMR - hot module Replacement.
-> file watcher algorithm.
-> Bundling
-> Minify Code
-> cleaning our code
-> Dev and production Build.
-> super fast build algorithm.
-> compression.
-> compatible with older browser
-> https on dev
-> port no.
-> consistent hashing algorithm.
-> zero config.
-> Tree shaking.
-> add polyfills

3. what is Parcel/webpack ? why we need it?

  it is a type of web application bundler used for development and production purposes , it offers blazing fast performance utilizing multicore processing and requires zero config.

4. What is tree shaking?

  tree shaking is the process of removing unwanted code that we do not use while developing the application , in computing tree shaking is a dead code eliimination technique that is applied when optimising code.

5. H.M.R (Hot module replacement)
  
  adds or removes modules while an application is running without a full reload , this can significantly speed up the development in a few way : Retain application state which is lost during full reload. it uses file watcher algorith .

6. .parcel-cache 

7. dist

8. package , modules , packaage manager , package.Json , package.lock-Json 

9. Transitive dependency 
   
   a transitive dependency is one not imported directly into the project , but instead imported by direct dependecy or another transitive dependencty.  dependency can have more than 1 depth bcoz it can be dependent on  multiple components.

10. Browser-List :- 

    the browserList configuration controls the outputed js , so that the emitted code will be compatible with the browser specified , if you intend to use a E.S 6 feature make sure all browser specified supports it , otherwise you have to include Pollyfills manually React will not do it for you automatically.


# Day 3

1. Pollyfills :- a peice of code (usually js on the web) used to make older browser understand our new code , the new code is converted into 
                 older code which browser can understand called Pollyfill.

2. Babel :-  Babel is a toolchain that is mainly used to convert E.S 2015 code into backward compatible version of js in current and older
             browser or environment.

3. Reconciliation :- is a Reacts wayt of diffing the virtual Dom tree with the updated dom tree to determine the most efficient way to update
                     the real dom , this process allow react to apply only the necessary changes to the DOM , avoiding the costly operations for updating the entire dom tree.

4. why we use Keys in React ?

   when children have keys , react uses the key to match Children in the original tree with children in subsequent tree thus making tree
   conversion efficient. React keeps track of keys.

5. J.S.X ?

   jsx allows us to write html elements inside js & place them in dom without any createElement , jsx makes it easier to write and add html in React . our browser can't understand jsx Babel understood this code.

   J.S.X ===>  React.createElement() ====> Object ====>  Html (dom)

   jsx is created to empower react.
  
6. React Components 

   components let you split the ui into sevral indipendent , reusable peices & think about each peices in isolation.

   React functional components is normal js functions which returns some peice of react elements (here J.S.x)

   you can write any peice of js inside { }.

7. Component Composition 

   if we have to use components inside components it is known as component composition , it is like passing components into components.

# Day 4

1. React Fragments : <> </>

2. jsx can only have one parent

3. config driven U.I

   it is a technique that allows you to create user interfaces based on configuration files , such as JSON or typescript file that defines the layout and the content of the UI components , this can be useful for creating dynamic & customizabel UI's without hard coding them.

4. optional Chaining (?.)
   
   (?) operator access an objects property or calls a function , if the object accessed or function called using this operator is undefined or null the expression short circuits & evaluates to UNDEFINED instead of throwing error .

5. Props
  
   shorthand for properties 
   "passed props" means i am passing some data as properties into my functional component.

   restaurant = {restaurantList[3]} this means react wraps all these properties into a variable known as "props" i can call it anything.

6. virtual Dom :- it is a light weight copy of the actual dom ( a virtual representation of DOM) , so for every object that exist in the   
   original DOM there is an object for that in react virtual DOM it is exactly the same , but it does not have the power to directly change the layout of the browser.

   it is fast bcoz after manipulation it only re-renders changed elements


7. Reconciliation :- 
   
   the reconciliation process is a algorithm (diff algorith) react uses to diffrentiate one tree with another to determine which part needs to be changed.

8. Diff Algorithm :-

   a mathematical algorithm used to compare two versions of text-files or codebases & determine the diffrence between them.

9. why we have to use keys in react ?

  keys are special attribute that assists React in determining which items in a list of components have changed , been added or removed , React uses the key to keep track of each component identity when rendering a list of components & if the key is missing , React must  search through the entire list to determine which components has changed this can lead to performance issue & even unexpected bugs.

  **no key ==> not acceptable    index key ==> (only if you dont have anything unique)   unique key ==> good practise**

10. why should we won't use index as key ?

   performance issue due to unnecessary rerenders.

   issue in data mapping in case list items are sorted filtered or deleted.


11. React fiber 
   
   its a reconcilliation engine , which is responsible for diff algorith.


# Day 5

1. export , import , named export , named import 

2. 1 way data binding

   in react components are rendered to the user interface , & the components logic contain the data to be displayed in the view (U.I) the binding happens in one way either any changes in data automatically updated into ui but change in ui does not automatically update the data.

3. React Variable 
  
   its like a state variable.

   **Every components in react maintains a state so you can put some variable on to the state**

   **EveryTime you have to create a local variable , you use state in it**

   in React , if i want to create a local variable  , i will create using useState Hook

4. what is state in react ?

   the state is a built in react object that is used to contain data or information about components , a component's state can change over time  , whenever it changes the component re-renders , the change is state can happens as a response to user action or system-generated events & these changes determine the behaviour of the component & how it will render.


5. what is Hooks ?

   Hooks allows functional component to have access to state & other react features bcoz of this class components are generally no longer needed.

6. Hooks Rules ?

   hooks can only be called inside react functional components.
  
   hooks can only be called at the top level of components.

   hooks cannot be conditional.

   hooks will not work in react class components.

7. React useState Hook :-
 
   the react useState hooks allows us to track state in functional components.

   state generally refers to data or properties that need to be tracking in an application.

   **Syntax** :- const [ state , setState] = useState(0);

8. why do we need state variable if we have already local variable ?

   bcoz react has no idea whats happening to your local variable , so react won't re-render any updates happening on that variable , everytime the variable wants to be in sync with the ui for that we need to use state Variable.

   ***React keeps track of state Variable***

   whenever my variable is updated , my whole Body (here) components re-renders i.e react distroy the Body components & create it again Reconcilliation (diff algorithm ) is happening behind the scene .

   but it just re-renders the updated portion it is very quick.

 # Day 6 #

1. a monolithic standard means that all the components of the application were part of a single unit of code it has lot of problems.

2. a microservice - based architecture is one wheere the application is broken down into small & independent services which are than combined to become a large application , imagine multiple small application each with  only one service combined to make one large application.

3. how to make api call ?

   js gives us fetch() function.

4. where do we call api in our component ?

   on every state change or any time my ui is updated , this would get rerendered if we call api just after or before the useStae declaration , this is not sa good way.

5. Best way to call an api ?

   it should be like , as in when our component loaded it used to call an api $ fill the data , there is diffrent way to handle this in react :-

   -> **user loads the website ===> make an api call   ====> render page**

   -> **user loads the website ===> render the initial page ===> make an api call ===> update the ui**

   2nd way is the good way , all this will happen very quickly to make this happen , react gives us a hook : **UseEffect**

6. useEffect hook 

   the useEffect hooks allows you to perform side effect in your components , some examples of side effects are :-

    fetching data , directly updating dom & timers

    **syntax :- useEffect(callback functn , dependency array)**

    1. if there is no dependency arrray useEffect will call after every render

    2. if there is empty dependency array useEffect will call only once i.e after initial render.

    3. if there is any dependency array useEffect will call whenever the dependency will change.


7. Conditional Rendering

   1. in react , you can create distinct components that encapsulates behaviour you need , then you can render only some of them , depending
      on the state of your application.

   2. your component will often needs to display diffrent things depending on diffrent condn.

   3. in react , you can conditionally render jsx using js syntax like  if statement , && operator , ?: operator


8. Shimmer U.I

   shimmer ui is a better way to show loading states in your web or mobile app . it improves the user experience by providing visual feedback , reducing cognitive load , eliminating surprises , & enhancing asthetic appeal , it can be implemented using diffrent platforms & frameworks such as Flutter , microsoft fluent UI for shiny , or html & css.


# Day 7#

1. never create a component inside a component.

2. you can compose the components.

3. never write a useState inside if else or for loop.

4. useState is a hook that react gives us to create loacal state variable inside a functional component, so never use useState outside a functional component.

5. we can use more than 1 useEffect according to the useCases.

6. why cdn is a good place to host images ?

  C.D.N is faster it caches the image , it returns veryfast, & have 100% uptime. 

7. **ROUTING (createBrowserRouter , useRouterError , RouterProvider- Component )**

1. finding the path of diffrent pages of our app.

-> for that we uses a library or npm package called React Router.

-> to make it work we have to we first have to create a routing Configuration.

-> {createBrowserRouter} is a function we get from react router-dom it will help us create routing.

-> createBrowserRouter is the most recommended route for all React router projects.

-> this alone wont work we need to provide appRouter to our app.

-> for that there is a component RouterProvider which is coming from react router dom , import it.

-> and render the Router provider in your app.js

     root.render(<RouterProvider router = {appRouter} />)

-> react-router-dom is a powerful library which gives us better ui for showing us this error pages.

-> create an error page of your own "Error.js" & paas this error to our router config 

   {
      path: "/",
      element : <Applayout />,
      error element : <Error />
   }

-> if there is an error in the path , it will load the error element

-> to show more information about the error in the error page "react-router-dom" gives us {useRouterError} , import this in error.js

   import {useRouterError}  from "react-router-dom"

-> {useRouterError } is a hook which wont allow that red color error to came in console it catch all routing errors & we can show those 
   errors to the user.

const Error = () => {

   const err = useRouterError();

   return (

      <div>
         
         <h1> OOPs!!! something went wrong </h1>
         <h2> `
            
            {err.status + ":" + err.statusText}

          </h2>
      </div>
   );
};

8. Problem with anchor tag:-

  it will reload the entire page when it is clicked it disrupts user experience & can result in a slower page load time , this cause problems for Spas.

9. two types of routing :-

-> Server side rendering :-

   --- all our pages come from server.
   --- makes a network call , get the Html , css , js & loads the whole page.

-> Client side routing :-

   --- dynamically update content of spa in response to change in URL.
   --- dont do full page reload.

10. React router gives {Link}

   --- to keep Header && Footer stick on the every page change the routing config .
   --- react router gives access to OUTLET this OUTLET will be filled by the configuration so all children will go inside OUTLET according to
       the route.

11. Dynamic Routing :-

   -> process of rendering components in response to a change in the application's URL.

   -> if the route is like :-

      {
         path : "restaurant/:id",

         element : <Restaurant />
      }

   to read the "id" passed in URl "react router dom gives us {useParams} its the routing parameter"

12. **WHEN YOU WRITE YOUR CODE IN MODULAR FASHION THEN WE CAN REUSE IT A LOT.**


# Day 8 #

1. custom Hooks 

-> why should we build Hooks ?

   - Reusability.
   - Readability.
   - Seperation of concern.
   - Modularity.
   - Maintainability.

2. Hooks are just normal j.s function.

3. functions are used to wrap up a logic and can reuse it anywhere we want to.

4. Great place to keep re-usable functions :-

  - Make a folder utils  (its utility , helper , or common or whetever name).

  - inside create a file utils.js & write the function inside it and make it named export.

  - any no of helper function can be kept inside Utils.js

5. Advantages 

  - function become readable and usable.
  - this makes our code more testable because i can write seperate  testcases for this.
  - maintainable bcoz it is easy to debug.
  - Modularity means we have broken down code into small peices & every peices have its own responsibility.


6. Cleaning Cache

  - whenever eventrListner is added , we should clean it up.
  - [whenever you are going offline & getting back online eventListner is created, only once because we've empty dependency array]
  - it is always a good practise to clear the eventListner when we go out of the component otherwise browser will keep hold those.

7. _Problem :-_

  - for the whole code parcel creates only one .js file in this file, all the code is bundeled together  so the size of this index.js file 
    is large . but in production bundle, size of this file should be small.

  - there would be 100s 0f components in a large websiite , suppose if all these bundled together in a single index.js file . it will blast , 
    it will make our app very slow. so to build large scale production ready application we should do :-

    **Chunking** also called as :-

    - Code Splitting                             - on Demand Loading.
    - Dynamic Bundling                           - Dynamic import.
    - Lazy Loading

8. making a new diffrent bundle in our app.

   to do that import component like this 

    const Instamart = lazy (() => import ("./components/Instamart"))

    so now the "index.js" file in dist folder wont have code of instamart , it is created as seperate file while loading.

    "When you are loading your component in demand react tries to suspend it".


    so when instamart is loaded for the 1st time , we see an error message on screen.

    this is because , instamart file took 27ms to get loaded but react tries to render it before it get loaded , thats why error.

    _Solution for this_ 

    "Suspense" :- we can wrap instamart inside Suspense

    {

      path: "/instamart",
      element: (

         <Suspense>
             
             <Instamart />

         <Suspense>
      )

    }

React now know that when there is a suspense what will be loaded

in the intermediate time , a shimmer should be shown .

so there is is prop known as "fallback" so write :-

 <Suspense fallback = {<shimmer />}>

          <Instamart />
 </Suspense>