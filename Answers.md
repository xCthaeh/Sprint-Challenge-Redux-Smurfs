1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array/Object methods that don't produce side-effects:
.map() 
.filter()
.reduce()

Method to create new object while extending properties of another:
Object.assign() 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions
- Javascript objects that store the action types and payload.

Reducers
- Receives state from the redux store along with the action.
- Lives in store, so it's easy for it to access the state.

Store
- Where we keep track of the state in our application. In Redux the data only flows in one direction, having it all in store allows us to keep track of the state in our application.  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The Application state is global, whereas the Component state is local. If application components need to share data, it is a good idea to put it in the Application state, whereas if the data is only needed by a certain component, component state would suffice.


1.  What is middleware?

Middleware interacts between the actions and the reducer.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that can delay dispatches until certain conditions are met. It can return action functions rather than action objects.


1.  Which `react-redux` method links up our `components` with our `redux store`?

The createStore method links up components with the redux-store.
