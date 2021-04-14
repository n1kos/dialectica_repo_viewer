<template>
  <div>
    <!-- {{ repositories }} -->
    <ul class="">
      <li
        class=""
        v-for="repository in repositories.data.search.repos"
        :key="repository.url"
      >
        {{ repository }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RepositoryList",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    /**
 *? query to get data: 
 query {
  search(
    type:REPOSITORY, 
    query: "*react*",
    last: 100
  ) {
    repos: edges {
      repo: node {
        ... on Repository {
          url
        }
      }
    }
  }
}
 */
    // get some static data to work with
    const repositories: object = {
      data: {
        search: {
          repos: [
            {
              repo: {
                url: "https://github.com/vercel/next.js"
              }
            },
            {
              repo: {
                url: "https://github.com/ReactTraining/react-router"
              }
            },
            {
              repo: {
                url: "https://github.com/streamich/react-use"
              }
            },
            {
              repo: {
                url: "https://github.com/reactjs/reactjs.org"
              }
            },
            {
              repo: {
                url: "https://github.com/davezuko/react-redux-starter-kit"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/wesbos/React-For-Beginners-Starter-Files"
              }
            },
            {
              repo: {
                url: "https://github.com/react-hook-form/react-hook-form"
              }
            },
            {
              repo: {
                url: "https://github.com/reduxjs/react-redux"
              }
            },
            {
              repo: {
                url: "https://github.com/react-bootstrap/react-bootstrap"
              }
            },
            {
              repo: {
                url: "https://github.com/akiran/react-slick"
              }
            },
            {
              repo: {
                url: "https://github.com/wix/react-native-calendars"
              }
            },
            {
              repo: {
                url: "https://github.com/enzymejs/enzyme"
              }
            },
            {
              repo: {
                url: "https://github.com/facebook/react-native"
              }
            },
            {
              repo: {
                url: "https://github.com/react-native-svg/react-native-svg"
              }
            },
            {
              repo: {
                url: "https://github.com/StephenGrider/ReduxCasts"
              }
            },
            {
              repo: {
                url: "https://github.com/react-dnd/react-dnd"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/react-native-elements/react-native-elements"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/lottie-react-native/lottie-react-native"
              }
            },
            {
              repo: {
                url: "https://github.com/JedWatson/react-select"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/erikras/react-redux-universal-hot-example"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/slider"
              }
            },
            {
              repo: {
                url: "https://github.com/react-native-maps/react-native-maps"
              }
            },
            {
              repo: {
                url: "https://github.com/react-grid-layout/react-draggable"
              }
            },
            {
              repo: {
                url: "https://github.com/reactjs/react-tutorial"
              }
            },
            {
              repo: {
                url: "https://github.com/Semantic-Org/Semantic-UI-React"
              }
            },
            {
              repo: {
                url: "https://github.com/ant-design/ant-design"
              }
            },
            {
              repo: {
                url: "https://github.com/alibaba/hooks"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/react-native-webview/react-native-webview"
              }
            },
            {
              repo: {
                url: "https://github.com/reactstrap/reactstrap"
              }
            },
            {
              repo: {
                url: "https://github.com/brillout/awesome-react-components"
              }
            },
            {
              repo: {
                url: "https://github.com/formium/formik"
              }
            },
            {
              repo: {
                url: "https://github.com/gatsbyjs/gatsby"
              }
            },
            {
              repo: {
                url: "https://github.com/Nozbe/WatermelonDB"
              }
            },
            {
              repo: {
                url: "https://github.com/facebook/draft-js"
              }
            },
            {
              repo: {
                url: "https://github.com/remarkjs/react-markdown"
              }
            },
            {
              repo: {
                url: "https://github.com/microsoft/react-native-code-push"
              }
            },
            {
              repo: {
                url: "https://github.com/airbnb/react-sketchapp"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/calendar"
              }
            },
            {
              repo: {
                url: "https://github.com/liuyangjike/react-elm"
              }
            },
            {
              repo: {
                url: "https://github.com/acdlite/react-fiber-architecture"
              }
            },
            {
              repo: {
                url: "https://github.com/rehooks/awesome-react-hooks"
              }
            },
            {
              repo: {
                url: "https://github.com/kriasoft/react-starter-kit"
              }
            },
            {
              repo: {
                url: "https://github.com/yezihaohao/react-admin"
              }
            },
            {
              repo: {
                url: "https://github.com/leecade/react-native-swiper"
              }
            },
            {
              repo: {
                url: "https://github.com/adam-golab/react-developer-roadmap"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/material-components/material-components-web-react"
              }
            },
            {
              repo: {
                url: "https://github.com/aksonov/react-native-router-flux"
              }
            },
            {
              repo: {
                url: "https://github.com/wix/react-native-notifications"
              }
            },
            {
              repo: {
                url: "https://github.com/enaqx/awesome-react"
              }
            },
            {
              repo: {
                url: "https://github.com/yannickcr/eslint-plugin-react"
              }
            },
            {
              repo: {
                url: "https://github.com/diegomura/react-pdf"
              }
            },
            {
              repo: {
                url: "https://github.com/FormidableLabs/nuka-carousel"
              }
            },
            {
              repo: {
                url: "https://github.com/jxnblk/mdx-deck"
              }
            },
            {
              repo: {
                url: "https://github.com/react-native-video/react-native-video"
              }
            },
            {
              repo: {
                url: "https://github.com/FormidableLabs/react-game-kit"
              }
            },
            {
              repo: {
                url: "https://github.com/securingsincity/react-ace"
              }
            },
            {
              repo: {
                url: "https://github.com/fkhadra/react-toastify"
              }
            },
            {
              repo: {
                url: "https://github.com/umijs/umi"
              }
            },
            {
              repo: {
                url: "https://github.com/malte-wessel/react-custom-scrollbars"
              }
            },
            {
              repo: {
                url: "https://github.com/weui/react-weui"
              }
            },
            {
              repo: {
                url: "https://github.com/kentcdodds/react-hooks"
              }
            },
            {
              repo: {
                url: "https://github.com/react-ga/react-ga"
              }
            },
            {
              repo: {
                url: "https://github.com/infinitered/reactotron"
              }
            },
            {
              repo: {
                url: "https://github.com/decosoftware/deco-ide"
              }
            },
            {
              repo: {
                url: "https://github.com/ruanyf/react-demos"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/table"
              }
            },
            {
              repo: {
                url: "https://github.com/facebook/react-native-website"
              }
            },
            {
              repo: {
                url: "https://github.com/mobxjs/mobx-react"
              }
            },
            {
              repo: {
                url: "https://github.com/PaulLeCam/react-leaflet"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/coreui/coreui-free-react-admin-template"
              }
            },
            {
              repo: {
                url: "https://github.com/zo0r/react-native-push-notification"
              }
            },
            {
              repo: {
                url: "https://github.com/Kureev/react-native-blur"
              }
            },
            {
              repo: {
                url: "https://github.com/fisshy/react-scroll"
              }
            },
            {
              repo: {
                url: "https://github.com/mattermost/mattermost-server"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/ovasylenko/skillcrucial-react-redux-boilerplate"
              }
            },
            {
              repo: {
                url: "https://github.com/reactchartjs/react-chartjs-2"
              }
            },
            {
              repo: {
                url:
                  "https://github.com/react-native-elements/react-native-elements-app"
              }
            },
            {
              repo: {
                url: "https://github.com/react-bootstrap/react-router-bootstrap"
              }
            },
            {
              repo: {
                url: "https://github.com/fangwei716/30-days-of-react-native"
              }
            },
            {
              repo: {
                url: "https://github.com/wwayne/react-tooltip"
              }
            },
            {
              repo: {
                url: "https://github.com/root-two/react-native-drawer"
              }
            },
            {
              repo: {
                url: "https://github.com/pmndrs/react-spring"
              }
            },
            {
              repo: {
                url: "https://github.com/zenoamaro/react-quill"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/tree"
              }
            },
            {
              repo: {
                url: "https://github.com/callstack/react-native-paper"
              }
            },
            {
              repo: {
                url: "https://github.com/jondot/awesome-react-native"
              }
            },
            {
              repo: {
                url: "https://github.com/react-navigation/react-navigation"
              }
            },
            {
              repo: {
                url: "https://github.com/reduction-admin/react-reduction"
              }
            },
            {
              repo: {
                url: "https://github.com/benawad/fullstack-graphql-airbnb-clone"
              }
            },
            {
              repo: {
                url: "https://github.com/web-pal/react-trello-board"
              }
            },
            {
              repo: {
                url: "https://github.com/rsuite/rsuite"
              }
            },
            {
              repo: {
                url: "https://github.com/morenoh149/react-native-contacts"
              }
            },
            {
              repo: {
                url: "https://github.com/alibaba/ice"
              }
            },
            {
              repo: {
                url: "https://github.com/chvin/react-tetris"
              }
            },
            {
              repo: {
                url: "https://github.com/Flipboard/react-canvas"
              }
            },
            {
              repo: {
                url: "https://github.com/jhen0409/react-native-debugger"
              }
            },
            {
              repo: {
                url: "https://github.com/ahfarmer/calculator"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/select"
              }
            },
            {
              repo: {
                url: "https://github.com/AlexanderZaytsev/react-native-i18n"
              }
            },
            {
              repo: {
                url: "https://github.com/react-component/form"
              }
            }
          ]
        }
      }
    };

    return {
      repositories
    };
  }
});
</script>
