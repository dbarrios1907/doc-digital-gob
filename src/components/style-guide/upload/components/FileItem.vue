<template>
  <li tabindex="0" class="b-list__item select-text" v-if="file">
    <div class="b-item__start">
      {{ file[descriptionProp].split('.').pop() }}
    </div>

    <div class="b-item__body">
      {{ file[descriptionProp] }}
    </div>

    <div class="b-item__bottom">
      <dx-icon right regular> mdi-cloud-download-outline </dx-icon>
      <dx-icon right regular> mdi-trash-can-outline </dx-icon>
    </div>
  </li>
</template>
<script>
import { STATUS } from '../helpers/shared-properties'

export default {
  name: 'FileItem',
  data: () => ({
    thumbnail: null,
  }),
  model: {
    prop: 'file',
    event: 'change',
  },
  props: {
    removeEnabled: {
      type: Boolean,
      default: () => true,
    },
    descriptionProp: {
      type: String,
    },
    file: {
      type: [Object, File],
      default: null,
    },
    timeout: {
      type: Number,
      default: 15000,
    },
    status: {
      type: String,
      default: STATUS.PENDING,
    },
  },
  mounted() {
    this.thumbnail = URL.createObjectURL(this.file)
  },
  beforeUpdate() {
    this.thumbnail = URL.createObjectURL(this.file)
  },
  computed: {
    showProgress() {
      return this.status === STATUS.PENDING || this.status === STATUS.IN_PROGRESS
    },
  },
  methods: {
    isSuccess(status) {
      return status === STATUS.SUCCESS
    },
    onRemove(e, id, status) {
      this.$emit('onRemove', id, status)
    },
  },
}
</script>

<style lang="scss">
.b-list__item {
  display: flex;
  list-style-type: none;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  .b-item__body {
    color: black;
    flex: 1 1 auto;
  }

  .b-item__start {
    background: #cfe1f3;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 100px;
    margin-right: 10px;
  }
}
</style>
