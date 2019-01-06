<template lang="pug">
  v-app
    v-toolbar( app class="primary" )
      v-btn( icon @click.native="$router.push('/')" )
        v-icon
          |arrow_back
    v-content( app )
      v-container( fluid grid-list-xl )
        v-layout( row wrap )
          template( v-for="item in items" )
            v-flex( xs6 :key="item.id" )
              v-card( fill-height )
                v-img( :src="loadImage(item.image)" :aspect-ratio="1" )
                div( class="price" )
                  |{{ toCurrency(item.price) }}
                div( class="name" )
                  |{{ item.name }}
          
</template>

<script>
import axios from 'axios'
import { toCurrency } from '@/lib/currency'
const url = process.env.API
export default {
  data () {
    return {
      items: []
    }
  },

  mounted () {
    this.loadCatalogs()
  },

  methods: {
    loadCatalogs () {
      let id = this.$store.state.Catalog.id
      axios.get(`${url}/catalog/product/${id}/category`).then(response => {
        this.items = response.data
      })
    },

    loadImage (src) {
      return url + '/img/' + src
    },

    toCurrency (number) {
      return toCurrency(number)
    }
  }
}
</script>
<style scoped>
.price {
  color: red;
  width: 100%;
  padding: 5px;
}
.name {
  width: 100%;
  padding: 5px;
}
</style>
