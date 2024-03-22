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
