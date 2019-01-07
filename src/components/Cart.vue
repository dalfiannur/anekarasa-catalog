<template lang="pug">
  v-app
    v-toolbar( app color="primary" )
      v-btn( icon dark @click="$router.push('/')" )
        v-icon
          |arrow_back
    v-content( app )
      v-container( fluid )
        template( v-for="item in products" )
          v-layout( row wrap :key="'item-' + item.id" )
            v-flex( xs12 )
              v-card
                v-layout( row wrap )
                  v-flex( xs10 )
                    v-layout( row wrap )
                      v-flex( xs12 style="padding-left: 5px")
                        |{{ item.name }}
                      v-flex( xs4 class="text-xs-center" )
                        |{{ item.price }}
                      v-flex( xs4 class="text-xs-center" )
                        |X
                      v-flex( xs4 class="text-xs-center" )
                        v-edit-dialog( return-value="item.quantity" lazy transition="fade-transition" )
                          |{{ item.quantity }}
                          v-select( :items="quantity" slot="input" v-model="item.quantity" )
                  v-flex( xs2 )
                    v-btn( icon @click="destroyProduct(item)" )
                      v-icon( color="red" )
                        |delete
    v-btn( fab fixed bottom right icon color="primary" @click="$router.push('/select-table')" v-if="products.length > 0" )
      v-icon
        |done
</template>

<script>
export default {
  data () {
    return {
      products: [],
      quantity: []
    }
  },

  created () {
    let qty = []
    for (let i = 1; i <= 100; i++) {
      qty.push(i)
    }
    this.quantity = qty
  },

  mounted () {
    this.loadProducts()
  },

  methods: {
    loadProducts () {
      this.products = this.$store.state.Cart.products
    },

    destroyProduct (product) {
      this.$store.dispatch('Cart/removeProduct', product)
      this.loadProducts()
    }
  }
}
</script>
