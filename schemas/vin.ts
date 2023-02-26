export default {
    name: 'vin',
    type: 'document',
    title: 'Vin',
    fields: [
      {
        name: 'nom',
        type: 'string',
        title: 'Nom'
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type de vin',
        options: {
          list: [{ title: 'blanc', value: 'blanc'}, {title: 'rouge', value: 'rouge'}, {title: 'rosé', value: 'rose'}, { title: 'Non renseigné', value: 'NR'}]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'prix',
        type: 'number',
        title: 'Prix'
      },
      {
        name: 'commentaire',
        type: 'string',
        title: 'Commentaire'
      }
    ]
  }