1. What problem does the context API help solve?

Context API is helpful when you have a deep tree of components that all need the same or similar pieces of data or functions. So instead of passing down props to all of these components, you can just provide from the parent level, down to the children and grandchildren.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Redux manages all of your app’s state in one place, the store. If you want to change a piece of state in the store, you need to send an action describing what it is you want to do. When the reducer(s) get that action, it will decide what to do, and return a new state object. The store is the single source of truth because you are not allowed to mutate the state, only create a new state object with the changes.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is referring to state managers like redux or context api. It is good to use when you need the same pieces of data in several different locations in your app. Component state is referring to useState hooks and the like. It is good to use when you need state locally like handling the input changes of a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that intercepts our action on the way to the reducer. It allows us to use async operations like axios calls so that it doesn’t prevent our application to update while the data is being fetched. Our action-creators with Redux-thunk are functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I actually really enjoy redux as a state management system because of how laid out everything is. Everything has a well-defined purpose and how each piece communicates with each other and your react component. However, I don’t think it makes sense to use all the time because of the time it takes to set up everything initially.
