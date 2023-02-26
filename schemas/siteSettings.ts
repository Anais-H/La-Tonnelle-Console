export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Paramètres du site',
    fields: [
      {
        name: 'restaurant_name',
        type: 'string',
        title: 'Nom du restauant',
        required: true
      },
      {
        name: 'information',
        type: 'string',
        title: 'Information'
      },
      {
        name: 'reservation_number',
        type: 'string',
        title: 'Numéro tel réservation',
        required: true
      },
      {
        name: 'header_image',
        type: 'image',
        title: 'Image bannière',
        required: true
      },
      {
        name: 'image_1',
        type: 'image',
        title: 'Image 1',
        required: true
      }
    ]
  }