<template lang="pug">
  v-app
    v-toolbar( app color="primary" )
      v-btn( dark icon @click="$router.push('/catalog') ")
        v-icon
          |arrow_back
    v-content( app )
      v-container( fluid )
        v-layout( row wrap )
          v-flex( xs12 )
            label
              |Meja Belum Terisi
            v-select( :items="tables.available" item-text="name" item-value="id" solo v-model="tables.selected" )
          v-flex( xs12 )
            label
              |Meja Sudah Terisi
            v-select( :items="tables.unavailable" item-text="name" item-value="id" solo v-model="tables.selected" )
    v-btn( fab fixed bottom right icon color="primary" v-if="tables.selected > 0" @click="onDone" )
      v-icon
        |done
</template>
<script>
import axios from 'axios'
import io from 'socket.io-client'
const url = process.env.API
export default {
  data () {
    return {
      tables: {
        available: [],
        unavailable: [],
        selected: 0
      },
      socket: io.connect(url)
    }
  },

  mounted () {
    this.loadTables()
  },

  methods: {
    loadTables () {
      axios.get(`${url}/catalog/tables`).then(response => {
        this.tables.available = response.data.filter(item => {
          return item.actived === 0
        })
        this.tables.unavailable = response.data.filter(item => {
          return item.actived === 1
        })
      })
    },

    onDone () {
      if (this.tables.selected > 0) {
        axios.post(`${url}/catalog/reservation/${this.tables.selected}`, { items: this.$store.state.Cart.products }).then(() => {
          this.$store.dispatch('Cart/clearProducts')
          this.$router.push('/')
        })
      }
    }
  }
}
</script>
