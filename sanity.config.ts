import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'La Tonnelle',

  projectId: '009d9zco',
  dataset: 'production',

  plugins: [
    deskTool({
      name: 'laTonnelle',
      title: 'La Tonnelle',
      structure: (S) => S.list()
        .title("La Tonnelle")
        .items([
          S.listItem()
            .title("Paramètres du site")
            .child(S.document()
              .schemaType("siteSettings")
              .documentId("siteSettings")),
          S.listItem()
            .title("Horaires d'ouverture")
            .child(S.document()
              .schemaType("horaires_ouverture")
              .documentId("horaires_ouverture")),
          S.divider(),
          S.listItem()
            .title("Boissons")
            .child(
              S.list()
                .title("Boissons")
                .items([
                  ...S.documentTypeListItems().filter(
                    item => ['aperitif', 'cocktailAlcoolise', 'cocktailSansAlcool', 'boissonFraiche', 'vin', 'boissonChaude', 'digestif'].includes(item.getId() ?? "")
                  )
                ])
            ),
          S.listItem()
            .title("Entrées")
            .child(
              S.list()
                .title("Entrées")
                .items([
                  ...S.documentTypeListItems().filter(
                    item => ['entree'].includes(item.getId() ?? "")
                  )
                ])
            ),
          S.listItem()
            .title("Plats")
            .child(
              S.list()
                .title("Plats")
                .items([
                  ...S.documentTypeListItems().filter(
                    item => ['salade', 'grillade', 'mer', 'platMijote'].includes(item.getId() ?? "")
                  )
                ])
            ),
          S.listItem()
            .title("Desserts")
            .child(
              S.list()
                .title("Desserts")
                .items([
                  ...S.documentTypeListItems().filter(
                    item => ['dessert'].includes(item.getId() ?? "")
                  )
                ])
            ),
            ...S.documentTypeListItems().filter(
              (listItem) => "menu" === listItem.getId())
      
          ])
      }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
