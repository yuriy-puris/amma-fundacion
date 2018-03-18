<template>
  <div class="container">
    <div class="about-holder">
      <h1>Contact</h1>
      <div class="info-area">
        <figure>
          <div class="map-holder"
              :data-lat="contact_page.acf.contact_office_location.lat"
              :data-lng="contact_page.acf.contact_office_location.lng"
          >
            <div id="map"></div>
          </div>
        </figure>
        <div class="description">
          <p>
            {{contact_page.acf.contact_description_before_address}}
          </p>
          <address>
            <p
              v-for="item in contact_page.acf.contact_office_address"
            >
              {{item.contact_office_address_p}}
            </p>
          </address>
          <dl class="contacts-list">
            <dt>Call:</dt>
            <dd><a href="tel:55 93 51 97">{{contact_page.acf.contact_phone}}</a></dd>
            <dt>Fax:</dt>
            <dd>{{contact_page.acf.contact_fax}}</dd>
          </dl>
        </div>
      </div>
      <div class="contacts-area">
        <div class="lap-6">
          <div class="info">
            <p>{{contact_page.acf.contact_description_before_form}}</p>
            <a href="#">{{contact_page.acf.contact_email}}</a>
          </div>
        </div>
        <div class="lap-6">
          <div class="contacts-form" v-html="contact_page.acf.contact_form_shortcode"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import { mapState } from 'vuex'

  export default {
    name: 'Contact',
    computed: mapState([
      'contact_page',
    ]),
    methods: {
      loadContactPage() {
        this.$store.dispatch('LOAD_CONTACT_PAGE')
      }
    },
    created() {
      this.loadContactPage()
    },
    mounted() {
      this.loadContactPage()
    },
  }
</script>



