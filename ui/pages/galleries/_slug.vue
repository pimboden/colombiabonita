<template>
  <div>
    <page
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
    <v-row>
      <v-col class="justify-center centerIt">
        <v-btn outlined :to="
              localePath({
                name: 'destinations-slug',
                params: { slug: $route.params.slug },
              })"
            >{{ $t('gallery.gottoDestination') }}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // We are getting only the draft version of the content in this example.
    // In real world project you should ask for correct version of the content
    // according to the environment you are deploying to.
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    const version = context.query._storyblok || context.isDev ? "draft" : "published";
    let fullSlug =
      context.route.path == "/" ||
      context.route.path == "" ||
      context.route.path == "/en/" ||
      context.route.path == "/es/" ||
      context.route.path == "/de/" ||
      context.route.path == "/en" ||
      context.route.path == "/es" ||
      context.route.path == "/de"
        ? "/home"
        : context.route.path;

    if (context.route.path && context.route.path !== "") {
      fullSlug = context.route.path.substring(3);
    }
    // slug fotogallerie
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories${fullSlug}`, {
        version,
        language: context.i18n.locale,
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();
        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(["input", "published", "change"], (event) => {
          if (event.action == "input") {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content;
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            });
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  },
  nuxtI18n: {
    paths: {
      es: "/galerias/:slug",
      en: "/galleries/:slug",
      de: "/gallerien/:slug",
    },
  },
};
</script>
