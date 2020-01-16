export default {
  name: 'Card',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Soy un municipio'
    },
    province: {
      type: String,
      default: 'Soy la provincia'
    },
  }
}
