import Card from '../../components/Card'

export default {
  name: 'PageSeasons',
  components: {
    Card
  },
  data() {
    return {
      seasons: []
    }
  },
  mounted() {
    this.loadSeasons()
  },
  methods: {
    async loadSeasons () {
      // capturamos la informacion del servicio estaciones
      const res = await this.$axios.get('api/valores/climatologicos/inventarioestaciones/todasestaciones')
      // capturamos los datos de las estaciones
      const { data } = await this.$axiosOriginal.get(res.data.datos)
      this.seasons = data
    },
  },
}
