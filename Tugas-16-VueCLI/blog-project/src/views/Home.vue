<template>
    <v-container fluid class="ma-0 pa-0" grid-list-sm>
        <div class="text-right">
            <v-btn small text to="/blogs" class="blue--text">
                All blogs <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <v-layout wrap class="mt-2">
            <blog-item-component 
            v-for="blog in blogs" 
            :key="`blog-${blog.id}`" 
            :blog="blog"></blog-item-component>
        </v-layout>
    </v-container>
</template>


<script>
import BlogItemComponent from '../components/BlogItemComponent.vue';


    export default {
        data: () => ({
            apiDomain: 'http://demo-api-vue.sanbercloud.com',
            blogs: []
        }),

        components: {
            'blog-item-component': BlogItemComponent
        },

        created(){
            const config = {
                method: "get",
                url: this.apiDomain + '/api/v2/blog/random/4'
            }

            this.axios(config)
            .then(response => {
                let { blogs } = response.data
                this.blogs = blogs

                console.log(this.blogs)
            })

            .catch(error => {
                console.log(error)
            })
        }
    };
</script>