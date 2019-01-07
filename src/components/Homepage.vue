<template lang="pug">
  v-app
    div( class="header-background" )
    v-btn( icon dark fab fixed left style="z-index: 4" )
      v-icon
        |menu
    v-btn( fab fixed dark right icon style="z-index: 4" @click.native="$router.push('/cart')" )
      v-icon( color="white" )
        |shopping_shop
    v-content( app style="z-index: 1" )
      div( class="header" )
        v-layout( row wrap align-center justify-center fill-height )
          v-flex( xs3 )
            v-responsive( :aspect-ratio="2/1" )
              v-img( :src="'/static/img/icons/logo.png'" )
        v-layout( row wrap align-center justify-center fill-height )
          v-flex( xs12 )
            div( class="title" )
              |ANEKA RASA
      v-container( fluid grid-list-lg class="content" )
        v-layout( row wrap align-center justify-space-between fill-height)
          template( v-for="item in catalogs" )
            v-flex( xs6 @click="openCatalog(item.id)" )
              v-card( class="card" )
                img( :src="loadIcon(item.icon)" width="50%" )
                div( class="catalog-title" )
                  |{{ item.text }}
          
</template>

<script>
export default {
  data () {
    return {
      catalogs: [
        { id: 1, text: 'Aneka Ayam', icon: 'aneka-ayam.png' },
        { id: 2, text: 'Aneka Daging', icon: 'aneka-daging.png' },
        { id: 3, text: 'Aneka Ikan Tawar', icon: 'aneka-ikan-tawar.png' },
        { id: 4, text: 'Aneka Seafood', icon: 'aneka-seafood.png' },
        { id: 5, text: 'Aneka Nasi', icon: 'aneka-nasi.png' },
        { id: 6, text: 'Aneka Mie', icon: 'aneka-mie.png' },
        { id: 7, text: 'Aneka Sayur', icon: 'aneka-sayur.png' },
        { id: 8, text: 'Aneka Soup', icon: 'aneka-soup.png' },
        { id: 9, text: 'Aneka Juice', icon: 'aneka-juice.png' },
        { id: 10, text: 'Minuman Dingin', icon: 'minuman-dingin.png' },
        { id: 11, text: 'Minuman Hangat', icon: 'minuman-hangat.png' },
        { id: 12, text: 'Makanan Ringan', icon: 'makanan-ringan.png' },
        { id: 13, text: 'Lainnya', icon: 'lainnya.png' }
      ]
    }
  },

  methods: {
    loadIcon (icon) {
      return '/static/img/icons/' + icon
    },

    openCatalog (id) {
      this.$store.dispatch('Catalog/setId', id)
      this.$router.push('/catalog')
    }
  }
}
</script>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: blue;
}
.menu {
  z-index: 4;
}
.cart {
  position: fixed;
  z-index: 4;
  right: -20px;
  top: -5px;
}
.header-background {
  background-color: blue;
  z-index: 0;
  position: fixed;
  left: 0;
  right: 0;
  height: 200px;
}
.title {
  font-size: 20px;
  width: 100%;
  text-align: center;
  color:#ffffff;
}
.content {
  margin-top: 120px;
  position: absolute;
}
.card {
  height: 100%;
  text-align: center;
  padding: 15px 0px;
}
.catalog-title {
  width: 100%;
  text-align: center;
}
</style>
