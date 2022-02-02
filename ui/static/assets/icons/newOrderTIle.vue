<template>
  <v-form ref="createOrderTileForm" class="createOrderTile">
    <tile-container :aditional-class="'newOrderTile'">
      <tile-title class="mx-6 pt-5">
        {{ translate('Tile.NewOrderComponent.Title') }}
        <span class="express-order" :class="{ visible: showExpressOrder }">
          {{ translate('Tile.NewOrderComponent.Express') }}</span>
      </tile-title>
      <v-container>
        <v-row dense class="mx-6">
          <v-col
            cols="12"
            sm="6"
            class="pb-0">
            <aposTooltip field-key="NewOrder.Field.SourceLanguages">
              <v-select
                id="NewOrder.Field.SourceLanguages"
                v-model="selectedSourceLanguages"
                class="apos-input"
                :items="availableSourceLanguages"
                :menu-props="{ maxHeight: '400' }"
                :label="translate('NewOrder.Label.SourceLanguages')"
                multiple
                item-text="name"
                item-value="languageCode"
                return-object
                outlined />
            </aposTooltip>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="pb-0">
            <aposTooltip field-key="NewOrder.Field.TargetLanguages">
              <v-select
                v-model="selectedTargetLanguages"
                class="apos-input"
                :items="availableTargetLanguages"
                :menu-props="{ maxHeight: '400' }"
                :label="translate('NewOrder.Label.TargetLanguages')"
                multiple
                item-text="name"
                item-value="languageCode"
                return-object
                outlined />
            </aposTooltip>
          </v-col>
        </v-row>
        <v-row dense class="mx-6">
          <v-col
            cols="12"
            :class="
              allowCustomervicesTypes && isSelectedCustomService
                ? 'col-sm-3'
                : 'col-sm-4'
            "
            class="pb-0">
            <aposTooltip field-key="NewOrder.Field.Services">
              <v-select
                v-model="selectedServicesTypes"
                class="apos-input"
                :items="availableServicesTypes"
                :menu-props="{ maxHeight: '400' }"
                :label="translate('NewOrder.Label.Services')"
                multiple
                item-text="name"
                return-object
                required
                outlined
                @change="onchangeServiceType">
                <template v-slot:item="data">
                  <v-checkbox
                    class="service-type-cbx"
                    :label="data.item.name"
                    :disabled="data.item.disabled"
                    :input-value="isCheckedServiceType(data.item)"
                    @click.stop="serviceTypeCbxClick(data.item, $event)" />
                </template>
              </v-select>
            </aposTooltip>
          </v-col>
          <v-col
            v-if="allowCustomervicesTypes && isSelectedCustomService"
            cols="12"
            sm="3"
            class="pb-0">
            <v-text-field
              v-model="selectedCustomServicesType"
              :label="translate('NewOrder.Label.CustomService')"
              class="new-order_input_text"
              outlined />
          </v-col>
          <v-col
            cols="12"
            :class="
              allowCustomervicesTypes && isSelectedCustomService
                ? 'col-sm-3'
                : 'col-sm-4'
            "
            class="pb-0">
            <aposTooltip field-key="NewOrder.Field.DeliveryDate">
              <date-time-picker-ext
                id="dtPicker"
                v-model="deliveryDate"
                class="new-order_input_text apos-input"
                label-key="NewOrder.Label.DesiredDeliveryDate"
                :min-date="minDate"
                :disabled-weekly="[0, 6]" />
            </aposTooltip>
          </v-col>
          <v-col
            cols="12"
            :class="
              allowCustomervicesTypes && isSelectedCustomService
                ? 'col-sm-3'
                : 'col-sm-4'
            "
            class="pb-0">
            <aposTooltip field-key="NewOrder.Field.DeliveryTime">
              <v-select
                v-model="deliveryTime"
                class="apos-input time-picker"
                :items="availableTimes"
                :menu-props="{ maxHeight: '400' }"
                :label="translate('NewOrder.Label.DesiredDeliveryTime')"
                append-icon="mdi-calendar"
                required
                outlined>
                <template v-slot:selection="{ item, index }">
                  <span>{{ item }} </span>
                </template>
              </v-select>
            </aposTooltip>
          </v-col>
        </v-row>
        <v-row dense class="mx-6">
          <v-col cols="12" sm="12">
            <v-card flat color="fileUpload-color">
              <v-card-text
                class="upload-wrapper">
                <vue-dropzone
                  id="filesUploadDropzone"
                  ref="filesUploadDropzone"
                  :use-custom-slot="true"
                  :destroy-dropzone="false"
                  :options="dropzoneOptions"
                  @vdropzone-sending="sendingFilesEvent"
                  @vdropzone-queue-complete="completedSendingFilesEvent">
                  <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">
                      {{ translate('NewOrder.Label.FilesUploadTitle') }}
                    </h3>
                    <div class="subtitle">
                      {{ translate('NewOrder.Label.FilesUploadSubTitle') }}
                    </div>
                  </div>
                </vue-dropzone>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense class="callToActionArea pt-4 mr-6">
          <v-col cols="12" sm="6" />
          <v-col cols="12" sm="6" class="callToActionArea">
            <v-btn
              small
              dark
              color="primary"
              :loading="isCreatingOrder"
              depressed
              tile
              @click="submitOrder">
              {{ translate('Tile.NewOrderComponent.Btn.Create') }}
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon dark>mdi-loading</v-icon>
                </span>
              </template>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </tile-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import * as rules from 'vee-validate/dist/rules'

import { CreateOrderMixin } from '~/assets/js/orderMixins'
import { DateFormatMixin } from '~/assets/js/vueMixins'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'NewOrderTile',
  components: {
    vueDropzone: () => import('vue2-dropzone'),
    tileContainer: () => import('~/components/tiles/tileParts/tileContainer'),
    tileTitle: () => import('~/components/tiles/tileParts/tileTitle'),
    aposTooltip: () => import('~/components/aposTooltip'),
    dateTimePickerExt: () =>
      import('~/components/componentExtensions/dateTimePickerExt')
  },
  mixins: [CreateOrderMixin, DateFormatMixin],
  data() {
    return {
      isCreatingOrder: false,
      deliveryTime: null,
      dropzoneOptions: {
        url: process.env.REST_API_URL + '/v1/Orders/UploadNewOrderFiles',
        thumbnailWidth: 150,
        maxFilesize: process.env.MAXFILESIZE,
        previewTemplate: this.filePreviewTemplate(),
        addRemoveLinks: true,
        autoProcessQueue: false,
        dictRemoveFile: '<span class="mdi mdi-trash-can-outline"></span>',
        chunking: true,
        chunkSize: 1048576
      }
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo/getUserInfo',
      currentLanguage: 'siteInfo/getCurrentLanguage'
    })
  },
  watch: {
    deliveryTime() {
      this.showExpressOrder = this.isExpressOrder(
        this.deliveryDate,
        this.deliveryTime
      )
    }
  },
  destroyed() {
    this.$root.$off('language-change-dataloaded', this.onLanguageChanged)
  },
  async created() {
     this.$root.$on('language-change-dataloaded', this.onLanguageChanged)
    this.updateOrder({})
    this.dropzoneOptions.headers = {
      Authorization: 'Bearer ' + this.getBearerToken
    }
    await this.loadInitialData()
  },
  methods: {
    ...mapActions({
      updateOrder: 'newOrder/update'
    }),
    sendingFilesEvent(file, xhr, formData) {
      formData.append('type', 'fileUploads')
      formData.append('unteradresseId', this.userInfo.unteradresseId)
    },
    completedSendingFilesEvent() {
      if (this.isCreatingOrder) {
        this.isCreatingOrder = false
        this.$router.push(this.localePath('orders-new'))
      }
    },
    async onLanguageChanged(){
      await this.loadInitialData()
    },
    async loadInitialData() {
        this.selectedSourceLanguages =[]
        this.selectedTargetLanguages =[]
        this.selectedServicesTypes =[]
        await Promise.all([
          this.getSourceLanguages(),
          this.getTargetLanguages(),
          this.getServiceTypes()
        ])
        if (process.env.SHOW_DEBUG_INFO === 'true') {
          this.selectedServicesTypes =[]
           this.serviceTypeCbxClick(this.availableServicesTypes[0])
        }
      this.dropzoneOptions.dictFileTooBig = this.translate(
        'NewOrder.Msg.MaxFileSizeError'
      )
      // if (process.env.SHOW_DEBUG_INFO == 'true') {
      const dateFormat = this.$dateFns.format(
        this.calculateInitialDeliveryDate(),
        this.formatOfDate
      )
      const dateParts = dateFormat.split(' ')
      this.deliveryDate = dateParts[0]
      this.deliveryTime = dateParts[1]
      // }
    },
    submitOrder() {
      const queuedFiles = this.$refs.filesUploadDropzone.getQueuedFiles()

      this.isCreatingOrder = true
      const order = {}
      order.selectedSourceLanguages = this.selectedSourceLanguages
      order.selectedTargetLanguages = this.selectedTargetLanguages
      order.selectedServicesTypes = this.selectedServicesTypes
      order.selectedCustomServicesType = this.selectedCustomServicesType
      order.deliveryDate = this.deliveryDate
      order.deliveryTime = this.deliveryTime
      order.files = []
      order.files = queuedFiles.map((x) => ({ name: x.name, size: x.size }))
      this.updateOrder(order)
      if (queuedFiles.length > 0) {
        this.$refs.filesUploadDropzone.processQueue()
      } else {
        this.completedSendingFilesEvent()
      }
    }
  }
}
</script>
