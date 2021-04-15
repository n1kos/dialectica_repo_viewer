export interface ReposRequest {
  data: {
    search: {
      repos: RepoDataRequest[];
    };
  };
}

export interface RepoDataRequest {
  name: string;
  url: string;
  createdAt: string;
  description: string;
  forkCount: string;
  id: string;
}

export const RepoData = {
  data: {
    search: {
      repos: [
        {
          repo: {
            name: "next.js",
            url: "https://github.com/vercel/next.js",
            createdAt: "2016-10-05T23:32:51Z",
            description: "The React Framework",
            forkCount: 12027,
            id: "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng=="
          }
        },
        {
          repo: {
            name: "react-router",
            url: "https://github.com/ReactTraining/react-router",
            createdAt: "2014-05-16T22:22:51Z",
            description: "Declarative routing for React",
            forkCount: 8420,
            id: "MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng=="
          }
        },
        {
          repo: {
            name: "react-use",
            url: "https://github.com/streamich/react-use",
            createdAt: "2018-10-27T10:16:05Z",
            description: "React Hooks — 👍",
            forkCount: 1515,
            id: "MDEwOlJlcG9zaXRvcnkxNTQ5NTA5MjU="
          }
        },
        {
          repo: {
            name: "reactjs.org",
            url: "https://github.com/reactjs/reactjs.org",
            createdAt: "2017-10-06T03:16:04Z",
            description: "The React documentation website",
            forkCount: 5007,
            id: "MDEwOlJlcG9zaXRvcnkxMDU5NjMyNTM="
          }
        },
        {
          repo: {
            name: "react-redux-starter-kit",
            url: "https://github.com/davezuko/react-redux-starter-kit",
            createdAt: "2015-06-24T18:38:28Z",
            description: "Get started with React, Redux, and React-Router.",
            forkCount: 2345,
            id: "MDEwOlJlcG9zaXRvcnkzODAwMzkwMw=="
          }
        },
        {
          repo: {
            name: "React-For-Beginners-Starter-Files",
            url: "https://github.com/wesbos/React-For-Beginners-Starter-Files",
            createdAt: "2015-10-30T19:55:52Z",
            description:
              "Starter files for learning React.js with React for Beginners",
            forkCount: 2455,
            id: "MDEwOlJlcG9zaXRvcnk0NTI3MzU2Ng=="
          }
        },
        {
          repo: {
            name: "react-hook-form",
            url: "https://github.com/react-hook-form/react-hook-form",
            createdAt: "2019-03-05T23:47:10Z",
            description:
              "📋 React Hooks for forms validation (Web + React Native)",
            forkCount: 916,
            id: "MDEwOlJlcG9zaXRvcnkxNzQwMzgwMzE="
          }
        },
        {
          repo: {
            name: "react-redux",
            url: "https://github.com/reduxjs/react-redux",
            createdAt: "2015-07-11T17:32:01Z",
            description: "Official React bindings for Redux",
            forkCount: 3000,
            id: "MDEwOlJlcG9zaXRvcnkzODkzNDQ0OQ=="
          }
        },
        {
          repo: {
            name: "react-bootstrap",
            url: "https://github.com/react-bootstrap/react-bootstrap",
            createdAt: "2013-12-27T19:06:07Z",
            description: "Bootstrap components built with React",
            forkCount: 3083,
            id: "MDEwOlJlcG9zaXRvcnkxNTQ4MDA2Nw=="
          }
        },
        {
          repo: {
            name: "react-slick",
            url: "https://github.com/akiran/react-slick",
            createdAt: "2014-11-16T05:14:39Z",
            description: "React carousel component ",
            forkCount: 1845,
            id: "MDEwOlJlcG9zaXRvcnkyNjcwNDYzOQ=="
          }
        },
        {
          repo: {
            name: "react-native-calendars",
            url: "https://github.com/wix/react-native-calendars",
            createdAt: "2016-11-11T12:17:27Z",
            description: "React Native Calendar Components 🗓️ 📆 ",
            forkCount: 2095,
            id: "MDEwOlJlcG9zaXRvcnk3MzQ3NTI1Mg=="
          }
        },
        {
          repo: {
            name: "enzyme",
            url: "https://github.com/enzymejs/enzyme",
            createdAt: "2015-11-10T21:45:38Z",
            description: "JavaScript Testing utilities for React",
            forkCount: 2085,
            id: "MDEwOlJlcG9zaXRvcnk0NTk0MjI3NA=="
          }
        },
        {
          repo: {
            name: "react-native",
            url: "https://github.com/facebook/react-native",
            createdAt: "2015-01-09T18:10:16Z",
            description: "A framework for building native apps with React.",
            forkCount: 20697,
            id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ=="
          }
        },
        {
          repo: {
            name: "react-native-svg",
            url: "https://github.com/react-native-svg/react-native-svg",
            createdAt: "2016-01-17T14:29:21Z",
            description:
              "SVG library for React Native, React Native Web, and plain React web projects.",
            forkCount: 725,
            id: "MDEwOlJlcG9zaXRvcnk0OTgyMDYyNw=="
          }
        },
        {
          repo: {
            name: "ReduxCasts",
            url: "https://github.com/StephenGrider/ReduxCasts",
            createdAt: "2016-01-03T19:04:14Z",
            description: "Modern React with Redux",
            forkCount: 1790,
            id: "MDEwOlJlcG9zaXRvcnk0ODk1NzI2Mw=="
          }
        },
        {
          repo: {
            name: "react-dnd",
            url: "https://github.com/react-dnd/react-dnd",
            createdAt: "2014-10-19T13:29:28Z",
            description: "Drag and Drop for React",
            forkCount: 1636,
            id: "MDEwOlJlcG9zaXRvcnkyNTQyNzgxNw=="
          }
        },
        {
          repo: {
            name: "react-native-elements",
            url:
              "https://github.com/react-native-elements/react-native-elements",
            createdAt: "2016-09-08T14:21:41Z",
            description: "Cross-Platform React Native UI Toolkit",
            forkCount: 4158,
            id: "MDEwOlJlcG9zaXRvcnk2NzcwOTgwOA=="
          }
        },
        {
          repo: {
            name: "lottie-react-native",
            url: "https://github.com/lottie-react-native/lottie-react-native",
            createdAt: "2017-01-27T18:24:50Z",
            description: "Lottie wrapper for React Native.",
            forkCount: 1521,
            id: "MDEwOlJlcG9zaXRvcnk4MDIzMzgxNg=="
          }
        },
        {
          repo: {
            name: "react-select",
            url: "https://github.com/JedWatson/react-select",
            createdAt: "2014-08-26T04:27:45Z",
            description: "The Select Component for React.js",
            forkCount: 3683,
            id: "MDEwOlJlcG9zaXRvcnkyMzMzODcxNg=="
          }
        },
        {
          repo: {
            name: "react-redux-universal-hot-example",
            url: "https://github.com/erikras/react-redux-universal-hot-example",
            createdAt: "2015-06-23T16:39:21Z",
            description:
              "A starter boilerplate for a universal webapp using express, react, redux, webpack, and react-transform",
            forkCount: 2617,
            id: "MDEwOlJlcG9zaXRvcnkzNzkzMTMwMQ=="
          }
        },
        {
          repo: {
            name: "slider",
            url: "https://github.com/react-component/slider",
            createdAt: "2015-04-19T07:30:44Z",
            description: "React Slider",
            forkCount: 604,
            id: "MDEwOlJlcG9zaXRvcnkzNDE5NzQ2MQ=="
          }
        },
        {
          repo: {
            name: "react-native-maps",
            url: "https://github.com/react-native-maps/react-native-maps",
            createdAt: "2015-12-29T19:54:20Z",
            description: "React Native Mapview component for iOS + Android",
            forkCount: 4140,
            id: "MDEwOlJlcG9zaXRvcnk0ODc2NDY1Mg=="
          }
        },
        {
          repo: {
            name: "react-draggable",
            url: "https://github.com/react-grid-layout/react-draggable",
            createdAt: "2014-07-24T22:32:16Z",
            description: "React draggable component",
            forkCount: 831,
            id: "MDEwOlJlcG9zaXRvcnkyMjIzNDQ1NQ=="
          }
        },
        {
          repo: {
            name: "react-tutorial",
            url: "https://github.com/reactjs/react-tutorial",
            createdAt: "2014-06-30T04:42:12Z",
            description: "Code from the React tutorial.",
            forkCount: 2237,
            id: "MDEwOlJlcG9zaXRvcnkyMTMzOTc2OA=="
          }
        },
        {
          repo: {
            name: "Semantic-UI-React",
            url: "https://github.com/Semantic-Org/Semantic-UI-React",
            createdAt: "2015-06-19T16:47:19Z",
            description: "The official Semantic-UI-React integration",
            forkCount: 3595,
            id: "MDEwOlJlcG9zaXRvcnkzNzczNDIyNg=="
          }
        },
        {
          repo: {
            name: "ant-design",
            url: "https://github.com/ant-design/ant-design",
            createdAt: "2015-04-24T15:37:24Z",
            description: "🌈  A UI Design Language and React UI library",
            forkCount: 27499,
            id: "MDEwOlJlcG9zaXRvcnkzNDUyNjg4NA=="
          }
        },
        {
          repo: {
            name: "hooks",
            url: "https://github.com/alibaba/hooks",
            createdAt: "2019-06-27T05:20:06Z",
            description: "React Hooks Library",
            forkCount: 770,
            id: "MDEwOlJlcG9zaXRvcnkxOTQwMjc1Nzg="
          }
        },
        {
          repo: {
            name: "reactstrap",
            url: "https://github.com/reactstrap/reactstrap",
            createdAt: "2016-02-19T08:01:36Z",
            description: "Simple React Bootstrap 4 components",
            forkCount: 1203,
            id: "MDEwOlJlcG9zaXRvcnk1MjA3MTQ3MQ=="
          }
        },
        {
          repo: {
            name: "react-native-webview",
            url: "https://github.com/react-native-webview/react-native-webview",
            createdAt: "2018-09-09T00:14:44Z",
            description: "React Native Cross-Platform WebView",
            forkCount: 1802,
            id: "MDEwOlJlcG9zaXRvcnkxNDc5Nzk1NDk="
          }
        },
        {
          repo: {
            name: "awesome-react-components",
            url: "https://github.com/brillout/awesome-react-components",
            createdAt: "2016-06-24T15:19:33Z",
            description: "Curated List of React Components & Libraries.",
            forkCount: 2176,
            id: "MDEwOlJlcG9zaXRvcnk2MTg5MzM5OQ=="
          }
        },
        {
          repo: {
            name: "formik",
            url: "https://github.com/formium/formik",
            createdAt: "2017-06-14T19:50:59Z",
            description: "Build forms in React, without the tears 😭 ",
            forkCount: 2176,
            id: "MDEwOlJlcG9zaXRvcnk5NDM2NzY3Nw=="
          }
        },
        {
          repo: {
            name: "gatsby",
            url: "https://github.com/gatsbyjs/gatsby",
            createdAt: "2015-05-21T22:43:05Z",
            description:
              "Build blazing fast, modern apps and websites with React",
            forkCount: 9467,
            id: "MDEwOlJlcG9zaXRvcnkzNjA0MDg5NA=="
          }
        },
        {
          repo: {
            name: "WatermelonDB",
            url: "https://github.com/Nozbe/WatermelonDB",
            createdAt: "2018-08-28T15:32:05Z",
            description:
              "🍉 Reactive & asynchronous database for powerful React and React Native apps ⚡️",
            forkCount: 414,
            id: "MDEwOlJlcG9zaXRvcnkxNDY0Njg4Mjk="
          }
        },
        {
          repo: {
            name: "draft-js",
            url: "https://github.com/facebook/draft-js",
            createdAt: "2016-02-19T20:18:26Z",
            description: "A React framework for building text editors.",
            forkCount: 2332,
            id: "MDEwOlJlcG9zaXRvcnk1MjExMzkyMQ=="
          }
        },
        {
          repo: {
            name: "react-markdown",
            url: "https://github.com/remarkjs/react-markdown",
            createdAt: "2015-05-18T23:59:17Z",
            description: "Markdown component for React",
            forkCount: 597,
            id: "MDEwOlJlcG9zaXRvcnkzNTg0ODg5Nw=="
          }
        },
        {
          repo: {
            name: "react-native-code-push",
            url: "https://github.com/microsoft/react-native-code-push",
            createdAt: "2015-06-02T17:19:20Z",
            description: "React Native module for CodePush",
            forkCount: 1160,
            id: "MDEwOlJlcG9zaXRvcnkzNjc0OTE1Mw=="
          }
        },
        {
          repo: {
            name: "react-sketchapp",
            url: "https://github.com/airbnb/react-sketchapp",
            createdAt: "2017-04-21T18:27:39Z",
            description: "render React components to Sketch ⚛️💎",
            forkCount: 858,
            id: "MDEwOlJlcG9zaXRvcnk4OTAxMjQyNw=="
          }
        },
        {
          repo: {
            name: "calendar",
            url: "https://github.com/react-component/calendar",
            createdAt: "2014-12-10T03:10:20Z",
            description: "React Calendar",
            forkCount: 491,
            id: "MDEwOlJlcG9zaXRvcnkyNzc5OTg2Nw=="
          }
        },
        {
          repo: {
            name: "react-elm",
            url: "https://github.com/liuyangjike/react-elm",
            createdAt: "2018-10-20T06:56:19Z",
            description: "a react-elm by react && react-redux",
            forkCount: 183,
            id: "MDEwOlJlcG9zaXRvcnkxNTM4NzgzNDA="
          }
        },
        {
          repo: {
            name: "react-fiber-architecture",
            url: "https://github.com/acdlite/react-fiber-architecture",
            createdAt: "2016-07-19T01:15:34Z",
            description:
              "A description of React's new core algorithm, React Fiber",
            forkCount: 329,
            id: "MDEwOlJlcG9zaXRvcnk2MzY0ODUzMw=="
          }
        },
        {
          repo: {
            name: "awesome-react-hooks",
            url: "https://github.com/rehooks/awesome-react-hooks",
            createdAt: "2018-10-25T21:31:44Z",
            description: "Awesome React Hooks",
            forkCount: 534,
            id: "MDEwOlJlcG9zaXRvcnkxNTQ3NDAzMDM="
          }
        },
        {
          repo: {
            name: "react-starter-kit",
            url: "https://github.com/kriasoft/react-starter-kit",
            createdAt: "2014-04-16T13:08:18Z",
            description:
              "React Starter Kit — isomorphic web app boilerplate (Node.js, Express, GraphQL, React.js, Babel, PostCSS, Webpack, Browsersync)",
            forkCount: 4052,
            id: "MDEwOlJlcG9zaXRvcnkxODg0MDAwMw=="
          }
        },
        {
          repo: {
            name: "react-admin",
            url: "https://github.com/yezihaohao/react-admin",
            createdAt: "2017-04-12T02:50:56Z",
            description:
              ":sparkles: react-admin system solution : react 后台管理系统解决方案",
            forkCount: 1630,
            id: "MDEwOlJlcG9zaXRvcnk4ODAwMjY0NQ=="
          }
        },
        {
          repo: {
            name: "react-native-swiper",
            url: "https://github.com/leecade/react-native-swiper",
            createdAt: "2015-04-20T15:22:55Z",
            description: "The best Swiper component for React Native.",
            forkCount: 2250,
            id: "MDEwOlJlcG9zaXRvcnkzNDI2ODQ5Ng=="
          }
        },
        {
          repo: {
            name: "react-developer-roadmap",
            url: "https://github.com/adam-golab/react-developer-roadmap",
            createdAt: "2018-06-16T13:40:50Z",
            description: "Roadmap to becoming a React developer",
            forkCount: 1715,
            id: "MDEwOlJlcG9zaXRvcnkxMzc1ODM0MzU="
          }
        },
        {
          repo: {
            name: "material-components-web-react",
            url:
              "https://github.com/material-components/material-components-web-react",
            createdAt: "2018-03-06T19:42:24Z",
            description: "Material Components for React (MDC React)",
            forkCount: 227,
            id: "MDEwOlJlcG9zaXRvcnkxMjQxMjk0MzA="
          }
        },
        {
          repo: {
            name: "react-native-router-flux",
            url: "https://github.com/aksonov/react-native-router-flux",
            createdAt: "2015-08-25T11:12:44Z",
            description: "The first declarative React Native router",
            forkCount: 2164,
            id: "MDEwOlJlcG9zaXRvcnk0MTM1OTA1NQ=="
          }
        },
        {
          repo: {
            name: "react-native-notifications",
            url: "https://github.com/wix/react-native-notifications",
            createdAt: "2016-04-06T13:17:44Z",
            description: "React Native Notifications",
            forkCount: 633,
            id: "MDEwOlJlcG9zaXRvcnk1NTYwNzUwNA=="
          }
        },
        {
          repo: {
            name: "awesome-react",
            url: "https://github.com/enaqx/awesome-react",
            createdAt: "2014-08-06T05:31:44Z",
            description:
              "A collection of awesome things regarding React ecosystem",
            forkCount: 5194,
            id: "MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw=="
          }
        },
        {
          repo: {
            name: "eslint-plugin-react",
            url: "https://github.com/yannickcr/eslint-plugin-react",
            createdAt: "2014-12-15T23:44:14Z",
            description: "React specific linting rules for ESLint",
            forkCount: 2068,
            id: "MDEwOlJlcG9zaXRvcnkyODA2MTY3Ng=="
          }
        },
        {
          repo: {
            name: "react-pdf",
            url: "https://github.com/diegomura/react-pdf",
            createdAt: "2016-10-18T21:33:58Z",
            description: "📄  Create PDF files using React",
            forkCount: 658,
            id: "MDEwOlJlcG9zaXRvcnk3MTI5MzMyMQ=="
          }
        },
        {
          repo: {
            name: "nuka-carousel",
            url: "https://github.com/FormidableLabs/nuka-carousel",
            createdAt: "2015-04-20T19:52:07Z",
            description: "Pure React Carousel Component",
            forkCount: 587,
            id: "MDEwOlJlcG9zaXRvcnkzNDI4Mjc1OQ=="
          }
        },
        {
          repo: {
            name: "mdx-deck",
            url: "https://github.com/jxnblk/mdx-deck",
            createdAt: "2018-07-28T22:36:10Z",
            description: "♠️ React MDX-based presentation decks",
            forkCount: 608,
            id: "MDEwOlJlcG9zaXRvcnkxNDI3MTQ1MTI="
          }
        },
        {
          repo: {
            name: "react-native-video",
            url: "https://github.com/react-native-video/react-native-video",
            createdAt: "2015-03-31T05:08:38Z",
            description: "A <Video /> component for react-native",
            forkCount: 2070,
            id: "MDEwOlJlcG9zaXRvcnkzMzE2NjA0MQ=="
          }
        },
        {
          repo: {
            name: "react-game-kit",
            url: "https://github.com/FormidableLabs/react-game-kit",
            createdAt: "2016-09-15T07:46:01Z",
            description:
              "Component library for making games with React  & React Native",
            forkCount: 307,
            id: "MDEwOlJlcG9zaXRvcnk2ODI3NTY3NQ=="
          }
        },
        {
          repo: {
            name: "react-ace",
            url: "https://github.com/securingsincity/react-ace",
            createdAt: "2014-11-29T05:15:14Z",
            description: "React Ace Component",
            forkCount: 516,
            id: "MDEwOlJlcG9zaXRvcnkyNzI5MjE0MQ=="
          }
        },
        {
          repo: {
            name: "react-toastify",
            url: "https://github.com/fkhadra/react-toastify",
            createdAt: "2016-11-08T12:32:52Z",
            description: "React notification made easy 🚀 !",
            forkCount: 360,
            id: "MDEwOlJlcG9zaXRvcnk3MzE4NDEzOQ=="
          }
        },
        {
          repo: {
            name: "umi",
            url: "https://github.com/umijs/umi",
            createdAt: "2017-11-22T10:09:36Z",
            description:
              "🌋 Pluggable enterprise-level react application framework.",
            forkCount: 1609,
            id: "MDEwOlJlcG9zaXRvcnkxMTE2Njc5NTk="
          }
        },
        {
          repo: {
            name: "react-custom-scrollbars",
            url: "https://github.com/malte-wessel/react-custom-scrollbars",
            createdAt: "2015-08-07T11:53:56Z",
            description: "React scrollbars component",
            forkCount: 518,
            id: "MDEwOlJlcG9zaXRvcnk0MDM1ODA0OQ=="
          }
        },
        {
          repo: {
            name: "react-weui",
            url: "https://github.com/weui/react-weui",
            createdAt: "2015-10-12T06:10:32Z",
            description: "weui for react",
            forkCount: 509,
            id: "MDEwOlJlcG9zaXRvcnk0NDA4NzQyOA=="
          }
        },
        {
          repo: {
            name: "react-hooks",
            url: "https://github.com/kentcdodds/react-hooks",
            createdAt: "2019-04-15T22:42:08Z",
            description: "Learn React Hooks! 🎣 ⚛",
            forkCount: 629,
            id: "MDEwOlJlcG9zaXRvcnkxODE1NzU3ODU="
          }
        },
        {
          repo: {
            name: "react-ga",
            url: "https://github.com/react-ga/react-ga",
            createdAt: "2015-03-27T11:09:25Z",
            description: "React Google Analytics Module",
            forkCount: 403,
            id: "MDEwOlJlcG9zaXRvcnkzMjk4MTc4NA=="
          }
        },
        {
          repo: {
            name: "reactotron",
            url: "https://github.com/infinitered/reactotron",
            createdAt: "2016-04-15T21:58:32Z",
            description:
              "A desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.",
            forkCount: 807,
            id: "MDEwOlJlcG9zaXRvcnk1NjM1MjE1Nw=="
          }
        },
        {
          repo: {
            name: "deco-ide",
            url: "https://github.com/decosoftware/deco-ide",
            createdAt: "2016-05-19T21:29:00Z",
            description: "The React Native IDE",
            forkCount: 344,
            id: "MDEwOlJlcG9zaXRvcnk1OTI0Mzk3Ng=="
          }
        },
        {
          repo: {
            name: "react-demos",
            url: "https://github.com/ruanyf/react-demos",
            createdAt: "2015-03-23T10:50:07Z",
            description: "a collection of simple demos of React.js",
            forkCount: 6399,
            id: "MDEwOlJlcG9zaXRvcnkzMjcyNjM3Nw=="
          }
        },
        {
          repo: {
            name: "table",
            url: "https://github.com/react-component/table",
            createdAt: "2014-12-04T10:17:17Z",
            description: "React Table",
            forkCount: 380,
            id: "MDEwOlJlcG9zaXRvcnkyNzUzNDkzNQ=="
          }
        },
        {
          repo: {
            name: "react-native-website",
            url: "https://github.com/facebook/react-native-website",
            createdAt: "2017-10-31T22:34:42Z",
            description: "The site and docs for React Native",
            forkCount: 3388,
            id: "MDEwOlJlcG9zaXRvcnkxMDkwNTkzMDQ="
          }
        },
        {
          repo: {
            name: "mobx-react",
            url: "https://github.com/mobxjs/mobx-react",
            createdAt: "2015-08-28T11:09:05Z",
            description: "React bindings for MobX",
            forkCount: 372,
            id: "MDEwOlJlcG9zaXRvcnk0MTU0MzEzMw=="
          }
        },
        {
          repo: {
            name: "react-leaflet",
            url: "https://github.com/PaulLeCam/react-leaflet",
            createdAt: "2014-08-03T09:16:09Z",
            description: "React components for Leaflet maps",
            forkCount: 770,
            id: "MDEwOlJlcG9zaXRvcnkyMjU3MTc5Ng=="
          }
        },
        {
          repo: {
            name: "coreui-free-react-admin-template",
            url: "https://github.com/coreui/coreui-free-react-admin-template",
            createdAt: "2017-08-15T09:28:59Z",
            description:
              "CoreUI React is free React admin template based on Bootstrap 4 ",
            forkCount: 1378,
            id: "MDEwOlJlcG9zaXRvcnkxMDAzNjE3NTQ="
          }
        },
        {
          repo: {
            name: "react-native-push-notification",
            url: "https://github.com/zo0r/react-native-push-notification",
            createdAt: "2015-12-14T19:53:36Z",
            description: "React Native Local and Remote Notifications",
            forkCount: 1731,
            id: "MDEwOlJlcG9zaXRvcnk0Nzk5Nzc1Mw=="
          }
        },
        {
          repo: {
            name: "react-native-blur",
            url: "https://github.com/Kureev/react-native-blur",
            createdAt: "2015-04-09T21:49:16Z",
            description: "React Native Blur component",
            forkCount: 418,
            id: "MDEwOlJlcG9zaXRvcnkzMzY5NDUzMQ=="
          }
        },
        {
          repo: {
            name: "react-scroll",
            url: "https://github.com/fisshy/react-scroll",
            createdAt: "2015-02-27T18:56:28Z",
            description: "React scroll component",
            forkCount: 395,
            id: "MDEwOlJlcG9zaXRvcnkzMTQzNDIyMA=="
          }
        },
        {
          repo: {
            name: "mattermost-server",
            url: "https://github.com/mattermost/mattermost-server",
            createdAt: "2015-06-15T06:50:02Z",
            description:
              "Open source Slack-alternative in Golang and React - Mattermost",
            forkCount: 4875,
            id: "MDEwOlJlcG9zaXRvcnkzNzQ0ODQ1MQ=="
          }
        },
        {
          repo: {
            name: "skillcrucial-react-redux-boilerplate",
            url:
              "https://github.com/ovasylenko/skillcrucial-react-redux-boilerplate",
            createdAt: "2019-09-28T14:46:08Z",
            description: "React",
            forkCount: 449,
            id: "MDEwOlJlcG9zaXRvcnkyMTE1MTUyNzU="
          }
        },
        {
          repo: {
            name: "react-chartjs-2",
            url: "https://github.com/reactchartjs/react-chartjs-2",
            createdAt: "2016-05-06T22:01:08Z",
            description: "React wrapper for Chart.js",
            forkCount: 689,
            id: "MDEwOlJlcG9zaXRvcnk1ODIzNzE2Nw=="
          }
        },
        {
          repo: {
            name: "react-native-elements-app",
            url:
              "https://github.com/react-native-elements/react-native-elements-app",
            createdAt: "2016-09-04T22:44:08Z",
            description:
              "Demo app for React Native Elements (w/ React Native Web)",
            forkCount: 404,
            id: "MDEwOlJlcG9zaXRvcnk2NzM3MTk4MQ=="
          }
        },
        {
          repo: {
            name: "react-router-bootstrap",
            url: "https://github.com/react-bootstrap/react-router-bootstrap",
            createdAt: "2014-08-05T11:56:46Z",
            description: "Integration between React Router and React-Bootstrap",
            forkCount: 157,
            id: "MDEwOlJlcG9zaXRvcnkyMjY0MTc0NQ=="
          }
        },
        {
          repo: {
            name: "30-days-of-react-native",
            url: "https://github.com/fangwei716/30-days-of-react-native",
            createdAt: "2016-03-04T23:33:03Z",
            description: "30 days of React Native demos",
            forkCount: 1448,
            id: "MDEwOlJlcG9zaXRvcnk1MzE3MjI5Mg=="
          }
        },
        {
          repo: {
            name: "react-tooltip",
            url: "https://github.com/wwayne/react-tooltip",
            createdAt: "2015-04-07T13:15:04Z",
            description: "react tooltip component",
            forkCount: 423,
            id: "MDEwOlJlcG9zaXRvcnkzMzU0NDA1MQ=="
          }
        },
        {
          repo: {
            name: "react-spring",
            url: "https://github.com/pmndrs/react-spring",
            createdAt: "2018-03-07T15:39:32Z",
            description: "✌️ A spring physics based React animation library",
            forkCount: 839,
            id: "MDEwOlJlcG9zaXRvcnkxMjQyNTcyMzM="
          }
        },
        {
          repo: {
            name: "react-native-drawer",
            url: "https://github.com/root-two/react-native-drawer",
            createdAt: "2015-04-12T00:34:59Z",
            description: "React Native Drawer",
            forkCount: 401,
            id: "MDEwOlJlcG9zaXRvcnkzMzc5NzcwMA=="
          }
        },
        {
          repo: {
            name: "react-quill",
            url: "https://github.com/zenoamaro/react-quill",
            createdAt: "2014-11-07T12:25:40Z",
            description: "A Quill component for React.",
            forkCount: 618,
            id: "MDEwOlJlcG9zaXRvcnkyNjMxODczMA=="
          }
        },
        {
          repo: {
            name: "tree",
            url: "https://github.com/react-component/tree",
            createdAt: "2015-04-07T08:58:50Z",
            description: "React Tree",
            forkCount: 311,
            id: "MDEwOlJlcG9zaXRvcnkzMzUzMjcyMQ=="
          }
        },
        {
          repo: {
            name: "react-native-paper",
            url: "https://github.com/callstack/react-native-paper",
            createdAt: "2016-10-19T05:56:53Z",
            description: "Material Design for React Native (Android & iOS)",
            forkCount: 1233,
            id: "MDEwOlJlcG9zaXRvcnk3MTMyMzc0OQ=="
          }
        },
        {
          repo: {
            name: "awesome-react-native",
            url: "https://github.com/jondot/awesome-react-native",
            createdAt: "2015-03-26T19:58:06Z",
            description:
              "Awesome React Native components, news, tools, and learning material!",
            forkCount: 3630,
            id: "MDEwOlJlcG9zaXRvcnkzMjk0ODg2Mw=="
          }
        },
        {
          repo: {
            name: "react-navigation",
            url: "https://github.com/react-navigation/react-navigation",
            createdAt: "2017-01-26T19:51:40Z",
            description: "Routing and navigation for your React Native apps",
            forkCount: 4231,
            id: "MDEwOlJlcG9zaXRvcnk4MDE0OTI2Mg=="
          }
        },
        {
          repo: {
            name: "fullstack-graphql-airbnb-clone",
            url: "https://github.com/benawad/fullstack-graphql-airbnb-clone",
            createdAt: "2018-06-11T12:33:46Z",
            description:
              "A Fullstack GraphQL Airbnb Clone with React and React Native",
            forkCount: 371,
            id: "MDEwOlJlcG9zaXRvcnkxMzY5MjM4MTM="
          }
        },
        {
          repo: {
            name: "react-reduction",
            url: "https://github.com/reduction-admin/react-reduction",
            createdAt: "2018-03-12T12:17:16Z",
            description:
              "React Reduction - Free Admin Template Built with React and Bootstrap4",
            forkCount: 382,
            id: "MDEwOlJlcG9zaXRvcnkxMjQ4ODQzNjE="
          }
        },
        {
          repo: {
            name: "react-trello-board",
            url: "https://github.com/web-pal/react-trello-board",
            createdAt: "2016-07-12T11:19:22Z",
            description: "Trello like board based on React, Redux, React-dnd",
            forkCount: 326,
            id: "MDEwOlJlcG9zaXRvcnk2MzE1MTkzMA=="
          }
        },
        {
          repo: {
            name: "rsuite",
            url: "https://github.com/rsuite/rsuite",
            createdAt: "2016-06-06T02:27:46Z",
            description: "🧱 A suite of React components .",
            forkCount: 520,
            id: "MDEwOlJlcG9zaXRvcnk2MDQ5Mjc2OQ=="
          }
        },
        {
          repo: {
            name: "react-native-contacts",
            url: "https://github.com/morenoh149/react-native-contacts",
            createdAt: "2015-10-16T06:35:30Z",
            description: "React Native Contacts",
            forkCount: 497,
            id: "MDEwOlJlcG9zaXRvcnk0NDM2Njg0Mg=="
          }
        },
        {
          repo: {
            name: "ice",
            url: "https://github.com/alibaba/ice",
            createdAt: "2016-11-03T06:59:15Z",
            description:
              "🚀 The Progressive Framework Based On React（基于 React 的渐进式研发框架）https://ice.work/ ",
            forkCount: 1929,
            id: "MDEwOlJlcG9zaXRvcnk3MjcxNzU2Mg=="
          }
        },
        {
          repo: {
            name: "react-tetris",
            url: "https://github.com/chvin/react-tetris",
            createdAt: "2016-12-20T12:26:11Z",
            description: "Use React, Redux, Immutable to code Tetris. 🎮",
            forkCount: 1284,
            id: "MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA=="
          }
        },
        {
          repo: {
            name: "react-native-debugger",
            url: "https://github.com/jhen0409/react-native-debugger",
            createdAt: "2016-05-29T22:40:01Z",
            description:
              "The standalone app based on official debugger of React Native, and includes React Inspector / Redux DevTools",
            forkCount: 695,
            id: "MDEwOlJlcG9zaXRvcnk1OTk2NjkwMQ=="
          }
        },
        {
          repo: {
            name: "react-canvas",
            url: "https://github.com/Flipboard/react-canvas",
            createdAt: "2015-02-05T23:46:30Z",
            description:
              "High performance <canvas> rendering for React components",
            forkCount: 957,
            id: "MDEwOlJlcG9zaXRvcnkzMDM4NDg0NA=="
          }
        },
        {
          repo: {
            name: "calculator",
            url: "https://github.com/ahfarmer/calculator",
            createdAt: "2016-10-13T19:33:35Z",
            description: "Simple calculator built with React",
            forkCount: 1120,
            id: "MDEwOlJlcG9zaXRvcnk3MDg0MTA3NQ=="
          }
        },
        {
          repo: {
            name: "select",
            url: "https://github.com/react-component/select",
            createdAt: "2015-01-29T15:38:52Z",
            description: "React Select",
            forkCount: 320,
            id: "MDEwOlJlcG9zaXRvcnkzMDAyNzAyNA=="
          }
        },
        {
          repo: {
            name: "react-native-i18n",
            url: "https://github.com/AlexanderZaytsev/react-native-i18n",
            createdAt: "2015-06-14T10:48:33Z",
            description: "React Native + i18n.js",
            forkCount: 391,
            id: "MDEwOlJlcG9zaXRvcnkzNzQwODgyOA=="
          }
        },
        {
          repo: {
            name: "form",
            url: "https://github.com/react-component/form",
            createdAt: "2015-12-08T11:21:07Z",
            description: "React High Order Form Component(web & react-native)",
            forkCount: 276,
            id: "MDEwOlJlcG9zaXRvcnk0NzYxNzY5NA=="
          }
        }
      ]
    }
  }
};
