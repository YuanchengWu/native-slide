# iOS-like Native Page Slide

A React app that imitates the native animations of page transitions and
interactive element animations in iOS applications using
[`react-spring`](https://www.react-spring.dev/),
[`@use-gesture`](https://use-gesture.netlify.app/),
[`react-router-dom`](https://reactrouter.com/en/main), and
[`styled-components`](https://styled-components.com/).

Check out the Codesandbox preview [here](https://6fgxxh-3000.csb.app/)!

## Implementation

To make the page transition feel "iOS native", applying a springy transition
that responds to drag interactions help set it apart from the telltale signs of
standard web pages: instant transitions (or often not so instant as DOM elements
are constructed in front of your eyes). Native apps do not load and assemble
page elements on demand. Rather, components are not ephemeral and gives a sense
of persistence. To imitate that, all elements shown in this demo are already
loaded in the DOM, regardless of visibility.

The page transition effect is achieved using a combination of `@use-gesture` and
a single `useSpring` hook. The spring hook provides an API that is used to fire
open and close animations within their respective handlers. The hook also
provides `SpringValue`s for whatever the API modifies. Since the page transition
involves a `translateX` transform, I only needed the `x` `SpringValue`.

The `x` value enables the powerful interpolation feature where we can
essentially tie the page movement to animate everything related to it as the
user drags. This includes the following:

| Element      | Animation                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Lesson page  | Page slide at a quarter rate of History page <br/> Dimming effect to simulate depth using [linear interpolation](#linear-interpolation)      |
| Navbar       | History icon fading <br/> Chevron icon and title text sliding and fading                                                                     |
| History page | Main driver of all spring animations <br/> Dragging past half screen width or at a certain velocity (e.g., a fast swipe) triggers page close |

### Linear interpolation

Many "native-like" animations (e.g., dimming, navbar text and icons sliding and
fading) rely on
[linear interpolation functions](https://www.trysmudford.com/blog/linear-interpolation-functions/).
In this demo, I'm using `invlerp` and `range`. They depend on two other more
fundamental linear interpolation functions: `lerp` and `clamp`. This allow me to
interpolate the `x` position of the page drag to either a percentage of the
distance between 0 and screen width, or a number between any range I choose.

I use `range` to tie dragging to a brightness filter between 0.7 to 1, and
`invlerp` to control navbar element opacity.

### Other notable items

#### Routing

I went with the popular utility React Router to implement routing. Although I
got the intended routing behavior working, I could not do it in the intended
way. React Router mount and unmount components depending on the associated
route, which means as soon as the user navigates to the history page, the lesson
page unmounts and won't be visible during drag page transition. To get around
that, I simply declaritively called `navigate` to move to different paths.

Initially, I tried to tie the current location to a `useTransition` React Spring
hook. This method successfully animates the page transition, but animation only
plays after navigation and makes the drag effect impossible.

#### Navbar blur

iOS and other Apple software UI have an iconic semitransparent navigation bar
with a blur filter. I noticed that the navbar only shows this effect when the
page's scroll position is not at the top. So I implemented a simple scroll
listener that toggles the navbar's `backdrop-filter` CSS property (with the
addition of a border).

#### Interactive elements animation

Buttons, cards, nav items have activation states and animation.

#### Accessibility

I made a conscious effort to ensure good HTML semantics. This includes ensuring
each page has only one `h1`, each block of content is in a `section`, and card
elements are in an unordered list.

An unfortunate aspect that out of my control due to design is color contrast.
The grey section heading text and navbar icons over the grey background has a
contrast ratio of 2.87, and the subtitle text in cards against the white
background at 3.19. These not only limit accessibility to people with low
vision, but also to everyone under not so ideal lighting conditions (e.g.,
direct sunlight).

## References

- Animating route changes using `useTransition`:
  [Codesandbox](https://codesandbox.io/s/jp1wr1867w?file=/src/index.js)
- Drag page transitions:
  [Codesandbox](https://codesandbox.io/s/github/pmndrs/use-gesture/tree/main/demo/src/sandboxes/action-sheet?file=/src/App.jsx)
- [Linear interpolation functions](https://www.trysmudford.com/blog/linear-interpolation-functions/).
- Documentations linked at the top of this readme

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.
