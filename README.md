# Lodgify Grouped Tasks

This project is a task management application built with React, styled-components, and Framer Motion. It allows users to manage groups of tasks, marking individual tasks as completed and tracking overall progress.

## Components

### Page

The `Page` component is the main component where the task groups are fetched from the API and state is managed. It uses a React hook to fetch task groups upon component mounting and provides a function to handle task checking.

### TaskGroupList

`TaskGroupList` is the component that maps through the array of task groups and renders each one. It also displays the overall progress of task completion.

### TaskGroup

Each `TaskGroup` represents a group of tasks. It includes a header that can be clicked to collapse or expand the group, and a list of tasks represented by custom Checkbox components.

### Checkbox

`Checkbox` is a custom checkbox component that displays a custom SVG when the checkbox is checked.

## Libraries

### styled-components

`styled-components` is a CSS-in-JS library that is used to style the components in the application. It allows for the encapsulation of styles, providing a clean and organized way to style components.

### Framer Motion

`Framer Motion` is a library that provides a simple and easy way to implement animations in a React application. It is used in this project to animate the collapsing and expanding of task groups, as well as to animate the progress bar and the appearance of the custom SVG checkmark in the `Checkbox` component.

The library's `AnimatePresence` component is used to ensure that animations run correctly when a component mounts and unmounts. It is used in this project to animate the appearance and disappearance of the SVG checkmark in the `Checkbox` component, and to animate the "Show" and "Hide" text in the `TaskGroup` component.

## Running the project

This project was bootstrapped with [Vite](https://vitejs.dev/). To get it running locally, follow these steps:

1. **Clone the repository**

```shell
git clone https://github.com/muhammed/task-group-progress.git
```

2. **Install dependencies**

This project uses yarn for package management. To install all the necessary packages, run:

```shell
yarn
```

3. **Start the development server**

Vite includes a development server out of the box. To start the server, run:

```shell
yarn dev
```

## Conclusion

This project demonstrates how to build a task management application with custom UI components in React, using `styled-components` for styling and `Framer Motion` for animations.
