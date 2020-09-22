<template>
  <div>
    User View
    <div class="token"><pre>{{tokenResponse}}</pre></div>
    <p><router-link to="/user/edit">Edit User</router-link></p>
    <div>
        API Call:
        <span v-if="user!=null">{{user.item}}</span>
        <span v-else>No Data</span>
        {{user}}
    </div>
    <div v-if="!$apollo.queries.gqlcall.loading">
      GraphQL call:
      <ul>
        <li v-for="place in gqlcall.list" :key="place.place_id">{{place.name}}</li>
      </ul>
    </div>
    <button v-on:click="getUser">API Get User</button>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import gql from 'graphql-tag'

export default {
  name: 'User',
  apollo: {
    gqlcall: gql`
    query {
      gqlcall: places {
        list {
          place_id
          name
          players {
            list {
              player_id
              name
            }
          }
        }
      }
    }`,
  },
  computed: {
    ...mapGetters({
        tokenResponse : 'auth/tokenResponse',
        user : 'users/user'
      })
  },
  methods: {
    getUser : function() {
        this.$store.dispatch("users/getUser");
    },
    signInSilent: function () {
        this.$store.dispatch("auth/signInSilent");
    },
    logout : function () {
      this.$store.dispatch("auth/signOut");
    }
  }
}
</script>