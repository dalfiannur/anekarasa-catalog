<template lang="pug">
  v-app
    v-toolbar( app class="primary" )
      v-btn( icon dark @click.native="$router.push('/')" )
        v-icon
          |arrow_back
    v-content( app )
      v-container( fluid )
        v-layout( row wrap )
          template( v-for="item in reservations" )
            v-flex( xs12 :key="item.id" )
              v-card
                v-card-text
                  v-layout( row wrap )
                    v-flex( xs10 )
                      div
                        |{{ item.quantity }} - 
                        b| {{ item.name }}
                      div
                        |Meja {{ item.table_id }}
                    v-flex( xs2 )
                      v-btn( icon color="primary" @click="onDone(item)" )
                        v-icon
                          |done
</template>
<script>
import axios from 'axios'
const url = process.env.API
export default {
  data () {
    return {
      reservations: []
    }
  },

  mounted () {
    this.loadReservations()
  },

  methods: {
    loadReservations () {
      axios.get(url + '/catalog/reservation').then(result => {
        this.reservations = result.data
      })
    },

    onDone (reservation) {
      axios.put(`${url}/catalog/reservation`, reservation).then(() => {
        this.loadReservations()
      })
    }
  }
}
</script>
