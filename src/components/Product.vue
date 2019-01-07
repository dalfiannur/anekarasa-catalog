<template lang="pug">
  v-app
    v-toolbar( app class="primary" )
      v-btn( icon dark @click.native="$router.push('catalog')" )
        v-icon
          |arrow_back
    v-content( app )
      v-container( fluid )
        v-flex( xs12 )
          v-card
            v-img( :src="loadImage(product.image)" :aspect-ratio="2/1" )
            div( class="price" )
              |{{ toCurrency(product.price) }}
            div( class="name" )
              |{{ product.name }}
      v-container( fluid )
        v-flex( xs12 )
          v-card
            v-card-text
              label
                |Banyak Pesanan
              v-select( :items="quantity" v-model="product.quantity" solo )
              v-checkbox( v-model="bungkus" label="Bungkus" )          
      v-btn( fab bottom right fixed icon color="primary" @click="add" )
        v-icon
          |add
</template>

<script>
import axios from 'axios'
import { toCurrency } from '@/lib/currency'
const url = process.env.API
export default {
  data () {
    return {
      product: {
        quantity: 0,
        detail: []
      },
      quantity: [],
      bungkus: false
    }
  },

  mounted () {
    this.loadProduct()
    let qty = []
    for (let i = 1; i <= 100; i++) {
      qty.push(i)
    }
    this.quantity = qty
  },

  methods: {
    loadProduct () {
      let id = this.$store.state.Product.id
      axios.get(`${url}/catalog/product/${id}`).then(response => {
        this.product = response.data
      })
    },

    loadImage (src) {
      return url + '/img/' + src
    },

    toCurrency (price) {
      return toCurrency(price)
    },

    add () {
      if (this.product.quantity > 0) {
        if (this.bungkus) {
          this.product.detail = ['BUNGKUS']
        }
        this.$store.dispatch('Cart/addProduct', this.product)
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style scoped>
.price {
  color: red;
  padding: 5px;
}
.name {
  padding: 5px;
}
</style>
