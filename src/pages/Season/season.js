import Table from '../../components/Table'

export default {
  name: 'PageSeason',
  components: {
    Table
  },
  data() {
    return {
      seasons: [],
      season: [],
    }
  },
  mounted() {
    this.loadData()
    this.loadSeason()
  },
  methods: {
    async loadData () {
      // capturamos la informacion del servicio estacion
      const res = await this.$axios.get(`/api/valores/climatologicos/normales/estacion/${this.$route.params.id}`)
      // capturamos los datos de las estaciones
      const { data } = await this.$axiosOriginal.get(res.data.datos)
      this.seasons = data
    },
    async loadSeason () {
      // capturamos la informacion del servicio estacion
      const { data } = await this.$axios.get(`api/valores/climatologicos/inventarioestaciones_int/estaciones/${this.$route.params.id}`)
      this.season = data
    },
  },
}
