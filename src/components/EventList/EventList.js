import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faDelete from '@fortawesome/fontawesome-free-solid/faArchive'
import EventBadge from '@/components/EventBadge/EventBadge.vue'

export default {
  name: 'EventList',
  data() {
    return {
      fields: ['title', 'statusBadge', 'composer', 'link', 'actions'],
      items: [
        {'id': 1, 'title': '12@13 Go', 'composer': 'Jar Jar Binks', 'status': 'in preparation', 'url': 'http://'},
        {'id': 2, 'title': '12@13 Kotlin', 'composer': 'Ezra Bridger', 'status': 'canceled', 'url': 'http://'},
        {
          'id': 3,
          'title': '12@13 Green IT et Eco-conception des logiciels',
          'composer': 'Ashoka Tano',
          'status': 'canceled',
          'url': 'http://'
        }
      ]
    }
  },
  computed: {

    linkIcon() {
      return faExternalLinkAlt
    },
    editIcon() {
      return faEdit
    },
    deleteIcon() {
      return faDelete
    }
  },
  components: {
    FontAwesomeIcon,
    EventBadge
  }
}
